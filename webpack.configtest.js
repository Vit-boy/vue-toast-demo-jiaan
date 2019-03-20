const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin'); 
module.exports = {
  entry: './src/lib/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
	  filename: 'vue-toast-demo.js'
  },
  module:{
	  rules:[
		  {
			  test: /\.vue$/,
			  loader: "vue-loader", 
			  options:{
				  loaders:{
					  scss: 'style-loader!css-loader!sass-loader'
				  }
			  }
		  },
		  {
			  test: /\.js$/,
			  loader: "babel-loader",
			  include: path.resolve(__dirname, 'src'),
			  exclude: /node_modules/
		  }
	  ]
  },
  plugins:[
	  new VueLoaderPlugin()
  ]
};