const { Resvg } = require('@resvg/resvg-js');
const fs = require('fs');
const path = require('path');

async function downloadSvg(prefix, name) {
    const url = `https://api.iconify.design/${prefix}/${name}.svg`;
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`HTTP ${resp.status} for ${url}`);
    return await resp.text();
}

const ICONS = {
    "icon_9":  ["game-icons", "water-treatment"],
    "icon_10": ["mdi", "factory"],
    "icon_11": ["game-icons", "food-chain"],
    "icon_12": ["mdi", "office-building-outline"],
    "icon_13": ["game-icons", "tractor"],
    "icon_14": ["mdi", "hospital-box-outline"],
};

const OUT = path.join(__dirname, 'public', 'icons');

async function main() {
    for (const [filename, [prefix, name]] of Object.entries(ICONS)) {
        console.log(`${filename}: ${prefix}/${name}...`);
        const svg = await downloadSvg(prefix, name);
        const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 512 } });
        const png = resvg.render().asPng();
        const outPath = path.join(OUT, `${filename}.png`);
        fs.writeFileSync(outPath, png);
        console.log(`  -> ${outPath} (${png.length} bytes)`);
    }
    console.log('\nDone!');
}

main().catch(e => { console.error(e); process.exit(1); });
