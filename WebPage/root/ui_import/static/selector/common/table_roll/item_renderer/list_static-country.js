//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui_import/static/selector/common/table_roll/item_renderer/list_static-country.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function( url ){

	var _this = arguments[ 1 ][ 1 ];

	/**
	 * @function
	 * @param {Array} data
	 */

	var f = function( data )
	{
		window.TtwLog.timeStamp( "-- [ S ] - ./ui_import/static/selector/common/table_roll/item_renderer/list_static-country()():void----------" );

		//console.log( data );

		var el = _this._el_ListContainer;

		if( 1 == el.children.length )
		{
			window.b2link.html_tbody.apply_child__ReUseKeyList( el, data );
			//window.b2link.element.injectValueForListItems( el, data );
			window.b2link.element.injectValueForListItemsAndID( el, data );
		}
		else
		{
			/*/
			window.b2link.el_tbody.change_child_htmlOption( el, data
				, 0
				, '<img src="' + window.b2link.STATIC.CONFIG.URL.IMG.BASE + 'flag_country/cd_us3/{{cd_us3}}.png"/>'
			);
			/*/
			var f0 = window.b2link.element.hide;
			var f1 = window.b2link.element.show;
			var f2 = window.b2link.element.injectValueForListItemAndIDX;

			var a0 = el.children;//trs;
			var io;//tr;
			var i=0, iLen=a0.length;
			for( ; i<iLen; ++i )
			{
				io = a0[ i ]//tr;
				var a1 = io.children;//tds;
				var keys = el.__list_reuse_key;
				var td = a1[ 1 ];
				var img = td.children[ 0 ];
				var j=0, jLen=a1.length;
				var dio = data[ i ];
				if( dio )
				{
					f2( io, dio, i );//dio.$idx = i; io.list_item_value = dio;

					//tds;
					for( ; j<jLen; ++j ) a1[ j ].innerText = dio[ keys[ j ] ];
					td.innerText = "";

					var key = keys[ 1 ];
					img.src = f._s0.replace( "{{" + key + "}}", dio[ key ] );
					f1( img );
				}
				else
				{
					io.list_item_value = null;

					//tds;
					for( ; j<jLen; ++j ) a1[ j ].innerText = "";
					td.innerText = "";

					f0( img );
				}
				td.appendChild( img );
			}
			//*/

			_this.dispatch_TABLE_DATA_CHANGED();
		}

		window.TtwLog.timeStamp( "-- [ E ] - ./ui_import/static/selector/common/table_roll/item_renderer/list_static-country():void----------" );
	};
	f._s0 = window.b2link.STATIC.CONFIG.URL.IMG.BASE + "flag_country/cd_us3/{{cd_us3}}.png";
	//f._s1;
	_this._setData__ListItems = null;
	//_this._setData__ListItems = _setData__ListItems;//override;

	return f;
});