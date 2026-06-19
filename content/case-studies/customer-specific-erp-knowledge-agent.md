# Customer-Specific ERP Knowledge Agent

## Problem

A wine importer, roughly $50M in revenue and 200 people, self-distributing across several markets, was implementing a vertical ERP built on Microsoft Business Central. The system was capable, but the knowledge around it was thin and scattered. Base Business Central behavior lived in Microsoft's documentation. The wine vertical's behavior was documented inconsistently, and two of its modules were not documented at all. The customer's own customizations lived only in functional design documents written during the build. The third-party extensions each had their own separate guides.

The usual way to support a customer in this situation is to train a few internal power users during implementation and hope they stay, backed by paid support tickets to the partner. That model fails the moment a trained user leaves or is unavailable, and it leaves everyone else guessing. Worse, a user with a question mid-task often cannot tell which layer the answer lives in: base Business Central, the wine vertical, their own customizations, or a third-party extension. They only know they are stuck.

## My Role

I built the system end to end: the documentation underneath it, the knowledge architecture, the agent itself, the deployment, and the validation. Sole architect and builder.

## Approach

The agent was the smaller half of the work. An ERP support agent is only as good as the knowledge it retrieves from, and most of that knowledge did not yet exist in a form any agent could use. So the work ran in two phases: make the knowledge trustworthy and structured, then build the agent on top of it.

The groundwork:

- Produced original technical documentation for all 9 vertical extensions, for the first time. 2 of them had never been documented at all.
- Rewrote or created 11 user guides, hardening every one against the actual AL source code so the documentation matched what the system did, not what it was once intended to do.
- Synthesized 11 internal training sessions, about 2 hours each, to capture the reasoning behind workflows that the written guides had never recorded.
- Converted everything to Markdown in Microsoft's documentation style, a format that reads cleanly for people and retrieves cleanly for an agent.

Only then did I build the agent, and I built it to answer across every layer at once.

## Technology

- Microsoft Business Central, the underlying ERP platform.
- Copilot Studio, for retrieval and the agent itself.
- Microsoft 365, the surface the agent was deployed through.
- The Microsoft Learn MCP connector, supplying base Business Central knowledge directly from Microsoft's own documentation.
- Claude Code, for the documentation pipeline: extraction, hardening against AL, and conversion.
- Markdown in Microsoft documentation style, as the canonical, retrieval-ready format.

## Architecture

The agent drew on four distinct tiers of knowledge, unified behind a single question box.

- Base Business Central came live from the Microsoft Learn MCP connector, so the agent reflected current platform behavior without my having to maintain it.
- The wine vertical came from embeddings of the hardened user guides, the new technical documentation, and the synthesized training transcripts.
- The customer's own customizations came from their 67 functional design documents, converted to Markdown, hardened against the AL codebase, and scrubbed of anything sensitive.
- The third-party extensions came from the documentation for the 5 ISV products the customer ran.

The design goal was that a user should never have to know which tier their question belonged to. A real example: "How do I update quantities on a Direct-Import order such that the SO, the PO, and the Purchase Consolidation remain synced?" Answering that correctly means pulling from a vertical feature (Purchase Consolidation) and base Business Central behavior (Create Purchase Documents) at the same time, against a flow specific to this customer. No static document anywhere addressed it. The agent did, in one place.

## Outcome

The agent was built, deployed internally, and validated three independent ways:

- In my own daily work, it was consistently the fastest route to a correct answer.
- A senior consultant with deep expertise in the vertical tested it the same way, following its instructions through real workflows and confirming the steps matched the system and produced the right result.
- At the CEO's request, the executive responsible for the product's intellectual property stress-tested it extensively and could not get it to surface anything sensitive or proprietary.

What it produced along the way:

- Technical documentation for 9 extensions, 2 of which had never been documented.
- 11 user guides, rewritten or newly created, all verified against source code.
- 67 customer customizations made queryable in plain language.
- 4 knowledge tiers answerable from one interface.

Customer beta was the next planned step.

## Strategic Value

The lesson is the one that holds for most enterprise AI: the agent is the easy part. The value came from making the knowledge underneath it trustworthy and structured, and almost none of that work looks like AI. It looks like reading source code, reconciling documentation against it, and capturing the reasoning that lived only in people's heads.

What made this agent worth using was not that it could answer questions about the product. Anyone can point a chatbot at a user guide. It was that it answered questions about this customer's specific environment, their customizations, their extensions, and their workflows, alongside the generic product and the platform underneath, without the user needing to know where one ended and the next began.

I have since repeated the pattern for a second wine-industry ERP that had no documentation at all, using lower-level tools entirely outside the Microsoft stack, at a fraction of the running cost.