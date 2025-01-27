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

import { PackageableElement } from '../PackageableElement';

export abstract class Type extends PackageableElement {
  // Use these for contravariant and covariant check
  // See https://www.originate.com/cheat-codes-for-contravariance-and-covariance/
  // See https://en.wikipedia.org/wiki/Covariance_and_contravariance_of_vectors
  abstract isSubType(type: Type): boolean;
  abstract isSuperType(type: Type): boolean;
}
