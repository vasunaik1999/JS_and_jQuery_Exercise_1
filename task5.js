let movieList = [];

function addTitle() {
	let title = document.getElementById("title").value;
	let rating = document.getElementById("rating").value;
	if (title === "" || rating === "") {
		alert("Please enter both an title and a rating.");
		return;
	}

    let newMovie = {
		title: title,
		rating: rating
	};

    movieList.push(newMovie);
	displayMovies();
}

function displayMovies() {
	let table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
	table.innerHTML = "";
	for (let i = 0; i < movieList.length; i++) {
		let title = movieList[i];
		let row = table.insertRow();
		let titleCell = row.insertCell(0);
		let ratingCell = row.insertCell(1);
		let deleteCell = row.insertCell(2);
		titleCell.innerHTML = title.title;
		ratingCell.innerHTML = title.rating;
		deleteCell.innerHTML = "<button class='deleteBtn' onclick='deleteMovie(" + i + ")'>Delete</button>";
	}
}

function deleteMovie(index) {
	movieList.splice(index, 1);
	displayMovies();
}
