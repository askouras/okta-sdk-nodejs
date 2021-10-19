import { FactorType } from './../../src/models/factorType';
import utils = require('../utils');
import {
  Client,
  DefaultRequestExecutor,
  FactorProvider,
  SecurityQuestionUserFactor, SmsUserFactor } from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-list-enrolled-factors`;
}

const client = new Client({
  scopes: ['okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

/**
 * IMPORTANT:
 *
 * In order for these tests to complete, you must enable all used factor types on the org under test
 */

describe('User API tests', () => {
  let createdUser;
  before(async () => {
    // 1. Create a user
    const newUser = {
      profile: utils.getMockProfile('user-list-enrolled-factors'),
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

  it('should allow me to list a user\'s enrolled factors', async () => {
    const smsFactor = {
      factorType: FactorType.Sms,
      provider: FactorProvider.Okta,
      profile: {
        phoneNumber: '162 840 01133‬'
      }
    };
    const securityQuestionFactor = {
      factorType: FactorType.Question,
      provider: FactorProvider.Okta,
      profile: {
        question: 'disliked_food',
        answer: 'pizza'
      }
    };
    await client.enrollFactor(createdUser.id, smsFactor);
    await client.enrollFactor(createdUser.id, securityQuestionFactor);
    const collection = await createdUser.listFactors();
    const factors = [];
    await collection.forEach(factor => factors.push(factor));
    expect(factors[1]).to.be.instanceof(SmsUserFactor);
    expect(factors[0]).to.be.instanceof(SecurityQuestionUserFactor);
  });
});
