Ext.namespace('Zarafa.plugins.goosfraba');

/**
 * @class Zarafa.plugins.goosfraba.GoosfrabaPlugin
 * @extends Zarafa.core.ThemePlugin
 *
 */

Zarafa.plugins.goosfraba.GoosfrabaPlugin  = Ext.extend(Zarafa.core.Plugin, {

    initPlugin : function() {

    this.registerInsertionPoint('main.maintabbar.right', this.createToolBarButtonExplosion, this);

    },

    /**
     * Creates a button in the main toolbar to create/open the spreed plugin
     *
     * @return {Object} Object with the spreed button definition
     * @private
     */
    createToolBarButtonExplosion: function () {

     	return {
	        newMenuIndex: 10,
	        xtype: 'button',
	        scale: 'large',
		text: 'Kaboom',
	        listeners: {
	        	click: this.createwindow 

	           },
	        tooltip: _("Kabooom"),
	        iconCls: 'icon_kaboom',
			tabOrderIndex: 4,
			cls: 'kaboom',
	        scope: this
        };
     },

   /** 
    * Function to open a new ext.window
    */
    createwindow : function() {   
	 
	 win = new Ext.Window({
                layout:'fit',
                width:1366,
                height:786,
                closeAction:'close',
                plain: true,
		html: '<iframe src="http://www.soulstice.org/" width="100%" height="100%" ></iframe>',
		})
		
		win.show(this);         
	}

});


Zarafa.onReady(function() {
	container.registerPlugin(new Zarafa.core.PluginMetaData({
		name : 'goosfraba',
		displayName : _("Goosfraba Anger Management"),
		allowUserDisable : true,
		allowUserVisible : true,
		pluginConstructor : Zarafa.plugins.goosfraba.GoosfrabaPlugin
	}));
});
