# sourceMap

- 什么是 sourceMap？

  用来关联源码代码与运行代码的一份数据，可以是一份 json

- 为什么会有 sourceMap?

  因为一般情况下；项目上线的时候会经过打包压缩混淆 -> 为了不让其他人操纵源码，增加反编译难度，同时减小体积让网络加载更快。进过混淆的代码对于开发人员定位问题并不友好，所以会有 sourceMap 来将代码映射到源码中

- 一般 sourceMap 怎么用？

  1. 在使用 webpack 的时候，项目构建完其实就已经混淆了，但是会生成 sourcemap 让我们在开发中可以直接映射到源码中
  2. 一般线上调试 bug 的时候不会有 sourcemap，这个时候就可以将 sourcemap 上传到错误收集平台，如 sentry，来实现源码中的定位。

## webpack-sourceMao-devtool

webpack 的 devtool 根据 `^(inline-|hidden-|eval-)?(nosources-)?(cheap-(module-)?)?source-map$`的规则配置 sourcemap

> inline 通过 dataUrl 内联到打包后的文件里，不单独生成 sourcemap 文件

> hidden 单独生成 sourcemap 文件，但不关联到打包产物中，一般是用于上传到错误收集平台

> eval 采用浏览器对 eval 的解析特效，可以直接生成 source 文件并且通过 sourceMappingUrl 关联源码，这样的好处是不用去转换 ast 生成 sourcemap，在多个 loader 的作用下，生产 sourcemap 并关联到源码是一个十分耗时的操作。

> nosources 控制 sourceContent 的生成；sourceContent 在根据文件路径索引不到源文件时会比较有用，缺点是生产的 sourcemap 会附带源码并且体积增大

> cheap 映射关系只映射到行，会丢失精度，但是能加快 sourcemap 的生成速度，而且一般情况下开发定位只需要知道哪一行有问题就够了

> module 经过 loader 的转换每次都会生成 sourcemap 正常情况下 bundle 的代码只能关联到最终打包好的目标代码，要想把每一次的 sourcemap 关联起来直接关联到源码就需要这个配置

> source-map 生成 sourcemap，可以与前面的配置搭配使用
