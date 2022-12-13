import { expect } from 'chai';

import utils = require('../utils');
import {
  BookmarkApplication,
  Client,
  DefaultRequestExecutor,
  UserSchema,
} from '@okta/okta-sdk-nodejs';
import getMockSchemaProperty = require('./mocks/user-schema-property');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-user-schema`;
}

const client = new Client({
  scopes: ['okta.schemas.read', 'okta.schemas.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('App User Schema', () => {
  const applicationOptions = utils.getOIDCApplication();
  let createdApplication: BookmarkApplication;

  beforeEach(async () => {
    createdApplication = await client.applicationApi.createApplication({application: applicationOptions});
  });
  afterEach(async () => {
    await client.applicationApi.deactivateApplication({appId: createdApplication.id});
    await client.applicationApi.deleteApplication({appId: createdApplication.id});
  });

  it('gets UserSchema for application', async () => {
    const userSchema: UserSchema = await client.schemaApi.getApplicationUserSchema({appInstanceId: createdApplication.id});
    expect(userSchema.definitions).is.not.null;
  });

  it('adds property to application\'s UserSchema', async () => {
    const userSchema = await client.schemaApi.getApplicationUserSchema({appInstanceId: createdApplication.id});
    expect(Object.keys(userSchema.definitions.custom.properties)).to.be.an('array').that.is.empty;
    const updatedSchema = await client.schemaApi.updateApplicationUserProfile({appInstanceId: createdApplication.id, body: getMockSchemaProperty()});
    expect(Object.keys(updatedSchema.definitions.custom.properties)).to.be.an('array').that.contains('twitterUserName');
  });

  it('updates application\'s UserSchema', async () => {
    const mockSchemaProperty = getMockSchemaProperty();
    let updatedSchema = await client.schemaApi.updateApplicationUserProfile({appInstanceId: createdApplication.id, body: mockSchemaProperty});
    let customProperty = updatedSchema.definitions.custom.properties.twitterUserName as Record<string, string>;
    expect(customProperty.title).to.equal('Twitter username');
    updatedSchema = await client.schemaApi.updateApplicationUserProfile({appInstanceId: createdApplication.id, ...Object.assign(
      mockSchemaProperty,
      {
        definitions: {
          custom: {
            id: '#custom',
            type: 'object',
            properties: {
              twitterUserName: Object.assign(
                mockSchemaProperty.definitions.custom.properties.twitterUserName,
                {title: 'Twitter handle'})
            }
          }
        }
      }
    )});
    customProperty = updatedSchema.definitions.custom.properties.twitterUserName as Record<string, string>;
    expect(customProperty.title).to.equal('Twitter handle');
  });

  it('removes custom user type UserSchema property', async () => {
    const mockSchemaProperty = getMockSchemaProperty();
    let updatedSchema = await client.schemaApi.updateApplicationUserProfile({appInstanceId: createdApplication.id, body: mockSchemaProperty});
    expect(Object.keys(updatedSchema.definitions.custom.properties)).to.contain('twitterUserName');
    updatedSchema = await client.schemaApi.updateApplicationUserProfile({ appInstanceId: createdApplication.id, ...Object.assign(
      mockSchemaProperty,
      {
        definitions: {
          custom: {
            id: '#custom',
            type: 'object',
            properties: {
              twitterUserName: null
            }
          }
        }
      }
    )});
    expect(Object.keys(updatedSchema.definitions.custom.properties)).not.to.contain('twitterUserName');
  });

});
