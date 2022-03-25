'use strict';
/* tslint:disable */
/* eslint-disable */
/**
 * Copyright (c) 2022-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 *
 * Okta API
 * Allows customers to easily access the Okta API
 *
 * OpenAPI spec version: 2.10.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticatorApi = exports.AuthenticatorApiFactory = exports.AuthenticatorApiFp = exports.AuthenticatorApiRequestParamCreator = void 0;
// Some imports not used depending on template conditions
// @ts-ignore
const base_1 = require("../base");
const models_1 = require("../models");
const oauth_1 = require("../../oauth");
const http_1 = require("../../http");
const config_loader_1 = require("../../config-loader");
const default_request_executor_1 = require("../../default-request-executor");
const model_factory_1 = require("../../model-factory");
const collection_1 = require("../../collection");
const os = require('os');
const packageJson = require('../../../package.json');
const DEFAULT_USER_AGENT = `${packageJson.name}/${packageJson.version} node/${process.versions.node} ${os.platform()}/${os.release()}`;
const repoUrl = 'https://github.com/okta/okta-sdk-nodejs';
/**
 * AuthenticatorApi - request parameter creator
 * @export
 */
const AuthenticatorApiRequestParamCreator = function (configuration) {
    const configLoader = new config_loader_1.ConfigLoader();
    const clientConfig = Object.assign({}, configuration);
    configLoader.applyDefaults();
    configLoader.apply({
        client: clientConfig || {}
    });
    const parsedConfig = configLoader.config;
    const requestExecutor = clientConfig.requestExecutor || new default_request_executor_1.DefaultRequestExecutor();
    const errors = [];
    if (!parsedConfig.client.orgUrl) {
        errors.push('Okta Org URL not provided');
    }
    if (!parsedConfig.client.token && parsedConfig.client.authorizationMode !== 'PrivateKey') {
        errors.push('Okta API token not provided');
    }
    if (parsedConfig.client.authorizationMode === 'PrivateKey') {
        if (!parsedConfig.client.clientId) {
            errors.push('Okta Client ID not provided');
        }
        if (!parsedConfig.client.scopes) {
            errors.push('Scopes not provided');
        }
        if (!parsedConfig.client.privateKey) {
            errors.push('Private Key not provided');
        }
    }
    else if (parsedConfig.client.authorizationMode !== 'SSWS') {
        errors.push('Unknown Authorization Mode');
    }
    if (errors.length) {
        throw new Error(`Found ${errors.length} errors:\n${errors.join('\n')}\nSee ${repoUrl} for usage.`);
    }
    const authorizationMode = parsedConfig.client.authorizationMode;
    const baseUrl = parsedConfig.client.orgUrl.replace(/\/$/, '');
    const apiToken = parsedConfig.client.token;
    let clientId;
    let scopes;
    let privateKey;
    let oauth;
    if (authorizationMode === 'PrivateKey') {
        clientId = parsedConfig.client.clientId;
        scopes = parsedConfig.client.scopes.split(' ');
        privateKey = parsedConfig.client.privateKey;
        oauth = new oauth_1.OAuth(this);
    }
    const http = new http_1.Http({
        cacheStore: clientConfig.cacheStore,
        cacheMiddleware: clientConfig.cacheMiddleware,
        defaultCacheMiddlewareResponseBufferSize: clientConfig.defaultCacheMiddlewareResponseBufferSize,
        requestExecutor: requestExecutor,
        oauth: oauth
    });
    if (authorizationMode === 'SSWS') {
        http.defaultHeaders.Authorization = `SSWS ${apiToken}`;
    }
    http.defaultHeaders['User-Agent'] = parsedConfig.client.userAgent ? parsedConfig.client.userAgent + ' ' + DEFAULT_USER_AGENT : DEFAULT_USER_AGENT;
    return {
        http,
        /**
          * Activates an authenticator by `authenticatorId`.
          * @summary Activate Authenticator
          * @param {string} authenticatorId
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
        activateAuthenticator: (authenticatorId, options = {}) => {
            // verify required parameter 'authenticatorId' is not null or undefined
            if (authenticatorId === null || authenticatorId === undefined) {
                throw new base_1.RequiredError('authenticatorId', 'Required parameter authenticatorId was null or undefined when calling activateAuthenticator.');
            }
            const localVarPath = `/api/v1/authenticators/{authenticatorId}/lifecycle/activate`
                .replace(`{${"authenticatorId"}}`, encodeURIComponent(String(authenticatorId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication api_token required
            if (configuration && configuration.apiToken) {
                const localVarApiKeyValue = typeof configuration.apiToken === 'function'
                    ? configuration.apiToken("Authorization")
                    : configuration.apiToken;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken("oauth2", ["okta.apps.read", "okta.apps.manage", "okta.authenticators.read", "okta.authenticators.manage", "okta.authorizationServers.read", "okta.authorizationServers.manage", "okta.brands.read", "okta.brands.manage", "okta.captchas.manage", "okta.captchas.read", "okta.domains.read", "okta.domains.manage", "okta.eventHooks.read", "okta.eventHooks.manage", "okta.groups.read", "okta.groups.manage", "okta.roles.read", "okta.roles.manage", "okta.idps.read", "okta.idps.manage", "okta.users.manage", "okta.inlineHooks.read", "okta.inlineHooks.manage", "okta.logs.read", "okta.profileMappings.read", "okta.profileMappings.manage", "okta.schemas.read", "okta.schemas.manage", "okta.linkedObjects.read", "okta.linkedObjects.manage", "okta.userTypes.read", "okta.userTypes.manage", "okta.orgs.read", "okta.orgs.manage", "okta.policies.read", "okta.policies.manage", "okta.sessions.read", "okta.sessions.manage", "okta.templates.read", "okta.templates.manage", "okta.trustedOrigins.read", "okta.trustedOrigins.manage", "okta.users.read.self", "okta.users.read"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
          * Deactivates an authenticator by `authenticatorId`.
          * @summary Deactivate Authenticator
          * @param {string} authenticatorId
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
        deactivateAuthenticator: (authenticatorId, options = {}) => {
            // verify required parameter 'authenticatorId' is not null or undefined
            if (authenticatorId === null || authenticatorId === undefined) {
                throw new base_1.RequiredError('authenticatorId', 'Required parameter authenticatorId was null or undefined when calling deactivateAuthenticator.');
            }
            const localVarPath = `/api/v1/authenticators/{authenticatorId}/lifecycle/deactivate`
                .replace(`{${"authenticatorId"}}`, encodeURIComponent(String(authenticatorId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication api_token required
            if (configuration && configuration.apiToken) {
                const localVarApiKeyValue = typeof configuration.apiToken === 'function'
                    ? configuration.apiToken("Authorization")
                    : configuration.apiToken;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken("oauth2", ["okta.apps.read", "okta.apps.manage", "okta.authenticators.read", "okta.authenticators.manage", "okta.authorizationServers.read", "okta.authorizationServers.manage", "okta.brands.read", "okta.brands.manage", "okta.captchas.manage", "okta.captchas.read", "okta.domains.read", "okta.domains.manage", "okta.eventHooks.read", "okta.eventHooks.manage", "okta.groups.read", "okta.groups.manage", "okta.roles.read", "okta.roles.manage", "okta.idps.read", "okta.idps.manage", "okta.users.manage", "okta.inlineHooks.read", "okta.inlineHooks.manage", "okta.logs.read", "okta.profileMappings.read", "okta.profileMappings.manage", "okta.schemas.read", "okta.schemas.manage", "okta.linkedObjects.read", "okta.linkedObjects.manage", "okta.userTypes.read", "okta.userTypes.manage", "okta.orgs.read", "okta.orgs.manage", "okta.policies.read", "okta.policies.manage", "okta.sessions.read", "okta.sessions.manage", "okta.templates.read", "okta.templates.manage", "okta.trustedOrigins.read", "okta.trustedOrigins.manage", "okta.users.read.self", "okta.users.read"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
          * Fetches an authenticator from your Okta organization by `authenticatorId`.
          * @summary Get Authenticator
          * @param {string} authenticatorId
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
        getAuthenticator: (authenticatorId, options = {}) => {
            // verify required parameter 'authenticatorId' is not null or undefined
            if (authenticatorId === null || authenticatorId === undefined) {
                throw new base_1.RequiredError('authenticatorId', 'Required parameter authenticatorId was null or undefined when calling getAuthenticator.');
            }
            const localVarPath = `/api/v1/authenticators/{authenticatorId}`
                .replace(`{${"authenticatorId"}}`, encodeURIComponent(String(authenticatorId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication api_token required
            if (configuration && configuration.apiToken) {
                const localVarApiKeyValue = typeof configuration.apiToken === 'function'
                    ? configuration.apiToken("Authorization")
                    : configuration.apiToken;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken("oauth2", ["okta.apps.read", "okta.apps.manage", "okta.authenticators.read", "okta.authenticators.manage", "okta.authorizationServers.read", "okta.authorizationServers.manage", "okta.brands.read", "okta.brands.manage", "okta.captchas.manage", "okta.captchas.read", "okta.domains.read", "okta.domains.manage", "okta.eventHooks.read", "okta.eventHooks.manage", "okta.groups.read", "okta.groups.manage", "okta.roles.read", "okta.roles.manage", "okta.idps.read", "okta.idps.manage", "okta.users.manage", "okta.inlineHooks.read", "okta.inlineHooks.manage", "okta.logs.read", "okta.profileMappings.read", "okta.profileMappings.manage", "okta.schemas.read", "okta.schemas.manage", "okta.linkedObjects.read", "okta.linkedObjects.manage", "okta.userTypes.read", "okta.userTypes.manage", "okta.orgs.read", "okta.orgs.manage", "okta.policies.read", "okta.policies.manage", "okta.sessions.read", "okta.sessions.manage", "okta.templates.read", "okta.templates.manage", "okta.trustedOrigins.read", "okta.trustedOrigins.manage", "okta.users.read.self", "okta.users.read"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
          * Enumerates authenticators in your organization.
          * @summary List Authenticators
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
        listAuthenticators: (options = {}) => {
            const localVarPath = `/api/v1/authenticators`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication api_token required
            if (configuration && configuration.apiToken) {
                const localVarApiKeyValue = typeof configuration.apiToken === 'function'
                    ? configuration.apiToken("Authorization")
                    : configuration.apiToken;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken("oauth2", ["okta.apps.read", "okta.apps.manage", "okta.authenticators.read", "okta.authenticators.manage", "okta.authorizationServers.read", "okta.authorizationServers.manage", "okta.brands.read", "okta.brands.manage", "okta.captchas.manage", "okta.captchas.read", "okta.domains.read", "okta.domains.manage", "okta.eventHooks.read", "okta.eventHooks.manage", "okta.groups.read", "okta.groups.manage", "okta.roles.read", "okta.roles.manage", "okta.idps.read", "okta.idps.manage", "okta.users.manage", "okta.inlineHooks.read", "okta.inlineHooks.manage", "okta.logs.read", "okta.profileMappings.read", "okta.profileMappings.manage", "okta.schemas.read", "okta.schemas.manage", "okta.linkedObjects.read", "okta.linkedObjects.manage", "okta.userTypes.read", "okta.userTypes.manage", "okta.orgs.read", "okta.orgs.manage", "okta.policies.read", "okta.policies.manage", "okta.sessions.read", "okta.sessions.manage", "okta.templates.read", "okta.templates.manage", "okta.trustedOrigins.read", "okta.trustedOrigins.manage", "okta.users.read.self", "okta.users.read"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
          * Updates an authenticator
          * @summary Update Authenticator
          * @param {Authenticator} body
          * @param {string} authenticatorId
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
        updateAuthenticator: (body, authenticatorId, options = {}) => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new base_1.RequiredError('body', 'Required parameter body was null or undefined when calling updateAuthenticator.');
            }
            // verify required parameter 'authenticatorId' is not null or undefined
            if (authenticatorId === null || authenticatorId === undefined) {
                throw new base_1.RequiredError('authenticatorId', 'Required parameter authenticatorId was null or undefined when calling updateAuthenticator.');
            }
            const localVarPath = `/api/v1/authenticators/{authenticatorId}`
                .replace(`{${"authenticatorId"}}`, encodeURIComponent(String(authenticatorId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication api_token required
            if (configuration && configuration.apiToken) {
                const localVarApiKeyValue = typeof configuration.apiToken === 'function'
                    ? configuration.apiToken("Authorization")
                    : configuration.apiToken;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken("oauth2", ["okta.apps.read", "okta.apps.manage", "okta.authenticators.read", "okta.authenticators.manage", "okta.authorizationServers.read", "okta.authorizationServers.manage", "okta.brands.read", "okta.brands.manage", "okta.captchas.manage", "okta.captchas.read", "okta.domains.read", "okta.domains.manage", "okta.eventHooks.read", "okta.eventHooks.manage", "okta.groups.read", "okta.groups.manage", "okta.roles.read", "okta.roles.manage", "okta.idps.read", "okta.idps.manage", "okta.users.manage", "okta.inlineHooks.read", "okta.inlineHooks.manage", "okta.logs.read", "okta.profileMappings.read", "okta.profileMappings.manage", "okta.schemas.read", "okta.schemas.manage", "okta.linkedObjects.read", "okta.linkedObjects.manage", "okta.userTypes.read", "okta.userTypes.manage", "okta.orgs.read", "okta.orgs.manage", "okta.policies.read", "okta.policies.manage", "okta.sessions.read", "okta.sessions.manage", "okta.templates.read", "okta.templates.manage", "okta.trustedOrigins.read", "okta.trustedOrigins.manage", "okta.users.read.self", "okta.users.read"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    };
};
exports.AuthenticatorApiRequestParamCreator = AuthenticatorApiRequestParamCreator;
/**
 * AuthenticatorApi - functional programming interface
 * @export
 */
const AuthenticatorApiFp = function (configuration) {
    return {
        /**
          * Activates an authenticator by `authenticatorId`.
          * @summary Activate Authenticator
          * @param {string} authenticatorId
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
        activateAuthenticator(authenticatorId, options) {
            const api = exports.AuthenticatorApiRequestParamCreator(configuration);
            const localVarRequestArgs = api.activateAuthenticator(authenticatorId, options);
            return (http = api.http, basePath = configuration.basePath || configuration.orgUrl) => {
                const requestArgs = { ...localVarRequestArgs.options, url: basePath + localVarRequestArgs.url };
                return http.http(requestArgs.url, requestArgs).then(res => res.json().then(data => new models_1.Authenticator(data)));
            };
        },
        /**
          * Deactivates an authenticator by `authenticatorId`.
          * @summary Deactivate Authenticator
          * @param {string} authenticatorId
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
        deactivateAuthenticator(authenticatorId, options) {
            const api = exports.AuthenticatorApiRequestParamCreator(configuration);
            const localVarRequestArgs = api.deactivateAuthenticator(authenticatorId, options);
            return (http = api.http, basePath = configuration.basePath || configuration.orgUrl) => {
                const requestArgs = { ...localVarRequestArgs.options, url: basePath + localVarRequestArgs.url };
                return http.http(requestArgs.url, requestArgs).then(res => res.json().then(data => new models_1.Authenticator(data)));
            };
        },
        /**
          * Fetches an authenticator from your Okta organization by `authenticatorId`.
          * @summary Get Authenticator
          * @param {string} authenticatorId
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
        getAuthenticator(authenticatorId, options) {
            const api = exports.AuthenticatorApiRequestParamCreator(configuration);
            const localVarRequestArgs = api.getAuthenticator(authenticatorId, options);
            return (http = api.http, basePath = configuration.basePath || configuration.orgUrl) => {
                const requestArgs = { ...localVarRequestArgs.options, url: basePath + localVarRequestArgs.url };
                return http.http(requestArgs.url, requestArgs).then(res => res.json().then(data => new models_1.Authenticator(data)));
            };
        },
        /**
          * Enumerates authenticators in your organization.
          * @summary List Authenticators
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
        listAuthenticators(options) {
            const api = exports.AuthenticatorApiRequestParamCreator(configuration);
            const localVarRequestArgs = api.listAuthenticators(options);
            return (http = api.http, basePath = configuration.basePath || configuration.orgUrl) => {
                const requestArgs = { ...localVarRequestArgs.options, url: basePath + localVarRequestArgs.url };
                return new collection_1.Collection({ http }, `${requestArgs.url}`, new model_factory_1.ModelFactory(models_1.Authenticator));
            };
        },
        /**
          * Updates an authenticator
          * @summary Update Authenticator
          * @param {Authenticator} body
          * @param {string} authenticatorId
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
        updateAuthenticator(body, authenticatorId, options) {
            const api = exports.AuthenticatorApiRequestParamCreator(configuration);
            const localVarRequestArgs = api.updateAuthenticator(body, authenticatorId, options);
            return (http = api.http, basePath = configuration.basePath || configuration.orgUrl) => {
                const requestArgs = { ...localVarRequestArgs.options, url: basePath + localVarRequestArgs.url };
                return http.http(requestArgs.url, requestArgs).then(res => res.json().then(data => new models_1.Authenticator(data)));
            };
        },
    };
};
exports.AuthenticatorApiFp = AuthenticatorApiFp;
/**
 * AuthenticatorApi - factory interface
 * @export
 */
const AuthenticatorApiFactory = function (configuration, basePath, http) {
    return {
        /**
          * Activates an authenticator by `authenticatorId`.
          * @summary Activate Authenticator
          * @param {string} authenticatorId
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
        activateAuthenticator(authenticatorId, options) {
            return exports.AuthenticatorApiFp(configuration).activateAuthenticator(authenticatorId, options)(http, basePath);
        },
        /**
          * Deactivates an authenticator by `authenticatorId`.
          * @summary Deactivate Authenticator
          * @param {string} authenticatorId
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
        deactivateAuthenticator(authenticatorId, options) {
            return exports.AuthenticatorApiFp(configuration).deactivateAuthenticator(authenticatorId, options)(http, basePath);
        },
        /**
          * Fetches an authenticator from your Okta organization by `authenticatorId`.
          * @summary Get Authenticator
          * @param {string} authenticatorId
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
        getAuthenticator(authenticatorId, options) {
            return exports.AuthenticatorApiFp(configuration).getAuthenticator(authenticatorId, options)(http, basePath);
        },
        /**
          * Enumerates authenticators in your organization.
          * @summary List Authenticators
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
        listAuthenticators(options) {
            return exports.AuthenticatorApiFp(configuration).listAuthenticators(options)(http, basePath);
        },
        /**
          * Updates an authenticator
          * @summary Update Authenticator
          * @param {Authenticator} body
          * @param {string} authenticatorId
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
        updateAuthenticator(body, authenticatorId, options) {
            return exports.AuthenticatorApiFp(configuration).updateAuthenticator(body, authenticatorId, options)(http, basePath);
        },
    };
};
exports.AuthenticatorApiFactory = AuthenticatorApiFactory;
/**
 * AuthenticatorApi - object-oriented interface
 * @export
 * @class AuthenticatorApi
 * @extends {BaseAPI}
 */
class AuthenticatorApi extends base_1.BaseAPI {
    /**
      * Activates an authenticator by `authenticatorId`.
      * @summary Activate Authenticator
      * @param {string} authenticatorId
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      * @memberof AuthenticatorApi
      */
    activateAuthenticator(authenticatorId, options) {
        return exports.AuthenticatorApiFp(this.configuration).activateAuthenticator(authenticatorId, options)(this.httpClient, this.basePath);
    }
    /**
      * Deactivates an authenticator by `authenticatorId`.
      * @summary Deactivate Authenticator
      * @param {string} authenticatorId
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      * @memberof AuthenticatorApi
      */
    deactivateAuthenticator(authenticatorId, options) {
        return exports.AuthenticatorApiFp(this.configuration).deactivateAuthenticator(authenticatorId, options)(this.httpClient, this.basePath);
    }
    /**
      * Fetches an authenticator from your Okta organization by `authenticatorId`.
      * @summary Get Authenticator
      * @param {string} authenticatorId
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      * @memberof AuthenticatorApi
      */
    getAuthenticator(authenticatorId, options) {
        return exports.AuthenticatorApiFp(this.configuration).getAuthenticator(authenticatorId, options)(this.httpClient, this.basePath);
    }
    /**
      * Enumerates authenticators in your organization.
      * @summary List Authenticators
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      * @memberof AuthenticatorApi
      */
    listAuthenticators(options) {
        return exports.AuthenticatorApiFp(this.configuration).listAuthenticators(options)(this.httpClient, this.basePath);
    }
    /**
      * Updates an authenticator
      * @summary Update Authenticator
      * @param {Authenticator} body
      * @param {string} authenticatorId
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      * @memberof AuthenticatorApi
      */
    updateAuthenticator(body, authenticatorId, options) {
        return exports.AuthenticatorApiFp(this.configuration).updateAuthenticator(body, authenticatorId, options)(this.httpClient, this.basePath);
    }
}
exports.AuthenticatorApi = AuthenticatorApi;
