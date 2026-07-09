// Kynth Core API credentials for n8n — one bearer key (ksk_live_…) opens all
// 39 endpoints. Mint keys at https://api.kynth.studio/dashboard; every account
// gets 500 free credits a month, no card.

import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class KynthApi implements ICredentialType {
	name = 'kynthApi';

	displayName = 'Kynth Core API';

	documentationUrl = 'https://api.kynth.studio/docs';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description:
				'Your Kynth Core key (ksk_live_…). Mint one at api.kynth.studio/dashboard — 500 free credits every month, no card.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.kynth.studio',
			url: '/v1/account',
		},
	};
}
