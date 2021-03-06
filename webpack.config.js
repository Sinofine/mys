const path = require("path");

module.exports = {
    entry:path.resolve(__dirname, "src")+"\\index.ts",
    output:{
        path:path.resolve(__dirname, "dist"),
        filename:"index.js"
    },
    resolve:{
        extensions:[".ts",".tsx",".js"]
    },
    module:{
        rules:[{test:/\.tsx?$/,loader:"ts-loader"}]
    },
    mode:"production"
};
