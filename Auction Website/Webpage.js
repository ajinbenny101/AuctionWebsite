// Wait for the document to be fully loaded before executing any jQuery code
$(document).ready(function() {
  
  // Loop through each element on the page with the class "countdown-timer"
  $('.countdown-timer').each(function() {
    
    // Get the countdown end time from the "data-date" attribute of the current element and store it as a timestamp
    var $countdown = $(this);
    
    // Get the value of the "data-date" attribute of the current "countdown-timer" element, create a new Date object from that string, and convert it to a timestamp. Store the resulting timestamp in a variable
    var countDownDate = new Date($countdown.data('date')).getTime();
    
    // Set up an interval timer that executes a function every second
    var x = setInterval(function() {
      
         // Calculate the time left until the countdown end time and convert it to days, hours, minutes, and seconds
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Update the HTML content of the current "countdown-timer" element to display the remaining time in the format "days hours minutes seconds"
      $countdown.html(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
      
      // If the countdown has expired, clear the interval timer and update the HTML content of the current "countdown-timer" element to display "EXPIRED"
      if (distance < 0) {
        clearInterval(x);
        $countdown.html("<span style='color:red;'>EXPIRED</span>");
      }
      
    }, 1000); //  execute every 1000 milliseconds
  });
});