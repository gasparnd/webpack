const path = require('path') //it's help we to create better path's. Package from node.js

module.exports = {
	entry: './index.js',  //input
	mode: 'development', //or production
	output: {
		path: path.resolve(__dirname, 'dist'),  //return an absolute route where will live the project
		filename: 'bundle.js'
	},
}