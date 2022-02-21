module.exports = {
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  features: {
    postcss: false,
  },
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
};
