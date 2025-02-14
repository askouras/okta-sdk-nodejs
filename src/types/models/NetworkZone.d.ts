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
import { Response } from 'node-fetch';
import { NetworkZoneAddress } from './NetworkZoneAddress';
import { NetworkZoneLocation } from './NetworkZoneLocation';
import { NetworkZoneStatus } from './NetworkZoneStatus';
import { NetworkZoneType } from './NetworkZoneType';
import { NetworkZoneUsage } from './NetworkZoneUsage';

declare class NetworkZone extends Resource {
  constructor(resourceJson: Record<string, unknown>, client: Client);

  readonly _links: {[name: string]: unknown};
  asns: string[];
  readonly created: string;
  gateways: NetworkZoneAddress[];
  readonly id: string;
  readonly lastUpdated: string;
  locations: NetworkZoneLocation[];
  name: string;
  proxies: NetworkZoneAddress[];
  proxyType: string;
  status: NetworkZoneStatus;
  system: boolean;
  type: NetworkZoneType;
  usage: NetworkZoneUsage;

  update(): Promise<NetworkZone>;
  delete(): Promise<Response>;
  activate(): Promise<NetworkZone>;
  deactivate(): Promise<NetworkZone>;
}

type NetworkZoneOptions = OptionalKnownProperties<NetworkZone>;

export {
  NetworkZone,
  NetworkZoneOptions
};
