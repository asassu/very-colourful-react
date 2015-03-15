var ColourList = React.createClass({displayName: 'ColourList',

    getInitialState: function() {
        return {data: []};
    },

    handleListItemClicked: function(id){
        var colour = _.find(this.props.data, {id: id})
        this.refs.colourView.setState({colour:colour})
    },

    render: function() {

        var self = this

        var colours = this.props.data.map(function (colour) {
        
          return (    
            <ColourListItem colour={colour} onListItemClicked={self.handleListItemClicked}/>
            )
        })        

        return (
            <div className="colourPage">
                <div className="colourList five columns">
                    {colours}
                </div>
                <div className="colourView seven columns">
                    <ColourView ref="colourView"/>
                </div>
            </div>
        )
    }
})
