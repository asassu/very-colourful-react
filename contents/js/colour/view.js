var ColourView = React.createClass({

    getInitialState: function() {
        return {colour: null}
    },

    render: function() {
        
        if (this.state.colour){

            return ( 
                <div className="colourView" >
                    <h2 className="colourName">
                        {this.state.colour.title}
                    </h2>
                    {this.state.colour.hex}


                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})