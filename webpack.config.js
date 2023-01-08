

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebPackPlugin from "html-webpack-plugin";

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default 
{
    "entry": {
        "main": "./src/index.js"
    },
    "output": {
        "path": path.resolve(__dirname + "/")
    },
    "watch": true,
    "module": {
        "rules": [
            {
                "test": /\.s[ac]ss$/i,
                "use": [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                "test": /\.html$/,
                "use": [
                  {
                    "loader": "html-loader",
                    "options": { minimize: true }
                  }
                ]
            }
        ],
    },
    "plugins": [
        new HtmlWebPackPlugin({
            "template": './src/index.html',
            "filename": 'index.html'
        }),
        new MiniCssExtractPlugin({ filename: `style.css` })

    ]
}