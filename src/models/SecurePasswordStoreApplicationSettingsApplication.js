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
 * @class SecurePasswordStoreApplicationSettingsApplication
 * @extends ApplicationSettingsApplication
 * @property { string } optionalField1
 * @property { string } optionalField1Value
 * @property { string } optionalField2
 * @property { string } optionalField2Value
 * @property { string } optionalField3
 * @property { string } optionalField3Value
 * @property { string } passwordField
 * @property { string } url
 * @property { string } usernameField
 */
class SecurePasswordStoreApplicationSettingsApplication extends ApplicationSettingsApplication {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.optionalField1) {
      this.optionalField1 = resourceJson.optionalField1;
    }
    if (resourceJson && resourceJson.optionalField1Value) {
      this.optionalField1Value = resourceJson.optionalField1Value;
    }
    if (resourceJson && resourceJson.optionalField2) {
      this.optionalField2 = resourceJson.optionalField2;
    }
    if (resourceJson && resourceJson.optionalField2Value) {
      this.optionalField2Value = resourceJson.optionalField2Value;
    }
    if (resourceJson && resourceJson.optionalField3) {
      this.optionalField3 = resourceJson.optionalField3;
    }
    if (resourceJson && resourceJson.optionalField3Value) {
      this.optionalField3Value = resourceJson.optionalField3Value;
    }
    if (resourceJson && resourceJson.passwordField) {
      this.passwordField = resourceJson.passwordField;
    }
    if (resourceJson && resourceJson.url) {
      this.url = resourceJson.url;
    }
    if (resourceJson && resourceJson.usernameField) {
      this.usernameField = resourceJson.usernameField;
    }
  }

}

module.exports = SecurePasswordStoreApplicationSettingsApplication;
