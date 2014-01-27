/*jQuery time*/
$(document).ready(function(){


		/* TODO: Find a way to close by clicking content area */


	// $(function(){
	//     $('.menu-button').click(function(){$('.container').toggleClass('active');});
	// });



		var container = $('.container');

	    $('.menu-button').click(function(){

	    	// alert('button');

	    	// $(content).toggleClass('open');

	    	if (container.hasClass('open')) {
	    		$(container).removeClass('open');
	    		// alert('close');

	    	}
			else {
				// alert('open');
					
				$(container).addClass('open');
			}

		});









		// content.click(function(){
		// 	if (content.hasClass('open')) {

		// 		$(content).removeClass('open');
		// 	}
		// });


    // $('.slideshow').each(function(index) {
    //     $(this).cycle({
    //     	slides: "> .all-slides",
    //         timeout: 8000,
    //         speed:   600,
    //         sync:    true,
    //         prev: ".prev",
    //         next: ".next",
    //         pager:  ".pager",
    //         pagerAnchorBuilder: function(i) {
    //             if (index == 0)
    //                 // for first slideshow, return a new anchro
    //                 return '<a href="#">'+("&#8226")+'</a>';
    //             // for 2nd slideshow, select the anchor created previously
    //             return '.pager a:eq('+i+')';
    //         }
    //     });
    // });




});