Ext.define('MyApp.view.viewport.Container', {
    
	extend: 'Ext.tab.Panel',
	
	xtype: 'app-container',
	
	defaults : {
		
		closable : true
		
	},
	
	items : [
		{
			id : 'container_tab_0',
			title: 'Welcome',
			html : 'Hey, how you doin\''
		}
	]

});