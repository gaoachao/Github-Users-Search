const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
	lintOnSave:false, //关闭语法检查
	//开启代理服务器
	// devServer:{
	// 	proxy:'http://localhost:'
	// }

	// devServer:{
	// 	//这样写的优势：克服了目标服务器单一的问题和
	// 	//自己端口文件存在影响用代理服务器获取目标服务器文件的错误
	// 	proxy:{
	// 		'/api':{
	// 			target:'',
	// 			pathRewrite:{'^/api':''},
	// 			ws:true, //用于支持websocket
	// 			changeOrigin:true, //用于控制请求头中的host值
	// 		},
	// 	}
	// }
})
