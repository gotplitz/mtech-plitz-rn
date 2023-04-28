module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['.'],
					alias: {
						// This needs to be mirrored in tsconfig.json
						'@components': './components',
						'@screens': './screens',
						'@styles': './styles',
						'@assets': './assets',
						'@navigator': './navigator',
					},
				},
			],
		],
	};
};
