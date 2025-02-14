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

var PolicyRule = require('./PolicyRule');
const AccessPolicyRuleActions = require('./AccessPolicyRuleActions');
const AccessPolicyRuleConditions = require('./AccessPolicyRuleConditions');

/**
 * @class AccessPolicyRule
 * @extends PolicyRule
 * @property { AccessPolicyRuleActions } actions
 * @property { AccessPolicyRuleConditions } conditions
 * @property { string } name
 */
class AccessPolicyRule extends PolicyRule {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.actions) {
      this.actions = new AccessPolicyRuleActions(resourceJson.actions);
    }
    if (resourceJson && resourceJson.conditions) {
      this.conditions = new AccessPolicyRuleConditions(resourceJson.conditions);
    }
  }

}

module.exports = AccessPolicyRule;
