const path = require('path') //it's help we to create better path's. Package from node.js

module.exports = {
	entry: path.resolve(__dirname, 'index.js'),  //input
	output: {
		path: path.resolve(__dirname, 'dist'),  //return an absolute route where will live the project
		filename: 'bundle.js'  //output file name
	},
}