import { createPlugin } from 'docz-core'

// Copy from https://github.com/doczjs/docz/issues/1474#issuecomment-671536726
const importFix = () =>
  createPlugin({
    onCreateWebpackConfig: ({ actions }) => {
      const path = require('path')
      actions.setWebpackConfig({
        resolve: {
          modules: [path.resolve(__dirname, '../src'), 'node_modules'],
          alias: {
            '@': path.resolve(__dirname, '../src'),
          },
        },
      })
    },
  })

const config = {
  src: './src/',
  port: 3500,
  menu: ['Introduction'],
  plugins: [importFix()],
}

export default config
