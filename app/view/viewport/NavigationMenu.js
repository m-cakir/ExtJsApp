Ext.define('MyApp.view.viewport.NavigationMenu', {
    
	extend: 'Ext.tree.Panel',
	
    xtype : 'app-navigation-menu',
    
	requires : [
		'MyApp.store.Menus'
	],
	
	title : 'Menu',
	
    store: 'MyApp.store.Menus',
	
	width: 300,
	
	collapsible: true,
	
	split: true,
	
	rootVisible: false,
	
	displayField: 'name',
	
	tools:[
		{
			type : 'expand',
			tooltip: 'Expand All',
			// hidden:true,
			callback: function(panel, tool, event) {
				
				panel.expandAll();
				
			}
		},
		{
			type:'collapse',
			tooltip: 'Collapse All',
			callback: function(panel, tool, event) {
				
				panel.collapseAll();
			}
		}	
	]
	
});