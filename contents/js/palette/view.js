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
                    <h4>Created by {this.state.palette.userName}</h4>

                    {this.state.palette.colors.map(function(myColor) {
                      return <div className="colorBox" style={{"backgroundColor": "#" + myColor}}>#{myColor}</div>
                    })}

                    <ul>
                        <li>Total Views: {this.state.palette.numViews}</li>
                        <li>Total Votes: {this.state.palette.numVotes}</li>
                        <li>Rank: {this.state.palette.rank}</li>
                    </ul>

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