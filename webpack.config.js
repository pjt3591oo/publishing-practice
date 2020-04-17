const path = require('path');

const config = {  
    entry: {
        main : ['./src/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'static/javascripts/'),
        filename: 'mungView_plugin.js',
        library: 'MungView_plugin',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    mode: 'production'
};

module.exports = config;  