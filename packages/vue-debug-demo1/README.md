# vue-debug-demo1

关于[launch.json](../../.vscode/launch.json)的 sourceMapPathOverrides 配置

> 默认是

```json
"sourceMapPathOverrides": {
        "meteor://💻app/*": "${workspaceFolder}/packages/*",
        "webpack:///./~/*": "${workspaceFolder}/node_modules/*",
        "webpack://?:*/*": "${workspaceFolder}/*"
    }
```

这里的`?:*` 表示匹配任意字符但是不映射 /后面的`*`表示匹配任意字符同时用来映射；

这里会将除了`*`之外的东西替换为我们后面写的内容；workspaceFolder 是内置变量，代表你现在处理的根目录

由于我才用的是 monorepo 的文件结构，文件要正确映射是将`"webpack://?:*/*": "${workspaceFolder}/*"`改为`"webpack://*": "${workspaceFolder}/packages/*"`
