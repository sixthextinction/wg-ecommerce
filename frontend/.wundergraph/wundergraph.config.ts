import {
	Application,
	authProviders,
	configureWunderGraphApplication,
	cors,
	introspect,
	templates,
} from '@wundergraph/sdk';
import { NextJsTemplate } from '@wundergraph/nextjs/dist/template';
import server from './wundergraph.server';
import operations from './wundergraph.operations';

const spaceX = introspect.graphql({
	apiNamespace: 'spacex',
	url: 'https://api.spacex.land/graphql/',
});

const strapi = introspect.graphql({
	apiNamespace: 'backend',
	url: 'http://localhost:1337/graphql',
});

const myApplication = new Application({
	name: 'app',
	apis: [strapi],
});

// configureWunderGraph emits the configuration
configureWunderGraphApplication({
	application: myApplication,
	server,
	operations,
	codeGenerators: [
		{
			templates: [...templates.typescript.all, templates.typescript.operations, templates.typescript.linkBuilder],
		},
		{
			templates: [new NextJsTemplate()],
			path: '../components/generated',
		},
	],
	cors: {
		...cors.allowAll,
		allowedOrigins: process.env.NODE_ENV === 'production' ? ['http://localhost:3000'] : ['http://localhost:3000'],
	},
	authentication: {
		cookieBased: {
			providers: [authProviders.demo()],
			authorizedRedirectUris: ['http://localhost:3000'],
		},
	},
	security: {
		enableGraphQLEndpoint: process.env.NODE_ENV !== 'production',
		// enableGraphQLEndpoint: true,
	},
});
