/*soumik cookie js */
var cookiea1 = navigator.cookieEnabled;
var a8 = Intl.DateTimeFormat().resolvedOptions().timeZone;
var a7 = navigator.geolocation;

if (cookiea1) {

var cookie = {
  set: function (cname, cvalue, exdays){
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  },
  remove: function (cname) {
      document.cookie = cname+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  },
  read: function (){
  	var cookieread = document.cookie;
  	return cookieread;
  },
  get: function (cname){
  			var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "undefined";
  },
  setTz: function(name, time){
  	cookie.set(name, a8, time);
  },
  setLang: function (name, time) {
  	cookie.set(name, navigator.language, time);
  },
  setPlatform: function (name, time){
    cookie.set(name, navigator.userAgent, time);
  },
  setUserAgent: function (name, time) {
    cookie.set(name, navigator.platform, time);

  }
  
}

}
else{
	console.error("cookie is not enable");
}
