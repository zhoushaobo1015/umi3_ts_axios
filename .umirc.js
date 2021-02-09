// ref: https://umijs.org/config/
import theme from './theme';
export default {
  routes: [
    {
      path: '/demo',
      component: '../pages/Demo/index.tsx',
    },
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    },
    
    {
      path: '*',
      component: './404'
    }
  ],
  dva: {
    immer: true
  },
  antd: {},
  // 兼容 ie9
  targets: {
    ie: 9
  },
  title: '数据中台',
  locale: {
    default: 'en-US',
    baseNavigator: false,
  },
  hash: true,
  // 初始动画
  dynamicImport: {
    loading: '@/Loading/index',
  },
  sass: {},
  mock: {},
  ignoreMomentLocale: true,
  theme,
  // 项目打包优化 开发需要注释
  // chainWebpack(config) {
  //   config.merge({
  //     optimization: {
  //       minimize: true,
  //       splitChunks: {
  //         chunks: 'async',
  //         // chunks(chunk) {
  //         //     // exclude `my-excluded-chunk`
  //         //     return chunk.name !== 'my-excluded-chunk';
  //         // },
  //         minSize: 20000, //生成块的最小大小（以字节为单位）1024字节=1KB。
  //         minChunks: 1,   //拆分前必须共享模块的最小块数。
  //         maxInitialRequests: 30, //入口点的最大并行请求数。
  //         automaticNameDelimiter: '.',
  //         cacheGroups: {
  //           vendor: {
  //             name: 'vendors',
  //             test: /^.*node_modules[\\/](?!ag-grid-|lodash|wangeditor|react-virtualized|rc-select|rc-drawer|rc-time-picker|rc-tree|rc-table|rc-calendar|echarts|echarts-gl|xlsx|@ant-design|antd|ali-oss).*$/,
  //             priority: -10,
  //             enforce: true,
  //           },
  //           virtualized: {
  //             name: "virtualized",
  //             test: /[\\/]node_modules[\\/]react-virtualized/,
  //             priority: 10,
  //           },
  //           rcselect: {
  //             name: "rc-select",
  //             test: /[\\/]node_modules[\\/]rc-select/,
  //             priority: 10,
  //           },
  //           rcdrawer: {
  //             name: "rcdrawer",
  //             test: /[\\/]node_modules[\\/]rc-drawer/,
  //             priority: 10,
  //           },
  //           rctimepicker: {
  //             name: "rctimepicker",
  //             test: /[\\/]node_modules[\\/]rc-time-picker/,
  //             priority: 10,
  //           },
  //           ag: {
  //             name: "ag",
  //             test: /[\\/]node_modules[\\/]ag-grid-/,
  //             priority: 10
  //           },
  //           antd: {
  //             name: "antd",
  //             test: /[\\/]node_modules[\\/]antd[\\/]/,
  //             priority: 9,
  //           },
  //           rctree: {
  //             name: "rctree",
  //             test: /[\\/]node_modules[\\/]rc-tree/,
  //             priority: -1,
  //           },
  //           rccalendar: {
  //             name: "rccalendar",
  //             test: /[\\/]node_modules[\\/]rc-calendar[\\/]/,
  //             priority: -1
  //           },
  //           rctable: {
  //             name: "rctable",
  //             test: /[\\/]node_modules[\\/]rc-table[\\/]es[\\/]/,
  //             priority: -1,
  //           },
  //           echarts: { // 1.27MB
  //             name: "echarts",
  //             test: /[\\/]node_modules[\\/](echarts|echarts-gl)[\\/]/,
  //             priority: 10,
  //             enforce: true,
  //           },
  //           wang: {
  //             name: "wang",
  //             test: /[\\/]node_modules[\\/]wangeditor[\\/]/,
  //             priority: -1,
  //           },
  //           lodash: {
  //             name: "lodash",
  //             test: /[\\/]node_modules[\\/]lodash[\\/]/,
  //             priority: -2,
  //           },
  //           antdesigns: { // 702KB
  //             name: "antdesigns",
  //             test: /[\\/]node_modules[\\/](@ant-design|antd|antd-mobile)[\\/]/,
  //             priority: 10,
  //             enforce: true,
  //           },
  //           alioss: { // 427KB
  //             name: "ali-oss",
  //             test: /[\\/]node_modules[\\/]ali-oss[\\/]/,
  //             priority: 10,
  //             enforce: true,
  //           }
  //         }
  //       }
  //     },
  //   });
  //   // 过滤掉moment的那些不使用的国际化文件，过滤后打包出来的vendors.xxx.async.js可以减少290KB
  //   config.plugin("replace").use(require("webpack").ContextReplacementPlugin).tap(() => {
  //     return [/moment[/\\]locale$/, /zh-cn|en-us/];
  //   });
  // }
}
