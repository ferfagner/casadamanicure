import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.FIREBASE_APIKEY': JSON.stringify(env.FIREBASE_APIKEY),
      'process.env.FIREBASE_AUTHDOMAIN': JSON.stringify(env.FIREBASE_AUTHDOMAIN),
      'process.env.FIREBASE_PROJECTID': JSON.stringify(env.FIREBASE_PROJECTID),
      'process.env.FIREBASE_STORAGEBUCKET': JSON.stringify(env.FIREBASE_STORAGEBUCKET),
      'process.env.FIREBASE_MESSAGINGSENDERID': JSON.stringify(env.FIREBASE_MESSAGINGSENDERID),
      'process.env.FIREBASE_APPID': JSON.stringify(env.FIREBASE_APPID),
      'process.env.FIREBASE_MEASUREMENTID': JSON.stringify(env.FIREBASE_MEASUREMENTID),
    },
    plugins: [react()],
  }
})