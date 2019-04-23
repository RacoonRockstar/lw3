
var cinemaHall1 = {
    row: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
  },
  cinemaHallMap = '';
$.each(cinemaHall1.row, function(row, numberOfSeats) {
  cinemaHallRow = '';
  for (i = 1; i <= numberOfSeats; i++) {
    // собираем ряды
    cinemaHallRow += '<div class="seat" data-row="' +
      i + '" data-seat="' +
      i + '">&nbsp;</div>';
  }
  
  cinemaHallMap += cinemaHallRow + '<div class="passageBetween">&nbsp;</div>';
});


$('.zal1').html(cinemaHallMap);

$('.seat').on('click', function(e) {
  
  $(e.currentTarget).toggleClass('bay');
  
  showBaySeat();
});

function showBaySeat() {
  result = '';
 
  $.each($('.seat.bay'), function(key, item) {
    result += '<div class="ticket">row: ' +
      $(item).data().row + ' seat:' +
      $(item).data().seat + '</div>';
  });

  $('.result').html(result);
}
