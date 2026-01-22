// Load JSON
async function loadJSON() {
    const response = await fetch('https://raw.githubusercontent.com/saundersresearch/site_data/main/radio_log.json');
    if (!response.ok) {
        throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }
    return await response.json();
}

let maidenheadLayer;

async function init() {
    const data = await loadJSON();
    const grids = [...new Set(
        data.map(s => s.grid).filter(Boolean)
    )];
    console.log(grids)

    if (maidenheadLayer) {
        map.removeLayer(maidenheadLayer);
    }
    
    maidenheadLayer = L.maidenhead({
        color : 'rgba(0, 0, 255, 0.2)', 
        highlights: [
            { grids: grids, color: 'rgba(0, 255, 0, 0.4)', fillOpacity: 0.4 },
        ],
    }).addTo(map);
}

var map = L.map('map', 
    {zoomDelta: 0.5, zoomSnap: 0, wheelPxPerZoomLevel: 50}
).setView([36.15, -86.81], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 20,
    minZoom: 3
}).addTo(map);

init();