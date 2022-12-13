import { expect } from 'chai';
import * as okta from '@okta/okta-sdk-nodejs';
import getMockGroup = require('./mocks/group');
import getMockOktaSignOnPolicy = require('./mocks/okta-sign-on-policy');
import utils = require('../utils');
import { Client } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/policy-lifecycle`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Policy Lifecycle API', () => {
  let group;
  let mockPolicy;
  let policy;
  beforeEach(async () => {
    group = await client.groupApi.createGroup({group: getMockGroup()});
    mockPolicy = getMockOktaSignOnPolicy();
    mockPolicy.conditions.people.groups.include.push(group.id);
    policy = client.policyApi.createPolicy(mockPolicy);
  });
  afterEach(async () => {
    await client.policyApi.deletePolicy({policyId: policy.id});
    await client.groupApi.deleteGroup({groupId: group.id});
  });

  it('should activate policy', async () => {
    const response = await client.activatePolicy(policy.id);
    expect(response).to.be.undefined;
  });

  it('should deactive policy', async () => {
    const response = await client.deactivatePolicy(policy.id);
    expect(response).to.be.undefined;
  });
});
