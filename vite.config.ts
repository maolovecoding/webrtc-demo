import { defineConfig } from "vite";
import {resolve} from 'path'
import ReactPlugin from '@vitejs/plugin-react-swc'
export default defineConfig({
  plugins:[
    ReactPlugin()
  ],
  resolve:{
    alias:{
      '@': resolve(__dirname, './src')
    }
  }
})