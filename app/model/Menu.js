Ext.define('MyApp.model.Menu', {
	
    extend: 'Ext.data.Model',
	
    fields: [
	
		'id',
        { 
			name: 'name',
			type: 'string'
		},
		{
            name: 'leaf',
            type: 'bool'
		}
    ]
});