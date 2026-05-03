# Stand-Alone Distributor ERP

## Problem
A wine distributor needed a business system tailored to its actual operations rather than a generic package that required heavy process compromise.

## Role
System architect and developer responsible for the overall application design and business workflow implementation.

## Approach
Designed and built a custom ERP platform around distributor-specific workflows, inventory handling, order processes, and operational reporting requirements.

## Technology
Custom application stack, relational data modeling, reporting workflows, and domain-specific business logic for beverage alcohol operations.

## Architecture
The system centered on operational modules aligned to real distributor workflows, with reporting and business rules embedded close to transactional processes. The design emphasized longevity and day-to-day usability.

## Outcome
The ERP has remained in production for more than a decade, demonstrating the value of tightly aligned domain architecture and durable implementation decisions.

# Stand-Alone Distributor ERP

## Problem

In the mid-2000s, small and mid-sized wine distributors had limited software options. Available systems could handle basic back-office transactions, but they did not fit how distributor operations actually worked.

The biggest failure was order entry. Remote sales reps could not enter orders directly from the field without remote-desktopping into an office machine. They had limited visibility into customers, inventory, pricing, holds, backorders, and promotions while they were actively selling.

The systems also failed on distributor-specific requirements:

- item-level landed cost
- supplier depletion allowances and billbacks
- contextual promotional pricing
- customer- and channel-specific holds
- operational reporting across sales, purchasing, inventory, and margin

The issue wasn’t missing features. It was that the systems didn’t model how distributors actually operate.

## My Role

I designed, built, deployed, and maintained the system.

At the time, I was a co-founder of a small fine-wine distributor. I owned the architecture, data model, workflow design, user experience, reporting structure, and deployment approach.

The system was built for our South Carolina operation and deployed to our Alabama branch as well.

Office staff used the FileMaker Pro client. Sales reps used a browser-based interface through FileMaker’s web publishing engine, effectively giving the company a web-based order-entry system in 2006.

## Approach

The system was built from distributor workflows outward.

Instead of adapting a generic ERP model, I modeled the actual work: reps building orders, office staff managing inventory, buyers receiving product, and managers reviewing margin.

This led to a system organized around the operational objects the business used every day:

- invoices and line items
- products, customers, vendors, producers, and salespeople
- purchase orders and shipments
- holds, backorders, and allocations
- pricing programs and depletion allowances

The goal was simple: eliminate the gap between how the business operates and how the system represents it.

## Technology

Built in FileMaker and deployed on FileMaker Server.

The system included:

- 30 base tables, 60 table occurrences, 54 relationships
- 205 scripts (1,661 steps)
- 211 layouts, 29 value lists, 30 custom menus
- 9 privilege sets

It also integrated with related FileMaker files for multi-entity support, POS workflows, and document generation, functioning as a distributed business system rather than a single database.

## Architecture

The architecture was organized around distributor workflows rather than software modules.

The system’s center of gravity was the invoice line-item table. Nearly all operational logic flowed through it: order entry, pricing, promotions, margin calculation, sample tracking, and supplier billbacks. This allowed sales activity to act as the unifying layer across workflows.

The product model was unusually deep, with over 10,000 records and more than 200 fields. In wine distribution, product data drives pricing, inventory, reporting, and sales materials, so the system treated it as a primary operational object rather than a reference table.

The data model reflected industry-specific distinctions. Vendors (who the distributor pays) were separate from producers (the winery or brand), allowing accurate supplier relationships and reporting.

Pricing logic was embedded directly in relationships. Promotional eligibility was resolved through multi-condition joins (product, date range, price threshold), allowing the system to determine applicable deals through the data model rather than procedural code.

Inventory was modeled as conditional availability. Instead of asking whether stock existed, the system evaluated whether it was available for a given customer, at a given time, under constraints such as holds, allocations, and open commitments.

Purchasing and receiving were tied to item-level landed cost. Freight, duty, and related costs were allocated directly to inventory, enabling accurate bottle-level margin analysis.

Reporting was partially embedded in the schema through calculated and summary fields, trading flexibility for speed and making the system responsive in day-to-day use.

The system supported multiple interfaces over the same data model:

- full client interface for office staff
- browser-based interface for field reps
- mobile-oriented layouts over time

Each interface reflected the needs of its users while operating on shared operational data.

## Outcome

The system was deployed in production and became the operating system for the business.

It supported sales order entry, purchasing, inventory visibility, landed cost, pricing, promotional programs, supplier billbacks, and operational reporting.

The most important outcome is longevity. The system is still running roughly twenty years after it was first built.

That durability came from a data model and workflow structure that matched the business closely enough to remain useful through years of operational change.

Former colleagues who later started their own distributors have asked about licensing it or building similar systems, indicating that the architecture captured real distributor needs beyond a single company.

## Strategic Value

This system lasted because the architecture matched the operating reality of a wine distributor.

- product data is complex and central
- inventory availability is conditional
- pricing is contextual
- supplier funding drives margin
- landed cost matters at the item level
- field and office users require different interfaces on the same data

The technology is dated, but the model holds. The schema and workflow design translate directly to modern architectures.

The lesson is straightforward: durable ERP systems are not built by adding features. They are built by aligning data models and workflows with how the business actually operates.