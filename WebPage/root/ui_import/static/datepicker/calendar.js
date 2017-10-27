//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui_import/static/datepicker/calendar.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @param {String} url
 * @param {HTMLElement} $el_div
 *//**
 * @class
 * @param {String} url js file url
 * @param {HTMLElement} $el_div 이 객체가 조작할 HTMLElement
 */
(function( url, $el_div ){

	//Extends;
	var _this = window.b2linkUIClass.datepicker.Calendar( url, $el_div );

	//----------------------------------------------------------------------------------------------------;

	//	STATIC VARIABLES - 알파벳 순 정렬;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	//--------------------------------------------------;


	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	EVENT - addEvent***, removeEvent*** 셋트 배치 후 알파벳 순 정렬;
	//	- Callback를 정의하는 곳이 아님.
	//	- dispatchEvent로 인하여 EventType에 의거해서 구동될 EventListenr만 정의 하는 구역임
	//	- Common Interface
	//	_addEvent : 이 객체에서 addEventListener를 정의 한다.
	//	_removeEvent : 이 객체에서 removeEventListener를 정의 한다.

	//----------------------------------------------------------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION - 알파벳 순 정렬;
	//	- Common Interface
	//	_dispose : 이 객체의 removeEvent를 실행하고 이 객체가 보유한 dispose가 있는 인스턴스들의 dispose를 호출해준다.

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * 이 Controller의 TargetElement의 ChildElements들 중 Input Data 형태 Element들의 Value(값)를 초기화 시킨다.
	 * @function
	 */
	/*/
	var _clearDataInputElements = function()
	{
		window.BenLog.timeStamp( "-- [ S ] - _clearDataInputElements():void----------" );

		var o = _this.getDataInputElements();
		for( var s in o ) o[ s ].value = "";

		window.BenLog.timeStamp( "-- [ E ] - _clearDataInputElements():void----------" );
	};
	//*/

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @override
	 * @function
	 */
	var _dispose = function()
	{
		window.JaceLog.timeStamp( "------ [ S ] - _dispose():void----------" );

		_dispose.super();//가장 아래 라인 배치;

		window.JaceLog.timeStamp( "------ [ E ] - _dispose():void----------" );
	};
	_dispose.super = _this.dispose;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER - GET METHOD, SET METHOD, GET/SET set METHOD, GETTER Property, SETTER Property, GETTER/SETTER Property, 구간 안에서 알파벳 정렬;
	//	- Common Interface
	//	_setData : 이 객체가 정상적으로 작동되기 위한 값들을 주입 받는 다.

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------GET;

	/**
	 * Input Data 형태 Elements에서 Value(값)를 가져온다.
	 * @function
	 * @return {Object}
	 */
	//var _getDataForQuery = function(){ return null };

	//--------------------------------------------------;

	/**
	 * Input Data 형태 Elements들을 컨트롤 하기위한 하나의 구조체에 담는다.
	 * var o = _this.getDataInputElements();로 가져와서 사용한다.
	 * @function
	 */
	/*/
	var _setDataInputElements = function()
	{
		window.BenLog.timeStamp( "-- [ S ] - _setDataInputElements():void----------" );

		var el = window.b2link.element.getElementByClassName( $el_div, "datepicker-input" );
		var o = _this.getDataInputElements();
			o[ el.className ] = el;

		window.BenLog.timeStamp( "-- [ E ] - _setDataInputElements():void----------" );
	};
	//*/


	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;

	/*/
	//이 컨트롤러가 정상적으로 구동되기 위한 데이터들을 주입 받는다.;
	_this.setData({
		fn : {
			clearDataInputElements : _clearDataInputElements
			//, getDataForQuery : _getDataForQuery
 			, setDataInputElements : _setDataInputElements
		}
	});
	//*/

	//--------------------------------------------------this - FUNCTION, GET METHOD, SET METHOD, GET/SET METHOG, GETTER, SETTER, GETTER / SETTER 순서 - 타입별 내부는 알파벳 순서 _는 알파벳보다 빠르다.;
	var _ = _this;
	//--------------------------------------------------this;
	return _;
});
