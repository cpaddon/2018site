$(document).ready(function() {
    $('#weatherLocation').click(function() {
      let city = $('#location').val();
      $('#location').val("");
      $.ajax({
        url: `https://sandbox-api.onsched.com/consumer/v1/appointments?resourceId=1945&serviceId=2108&appid=eyJhbGciOiJSUzI1NiIsImtpZCI6IkJEN0FDRjNDMjZFMzIyNzg5NTUzRjNGRDg0MENEMEI3MEQ4NjMwMkMiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJ2WHJQUENiakluaVZVX1A5aEF6UXR3MkdNQ3cifQ.eyJuYmYiOjE1MjU5MjkwMzUsImV4cCI6MTUyNTkzMjYzNSwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWlkZW50aXR5Lm9uc2NoZWQuY29tIiwiYXVkIjpbImh0dHBzOi8vc2FuZGJveC1pZGVudGl0eS5vbnNjaGVkLmNvbS9yZXNvdXJjZXMiLCJPblNjaGVkQXBpIl0sImNsaWVudF9pZCI6ImMuMjVTZXJ2aWNlLkNsaWVudCIsImNsaWVudF9jbGllbnQueGNpZCI6IkMwOEQwQzY5LTI1QzMtNENERS04OEM1LTFGMjdDQkJFQkQxQiIsInNjb3BlIjpbIk9uU2NoZWRBcGkiXX0.TBB-AnVhwQ4-pJ4FdnZWAQJhJyka5LnT5Ai7xP1wCHQsvIfDYr5aYXUfyQCbve8uxrw5QNTupCen1IfRM-lKDJTYJAIjIm7UkP37Hu2wjDPFdqbtZEhiw0m6buHQdf54J4oDqfq1yJVJC7B7-dGPC_BfSzWRe6MzYb1st4qdKzarj24BBffWCDnB3TkjJ5zb5abMMctA5HMEc3gJjvkUzjoRzz2NRVG8TB15QFHnoCRlOz62LPYvY6zMBiiozSb-StV0D52_Zb9lS5WmpT3wUMfFvXHuIErk4j_X1QsqS4_CLOoofyEx5ka-3xPdMBWQ28szXChTTXF1GUkFTtdiww`,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function(response) {
          $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
          $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
        },
        error: function() {
          $('#errors').text("There was an error processing your request. Please try again.")
        }
      });
    });
  });