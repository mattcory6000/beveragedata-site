# AI Knowledge Systems for ERP Implementations

## Problem

365WineTrade is a Dynamics 365 Business Central vertical for wine and spirits distributors. Over years of implementations, the team accumulated hundreds of Functional Design Documents (FDDs) describing customizations, integrations, reports, and workflows.

The knowledge was valuable—but effectively unusable.

It lived in legacy SharePoint archives, mostly as Word documents, with inconsistent naming, structure, and metadata. Answering basic questions required manual searching and institutional memory:

- Have we built this workflow before?
- Which customers had custom Sales Invoice layouts?
- Do we already have an FDD for a Tri-Vin form?
- Which customizations could be reused or productized?

The issue wasn’t lack of documentation. It was lack of structure for retrieval, comparison, and reuse.

## My Role

I designed and built the knowledge system end to end.

This included:

- exporting and organizing source documents
- converting Word/ODT files to Markdown
- normalizing folder structure
- extracting metadata from inconsistent inputs
- classifying FDDs by customer, category, ID, and type
- generating reusable indexes
- preparing the corpus for SharePoint and Copilot Studio
- using the system to support delivery and product decisions

I treated the archive as an enterprise knowledge system—not a document cleanup exercise.

## Approach

The core decision was to treat the document corpus as structured data.

Starting from raw SharePoint exports, I built a pipeline that:

- converted documents to Markdown
- imposed a consistent structure
- inferred metadata using multiple signals (filenames, folder paths, FDD IDs, “Prepared for” lines, etc.)

I then added targeted classification for high-value use cases.

For example, custom document reports were identified and grouped across customers, covering Sales Invoices, Purchase Orders, AR documents, and Tri-Vin RDLC forms.

The result was a knowledge layer usable by both humans and AI systems.

## Technology

- Python for extraction, classification, and rendering
- Pandoc for DOCX/ODT → Markdown conversion
- JSON as an intermediate data layer
- Markdown as the canonical output format
- VS Code for development
- SharePoint for enterprise distribution
- Copilot Studio for AI interface
- Azure DevOps for traceability

## Architecture

A five-stage, re-runnable pipeline:

- Ingest
- Convert
- Extract
- Render
- Publish

### 1. Ingest

Collected documents from 17 SharePoint archives (638 files, ~600MB).

### 2. Convert

Converted to Markdown, producing 560 structured files.

### 3. Extract

Python scripts generated structured metadata:

- 559 FDD records (`index_data.json`)
- 82 custom-report records (`report_fdds.json`)

### 4. Render

Generated human- and AI-readable artifacts:

- `INDEX.md` (master catalog)
- `FDD_Custom_Report_Inventory.md`
- Tri-Vin Form A–J coverage matrix
- Azure DevOps traceability links

### 5. Publish

Prepared for SharePoint and Copilot Studio indexing, enabling both manual lookup and agent-based querying.

## Outcome

Converted a fragmented document archive into a reusable knowledge system.

Key outputs:

- 638 source documents processed
- 560 searchable Markdown files
- 559 indexed FDD records
- 15 functional categories
- 82 custom-report FDDs across 11 report types
- Tri-Vin coverage matrix
- Azure DevOps traceability
- ~300-line re-runnable Python pipeline

Practical uses included:

- identifying all prior custom document reports
- linking FDDs to DevOps work items
- answering faceted implementation questions (e.g., Drop Ship, Direct Import)
- locating prior workflow patterns
- evaluating reuse vs rebuild decisions
- informing product roadmap decisions

Example: located a prior sample-order tracking implementation, analyzed its dependencies, and determined reuse vs rebuild for a new customer.

## Strategic Value

This system turned past implementations into usable intelligence.

- Delivery teams: faster answers to “have we built this before?”
- Solution architects: better reuse and design decisions
- Product leadership: visibility into patterns across customizations
- AI initiatives: structured, traceable, retrieval-ready knowledge

The key insight: AI-enabled systems don’t start with chat interfaces—they start with well-structured operational knowledge.