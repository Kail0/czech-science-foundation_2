 // as the page loads, cal these scripts
 (function($) {
     $(function() {


         // SIDE MENU
         $('.button-collapse').sideNav({
             menuWidth: 300, // Default is 240
             edge: 'right', // Choose the horizontal origin
             closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
         });

         //waves efffect on NAV
         $('li.page_item').addClass('waves-effect waves-light');

         // dropdown initialization
         $('.dropdown-button').dropdown({
             inDuration: 300,
             outDuration: 225,
             constrain_width: false, // Does not change width of dropdown to that of the activator
             hover: true, // Activate on hover
             gutter: 0, // Spacing from edge
             belowOrigin: false, // Displays dropdown below the button
             alignment: 'left' // Displays dropdown with edge aligned to the left of button
         });


     }); // end of document ready
 })(jQuery); // end of jQuery name space
