Ext.define('MyApp.controller.NavigationMenu', {
	
	extend : 'Ext.app.Controller',
            
	stores : [
		'MyApp.store.Menus'
	],
            
	models : [
	
	],
            
    views : [
		'MyApp.view.viewport.NavigationMenu'
	],
	
	refs: [
		{
			ref: 'myAppContainer', 
			selector: 'app-container'
		}
	],  
           
	init : function() {
		
		this.control({
					
			'app-navigation-menu' : {
				
				itemclick : this.treeItemClick  
				
			}
			
		});
	},
           
	treeItemClick : function(view, record) {
		
		var container = this.getMyAppContainer();
		
		var clickedItemId = record.get('id');
		var itemId = 'container_tab_' + clickedItemId;
		var items = container.items.items;
		
		var tabExist = false;
		for(var i = 0; i < items.length; i++){
			if(items[i].id === itemId){
                tabExist = true;
                container.setActiveTab(i);
            }
		}
		
		if(record.get('leaf') && !tabExist){
			
			var tab = container.add({
				id : itemId,
				title: record.get('name'),
			//	tooltip: 'Tab tooltip',
				html : 'Node Id: ' + clickedItemId + ' \n Parent Node Id: ' + record.get('parentId') + ' \n Childrens length: ' + record.childNodes.length
			});
			
			container.setActiveTab(tab);
		}
        
	}
    
});