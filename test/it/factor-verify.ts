import { FactorType } from './../../src/models/factorType';
import utils = require('../utils');
import * as okta from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
import { FactorProvider } from '@okta/okta-sdk-nodejs';
import { create } from 'eslint/lib/rules/*';
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/factor-verify`;
}

const client = new okta.Client({
  scopes: ['okta.factors.manage', 'okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

/**
 * IMPORTANT:
 *
 * In order for these tests to complete, you must enable all used factor types on the org under test
 */

describe('Factors API', () => {
  let createdUser;
  before(async () => {
    // 1. Create a user
    const newUser = {
      profile: utils.getMockProfile('factor-verify'),
      credentials: {
        password: { value: 'Abcd1234' }
      }
    };
    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);
    createdUser = await client.createUser(newUser);
  });

  after(async () => {
    return utils.cleanup(client, createdUser);
  });

  it('should allow me to verify a Security Question factor', async () => {
    if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
      console.log('Test has been skipped. The endpoint does not support PrivateKey.');
      return;
    }

    const answer = 'pizza';
    const factor = {
      factorType: FactorType.Question,
      provider: FactorProvider.Okta,
      profile: {
        question: 'disliked_food',
        answer
      }
    };
    const createdFactor = await client.enrollFactor(createdUser.id, factor);
    // const response = await createdFactor.verify(createdUser.id, { answer });
    const response = await client.verifyFactor(createdUser.id, createdFactor.id);
    expect(response.factorResult).to.be.equal('SUCCESS');
  });
});
