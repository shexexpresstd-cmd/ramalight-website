const fs = require('fs');
const path = require('path');

// Read the snapshot file and extract PNG data
const snapshotPath = path.join(process.env.USERPROFILE || 'C:\\Users\\Administrator', '.qwenpaw', 'workspaces', 'default', 'tool_result', 'bec0aac6f4e6442182231e66d6ad99e3.txt');
const text = fs.readFileSync(snapshotPath, 'utf8');

// Extract the JSON embedded in the document title
const match = text.match(/document:\s*"(\[.*\])"/);
if (!match) {
    console.error('Could not find data in snapshot');
    process.exit(1);
}

const results = JSON.parse(JSON.parse('"' + match[1].replace(/\\"/g, '"').replace(/\\\\/g, '\\') + '"'));

// Actually the data is already double-escaped. Let me try a different approach.
// Just use eval on the page directly...

// Let me try parsing the raw data differently
const rawMatch = text.match(/document:\s*"(\[.*?\])"\s*\n/);
if (rawMatch) {
    const raw = rawMatch[1];
    const data = JSON.parse(raw.replace(/\\"/g, '"').replace(/\\\\/g, '\\'));
    const outDir = path.join(__dirname, 'public', 'icons');
    
    for (const item of data) {
        const buf = Buffer.from(item.data.split(',')[1], 'base64');
        const outPath = path.join(outDir, `${item.name}.png`);
        fs.writeFileSync(outPath, buf);
        console.log(`Saved ${outPath} (${buf.length} bytes)`);
    }
    console.log('Done!');
} else {
    console.log('Could not parse snapshot data');
    console.log('First 2000 chars:', text.substring(0, 2000));
}
