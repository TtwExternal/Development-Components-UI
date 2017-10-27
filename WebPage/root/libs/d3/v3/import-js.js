/**
 * @function
 * @return {Object} window.d3
 *
 * @example
 * <code>
	var d3 = window.b2link.util.importJS( "./libs/d3/v3/import-js.js" );
 * </code>
 */
(function(){
	window.TtwLog.log( "- [ S ] - Import D3 " );
	window.TtwLog.log( "- [ E ] - Import D3 " );

	// return window.b2link.util.importJS__Reuse( "./libs/d3/v3/3.5.17/d3.js" );
	window.b2link.util.importJS__Reuse( "./libs/d3/v3/3.5.17/d3.min.js" );
	// debugger;

	return d3;
});