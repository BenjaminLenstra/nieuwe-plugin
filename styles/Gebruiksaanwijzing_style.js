var clusterSize = 0;
    
var style_Gebruiksaanwijzing = function(feature, resolution){
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
    var value = feature.get("") || "";
    if ("" !== null) {
        labelText = String("");
    }
        var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.04655172413793104,
                  anchor: [580.0, 290.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/amenity_information.svg"
            }),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
    return style;
};
    