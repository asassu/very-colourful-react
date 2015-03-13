var ColourListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.colour)
        this.props.onListItemClicked(this.props.colour.id)
    },

    render: function() {

        var colour = this.props.colour

        return ( 
            <div className="colour row" >
                <div className="colourName six columns" onClick={this.handleClick}>
                    {colour.title}                    
                </div>
                <div className="colourCity six columns">
                    {colour.hex}   
                </div>
            </div>
        )
  }
})