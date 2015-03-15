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
                    <h4>#{this.state.colour.hex} chosen by {this.state.colour.userName}</h4>

                    <div className="colorBox" style={{"backgroundColor": "#" + this.state.colour.hex}}></div>

                    <ul>
                        <li>Total Views: {this.state.colour.numViews}</li>
                        <li>Total Votes: {this.state.colour.numVotes}</li>
                        <li>Rank: {this.state.colour.rank}</li>
                    </ul>

                    <p>{this.state.colour.description}</p>

                </div>
            )


        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})