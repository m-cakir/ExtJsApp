Ext.define('MyApp.store.Menus', {
	
	extend: 'Ext.data.TreeStore',
    
	requires : [
		'MyApp.model.Menu', 
		'Ext.data.reader.Json'
	],
	
	model: 'MyApp.model.Menu',
	
	autoLoad: true,
	
	defaultRootText : 'name',
	
	proxy: {
            type: 'ajax',
            url: '/rest/menus.json',
            reader: {
                type: 'json',
				rootProperty: 'children',
				successProperty: 'success' 
            }
    }
	
});
