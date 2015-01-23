if (document.referrer == "http://chris.ward.is/" || document.referrer == "http://pcward.tumblr.com") {
	$('.overlay').show().delay(5000).slideUp();
	console.log("Trigger redirect overlay.");
}

// Zebra tables
var i = 0;
$('.post').each(function( index ) {
	if (i % 2 === 0) {
	$(this).addClass('white');
  }
  else {
	$(this).addClass('grey');
  }
  i++;
});

var i = 0;
$('.listing').each(function( index ) {
	if (i % 2 === 0) {
		$(this).addClass('white_compact');
	}
	else {
		$(this).addClass('grey_compact');
	}
	i++;
});


//	Format post dates
function post_date_formatter() {
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var post_dates = $(".post_date");

	post_dates.each(function( index ) {
		var post_date = $( this ).text().split("-");

		yr = post_date[0];
		mo = post_date[1];
		d = post_date[2].split(" ")[0];

		if (d.charAt(0) === "0")
			d = d.substring(1);

		if (mo.charAt(0) === "0")
			mo = mo.substring(1);


		if (window.innerWidth < 768) {
			$( this ).text(mo + "/" + d + "/" + yr.substring(2));
		}
		else {
			$( this ).text(months[mo-1] + " " + d + ", " + yr);
		}
	});
}

window.onload = post_date_formatter;