const button = document.getElementById("button");
const jokeContent = document.getElementById("jokecontent");
const joke = document.getElementById("joke");

button.onclick = () => {
    axios.get("https://official-joke-api.appspot.com/random_joke")
        .then(function (response) {
            button.textContent = "Next"; // Change button text
            joke.textContent = ""; // Clear previous punchline
            jokeContent.textContent = response.data.setup; // Display the joke setup
            setTimeout(function () {
                joke.textContent = response.data.punchline; // Display the punchline after 3 seconds
            }, 3000);
        })
        .catch(function (error) {
            console.log(error); // Handle any errors
        });
};