const path = require('path')
const VueLoaderPlugin  = require('vue-loader/lib/plugin')
const webpack  = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: {
		path: './src/main.js'
	},
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: './index.html',
			template: './index.html',
			inject: true
		}),
	],
	devServer: {
		contentBase: path.resolve(__dirname, "./src"),
		host: 'localhost',
		port: 9099,
		inline: true,
		hot: true
	}
}