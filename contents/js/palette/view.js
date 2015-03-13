var PaletteView = React.createClass({

    getInitialState: function() {
        return {palette: null}
    },

    render: function() {
        
        if (this.state.palette){

            return ( 
                <div className="paletteView" >
                    <h2 className="paletteName">
                        {this.state.palette.title}
                    </h2>
                    {this.state.palette.userName}
                </div>
            )
        }

        else {

            return (
                <h2>Click an item to see details</h2>
            )
        }
  	}
})