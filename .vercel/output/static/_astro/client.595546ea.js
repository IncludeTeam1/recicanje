/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Hl=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Ca={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,u=c?e[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Sa(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Hl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const u=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new Kl;const d=i<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const E=u<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Kl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gl=function(e){const t=Sa(e);return Ca.encodeByteArray(t,!0)},Gn=function(e){return Gl(e).replace(/\./g,"")},Wl=function(e){try{return Ca.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=()=>Ql().__FIREBASE_DEFAULTS__,Xl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Jl=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Wl(e[1]);return t&&JSON.parse(t)},dr=()=>{try{return Yl()||Xl()||Jl()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Zl=e=>{var t,n;return(n=(t=dr())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},ba=e=>{const t=Zl(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Va=()=>{var e;return(e=dr())===null||e===void 0?void 0:e.config},TE=e=>{var t;return(t=dr())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Gn(JSON.stringify(n)),Gn(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function IE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ka())}function eh(){var e;const t=(e=dr())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function wE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vE(){const e=ka();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Na(){try{return typeof indexedDB=="object"}catch{return!1}}function Oa(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function rh(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh="FirebaseError";class Lt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=sh,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fr.prototype.create)}}class fr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?ih(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Lt(s,a,r)}}function ih(e,t){return e.replace(oh,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const oh=/\{\$([^}]+)}/g;function AE(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Wn(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(ao(i)&&ao(o)){if(!Wn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ao(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function PE(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function SE(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function CE(e,t){const n=new ah(e,t);return n.subscribe.bind(n)}class ah{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ch(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Qr),s.error===void 0&&(s.error=Qr),s.complete===void 0&&(s.complete=Qr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ch(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Qr(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh=1e3,lh=2,hh=4*60*60*1e3,dh=.5;function co(e,t=uh,n=lh){const r=t*Math.pow(n,e),s=Math.round(dh*r*(Math.random()-.5)*2);return Math.min(hh,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(e){return e&&e._delegate?e._delegate:e}class St{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new th;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t?.identifier),s=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(mh(t))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Yt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Yt){return this.instances.has(t)}getOptions(t=Yt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ph(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Yt){return this.component?this.component.multipleInstances?t:Yt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ph(e){return e===Yt?void 0:e}function mh(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new fh(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(b||(b={}));const _h={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},yh=b.INFO,Eh={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},Th=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Eh[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Zs{constructor(t){this.name=t,this._logLevel=yh,this._logHandler=Th,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in b))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?_h[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...t),this._logHandler(this,b.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...t),this._logHandler(this,b.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,b.INFO,...t),this._logHandler(this,b.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,b.WARN,...t),this._logHandler(this,b.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...t),this._logHandler(this,b.ERROR,...t)}}const Ih=(e,t)=>t.some(n=>e instanceof n);let uo,lo;function wh(){return uo||(uo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vh(){return lo||(lo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xa=new WeakMap,Ts=new WeakMap,Ma=new WeakMap,Yr=new WeakMap,ti=new WeakMap;function Ah(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Bt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&xa.set(n,e)}).catch(()=>{}),ti.set(t,e),t}function Rh(e){if(Ts.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ts.set(e,t)}let Is={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ts.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ma.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ph(e){Is=e(Is)}function Sh(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Xr(this),t,...n);return Ma.set(r,t.sort?t.sort():[t]),Bt(r)}:vh().includes(e)?function(...t){return e.apply(Xr(this),t),Bt(xa.get(this))}:function(...t){return Bt(e.apply(Xr(this),t))}}function Ch(e){return typeof e=="function"?Sh(e):(e instanceof IDBTransaction&&Rh(e),Ih(e,wh())?new Proxy(e,Is):e)}function Bt(e){if(e instanceof IDBRequest)return Ah(e);if(Yr.has(e))return Yr.get(e);const t=Ch(e);return t!==e&&(Yr.set(e,t),ti.set(t,e)),t}const Xr=e=>ti.get(e);function bh(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Bt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Bt(o.result),c.oldVersion,c.newVersion,Bt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Vh=["get","getKey","getAll","getAllKeys","count"],Dh=["put","add","delete","clear"],Jr=new Map;function ho(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Jr.get(t))return Jr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Dh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Vh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Jr.set(t,i),i}Ph(e=>({...e,get:(t,n,r)=>ho(t,n)||e.get(t,n,r),has:(t,n)=>!!ho(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Nh(e){const t=e.getComponent();return t?.type==="VERSION"}const ws="@firebase/app",fo="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=new Zs("@firebase/app"),Oh="@firebase/app-compat",xh="@firebase/analytics-compat",Mh="@firebase/analytics",Lh="@firebase/app-check-compat",Fh="@firebase/app-check",Uh="@firebase/auth",Bh="@firebase/auth-compat",$h="@firebase/database",jh="@firebase/database-compat",qh="@firebase/functions",zh="@firebase/functions-compat",Hh="@firebase/installations",Kh="@firebase/installations-compat",Gh="@firebase/messaging",Wh="@firebase/messaging-compat",Qh="@firebase/performance",Yh="@firebase/performance-compat",Xh="@firebase/remote-config",Jh="@firebase/remote-config-compat",Zh="@firebase/storage",td="@firebase/storage-compat",ed="@firebase/firestore",nd="@firebase/firestore-compat",rd="firebase",sd="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="[DEFAULT]",id={[ws]:"fire-core",[Oh]:"fire-core-compat",[Mh]:"fire-analytics",[xh]:"fire-analytics-compat",[Fh]:"fire-app-check",[Lh]:"fire-app-check-compat",[Uh]:"fire-auth",[Bh]:"fire-auth-compat",[$h]:"fire-rtdb",[jh]:"fire-rtdb-compat",[qh]:"fire-fn",[zh]:"fire-fn-compat",[Hh]:"fire-iid",[Kh]:"fire-iid-compat",[Gh]:"fire-fcm",[Wh]:"fire-fcm-compat",[Qh]:"fire-perf",[Yh]:"fire-perf-compat",[Xh]:"fire-rc",[Jh]:"fire-rc-compat",[Zh]:"fire-gcs",[td]:"fire-gcs-compat",[ed]:"fire-fst",[nd]:"fire-fst-compat","fire-js":"fire-js",[rd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new Map,As=new Map;function od(e,t){try{e.container.addComponent(t)}catch(n){re.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Nt(e){const t=e.name;if(As.has(t))return re.debug(`There were multiple attempts to register component ${t}.`),!1;As.set(t,e);for(const n of Qn.values())od(n,e);return!0}function De(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$t=new fr("app","Firebase",ad);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new St("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=sd;function Fa(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:vs,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw $t.create("bad-app-name",{appName:String(s)});if(n||(n=Va()),!n)throw $t.create("no-options");const i=Qn.get(s);if(i){if(Wn(n,i.options)&&Wn(r,i.config))return i;throw $t.create("duplicate-app",{appName:s})}const o=new gh(s);for(const c of As.values())o.addComponent(c);const a=new cd(n,r,o);return Qn.set(s,a),a}function ei(e=vs){const t=Qn.get(e);if(!t&&e===vs&&Va())return Fa();if(!t)throw $t.create("no-app",{appName:e});return t}function _t(e,t,n){var r;let s=(r=id[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),re.warn(a.join(" "));return}Nt(new St(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="firebase-heartbeat-database",ld=1,tn="firebase-heartbeat-store";let Zr=null;function Ua(){return Zr||(Zr=bh(ud,ld,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(tn)}}}).catch(e=>{throw $t.create("idb-open",{originalErrorMessage:e.message})})),Zr}async function hd(e){try{return await(await Ua()).transaction(tn).objectStore(tn).get(Ba(e))}catch(t){if(t instanceof Lt)re.warn(t.message);else{const n=$t.create("idb-get",{originalErrorMessage:t?.message});re.warn(n.message)}}}async function po(e,t){try{const r=(await Ua()).transaction(tn,"readwrite");await r.objectStore(tn).put(t,Ba(e)),await r.done}catch(n){if(n instanceof Lt)re.warn(n.message);else{const r=$t.create("idb-set",{originalErrorMessage:n?.message});re.warn(r.message)}}}function Ba(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=1024,fd=30*24*60*60*1e3;class pd{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gd(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=mo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=fd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mo(),{heartbeatsToSend:n,unsentEntries:r}=md(this._heartbeatsCache.heartbeats),s=Gn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function mo(){return new Date().toISOString().substring(0,10)}function md(e,t=dd){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),go(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),go(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Na()?Oa().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await hd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return po(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return po(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function go(e){return Gn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(e){Nt(new St("platform-logger",t=>new kh(t),"PRIVATE")),Nt(new St("heartbeat",t=>new pd(t),"PRIVATE")),_t(ws,fo,e),_t(ws,fo,"esm2017"),_t("fire-js","")}_d("");var yd="firebase",Ed="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t(yd,Ed,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="firebasestorage.googleapis.com",ja="storageBucket",Td=2*60*1e3,Id=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j extends Lt{constructor(t,n,r=0){super(ts(t),`Firebase Storage: ${n} (${ts(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,j.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ts(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var B;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(B||(B={}));function ts(e){return"storage/"+e}function ni(){const e="An unknown error occurred, please check the error payload for server response.";return new j(B.UNKNOWN,e)}function wd(e){return new j(B.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function vd(e){return new j(B.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ad(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new j(B.UNAUTHENTICATED,e)}function Rd(){return new j(B.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Pd(e){return new j(B.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Sd(){return new j(B.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Cd(){return new j(B.CANCELED,"User canceled the upload/download.")}function bd(e){return new j(B.INVALID_URL,"Invalid URL '"+e+"'.")}function Vd(e){return new j(B.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Dd(){return new j(B.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ja+"' property when initializing the app?")}function kd(){return new j(B.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Nd(){return new j(B.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Od(e){return new j(B.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Rs(e){return new j(B.INVALID_ARGUMENT,e)}function qa(){return new j(B.APP_DELETED,"The Firebase app was deleted.")}function xd(e){return new j(B.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ke(e,t){return new j(B.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function Le(e){throw new j(B.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=dt.makeFromUrl(t,n)}catch{return new dt(t,"")}if(r.path==="")return r;throw Vd(t)}static makeFromUrl(t,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(M){M.path_=decodeURIComponent(M.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${s}/o${d}`,"i"),E={bucket:1,path:3},w=n===$a?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",V=new RegExp(`^https?://${w}/${s}/${_}`,"i"),x=[{regex:a,indices:c,postModify:i},{regex:f,indices:E,postModify:u},{regex:V,indices:{bucket:1,path:2},postModify:u}];for(let M=0;M<x.length;M++){const Tt=x[M],Vt=Tt.regex.exec(t);if(Vt){const Dn=Vt[Tt.indices.bucket];let kn=Vt[Tt.indices.path];kn||(kn=""),r=new dt(Dn,kn),Tt.postModify(r);break}}if(r==null)throw bd(t);return r}}class Md{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(e,t,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(..._){u||(u=!0,t.apply(null,_))}function h(_){s=setTimeout(()=>{s=null,e(f,c())},_)}function d(){i&&clearTimeout(i)}function f(_,...V){if(u){d();return}if(_){d(),l.call(null,_,...V);return}if(c()||o){d(),l.call(null,_,...V);return}r<64&&(r*=2);let x;a===1?(a=2,x=0):x=(r+Math.random())*1e3,h(x)}let E=!1;function w(_){E||(E=!0,d(),!u&&(s!==null?(_||(a=2),clearTimeout(s),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,w(!0)},n),w}function Fd(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(e){return e!==void 0}function Bd(e){return typeof e=="object"&&!Array.isArray(e)}function ri(e){return typeof e=="string"||e instanceof String}function _o(e){return si()&&e instanceof Blob}function si(){return typeof Blob<"u"&&!eh()}function yo(e,t,n,r){if(r<t)throw Rs(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Rs(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function za(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const s=t(r)+"="+t(e[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(ee||(ee={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(e,t){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,i=t.indexOf(e)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(t,n,r,s,i,o,a,c,u,l,h,d=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,E)=>{this.resolve_=f,this.reject_=E,this.start_()})}start_(){const t=(r,s)=>{if(s){r(!1,new Nn(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ee.NO_ERROR,c=i.getStatus();if(!a||$d(c,this.additionalRetryCodes_)&&this.retry){const l=i.getErrorCode()===ee.ABORT;r(!1,new Nn(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Nn(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Ud(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=ni();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?qa():Cd();o(c)}else{const c=Sd();o(c)}};this.canceled_?n(!1,new Nn(!1,null,!0)):this.backoffId_=Ld(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Fd(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Nn{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function qd(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function zd(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Hd(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Kd(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Gd(e,t,n,r,s,i,o=!0){const a=za(e.urlParams),c=e.url+a,u=Object.assign({},e.headers);return Hd(u,t),qd(u,n),zd(u,i),Kd(u,r),new jd(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Qd(...e){const t=Wd();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(si())return new Blob(e);throw new j(B.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Yd(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(e){if(typeof atob>"u")throw Od("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class es{constructor(t,n){this.data=t,this.contentType=n||null}}function Jd(e,t){switch(e){case wt.RAW:return new es(Ha(t));case wt.BASE64:case wt.BASE64URL:return new es(Ka(e,t));case wt.DATA_URL:return new es(tf(t),ef(t))}throw ni()}function Ha(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const i=r,o=e.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function Zd(e){let t;try{t=decodeURIComponent(e)}catch{throw Ke(wt.DATA_URL,"Malformed data URL.")}return Ha(t)}function Ka(e,t){switch(e){case wt.BASE64:{const s=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(s||i)throw Ke(e,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case wt.BASE64URL:{const s=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(s||i)throw Ke(e,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Xd(t)}catch(s){throw s.message.includes("polyfill")?s:Ke(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Ga{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw Ke(wt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=nf(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function tf(e){const t=new Ga(e);return t.base64?Ka(wt.BASE64,t.rest):Zd(t.rest)}function ef(e){return new Ga(e).contentType}function nf(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t,n){let r=0,s="";_o(t)?(this.data_=t,r=t.size,s=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(t,n){if(_o(this.data_)){const r=this.data_,s=Yd(r,t,n);return s===null?null:new Ft(s)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new Ft(r,!0)}}static getBlob(...t){if(si()){const n=t.map(r=>r instanceof Ft?r.data_:r);return new Ft(Qd.apply(null,n))}else{const n=t.map(o=>ri(o)?Jd(wt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Ft(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(e){let t;try{t=JSON.parse(e)}catch{return null}return Bd(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function sf(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function Qa(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(e,t){return t}class at{constructor(t,n,r,s){this.server=t,this.local=n||t,this.writable=!!r,this.xform=s||of}}let On=null;function af(e){return!ri(e)||e.length<2?e:Qa(e)}function Ya(){if(On)return On;const e=[];e.push(new at("bucket")),e.push(new at("generation")),e.push(new at("metageneration")),e.push(new at("name","fullPath",!0));function t(i,o){return af(o)}const n=new at("name");n.xform=t,e.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new at("size");return s.xform=r,e.push(s),e.push(new at("timeCreated")),e.push(new at("updated")),e.push(new at("md5Hash",null,!0)),e.push(new at("cacheControl",null,!0)),e.push(new at("contentDisposition",null,!0)),e.push(new at("contentEncoding",null,!0)),e.push(new at("contentLanguage",null,!0)),e.push(new at("contentType",null,!0)),e.push(new at("metadata","customMetadata",!0)),On=e,On}function cf(e,t){function n(){const r=e.bucket,s=e.fullPath,i=new dt(r,s);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function uf(e,t,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,t[o.server])}return cf(r,e),r}function Xa(e,t,n){const r=Wa(t);return r===null?null:uf(e,r,n)}function lf(e,t,n,r){const s=Wa(t);if(s===null||!ri(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=e.bucket,h=e.fullPath,d="/b/"+o(l)+"/o/"+o(h),f=ii(d,n,r),E=za({alt:"media",token:u});return f+E})[0]}function hf(e,t){const n={},r=t.length;for(let s=0;s<r;s++){const i=t[s];i.writable&&(n[i.server]=e[i.local])}return JSON.stringify(n)}class Ja{constructor(t,n,r,s){this.url=t,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(e){if(!e)throw ni()}function df(e,t){function n(r,s){const i=Xa(e,s,t);return Za(i!==null),i}return n}function ff(e,t){function n(r,s){const i=Xa(e,s,t);return Za(i!==null),lf(i,s,e.host,e._protocol)}return n}function tc(e){function t(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Rd():s=Ad():n.getStatus()===402?s=vd(e.bucket):n.getStatus()===403?s=Pd(e.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return t}function pf(e){const t=tc(e);function n(r,s){let i=t(r,s);return r.getStatus()===404&&(i=wd(e.path)),i.serverResponse=s.serverResponse,i}return n}function mf(e,t,n){const r=t.fullServerUrl(),s=ii(r,e.host,e._protocol),i="GET",o=e.maxOperationRetryTime,a=new Ja(s,i,ff(e,n),o);return a.errorHandler=pf(t),a}function gf(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function _f(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=gf(null,t)),r}function yf(e,t,n,r,s){const i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let x="";for(let M=0;M<2;M++)x=x+Math.random().toString().slice(2);return x}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=_f(t,r,s),l=hf(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=Ft.getBlob(h,r,d);if(f===null)throw kd();const E={name:u.fullPath},w=ii(i,e.host,e._protocol),_="POST",V=e.maxUploadRetryTime,L=new Ja(w,_,df(e,n),V);return L.urlParams=E,L.headers=o,L.body=f.uploadData(),L.errorHandler=tc(t),L}class Ef{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ee.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ee.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ee.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,s){if(this.sent_)throw Le("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Le("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Le("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Le("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Le("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Tf extends Ef{initXhr(){this.xhr_.responseType="text"}}function ec(){return new Tf}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,n){this._service=t,n instanceof dt?this._location=n:this._location=dt.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new se(t,n)}get root(){const t=new dt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Qa(this._location.path)}get storage(){return this._service}get parent(){const t=rf(this._location.path);if(t===null)return null;const n=new dt(this._location.bucket,t);return new se(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw xd(t)}}function If(e,t,n){e._throwIfRoot("uploadBytes");const r=yf(e.storage,e._location,Ya(),new Ft(t,!0),n);return e.storage.makeRequestWithTokens(r,ec).then(s=>({metadata:s,ref:e}))}function wf(e){e._throwIfRoot("getDownloadURL");const t=mf(e.storage,e._location,Ya());return e.storage.makeRequestWithTokens(t,ec).then(n=>{if(n===null)throw Nd();return n})}function vf(e,t){const n=sf(e._location.path,t),r=new dt(e._location.bucket,n);return new se(e.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(e){return/^[A-Za-z]+:\/\//.test(e)}function Rf(e,t){return new se(e,t)}function nc(e,t){if(e instanceof oi){const n=e;if(n._bucket==null)throw Dd();const r=new se(n,n._bucket);return t!=null?nc(r,t):r}else return t!==void 0?vf(e,t):e}function Pf(e,t){if(t&&Af(t)){if(e instanceof oi)return Rf(e,t);throw Rs("To use ref(service, url), the first argument must be a Storage instance.")}else return nc(e,t)}function Eo(e,t){const n=t?.[ja];return n==null?null:dt.makeFromBucketSpec(n,e)}function Sf(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken=typeof s=="string"?s:Da(s,e.app.options.projectId))}class oi{constructor(t,n,r,s,i){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=$a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Td,this._maxUploadRetryTime=Id,this._requests=new Set,s!=null?this._bucket=dt.makeFromBucketSpec(s,this._host):this._bucket=Eo(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=dt.makeFromBucketSpec(this._url,t):this._bucket=Eo(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){yo("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){yo("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new se(this,t)}_makeRequest(t,n,r,s,i=!0){if(this._deleted)return new Md(qa());{const o=Gd(t,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,s).getPromise()}}const To="@firebase/storage",Io="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="storage";function bE(e,t,n){return e=lt(e),If(e,t,n)}function VE(e){return e=lt(e),wf(e)}function Cf(e,t){return e=lt(e),Pf(e,t)}function bf(e=ei(),t){e=lt(e);const r=De(e,rc).getImmediate({identifier:t}),s=ba("storage");return s&&Vf(r,...s),r}function Vf(e,t,n,r={}){Sf(e,t,n,r)}function Df(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new oi(n,r,s,t,La)}function kf(){Nt(new St(rc,Df,"PUBLIC").setMultipleInstances(!0)),_t(To,Io,""),_t(To,Io,"esm2017")}kf();const Nf=(e,t)=>t.some(n=>e instanceof n);let wo,vo;function Of(){return wo||(wo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xf(){return vo||(vo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sc=new WeakMap,Ps=new WeakMap,ic=new WeakMap,ns=new WeakMap,ai=new WeakMap;function Mf(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(jt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&sc.set(n,e)}).catch(()=>{}),ai.set(t,e),t}function Lf(e){if(Ps.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ps.set(e,t)}let Ss={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ps.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ic.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ff(e){Ss=e(Ss)}function Uf(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(rs(this),t,...n);return ic.set(r,t.sort?t.sort():[t]),jt(r)}:xf().includes(e)?function(...t){return e.apply(rs(this),t),jt(sc.get(this))}:function(...t){return jt(e.apply(rs(this),t))}}function Bf(e){return typeof e=="function"?Uf(e):(e instanceof IDBTransaction&&Lf(e),Nf(e,Of())?new Proxy(e,Ss):e)}function jt(e){if(e instanceof IDBRequest)return Mf(e);if(ns.has(e))return ns.get(e);const t=Bf(e);return t!==e&&(ns.set(e,t),ai.set(t,e)),t}const rs=e=>ai.get(e);function $f(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=jt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(jt(o.result),c.oldVersion,c.newVersion,jt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const jf=["get","getKey","getAll","getAllKeys","count"],qf=["put","add","delete","clear"],ss=new Map;function Ao(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ss.get(t))return ss.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=qf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||jf.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return ss.set(t,i),i}Ff(e=>({...e,get:(t,n,r)=>Ao(t,n)||e.get(t,n,r),has:(t,n)=>!!Ao(t,n)||e.has(t,n)}));const oc="@firebase/installations",ci="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=1e4,cc=`w:${ci}`,uc="FIS_v2",zf="https://firebaseinstallations.googleapis.com/v1",Hf=60*60*1e3,Kf="installations",Gf="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ie=new fr(Kf,Gf,Wf);function lc(e){return e instanceof Lt&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc({projectId:e}){return`${zf}/projects/${e}/installations`}function dc(e){return{token:e.token,requestStatus:2,expiresIn:Yf(e.expiresIn),creationTime:Date.now()}}async function fc(e,t){const r=(await t.json()).error;return ie.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function pc({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Qf(e,{refreshToken:t}){const n=pc(e);return n.append("Authorization",Xf(t)),n}async function mc(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Yf(e){return Number(e.replace("s","000"))}function Xf(e){return`${uc} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jf({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=hc(e),s=pc(e),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:uc,appId:e.appId,sdkVersion:cc},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await mc(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:dc(u.authToken)}}else throw await fc("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=/^[cdef][\w-]{21}$/,Cs="";function ep(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=np(e);return tp.test(n)?n:Cs}catch{return Cs}}function np(e){return Zf(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=new Map;function yc(e,t){const n=pr(e);Ec(n,t),rp(n,t)}function Ec(e,t){const n=_c.get(e);if(n)for(const r of n)r(t)}function rp(e,t){const n=sp();n&&n.postMessage({key:e,fid:t}),ip()}let Xt=null;function sp(){return!Xt&&"BroadcastChannel"in self&&(Xt=new BroadcastChannel("[Firebase] FID Change"),Xt.onmessage=e=>{Ec(e.data.key,e.data.fid)}),Xt}function ip(){_c.size===0&&Xt&&(Xt.close(),Xt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="firebase-installations-database",ap=1,oe="firebase-installations-store";let is=null;function ui(){return is||(is=$f(op,ap,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(oe)}}})),is}async function Yn(e,t){const n=pr(e),s=(await ui()).transaction(oe,"readwrite"),i=s.objectStore(oe),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&yc(e,t.fid),t}async function Tc(e){const t=pr(e),r=(await ui()).transaction(oe,"readwrite");await r.objectStore(oe).delete(t),await r.done}async function mr(e,t){const n=pr(e),s=(await ui()).transaction(oe,"readwrite"),i=s.objectStore(oe),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&yc(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(e){let t;const n=await mr(e.appConfig,r=>{const s=cp(r),i=up(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===Cs?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function cp(e){const t=e||{fid:ep(),registrationStatus:0};return Ic(t)}function up(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ie.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=lp(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:hp(e)}:{installationEntry:t}}async function lp(e,t){try{const n=await Jf(e,t);return Yn(e.appConfig,n)}catch(n){throw lc(n)&&n.customData.serverCode===409?await Tc(e.appConfig):await Yn(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function hp(e){let t=await Ro(e.appConfig);for(;t.registrationStatus===1;)await gc(100),t=await Ro(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await li(e);return r||n}return t}function Ro(e){return mr(e,t=>{if(!t)throw ie.create("installation-not-found");return Ic(t)})}function Ic(e){return dp(e)?{fid:e.fid,registrationStatus:0}:e}function dp(e){return e.registrationStatus===1&&e.registrationTime+ac<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fp({appConfig:e,heartbeatServiceProvider:t},n){const r=pp(e,n),s=Qf(e,n),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:cc,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await mc(()=>fetch(r,a));if(c.ok){const u=await c.json();return dc(u)}else throw await fc("Generate Auth Token",c)}function pp(e,{fid:t}){return`${hc(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(e,t=!1){let n;const r=await mr(e.appConfig,i=>{if(!wc(i))throw ie.create("not-registered");const o=i.authToken;if(!t&&_p(o))return i;if(o.requestStatus===1)return n=mp(e,t),i;{if(!navigator.onLine)throw ie.create("app-offline");const a=Ep(i);return n=gp(e,a),a}});return n?await n:r.authToken}async function mp(e,t){let n=await Po(e.appConfig);for(;n.authToken.requestStatus===1;)await gc(100),n=await Po(e.appConfig);const r=n.authToken;return r.requestStatus===0?hi(e,t):r}function Po(e){return mr(e,t=>{if(!wc(t))throw ie.create("not-registered");const n=t.authToken;return Tp(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function gp(e,t){try{const n=await fp(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Yn(e.appConfig,r),n}catch(n){if(lc(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Tc(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Yn(e.appConfig,r)}throw n}}function wc(e){return e!==void 0&&e.registrationStatus===2}function _p(e){return e.requestStatus===2&&!yp(e)}function yp(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Hf}function Ep(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Tp(e){return e.requestStatus===1&&e.requestTime+ac<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ip(e){const t=e,{installationEntry:n,registrationPromise:r}=await li(t);return r?r.catch(console.error):hi(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(e,t=!1){const n=e;return await vp(n),(await hi(n,t)).token}async function vp(e){const{registrationPromise:t}=await li(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(e){if(!e||!e.options)throw os("App Configuration");if(!e.name)throw os("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw os(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function os(e){return ie.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc="installations",Rp="installations-internal",Pp=e=>{const t=e.getProvider("app").getImmediate(),n=Ap(t),r=De(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Sp=e=>{const t=e.getProvider("app").getImmediate(),n=De(t,vc).getImmediate();return{getId:()=>Ip(n),getToken:s=>wp(n,s)}};function Cp(){Nt(new St(vc,Pp,"PUBLIC")),Nt(new St(Rp,Sp,"PRIVATE"))}Cp();_t(oc,ci);_t(oc,ci,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="analytics",bp="firebase_id",Vp="origin",Dp=60*1e3,kp="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",di="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=new Zs("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ft=new fr("analytics","Analytics",Np);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(e){if(!e.startsWith(di)){const t=ft.create("invalid-gtag-resource",{gtagURL:e});return ut.warn(t.message),""}return e}function Ac(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function xp(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Mp(e,t){const n=xp("firebase-js-sdk-policy",{createScriptURL:Op}),r=document.createElement("script"),s=`${di}?l=${e}&id=${t}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Lp(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Fp(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await Ac(n)).find(u=>u.measurementId===s);c&&await t[c.appId]}}catch(a){ut.error(a)}e("config",s,i)}async function Up(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Ac(n);for(const c of o){const u=a.find(h=>h.measurementId===c),l=u&&t[u.appId];if(l)i.push(l);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){ut.error(i)}}function Bp(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await Up(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await Fp(e,t,n,r,a,c)}else if(i==="consent"){const[a]=o;e("consent","update",a)}else if(i==="get"){const[a,c,u]=o;e("get",a,c,u)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){ut.error(a)}}return s}function $p(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Bp(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function jp(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(di)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=30,zp=1e3;class Hp{constructor(t={},n=zp){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Rc=new Hp;function Kp(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Gp(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:Kp(r)},i=kp.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw ft.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Wp(e,t=Rc,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw ft.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw ft.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Xp;return setTimeout(async()=>{a.abort()},n!==void 0?n:Dp),Pc({appId:r,apiKey:s,measurementId:i},o,a,t)}async function Pc(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Rc){var i;const{appId:o,measurementId:a}=e;try{await Qp(r,t)}catch(c){if(a)return ut.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Gp(e);return s.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!Yp(u)){if(s.deleteThrottleMetadata(o),a)return ut.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u?.message}]`),{appId:o,measurementId:a};throw c}const l=Number((i=u?.customData)===null||i===void 0?void 0:i.httpStatus)===503?co(n,s.intervalMillis,qp):co(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return s.setThrottleMetadata(o,h),ut.debug(`Calling attemptFetch again in ${l} millis`),Pc(e,h,r,s)}}function Qp(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(ft.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Yp(e){if(!(e instanceof Lt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Xp{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Jp(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zp(){if(Na())try{await Oa()}catch(e){return ut.warn(ft.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}else return ut.warn(ft.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function tm(e,t,n,r,s,i,o){var a;const c=Wp(e);c.then(f=>{n[f.measurementId]=f.appId,e.options.measurementId&&f.measurementId!==e.options.measurementId&&ut.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>ut.error(f)),t.push(c);const u=Zp().then(f=>{if(f)return r.getId()}),[l,h]=await Promise.all([c,u]);jp(i)||Mp(i,l.measurementId),s("js",new Date);const d=(a=o?.config)!==null&&a!==void 0?a:{};return d[Vp]="firebase",d.update=!0,h!=null&&(d[bp]=h),s("config",l.measurementId,d),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(t){this.app=t}_delete(){return delete Ge[this.app.options.appId],Promise.resolve()}}let Ge={},So=[];const Co={};let as="dataLayer",nm="gtag",bo,Sc,Vo=!1;function rm(){const e=[];if(nh()&&e.push("This is a browser extension environment."),rh()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=ft.create("invalid-analytics-context",{errorInfo:t});ut.warn(n.message)}}function sm(e,t,n){rm();const r=e.options.appId;if(!r)throw ft.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ut.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ft.create("no-api-key");if(Ge[r]!=null)throw ft.create("already-exists",{id:r});if(!Vo){Lp(as);const{wrappedGtag:i,gtagCore:o}=$p(Ge,So,Co,as,nm);Sc=i,bo=o,Vo=!0}return Ge[r]=tm(e,So,Co,t,bo,as,n),new em(e)}function im(e=ei()){e=lt(e);const t=De(e,Xn);return t.isInitialized()?t.getImmediate():om(e)}function om(e,t={}){const n=De(e,Xn);if(n.isInitialized()){const s=n.getImmediate();if(Wn(t,n.getOptions()))return s;throw ft.create("already-initialized")}return n.initialize({options:t})}function am(e,t,n,r){e=lt(e),Jp(Sc,Ge[e.app.options.appId],t,n,r).catch(s=>ut.error(s))}const Do="@firebase/analytics",ko="0.10.0";function cm(){Nt(new St(Xn,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return sm(r,s,n)},"PUBLIC")),Nt(new St("analytics-internal",e,"PRIVATE")),_t(Do,ko),_t(Do,ko,"esm2017");function e(t){try{const n=t.getProvider(Xn).getImmediate();return{logEvent:(r,s,i)=>am(n,r,s,i)}}catch(n){throw ft.create("interop-component-reg-failed",{reason:n})}}}cm();var um=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,fi=fi||{},A=um||self;function gr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function _n(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function lm(e){return Object.prototype.hasOwnProperty.call(e,cs)&&e[cs]||(e[cs]=++hm)}var cs="closure_uid_"+(1e9*Math.random()>>>0),hm=0;function dm(e,t,n){return e.call.apply(e.bind,arguments)}function fm(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function rt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=dm:rt=fm,rt.apply(null,arguments)}function xn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Q(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Wt(){this.s=this.s,this.o=this.o}var pm=0;Wt.prototype.s=!1;Wt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),pm!=0)&&lm(this)};Wt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Cc=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function pi(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function No(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(gr(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function st(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var mm=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{A.addEventListener("test",()=>{},t),A.removeEventListener("test",()=>{},t)}catch{}return e}();function en(e){return/^[\s\xa0]*$/.test(e)}function _r(){var e=A.navigator;return e&&(e=e.userAgent)?e:""}function It(e){return _r().indexOf(e)!=-1}function mi(e){return mi[" "](e),e}mi[" "]=function(){};function gm(e,t){var n=cg;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var _m=It("Opera"),we=It("Trident")||It("MSIE"),bc=It("Edge"),bs=bc||we,Vc=It("Gecko")&&!(_r().toLowerCase().indexOf("webkit")!=-1&&!It("Edge"))&&!(It("Trident")||It("MSIE"))&&!It("Edge"),ym=_r().toLowerCase().indexOf("webkit")!=-1&&!It("Edge");function Dc(){var e=A.document;return e?e.documentMode:void 0}var Vs;t:{var us="",ls=function(){var e=_r();if(Vc)return/rv:([^\);]+)(\)|;)/.exec(e);if(bc)return/Edge\/([\d\.]+)/.exec(e);if(we)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(ym)return/WebKit\/(\S+)/.exec(e);if(_m)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ls&&(us=ls?ls[1]:""),we){var hs=Dc();if(hs!=null&&hs>parseFloat(us)){Vs=String(hs);break t}}Vs=us}var Ds;if(A.document&&we){var Oo=Dc();Ds=Oo||parseInt(Vs,10)||void 0}else Ds=void 0;var Em=Ds;function nn(e,t){if(st.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Vc){t:{try{mi(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Tm[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&nn.$.h.call(this)}}Q(nn,st);var Tm={2:"touch",3:"pen",4:"mouse"};nn.prototype.h=function(){nn.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var yn="closure_listenable_"+(1e6*Math.random()|0),Im=0;function wm(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++Im,this.fa=this.ia=!1}function yr(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function gi(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function vm(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function kc(e){const t={};for(const n in e)t[n]=e[n];return t}const xo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nc(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<xo.length;i++)n=xo[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Er(e){this.src=e,this.g={},this.h=0}Er.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Ns(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new wm(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function ks(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=Cc(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(yr(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ns(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var _i="closure_lm_"+(1e6*Math.random()|0),ds={};function Oc(e,t,n,r,s){if(r&&r.once)return Mc(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Oc(e,t[i],n,r,s);return null}return n=Ti(n),e&&e[yn]?e.O(t,n,_n(r)?!!r.capture:!!r,s):xc(e,t,n,!1,r,s)}function xc(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=_n(s)?!!s.capture:!!s,a=Ei(e);if(a||(e[_i]=a=new Er(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=Am(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)mm||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(Fc(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Am(){function e(n){return t.call(e.src,e.listener,n)}const t=Rm;return e}function Mc(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Mc(e,t[i],n,r,s);return null}return n=Ti(n),e&&e[yn]?e.P(t,n,_n(r)?!!r.capture:!!r,s):xc(e,t,n,!0,r,s)}function Lc(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Lc(e,t[i],n,r,s);else r=_n(r)?!!r.capture:!!r,n=Ti(n),e&&e[yn]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Ns(i,n,r,s),-1<n&&(yr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ei(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ns(t,n,r,s)),(n=-1<e?t[e]:null)&&yi(n))}function yi(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[yn])ks(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Fc(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ei(t))?(ks(n,e),n.h==0&&(n.src=null,t[_i]=null)):yr(e)}}}function Fc(e){return e in ds?ds[e]:ds[e]="on"+e}function Rm(e,t){if(e.fa)e=!0;else{t=new nn(t,this);var n=e.listener,r=e.la||e.src;e.ia&&yi(e),e=n.call(r,t)}return e}function Ei(e){return e=e[_i],e instanceof Er?e:null}var fs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ti(e){return typeof e=="function"?e:(e[fs]||(e[fs]=function(t){return e.handleEvent(t)}),e[fs])}function W(){Wt.call(this),this.i=new Er(this),this.S=this,this.J=null}Q(W,Wt);W.prototype[yn]=!0;W.prototype.removeEventListener=function(e,t,n,r){Lc(this,e,t,n,r)};function J(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new st(t,e);else if(t instanceof st)t.target=t.target||e;else{var s=t;t=new st(r,e),Nc(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Mn(o,r,!0,t)&&s}if(o=t.g=e,s=Mn(o,r,!0,t)&&s,s=Mn(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=Mn(o,r,!1,t)&&s}W.prototype.N=function(){if(W.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)yr(n[r]);delete e.g[t],e.h--}}this.J=null};W.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};W.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Mn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ks(e.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Ii=A.JSON.stringify;class Pm{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Sm(){var e=wi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Cm{constructor(){this.h=this.g=null}add(t,n){const r=Uc.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Uc=new Pm(()=>new bm,e=>e.reset());class bm{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Vm(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Dm(e){A.setTimeout(()=>{throw e},0)}let rn,sn=!1,wi=new Cm,Bc=()=>{const e=A.Promise.resolve(void 0);rn=()=>{e.then(km)}};var km=()=>{for(var e;e=Sm();){try{e.h.call(e.g)}catch(n){Dm(n)}var t=Uc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}sn=!1};function Tr(e,t){W.call(this),this.h=e||1,this.g=t||A,this.j=rt(this.qb,this),this.l=Date.now()}Q(Tr,W);g=Tr.prototype;g.ga=!1;g.T=null;g.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),J(this,"tick"),this.ga&&(vi(this),this.start()))}};g.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function vi(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}g.N=function(){Tr.$.N.call(this),vi(this),delete this.g};function Ai(e,t,n){if(typeof e=="function")n&&(e=rt(e,n));else if(e&&typeof e.handleEvent=="function")e=rt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:A.setTimeout(e,t||0)}function $c(e){e.g=Ai(()=>{e.g=null,e.i&&(e.i=!1,$c(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Nm extends Wt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:$c(this)}N(){super.N(),this.g&&(A.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function on(e){Wt.call(this),this.h=e,this.g={}}Q(on,Wt);var Mo=[];function jc(e,t,n,r){Array.isArray(n)||(n&&(Mo[0]=n.toString()),n=Mo);for(var s=0;s<n.length;s++){var i=Oc(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function qc(e){gi(e.g,function(t,n){this.g.hasOwnProperty(n)&&yi(t)},e),e.g={}}on.prototype.N=function(){on.$.N.call(this),qc(this)};on.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ir(){this.g=!0}Ir.prototype.Ea=function(){this.g=!1};function Om(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function xm(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function ye(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Lm(e,n)+(r?" "+r:"")})}function Mm(e,t){e.info(function(){return"TIMEOUT: "+t})}Ir.prototype.info=function(){};function Lm(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ii(n)}catch{return t}}var le={},Lo=null;function wr(){return Lo=Lo||new W}le.Ta="serverreachability";function zc(e){st.call(this,le.Ta,e)}Q(zc,st);function an(e){const t=wr();J(t,new zc(t))}le.STAT_EVENT="statevent";function Hc(e,t){st.call(this,le.STAT_EVENT,e),this.stat=t}Q(Hc,st);function ct(e){const t=wr();J(t,new Hc(t,e))}le.Ua="timingevent";function Kc(e,t){st.call(this,le.Ua,e),this.size=t}Q(Kc,st);function En(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return A.setTimeout(function(){e()},t)}var vr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Gc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ri(){}Ri.prototype.h=null;function Fo(e){return e.h||(e.h=e.i())}function Wc(){}var Tn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Pi(){st.call(this,"d")}Q(Pi,st);function Si(){st.call(this,"c")}Q(Si,st);var Os;function Ar(){}Q(Ar,Ri);Ar.prototype.g=function(){return new XMLHttpRequest};Ar.prototype.i=function(){return{}};Os=new Ar;function In(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new on(this),this.P=Fm,e=bs?125:void 0,this.V=new Tr(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Qc}function Qc(){this.i=null,this.g="",this.h=!1}var Fm=45e3,xs={},Jn={};g=In.prototype;g.setTimeout=function(e){this.P=e};function Ms(e,t,n){e.L=1,e.v=Pr(Ot(t)),e.s=n,e.S=!0,Yc(e,null)}function Yc(e,t){e.G=Date.now(),wn(e),e.A=Ot(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),su(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Qc,e.g=Ru(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Nm(rt(e.Pa,e,e.g),e.O)),jc(e.U,e.g,"readystatechange",e.nb),t=e.I?kc(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),an(),Om(e.j,e.u,e.A,e.m,e.W,e.s)}g.nb=function(e){e=e.target;const t=this.M;t&&vt(e)==3?t.l():this.Pa(e)};g.Pa=function(e){try{if(e==this.g)t:{const l=vt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||bs||this.g&&(this.h.h||this.g.ja()||jo(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?an(3):an(2)),Rr(this);var n=this.g.da();this.ca=n;e:if(Xc(this)){var r=jo(this.g);e="";var s=r.length,i=vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jt(this),We(this);var o="";break e}this.h.i=new A.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,xm(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!en(a)){var u=a;break e}}u=null}if(n=u)ye(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ls(this,n);else{this.i=!1,this.o=3,ct(12),Jt(this),We(this);break t}}this.S?(Jc(this,l,o),bs&&this.i&&l==3&&(jc(this.U,this.V,"tick",this.mb),this.V.start())):(ye(this.j,this.m,o,null),Ls(this,o)),l==4&&Jt(this),this.i&&!this.J&&(l==4?Iu(this.l,this):(this.i=!1,wn(this)))}else ig(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Jt(this),We(this)}}}catch{}finally{}};function Xc(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Jc(e,t,n){let r=!0,s;for(;!e.J&&e.C<n.length;)if(s=Um(e,n),s==Jn){t==4&&(e.o=4,ct(14),r=!1),ye(e.j,e.m,null,"[Incomplete Response]");break}else if(s==xs){e.o=4,ct(15),ye(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ye(e.j,e.m,s,null),Ls(e,s);Xc(e)&&s!=Jn&&s!=xs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,ct(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ni(t),t.M=!0,ct(11))):(ye(e.j,e.m,n,"[Invalid Chunked Response]"),Jt(e),We(e))}g.mb=function(){if(this.g){var e=vt(this.g),t=this.g.ja();this.C<t.length&&(Rr(this),Jc(this,e,t),this.i&&e!=4&&wn(this))}};function Um(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Jn:(n=Number(t.substring(n,r)),isNaN(n)?xs:(r+=1,r+n>t.length?Jn:(t=t.slice(r,r+n),e.C=r+n,t)))}g.cancel=function(){this.J=!0,Jt(this)};function wn(e){e.Y=Date.now()+e.P,Zc(e,e.P)}function Zc(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=En(rt(e.lb,e),t)}function Rr(e){e.B&&(A.clearTimeout(e.B),e.B=null)}g.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Mm(this.j,this.A),this.L!=2&&(an(),ct(17)),Jt(this),this.o=2,We(this)):Zc(this,this.Y-e)};function We(e){e.l.H==0||e.J||Iu(e.l,e)}function Jt(e){Rr(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,vi(e.V),qc(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Ls(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Fs(n.i,e))){if(!e.K&&Fs(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)er(n),Vr(n);else break t;ki(n),ct(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=En(rt(n.ib,n),6e3));if(1>=au(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Zt(n,11)}else if((e.K||n.g==e)&&er(n),!en(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=e.g;if(f){const E=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=r.i;i.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ci(i,i.h),i.h=null))}if(r.F){const w=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,N(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Au(r,r.J?r.pa:null,r.Y),o.K){cu(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Rr(a),wn(a)),r.g=o}else Eu(r);0<n.j.length&&Dr(n)}else u[0]!="stop"&&u[0]!="close"||Zt(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Zt(n,7):Di(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}an(4)}catch{}}function Bm(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(gr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function $m(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(gr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function tu(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(gr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=$m(e),r=Bm(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var eu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jm(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ne(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ne){this.h=e.h,Zn(this,e.j),this.s=e.s,this.g=e.g,tr(this,e.m),this.l=e.l;var t=e.i,n=new cn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Uo(this,n),this.o=e.o}else e&&(t=String(e).match(eu))?(this.h=!1,Zn(this,t[1]||"",!0),this.s=$e(t[2]||""),this.g=$e(t[3]||"",!0),tr(this,t[4]),this.l=$e(t[5]||"",!0),Uo(this,t[6]||"",!0),this.o=$e(t[7]||"")):(this.h=!1,this.i=new cn(null,this.h))}ne.prototype.toString=function(){var e=[],t=this.j;t&&e.push(je(t,Bo,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(je(t,Bo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(je(n,n.charAt(0)=="/"?Hm:zm,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",je(n,Gm)),e.join("")};function Ot(e){return new ne(e)}function Zn(e,t,n){e.j=n?$e(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tr(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Uo(e,t,n){t instanceof cn?(e.i=t,Wm(e.i,e.h)):(n||(t=je(t,Km)),e.i=new cn(t,e.h))}function N(e,t,n){e.i.set(t,n)}function Pr(e){return N(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function $e(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function je(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,qm),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function qm(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Bo=/[#\/\?@]/g,zm=/[#\?:]/g,Hm=/[#\?]/g,Km=/[#\?@]/g,Gm=/#/g;function cn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Qt(e){e.g||(e.g=new Map,e.h=0,e.i&&jm(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=cn.prototype;g.add=function(e,t){Qt(this),this.i=null,e=ke(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function nu(e,t){Qt(e),t=ke(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ru(e,t){return Qt(e),t=ke(e,t),e.g.has(t)}g.forEach=function(e,t){Qt(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};g.ta=function(){Qt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};g.Z=function(e){Qt(this);let t=[];if(typeof e=="string")ru(this,e)&&(t=t.concat(this.g.get(ke(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};g.set=function(e,t){return Qt(this),this.i=null,e=ke(this,e),ru(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function su(e,t,n){nu(e,t),0<n.length&&(e.i=null,e.g.set(ke(e,t),pi(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function ke(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Wm(e,t){t&&!e.j&&(Qt(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(nu(this,r),su(this,s,n))},e)),e.j=t}var Qm=class{constructor(e,t){this.g=e,this.map=t}};function iu(e){this.l=e||Ym,A.PerformanceNavigationTiming?(e=A.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(A.g&&A.g.Ka&&A.g.Ka()&&A.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ym=10;function ou(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function au(e){return e.h?1:e.g?e.g.size:0}function Fs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ci(e,t){e.g?e.g.add(t):e.h=t}function cu(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}iu.prototype.cancel=function(){if(this.i=uu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function uu(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return pi(e.i)}var Xm=class{stringify(e){return A.JSON.stringify(e,void 0)}parse(e){return A.JSON.parse(e,void 0)}};function Jm(){this.g=new Xm}function Zm(e,t,n){const r=n||"";try{tu(e,function(s,i){let o=s;_n(s)&&(o=Ii(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function tg(e,t){const n=new Ir;if(A.Image){const r=new Image;r.onload=xn(Ln,n,r,"TestLoadImage: loaded",!0,t),r.onerror=xn(Ln,n,r,"TestLoadImage: error",!1,t),r.onabort=xn(Ln,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=xn(Ln,n,r,"TestLoadImage: timeout",!1,t),A.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Ln(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function Sr(e){this.l=e.ec||null,this.j=e.ob||!1}Q(Sr,Ri);Sr.prototype.g=function(){return new Cr(this.l,this.j)};Sr.prototype.i=function(e){return function(){return e}}({});function Cr(e,t){W.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=bi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Q(Cr,W);var bi=0;g=Cr.prototype;g.open=function(e,t){if(this.readyState!=bi)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,un(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||A).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vn(this)),this.readyState=bi};g.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,un(this)),this.g&&(this.readyState=3,un(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof A.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;lu(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function lu(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}g.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?vn(this):un(this),this.readyState==3&&lu(this)}};g.Za=function(e){this.g&&(this.response=this.responseText=e,vn(this))};g.Ya=function(e){this.g&&(this.response=e,vn(this))};g.ka=function(){this.g&&vn(this)};function vn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,un(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function un(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Cr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var eg=A.JSON.parse;function $(e){W.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=hu,this.L=this.M=!1}Q($,W);var hu="",ng=/^https?$/i,rg=["POST","PUT"];g=$.prototype;g.Oa=function(e){this.M=e};g.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Os.g(),this.C=this.u?Fo(this.u):Fo(Os),this.g.onreadystatechange=rt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){$o(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=A.FormData&&e instanceof A.FormData,!(0<=Cc(rg,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{pu(this),0<this.B&&((this.L=sg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.ua,this)):this.A=Ai(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){$o(this,i)}};function sg(e){return we&&typeof e.timeout=="number"&&e.ontimeout!==void 0}g.ua=function(){typeof fi<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,J(this,"timeout"),this.abort(8))};function $o(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,du(e),br(e)}function du(e){e.F||(e.F=!0,J(e,"complete"),J(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,J(this,"complete"),J(this,"abort"),br(this))};g.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),br(this,!0)),$.$.N.call(this)};g.La=function(){this.s||(this.G||this.v||this.l?fu(this):this.kb())};g.kb=function(){fu(this)};function fu(e){if(e.h&&typeof fi<"u"&&(!e.C[1]||vt(e)!=4||e.da()!=2)){if(e.v&&vt(e)==4)Ai(e.La,0,e);else if(J(e,"readystatechange"),vt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(eu)[1]||null;!s&&A.self&&A.self.location&&(s=A.self.location.protocol.slice(0,-1)),r=!ng.test(s?s.toLowerCase():"")}n=r}if(n)J(e,"complete"),J(e,"success");else{e.m=6;try{var i=2<vt(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",du(e)}}finally{br(e)}}}}function br(e,t){if(e.g){pu(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||J(e,"ready");try{n.onreadystatechange=r}catch{}}}function pu(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(A.clearTimeout(e.A),e.A=null)}g.isActive=function(){return!!this.g};function vt(e){return e.g?e.g.readyState:0}g.da=function(){try{return 2<vt(this)?this.g.status:-1}catch{return-1}};g.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),eg(t)}};function jo(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case hu:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function ig(e){const t={};e=(e.g&&2<=vt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(en(e[r]))continue;var n=Vm(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}vm(t,function(r){return r.join(", ")})}g.Ia=function(){return this.m};g.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function mu(e){let t="";return gi(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Vi(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=mu(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):N(e,t,n))}function Fe(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function gu(e){this.Ga=0,this.j=[],this.l=new Ir,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Fe("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Fe("baseRetryDelayMs",5e3,e),this.hb=Fe("retryDelaySeedMs",1e4,e),this.eb=Fe("forwardChannelMaxRetries",2,e),this.xa=Fe("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new iu(e&&e.concurrentRequestLimit),this.Ja=new Jm,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}g=gu.prototype;g.ra=8;g.H=1;function Di(e){if(_u(e),e.H==3){var t=e.W++,n=Ot(e.I);if(N(n,"SID",e.K),N(n,"RID",t),N(n,"TYPE","terminate"),An(e,n),t=new In(e,e.l,t),t.L=2,t.v=Pr(Ot(n)),n=!1,A.navigator&&A.navigator.sendBeacon)try{n=A.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&A.Image&&(new Image().src=t.v,n=!0),n||(t.g=Ru(t.l,null),t.g.ha(t.v)),t.G=Date.now(),wn(t)}vu(e)}function Vr(e){e.g&&(Ni(e),e.g.cancel(),e.g=null)}function _u(e){Vr(e),e.u&&(A.clearTimeout(e.u),e.u=null),er(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&A.clearTimeout(e.m),e.m=null)}function Dr(e){if(!ou(e.i)&&!e.m){e.m=!0;var t=e.Na;rn||Bc(),sn||(rn(),sn=!0),wi.add(t,e),e.C=0}}function og(e,t){return au(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=En(rt(e.Na,e,t),wu(e,e.C)),e.C++,!0)}g.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new In(this,this.l,e);let i=this.s;if(this.U&&(i?(i=kc(i),Nc(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=yu(this,s,t),n=Ot(this.I),N(n,"RID",e),N(n,"CVER",22),this.F&&N(n,"X-HTTP-Session-Id",this.F),An(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(mu(i)))+"&"+t:this.o&&Vi(n,this.o,i)),Ci(this.i,s),this.bb&&N(n,"TYPE","init"),this.P?(N(n,"$req",t),N(n,"SID","null"),s.aa=!0,Ms(s,n,null)):Ms(s,n,t),this.H=2}}else this.H==3&&(e?qo(this,e):this.j.length==0||ou(this.i)||qo(this))};function qo(e,t){var n;t?n=t.m:n=e.W++;const r=Ot(e.I);N(r,"SID",e.K),N(r,"RID",n),N(r,"AID",e.V),An(e,r),e.o&&e.s&&Vi(r,e.o,e.s),n=new In(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=yu(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ci(e.i,n),Ms(n,r,t)}function An(e,t){e.na&&gi(e.na,function(n,r){N(t,r,n)}),e.h&&tu({},function(n,r){N(t,r,n)})}function yu(e,t,n){n=Math.min(e.j.length,n);var r=e.h?rt(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].g;const l=s[c].map;if(u-=i,0>u)i=Math.max(0,s[c].g-100),a=!1;else try{Zm(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Eu(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;rn||Bc(),sn||(rn(),sn=!0),wi.add(t,e),e.A=0}}function ki(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=En(rt(e.Ma,e),wu(e,e.A)),e.A++,!0)}g.Ma=function(){if(this.u=null,Tu(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=En(rt(this.jb,this),e)}};g.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ct(10),Vr(this),Tu(this))};function Ni(e){e.B!=null&&(A.clearTimeout(e.B),e.B=null)}function Tu(e){e.g=new In(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Ot(e.wa);N(t,"RID","rpc"),N(t,"SID",e.K),N(t,"AID",e.V),N(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&N(t,"TO",e.qa),N(t,"TYPE","xmlhttp"),An(e,t),e.o&&e.s&&Vi(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Pr(Ot(t)),n.s=null,n.S=!0,Yc(n,e)}g.ib=function(){this.v!=null&&(this.v=null,Vr(this),ki(this),ct(19))};function er(e){e.v!=null&&(A.clearTimeout(e.v),e.v=null)}function Iu(e,t){var n=null;if(e.g==t){er(e),Ni(e),e.g=null;var r=2}else if(Fs(e.i,t))n=t.F,cu(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;r=wr(),J(r,new Kc(r,n)),Dr(e)}else Eu(e);else if(s=t.o,s==3||s==0&&0<t.ca||!(r==1&&og(e,t)||r==2&&ki(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Zt(e,5);break;case 4:Zt(e,10);break;case 3:Zt(e,6);break;default:Zt(e,2)}}}function wu(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Zt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=rt(e.pb,e);n||(n=new ne("//www.google.com/images/cleardot.gif"),A.location&&A.location.protocol=="http"||Zn(n,"https"),Pr(n)),tg(n.toString(),r)}else ct(2);e.H=0,e.h&&e.h.za(t),vu(e),_u(e)}g.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ct(2)):(this.l.info("Failed to ping google.com"),ct(1))};function vu(e){if(e.H=0,e.ma=[],e.h){const t=uu(e.i);(t.length!=0||e.j.length!=0)&&(No(e.ma,t),No(e.ma,e.j),e.i.i.length=0,pi(e.j),e.j.length=0),e.h.ya()}}function Au(e,t,n){var r=n instanceof ne?Ot(n):new ne(n);if(r.g!="")t&&(r.g=t+"."+r.g),tr(r,r.m);else{var s=A.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new ne(null);r&&Zn(i,r),t&&(i.g=t),s&&tr(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&N(r,n,t),N(r,"VER",e.ra),An(e,r),r}function Ru(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new $(new Sr({ob:!0})):new $(e.va),t.Oa(e.J),t}g.isActive=function(){return!!this.h&&this.h.isActive(this)};function Pu(){}g=Pu.prototype;g.Ba=function(){};g.Aa=function(){};g.za=function(){};g.ya=function(){};g.isActive=function(){return!0};g.Va=function(){};function nr(){if(we&&!(10<=Number(Em)))throw Error("Environmental error: no available transport.")}nr.prototype.g=function(e,t){return new mt(e,t)};function mt(e,t){W.call(this),this.g=new gu(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!en(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!en(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ne(this)}Q(mt,W);mt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ct(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Au(e,null,e.Y),Dr(e)};mt.prototype.close=function(){Di(this.g)};mt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ii(e),e=n);t.j.push(new Qm(t.fb++,e)),t.H==3&&Dr(t)};mt.prototype.N=function(){this.g.h=null,delete this.j,Di(this.g),delete this.g,mt.$.N.call(this)};function Su(e){Pi.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Q(Su,Pi);function Cu(){Si.call(this),this.status=1}Q(Cu,Si);function Ne(e){this.g=e}Q(Ne,Pu);Ne.prototype.Ba=function(){J(this.g,"a")};Ne.prototype.Aa=function(e){J(this.g,new Su(e))};Ne.prototype.za=function(e){J(this.g,new Cu)};Ne.prototype.ya=function(){J(this.g,"b")};function ag(){this.blockSize=-1}function Et(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Q(Et,ag);Et.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ps(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}Et.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)ps(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){ps(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){ps(this,r),s=0;break}}this.h=s,this.i+=t};Et.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function k(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var cg={};function Oi(e){return-128<=e&&128>e?gm(e,function(t){return new k([t|0],0>t?-1:0)}):new k([e|0],0>e?-1:0)}function At(e){if(isNaN(e)||!isFinite(e))return Ee;if(0>e)return X(At(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Us;return new k(t,0)}function bu(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return X(bu(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=At(Math.pow(t,8)),r=Ee,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=At(Math.pow(t,i)),r=r.R(i).add(At(o))):(r=r.R(n),r=r.add(At(o)))}return r}var Us=4294967296,Ee=Oi(0),Bs=Oi(1),zo=Oi(16777216);g=k.prototype;g.ea=function(){if(gt(this))return-X(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Us+r)*t,t*=Us}return e};g.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Dt(this))return"0";if(gt(this))return"-"+X(this).toString(e);for(var t=At(Math.pow(e,6)),n=this,r="";;){var s=sr(n,t).g;n=rr(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,Dt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};g.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Dt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function gt(e){return e.h==-1}g.X=function(e){return e=rr(this,e),gt(e)?-1:Dt(e)?0:1};function X(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new k(n,~e.h).add(Bs)}g.abs=function(){return gt(this)?X(this):this};g.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new k(n,n[n.length-1]&-2147483648?-1:0)};function rr(e,t){return e.add(X(t))}g.R=function(e){if(Dt(this)||Dt(e))return Ee;if(gt(this))return gt(e)?X(this).R(X(e)):X(X(this).R(e));if(gt(e))return X(this.R(X(e)));if(0>this.X(zo)&&0>e.X(zo))return At(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,c=e.D(s)&65535;n[2*r+2*s]+=o*c,Fn(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Fn(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Fn(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Fn(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new k(n,0)};function Fn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Ue(e,t){this.g=e,this.h=t}function sr(e,t){if(Dt(t))throw Error("division by zero");if(Dt(e))return new Ue(Ee,Ee);if(gt(e))return t=sr(X(e),t),new Ue(X(t.g),X(t.h));if(gt(t))return t=sr(e,X(t)),new Ue(X(t.g),t.h);if(30<e.g.length){if(gt(e)||gt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Bs,r=t;0>=r.X(e);)n=Ho(n),r=Ho(r);var s=pe(n,1),i=pe(r,1);for(r=pe(r,2),n=pe(n,2);!Dt(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=pe(r,1),n=pe(n,1)}return t=rr(e,s.R(t)),new Ue(s,t)}for(s=Ee;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=At(n),o=i.R(t);gt(o)||0<o.X(e);)n-=r,i=At(n),o=i.R(t);Dt(i)&&(i=Bs),s=s.add(i),e=rr(e,o)}return new Ue(s,e)}g.gb=function(e){return sr(this,e).h};g.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new k(n,this.h&e.h)};g.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new k(n,this.h|e.h)};g.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new k(n,this.h^e.h)};function Ho(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new k(n,e.h)}function pe(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new k(s,e.h)}nr.prototype.createWebChannel=nr.prototype.g;mt.prototype.send=mt.prototype.u;mt.prototype.open=mt.prototype.m;mt.prototype.close=mt.prototype.close;vr.NO_ERROR=0;vr.TIMEOUT=8;vr.HTTP_ERROR=6;Gc.COMPLETE="complete";Wc.EventType=Tn;Tn.OPEN="a";Tn.CLOSE="b";Tn.ERROR="c";Tn.MESSAGE="d";W.prototype.listen=W.prototype.O;$.prototype.listenOnce=$.prototype.P;$.prototype.getLastError=$.prototype.Sa;$.prototype.getLastErrorCode=$.prototype.Ia;$.prototype.getStatus=$.prototype.da;$.prototype.getResponseJson=$.prototype.Wa;$.prototype.getResponseText=$.prototype.ja;$.prototype.send=$.prototype.ha;$.prototype.setWithCredentials=$.prototype.Oa;Et.prototype.digest=Et.prototype.l;Et.prototype.reset=Et.prototype.reset;Et.prototype.update=Et.prototype.j;k.prototype.add=k.prototype.add;k.prototype.multiply=k.prototype.R;k.prototype.modulo=k.prototype.gb;k.prototype.compare=k.prototype.X;k.prototype.toNumber=k.prototype.ea;k.prototype.toString=k.prototype.toString;k.prototype.getBits=k.prototype.D;k.fromNumber=At;k.fromString=bu;var ug=function(){return new nr},lg=function(){return wr()},ms=vr,hg=Gc,dg=le,Ko={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Un=Wc,fg=$,pg=Et,Te=k;const Go="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oe="10.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=new Zs("@firebase/firestore");function Be(){return ae.logLevel}function y(e,...t){if(ae.logLevel<=b.DEBUG){const n=t.map(xi);ae.debug(`Firestore (${Oe}): ${e}`,...n)}}function xt(e,...t){if(ae.logLevel<=b.ERROR){const n=t.map(xi);ae.error(`Firestore (${Oe}): ${e}`,...n)}}function ve(e,...t){if(ae.logLevel<=b.WARN){const n=t.map(xi);ae.warn(`Firestore (${Oe}): ${e}`,...n)}}function xi(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e="Unexpected state"){const t=`FIRESTORE (${Oe}) INTERNAL ASSERTION FAILED: `+e;throw xt(t),new Error(t)}function O(e,t){e||v()}function P(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Lt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class mg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class gg{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _g{constructor(t){this.t=t,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new qt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qt,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(O(typeof r.accessToken=="string"),new Vu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return O(t===null||typeof t=="string"),new tt(t)}}class yg{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Eg{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new yg(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tg{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ig{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(O(typeof n.token=="string"),this.R=n.token,new Tg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=wg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function D(e,t){return e<t?-1:e>t?1:0}function Ae(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new T(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new T(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new T(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new T(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return K.fromMillis(Date.now())}static fromDate(t){return K.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new K(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.timestamp=t}static fromTimestamp(t){return new R(t)}static min(){return new R(new K(0,0))}static max(){return new R(new K(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t,n,r){n===void 0?n=0:n>t.length&&v(),r===void 0?r=t.length-n:r>t.length-n&&v(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return ln.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ln?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class U extends ln{construct(t,n,r){return new U(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new T(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new U(n)}static emptyPath(){return new U([])}}const vg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends ln{construct(t,n,r){return new nt(t,n,r)}static isValidIdentifier(t){return vg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new T(m.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new T(m.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new T(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new T(m.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t){this.path=t}static fromPath(t){return new I(U.fromString(t))}static fromName(t){return new I(U.fromString(t).popFirst(5))}static empty(){return new I(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&U.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return U.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new I(new U(t.slice()))}}function Ag(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=R.fromTimestamp(r===1e9?new K(n+1,0):new K(n,r));return new Ht(s,I.empty(),t)}function Rg(e){return new Ht(e.readTime,e.key,-1)}class Ht{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Ht(R.min(),I.empty(),-1)}static max(){return new Ht(R.max(),I.empty(),-1)}}function Pg(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=I.comparator(e.documentKey,t.documentKey),n!==0?n:D(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(e){if(e.code!==m.FAILED_PRECONDITION||e.message!==Sg)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new p((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):p.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):p.reject(n)}static resolve(t){return new p((n,r)=>{n(t)})}static reject(t){return new p((n,r)=>{r(t)})}static waitFor(t){return new p((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(t){let n=p.resolve(!1);for(const r of t)n=n.next(s=>s?p.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new p((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(t,n){return new p((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function Pn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Mi.ae=-1;function kr(e){return e==null}function ir(e){return e===0&&1/e==-1/0}function bg(e){return typeof e=="number"&&Number.isInteger(e)&&!ir(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function he(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ku(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t,n){this.comparator=t,this.root=n||Y.EMPTY}insert(t,n){return new F(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Y.BLACK,null,null))}remove(t){return new F(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Y.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Bn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Bn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Bn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Bn(this.root,t,this.comparator,!0)}}class Bn{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Y{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Y.RED,this.left=s??Y.EMPTY,this.right=i??Y.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Y(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Y.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Y.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Y.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Y.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}}Y.EMPTY=null,Y.RED=!0,Y.BLACK=!1;Y.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Y(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.comparator=t,this.data=new F(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qo(this.data.getIterator())}getIteratorFrom(t){return new Qo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof it)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new it(this.comparator);return n.data=t,n}}class Qo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.fields=t,t.sort(nt.comparator)}static empty(){return new yt([])}unionWith(t){let n=new it(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new yt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ae(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Nu("Invalid base64 string: "+i):i}}(t);return new ot(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new ot(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const Vg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kt(e){if(O(!!e),typeof e=="string"){let t=0;const n=Vg.exec(e);if(O(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:z(e.seconds),nanos:z(e.nanos)}}function z(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ce(e){return typeof e=="string"?ot.fromBase64String(e):ot.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(e){var t,n;return((n=(((t=e?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fi(e){const t=e.mapValue.fields.__previous_value__;return Li(t)?Fi(t):t}function hn(e){const t=Kt(e.mapValue.fields.__local_write_time__.timestampValue);return new K(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(t,n,r,s,i,o,a,c,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class dn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new dn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof dn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ue(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Li(e)?4:kg(e)?9007199254740991:10:v()}function Ct(e,t){if(e===t)return!0;const n=ue(e);if(n!==ue(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return hn(e).isEqual(hn(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Kt(s.timestampValue),a=Kt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return ce(s.bytesValue).isEqual(ce(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return z(s.geoPointValue.latitude)===z(i.geoPointValue.latitude)&&z(s.geoPointValue.longitude)===z(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return z(s.integerValue)===z(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=z(s.doubleValue),a=z(i.doubleValue);return o===a?ir(o)===ir(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Ae(e.arrayValue.values||[],t.arrayValue.values||[],Ct);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Wo(o)!==Wo(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Ct(o[c],a[c])))return!1;return!0}(e,t);default:return v()}}function fn(e,t){return(e.values||[]).find(n=>Ct(n,t))!==void 0}function Re(e,t){if(e===t)return 0;const n=ue(e),r=ue(t);if(n!==r)return D(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=z(i.integerValue||i.doubleValue),c=z(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return Yo(e.timestampValue,t.timestampValue);case 4:return Yo(hn(e),hn(t));case 5:return D(e.stringValue,t.stringValue);case 6:return function(i,o){const a=ce(i),c=ce(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=D(a[u],c[u]);if(l!==0)return l}return D(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=D(z(i.latitude),z(o.latitude));return a!==0?a:D(z(i.longitude),z(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=Re(a[u],c[u]);if(l)return l}return D(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===$n.mapValue&&o===$n.mapValue)return 0;if(i===$n.mapValue)return 1;if(o===$n.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=D(c[h],l[h]);if(d!==0)return d;const f=Re(a[c[h]],u[l[h]]);if(f!==0)return f}return D(c.length,l.length)}(e.mapValue,t.mapValue);default:throw v()}}function Yo(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return D(e,t);const n=Kt(e),r=Kt(t),s=D(n.seconds,r.seconds);return s!==0?s:D(n.nanos,r.nanos)}function Pe(e){return $s(e)}function $s(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Kt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return ce(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return I.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=$s(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${$s(n.fields[o])}`;return s+"}"}(e.mapValue):v()}function js(e){return!!e&&"integerValue"in e}function Ui(e){return!!e&&"arrayValue"in e}function Xo(e){return!!e&&"nullValue"in e}function Jo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function qn(e){return!!e&&"mapValue"in e}function Qe(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return he(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Qe(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Qe(e.arrayValue.values[n]);return t}return Object.assign({},e)}function kg(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.value=t}static empty(){return new ht({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!qn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Qe(n)}setAll(t){let n=nt.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Qe(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());qn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ct(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];qn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){he(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new ht(Qe(this.value))}}function Ou(e){const t=[];return he(e.fields,(n,r)=>{const s=new nt([n]);if(qn(r)){const i=Ou(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new yt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new et(t,0,R.min(),R.min(),R.min(),ht.empty(),0)}static newFoundDocument(t,n,r,s){return new et(t,1,n,R.min(),r,s,0)}static newNoDocument(t,n){return new et(t,2,n,R.min(),R.min(),ht.empty(),0)}static newUnknownDocument(t,n){return new et(t,3,n,R.min(),R.min(),ht.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(R.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=R.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,n){this.position=t,this.inclusive=n}}function Zo(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=I.comparator(I.fromName(o.referenceValue),n.key):r=Re(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ta(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ct(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t,n="asc"){this.field=t,this.dir=n}}function Ng(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{}class H extends xu{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new xg(t,n,r):n==="array-contains"?new Fg(t,r):n==="in"?new Ug(t,r):n==="not-in"?new Bg(t,r):n==="array-contains-any"?new $g(t,r):new H(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Mg(t,r):new Lg(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Re(n,this.value)):n!==null&&ue(this.value)===ue(n)&&this.matchesComparison(Re(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class bt extends xu{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new bt(t,n)}matches(t){return Mu(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Mu(e){return e.op==="and"}function Lu(e){return Og(e)&&Mu(e)}function Og(e){for(const t of e.filters)if(t instanceof bt)return!1;return!0}function qs(e){if(e instanceof H)return e.field.canonicalString()+e.op.toString()+Pe(e.value);if(Lu(e))return e.filters.map(t=>qs(t)).join(",");{const t=e.filters.map(n=>qs(n)).join(",");return`${e.op}(${t})`}}function Fu(e,t){return e instanceof H?function(r,s){return s instanceof H&&r.op===s.op&&r.field.isEqual(s.field)&&Ct(r.value,s.value)}(e,t):e instanceof bt?function(r,s){return s instanceof bt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Fu(o,s.filters[a]),!0):!1}(e,t):void v()}function Uu(e){return e instanceof H?function(n){return`${n.field.canonicalString()} ${n.op} ${Pe(n.value)}`}(e):e instanceof bt?function(n){return n.op.toString()+" {"+n.getFilters().map(Uu).join(" ,")+"}"}(e):"Filter"}class xg extends H{constructor(t,n,r){super(t,n,r),this.key=I.fromName(r.referenceValue)}matches(t){const n=I.comparator(t.key,this.key);return this.matchesComparison(n)}}class Mg extends H{constructor(t,n){super(t,"in",n),this.keys=Bu("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Lg extends H{constructor(t,n){super(t,"not-in",n),this.keys=Bu("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Bu(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>I.fromName(r.referenceValue))}class Fg extends H{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ui(n)&&fn(n.arrayValue,this.value)}}class Ug extends H{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&fn(this.value.arrayValue,n)}}class Bg extends H{constructor(t,n){super(t,"not-in",n)}matches(t){if(fn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!fn(this.value.arrayValue,n)}}class $g extends H{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ui(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function ea(e,t=null,n=[],r=[],s=null,i=null,o=null){return new jg(e,t,n,r,s,i,o)}function Bi(e){const t=P(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>qs(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),kr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Pe(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Pe(r)).join(",")),t.he=n}return t.he}function $i(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ng(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Fu(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ta(e.startAt,t.startAt)&&ta(e.endAt,t.endAt)}function zs(e){return I.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function qg(e,t,n,r,s,i,o,a){return new Nr(e,t,n,r,s,i,o,a)}function Or(e){return new Nr(e)}function na(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function zg(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Hg(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Kg(e){return e.collectionGroup!==null}function Xe(e){const t=P(e);if(t.Pe===null){t.Pe=[];const n=Hg(t),r=zg(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new Ye(n)),t.Pe.push(new Ye(nt.keyField(),"asc"));else{let s=!1;for(const i of t.explicitOrderBy)t.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Ye(nt.keyField(),i))}}}return t.Pe}function Rt(e){const t=P(e);return t.Ie||(t.Ie=Gg(t,Xe(e))),t.Ie}function Gg(e,t){if(e.limitType==="F")return ea(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ye(s.field,i)});const n=e.endAt?new or(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new or(e.startAt.position,e.startAt.inclusive):null;return ea(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Hs(e,t,n){return new Nr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function xr(e,t){return $i(Rt(e),Rt(t))&&e.limitType===t.limitType}function $u(e){return`${Bi(Rt(e))}|lt:${e.limitType}`}function me(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Uu(s)).join(", ")}]`),kr(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Pe(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Pe(s)).join(",")),`Target(${r})`}(Rt(e))}; limitType=${e.limitType})`}function Mr(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):I.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of Xe(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=Zo(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Xe(r),s)||r.endAt&&!function(o,a,c){const u=Zo(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Xe(r),s))}(e,t)}function Wg(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ju(e){return(t,n)=>{let r=!1;for(const s of Xe(e)){const i=Qg(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Qg(e,t,n){const r=e.field.isKeyField()?I.comparator(t.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?Re(c,u):v()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){he(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return ku(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=new F(I.comparator);function Mt(){return Yg}const qu=new F(I.comparator);function qe(...e){let t=qu;for(const n of e)t=t.insert(n.key,n);return t}function zu(e){let t=qu;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function te(){return Je()}function Hu(){return Je()}function Je(){return new xe(e=>e.toString(),(e,t)=>e.isEqual(t))}const Xg=new F(I.comparator),Jg=new it(I.comparator);function S(...e){let t=Jg;for(const n of e)t=t.add(n);return t}const Zg=new it(D);function t_(){return Zg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ir(t)?"-0":t}}function Gu(e){return{integerValue:""+e}}function e_(e,t){return bg(t)?Gu(t):Ku(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this._=void 0}}function n_(e,t,n){return e instanceof ar?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Li(i)&&(i=Fi(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof Se?Qu(e,t):e instanceof pn?Yu(e,t):function(s,i){const o=Wu(s,i),a=ra(o)+ra(s.Te);return js(o)&&js(s.Te)?Gu(a):Ku(s.serializer,a)}(e,t)}function r_(e,t,n){return e instanceof Se?Qu(e,t):e instanceof pn?Yu(e,t):n}function Wu(e,t){return e instanceof cr?function(r){return js(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class ar extends Lr{}class Se extends Lr{constructor(t){super(),this.elements=t}}function Qu(e,t){const n=Xu(t);for(const r of e.elements)n.some(s=>Ct(s,r))||n.push(r);return{arrayValue:{values:n}}}class pn extends Lr{constructor(t){super(),this.elements=t}}function Yu(e,t){let n=Xu(t);for(const r of e.elements)n=n.filter(s=>!Ct(s,r));return{arrayValue:{values:n}}}class cr extends Lr{constructor(t,n){super(),this.serializer=t,this.Te=n}}function ra(e){return z(e.integerValue||e.doubleValue)}function Xu(e){return Ui(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(t,n){this.field=t,this.transform=n}}function i_(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Se&&s instanceof Se||r instanceof pn&&s instanceof pn?Ae(r.elements,s.elements,Ct):r instanceof cr&&s instanceof cr?Ct(r.Te,s.Te):r instanceof ar&&s instanceof ar}(e.transform,t.transform)}class o_{constructor(t,n){this.version=t,this.transformResults=n}}class kt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new kt}static exists(t){return new kt(void 0,t)}static updateTime(t){return new kt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function zn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Fr{}function Ju(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new tl(e.key,kt.none()):new Ur(e.key,e.data,kt.none());{const n=e.data,r=ht.empty();let s=new it(nt.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new de(e.key,r,new yt(s.toArray()),kt.none())}}function a_(e,t,n){e instanceof Ur?function(s,i,o){const a=s.value.clone(),c=ia(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof de?function(s,i,o){if(!zn(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=ia(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Zu(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Ze(e,t,n,r){return e instanceof Ur?function(i,o,a,c){if(!zn(i.precondition,o))return a;const u=i.value.clone(),l=oa(i.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof de?function(i,o,a,c){if(!zn(i.precondition,o))return a;const u=oa(i.fieldTransforms,c,o),l=o.data;return l.setAll(Zu(i)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return zn(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function c_(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=Wu(r.transform,s||null);i!=null&&(n===null&&(n=ht.empty()),n.set(r.field,i))}return n||null}function sa(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ae(r,s,(i,o)=>i_(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ur extends Fr{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class de extends Fr{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Zu(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function ia(e,t,n){const r=new Map;O(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,r_(o,a,n[s]))}return r}function oa(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,n_(i,o,t))}return r}class tl extends Fr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class u_ extends Fr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&a_(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Ze(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Ze(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Hu();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Ju(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(R.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),S())}isEqual(t){return this.batchId===t.batchId&&Ae(this.mutations,t.mutations,(n,r)=>sa(n,r))&&Ae(this.baseMutations,t.baseMutations,(n,r)=>sa(n,r))}}class ji{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){O(t.mutations.length===r.length);let s=function(){return Xg}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ji(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q,C;function f_(e){switch(e){default:return v();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function el(e){if(e===void 0)return xt("GRPC error has no .code"),m.UNKNOWN;switch(e){case q.OK:return m.OK;case q.CANCELLED:return m.CANCELLED;case q.UNKNOWN:return m.UNKNOWN;case q.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case q.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case q.INTERNAL:return m.INTERNAL;case q.UNAVAILABLE:return m.UNAVAILABLE;case q.UNAUTHENTICATED:return m.UNAUTHENTICATED;case q.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case q.NOT_FOUND:return m.NOT_FOUND;case q.ALREADY_EXISTS:return m.ALREADY_EXISTS;case q.PERMISSION_DENIED:return m.PERMISSION_DENIED;case q.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case q.ABORTED:return m.ABORTED;case q.OUT_OF_RANGE:return m.OUT_OF_RANGE;case q.UNIMPLEMENTED:return m.UNIMPLEMENTED;case q.DATA_LOSS:return m.DATA_LOSS;default:return v()}}(C=q||(q={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=new Te([4294967295,4294967295],0);function aa(e){const t=p_().encode(e),n=new pg;return n.update(t),new Uint8Array(n.digest())}function ca(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Te([n,r],0),new Te([s,i],0)]}class qi{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ze(`Invalid padding: ${n}`);if(r<0)throw new ze(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new ze(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new ze(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*t.length-n,this.Re=Te.fromNumber(this.Ae)}Ve(t,n,r){let s=t.add(n.multiply(Te.fromNumber(r)));return s.compare(m_)===1&&(s=new Te([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ae===0)return!1;const n=aa(t),[r,s]=ca(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new qi(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Ae===0)return;const n=aa(t),[r,s]=ca(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class ze extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Sn.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Br(R.min(),s,new F(D),Mt(),S())}}class Sn{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Sn(r,n,S(),S(),S())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,n,r,s){this.ge=t,this.removedTargetIds=n,this.key=r,this.pe=s}}class nl{constructor(t,n){this.targetId=t,this.ye=n}}class rl{constructor(t,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ua{constructor(){this.we=0,this.Se=ha(),this.be=ot.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(t){t.approximateByteSize()>0&&(this.Ce=!0,this.be=t)}xe(){let t=S(),n=S(),r=S();return this.Se.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:v()}}),new Sn(this.be,this.De,t,n,r)}Oe(){this.Ce=!1,this.Se=ha()}Ne(t,n){this.Ce=!0,this.Se=this.Se.insert(t,n)}Be(t){this.Ce=!0,this.Se=this.Se.remove(t)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class g_{constructor(t){this.Qe=t,this.Ke=new Map,this.$e=Mt(),this.Ue=la(),this.We=new F(D)}Ge(t){for(const n of t.ge)t.pe&&t.pe.isFoundDocument()?this.ze(n,t.pe):this.je(n,t.key,t.pe);for(const n of t.removedTargetIds)this.je(n,t.key,t.pe)}He(t){this.forEachTarget(t,n=>{const r=this.Je(n);switch(t.state){case 0:this.Ye(n)&&r.Me(t.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(t.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(t.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(t.resumeToken));break;default:v()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(t){const n=t.targetId,r=t.ye.count,s=this.et(n);if(s){const i=s.target;if(zs(i))if(r===0){const o=new I(i.path);this.je(n,o,et.newNoDocument(o,R.min()))}else O(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(t),c=a?this.rt(a,t,o):1;if(c!==0){this.Ze(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,u)}}}}}nt(t){const n=t.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=ce(r).toUint8Array()}catch(c){if(c instanceof Nu)return ve("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new qi(o,s,i)}catch(c){return ve(c instanceof ze?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(t,n,r){return n.ye.count===r-this.ot(t,n.targetId)?0:2}ot(t,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(t){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&zs(a.target)){const c=new I(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,et.newNoDocument(c,t))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=S();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.et(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(t));const s=new Br(t,n,this.We,this.$e,r);return this.$e=Mt(),this.Ue=la(),this.We=new F(D),s}ze(t,n){if(!this.Ye(t))return;const r=this.ut(t,n.key)?2:0;this.Je(t).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(t))}je(t,n,r){if(!this.Ye(t))return;const s=this.Je(t);this.ut(t,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(t)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(t){this.Ke.delete(t)}tt(t){const n=this.Je(t).xe();return this.Qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Le(t){this.Je(t).Le()}Je(t){let n=this.Ke.get(t);return n||(n=new ua,this.Ke.set(t,n)),n}ct(t){let n=this.Ue.get(t);return n||(n=new it(D),this.Ue=this.Ue.insert(t,n)),n}Ye(t){const n=this.et(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}et(t){const n=this.Ke.get(t);return n&&n.ve?null:this.Qe.lt(t)}Ze(t){this.Ke.set(t,new ua),this.Qe.getRemoteKeysForTarget(t).forEach(n=>{this.je(t,n,null)})}ut(t,n){return this.Qe.getRemoteKeysForTarget(t).has(n)}}function la(){return new F(I.comparator)}function ha(){return new F(I.comparator)}const __=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),y_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),E_=(()=>({and:"AND",or:"OR"}))();class T_{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ks(e,t){return e.useProto3Json||kr(t)?t:{value:t}}function ur(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sl(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function I_(e,t){return ur(e,t.toTimestamp())}function Pt(e){return O(!!e),R.fromTimestamp(function(n){const r=Kt(n);return new K(r.seconds,r.nanos)}(e))}function zi(e,t){return function(r){return new U(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function il(e){const t=U.fromString(e);return O(ul(t)),t}function Gs(e,t){return zi(e.databaseId,t.path)}function gs(e,t){const n=il(t);if(n.get(1)!==e.databaseId.projectId)throw new T(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new T(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new I(ol(n))}function Ws(e,t){return zi(e.databaseId,t)}function w_(e){const t=il(e);return t.length===4?U.emptyPath():ol(t)}function Qs(e){return new U(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ol(e){return O(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function da(e,t,n){return{name:Gs(e,t),fields:n.value.mapValue.fields}}function v_(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:v()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(u,l){return u.useProto3Json?(O(l===void 0||typeof l=="string"),ot.fromBase64String(l||"")):(O(l===void 0||l instanceof Uint8Array),ot.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const l=u.code===void 0?m.UNKNOWN:el(u.code);return new T(l,u.message||"")}(o);n=new rl(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=gs(e,r.document.name),i=Pt(r.document.updateTime),o=r.document.createTime?Pt(r.document.createTime):R.min(),a=new ht({mapValue:{fields:r.document.fields}}),c=et.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Hn(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=gs(e,r.document),i=r.readTime?Pt(r.readTime):R.min(),o=et.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Hn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=gs(e,r.document),i=r.removedTargetIds||[];n=new Hn([],i,s,null)}else{if(!("filter"in t))return v();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new d_(s,i),a=r.targetId;n=new nl(a,o)}}return n}function A_(e,t){let n;if(t instanceof Ur)n={update:da(e,t.key,t.value)};else if(t instanceof tl)n={delete:Gs(e,t.key)};else if(t instanceof de)n={update:da(e,t.key,t.data),updateMask:N_(t.fieldMask)};else{if(!(t instanceof u_))return v();n={verify:Gs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ar)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Se)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof pn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof cr)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw v()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:I_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:v()}(e,t.precondition)),n}function R_(e,t){return e&&e.length>0?(O(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?Pt(s.updateTime):Pt(i);return o.isEqual(R.min())&&(o=Pt(i)),new o_(o,s.transformResults||[])}(n,t))):[]}function P_(e,t){return{documents:[Ws(e,t.path)]}}function S_(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Ws(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ws(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return cl(bt.create(c,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:ge(h.field),direction:V_(h.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Ks(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function C_(e){let t=w_(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){O(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=function(h){const d=al(h);return d instanceof bt&&Lu(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(E){return new Ye(_e(E.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,kr(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new or(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new or(f,d)}(n.endAt)),qg(t,s,o,i,a,"F",c,u)}function b_(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return v()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function al(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_e(n.unaryFilter.field);return H.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=_e(n.unaryFilter.field);return H.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=_e(n.unaryFilter.field);return H.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_e(n.unaryFilter.field);return H.create(o,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(e):e.fieldFilter!==void 0?function(n){return H.create(_e(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return bt.create(n.compositeFilter.filters.map(r=>al(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return v()}}(n.compositeFilter.op))}(e):v()}function V_(e){return __[e]}function D_(e){return y_[e]}function k_(e){return E_[e]}function ge(e){return{fieldPath:e.canonicalString()}}function _e(e){return nt.fromServerFormat(e.fieldPath)}function cl(e){return e instanceof H?function(n){if(n.op==="=="){if(Jo(n.value))return{unaryFilter:{field:ge(n.field),op:"IS_NAN"}};if(Xo(n.value))return{unaryFilter:{field:ge(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Jo(n.value))return{unaryFilter:{field:ge(n.field),op:"IS_NOT_NAN"}};if(Xo(n.value))return{unaryFilter:{field:ge(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ge(n.field),op:D_(n.op),value:n.value}}}(e):e instanceof bt?function(n){const r=n.getFilters().map(s=>cl(s));return r.length===1?r[0]:{compositeFilter:{op:k_(n.op),filters:r}}}(e):v()}function N_(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function ul(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t,n,r,s,i=R.min(),o=R.min(),a=ot.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Ut(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(t){this.ht=t}}function x_(e){const t=C_({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Hs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(){this.an=new L_}addToCollectionParentIndex(t,n){return this.an.add(n),p.resolve()}getCollectionParents(t,n){return p.resolve(this.an.getEntries(n))}addFieldIndex(t,n){return p.resolve()}deleteFieldIndex(t,n){return p.resolve()}deleteAllFieldIndexes(t){return p.resolve()}createTargetIndexes(t,n){return p.resolve()}getDocumentsMatchingTarget(t,n){return p.resolve(null)}getIndexType(t,n){return p.resolve(0)}getFieldIndexes(t,n){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,n){return p.resolve(Ht.min())}getMinOffsetFromCollectionGroup(t,n){return p.resolve(Ht.min())}updateCollectionGroup(t,n,r){return p.resolve()}updateIndexEntries(t,n){return p.resolve()}}class L_{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new it(U.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new it(U.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static Bn(){return new Ce(0)}static Ln(){return new Ce(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(){this.changes=new xe(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,et.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?p.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Ze(r.mutation,s,yt.empty(),K.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,S()).next(()=>r))}getLocalViewOfDocuments(t,n,r=S()){const s=te();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=qe();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=te();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,S()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=Mt();const o=Je(),a=function(){return Je()}();return n.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof de)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Ze(l.mutation,u,l.mutation.getFieldMask(),K.now())):o.set(u.key,yt.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new U_(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Je();let s=new F((o,a)=>o-a),i=S();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||yt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||S()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Hu();l.forEach(d=>{if(!i.has(d)){const f=Ju(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return p.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return I.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Kg(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):p.resolve(te());let a=-1,c=i;return o.next(u=>p.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?p.resolve():this.remoteDocumentCache.getEntry(t,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,S())).next(l=>({batchId:a,changes:zu(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new I(n)).next(r=>{let s=qe();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=qe();return this.indexManager.getCollectionParents(t,i).next(a=>p.forEach(a,c=>{const u=function(h,d){return new Nr(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,r,s).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const l=u.getKey();o.get(l)===null&&(o=o.insert(l,et.newInvalidDocument(l)))});let a=qe();return o.forEach((c,u)=>{const l=i.get(c);l!==void 0&&Ze(l.mutation,u,yt.empty(),K.now()),Mr(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(t){this.serializer=t,this.lr=new Map,this.hr=new Map}getBundleMetadata(t,n){return p.resolve(this.lr.get(n))}saveBundleMetadata(t,n){return this.lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Pt(s.createTime)}}(n)),p.resolve()}getNamedQuery(t,n){return p.resolve(this.hr.get(n))}saveNamedQuery(t,n){return this.hr.set(n.name,function(s){return{name:s.name,query:x_(s.bundledQuery),readTime:Pt(s.readTime)}}(n)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(){this.overlays=new F(I.comparator),this.Pr=new Map}getOverlay(t,n){return p.resolve(this.overlays.get(n))}getOverlays(t,n){const r=te();return p.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.It(t,n,i)}),p.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Pr.delete(r)),p.resolve()}getOverlaysForCollection(t,n,r){const s=te(),i=n.length+1,o=new I(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return p.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new F((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=te(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=te(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return p.resolve(a)}It(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new h_(n,r));let i=this.Pr.get(n);i===void 0&&(i=S(),this.Pr.set(n,i)),this.Pr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.Ir=new it(G.dr),this.Tr=new it(G.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(t,n){const r=new G(t,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Rr(new G(t,n))}Vr(t,n){t.forEach(r=>this.removeReference(r,n))}mr(t){const n=new I(new U([])),r=new G(n,t),s=new G(n,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Rr(o),i.push(o.key)}),i}gr(){this.Ir.forEach(t=>this.Rr(t))}Rr(t){this.Ir=this.Ir.delete(t),this.Tr=this.Tr.delete(t)}pr(t){const n=new I(new U([])),r=new G(n,t),s=new G(n,t+1);let i=S();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new G(t,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class G{constructor(t,n){this.key=t,this.yr=n}static dr(t,n){return I.comparator(t.key,n.key)||D(t.yr,n.yr)}static Er(t,n){return D(t.yr,n.yr)||I.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new it(G.dr)}checkEmpty(t){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new l_(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Sr=this.Sr.add(new G(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,n){return p.resolve(this.br(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.Dr(r),i=s<0?0:s;return p.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(t){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new G(n,0),s=new G(n,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,s],o=>{const a=this.br(o.yr);i.push(a)}),p.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new it(D);return n.forEach(s=>{const i=new G(s,0),o=new G(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([i,o],a=>{r=r.add(a.yr)})}),p.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;I.isDocumentKey(i)||(i=i.child(""));const o=new G(new I(i),0);let a=new it(D);return this.Sr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.yr)),!0)},o),p.resolve(this.Cr(a))}Cr(t){const n=[];return t.forEach(r=>{const s=this.br(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){O(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return p.forEach(n.mutations,s=>{const i=new G(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Sr=r})}xn(t){}containsKey(t,n){const r=new G(n,0),s=this.Sr.firstAfterOrEqual(r);return p.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,p.resolve()}vr(t,n){return this.Dr(t)}Dr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}br(t){const n=this.Dr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(t){this.Fr=t,this.docs=function(){return new F(I.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return p.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(t,n){let r=Mt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():et.newInvalidDocument(s))}),p.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=Mt();const o=n.path,a=new I(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Pg(Rg(l),r)<=0||(s.has(l.key)||Mr(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return p.resolve(i)}getAllFromCollectionGroup(t,n,r,s){v()}Mr(t,n){return p.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new H_(this)}getSize(t){return p.resolve(this.size)}}class H_ extends F_{constructor(t){super(),this.ur=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ur.addEntry(t,s)):this.ur.removeEntry(r)}),p.waitFor(n)}getFromCache(t,n){return this.ur.getEntry(t,n)}getAllFromCache(t,n){return this.ur.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(t){this.persistence=t,this.Or=new xe(n=>Bi(n),$i),this.lastRemoteSnapshotVersion=R.min(),this.highestTargetId=0,this.Nr=0,this.Br=new Hi,this.targetCount=0,this.Lr=Ce.Bn()}forEachTarget(t,n){return this.Or.forEach((r,s)=>n(s)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.Nr)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),p.resolve()}Qn(t){this.Or.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Lr=new Ce(n),this.highestTargetId=n),t.sequenceNumber>this.Nr&&(this.Nr=t.sequenceNumber)}addTargetData(t,n){return this.Qn(n),this.targetCount+=1,p.resolve()}updateTargetData(t,n){return this.Qn(n),p.resolve()}removeTargetData(t,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),p.waitFor(i).next(()=>s)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,n){const r=this.Or.get(n)||null;return p.resolve(r)}addMatchingKeys(t,n,r){return this.Br.Ar(n,r),p.resolve()}removeMatchingKeys(t,n,r){this.Br.Vr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),p.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Br.mr(n),p.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Br.pr(n);return p.resolve(r)}containsKey(t,n){return p.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(t,n){this.kr={},this.overlays={},this.qr=new Mi(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=t(this),this.Kr=new K_(this),this.indexManager=new M_,this.remoteDocumentCache=function(s){return new z_(s)}(r=>this.referenceDelegate.$r(r)),this.serializer=new O_(n),this.Ur=new $_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new j_,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.kr[t.toKey()];return r||(r=new q_(n,this.referenceDelegate),this.kr[t.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(t,n,r){y("MemoryPersistence","Starting transaction:",t);const s=new W_(this.qr.next());return this.referenceDelegate.Wr(),r(s).next(i=>this.referenceDelegate.Gr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zr(t,n){return p.or(Object.values(this.kr).map(r=>()=>r.containsKey(t,n)))}}class W_ extends Cg{constructor(t){super(),this.currentSequenceNumber=t}}class Ki{constructor(t){this.persistence=t,this.jr=new Hi,this.Hr=null}static Jr(t){return new Ki(t)}get Yr(){if(this.Hr)return this.Hr;throw v()}addReference(t,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),p.resolve()}removeReference(t,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),p.resolve()}markPotentiallyOrphaned(t,n){return this.Yr.add(n.toString()),p.resolve()}removeTarget(t,n){this.jr.mr(n.targetId).forEach(s=>this.Yr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Yr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Wr(){this.Hr=new Set}Gr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Yr,r=>{const s=I.fromPath(r);return this.Zr(t,s).next(i=>{i||n.removeEntry(s,R.min())})}).next(()=>(this.Hr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Zr(t,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(t){return 0}Zr(t,n){return p.or([()=>p.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.zr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Qi=r,this.Ki=s}static $i(t,n){let r=S(),s=S();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Gi(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(t,n){this.ji=t,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.Hi(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ji(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Q_;return this.Yi(t,n,o).next(a=>{if(i.result=a,this.Wi)return this.Zi(t,n,o,a.size)})}).next(()=>i.result)}Zi(t,n,r,s){return r.documentReadCount<this.Gi?(Be()<=b.DEBUG&&y("QueryEngine","SDK will not create cache indexes for query:",me(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),p.resolve()):(Be()<=b.DEBUG&&y("QueryEngine","Query:",me(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.zi*s?(Be()<=b.DEBUG&&y("QueryEngine","The SDK decides to create cache indexes for query:",me(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Rt(n))):p.resolve())}Hi(t,n){if(na(n))return p.resolve(null);let r=Rt(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Hs(n,null,"F"),r=Rt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=S(...i);return this.ji.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const u=this.Xi(n,a);return this.es(n,u,o,c.readTime)?this.Hi(t,Hs(n,null,"F")):this.ts(t,u,n,c)}))})))}Ji(t,n,r,s){return na(n)||s.isEqual(R.min())?p.resolve(null):this.ji.getDocuments(t,r).next(i=>{const o=this.Xi(n,i);return this.es(n,o,r,s)?p.resolve(null):(Be()<=b.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),me(n)),this.ts(t,o,n,Ag(s,-1)).next(a=>a))})}Xi(t,n){let r=new it(ju(t));return n.forEach((s,i)=>{Mr(t,i)&&(r=r.add(i))}),r}es(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Yi(t,n,r){return Be()<=b.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",me(n)),this.ji.getDocumentsMatchingQuery(t,n,Ht.min(),r)}ts(t,n,r,s){return this.ji.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(t,n,r,s){this.persistence=t,this.ns=n,this.serializer=s,this.rs=new F(D),this.ss=new xe(i=>Bi(i),$i),this.os=new Map,this._s=t.getRemoteDocumentCache(),this.Kr=t.getTargetCache(),this.Ur=t.getBundleCache(),this.us(r)}us(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new B_(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.rs))}}function J_(e,t,n,r){return new X_(e,t,n,r)}async function ll(e,t){const n=P(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.us(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=S();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({cs:u,removedBatchIds:o,addedBatchIds:a}))})})}function Z_(e,t){const n=P(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=p.resolve();return d.forEach(E=>{f=f.next(()=>l.getEntry(c,E)).next(w=>{const _=u.docVersions.get(E);O(_!==null),w.version.compareTo(_)<0&&(h.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),l.addEntry(w)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=S();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function hl(e){const t=P(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Kr.getLastRemoteSnapshotVersion(n))}function ty(e,t){const n=P(e),r=t.snapshotVersion;let s=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n._s.newChangeBuffer({trackRemovals:!0});s=n.rs;const a=[];t.targetChanges.forEach((l,h)=>{const d=s.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(i,l.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(ot.EMPTY_BYTE_STRING,R.min()).withLastLimboFreeSnapshotVersion(R.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),s=s.insert(h,f),function(w,_,V){return w.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(d,f,l)&&a.push(n.Kr.updateTargetData(i,f))});let c=Mt(),u=S();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(ey(i,o,t.documentUpdates).next(l=>{c=l.ls,u=l.hs})),!r.isEqual(R.min())){const l=n.Kr.getLastRemoteSnapshotVersion(i).next(h=>n.Kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return p.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.rs=s,i))}function ey(e,t,n){let r=S(),s=S();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=Mt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(R.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ls:o,hs:s}})}function ny(e,t){const n=P(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function ry(e,t){const n=P(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Kr.getTargetData(r,t).next(i=>i?(s=i,p.resolve(s)):n.Kr.allocateTargetId(r).next(o=>(s=new Ut(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.rs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(t,r.targetId)),r})}async function Ys(e,t,n){const r=P(e),s=r.rs.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Pn(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.rs=r.rs.remove(t),r.ss.delete(s.target)}function fa(e,t,n){const r=P(e);let s=R.min(),i=S();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,l){const h=P(c),d=h.ss.get(l);return d!==void 0?p.resolve(h.rs.get(d)):h.Kr.getTargetData(u,l)}(r,o,Rt(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ns.getDocumentsMatchingQuery(o,t,n?s:R.min(),n?i:S())).next(a=>(sy(r,Wg(t),a),{documents:a,Ps:i})))}function sy(e,t,n){let r=e.os.get(t)||R.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.os.set(t,r)}class pa{constructor(){this.activeTargetIds=t_()}Rs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}As(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class iy{constructor(){this.ro=new pa,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.ro.Rs(t),this.io[t]||"not-current"}updateQueryState(t,n,r){this.io[t]=n}removeLocalQueryTarget(t){this.ro.Vs(t)}isLocalQueryTarget(t){return this.ro.activeTargetIds.has(t)}clearQueryState(t){delete this.io[t]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(t){return this.ro.activeTargetIds.has(t)}start(){return this.ro=new pa,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{so(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(t){this.co.push(t)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.co)t(0)}uo(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.co)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jn=null;function _s(){return jn===null?jn=function(){return 268435456+Math.round(2147483648*Math.random())}():jn++,"0x"+jn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(t){this.ho=t.ho,this.Po=t.Po}Io(t){this.To=t}Eo(t){this.Ao=t}onMessage(t){this.Ro=t}close(){this.Po()}send(t){this.ho(t)}Vo(){this.To()}mo(t){this.Ao(t)}fo(t){this.Ro(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z="WebChannelConnection";class uy extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${s}/databases/${i}`,this.wo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get So(){return!1}bo(n,r,s,i,o){const a=_s(),c=this.Do(n,r);y("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(u,i,o),this.vo(n,c,u,s).then(l=>(y("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw ve("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",c,"request:",s),l})}Fo(n,r,s,i,o,a){return this.bo(n,r,s,i,o)}Co(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Oe}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Do(n,r){const s=ay[n];return`${this.po}/v1/${r}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,n,r,s){const i=_s();return new Promise((o,a)=>{const c=new fg;c.setWithCredentials(!0),c.listenOnce(hg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ms.NO_ERROR:const l=c.getResponseJson();y(Z,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(l)),o(l);break;case ms.TIMEOUT:y(Z,`RPC '${t}' ${i} timed out`),a(new T(m.DEADLINE_EXCEEDED,"Request time out"));break;case ms.HTTP_ERROR:const h=c.getStatus();if(y(Z,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d?.error;if(f&&f.status&&f.message){const E=function(_){const V=_.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(V)>=0?V:m.UNKNOWN}(f.status);a(new T(E,f.message))}else a(new T(m.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new T(m.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{y(Z,`RPC '${t}' ${i} completed.`)}});const u=JSON.stringify(s);y(Z,`RPC '${t}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}Mo(t,n,r){const s=_s(),i=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=ug(),a=lg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Co(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const l=i.join("");y(Z,`Creating RPC '${t}' stream ${s}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const E=new cy({ho:_=>{f?y(Z,`Not sending because RPC '${t}' stream ${s} is closed:`,_):(d||(y(Z,`Opening RPC '${t}' stream ${s} transport.`),h.open(),d=!0),y(Z,`RPC '${t}' stream ${s} sending:`,_),h.send(_))},Po:()=>h.close()}),w=(_,V,L)=>{_.listen(V,x=>{try{L(x)}catch(M){setTimeout(()=>{throw M},0)}})};return w(h,Un.EventType.OPEN,()=>{f||y(Z,`RPC '${t}' stream ${s} transport opened.`)}),w(h,Un.EventType.CLOSE,()=>{f||(f=!0,y(Z,`RPC '${t}' stream ${s} transport closed`),E.mo())}),w(h,Un.EventType.ERROR,_=>{f||(f=!0,ve(Z,`RPC '${t}' stream ${s} transport errored:`,_),E.mo(new T(m.UNAVAILABLE,"The operation could not be completed")))}),w(h,Un.EventType.MESSAGE,_=>{var V;if(!f){const L=_.data[0];O(!!L);const x=L,M=x.error||((V=x[0])===null||V===void 0?void 0:V.error);if(M){y(Z,`RPC '${t}' stream ${s} received error:`,M);const Tt=M.status;let Vt=function(zl){const oo=q[zl];if(oo!==void 0)return el(oo)}(Tt),Dn=M.message;Vt===void 0&&(Vt=m.INTERNAL,Dn="Unknown error status: "+Tt+" with message "+M.message),f=!0,E.mo(new T(Vt,Dn)),h.close()}else y(Z,`RPC '${t}' stream ${s} received:`,L),E.fo(L)}}),w(a,dg.STAT_EVENT,_=>{_.stat===Ko.PROXY?y(Z,`RPC '${t}' stream ${s} detected buffering proxy`):_.stat===Ko.NOPROXY&&y(Z,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.Vo()},0),E}}function ys(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(e){return new T_(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t,n,r=1e3,s=1.5,i=6e4){this._i=t,this.timerId=n,this.xo=r,this.Oo=s,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(t){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),s=Math.max(0,n-r);s>0&&y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,s,()=>(this.ko=Date.now(),t())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(t,n,r,s,i,o,a,c){this._i=t,this.Uo=r,this.Wo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new dl(t,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(t){this.r_(),this.stream.send(t)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(t,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,t!==4?this.Ho.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(xt(n.toString()),xt("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const t=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Go===n&&this.__(r,s)},r=>{t(()=>{const s=new T(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(s)})})}__(t,n){const r=this.o_(this.Go);this.stream=this.u_(t,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.a_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}o_(t){return n=>{this._i.enqueueAndForget(()=>this.Go===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ly extends fl{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}u_(t,n){return this.connection.Mo("Listen",t,n)}onMessage(t){this.Ho.reset();const n=v_(this.serializer,t),r=function(i){if(!("targetChange"in i))return R.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?R.min():o.readTime?Pt(o.readTime):R.min()}(t);return this.listener.c_(n,r)}l_(t){const n={};n.database=Qs(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=zs(c)?{documents:P_(i,c)}:{query:S_(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=sl(i,o.resumeToken);const u=Ks(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(R.min())>0){a.readTime=ur(i,o.snapshotVersion.toTimestamp());const u=Ks(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=b_(this.serializer,t);r&&(n.labels=r),this.n_(n)}h_(t){const n={};n.database=Qs(this.serializer),n.removeTarget=t,this.n_(n)}}class hy extends fl{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(t,n){return this.connection.Mo("Write",t,n)}onMessage(t){if(O(!!t.streamToken),this.lastStreamToken=t.streamToken,this.P_){this.Ho.reset();const n=R_(t.writeResults,t.commitTime),r=Pt(t.commitTime);return this.listener.T_(r,n)}return O(!t.writeResults||t.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const t={};t.database=Qs(this.serializer),this.n_(t)}d_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>A_(this.serializer,r))};this.n_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.R_=!1}V_(){if(this.R_)throw new T(m.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.bo(t,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new T(m.UNKNOWN,s.toString())})}Fo(t,n,r,s){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(t,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new T(m.UNKNOWN,i.toString())})}terminate(){this.R_=!0}}class fy{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(t){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.w_("Offline")))}set(t){this.D_(),this.f_=0,t==="Online"&&(this.p_=!1),this.w_(t)}w_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}S_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(xt(n),this.p_=!1):y("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(o=>{r.enqueueAndForget(async()=>{fe(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=P(c);u.F_.add(4),await Cn(u),u.O_.set("Unknown"),u.F_.delete(4),await jr(u)}(this))})}),this.O_=new fy(r,s)}}async function jr(e){if(fe(e))for(const t of e.M_)await t(!0)}async function Cn(e){for(const t of e.M_)await t(!1)}function pl(e,t){const n=P(e);n.v_.has(t.targetId)||(n.v_.set(t.targetId,t),Yi(n)?Qi(n):Me(n).Yo()&&Wi(n,t))}function ml(e,t){const n=P(e),r=Me(n);n.v_.delete(t),r.Yo()&&gl(n,t),n.v_.size===0&&(r.Yo()?r.e_():fe(n)&&n.O_.set("Unknown"))}function Wi(e,t){if(e.N_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(R.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Me(e).l_(t)}function gl(e,t){e.N_.Le(t),Me(e).h_(t)}function Qi(e){e.N_=new g_({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.v_.get(t)||null,st:()=>e.datastore.serializer.databaseId}),Me(e).start(),e.O_.y_()}function Yi(e){return fe(e)&&!Me(e).Jo()&&e.v_.size>0}function fe(e){return P(e).F_.size===0}function _l(e){e.N_=void 0}async function my(e){e.v_.forEach((t,n)=>{Wi(e,t)})}async function gy(e,t){_l(e),Yi(e)?(e.O_.b_(t),Qi(e)):e.O_.set("Unknown")}async function _y(e,t,n){if(e.O_.set("Online"),t instanceof rl&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.v_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.v_.delete(a),s.N_.removeTarget(a))}(e,t)}catch(r){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await lr(e,r)}else if(t instanceof Hn?e.N_.Ge(t):t instanceof nl?e.N_.Xe(t):e.N_.He(t),!n.isEqual(R.min()))try{const r=await hl(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.N_._t(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=i.v_.get(u);l&&i.v_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=i.v_.get(c);if(!l)return;i.v_.set(c,l.withResumeToken(ot.EMPTY_BYTE_STRING,l.snapshotVersion)),gl(i,c);const h=new Ut(l.target,c,u,l.sequenceNumber);Wi(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){y("RemoteStore","Failed to raise snapshot:",r),await lr(e,r)}}async function lr(e,t,n){if(!Pn(t))throw t;e.F_.add(1),await Cn(e),e.O_.set("Offline"),n||(n=()=>hl(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.F_.delete(1),await jr(e)})}function yl(e,t){return t().catch(n=>lr(e,n,t))}async function qr(e){const t=P(e),n=Gt(t);let r=t.C_.length>0?t.C_[t.C_.length-1].batchId:-1;for(;yy(t);)try{const s=await ny(t.localStore,r);if(s===null){t.C_.length===0&&n.e_();break}r=s.batchId,Ey(t,s)}catch(s){await lr(t,s)}El(t)&&Tl(t)}function yy(e){return fe(e)&&e.C_.length<10}function Ey(e,t){e.C_.push(t);const n=Gt(e);n.Yo()&&n.I_&&n.d_(t.mutations)}function El(e){return fe(e)&&!Gt(e).Jo()&&e.C_.length>0}function Tl(e){Gt(e).start()}async function Ty(e){Gt(e).A_()}async function Iy(e){const t=Gt(e);for(const n of e.C_)t.d_(n.mutations)}async function wy(e,t,n){const r=e.C_.shift(),s=ji.from(r,t,n);await yl(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await qr(e)}async function vy(e,t){t&&Gt(e).I_&&await async function(r,s){if(function(o){return f_(o)&&o!==m.ABORTED}(s.code)){const i=r.C_.shift();Gt(r).Xo(),await yl(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await qr(r)}}(e,t),El(e)&&Tl(e)}async function ga(e,t){const n=P(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const r=fe(n);n.F_.add(3),await Cn(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.F_.delete(3),await jr(n)}async function Ay(e,t){const n=P(e);t?(n.F_.delete(2),await jr(n)):t||(n.F_.add(2),await Cn(n),n.O_.set("Unknown"))}function Me(e){return e.B_||(e.B_=function(n,r,s){const i=P(n);return i.V_(),new ly(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Io:my.bind(null,e),Eo:gy.bind(null,e),c_:_y.bind(null,e)}),e.M_.push(async t=>{t?(e.B_.Xo(),Yi(e)?Qi(e):e.O_.set("Unknown")):(await e.B_.stop(),_l(e))})),e.B_}function Gt(e){return e.L_||(e.L_=function(n,r,s){const i=P(n);return i.V_(),new hy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Io:Ty.bind(null,e),Eo:vy.bind(null,e),E_:Iy.bind(null,e),T_:wy.bind(null,e)}),e.M_.push(async t=>{t?(e.L_.Xo(),await qr(e)):(await e.L_.stop(),e.C_.length>0&&(y("RemoteStore",`Stopping write stream with ${e.C_.length} pending writes`),e.C_=[]))})),e.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new Xi(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(m.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ji(e,t){if(xt("AsyncQueue",`${t}: ${e}`),Pn(e))return new T(m.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t){this.comparator=t?(n,r)=>t(n,r)||I.comparator(n.key,r.key):(n,r)=>I.comparator(n.key,r.key),this.keyedMap=qe(),this.sortedSet=new F(this.comparator)}static emptySet(t){return new Ie(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ie)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Ie;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(){this.k_=new F(I.comparator)}track(t){const n=t.doc.key,r=this.k_.get(n);r?t.type!==0&&r.type===3?this.k_=this.k_.insert(n,t):t.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.k_=this.k_.remove(n):t.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:t.doc}):v():this.k_=this.k_.insert(n,t)}q_(){const t=[];return this.k_.inorderTraversal((n,r)=>{t.push(r)}),t}}class be{constructor(t,n,r,s,i,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new be(t,n,Ie.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&xr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(){this.Q_=void 0,this.listeners=[]}}class Py{constructor(){this.queries=new xe(t=>$u(t),xr),this.onlineState="Unknown",this.K_=new Set}}async function Il(e,t){const n=P(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Ry),s)try{i.Q_=await n.onListen(r)}catch(o){const a=Ji(o,`Initialization of query '${me(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.listeners.push(t),t.U_(n.onlineState),i.Q_&&t.W_(i.Q_)&&Zi(n)}async function wl(e,t){const n=P(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Sy(e,t){const n=P(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.W_(s)&&(r=!0);o.Q_=s}}r&&Zi(n)}function Cy(e,t,n){const r=P(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function Zi(e){e.K_.forEach(t=>{t.next()})}class vl{constructor(t,n,r){this.query=t,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new be(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.z_?this.H_(t)&&(this.G_.next(t),n=!0):this.J_(t,this.onlineState)&&(this.Y_(t),n=!0),this.j_=t,n}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),n=!0),n}J_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(t){t=be.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t){this.key=t}}class Rl{constructor(t){this.key=t}}class by{constructor(t,n){this.query=t,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=S(),this.mutatedKeys=S(),this.ua=ju(t),this.ca=new Ie(this.ua)}get la(){return this.oa}ha(t,n){const r=n?n.Pa:new _a,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((l,h)=>{const d=s.get(l),f=Mr(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),w=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;d&&f?d.data.isEqual(f.data)?E!==w&&(r.track({type:3,doc:f}),_=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),_=!0,(c&&this.ua(f,c)>0||u&&this.ua(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),_=!0):d&&!f&&(r.track({type:1,doc:d}),_=!0,(c||u)&&(a=!0)),_&&(f?(o=o.add(f),i=w?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{ca:o,Pa:r,es:a,mutatedKeys:i}}Ia(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const s=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const i=t.Pa.q_();i.sort((u,l)=>function(d,f){const E=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return E(d)-E(f)}(u.type,l.type)||this.ua(u.doc,l.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,c=a!==this._a;return this._a=a,i.length!==0||c?{snapshot:new be(this.query,t.ca,s,i,t.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new _a,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}da(t){t&&(t.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=t.current)}Ta(){if(!this.current)return[];const t=this.aa;this.aa=S(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return t.forEach(r=>{this.aa.has(r)||n.push(new Rl(r))}),this.aa.forEach(r=>{t.has(r)||n.push(new Al(r))}),n}Ra(t){this.oa=t.Ps,this.aa=S();const n=this.ha(t.documents);return this.applyChanges(n,!0)}Va(){return be.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class Vy{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Dy{constructor(t){this.key=t,this.ma=!1}}class ky{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new xe(a=>$u(a),xr),this.pa=new Map,this.ya=new Set,this.wa=new F(I.comparator),this.Sa=new Map,this.ba=new Hi,this.Da={},this.Ca=new Map,this.va=Ce.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function Ny(e,t){const n=qy(e);let r,s;const i=n.ga.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await ry(n.localStore,Rt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Oy(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&pl(n.remoteStore,o)}return s}async function Oy(e,t,n,r,s){e.Ma=(h,d,f)=>async function(w,_,V,L){let x=_.view.ha(V);x.es&&(x=await fa(w.localStore,_.query,!1).then(({documents:Vt})=>_.view.ha(Vt,x)));const M=L&&L.targetChanges.get(_.targetId),Tt=_.view.applyChanges(x,w.isPrimaryClient,M);return Ea(w,_.targetId,Tt.Ea),Tt.snapshot}(e,h,d,f);const i=await fa(e.localStore,t,!0),o=new by(t,i.Ps),a=o.ha(i.documents),c=Sn.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),u=o.applyChanges(a,e.isPrimaryClient,c);Ea(e,n,u.Ea);const l=new Vy(t,n,o);return e.ga.set(t,l),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),u.snapshot}async function xy(e,t){const n=P(e),r=n.ga.get(t),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!xr(i,t))),void n.ga.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ys(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ml(n.remoteStore,r.targetId),Xs(n,r.targetId)}).catch(Rn)):(Xs(n,r.targetId),await Ys(n.localStore,r.targetId,!0))}async function My(e,t,n){const r=zy(e);try{const s=await function(o,a){const c=P(o),u=K.now(),l=a.reduce((f,E)=>f.add(E.key),S());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let E=Mt(),w=S();return c._s.getEntries(f,l).next(_=>{E=_,E.forEach((V,L)=>{L.isValidDocument()||(w=w.add(V))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,E)).next(_=>{h=_;const V=[];for(const L of a){const x=c_(L,h.get(L.key).overlayedDocument);x!=null&&V.push(new de(L.key,x,Ou(x.value.mapValue),kt.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,V,a)}).next(_=>{d=_;const V=_.applyToLocalDocumentSet(h,w);return c.documentOverlayCache.saveOverlays(f,_.batchId,V)})}).then(()=>({batchId:d.batchId,changes:zu(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.Da[o.currentUser.toKey()];u||(u=new F(D)),u=u.insert(a,c),o.Da[o.currentUser.toKey()]=u}(r,s.batchId,n),await bn(r,s.changes),await qr(r.remoteStore)}catch(s){const i=Ji(s,"Failed to persist write");n.reject(i)}}async function Pl(e,t){const n=P(e);try{const r=await ty(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(O(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?O(o.ma):s.removedDocuments.size>0&&(O(o.ma),o.ma=!1))}),await bn(n,r,t)}catch(r){await Rn(r)}}function ya(e,t,n){const r=P(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=P(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.U_(a)&&(u=!0)}),u&&Zi(c)}(r.eventManager,t),s.length&&r.fa.c_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ly(e,t,n){const r=P(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Sa.get(t),i=s&&s.key;if(i){let o=new F(I.comparator);o=o.insert(i,et.newNoDocument(i,R.min()));const a=S().add(i),c=new Br(R.min(),new Map,new F(D),o,a);await Pl(r,c),r.wa=r.wa.remove(i),r.Sa.delete(t),to(r)}else await Ys(r.localStore,t,!1).then(()=>Xs(r,t,n)).catch(Rn)}async function Fy(e,t){const n=P(e),r=t.batch.batchId;try{const s=await Z_(n.localStore,t);Cl(n,r,null),Sl(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bn(n,s)}catch(s){await Rn(s)}}async function Uy(e,t,n){const r=P(e);try{const s=await function(o,a){const c=P(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(O(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,t);Cl(r,t,n),Sl(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await bn(r,s)}catch(s){await Rn(s)}}function Sl(e,t){(e.Ca.get(t)||[]).forEach(n=>{n.resolve()}),e.Ca.delete(t)}function Cl(e,t,n){const r=P(e);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Da[r.currentUser.toKey()]=s}}function Xs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.pa.get(t))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.mr(t).forEach(r=>{e.ba.containsKey(r)||bl(e,r)})}function bl(e,t){e.ya.delete(t.path.canonicalString());const n=e.wa.get(t);n!==null&&(ml(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),to(e))}function Ea(e,t,n){for(const r of n)r instanceof Al?(e.ba.addReference(r.key,t),By(e,r)):r instanceof Rl?(y("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||bl(e,r.key)):v()}function By(e,t){const n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(y("SyncEngine","New document in limbo: "+n),e.ya.add(r),to(e))}function to(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){const t=e.ya.values().next().value;e.ya.delete(t);const n=new I(U.fromString(t)),r=e.va.next();e.Sa.set(r,new Dy(n)),e.wa=e.wa.insert(n,r),pl(e.remoteStore,new Ut(Rt(Or(n.path)),r,"TargetPurposeLimboResolution",Mi.ae))}}async function bn(e,t,n){const r=P(e),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u?.fromCache?"not-current":"current"),u){s.push(u);const l=Gi.$i(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.fa.c_(s),await async function(c,u){const l=P(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>p.forEach(u,d=>p.forEach(d.Qi,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>p.forEach(d.Ki,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Pn(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.rs.get(d),E=f.snapshotVersion,w=f.withLastLimboFreeSnapshotVersion(E);l.rs=l.rs.insert(d,w)}}}(r.localStore,i))}async function $y(e,t){const n=P(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const r=await ll(n.localStore,t);n.currentUser=t,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new T(m.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await bn(n,r.cs)}}function jy(e,t){const n=P(e),r=n.Sa.get(t);if(r&&r.ma)return S().add(r.key);{let s=S();const i=n.pa.get(t);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function qy(e){const t=P(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Pl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=jy.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ly.bind(null,t),t.fa.c_=Sy.bind(null,t.eventManager),t.fa.xa=Cy.bind(null,t.eventManager),t}function zy(e){const t=P(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Fy.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Uy.bind(null,t),t}class Ta{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=$r(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return J_(this.persistence,new Y_,t.initialUser,this.serializer)}createPersistence(t){return new G_(Ki.Jr,this.serializer)}createSharedClientState(t){return new iy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Hy{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ya(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$y.bind(null,this.syncEngine),await Ay(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Py}()}createDatastore(t){const n=$r(t.databaseInfo.databaseId),r=function(i){return new uy(i)}(t.databaseInfo);return function(i,o,a,c){return new dy(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new py(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>ya(this.syncEngine,n,0),function(){return ma.C()?new ma:new oy}())}createSyncEngine(t,n){return function(s,i,o,a,c,u,l){const h=new ky(s,i,o,a,c,u);return l&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=P(n);y("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await Cn(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):xt("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=tt.UNAUTHENTICATED,this.clientId=Du.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{y("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(y("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Ji(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Es(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ll(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Ia(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Wy(e);y("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(s=>ga(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,i)=>ga(t.remoteStore,i)),e._onlineComponents=t}function Gy(e){return e.name==="FirebaseError"?e.code===m.FAILED_PRECONDITION||e.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Wy(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Es(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Gy(n))throw n;ve("Error using user provided cache. Falling back to memory cache: "+n),await Es(e,new Ta)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await Es(e,new Ta);return e._offlineComponents}async function Dl(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await Ia(e,e._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await Ia(e,new Hy))),e._onlineComponents}function Qy(e){return Dl(e).then(t=>t.syncEngine)}async function Js(e){const t=await Dl(e),n=t.eventManager;return n.onListen=Ny.bind(null,t.syncEngine),n.onUnlisten=xy.bind(null,t.syncEngine),n}function Yy(e,t,n={}){const r=new qt;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const l=new Vl({next:d=>{o.enqueueAndForget(()=>wl(i,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new T(m.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?u.reject(new T(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new vl(Or(a.path),l,{includeMetadataChanges:!0,Z_:!0});return Il(i,h)}(await Js(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(e,t,n){if(!n)throw new T(m.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Jy(e,t,n,r){if(t===!0&&r===!0)throw new T(m.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function va(e){if(!I.isDocumentKey(e))throw new T(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function eo(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":v()}function zt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=eo(e);throw new T(m.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new T(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new T(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Jy("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new T(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new T(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new T(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class no{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Aa({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new T(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Aa(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mg;switch(r.type){case"firstParty":return new Eg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new T(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=wa.get(n);r&&(y("ComponentProvider","Removing Datastore"),wa.delete(n),r.terminate())}(this),Promise.resolve()}}function Zy(e,t,n,r={}){var s;const i=(e=zt(e,no))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ve("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=tt.MOCK_USER;else{a=Da(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new T(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new tt(u)}e._authCredentials=new gg(new Vu(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new zr(this.firestore,t,this._query)}}class pt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new pt(this.firestore,t,this._key)}}class mn extends zr{constructor(t,n,r){super(t,n,Or(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new pt(this.firestore,null,new I(t))}withConverter(t){return new mn(this.firestore,t,this._path)}}function OE(e,t,...n){if(e=lt(e),arguments.length===1&&(t=Du.V()),Xy("doc","path",t),e instanceof no){const r=U.fromString(t,...n);return va(r),new pt(e,null,new I(r))}{if(!(e instanceof pt||e instanceof mn))throw new T(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(U.fromString(t,...n));return va(r),new pt(e.firestore,e instanceof mn?e.converter:null,new I(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new dl(this,"async_queue_retry"),this.ou=()=>{const n=ys();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const t=ys();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this._u(),this.au(t)}enterRestrictedMode(t){if(!this.eu){this.eu=!0,this.iu=t||!1;const n=ys();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(t){if(this._u(),this.eu)return new Promise(()=>{});const n=new qt;return this.au(()=>this.eu&&this.iu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xa.push(t),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(t){if(!Pn(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(t){const n=this.Za.then(()=>(this.ru=!0,t().catch(r=>{this.nu=r,this.ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw xt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(t,n,r){this._u(),this.su.indexOf(t)>-1&&(n=0);const s=Xi.createAndSchedule(this,t,n,r,i=>this.cu(i));return this.tu.push(s),s}_u(){this.nu&&v()}verifyOperationInProgress(){}async lu(){let t;do t=this.Za,await t;while(t!==this.Za)}hu(t){for(const n of this.tu)if(n.timerId===t)return!0;return!1}Pu(t){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.lu()})}Iu(t){this.su.push(t)}cu(t){const n=this.tu.indexOf(t);this.tu.splice(n,1)}}function Ra(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class gn extends no{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new tE}(),this._persistenceKey=s?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||Nl(this),this._firestoreClient.terminate()}}function eE(e,t){const n=typeof e=="object"?e:ei(),r=typeof e=="string"?e:t||"(default)",s=De(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ba("firestore");i&&Zy(s,...i)}return s}function ro(e){return e._firestoreClient||Nl(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Nl(e){var t,n,r;const s=e._freezeSettings(),i=function(a,c,u,l){return new Dg(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,kl(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new Ky(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ve(ot.fromBase64String(t))}catch(n){throw new T(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ve(ot.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new T(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new T(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new T(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=/^__.*__$/;class Ol{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new de(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function xl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class Gr{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.du(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(t){return new Gr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Eu({path:r,Ru:!1});return s.Vu(t),s}mu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Eu({path:r,Ru:!1});return s.du(),s}fu(t){return this.Eu({path:void 0,Ru:!0})}gu(t){return hr(t,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vu(this.path.get(t))}Vu(t){if(t.length===0)throw this.gu("Document fields must not be empty");if(xl(this.Tu)&&nE.test(t))throw this.gu('Document fields cannot begin and end with "__"')}}class rE{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||$r(t)}wu(t,n,r,s=!1){return new Gr({Tu:t,methodName:n,yu:r,path:nt.emptyPath(),Ru:!1,pu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sE(e){const t=e._freezeSettings(),n=$r(e._databaseId);return new rE(e._databaseId,!!t.ignoreUndefinedProperties,n)}class Wr extends Kr{_toFieldTransform(t){if(t.Tu!==2)throw t.Tu===1?t.gu(`${this._methodName}() can only appear at the top level of your update data`):t.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Wr}}function iE(e,t,n){return new Gr({Tu:3,yu:t.settings.yu,methodName:e._methodName,Ru:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class oE extends Kr{constructor(t,n){super(t),this.Su=n}_toFieldTransform(t){const n=iE(this,t,!0),r=this.Su.map(i=>Vn(i,n)),s=new Se(r);return new s_(t.path,s)}isEqual(t){return this===t}}function aE(e,t,n,r){const s=e.wu(1,t,n);Ll("Data must be an object, but it was:",s,r);const i=[],o=ht.empty();he(r,(c,u)=>{const l=io(t,c,n);u=lt(u);const h=s.mu(l);if(u instanceof Wr)i.push(l);else{const d=Vn(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new yt(i);return new Ol(o,a,s.fieldTransforms)}function cE(e,t,n,r,s,i){const o=e.wu(1,t,n),a=[Pa(t,r,n)],c=[s];if(i.length%2!=0)throw new T(m.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Pa(t,i[d])),c.push(i[d+1]);const u=[],l=ht.empty();for(let d=a.length-1;d>=0;--d)if(!hE(u,a[d])){const f=a[d];let E=c[d];E=lt(E);const w=o.mu(f);if(E instanceof Wr)u.push(f);else{const _=Vn(E,w);_!=null&&(u.push(f),l.set(f,_))}}const h=new yt(u);return new Ol(l,h,o.fieldTransforms)}function Vn(e,t){if(Ml(e=lt(e)))return Ll("Unsupported field value:",t,e),uE(e,t);if(e instanceof Kr)return function(r,s){if(!xl(s.Tu))throw s.gu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Ru&&t.Tu!==4)throw t.gu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Vn(a,s.fu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=lt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return e_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=K.fromDate(r);return{timestampValue:ur(s.serializer,i)}}if(r instanceof K){const i=new K(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ur(s.serializer,i)}}if(r instanceof so)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ve)return{bytesValue:sl(s.serializer,r._byteString)};if(r instanceof pt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:zi(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.gu(`Unsupported field value: ${eo(r)}`)}(e,t)}function uE(e,t){const n={};return ku(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):he(e,(r,s)=>{const i=Vn(s,t.Au(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Ml(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof K||e instanceof so||e instanceof Ve||e instanceof pt||e instanceof Kr)}function Ll(e,t,n){if(!Ml(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=eo(n);throw r==="an object"?t.gu(e+" a custom object"):t.gu(e+" "+r)}}function Pa(e,t,n){if((t=lt(t))instanceof Hr)return t._internalPath;if(typeof t=="string")return io(e,t);throw hr("Field path arguments must be of type string or ",e,!1,void 0,n)}const lE=new RegExp("[~\\*/\\[\\]]");function io(e,t,n){if(t.search(lE)>=0)throw hr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Hr(...t.split("."))._internalPath}catch{throw hr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function hr(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new T(m.INVALID_ARGUMENT,a+e+c)}function hE(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new dE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Ul("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dE extends Fl{data(){return super.data()}}function Ul(e,t){return typeof t=="string"?io(e,t):t instanceof Hr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new T(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pE{convertValue(t,n="none"){switch(ue(t)){case 0:return null;case 1:return t.booleanValue;case 2:return z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ce(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw v()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return he(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new so(z(t.latitude),z(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Fi(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(hn(t));default:return null}}convertTimestamp(t){const n=Kt(t);return new K(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=U.fromString(t);O(ul(r));const s=new dn(r.get(1),r.get(3)),i=new I(r.popFirst(5));return s.isEqual(n)||xt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Bl extends Fl{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Kn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Ul("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Kn extends Bl{data(t={}){return super.data(t)}}class mE{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new He(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Kn(this._firestore,this._userDataWriter,r.key,r,new He(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new T(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Kn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new He(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Kn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new He(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:gE(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function gE(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(e){e=zt(e,pt);const t=zt(e.firestore,gn);return Yy(ro(t),e._key).then(n=>jl(t,e,n))}class $l extends pE{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ve(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new pt(this.firestore,null,n)}}function ME(e,t,n,...r){e=zt(e,pt);const s=zt(e.firestore,gn),i=sE(s);let o;return o=typeof(t=lt(t))=="string"||t instanceof Hr?cE(i,"updateDoc",e._key,t,n,r):aE(i,"updateDoc",e._key,t),_E(s,[o.toMutation(e._key,kt.exists(!0))])}function LE(e,...t){var n,r,s;e=lt(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Ra(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Ra(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(e instanceof pt)u=zt(e.firestore,gn),l=Or(e._key.path),c={next:h=>{t[o]&&t[o](jl(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=zt(e,zr);u=zt(h.firestore,gn),l=h._query;const d=new $l(u);c={next:f=>{t[o]&&t[o](new mE(u,d,h,f))},error:t[o+1],complete:t[o+2]},fE(e._query)}return function(d,f,E,w){const _=new Vl(w),V=new vl(f,_,E);return d.asyncQueue.enqueueAndForget(async()=>Il(await Js(d),V)),()=>{_.La(),d.asyncQueue.enqueueAndForget(async()=>wl(await Js(d),V))}}(ro(u),l,a,c)}function _E(e,t){return function(r,s){const i=new qt;return r.asyncQueue.enqueueAndForget(async()=>My(await Qy(r),s,i)),i.promise}(ro(e),t)}function jl(e,t,n){const r=n.docs.get(t._key),s=new $l(e);return new Bl(e,s,t._key,r,new He(n.hasPendingWrites,n.fromCache),t.converter)}function FE(...e){return new oE("arrayUnion",e)}(function(t,n=!0){(function(s){Oe=s})(La),Nt(new St("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new gn(new _g(r.getProvider("auth-internal")),new Ig(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new T(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dn(u.options.projectId,l)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),_t(Go,"4.2.0",t),_t(Go,"4.2.0","esm2017")})();const yE={apiKey:"AIzaSyDwY_k4Hh9W_nkstVc93hmRG1MpBeMOf8g",authDomain:"recicanje-74f46.firebaseapp.com",projectId:"recicanje-74f46",storageBucket:"recicanje-74f46.appspot.com",messagingSenderId:"551063104081",appId:"1:551063104081:web:48c90137600ed876352670",measurementId:"G-4FYG5VB6W6"},ql=Fa(yE),EE=bf(ql);im(ql);const UE=eE(),BE=Cf(EE,"multimedia");export{UE as A,ME as B,St as C,FE as D,fr as E,Lt as F,LE as G,b as L,La as S,Nt as _,ql as a,TE as b,wE as c,lt as d,_t as e,De as f,VE as g,Zl as h,IE as i,ei as j,nh as k,CE as l,BE as m,Wn as n,ka as o,SE as p,PE as q,Cf as r,Zs as s,RE as t,bE as u,Wl as v,vE as w,AE as x,xE as y,OE as z};
