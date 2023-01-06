// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'module2',
  exposes: {
    './Module': './src/remote-entry.ts',
    './ExternalComponent': './src/app/external-component.tsx',
  },
};

module.exports = moduleFederationConfig;
