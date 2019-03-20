const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin'); 
module.exports = {
  entry: './src/lib/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
	  filename: 'vue-toast-demo.js',
	  libraryTarget: 'umd',
	  library: 'VueToastDemo'
  },
  module:{
	  rules:[
		  {
			  test: /\.vue$/,
			  loader: "vue-loader"
		  },
		  {
			  test: /\.js$/,
			  loader: "babel-loader",
			  include: path.resolve(__dirname, 'src'),
			  exclude: /node_modules/
		  },
		  {
			  test: /\.scss/,
			  use: [{
				  loader: 'style-loader'
			  }, {
				  loader: 'css-loader'
			  }, {
				  loader: 'sass-loader'
			  }],
			  include: path.resolve(__dirname, 'src'),
			  exclude: /node_modules/
		  }
	  ]
  },
  plugins:[
	  new VueLoaderPlugin()
  ]
};