/**
 * @function
 * @return {Object} window.d3
 *
 * @example
 * <code>
	var d3 = window.b2link.util.importJS( "./libs/d3/v4/import-js.js" );
 * </code>
 */
(function(){
	window.TtwLog.log( "- [ S ] - Import D3 " );
	window.TtwLog.log( "- [ E ] - Import D3 " );

	// return window.b2link.util.importJS__Reuse( "./libs/d3/v4/4.8.0/d3.js" );
	return window.b2link.util.importJS__Reuse( "./libs/d3/v4/4.8.0/d3.min.js" );
});