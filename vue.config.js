module.exports = {
    baseUrl: '/pc/njcscec/',
    assetsDir: 'static', // 打包生成的静态资源的位置
    productionSourceMap: false,
    devServer: {
        port:8081,
        disableHostCheck: true, // 解决vue项目中的“Invalid Host header”
    }
    // devServer: {
    //     proxy: {
    //         '/api':{
    //             target:'http://jsonplaceholder.typicode.com',
    //             changeOrigin:true,
    //             pathRewrite:{
    //                 '/api':''
    //             }
    //         }
    //     }
    // }
}