import vue from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve'
import commonJS from 'rollup-plugin-commonjs'
import babel from '@rollup/plugin-babel'
import minify from 'rollup-plugin-babel-minify'

const defaultPath = 'lib/'
const defaultName = 'VueFinalModal'

const defaultPlugins = [
  resolve(),
  commonJS({
    include: 'node_modules/**'
  }),
  vue(),
  babel({ babelHelpers: 'bundled' })
]

const minifyPlugins = [...defaultPlugins, minify()]

export default [
  {
    input: 'index.js',
    output: {
      format: 'esm',
      file: `${defaultPath}${defaultName}.esm.js`
    },
    plugins: defaultPlugins
  },
  {
    input: 'index.js',
    output: {
      format: 'esm',
      file: `${defaultPath}${defaultName}.esm.min.js`
    },
    plugins: minifyPlugins
  },
  {
    input: 'index.js',
    output: {
      name: defaultName,
      format: 'umd',
      file: `${defaultPath}${defaultName}.umd.js`
    },
    plugins: defaultPlugins
  },
  {
    input: 'index.js',
    output: {
      name: defaultName,
      format: 'umd',
      file: `${defaultPath}${defaultName}.umd.min.js`
    },
    plugins: minifyPlugins
  }
]
