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
const NetworkZoneLocation = require('./NetworkZoneLocation');
const NetworkZoneAddress = require('./NetworkZoneAddress');

/**
 * @class NetworkZone
 * @extends Resource
 * @property { NetworkZoneType } type
 * @property { string } id
 * @property { string } name
 * @property { boolean } system
 * @property { NetworkZoneUsage } usage
 * @property { NetworkZoneStatus } status
 * @property { string } proxyType
 * @property { array } locations
 * @property { array } gateways
 * @property { array } proxies
 * @property { array } asns
 * @property { dateTime } created
 * @property { dateTime } lastUpdated
 * @property { hash } _links
 */
class NetworkZone extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.locations) {
      this.locations = resourceJson.locations.map(resourceItem => new NetworkZoneLocation(resourceItem));
    }
    if (resourceJson && resourceJson.gateways) {
      this.gateways = resourceJson.gateways.map(resourceItem => new NetworkZoneAddress(resourceItem));
    }
    if (resourceJson && resourceJson.proxies) {
      this.proxies = resourceJson.proxies.map(resourceItem => new NetworkZoneAddress(resourceItem));
    }
  }

  /**
   * @returns {Promise<NetworkZone>}
   */
  update() {
    return this.httpClient.updateNetworkZone(this.id, this);
  }
  delete() {
    return this.httpClient.deleteNetworkZone(this.id);
  }

  /**
   * @returns {Promise<NetworkZone>}
   */
  activate() {
    return this.httpClient.activateNetworkZone(this.id);
  }

  /**
   * @returns {Promise<NetworkZone>}
   */
  deactivate() {
    return this.httpClient.deactivateNetworkZone(this.id);
  }
}

module.exports = NetworkZone;
