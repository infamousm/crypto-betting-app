const webpack = require("webpack");                                                                                                                             
module.exports = function override(config, env) {
    
    // config.resolve.extensions = [...config.resolve.extensions, ".ts", ".js"]
    config.plugins = [
        ...config.plugins,
        new webpack.ProvidePlugin({
            process: "process/browser",
            Buffer: ["buffer", "Buffer"],
        }),
    ]

    return config
}







































































































































































































































































































































































































































