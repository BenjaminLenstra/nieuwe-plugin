var clusterSize = 0;
function categories_Kansen(feature, value, clusterSize, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       textPlacement) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'Biodiversiteit':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + clusterSize,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(61,128,53,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4.56}), fill: new ol.style.Fill({color: 'rgba(208,255,203,1.0)'})}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Verkeer':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + clusterSize,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(237,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4.56}), fill: new ol.style.Fill({color: 'rgba(255,254,0,1.0)'})}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case 'Water':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + clusterSize,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,136,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4.56}), fill: new ol.style.Fill({color: 'rgba(153,208,255,1.0)'})}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;
    }};
    
var style_Kansen = function(feature, resolution){
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
    var value = feature.get("Thema") || "";
    if ("" !== null) {
        labelText = String("");
    }
    //not draw features with symbology off
    if (symbologySwitcher(lyr_Kansen, value) === null) {
        return null;
    }
        
    var style = categories_Kansen(feature, value, clusterSize, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, textPlacement);
    return style;
};
    