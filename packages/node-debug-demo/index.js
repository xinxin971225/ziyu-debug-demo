const cp = require("child_process");

cp.spawnSync("node", ["./a.js"], {
  stdio: "inherit",
});

const fs = require("fs/promises");

(async function() {
  const fileContent = await fs.readFile("./package.json", {
    encoding: "utf-8",
  });

  await fs.writeFile("./package2.json", fileContent);
})();
