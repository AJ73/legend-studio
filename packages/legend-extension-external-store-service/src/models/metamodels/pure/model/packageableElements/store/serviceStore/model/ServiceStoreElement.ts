/**
 * Copyright (c) 2020-present, Goldman Sachs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { observable, makeObservable, action } from 'mobx';
import type { Hashable } from '@finos/legend-shared';
import type { ServiceStore } from './ServiceStore';
import type { ServiceGroup } from './ServiceGroup';

export abstract class ServiceStoreElement implements Hashable {
  private readonly _$nominalTypeBrand!: 'ServiceStoreElement';
  owner!: ServiceStore;
  parent?: ServiceGroup | undefined;
  id!: string;
  path!: string;

  constructor() {
    makeObservable(this, {
      id: observable,
      path: observable,
      setId: action,
      setPath: action,
    });
  }

  setId(value: string): void {
    this.id = value;
  }

  setPath(value: string): void {
    this.path = value;
  }

  abstract get hashCode(): string;
}
