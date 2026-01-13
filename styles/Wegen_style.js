var clusterSize = 0;
function categories_Wegen(feature, value, clusterSize, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       textPlacement) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'Fietspad':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(229,71,73,1.0)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Parkeerstrook':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(150,150,150,1.0)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Parkeerterrein':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(150,150,150,1.0)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Parkeervak':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(150,150,150,1.0)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Rijbaan':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(230,230,230,1.0)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Verkeersdrempel':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(230,230,230,1.0)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Voetgangersgebied':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(106,106,106,1.0)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Voetpad':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(106,106,106,1.0)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;
    }};
    
var style_Wegen = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = "";
    var labelFont = "10px, sans-serif";
    var labelFill = '';
    var bufferColor = '';
    var bufferWidth = 0;
    var textAlign = "left";
    var textPlacement = 'point';
    var offsetX = 8;
    var offsetY = 3; 
    var value = feature.get("Wegfunctie") || "";
    if ("" !== null) {
        labelText = String("");
    }
    //not draw features with symbology off
    if (symbologySwitcher(lyr_Wegen, value) === null) {
        return null;
    }
        
    var style = categories_Wegen(feature, value, clusterSize, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, textPlacement);
    return style;
};
    