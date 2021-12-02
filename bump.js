const fs = require("fs");
const json = require('./package.json');

if (process.argv.length < 4) {
  console.log(`Usage: node bump.js [packageName] [version]
`);
  process.exit(1);
}

const packageName = process.argv[2];
const version = process.argv[3];

json.version = version;`1.1.${process.env.CIRCLE_BUILD_NUM}`;
json.name = packageName;
fs.writeFileSync("./package.json", JSON.stringify(json));
