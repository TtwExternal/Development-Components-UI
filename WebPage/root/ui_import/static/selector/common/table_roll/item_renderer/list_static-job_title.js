//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui_import/static/selector/common/table_roll/item_renderer/list_static-job_title.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function( url ){

	var _this = arguments[ 1 ][ 1 ];

	/**
	 * @function
	 * @param {Array} data
	 */
	var f = function( data ){
		window.TtwLog.timeStamp( "-- [ S ] - ./ui_import/static/selector/common/table_roll/item_renderer/list_static-job_title():void----------" );

		//console.log( data );

		var el = _this._el_ListContainer;

		window.b2link.html_tbody.apply_child__ReUseKeyList( el, data );

		//window.b2link.element.injectValueForListItems( el, data );
		window.b2link.element.injectValueForListItemsAndID( el, data );

		_this.dispatch_TABLE_DATA_CHANGED();

		window.TtwLog.timeStamp( "-- [ E ] - ./ui_import/static/selector/common/table_roll/item_renderer/list_static-job_title():void----------" );
	};

	_this._setData__ListItems = null;
	//_this._setData__ListItems = f;//override;

	return f;
});