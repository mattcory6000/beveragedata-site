# Supplier Price Sheet Normalization Engine

## Problem

Wine and spirits distributors rely on supplier FOB pricing sheets to manage purchasing, pricing, and sales. These sheets arrive in inconsistent formats—different column names, merged cells, metadata in arbitrary rows, and varying structures across suppliers.

There is no standard.

As a result, distributor teams spend significant time manually cleaning, interpreting, and reformatting supplier data before it can be used. This slows down pricing updates, limits visibility across suppliers, and introduces errors into downstream systems.

The issue is not data availability. It is that supplier data is not structured for reuse, comparison, or system integration.

## My Role

I designed and built a parsing and normalization engine to convert supplier pricing sheets into a standardized, machine-readable format.

This included:

- defining the canonical output schema
- designing parser architecture for supplier-specific formats
- implementing header detection and data extraction heuristics
- normalizing pricing data, including case-cost calculations
- structuring outputs for downstream ERP and operational use

The system was designed as a reusable foundation rather than a one-off data cleanup tool.

## Approach

The core design decision was to treat supplier pricing sheets as a repeatable parsing problem rather than a manual data task.

Each supplier format is handled by a dedicated parser that:

- detects the correct header row despite inconsistent formatting
- extracts relevant fields such as product, vintage, pack size, and pricing
- normalizes values into a consistent schema
- handles missing or ambiguous data using defined fallback rules

All parsers output to a single canonical structure, allowing heterogeneous inputs to be combined into a unified dataset.
The system prioritizes practical reliability over theoretical completeness. When ambiguity cannot be resolved, data is preserved rather than over-interpreted.

### LLM-Assisted Transformation Model

A key design decision was how to use AI in the parsing process.

Rather than having an LLM directly transform supplier data—which would be opaque, difficult to validate, and inconsistent across runs—I used LLMs to generate the transformation logic itself.

In practice, this means:

- the LLM drafts Python parsing scripts for new supplier formats
- those scripts are reviewed, refined, and then executed deterministically
- all transformations are performed by explicit, inspectable code

This approach separates reasoning from execution.

The LLM handles interpretation of messy, inconsistent inputs and proposes a structured solution. The Python layer enforces consistency, repeatability, and auditability.

The result is a system that scales far beyond manual parsing, while remaining transparent and controllable in a way that direct AI transformation cannot achieve.

## Technology

The solution uses a lightweight Python-based stack:

- Python 3.12
- Pandas for data transformation
- OpenPyXL for Excel parsing
- pdfplumber for PDF extraction
- CSV/Markdown outputs for interoperability

The implementation is intentionally simple and transparent, allowing rapid iteration as new supplier formats are introduced.

## Architecture

The system follows a modular parsing architecture:

### Ingest

Supplier pricing sheets are loaded from multiple formats, including Excel, CSV, and PDF.

### Detect

The parser identifies the true header row by scanning for keywords such as "Item", "Description", "Vintage", or "Pack".

### Extract

Relevant fields are extracted from the source file, including product details, pack sizes, and pricing values.

### Normalize

Data is mapped into a canonical schema. This includes:

- splitting producer and product names where possible
- converting bottle pricing into case pricing using pack size
- standardizing text and numeric formats

### Aggregate

Parsed outputs from multiple suppliers are combined into a single dataset for downstream use.

## Outcome

The system converts inconsistent supplier pricing sheets into a unified dataset suitable for operational use.

Concrete results include:

- support for multiple supplier-specific formats
- automated header detection across inconsistent layouts
- normalized pricing data ready for ERP import
- a single aggregated dataset combining all supplier inputs

The practical impact is a reduction in manual data cleanup and a faster path from supplier input to usable pricing data.

## Strategic Value

This project establishes a foundation for a broader pricing data platform.

With a standardized schema in place, supplier data can be reused across multiple workflows, including purchasing, sales, reporting, and customer-facing materials.

The system is now evolving into an interactive web application where users can upload pricing sheets and iteratively work with an AI model to generate and refine parsers in natural language. This shifts the model from static parsing to collaborative data normalization.

For distributors, this enables faster pricing updates and structured data ready for ERP systems.

For suppliers, it enables consistent, shareable pricing formats that can be delivered digitally or as standardized documents.

The longer-term opportunity is a network effect: as more supplier formats are parsed and standardized, the system becomes more capable, reducing onboarding effort and increasing the value of the shared data model.

The key insight is that fragmented supplier data is not just a cleanup problem. It is a structural problem that can be solved with a consistent schema, a modular parsing system, and a workflow that allows continuous improvement.