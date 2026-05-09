const fs = require('fs');
const path = require('path');

const svgs = {
    "icon_5": { prefix: "mdi", name: "check-decagram" },
    "icon_6": { prefix: "mdi", name: "package-variant-closed" },
    "icon_7": { prefix: "mdi", name: "cash-multiple" },
    "icon_8": { prefix: "mdi", name: "truck-fast-outline" },
};

const outDir = path.join(__dirname, 'public', 'icons');

async function main() {
    for (const [filename, { prefix, name }] of Object.entries(svgs)) {
        const url = `https://api.iconify.design/${prefix}/${name}.svg?color=%23307850`;
        const resp = await fetch(url);
        if (!resp.ok) { console.log(`${filename}: FAIL ${resp.status}`); continue; }
        const svg = await resp.text();
        const outPath = path.join(outDir, `${filename}.svg`);
        fs.writeFileSync(outPath, svg);
        console.log(`${filename}: ${prefix}/${name} saved`);
    }
    console.log('Done!');
}

main().catch(e => { console.error(e); process.exit(1); });
