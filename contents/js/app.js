$( "#colours" ).on( "click", function( event ) {
    $.getJSON("http://www.colourlovers.com/api/colors/top?jsonCallback=?",
      { numResults: 10 },
      function(allColours) {
        React.render(
            <ColourList data={allColours}/>,
            document.getElementById('content')
        )
      }
    );
})

$( "#palettes" ).on( "click", function( event ) {
    $.getJSON("http://www.colourlovers.com/api/palettes/top?jsonCallback=?",
      { numResults: 10 },
      function(allPalettes) {
        React.render(
            <ColourList data={allPalettes}/>,
            document.getElementById('content')
        )
      }
    );
})

