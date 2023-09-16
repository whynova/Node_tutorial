const { readFileSync,  writeFileSync} = require('fs');
const { readFile } = require('fs/promises');

const f = readFileSync('./sub_dir/text1.txt','utf8');

const s = readFileSync('./sub_dir/text2.txt','utf8');
console.log(s);

writeFileSync(
    './sub_dir/result.txt',`Here is the result : ${f}, ${s} `
);