let computerScore = 0;
    let yourScore = 0;

    function togglePopup() {
        var popicon = document.getElementById("popup");
        if (popicon.style.display === "block") {
            popicon.style.display = "none";
        } else {
            popicon.style.display = "block";
        }
    }

    function closePopup() {
        var popicon = document.getElementById("popup");
        popicon.style.display = "none";
    }
    function backtopage(){
        window.location.href ="index.html"
    }


    function play(userChoice) {
        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        // Create HTML elements for user and computer choices
        const userChoiceHTML = `<button class="circle">
            <img src="https://i.ibb.co/6H9V6gg/${userChoice}.jpg" alt="${userChoice}" height="80px" width="60px">
        </button>`;
        const computerChoiceHTML = `<button class="circle1">
            <img src="https://i.ibb.co/Dkjd8TK/${computerChoice}.jpg" alt="${computerChoice}" height="82px" width="60px">
        </button>`;

       

       

        // Determine the winner and update the scores
        if (userChoice === computerChoice) {
            // It's a tie
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            // You win
            yourScore++;
        } else {
            // Computer wins
            computerScore++;
        }

        // Update the score display
        document.getElementById("three").textContent = yourScore;
        document.getElementById("six").textContent = computerScore;
    }

    