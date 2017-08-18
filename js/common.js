$(document).ready(function() {

	$(".form").submit(function() {
		$.magnificPopup.close();

		$('.send-message').delay(300).css({'visibility': 'visible'}).animate({'opacity':'1'}, 1200);  
		$('.send-message').delay(1200).animate({'opacity':'0'}, 1200, function () {   
			$(this).css({'visibility': 'hidden'})  });

		$.ajax({
			type: "POST",
			url: "php/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			
			
			$(".form").trigger("reset");
		});
		return false;
	});

});