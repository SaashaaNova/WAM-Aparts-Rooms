var config = {
    // TODO: Add common Configuration
    watch: true,
    mode: "production",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [["env", {
                            targets: {
                                browsers: ["> 1%"]
                            }
                        }]]
                    }
                }
            }
        ]
    }
};

var appConfig = Object.assign({}, config, {
    name: "app",
    entry: "./js/app.js",
    output: {
        path: `${__dirname}/dist/js`,
        filename: "app.min.js"
    },
});
var constConfig = Object.assign({}, config,{
    name: "apart",
    entry: "./js/sliderConst.js",
    output: {
        path: `${__dirname}/dist/js`,
        filename: "const.min.js"
    },
});

module.exports = [appConfig,constConfig]


// module.exports = {
//     entry: "./js/app.js",
//     output: {
//         path: `${__dirname}/dist/js`,
//         filename: "script.min.js"
//     },
//     watch: true,
//     mode: "production",
//     devtool: "source-map",
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: "babel-loader",
//                     options: {
//                         presets: [["env", {
//                             targets: {
//                                 browsers: ["> 1%"]
//                             }
//                         }]]
//                     }
//                 }
//             }
//         ]
//     }
// }