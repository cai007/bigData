/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js
/* eslint-env node */
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = function(ctx) {
  return {
    // https://quasar.dev/quasar-cli/supporting-ts
    supportTS: false,

    // https://quasar.dev/quasar-cli/prefetch-feature
    // preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://quasar.dev/quasar-cli/boot-files
    boot: ["main"],

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
    css: ["app.scss", "theme.scss"],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // 'ionicons-v4',
      // 'mdi-v5',
      // 'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      "roboto-font", // optional, you are not bound to it
      "material-icons" // optional, you are not bound to it
    ],

    // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
    build: {
      vueRouterMode: "hash", // available values: 'hash', 'history'

      publicPath: ctx.dev ? "" : "",

      // transpile: false,

      // Add dependencies for transpiling with Babel (Array of string/regex)
      // (from node_modules, which are by default not transpiled).
      // Applies only if "transpile" is set to true.
      // transpileDependencies: [],

      // rtl: false, // https://quasar.dev/options/rtl-support
      // preloadChunks: true,
      // showProgress: false,
      gzip: true,
      // analyze: true,

      // Options below are automatically set depending on the env, set them if you want to override
      // extractCSS: false,
      chainWebpack(config) {
        config.module.rules.delete("svg");
        config.module
          .rule("svg")
          .exclude.add(resolve("src/assets/icons"))
          .end();
        config.module
          .rule("icons")
          .test(/\.svg$/)
          .include.add(resolve("src/assets/icons"))
          .end()
          .use("svg-sprite-loader")
          .loader("svg-sprite-loader")
          .end();
      },

      // https://quasar.dev/quasar-cli/handling-webpack
      extendWebpack(cfg) {
        cfg.module.unknownContextCritical = false;
        // 修改原本webpack配置里对于svg的rule，由于chainWebpack优先级高于extendWebpack，在chainWebpack里配置完后，要将extendWebpack里的配置去掉，否则会覆盖
        cfg.module.rules[3].test = /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/;
        // 添加loader
        cfg.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /node_modules/
        });
        // 设置别名
        cfg.resolve.alias = {
          ...cfg.resolve.alias,
          "@": resolve("src")
        };
        // 添加插件
        cfg.plugins.push(
          new CopyWebpackPlugin({
            patterns: [
              {
                from: "node_modules/cesium/Build/Cesium/Workers",
                to: "Workers"
              },
              {
                from: "node_modules/cesium/Build/Cesium/ThirdParty",
                to: "ThirdParty"
              },
              {
                from: "node_modules/cesium/Build/Cesium/Assets",
                to: "Assets"
              },
              {
                from: "node_modules/cesium/Build/Cesium/Widgets",
                to: "Widgets"
              }
            ]
          })
        );
        cfg.plugins.push(
          new webpack.DefinePlugin({
            // Define relative base path in cesium for loading assets
            CESIUM_BASE_URL: JSON.stringify("")
          })
        );
      },

      // 环境变量
      env: ctx.dev
        ? {
            // 在开发状态下我们拥有以下属性
            BASE_API: "/dev-api",
            BASE_URL: "https://wuhan.deepblueai.com/dt/api/sys/file/getFile/",
            BASE_MODEL: "https://wuhan.deepblueai.com/dt"
          }
        : {
            // 在构建状态（生产版本）下
            BASE_API: "",
            BASE_URL: `/dt/api/sys/file/getFile/`,
            BASE_MODEL: "/dt"
          }
    },

    // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
    devServer: {
      https: false,
      port: 8082,
      open: true, // opens browser window automatically
      proxy: {
        "/dev-api": {
          target: `https://wuhan.deepblueai.com`,
          // target: `http://192.168.221.91:7080`,
          changeOrigin: true,
          pathRewrite: {
            "^/dev-api": ""
          }
        },
        "/mock": {
          target: `http://10.16.33.72:8787/mock`,
          // target: `http://192.168.221.91:7080`,
          changeOrigin: true,
          pathRewrite: {
            "^/mock": ""
          }
        },
        "/dw_api": {
          target: `https://d1.weather.com.cn`,
          // target: `http://192.168.221.91:7080`,
          changeOrigin: true,
          pathRewrite: {
            "^/dw_api": "/sk_2d"
          }
        }
      }
    },

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
    framework: {
      iconSet: "material-icons", // Quasar icon set
      lang: "zh-hans", // Quasar language pack
      config: {},

      // Possible values for "importStrategy":
      // * 'auto' - (DEFAULT) Auto-import needed Quasar components & directives
      // * 'all'  - Manually specify what to import
      importStrategy: "auto",

      // For special cases outside of where "auto" importStrategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      // components: [],
      // directives: [],

      // Quasar plugins
      plugins: [
        "LocalStorage",
        "SessionStorage",
        "Notify",
        "Loading",
        "Dialog",
        "Loading",
        "AppFullscreen",
        "Cookies"
      ]
    },

    animations: "all", // --- includes all animations
    // https://quasar.dev/options/animations
    // animations: [
    //   "fadeInLeft",
    //   "fadeInRight",
    //   "fadeInUp",
    //   "fadeInDown",
    //   "fadeOutLeft",
    //   "fadeOutRight",
    //   "fadeOutUp",
    //   "fadeOutDown"
    // ],

    // https://quasar.dev/quasar-cli/developing-ssr/configuring-ssr
    ssr: {
      pwa: false
    },

    // https://quasar.dev/quasar-cli/developing-pwa/configuring-pwa
    pwa: {
      workboxPluginMode: "GenerateSW", // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {}, // only for GenerateSW
      manifest: {
        name: `Quasar App`,
        short_name: `Quasar App`,
        description: `A Quasar Framework app`,
        display: "standalone",
        orientation: "portrait",
        background_color: "#ffffff",
        theme_color: "#027be3",
        icons: [
          {
            src: "icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png"
          },
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png"
          },
          {
            src: "icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png"
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
    electron: {
      bundler: "packager", // 'packager' or 'builder'

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',
        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: "quasar-init"
      },

      // More info: https://quasar.dev/quasar-cli/developing-electron-apps/node-integration
      nodeIntegration: true,

      extendWebpack(/* cfg */) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      }
    }
  };
};
