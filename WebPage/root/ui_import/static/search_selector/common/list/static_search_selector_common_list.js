//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui_import/static/search_selector/common/list/static_search_selector_common_list.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function( url, $el_ul ){

	//Extends;
	var _this = window.b2linkUIClass.selector.List( url, $el_ul );

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @property {Object}
	 */
	var _info_db = { db : null, col : null };

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

			url = "./ui_locale/static/selector/list/" + _setData._nm_db + "/" + _setData._nm_col + "/{{locale}}.json";
			window.b2link.ui_resource.applyParentheses_LocaleLabel_Children__localeToCountryCode( url, $el_ul );

			d = d ? d : {};
			_info_db.db = d.nm_db = _setData._nm_db;
			_info_db.col = d.nm_col = _setData._nm_col;
			d.fn = d.fn ? d.fn : {};

			_this.setData.super({
				fn : {
					cb_mClick : d.fn.cb_mClick

					, cb_mDoubleClick : d.fn.cb_mDoubleClick

					//, req_Data : d.fn.req_Data
					//, req_Data : window.b2link_service.staticSelectorList[ "getSelectorList_" + d.nm_coll ]
					, req_Data : function( cbFunction, arguments ){
						var nm_db = d.nm_db;
						var nm_col = d.nm_col;
						var p = {
							nm_db : nm_db, nm_col : nm_col
							, data : arguments[ 0 ]
							, skip : arguments[ 1 ]
							, limit : arguments[ 2 ]
							//*/
							, cbFunction : cbFunction
							/*/
							, cbFunction : function( result ){
								var f0 = window.b2link_service.common_storage.get;
								var k = "";

								var a = result;
								var i=0, iLen=a.length;

								if( iLen )
								{
									k = "_id$member_public";
									if( a[ 0 ].hasOwnProperty( k ) )
										for( i=0; i<iLen; ++i )
											a[ i ].nm$member_public = f0( k, a[ i ][ k ] ).nm.a;
								}

								cbFunction( result );
							}
							//*/
						};
						window.b2link_service.search_selector.getSelectorList( p );
					}

					, getListItem : window.b2link.el_ul.getLIFromMouseClickEventTarget
				}
			});

			_this._bInitialized = true;
		}
		else
		{
			d = d ? d : {};
			_info_db.db = d.nm_db = _setData._nm_db;
			_info_db.col = d.nm_col = _setData._nm_col;
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


	//--------------------------------------------------;
	//이 객체가 상속받은 부모 객체에서 click, dbclick, keyup , ...의 EventListener를 정의하였다.
	//아래 구문은 그 EventListener에서 구동 시킬 callback function 형태로 등록 하는 구문이다.
	//Element에 class=""로 정의된 문자열을 Key값으로 CallBack 함수를 등록하는 함수;
	//var f0 = _this.addEventCallBackFunction__ClassName;

	//Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수;
	//var f1 = _this.addEventCallBackFunction__EventType;
	//--------------------------------------------------;


	//--------------------------------------------------this;
	var _ = _this;

		_.setData = _setData;
	//--------------------------------------------------this;
	return _;
});