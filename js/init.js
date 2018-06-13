(function($){
  $(function(){
    $('.datepicker').datepicker();
    $('.modal').modal();
    $('.collapsible').collapsible();
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
    $('#apptdescription').val('Hi');
    $('#apptdescription2').val('Thank you for booking your Consultation at 3:30pm on July 29, 2018. You will receive an email reminding you of your appointment one day prior.');
    $('#apptdescription3').val('We are looking forward to helping you achieve your goals, please make sure we have your information correct:');
    $('#apptdescription4').val('Company:');
    $('#apptdescription5').val('Website: https://');
    $('#apptdescription6').val('Please feel free to contact us at info@onsched.com');
    $('#apptdescription7').val('Best regards,');
    M.textareaAutoResize($('#textarea1'));  
    $('.fixed-action-btn').floatingActionButton({
      toolbarEnabled: true
    });
    $('.tabs').tabs();
    $('input.autocomplete').autocomplete({
      data: {
        "Mitchell James": null,
        "Connor Paddon": null,
        "John Paddon": null,
        "Tanja Balkan": null,
        "Josh Samac": null,
      },
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
