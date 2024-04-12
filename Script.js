$(document).ready(function() {
    $(".saveBtn").on('click', function() {
      var eventTime = ($(this.parentElement).attr('id').substring(5));
      var eventText = this.parentElement.children[1].value;
      localStorage.setItem(eventTime, eventText);
    });
  
    function currentTime() {
      var time = dayjs().hour();
      $('.time-block').each(function () {
        var hour = parseInt($(this).attr('id').substring(5));
        var stringHour = $(this).attr('id').substring(5);
        var loadedText = localStorage.getItem(stringHour);
        this.children[1].value = loadedText;
        if (time === hour) {
          $(this).addClass('present');
        } else if (time > hour) {
          $(this).addClass('past');
        } else {
          $(this).addClass('future');
        };
      });
    };
    currentTime();
  
    function displayTime() {
      var currentDay = $('#currentDay');
      var today = dayjs().format('[Today is ] dddd, MMM DD, YYYY [at] hh[:]mm[:]ss a');
      currentDay.text(today);
    };
    
    displayTime();
    setInterval(displayTime,1000);
});