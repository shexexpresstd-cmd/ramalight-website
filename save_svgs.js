const fs = require('fs');
const path = require('path');

const svgs = {
    "icon_9": { prefix: "mdi", name: "water-pump" },
    "icon_10": { prefix: "mdi", name: "factory" },
    "icon_11": { prefix: "mdi", name: "food-drumstick-outline" },
    "icon_12": { prefix: "mdi", name: "office-building-outline" },
    "icon_13": { prefix: "mdi", name: "tractor" },
    "icon_14": { prefix: "mdi", name: "hospital-building" },
};

const outDir = path.join(__dirname, 'public', 'icons');

async function main() {
    for (const [filename, { prefix, name }] of Object.entries(svgs)) {
        const url = `https://api.iconify.design/${prefix}/${name}.svg?color=%23307850`;
        const resp = await fetch(url);
        if (!resp.ok) { console.log(`${filename}: FAIL ${resp.status}`); continue; }
        const svg = await resp.text();
        // Add viewBox and size for better rendering
        const sized = svg.replace('<svg ', '<svg width="256" height="256" ');
        const outPath = path.join(outDir, `${filename}.svg`);
        fs.writeFileSync(outPath, sized);
        console.log(`${filename}: ${prefix}/${name} saved`);
    }
    // Also save as PNG copies by just copying the original PNGs as fallback
    console.log('Done!');
}

main().catch(e => { console.error(e); process.exit(1); });
