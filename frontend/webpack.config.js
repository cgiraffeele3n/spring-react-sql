import { resolve as _resolve } from 'path';

export const mode = 'development';
export const entry = './src/index.ts';
export const output = {
    path: _resolve(__dirname, './dist'),
    filename: 'build.js'
};
export const resolve = {
    extensions: ['.ts', '.js', 'tsx', '.json'],
};
export const module = {
    rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        url: false,
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            require('autoprefixer')({
                                grid: true
                            })
                        ]
                    }
                },
                {
                    loader: 'sass-loader'
                }
            ]
        }
    ]
};