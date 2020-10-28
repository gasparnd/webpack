const path = require('path') //it's help we to create better path's. Package from node.js
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: {
		home: path.resolve(__dirname, 'src/js/index.js'),
		contact: path.resolve(__dirname, 'src/js/contact.js'),
	},
	mode: 'production',
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
				test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 900000
					}
				}
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: MiniCSSExtractPlugin.loader
					},
					'css-loader',
					'less-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCSSExtractPlugin.loader
					},
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.styl$/,
				use: [
					{
						loader: MiniCSSExtractPlugin.loader
					},
					'css-loader',
					'stylus-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCSSExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					},
					'postcss-loader'
				]
			}
		]
	}, 
	devServer: {
		hot: true,
		open: true,
	},
	plugins: [
		new MiniCSSExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: 'css/[id].css'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'Plugins',
			template: path.resolve(__dirname, 'index.html')
		}),
		new webpack.DllReferencePlugin({
			manifest: require('./modules-manifest.json')
		})
	],
}