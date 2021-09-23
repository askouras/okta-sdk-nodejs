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

import { Resource } from '../resource';
import { Client } from '../client';
import { OptionalKnownProperties } from '../optional-known-properties-type';
import { UserSchemaAttribute } from './UserSchemaAttribute';

declare class UserSchemaBaseProperties extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  login: UserSchemaAttribute;
  firstName: UserSchemaAttribute;
  lastName: UserSchemaAttribute;
  middleName: UserSchemaAttribute;
  honorificPrefix: UserSchemaAttribute;
  honorificSuffix: UserSchemaAttribute;
  email: UserSchemaAttribute;
  title: UserSchemaAttribute;
  displayName: UserSchemaAttribute;
  nickName: UserSchemaAttribute;
  profileUrl: UserSchemaAttribute;
  secondEmail: UserSchemaAttribute;
  mobilePhone: UserSchemaAttribute;
  primaryPhone: UserSchemaAttribute;
  streetAddress: UserSchemaAttribute;
  city: UserSchemaAttribute;
  state: UserSchemaAttribute;
  zipCode: UserSchemaAttribute;
  countryCode: UserSchemaAttribute;
  postalAddress: UserSchemaAttribute;
  preferredLanguage: UserSchemaAttribute;
  locale: UserSchemaAttribute;
  timezone: UserSchemaAttribute;
  userType: UserSchemaAttribute;
  employeeNumber: UserSchemaAttribute;
  costCenter: UserSchemaAttribute;
  organization: UserSchemaAttribute;
  division: UserSchemaAttribute;
  department: UserSchemaAttribute;
  managerId: UserSchemaAttribute;
  manager: UserSchemaAttribute;

}

type UserSchemaBasePropertiesOptions = OptionalKnownProperties<UserSchemaBaseProperties>;

export {
  UserSchemaBaseProperties,
  UserSchemaBasePropertiesOptions
};
