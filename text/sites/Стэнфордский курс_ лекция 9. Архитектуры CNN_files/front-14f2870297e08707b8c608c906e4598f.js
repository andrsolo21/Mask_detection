(function($){$(document).on('ready'+rlArgs.customEvents,function(){$.event.trigger({type:'doResponsiveLightbox',script:rlArgs.script,selector:rlArgs.selector,args:rlArgs})});$(document).on('doResponsiveLightbox',function(event){var script=event.script,selector=event.selector,args=event.args;if(typeof script==='undefined'||typeof selector==='undefined'){return!1}
var observe_script_dom=(function(){var MutationObserver=window.MutationObserver||window.WebKitMutationObserver,eventListenerSupported=window.addEventListener;return function(obj,only_added,callback){if(MutationObserver){var obs=new MutationObserver(function(mutations,observer){if(only_added){if(mutations[0].addedNodes.length)
callback()}else{if(mutations[0].addedNodes.length||mutations[0].removedNodes.length)
callback()}});obs.observe(obj,{childList:!0,subtree:!0})}else if(eventListenerSupported){obj.addEventListener('DOMNodeInserted',callback,!1);if(!only_added){obj.addEventListener('DOMNodeRemoved',callback,!1)}}}})();rl_view_image=function(script,url){$.event.trigger({type:'doLightboxViewImage',script:script,url:url})}
rl_hide_image=function(script,url){$.event.trigger({type:'doLightboxHideImage',script:script,url:url})}
setTimeout(function(){var flex=$('.flex-viewport');if(rlArgs.woocommerce_gallery==='1'&&flex.length){$('.zoomImg').css('cursor','pointer');$(document).on('click','.flex-active-slide .zoomImg',function(e){e.preventDefault();e.stopPropagation();flex.find('.flex-active-slide a[data-rel]').trigger('click')})}},10);switch(script){case 'swipebox':var slide=$('#swipebox-overlay').find('.slide.current'),image_source='',allow_hide=!1,close_executed=!1;$('a[rel*="'+rlArgs.selector+'"], a[data-rel*="'+rlArgs.selector+'"]').swipebox({useCSS:(rlArgs.animation==='1'?!0:!1),useSVG:(rlArgs.useSVG==='1'?!0:!1),hideCloseButtonOnMobile:(rlArgs.hideCloseButtonOnMobile==='1'?!0:!1),removeBarsOnMobile:(rlArgs.removeBarsOnMobile==='1'?!0:!1),hideBarsDelay:(rlArgs.hideBars==='1'?parseInt(rlArgs.hideBarsDelay):0),videoMaxWidth:parseInt(rlArgs.videoMaxWidth),loopAtEnd:(rlArgs.loopAtEnd==='1'?!0:!1),afterOpen:function(){close_executed=!1;slide=$('#swipebox-overlay').find('.slide.current');var image=slide.find('img').attr('src');if(typeof image!=='undefined'){image_source=image;rl_view_image(script,image_source)}else{image_source=''}
observe_script_dom(document.getElementById('swipebox-slider'),!1,function(){if(image_source===''){var image=slide.find('img').attr('src');if(typeof image!=='undefined'){image_source=image;rl_view_image(script,image_source)}else{image_source=''}}})},nextSlide:function(){slide=$('#swipebox-overlay').find('.slide.current');var image=slide.find('img').attr('src');if(typeof image!=='undefined'){image_source=image;rl_view_image(script,image_source)}else{image_source=''}},prevSlide:function(){slide=$('#swipebox-overlay').find('.slide.current');var image=slide.find('img').attr('src');if(typeof image!=='undefined'){image_source=image;rl_view_image(script,image_source)}else{image_source=''}},afterClose:function(){close_executed=!0;if(allow_hide){rl_hide_image(script,image_source);allow_hide=!1}}});$(window).on('resize',function(){if(!close_executed){allow_hide=!0}});break;case 'prettyphoto':var view_disabled=!1,last_image='';$('a[rel*="'+rlArgs.selector+'"], a[data-rel*="'+rlArgs.selector+'"]').prettyPhoto({hook:'data-rel',animation_speed:rlArgs.animationSpeed,slideshow:(rlArgs.slideshow==='1'?parseInt(rlArgs.slideshowDelay):!1),autoplay_slideshow:(rlArgs.slideshowAutoplay==='1'?!0:!1),opacity:rlArgs.opacity,show_title:(rlArgs.showTitle==='1'?!0:!1),allow_resize:(rlArgs.allowResize==='1'?!0:!1),allow_expand:(rlArgs.allowExpand==='1'?!0:!1),default_width:parseInt(rlArgs.width),default_height:parseInt(rlArgs.height),counter_separator_label:rlArgs.separator,theme:rlArgs.theme,horizontal_padding:parseInt(rlArgs.horizontalPadding),hideflash:(rlArgs.hideFlash==='1'?!0:!1),wmode:rlArgs.wmode,autoplay:(rlArgs.videoAutoplay==='1'?!0:!1),modal:(rlArgs.modal==='1'?!0:!1),deeplinking:(rlArgs.deeplinking==='1'?!0:!1),overlay_gallery:(rlArgs.overlayGallery==='1'?!0:!1),keyboard_shortcuts:(rlArgs.keyboardShortcuts==='1'?!0:!1),social_tools:(rlArgs.social==='1'?'<div class="pp_social"><div class="twitter"><a href="//twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="//platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href='+location.href+'&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div></div>':''),ie6_fallback:!0,changepicturecallback:function(){if(view_disabled){view_disabled=!1;return}
last_image=$('#pp_full_res').find('img').attr('src');rl_view_image(script,last_image);if(rlArgs.allowExpand==='1'){$('a.pp_expand').on('click',function(){view_disabled=!0})}},callback:function(){rl_hide_image(script,last_image)}});break;case 'fancybox':var last_image='';$('a[rel*="'+rlArgs.selector+'"], a[data-rel*="'+rlArgs.selector+'"]').fancybox({modal:(rlArgs.modal==='1'?!0:!1),overlayShow:(rlArgs.showOverlay==='1'?!0:!1),showCloseButton:(rlArgs.showCloseButton==='1'?!0:!1),enableEscapeButton:(rlArgs.enableEscapeButton==='1'?!0:!1),hideOnOverlayClick:(rlArgs.hideOnOverlayClick==='1'?!0:!1),hideOnContentClick:(rlArgs.hideOnContentClick==='1'?!0:!1),cyclic:(rlArgs.cyclic==='1'?!0:!1),showNavArrows:(rlArgs.showNavArrows==='1'?!0:!1),autoScale:(rlArgs.autoScale==='1'?!0:!1),scrolling:rlArgs.scrolling,centerOnScroll:(rlArgs.centerOnScroll==='1'?!0:!1),opacity:(rlArgs.opacity==='1'?!0:!1),overlayOpacity:parseFloat(rlArgs.overlayOpacity/100),overlayColor:rlArgs.overlayColor,titleShow:(rlArgs.titleShow==='1'?!0:!1),titlePosition:rlArgs.titlePosition,transitionIn:rlArgs.transitions,transitionOut:rlArgs.transitions,easingIn:rlArgs.easings,easingOut:rlArgs.easings,speedIn:parseInt(rlArgs.speeds),speedOut:parseInt(rlArgs.speeds),changeSpeed:parseInt(rlArgs.changeSpeed),changeFade:parseInt(rlArgs.changeFade),padding:parseInt(rlArgs.padding),margin:parseInt(rlArgs.margin),width:parseInt(rlArgs.videoWidth),height:parseInt(rlArgs.videoHeight),onComplete:function(){last_image=$('#fancybox-content').find('img').attr('src');rl_view_image(script,last_image)},onClosed:function(){rl_hide_image(script,last_image)}});break;case 'nivo':$.each($('a[rel*="'+rlArgs.selector+'"], a[data-rel*="'+rlArgs.selector+'"]'),function(){var attr=$(this).attr('data-rel');if(typeof attr==='undefined'||attr==!1){attr=$(this).attr('rel')}
if(typeof attr!=='undefined'&&attr!==!1){var match=attr.match(new RegExp(rlArgs.selector+'\\-(gallery\\-(?:[\\da-z]{1,4}))','ig'));if(match!==null){$(this).attr('data-lightbox-gallery',match[0])}}});var observer_initialized=!1,change_allowed=!0,last_image='';$('a[rel*="'+rlArgs.selector+'"], a[data-rel*="'+rlArgs.selector+'"]').nivoLightbox({effect:rlArgs.effect,clickOverlayToClose:(rlArgs.clickOverlayToClose==='1'?!0:!1),keyboardNav:(rlArgs.keyboardNav==='1'?!0:!1),errorMessage:rlArgs.errorMessage,afterShowLightbox:function(lightbox){var content=$(lightbox)[0].find('.nivo-lightbox-content');if(!observer_initialized){observer_initialized=!0;observe_script_dom(document.getElementsByClassName('nivo-lightbox-content')[0],!0,function(){if(change_allowed){last_image=content.find('.nivo-lightbox-image img').attr('src');rl_view_image(script,last_image);change_allowed=!1}})}},afterHideLightbox:function(){change_allowed=!0;rl_hide_image(script,last_image)},onPrev:function(element){change_allowed=!1;last_image=element[0].attr('href');rl_view_image(script,last_image)},onNext:function(element){change_allowed=!1;last_image=element[0].attr('href');rl_view_image(script,last_image)}});break;case 'imagelightbox':var selectors=[],last_image='';$('a[rel*="'+rlArgs.selector+'"], a[data-rel*="'+rlArgs.selector+'"]').each(function(i,item){var attr=$(item).attr('data-rel');if(typeof attr!=='undefined'&&attr!==!1&&attr!=='norl')
selectors.push(attr);else{attr=$(item).attr('rel');if(typeof attr!=='undefined'&&attr!==!1&&attr!=='norl')
selectors.push(attr)}});if(selectors.length>0){selectors=$.unique(selectors);$(selectors).each(function(i,item){$('a[data-rel="'+item+'"], a[rel="'+item+'"]').imageLightbox({animationSpeed:parseInt(rlArgs.animationSpeed),preloadNext:(rlArgs.preloadNext==='1'?!0:!1),enableKeyboard:(rlArgs.enableKeyboard==='1'?!0:!1),quitOnEnd:(rlArgs.quitOnEnd==='1'?!0:!1),quitOnImgClick:(rlArgs.quitOnImageClick==='1'?!0:!1),quitOnDocClick:(rlArgs.quitOnDocumentClick==='1'?!0:!1),onLoadEnd:function(){last_image=$('#imagelightbox').attr('src');rl_view_image(script,last_image)},onEnd:function(){rl_hide_image(script,last_image)}})})}
break;case 'tosrus':var selectors=[],last_image='';$('a[rel*="'+rlArgs.selector+'"], a[data-rel*="'+rlArgs.selector+'"]').each(function(i,item){var attr=$(item).attr('data-rel');if(typeof attr!=='undefined'&&attr!==!1&&attr!=='norl')
selectors.push(attr);else{attr=$(item).attr('rel');if(typeof attr!=='undefined'&&attr!==!1&&attr!=='norl')
selectors.push(attr)}});if(selectors.length>0){selectors=$.unique(selectors);$(selectors).each(function(i,item){var tos=$('a[data-rel="'+item+'"], a[rel="'+item+'"]').tosrus({infinite:(rlArgs.infinite==='1'?!0:!1),autoplay:{play:(rlArgs.autoplay==='1'?!0:!1),pauseOnHover:(rlArgs.pauseOnHover==='1'?!0:!1),timeout:rlArgs.timeout},effect:rlArgs.effect,keys:{prev:(rlArgs.keys==='1'?!0:!1),next:(rlArgs.keys==='1'?!0:!1),close:(rlArgs.keys==='1'?!0:!1)},pagination:{add:(rlArgs.pagination==='1'?!0:!1),type:rlArgs.paginationType},show:!1,buttons:!0,caption:{add:!0,attributes:["title"]},wrapper:{onClick:rlArgs.closeOnClick==='1'?'close':'toggleUI'}});tos.bind('sliding.tos',function(event,number){last_image=$($(event.target).find('.tos-slider .tos-slide')[number]).find('img').attr('src');rl_view_image(script,last_image)});tos.bind('closing.tos',function(){rl_hide_image(script,last_image)})})}
break;case 'featherlight':var selectors=[],last_image='';$('a[rel*="'+rlArgs.selector+'"], a[data-rel*="'+rlArgs.selector+'"]').each(function(i,item){var attr=$(item).attr('data-rel');if(typeof attr!=='undefined'&&attr!==!1&&attr!=='norl')
selectors.push(attr);else{attr=$(item).attr('rel');if(typeof attr!=='undefined'&&attr!==!1&&attr!=='norl')
selectors.push(attr)}});if(selectors.length>0){selectors=$.unique(selectors);$.extend($.featherlight.defaults,{openSpeed:parseInt(rlArgs.openSpeed),closeSpeed:parseInt(rlArgs.closeSpeed),closeOnClick:rlArgs.closeOnClick,closeOnEsc:(rlArgs.closeOnEsc==='1'?!0:!1),afterOpen:function(event){last_image=event.currentTarget.href;rl_view_image(script,last_image)},afterClose:function(){rl_hide_image(script,last_image)}});$(selectors).each(function(i,item){if(/-gallery-/.test(item)){$('a[data-rel="'+item+'"], a[rel="'+item+'"]').featherlightGallery({galleryFadeIn:parseInt(rlArgs.galleryFadeIn),galleryFadeOut:parseInt(rlArgs.galleryFadeOut),previousIcon:'&#10094;',nextIcon:'&#10095;'})}else if(/-video-/.test(item)){$('a[data-rel="'+item+'"], a[rel="'+item+'"]').featherlight()}else{$('a[data-rel="'+item+'"], a[rel="'+item+'"]').featherlight()}})}
break}})})(jQuery)