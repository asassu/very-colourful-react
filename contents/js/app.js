$( "#colours" ).on( "click", function( event ) {
    React.render(
        <ColourList url='data/colours.json.data'/>,
        document.getElementById('content')
    )
})

$( "#palettes" ).on( "click", function( event ) {
    React.render(
        <PaletteList url='data/palettes.json.data'/>,
        document.getElementById('content')
    )
})

