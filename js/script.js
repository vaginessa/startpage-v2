($(function(){
  // weather
  $.simpleWeather({
    location: 'Cleveland, OH',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      // set the icon based on current conditions
      var theIcon;
      switch(weather.currently) {
        case 'Cloudy/Windy':
          theIcon = 'ion-ios-cloudy'
          break;
        case 'Cloudy':
          theIcon = 'ion-ios-cloudy'
          break;
        case 'Sunny':
          theIcon = 'ion-ios-sunny'
          break;
        case 'Partly Cloudy':
          theIcon = 'ion-ios-partlysunny'
          break;
        default:
          break;
      }

      icon = '<i class="'+theIcon+'"></i>';
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';

      $('#weatherIcon').html(icon);
      $('#weather').html(html);
    },
    error: function(error) {
      $('#weather').html('<p>'+error+'</p>');
    }
  });

  // top button clicks
	$('.circleOne').click(function(){
		$('.overlay').addClass('open');
		$('.develop').addClass('open');
		$('.overlay').click(function(){
			$(this).removeClass('open');
			$('.develop').removeClass('open');
		});
	});
	$('.circleTwo').click(function(){
		$('.overlay').addClass('open');
		$('.social').addClass('open');
		$('.overlay').click(function(){
			$(this).removeClass('open');
			$('.social').removeClass('open');
		});
	});
	$('.circleThree').click(function(){
		$('.overlay').addClass('open');
		$('.shop').addClass('open');
		$('.overlay').click(function(){
			$(this).removeClass('open');
			$('.shop').removeClass('open');
		});
	});
	$('.circleFour').click(function(){
		$('.overlay').addClass('open');
		$('.learn').addClass('open');
		$('.overlay').click(function(){
			$(this).removeClass('open');
			$('.learn').removeClass('open');
		});
	});
	$('.circleFive').click(function(){
		$('.overlay').addClass('open');
		$('.finance').addClass('open');
		$('.overlay').click(function(){
			$(this).removeClass('open');
			$('.finance').removeClass('open');
		});
	});
}));
