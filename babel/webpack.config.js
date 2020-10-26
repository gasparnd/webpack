const path = require('path') //it's help we to create better path's. Package from node.js
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: {
		home: path.resolve(__dirname, 'src/js/index.js'),
	},
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),  
		filename: 'js/bundle-[name].js'  
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	}, 
	devServer: {
		hot: true,
		open: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'Plugins'
		})
	]
}