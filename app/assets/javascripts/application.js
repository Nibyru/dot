// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery.onepage-scroll.min
//= require_tree .

var ready;
ready = function() {
	var lastIndex = 0;
	$(".main").onepage_scroll({
	   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
	   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
	                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
	   animationTime: 600,             // AnimationTime let you define how long each section takes to animate
	   pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
	   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
	   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
	   afterMove: function(index) {
	   	if(index > 1 && index < 4){
	   		$('nav').addClass('dark');
	   	}else{
	   		$('nav').removeClass('dark');
	   	}
	   	$('.item-menu').removeClass('active');
	   	$('.item-menu:nth-child(' + eval(index) +')').addClass('active');
	   },   // This option accepts a callback function. The function will be called after the page moves.
	   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
	   keyboard: true,                  // You can activate the keyboard controls
	   responsiveFallback: 600,        // You can fallback to normal page scroll by defining the width of the browser in which
	                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
	                                    // the browser's width is less than 600, the fallback will kick in.
	   direction: "horizontal"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
	});

	$('body').on('click', '.item-menu a', function(){
		console.log('ok');
		$(".main").moveTo($(this).data('index'));
	});

	var update_window_height = function(){
		var altbody = $('body').height();
		$('.nosotros').css({'height':altbody-100});
		var altnosotros = $('.nosotros').height();
		$('.nosotros').css({'width':altnosotros+'px'});
	}

	update_window_height();
	$( window ).resize(function() {
		update_window_height();
	});

	// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
	if (!String.prototype.trim) {
		(function() {
			// Make sure we trim BOM and NBSP
			var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
			String.prototype.trim = function() {
				return this.replace(rtrim, '');
			};
		})();
	}

	[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
		// in case the input is already filled..
		if( inputEl.value.trim() !== '' ) {
			classie.add( inputEl.parentNode, 'input--filled' );
		}

		// events:
		inputEl.addEventListener( 'focus', onInputFocus );
		inputEl.addEventListener( 'blur', onInputBlur );
	} );

	function onInputFocus( ev ) {
		classie.add( ev.target.parentNode, 'input--filled' );
	}

	function onInputBlur( ev ) {
		if( ev.target.value.trim() === '' ) {
			classie.remove( ev.target.parentNode, 'input--filled' );
		}
	}



	if (!String.prototype.trim) {
		(function() {
			// Make sure we trim BOM and NBSP
			var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
			String.prototype.trim = function() {
				return this.replace(rtrim, '');
			};
		})();
	}

	[].slice.call( document.querySelectorAll( 'textarea.input__field' ) ).forEach( function( textareaEl ) {
		// in case the input is already filled..
		if( textareaEl.value.trim() !== '' ) {
			classie.add( textareaEl.parentNode, 'input--filled' );
		}

		// events:
		textareaEl.addEventListener( 'focus', onTextareaFocus );
		textareaEl.addEventListener( 'blur', onTextareaBlur );
	} );

	function onTextareaFocus( ev ) {
		classie.add( ev.target.parentNode, 'input--filled' );
	}

	function onTextareaBlur( ev ) {
		if( ev.target.value.trim() === '' ) {
			classie.remove( ev.target.parentNode, 'input--filled' );
		}
	}

	$('form#new_contact').on('ajax:success',function(event, data, status, xhr){
	  alert(data.message);
	});

};


$(document).ready(ready);
$(document).on('page:load', ready);