# Multi-State Beverage Tax Compliance Automation

## Problem

A wine and spirits importer ships into dozens of states through several licensed legal entities. Every state requires a monthly gallonage tax report, and no two states want it the same way. Each defines its own product categories, its own ABV thresholds, its own units (gallons, liters, or both), its own file format, and its own submission method. Some accept a spreadsheet, some a CSV over SFTP, some XML, some a fixed-format text file, and some a filled PDF mailed or uploaded to a portal. Several require a separate filing for each licensed entity.

The customer had been generating these reports from a bespoke build on a legacy ERP. That build worked well. The legacy ERP was being retired and replaced with Microsoft Dynamics 365 Business Central, the bespoke reporting could not be ported, and no equivalent existed on the new platform. Without a replacement, monthly filing across all those states would revert to manual assembly: export the data, reclassify every product for every state by hand, and rebuild each state's file or form one at a time.

## My Role

I designed and built the classification and reporting system end to end: the state category research, the classification logic, the data pipeline, the output generators for every format, the PDF handling, and the validation the compliance team used to check output before filing.

## Approach

The central problem was classification. Business Central stored each product's customs tariff code (HTS) and its ABV. State tax categories are expressed in tax terms: table wine at or below 14%, fortified above 14%, sparkling, distilled spirits, and many state-specific variants. A customs code is not a tax category, and no direct mapping between the two existed.

I built a two-stage pipeline:

1. Map each tariff code to a generic internal type: still wine, sparkling, fortified by ABV band, vermouth, cider, and spirits by spirit type.
2. Apply each state's own rules, combining the internal type and the ABV to produce the exact category that state requires.

Most states use a standard split at 14%. Many do not, and each exception was specified on its own: different ABV breakpoints, sparkling separated out, granular spirit subtypes, distinct vermouth and cider categories, and mixed liter and gallon columns in a single form. This is the part generic data tooling cannot do. Getting it right requires knowing how beverage alcohol is actually taxed, jurisdiction by jurisdiction.

State requirements also drift. Several states had changed their forms or moved to electronic-only filing since the legacy process was built, so the old process could not be trusted as current. I used AI research tools to establish each state's current form, format, and submission method, then verified the findings against the state agencies.

The classification also caught problems in the source data: 160 products whose recorded ABV contradicted their tariff classification, for example a still-wine tariff code on a product recorded above the still-wine threshold. A wrong classification produces a wrong filing, so these were flagged for the compliance team to resolve before submission.

### Generating submittable PDFs

Structured formats are the easy case. A PDF form is the worst manual case: a filer who already has the right tabular data still has to transcribe it into form fields, sometimes cell by cell, every month.

Three states in scope require a filled PDF. For the two that publish a fillable PDF form, the pipeline maps the classified, state-correct data straight into the form fields and outputs a submission-ready PDF. One state, Wyoming, published only a flat static PDF with no fillable fields. I rebuilt that form as a fillable PDF with mapped fields, so the same pipeline could populate it and produce a submittable file. The result is that the PDF states automate exactly like the spreadsheet states; no one retypes anything.

The hardest single filing required per-entity disaggregation across multiple license numbers and a form that mixes liters for spirits with gallons for wine in the same schedule. The pipeline produced it correctly for each entity.

## Technology

- Microsoft Dynamics 365 Business Central: ERP and source of transaction and product data
- Microsoft Fabric: Spark notebooks running the production pipeline
- Python and pandas: classification engine and report generation
- PDF tooling: filling published fillable forms, and converting a static PDF into a fillable form
- Git and VS Code

## Architecture

A re-runnable pipeline:

1. Extract. Pull transaction and product data from Business Central through a Configuration Package.
2. Classify. Map tariff code and ABV to each state's category through the two-stage logic.
3. Generate. Produce each state's report in its required format: XLSX, CSV, XML, fixed-format TXT, or filled PDF.
4. Validate. The compliance team reviewed output against known-good prior filings before submitting.

A native Business Central extension was also built as a proof of concept for one state: an AL app with an RDLC layout that generated that state's report inside the ERP, without the external pipeline. The production system ran on Fabric; the extension showed the same output could be produced natively if that path were preferred later.

## Outcome

- 41 state reports in production, generated from Business Central data.
- The customer's compliance team verified the output, then confirmed it through accepted state submissions.
- About 4,000 active products classified, producing 193,751 item-by-state category assignments.
- 160 source-data contradictions surfaced and routed for correction before they could become wrong filings.
- Output in every format the states require: XLSX, CSV, XML, fixed-format TXT, and filled PDF.

The system was in production when my engagement ended.

## Strategic Value

The hard part of compliance automation is not moving data between systems. It is classification: knowing how each jurisdiction taxes beverage alcohol and encoding that correctly, product by product and state by state. That is domain knowledge, not generic integration, and it is where most off-the-shelf approaches fall short.

The same method scales down. A smaller distributor filing in a handful of states has the identical structural problem: ERP data that does not match the categories a state asks for, and forms that demand manual transcription. The scope is smaller; the work underneath is the same. Compliance automation does not start with the output file. It starts with classifying every product correctly for every jurisdiction.