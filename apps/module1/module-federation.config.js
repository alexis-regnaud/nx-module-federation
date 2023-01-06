// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'module1',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  remotes: ['module2'],
};

module.exports = moduleFederationConfig;
