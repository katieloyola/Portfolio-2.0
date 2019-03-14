/* jquery.scrollex v0.2.1 | (c) @ajlkn | github.com/ajlkn/jquery.scrollex | MIT licensed */
!function(t){function e(t,e,n){return"string"==typeof t&&("%"==t.slice(-1)?t=parseInt(t.substring(0,t.length-1))/100*e:"vh"==t.slice(-2)?t=parseInt(t.substring(0,t.length-2))/100*n:"px"==t.slice(-2)&&(t=parseInt(t.substring(0,t.length-2)))),t}var n=t(window),i=1,o={};n.on("scroll",function(){var e=n.scrollTop();t.map(o,function(t){window.clearTimeout(t.timeoutId),t.timeoutId=window.setTimeout(function(){t.handler(e)},t.options.delay)})}).on("load",function(){n.trigger("scroll")}),jQuery.fn.scrollex=function(l){var s=t(this);if(0==this.length)return s;if(this.length>1){for(var r=0;r<this.length;r++)t(this[r]).scrollex(l);return s}if(s.data("_scrollexId"))return s;var a,u,h,c,p;switch(a=i++,u=jQuery.extend({top:0,bottom:0,delay:0,mode:"default",enter:null,leave:null,initialize:null,terminate:null,scroll:null},l),u.mode){case"top":h=function(t,e,n,i,o){return t>=i&&o>=t};break;case"bottom":h=function(t,e,n,i,o){return n>=i&&o>=n};break;case"middle":h=function(t,e,n,i,o){return e>=i&&o>=e};break;case"top-only":h=function(t,e,n,i,o){return i>=t&&n>=i};break;case"bottom-only":h=function(t,e,n,i,o){return n>=o&&o>=t};break;default:case"default":h=function(t,e,n,i,o){return n>=i&&o>=t}}return c=function(t){var i,o,l,s,r,a,u=this.state,h=!1,c=this.$element.offset();i=n.height(),o=t+i/2,l=t+i,s=this.$element.outerHeight(),r=c.top+e(this.options.top,s,i),a=c.top+s-e(this.options.bottom,s,i),h=this.test(t,o,l,r,a),h!=u&&(this.state=h,h?this.options.enter&&this.options.enter.apply(this.element):this.options.leave&&this.options.leave.apply(this.element)),this.options.scroll&&this.options.scroll.apply(this.element,[(o-r)/(a-r)])},p={id:a,options:u,test:h,handler:c,state:null,element:this,$element:s,timeoutId:null},o[a]=p,s.data("_scrollexId",p.id),p.options.initialize&&p.options.initialize.apply(this),s},jQuery.fn.unscrollex=function(){var e=t(this);if(0==this.length)return e;if(this.length>1){for(var n=0;n<this.length;n++)t(this[n]).unscrollex();return e}var i,l;return(i=e.data("_scrollexId"))?(l=o[i],window.clearTimeout(l.timeoutId),delete o[i],e.removeData("_scrollexId"),l.options.terminate&&l.options.terminate.apply(this),e):e}}(jQuery);

//

/* jquery.scrolly v0.1 | (c) n33 | n33.co @n33co | MIT */
			(function(e){var t="click.scrolly";e.fn.scrolly=function(r,i){var s=e(this);return r||(r=1e3),i||(i=0),s.off(t).on(t,function(t){var n,s,o,u=e(this),a=u.attr("href");a.charAt(0)=="#"&&a.length>1&&(n=e(a)).length>0&&(s=n.offset().top,u.hasClass("scrolly-centered")?o=s-(e(window).height()-n.outerHeight())/2:(o=Math.max(s,0),i&&(typeof i=="function"?o-=i():o-=i)),t.preventDefault(),e("body,html").stop().animate({scrollTop:o},r,"swing"))}),s}})(jQuery);

			$(function() {

				$('.item').scrollex({

					// Mode: Sets Scrollex to 'middle' mode (= midpoint between top/bottom edges must fall within contact area).
						mode: 'middle',

					// Initialize event: Add the 'inactive' class to this element as soon as Scrollex is initialized.
						initialize: function() {
							$(this).addClass('inactive');
						},

					// Enter event: Remove the 'inactive' class from this element.
						enter: function() {
							$(this).removeClass('inactive');
						},

					// Leave event: Apply the 'inactive' class to this element.
						leave: function() {
							$(this).addClass('inactive');
						},

					// Scroll event: Perform various CSS tweaks based on the user's progress through this element.
						scroll: function(progress) {

							var $this = $(this),
								$container = $this.find('.container'),
								$title = $this.find('.title'),
								$p = $this.find('p'),
								$next = $this.find('.next'),
								x;

							// Title.

								// Rotation.
									// x = (progress - 0.5) * 540;

									// $title
									// 	.css('-moz-transform', 'rotateX(' + x + 'deg)')
									// 	.css('-webkit-transform', 'rotateX(' + x + 'deg)')
									// 	.css('-o-transform', 'rotateX(' + x + 'deg)')
									// 	.css('-ms-transform', 'rotateX(' + x + 'deg)')
									// 	.css('transform', 'rotateX(' + x + 'deg)');

								// Opacity.
									if (progress > 0.5)
										x = 1 - progress;
									else
										x = progress;

									x = Math.max(0, Math.min(1, x * 2));

									$title.css('opacity', x);

							// Paragraph.

								// Opacity.
									if (progress > 0.5)
										x = 1 - progress;
									else
										x = progress;

									x = Math.max(0, Math.min(1, x * 2));

									$p.css('opacity', x);

							// Next.

								// Opacity.
									x = 1 - (Math.max(0, progress - 0.5) * 1.5);

									$next.css('opacity', x)

								// Scale.
									x = 1 - (Math.max(0, progress - 0.5));

									$next
										.css('-moz-transform', 'scale(' + x + ')')
										.css('-webkit-transform', 'scale(' + x + ')')
										.css('-o-transform', 'scale(' + x + ')')
										.css('-ms-transform', 'scale(' + x + ')')
										.css('transform', 'scale(' + x + ')');

								// Scrolly.
									$next.scrolly(3000);

						}

				});

			});
