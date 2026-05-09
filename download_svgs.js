const fs = require('fs');
const path = require('path');

const ICONS = {
    "icon_9":  "mdi:water-pump",
    "icon_10": "mdi:factory",
    "icon_11": "mdi:food-drumstick-outline",
    "icon_12": "mdi:office-building-outline",
    "icon_13": "mdi:tractor",
    "icon_14": "mdi:hospital-building",
};

const OUT = path.join(__dirname, 'public', 'icons_svg');

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

async function main() {
    for (const [filename, iconId] of Object.entries(ICONS)) {
        const [prefix, name] = iconId.split(':');
        const url = `https://api.iconify.design/${prefix}/${name}.svg?color=%23307850`;
        console.log(`${filename}: ${url}`);
        const resp = await fetch(url);
        if (!resp.ok) { console.log(`  FAIL: HTTP ${resp.status}`); continue; }
        const svg = await resp.text();
        const outPath = path.join(OUT, `${filename}.svg`);
        fs.writeFileSync(outPath, svg);
        console.log(`  -> ${outPath}`);
    }
    console.log('Done!');
}

main().catch(e => { console.error(e); process.exit(1); });
