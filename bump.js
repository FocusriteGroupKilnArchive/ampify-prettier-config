const fs = require("fs");
const packageJson = fs.readFileSync("./package.json").toString("utf8");
const json = JSON.parse(packageJson);
json.version = `1.1.${process.env.CIRCLE_BUILD_NUM}`;
fs.writeFileSync("./package.json", JSON.stringify(json));
