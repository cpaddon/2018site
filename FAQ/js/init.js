(function($){
  $(function(){
    $('.datepicker').datepicker();
    $('.modal').modal();
    $('.collapsible').collapsible();
    $('.sidenav').sidenav({
        edge: 'right',
    });
    $('#textarea1').val('New Text');
    M.textareaAutoResize($('#textarea1'));  
    $('.fixed-action-btn').floatingActionButton();
    $('.collapsible').collapsible();
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
