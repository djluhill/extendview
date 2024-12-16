var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function setupGoogleTranslate(language){
  // Setup google tranlsate to translate dynamic text
  var usersLanguage = language;

  if (usersLanguage == 'en') {
    //Delete google translate cookie
    document.cookie = "googtrans= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  }
  else {
    // Remove the google translate top banner
    setTimeout(function(){
      $('.goog-te-banner-frame').remove();
    }, 1000);

    //Delete google translate cookie
    document.cookie = "googtrans= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";

    // Set google translate cookie
    if (usersLanguage.includes('zh')) {
      document.cookie = "googtrans=/en/zh-CN";
    }
    else{
      document.cookie = "googtrans=/en/" + usersLanguage;
    }
  }
}

}
/*
     FILE ARCHIVED ON 22:41:40 Jul 08, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:47:15 Dec 16, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.667
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.01
  esindex: 0.012
  cdx.remote: 7.939
  LoadShardBlock: 55.047 (3)
  PetaboxLoader3.datanode: 74.03 (4)
  load_resource: 76.499
  PetaboxLoader3.resolve: 52.115
*/