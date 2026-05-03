# Artifact Engine for ERP Implementations

## Problem
ERP implementations generate large volumes of information, but most of it remains trapped in meeting recordings, scattered documents, and consultant memory.

Critical delivery artifacts—Fit/Gap analyses, Functional Design Documents (FDDs), test scripts, and training materials—are typically created through manual interpretation of that information. This process is time-consuming, inconsistent, and difficult to scale across projects.

The issue is not a lack of information. It is that implementation knowledge is not structured in a way that allows it to be reused, analyzed, or systematically converted into delivery outputs.

## My Role
I designed and built an AI-assisted artifact pipeline that spans the ERP implementation lifecycle.

This included:

- defining the end-to-end workflow from discovery through testing
- designing the underlying content structure and folder architecture
- implementing local transcription workflows using Whisper
- developing prompt-driven pipelines for artifact generation
- structuring outputs for compatibility with Word-based delivery standards
- introducing confidence and completeness scoring for generated artifacts

This was a hands-on architecture and implementation effort. I treated implementation artifacts as a system, not as isolated deliverables.

## Approach
The core design decision was to treat ERP delivery artifacts as a structured transformation pipeline.

The system begins with source inputs:

- Statements of Work (SOWs)
- recorded discovery and design sessions
- legacy project documents
- existing FDDs and Azure DevOps work items

These inputs are normalized into a machine-readable corpus using Markdown, consistent folder structures, and lightweight metadata.

From that foundation, the pipeline generates artifacts across the implementation lifecycle:

- Fit/Gap drafts derived from SOWs and analysis transcripts
- Functional Design Documents generated from design conversations and supporting materials
- DOCX-formatted deliverables aligned to internal templates
- test scripts and training materials derived from finalized FDDs and work items

The goal was not to eliminate human review. The goal was to move teams from drafting to validation.

## Technology
The solution used a pragmatic, local-first toolchain:

- Whisper (local) for transcription of recorded Teams meetings
- Python scripts for orchestration and preprocessing
- Markdown as the canonical intermediate format
- Pandoc for Markdown → DOCX conversion
- VS Code for development and execution
- Claude Code and LLM-based prompting for artifact generation
- Azure DevOps artifacts as structured inputs for downstream outputs

The system avoided unnecessary platform complexity in favor of transparency, portability, and repeatability.

## Architecture
The architecture follows a staged, reusable pipeline:

### Ingest

Recorded Teams meetings, SOWs, and project documents are collected as source inputs. In the Foundation Wellness implementation, this included roughly 93 hours of meeting recordings transcribed locally using Whisper.

### Normalize

Transcripts and documents are converted to Markdown and placed into a structured folder system designed for machine readability.

### Index

Transcripts and documents are organized by topic, phase, and artifact type so they can be searched and referenced by downstream prompts.

### Generate

The agent drafts Fit/Gap materials from transcripts and SOW context, then drafts Functional Design Documents from design conversations and supporting materials. In this implementation, it drafted roughly 33 FDDs end to end and attached confidence and completeness scores to each artifact.

### Transform

Markdown artifacts are converted to DOCX using Pandoc and aligned to internal delivery templates.

### Extend

Finalized FDDs and Azure DevOps work items become source material for test scripts and training materials.

### Review

Consultants validate and refine outputs rather than drafting from scratch.

## Outcome
The system converted unstructured project inputs into a repeatable delivery engine.

Concrete results included:

- ~93 hours of meeting recordings transcribed and indexed
- ~33 Functional Design Documents generated end-to-end
- full Fit/Gap drafts generated from discovery materials
- downstream generation of test scripts and training artifacts

The agent also surfaced opportunities to use configuration instead of customization. In several cases, these aligned with conclusions independently reached by the solution architect, reinforcing the validity of the approach.

The practical impact was a shift in how work was performed: from manual drafting to structured review.

## Strategic Value
This project demonstrates how ERP delivery can be systematized using AI—not by replacing consultants, but by restructuring the flow of information.

For delivery teams, it reduces the time required to produce core artifacts.

For solution architects, it provides a structured way to analyze implementation patterns and identify reuse opportunities.

For organizations, it creates a foundation for consistent, scalable delivery across projects.

The key insight is that ERP implementations already contain the information needed to produce high-quality artifacts. The value comes from structuring that information and building a system that can transform it into usable outputs.