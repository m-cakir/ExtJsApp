Ext.define('MyApp.view.Viewport', {
    
	extend: 'Ext.container.Viewport',
    
	requires: [
        'Ext.layout.container.Border',
		'MyApp.view.viewport.Header',
		'MyApp.view.viewport.NavigationMenu',
		'MyApp.view.viewport.Container'
    ],

    layout: 'border',

    items: [
        {
            region: 'north',
            xtype: 'app-header'
        },
        {
            region: 'west',
            xtype: 'app-navigation-menu'
        },
        {
            region: 'center',
            xtype: 'app-container'
        }
    ]

});