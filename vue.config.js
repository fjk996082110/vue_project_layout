module.exports={
  lintOnSave:true,
  devServer: {
    open: true,
    proxy: {
      '/4000': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        pathRewrite:{
          "^/4000":""
        }
      }
    }
  }
}