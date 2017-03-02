		console.log("what is hup?");


		
		$('#home').click(function(){
			window.location ="#";
		});
		$('#flights').click(function(){
			window.location ="flights.html";
		});
		$('#hotel').click(function(){
			window.location ="hotel.html";
		});
		$('#activities').click(function(){
			window.location ="excursions.html";
		});
		$('#itinerary').click(function(){
			window.location ="itinerary.html";
		});
		$('#attendee').click(function(){
			window.location ="attendee.html";
		});

		var link = "https://docs.google.com/spreadsheets/d/181mvJI_S8t4Yyw8ziApMM8DKhWwF0d68WTB9Obz6t0g/edit#gid=1701187580";
		
		$('#admin').click(function(){
			var admincode = "Plannerchick1";
			var answer = prompt("Please ender Admin Code:");
			if(answer != admincode){
				alert("Wrong Admin Code.");
			} else {
				window.location = link;
			}
		});

		var congrats = $('#congrats').height();
		$('#facts').css('height',congrats)

		var sheetKey = "AIzaSyAv3daCKFAHnRUmkUeymZW42RyBOVzfmyo";