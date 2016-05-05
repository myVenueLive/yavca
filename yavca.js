PlayersList = new Mongo.Collection('players');

if(Meteor.isClient) {

	Template.frontpageLogedin.helpers({

	});

	Template.frontpageLogedin.helpers({
		'player': function() {
			return PlayersList.find().fetch();
		},
		'myemail': function() {
			var currentUserId = Meteor.userId();
			var currentUserObj = Meteor.users.findOne({_id:currentUserId});
			return currentUserObj.emails[0].address;
		}
	});

	Template.frontpageAnonymous.events({
	    'click #button-login': function(){
        	alert('click login');
    	},
	    'click #button-register': function(){
        	alert('click register');
    	}
	});

	Template._loginButtonsLoggedInDropdown.events({
	    'click #login-buttons-edit-profile': function(event) {
	        Router.go('profileEdit');
	    }
	});

}