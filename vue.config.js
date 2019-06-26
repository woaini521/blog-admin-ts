module.exports = {
    devServer: {
        // 设置代理
        proxy: {
            '/blog_front_api': {
                target: 'http://localhost:8081/', // 域名
                ws: true, // 是否启用websockets
                changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRequiresRewrite: {
                    '^/blog_front_api': '/'
                }
            }
        }
    }
}