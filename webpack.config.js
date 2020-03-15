const path = require('path');
const proposal = require('@babel/plugin-proposal-class-properties');

//const webpack = require('webpack');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const moduleParams = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                },

            }
        }
    ]
};

const externalsParams = {
    moment: 'moment'
};
/* 
const pluginsParams = [
    //analisar o tamanho e dependencias
    new BundleAnalyzerPlugin()
] */

const scriptsPesquisador = {
    name: "pesquisador",
    mode: "production",
    entry: {
        index: './src/views-controller/pesquisador/index.js'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "src", "public", "js", "pesquisador")
    },
    module: moduleParams,
    externals: externalsParams
};

const scriptsVisitante = {
    name: "visitante",
    mode: "production",
    entry: {
        index: './src/views-controller/visitante/index.js'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "src", "public", "js", "visitante")
    },
    module: moduleParams,
    externals: externalsParams
}


module.exports = [
    scriptsPesquisador,
    scriptsVisitante
]
