const fs = require('fs');
const path = require('path');

const svgDir = path.join(__dirname, 'public', 'icons_svg');
const files = ['icon_9','icon_10','icon_11','icon_12','icon_13','icon_14'];

let html = `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>
<canvas id="c" width="512" height="512"></canvas>
<script>
const ICONS = {`;

for (const f of files) {
    const svg = fs.readFileSync(path.join(svgDir, `${f}.svg`), 'utf8');
    html += `\n"${f}": ${JSON.stringify(svg)},`;
}

html += `
};
const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');

async function convertOne(name, svgText) {
    const blob = new Blob([svgText], {type:'image/svg+xml'});
    const url = URL.createObjectURL(blob);
    const img = new Image();
    return new Promise((resolve) => {
        img.onload = () => {
            ctx.clearRect(0,0,512,512);
            ctx.drawImage(img, 0, 0, 512, 512);
            resolve({name, data: canvas.toDataURL('image/png')});
            URL.revokeObjectURL(url);
        };
        img.onerror = () => resolve({name, error: 'load failed'});
        img.src = url;
    });
}

async function main() {
    const results = [];
    for (const [name, svg] of Object.entries(ICONS)) {
        results.push(await convertOne(name, svg));
    }
    document.title = 'DONE';
    document.body.innerHTML = '<pre>' + JSON.stringify(results) + '</pre>';
}
main();
<\/script></body></html>`;

fs.writeFileSync(path.join(__dirname, 'public', 'convert.html'), html);
console.log('Generated convert.html');
