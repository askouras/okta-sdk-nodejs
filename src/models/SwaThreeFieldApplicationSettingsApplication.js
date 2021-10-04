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

var ApplicationSettingsApplication = require('./ApplicationSettingsApplication');


/**
 * @class SwaThreeFieldApplicationSettingsApplication
 * @extends ApplicationSettingsApplication
 * @property { string } buttonSelector
 * @property { string } extraFieldSelector
 * @property { string } extraFieldValue
 * @property { string } loginUrlRegex
 * @property { string } passwordSelector
 * @property { string } targetURL
 * @property { string } userNameSelector
 */
class SwaThreeFieldApplicationSettingsApplication extends ApplicationSettingsApplication {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.buttonSelector) {
      this.buttonSelector = resourceJson.buttonSelector;
    }
    if (resourceJson && resourceJson.extraFieldSelector) {
      this.extraFieldSelector = resourceJson.extraFieldSelector;
    }
    if (resourceJson && resourceJson.extraFieldValue) {
      this.extraFieldValue = resourceJson.extraFieldValue;
    }
    if (resourceJson && resourceJson.loginUrlRegex) {
      this.loginUrlRegex = resourceJson.loginUrlRegex;
    }
    if (resourceJson && resourceJson.passwordSelector) {
      this.passwordSelector = resourceJson.passwordSelector;
    }
    if (resourceJson && resourceJson.targetURL) {
      this.targetURL = resourceJson.targetURL;
    }
    if (resourceJson && resourceJson.userNameSelector) {
      this.userNameSelector = resourceJson.userNameSelector;
    }
  }

}

module.exports = SwaThreeFieldApplicationSettingsApplication;
