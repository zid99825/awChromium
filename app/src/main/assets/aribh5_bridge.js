
"use strict";//XXX -> only for release

if (! location.href.startsWith("about:blank")) {//only non-blank document

//NOTE: MUST be placed here (as beginning as possible) !!!
console.log("bv=20230130c");

///////////////////////////////////////////////////////////////////////////////
/*
function UnitTest(host, target, exsit, change)
{
	if (! host) {
		console.warn("invalid host");
		return;
	}
	if (! Array.isArray(target) || target.length < 1) {
		console.warn("invalid target");
		return;
	}
	let name = target[0];
	for (let i = 1; i < target.length; ++i) {
		name += "." + target[i];
	}
	//console.log("name: " + name);
	let base = null;
	let value = host;
	for (let i = 0; i < target.length; ++i) {
		base = value;
		value = base[target[i]];
		if (! value) {
			if (exsit) {
				console.error(name + ": Failure " + i);
			} else {
				console.debug(name + ": Pass " + i);
			}
			return;
		}
	}
	if (exsit) {
		console.log("typeof " + name + "=" + typeof value);
		if ("function" !== typeof value) {
			try {
				console.log(name + ": " + value);
			} catch (e) {}
		}
		if (change) {
			base[target[target.length - 1]] = {};
			console.log("typeof " + name + "=" + typeof base[target[target.length - 1]]);
			if (base[target[target.length - 1]] === value) {
				console.debug(name + ": Pass");
			} else {
				try {
					console.log(name + ": " + base[target[target.length - 1]]);
					console.error(name + ": Failure");
				} catch (e) {}
			}
		} else {
			console.debug(name + ": Pass");
		}
	} else {
		console.error(name + ": Failure");
	}
}

console.log("=== Unit Test (precondition) begin " + location.href);

let targetsWindow = [
	["VK_RED"],["VK_GREEN"],["VK_YELLOW"],["VK_BLUE"],
	["VK_UP"],["VK_DOWN"],["VK_LEFT"],["VK_RIGHT"],
	["VK_ENTER"],["VK_BACK"],
	["VK_PAGE_UP"],["VK_PAGE_DOWN"],["VK_TAB"],
	["VK_0"],["VK_1"],["VK_2"],["VK_3"],["VK_4"],["VK_5"],["VK_6"],
	["VK_7"],["VK_8"],["VK_9"],["VK_10"],["VK_11"],["VK_12"],
	["VK_PLAY"],["VK_PAUSE"],["VK_PLAY_PAUSE"],["VK_STOP"],
	["VK_FAST_FWD"],["VK_REWIND"],["VK_TRACK_NEXT"],
	["VK_TRACK_PREV"],["VK_VCR_OTHER"],
	["VK_DBUTTON"],["VK_SUBTITLE"],
];
for (let i in targetsWindow) {
	UnitTest(window, targetsWindow[i], false);
}

///////////////////////////////////////////////////////////////dummy for test
//console.log("localStorage: " + localStorage);
//console.log("Object.getOwnPropertyNames(localStorage): " + Object.getOwnPropertyNames(localStorage));
//console.log("localStorage.length: " + localStorage.length);
//for (let property in localStorage) {
//	console.log("localStorage: " + property);
//	console.log(" localStorage: " + localStorage[property]);
//}
////localStorage.clear();
///////////////////////////////////////////////////////////////dummy for test

let targetsNavigator = [
	["bmlCompat"],
	["bmlCompat","browserPseudo"],
	["bmlCompat","browserPseudo","readPersistentArray"],
	["bmlCompat","browserPseudo","writePersistentArray"],
	["bmlCompat","browserPseudo","Greg"],
	["applicationManager"],
	["applicationManager","getOwnerApplication"],
];
for (let i in targetsNavigator) {
	UnitTest(navigator, targetsNavigator[i], false);
}

//TODO

console.log("=== Unit Test (precondition) end " + location.href);
*/
///////////////////////////////////////////////////////////////////////////////

(function () {//dummy namespace begin

const debugOn = true;//XXX -> set to false on strict mode

const fontArib = 0;//TODO -> 0:disable, 1:load from asset, 2:load from file
/**@noinline*/const fontBase = "http://www.font.com/";
/**@noinline*/const fontMaru = "arib_maru.woff2";
/**@noinline*/const fontKaku = "arib_kaku.woff2";
/**@noinline*/const fontFutoMaru = "arib_futo_maru.woff2";
/**@noinline*/const fontMime = "application/x-font-woff2";

///////////////////////////////////////////////////////////////////////////////
const __odp__ = Object.defineProperty;
//const __ospo__ = Object.setPrototypeOf;
//const __ogpo__ = Object.getPrototypeOf;
const __oc__ = Object.create;
const __isa__ = Array.isArray;

if (debugOn) console.log("*** ARIB H5 Bridge begin: " +", @"+location.href);

if (debugOn) console.log("history.length=" + history.length +", @"+location.href);//TODO

if (debugOn) console.log("document.domain=" + document.domain +", @"+location.href);//TODO

if (debugOn) {
	//__odp__(navigator, "platform", {get: function () {return "Android";}, enumerable: true,});
	console.log("navigator.platform: " + navigator.platform +", @"+location.href);

	//__odp__(navigator, "userAgent", {get: function () {return "Hybridcast/2.0.1";}, enumerable: true,});
	console.log("navigator.userAgent: " + navigator.userAgent +", @"+location.href);
}

///////////////////////////////////////////////////////////////////////////////
function IsStringType(value) {
	return ("string" === typeof value);
}
function IsNonemptyString(value) {
	return (IsStringType(value) && 0 < value.length);
}
function IsFunctionType(value) {
	return ("function" === typeof value);
}
function IsBooleanType(value) {
	return ("boolean" === typeof value);
}
function IsNumberType(value) {
	return ("number" === typeof value);
}
function IsUndefinedType(value) {
	return ("undefined" === typeof value);
	//return (undefined === value);
}
function IsNull(value) {
	return (null === value);
}
function IsNonNull(value) {
	return (! IsNull(value));
}
function IsDateObject(value) {
	return (value instanceof Date);
}

///////////////////////////////////////////////////////////////////////////////
function ReadOnlyProperty() {
	if (debugOn) console.log("ReadOnlyProperty: " + this +", @"+location.href);
}

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define Request for AribH5JsObject" +", @"+location.href);
//octal number string (max upto 077=63) ?
const Request_Config = "00";//"Config";
const Request_Open = "01";//"Open";
const Request_Exit = "02";//"Exit";//XXX -> only for Hbbtv(ISDB-HTML)
const Request_GetSysInfo = "03";//"GetSysInfo";
const Request_AppsInfo = "04";//"AppsInfo";//InOut
const Request_GetDeviceId = "05";//"GetDeviceId";
const Request_ReadReg = "06";//"ReadReg";
const Request_WriteReg = "07";//"WriteReg";
const Request_ReadNvram = "10";//"ReadNvram";
const Request_WriteNvram = "11";//"WriteNvram";
const Request_PFEvent = "12";//"PFEvent";//InOut
const Request_CacheEvent = "13";//"CacheEvent";//InOut
const Request_GeneralEvent = "14";//"GeneralEvent";//InOut
const Request_Key = "15";//"Key";
const Request_LocateUrl = "16";//"LocateUrl";
const Request_FetchUrl = "17";//"FetchUrl";
const Request_ManagedArea = "20";//"ManagedArea";
const Request_ReplaceApp = "21";//"ReplaceApp";
const Request_UpdateViewport = "22";//"UpdateViewport";
const Request_ScaleVideo = "23";//"ScaleVideo";
const Request_SelectVideo = "24";//"SelectVideo";
const Request_SelectAudio = "25";//"SelectAudio";
const Request_SelectCaption = "26";//"SelectCaption";
const Request_CaptionData = "27";//"CaptionData";//InOut
const Request_TuneTo = "30";//"TuneTo";
const Request_Schedule = "31";//"Schedule";
const Request_ConfirmIP = "32";//"ConfirmIP";
const Request_LinkCas = "33";//"LinkCas";
const Request_AccessNvram = "34";//"AccessNvram";
const Request_ConstantPage = "35";//"ConstantPage";
const Request_SaveAs = "36";//"SaveAs";
const Request_EnterUnmanaged = "37";//"EnterUnmanaged";
const Request_ErrorOccurred = "40";//"ErrorOccurred";
const Request_ErrorMessage = "41";//"ErrorMessage";//InOut
const Request_UpdateTOT = "42";//"UpdateTOT";//InOut
const Request_IsCommonEvent = "43";//"IsCommonEvent";
///////////////////////////////////////////////////////////////////////////////
//<script type="text/javascript" src="aribh5_bridge.js"></script>
///* //XXX -> for develop in chrome begin
//const testAppType = 0x0011;//cAppTypeAribH5
const testAppType = 0x0010;//cAppTypeIsdbH5
let AribH5Request = __oc__(null);
AribH5Request[Request_Config] = function (request) {
	return null;
};
AribH5Request[Request_Open] = function (request) {
	if (0x0011 === testAppType) {
		return "" + 0x0011;
	}
	return "" + 0x0010;
};
AribH5Request[Request_Exit] = function (request) {
	return null;
};
AribH5Request[Request_GetSysInfo] = function (request) {
	if (0x0011 === testAppType) {
		return JSON.stringify({
				"i" : "1A",//makerid
				"n" : "",//browsername
				"v" : "",//browserversion
				"m" : "",//modelname
				"b" : location.href.substring(0,location.href.indexOf("/work/h5_dump/")+14),//baseurl
		});
	}
	return JSON.stringify({
			"i" : "1A",//makerid
			"n" : "",//browsername
			"v" : "",//browserversion
			"m" : "",//modelname
	});
};
AribH5Request[Request_AppsInfo] = function (request) {
	if (0x0011 === testAppType) {
		return JSON.stringify([{
				"t" : 0x0011,//type
				"o" : 16,//organization_id
				"i" : 1,//application_id
				"c" : "AUTOSTART",//control_code
				"p" : 0xff,//autostart_priority
//TODO				"b" : [{"p":0,"u":[]}],
		}]);
	}
	return JSON.stringify([{
			"t" : 0x0010,//type
			"o" : 16,//organization_id
			"i" : 1,//application_id
			"c" : "AUTOSTART",//control_code
			"p" : 0xff,//autostart_priority
	}]);
};
AribH5Request[Request_GetDeviceId] = function (request) {
	let type = parseInt(request, 10);
	if (0x0005 === type) {
		return "000cce4fbd43";
	}
	return null;
};
let sReg = [];
AribH5Request[Request_ReadReg] = function (request) {
	let val = sReg[request];
	if (IsStringType(val)) {
		return val;
	}
	return "";
};
AribH5Request[Request_WriteReg] = function (request) {
	let pos = request.indexOf("|");
	sReg[request.substring(0, pos)] = request.substring(pos + 1);
	return null;
};
let sZipCode = "1400001";//Tokyo
let sNvram = [];
AribH5Request[Request_ReadNvram] = function (request) {
	if (request.startsWith("_prefecture") ||
		request.startsWith("nvram://receiverinfo/prefecture")) {
		return "00040000000000";//XXX -> 14th/Tokyo
	}
	if (request.startsWith("_regioncode") ||
		request.startsWith("nvram://receiverinfo/regioncode")) {
		return "aac";//XXX -> Tokyo
	}
	if (request.startsWith("_zipcode") ||
		request.startsWith("nvram://receiverinfo/zipcode")) {
		return sZipCode;
	}
	let val = sNvram[request.substring(0, request.indexOf("|"))];
	if (IsStringType(val)) {
		return val;
	}
	if (0x0010 === testAppType) {
		if (request.startsWith("nvram://00;group/14")) {//XXX -> only for NHK
			return '[15,32331,52400,0,"7fe0","",1,0,0,0,"201125",""]';
		}
	}
	return null;
};
AribH5Request[Request_WriteNvram] = function (request) {
	if (request.startsWith("_zipcode") ||
		request.startsWith("nvram://receiverinfo/zipcode")) {
		sZipCode = request.substring(request.indexOf("|") + 1);
	}
	sNvram[request.substring(0, request.indexOf("|"))] =
		request.substring(request.lastIndexOf("/") + 1);
	return 1;
};
AribH5Request[Request_PFEvent] = function (request) {
	if (0x0011 === testAppType) {
		return JSON.stringify({//XXX -> only for NHK
			"nid"   : 0x000B,//original_network_id
			"tlvid" : 0xB110,//tlv_stream_id
			"sid"   : 0x0001,//service_id
			"eid"   : 0x0001,//event_id
			"stm"   : Math.floor(Date.now() / 1000) - 5 * 60 + 9 * 3600,//start_time
			"dur"   : 15 * 60,//duration
			"ca"    : 0,//free_ca_mode
			"nm"    : "present",//name
			"des"   : "present event",//desc
			"feid"  : 0x0002,//f_event_id
			"fstm"  : Math.floor(Date.now() / 1000) + 10 * 60 + 9 * 3600,//f_start_time
			"fdur"  : 5 * 60,//f_duration
			"fca"   : 0,//f_free_ca_mode
			"fnm"   : "following",//f_name
			"fdes"  : "following event",//f_desc
		});
	}
	return JSON.stringify({//XXX -> only for NHK
		"nid"   : 0x7FE0,//original_network_id
		"tsid" : 0x7FE0,//transport_stream_id
		"sid"   : 0x0400,//service_id
		"eid"   : 0x0001,//event_id
		"stm"   : Math.floor(Date.now() / 1000) - 5 * 60 + 9 * 3600,//start_time
		"dur"   : 15 * 60,//duration
		"nm"    : "present",//name
		"des"   : "present event",//desc
		"feid"  : 0x0002,//f_event_id
		"fstm"  : Math.floor(Date.now() / 1000) + 10 * 60 + 9 * 3600,//f_start_time
		"fdur"  : 5 * 60,//f_duration
		"fnm"   : "following",//f_name
		"fdes"  : "following event",//f_desc
	});
};
AribH5Request[Request_CacheEvent] = function (request) {
	return null;
};
AribH5Request[Request_GeneralEvent] = function (request) {
	return null;
};
AribH5Request[Request_Key] = function (request) {
	if (request.startsWith("setkeyset:")) {
		return null;
	}
	if (request.startsWith("getkeys:")) {
		let keys = {
			"VK_RED"    : 82, // r *
			"VK_GREEN"  : 71, // g *
			"VK_YELLOW" : 89, // y *
			"VK_BLUE"   : 66, // b *
			"VK_UP"        : 38, // ArrowUp
			"VK_DOWN"      : 40, // ArrowDown
			"VK_LEFT"      : 37, // ArrowLeft
			"VK_RIGHT"     : 39, // ArrowRight
			"VK_ENTER"     : 13, // Enter
			"VK_BACK"      : 8,  // Backspace *
			"VK_PAGE_UP"   : 33, // PageUp
			"VK_PAGE_DOWN" : 34, // PageDown
			"VK_TAB"       : 9,  // Tab
			"VK_0"  : 48, // 0
			"VK_1"  : 49, // 1
			"VK_2"  : 50, // 2
			"VK_3"  : 51, // 3
			"VK_4"  : 52, // 4
			"VK_5"  : 53, // 5
			"VK_6"  : 54, // 6
			"VK_7"  : 55, // 7
			"VK_8"  : 56, // 8
			"VK_9"  : 57, // 9
			"VK_10" : 73, // i *
			"VK_11" : 79, // o *
			"VK_12" : 80, // p *
			"VK_PLAY"       : 90, // z *
			"VK_PAUSE"      : 88, // x *
			"VK_PLAY_PAUSE" : 67, // c *
			"VK_STOP"       : 86, // v *
			"VK_FAST_FWD"   : 65, // a *
			"VK_REWIND"     : 83, // s *
			"VK_TRACK_NEXT" : 81, // q *
			"VK_TRACK_PREV" : 51, // w *
			"VK_VCR_OTHER"  : 69, // e *
			"VK_DBUTTON" : 68, // d *
			"VK_SUBTITLE" : 84, // t *
		};
		return JSON.stringify(keys);
	}
	if (request.startsWith("getkeysets:")) {
		let keysets = {
			"RED"        : 1 << 0,
			"GREEN"      : 1 << 1,
			"YELLOW"     : 1 << 2,
			"BLUE"       : 1 << 3,
			"NAVIGATION" : 1 << 4,
			"NUMERIC"    : 1 << 5,
			"VCR"        : 1 << 6,
			"DBUTTON"    : 1 << 7,
			"SUBTITLE"   : 1 << 8,
		};
		return JSON.stringify(keysets);
	}
};
AribH5Request[Request_LocateUrl] = function (request) {
	return null;
};
AribH5Request[Request_FetchUrl] = function (request) {
	let oReq = new XMLHttpRequest();
	oReq.open("GET", request, false);
	oReq.send(null);
	return oReq.responseText;
};
AribH5Request[Request_ManagedArea] = function (request) {
	if (request.startsWith("get:")) {
		return "[]";
	}
	return null;
};
AribH5Request[Request_ReplaceApp] = function (request) {
	let app = JSON.parse(request);
	if (IsNonemptyString(app["u"])) {
		location.href = app["u"];
		return "ait";
	}
	return null;
};
AribH5Request[Request_UpdateViewport] = function (request) {
	return null;
};
AribH5Request[Request_ScaleVideo] = function (request) {
	return null;
};
let sCurrentVideoSrc = "/0000";
AribH5Request[Request_SelectVideo] = function (request) {
	if (request.startsWith("get:")) {
		return sCurrentVideoSrc;
	}
	if (request.startsWith("set:")) {
		sCurrentVideoSrc = request.substring(request.lastIndexOf("/"));
		if ("/-1" === sCurrentVideoSrc) {
			sCurrentVideoSrc = "/0000";
		}
		return sCurrentVideoSrc;
	}
	return null;
};
let sCurrentAudioSrc = "/0010";
let sCurrentAudioMute = "disable";
AribH5Request[Request_SelectAudio] = function (request) {
	if (request.startsWith("mute:")) {
		if (request.indexOf("get:") === 5) {
			return sCurrentAudioMute;
		}
		if (request.indexOf("tv") === 5) {//XXX
			sCurrentAudioMute = "disable";
			return sCurrentAudioMute;
		}
		if (request.indexOf("enable") === 5) {
			sCurrentAudioMute = "enable";
			return sCurrentAudioMute;
		}
		if (request.indexOf("disable") === 5) {
			sCurrentAudioMute = "disable";
			return sCurrentAudioMute;
		}
		return null;
	}
	if (request.startsWith("get:")) {
		return sCurrentAudioSrc;
	}
	if (request.startsWith("set:")) {
		sCurrentAudioSrc = request.substring(request.lastIndexOf("/"));
		if ("/-1" === sCurrentAudioSrc) {
			sCurrentAudioSrc = "/0010";
		}
		return sCurrentAudioSrc;
	}
	return null;
};
let sCurrentCaptionSrc = "/0030";
let sCurrentCaptionShow = "on";
AribH5Request[Request_SelectCaption] = function (request) {
	if (request.startsWith("exist:")) {
		return "on";
	}
	if (request.startsWith("show:")) {
		if (request.indexOf("get:") === 5) {
			return sCurrentCaptionShow;
		}
		if (request.indexOf("tv") === 5) {//XXX
			sCurrentCaptionShow = "on";
			return sCurrentCaptionShow;
		}
		if (request.indexOf("on") === 5) {
			sCurrentCaptionShow = "on";
			return sCurrentCaptionShow;
		}
		if (request.indexOf("off") === 5) {
			sCurrentCaptionShow = "off";
			return sCurrentCaptionShow;
		}
		return null;
	}
	if (request.startsWith("get:")) {
		return sCurrentCaptionSrc;
	}
	if (request.startsWith("set:")) {
		sCurrentCaptionSrc = request.substring(request.lastIndexOf("/"));
		if ("/-1" === sCurrentCaptionSrc) {
			sCurrentCaptionSrc = "/0030";
		}
		return sCurrentCaptionSrc;
	}
	return null;
};
AribH5Request[Request_CaptionData] = function (request) {
	return null;
};
AribH5Request[Request_TuneTo] = function (request) {
	return null;
};
AribH5Request[Request_Schedule] = function (request) {
	return null;
};
AribH5Request[Request_ConfirmIP] = function (request) {
	let confirm = JSON.parse(request);
	let dealline = confirm["dl"];
	let dest = confirm["r"];
	if (IsNonemptyString(dest)) {
		if (dest === "test.com") {//TODO
			return "192.168.6.62";
		}
	} else {
		dest = confirm["p"];
		if (confirm["t"] === 6) {
		} else {
		}
		return "ok"
	}
	return null;
};
AribH5Request[Request_LinkCas] = function (request) {
	return "{}";
};
AribH5Request[Request_AccessNvram] = function (request) {
	return null;
};
AribH5Request[Request_ConstantPage] = function (request) {
	return "";
};
AribH5Request[Request_SaveAs] = function (request) {
	return null;
};
AribH5Request[Request_EnterUnmanaged] = function (request) {
	return null;
};
AribH5Request[Request_ErrorOccurred] = function (request) {
	return null;
};
AribH5Request[Request_ErrorMessage] = function (request) {
	return null;
};
AribH5Request[Request_UpdateTOT] = function (request) {
	return null;
};
AribH5Request[Request_IsCommonEvent] = function (request) {
	return false;
};
let AribH5JsObject = __oc__(null);
AribH5JsObject["Request"] = function (command, request) {
	if (! command || ! IsFunctionType(AribH5Request[command])) {
		if (debugOn) console.log("AribH5JsObject: missing " + command +", @"+location.href);
		return null;
	}
	return AribH5Request[command](request);
};

//*/ //XXX -> for develop in chrome end
///////////////////////////////////////////////////////////////////////////////
//XXX -> for closure-compiler
//AribH5JsObject//JS Bridge object defined in Java
//XXX -> manually replace
//	?AribH5JsObject?["Request"](
//to
//	"AribH5JsObject"["Request"](
//and then restore
//	"?AribH5JsObject"?.Request(
//to
//	AribH5JsObject.Request(
///////////////////////////////////////////////////////////////////////////////
//if (debugOn) console.log("AribH5JsObject=" + AribH5JsObject +", @"+location.href);
//if (debugOn) console.log("AribH5JsObject.Request=" + AribH5JsObject["Request"] +", @"+location.href);
function DoAribH5Requset(command, request) {
	if (IsUndefinedType(request)) {
		request = "";
	} else {
		if (! IsStringType(request)) {
			request = request.toString();
		}
	}
	if (debugOn) console.log("DoAribH5Requset: command=" + command
		+ ", request=" + request +", @"+location.href);
	let result = null;
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
    result = AribH5JsObject["Request"](command, request);
//    if (result == null) {
//
//        let port = browser.runtime.connectNative("browser");
//        result = port.post
//        result = browser.runtime.sendNativeMessage("browser", "{command: "+command+', request:"'+request+'"}');
//    }
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @DoAribH5Requset"
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/		+ ", command=" + command + ", request=" + request +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
	if (debugOn) console.log("DoAribH5Requset: command=" + command
		+ ", result=" + result +", @"+location.href);
	if (! IsStringType(result)) {
		result = "";
	}
	return result;
}

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** config AribH5 (debug,dump,font,afic)" +", @"+location.href);
let confRequest = "";
if (debugOn) {
	confRequest += "debugOn,";
//	confRequest += "dumpRes,";
}
if (0 < fontArib) {
	confRequest += "fontArib(" + fontArib +
		"," + fontBase + "," + fontMaru +
		"," + fontKaku + "," + fontFutoMaru +
		"," + fontMime + "),";
}
DoAribH5Requset(Request_Config, confRequest);

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define AribH5Error" +", @"+location.href);
const INVALID_PARAM_ERR  = 1;
const TIMEOUT_ERR        = 2;
const NOT_FOUND_ERR      = 3;
const NOT_AUTHORIZED_ERR = 4;
const OUT_OF_RANGE_ERR   = 5;
const QUOTA_EXCEEDED_ERR = 6;
const SECURITY_ERR       = 7;
const MISC_ERR           = 8;
/**@noinline*/const AribH5ErrorMsg = [];
AribH5ErrorMsg[INVALID_PARAM_ERR - 1]  = "Invalid parameter";
AribH5ErrorMsg[TIMEOUT_ERR - 1]        = "Timeout";
AribH5ErrorMsg[NOT_FOUND_ERR - 1]      = "File not found";
AribH5ErrorMsg[NOT_AUTHORIZED_ERR - 1] = "Not authorized";
AribH5ErrorMsg[OUT_OF_RANGE_ERR - 1]   = "Index out of range";
AribH5ErrorMsg[QUOTA_EXCEEDED_ERR - 1] = "Quota exceeded error";//TODO
AribH5ErrorMsg[SECURITY_ERR - 1]       = "Security error";//TODO
AribH5ErrorMsg[MISC_ERR - 1]           = "Unknown error";
/**@noinline*/const AribH5ErrorPrefix = "Err:";
/**@noinline*/const AribH5ErrorMsgIds = {
	[AribH5ErrorPrefix + "InvalidParameter"] : INVALID_PARAM_ERR,
	[AribH5ErrorPrefix + "Timeout"]          : TIMEOUT_ERR,
	[AribH5ErrorPrefix + "FileNotFound"]     : NOT_FOUND_ERR,
	[AribH5ErrorPrefix + "NotAuthorized"]    : NOT_AUTHORIZED_ERR,
	[AribH5ErrorPrefix + "IndexOutOfRange"]  : OUT_OF_RANGE_ERR,
	[AribH5ErrorPrefix + "QuotaExceeded"]    : QUOTA_EXCEEDED_ERR,
	[AribH5ErrorPrefix + "Security"]         : SECURITY_ERR,
	[AribH5ErrorPrefix + "Misc"]             : MISC_ERR
};
let sAribH5Error = null;//TODO
/**@constructor*/function AribH5Error(msgId, callerName) {
	if (debugOn) if (IsFunctionType(Error.captureStackTrace)) {
		Error.captureStackTrace(this, AribH5Error)
	}
	if (debugOn) console.log("AribH5Error: msgId=" + msgId +", @"+location.href);
	if (INVALID_PARAM_ERR > msgId || MISC_ERR < msgId) {
		msgId = MISC_ERR;
	}
	this.name = "Error";
	this.message = AribH5ErrorMsg[msgId - 1];
	if (debugOn) console.log("AribH5Error: msg=" + this.message +", @"+location.href);
	if (debugOn) console.log(this.stack +", @"+location.href);
	sAribH5Error = this;//TODO
}
AribH5Error.prototype = new Error;
AribH5Error.prototype.constructor = AribH5Error;
/**@noinline*/function CheckIfThrowAribH5Error(checkResult) {
	if (IsStringType(checkResult) &&
		checkResult.startsWith(AribH5ErrorPrefix)) {
		let errId = AribH5ErrorMsgIds[checkResult];
		if (IsUndefinedType(errId)) {
			errId = MISC_ERR;
		}
		throw new AribH5Error(errId);
	}
}
/**@noinline*/function ThrowAribH5Error(msgId) {
	throw new AribH5Error(msgId);
}

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define WindowErrorEventListener" +", @"+location.href);
window.addEventListener("error", function (event) {
//	if (debugOn) console.log("error=" + event +", @"+location.href);
	if (debugOn) console.log("error.message=" + event.message +", @"+location.href);
	if (debugOn) console.log("error.filename=" + event.filename +", @"+location.href);
	if (debugOn) console.log("error.lineno=" + event.lineno +", @"+location.href);
	if (debugOn) console.log("error.colno=" + event.colno +", @"+location.href);
	if (debugOn) console.log("error.error=" + event.error +", @"+location.href);
	if (debugOn) console.log("error.error.stack=" + event.error.stack +", @"+location.href);
	DoAribH5Requset(Request_ErrorOccurred,
		"error:" + event.message +", @"+location.href);//XXX
	if (sAribH5Error) {//TODO
		console.log("AribH5Error.message=" + sAribH5Error.message +", @"+location.href);
		//TODO
		sAribH5Error = null;
		return true;
	}
	//TODO
});

///////////////////////////////////////////////////////////////////////////////
function GetValueOfParamForNumberType(param, min, max) {
	if (IsStringType(param)) {
		if (isNaN(param)) {
			ThrowAribH5Error(INVALID_PARAM_ERR);
		}
		param = Number(param);//TODO
	} else if (! IsNumberType(param)) {
		ThrowAribH5Error(INVALID_PARAM_ERR);
	}
	if ((! IsUndefinedType(min)) && min > param) {
		ThrowAribH5Error(INVALID_PARAM_ERR);
	}
	if ((! IsUndefinedType(max)) && max < param) {
		ThrowAribH5Error(INVALID_PARAM_ERR);
	}
	return param;
}
function CheckNonemptyParamForStringType(param) {
	if (IsNonemptyString(param)) {
		return;
	}
	ThrowAribH5Error(INVALID_PARAM_ERR);
}

///////////////////////////////////////////////////////////////////////////////
//CATCH_ALL_EXCEPTION_FOR_DEBUG <=> /*CATCH_ALL_EXCEPTION_FOR_DEBUG*/

///////////////////////////////////////////////////////////////////////////////
/**@noinline*/const cToString = "toString";
/**@noinline*/const cObjStringB = "[object ";
/**@noinline*/const cObjStringE = "]";

///////////////////////////////////////////////////////////////////////////////
//NOTE: MUST do this first !!!
if (debugOn) console.log("*** define DocumentOpen" +", @"+location.href);
const cAppTypeAribH5 = 0x0011;//"ARIB-HTML5"
const cAppTypeIsdbH5 = 0x0010;//"ISDB-HTML"
const cCurrentAppType = parseInt(DoAribH5Requset(Request_Open), 10);
if (debugOn) console.log("currentAppType=" + cCurrentAppType +", @"+location.href);
if (debugOn) if (! (cAppTypeAribH5 === cCurrentAppType ||
	cAppTypeIsdbH5 === cCurrentAppType)) ThrowAribH5Error(MISC_ERR);

///////////////////////////////////////////////////////////////////////////////
const JST_TZO_HOURS = 9;
const JST_TZO_MIN = (JST_TZO_HOURS * 60);
const JST_TZO_SEC = (JST_TZO_HOURS * 60 * 60);
let __date_proto__ = Date.prototype;
const __date_ctor__ = __date_proto__.constructor.prototype.constructor;
///////////////////////////////////////////////////////////////////////////////
let DateTOT, DateOrigin;
function UpdateTOT(tot) {
	DateTOT = (tot - JST_TZO_SEC) * 1000;
	DateOrigin = (new __date_ctor__()).getTime();
	if (debugOn) console.log("JST TOT: " + DateTOT + "," + DateOrigin +", @"+location.href);
}
const cTOT = parseInt(DoAribH5Requset(Request_UpdateTOT), 10);
if (0 < cTOT) {
///////////////////////////////////////////////////////////////////////////////
UpdateTOT(cTOT);
const JST_TZO_MS = (JST_TZO_SEC * 1000);
const cDateDifferent = (0 < DateTOT ?
	(1000 < Math.abs(DateTOT - DateOrigin)) : false);//TODO
const cDateTzOffset =
	((new __date_ctor__()).getTimezoneOffset() + JST_TZO_MIN) * 60 * 1000;
if (cDateDifferent || 0 !== cDateTzOffset) {
///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** customize Date for JST, " + cDateDifferent + "," + cDateTzOffset +", @"+location.href);
const __date_utc__ = Date.UTC;
const __date_parse__ = Date.parse;
const __date_tolds__ = __date_proto__.toLocaleDateString;//can also use Intl.DateTimeFormat
const __date_tols__ = __date_proto__.toLocaleString;//can also use Intl.DateTimeFormat
const __date_tolts__ = __date_proto__.toLocaleTimeString;//can also use Intl.DateTimeFormat
Date = function DateConstructor(...args) {//modify Date constructor
//	if (debugOn) console.log("JST Date: " + args[0] +", @"+location.href);
	let obj;
	if (IsUndefinedType(args[0])) {
		obj = new __date_ctor__();
		if (cDateDifferent) {
			let elapse = obj.getTime() - DateOrigin;
//			if (debugOn) console.log("JST Date: elapse=" + elapse +", @"+location.href);
			obj = new __date_ctor__(DateTOT + elapse);
		}//cDateDifferent
	} else if (IsNumberType(args[0]) && IsUndefinedType(args[1])) {
		obj = new __date_ctor__(args[0]);
	} else {
//		if (debugOn) console.log("TimeZone Date: " + args +", @"+location.href);
		obj = new __date_ctor__(...args);
		if (0 !== cDateTzOffset) {
//			if (debugOn) console.log("TimeZone Date 1: " + obj.toUTCString() +", @"+location.href);
			obj = new __date_ctor__(obj.getTime() - cDateTzOffset);
//			if (debugOn) console.log("TimeZone Date 2: " + obj.toUTCString() +", @"+location.href);
		}//0!==cDateTzOffset
	}
	if (this instanceof Date) {
		return obj;
	}
	return obj.toString();
};
Date.prototype = __date_proto__;//modify Date.prototype, copy from builtins
__date_proto__ = Date.prototype;
__date_proto__.constructor.prototype.constructor = Date;
Date["now"] = function DateNow() {//modify Date.now
	return (new Date()).getTime();
};
Date["UTC"] = __date_utc__;//modify Date.UTC, copy from builtins
if (0 !== cDateTzOffset) {
Date["parse"] = function DateParse(dateString) {//modify Date.parse
//	if (debugOn) console.log("TimeZone Date parse: " + dateString +", @"+location.href);
	return (__date_parse__(dateString) - JST_TZO_MS);
}
const YEAR_STR_SZ = 4;
const HOUR_STR_SZ = 2;
/**@noinline*/const JST_LOCALES = "ja-JP";
/**@noinline*/const JST_TZ_STR = "+0900 (JST)";//TODO
function NewDateByJSTTZ(date) {
//	if (debugOn) console.log("JST Date 1: " + date.toUTCString() +", @"+location.href);
	let date_time = date.getTime();
	if (IsUndefinedType(date["j"]) || date_time !== date["j"]["t"]) {
		date["j"] = (new __date_ctor__(date_time + JST_TZO_MS));
		date["j"]["t"] = date_time;
//		if (debugOn) console.log("JST Date 2: " + date["j"].toUTCString() +", @"+location.href);
	}
	return date["j"];
}
function NewDateByTZOff(date) {
//	if (debugOn) console.log("TimeZone Date 1: " + date.toUTCString() +", @"+location.href);
	let date_time = date.getTime();
	if (IsUndefinedType(date["z"]) || date_time !== date["z"]["t"]) {
		date["z"] = (new __date_ctor__(date_time + cDateTzOffset));
		date["z"]["t"] = date_time;
//		if (debugOn) console.log("TimeZone Date 2: " + date["z"].toUTCString() +", @"+location.href);
	}
	return date["z"];
}
/*
let JstIntlDTF, JstIntlDTFd, JstIntlDTFt;
function NewJstIntlDTF() {
	if (! JstIntlDTF) {
		const options = {
			year: "numeric", month: "numeric", day: "numeric",
			hour: "numeric", minute: "numeric", second: "numeric",
			hour12: false
		};
		JstIntlDTF = new Intl.DateTimeFormat(JST_LOCALES, options);
	}
	return JstIntlDTF;
}
function NewJstIntlDTFd() {
	if (! JstIntlDTFd) {
		const options = {
			year: "numeric", month: "numeric", day: "numeric"
		};
		JstIntlDTFd = new Intl.DateTimeFormat(JST_LOCALES, options);
	}
	return JstIntlDTFd;
}
function NewJstIntlDTFt() {
	if (! JstIntlDTFt) {
		const options = {
			hour: "numeric", minute: "numeric", second: "numeric",
			hour12: false
		};
		JstIntlDTFt = new Intl.DateTimeFormat(JST_LOCALES, options);
	}
	return JstIntlDTFt;
}
*/
function UnsupportIntl() {//XXX -> only for xwalk ?
	return ("undefined" === typeof Intl);
}
__date_proto__["getDate"] = function DateGetDate() {//modify Date.prototype.getDate
	return NewDateByJSTTZ(this).getUTCDate();
};
__date_proto__["getDay"] = function DateGetDay() {//modify Date.prototype.getDay
	return NewDateByJSTTZ(this).getUTCDay();
};
__date_proto__["getFullYear"] = function DateGetFullYear() {//modify Date.prototype.getFullYear
	return NewDateByJSTTZ(this).getUTCFullYear();
};
__date_proto__["getHours"] = function DateGetHours() {//modify Date.prototype.getHours
	return NewDateByJSTTZ(this).getUTCHours();
};
//__date_proto__["getMilliseconds"] = function DateGetMilliseconds() {
//};
//__date_proto__["getMinutes"] = function DateGetMinutes() {
//};
__date_proto__["getMonth"] = function DateGetMonth() {//modify Date.prototype.getMonth
	return NewDateByJSTTZ(this).getUTCMonth();
};
//__date_proto__["getSeconds"] = function DateGetSeconds() {
//};
//__date_proto__["getTime"] = function DateGetTime() {
//};
__date_proto__["getTimezoneOffset"] = function DateGetTimezoneOffset() {//modify Date.prototype.getTimezoneOffset
	return (- JST_TZO_MIN);
};
//__date_proto__["getUTCDate"] = function DateGetUTCDate() {
//};
//__date_proto__["getUTCDay"] = function DateGetUTCDay() {
//};
//__date_proto__["getUTCFullYear"] = function DateGetUTCFullYear() {
//};
//__date_proto__["getUTCHours"] = function DateGetUTCHours() {
//};
//__date_proto__["getUTCMilliseconds"] = function DateGetUTCMilliseconds() {
//};
//__date_proto__["getUTCMinutes"] = function DateGetUTCMinutes() {
//};
//__date_proto__["getUTCMonth"] = function DateGetUTCMonth() {
//};
//__date_proto__["getUTCSeconds"] = function DateGetUTCSeconds() {
//};
__date_proto__["getYear"] = function DateGetYear() {//Deprecated
	return (this.getFullYear() - 1900);
};
__date_proto__["setDate"] = function DateSetDate(dayValue) {//modify Date.prototype.setDate
	let jstDate = NewDateByJSTTZ(this);
	jstDate.setUTCDate(dayValue);
	this.setTime(jstDate.getTime());
};
__date_proto__["setFullYear"] = function DateSetFullYear(yearValue) {//modify Date.prototype.setFullYear
	let jstDate = NewDateByJSTTZ(this);
	jstDate.setUTCFullYear(yearValue);
	this.setTime(jstDate.getTime());
};
__date_proto__["setHours"] = function DateSetHours(hoursValue) {//modify Date.prototype.setHours
	let jstDate = NewDateByJSTTZ(this);
	jstDate.setUTCHours(hoursValue);
	this.setTime(jstDate.getTime());
};
//__date_proto__["setMilliseconds"] = function DateSetMilliseconds() {
//};
//__date_proto__["setMinutes"] = function DateSetMinutes() {
//};
__date_proto__["setMonth"] = function DateSetMonth(monthValue) {//modify Date.prototype.setMonth
	let jstDate = NewDateByJSTTZ(this);
	jstDate.setUTCMonth(monthValue);
	this.setTime(jstDate.getTime());
};
//__date_proto__["setSeconds"] = function DateSetSeconds() {
//};
//__date_proto__["setTime"] = function DateSetTime() {
//};
//__date_proto__["setUTCDate"] = function DateSetUTCDate() {
//};
//__date_proto__["setUTCFullYear"] = function DateSetUTCFullYear() {
//};
//__date_proto__["setUTCHours"] = function DateSetUTCHours() {
//};
//__date_proto__["setUTCMilliseconds"] = function DateSetUTCMilliseconds() {
//};
//__date_proto__["setUTCMinutes"] = function DateSetUTCMinutes() {
//};
//__date_proto__["setUTCMonth"] = function DateSetUTCMonth() {
//};
//__date_proto__["setUTCSeconds"] = function DateSetUTCSeconds() {
//};
__date_proto__["setYear"] = function DateSetYear(yearValue) {//Deprecated
	return this.setFullYear(yearValue + 1900);
};
__date_proto__["toDateString"] = function DateToDateString() {//modify Date.prototype.toDateString
//	if (debugOn) console.log("JST Date toDateString 1: " + this.toUTCString() +", @"+location.href);
	let utcString = NewDateByJSTTZ(this).toUTCString();
//	if (debugOn) console.log("JST Date toDateString 2: " + utcString +", @"+location.href);
	//eg. "Sun, 31 May 2020 18:41:39 GMT" => "Sun May 31 2020"
	let utcWeekEnd = utcString.indexOf(",");
	let utcMonthStart = utcString.indexOf(" ", utcWeekEnd + 1 + 1);
	let utcMonthEnd = utcMonthStart + 1 + 3;
	let jstString = utcString.substring(0, utcWeekEnd) +
		utcString.substring(utcMonthStart, utcMonthEnd) +
		utcString.substring(utcWeekEnd + 1, utcMonthStart) +
		utcString.substring(utcMonthEnd, utcMonthEnd + 1 + YEAR_STR_SZ);
//	if (debugOn) console.log("JST Date toDateString 3: " + jstString +", @"+location.href);
	return jstString;
};
//__date_proto__["toGMTString"] = function DateToGMTString() {//Deprecated
//};
//__date_proto__["toISOString"] = function DateToISOString() {
//};
//__date_proto__["toJSON"] = function DateToJSON() {
//};
__date_proto__["toLocaleDateString"] = function DateToLocaleDateString() {//modify Date.prototype.toLocaleDateString
	if (UnsupportIntl()) {
		return this.toDateString();//XXX -> only for xwalk ?
	}
//	if (debugOn) console.log("JST Date toLocaleDateString 0: " + this.toUTCString() +", @"+location.href);
//	if (debugOn) console.log("JST Date toLocaleDateString 1: " + __date_tolds__.call(this, JST_LOCALES) +", @"+location.href);
	//eg. => "2020/5/31"
	let jstString = __date_tolds__.call(NewDateByTZOff(this), JST_LOCALES);
	//let jstString = NewJstIntlDTFd().format(NewDateByTZOff(this));
//	if (debugOn) console.log("JST Date toLocaleDateString 2: " + jstString +", @"+location.href);
	return jstString;
};
__date_proto__["toLocaleString"] = function DateToLocaleString() {//modify Date.prototype.toLocaleString
	if (UnsupportIntl()) {
		return this.toString();//XXX -> only for xwalk ?
	}
//	if (debugOn) console.log("JST Date toLocaleString 0: " + this.toUTCString() +", @"+location.href);
//	if (debugOn) console.log("JST Date toLocaleString 1: " + __date_tols__.call(this, JST_LOCALES) +", @"+location.href);
	//eg. => "2020/5/31 18:41:39"
	let jstString = __date_tols__.call(NewDateByTZOff(this), JST_LOCALES);
	//let jstString = NewJstIntlDTF().format(NewDateByTZOff(this));
//	if (debugOn) console.log("JST Date toLocaleString 2: " + jstString +", @"+location.href);
	return jstString;
};
__date_proto__["toLocaleTimeString"] = function DateToLocaleTimeString() {//modify Date.prototype.toLocaleTimeString
	if (UnsupportIntl()) {
		return this.toTimeString();//XXX -> only for xwalk ?
	}
//	if (debugOn) console.log("JST Date toLocaleTimeString 0: " + this.toUTCString() +", @"+location.href);
//	if (debugOn) console.log("JST Date toLocaleTimeString 1: " + __date_tolts__.call(this, JST_LOCALES) +", @"+location.href);
	//eg. => "18:41:39"
	let jstString = __date_tolts__.call(NewDateByTZOff(this), JST_LOCALES);
	//let jstString = NewJstIntlDTFt().format(NewDateByTZOff(this));
//	if (debugOn) console.log("JST Date toLocaleTimeString 2: " + jstString +", @"+location.href);
	return jstString;
};
__date_proto__["toString"] = function DateToString() {//modify Date.prototype.toString
//	if (debugOn) console.log("JST Date toString 1: " + this.toUTCString() +", @"+location.href);
	let utcString = NewDateByJSTTZ(this).toUTCString();
//	if (debugOn) console.log("JST Date toString 2: " + utcString +", @"+location.href);
	//eg. "Sun, 31 May 2020 18:41:39 GMT" => "Sun May 31 2020 18:41:39 GMT+0900 (JST)"
	let utcWeekEnd = utcString.indexOf(",");
	let utcMonthStart = utcString.indexOf(" ", utcWeekEnd + 1 + 1);
	let utcMonthEnd = utcMonthStart + 1 + 3;
	let jstString = utcString.substring(0, utcWeekEnd) +
		utcString.substring(utcMonthStart, utcMonthEnd) +
		utcString.substring(utcWeekEnd + 1, utcMonthStart) +
		utcString.substring(utcMonthEnd) + JST_TZ_STR;
//	if (debugOn) console.log("JST Date toString 3: " + jstString +", @"+location.href);
	return jstString;
};
__date_proto__["toTimeString"] = function DateToTimeString() {//modify Date.prototype.toTimeString
//	if (debugOn) console.log("JST Date toTimeString 1: " + this.toUTCString() +", @"+location.href);
	let utcString = NewDateByJSTTZ(this).toUTCString();
//	if (debugOn) console.log("JST Date toTimeString 2: " + utcString +", @"+location.href);
	//eg. "Sun, 31 May 2020 18:41:39 GMT" => "Sun May 31 2020 18:41:39"
	let utcTimeStart = utcString.indexOf(":") - HOUR_STR_SZ;
	let jstString = utcString.substring(utcTimeStart) + JST_TZ_STR;
//	if (debugOn) console.log("JST Date toTimeString 3: " + jstString +", @"+location.href);
	return jstString;
};
//__date_proto__["toUTCString"] = function DateToUTCString() {
//};
//__date_proto__["valueOf"] = function DateValueOf() {
//};
} else {//0!==cDateTzOffset
Date["parse"] = __date_parse__;//modify Date.parse, copy from builtins
}//0!==cDateTzOffset
}//cDateDifferent||0!==cDateTzOffset
}//0<cTOT
if (debugOn) console.log("Now for JST: " + (new Date()) +", @"+location.href);

///////////////////////////////////////////////////////////////////////////////
if (cAppTypeAribH5 === cCurrentAppType ?
	(! navigator.userAgent.startsWith("A-PAB/")) :
	(! navigator.userAgent.startsWith("Hybridcast/"))) {
	if (debugOn) console.log("*** customize navigator.userAgent" +", @"+location.href);
	if (debugOn) console.log("navigator.userAgent=" + navigator.userAgent +", @"+location.href);
	__odp__(navigator, "userAgent", {
		value: cAppTypeAribH5 === cCurrentAppType ?
			"A-PAB/1.0 (4K,4K;00001A;;;;)" : "Hybridcast/1.0",
		//enumerable: true,
	});
	if (debugOn) console.log("navigator.userAgent=" + navigator.userAgent +", @"+location.href);
}

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define SystemInformation" +", @"+location.href);
let sSystemInfo;
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
sSystemInfo = JSON.parse(DoAribH5Requset(Request_GetSysInfo));
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @JSON.parse(systemInfo)" +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	sSystemInfo = null;//throw e;
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
if (debugOn) console.log("systemInfo: " + (sSystemInfo ? JSON.stringify(sSystemInfo) : sSystemInfo) +", @"+location.href);
if (debugOn) if (! sSystemInfo) ThrowAribH5Error(MISC_ERR);

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define AribH5Command" +", @"+location.href);
__odp__(window, "AribH5Command", {
	set: function AribH5Command(command) {
		if (debugOn) console.log("AribH5Command.set: " + command +", @"+location.href);
		if (! IsStringType(command)) {
			if (debugOn) console.log("AribH5Command.set skip" +", @"+location.href);
			return;
		}
		if (command.startsWith(Request_PFEvent + ":update")) {
			CachingPFEvent(true);
			SendAllPFEvent();
			NotifyAllEventID();
		} else if (command.startsWith(Request_CacheEvent + ":")) {
			let strCE = command.substr(command.indexOf(":") + 1);
			NotifyCacheEvent(strCE);
		} else if (command.startsWith(Request_GeneralEvent + ":")) {
			let jsonGE = command.substr(command.indexOf(":") + 1);
			NotifyGEMessage(jsonGE);
		} else if (command.startsWith(Request_AppsInfo + ":update")) {
			let jsonAI = DoAribH5Requset(Request_AppsInfo, "update:");
			NotifyApplicationsInfo(jsonAI);
		} else if (command.startsWith(Request_CaptionData + ":")) {
			let up = command.indexOf(":");
			let dp = command.indexOf("{");
			let url = command.substr(up + 1, dp - up - 1);
			let jsonCap = command.substr(dp);
			NotifyCaptionData(url, jsonCap);
		} else if (command.startsWith(Request_ScaleVideo + ":")) {
			NotifyVideoScale(command.substr(Request_ScaleVideo.length + 1));
//-		} else if (command.startsWith(Request_UpdateViewport + ":")) {
//-			DoAribH5Requset(command.substr(0, Request_UpdateViewport.length),
//-				command.substr(Request_UpdateViewport.length + 1));
		} else if (command.startsWith(Request_ErrorMessage + ":")) {
			let error = command.substr(command.indexOf(":") + 1);
			CheckIfThrowAribH5Error(error);
		} else if (command.startsWith(Request_UpdateTOT + ":")) {
			let strTOT = command.substr(command.indexOf(":") + 1);
			UpdateTOT(parseInt(strTOT, 10));
		}
		if (debugOn) console.log("AribH5Command.set ok" +", @"+location.href);
	},
	//enumerable: true,
});

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define Key" +", @"+location.href);
(function KeyCodeGlobalSymbols() {
	if (debugOn) var Names = [];
	let Values = [];
	let jsonKeys = DoAribH5Requset(Request_Key, "getkeys:");
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
	let Keys = JSON.parse(jsonKeys);
//	if (debugOn) console.log("Keys: " + JSON.stringify(Keys) +", @"+location.href);
	let index = 0;
	for (let key in Keys) {
		(function (index) {
			if (debugOn) console.log("Key: " + key + "=" + Keys[key] +", @"+location.href);
			if (debugOn) Names[index] = key;
			Values[index] = Keys[key];
			__odp__(window, key, {
				get: function () {
//					if (debugOn) console.log("Key.get: " +
//						Names[index] + "," + Values[index] +", @"+location.href);
					return Values[index];
				},
				set: ReadOnlyProperty,
				//enumerable: true,
			});
		})(index);
		++index;
	}
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @JSON.parse(jsonKeys)" +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	return;//throw e;
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
})();

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define KeySet" +", @"+location.href);
let sAribH5KeySet = (function () {
	let KeySet = __oc__(null);
	let Value = 0;
	if (debugOn) var Names = [];
	let Values = [];
	__odp__(KeySet, "setValue", {
		value: function (value) {
			if (debugOn) console.log("KeySet.setValue: " + value +", @"+location.href);
			Value = value;
			DoAribH5Requset(Request_Key, "setkeyset:" + value);
		},
		//enumerable: true,
	});
	__odp__(KeySet, "value", {
		get: function () {
			if (debugOn) console.log("KeySet.get: " + Value +", @"+location.href);
			return Value;
		},
		set: ReadOnlyProperty,
		//enumerable: true,
	});
	let jsonKeySets = DoAribH5Requset(Request_Key, "getkeysets:");
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
	let KeySets = JSON.parse(jsonKeySets);
//	if (debugOn) console.log("KeySets: " + JSON.stringify(KeySets) +", @"+location.href);
	let index = 0;
	for (let keyset in KeySets) {
		(function (index) {
			if (debugOn) console.log("KeySet: " + keyset + "=" + KeySets[keyset] +", @"+location.href);
			if (debugOn) Names[index] = keyset;
			Values[index] = KeySets[keyset];
			__odp__(KeySet, keyset, {
				get: function () {
//					if (debugOn) console.log("KeySet.get: " + Names[index] + "," + Values[index] +", @"+location.href);
					return Values[index];
				},
				set: ReadOnlyProperty,
				//enumerable: true,
			});
		})(index);
		++index;
	}
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @JSON.parse(jsonKeySets)" +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	//throw e;
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
	/*if (debugOn) */__odp__(KeySet, cToString, {
		value: function () {
			if (debugOn) {
				let str = Value;
				str += "{";
				Values.forEach(function (ks, index) {
					if (0 < index) {
						str += ",";
					}
					str += Names[index] + ":" + ks;
				});
				str += "}";
				return str;
			}
			return cObjStringB + "KeySet" + cObjStringE;
		},
		//enumerable: true,
	});
//	if (debugOn) console.log("KeySet=" + KeySet +", @"+location.href);
	return KeySet;
})();

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define Reg(G+U)" +", @"+location.href);
const AribH5GregMax = 64, AribH5UregMax = 64;
let sAribH5GregArray = [];
let sAribH5UregArray = [];
function AribH5RegCreate(regArray, regArrayMax) {
	let Reg = __oc__(null);
	let gu = (regArray === sAribH5GregArray ? "g" : "u");
	for (let i = 0; i < regArrayMax; ++i) {
		(function (index) {
			__odp__(Reg, index.toString(), {
				get: function AribH5RegGet() {
//					if (debugOn) console.log("Reg.get: " + gu + index +", @"+location.href);
					CheckForPermissionBitmap(1 << 5);
					if (regArray[index] &&
						IsStringType(regArray[index]["v"])) {
						if (debugOn) console.log("Reg.get: " + gu + index + "=" + regArray[index]["v"] +", @"+location.href);
						return regArray[index]["v"];
					}
					let value = DoAribH5Requset(Request_ReadReg, gu + index);
					if (debugOn) console.log("Reg.get: " + gu + index + "=" + value +", @"+location.href);
					CheckIfThrowAribH5Error(value);//TODO
					//if (value.startsWith(AribH5ErrorPrefix)) {
					//	return null;//TODO
					//}
					if (! regArray[index]) {
						regArray[index] = __oc__(null);
					}
					regArray[index]["v"] = value;
					return value;
				},
				set: function AribH5RegSet(value) {
					if (debugOn) console.log("Reg.set: " + gu + index + "=" + value +", @"+location.href);
					CheckForPermissionBitmap(1 << 5);
					if (IsUndefinedType(value)) {
						ThrowAribH5Error(INVALID_PARAM_ERR);
					}
					if (! IsStringType(value)) {
						value = value.toString();
					}
					if (regArray[index] &&
						value === regArray[index]["v"]) {
						if (debugOn) console.log("Reg.set: " + gu + index + "," + value.length +", @"+location.href);
						return;
					}
					if (! regArray[index]) {
						regArray[index] = __oc__(null);
					}
					regArray[index]["v"] = null;
					let bytes = DoAribH5Requset(Request_WriteReg, gu + index + "|" + value);
					if (debugOn) console.log("Reg.set: " + gu + index + "," + bytes +", @"+location.href);
					CheckIfThrowAribH5Error(bytes);//TODO
					bytes = parseInt(bytes, 10);
					if (0 <= bytes) {
						regArray[index]["v"] = value;
					}
				},
				//enumerable: true,
			});
		})(i);
	}
	/*if (debugOn) */__odp__(Reg, cToString, {
		value: function () {
			if (debugOn) {
				let str = "{";
				regArray.forEach(function (reg, index) {
					if (0 < index) {
						str += ",";
					}
					if (reg["v"]) {
						str += index + ":'" + reg["v"] + "'";
					}
				});
				str += "}";
				return str;
			}
			return cObjStringB + gu.toUpperCase() + "reg" + cObjStringE;
		},
		//enumerable: true,
	});
	return Reg;
}
let sAribH5Greg = AribH5RegCreate(sAribH5GregArray, AribH5GregMax);
let sAribH5Ureg = AribH5RegCreate(sAribH5UregArray, AribH5UregMax);

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define Persistent" +", @"+location.href);
let sAribH5Persistent = __oc__(null);

/**@noinline*/const cAribH5GregKey = "greg";
/**@noinline*/const cAribH5UregKey = "ureg";
/**@noinline*/const cAribH5KeyPrefix = "_";
/**@noinline*/const cAribH5CommonKey = "_common";
/**@noinline*/const cAribH5WlocalKey = "_wlocal";
/**@noinline*/const cAribH5LocalKey = "_local";
/**@noinline*/const cAribH5PrefectureKey = "_prefecture";
/**@noinline*/const cAribH5RegioncodeKey = "_regioncode";
/**@noinline*/const cAribH5ZipcodeKey = "_zipcode";
const cAribH5LSItemMax = 256;
////////////////////////////////////////////FIXME: XXX
//let sAribH5CommonArray = [];
//let sAribH5WlocalArray = [];
//let sAribH5LocalArray = [];
//let sAribH5ZipCode = "";//FIXME: XXX
////////////////////////////////////////////FIXME: XXX
function FilterReg(key, value) {
	let reg = null;
	let max = 0;
	if (key.startsWith(cAribH5GregKey)) {
		reg = sAribH5Greg;
		max = AribH5GregMax;
	} else {
		reg = sAribH5Ureg;
		max = AribH5UregMax;
	}
	let index = parseInt(key.substr(4), 10);
	if (0 <= index && max > index) {
		if (IsStringType(value)) {
			//if (512 < value.length) {//FIXME: XXX
			//	if (debugOn) console.log("FilterReg: overflow, length=" + value.length +", @"+location.href);
			//	return null;//throw new QuotaExceededError();
			//}
			reg[index] = value;
		} else {
			value = reg[index];
			if (! IsStringType(value)) {
				value = "";
			}
		}
	//} else {
	//	throw new QuotaExceededError();
	}
	return value;
}
function FilterCommon(key, value) {
	let index = parseInt(key.substring(7), 10);
	if (0 <= index && cAribH5LSItemMax > index) {
		if (IsStringType(value)) {
			//if ((128 * 1024 / cAribH5LSItemMax) < value.length) {//FIXME: XXX
			//	if (debugOn) console.log("FilterCommon: overflow, length=" + value.length +", @"+location.href);
			//	return null;//throw new QuotaExceededError();
			//}
			let result = DoAribH5Requset(Request_WriteNvram, key + "/" + value);
			CheckIfThrowAribH5Error(result);
////////////////////////////////////////////FIXME: XXX
//sAribH5CommonArray[index] = value;
////////////////////////////////////////////FIXME: XXX
		} else {
////////////////////////////////////////////FIXME: XXX
//value = sAribH5CommonArray[index];
////////////////////////////////////////////FIXME: XXX
			value = DoAribH5Requset(Request_ReadNvram, key);
		}
	//} else {
	//	throw new QuotaExceededError();
	}
	return value;
}
function FilterWlocal(key, value) {
	let index = parseInt(key.substring(7), 10);
	if (0 <= index && cAribH5LSItemMax > index) {
		if (IsStringType(value)) {
			//if ((512 * 1024 / cAribH5LSItemMax) < value.length) {//FIXME: XXX
			//	if (debugOn) console.log("FilterWlocal: overflow, length=" + value.length +", @"+location.href);
			//	return null;//throw new QuotaExceededError();
			//}
			let result = DoAribH5Requset(Request_WriteNvram, key + "/" + value);
			CheckIfThrowAribH5Error(result);
////////////////////////////////////////////FIXME: XXX
//sAribH5WlocalArray[index] = value;
////////////////////////////////////////////FIXME: XXX
		} else {
////////////////////////////////////////////FIXME: XXX
//value = sAribH5WlocalArray[index];
////////////////////////////////////////////FIXME: XXX
			value = DoAribH5Requset(Request_ReadNvram, key);
		}
	//} else {
	//	throw new QuotaExceededError();
	}
	return value;
}
function FilterLocal(key, value) {
	let index = parseInt(key.substring(6), 10);
	if (0 <= index && cAribH5LSItemMax > index) {
		if (IsStringType(value)) {
			//if ((1024 * 1024 / cAribH5LSItemMax) < value.length) {//FIXME: XXX
			//	if (debugOn) console.log("FilterLocal: overflow, length=" + value.length +", @"+location.href);
			//	return null;//throw new QuotaExceededError();
			//}
			let result = DoAribH5Requset(Request_WriteNvram, key + "/" + value);
			CheckIfThrowAribH5Error(result);
////////////////////////////////////////////FIXME: XXX
//sAribH5LocalArray[index] = value;
////////////////////////////////////////////FIXME: XXX
		} else {
////////////////////////////////////////////FIXME: XXX
//value = sAribH5LocalArray[index];
////////////////////////////////////////////FIXME: XXX
			value = DoAribH5Requset(Request_ReadNvram, key);
		}
	//} else {
	//	throw new QuotaExceededError();
	}
	return value;
}
function FilterPrefecture(key, value) {
	if (IsStringType(value)) {
		return null;//ThrowAribH5Error(MISC_ERR);
	}
	return DoAribH5Requset(Request_ReadNvram, key);
}
function FilterRegionCode(key, value) {
	if (IsStringType(value)) {
		return null;//ThrowAribH5Error(MISC_ERR);
	}
	return DoAribH5Requset(Request_ReadNvram, key);
}
function FilterZipCode(key, value) {
	if (IsStringType(value)) {
		if (7 === value.length && (/^[0-9]+$/.test(value))) {
			let result = DoAribH5Requset(Request_WriteNvram, key + "/" + value);
			CheckIfThrowAribH5Error(result);
////////////////////////////////////////////FIXME: XXX
//sAribH5ZipCode = value;
////////////////////////////////////////////FIXME: XXX
		} else {
			ThrowAribH5Error(INVALID_PARAM_ERR);
		}
	} else {
////////////////////////////////////////////FIXME: XXX
//value = sAribH5ZipCode;
////////////////////////////////////////////FIXME: XXX
		value = DoAribH5Requset(Request_ReadNvram, key);
	}
	return value;
}
function FilterAllKey(key, value) {
	if (key.startsWith(cAribH5GregKey) ||
		key.startsWith(cAribH5UregKey)) {
		return FilterReg(key, value);
	}
	if (key.startsWith(cAribH5CommonKey)) {
		return FilterCommon(key, value);
	}
	if (key.startsWith(cAribH5WlocalKey)) {
		return FilterWlocal(key, value);
	}
	if (key.startsWith(cAribH5LocalKey)) {
		return FilterLocal(key, value);
	}
	if (key.startsWith(cAribH5PrefectureKey) &&
		(! IsStringType(value))) {
		return FilterPrefecture(key, value);
	}
	if (key.startsWith(cAribH5RegioncodeKey) &&
		(! IsStringType(value))) {
		return FilterRegionCode(key, value);
	}
	if (key.startsWith(cAribH5ZipcodeKey)) {
		return FilterZipCode(key, value);
	}
	if (debugOn) console.log("FilterAllKey: key=" + key +", @"+location.href);
	if (key.startsWith(cAribH5KeyPrefix)) {//FIXME: XXX
		return DoAribH5Requset(Request_ReadNvram, cAribH5KeyPrefix);
	}
	return null;
}
function FilterRemoveKey(key) {
	if (key.startsWith(cAribH5GregKey) ||
		key.startsWith(cAribH5UregKey)) {
		return null;//ThrowAribH5Error(MISC_ERR);
	}
	if (key.startsWith(cAribH5CommonKey)) {
		return null;//ThrowAribH5Error(MISC_ERR);
	}
	if (key.startsWith(cAribH5WlocalKey)) {
		return FilterWlocal(key, "");//FIXME: XXX
	}
	if (key.startsWith(cAribH5LocalKey)) {
		return FilterLocal(key, "");//FIXME: XXX
	}
	if (key.startsWith(cAribH5PrefectureKey)) {
		return null;//ThrowAribH5Error(MISC_ERR);
	}
	if (key.startsWith(cAribH5RegioncodeKey)) {
		return null;//ThrowAribH5Error(MISC_ERR);
	}
	if (key.startsWith(cAribH5ZipcodeKey)) {
		return null;//ThrowAribH5Error(MISC_ERR);
	}
	if (debugOn) console.log("FilterRemoveKey: key=" + key +", @"+location.href);
	if (key.startsWith(cAribH5KeyPrefix)) {//FIXME: XXX
		DoAribH5Requset(Request_WriteNvram, cAribH5KeyPrefix + "/");
	}
	return null;
}

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define CurrentEventInformation" +", @"+location.href);
let /*CurrentEventInformation */sCachedPFEvent = null;
let /*SendPFTimeout */sSendPFTimeouts = [];
let /*EventIDListener */sEIdListeners = [];
function CachingPFEvent(/*Boolean */update) {
	if ((! update) &&
		sCachedPFEvent && IsNonNull(sCachedPFEvent["eid"]) &&
		IsNonNull(sCachedPFEvent["stm"]) && IsNonNull(sCachedPFEvent["dur"])) {//TODO
		let now = Date.now();
		let start = sCachedPFEvent["stm"].getTime();
		if (start <= now && now < (start + sCachedPFEvent["dur"])) {
			if (debugOn) console.log("CachingPFEvent: skip" +", @"+location.href);
			return;
		}
	}
	let jsonPF = DoAribH5Requset(Request_PFEvent, "get:");
	if (debugOn) console.log("CachingPFEvent: jsonPF=" + jsonPF +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
	let pf = JSON.parse(jsonPF);
//	if (debugOn) console.log("CachingPFEvent: pf=" + JSON.stringify(pf) +", @"+location.href);
	if (0 > pf["eid"]) {
		pf["ewr"] = (! update);//TODO
		pf["eid"] = null;
		pf["stm"] = null;
		pf["dur"] = null;
		pf["ca"] = null;
		pf["nm"] = null;
		pf["des"] = null;
	//} else {
	//	pf["ewr"] = false;//TODO
	}
	if (0 > pf["feid"]) {
		pf["feid"] = null;
		pf["fstm"] = null;
		pf["fdur"] = null;
		pf["fca"] = null;
		pf["fnm"] = null;
		pf["fdes"] = null;
	}
	if (cAppTypeAribH5 === cCurrentAppType) {
		if (IsNonNull(pf["ca"])) {
			/*Boolean */pf["ca"] = (0 !== pf["ca"]);
		}
		if (IsNonNull(pf["fca"])) {
			/*Boolean */pf["fca"] = (0 !== pf["fca"]);
		}
	}
	if (IsNonNull(pf["stm"])) {
		if (0 < pf["stm"]) {
			/*Date */pf["stm"] =
				new Date((pf["stm"] - JST_TZO_SEC) * 1000);
		} else {
			pf["stm"] = null;//TODO
		}
	}
	if (IsNonNull(pf["dur"])) {
		if (0 < pf["dur"]) {
			pf["dur"] *= 1000;
		} else {
			pf["dur"] = null;//TODO
		}
	}
	if (IsNonNull(pf["fstm"])) {
		if (0 < pf["fstm"]) {
			/*Date */pf["fstm"] =
				new Date((pf["fstm"] - JST_TZO_SEC) * 1000);
		} else {
			pf["fstm"] = null;//TODO
		}
	}
	if (IsNonNull(pf["fdur"])) {
		if (0 < pf["fdur"]) {
			pf["fdur"] *= 1000;
		} else {
			pf["fdur"] = null;//TODO
		}
	}
	sCachedPFEvent = pf;
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @JSON.parse(jsonPF)" +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	return;//throw e;
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
}
function SendPFEvent(index, retry) {
	if (IsNull(sCachedPFEvent) ||
		(IsNull(sCachedPFEvent["eid"]) && sCachedPFEvent["ewr"])) {//TODO
		if (retry) {
			if (debugOn) console.log("SendPFEvent: timeout begin" +", @"+location.href);
			sSendPFTimeouts[index]["t"] =
				window.setTimeout(SendPFEvent, 3000, index, false);
			return;
		}
	}
	let callback = sSendPFTimeouts[index]["c"];
	if (0 < sSendPFTimeouts[index]["t"]) {
		if (debugOn) console.log("SendPFEvent: timeout clear" +", @"+location.href);
		clearTimeout(sSendPFTimeouts[index]["t"]);
	}
	sSendPFTimeouts[index] = null;
	let pf = {
		/*Number */"original_network_id" : sCachedPFEvent["nid"],
		/*Number */"service_id"          : sCachedPFEvent["sid"],
		/*Number */"event_id"            : sCachedPFEvent["eid"],
		/*Date */"start_time"            : sCachedPFEvent["stm"],
		/*Number */"duration"            : sCachedPFEvent["dur"],
		/*String */"name"                : sCachedPFEvent["nm"],
		/*String */"desc"                : sCachedPFEvent["des"],
		/*Number */"f_event_id"          : sCachedPFEvent["feid"],
		/*Date */"f_start_time"          : sCachedPFEvent["fstm"],
		/*Number */"f_duration"          : sCachedPFEvent["fdur"],
		/*String */"f_name"              : sCachedPFEvent["fnm"],
		/*String */"f_desc"              : sCachedPFEvent["fdes"]
	};
	if (cAppTypeAribH5 === cCurrentAppType) {
		/*Number */pf["tlv_stream_id"] = sCachedPFEvent["tlvid"];
		/*Boolean */pf["free_ca_mode"] = sCachedPFEvent["ca"];
		/*Boolean */pf["f_free_ca_mode"] = sCachedPFEvent["fca"];
	} else {
		/*Number */pf["transport_stream_id"] = sCachedPFEvent["tsid"];
	}
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
//	if (debugOn) console.log("SendPFEvent: callback=" + callback +", @"+location.href);
	if (debugOn) console.log("SendPFEvent: pf=" + JSON.stringify(pf) +", @"+location.href);
	callback(pf);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @SendPFEvent" +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	if (debugOn) console.log(e.stack +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	return;//throw e;
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
}
function SendAllPFEvent() {
	for (let i = 0; i < sSendPFTimeouts.length; ++i) {
//		if (debugOn) console.log("SendAllPFEvent: timeout=" + i +", @"+location.href);
		if (IsNonNull(sSendPFTimeouts[i])) {
			SendPFEvent(i, false);
		}
	}
}
function NotifyEventID(idListener, retry) {
	if (IsNull(sCachedPFEvent) ||
		(IsNull(sCachedPFEvent["eid"]) && sCachedPFEvent["ewr"])) {//TODO
		if (retry) {
			if (debugOn) console.log("NotifyEventID: timeout begin" +", @"+location.href);
			idListener["t"] =
				window.setTimeout(NotifyEventID, 3000, idListener, false);
			return;
		}
		if (! (0 < idListener["t"])) {
			return;
		}
	}
	if (0 < idListener["t"]) {
		if (debugOn) console.log("NotifyEventID: timeout clear" +", @"+location.href);
		clearTimeout(idListener["t"]);
		idListener["t"] = 0;
	}
	let eid = sCachedPFEvent["eid"];
	if (eid === idListener["i"]) {//TODO
		if (debugOn) console.log("NotifyEventID: no change ?" +", @"+location.href);
//TODO		return;
	}
	idListener["i"] = eid;
	let eventId = {
		/*Number */"original_network_id" : sCachedPFEvent["nid"],
		/*Number */"service_id"          : sCachedPFEvent["sid"],
		/*Number */"event_id"            : eid
	};
	if (cAppTypeAribH5 === cCurrentAppType) {
		/*Number */eventId["tlv_stream_id"] = sCachedPFEvent["tlvid"];
	} else {
		/*Number */eventId["transport_stream_id"] = sCachedPFEvent["tsid"];
	}
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
	if (debugOn) console.log("NotifyEventID: eventId=" + idListener["i"] +", @"+location.href);
//	if (debugOn) console.log("NotifyEventID: listener=" + idListener["l"] +", @"+location.href);
	idListener["l"](eventId);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @NotifyEventID" +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	if (debugOn) console.log(e.stack +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	return;//throw e;
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
}
function NotifyAllEventID() {
	sEIdListeners.forEach(function (eil) {
		if (eil) {
			if (debugOn) console.log("NotifyAllEventID: eventId=" + eil["i"] +", @"+location.href);
//			if (debugOn) console.log("NotifyAllEventID: listener=" + eil["l"] +", @"+location.href);
			NotifyEventID(eil, false);
		}
	});
}

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define AITUpdateListener" +", @"+location.href);
let /*AITUpdateListener */sAituListeners = [];
function NotifyAITUpdate() {
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
	sAituListeners.forEach(function (aul) {
//		if (debugOn) console.log("NotifyAITUpdate: listener=" + aul);
		if (IsFunctionType(aul)) {
			if (debugOn) console.log("NotifyAITUpdate: ait=" +
				sApplicationInformationTable.getApplications());
			aul(sApplicationInformationTable);
		}
	});
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @NotifyAITUpdate" +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	if (debugOn) console.log(e.stack +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	return;//throw e;
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
}

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define CacheEventListener" +", @"+location.href);
let /*CacheEventListener&Strings */sCeListenerPaths = [];
let /*CacheEventListener&Strings */sStoreCeListenerPaths = [];
function CompareCEListenerPaths(lp, path, listener) {
	if (IsNull(lp)) {//skip
//		if (debugOn) console.log("CompareCEListenerPaths: lp=null" +", @"+location.href);
		return false;
	}
//	if (debugOn) console.log("CompareCEListenerPaths: lp=" + JSON.stringify(lp) +", @"+location.href);
	if (path !== lp["p"]) {//exactmatch
//		if (debugOn) console.log("CompareCEListenerPaths: lp.path=" + lp["p"] +", @"+location.href);
//		if (debugOn) console.log("CompareCEListenerPaths: path=" + path +", @"+location.href);
		return false;
	}
	if (listener !== lp["l"] &&//exactmatch
		(! IsUndefinedType(listener))) {//wildcard
//		if (debugOn) console.log("CompareCEListenerPaths: lp.listener=" + lp["l"] +", @"+location.href);
//		if (debugOn) console.log("CompareCEListenerPaths: listener=" + listener +", @"+location.href);
		return false;
	}
//	if (debugOn) console.log("CompareCEListenerPaths: match" +", @"+location.href);
	return true;
}
function NotifyCacheEvent(strCE) {
	if (debugOn) console.log("NotifyCacheEvent: strCE=" + strCE +", @"+location.href);
	let event;
	if (strCE.startsWith("U:")) {
		event = "updated";
	} else if (strCE.startsWith("D:")) {
		event = "deleted";
	} else if (strCE.startsWith("F:")) {
		event = "store_finished";
	} else if (strCE.startsWith("f:")) {
		event = "store_failed";
	} else {
		if (debugOn) console.log("NotifyCacheEvent: event ?" +", @"+location.href);
		return;
	}
	let path = strCE.substring(2);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
	sCeListenerPaths.forEach(function CEListenerPathsEach(lp, index) {
		if (IsNull(lp)) {//skip
//			if (debugOn) console.log("NotifyCacheEvent: lp=null" +", @"+location.href);
			return;
		}
//		if (debugOn) console.log("NotifyCacheEvent: lp=" + JSON.stringify(lp) +", @"+location.href);
		if (! lp["p"].endsWith(path)) {//exactmatch
//			if (debugOn) console.log("NotifyCacheEvent: path ?" +", @"+location.href);
			return;
		}
		if (debugOn) console.log("NotifyCacheEvent: send " + lp["p"] +", @"+location.href);
		lp["l"](lp["p"], event);
	});
	if (! event.startsWith("store_")) {
		return;
	}
	sStoreCeListenerPaths.forEach(function StoreCEListenerPathsEach(lp, index) {
		if (IsNull(lp)) {//skip
//			if (debugOn) console.log("NotifyCacheEvent: store.lp=null" +", @"+location.href);
			return;
		}
//		if (debugOn) console.log("NotifyCacheEvent: store.lp=" + JSON.stringify(lp) +", @"+location.href);
		if (! lp["p"].endsWith(path)) {//exactmatch
//			if (debugOn) console.log("NotifyCacheEvent: store.path ?" +", @"+location.href);
			return;
		}
		if (debugOn) console.log("NotifyCacheEvent: store.send " + lp["p"] +", @"+location.href);
		lp["l"](lp["p"], event);
	});
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @NotifyCacheEvent" +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	if (debugOn) console.log(e.stack +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	return;//throw e;
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
}

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define GeneralEventMessageListener" +", @"+location.href);
const cGemListenerParamMax = 16;
let sGemListenerParamSize = 0;
let /*GeneralEventMessageListenerParams */sGemListenerParams = [];
function CompareGEMLPs(lp, listener, param) {
	if (IsNull(lp)) {//skip
//		if (debugOn) console.log("CompareGEMLPs: lp=null" +", @"+location.href);
		return false;
	}
//	if (debugOn) console.log("CompareGEMLPs: lp=" + JSON.stringify(lp) +", @"+location.href);
	if (listener !== lp["l"] &&//exactmatch
		(! IsUndefinedType(listener))) {//wildcard
//		if (debugOn) console.log("CompareGEMLPs: lp.listener=" + lp["l"] +", @"+location.href);
//		if (debugOn) console.log("CompareGEMLPs: listener=" + listener +", @"+location.href);
		return false;
	}
	if (cAppTypeAribH5 === cCurrentAppType) {
		if (param["source"]["event_message_tag"] !== lp["p"]["t"]) {//exactmatch
//			if (debugOn) console.log("CompareGEMLPs: lp.event_message_tag=" + lp["p"]["t"] +", @"+location.href);
//			if (debugOn) console.log("CompareGEMLPs: event_message_tag=" + param["source"]["event_message_tag"] +", @"+location.href);
			return false;
		}
	} else {
		if (param["es_ref"]["component_tag"] !== lp["p"]["t"]) {//exactmatch
//			if (debugOn) console.log("CompareGEMLPs: lp.component_tag=" + lp["p"]["t"] +", @"+location.href);
//			if (debugOn) console.log("CompareGEMLPs: component_tag=" + param["es_ref"]["component_tag"] +", @"+location.href);
			return false;
		}
	}
	if (param["message_group_id"] !== lp["p"]["g"] &&//exactmatch
		(! IsUndefinedType(param["message_group_id"]))) {//wildcard
//		if (debugOn) console.log("CompareGEMLPs: lp.message_group_id=" + lp["p"]["g"] +", @"+location.href);
//		if (debugOn) console.log("CompareGEMLPs: message_group_id=" + param["message_group_id"] +", @"+location.href);
		return false;
	}
	if (param["message_id"] !== lp["p"]["i"] &&//exactmatch
		(! IsUndefinedType(param["message_id"]))) {//wildcard
//		if (debugOn) console.log("CompareGEMLPs: lp.message_id=" + lp["p"]["i"] +", @"+location.href);
//		if (debugOn) console.log("CompareGEMLPs: message_id=" + param["message_id"] +", @"+location.href);
		return false;
	}
	if (param["message_version"] !== lp["p"]["v"] &&//exactmatch
		(! IsUndefinedType(param["message_version"]))) {//wildcard
//		if (debugOn) console.log("CompareGEMLPs: lp.message_version=" + lp["p"]["v"] +", @"+location.href);
//		if (debugOn) console.log("CompareGEMLPs: message_version=" + param["message_version"] +", @"+location.href);
		return false;
	}
//	if (debugOn) console.log("CompareGEMLPs: match" +", @"+location.href);
	return true;
}
function NotifyGEMessage(jsonGE) {
	if (debugOn) console.log("NotifyGEMessage: jsonGE=" + jsonGE +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
	let ge = JSON.parse(jsonGE);
	if (debugOn) if (! (ge["t"] && ge["g"] && ge["i"] && ge["v"])) ThrowAribH5Error(MISC_ERR);
	sGemListenerParams.forEach(function GEMListenerParamsEach(lp, index) {
		if (IsNull(lp)) {//skip
//			if (debugOn) console.log("NotifyGEMessage: lp=null" +", @"+location.href);
			return;
		}
//		if (debugOn) console.log("NotifyGEMessage: lp=" + JSON.stringify(lp) +", @"+location.href);
		if (ge["t"] !== lp["p"]["t"]) {//exactmatch
//			if (debugOn) console.log("NotifyGEMessage: event_message_tag ?" +", @"+location.href);
			return;
		}
		if (lp["p"]["g"] &&//wildcard
			ge["g"] !== lp["p"]["g"]) {//exactmatch
//			if (debugOn) console.log("NotifyGEMessage: message_group_id ?" +", @"+location.href);
			return;
		}
		if (lp["p"]["i"] &&//wildcard
			ge["i"] !== lp["p"]["i"]) {//exactmatch
//			if (debugOn) console.log("NotifyGEMessage: message_id ?" +", @"+location.href);
			return;
		}
		if (lp["p"]["v"] &&//wildcard
			ge["v"] !== lp["p"]["v"]) {//exactmatch
//			if (debugOn) console.log("NotifyGEMessage: message_version ?" +", @"+location.href);
			return;
		}
		if (ge["v"] === lp["v"]) {//exactmatch
//			if (debugOn) console.log("NotifyGEMessage: old ?" +", @"+location.href);
			return;
		}
		sGemListenerParams[index]["v"] = ge["v"];
		if (debugOn) console.log("NotifyGEMessage: send " + ge["t"] + "," + ge["g"] + "," + ge["i"] + "," + ge["v"] + "," + ge["p"] +", @"+location.href);
		let gem = {
			"source" : {
				/*Number */"event_message_tag" : ge["t"]
			},
			/*Number */"message_group_id"  : ge["g"],
			/*Number */"message_id"        : ge["i"],
			/*Number */"message_version"   : ge["v"],
			/*String */"private_data_byte" : ge["p"]
		};
		lp["l"](gem);
	});
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @NotifyGEMessage" +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	if (debugOn) console.log(e.stack +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	return;//throw e;
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
}

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define CaptionListener" +", @"+location.href);
let /*CaptionUrl&Listener */sCaptionUrlListeners = [];
function NotifyCaptionData(url, jsonCap) {
//	if (debugOn) console.log("NotifyCaptionData: url=" + url +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
	sCaptionUrlListeners.forEach(function CaptionUrlListenersEach(ul) {
//		if (debugOn) console.log("NotifyCaptionData: captionUrl=" + ul["u"] +", @"+location.href);
//		if (debugOn) console.log("NotifyCaptionData: captionListener=" + ul["l"] +", @"+location.href);
		if (ul && url === ul["u"] && IsFunctionType(ul["l"])) {
//			if (debugOn) console.log("NotifyCaptionData: jsonCap=\n" + jsonCap +", @"+location.href);
			ul["l"](jsonCap);
		}
	});
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @NotifyCaptionData" +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	if (debugOn) console.log(e.stack +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	return;//throw e;
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
}

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define Cas Timeouts" +", @"+location.href);
function GetAutoDisplayMessageStatus(CA_system_ID, callback, retry) {
	let result = DoAribH5Requset(Request_LinkCas,
		"getADMS:" + CA_system_ID);//TODO
	if (debugOn) console.log("GetAutoDisplayMessageStatus: result=" + result +", @"+location.href);
	CheckIfThrowAribH5Error(result);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
	let admsr = JSON.parse(result);
	let status_code = admsr["sc"];
	if (debugOn) console.log("GetAutoDisplayMessageStatus: status_code=" + status_code +", @"+location.href);
	if (1 === status_code) {//TODO
		if (0 < retry) {
			--retry;
			if (debugOn) console.log("GetAutoDisplayMessageStatus: retry " + retry +", @"+location.href);
			window.setTimeout(GetAutoDisplayMessageStatus,
				50, CA_system_ID, callback, retry);
			return;
		}
	}
	callback(/*Number */status_code,
		0 === status_code ? {
			/*Boolean */"validity"           : (0 !== admsr["val"]),
			/*Boolean */"visibility"         : (0 !== admsr["vis"]),
			/*Number */"displaying_position" : admsr["dp"],
			/*Number */"character_size"      : admsr["cs"],
			/*Number */"fixed_message_ID"    : admsr["fmi"],
		} : {});
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @GetAutoDisplayMessageStatus" +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	if (debugOn) console.log(e.stack +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	return;//throw e;
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
}
function UpdateAutoDisplayMessage(CA_system_ID, callback, retry) {
	let result = DoAribH5Requset(Request_LinkCas,
		"updateADM:" + CA_system_ID);//TODO
	if (debugOn) console.log("UpdateAutoDisplayMessage: result=" + result +", @"+location.href);
	CheckIfThrowAribH5Error(result);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
	let admir = JSON.parse(result);
	let status_code = admir["sc"];
	if (debugOn) console.log("UpdateAutoDisplayMessage: status_code=" + status_code +", @"+location.href);
	if (1 === status_code) {//TODO
		if (0 < retry) {
			--retry;
			if (debugOn) console.log("UpdateAutoDisplayMessage: retry " + retry +", @"+location.href);
			window.setTimeout(UpdateAutoDisplayMessage,
				50, CA_system_ID, callback, retry);
			return;
		}
	}
	callback(/*Number */status_code,
		0 === status_code ? {
			/*Number */"ret_code"                     : admir["rc"],
			/*Date */"limit_date"                     :
				new Date((admir["ld"] - JST_TZO_SEC) * 1000),
			/*Number */"fixed_message_ID"             : admir["fmi"],
			/*Number */"extra_message_format_version" : admir["emfv"],
			/*String */"extra_message_code"           : admir["emc"],
			/*Number */"displaying_control"           : admir["dc"],
		} : {});
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @UpdateAutoDisplayMessage" +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	if (debugOn) console.log(e.stack +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	return;//throw e;
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
}

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define navigator.bmlCompat" +", @"+location.href);
/**@noinline*/const cNvramsPrefix = "nvrams://";
__odp__(navigator, "bmlCompat",
		new (/**@constructor*/function BmlCompatCtor() {
	let BMLCompatObject = __oc__(null);
	this.get = function () {
//		if (debugOn) console.log("bmlCompat.get: " +", @"+location.href);
		return BMLCompatObject;
	};
	//this.enumerable = true;
	/*if (debugOn) */__odp__(BMLCompatObject, cToString, {
		value: function () {
			return cObjStringB + "BMLCompatObject" + cObjStringE;
		},
		//enumerable: true,
	});
	__odp__(BMLCompatObject, "browserPseudo",
			new (/**@constructor*/function BrowserPseudoCtor() {
		let BMLBrowserPseudoObject = __oc__(null);
		this.get = function () {
//			if (debugOn) console.log("bmlCompat.browserPseudo.get: " +", @"+location.href);
			return BMLBrowserPseudoObject;
		};
		//this.enumerable = true;
		/*if (debugOn) */__odp__(BMLBrowserPseudoObject, cToString, {
			value: function () {
				return cObjStringB + "BMLBrowserPseudoObject" + cObjStringE;
			},
			//enumerable: true,
		});
		__odp__(BMLBrowserPseudoObject, "readPersistentArray", {//XXX -> common for Hbbtv(ISDB-HTML) and Uhdtv(ARIB-HTML)
			value: function readPersistentArray(
					/*String */filename, /*String */structure) {
//				if (debugOn) console.log("readPersistentArray: filename=" + filename +", @"+location.href);
				if (debugOn) console.log("readPersistentArray: structure=" + structure + ", " + filename +", @"+location.href);
				CheckForPermissionBitmap(cPermissionBitmapStorage);
				if (filename.startsWith(cNvramsPrefix) &&
					"ok" !== DoAribH5Requset(Request_AccessNvram,
						"CHK|" + filename)) {
					if (debugOn) console.log("readPersistentArray: access denied" + ", " + filename +", @"+location.href);
					return null;//TODO
				}
				if (sAribH5Persistent[filename] &&
					structure === sAribH5Persistent[filename]["s"] &&
					/*IsStringType(sAribH5Persistent[filename]["j"]) &&*/
					sAribH5Persistent[filename]["d"]/* &&
					0 < sAribH5Persistent[filename]["b"]*/) {
					if (debugOn) console.log("readPersistentArray: data=" + sAribH5Persistent[filename]["d"] + ", " + filename +", @"+location.href);
					return sAribH5Persistent[filename]["d"];
				}
				let jsonData = DoAribH5Requset(Request_ReadNvram,
					filename + "|" + structure);
				if (debugOn) console.log("readPersistentArray: jsonData=" + jsonData + "," + jsonData.length + ", " + filename +", @"+location.href);
				//CheckIfThrowAribH5Error(jsonData);
				if (2 < jsonData.length && jsonData.startsWith("[")) {
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
					let data = JSON.parse(jsonData);
					if (debugOn) console.log("readPersistentArray: data=" + data + ", " + filename +", @"+location.href);
					if (! sAribH5Persistent[filename]) {
						sAribH5Persistent[filename] = __oc__(null);
					}
					if (structure !== sAribH5Persistent[filename]["s"]) {
						sAribH5Persistent[filename]["s"] = structure;
						sAribH5Persistent[filename]["j"] = jsonData;
					}
					sAribH5Persistent[filename]["d"] = data;
					return data;
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @JSON.parse(jsonData)" +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	return null;//throw e;
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
				}
				if (debugOn) console.log("readPersistentArray: null data" + ", " + filename +", @"+location.href);
				return null;
			},
			//enumerable: true,
		});
		__odp__(BMLBrowserPseudoObject, "writePersistentArray", {//XXX -> common for Hbbtv(ISDB-HTML) and Uhdtv(ARIB-HTML)
			value: function writePersistentArray(
					/*String */filename, /*String */structure, /*Array */data) {
//				if (debugOn) console.log("writePersistentArray: filename=" + filename +", @"+location.href);
				if (debugOn) console.log("writePersistentArray: structure=" + structure + ", " + filename +", @"+location.href);
				if (debugOn) console.log("writePersistentArray: data=" + data + ", " + filename +", @"+location.href);
				CheckForPermissionBitmap(cPermissionBitmapStorage);
				let jsonData = JSON.stringify(data);
				if (debugOn) console.log("writePersistentArray: jsonData=" + jsonData + ", " + filename +", @"+location.href);
				if (filename.startsWith(cNvramsPrefix) &&
					"ok" !== DoAribH5Requset(Request_AccessNvram,
						"CHK|" + filename)) {
					if (debugOn) console.log("readPersistentArray: access denied" + ", " + filename +", @"+location.href);
					return NaN;//TODO
				}
				if (sAribH5Persistent[filename] &&
					structure === sAribH5Persistent[filename]["s"] &&
					jsonData === sAribH5Persistent[filename]["j"] &&
					/*sAribH5Persistent[filename]["d"] &&*/
					0 < sAribH5Persistent[filename]["b"]) {
					if (debugOn) console.log("writePersistentArray: bytes=" + sAribH5Persistent[filename]["b"] + ", " + filename +", @"+location.href);
					return sAribH5Persistent[filename]["b"];
				}
				let bytes = DoAribH5Requset(Request_WriteNvram,
					filename + "|" + structure + "/" + jsonData);
				if (debugOn) console.log("writePersistentArray: bytes=" + bytes + ", " + filename +", @"+location.href);
				//CheckIfThrowAribH5Error(bytes);
				bytes = parseInt(bytes, 10);
				if (0 != bytes) {
					if (! sAribH5Persistent[filename]) {
						sAribH5Persistent[filename] = __oc__(null);
					}
					sAribH5Persistent[filename]["s"] = structure;
					sAribH5Persistent[filename]["j"] = jsonData;
					if (0 < bytes) {
						sAribH5Persistent[filename]["d"] = data;
					} else {//code point of string replaced by geta-mark, must read again ?
						sAribH5Persistent[filename]["d"] = null;
						bytes = (- bytes);
					}
					sAribH5Persistent[filename]["b"] = bytes;
					return bytes;
				}
				if (sAribH5Persistent[filename]) {
					sAribH5Persistent[filename]["d"] = null;
				}
				return NaN;
			},
			//enumerable: true,
		});
		__odp__(BMLBrowserPseudoObject, "Greg", {//XXX -> only for Hbbtv(ISDB-HTML)
			value: sAribH5Greg,
			//enumerable: true,
		});
	})());
})());

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define navigator.receiverDevice" +", @"+location.href);
__odp__(navigator, "receiverDevice",
		new (/**@constructor*/function ReceiverDeviceCtor() {
	let ReceiverDevice = __oc__(null);
	this.get = function () {
//		if (debugOn) console.log("receiverDevice.get: " +", @"+location.href);
		return ReceiverDevice;
	};
	//this.enumerable = true;
	/*if (debugOn) */__odp__(ReceiverDevice, cToString, {
		value: function () {
			return cObjStringB + "ReceiverDevice" + cObjStringE;
		},
		//enumerable: true,
	});
	function GetIdsOfServiceReference(service_ref) {
		if (service_ref) {
			let net_id = service_ref["original_network_id"];
			if (IsUndefinedType(net_id)) {
				net_id = -1;
			} else {
				net_id = GetValueOfParamForNumberType(net_id, -1, 0xFFFF);
			}
			let ts_id = service_ref["tlv_stream_id"];
			if (IsUndefinedType(ts_id)) {
				ts_id = service_ref["transport_stream_id"];
			}
			if (IsUndefinedType(ts_id)) {
				ts_id = -1;
			} else {
				ts_id = GetValueOfParamForNumberType(ts_id, -1, 0xFFFF);
			}
			let svc_id = service_ref["service_id"];
			if (IsUndefinedType(svc_id)) {
				svc_id = -1;
			} else {
				svc_id = GetValueOfParamForNumberType(svc_id, -1, 0xFFFF);
			}
			return {
				/*Number */"n" : net_id,
				/*Number */"t" : ts_id,
				/*Number */"s" : svc_id
			};
		}
		ThrowAribH5Error(INVALID_PARAM_ERR);
	}
	function GetIdsOfEventReference(event_ref, startTime) {
		let eventIds = GetIdsOfServiceReference(event_ref);
		let evt_id = event_ref["event_id"];
		evt_id = GetValueOfParamForNumberType(evt_id, 0, 0xFFFF);
		/*Number */eventIds["e"] = evt_id;
		if (IsUndefinedType(startTime)) {
			return eventIds;
		}
		if (! IsDateObject(startTime)) {
			ThrowAribH5Error(INVALID_PARAM_ERR);
		}
		/*Number */eventIds["st"] =
			Math.floor(startTime.getTime() / 1000) + JST_TZO_SEC;
		return eventIds;
	}
	__odp__(ReceiverDevice, "isScheduledToTune", {
		value: function isScheduledToTune(
				/*ISDBResourceReference */event_ref, /*[Date] */startTime) {
			if (debugOn) console.log("isScheduledToTune: event_ref=" +
				(event_ref ? JSON.stringify(event_ref) : event_ref) +", @"+location.href);
			if (debugOn) console.log("isScheduledToTune: startTime=" + startTime +", @"+location.href);
			CheckForPermissionBitmap(1 << 4);
			let eventIds = GetIdsOfEventReference(event_ref, startTime);
			let result = DoAribH5Requset(Request_Schedule,
				"istune:" + JSON.stringify(eventIds));
			CheckIfThrowAribH5Error(result);
			return "on" === result;
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "scheduleToTune", {
		value: function scheduleToTune(
				/*ISDBResourceReference */event_ref, /*[Date] */startTime) {
			if (debugOn) console.log("scheduleToTune: event_ref=" +
				(event_ref ? JSON.stringify(event_ref) : event_ref) +", @"+location.href);
			if (debugOn) console.log("scheduleToTune: startTime=" + startTime +", @"+location.href);
			CheckForPermissionBitmap(1 << 4);
			let eventIds = GetIdsOfEventReference(event_ref, startTime);
			let result = DoAribH5Requset(Request_Schedule,
				"tune:" + JSON.stringify(eventIds));
			CheckIfThrowAribH5Error(result);
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "unscheduleToTune", {
		value: function unscheduleToTune(
				/*ISDBResourceReference */event_ref) {
			if (debugOn) console.log("unscheduleToTune: event_ref=" +
				(event_ref ? JSON.stringify(event_ref) : event_ref) +", @"+location.href);
			CheckForPermissionBitmap(1 << 4);
			let eventIds = GetIdsOfEventReference(event_ref);
			let result = DoAribH5Requset(Request_Schedule,
				"untune:" + JSON.stringify(eventIds));
			CheckIfThrowAribH5Error(result);
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "isScheduledToRecord", {
		value: function isScheduledToRecord(
				/*ISDBResourceReference */event_ref, /*[Date] */startTime) {
			if (debugOn) console.log("isScheduledToRecord: event_ref=" +
				(event_ref ? JSON.stringify(event_ref) : event_ref) +", @"+location.href);
			if (debugOn) console.log("isScheduledToRecord: startTime=" + startTime +", @"+location.href);
			CheckForPermissionBitmap(1 << 4);
			let eventIds = GetIdsOfEventReference(event_ref, startTime);
			let result = DoAribH5Requset(Request_Schedule,
				"isrecord:" + JSON.stringify(eventIds));
			CheckIfThrowAribH5Error(result);
			return "on" === result;
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "scheduleToRecord", {
		value: function scheduleToRecord(
				/*ISDBResourceReference */event_ref, /*[Date] */startTime) {
			if (debugOn) console.log("scheduleToRecord: event_ref=" +
				(event_ref ? JSON.stringify(event_ref) : event_ref) +  +", @"+location.href);
			if (debugOn) console.log("scheduleToRecord: startTime=" + startTime +", @"+location.href);
			CheckForPermissionBitmap(1 << 4);
			let eventIds = GetIdsOfEventReference(event_ref, startTime);
			let result = DoAribH5Requset(Request_Schedule,
				"record:" + JSON.stringify(eventIds));
			CheckIfThrowAribH5Error(result);
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "unscheduleToRecord", {
		value: function unscheduleToRecord(/*ISDBResourceReference */event_ref) {
			if (debugOn) console.log("unscheduleToRecord: event_ref=" +
				(event_ref ? JSON.stringify(event_ref) : event_ref) +", @"+location.href);
			CheckForPermissionBitmap(1 << 4);
			let eventIds = GetIdsOfEventReference(event_ref);
			let result = DoAribH5Requset(Request_Schedule,
				"unrecord:" + JSON.stringify(eventIds));
			CheckIfThrowAribH5Error(result);
		},
		//enumerable: true,
	});
	function CheckValidIPv6Address(address) { 
		return /:/.test(address) && 8 > address.match(/:/g).length &&
			(/::/.test(address) ? (1 === address.match(/::/g).length &&
			/^::$|^(::)?([\da-f]{1,4}(:|::))*[\da-f]{1,4}(:|::)?$/i.test(address))
			: /^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i.test(address));
	}
	function CheckValidAddress(address) {
		CheckNonemptyParamForStringType(address);
		if (/^\d{1,3}(\.\d{1,3}){3}$/.test(address)) {//IPv4
			let ipArray = address.split(".");
			for (let ipNumber of ipArray) {
				if (255 < ipNumber) {
					ThrowAribH5Error(INVALID_PARAM_ERR);
				}
			}
			return 4;
		}
		if (CheckValidIPv6Address(address)) {//IPv6
			return 6;
		}
		return 0;
	}
	//function CheckValidFQDNorIP(fqdn_ip) {
	//	CheckNonemptyParamForStringType(fqdn_ip);
	//	//[host name].[domain].[tld]
	//	//192.168.0.1
	//	//fe80::
	//	//TODO
	//}
	__odp__(ReceiverDevice, "confirmIPNetwork", {
		value: function confirmIPNetwork(
				/*String */destination, /*Number */confirmType, /*[Number] */timeout) {
			if (debugOn) console.log("confirmIPNetwork: destination=" + destination +", @"+location.href);
			if (debugOn) console.log("confirmIPNetwork: confirmType=" + confirmType +", @"+location.href);
			if (debugOn) console.log("confirmIPNetwork: timeout=" + timeout +", @"+location.href);
			//CheckForPermissionBitmap(1 << 6);
			if (IsUndefinedType(timeout)) {
				timeout = 4000;
			} else {
				timeout = GetValueOfParamForNumberType(timeout, 0);
				if (0 === timeout) {//TODO
					return false;
				}
			}
			confirmType = GetValueOfParamForNumberType(confirmType, 0, 1);
			let confirmParam = {
				/*Number */"dl" : timeout
			};
			//CheckValidFQDNorIP(destination);
			if (0 === confirmType) {
				CheckNonemptyParamForStringType(destination);
				/*String */confirmParam["r"] = destination;
			} else {
				let destinationType = CheckValidAddress(destination);
				if (0 === destinationType) {
					destination = DoAribH5Requset(Request_ConfirmIP,
						JSON.stringify({
							/*Number */"dl" : timeout / 2,
							/*String */"r"  : destination
						}));
					if (debugOn) console.log("confirmIPNetwork: ip=" + destination +", @"+location.href);
					destinationType = CheckValidAddress(destination);
					if (0 === destinationType) {
						ThrowAribH5Error(INVALID_PARAM_ERR);
					}
				}
				/*String */confirmParam["p"] = destination;
				/*Number */confirmParam["t"] = destinationType;
			}
			let result = DoAribH5Requset(Request_ConfirmIP,
				JSON.stringify(confirmParam));
			if (debugOn) console.log("confirmIPNetwork: result=" + result +", @"+location.href);
			CheckIfThrowAribH5Error(result);
			return IsNonemptyString(result);
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "getDeviceIdentifier", {
		value: function getDeviceIdentifier(
				/*Number */type, /*DeviceIdentifierCallback */resultCallback) {
			if (debugOn) console.log("getDeviceIdentifier: type=" + type +", @"+location.href);
			if (debugOn) console.log("getDeviceIdentifier: resultCallback=" + typeof resultCallback +", @"+location.href);
			CheckForPermissionBitmap(1 << 7);
			type = GetValueOfParamForNumberType(type, 0, 0xFFFF);
			if (! IsFunctionType(resultCallback)) {
				ThrowAribH5Error(INVALID_PARAM_ERR);
			}
			let identifier = DoAribH5Requset(Request_GetDeviceId, type);
			if (debugOn) console.log("identifier=" + identifier +", @"+location.href);
			if (! IsNonemptyString(identifier)) {
				identifier = null;
			}
			resultCallback(identifier);
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "getSystemInformation", {
		value: function getSystemInformation(/*String[] */query) {
			if (debugOn) console.log("getSystemInformation: query=" + query +", @"+location.href);
			CheckForPermissionBitmap(1 << 5);
			if (IsNonNull(query)) {
				ThrowAribH5Error(INVALID_PARAM_ERR);
			}
			if (! sSystemInfo) {
				ThrowAribH5Error(MISC_ERR);
			}
			return {
				/*String */"makerid"        : sSystemInfo["i"],
				/*String */"browsername"    : sSystemInfo["n"],
				/*String */"browserversion" : sSystemInfo["v"],
				/*String */"modelname"      : sSystemInfo["m"],
				/*String */"baseurl"        : sSystemInfo["b"],
			};
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "tuneTo", {
		value: function tuneTo(
				/*ISDBResourceReference */service_ref,
				/*TuneToResultCallback */resultCallback, /*[TuneToOptions] */options) {
			if (debugOn) console.log("tuneTo: service_ref=" +
				(service_ref ? JSON.stringify(service_ref) : service_ref) +", @"+location.href);
			if (debugOn) console.log("tuneTo: resultCallback=" + typeof resultCallback +", @"+location.href);
			if (debugOn) console.log("tuneTo: options=" + (options ? JSON.stringify(options) : options) +", @"+location.href);
			CheckForPermissionBitmap(1 << 5);
			//not use params: resultCallback, options ?
			let serviceIds = GetIdsOfServiceReference(service_ref);
			let result = DoAribH5Requset(Request_TuneTo,
				JSON.stringify(serviceIds));
			if (IsStringType(result) &&
				result.startsWith(AribH5ErrorPrefix)) {
				DoAribH5Requset(Request_ReplaceApp, "{}");//TODO
				CheckIfThrowAribH5Error(result);
			}
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "getCurrentEventInformation", {
		value: function getCurrentEventInformation(
				/*CurrentEventInformationCallback */resultCallback) {
			if (debugOn) console.log("getCurrentEventInformation: resultCallback=" + typeof resultCallback +", @"+location.href);
			CheckForPermissionBitmap(1 << 10);
			if (IsFunctionType(resultCallback)) {
				let index = sSendPFTimeouts.findIndex(function (spt) {
					return IsNull(spt);
				});
				let spt = {
					/*Number */"t" : -1,
					"c" : resultCallback
				};
				if (0 > index) {
					index = sSendPFTimeouts.push(spt) - 1;
				} else {
					sSendPFTimeouts[index] = spt;
				}
				CachingPFEvent(false);
				SendPFEvent(index, true);
				return;
			}
			ThrowAribH5Error(INVALID_PARAM_ERR);
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "setURLForCompanionDevice", {
		value: function setURLForCompanionDevice(
				/*String */url, /*CompanionAppOpts */options) {
			if (debugOn) console.log("setURLForCompanionDevice: url=" + url +", @"+location.href);
			if (debugOn) console.log("setURLForCompanionDevice: options=" +
				(options ? JSON.stringify(options) : options) +", @"+location.href);
//CompanionAppOpts {
//	/*Boolean */auto_start
//	/*String */aap_title
//	/*String */app_desc
//}
			//TODO
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "clearURLForCompanionDevice", {
		value: function clearURLForCompanionDevice() {
			if (debugOn) console.log("clearURLForCompanionDevice: " +", @"+location.href);
			//TODO
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "getCompanionDeviceList", {
		value: function getCompanionDeviceList(
				/*CompanionDeviceListCallback */callback) {
			if (debugOn) console.log("getCompanionDeviceList: callback=" + typeof callback +", @"+location.href);
///////////////////////////////////////////////////////////////dummy for test
//if (IsFunctionType(callback)) {
//	//let devlist = ;
//	callback(/*DeviceArray */devlist);
//}
///////////////////////////////////////////////////////////////dummy for test
			//TODO
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "sendTextToCompanionDevice", {
		value: function sendTextToCompanionDevice(
				/*String */text, /*[Object] */devid) {
			if (debugOn) console.log("sendTextToCompanionDevice: text=" + text +", @"+location.href);
			if (debugOn) console.log("sendTextToCompanionDevice: devid=" +
				(devid ? JSON.stringify(devid) : devid) +", @"+location.href);
			//TODO
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "addCompanionDeviceTextMessageListener", {
		value: function addCompanionDeviceTextMessageListener(
				/*CompanionDeviceTextMessageListener */listener) {
			if (debugOn) console.log("addCompanionDeviceTextMessageListener: listener=" + typeof listener +", @"+location.href);
/////////////////////////////////////////////////////////////////dummy for test
//if (IsFunctionType(listener)) {
//	let text = ;
//	let devid = ;
//	listener(/*String */text, /*Object */devid);
//}
/////////////////////////////////////////////////////////////////dummy for test
			//TODO
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "removeCompanionDeviceTextMessageListener", {
		value: function removeCompanionDeviceTextMessageListener(
				/*[CompanionDeviceTextMessageListener] */listener) {
			if (debugOn) console.log("removeCompanionDeviceTextMessageListener: listener=" + listener +", @"+location.href);
			//TODO
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "isCommonEvent", {//XXX -> only for Hbbtv(ISDB-HTML)
		value: function isCommonEvent(/*ISDBResourceReference */service_ref) {
			if (debugOn) console.log("isCommonEvent: service_ref=" +
				(service_ref ? JSON.stringify(service_ref) : service_ref) +", @"+location.href);
			let serviceIds = GetIdsOfServiceReference(service_ref);
			return "1" === DoAribH5Requset(Request_IsCommonEvent,
				JSON.stringify(serviceIds));
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "getSTC", {//XXX -> only for Hbbtv(ISDB-HTML)
		value: function getSTC() {
			if (debugOn) console.log("getSTC: " +", @"+location.href);
///////////////////////////////////////////////////////////////dummy for test
return 0;
///////////////////////////////////////////////////////////////dummy for test
			//TODO
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "startPVRPlayback", {//XXX -> only for Hbbtv(ISDB-HTML)
		value: function startPVRPlayback(
				/*ISDBResourceReference */content_ref,
				/*Date */start_time, /*Number */duration) {
			if (debugOn) console.log("startPVRPlayback: content_ref=" +
				(content_ref ? JSON.stringify(content_ref) : content_ref) +", @"+location.href);
			if (debugOn) console.log("startPVRPlayback: start_time=" + start_time +", @"+location.href);
			if (debugOn) console.log("startPVRPlayback: duration=" + duration +", @"+location.href);
			if (! IsDateObject(start_time)) {
				ThrowAribH5Error(INVALID_PARAM_ERR);
			}
			duration = GetValueOfParamForNumberType(duration, 1000);
			//TODO
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "getRecordedContentInformation", {//XXX -> only for Hbbtv(ISDB-HTML)
		value: function getRecordedContentInformation(
				/*RecordedContentInformation */rec_content_info,
				/*RecordedContentInformationCallback */callback) {
			if (debugOn) console.log("getRecordedContentInformation: rec_content_info=" +
				(rec_content_info ? JSON.stringify(rec_content_info) : rec_content_info) +", @"+location.href);
			if (debugOn) console.log("getRecordedContentInformation: callback=" + typeof callback +", @"+location.href);
///////////////////////////////////////////////////////////////dummy for test
//if (IsFunctionType(callback)) {
//	//let info = ;
//	callback(/*RecordedContentInformation*/info);
//}
///////////////////////////////////////////////////////////////dummy for test
			//TODO
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "streamEvent",
			new (/**@constructor*/function StreamEventCtor() {
		let StreamEventTarget = __oc__(null);
		this.get = function () {
//			if (debugOn) console.log("receiverDevice.streamEvent.get: " +", @"+location.href);
			return StreamEventTarget;
		};
		//this.enumerable = true;
		/*if (debugOn) */__odp__(StreamEventTarget, cToString, {
			value: function () {
				return cObjStringB + "StreamEventTarget" + cObjStringE;
			},
			//enumerable: true,
		});
		__odp__(StreamEventTarget, "sourceIs", {
			value: function sourceIs(/*String */name) {
				if (debugOn) console.log("sourceIs: " + name +", @"+location.href);
				CheckForPermissionBitmap(1 << 5);
///////////////////////////////////////////////////////////////dummy for test
return true;
///////////////////////////////////////////////////////////////dummy for test
				//TODO
			},
			//enumerable: true,
		});
		function CheckGeneralEventMessageParam(param) {
			if (param) {
				if (cAppTypeAribH5 === cCurrentAppType) {
					if (param["source"] &&
						param["source"]["event_message_tag"]) {//XXX
						return;
					}
				} else {
					if (param["es_ref"] &&
						param["es_ref"]["component_tag"]) {//XXX
						return;
					}
				}
			}
			ThrowAribH5Error(INVALID_PARAM_ERR);
		}
		function CheckGeneralEventMessageParamListener(param, listener) {
			if (IsFunctionType(listener)) {
				CheckGeneralEventMessageParam(param);
				return;
			}
			ThrowAribH5Error(INVALID_PARAM_ERR);
		}
		__odp__(StreamEventTarget, "addGeneralEventMessageListener", {
			value: function addGeneralEventMessageListener(
					/*GeneralEventMessageListenerParams */param,
					/*GeneralEventMessageListener */listener) {
				if (debugOn) console.log("addGeneralEventMessageListener: param=" +
					(param ? JSON.stringify(param) : param) +", @"+location.href);
				if (debugOn) console.log("addGeneralEventMessageListener: listener=" + typeof listener +", @"+location.href);
				CheckForPermissionBitmap(1 << 5);
				CheckGeneralEventMessageParamListener(param, listener);
				if (sGemListenerParams.find(function (lp) {
					return CompareGEMLPs(lp, listener, param);
				})) {
					return;//ThrowAribH5Error(INVALID_PARAM_ERR);
				}
				if (cGemListenerParamMax <= sGemListenerParamSize) {
					ThrowAribH5Error(MISC_ERR);
				}
				++sGemListenerParamSize;
				let index = sGemListenerParams.findIndex(function (lp) {
					return IsNull(lp);
				});
				let listenerParam = {
					"p" : {
						/*Number */"g" : param["message_group_id"],
						/*Number */"i" : param["message_id"],
						/*Number */"v" : param["message_version"]
					},
					"l" : listener
				};
				if (cAppTypeAribH5 === cCurrentAppType) {
					/*Number */listenerParam["p"]["t"] = param["source"]["event_message_tag"];
				} else {
					/*Number */listenerParam["p"]["t"] = param["es_ref"]["component_tag"];
				}
				if (0 > index) {
					sGemListenerParams.push(listenerParam);
				} else {
					sGemListenerParams[index] = listenerParam;
				}
				let onGE = {
					/*Number */"t" : listenerParam["p"]["t"],
					/*Number */"g" : listenerParam["p"]["g"],
					/*Number */"i" : listenerParam["p"]["i"],
					/*Number */"v" : listenerParam["p"]["v"],
					/*Number */"o" : 1
				};
				DoAribH5Requset(Request_GeneralEvent, JSON.stringify(onGE));
				if (debugOn) sGemListenerParams.forEach(
					function (lp) {console.log((lp ? JSON.stringify(lp) : lp) +", @"+location.href);});
			},
			//enumerable: true,
		});
		__odp__(StreamEventTarget, "removeGeneralEventMessageListener", {
			value: function removeGeneralEventMessageListener(
					/*GeneralEventMessageListenerParams */param,
					/*[GeneralEventMessageListener] */listener) {
				if (debugOn) console.log("removeGeneralEventMessageListener: param=" +
					(param ? JSON.stringify(param) : param) +", @"+location.href);
				if (debugOn) console.log("removeGeneralEventMessageListener: listener=" + typeof listener +", @"+location.href);
				CheckForPermissionBitmap(1 << 5);
				if (! IsUndefinedType(listener)) {
					CheckGeneralEventMessageParamListener(param, listener);
					let index = sGemListenerParams.findIndex(function (lp) {
						return CompareGEMLPs(lp, listener, param);
					});
					if (0 > index) {
						return;//ThrowAribH5Error(INVALID_PARAM_ERR);
					}
					--sGemListenerParamSize;
					sGemListenerParams[index] = null;
					let offGE = {
						/*Number */"g" : param["message_group_id"],
						/*Number */"i" : param["message_id"],
						/*Number */"v" : param["message_version"],
						/*Number */"o" : 0
					};
					if (cAppTypeAribH5 === cCurrentAppType) {
						/*Number */offGE["t"] = param["source"]["event_message_tag"];
					} else {
						/*Number */offGE["t"] = param["es_ref"]["component_tag"];
					}
					DoAribH5Requset(Request_GeneralEvent, JSON.stringify(offGE));
				} else {
					CheckGeneralEventMessageParam(param);
					let offGE = {
						/*Number */"o" : 0
					};
					if (cAppTypeAribH5 === cCurrentAppType) {
						/*Number */offGE["t"] = param["source"]["event_message_tag"];
					} else {
						/*Number */offGE["t"] = param["es_ref"]["component_tag"];
					}
					sGemListenerParams.forEach(function GemListenerParamsEach(lp, index) {
						if (CompareGEMLPs(lp, listener, param)) {
							sGemListenerParams[index] = null;
							DoAribH5Requset(Request_GeneralEvent, JSON.stringify(offGE));
						}
					});
				}
				if (debugOn) sGemListenerParams.forEach(
					function (lp) {console.log((lp ? JSON.stringify(lp) : lp) +", @"+location.href);});
			},
			//enumerable: true,
		});
		function CheckNPTReferenceMessageListenerParam(component_ref, listener) {
			if (component_ref && IsFunctionType(listener)) {
				if (cAppTypeAribH5 === cCurrentAppType) {
					//component_ref[""]
					return;//TODO
				} else {
					//component_ref[""]
					return;//TODO
				}
			}
			ThrowAribH5Error(INVALID_PARAM_ERR);
		}
		__odp__(StreamEventTarget, "addNPTReferenceMessageListener", {
			value: function addNPTReferenceMessageListener(
					/*ISDBResourceReference */component_ref,
					/*NPTReferenceMessageListener */listener) {
				if (debugOn) console.log("addNPTReferenceMessageListener: component_ref=" +
					(component_ref ? JSON.stringify(component_ref) : component_ref) +", @"+location.href);
				if (debugOn) console.log("addNPTReferenceMessageListener: listener=" + typeof listener +", @"+location.href);
				CheckForPermissionBitmap(1 << 5);
				CheckNPTReferenceMessageListenerParam(component_ref, listener);
/////////////////////////////////////////////////////////////////dummy for test
//listener(/*ISDBResourceReference*/component_ref);
/////////////////////////////////////////////////////////////////dummy for test
				//component_ref[""]
				//TODO
			},
			//enumerable: true,
		});
		__odp__(StreamEventTarget, "removeNPTReferenceMessageListener", {
			value: function removeNPTReferenceMessageListener(
					/*ISDBResourceReference */component_ref,
					/*NPTReferenceMessageListener */listener) {
				if (debugOn) console.log("removeNPTReferenceMessageListener: component_ref=" +
					(component_ref ? JSON.stringify(component_ref) : component_ref) +", @"+location.href);
				if (debugOn) console.log("removeNPTReferenceMessageListener: listener=" + typeof listener +", @"+location.href);
				CheckForPermissionBitmap(1 << 5);
//TODO				CheckNPTReferenceMessageListenerParam(component_ref, listener);
				//component_ref[""]
				//TODO
			},
			//enumerable: true,
		});
		__odp__(StreamEventTarget, "setAlarmByNPT", {
			value: function setAlarmByNPT(
					/*ISDBResourceReference */component_ref,
					/*Number */npt_value, /*NPTAlarmHandler */handler) {
				if (debugOn) console.log("setAlarmByNPT: component_ref=" +
					(component_ref ? JSON.stringify(component_ref) : component_ref) +", @"+location.href);
				if (debugOn) console.log("setAlarmByNPT: npt_value=" + npt_value +", @"+location.href);
				if (debugOn) console.log("setAlarmByNPT: handler=" + typeof handler +", @"+location.href);
				CheckForPermissionBitmap(1 << 5);
				npt_value = GetValueOfParamForNumberType(npt_value, 0);
				if (! component_ref) {
					ThrowAribH5Error(INVALID_PARAM_ERR);
				}
				if (cAppTypeAribH5 === cCurrentAppType) {
					//component_ref[""]
					//TODO
				} else {
					//component_ref[""]
					//TODO
				}
				if (! IsFunctionType(handler)) {
					ThrowAribH5Error(INVALID_PARAM_ERR);
				}
/////////////////////////////////////////////////////////////////dummy for test
//handler(/*ISDBResourceReference*/component_ref, /*Number*/npt_value);
/////////////////////////////////////////////////////////////////dummy for test
				//component_ref[""]
				//TODO
/////////////////////////////////////////////////////////////////dummy for test
return 1;
/////////////////////////////////////////////////////////////////dummy for test
			},
			//enumerable: true,
		});
		__odp__(StreamEventTarget, "unsetAlarmByNPT", {
			value: function unsetAlarmByNPT(/*Number */handle) {
				if (debugOn) console.log("unsetAlarmByNPT: handle=" + handle +", @"+location.href);
				CheckForPermissionBitmap(1 << 5);
				handle = GetValueOfParamForNumberType(handle);
				//TODO
			},
			//enumerable: true,
		});
		__odp__(StreamEventTarget, "getNPT", {
			value: function getNPT(/*ISDBResourceReference */component_ref) {
				if (debugOn) console.log("getNPT: component_ref=" +
					(component_ref ? JSON.stringify(component_ref) : component_ref) +", @"+location.href);
				CheckForPermissionBitmap(1 << 5);
				if (! component_ref) {
					ThrowAribH5Error(INVALID_PARAM_ERR);
				}
				if (cAppTypeAribH5 === cCurrentAppType) {
					//component_ref[""]
					//TODO
				} else {
					//component_ref[""]
					//TODO
				}
				//component_ref[""]
				//TODO
///////////////////////////////////////////////////////////////dummy for test
return 0;
///////////////////////////////////////////////////////////////dummy for test
			},
			//enumerable: true,
		});
		function CheckUTCNPTReferenceMessageListenerParam(param, listener) {
			if (param && IsFunctionType(listener)) {
				if (cAppTypeAribH5 === cCurrentAppType) {
					//param[""]
					return;//TODO
				} else {
					//param[""]
					return;//TODO
				}
			}
			ThrowAribH5Error(INVALID_PARAM_ERR);
		}
		__odp__(StreamEventTarget, "addUTCNPTReferenceMessageListener", {
			value: function addUTCNPTReferenceMessageListener(
					/*UTCNPTReferenceMessageListenerParams */param,
					/*UTCNPTReferenceMessageListener */listener) {
				if (debugOn) console.log("addUTCNPTReferenceMessageListener: param=" +
					(param ? JSON.stringify(param) : param) +", @"+location.href);
				if (debugOn) console.log("addUTCNPTReferenceMessageListener: listener=" + typeof listener +", @"+location.href);
				CheckForPermissionBitmap(1 << 5);
				CheckUTCNPTReferenceMessageListenerParam(param, listener);
/////////////////////////////////////////////////////////////////dummy for test
//listener(/*UTCNPTReferenceMessageListenerCallbackParams*/param);
/////////////////////////////////////////////////////////////////dummy for test
				//param[""]
				//TODO
			},
			//enumerable: true,
		});
		__odp__(StreamEventTarget, "removeUTCNPTReferenceMessageListener", {
			value: function removeUTCNPTReferenceMessageListener(
					/*UTCNPTReferenceMessageListenerParams */param,
					/*[UTCNPTReferenceMessageListener] */listener) {
				if (debugOn) console.log("removeUTCNPTReferenceMessageListener: param=" +
					(param ? JSON.stringify(param) : param) +", @"+location.href);
				if (debugOn) console.log("removeUTCNPTReferenceMessageListener: listener=" + typeof listener +", @"+location.href);
				CheckForPermissionBitmap(1 << 5);
//TODO				CheckUTCNPTReferenceMessageListenerParam(param, listener);
				//param[""]
				//TODO
			},
			//enumerable: true,
		});
		__odp__(StreamEventTarget, "setAlarmByUTCNPT", {
			value: function setAlarmByUTCNPT(
					/*UTCNPTAlarmParams */param, /*UTCNPTAlarmHandler */handler) {
				if (debugOn) console.log("setAlarmByUTCNPT: param=" +
					(param ? JSON.stringify(param) : param) +", @"+location.href);
				if (debugOn) console.log("setAlarmByUTCNPT: handler=" + typeof handler +", @"+location.href);
				CheckForPermissionBitmap(1 << 5);
				if (! param) {
					ThrowAribH5Error(INVALID_PARAM_ERR);
				}
				if (cAppTypeAribH5 === cCurrentAppType) {
					//param[""]
					//TODO
				} else {
					//param[""]
					//TODO
				}
				if (! IsFunctionType(handler)) {
					ThrowAribH5Error(INVALID_PARAM_ERR);
				}
/////////////////////////////////////////////////////////////////dummy for test
//let msg = ;
//handler(/*UTCNPTNotification*/msg);
/////////////////////////////////////////////////////////////////dummy for test
				//param[""]
				//TODO
/////////////////////////////////////////////////////////////////dummy for test
return 1;
/////////////////////////////////////////////////////////////////dummy for test
			},
			//enumerable: true,
		});
		__odp__(StreamEventTarget, "unsetAlarmByUTCNPT", {
			value: function unsetAlarmByUTCNPT(/*Number */handle) {
				if (debugOn) console.log("unsetAlarmByUTCNPT: handle=" + handle +", @"+location.href);
				CheckForPermissionBitmap(1 << 5);
				handle = GetValueOfParamForNumberType(handle);
				//TODO
			},
			//enumerable: true,
		});
		__odp__(StreamEventTarget, "getUTCNPT", {
			value: function getUTCNPT(/*UTCNPTQueryParams */param) {
				if (debugOn) console.log("getUTCNPT: param=" +
					(param ? JSON.stringify(param) : param) +", @"+location.href);
				CheckForPermissionBitmap(1 << 5);
				if (! param) {
					ThrowAribH5Error(INVALID_PARAM_ERR);
				}
				if (cAppTypeAribH5 === cCurrentAppType) {
					//param[""]
					//TODO
				} else {
					//param[""]
					//TODO
				}
				//param[""]
				//TODO
///////////////////////////////////////////////////////////////dummy for test
return 0;
///////////////////////////////////////////////////////////////dummy for test
			},
			//enumerable: true,
		});
		__odp__(StreamEventTarget, "addEventIDUpdateListener", {
			value: function addEventIDUpdateListener(
					/*EventIDUpdateListener */listener) {
				if (debugOn) console.log("addEventIDUpdateListener: listener=" + typeof listener +", @"+location.href);
				CheckForPermissionBitmap(1 << 5);
				if (! IsFunctionType(listener)) {
					ThrowAribH5Error(INVALID_PARAM_ERR);
				}
				if (sEIdListeners.find(function (eil) {//TODO
					return IsNonNull(eil) && listener === eil["l"];
				})) {
					return;//ThrowAribH5Error(INVALID_PARAM_ERR);
				}
				let index = sEIdListeners.findIndex(function (eil) {
					return IsNull(eil);
				});
				let eil = {
					/*Number */"i" : -1,
					"l" : listener
				};
				if (0 > index) {
					sEIdListeners.push(eil);
				} else {
					sEIdListeners[index] = eil;
				}
				CachingPFEvent(false);
				window.setTimeout(NotifyEventID, 0, eil, true);
			},
			//enumerable: true,
		});
		__odp__(StreamEventTarget, "removeEventIDUpdateListener", {
			value: function removeEventIDUpdateListener(
					/*[EventIDUpdateListener] */listener) {
				if (debugOn) console.log("removeEventIDUpdateListener: listener=" + typeof listener +", @"+location.href);
				CheckForPermissionBitmap(1 << 5);
				if (! IsUndefinedType(listener)) {
					if (IsFunctionType(listener)) {
						let index = sEIdListeners.findIndex(function (eil) {
							return IsNonNull(eil) && listener === eil["l"];
						});
						if (0 <= index) {
							sEIdListeners[index] = null;
							//return;
						}
						return;//ThrowAribH5Error(INVALID_PARAM_ERR);
					}
					ThrowAribH5Error(INVALID_PARAM_ERR);
				} else {
					sEIdListeners.forEach(function EiduListenersEach(eil, index) {
						if (eil) {
							sEIdListeners[index] = null;
						}
					});
				}
			},
			//enumerable: true,
		});
		__odp__(StreamEventTarget, "addAITUpdateListener", {
			value: function addAITUpdateListener(
					/*AITUpdateListener */listener) {
				if (debugOn) console.log("addAITUpdateListener: listener=" + typeof listener +", @"+location.href);
				CheckForPermissionBitmap(1 << 5);
				if (! IsFunctionType(listener)) {
					ThrowAribH5Error(INVALID_PARAM_ERR);
				}
				if (sAituListeners.find(function (aul) {
					return aul === listener;
				})) {
					return;//ThrowAribH5Error(INVALID_PARAM_ERR);
				}
				let index = sAituListeners.findIndex(function (aul) {
					return (! IsFunctionType(aul));
				});
				if (0 > index) {
					sAituListeners.push(listener);
				} else {
					sAituListeners[index] = listener;
				}
			},
			//enumerable: true,
		});
		__odp__(StreamEventTarget, "removeAITUpdateListener", {
			value: function removeAITUpdateListener(
					/*[AITUpdateListener] */listener) {
				if (debugOn) console.log("addAITUpdateListener: listener=" + typeof listener +", @"+location.href);
				CheckForPermissionBitmap(1 << 5);
				if (! IsUndefinedType(listener)) {
					if (IsFunctionType(listener)) {
						let index = sAituListeners.findIndex(function (aul) {
							return aul === listener;
						});
						if (0 <= index) {
							sAituListeners[index] = null;
							//return;
						}
						return;//ThrowAribH5Error(INVALID_PARAM_ERR);
					}
					ThrowAribH5Error(INVALID_PARAM_ERR);
				} else {
					sAituListeners.forEach(function AituListenersEach(aul, index) {
						if (IsFunctionType(aul)) {
							sAituListeners[index] = null;
						}
					});
				}
			},
			//enumerable: true,
		});
		__odp__(StreamEventTarget, "addDataEventIDUpdateListener", {
			value: function addDataEventIDUpdateListener(
					/*ISDBResourceReference */component_ref,
					/*DataEventIDUpdateListener */listener) {
				if (debugOn) console.log("addDataEventIDUpdateListener: component_ref=" +
					(component_ref ? JSON.stringify(component_ref) : component_ref) +", @"+location.href);
				if (debugOn) console.log("addDataEventIDUpdateListener: listener=" + typeof listener +", @"+location.href);
				CheckForPermissionBitmap(1 << 5);
				if (component_ref && component_ref["component_tag"] &&
					IsFunctionType(listener)) {
					//component_ref["component_tag"]
					//TODO
/*
let source = {
	"original_network_id" : ,
	"service_id" : ,
	"component_tag" : 
}
if (cAppTypeAribH5 === cCurrentAppType) {
	source["tlv_stream_id"] = ;
} else {
	source["transport_stream_id"] = ;
}
listener(source, data_event_id);
*/
				}
				ThrowAribH5Error(INVALID_PARAM_ERR);
			},
			//enumerable: true,
		});
		__odp__(StreamEventTarget, "removeDataEventIDUpdateListener", {
			value: function removeDataEventIDUpdateListener(
					/*ISDBResourceReference */component_ref,
					/*[DataEventIDUpdateListener] */listener) {
				if (debugOn) console.log("removeDataEventIDUpdateListener: component_ref=" +
					(component_ref ? JSON.stringify(component_ref) : component_ref) +", @"+location.href);
				if (debugOn) console.log("removeDataEventIDUpdateListener: listener=" + typeof listener +", @"+location.href);
				CheckForPermissionBitmap(1 << 5);
				if (component_ref && component_ref["component_tag"]) {
					//component_ref["component_tag"]
					//TODO
					if (! IsUndefinedType(listener)) {
					} else {
					}
				}
				ThrowAribH5Error(INVALID_PARAM_ERR);
			},
			//enumerable: true,
		});
	})());
	__odp__(ReceiverDevice, "cacheEvent",
			new (/**@constructor*/function CacheEventCtor() {
		let CacheEventTarget = __oc__(null);
		this.get = function () {
//			if (debugOn) console.log("receiverDevice.cacheEvent.get: " +", @"+location.href);
			return CacheEventTarget;
		};
		//this.enumerable = true;
		/*if (debugOn) */__odp__(CacheEventTarget, cToString, {
			value: function () {
				return cObjStringB + "CacheEventTarget" + cObjStringE;
			},
			//enumerable: true,
		});
		function CheckCacheEventListenerPath(path, listener) {
			if (IsFunctionType(listener) && IsNonemptyString(path)) {
				return;
			}
			ThrowAribH5Error(INVALID_PARAM_ERR);
		}
		function normalizerCacheEventPath(path) {//TODO
			if (path.startsWith(sSystemInfo["b"])) {
				return path.substring(sSystemInfo["b"].length);
			}
			return path;
		}
		function DummyCacheEventListener(path, event) {
			if (debugOn) console.log("DummyCacheEventListener: path=" + path +", @"+location.href);
			if (debugOn) console.log("DummyCacheEventListener: event=" + event +", @"+location.href);
		}
		__odp__(CacheEventTarget, "addCacheEventListener", {
			value: function addCacheEventListener(
					/*String */path, /*CacheEventListener */listener) {
				if (debugOn) console.log("addCacheEventListener: path=" + path +", @"+location.href);
				if (debugOn) console.log("addCacheEventListener: listener=" + typeof listener +", @"+location.href);
				CheckForPermissionBitmap(1 << 5);
				CheckCacheEventListenerPath(path, listener);
				if (sCeListenerPaths.find(function (lp) {
					return CompareCEListenerPaths(lp, path, listener);
				})) {
					return;//ThrowAribH5Error(INVALID_PARAM_ERR);
				}
				let index = sCeListenerPaths.findIndex(function (lp) {
					return IsNull(lp);
				});
				let listenerPath = {
					/*String */"p" : path,
					"l" : listener
				};
				if (0 > index) {
					sCeListenerPaths.push(listenerPath);
				} else {
					sCeListenerPaths[index] = listenerPath;
				}
				DoAribH5Requset(Request_CacheEvent, "add:" +
					normalizerCacheEventPath(path));
//				if (debugOn) sCeListenerPaths.forEach(
//					function (lp) {console.log((lp ? JSON.stringify(lp) : lp) +", @"+location.href);});
			},
			//enumerable: true,
		});
		__odp__(CacheEventTarget, "removeCacheEventListener", {
			value: function removeCacheEventListener(
					/*String */path, /*[CacheEventListener] */listener) {
				if (debugOn) console.log("removeCacheEventListener: path=" + path +", @"+location.href);
				if (debugOn) console.log("removeCacheEventListener: listener=" + typeof listener +", @"+location.href);
				CheckForPermissionBitmap(1 << 5);
				if (IsUndefinedType(listener)) {
					listener = DummyCacheEventListener;
				}
				CheckCacheEventListenerPath(path, listener);
				if (DummyCacheEventListener !== listener) {
					let index = sCeListenerPaths.findIndex(function (lp) {
						return CompareCEListenerPaths(lp, path, listener);
					});
					if (0 > index) {
						return;//ThrowAribH5Error(INVALID_PARAM_ERR);
					}
					sCeListenerPaths[index] = null;
				} else {
					let remove_skip = true;
					sCeListenerPaths.forEach(function CEListenerPathsEach(lp, index) {
						if (lp && path === lp["p"]) {
							remove_skip = false;
							sCeListenerPaths[index] = null;
						}
					});
					if (remove_skip) {
						return;//ThrowAribH5Error(INVALID_PARAM_ERR);
					}
				}
				DoAribH5Requset(Request_CacheEvent, "remove:" +
					normalizerCacheEventPath(path));
//				if (debugOn) sCeListenerPaths.forEach(
//					function (lp) {console.log((lp ? JSON.stringify(lp) : lp) +", @"+location.href);});
			},
			//enumerable: true,
		});
		__odp__(CacheEventTarget, "storeDataResource", {
			value: function storeDataResource(
					/*String */path, /*[CacheEventListener] */listener) {
				if (debugOn) console.log("storeDataResource: path=" + path +", @"+location.href);
				if (debugOn) console.log("storeDataResource: listener=" + typeof listener +", @"+location.href);
				CheckForPermissionBitmap(1 << 5);
				if (IsUndefinedType(listener)) {
					listener = DummyCacheEventListener;
				}
				CheckCacheEventListenerPath(path, listener);
				if (sStoreCeListenerPaths.find(function (lp) {
					return CompareCEListenerPaths(lp, path, listener);
				})) {
					return;//ThrowAribH5Error(INVALID_PARAM_ERR);
				}
				let index = sStoreCeListenerPaths.findIndex(function (lp) {
					return IsNull(lp);
				});
				let listenerPath = {
					/*String */"p" : path,
					"l" : listener
				};
				if (0 > index) {
					sStoreCeListenerPaths.push(listenerPath);
				} else {
					sStoreCeListenerPaths[index] = listenerPath;
				}
				DoAribH5Requset(Request_CacheEvent, "store:" +
					normalizerCacheEventPath(path));
//				if (debugOn) sStoreCeListenerPaths.forEach(
//					function (lp) {console.log((lp ? JSON.stringify(lp) : lp) +", @"+location.href);});
			},
			//enumerable: true,
		});
		__odp__(CacheEventTarget, "releaseDataResource", {
			value: function releaseDataResource(/*[String] */path) {
				if (debugOn) console.log("releaseDataResource: path=" + path +", @"+location.href);
				CheckForPermissionBitmap(1 << 5);
				if (! IsUndefinedType(path)) {
					CheckNonemptyParamForStringType(path);
				}
				sStoreCeListenerPaths.forEach(function StoreCEListenerPathsEach(lp, index) {
					if (lp && (IsUndefinedType(path) || path === lp["p"])) {
						DoAribH5Requset(Request_CacheEvent, "release:" +
							normalizerCacheEventPath(lp["p"]));
						sStoreCeListenerPaths[index] = null;
					}
				});
//				if (debugOn) sStoreCeListenerPaths.forEach(
//					function (lp) {console.log((lp ? JSON.stringify(lp) : lp) +", @"+location.href);});
			},
			//enumerable: true,
		});
	})());
	function normalizerAccessInfoPath(accessInfo) {//TODO
		let a = document.createElement('A');
		a.href = accessInfo;
		accessInfo = a.href;
		if (accessInfo.startsWith(sSystemInfo["b"])) {
			return accessInfo;
		}
		ThrowAribH5Error(INVALID_PARAM_ERR);
	}
	__odp__(ReceiverDevice, "X_APAB_setAccessInfoToProviderArea", {
		value: function X_APAB_setAccessInfoToProviderArea(
				/*String */nvramURI, /*String */accessInfo) {
			if (debugOn) console.log("X_APAB_setAccessInfoToProviderArea: nvramURI=" + nvramURI +", @"+location.href);
			if (debugOn) console.log("X_APAB_setAccessInfoToProviderArea: accessInfo=" + accessInfo +", @"+location.href);
			CheckForPermissionBitmap(cPermissionBitmapStorage);
			let bcid_end = nvramURI.indexOf(";");
			let bcid_len = bcid_end - (nvramURI.indexOf("://") + 3);
			if (9+bcid_len + 10 === nvramURI.length &&
				nvramURI.startsWith(cNvramsPrefix) &&
				nvramURI.startsWith(";cs_local/", 9+bcid_len) &&
				0 <= parseInt(nvramURI.substring(9, 9+bcid_len), 16)) {
				if (2 < bcid_len) {//TODO
					nvramURI = cNvramsPrefix +
						nvramURI.substring(bcid_end - 2);
				}
				accessInfo = normalizerAccessInfoPath(accessInfo);
				let result = DoAribH5Requset(Request_AccessNvram,
					"AI|" + nvramURI + "|" + accessInfo);
				CheckIfThrowAribH5Error(result);
				return "ok" === result;
			}
			ThrowAribH5Error(INVALID_PARAM_ERR);
		},
		//enumerable: true,
	});
	function CheckCasIdCallback(CA_system_ID, resultCallback) {
		CA_system_ID = GetValueOfParamForNumberType(CA_system_ID, 0, 0xFFFF);
		if (IsFunctionType(resultCallback)) {
			return CA_system_ID;
		}
		ThrowAribH5Error(INVALID_PARAM_ERR);
	}
	__odp__(ReceiverDevice, "cas_getCurrentContractInfo", {
		value: function cas_getCurrentContractInfo(
				/*Number */CA_system_ID, /*Number */param,
				/*cas_getCurrentContractInfoCallback */resultCallback) {
			if (debugOn) console.log("cas_getCurrentContractInfo: CA_system_ID=" + CA_system_ID +", @"+location.href);
			if (debugOn) console.log("cas_getCurrentContractInfo: param=" + param +", @"+location.href);
			CheckForPermissionBitmap(1 << 3);
			CA_system_ID = CheckCasIdCallback(CA_system_ID, resultCallback);
			param = GetValueOfParamForNumberType(param, 0, 0xFF);
			let result = DoAribH5Requset(Request_LinkCas,
				"getCCI:" + CA_system_ID + "|" + param);
			if (debugOn) console.log("cas_getCurrentContractInfo: result=" + result +", @"+location.href);
			CheckIfThrowAribH5Error(result);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
			let ci = JSON.parse(result);
			let status_code = ci["sc"];
			if (debugOn) console.log("cas_getCurrentContractInfo: status_code=" + status_code +", @"+location.href);
			if (1 === status_code) {//TODO
			}
			resultCallback(/*Number */status_code,
				0 === status_code ? {
					/*Number */"ret_code"                : ci["rc"],
					/*Number */"ca_broadcaster_group_ID" : ci["bgi"],
					/*String */"response"                : ci["res"]
				} : {});
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @cas_getCurrentContractInfo" +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	if (debugOn) console.log(e.stack +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	return;//throw e;
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "cas_getCurrentPlatformContractInfo", {
		value: function cas_getCurrentPlatformContractInfo(
				/*Number */CA_system_ID,
				/*cas_getCurrentPlatformContractInfoCallback */resultCallback) {
			if (debugOn) console.log("cas_getCurrentPlatformContractInfo: CA_system_ID=" + CA_system_ID +", @"+location.href);
			CheckForPermissionBitmap(1 << 3);
			CA_system_ID = CheckCasIdCallback(CA_system_ID, resultCallback);
			let result = DoAribH5Requset(Request_LinkCas,
				"getCPCI:" + CA_system_ID);
			if (debugOn) console.log("cas_getCurrentPlatformContractInfo: result=" + result +", @"+location.href);
			CheckIfThrowAribH5Error(result);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
			let pci = JSON.parse(result);
			let status_code = pci["sc"];
			if (debugOn) console.log("cas_getCurrentPlatformContractInfo: status_code=" + status_code +", @"+location.href);
			if (1 === status_code) {//TODO
			}
			resultCallback(/*Number */status_code,
				0 === status_code ? {
					/*Boolean */"result"                 : (0 !== pci["rt"]),
					/*Number */"ca_broadcaster_group_ID" : pci["bgi"],
					/*Date */"pd_start_date"             :
						new Date((pci["sd"] - JST_TZO_SEC) * 1000),
					/*Number */"pd_date_offset"          : pci["do"],
					/*Number */"pd_period"               : pci["per"],
					/*Number */"power_keep_period"       : pci["pkp"],
					/*Number */"original_network_id"     : pci["nid"],
					/*Number */"stream_id"               : pci["sid"]
				} : {});
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @cas_getCurrentPlatformContractInfo" +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	if (debugOn) console.log(e.stack +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	return;//throw e;
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "cas_confirmContractInfo", {
		value: function cas_confirmContractInfo(
				/*Number */CA_system_ID, /*Date */date,
				/*String */contract_verification_info,
				/*cas_confirmContractInfoCallback */resultCallback) {
			if (debugOn) console.log("cas_confirmContractInfo: CA_system_ID=" + CA_system_ID +", @"+location.href);
			if (debugOn) console.log("cas_confirmContractInfo: date=" + date +", @"+location.href);
			if (debugOn) console.log("cas_confirmContractInfo: contract_verification_info=" +
				contract_verification_info +", @"+location.href);
			CheckForPermissionBitmap(1 << 3);
			CA_system_ID = CheckCasIdCallback(CA_system_ID, resultCallback);
			if (! IsDateObject(date)) {
				ThrowAribH5Error(INVALID_PARAM_ERR);
			}
			if (! IsStringType(contract_verification_info)) {
				ThrowAribH5Error(INVALID_PARAM_ERR);
			}
			let result = DoAribH5Requset(Request_LinkCas,
				"confirmCI:" + CA_system_ID + "|" +
					(Math.floor(date.getTime() / 1000) + JST_TZO_SEC)
					+ "|" + contract_verification_info);
			if (debugOn) console.log("cas_confirmContractInfo: result=" + result +", @"+location.href);
			CheckIfThrowAribH5Error(result);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
			let cci = JSON.parse(result);
			let status_code = cci["sc"];
			if (debugOn) console.log("cas_confirmContractInfo: status_code=" + status_code +", @"+location.href);
			if (1 === status_code) {//TODO
			}
			resultCallback(/*Number */status_code,
				0 === status_code ? {
					/*Number */"ret_code"                : cci["rc"],
					/*Number */"ca_broadcaster_group_ID" : cci["bgi"],
					/*String */"response"                : cci["res"]
				} : {});
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @cas_confirmContractInfo" +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	if (debugOn) console.log(e.stack +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	return;//throw e;
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "cas_setCASInfo", {
		value: function cas_setCASInfo(
				/*Number */CA_system_ID, /*String */cas_info,
				/*cas_setCASInfoCallback */resultCallback) {
			if (debugOn) console.log("cas_setCASInfo: CA_system_ID=" + CA_system_ID +", @"+location.href);
			if (debugOn) console.log("cas_setCASInfo: cas_info=" + cas_info +", @"+location.href);
			CheckForPermissionBitmap(1 << 3);
			CA_system_ID = CheckCasIdCallback(CA_system_ID, resultCallback);
			if (! IsStringType(cas_info)) {
				ThrowAribH5Error(INVALID_PARAM_ERR);
			}
			let result = DoAribH5Requset(Request_LinkCas,
				"setCI:" + CA_system_ID + "|" + cas_info);
			if (debugOn) console.log("cas_setCASInfo: result=" + result +", @"+location.href);
			CheckIfThrowAribH5Error(result);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
			let cir = JSON.parse(result);
			let status_code = cir["sc"];
			if (debugOn) console.log("cas_setCASInfo: status_code=" + status_code +", @"+location.href);
			if (1 === status_code) {//TODO
			}
			resultCallback(/*Number */status_code,
				0 === status_code ? {
					/*Number */"ret_code" : cir["rc"],
					/*String */"response" : cir["res"]
				} : {});
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @cas_setCASInfo" +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	if (debugOn) console.log(e.stack +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	return;//throw e;
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "cas_getAutoDisplayMessageStatus", {
		value: function cas_getAutoDisplayMessageStatus(
				/*Number */CA_system_ID,
				/*cas_getADMStatusCallback */resultCallback) {
			if (debugOn) console.log("cas_getAutoDisplayMessageStatus: CA_system_ID=" + CA_system_ID +", @"+location.href);
			CheckForPermissionBitmap(1 << 3);
			CA_system_ID = CheckCasIdCallback(CA_system_ID, resultCallback);
			GetAutoDisplayMessageStatus(CA_system_ID, resultCallback, 0);//TODO
		},
		//enumerable: true,
	});
	__odp__(ReceiverDevice, "cas_updateAutoDisplayMessage", {
		value: function cas_updateAutoDisplayMessage(
				/*Number */CA_system_ID,
				/*cas_ADMInfoCallback */resultCallback) {
			if (debugOn) console.log("cas_updateAutoDisplayMessage: CA_system_ID=" + CA_system_ID +", @"+location.href);
			CheckForPermissionBitmap(1 << 3);
			CA_system_ID = CheckCasIdCallback(CA_system_ID, resultCallback);
			UpdateAutoDisplayMessage(CA_system_ID, resultCallback, 50);//TODO
		},
		//enumerable: true,
	});
})());

///////////////////////////////////////////////////////////////////////////////
navigator.eitSearchManager = {//EITSearchManager
//TODO
//function onEITScheduleUpdate();
//function onEITSearch(EITSeach search, Integer status);
	createSearch: function () {
		//EITSearch
///////////////////////////////////////////////////////////////dummy for test
return null;
///////////////////////////////////////////////////////////////dummy for test
		//TODO
	},
};

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define navigator.capabilities" +", @"+location.href);
__odp__(navigator, "capabilities",
		new (/**@constructor*/function CapabilitiesCtor() {
	let Capabilities = __oc__(null);
	this.get = function () {
//		if (debugOn) console.log("capabilities.get: " +", @"+location.href);
		return Capabilities;
	};
	//this.enumerable = true;
	/*if (debugOn) */__odp__(Capabilities, cToString, {
		value: function () {
			return cObjStringB + "Capabilities" + cObjStringE;
		},
		//enumerable: true,
	});
	__odp__(Capabilities, "hasCapability", {
		value: function hasCapability(/*String */query, /*[String] */...params) {
			if (debugOn) console.log("hasCapability: query=" + query +", @"+location.href);
			//CheckForPermissionBitmap(1 << 5);
			if (debugOn) console.log("hasCapability: params[0]=" + params[0] +", @"+location.href);
			if ("CASystem" === query) {
				if ("0005" === params[0]) {
					return true;
				}
				return false;
			}
			if ("CASsystemAPI" === query) {
				if ("0005" === params[0] && "1.0" === params[1]) {
					return true;
				}
				return false;
			}
			if ("KeyGroup" === query) {
				if ("VCR" === params[0]) {
//					return true;
				}
				return false;
			}
			if ("BrowserResolution" === query) {
				if ("2K" === params[0]) {
					return true;
				}
				if ("4K" === params[0]) {
					return true;
				}
				if ("8K" === params[0]) {
//					return true;
				}
				return false;
			}
			if ("AudioElement" === query) {
				if ("SupportSimultaneousPlaying" === params[0]) {
					for (let i = 1; i < params.length; i += 2) {
						if ("video/x-arib2-broadcast" === params[i]) {//MIME
							if ("1" === params[i + 1]) {
							} else if ("2" === params[i + 1]) {
							}
						}
					}
				} else if ("SupportPlaying" === params[0]) {
					if ("audio/X-arib-mpeg4-als" === params[1]) {//MIME
					}
				}
				return false;
			}
			if ("VideoElement" === query) {
				if ("MSE" === params[0]) {
					if ("201210" === params[1]) {
						return true;
					} else if ("201311" === params[1]) {
						return true;
					} else if ("201401" === params[1]) {
						return true;
					} else if ("201610" === params[1]) {
						return true;
					}
				} else if ("EME" === params[0]) {
					if ("201206" === params[1]) {
						return true;
					} else if ("201402" === params[1]) {
						return true;
					} else if ("201503" === params[1]) {
						return true;
					} else if ("201709" === params[1]) {
						return true;
					}
				} else if ("MPEG-DASH" === params[0]) {
					if ("broadcast" === params[1]) {
						return true;
					} else if ("8K" === params[1]) {
//						return true;
					}
				} else if ("ContentProtection" === params[0]) {//TODO
					if ("PlayReady" === params[1]) {
						return true;
					}
				}
				return false;
			}
			if ("MMTVideoStream" === query) {//TODO
				return false;
			}
			if ("InputDevice" === query) {
				if ("SupportEvent" === params[0]) {
					if ("keyboard" === params[1]) {
						if ("support" === params[2]) {
							return true;
						} else if ("available" === params[2]) {
							return true;
						}
					} else if ("mouse" === params[1]) {
						if ("support" === params[2]) {
//							return true;
						} else if ("available" === params[2]) {
//							return true;
						}
					} else if ("touch" === params[1]) {
						if ("support" === params[2]) {
//							return true;
						} else if ("available" === params[2]) {
//							return true;
						}
					} else if ("gamepad" === params[1]) {
						if ("support" === params[2]) {
//							return true;
						} else if ("available" === params[2]) {
//							return true;
						}
					}
				}
				return false;
			}
			if ("Media" === query) {
				if ("1" === params[0]) {
					return true;
				}
				if ("2" === params[0]) {
					return true;
				}
				if ("3" === params[0]) {
					return true;
				}
				if ("4" === params[0]) {
					return true;
				}
				if ("6" === params[0]) {
					return true;
				}
				if ("7" === params[0]) {
					return true;
				}
				return false;
			}
			if ("SimultaneousPlay" === query) {
				for (let i = 0; i < params.length; i += 4) {
					if ("arib2" === params[i]) {
					} else if ("http" === params[i] || "https" === params[i]) {
					}
					if ("video/x-arib2-broadcast" === params[i + 1]) {//MIME
					}
					if ("2K" === params[i + 2]) {
					} else if ("4K" === params[i + 2]) {
					} else if ("8K" === params[i + 2]) {
					}
					if ("30I" === params[i + 3]) {
					} else if ("30P" === params[i + 3]) {
					} else if ("60P" === params[i + 3]) {
					} else if ("120P" === params[i + 3]) {
					}
				}
				return false;
			}
			if ("TLS" === query) {
				if ("1.2" === params[0]) {
					return true;
				}
				if ("1.3" === params[0]) {
//					return true;
				}
				return false;
			}
			if ("Schedule" === query) {
				if ("SupportsScheduleToTuneWithUI" === params[0]) {
					return true;
				}
				if ("SupportsScheduleToRecordWithUI" === params[0]) {
					return true;
				}
				return false;
			}
			if ("EventMessage" === query) {
				if ("NPT" === params[0]) {
//					return true;
				}
				return false;
			}
			if ("APIGroup" === query) {
				if ("sourceIs" === params[0]) {
					return true;
				}
				if ("dataEventIDUpdate" === params[0]) {
//					return true;
				}
				return false;
			}
			return false;
		},
		//enumerable = true;
	});
})());

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define Application" +", @"+location.href);
const cPermissionBitmapFull = 0x1FFF;
const cPermissionBitmapStorage = (1 << 9);
const cPermissionBitmapVideo = (1 << 12);
//const cPermissionBitmapMonomedia = (1 << 11);//FIXME: XXX
const cPermissionBitmapsMax = 16, cManagedAreasMax = 160;
let /*ApplicationInfo */sApplicationInfos = [];
let /*Application */sApplications = [];
let /*PermissionManagedArea */sPermissionManagedAreas = [];
let /*PermissionManagedArea */sPermissionManagedAreasAdd = [];
let /*PermissionBitmap */sPermissionBitmap = 0;
function PushPermissionManagedArea(/*Number */permission, /*StringArray */urls,
	/*PermissionManagedArea */permissionManagedAreas) {
	if (debugOn) console.log("PushPermissionManagedArea: permission=" + permission +", @"+location.href);
	if (debugOn) console.log("PushPermissionManagedArea: urls=" + urls +", @"+location.href);
	if (cPermissionBitmapsMax <= sPermissionManagedAreas["b"]/*bitmap_total*/) {
		return false;
	}
	++sPermissionManagedAreas["b"]/*bitmap_total*/;
	let remainUrls = (cManagedAreasMax - sPermissionManagedAreas["u"]/*url_total*/);
	if (0 >= remainUrls) {
		return false;
	}
	let us = urls;
	if (us) {
		if (remainUrls < us.length) {
			return false;
			//us = us.slice(0, remainUrls);
		}
		sPermissionManagedAreas["u"]/*url_total*/ += us.length;
	} else {
		++sPermissionManagedAreas["u"]/*url_total*/;
	}
	permissionManagedAreas.push(new PermissionManagedArea(permission, us));
	return true;
}
function InitPermissionManagedAreasAdd() {
	sPermissionManagedAreasAdd = [];
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
	let pmasAdd = JSON.parse(DoAribH5Requset(Request_ManagedArea, "get:"));
	for (let i = 0; i < pmasAdd.length; ++i) {
		PushPermissionManagedArea(pmasAdd[i]["p"], pmasAdd[i]["u"],
			sPermissionManagedAreasAdd);
	}
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @JSON.parse(jsonMA)" +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	return;//throw e;
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
}
function SavePermissionManagedAreasAdd() {
	let pmasAdd = [];
	for (let i = 0; i < sPermissionManagedAreasAdd.length; ++i) {
		pmasAdd.push({
			/*NumberArray */"p" : sPermissionManagedAreasAdd[i]["permission"],
			/*StringArray */"u" : sPermissionManagedAreasAdd[i]["urls"] 
		});
	}
	DoAribH5Requset(Request_ManagedArea, "add:" + JSON.stringify(pmasAdd));
}
function InitPermissionBitmap() {//TODO
	if (debugOn) console.log("InitPermissionBitmap: b=" +
		sPermissionManagedAreas["b"]/*bitmap_total*/ +", @"+location.href);
	if (debugOn) console.log("InitPermissionBitmap: u=" +
		sPermissionManagedAreas["u"]/*url_total*/ +", @"+location.href);
	sPermissionBitmap = cPermissionBitmapFull;
	if (! location.href.startsWith(sSystemInfo["b"])) {//TODO
		if (debugOn) console.log("InitPermissionBitmap: base.length=" +
			sPermissionManagedAreas.length +", @"+location.href);
		let pmas = [sPermissionManagedAreas];
		if (0 < sPermissionManagedAreasAdd.length) {
			if (debugOn) console.log("InitPermissionBitmap: add.length=" +
				sPermissionManagedAreasAdd.length +", @"+location.href);
			pmas.push(sPermissionManagedAreasAdd);
		}
		for (let a = 0; a < pmas.length; ++a) {
			let permissionManagedAreas = pmas[a];
			permissionManagedAreas.forEach(function PermissionManagedAreasEach(pma) {
				if (debugOn) console.log("InitPermissionBitmap: pma=" +
					JSON.stringify(pma) +", @"+location.href);
				let permission = pma["permission"][0];//TODO -> only get the first ?
				let bitmap = (cPermissionBitmapFull & permission);
				if (debugOn) console.log("InitPermissionBitmap: bitmap=" +
					bitmap +", @"+location.href);
				let mode = (0x7 & (permission >> 13));
				if (debugOn) console.log("InitPermissionBitmap: mode=" +
					mode +", @"+location.href);
				if (0 === mode ?
					cPermissionBitmapFull !== bitmap : 1 !== mode) {
					bitmap = 0;
				}
				let included = false;
				let urls = pma["urls"];
				if (urls && 0 < urls.length) {
					for (let i = 0; i < urls.length; ++i) {
						if (debugOn) console.log("InitPermissionBitmap: url=" +
							urls[i] +", @"+location.href);
						if (location.href.startsWith(urls[i])) {
							included = true;
							break;
						}
					}
				} else {
					included = true;
				}
				if (debugOn) console.log("InitPermissionBitmap: included=" +
					included +", @"+location.href);
				if (included) {
					if (debugOn) console.log("InitPermissionBitmap: bitmap=" +
						bitmap +", @"+location.href);
					sPermissionBitmap &= bitmap;
				}
			});
		}
	}
	if (debugOn) console.log("InitPermissionBitmap: bitmap=" +
		sPermissionBitmap +", @"+location.href);
	ControlVideoObjectApi(
		0 === (cPermissionBitmapVideo & sPermissionBitmap));//TODO
}
function CheckForPermissionBitmap(/*PermissionBitmap */mask) {
//	if (debugOn) console.log("CheckForPermissionBitmap: mask=" +
//		mask +", @"+location.href);
//	if (debugOn) console.log("CheckForPermissionBitmap: bitmap=" +
//		sPermissionBitmap +", @"+location.href);
	if ((sPermissionBitmap & mask) === mask) {
//		if (debugOn) console.log("CheckForPermissionBitmap: masked" +", @"+location.href);
		return;
	}
	if (cPermissionBitmapStorage === mask) {
		ThrowAribH5Error(SECURITY_ERR);//TODO
	}
	ThrowAribH5Error(NOT_AUTHORIZED_ERR);
}
function CheckForManagedArea(/*String */url,
	/*PermissionManagedArea */permissionManagedAreasBase,
	/*PermissionManagedArea */permissionManagedAreasAdd) {//TODO
	if (debugOn) console.log("CheckForManagedArea: url=" + url +", @"+location.href);
	if (url.startsWith(sSystemInfo["b"])) {//TODO
		if (debugOn) console.log("CheckForManagedArea: included" +", @"+location.href);
		return;
	}
	if (debugOn) console.log("CheckForManagedArea: base.length=" +
		permissionManagedAreasBase.length +", @"+location.href);
	let pmas = [permissionManagedAreasBase];
	if (__isa__(permissionManagedAreasAdd) &&
		0 < permissionManagedAreasAdd.length) {
		if (debugOn) console.log("CheckForManagedArea: add.length=" +
			permissionManagedAreasAdd.length +", @"+location.href);
		pmas.push(permissionManagedAreasAdd);
	}
	for (let a = 0; a < pmas.length; ++a) {
		let permissionManagedAreas = pmas[a];
		if (0 < permissionManagedAreas.length) {
			for (let i = 0; i < permissionManagedAreas.length; ++i) {
				let pma = permissionManagedAreas[i];
				if (debugOn) console.log("CheckForManagedArea: pma=" +
					JSON.stringify(pma) +", @"+location.href);
				let urls = pma["urls"];
				if (urls && 0 < urls.length) {
					for (let j = 0; j < urls.length; ++j) {
						if (debugOn) console.log("CheckForManagedArea: url=" +
							urls[j] +", @"+location.href);
						if (url.startsWith(urls[j])) {
							if (debugOn) console.log("CheckForManagedArea: included" +", @"+location.href);
							return;
						}
					}
				} else if (1 === permissionManagedAreas.length) {
					if (debugOn) console.log("CheckForManagedArea: included" +", @"+location.href);
					return;
				}
			}
		} else {
			if (debugOn) console.log("CheckForManagedArea: included" +", @"+location.href);
			return;
		}
	}
	ThrowAribH5Error(INVALID_PARAM_ERR);
}
function CheckForManagedAreaCurrent(/*String */url) {//TODO
	if (debugOn) console.log("CheckForManagedAreaCurrent: url=" + url +", @"+location.href);
	CheckForManagedArea(url,
		sPermissionManagedAreas, sPermissionManagedAreasAdd);
}
function AribH5NormalizerUrl(/*String */url) {//XXX
	let i1 = url.indexOf("://");
	if (0 >= i1) {
		return null;
	}
	i1 += 3;
	let i2 = url.indexOf("/", i1);
	if (i1 === i2) {
		return null;
	}
	if (0 > i2) {
		i2 = url.length;
	}
	let url2 = url.substring(0, i2).toLowerCase();
	if (url.startsWith(url2)) {
		return null;
	}
	if (i2 >= url.length) {
		return url2;
	}
	return url2 + url.substring(i2);
}
function NotifyApplicationsInfo(/*String */jsonAI) {
	if (debugOn) console.log("NotifyApplicationsInfo: jsonAI=" + jsonAI +", @"+location.href);
	UpdateApplicationsInfo(jsonAI);
	NotifyAITUpdate();
}
/**@constructor*/function PermissionManagedArea(
		/*PermissionBitmap */p, /*ManagedAreas */us) {
	let /*Number */permission = p;
	let /*StringArray */urls = us;
	let permissionManagedArea = __oc__(null);
	__odp__(permissionManagedArea, "permission", {
		get: function () {
			return [permission];//TODO -> only set the first ?
		},
		set: ReadOnlyProperty,
		enumerable: true,
	});
	__odp__(permissionManagedArea, "urls", {
		get: function () {
			return urls ? urls.slice() : null;
		},
		set: ReadOnlyProperty,
		enumerable: true,
	});
	/*if (debugOn) */__odp__(permissionManagedArea, cToString, {
		value: function () {
			return cObjStringB + "PermissionManagedArea" + cObjStringE;
		},
		//enumerable: true,
	});
	return permissionManagedArea;
}
let /*PermissionManagedArea */sPermissionManagedAreasReplace;
function GetPermissionManagedAreaForReplace(app) {
	if (debugOn) console.log("GetApplicationForReplace: app=" + JSON.stringify(app) +", @"+location.href);
	sPermissionManagedAreasReplace = [];
	if (__isa__(app["b"])) {
		app["b"].forEach(function (pma) {
		sPermissionManagedAreasReplace.push(
			new PermissionManagedArea(pma["p"], pma["u"]));
		});
	}
}
function GetApplicationForReplace(org_id, app_id) {
	if (debugOn) console.log("GetApplicationForReplace: org_id=" + org_id +", @"+location.href);
	if (debugOn) console.log("GetApplicationForReplace: app_id=" + app_id +", @"+location.href);
	if (0 === org_id && 0 === app_id) {
		return null;
	}
	sPermissionManagedAreasReplace = [];
	for (let i = 0; i < sApplicationInfos.length; ++i) {
		let app = sApplicationInfos[i];
		if (debugOn) console.log("GetApplicationForReplace: app=" + JSON.stringify(app) +", @"+location.href);
		if (org_id === app["o"] && app_id === app["i"]) {
			if (__isa__(app["b"])) {
				app["b"].forEach(function (pma) {
					sPermissionManagedAreasReplace.push(
						new PermissionManagedArea(pma["p"], pma["u"]));
				});
			}
			return app["u"];
		}
	}
	ThrowAribH5Error(MISC_ERR);//INVALID_PARAM_ERR);
}
function CheckForManagedAreaReplace(/*String */url) {//TODO
	if (debugOn) console.log("CheckForManagedAreaReplace: url=" + url +", @"+location.href);
	CheckForManagedArea(url, sPermissionManagedAreasReplace);
}
function ReplaceApplication(app) {
	if (debugOn) console.log("ReplaceApplication: app=" + JSON.stringify(app) +", @"+location.href);
	let url = app["u"];
	if (IsStringType(url)) {
		GetPermissionManagedAreaForReplace(app);//TODO
	} else {
		url = GetApplicationForReplace(app["o"], app["i"]);//TODO
	}
	if (debugOn) console.log("ReplaceApplication: url=" + url +", @"+location.href);
	if (IsStringType(url)) {
		for (let i = 0; i < 5; ++i) {//TODO
			CheckForManagedAreaReplace(url);//TODO
			let newUrl = DoAribH5Requset(Request_LocateUrl, url);
			if (debugOn) console.log("ReplaceApplication: newUrl=" + newUrl +", @"+location.href);
			if (IsNonemptyString(newUrl)) {
				CheckIfThrowAribH5Error(newUrl);
				url = AribH5NormalizerUrl(newUrl);
				if (IsNull(url)) {
					url = newUrl;
				}
				app["u"] = url;
			} else {
				break;
			}
		}
	}
	let jsonApp = JSON.stringify(app);
	if (debugOn) console.log("ReplaceApplication: " + jsonApp +", @"+location.href);
	let result = DoAribH5Requset(Request_ReplaceApp, jsonApp);
	if (debugOn) console.log("ReplaceApplication: result=\n" + result +", @"+location.href);
	//CheckIfThrowAribH5Error(result);
	if (IsStringType(result) &&
		result.startsWith(AribH5ErrorPrefix)) {
		ThrowAribH5Error(MISC_ERR);
	}
}
function GetApplicationFromAIT(isdb2_ns, isdb2_AppN, app) {
	let appKeys = [
		["orgId", function OrgId(value) {
			let orgId = parseInt(value, 10);
			if (debugOn) console.log("isdb2:orgId=" + orgId +", @"+location.href);
			if (orgId === app["o"]) {
				return true;
			}
			return false;
		}],
		["appId", function AppId(value) {
			let appId = parseInt(value, 10);
			if (debugOn) console.log("isdb2:appId=" + appId +", @"+location.href);
			if (appId === app["i"]) {
				return true;
			}
			return false;
		}],
		["URLBase", function URLBase(value) {
			if (debugOn) console.log("isdb2:URLBase=" + value +", @"+location.href);
			if (IsNonemptyString(value)) {
				let url = AribH5NormalizerUrl(value);
				if (url) {
					app["u"] = url;
				} else {
					app["u"] = value;
				}
				return true;
			}
			return false;
		}],
		["applicationLocation", function ApplicationLocation(value) {
			if (debugOn) console.log("isdb2:applicationLocation=" + value +", @"+location.href);
			if (IsNonemptyString(value)) {
				if (app["u"]) {
					app["u"] += value;
					return true;
				}
			}
			return false;
		}],
		["Isdb2App", function Isdb2App(value) {
			if (debugOn) console.log("isdb2:Isdb2App=" + value +", @"+location.href);
			if ("ARIB-HTML5" === value) {//TODO
				app["t"] = cAppTypeAribH5;//TODO
				return true;
			}
			return false;
		}],
		["controlCode", function ControlCode(value) {
			if (debugOn) console.log("isdb2:controlCode=" + value +", @"+location.href);
			//if ( !== value) {//TODO
				app["c"] = value;
				return true;
			//}
			//return false;
		}],
		["autostartPriority", function AutostartPriority(value) {
			if (debugOn) console.log("isdb2:autostartPriority=" + value +", @"+location.href);
			//if ( !== value) {//TODO
				app["p"] = value;
				return true;
			//}
			//return false;
		}],
	];
	for (let i = 0; i < appKeys.length; ++i) {
		let value = isdb2_AppN.getElementsByTagNameNS(isdb2_ns, appKeys[i][0]);
//		if (debugOn) console.log("isdb2:" + appKeys[i][0] + "=" + value +", @"+location.href);
		if (value && value[0]) {
			let childNodes = value[0].childNodes;
			if (childNodes && childNodes[0] &&
				appKeys[i][1](childNodes[0].nodeValue)) {
			} else {
				ThrowAribH5Error(MISC_ERR);//INVALID_PARAM_ERR);
			}
		}
	}
}
function GetBoundaryFromAIT(isdb2_ns, isdb2_AppN, app) {
	let app_bounarys = [];
	let app_bounary;
	let bpKeys = [
		["permissionBitmap", function PermissionBitmap(value) {
			if (debugOn) console.log("isdb2:permissionBitmap=" + value +", @"+location.href);
			if (! app_bounary["p"]) {
				let permissionBitmap = parseInt(value, 16);
				if (0 <= permissionBitmap) {
					app_bounary["p"] = permissionBitmap;
					return true;
				}
			}
			return false;
		}],
		["managedURL", function ManagedURL(value) {
			if (debugOn) console.log("isdb2:managedURL=" + value +", @"+location.href);
			if (IsStringType(value)) {
				if (0 < value.length) {
					let url = AribH5NormalizerUrl(value);
					if (url) {
						app_bounary["u"].push(url);
					} else {
						app_bounary["u"].push(value);
					}
				}
				return true;
			}
			return false;
		}],
	];
	let isdb2_Bp = isdb2_AppN.getElementsByTagNameNS(isdb2_ns, "boundaryAndPermission");
//	if (debugOn) console.log("isdb2:boundaryAndPermission=" + isdb2_Bp +", @"+location.href);
	if (! isdb2_Bp) {
		return;
	}
	for (let i = 0; i < isdb2_Bp.length; ++i) {
		let isdb2_BpN = isdb2_Bp[i];
//		if (debugOn) console.log("isdb2_Bp[" + i + "]=" + isdb2_BpN +", @"+location.href);
		if (! isdb2_BpN) {
			ThrowAribH5Error(MISC_ERR);//INVALID_PARAM_ERR);
		}
		app_bounary = {
			/*Array */"u" : [],
		};
		for (let j = 0; j < bpKeys.length; ++j) {
			let value = isdb2_BpN.getElementsByTagNameNS(isdb2_ns, bpKeys[j][0]);
//			if (debugOn) console.log("isdb2:" + bpKeys[j][0] + "=" + value +", @"+location.href);
			if (! value) {
				continue;
			}
			for (let k = 0; k < value.length; ++k) {
				if (! value[k]) {
					continue;
				}
				let childNodes = value[k].childNodes;
				if (! childNodes) {
					ThrowAribH5Error(MISC_ERR);//INVALID_PARAM_ERR);
				}
				if (! childNodes[0]) {
					continue;
				}
				if (! bpKeys[j][1](childNodes[0].nodeValue)) {
					ThrowAribH5Error(MISC_ERR);//INVALID_PARAM_ERR);
				}
			}
		}
		if (app_bounary["p"]) {
			app_bounarys.push(app_bounary);
		}
	}
	if (0 < app_bounarys.length) {
		app["b"] = app_bounarys;
	}
}
function ExtractAppFromAIT(aitDoc, org_id, app_id) {
	/**@noinline*/const isdb2_ns = "urn:arib:isdb2:2014";
	let isdb2_App = aitDoc.getElementsByTagNameNS(isdb2_ns, "Application");
//	if (debugOn) console.log("isdb2:Application=" + isdb2_App +", @"+location.href);
	if (! isdb2_App) {
		ThrowAribH5Error(MISC_ERR);//INVALID_PARAM_ERR);
	}
	let app = {};
	for (let i = 0; i < isdb2_App.length; ++i) {
		let isdb2_AppN = isdb2_App[i];
//		if (debugOn) console.log("isdb2_App[" + i + "]=" + isdb2_AppN +", @"+location.href);
		if (! isdb2_AppN) {
			ThrowAribH5Error(MISC_ERR);//INVALID_PARAM_ERR);
		}
		app = {
			/*Number */"o" : org_id,
			/*Number */"i" : app_id,
			/*Number */"p" : 0xFF,//TODO
		};
		GetApplicationFromAIT(isdb2_ns, isdb2_AppN, app);
		if (org_id !== app["o"] || app_id !== app["i"]) {
			continue;
		}
		GetBoundaryFromAIT(isdb2_ns, isdb2_AppN, app);
		break;
	}
	if (IsStringType(app["u"])) {
		if (debugOn) console.log("ait.url=" + app["u"] +", @"+location.href);
		return app;
	}
	ThrowAribH5Error(MISC_ERR);//INVALID_PARAM_ERR);
}
function ReplaceAppFromAIT(ait_url, org_id, app_id) {
	if (debugOn) console.log("ReplaceAppFromAIT: ait_url=" + ait_url +", @"+location.href);
	if (debugOn) console.log("ReplaceAppFromAIT: org_id=" + org_id +", @"+location.href);
	if (debugOn) console.log("ReplaceAppFromAIT: app_id=" + app_id +", @"+location.href);
	let url = ait_url;
	for (let i = 0; i < 5; ++i) {//TODO
		CheckForManagedAreaCurrent(url);//TODO
		let newUrl = DoAribH5Requset(Request_LocateUrl, url);
		if (debugOn) console.log("ReplaceAppFromAIT: newUrl=" + newUrl +", @"+location.href);
		if (IsNonemptyString(newUrl)) {
			CheckIfThrowAribH5Error(newUrl);
			url = AribH5NormalizerUrl(newUrl);
			if (IsNull(url)) {
				url = newUrl;
			}
		} else {
			break;
		}
	}
	let aitXml = DoAribH5Requset(Request_FetchUrl, url);
	if (! (IsStringType(aitXml) && aitXml.startsWith("<"))) {
		CheckIfThrowAribH5Error(aitXml);
		ThrowAribH5Error(MISC_ERR);
	}
	let aitDoc = (new DOMParser()).parseFromString(aitXml, "application/xml");
	let app = ExtractAppFromAIT(aitDoc, org_id, app_id);
	ReplaceApplication(app);
}
PermissionManagedArea.prototype.constructor = PermissionManagedArea;
/**@constructor*/function Application(type, org_id, app_id, ctl_code, as_pri) {
	let application_type = type;
	let organization_id = org_id;
	let application_id = app_id;
	let control_code = (IsStringType(ctl_code) ? ctl_code :
			(0x01 === ctl_code ? "AUTOSTART" :
				(0x02 === ctl_code ? "PRESENT" : "")));
	let autostart_priority = as_pri;
	let application = __oc__(null);
	__odp__(application, "type", {
		get: function () {
			return (cAppTypeAribH5 === application_type ? "ARIB-HTML5" :
				(cAppTypeIsdbH5 === application_type ? "ISDB-HTML" : ""));
		},
		set: ReadOnlyProperty,
		enumerable: true,
	});
	__odp__(application, "organization_id", {
		get: function () {
			return organization_id;
		},
		set: ReadOnlyProperty,
		enumerable: true,
	});
	__odp__(application, "application_id", {
		get: function () {
			return application_id;
		},
		set: ReadOnlyProperty,
		enumerable: true,
	});
	__odp__(application, "control_code", {
		get: function () {
			return control_code;
		},
		set: ReadOnlyProperty,
		enumerable: true,
	});
	__odp__(application, "autostart_priority", {
		get: function () {
			return autostart_priority;
		},
		set: ReadOnlyProperty,
		enumerable: true,
	});
	/*if (debugOn) */__odp__(application, cToString, {
		value: function () {
			return cObjStringB + "Application" + cObjStringE;
		},
		//enumerable: true,
	});
	__odp__(application, "keySet", {
		value: sAribH5KeySet,
		//enumerable = true;
	});
	__odp__(application, "replaceApplication", {
		value: function replaceApplication(
				/*Number */organization_id,
				/*Number */application_id, /*String */ait_url) {
			if (debugOn) console.log("replaceApplication: organization_id=" + organization_id +", @"+location.href);
			if (debugOn) console.log("replaceApplication: application_id=" + application_id +", @"+location.href);
			if (debugOn) console.log("replaceApplication: ait_url=" + ait_url +", @"+location.href);
			CheckForPermissionBitmap(1 << 5);
			organization_id = GetValueOfParamForNumberType(organization_id, 0, 0xFFFE);
			application_id = GetValueOfParamForNumberType(application_id, 0, 0xFFFFFFFE);
			if (IsStringType(ait_url)) {
				ReplaceAppFromAIT(ait_url, organization_id, application_id);
			} else {
				ReplaceApplication({
					/*Number */"o" : organization_id,
					/*Number */"i" : application_id
				});
			}
		},
		//enumerable = true;
	});
	__odp__(application, "destroyApplication", {
		value: function destroyApplication() {
			if (debugOn) console.log("destroyApplication: " +", @"+location.href);
			//CheckForPermissionBitmap(1 << 5);
			DoAribH5Requset(Request_ReplaceApp, "{}");//TODO
		},
		//enumerable = true;
	});
	__odp__(application, "exitFromManagedState", {
		value: function exitFromManagedState(/*String */url) {
			if (debugOn) console.log("exitFromManagedState: url=" + url +", @"+location.href);
			CheckForPermissionBitmap(1 << 5);
			if (! IsStringType(url)) {
				ThrowAribH5Error(INVALID_PARAM_ERR);
			}
			let newUrl = DoAribH5Requset(Request_LocateUrl, url);
			if (debugOn) console.log("exitFromManagedState: newUrl=" + newUrl +", @"+location.href);
			if (IsNonemptyString(newUrl)) {
				if (newUrl.startsWith(AribH5ErrorPrefix)) {
					DoAribH5Requset(Request_ReplaceApp, "{}");//TODO
					ThrowAribH5Error(MISC_ERR);
				}
				url = AribH5NormalizerUrl(newUrl);
				if (IsNull(url)) {
					url = newUrl;
				}
			}
			DoAribH5Requset(Request_EnterUnmanaged, url);
		},
		//enumerable = true;
	});
	__odp__(application, "getOwnerAIT", {
		value: function getOwnerAIT() {
			CheckForPermissionBitmap(1 << 5);
			return sApplicationInformationTable;
		},
		//enumerable = true;
	});
	__odp__(application, "getApplicationBoundaryAndPermissionDescriptor", {
		value: function getApplicationBoundaryAndPermissionDescriptor() {
			CheckForPermissionBitmap(1 << 5);
			return sApplicationBoundaryAndPermissionDescriptor;
		},
		//enumerable = true;
	});
	return application;
}
Application.prototype.constructor = Application;
let sApplicationInformationTable = __oc__(null);
/*if (debugOn) */__odp__(sApplicationInformationTable, cToString, {
	value: function () {
		return cObjStringB + "ApplicationInformationTable" + cObjStringE;
	},
	//enumerable: true,
});
__odp__(sApplicationInformationTable, "getApplications", {
	value: function getApplications() {
		if (debugOn) console.log("getApplications: " +", @"+location.href);
		CheckForPermissionBitmap(1 << 5);
		return sApplications.slice();
	},
	//enumerable = true;
});
let sApplicationBoundaryAndPermissionDescriptor = __oc__(null);
/*if (debugOn) */__odp__(sApplicationBoundaryAndPermissionDescriptor, cToString, {
	value: function () {
		return cObjStringB + "ApplicationBoundaryAndPermissionDescriptor" + cObjStringE;
	},
	//enumerable: true,
});
__odp__(sApplicationBoundaryAndPermissionDescriptor, "getCurrentBoundary", {
	value: function getCurrentBoundary() {
		if (debugOn) console.log("getCurrentBoundary: " +
			sPermissionManagedAreas.concat(sPermissionManagedAreasAdd) +", @"+location.href);
		CheckForPermissionBitmap(1 << 5);
		return sPermissionManagedAreas.concat(sPermissionManagedAreasAdd);
	},
	//enumerable = true;
});
function AddPermissionManagedArea(/*PermissionManagedArea */pma) {
	if (debugOn) console.log("AddPermissionManagedArea: pma=" +
		(pma ? JSON.stringify(pma) : pma) +", @"+location.href);
	CheckForPermissionBitmap(1 << 8);
	if (! pma) {
		ThrowAribH5Error(INVALID_PARAM_ERR);
	}
	let permission = cPermissionBitmapFull;
	if (IsNull(pma["permission"])) {
	} else if (__isa__(pma["permission"])) {
		if (0 < pma["permission"].length) {
			permission = pma["permission"][0];//TODO -> only get the first ?
		}
	} else {
		ThrowAribH5Error(INVALID_PARAM_ERR);
	}
	if (! (IsNull(pma["urls"]) || __isa__(pma["urls"]))) {
		ThrowAribH5Error(INVALID_PARAM_ERR);
	}
	for (let i = 0; i < pma["urls"].length; ++i) {
		let url = AribH5NormalizerUrl(pma["urls"][i]);
		if (url) {
			pma["urls"][i] = url;
		}
	}
	if (! PushPermissionManagedArea(
		permission, pma["urls"], sPermissionManagedAreasAdd)) {
		ThrowAribH5Error(MISC_ERR);
	}
	InitPermissionBitmap();
	SavePermissionManagedAreasAdd();
}
__odp__(sApplicationBoundaryAndPermissionDescriptor, "addPermissionManagedArea", {
	value: AddPermissionManagedArea,
	//enumerable = true;
});
let sAITApplicationBoundaryAndPermissionIdentifier = __oc__(null);//XXX -> only for Hbbtv(ISDB-HTML)
/*if (debugOn) */__odp__(sAITApplicationBoundaryAndPermissionIdentifier, cToString, {
	value: function () {
		return cObjStringB + "AITApplicationBoundaryAndPermissionIdentifier" + cObjStringE;
	},
	//enumerable: true,
});
__odp__(sAITApplicationBoundaryAndPermissionIdentifier, "addPermissionManagedArea", {
	value: AddPermissionManagedArea,
	//enumerable = true;
});
__odp__(sApplicationInformationTable,
		"getApplicationBoundaryAndPermissionIdentifier", {//XXX -> only for Hbbtv(ISDB-HTML)
	value: function getApplicationBoundaryAndPermissionIdentifier() {
		return sAITApplicationBoundaryAndPermissionIdentifier;
	},
	//enumerable = true;
});
function UpdateApplicationsInfo(/*String */jsonAI) {
	if (debugOn) console.log("UpdateApplicationsInfo: jsonAI=" + jsonAI +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
	sApplicationInfos = JSON.parse(jsonAI);
	if (debugOn) console.log("UpdateApplicationsInfo: length=" + sApplicationInfos.length +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @JSON.parse(jsonAI)" +", @"+location.href);
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	sApplicationInfos = [];//throw e;
/*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
	sApplications = [];
	sApplicationInfos.forEach(function AppsInfoEach(app, index) {
		if (debugOn) console.log("app=" + JSON.stringify(app) +", @"+location.href);
		if (debugOn) if (IsUndefinedType(app["t"]) ||
			IsUndefinedType(app["o"]) || IsUndefinedType(app["i"]) ||
			IsUndefinedType(app["c"]) || IsUndefinedType(app["p"]))
				ThrowAribH5Error(MISC_ERR);
		sApplications.push(new Application(
			app["t"], app["o"], app["i"], app["c"], app["p"]));
	});
	sPermissionManagedAreas = [];
	sPermissionManagedAreas["b"]/*bitmap_total*/ = 0;
	sPermissionManagedAreas["u"]/*url_total*/ = 0;
	if (__isa__(sApplicationInfos[0]["b"])) {
		sApplicationInfos[0]["b"].forEach(function (pma) {
			PushPermissionManagedArea(
				pma["p"], pma["u"], sPermissionManagedAreas);
		});
	}
	InitPermissionManagedAreasAdd();
	InitPermissionBitmap();
}
UpdateApplicationsInfo(DoAribH5Requset(Request_AppsInfo, "get:"));
if (debugOn) console.log("ownerApplication.type=" + sApplications[0]["type"] +", @"+location.href);
if (debugOn) console.log("currentAppType=" + cCurrentAppType +", @"+location.href);
if (debugOn) if (! ((cAppTypeAribH5 === cCurrentAppType &&
	"ARIB-HTML5" === sApplications[0]["type"]) ||
	(cAppTypeIsdbH5 === cCurrentAppType &&
	"ISDB-HTML" === sApplications[0]["type"]))) ThrowAribH5Error(MISC_ERR);

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define navigator.applicationManager" +", @"+location.href);
__odp__(navigator, "applicationManager",
		new (/**@constructor*/function ApplicationManagerCtor() {
	let ApplicationManager = __oc__(null);
	this.get = function () {
//		if (debugOn) console.log("applicationManager.get: " +", @"+location.href);
		return ApplicationManager;
	};
	//this.enumerable = true;
	/*if (debugOn) */__odp__(ApplicationManager, cToString, {
		value: function () {
			return cObjStringB + "ApplicationManager" + cObjStringE;
		},
		//enumerable: true,
	});
	__odp__(ApplicationManager, "getOwnerApplication", {
		value: function getOwnerApplication(/*[Document] */doc) {
			if (debugOn) console.log("getOwnerApplication: doc=" + doc +", @"+location.href);
			//CheckForPermissionBitmap(1 << 5);
			if (IsUndefinedType(doc) || (doc instanceof Document)) {
				return sApplications[0];
			}
			ThrowAribH5Error(INVALID_PARAM_ERR);
		},
		//enumerable = true;
	});
	__odp__(ApplicationManager, "launchDataBroadcastingBrowser", {//XXX -> only for Hbbtv(ISDB-HTML)
		value: function launchDataBroadcastingBrowser(
				/*ISDBResourceReference */startup) {
			if (debugOn) console.log("launchDataBroadcastingBrowser: startup=" +
				(startup ? JSON.stringify(startup) : startup) +", @"+location.href);
if (cAppTypeIsdbH5 !== cCurrentAppType) {//FIXME: XXX
	return;//TODO
}
			let exitParam = {
				"onid"  : -1,
				"tsid"  : -1,
				"sid"   : -1,
				"ctag"  : 0x40,
				"mid"   : 0x0000,
				"rname" : "startup.bml",
			};
			if (startup) {
				let net_id = startup["original_network_id"];
				if (IsStringType(net_id) && ! isNaN(net_id)) {
					net_id = Number(net_id);
				}
				if (IsNumberType(net_id) && 0 < net_id && 0xFFFF > net_id) {
					exitParam["onid"] = net_id;
				}
				let ts_id = startup["transport_stream_id"];
				if (IsStringType(ts_id) && ! isNaN(ts_id)) {
					ts_id = Number(ts_id);
				}
				if (IsNumberType(ts_id) && 0 < ts_id && 0xFFFF > ts_id) {
					exitParam["tsid"] = ts_id;
				}
				let svc_id = startup["service_id"];
				if (IsStringType(svc_id) && ! isNaN(svc_id)) {
					svc_id = Number(svc_id);
				}
				if (IsNumberType(svc_id) && 0 < svc_id && 0xFFFF > svc_id) {
					exitParam["sid"] = svc_id;
				}
				let cmp_tag = startup["component_tag"];
				if (IsStringType(cmp_tag) && ! isNaN(cmp_tag)) {
					cmp_tag = Number(cmp_tag);
				}
				if (IsNumberType(cmp_tag) && 0x40 <= cmp_tag && 0xFF > cmp_tag) {
					exitParam["ctag"] = cmp_tag;
				}
				let mod_id = startup["module_id"];
				if (IsStringType(mod_id) && ! isNaN(mod_id)) {
					mod_id = Number(mod_id);
				}
				if (IsNumberType(mod_id) && 0 <= mod_id && 0xFFFF > mod_id) {
					exitParam["mid"] = mod_id;
				} else {
					mod_id = startup["module_name"];
					if (IsStringType(mod_id) && ! isNaN(mod_id)) {
						mod_id = Number(mod_id);
					}
					if (IsNumberType(mod_id) && 0 <= mod_id && 0xFFFF > mod_id) {
						exitParam["mid"] = mod_id;
					}
				}
				let res_name = startup["resource_name"];
				if (IsStringType(res_name)) {
					exitParam["rname"] = res_name;
				}
			}
			DoAribH5Requset(Request_Exit, JSON.stringify(exitParam));
		},
		//enumerable = true;
	});
	__odp__(ApplicationManager, "attemptReloadErrorPage", {//XXX -> for Error page ?
		value: function launchLastFinishedPage() {
			let url = DoAribH5Requset(Request_ConstantPage, "error");
			if (debugOn) console.log("attemptReloadErrorPage: url=" + url +", @"+location.href);
			let startup = url.indexOf(",startup");
			if (0 < startup) {
				url = url.substring(0, startup);
			}
			if (0 < url.length) {
				window.setInterval(function (url) {
					let newUrl = DoAribH5Requset(Request_LocateUrl, url);
					if (IsStringType(newUrl) &&
						newUrl.startsWith(AribH5ErrorPrefix)) {
						return;
					}
					location.href = url;
					//history.go(0 < startup ? (1 - history.length) : -1);
					//history.pushState("", null, url);
				}, 1000, url);
			}
			return (0 > startup);
		},
		//enumerable = true;
	});
})());

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** customize window.localStorage" +", @"+location.href);
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
if (0 <= sApplicationInfos[0]["o"] && 0 <= sApplicationInfos[0]["i"]) {//FIXME: XXX -> only for exitFromManagedState()
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
///////////////////////////////////////////////////////////////////////////////
const __wls__ = window.localStorage;
if (debugOn) if (! __wls__) ThrowAribH5Error(MISC_ERR);
if (debugOn) {
	console.log("localStorage.length=" + __wls__.length +", @"+location.href);
	for (let i = 0; i < __wls__.length; ++i) {
		console.log("localStorage[" + __wls__.key(i) + "]=" + __wls__.getItem(__wls__.key(i)) +", @"+location.href);
	}
}
/**@noinline*/const cAribH5LSGetItem = "getItem";
/**@noinline*/const cAribH5LSSetItem = "setItem";
/**@noinline*/const cAribH5LSRemoveItem = "removeItem";
/**@noinline*/const cAribH5LSLength = "length";
/**@noinline*/const cAribH5LSKey = "key";
/**@noinline*/const cAribH5LSClear = "clear";
const __wls_git__ = __wls__.getItem;
const __wls_sit__ = __wls__.setItem;
const __wls_rit__ = __wls__.removeItem;
const __wls_len__ = Storage.prototype.__lookupGetter__(cAribH5LSLength);
const __wls_key__ = __wls__.key;
const __wls_clr__ = __wls__.clear;
__wls__[cAribH5LSGetItem] = function LocalStorageGetItem(key) {
//	if (debugOn) console.log("localStorage.getItem: key=" + key +", @"+location.href);
	CheckForPermissionBitmap(cPermissionBitmapStorage);
	if (! IsStringType(key)) {
		ThrowAribH5Error(INVALID_PARAM_ERR);
	}
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
	let value = FilterAllKey(key, null);
	if (debugOn) console.log("localStorage.getItem: " + key + "=" + value +", @"+location.href);
	if (IsStringType(value)) {
		return value;
	}
	value = __wls_git__.call(this, key);
	if (debugOn) console.log("localStorage.getItem: " + key + "=" + value +", @"+location.href);
	return value;
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @localStorage.getItem" +", @"+location.href);
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	throw e;
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
};
__wls__[cAribH5LSSetItem] = function LocalStorageSetItem(key, value) {
	if (debugOn) console.log("localStorage.setItem: " + key + "=" + value +", @"+location.href);
	CheckForPermissionBitmap(cPermissionBitmapStorage);
	if (! IsStringType(key)) {
		ThrowAribH5Error(INVALID_PARAM_ERR);
	}
	if (IsUndefinedType(value)) {
		ThrowAribH5Error(INVALID_PARAM_ERR);
	}
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
	if (! IsStringType(value)) {
		value = value.toString();
	}
	if (IsStringType(FilterAllKey(key, value))) {
		return;
	}
	if (debugOn) console.log("localStorage.setItem: " + key + "=" + value +", @"+location.href);
	__wls_sit__.call(this, key, value);
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @localStorage.setItem" +", @"+location.href);
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	throw e;
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
};
__wls__[cAribH5LSRemoveItem] = function LocalStorageRemoveItem(key) {
	if (debugOn) console.log("localStorage.removeItem: " + key +", @"+location.href);
	CheckForPermissionBitmap(cPermissionBitmapStorage);
	if (! IsStringType(key)) {
		ThrowAribH5Error(INVALID_PARAM_ERR);
	}
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
	if (IsStringType(FilterRemoveKey(key))) {
		return;
	}
	if (debugOn) console.log("localStorage.removeItem: " + key +", @"+location.href);
	__wls_rit__.call(this, key);
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @localStorage.removeItem" +", @"+location.href);
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	throw e;
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
};
//if (false) {//TODO
__odp__(__wls__, cAribH5LSLength, {
	get: function LocalStorageLength() {
//		if (debugOn) console.log("localStorage.length: " +", @"+location.href);
		CheckForPermissionBitmap(cPermissionBitmapStorage);
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
		let value = FilterAllKey(cAribH5KeyPrefix);
		if (debugOn) console.log("localStorage.length: " + value +", @"+location.href);
		return parseInt(value, 10) + __wls_len__.call(this);
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @localStorage.length" +", @"+location.href);
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	throw e;
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
	},
	//enumerable: true,
});
//}
__wls__[cAribH5LSKey] = function LocalStorageKey(n) {
	if (debugOn) console.log("localStorage.key: " + n +", @"+location.href);
	CheckForPermissionBitmap(cPermissionBitmapStorage);
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
	let value = "";//FIXME: XXX
	//TODO
	if (debugOn) console.log("localStorage.key: " + n + "=" + value +", @"+location.href);
	return __wls_key__.call(this, n);
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @localStorage.key" +", @"+location.href);
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	throw e;
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
};
__wls__[cAribH5LSClear] = function LocalStorageClear() {
	if (debugOn) console.log("localStorage.clear: " +", @"+location.href);
	CheckForPermissionBitmap(cPermissionBitmapStorage);
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/try {
	FilterRemoveKey(cAribH5KeyPrefix);
	__wls_clr__.call(this);
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/} catch (e) {
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	console.log("exception=" + e + " @localStorage.clear" +", @"+location.href);
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/	throw e;
///*CATCH_ALL_EXCEPTION_FOR_DEBUG*/}
};
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
}
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

///////////////////////////////////////////////////////////////////////////////
function InitUpdateViewport() {
	if (debugOn) console.log("*** remove meta/viewport/initial-scale" +", @"+location.href);
	let metaList = document.getElementsByTagName("meta");
	for (let i = 0; i < metaList.length; ++i) {
		if ("viewport" === metaList[i].getAttribute("name")) {
			metaList[i].content =
				metaList[i].content.replace("initial-scale", "x");//TODO
		}
	}
	if (debugOn) console.log("InitUpdateViewport: windowWH=" +
		window.innerWidth + "," + window.innerHeight +", @"+location.href);
	//let viewportW = window.innerWidth;
	//let viewportH = window.innerHeight;
	let viewportW = (cAppTypeAribH5 === cCurrentAppType ? 3840 : 1920);
	let viewportH = (cAppTypeAribH5 === cCurrentAppType ? 2160 : 1080);
	let missingViewport = true;
	for (let i = metaList.length - 1; 0 <= i; --i) {
		if ("viewport" === metaList[i].getAttribute("name")) {
			let width = metaList[i].content.match(/width\s*=\s*\d{1,}/i);
			let height = metaList[i].content.match(/height\s*=\s*\d{1,}/i);
			if (Array.isArray(width) && 0 < width.length) {
				width = parseInt(width[0].split("=", 2)[1], 10);
				if (debugOn) console.log("InitUpdateViewport: width=" +
					width +", @"+location.href);
			} else {
				width = -1;
			}
			if (Array.isArray(height) && 0 < height.length) {
				height = parseInt(height[0].split("=", 2)[1], 10);
				if (debugOn) console.log("InitUpdateViewport: height=" +
					height +", @"+location.href);
				if (0 >= width) {
					width = height * 16 / 9;
				}
			} else {
				if (0 < width) {
					height = width * 9 / 16;
				} else {
					height = -1;
				}
			}
			if (debugOn) console.log("InitUpdateViewport: viewportWH=" +
				width + "," + height +", @"+location.href);
			if (0 < width && 0 < height) {
				if (cAppTypeAribH5 === cCurrentAppType) {
					if ((3840 === width && 2160 === height) ||
						(1920 === width && 1080 === height) ||
						(7680 === width && 4320 === height)) {
						viewportW = width;
						viewportH = height;
					}
				} else {
					if (1920 === width && 1080 === height) {
						viewportW = width;
						viewportH = height;
					}
				}
				missingViewport = false;
				break;
			}
		}
	}
	if (missingViewport) {
		let meta = document.createElement('meta');
		meta.name = "viewport";
		meta.content = ("width=" + viewportW + ",height=" + viewportH);
		document.getElementsByTagName('head')[0].appendChild(meta);
	}
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//if (debugOn) {
if (viewportW > 3840 || viewportH > 2160) {//FIXME: XXX -> FIXED_FOR_APAB_*_ALL ?
	if (debugOn) console.log("InitUpdateViewport: error viewport");
	//XXX -> disable
	if (true) {//goto blank page ?
		DoAribH5Requset(Request_ErrorOccurred, "blank:" + "error viewport");//XXX
		//return;
	}
	//DoAribH5Requset(Request_Key, "setkeyset:0");
	sAribH5KeySet["setValue"](0);
	if (document.body) {
		document.body.innerHTML = "";
	}
	document.open();
	document.write("\
<html lang='ja'>\
	<head>\
		<title>BS 4K | Blank page</title>\
		<meta http-equiv='Content-Type' content='text/html' charset='utf-8'>\
		<meta name='viewport' content='width=3840,height=2160'>\
		<style type='text/css'>\
			* {\
				position:absolute;\
				margin:0;\
				padding:0;\
				border:0;\
				outline:0\
			}\
			body {\
				width:3840px;\
				height:2160px;\
				overflow:hidden\
			}\
			#av {\
				left:0px;\
				top:0px;\
				width:100%;\
				height:100%;\
				z-index:-1\
			}\
		</style>\
	</head>\
	<body>\
		<object id='av' type='video/x-arib2-broadcast'></object>\
	</body>\
</html>\
	");
	document.close();
	return;
}
//}
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
	DoAribH5Requset(Request_UpdateViewport, viewportW + "," + viewportH);
}

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define CheckVideoScale" +", @"+location.href);
let sVideoRect = DoAribH5Requset(Request_ScaleVideo, "get:");
if (IsStringType(sVideoRect)) {
	sVideoRect = sVideoRect.split(",", 4);
	if (sVideoRect[1]) {
		if (0 > sVideoRect[2]) {
			sVideoRect[2] = 0;
		}
		if (0 > sVideoRect[3]) {
			sVideoRect[3] = 0;
		}
	} else {
		sVideoRect = [0,0,0,0];
	}
} else {
	sVideoRect = [0,0,0,0];
}
if (debugOn) console.log("videoRect=" + sVideoRect +", @"+location.href);
let sIntervalScaleVideo = -1;
let sCheckingScaleVideo = true;
function NotifyVideoScale(/*String */videoRect) {
	sCheckingScaleVideo = false;
	if (videoRect === sVideoRect.toString()) {
		return;
	}
	sVideoRect = videoRect.split(",", 4);
	if (debugOn) console.log("NotifyVideoScale: videoRect=" + videoRect +", @"+location.href);
	DoAribH5Requset(Request_ScaleVideo, videoRect);
}
function UpdateVideoScale(videoObject, /*Boolean */firstCall) {
	let left = 0, top = 0, width = 0, height = 0;
	if (videoObject) {
		let rect = videoObject.getBoundingClientRect();
//		if (debugOn) console.log("UpdateVideoScale: videoRect=" +
//			rect.left + "," + rect.top + "," + rect.right + "," + rect.bottom +", @"+location.href);
		left = Math.trunc(rect.left);
		top = Math.trunc(rect.top);
		width = Math.round(rect.right) - left;
		height = Math.round(rect.bottom) - top;
	} else {
		EndPlayOfVideoObject(firstCall);
	}
//	if (debugOn) console.log("UpdateVideoScale: videoRect=" +
//		left + "," + top + "," + width + "," + height +", @"+location.href);
	if (left === sVideoRect[0] && top === sVideoRect[1] &&
		width === sVideoRect[2] && height === sVideoRect[3]) {
		return;
	}
	sVideoRect[0] = left;
	sVideoRect[1] = top;
	sVideoRect[2] = width;
	sVideoRect[3] = height;
	let videoRect = (left + "," + top + "," + width + "," + height);
	if (debugOn) console.log("UpdateVideoScale: videoRect=" + videoRect +", @"+location.href);
	DoAribH5Requset(Request_ScaleVideo, videoRect);
	if (firstCall) {
		MatchBroadcastVideoObject(videoObject);
	}
	if (0 < width && 0 < height) {
		BeginPlayOfVideoObject(firstCall);
	} else if (! firstCall) {
		EndPlayOfVideoObject();
	}
}
let sVideoQuery = (cAppTypeAribH5 === cCurrentAppType ? "arib2" : "iptvf");
sVideoQuery = "object[type='video/x-" + sVideoQuery + "-broadcast']";
if (debugOn) console.log("*** define Check(" + sVideoQuery + ")" +", @"+location.href);
function StartCheckVideoScale() {
	(function CheckVideoScale(/*Boolean */firstCall) {
//		if (debugOn) console.log("CheckVideoScale: videoQuery=" + sVideoQuery +", @"+location.href);
		let videoObject = document.querySelector(sVideoQuery);
		if (debugOn) if (! videoObject) console.log("CheckVideoScale: videoObject=" + videoObject +", @"+location.href);
//		if (debugOn) console.log("CheckVideoScale: firstCall=" + firstCall +", @"+location.href);
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//if (debugOn) {
if (cAppTypeAribH5 === cCurrentAppType && ! videoObject) {//FIXME: XXX -> FIXED_FOR_APAB_*_ALL ?
	videoObject = document.querySelector("object[type='video/x-iptvf-broadcast']");
	if (debugOn) console.log("CheckVideoScale: videoObject=" + videoObject +", @"+location.href);
	if (videoObject) {
		if (debugOn) console.log("CheckVideoScale: error video object");
		if (false) {//XXX -> temp fix
//TODO			//DoAribH5Requset(Request_Key, "setkeyset:" + 0x09F);
//TODO			sAribH5KeySet["setValue"](0x09F);
		} else {//XXX -> disable
			if (true) {//goto blank page ?
				DoAribH5Requset(Request_ErrorOccurred, "blank:" + "error video object");//XXX
				//return;
			}
			//DoAribH5Requset(Request_Key, "setkeyset:0");
			sAribH5KeySet["setValue"](0);
			if (document.body) {
				document.body.innerHTML = "";
			}
			document.open();
			document.write("\
<html lang='ja'>\
	<head>\
		<title>BS 4K | Blank page</title>\
		<meta http-equiv='Content-Type' content='text/html' charset='utf-8'>\
		<meta name='viewport' content='width=3840,height=2160'>\
		<style type='text/css'>\
			* {\
				position:absolute;\
				margin:0;\
				padding:0;\
				border:0;\
				outline:0\
			}\
			body {\
				width:3840px;\
				height:2160px;\
				overflow:hidden\
			}\
			#av {\
				left:0px;\
				top:0px;\
				width:100%;\
				height:100%;\
				z-index:-1\
			}\
		</style>\
	</head>\
	<body>\
		<object id='av' type='video/x-arib2-broadcast'></object>\
	</body>\
</html>\
			");
			document.close();
			return;
		}
	}
}
//}
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
		UpdateVideoScale(videoObject, firstCall);
		if (videoObject && sCheckingScaleVideo) {
			if (firstCall || 0 > sIntervalScaleVideo) {
				sIntervalScaleVideo = window.setInterval(CheckVideoScale, 50);
				if (debugOn) console.log("CheckVideoScale: start interval, " +
					sIntervalScaleVideo +", @"+location.href);
			}
		} else {
			if (0 <= sIntervalScaleVideo) {
				if (debugOn) console.log("CheckVideoScale: stop interval, " +
					sIntervalScaleVideo +", @"+location.href);
				window.clearInterval(sIntervalScaleVideo);
				sIntervalScaleVideo = -1;
			}
			if (! videoObject) {
				StartBodyMutationObserver();
			}
		}
	})(true);
}

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define BroadcastVideoObject" +", @"+location.href);
/**@noinline*/const cVideoMutationAttributes = "attributes";
/**@noinline*/const cVideoMutationStyle = "style";
/**@noinline*/const cVideoMutationChildList = "childList";
/**@noinline*/const cVideoParam = "param";
/**@noinline*/const cVideoParamName = "name";
/**@noinline*/const cVideoParamValue = "value";
/**@noinline*/const cFullscreenName = "fullscreen";
/**@noinline*/const cVideoSrcName = "video_src";
/**@noinline*/const cAudioSrcName = "audio_src";
/**@noinline*/const cAudioMuteName = "audio_mute";
/**@noinline*/const cCaptionSrcName = "caption_src";
/**@noinline*/const cDefaultSrcNS = cAppTypeAribH5 === cCurrentAppType ?
	"arib2://-1.-1.-1" : "arib://-1.-1.-1";
/**@noinline*/const cDefaultSrc = cDefaultSrcNS + "/-1";
/**@noinline*/const cDefaultAble = "tv";//XXX
/**@noinline*/const cValueEnable = "enable";
/**@noinline*/const cValueDisable = "disable";
/**@noinline*/const cVideoTagRange = [0x0000, 0x000F];
/**@noinline*/const cAudioTagRange = [0x0010, 0x002F];
/**@noinline*/const cCaptionTagRange = [0x0030, 0x0037];
let sFullscreen = "";
let sVideoSrcTag = -2;
let sAudioSrcTag = -2;
let sAudioMute = "";
let sCaptionSrcTag = -2;
let sCaptionShow = "";
let sBroadcastVideoObject = null;
let sVideoMutationObserver = null;
function GetSrcTagOfVideoObject(/*String */url, /*Array */tagRange, /*Boolean */noDefault) {
//	if (debugOn) console.log("GetSrcTagOfVideoObject: url=" + url +", @"+location.href);
	if (IsStringType(url)) {
		let tag = url.lastIndexOf("/");
		if (0 === tag ||
			(0 < tag && url.startsWith(cDefaultSrcNS))) {
			url = url.substring(tag + 1);
			tag = parseInt(url, 16);
			if (-1 === tag ||
				(tagRange[0] <= tag && tagRange[1] >= tag)) {
//				if (debugOn) console.log("GetSrcTagOfVideoObject: tag=" + tag +", @"+location.href);
				return tag;
			}
		}
	}
//	if (debugOn) console.log("GetSrcTagOfVideoObject: unknown tag, noDefault=" + noDefault +", @"+location.href);
	return noDefault ? -2 : -1;
}
function GetAbleOfVideoObject(/*String */able, /*Boolean */noDefault) {
	if (cDefaultAble === able ||
		cValueEnable === able || cValueDisable === able) {
		return able;
	}
	return noDefault ? "" : cDefaultAble;
}
function QueryVideoParam(videoObject, /*String */name) {
	return videoObject.querySelector(
		cVideoParam + "[" + cVideoParamName + "='" + name + "']");
}
function ValueOfVideoParam(videoObject, /*String */name, /*String */defValue) {
	let videoParam = QueryVideoParam(videoObject, name);
	let value;
	if (videoParam) {
		value = videoParam.getAttribute(cVideoParamValue);
	}
//	if (debugOn) console.log("ValueOfVideoParam: " + name + ".value=" + value +", @"+location.href);
	if (IsNonemptyString(value)) {
		return value;
	}
	return defValue;
}
function UpdateVideoParam(videoObject, /*String */name, /*String */value) {
	let append = false;
	let videoParam = QueryVideoParam(videoObject, name);
	if (! videoParam) {
		append = true;
		videoParam = document.createElement(cVideoParam);
		videoParam.setAttribute(cVideoParamName, name);
	}
//	if (debugOn) console.log("UpdateVideoParam: " + name + ".value=" + value +", @"+location.href);
	videoParam.setAttribute(cVideoParamValue, value);
	if (append) {
//		if (debugOn) console.log("UpdateVideoParam: append " + name +", @"+location.href);
		videoObject.appendChild(videoParam);
	}
	return videoParam;
}
let sTimeoutEndPlayOfVideo = -1;
function BeginPlayOfVideoObject(/*Boolean */firstCall) {
	if (debugOn) console.log("BeginPlayOfVideoObject: " +
		sVideoSrcTag + "," + sAudioSrcTag + "," + sAudioMute + "," +
		sCaptionSrcTag + "," + sCaptionShow + "," + firstCall +", @"+location.href);
	if (0 <= sTimeoutEndPlayOfVideo) {
		if (debugOn) console.log("clear Timeout of EndPlayOfVideo: " + sTimeoutEndPlayOfVideo);
		window.clearTimeout(sTimeoutEndPlayOfVideo);
		sTimeoutEndPlayOfVideo = -1;
	}
	if (firstCall || -1 > sVideoSrcTag) {
		UpdateVideoParamVideoSrc(ValueOfVideoParam(
			sBroadcastVideoObject, cVideoSrcName, cDefaultSrc));
	}
	if (firstCall || -1 > sAudioSrcTag) {
		UpdateVideoParamAudioSrc(ValueOfVideoParam(
			sBroadcastVideoObject, cAudioSrcName, cDefaultSrc));
	}
	if (firstCall || 0 === sAudioMute.length) {
		UpdateVideoParamAudioMute(ValueOfVideoParam(
			sBroadcastVideoObject, cAudioMuteName, cDefaultAble));
	}
	if (firstCall || -1 > sCaptionSrcTag) {//XXX
		UpdateVideoParamCaptionSrc(ValueOfVideoParam(
			sBroadcastVideoObject, cCaptionSrcName, cDefaultSrc));
	}
	if (firstCall || 0 === sCaptionShow.length) {//XXX
		DoAribH5Requset(Request_SelectCaption, "show:" + "tv");//XXX
		sCaptionShow = "tv";
	}
}
function DoEndPlayOfVideoObject(/*Boolean */firstCall) {
	if (debugOn) console.log("DoEndPlayOfVideoObject: " +
		sVideoSrcTag + "," + sAudioSrcTag + "," + sAudioMute + "," +
		sCaptionSrcTag + "," + sCaptionShow + "," + firstCall + "," +
		sTimeoutEndPlayOfVideo +", @"+location.href);
	if (0 <= sTimeoutEndPlayOfVideo) {
		sTimeoutEndPlayOfVideo = -1;
	} else if (-1 > sTimeoutEndPlayOfVideo) {
		if (debugOn) console.log("skip Timeout of EndPlayOfVideo");
		return;
	}
	/**@noinline*/const url_end = "set:/ffff";
	if (firstCall || -1 <= sVideoSrcTag) {
		sVideoSrcTag = -2;
		DoAribH5Requset(Request_SelectVideo, url_end);
	}
	if (firstCall || -1 <= sAudioSrcTag) {
		sAudioSrcTag = -2;
		DoAribH5Requset(Request_SelectAudio, url_end);
	}
	if (firstCall || cValueDisable === sAudioMute) {
		sAudioMute = "";
		DoAribH5Requset(Request_SelectAudio, "mute:" + cValueEnable);
	}
	if (firstCall || -1 <= sCaptionSrcTag) {//XXX
		sCaptionSrcTag = -2;
		DoAribH5Requset(Request_SelectCaption, url_end);
	}
	if (firstCall || 0 < sCaptionShow.length) {//XXX
		sCaptionShow = "";
		DoAribH5Requset(Request_SelectCaption, "show:" + "off");
	}
}
function EndPlayOfVideoObject(/*Boolean */firstCall) {
	if (debugOn) console.log("EndPlayOfVideoObject: " +
		sVideoSrcTag + "," + sAudioSrcTag + "," + sAudioMute + "," +
		sCaptionSrcTag + "," + sCaptionShow + "," + firstCall +", @"+location.href);
	if (firstCall) {
		if (0 > sTimeoutEndPlayOfVideo) {
			sTimeoutEndPlayOfVideo =
				window.setTimeout(DoEndPlayOfVideoObject, 500, true);//TODO
		}
	} else {
		DoEndPlayOfVideoObject(firstCall);
	}
}
function UpdateVideoParamFullscreen(/*String */value) {
	if (debugOn) console.log("UpdateVideoParamFullscreen: " + cFullscreenName + ".value=" + value +", @"+location.href);
	let newFullscreen = GetAbleOfVideoObject(value, true);
	if (newFullscreen === sFullscreen) {
		return true;
	}
	sFullscreen = newFullscreen;
	UpdateVideoParam(sBroadcastVideoObject, cFullscreenName, value);
	return true;
}
function UpdateVideoParamVideoSrc(/*String */value, /*String */oldValue) {
	if (debugOn) console.log("UpdateVideoParamVideoSrc: " + cVideoSrcName + ".value=" + value +", @"+location.href);
	if (debugOn) console.log("UpdateVideoParamVideoSrc: " + cVideoSrcName + ".oldValue=" + oldValue +", @"+location.href);
	let newTag = GetSrcTagOfVideoObject(value, cVideoTagRange, true);
	if (-1 > newTag) {
		if (IsStringType(oldValue)) {
			UpdateVideoParam(sBroadcastVideoObject, cVideoSrcName, oldValue);
		} else {
			ThrowAribH5Error(INVALID_PARAM_ERR);
		}
		return false;
	}
	if (newTag === sVideoSrcTag) {
		return true;
	}
	let oldTag = sVideoSrcTag;
	sVideoSrcTag = newTag;
	let result = DoAribH5Requset(Request_SelectVideo, "set:" + value);
	if (debugOn) console.log("UpdateVideoParamVideoSrc: " + result +", @"+location.href);
	let setTag = GetSrcTagOfVideoObject(result, cVideoTagRange, true);
	if (-1 <= setTag) {
		UpdateVideoParam(sBroadcastVideoObject, cVideoSrcName, value);
		return true;
	}
	sVideoSrcTag = oldTag;
	return false;
}
function UpdateVideoParamAudioSrc(/*String */value, /*String */oldValue) {
	if (debugOn) console.log("UpdateVideoParamAudioSrc: " + cAudioSrcName + ".value=" + value +", @"+location.href);
	if (debugOn) console.log("UpdateVideoParamAudioSrc: " + cVideoSrcName + ".oldValue=" + oldValue +", @"+location.href);
	let newTag = GetSrcTagOfVideoObject(value, cAudioTagRange, true);
	if (-1 > newTag) {
		if (IsStringType(oldValue)) {
			UpdateVideoParam(sBroadcastVideoObject, cAudioSrcName, oldValue);
		} else {
			ThrowAribH5Error(INVALID_PARAM_ERR);
		}
		return false;
	}
	if (newTag === sAudioSrcTag) {
		return true;
	}
	let oldTag = sAudioSrcTag;
	sAudioSrcTag = newTag;
	let result = DoAribH5Requset(Request_SelectAudio, "set:" + value);
	if (debugOn) console.log("UpdateVideoParamAudioSrc: " + result +", @"+location.href);
	let setTag = GetSrcTagOfVideoObject(result, cAudioTagRange, true);
	if (-1 <= setTag) {
		UpdateVideoParam(sBroadcastVideoObject, cAudioSrcName, value);
		return true;
	}
	sAudioSrcTag = oldTag;
	return false;
}
function UpdateVideoParamAudioMute(/*String */value) {
	if (debugOn) console.log("UpdateVideoParamAudioMute: " + cAudioMuteName + ".value=" + value +", @"+location.href);
	let newMute = GetAbleOfVideoObject(value, true);
	if (newMute === sAudioMute) {
		return true;
	}
	let oldMute = sAudioMute;
	sAudioMute = newMute;
	let result = DoAribH5Requset(Request_SelectAudio, "mute:" + value);
	if (debugOn) console.log("UpdateVideoParamAudioMute: " + result +", @"+location.href);
	let setMute = GetAbleOfVideoObject(result, true);
	if (0 < setMute.length) {
		UpdateVideoParam(sBroadcastVideoObject, cAudioMuteName, value);
		return true;
	}
	sAudioMute = oldMute;
	return false;
}
function UpdateVideoParamCaptionSrc(/*String */value, /*String */oldValue) {
	if (debugOn) console.log("UpdateVideoParamCaptionSrc: " + cCaptionSrcName + ".value=" + value +", @"+location.href);
	if (debugOn) console.log("UpdateVideoParamCaptionSrc: " + cVideoSrcName + ".oldValue=" + oldValue +", @"+location.href);
	let newTag = GetSrcTagOfVideoObject(value, cCaptionTagRange, true);
	if (-1 > newTag) {
		if (IsStringType(oldValue)) {
			UpdateVideoParam(sBroadcastVideoObject, cCaptionSrcName, oldValue);
		} else {
			ThrowAribH5Error(INVALID_PARAM_ERR);
		}
		return false;
	}
	if (newTag === sCaptionSrcTag) {
		return true;
	}
	let oldTag = sCaptionSrcTag;
	sCaptionSrcTag = newTag;
	let result = DoAribH5Requset(Request_SelectCaption, "set:" + value);
	if (debugOn) console.log("UpdateVideoParamCaptionSrc: " + result +", @"+location.href);
	let setTag = GetSrcTagOfVideoObject(result, cCaptionTagRange, true);
	if (-1 <= setTag) {
		UpdateVideoParam(sBroadcastVideoObject, cCaptionSrcName, value);
		return true;
	}
	sCaptionSrcTag = oldTag;
	return false;
}
function VideoParamMutationObserver(mutationsList) {
	for (let mutation of mutationsList) {
//		if (debugOn) console.log("VideoParamMutationObserver: mutation.type=" + mutation.type +", @"+location.href);
		if (cVideoMutationAttributes !== mutation.type) {
			continue;
		}
//		if (debugOn) console.log("VideoParamMutationObserver: mutation.attributeName=" + mutation.attributeName +", @"+location.href);
		if (cVideoParamValue !== mutation.attributeName) {
			continue;
		}
		let name = mutation.target.getAttribute(cVideoParamName);
		let observer = sVideoParamMutationObservers[name];
		if (observer) {
			let value = mutation.target.getAttribute(cVideoParamValue);
			if (debugOn) console.log("VideoParamMutationObserver: " + name + ".value=" + value +", @"+location.href);
			observer["u"](value, mutation.oldValue);
		}
	}
}
let sVideoParamMutationObservers = {
	[cFullscreenName] : {
			"h" : null,
			"u" : UpdateVideoParamFullscreen,
			"d" : cValueDisable
		},
	[cVideoSrcName] : {
			"h" : null,
			"u" : UpdateVideoParamVideoSrc,
			"d" : cDefaultSrc
		},
	[cAudioSrcName] : {
			"h" : null,
			"u" : UpdateVideoParamAudioSrc,
			"d" : cDefaultSrc
		},
	[cAudioMuteName] : {
			"h" : null,
			"u" : UpdateVideoParamAudioMute,
			"d" : cDefaultAble
		},
	[cCaptionSrcName] : {
			"h" : null,
			"u" : UpdateVideoParamCaptionSrc,
			"d" : cDefaultSrc
		},
};
function StartVideoParamMutationObserver(videoParam, /*String */name) {
	let value = videoParam.getAttribute(cVideoParamValue);
	let observer = sVideoParamMutationObservers[name];
	if (debugOn) console.log("set (Video Param " + name + "): value=" + value +", @"+location.href);
	if (! IsNonemptyString(value)) {
		value = observer["d"];
	}
	observer["u"](value);
	observer["h"] = new MutationObserver(VideoParamMutationObserver);
	if (debugOn) console.log("start MutationObserver (Video Param " + name + ")" +", @"+location.href);
	observer["h"].observe(videoParam, {attributes : true,
		attributeFilter : [cVideoParamValue], attributeOldValue : true});
}
function StopVideoParamMutationObserver(/*String */name) {
	let observer = sVideoParamMutationObservers[name];
	if (observer["h"]) {
		if (debugOn) console.log("stop MutationObserver (Video Param " + name + ")" +", @"+location.href);
		observer["h"].disconnect();
		observer["h"] = null;
	}
}
function StartAllVideoParamMutationObserver(videoObject) {
	for (let name in sVideoParamMutationObservers) {
		let videoParam = QueryVideoParam(videoObject, name);
		if (videoParam) {
			StartVideoParamMutationObserver(videoParam, name);
		} else {
			videoParam = UpdateVideoParam(videoObject, name, "");
		}
	}
}
function StopAllVideoParamMutationObserver() {
	for (let name in sVideoParamMutationObservers) {
		StopVideoParamMutationObserver(name);
	}
}
function VideoMutationObserver(mutationsList) {
	for (let mutation of mutationsList) {
//		if (debugOn) console.log("VideoMutationObserver: mutation.type=" + mutation.type +", @"+location.href);
		if (cVideoMutationChildList === mutation.type) {
//			if (debugOn) console.log("VideoMutationObserver: mutation.removedNodes=" + mutation.removedNodes +", @"+location.href);
			for (let removedNode of mutation.removedNodes) {
//				if (debugOn) console.log("VideoMutationObserver: removedNode=" + removedNode +", @"+location.href);
				if (cVideoParam === removedNode.localName) {
//					if (debugOn) console.log("VideoMutationObserver: removedNode=" + removedNode +", @"+location.href);
					let name = removedNode.getAttribute(cVideoParamName);
					StopVideoParamMutationObserver(name);
				}
			}
//			if (debugOn) console.log("mutation.addedNodes=" + mutation.addedNodes +", @"+location.href);
			for (let addedNode of mutation.addedNodes) {
//				if (debugOn) console.log("VideoMutationObserver: addedNode=" + addedNode +", @"+location.href);
				if (cVideoParam === addedNode.localName) {
//					if (debugOn) console.log("VideoMutationObserver: addedNode=" + addedNode +", @"+location.href);
					let name = addedNode.getAttribute(cVideoParamName);
					StartVideoParamMutationObserver(addedNode, name);
				}
			}
		}
	}
}
function MatchBroadcastVideoObject(obj) {
	if (debugOn) if (obj) console.log("MatchBroadcastVideoObject: obj=" + obj +", @"+location.href);
	///////////////////////////////////////////////////////////////////////////
	if (sBroadcastVideoObject && obj === sBroadcastVideoObject) {
		return;//video matched
	}
	///////////////////////////////////////////////////////////////////////////
//	if (debugOn) console.log("MatchBroadcastVideoObject: videoQuery=" + sVideoQuery +", @"+location.href);
	sBroadcastVideoObject = document.querySelector(sVideoQuery);
	if (! (sBroadcastVideoObject && obj === sBroadcastVideoObject)) {
		if (obj) {
			ThrowAribH5Error(MISC_ERR);
		}
		if (! sBroadcastVideoObject) {
			return;//no video
		}
	}
	if (debugOn) console.log("MatchBroadcastVideoObject: videoObject=" + sBroadcastVideoObject +", @"+location.href);
	//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
	if (0 > sApplicationInfos[0]["o"] || 0 > sApplicationInfos[0]["i"]) {//FIXME: XXX -> only for exitFromManagedState()
		return;
	}
	//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
	///////////////////////////////////////////////////////////////////////////
	//start observing if broardcast-video changed
	sVideoMutationObserver = new MutationObserver(VideoMutationObserver);
	if (debugOn) console.log("start MutationObserver (Video)" +", @"+location.href);
	sVideoMutationObserver.observe(sBroadcastVideoObject, {childList : true});
	///////////////////////////////////////////////////////////////////////////
	StopBodyMutationObserver();
	///////////////////////////////////////////////////////////////////////////
	StartBodyMutationObserver();
	///////////////////////////////////////////////////////////////////////////
	StartAllVideoParamMutationObserver(sBroadcastVideoObject);
}
///////////////////////////////////////////////////////////////////////////////
function ControlVideoObjectApi(/*Boolean */disable) {
	if (debugOn) console.log("ControlVideoObjectApi: " + disable +", @"+location.href);
	/**@noinline*/const cEnableFullscreen = "enableFullscreen";
	/**@noinline*/const cDisableFullscreen = "disableFullscreen";
	/**@noinline*/const cIsFullscreen = "isFullscreen";
	/**@noinline*/const cEnableAudioMute = "enableAudioMute";
	/**@noinline*/const cDisableAudioMute = "disableAudioMute";
	/**@noinline*/const cIsAudioMute = "isAudioMute";
	/**@noinline*/const cSetAudioSrc = "setAudioSrc";
	/**@noinline*/const cGetAudioSrc = "getAudioSrc";
	/**@noinline*/const cSetVideoSrc = "setVideoSrc";
	/**@noinline*/const cGetVideoSrc = "getVideoSrc";
	/**@noinline*/const cSetCaptionSrc = "setCaptionSrc";
	/**@noinline*/const cGetCaptionComponentURL = "getCaptionComponentURL";
	/**@noinline*/const cIsCaptionExistent = "isCaptionExistent";
	/**@noinline*/const cSetCaptionVisibility = "setCaptionVisibility";
	/**@noinline*/const cIsCaptionVisible = "isCaptionVisible";
	/**@noinline*/const cAddCaptionListener = "addCaptionListener";
	/**@noinline*/const cRemoveCaptionListener = "removeCaptionListener";
	let __hoep__ = HTMLObjectElement.prototype;
	if (disable) {
		__hoep__[cEnableFullscreen] = null;
		__hoep__[cDisableFullscreen] = null;
		__hoep__[cIsFullscreen] = null;
		__hoep__[cEnableAudioMute] = null;
		__hoep__[cDisableAudioMute] = null;
		__hoep__[cIsAudioMute] = null;
		__hoep__[cSetAudioSrc] = null;
		__hoep__[cGetAudioSrc] = null;
		__hoep__[cSetVideoSrc] = null;
		__hoep__[cGetVideoSrc] = null;
		__hoep__[cSetCaptionSrc] = null;
		__hoep__[cGetCaptionComponentURL] = null;
		__hoep__[cIsCaptionExistent] = null;
		__hoep__[cSetCaptionVisibility] = null;
		__hoep__[cIsCaptionVisible] = null;
		__hoep__[cAddCaptionListener] = null;
		__hoep__[cRemoveCaptionListener] = null;
		return;
	}
	__hoep__[cEnableFullscreen] = function enableFullscreen() {
		if (debugOn) console.log("enableFullscreen: " +", @"+location.href);
if (cAppTypeAribH5 !== cCurrentAppType) {//FIXME: XXX
	return false;//TODO
}
		CheckForPermissionBitmap(cPermissionBitmapVideo);
		MatchBroadcastVideoObject(this);
		//TODO -> change width, height, z-index ?
		UpdateVideoParam(this, cFullscreenName, cValueEnable);
		return true;
	};
	__hoep__[cDisableFullscreen] = function disableFullscreen() {
		if (debugOn) console.log("disableFullscreen: " +", @"+location.href);
if (cAppTypeAribH5 !== cCurrentAppType) {//FIXME: XXX
	return false;//TODO
}
		CheckForPermissionBitmap(cPermissionBitmapVideo);
		MatchBroadcastVideoObject(this);
		//TODO -> restore width, height, z-index ?
		UpdateVideoParam(this, cFullscreenName, cValueDisable);
		return true;
	};
	__hoep__[cIsFullscreen] = function isFullscreen() {
		if (debugOn) console.log("isFullscreen: " +", @"+location.href);
if (cAppTypeAribH5 !== cCurrentAppType) {//FIXME: XXX
	return false;//TODO
}
		CheckForPermissionBitmap(cPermissionBitmapVideo);
		MatchBroadcastVideoObject(this);
		return (cValueEnable === ValueOfVideoParam(
			this, cFullscreenName, cValueDisable));
	};
	__hoep__[cEnableAudioMute] = function enableAudioMute() {
		if (debugOn) console.log("enableAudioMute: " +", @"+location.href);
if (cAppTypeAribH5 !== cCurrentAppType) {//FIXME: XXX
	return false;//TODO
}
		CheckForPermissionBitmap(cPermissionBitmapVideo);
		MatchBroadcastVideoObject(this);
		let result = UpdateVideoParamAudioMute(cValueEnable);
		if (debugOn) console.log("enableAudioMute: result=" + result +", @"+location.href);
		return result;
	};
	__hoep__[cDisableAudioMute] = function disableAudioMute() {
		if (debugOn) console.log("disableAudioMute: " +", @"+location.href);
if (cAppTypeAribH5 !== cCurrentAppType) {//FIXME: XXX
	return false;//TODO
}
		CheckForPermissionBitmap(cPermissionBitmapVideo);
		MatchBroadcastVideoObject(this);
		let result = UpdateVideoParamAudioMute(cValueDisable);
		if (debugOn) console.log("disableAudioMute: result=" + result +", @"+location.href);
		return result;
	};
	__hoep__[cIsAudioMute] = function isAudioMute() {
		if (debugOn) console.log("isAudioMute: " +", @"+location.href);
if (cAppTypeAribH5 !== cCurrentAppType) {//FIXME: XXX
	return false;//TODO
}
		CheckForPermissionBitmap(cPermissionBitmapVideo);
		MatchBroadcastVideoObject(this);
		let mute = DoAribH5Requset(Request_SelectAudio, "mute:get:");
		if (mute !==
			ValueOfVideoParam(this, cAudioMuteName, cDefaultAble)) {
			UpdateVideoParamAudioMute(mute);
		}
		let result = ValueOfVideoParam(this, cAudioMuteName, cValueDisable);
		if (debugOn) console.log("isAudioMute: result=" + result +", @"+location.href);
		return cValueEnable === result;
	};
	__hoep__[cSetAudioSrc] = function setAudioSrc(/*String */url) {
		if (debugOn) console.log("setAudioSrc: url=" + url +", @"+location.href);
if (cAppTypeAribH5 !== cCurrentAppType) {//FIXME: XXX
	return false;//TODO
}
		CheckForPermissionBitmap(cPermissionBitmapVideo);
		MatchBroadcastVideoObject(this);
		let result = UpdateVideoParamAudioSrc(url);
		if (debugOn) console.log("setAudioSrc: result=" + result +", @"+location.href);
		return result;
	};
	__hoep__[cGetAudioSrc] = function getAudioSrc() {
		if (debugOn) console.log("getAudioSrc: " +", @"+location.href);
if (cAppTypeAribH5 !== cCurrentAppType) {//FIXME: XXX
	return cDefaultSrc;//TODO
}
		CheckForPermissionBitmap(cPermissionBitmapVideo);
		MatchBroadcastVideoObject(this);
		let tag = DoAribH5Requset(Request_SelectAudio, "get:");
		let url = cDefaultSrc;
		if (-1 < GetSrcTagOfVideoObject(tag, cAudioTagRange)) {
			url = cDefaultSrcNS + tag;
		}
		if (url !==
			ValueOfVideoParam(this, cAudioSrcName, cDefaultSrc)) {
			UpdateVideoParamAudioSrc(url);
		}
		let result = ValueOfVideoParam(this, cAudioSrcName, cDefaultSrc);
		if (debugOn) console.log("getAudioSrc: result=" + result +", @"+location.href);
		return result;
	};
	__hoep__[cSetVideoSrc] = function setVideoSrc(/*String */url) {
		if (debugOn) console.log("setVideoSrc: url=" + url +", @"+location.href);
if (cAppTypeAribH5 !== cCurrentAppType) {//FIXME: XXX
	return false;//TODO
}
		CheckForPermissionBitmap(cPermissionBitmapVideo);
		MatchBroadcastVideoObject(this);
		let result = UpdateVideoParamVideoSrc(url);
		if (debugOn) console.log("setVideoSrc: result=" + result +", @"+location.href);
		return result;
	};
	__hoep__[cGetVideoSrc] = function getVideoSrc() {
		if (debugOn) console.log("getVideoSrc: " +", @"+location.href);
if (cAppTypeAribH5 !== cCurrentAppType) {//FIXME: XXX
	return cDefaultSrc;//TODO
}
		CheckForPermissionBitmap(cPermissionBitmapVideo);
		MatchBroadcastVideoObject(this);
		let tag = DoAribH5Requset(Request_SelectVideo, "get:");
		let url = cDefaultSrc;
		if (-1 < GetSrcTagOfVideoObject(tag, cVideoTagRange)) {
			url = cDefaultSrcNS + tag;
		}
		if (url !==
			ValueOfVideoParam(this, cVideoSrcName, cDefaultSrc)) {
			UpdateVideoParamVideoSrc(url);
		}
		let result = ValueOfVideoParam(this, cVideoSrcName, cDefaultSrc);
		if (debugOn) console.log("getVideoSrc: result=" + result +", @"+location.href);
		return result;
	};
	__hoep__[cSetCaptionSrc] = function setCaptionSrc(/*String */url) {
		if (debugOn) console.log("setCaptionSrc: url=" + url +", @"+location.href);
if (cAppTypeAribH5 !== cCurrentAppType) {//FIXME: XXX
	return false;//TODO
}
		CheckForPermissionBitmap(cPermissionBitmapVideo);
		MatchBroadcastVideoObject(this);
		let result = UpdateVideoParamCaptionSrc(url);
		if (debugOn) console.log("setCaptionSrc: result=" + result +", @"+location.href);
		return result;
	};
	__hoep__[cGetCaptionComponentURL] =
			function getCaptionComponentURL() {
		if (debugOn) console.log("getCaptionComponentURL: " +", @"+location.href);
if (cAppTypeAribH5 !== cCurrentAppType) {//FIXME: XXX
	return null;//TODO
}
		CheckForPermissionBitmap(cPermissionBitmapVideo);
		MatchBroadcastVideoObject(this);
		let tag = DoAribH5Requset(Request_SelectCaption, "get:");
		if (-1 >= GetSrcTagOfVideoObject(tag, cCaptionTagRange)) {
			return null;
		}
		let url = cDefaultSrcNS + tag;
		if (url !==
			ValueOfVideoParam(this, cCaptionSrcName, cDefaultSrc)) {
			UpdateVideoParamCaptionSrc(url);
		}
		let result = ValueOfVideoParam(this, cCaptionSrcName, cDefaultSrc);
		if (debugOn) console.log("getCaptionComponentURL: result=" + result +", @"+location.href);
		return result;
	};
	__hoep__[cIsCaptionExistent] =
			function isCaptionExistent(/*String */url) {
		if (debugOn) console.log("isCaptionExistent: url=" + url +", @"+location.href);
if (cAppTypeAribH5 !== cCurrentAppType) {//FIXME: XXX
	return false;//TODO
}
		CheckForPermissionBitmap(cPermissionBitmapVideo);
		MatchBroadcastVideoObject(this);
		if (-1 > GetSrcTagOfVideoObject(url, cCaptionTagRange, true)) {
			ThrowAribH5Error(INVALID_PARAM_ERR);
		}
		let result = DoAribH5Requset(Request_SelectCaption, "exist:" + url);
		if (debugOn) console.log("isCaptionExistent: result=" + result +", @"+location.href);
		return "on" === result;
	};
	__hoep__[cSetCaptionVisibility] =
			function setCaptionVisibility(/*Boolean */flag) {
		if (debugOn) console.log("setCaptionVisibility: flag=" + flag +", @"+location.href);
if (cAppTypeAribH5 !== cCurrentAppType) {//FIXME: XXX
	return false;//TODO
}
		CheckForPermissionBitmap(cPermissionBitmapVideo);
		MatchBroadcastVideoObject(this);
		if (! IsBooleanType(flag)) {
			ThrowAribH5Error(INVALID_PARAM_ERR);
		}
		let result = DoAribH5Requset(Request_SelectCaption,
			"show:" + (flag ? "on" : "off"));
		if (debugOn) console.log("setCaptionVisibility: result=" + result +", @"+location.href);
		if (flag ? "on" === result : "off" === result) {
			sCaptionShow = result;
			return true;
		}
		return false;
	};
	__hoep__[cIsCaptionVisible] = function isCaptionVisible() {
		if (debugOn) console.log("isCaptionVisible: " +", @"+location.href);
if (cAppTypeAribH5 !== cCurrentAppType) {//FIXME: XXX
	return false;//TODO
}
		CheckForPermissionBitmap(cPermissionBitmapVideo);
		MatchBroadcastVideoObject(this);
		let result = DoAribH5Requset(Request_SelectCaption, "show:get:");
		if (debugOn) console.log("isCaptionVisible: result=" + result +", @"+location.href);
		sCaptionShow = result;
		return "on" === result;
	};
	__hoep__[cAddCaptionListener] = function addCaptionListener(
			/*CaptionListener */listener, /*[String] */url) {
		if (debugOn) console.log("addCaptionListener: listener=" + typeof listener +", @"+location.href);
		if (debugOn) console.log("addCaptionListener: url=" + url +", @"+location.href);
if (cAppTypeAribH5 !== cCurrentAppType) {//FIXME: XXX
	return;//TODO
}
		CheckForPermissionBitmap(cPermissionBitmapVideo);
		MatchBroadcastVideoObject(this);
		if (! IsFunctionType(listener)) {
			ThrowAribH5Error(INVALID_PARAM_ERR);
		}
		if (IsUndefinedType(url)) {
			url = ValueOfVideoParam(this, cCaptionSrcName);
		}
		if (-1 > GetSrcTagOfVideoObject(url, cCaptionTagRange, true)) {
			ThrowAribH5Error(INVALID_PARAM_ERR);
		}
		let index = sCaptionUrlListeners.findIndex(function (ul) {
			return IsNonNull(ul) && url === ul["u"] && listener === ul["l"];
		});
		if (0 > index) {
			index = sCaptionUrlListeners.findIndex(function (ul) {
				return IsNull(ul);
			});
			let urlListener = {
				/*String */"u" : url,
				"l" : listener
			};
			if (0 > index) {
				sCaptionUrlListeners.push(urlListener);
			} else {
				sCaptionUrlListeners[index] = urlListener;
			}
			DoAribH5Requset(Request_CaptionData, "on:" + url);
			//return;
		}
		return;//ThrowAribH5Error(INVALID_PARAM_ERR);
	};
	__hoep__[cRemoveCaptionListener] = function removeCaptionListener(
			/*[CaptionListener] */listener) {
		if (debugOn) console.log("removeCaptionListener: listener=" + typeof listener +", @"+location.href);
if (cAppTypeAribH5 !== cCurrentAppType) {//FIXME: XXX
	return;//TODO
}
		CheckForPermissionBitmap(cPermissionBitmapVideo);
		MatchBroadcastVideoObject(this);
		if (! IsUndefinedType(listener)) {
			if (! IsFunctionType(listener)) {
				ThrowAribH5Error(INVALID_PARAM_ERR);
			}
			let index = sCaptionUrlListeners.findIndex(function (ul) {
				return IsNonNull(ul) && listener === ul["l"];
			});
			if (0 <= index) {
				let url = sCaptionUrlListeners[index]["u"];
				sCaptionUrlListeners[index] = null;
				DoAribH5Requset(Request_CaptionData, "off:" + url);
				//return;
			}
			return;//ThrowAribH5Error(INVALID_PARAM_ERR);
		} else {
			sCaptionUrlListeners.forEach(
				function CaptionUrlListenersEach(ul, index) {
				if (ul) {
					let url = ul["u"];
					sCaptionUrlListeners[index] = null;
					DoAribH5Requset(Request_CaptionData, "off:" + url);
				}
			});
		}
	};
}

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** monitor audio MPEG-4 AAC & ALS" +", @"+location.href);
function MuteBroadcastAudio(on) {
	if (debugOn) console.log("MuteBroadcastAudio: " + sBroadcastVideoObject + "," + on +", @"+location.href);
	if (sBroadcastVideoObject) {
		if (on) {
			sBroadcastVideoObject["enableAudioMute"]();
		} else {
			sBroadcastVideoObject["disableAudioMute"]();
		}
	}
}
function MuteBroadcastAudioIfMPEG4Audio(audio, mute)
{
	//if (debugOn) console.log("MuteBroadcastAudioIfMPEG4Audio: " + audio + "," + mute +", @"+location.href);
	let audio_type = audio["type"];
	//if (debugOn) console.log("MuteBroadcastAudioIfMPEG4Audio: type=" + audio_type +", @"+location.href);
	if (IsStringType(audio_type) && 10 < audio_type.length) {
		audio_type = audio_type.substring(audio_type.length - 10);
		audio_type = audio_type.toLowerCase();
		if (audio_type.endsWith("-mpeg4-aac") ||
				audio_type.endsWith("-mpeg4-als")) {
			MuteBroadcastAudio(mute);
			return;
		}
	} else {
		let audio_src = audio["src"];
		//if (debugOn) console.log("MuteBroadcastAudioIfMPEG4Audio: src=" + audio_src +", @"+location.href);
		if (IsStringType(audio_src) && 4 < audio_src.length) {
			audio_src = audio_src.substring(audio_src.length - 4);
			audio_src = audio_src.toLowerCase();
			if (audio_src.endsWith(".aac") ||
					audio_src.endsWith(".als")) {
				MuteBroadcastAudio(mute);
				return;
			}
		}
	}
}
function MuteOnBroadcastAudioByAudioEvent(event) {
	MuteBroadcastAudioIfMPEG4Audio(event.currentTarget, true);
}
function MuteOffBroadcastAudioByAudioEvent(event) {
	MuteBroadcastAudioIfMPEG4Audio(event.currentTarget, false);
}
function SetAudioEventListener(audio) {
	//if (debugOn) console.log("SetAudioEventListener: " + audio +", @"+location.href);
	if (! debugOn) {
		audio.addEventListener("play", MuteOnBroadcastAudioByAudioEvent);
		audio.addEventListener("pause", MuteOffBroadcastAudioByAudioEvent);
		audio.addEventListener("ended", MuteOffBroadcastAudioByAudioEvent);
		//audio.addEventListener("suspend", MuteOffBroadcastAudioByAudioEvent);
		//audio.addEventListener("emptied", MuteOffBroadcastAudioByAudioEvent);
		//audio.addEventListener("complete", MuteOffBroadcastAudioByAudioEvent);
		//audio.addEventListener("playing", MuteOffBroadcastAudioByAudioEvent);
		//audio.addEventListener("waiting", MuteOffBroadcastAudioByAudioEvent);
	} else {
		audio.addEventListener("play", (event) => {
			console.log("play: " + event.currentTarget["id"] + "," + event.currentTarget["src"] +", @"+location.href);
			MuteOnBroadcastAudioByAudioEvent(event);
		});
		audio.addEventListener("pause", (event) => {
			console.log("pause: " + event.currentTarget["id"] + "," + event.currentTarget["src"] +", @"+location.href);
			MuteOffBroadcastAudioByAudioEvent(event);
		});
		audio.addEventListener("ended", (event) => {
			console.log("ended: " + event.currentTarget["id"] + "," + event.currentTarget["src"] +", @"+location.href);
			MuteOffBroadcastAudioByAudioEvent(event);
		});
		audio.addEventListener("suspend", (event) => {
			console.log("suspend: " + event.currentTarget["id"] + "," + event.currentTarget["src"] +", @"+location.href);
			//MuteOffBroadcastAudioByAudioEvent(event);
		});
		audio.addEventListener("emptied", (event) => {
			console.log("emptied: " + event.currentTarget["id"] + "," + event.currentTarget["src"] +", @"+location.href);
			//MuteOffBroadcastAudioByAudioEvent(event);
		});
		audio.addEventListener("complete", (event) => {
			console.log("complete: " + event.currentTarget["id"] + "," + event.currentTarget["src"] +", @"+location.href);
			//MuteOffBroadcastAudioByAudioEvent(event);
		});
		audio.addEventListener("playing", (event) => {
			console.log("playing: " + event.currentTarget["id"] + "," + event.currentTarget["src"] +", @"+location.href);
			//MuteOnBroadcastAudioByAudioEvent(event);
		});
		audio.addEventListener("waiting", (event) => {
			console.log("waiting: " + event.currentTarget["id"] + "," + event.currentTarget["src"] +", @"+location.href);
			//MuteOffBroadcastAudioByAudioEvent(event);
		});
		audio.addEventListener("loadedmetadata", (event) => {
			console.log("loadedmetadata: " + event.currentTarget["id"] + "," + event.currentTarget["src"] +", @"+location.href);
		});
		audio.addEventListener("loadeddata", (event) => {
			console.log("loadeddata: " + event.currentTarget["id"] + "," + event.currentTarget["src"] +", @"+location.href);
		});
		audio.addEventListener("stalled", (event) => {
			console.log("stalled: " + event.currentTarget["id"] + "," + event.currentTarget["src"] +", @"+location.href);
		});
		audio.addEventListener("audioprocess", (event) => {
			console.log("audioprocess: " + event.currentTarget["id"] + "," + event.currentTarget["src"] +", @"+location.href);
		});
		audio.addEventListener("canplay", (event) => {
			console.log("canplay: " + event.currentTarget["id"] + "," + event.currentTarget["src"] +", @"+location.href);
		});
		audio.addEventListener("canplaythrough", (event) => {
			console.log("canplaythrough: " + event.currentTarget["id"] + "," + event.currentTarget["src"] +", @"+location.href);
		});
		audio.addEventListener("durationchange", (event) => {
			console.log("durationchange: " + event.currentTarget.duration + "," + event.currentTarget["id"] + "," + event.currentTarget["src"] +", @"+location.href);
		});
		audio.addEventListener("timeupdate", (event) => {
			console.log("timeupdate: " + event.currentTarget.currentTime + "," + event.currentTarget["id"] + "," + event.currentTarget["src"] +", @"+location.href);
		});
		audio.addEventListener("seeking", (event) => {
			console.log("seeking: " + event.currentTarget.currentTime + event.currentTarget["id"] + "," + event.currentTarget["src"] +", @"+location.href);
		});
		audio.addEventListener("seeked", (event) => {
			console.log("seeked: " + event.currentTarget.currentTime + event.currentTarget["id"] + "," + event.currentTarget["src"] +", @"+location.href);
		});
		audio.addEventListener("ratechange", (event) => {
			console.log("ratechange: " + event.currentTarget["id"] + "," + event.currentTarget["src"] +", @"+location.href);
		});
		audio.addEventListener("volumechange", (event) => {
			console.log("volumechange: " + event.currentTarget["id"] + "," + event.currentTarget["src"] +", @"+location.href);
		});
	}
}
function InitAudioEventListeners() {
	let audios = document.querySelectorAll("audio");
	if (debugOn) console.log("InitAudioEventListeners: " + audios +", @"+location.href);
	for (let audio of audios) {
		SetAudioEventListener(audio);
	}
}

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define body MutationObserver" +", @"+location.href);
let sBodyMutationObserver = null;
function BodyMutationObserver(mutationsList) {
	for (let mutation of mutationsList) {
//		if (debugOn) console.log("BodyMutationObserver: mutation.target=" + mutation.target +", @"+location.href);
//		if (debugOn) console.log("BodyMutationObserver: mutation.type=" + mutation.type +", @"+location.href);
//		if (debugOn) console.log("BodyMutationObserver: mutation.removedNodes=" + mutation.removedNodes +", @"+location.href);
		//check if broadcast-video removed
		for (let removedNode of mutation.removedNodes) {
			if (removedNode === sBroadcastVideoObject) {
				if (debugOn) console.log("mutation childList.removed (Video)" +", @"+location.href);
				//broadcast-video removed
				SwitchBodyMutationObserver();
			}
		}
//		if (debugOn) console.log("BodyMutationObserver: mutation.addedNodes=" + mutation.addedNodes +", @"+location.href);
		if (0 < mutation.addedNodes.length) {
			//check if audio added
			for (let addedNode of mutation.addedNodes) {
				if (addedNode instanceof HTMLAudioElement) {
					if (debugOn) console.log("mutation childList.added (Audio)" +", @"+location.href);
					SetAudioEventListener(addedNode);
				}
			}
			//check if broadcast-video added
			if (sBroadcastVideoObject) {
				continue;//broadcast-video is still there, no need check
			}
			MatchBroadcastVideoObject(null);
			if (sBroadcastVideoObject) {
				if (debugOn) console.log("mutation childList.added (Video)" +", @"+location.href);
				//broadcast-video added
				StartCheckVideoScale();
			}
		}
	}
}
function StartBodyMutationObserver() {
	if (IsNull(sBodyMutationObserver)) {
		//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
		if (0 > sApplicationInfos[0]["o"] || 0 > sApplicationInfos[0]["i"]) {//FIXME: XXX -> only for exitFromManagedState()
			return;
		}
		//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
		if (document.body) {
			if (debugOn) console.log("start MutationObserver (Body)" +", @"+location.href);
			sBodyMutationObserver = new MutationObserver(BodyMutationObserver);
			sBodyMutationObserver.observe(document.body,
				{childList : true, subtree : true});
		} else {
			if (debugOn) console.log("missing body node" +", @"+location.href);
		}
	}
}
function StopBodyMutationObserver() {
	if (IsNonNull(sBodyMutationObserver)) {
		if (debugOn) console.log("stop MutationObserver (Body)" +", @"+location.href);
		sBodyMutationObserver.disconnect();
		sBodyMutationObserver = null;
	}
}
function SwitchBodyMutationObserver() {
	///////////////////////////////////////////////////////////////////////////
	StopAllVideoParamMutationObserver();
	///////////////////////////////////////////////////////////////////////////
	StopBodyMutationObserver();
	///////////////////////////////////////////////////////////////////////////
	StartBodyMutationObserver();
	///////////////////////////////////////////////////////////////////////////
	if (debugOn) console.log("stop MutationObserver (Video)" +", @"+location.href);
	sVideoMutationObserver.disconnect();
	sVideoMutationObserver = null;
	///////////////////////////////////////////////////////////////////////////
	sBroadcastVideoObject = null;
}

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** modify window.open/close" +", @"+location.href);
//let owOpen = window.open;
//let owClose = window.close;
window.open = function WindowOpen(url) {
	if (debugOn) console.log("window.open: url=" + url +", @"+location.href);
	location.href = url;
	return this;//never reach here ?
};
window.close = function WindowClose() {
	if (debugOn) console.log("window.close: " +", @"+location.href);
	history.back();
};
/*
let __whgo__ = window.history.go;
window.history.go = function HistoryGo(index) {
	if (debugOn) console.log("history.go: index=" + index +", @"+location.href);
};
let __whback__ = window.history.back;
window.history.back = function HistoryBack() {
	if (debugOn) console.log("history.back: " + window.history.length +", @"+location.href);
};
let __whforward__ = window.history.forward;
window.history.forward = function HistoryForward() {
	if (debugOn) console.log("history.forward: " + window.history.length +", @"+location.href);
};
*/

///////////////////////////////////////////////////////////////////////////////
if (0 < fontArib) {
	if (debugOn) console.log("*** setting default @font-face" +", @"+location.href);
	document.write("\
<link rel='preload' as='font' href='" + fontBase + fontMaru + "' crossorigin='anonymous'>\
<link rel='stylesheet' href='/aribh5_font.css'>\
");
}
if (debugOn) console.log("*** setting default css" +", @"+location.href);
document.write("<link rel='stylesheet' href='/aribh5_default.css'>");

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define DOMContentLoadedEventListener" +", @"+location.href);
window.addEventListener("DOMContentLoaded", function(event) {
	if (debugOn) console.log("DOMContentLoaded event: " + event +", @"+location.href);
	///////////////////////////////////////////////////////////////////////////
	//modified to set by aribh5_default.css ?
//	if (debugOn) console.log("*** setting default style" +", @"+location.href);
//	if (debugOn) console.log("document.documentElement.style.color=" +
//		document.documentElement.style.color +", @"+location.href);
//	document.documentElement.style.color = black;
//	if (debugOn) console.log("document.documentElement.style.fontFamily=" +
//		document.documentElement.style.fontFamily +", @"+location.href);
//	document.documentElement.style.fontFamily = "丸ゴシック";
//	if (debugOn) console.log("document.documentElement.style.fontSize=" +
//		document.documentElement.style.fontSize +", @"+location.href);
//	document.documentElement.style.fontSize = "64px";
//	if (debugOn) console.log("document.documentElement.style.linfHeight=" +
//		document.documentElement.style.linfHeight +", @"+location.href);
//	document.documentElement.style.linfHeight = "96px";
	//TODO
	///////////////////////////////////////////////////////////////////////////
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
if (0 <= sApplicationInfos[0]["o"] && 0 <= sApplicationInfos[0]["i"]) {//FIXME: XXX -> only for exitFromManagedState()
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
	InitUpdateViewport();//TODO
	StartCheckVideoScale();//TODO
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
}
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
	InitAudioEventListeners();//TODO
	StartBodyMutationObserver();//TODO
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
if (cAppTypeIsdbH5 === cCurrentAppType && 0 === sAribH5KeySet.value) {//FIXME: XXX -> only for Hbbtv(ISDB-HTML)
	//DoAribH5Requset(Request_Key, "setkeyset:" + 0x09F);
	sAribH5KeySet["setValue"](0x09F);
}
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
else if ((0 > sApplicationInfos[0]["o"] || 0 > sApplicationInfos[0]["i"])
	&& 0 === sAribH5KeySet.value) {//FIXME: XXX -> only for exitFromManagedState()
	//DoAribH5Requset(Request_Key, "setkeyset:" + 0x09F);
	sAribH5KeySet["setValue"](0x09F);
}
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
});

///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** define KeyboardEventListener" +", @"+location.href);
let /*KeyboardEvent */sKeydownEvent = null;
document.addEventListener("keydown", function (event) {
	if (debugOn) console.log("keydown event: " + event.key + "," + event.code + "," + event.keyCode +", @"+location.href);
	if (IsNonNull(sKeydownEvent) && (! event.repeat)) {
		if (debugOn) console.log("dispatch a lost keyup, " + sKeydownEvent.key +", @"+location.href);
		let r = document.dispatchEvent(new KeyboardEvent("keyup",
			{key:sKeydownEvent.key, keyCode:sKeydownEvent.keyCode}));
		if (debugOn) console.log("dispatch a lost keyup, " + r +", @"+location.href);
		if (debugOn) console.log("stop the original keydown, " + event.key +", @"+location.href);
		event.stopPropagation();
		if (debugOn) console.log("re-dispatch the last keydown, " + event.key +", @"+location.href);
		r = document.dispatchEvent(new KeyboardEvent("keydown",
			{key:event.key, keyCode:event.keyCode}));
		if (debugOn) console.log("re-dispatch the last keydown, " + r +", @"+location.href);
		return;
	}
	sKeydownEvent = event;
	event.preventDefault();
	if ("Enter" === event.key) {
		let activeElement = document.activeElement;
		if (activeElement && "text" === activeElement.type) {
			if (debugOn) console.log("re-focus, launch soft-keybroad, " +", @"+location.href);
			activeElement.blur();
			activeElement.focus();
		}
	}
});
document.addEventListener("keyup", function (event) {
	if (debugOn) console.log("keyup event: " + event.key + "," + event.code + "," + event.keyCode +", @"+location.href);
	if (IsNull(sKeydownEvent) || sKeydownEvent.key !== event.key) {
		if (IsNonNull(sKeydownEvent)) {
			if (debugOn) console.log("dispatch a lost keyup, " + sKeydownEvent.key +", @"+location.href);
			let r = document.dispatchEvent(new KeyboardEvent("keyup",
				{key:sKeydownEvent.key, keyCode:sKeydownEvent.keyCode}));
			if (debugOn) console.log("dispatch a lost keyup, " + r + ", " + sKeydownEvent +", @"+location.href);
		}
		if (debugOn) console.log("dispatch a lost keydown, " + event.key +", @"+location.href);
		let r = document.dispatchEvent(new KeyboardEvent("keydown",
			{key:event.key, keyCode:event.keyCode}));
		if (debugOn) console.log("dispatch a lost keydown, " + r +", @"+location.href);
		if (debugOn) console.log("stop the original keyup, " + event.key +", @"+location.href);
		event.stopPropagation();
		if (debugOn) console.log("re-dispatch the last keyup, " + event.key +", @"+location.href);
		r = document.dispatchEvent(new KeyboardEvent("keyup",
			{key:event.key, keyCode:event.keyCode}));
		if (debugOn) console.log("re-dispatch the last keyup, " + r +", @"+location.href);
		return;
	}
	sKeydownEvent = null;
	event.preventDefault();
});
document.addEventListener("keypress", function (event) {
	if (debugOn) console.log("keypress event: " + event.key + "," + event.code + "," + event.keyCode +", @"+location.href);
	event.preventDefault();
});

if (debugOn) console.log("*** define WindowBeforeUnloadEventListener" +", @"+location.href);
window.addEventListener("beforeunload", function(event) {
	if (debugOn) console.log("beforeunload event: " + event +", @"+location.href);
	if (0 <= sTimeoutEndPlayOfVideo) {
		sTimeoutEndPlayOfVideo = -2;
	}
	//TODO
});


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
if (0 <= sApplicationInfos[0]["o"] && 0 <= sApplicationInfos[0]["i"]) {//FIXME: XXX -> only for exitFromManagedState()
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
///////////////////////////////////////////////////////////////////////////////
if (debugOn) console.log("*** disable mouse" +", @"+location.href);
function disable_mouse(e) {e.preventDefault();e.stopPropagation();}
document.oncontextmenu = disable_mouse;
document.onselectstart = disable_mouse;
document.ontouchstart = disable_mouse;
document.onwheel = disable_mouse;
document.ondragstart = disable_mouse;
document.onclick = disable_mouse;
document.ondblclick = disable_mouse;
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
}
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

///////////////////////////////////////////////////////////////////////////////
if (debugOn) {
	if (debugOn) console.log("*** define WindowLoad/UnloadEventListener" +", @"+location.href);
	window.addEventListener("load", function(event) {
		if (debugOn) console.log("load event: " + event +", @"+location.href);
		//TODO
	});
	window.addEventListener("unload", function(event) {
		if (debugOn) console.log("unload event: " + event +", @"+location.href);
		//TODO
	});
	window.addEventListener("storage", function(event) {
		if (debugOn) console.log("storage event: " + event +", @"+location.href);
		if (debugOn) console.log("storage event key: " + event.key +", @"+location.href);
		if (debugOn) console.log("storage event oldValue: " + event.oldValue +", @"+location.href);
		if (debugOn) console.log("storage event newValue: " + event.newValue +", @"+location.href);
		if (debugOn) console.log("storage event url: " + event.url +", @"+location.href);
		if (debugOn) console.log("storage event storageArea: " + event.storageArea +", @"+location.href);
		//TODO
	});
}

if (debugOn) console.log("*** ARIB H5 Bridge end" +", @"+location.href);

})();//dummy namespace end

///////////////////////////////////////////////////////////////////////////////
/*
console.log("=== Unit Test (postcondition) begin " + location.href);

//console.log("foo.bar=" + foo.bar);

let targetsWindow = [
	["VK_RED"],["VK_GREEN"],["VK_YELLOW"],["VK_BLUE"],
	["VK_UP"],["VK_DOWN"],["VK_LEFT"],["VK_RIGHT"],
	["VK_ENTER"],["VK_BACK"],
	["VK_PAGE_UP"],["VK_PAGE_DOWN"],["VK_TAB"],
	["VK_0"],["VK_1"],["VK_2"],["VK_3"],["VK_4"],["VK_5"],["VK_6"],
	["VK_7"],["VK_8"],["VK_9"],["VK_10"],["VK_11"],["VK_12"],
	["VK_PLAY"],["VK_PAUSE"],["VK_PLAY_PAUSE"],["VK_STOP"],
	["VK_FAST_FWD"],["VK_REWIND"],["VK_TRACK_NEXT"],
	["VK_TRACK_PREV"],["VK_VCR_OTHER"],
	["VK_DBUTTON"],["VK_SUBTITLE"],
];
for (let i in targetsWindow) {
	UnitTest(window, targetsWindow[i], true, true);
}

///////////////////////////////////////////////////////////////dummy for test
//console.log("localStorage: " + localStorage);
//console.log("Object.getOwnPropertyNames(localStorage): " + Object.getOwnPropertyNames(localStorage));
//console.log("localStorage.length: " + localStorage.length);
//for (let property in localStorage) {
//	console.log("localStorage: " + property);
//	console.log(" localStorage: " + localStorage[property]);
//}
//localStorage.setItem = {};
//__odp__(localStorage, "setItem", {});
//console.log("localStorage: " + localStorage);
//console.log("localStorage.setItem: " + localStorage.setItem);
//localStorage.setItem("greg0", "Greg0");
//console.log("localStorage.getItem(greg0): " + localStorage.getItem("greg0"));
//console.log("localStorage.getItem(greg63): " + localStorage.getItem("greg63"));
//console.log("localStorage.getItem(greg64): " + localStorage.getItem("greg64"));
//localStorage.setItem("test", "TEST");
//console.log("localStorage.getItem(test): " + localStorage.getItem("test"));
//console.log("localStorage.getItem(test2): " + localStorage.getItem("test2"));
///////////////////////////////////////////////////////////////dummy for test

///////////////////////////////////////////////////////////////dummy for test
//console.log("navigator.bmlCompat: " + navigator.bmlCompat);
//console.log("navigator.bmlCompat.browserPseudo: " + navigator.bmlCompat.browserPseudo);
//console.log("navigator.bmlCompat.browserPseudo.readPersistentArray: " + navigator.bmlCompat.browserPseudo.readPersistentArray);
//console.log("navigator.bmlCompat.browserPseudo.writePersistentArray: " + navigator.bmlCompat.browserPseudo.writePersistentArray);
//console.log("navigator.bmlCompat.browserPseudo.Greg: " + navigator.bmlCompat.browserPseudo.Greg);
//console.log("navigator.bmlCompat.browserPseudo.Greg[53]: " + navigator.bmlCompat.browserPseudo.Greg[53]);
//console.log("navigator.bmlCompat.browserPseudo.Greg[63]: " + navigator.bmlCompat.browserPseudo.Greg[63]);
//navigator.bmlCompat = {};
//__odp__(navigator, "bmlCompat", {});
//navigator.bmlCompat.browserPseudo.Greg[53] = "test";
//console.log("navigator.bmlCompat.browserPseudo.Greg[53]: " + navigator.bmlCompat.browserPseudo.Greg[53]);
///////////////////////////////////////////////////////////////dummy for test

let targetsNavigator = [
	["bmlCompat"],
	["bmlCompat","browserPseudo"],
	["bmlCompat","browserPseudo","readPersistentArray"],
	["bmlCompat","browserPseudo","writePersistentArray"],
	["bmlCompat","browserPseudo","Greg"],
	["applicationManager"],
	["applicationManager","getOwnerApplication"],
];
for (let i in targetsNavigator) {
	UnitTest(navigator, targetsNavigator[i], true, true);
}

let targetsApplication = [
	["replaceApplication"],
	["destroyApplication"],
	["exitFromManagedState"],
	["getOwnerAIT"],
	["getApplicationBoundaryAndPermissionDescriptor"],
	["keySet"],
	["keySet","setValue"],
	["keySet","value"],
	["keySet","RED"],
	["keySet","GREEN"],
	["keySet","YELLOW"],
	["keySet","BLUE"],
	["keySet","NAVIGATION"],
	["keySet","NUMERIC"],
	["keySet","VCR"],
	["keySet","DBUTTON"],
];
let application = navigator.applicationManager.getOwnerApplication();
for (let i in targetsApplication) {
	UnitTest(application, targetsApplication[i], true, false);
}

let targetsAIT = [
	["getApplications"],
	["getApplicationBoundaryAndPermissionIdentifier"],
];
let ait = navigator.applicationManager.getOwnerApplication().getOwnerAIT();
for (let i in targetsAIT) {
	UnitTest(ait, targetsAIT[i], true, false);
}

let targetsABPD = [
	["getCurrentBoundary"],
	["addPermissionManagedArea"],
];
let abpi = navigator.applicationManager.getOwnerApplication().getOwnerAIT().getApplicationBoundaryAndPermissionDescriptor();
for (let i in targetsABPD) {
	UnitTest(abpi, targetsABPD[i], true, false);
}

let targetsABPI = [
	["addPermissionManagedArea"],
];
let abpi = navigator.applicationManager.getOwnerApplication().getOwnerAIT().getApplicationBoundaryAndPermissionIdentifier();
for (let i in targetsABPI) {
	UnitTest(abpi, targetsABPI[i], true, false);
}

///////////////////////////////////////////////////////////////dummy for test
//confirm Application is read-only
let test_ownerapp = navigator.applicationManager.getOwnerApplication();
console.log("test_ownerapp=" + JSON.stringify(test_ownerapp));
test_ownerapp.type = "";
console.log("test_ownerapp=" + JSON.stringify(test_ownerapp));
//confirm Applications is read-only
let test_apps = test_ownerapp.getOwnerAIT().getApplications();
console.log("test_apps=" + JSON.stringify(test_apps));
test_apps[0] = null;
test_apps.push({});
console.log("test_apps=" + JSON.stringify(test_apps));
test_ownerapp = navigator.applicationManager.getOwnerApplication();
console.log("test_ownerapp=" + JSON.stringify(test_ownerapp));
test_apps = test_ownerapp.getOwnerAIT().getApplications();
console.log("test_apps=" + JSON.stringify(test_apps));
//confirm PermissionManagedArea is read-only
let test_pma = new PermissionManagedArea(1, ["X","Y"]);
console.log("test_pma=" + JSON.stringify(test_pma));
test_pma.permission[0] = 2;
test_pma.permission[1] = 3;
test_pma.permission.push(3);
test_pma.urls[0] = "Z";
test_pma.urls.push("W");
console.log("test_pma=" + JSON.stringify(test_pma));
//confirm PermissionManagedAreas is read-only
//test_ownerapp = navigator.applicationManager.getOwnerApplication();
let test_pmas = test_ownerapp.getApplicationBoundaryAndPermissionDescriptor().getCurrentBoundary();
console.log("test_pmas=" + JSON.stringify(test_pmas));
test_pmas[0] = null;
test_pmas.push({permission:[2],urls:["$"]});
console.log("test_pmas=" + JSON.stringify(test_pmas));
test_pmas = test_ownerapp.getApplicationBoundaryAndPermissionDescriptor().getCurrentBoundary();
console.log("test_pmas=" + JSON.stringify(test_pmas));
///////////////////////////////////////////////////////////////dummy for test

///////////////////////////////////////////////////////////////dummy for test
//console.log("Object.getOwnPropertyNames(navigator.bmlCompat): " + Object.getOwnPropertyNames(navigator.bmlCompat));
//console.log("Object.getOwnPropertyNames(navigator.bmlCompat.browserPseudo): " + Object.getOwnPropertyNames(navigator.bmlCompat.browserPseudo));
//console.log("Object.getOwnPropertyNames(navigator.receiverDevice): " + Object.getOwnPropertyNames(navigator.receiverDevice));
//console.log("Object.getOwnPropertyNames(navigator.receiverDevice.streamEvent): " + Object.getOwnPropertyNames(navigator.receiverDevice.streamEvent));
//console.log("Object.getOwnPropertyNames(navigator.receiverDevice.cacheEvent): " + Object.getOwnPropertyNames(navigator.receiverDevice.cacheEvent));
//console.log("Object.getOwnPropertyNames(navigator.eitSearchManager): ", Object.getOwnPropertyNames(navigator.eitSearchManager));
//console.log("Object.getOwnPropertyNames(navigator.capabilities): ", Object.getOwnPropertyNames(navigator.capabilities));
//console.log("Object.getOwnPropertyNames(navigator.applicationManager): ", Object.getOwnPropertyNames(navigator.applicationManager));
//console.log("Object.getOwnPropertyNames(navigator.applicationManager.getOwnerApplication()): ", Object.getOwnPropertyNames(navigator.applicationManager.getOwnerApplication()));
//console.log("navigator.applicationManager.getOwnerApplication().keySet.RED: " + navigator.applicationManager.getOwnerApplication().keySet.RED);
//console.log("navigator.applicationManager.getOwnerApplication().keySet.DBUTTON: " + navigator.applicationManager.getOwnerApplication().keySet.DBUTTON);
//console.log("typeof isReg: " + typeof isReg);
//console.log("typeof olsGetItem: " + typeof olsGetItem);
//console.log("debugOn: " + debugOn);
//console.log("debugOn in window: " + debugOn in window);
///////////////////////////////////////////////////////////////dummy for test

	//TODO

//console.log("request: " + DoAribH5Requset("hello", null);
//prompt("", "");
//alert("DtJs");
//confirm("DtJs");

//for (let property in window) {
//	console.log("window: " + property);
//	//if (property.startsWith("#<")) {
//	//	continue;
//	//}
//	//console.log(" window: " + window[property]);
//}

//for (let property in navigator) {
//	console.log("navigator: " + property);
//	//if (property.startsWith("#<")) {
//	//	continue;
//	//}
//	//console.log(" navigator: " + navigator[property]);
//}

//for (let property in document) {
//	console.log("document: " + property);
//	//if (property.startsWith("#<")) {
//	//	continue;
//	//}
//	//console.log(" document: " + document[property]);
//}

console.log("=== Unit Test (postcondition) end " + location.href);
*/
///////////////////////////////////////////////////////////////////////////////

}//only non-blank document
