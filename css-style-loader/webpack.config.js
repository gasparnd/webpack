const path = require('path') //it's help we to create better path's. Package from node.js

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
				'style-loader',
				'css-loader'
			],
		}]
	}
}