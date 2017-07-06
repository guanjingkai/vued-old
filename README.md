<p align="center">
    <a href="https://vued.design">
        <img width="200" src="https://raw.githubusercontent.com/guanjingkai/vued/master/assets/logo.png">
    </a>
</p>

# Vued
[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)](https://www.npmjs.com/package/vued)
[![npm](https://img.shields.io/npm/v/vued.svg)](https://www.npmjs.com/package/vued)
[![npm](https://img.shields.io/npm/dm/vued.svg)](https://www.npmjs.com/package/vued)
[![npm](https://img.shields.io/npm/dt/vud.svg)](https://www.npmjs.com/package/vued)
[![npm](https://img.shields.io/npm/l/vued.svg)](https://www.npmjs.com/package/vued)
[![GitHub stars](https://img.shields.io/github/stars/guanjingkai/vued.svg?style=social&label=Star)](https://github.com/guanjingkai/vued)


Vued is a UED framework based on Vue2.0, which includes standard UI components, data interaction, graphics, animation  and so on
# Doc
#### [English doing](http://vued.design) 
#### [中文文档 doing](http://vued.design) 

# engines
- [node](https://nodejs.org/) >= 4.0
- [npm](https://www.npmjs.com/) >= 3.0

# Dependency
- [echarts](http://echarts.baidu.com)
- [rc-tween-one](https://motion.ant.design/)

# Overview and Programming
![Vued-UI](https://raw.githubusercontent.com/guanjingkai/vued/master/assets/Vued-UI.png)
![Vued-Chart](https://raw.githubusercontent.com/guanjingkai/vued/master/assets/Vued-Chart.png)


# Install Vued
using npm

> npm install vued --save

Or using script tag for global use

```
<script type="text/javascript" src="vued.min.js"></script>
```

# Usage

```html
<template>
    <Slider v-model="value" range></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value: [20, 50]
            }
        }
    }
</script>
```
Use css

```js
import 'vued/dist/styles/vued.css';
```

# Browser Support
Normal browsers and Internet Explorer 9+.
# Major Contributors
|Name   |Avatar   |Contributors|
|---|---|---|
|  [Guanjingkai](https://github.com/guanjingkai) |  ![](https://avatars3.githubusercontent.com/u/26058819?v=3&s=60)|Vued major developers|
|  [Heroin](https://github.com/heroin) |  ![](https://avatars2.githubusercontent.com/u/584283?v=3&s=60)  |design advice|
# History
|Time   |Event   |
|---|---|
|2017/06/12|first commit|

# Links
- [Ant Design](http://ant.design)
- [Vue](http://www.vuejs.org)
- [ionicons](http://ionicons.com)
- [Webpack](https://webpack.js.org)
- [Echarts](http://echarts.baidu.com)

# License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2017-present, Vued

