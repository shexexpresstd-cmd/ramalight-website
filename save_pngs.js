const fs = require('fs');
const path = require('path');

// The base64 data from the browser eval (truncated in output but we'll extract from file)
const fullText = fs.readFileSync(path.join(process.env.USERPROFILE, '.qwenpaw', 'workspaces', 'default', 'tool_result', '26ef3db84d6649e788e178d9c4e704cc.txt'), 'utf8');

// Try to extract the JSON result
const jsonMatch = fullText.match(/"result": "({.*})"/);
if (!jsonMatch) {
    console.log('Could not find result in file');
    console.log('First 500 chars of file:', fullText.substring(0, 500));
    process.exit(1);
}

let jsonStr = jsonMatch[1].replace(/\\"/g, '"').replace(/\\\\/g, '\\');
const data = JSON.parse(jsonStr);

const outDir = path.join(__dirname, 'public', 'icons');
for (const [name, b64] of Object.entries(data)) {
    const base64Data = b64.replace(/^data:image\/png;base64,/, '');
    const buf = Buffer.from(base64Data, 'base64');
    const outPath = path.join(outDir, `${name}.png`);
    fs.writeFileSync(outPath, buf);
    console.log(`Saved ${outPath} (${buf.length} bytes)`);
}
console.log('Done!');
