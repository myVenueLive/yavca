PlayersList = new Mongo.Collection('players');

if(Meteor.isClient) {

	Template.frontpage.helpers({
		'player': function() {
			return PlayersList.find().fetch();
		}
	});

	Template.frontpage.events({
	    'click #button-login': function(){
        	alert('click login');
    	},
	    'click #button-register': function(){
        	alert('click register');
    	}
	});

}