# debug-demo

初试 vscode debug 需要通过项目启动服务并生成[调试配置](./.vscode/launch.json)

通过运行与调试（shift+command+d -> F5）可以直接在项目需要处打上断点并查看状态

## debug 特性

> 工具以 vscode 与 chrome 为例子

- 默认用户数据储存的 user data dir 会指向 ~/Library/Application\ Support/Google/Chrome/Default

- 用户数据目录有个特点，就是只能被一个 Chrome 实例所访问，如果你之前启动了 Chrome 用了这个默认的 user data dir，那就不能再启动一个 Chrome 实例用它了

- 进入调试模式并临时创建 user data dir 的话，调整状态下的 chrome 会是一个全新的空白状态，例如原本 chrome 上保存的标签与安装的插件都不存在

- 为了能复用 user data dir 来获取平时使用的工具，可以采用不同版本的 chrome，创建不同的独立的 Chrome 实例

### 测试 devtools 工具链需要先下载

```bash
git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git

export PATH=/本地的路径/depot_tools:$PATH

(科学上网) fetch devtools-frontend

```

调整代码并执行

```bash
gn gen out/Default --args='devtools_skip_typecheck=true'

autoninja -C out/Default

```

启动项目的时候，或者调试的时候加个参数 `--custom-devtools-frontend=file://本地路径/devtools/devtools-frontend/out/Default/gen/front_end` 就可以用自己修改过的开发调试工具了
