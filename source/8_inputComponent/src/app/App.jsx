var React = require("react");
var CreateAccountScreen = require("./CreateAccountScreen");

var App = React.createClass({
    render: function(){
        return (
            <div className="application_wrapper">
                <div className="application_routeHandler">
                    <CreateAccountScreen/>
                </div>
            </div>);
    }
});

module.exports = App;

