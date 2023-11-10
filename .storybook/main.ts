import type { StorybookConfig } from '@storybook/nextjs'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'
import type { Configuration } from 'webpack'

const config: StorybookConfig = {
  stories: ['../components/**/*.stories.tsx', '../components/**/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config: Configuration) => {
    if (!config.resolve) {
      config.resolve = {}
    }

    config.resolve.plugins = [...(config.resolve.plugins || []), new TsconfigPathsPlugin()]

    return config
  },
}
export default config
