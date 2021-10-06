module.exports = {

  configureWebpack:{
    resolve:{
      //起别名配置
      //默认@ 代表src目录
      alias:{
        "assets":"@/assets",
        "common":"@/common",
        "components":"@/components",
        "network":"@/network",
        "views":"@/views"
      }
    }
  }
}
