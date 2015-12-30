$(document).ready(function(){

	//scroll to about section
	$("#aboutBtn").on('click', function(e) {
	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(hash).offset().top
	     }, 300, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;
	     });
	});

	//scroll to resume section
	$("#resumeBtn").on('click', function(e) {
	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(hash).offset().top
	     }, 300, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;
	     });
	});

	//scroll to projects section
	$("#projectBtn").on('click', function(e) {
	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(hash).offset().top
	     }, 300, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;
	     });
	});

	//scroll to contact section
	$("#contactBtn").on('click', function(e) {
	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(hash).offset().top
	     }, 300, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;
	     });
	});

	$("#contactForm").on("submit", function(event){
		event.preventDefault();
		var data = {};
		data.name= $("#formName").val();
		data.email= $("#formEmail").val();
		data.message = $("#formMessage").val();
		console.log(data);
		$.ajax({
					type: "Post",
					url: "/contacts",
					data: data,
					success: function(data){
						console.log("saved");
						$(".formRow").hide();
						$(".messageSent").toggle();
					},
					error: function(err){
						console.log(err);
					}
				});
		});	
});