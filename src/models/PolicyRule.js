/*!
 * Copyright (c) 2017-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const PolicyRuleConditions = require('./PolicyRuleConditions');
const PolicyRuleActions = require('./PolicyRuleActions');

/**
 * @class PolicyRule
 * @extends Resource
 * @property { dateTime } created
 * @property { string } id
 * @property { dateTime } lastUpdated
 * @property { integer } priority
 * @property { string } status
 * @property { boolean } system
 * @property { string } type
 * @property { string } name
 * @property { PolicyRuleConditions } conditions
 * @property { PolicyRuleActions } actions
 */
class PolicyRule extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.conditions) {
      this.conditions = new PolicyRuleConditions(resourceJson.conditions);
    }
    if (resourceJson && resourceJson.actions) {
      this.actions = new PolicyRuleActions(resourceJson.actions);
    }
  }

  /**
   * @param {string} policyId
   * @returns {Promise<PolicyRule>}
   */
  update(policyId) {
    return this.httpClient.updatePolicyRule(policyId, this.id, this);
  }
  /**
   * @param {string} policyId
   */
  delete(policyId) {
    return this.httpClient.deletePolicyRule(policyId, this.id);
  }

  /**
   * @param {string} policyId
   */
  activate(policyId) {
    return this.httpClient.activatePolicyRule(policyId, this.id);
  }

  /**
   * @param {string} policyId
   */
  deactivate(policyId) {
    return this.httpClient.deactivatePolicyRule(policyId, this.id);
  }
}

module.exports = PolicyRule;
