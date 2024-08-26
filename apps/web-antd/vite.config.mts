import { defineConfig } from '@vben/vite-config';

export default defineConfig(async () => {
  return {
    application: {},
    vite: {
      server: {
        proxy: {
          '/jeecg-boot': {
            changeOrigin: true,
            target: 'https://platform.yundazhihui.cn',
            ws: false,
          },
        },
      },
    },
  };
});
