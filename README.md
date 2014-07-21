
#jQuery Adaptive Text Color

=============

##Purpose
This plugin solves the issue of setting the text color of an element in CSS when you don't know what the background colour of the element will be (e.g. a dynamically generated colour). It's based on  Darel Rex Finley's [algorithm](http://alienryderflex.com/hsp.html) for determining the brightness of a given colour.


###[Plugin Demo](http://codepen.io/jpod/pen/Aytcr)


##Usage
Include jQuery and the Adaptive Text plugin. Apply the adaptiveColor method to any element you want to affect:

```sh
$('header').adaptiveColor();

```

You can also add an 'adaptive-color' class to all the elements you want to affect, then look through them:

```sh
<div class="adaptive-color">First Div</div>
<div class="adaptive-color">Second Div</div>
<div class="adaptive-color">Third Div</div>

<script>
$('.adaptive-color').each(function(){
   $(this).adaptiveColor();
});  
</script>
```

##Options
This plugin accepts two options: darkText and lightText. These allow you to specify the text colours that the plugin uses for "dark" and "light."

```sh
$('header').adaptiveColor({
    darkText:'#444',
    lightText:'#ddd'
});
```

The default settings are #000 and #fff.

