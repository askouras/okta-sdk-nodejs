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


'use strict';
/**
 * Okta API
 * Allows customers to easily access the Okta API
 *
 * OpenAPI spec version: 3.0.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.Org2OrgApplicationSettings = void 0;
class Org2OrgApplicationSettings {
  constructor() {
  }
  static getAttributeTypeMap() {
    return Org2OrgApplicationSettings.attributeTypeMap;
  }
}
exports.Org2OrgApplicationSettings = Org2OrgApplicationSettings;
Org2OrgApplicationSettings.discriminator = undefined;
Org2OrgApplicationSettings.attributeTypeMap = [
  {
    'name': 'app',
    'baseName': 'app',
    'type': 'Org2OrgApplicationSettingsApp',
    'format': ''
  },
  {
    'name': 'identityStoreId',
    'baseName': 'identityStoreId',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'implicitAssignment',
    'baseName': 'implicitAssignment',
    'type': 'boolean',
    'format': ''
  },
  {
    'name': 'inlineHookId',
    'baseName': 'inlineHookId',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'notes',
    'baseName': 'notes',
    'type': 'ApplicationSettingsNotes',
    'format': ''
  },
  {
    'name': 'notifications',
    'baseName': 'notifications',
    'type': 'ApplicationSettingsNotifications',
    'format': ''
  },
  {
    'name': 'signOn',
    'baseName': 'signOn',
    'type': 'SamlApplicationSettingsSignOn',
    'format': ''
  }
];
