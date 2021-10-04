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


/**
 * @class ProvisioningGroups
 * @extends Resource
 * @property { string } action
 * @property { array } assignments
 * @property { array } filter
 * @property { string } sourceAttributeName
 */
class ProvisioningGroups extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.action) {
      this.action = resourceJson.action;
    }
    if (resourceJson && resourceJson.assignments) {
      this.assignments = resourceJson.assignments;
    }
    if (resourceJson && resourceJson.filter) {
      this.filter = resourceJson.filter;
    }
    if (resourceJson && resourceJson.sourceAttributeName) {
      this.sourceAttributeName = resourceJson.sourceAttributeName;
    }
  }

}

module.exports = ProvisioningGroups;
