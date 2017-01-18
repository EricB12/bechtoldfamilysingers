/*
 * This is the code in the scripts n styles plugin that
 * makes left aligned pictures in posts marked with class "small-screen-center"
 * center aligned when the screen width reduces below a certain threshold.
 * This file doesn't actually get run...it is just here so that it stays
 * under version control.
 * 
 */

refreshContentSize(); //run initially
	
jQuery(window).resize(function() { //run whenever window size changes
	refreshContentSize();
});

setInterval(refreshContentSize(), 500); // in case content size changes. THIS IS WHAT I WANT TO CHANGE

function refreshContentSize()
{
	if (jQuery(window).width() < 600){//Adjust this value as necessary
		jQuery('.small-screen-center').addClass('aligncenter');
		jQuery('.small-screen-center').removeClass('alignleft');
	}
	else{
		jQuery('.small-screen-center').addClass('alignleft');
		jQuery('.small-screen-center').removeClass('aligncenter');
	}
	
	return; 
}