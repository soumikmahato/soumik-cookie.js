class cookie{constructor(){let _cookieEnable=navigator.cookieEnabled;if(_cookieEnable){}else{return"error cookie not enable"}}
get(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1)}
if(c.indexOf(name)==0){return c.substring(name.length,c.length)}}
return"undefined"}
remove(cname){document.cookie=cname+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"}
set(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/"}
read(){var cookieread=document.cookie;return cookieread}
setTz(namep){let intlTz=Intl.DateTimeFormat().resolvedOptions().timeZone;set(namep,intlTz,time)}}
module.exports={cookie}
