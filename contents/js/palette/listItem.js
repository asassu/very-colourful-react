var PaletteListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.palette)
        this.props.onListItemClicked(this.props.palette.id)
    },

    render: function() {
    
        var palette = this.props.palette

        return ( 
            <div className="palette row" >
                <div className="listOfNames twelve columns" onClick={this.handleClick}>
                    {palette.title}                    
                </div>
           </div>
        )
    }
})
