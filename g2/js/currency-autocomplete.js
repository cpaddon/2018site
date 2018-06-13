$(function(){
  var currencies = [
    { value: 'Example Company1', data: 'Example Company1' },
    { value: 'Example Company2', data: 'Example Company2' },
    { value: 'Example Company3', data: 'Example Company3' },
    { value: 'Example Company4', data: 'Example Company4' },
    { value: 'Example Company5', data: 'Example Company5' },
    { value: 'Example Company6', data: 'Example Company6' },
    { value: 'Example Company7', data: 'Example Company7' },
    { value: 'Example Company8', data: 'Example Company8' },
    { value: 'Example Company9', data: 'Example Company9' },
    { value: 'Example Company10', data: 'Example Company10' },
  ];
  
  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: currencies,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });
  

});