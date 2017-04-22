var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    // alexa.appId = 'amzn1.echo-sdk-ams.app.1234';

    ///alexa.dynamoDBTableName = 'YourTableName'; // creates new table for session.attributes

    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('DaysTillIntent');
    },

    'DaysTillIntent': function () {
        var str = daysTillInfinityWar()
        this.emit(':tell', 'There are ' + str + ' days till Infinty War' );
    },

    'AMAZON.HelpIntent': function() {
      this.emit(':ask', 'Try asking how many days are left')
    },

    'AMAZON.StopIntent': function() {
        this.emit(':tell', 'Avengers Assemble');
    }
};

function daysTillInfinityWar(){
    var sec = new Date(2018, 5, 4).valueOf() - Date.now()
    var days = sec / 1000 / 60 / 60 /24
    return String(Number(days.toFixed(0)))
}
