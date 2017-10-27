//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui_import/static/selector/common/table/static_selector_common_table.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
/**
 * @class
 * @param {String} url js file url
 * @param {HTMLTableElement} $el_table 이 Controller 객체에서 조작할 HTMLElement
 */
(function( url, $el_table ){

	//Extends;
	var _this = window.b2linkUIClass.selector.Table( url, $el_table );

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
		var f = window.b2link.xhr.reqSync_String;
		var url = "./ui_include/tr-th/selector_table-" + d.nm_db + "-" + d.nm_col + ".html";
		$el_table.tHead.innerHTML = f( url );
		var url = "./ui_include/tr-td/selector_table-" + d.nm_db + "-" + d.nm_col + ".html";
		$el_table.tBodies[ 0 ].innerHTML = f( url );

		try
		{
			var url = "./ui_locale/static/selector/table/" + d.nm_db + "/" + d.nm_col + "/{{locale}}.json";
			window.b2link.ui_resource.applyParentheses_LocaleLabel_Children__localeToCountryCode( url, $el_table.tHead );
		}
		catch( er )
		{
			global.TtwLog.error( "Error Position : window.b2link.ui_resource.applyParentheses_LocaleLabel_Children__localeToCountryCode( url, $el_table.tHead );" );
			global.TtwLog.error( "_setData Error : " + er );
		}

		_this.setData.super({
			fn : {
				cb_mClick : d.fn.cb_mClick

				, cb_mDoubleClick : d.fn.cb_mDoubleClick

				//, req_Data : d.fn.req_Data
				//, req_Data : window.b2link_service.staticSelectorList[ "getSelectorList_" + d.nm_col ]
				, req_Data : function( cbFunction ){
					var nm_db = d.nm_db;
					var nm_col = d.nm_col;
					var p = { nm_db : nm_db, nm_col : nm_col, cbFunction : cbFunction };
					window.b2link_service.selector.getSelectorList( p );
				}

				, getListItem : window.b2link.el_tbody.getTRFromMouseClickEventTarget
			}
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