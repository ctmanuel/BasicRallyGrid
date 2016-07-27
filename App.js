Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',

    //launch called by rally framework
    launch: function() {
    	console.log('Our First App woot!!');
    	this._loadData();
    },

    //Get Data From Rally
    _loadData: function() {
	    Ext.create('Rally.data.wsapi.Store', {
	    	model: 'User Story', 
	    	autoLoad: true,			//this is important to set for stores
	    	listeners: {
	        	load: function(myStore, myData, success) {
	            	console.log('got data!', myStore, myData, success);
	            	this._loadGrid(myStore);
	        	},
	        	scope: this
	    	},	
	    	fetch: ['FormattedID', 'Name', 'ScheduleState']  //these values are defined in WSAPI Docs
		});
    },

    //Create and show Grid of Given stories
    _loadGrid: function(myStoryStore) {
    	var myGrid = Ext.create('Rally.ui.grid.Grid', {
    		store: myStoryStore,
    		columnCfgs: [
    			'FormattedID', 'Name', 'ScheduleState'		//these need to match the fetch names
    		]
    	});

    	this.add(myGrid);
    	console.log('what is this', this);
    }

});
