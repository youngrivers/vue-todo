# vue-todo
> 基于vue2.0构建的vue-todo
- [webpack](): "^4.16.1"
- [vue](): "^2.5.16"
## build
```
# install dependencies
npm install

# serve with hot reload at localhost:4080
npm run dev
```
## Tips
- Q
```
vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config
```
- A
```
const VueLoaderPlugin = require('vue-loader/lib/plugin');
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],
```