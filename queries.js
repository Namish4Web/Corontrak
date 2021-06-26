function ask() {
				Email.send({
	Host: "smtp.gmail.com",
	Username : "cornor.team@gmail.com",
	Password : "xml12345",
	To : 'corontrak.query@gmail.com',
	From : document.getElementById("email").value,
	Subject : document.getElementById("title").value,
	Body : document.getElementById("body").value,
	}).then(
		message => alert("Your query sent successfully")
	);
}
