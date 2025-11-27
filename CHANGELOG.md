## [0.0.3](https://github.com/my-mcp-hub/node-mcp-server/compare/v0.0.2...v0.0.3) (2025-11-27)


### ♻ Code Refactoring | 代码重构

* migrate from express to fastify for improved performance ([089f9dc](https://github.com/my-mcp-hub/node-mcp-server/commit/089f9dc42a38e33572d7574b5a01af2624e9e775))
* remove unused auth options from getOptions ([ffa811f](https://github.com/my-mcp-hub/node-mcp-server/commit/ffa811f81c63870b0f3a787f00ead5805219c81b))
* remove unused cors middleware ([aba99d9](https://github.com/my-mcp-hub/node-mcp-server/commit/aba99d97ee5120e3ccb994fc742cc5297b6a29da))
* replace __dirname with import.meta.dirname for modern ESM compatibility ([577b7be](https://github.com/my-mcp-hub/node-mcp-server/commit/577b7bea9839e93bf9b8b90e759b6bf17a549420))


### ✅ Tests | 测试

* add global setup and improve test configuration ([011e29d](https://github.com/my-mcp-hub/node-mcp-server/commit/011e29de80031d716cda6bf136731e7f71aef756))
* add path alias for src directory in vitest config ([684af31](https://github.com/my-mcp-hub/node-mcp-server/commit/684af314440791f47da6fafec68a511b7a00ccb8))
* remove debug console.log from test setup ([48acf99](https://github.com/my-mcp-hub/node-mcp-server/commit/48acf99dbf4df60c71ea8fb62f7dc353f76cf572))


### ✨ Features | 新功能

* add generateSessionId utility function ([dcd3744](https://github.com/my-mcp-hub/node-mcp-server/commit/dcd3744644acfd5d07c47850c0f8cc2a437e0d69))
* add mcp config file and update inspector dependencies ([6ebd8e0](https://github.com/my-mcp-hub/node-mcp-server/commit/6ebd8e073ad3b9248dc0eac4a655caffb0bc0cf3))
* export createServer and add ping interval to SSE ([1b88a9d](https://github.com/my-mcp-hub/node-mcp-server/commit/1b88a9ddb6ed3de71c30eda92153d84b8a24f8ad))


### 🎫 Chores | 其他更新

* add gitattributes and enforce lf line endings ([bbbf2c6](https://github.com/my-mcp-hub/node-mcp-server/commit/bbbf2c6b5e3975e26ec386693faf5ebae42b445d))
* remove comments and duplicate build type from config ([f97ebc9](https://github.com/my-mcp-hub/node-mcp-server/commit/f97ebc9d19012d1efec53ac21b5fcccdc97c14cc))
* remove unused dependencies ([0b6d1e0](https://github.com/my-mcp-hub/node-mcp-server/commit/0b6d1e06163588cd28c2973a4c31c34ae5b09b52))
* update dependencies ([bba5656](https://github.com/my-mcp-hub/node-mcp-server/commit/bba56568109f7635dceb97de8923c61511dad9dc))
* update dependencies ([496b3f6](https://github.com/my-mcp-hub/node-mcp-server/commit/496b3f62eb22806934c10f1edbfe54461c55a86f))
* update dependencies ([1ce7234](https://github.com/my-mcp-hub/node-mcp-server/commit/1ce7234ced20530fbe3ed3f30451bdb4b54a51de))
* update dependencies ([3822719](https://github.com/my-mcp-hub/node-mcp-server/commit/382271949ce5ad15e728d9887bade12b928b7838))
* update dependencies ([0ac1626](https://github.com/my-mcp-hub/node-mcp-server/commit/0ac1626076fe9f62cb1931405cf88efd39063352))
* update dependencies ([21b1091](https://github.com/my-mcp-hub/node-mcp-server/commit/21b10916a75975557f970255b97319a89817cd23))
* update dependencies ([6e62722](https://github.com/my-mcp-hub/node-mcp-server/commit/6e627223704e5985737d57dbf25b3d12141fdc75))
* update dependencies ([124e730](https://github.com/my-mcp-hub/node-mcp-server/commit/124e730fa8fb045e7ef3387c1b1202261f920ed3))
* update dependencies ([b4d6d41](https://github.com/my-mcp-hub/node-mcp-server/commit/b4d6d41f295aeaf407a592b3cf0084511ec925b6))
* update dependencies ([d41a529](https://github.com/my-mcp-hub/node-mcp-server/commit/d41a529406bc08c7182247ca3e6e9992e43ac0dc))
* update dependencies ([e4be562](https://github.com/my-mcp-hub/node-mcp-server/commit/e4be562fe4b56239f6ab1b2082d2b7c5988f95d8))
* update dependencies ([3237626](https://github.com/my-mcp-hub/node-mcp-server/commit/3237626813bbecd242b024a4d86f48fb6256d807))
* update dependencies ([6455ea0](https://github.com/my-mcp-hub/node-mcp-server/commit/6455ea041ddf82aa0ebf503d2c6ee95060233d48))
* update dependencies ([70c1794](https://github.com/my-mcp-hub/node-mcp-server/commit/70c17940f6002b652cd4c9c75e9d322370a15fe7))
* update dependencies ([cf1bc60](https://github.com/my-mcp-hub/node-mcp-server/commit/cf1bc6076c2679f8c0a21c3236199425f5c287eb))
* update dependencies ([801afed](https://github.com/my-mcp-hub/node-mcp-server/commit/801afedda034a837e92aee5cb06808cd3a6f73d7))
* update dependencies ([51b7535](https://github.com/my-mcp-hub/node-mcp-server/commit/51b75352c31e60303f0dd0e34918bc4ab9cb76e2))
* update dependencies ([84a5359](https://github.com/my-mcp-hub/node-mcp-server/commit/84a5359190d6b1799ebf829f53411cf1593c46d2))
* update dependencies ([fe2bcb1](https://github.com/my-mcp-hub/node-mcp-server/commit/fe2bcb16c2d37981134e67a65491715150043253))
* update dependencies ([dd3d610](https://github.com/my-mcp-hub/node-mcp-server/commit/dd3d610b264dba33b3d8bb58752bd13a57e51bf0))
* update dependencies ([fb91d86](https://github.com/my-mcp-hub/node-mcp-server/commit/fb91d86770da8c782ac72a1a99f5b2e4fe534984))
* update dependencies ([59e2449](https://github.com/my-mcp-hub/node-mcp-server/commit/59e2449fea75d36a4f40897f5b2a152dae0ceace))
* update dependencies ([62b5ab3](https://github.com/my-mcp-hub/node-mcp-server/commit/62b5ab38dc1b5ae0239fbbd51790fb9530d8897a))
* update dependencies ([78e3f26](https://github.com/my-mcp-hub/node-mcp-server/commit/78e3f263d9332313111035cbc60ea2219d11e197))
* update dependencies ([d46da5f](https://github.com/my-mcp-hub/node-mcp-server/commit/d46da5fac55d7e4d0e39a9d54c16b9dcb8fe18db))
* update dependencies ([abf5561](https://github.com/my-mcp-hub/node-mcp-server/commit/abf5561f3c3132f90b429ba0906d39e98e4dc901))
* update dependencies ([872f6d7](https://github.com/my-mcp-hub/node-mcp-server/commit/872f6d7ecf4e910d1ac91e8758494fffde5a28d9))
* update dependencies ([39c4dac](https://github.com/my-mcp-hub/node-mcp-server/commit/39c4daca93ca79a3476a8acffd6bb27fe2a47847))
* update dependencies ([49f4cdc](https://github.com/my-mcp-hub/node-mcp-server/commit/49f4cdceba35f545ecd340f7b9874e38e19d9bf6))
* update dependencies ([2031701](https://github.com/my-mcp-hub/node-mcp-server/commit/20317016951651f7b64e0f2fa803f4f842bd732d))
* update dependencies ([6e3aec1](https://github.com/my-mcp-hub/node-mcp-server/commit/6e3aec13c760c1c1b4b375f53d625db6a8fb27ca))
* update dependencies ([d355749](https://github.com/my-mcp-hub/node-mcp-server/commit/d355749f33b64b23cf44a238adc862e22a206ee4))
* update dependencies ([dea0460](https://github.com/my-mcp-hub/node-mcp-server/commit/dea04609f5c716c6c2980b30b6a1822c45dfbb46))
* update dependencies ([d297f48](https://github.com/my-mcp-hub/node-mcp-server/commit/d297f489991f51eac996485ac09c5b252c2aceff))
* update dependencies ([6e1ff94](https://github.com/my-mcp-hub/node-mcp-server/commit/6e1ff9409554f5c7d5a66d4943a1896ed0c3ed34))
* update dependencies ([59157fc](https://github.com/my-mcp-hub/node-mcp-server/commit/59157fc45c4c01b6da4c88f470f44e7c0f79498b))
* update dependencies ([db5149e](https://github.com/my-mcp-hub/node-mcp-server/commit/db5149ef2c016f845c024153911601a8d5efd90c))
* update dependencies ([9a83eeb](https://github.com/my-mcp-hub/node-mcp-server/commit/9a83eebe54cec2be7a025c0d29caee65dd3c5d3d))
* update dependencies ([7507d04](https://github.com/my-mcp-hub/node-mcp-server/commit/7507d0454df287f6ce18cb42e5a242eb9945df00))
* update dependencies ([c978852](https://github.com/my-mcp-hub/node-mcp-server/commit/c978852d3f245baf3d5ba3c5faf6836f6866ee72))
* update dependencies and add @prettier/plugin-oxc ([6211719](https://github.com/my-mcp-hub/node-mcp-server/commit/62117191e96d89f109e9ea31337cd145cb952776))


### 🐛 Bug Fixes | Bug 修复

* rename 'type' to 'command' in mcp.json configuration ([3c7e34c](https://github.com/my-mcp-hub/node-mcp-server/commit/3c7e34ca6598aad7e26f68e7ead55b02bfa55966))


### 👷‍ Build System | 构建

* add conventional changelog configuration ([977857c](https://github.com/my-mcp-hub/node-mcp-server/commit/977857c214da2dafbfdcc78b58cd75053970b544))
* add oxc parser configuration for js and ts files ([ae01f61](https://github.com/my-mcp-hub/node-mcp-server/commit/ae01f615c5773b2d24c4b884e516eb7d621f8a18))
* replace eslint with biome for linting ([cb2d0e5](https://github.com/my-mcp-hub/node-mcp-server/commit/cb2d0e54b366ac0d7e3fcc710676409526d52a26))
* replace typescript-eslint packages with typescript-eslint bundle ([e48a9ce](https://github.com/my-mcp-hub/node-mcp-server/commit/e48a9ce62cfab424ae4d4df7a1111eb438fdcef6))
* update tsconfig include paths for vitest files ([8428218](https://github.com/my-mcp-hub/node-mcp-server/commit/8428218981a0876a370b9012815b98e1aca22f52))
* update vitest to v4.0.1 and simplify thread config ([ea9bcf0](https://github.com/my-mcp-hub/node-mcp-server/commit/ea9bcf02aff6f659b3c8d4ef55971896daedc7a2))


### 💄 Styles | 风格

* fix formatting and type assertions in vitest config files ([ef9c0de](https://github.com/my-mcp-hub/node-mcp-server/commit/ef9c0de8baf763a63786cc7f88173af4688d6690))
* fix import order and semicolon consistency ([f10f195](https://github.com/my-mcp-hub/node-mcp-server/commit/f10f195b0aede82e78afaa24afdd74acee409d6b))
* format vitest setup file by removing unnecessary line breaks ([7460576](https://github.com/my-mcp-hub/node-mcp-server/commit/74605769d1f5a9c47d2d0a23ea270310db635b80))


### 🔧 Continuous Integration | CI 配置

* add lint step to github workflows ([de5eac1](https://github.com/my-mcp-hub/node-mcp-server/commit/de5eac1484e6d21a1ee1c5078a1faa435fc29f89))



## [0.0.2](https://github.com/my-mcp-hub/node-mcp-server/compare/v0.0.1...v0.0.2) (2025-07-25)


### 🎫 Chores | 其他更新

* bump version to 0.0.2 ([6dc5470](https://github.com/my-mcp-hub/node-mcp-server/commit/6dc5470c14975e3d3f4e8e8df74f4ee21b141b5a))
* update dependencies ([7b87b6c](https://github.com/my-mcp-hub/node-mcp-server/commit/7b87b6c10e10f831bf01f9de92231200aff9ab43))


### 📝 Documentation | 文档

* update npm package links in README ([6929a04](https://github.com/my-mcp-hub/node-mcp-server/commit/6929a04ee9b36c12a751811cd415858b63396439))



## [0.0.1](https://github.com/my-mcp-hub/node-mcp-server/compare/6791303db2203b56355c928563f51863d0fc86a0...v0.0.1) (2025-07-24)


### ♻ Code Refactoring | 代码重构

* update test client name and type assertion in vitest setup ([f1b5cfe](https://github.com/my-mcp-hub/node-mcp-server/commit/f1b5cfe54d1618529715503946d42311d13fdcf4))
* update text in registerGetData ([554760f](https://github.com/my-mcp-hub/node-mcp-server/commit/554760f44b0042ccb90b6aace660c8b7d9055cd2))
* update tool registration syntax in README ([92cc396](https://github.com/my-mcp-hub/node-mcp-server/commit/92cc39633704f20fad2e0685b62978e8ec8d768f))
* use path aliases for imports to improve maintainability ([4da4665](https://github.com/my-mcp-hub/node-mcp-server/commit/4da46659f4446280d3e3ff0b6a84069126b5e588))


### ✅ Tests | 测试

* add coverage reporters to vitest setup ([8488e0b](https://github.com/my-mcp-hub/node-mcp-server/commit/8488e0b7e7bd6c6e47f30dd38127b7560eaa0996))
* remove async from describe blocks in test files ([d41cc35](https://github.com/my-mcp-hub/node-mcp-server/commit/d41cc35725a2e866b58046fb220b3170d156897e))
* update test description to be more generic ([477c11d](https://github.com/my-mcp-hub/node-mcp-server/commit/477c11d15fcf72d1f2aca302b8d8487d2052fc2c))
* update test setup ([4fa009a](https://github.com/my-mcp-hub/node-mcp-server/commit/4fa009aecacd4fdca2843307489e075b74a8ba95))


### ✨ Features | 新功能

* add echo prompt registration for message processing ([0a293f8](https://github.com/my-mcp-hub/node-mcp-server/commit/0a293f817da05cf092caf7c93d85c4b5a020f21a))
* add name and version to options interface and initialization ([7f1183d](https://github.com/my-mcp-hub/node-mcp-server/commit/7f1183ddbff6868f166cb14cec649e183954d5ad))
* add search resource ([71b3bcc](https://github.com/my-mcp-hub/node-mcp-server/commit/71b3bcc0e7addc8abf7c621e8ade105718a92aec))
* add vitest setup and test cases for getData ([5caad21](https://github.com/my-mcp-hub/node-mcp-server/commit/5caad21fa09164bfb1fcb7be99418c4d2d3357e3))
* initialize node mcp server with core functionality ([6791303](https://github.com/my-mcp-hub/node-mcp-server/commit/6791303db2203b56355c928563f51863d0fc86a0))
* refactor GetData tool ([1571a81](https://github.com/my-mcp-hub/node-mcp-server/commit/1571a815bc3df870773fbc30c6e1229c25f1f289))


### 🎫 Chores | 其他更新

* add tree-kill dependency for process termination ([08ad03d](https://github.com/my-mcp-hub/node-mcp-server/commit/08ad03d6ba10ddf9553449b42ca6ee004a86f6f8))
* disable auto-open browser after first launch ([9226251](https://github.com/my-mcp-hub/node-mcp-server/commit/922625124cf1336c3f431d63776c9283c5c29913))
* rename package ([7ef07ca](https://github.com/my-mcp-hub/node-mcp-server/commit/7ef07caedc348ddcc4c8b9132f67daaa7ea7e804))
* update dependencies ([70f6daa](https://github.com/my-mcp-hub/node-mcp-server/commit/70f6daaf6bddb1d0037dc537fbc178281f3f089f))
* update dependencies ([e7f28be](https://github.com/my-mcp-hub/node-mcp-server/commit/e7f28bec15f6dc8775ce446702753ffdb9666442))
* update dependencies ([834ca75](https://github.com/my-mcp-hub/node-mcp-server/commit/834ca754e121e8878eae5e0e75953517c49e3411))
* update dependencies ([1bcfd16](https://github.com/my-mcp-hub/node-mcp-server/commit/1bcfd167709f388e4f670e524d585f235bb6c4a5))
* update dependencies ([d373629](https://github.com/my-mcp-hub/node-mcp-server/commit/d37362944c422dc89afef592d4196e4ca1ce0c5a))
* update dependencies ([a8e37ce](https://github.com/my-mcp-hub/node-mcp-server/commit/a8e37cea8f5d77e1c4c9d731198a982620ef31bc))
* update dependencies ([192c193](https://github.com/my-mcp-hub/node-mcp-server/commit/192c1932b69e34d2029ad5f7151b73838149017b))
* update dependencies ([06466fb](https://github.com/my-mcp-hub/node-mcp-server/commit/06466fb7a259d956eff62458f39f62495527c910))
* update package name to include [@my-mcp-hub](https://github.com/my-mcp-hub) scope ([528e32c](https://github.com/my-mcp-hub/node-mcp-server/commit/528e32ce31f2db2e0a63aa77d2dbfa8a05d858a3))


### 🐛 Bug Fixes | Bug 修复

* include test files in eslint config and fix formatting ([6004989](https://github.com/my-mcp-hub/node-mcp-server/commit/600498978d13862d7873544cbe8d6de933e659c0))
* swap before/after hooks and add env var for inspector ([55d5c31](https://github.com/my-mcp-hub/node-mcp-server/commit/55d5c31f59787a6e2f5500eca797429939de8945))


### 👷‍ Build System | 构建

* replace c8 with nyc for test coverage ([47ec8a8](https://github.com/my-mcp-hub/node-mcp-server/commit/47ec8a8901f3e6960b5a9401911a7c18a6e15e7b))
* update coverage command to include lcov reporter ([f6b7a59](https://github.com/my-mcp-hub/node-mcp-server/commit/f6b7a5922898c830c97162538bbf2b1f8dd0c40a))


### 📝 Documentation | 文档

* add badge links to README for better visibility ([6f3b2cf](https://github.com/my-mcp-hub/node-mcp-server/commit/6f3b2cf38373b72df9086d377db8fd3ffb48bc34))
* add repository url to package.json ([d78f7f9](https://github.com/my-mcp-hub/node-mcp-server/commit/d78f7f90eeb9b8f322f9c77ceb836db3eb6081a7))
* update README ([291e2f0](https://github.com/my-mcp-hub/node-mcp-server/commit/291e2f0d5fb7dc67ae5194eb9ab42b95f2256644))


### 🔧 Continuous Integration | CI 配置

* add provenance and public access flags to npm publish ([b6e35c5](https://github.com/my-mcp-hub/node-mcp-server/commit/b6e35c56acc885a00579b9a1a7e6fa3ede5ebb82))
* add test coverage configuration and workflow ([fe30153](https://github.com/my-mcp-hub/node-mcp-server/commit/fe3015364f2e24f6505b2596fb8c7a5d43a92704))
* update node version and replace codecov with coveralls ([200c96c](https://github.com/my-mcp-hub/node-mcp-server/commit/200c96cc372a38bc2a275e5e0f820aeb78bedc31))



