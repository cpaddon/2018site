$(function(){
  var currencies = [
    { value: 'Mitchell James', data: 'Mitchell James' },
    { value: 'Connor Paddon', data: 'Connor Paddon' },
    { value: 'Joshua Samac', data: 'Joshua Samac' },
    { value: 'Tanja Balken', data: 'Tanja Balken' },
    { value: 'John Paddon', data: 'John Paddon' },
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