const path = require('path') //it's help we to create better path's. Package from node.js

module.exports = {
	entry: {
		home: path.resolve(__dirname, 'src/js/index.js'),
		prices: path.resolve(__dirname, 'src/js/prices.js'),
		contact: path.resolve(__dirname, 'src/js/contact.js'),
	},
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),  
		filename: 'js/bundle-[name].js'  
	}
}