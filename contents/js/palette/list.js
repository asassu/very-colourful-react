var PaletteList = React.createClass({displayName: 'PaletteList',

    getInitialState: function() {
        return {data: []};
    },
  
    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({
                    data: data
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleListItemClicked: function(id){
        var palette = _.find(this.state.data, {id: id})
        this.refs.paletteView.setState({palette:palette})
    },

    render: function() {

        var self = this

        var palettes = this.state.data.map(function (palette) {
        
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
