import path from 'path'
import { UserConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import WindiCSS from 'vite-plugin-windicss'

const config: UserConfig = {
  plugins: [
    Components({
      dirs: ['.vitepress/components'],
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    }),
    WindiCSS({
      preflight: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.vitepress')
    }
  }
}

export default config