# n8n-nodes-kynth

This is an n8n community node for [Kynth Core](https://api.kynth.studio) — one AI engine exposing 39 finished-job endpoints: documents to schema-valid JSON, field extraction, triage, research, moderation, and agent memory. Every call is a task with a task-named price, drawn from one credit wallet; failed calls never burn credits.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation) · [Operations](#operations) · [Credentials](#credentials) · [Compatibility](#compatibility) · [Usage](#usage) · [Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation. The package name is:

```
n8n-nodes-kynth
```

## Operations

The **Kynth Core** node exposes each API endpoint as an operation. Highlights:

- **Document parse** — any invoice, receipt, EOB, ERA, or COI (PDF or image) into structured, validated JSON.
- **Field extraction** — pull a field set you define out of any block of text; typed values with confidence.
- **Triage** — classify and prioritize inbound items against your own labels.
- **Research** — grounded answers over documents you supply.
- **Moderation** — policy checks on user-generated content.
- **Agent memory** — durable key-value memory for agent workflows.

The full, current operation list is generated from the live API catalog — see [api.kynth.studio/docs](https://api.kynth.studio/docs) for every endpoint, its schema, and its credit price. The node is also flagged `usableAsTool`, so n8n AI Agents can call any operation as a tool.

## Credentials

1. Create an account at [api.kynth.studio/dashboard](https://api.kynth.studio/dashboard) — every account includes 500 free credits per month, no card required.
2. Mint an API key (`ksk_live_…`).
3. In n8n, create a **Kynth Core API** credential and paste the key.

The credential authenticates as a bearer token and is verified against `/v1/account` when you save it.

## Compatibility

Requires n8n version 1.0 or later (`n8nNodesApiVersion` 1). Tested against recent n8n releases; the node has no runtime dependencies beyond `n8n-workflow`.

## Usage

A minimal flow: **Webhook → Kynth Core (Document parse) → IF → your system.**

1. Feed the node a PDF/image URL or raw text, depending on the operation.
2. Pick the operation and, where the operation takes a schema or field list, define the fields you want back.
3. Downstream nodes receive schema-valid JSON — no free-text parsing.

Failed calls return an error object and are not billed, so retry loops are safe.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Kynth Core API docs](https://api.kynth.studio/docs)
- [Endpoint catalog + pricing](https://api.kynth.studio)

## Version history

- **0.1.1** — README + n8n verification submission. No functional changes.
- **0.1.0** — initial release: full endpoint catalog as operations, bearer credential, AI-tool support.
