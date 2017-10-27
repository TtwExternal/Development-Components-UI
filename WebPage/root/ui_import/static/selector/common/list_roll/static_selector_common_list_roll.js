//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui_import/static/selector/common/list_roll/static_selector_common_list_roll.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function( url, $el_ul ){

	//Extends;
	var _this = window.b2linkUIClass.selector.ListRoll( url, $el_ul );

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
		var s = d.nm_db + "-" + d.nm_col;
		$el_ul.innerHTML = window.b2link.xhr.reqSync_String( "./ui_include/li/selector_list_roll-" + s + ".html" );

		//override;
		_this._setData__ListItems = window.b2link.util.importJS( "./ui_import/static/selector/common/list_roll/item_renderer/" + s + ".js", _this );

		_this.setData.super({
			//b2linkUIClass.selector.ListRoll;
			//idStart : -1, idEnd : 20, limit : 40, limitTerm : 2, maxCount : null
			idStart : -1, idEnd : 40, limit : 40, limitTerm : 2, maxCount : null

			, fn : {
				//b2linkUIClass.baseList.NextPrevRoll;
				req_getCount : function( cbFunction ){
					var nm_db = d.nm_db;
					var nm_col = d.nm_col;
					var p = { nm_db : nm_db, nm_col : nm_col, cbFunction : cbFunction };
					window.b2link_service.selector.getCount( p );
				}

				, req_getList_Range__id : function( id_gt, id_lt, cbFunction ){
					var nm_db = d.nm_db;
					var nm_col = d.nm_col;
					var p = {
						nm_db : nm_db, nm_col : nm_col
						, id_gt : id_gt, id_lt : id_lt
						, cbFunction : cbFunction
					};
					window.b2link_service.selector.getSelectorList_Range( p );
				}

				//b2linkUIClass.baseList.NextPrevRoll;
				//b2linkUIClass.selector.ListRoll;
				, cb_mClick : d.fn.cb_mClick

				, cb_mDoubleClick : d.fn.cb_mDoubleClick

				, getListItem : window.b2link.el_ul.getLIFromMouseClickEventTarget
			}
			//*/
		});
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