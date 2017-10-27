//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui_import/static/selector/common/list_roll/item_renderer/category-category_division_part_SSD_ST.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function( url ){

	var _this = arguments[ 1 ][ 1 ];

	/**
	 * @function
	 * @param {Array} data
	 */
	var f = function( data ){
		window.TtwLog.timeStamp( "-- [ S ] - ./ui_import/static/selector/common/list_roll/item_renderer/category-category_division_part_SSD_ST():void----------" );

		//console.log( data );

		var el = _this._el_ListContainer;

		window.b2link.html_ul.apply_child__ReUseKeyList( el, data );

		//window.b2link.element.injectValueForListItems( el, data );
		window.b2link.element.injectValueForListItemsAndID( el, data );

		_this.dispatch_LIST_DATA_CHANGED();

		window.TtwLog.timeStamp( "-- [ E ] - ./ui_import/static/selector/common/list_roll/item_renderer/category-category_division_part_SSD_ST():void----------" );
	};

	_this._setData__ListItems = null;
	//_this._setData__ListItems = f;//override;

	return f;
});