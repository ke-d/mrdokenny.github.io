const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const isProd = (process.env.NODE_ENV === "production");
let config = {
	entry: {
		app: `${__dirname}/src/index.js`,
		vendor: [
			"react",
			"react-dom",
			"react-router",
			"react-apollo",
			"react-router-dom",
			"react-loadable",
			"react-router-transition",
			"react-bootstrap",
			"react-social-icons",
			"react-router-bootstrap",
			"react-spinner-material",
			"recharts",
			"lodash",
			"graphql",
			"prop-types"
		]
	},
	output: {
		path: `${__dirname}/build`,
		publicPath: "/build/",
		filename: "bundle.js"
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader"
					}
				]
			},
			{
				test: /\.json$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "json-loader"
					}
				]
			}

		]
	},

	plugins: [
		new webpack.DefinePlugin({ // <-- key to reducing React"s size
			"process.env": {
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			parallel: true
		}), // minify everything
		new webpack.optimize.CommonsChunkPlugin({
			children: true,
			async: true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			chunks: ["app"],
			filename: "vendor.js"
		}),
		new webpack.optimize.MinChunkSizePlugin({
			minChunkSize: 100000 // Minimum number of characters
		}),
		new BundleAnalyzerPlugin({
			analyzerMode: "static"
		})
	]
};

// Compress image if production build
if (isProd) {
	config.module.rules.push({
		test: /\.(gif|png|jpe?g|svg)$/i,
		exclude: /node_modules/,
		use: [
			{
				loader: "file-loader?hash=sha512&digest=hex&name=[hash].[ext]"
			},
			{
				loader: "img-loader",
				options: {
					optipng: false, // disabled
					pngquant: true,
					gifsicle: {
						optimizationLevel: 3
					}
				}
			}
		]
	});
} else {
	config.module.rules.push({
		test: /\.(gif|png|jpe?g|svg)$/i,
		exclude: /node_modules/,
		use: [
			{
				loader: "file-loader?hash=sha512&digest=hex&name=[hash].[ext]"
			}
		]
	});
}

module.exports = config;
