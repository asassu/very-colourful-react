var PaletteList = React.createClass({displayName: 'PaletteList',

    getInitialState: function() {
        return {data: []};
    },

    handleListItemClicked: function(id){
        var palette = _.find(this.props.data, {id: id})
        this.refs.paletteView.setState({palette:palette})
    },

    render: function() {

        var self = this

        var palettes = this.props.data.map(function (palette) {
        
          return (    
            <PaletteListItem palette={palette} onListItemClicked={self.handleListItemClicked}/>
            )
        })        

        return (
            <div className="palettePage">
                <div className="paletteList six columns">
                    {palettes}
                </div>
                <div className="paletteView six columns">
                    <PaletteView ref="paletteView"/>
                </div>
            </div>
        )
    }
})
