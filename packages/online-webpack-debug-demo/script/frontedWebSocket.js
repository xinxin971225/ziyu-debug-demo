const CDP = require("chrome-remote-interface");
const fs = require("fs");

async function test() {
  let client;
  try {
    client = await CDP({ host: "127.0.0.1", port: 9222 });
    const { Page, DOM, Debugger } = client;

    await Page.enable();
    await Page.navigate({ url: "https://baidu.com" });

    await DOM.enable();

    const { root } = await DOM.getDocument({
      depth: -1,
    });
  } catch (err) {
    console.error(err);
  }
}
test();
