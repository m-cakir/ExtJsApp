Ext.define('MyApp.view.viewport.Header', {
    
	extend: 'Ext.panel.Panel',
	
	xtype: 'app-header',
	
	title: 'My App',
	
	header: {
		
		titlePosition: 0,
		
		items: [ 
			{
				xtype: 'button',
				
				text: 'Exit',   
				
				handler: function() {
					
					Ext.Msg.alert('Clicked button');
					
				}
			}
		]
    }

});