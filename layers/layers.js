var wms_layers = [];

var lyr_GoogleSatellietbeeld = new ol.layer.Tile({
            'title': 'Google Satellietbeeld',
            'baseLayer':'true',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
        
var lyr_BasemapCartoDbPositron = new ol.layer.Tile({
            'title': 'Basemap - CartoDb Positron',
            'baseLayer':'true',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
        

var lyr_Wegen = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Wegen',
    source: new ol.source.Vector(), 
    permalink: "Wegen",
    popuplayertitle: 'Wegen',
    creationdate: '2026-01-13 20:46:38',
    interactive: true,
    style: style_Wegen,
});
function load_Wegen_data() {
    var format_Wegen = new ol.format.GeoJSON();
    var features_Wegen = format_Wegen.readFeatures(json_Wegen, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_Wegen = new ol.source.Vector({
    attributions: '<a class="legend"><b>Wegen</b><br />\
        <img src="styles/legend/Wegen_0.png"/>Fietspad<br />\
        <img src="styles/legend/Wegen_1.png"/>Parkeerstrook<br />\
        <img src="styles/legend/Wegen_2.png"/>Parkeerterrein<br />\
        <img src="styles/legend/Wegen_3.png"/>Parkeervak<br />\
        <img src="styles/legend/Wegen_4.png"/>Rijbaan<br />\
        <img src="styles/legend/Wegen_5.png"/>Verkeersdrempel<br />\
        <img src="styles/legend/Wegen_6.png"/>Voetgangersgebied<br />\
        <img src="styles/legend/Wegen_7.png"/>Voetpad<br /></a>'
        });
    lyr_Wegen.setSource(jsonSource_Wegen);
    lyr_Wegen.set(
    "title", '<div id="layertitle">Wegen<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Fietspad" checked><img src="styles/legend/Wegen_0.png"/>Fietspad<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Parkeerstrook" checked><img src="styles/legend/Wegen_1.png"/>Parkeerstrook<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Parkeerterrein" checked><img src="styles/legend/Wegen_2.png"/>Parkeerterrein<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Parkeervak" checked><img src="styles/legend/Wegen_3.png"/>Parkeervak<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Rijbaan" checked><img src="styles/legend/Wegen_4.png"/>Rijbaan<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Verkeersdrempel" checked><img src="styles/legend/Wegen_5.png"/>Verkeersdrempel<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Voetgangersgebied" checked><img src="styles/legend/Wegen_6.png"/>Voetgangersgebied<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Voetpad" checked><img src="styles/legend/Wegen_7.png"/>Voetpad<br /></a>'
        );
var featureCounter_Wegen = 1;
jsonSource_Wegen.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Wegen++);
    feature.set("layerObject", lyr_Wegen);
});        
jsonSource_Wegen.addFeatures(features_Wegen);
}

var lyr_Gebruiksfunctie = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Gebruiksfunctie',
    source: new ol.source.Vector(), 
    permalink: "Gebruiksfunctie",
    popuplayertitle: 'Gebruiksfunctie',
    creationdate: '2026-01-13 20:46:38',
    interactive: true,
    style: style_Gebruiksfunctie,
});
function load_Gebruiksfunctie_data() {
    var format_Gebruiksfunctie = new ol.format.GeoJSON();
    var features_Gebruiksfunctie = format_Gebruiksfunctie.readFeatures(json_Gebruiksfunctie, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_Gebruiksfunctie = new ol.source.Vector({
    attributions: '<a class="legend"><b>Gebruiksfunctie</b><br />\
        <img src="styles/legend/Gebruiksfunctie_0.png"/>Berm<br />\
        <img src="styles/legend/Gebruiksfunctie_1.png"/>Beek<br />\
        <img src="styles/legend/Gebruiksfunctie_2.png"/>Bibliotheek<br />\
        <img src="styles/legend/Gebruiksfunctie_3.png"/>Bloemrijk gras<br />\
        <img src="styles/legend/Gebruiksfunctie_4.png"/>Blokhaag<br />\
        <img src="styles/legend/Gebruiksfunctie_5.png"/>Bodembedekkers<br />\
        <img src="styles/legend/Gebruiksfunctie_6.png"/>Bosplantsoen<br />\
        <img src="styles/legend/Gebruiksfunctie_7.png"/>Fijne sierheester<br />\
        <img src="styles/legend/Gebruiksfunctie_8.png"/>Gazon<br />\
        <img src="styles/legend/Gebruiksfunctie_9.png"/>Greppel<br />\
        <img src="styles/legend/Gebruiksfunctie_10.png"/>Hondenuitlaatplaats<br />\
        <img src="styles/legend/Gebruiksfunctie_11.png"/>Natuurvriendelijke oever<br />\
        <img src="styles/legend/Gebruiksfunctie_12.png"/>Schoolplein<br />\
        <img src="styles/legend/Gebruiksfunctie_13.png"/>Sloot<br />\
        <img src="styles/legend/Gebruiksfunctie_14.png"/>Sporthal<br />\
        <img src="styles/legend/Gebruiksfunctie_15.png"/>Struikrozen<br />\
        <img src="styles/legend/Gebruiksfunctie_16.png"/>Vijver<br />\
        <img src="styles/legend/Gebruiksfunctie_17.png"/>Waterloop<br /></a>'
        });
    lyr_Gebruiksfunctie.setSource(jsonSource_Gebruiksfunctie);
    lyr_Gebruiksfunctie.set(
    "title", '<div id="layertitle">Gebruiksfunctie<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Berm" checked><img src="styles/legend/Gebruiksfunctie_0.png"/>Berm<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Beek" checked><img src="styles/legend/Gebruiksfunctie_1.png"/>Beek<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Bibliotheek Hoevelaken" checked><img src="styles/legend/Gebruiksfunctie_2.png"/>Bibliotheek<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Bloemrijk gras" checked><img src="styles/legend/Gebruiksfunctie_3.png"/>Bloemrijk gras<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Blokhaag" checked><img src="styles/legend/Gebruiksfunctie_4.png"/>Blokhaag<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Bodembedekkers" checked><img src="styles/legend/Gebruiksfunctie_5.png"/>Bodembedekkers<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Bosplantsoen" checked><img src="styles/legend/Gebruiksfunctie_6.png"/>Bosplantsoen<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Fijne sierheester" checked><img src="styles/legend/Gebruiksfunctie_7.png"/>Fijne sierheester<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Gazon" checked><img src="styles/legend/Gebruiksfunctie_8.png"/>Gazon<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Greppel" checked><img src="styles/legend/Gebruiksfunctie_9.png"/>Greppel<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Hondenuitlaatplaats" checked><img src="styles/legend/Gebruiksfunctie_10.png"/>Hondenuitlaatplaats<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Natuurvriendelijke oever" checked><img src="styles/legend/Gebruiksfunctie_11.png"/>Natuurvriendelijke oever<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="" checked><img src="styles/legend/Gebruiksfunctie_12.png"/>Schoolplein<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Sloot" checked><img src="styles/legend/Gebruiksfunctie_13.png"/>Sloot<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Sporthal Ridderspoor" checked><img src="styles/legend/Gebruiksfunctie_14.png"/>Sporthal<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Struikrozen" checked><img src="styles/legend/Gebruiksfunctie_15.png"/>Struikrozen<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Vijver" checked><img src="styles/legend/Gebruiksfunctie_16.png"/>Vijver<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Waterloop" checked><img src="styles/legend/Gebruiksfunctie_17.png"/>Waterloop<br /></a>'
        );
var featureCounter_Gebruiksfunctie = 1;
jsonSource_Gebruiksfunctie.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Gebruiksfunctie++);
    feature.set("layerObject", lyr_Gebruiksfunctie);
});        
jsonSource_Gebruiksfunctie.addFeatures(features_Gebruiksfunctie);
}

var lyr_Ontwerp = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Ontwerp',
    source: new ol.source.Vector(), 
    permalink: "Ontwerp",
    popuplayertitle: 'Ontwerp',
    creationdate: '2026-01-13 20:46:38',
    interactive: true,
    style: style_Ontwerp,
});
function load_Ontwerp_data() {
    var format_Ontwerp = new ol.format.GeoJSON();
    var features_Ontwerp = format_Ontwerp.readFeatures(json_Ontwerp, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_Ontwerp = new ol.source.Vector({
    attributions: '<a class="legend"><b>Ontwerp</b><br />\
        <img src="styles/legend/Ontwerp_0.png"/>Aanleg fietspad<br />\
        <img src="styles/legend/Ontwerp_1.png"/>Fietsstraat in asfalt<br />\
        <img src="styles/legend/Ontwerp_2.png"/>Fietsstraat in asfalt; middenstrook met afwijkende toplaag<br />\
        <img src="styles/legend/Ontwerp_3.png"/>Instellen schoolzone<br />\
        <img src="styles/legend/Ontwerp_4.png"/>Nieuwe inrichting hofje<br />\
        <img src="styles/legend/Ontwerp_5.png"/>Trottoir verwijderen<br />\
        <img src="styles/legend/Ontwerp_6.png"/>Verwijderen parkeerstrook<br />\
        <img src="styles/legend/Ontwerp_7.png"/>Vervangen verharding<br />\
        <img src="styles/legend/Ontwerp_8.png"/>Geen maatregel / Buiten de scope<br /></a>'
        });
    lyr_Ontwerp.setSource(jsonSource_Ontwerp);
    lyr_Ontwerp.set(
    "title", '<div id="layertitle">Ontwerp<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Aanleg fietspad" checked><img src="styles/legend/Ontwerp_0.png"/>Aanleg fietspad<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Fietsstraat in asfalt" checked><img src="styles/legend/Ontwerp_1.png"/>Fietsstraat in asfalt<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Fietsstraat in asfalt; middenstrook met afwijkende toplaag" checked><img src="styles/legend/Ontwerp_2.png"/>Fietsstraat in asfalt; middenstrook met afwijkende toplaag<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Instellen schoolzone" checked><img src="styles/legend/Ontwerp_3.png"/>Instellen schoolzone<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Nieuwe inrichting hofje" checked><img src="styles/legend/Ontwerp_4.png"/>Nieuwe inrichting hofje<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Trottoir verwijderen" checked><img src="styles/legend/Ontwerp_5.png"/>Trottoir verwijderen<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Verwijderen parkeerstrook" checked><img src="styles/legend/Ontwerp_6.png"/>Verwijderen parkeerstrook<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Vervangen verharding" checked><img src="styles/legend/Ontwerp_7.png"/>Vervangen verharding<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="" checked><img src="styles/legend/Ontwerp_8.png"/>Geen maatregel / Buiten de scope<br /></a>'
        );
var featureCounter_Ontwerp = 1;
jsonSource_Ontwerp.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Ontwerp++);
    feature.set("layerObject", lyr_Ontwerp);
});        
jsonSource_Ontwerp.addFeatures(features_Ontwerp);
}

var lyr_Kansen = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Kansen',
    source: new ol.source.Vector(), 
    permalink: "Kansen",
    popuplayertitle: 'Kansen',
    creationdate: '2026-01-13 20:46:38',
    interactive: true,
    style: style_Kansen,
});
function load_Kansen_data() {
    var format_Kansen = new ol.format.GeoJSON();
    var features_Kansen = format_Kansen.readFeatures(json_Kansen, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_Kansen = new ol.source.Vector({
    attributions: '<a class="legend"><b>Kansen</b><br />\
        <img src="styles/legend/Kansen_0.png"/>Biodiversiteit<br />\
        <img src="styles/legend/Kansen_1.png"/>Verkeer<br />\
        <img src="styles/legend/Kansen_2.png"/>Water<br /></a>'
        });
    lyr_Kansen.setSource(jsonSource_Kansen);
    lyr_Kansen.set(
    "title", '<div id="layertitle">Kansen<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Biodiversiteit" checked><img src="styles/legend/Kansen_0.png"/>Biodiversiteit<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Verkeer" checked><img src="styles/legend/Kansen_1.png"/>Verkeer<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Water" checked><img src="styles/legend/Kansen_2.png"/>Water<br /></a>'
        );
var featureCounter_Kansen = 1;
jsonSource_Kansen.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Kansen++);
    feature.set("layerObject", lyr_Kansen);
});        
jsonSource_Kansen.addFeatures(features_Kansen);
}

var lyr_Gebruiksaanwijzing = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Gebruiksaanwijzing',
    source: new ol.source.Vector(), 
    permalink: "Gebruiksaanwijzing",
    popuplayertitle: 'Gebruiksaanwijzing',
    creationdate: '2026-01-13 20:46:38',
    interactive: true,
    style: style_Gebruiksaanwijzing,
});
function load_Gebruiksaanwijzing_data() {
    var format_Gebruiksaanwijzing = new ol.format.GeoJSON();
    var features_Gebruiksaanwijzing = format_Gebruiksaanwijzing.readFeatures(json_Gebruiksaanwijzing, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_Gebruiksaanwijzing = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Gebruiksaanwijzing.png"/><b>Gebruiksaanwijzing</b>'
    });
    lyr_Gebruiksaanwijzing.setSource(jsonSource_Gebruiksaanwijzing);
    lyr_Gebruiksaanwijzing.set(
    "title", '<img src="styles/legend/Gebruiksaanwijzing.png"/>Gebruiksaanwijzing'
    );
var featureCounter_Gebruiksaanwijzing = 1;
jsonSource_Gebruiksaanwijzing.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Gebruiksaanwijzing++);
    feature.set("layerObject", lyr_Gebruiksaanwijzing);
});        
jsonSource_Gebruiksaanwijzing.addFeatures(features_Gebruiksaanwijzing);
}

var lyr_Animatie = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Animatie',
    source: new ol.source.Vector(), 
    permalink: "Animatie",
    popuplayertitle: 'Animatie',
    creationdate: '2026-01-13 20:46:38',
    interactive: true,
    style: style_Animatie,
});
function load_Animatie_data() {
    var format_Animatie = new ol.format.GeoJSON();
    var features_Animatie = format_Animatie.readFeatures(json_Animatie, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_Animatie = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Animatie.png"/><b>Animatie</b>'
    });
    lyr_Animatie.setSource(jsonSource_Animatie);
    lyr_Animatie.set(
    "title", '<img src="styles/legend/Animatie.png"/>Animatie'
    );
var featureCounter_Animatie = 1;
jsonSource_Animatie.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Animatie++);
    feature.set("layerObject", lyr_Animatie);
});        
jsonSource_Animatie.addFeatures(features_Animatie);
}

// Funzione per caricare e aggiornare i layer uno alla volta
    // Array per i layer visibili/non visibili all'avvio (solo layer vettori e raster)
    var layersVisibleOnStart = [
        {layer: lyr_Wegen, source: 'Wegen'},{layer: lyr_Gebruiksfunctie, source: 'Gebruiksfunctie'},{layer: lyr_Ontwerp, source: 'Ontwerp'},{layer: lyr_Kansen, source: 'Kansen'},{layer: lyr_Gebruiksaanwijzing, source: 'Gebruiksaanwijzing'},{layer: lyr_Animatie, source: 'Animatie'}
    ];
    var layersHiddenOnStart = [
        
    ];
    // Funzione per caricare il JSON source
	function loadJSON(fileName) {
		return new Promise((resolve, reject) => {
			let triedFallback = false; // Flag per controllare se abbiamo già provato il fallback
			function tryLoad(src) {
				//console.log(`Cerco file in: ${src}`);
				const script = document.createElement('script'); // Crea un nuovo script per ogni tentativo
				script.src = src;
				script.onload = () => resolve(fileName); // Risolve la promessa al successo
				script.onerror = () => {
					if (!triedFallback) {
						triedFallback = true; // Segna che abbiamo già provato la seconda opzione
						//console.warn(`File non trovato: ${src}, provo ../layers/${fileName}.js`);
						tryLoad(`../layers/${fileName}.js`); // Secondo tentativo
					} else {
						reject(new Error(`Errore nel caricamento di ${fileName}.js`)); // Rifiuta se anche il secondo fallisce
					}
				};
				document.head.appendChild(script); // Aggiungi il tag <script> al DOM
			}
			tryLoad(`layers/${fileName}.js`); // Primo tentativo
		});
	}
    // Carico i dati nei layer
    async function loadLayers() {
        try {
            // Carica prima i layer visibili all'avvio
            for (const { layer, source } of layersVisibleOnStart) {
                await loadJSON(source);
                // Inietta i dati del layer
                window[`load_${source}_data`]();
            }
            // Carica i layer non visibili all'avvio
            for (const { layer, source } of layersHiddenOnStart) {
                await loadJSON(source);
                // Inietta i dati del layer
                window[`load_${source}_data`]();
            }
            // Quando tutti i layer sono stati caricati e aggiornati, emetti 'layersLoaded'
            window.layersLoadedFlag = true;
            const layersLoaded = new Event('layersLoaded');
            document.dispatchEvent(layersLoaded);
        } catch (error) {
            console.error("Errore nel caricamento dei layer:", error);
            throw error;
        }
    }
    // Esegui il caricamento dei layer una volta che il DOM è pronto
    document.addEventListener("DOMContentLoaded", () => {
        loadLayers();  // Inizia il caricamento dei layer uno per volta
    });


lyr_GoogleSatellietbeeld.setVisible(true);lyr_BasemapCartoDbPositron.setVisible(true);lyr_Wegen.setVisible(true);lyr_Gebruiksfunctie.setVisible(true);lyr_Ontwerp.setVisible(true);lyr_Kansen.setVisible(true);lyr_Gebruiksaanwijzing.setVisible(true);lyr_Animatie.setVisible(true);
var layersList = [lyr_GoogleSatellietbeeld,lyr_BasemapCartoDbPositron,lyr_Wegen,lyr_Gebruiksfunctie,lyr_Ontwerp,lyr_Kansen,lyr_Gebruiksaanwijzing,lyr_Animatie];
lyr_Wegen.set('fieldAliases', {'FID': 'FID', 'id': 'id', 'geovisia_id': 'geovisia_id', 'Weggebruiker': 'Weggebruiker', 'openbare ruimte': 'openbare ruimte', 'Wegfunctie': 'Wegfunctie', 'Wegcategorisering': 'Wegcategorisering', 'Wegtype': 'Wegtype', 'Categorie wegbreedte': 'Categorie wegbreedte', 'Snelheid': 'Snelheid', 'Jaar van aanleg': 'Jaar van aanleg', });
lyr_Gebruiksfunctie.set('fieldAliases', {'id': 'id', 'Onderverdeling': 'Onderverdeling', 'openbareruimte': 'openbareruimte', 'Type': 'Type', 'Gebruiksfunctie': 'Gebruiksfunctie', 'Type watergang': 'Type watergang', });
lyr_Ontwerp.set('fieldAliases', {'FID': 'FID', 'id': 'id', 'geovisia_id': 'geovisia_id', 'imgeo_id': 'imgeo_id', 'openbare ruimte': 'openbare ruimte', 'ambitie': 'ambitie', 'Wegfunctie': 'Wegfunctie', 'Type materiaal': 'Type materiaal', 'Huidig materiaal': 'Huidig materiaal', 'Nieuw materiaal': 'Nieuw materiaal', 'Maatregel': 'Maatregel', 'Maatregel 2': 'Maatregel 2', 'Huidige situatie': 'Huidige situatie', 'Nieuwe situatie': 'Nieuwe situatie', 'field_15': 'field_15', 'field_16': 'field_16', });
lyr_Kansen.set('fieldAliases', {'id': 'id', 'Thema': 'Thema', 'field_4': 'field_4', 'Kans': 'Kans', 'Toelichting': 'Toelichting', 'field_7': 'field_7', 'Beeld': 'Beeld', 'field_9': 'field_9', });
lyr_Gebruiksaanwijzing.set('fieldAliases', {'id': 'id', 'Titel': 'Titel', 'Doel van de kaart': 'Doel van de kaart', 'Basemap': 'Basemap', 'Lagen': 'Lagen', 'Interactieve functies': 'Interactieve functies', 'Disclaimer': 'Disclaimer', 'Rapport': 'Rapport', 'Overig': 'Overig', });
lyr_Animatie.set('fieldAliases', {'id': 'id', 'wegen': 'wegen', 'huizen': 'huizen', 'bomen': 'bomen', 'wijk': 'wijk', 'toelichting': 'toelichting', });
lyr_Wegen.set('fieldImages', {'FID': 'TextEdit', 'id': 'Range', 'geovisia_id': 'TextEdit', 'Weggebruiker': 'TextEdit', 'openbare ruimte': 'TextEdit', 'Wegfunctie': 'TextEdit', 'Wegcategorisering': 'TextEdit', 'Wegtype': 'TextEdit', 'Categorie wegbreedte': 'TextEdit', 'Snelheid': 'TextEdit', 'Jaar van aanleg': 'Range', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Gebruiksfunctie.set('fieldImages', {'id': 'Range', 'Onderverdeling': 'TextEdit', 'openbareruimte': 'TextEdit', 'Type': 'TextEdit', 'Gebruiksfunctie': 'TextEdit', 'Type watergang': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Ontwerp.set('fieldImages', {'FID': 'TextEdit', 'id': 'Range', 'geovisia_id': 'TextEdit', 'imgeo_id': 'TextEdit', 'openbare ruimte': 'TextEdit', 'ambitie': 'TextEdit', 'Wegfunctie': 'TextEdit', 'Type materiaal': 'TextEdit', 'Huidig materiaal': 'TextEdit', 'Nieuw materiaal': 'TextEdit', 'Maatregel': 'TextEdit', 'Maatregel 2': 'TextEdit', 'Huidige situatie': 'TextEdit', 'Nieuwe situatie': 'ExternalResource', 'field_15': 'TextEdit', 'field_16': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Kansen.set('fieldImages', {'id': 'Range', 'Thema': 'TextEdit', 'field_4': 'TextEdit', 'Kans': 'TextEdit', 'Toelichting': 'TextEdit', 'field_7': 'TextEdit', 'Beeld': 'ExternalResource', 'field_9': 'ExternalResource', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Gebruiksaanwijzing.set('fieldImages', {'id': 'CheckBox', 'Titel': 'TextEdit', 'Doel van de kaart': 'TextEdit', 'Basemap': 'TextEdit', 'Lagen': 'TextEdit', 'Interactieve functies': 'TextEdit', 'Disclaimer': 'TextEdit', 'Rapport': 'TextEdit', 'Overig': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Animatie.set('fieldImages', {'id': 'TextEdit', 'wegen': 'ExternalResource', 'huizen': 'ExternalResource', 'bomen': 'ExternalResource', 'wijk': 'ExternalResource', 'toelichting': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Wegen.set('fieldLabels', {'FID': 'no label', 'id': 'no label', 'geovisia_id': 'no label', 'Weggebruiker': 'header label - visible with data', 'openbare ruimte': 'hidden field', 'Wegfunctie': 'header label - visible with data', 'Wegcategorisering': 'header label - visible with data', 'Wegtype': 'header label - visible with data', 'Categorie wegbreedte': 'header label - visible with data', 'Snelheid': 'header label - visible with data', 'Jaar van aanleg': 'header label - visible with data', });
lyr_Gebruiksfunctie.set('fieldLabels', {'id': 'hidden field', 'Onderverdeling': 'header label - visible with data', 'openbareruimte': 'hidden field', 'Type': 'header label - visible with data', 'Gebruiksfunctie': 'header label - visible with data', 'Type watergang': 'header label - visible with data', });
lyr_Ontwerp.set('fieldLabels', {'FID': 'hidden field', 'id': 'hidden field', 'geovisia_id': 'hidden field', 'imgeo_id': 'hidden field', 'openbare ruimte': 'hidden field', 'ambitie': 'hidden field', 'Wegfunctie': 'header label - visible with data', 'Type materiaal': 'header label - visible with data', 'Huidig materiaal': 'header label - visible with data', 'Nieuw materiaal': 'header label - visible with data', 'Maatregel': 'header label - visible with data', 'Maatregel 2': 'no label', 'Huidige situatie': 'header label - visible with data', 'Nieuwe situatie': 'header label - visible with data', 'field_15': 'no label', 'field_16': 'no label', });
lyr_Kansen.set('fieldLabels', {'id': 'hidden field', 'Thema': 'header label - visible with data', 'field_4': 'no label', 'Kans': 'header label - visible with data', 'Toelichting': 'header label - visible with data', 'field_7': 'no label', 'Beeld': 'header label - visible with data', 'field_9': 'no label', });
lyr_Gebruiksaanwijzing.set('fieldLabels', {'id': 'hidden field', 'Titel': 'header label - visible with data', 'Doel van de kaart': 'header label - visible with data', 'Basemap': 'header label - visible with data', 'Lagen': 'header label - visible with data', 'Interactieve functies': 'header label - visible with data', 'Disclaimer': 'header label - visible with data', 'Rapport': 'header label - visible with data', 'Overig': 'header label - visible with data', });
lyr_Animatie.set('fieldLabels', {'id': 'hidden field', 'wegen': 'header label - visible with data', 'huizen': 'header label - visible with data', 'bomen': 'header label - visible with data', 'wijk': 'header label - visible with data', 'toelichting': 'header label - visible with data', });
