module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://172.18.4.109:9001',
                ws: true,
                changeOrigin: true
            }
        }
    }
}