//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui_import/static/selector/common/list/static_selector_common_list.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function( url, $el_ul ){

	//Extends;
	var _this = window.b2linkUIClass.selector.List( url, $el_ul );

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"nm_db" : ""
	 *	, "nm_col" : ""
	 *	, "fn" : {
	 *		"cb_mClick" : function( e ){}
	 *		, "cb_mDoubleClick" : function( e ){}
	 *		//, "req_Data" : function(){}
	 *		//, "getListItem : function(){}
	 *	}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		if( "function" == typeof( d ) )
			d = { fn : { cb_mClick : arguments[ 0 ], cb_mDoubleClick : arguments[ 1 ] } };

		if( !_this._bInitialized )
		{
			if( !_setData._nm_db ) _setData._nm_db = d.nm_db;
			if( !_setData._nm_col ) _setData._nm_col = d.nm_col;

			var url = "./ui_include/li/selector_list-" + _setData._nm_db + "-" + _setData._nm_col + ".html";
			$el_ul.innerHTML = window.b2link.xhr.reqSync_String( url );

			d = d ? d : {};
			d.nm_db = _setData._nm_db;
			d.nm_col = _setData._nm_col;
			d.fn = d.fn ? d.fn : {};

			_this.setData.super({
				fn : {
					cb_mClick : d.fn.cb_mClick

					, cb_mDoubleClick : d.fn.cb_mDoubleClick

					//, req_Data : d.fn.req_Data
					//, req_Data : window.b2link_service.staticSelectorList[ "getSelectorList_" + d.nm_coll ]
					, req_Data : function( cbFunction ){
						var nm_db = d.nm_db;
						var nm_col = d.nm_col;
						var p = { nm_db : nm_db, nm_col : nm_col, cbFunction : cbFunction };
						window.b2link_service.selector.getSelectorList( p );
					}

					, getListItem : window.b2link.el_ul.getLIFromMouseClickEventTarget
				}
			});

			_this._bInitialized = true;
		}
		else
		{
			d = d ? d : {};
			d.nm_db = _setData._nm_db;
			d.nm_col = _setData._nm_col;
			d.fn = d.fn ? d.fn : {};

			_this.setData.super( d );
		}
	};
	_setData.super = _this.setData;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------this;
	var _ = _this;

		_.setData = _setData;
	//--------------------------------------------------this;
	return _;
});