//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui_import/static/selector/common/list_roll/item_renderer/list_static-country.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function( url ){

	var _this = arguments[ 1 ][ 1 ];

	/**
	 * @function
	 * @param {Array} data
	 */
	var f = function( data ){
		window.TtwLog.timeStamp( "-- [ S ] - ./ui_import/static/selector/common/list_roll/item_renderer/list_static-country():void----------" );

		//console.log( data );

		var el = _this._el_ListContainer;

		if( 1 == el.children.length )
		{
			window.b2link.html_ul.apply_child__ReUseKeyList( el, data );
			//window.b2link.element.injectValueForListItems( el, data );
			window.b2link.element.injectValueForListItemsAndID( el, data );
		}
		else
		{
			/*/
			window.b2link.el_ul.change_child_htmlOption( el, data
				, "cd_us3"
				, '<img src="' + window.b2link.STATIC.CONFIG.URL.IMG.BASE + 'flag_country/cd_us3/{{cd_us3}}.png"/>'
			);
			/*/
			var f0 = window.b2link.element.hide;
			var f1 = window.b2link.element.show;
			var f2 = window.b2link.element.injectValueForListItemAndIDX;

			var a0 = el.children;//lis;
			var io;//li;
			var i=0, iLen=a0.length;
			for( ; i<iLen; ++i )
			{
				io = a0[ i ]//li;

				var img = io.children[ 0 ];//IMG Element;
				var span = io.children[ 1 ];//SPAN Element;

				var dio = data[ i ];
				if( dio )
				{
					f2( io, dio, i );//dio.$idx = i; io.list_item_value = dio;

					var key = "cd_us3";
					f1( img );
					img.src = f._s0.replace( "{{" + key + "}}", dio[ key ] );

					var s = f._s1;
					for( var p in dio ) s = s.replace( "{{" + p + "}}", dio[ p ] );
					span.innerText = s;
				}
				else
				{
					io.list_item_value = null;

					span.innerText = "";
					f0( img );
				}
			}
			//*/

			_this.dispatch_LIST_DATA_CHANGED();
		}

		window.TtwLog.timeStamp( "-- [ E ] - ./ui_import/static/selector/common/list_roll/item_renderer/list_static-country():void----------" );
	};
	f._s0 = window.b2link.STATIC.CONFIG.URL.IMG.BASE + "flag_country/cd_us3/{{cd_us3}}.png";
	f._s1 = "{{cd_n}} {{cd_us2}} {{cd_us3}} {{nm_kr}} {{nm_us}} {{nm_cn}}";

	_this._setData__ListItems = null;
	//_this._setData__ListItems = f;//override;

	return f;
});