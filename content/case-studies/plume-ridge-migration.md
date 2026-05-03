---
date: 2026-05-03
author: Matt Cory
wc_project: P3xxx
client: Plume Ridge
tags: [plume-ridge, business-central, 365winetrade, config-pack, python, etl, migration, case-study]
status: complete
---
# Enterprise Data Migration

## Problem

Plume Ridge was migrating from a long-customized on-premises Dynamics NAV environment to Dynamics 365 Business Central with 365WineTrade.

The challenge was not raw data volume. The challenge was that NAV had been customized over many years to represent wine-and-spirits business concepts that Business Central and 365WineTrade model differently.

The most important example was the NAV Vendor table. In the source system, one table represented three different kinds of entities:

- VEND-IMP records were actual trading vendors
- WHSE records were physical pickup warehouses
- MFG records were manufacturers, wineries, or estates

In the target system, those concepts belonged in separate places: Business Central Vendor, 365WineTrade Vendor Pickup Address, Producer, and Brand.

The relationships could not be migrated by simply filtering the old Vendor table by type. Some source records were stale, and the only reliable relationship between a buying vendor and a pickup warehouse lived on the Item card.

Other complications included:

- roughly 110 mapped fields across Vendor, Item, Customer, Item Unit of Measure, Sales Header, and Purchase Header
- a mix of standard NAV fields, custom fields, and new 365WineTrade fields
- operational metadata whose meaning had changed between NAV and Business Central
- free-text values with accented characters that caused import failures through Configuration Packages
- a fixed cutover timeline that required repeatable, low-risk data loads

## My Role

I was the sole ETL architect and implementer.

I owned the transformation logic, Python pipeline code, Configuration Package outputs, validation strategy, and coordination with the functional consultant on field semantics.

The import method was Microsoft Business Central Configuration Packages. My job was to produce clean, import-ready files that would not fail during loading and would not create silently wrong target records.

## Approach

I built independent Python pipelines for each major target structure, with a field-mapping and validation pass feeding all of them.

The first step was a field inventory and gap analysis. I compared the source NAV field lists for Vendor, Item, and Customer against the functional mapping specification. This identified which fields were mapped, which were new in the target system, and which custom NAV fields required explicit decisions.

For trading vendors, the pipeline filtered source Vendor records to actual purchasing vendors, projected them into the Business Central Vendor configuration package format, sanitized text, sorted records, and emitted tab-delimited output.

For pickup addresses, I rejected the naive approach of filtering warehouse-type Vendor records. That produced the wrong set of records because the source type code did not reliably reflect operational reality.

Instead, I derived pickup addresses from the Item card. Each item carried both a replenishment vendor and a default pickup location. I extracted those pairs across active items, deduplicated them, treated the result as the authoritative list of pickup addresses, then joined back to the Vendor table for address details.

For producers and brands, the pipeline filtered manufacturer-type Vendor records, projected them into 365WineTrade Producer records, and generated paired Brand records because Plume Ridge operated with a one-to-one producer-to-brand structure.

Every pipeline was designed to be rerunnable. Given the same source exports, it produced the same output files. That mattered for dress rehearsal, cutover, and post-cutover troubleshooting.

### LLM-Assisted Transformation Model

A key design decision was how to use AI in the migration.

Rather than using an LLM to directly transform data, I used it to generate transformation logic.

In practice:

- the LLM drafted Python transformation scripts based on field mappings and source dictionaries
- the scripts were reviewed, refined, and executed deterministically
- all transformations were performed by explicit, inspectable code

This separated reasoning from execution.

The LLM helped interpret ambiguous mappings, reconcile inconsistent source semantics, and propose transformation logic. The Python pipelines enforced repeatability, validation, and auditability.

## Technology

The solution used a lightweight ETL stack:

- Python 3
- pandas
- tab-delimited NAV exports
- Business Central Configuration Package output files
- source field dictionaries
- functional mapping specifications
- Claude as a structured reasoning layer for mapping and transformation logic

The pipeline did not write directly to the Business Central database or API. It produced files for Microsoft Configuration Packages, keeping the import surface inside standard Business Central tooling.

## Architecture

The migration architecture followed a staged transformation pattern.

Source inputs:

- NAV Vendor export
- NAV Item export
- NAV Customer export
- source field dictionaries
- functional mapping specification

Processing stages:

- field inventory and mapping validation
- vendor-type separation
- item-card-derived pickup address inference
- producer and brand generation
- text sanitization
- dependency-ordered output generation
- Configuration Package import

Target outputs:

- Business Central Vendor records
- 365WineTrade Vendor Pickup Address records
- 365WineTrade Producer records
- 365WineTrade Brand records
- Item and Customer configuration package files

Several validation patterns were built into the process.

Pickup addresses were validated by checking that every item-referenced pickup location could be resolved to a source Vendor record.

Custom source fields were reviewed through an exceptions report so unmapped customizations were not silently ignored.

Producer and Brand records were generated in dependency order so downstream Item imports could reference valid Brand records.

Coverage checks compared expected target fields against populated output columns so missing fields surfaced before import.

Text sanitization converted accented characters into ASCII-safe equivalents so Configuration Package imports would not fail on encoded payloads.

## Outcome

Plume Ridge went live on Business Central and 365WineTrade in late December 2025.

The pipelines populated roughly 90 percent of the mapped fields automatically. The remaining fields were handled through Configuration Package overlays or post-go-live cleanup.

The pickup-address pipeline produced 67 correctly linked Vendor Pickup Address records derived from actual Item-card relationships rather than unreliable source type codes.

The producer pipeline generated the full Producer set with paired Brand records in dependency order.

The pipelines were rerun against fresh NAV exports during dress rehearsal and cutover. When the input was unchanged, the output was unchanged.

That repeatability mattered. Post-go-live issues that surfaced were largely not migration-data issues, which is the desired outcome for a cutover: if something breaks after go-live, the fault tree should not point first to the data load.

## Strategic Value

The reusable artifact was not just the Plume Ridge pipeline. It was the migration pattern.

The key pattern was to treat NAV's overloaded Vendor table as a discriminated union, then derive real business relationships from the surviving foreign keys rather than trusting source labels that no longer represented operational truth.

This matters because many wine-and-spirits NAV environments used overloaded master tables to represent concepts that 365WineTrade now models explicitly.

The same approach can be reused in future migrations:

- identify overloaded source structures
- separate business concepts into first-class target tables
- derive relationships from operational foreign keys
- generate dependency-ordered configuration package outputs
- validate custom fields as audit candidates rather than silently dropping them
- use LLMs to accelerate transformation design while keeping execution deterministic

The larger lesson is that migration quality depends less on moving rows than on preserving business meaning. A successful migration translates the operating model, not just the database.