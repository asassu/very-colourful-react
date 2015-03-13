var ColourList = React.createClass({displayName: 'ColourList',

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
        var colour = _.find(this.state.data, {id: id})
        this.refs.colourView.setState({colour:colour})
    },

    render: function() {

        var self = this

        var colours = this.state.data.map(function (colour) {
        
          return (    
            <ColourListItem colour={colour} onListItemClicked={self.handleListItemClicked}/>
            )
        })        

        return (
            <div className="colourPage">
                <div className="colourList six columns">
                    {colours}
                </div>
                <div className="colourView six columns">
                    <ColourView ref="colourView"/>
                </div>
            </div>
        )
    }
})
