/**
 * @function
 * @return {Object} window.d3
 *
 * @example
 * <code>
	var d3 = window.b2link.util.importJS( window.b2link.url.getServerURLByServers( "SYS0015_WebServer" ) + "/libs/d3/import-js.js" );
 * </code>
 */
(function(){
	window.TtwLog.log( "- [ S ] - Import D3 " );
	window.TtwLog.log( "- [ E ] - Import D3 " );

	var url = window.b2link.url.getServerURLByServers( "SYS0015_WebServer" ) + "/libs/;

	return window.b2link.util.importJS__Reuse( url + "d3/4.8.0/d3.js" );
	//return window.b2link.util.importJS__Reuse( url + "d3/4.8.0/d3.min.js" );
});