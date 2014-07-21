/**
 * Adaptive Text Color 1.0.0
 * @author James Podles
 * GPL v2 License
 */
 
 (function($) {
    $.fn.adaptiveColor = function(options) {

        var bgColor = this.css('background-color'); //Grab the background colour of the element

        var settings = $.extend({ //Use black and white unless options are set
            darkText: "#000",
            lightText: "#fff"
        }, options);

        var rgb = bgColor.substring(bgColor.indexOf('(') + 1, bgColor.lastIndexOf(')')).split(/,\s*/), // Calculate the brightness of the element
            red = rgb[0],
            green = rgb[1],
            blue = rgb[2],
            brightness = Math.sqrt((.241 * (red * red)) + (.671 * (green * green)) + (.068 * (blue * blue)));

        if (brightness > 128) { //Set the text colour based on the brightness
            this.css('color', settings.darkText);
        } else {
            this.css('color', settings.lightText);
        }
    };
}(jQuery));
