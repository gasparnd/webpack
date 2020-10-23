const path = require('path') //it's help we to create better path's. Package from node.js
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
		rules: [{
			test: /\.css?/,
			use: [
				{
					loader: MiniCSSExtractPlugin.loader
				},
				'css-loader'
			],
		}]
	}, 
	plugins: [
		new MiniCSSExtractPlugin({
			filename: 'css/[name].css'
		}),
		new HtmlWebpackPlugin({
			title: 'Plugins'
		})
	]
}