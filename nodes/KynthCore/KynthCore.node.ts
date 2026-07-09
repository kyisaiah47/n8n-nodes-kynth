// Kynth Core node for n8n — declarative (routing-based). The full operation
// catalog and every per-operation field live in description.ts, which is
// GENERATED from the API's own endpoint catalog (apps/api scripts/
// generate-clients.ts), so the node can never drift from the live API.

import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { kynthNodeDescription } from './description';

export class KynthCore implements INodeType {
	description: INodeTypeDescription = kynthNodeDescription;
}
