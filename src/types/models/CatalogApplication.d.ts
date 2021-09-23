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
import { CatalogApplicationStatus } from './CatalogApplicationStatus';

declare class CatalogApplication extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  readonly id: string;
  name: string;
  displayName: string;
  description: string;
  status: CatalogApplicationStatus;
  readonly lastUpdated: string;
  category: string;
  verificationStatus: string;
  website: string;
  signOnModes: string[];
  features: string[];
  readonly _links: {[name: string]: unknown};

}

type CatalogApplicationOptions = OptionalKnownProperties<CatalogApplication>;

export {
  CatalogApplication,
  CatalogApplicationOptions
};
