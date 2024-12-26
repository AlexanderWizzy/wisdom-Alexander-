// script.js
let currentQuestionIndex = 0;
let correctAnswers = 0;
const decorations = ['🎄', '🎅', '❄️', '✨', '⛄', '🎁', '🎶', '⭐', '🕯️', '🎁', '🎄', '🌟', '🔔', '🦌', '🥂', '🍪', '🛷', '🎀', '🌲', '🦌'];

    const questions = [
        {question: "What is the traditional Christmas flower?", options: ["Poinsettia", "Rose", "Tulip", "Lily"], correct: 1},
        {question: "In the song 'The Twelve Days of Christmas,' what is given on the fifth day?", options: ["Five golden rings", "Five golden stars", "Five golden lights", "Five golden gifts"], correct: 1},
        {question: "What reindeer is known for having a red nose?", options: ["Dasher", "Rudolph", "Blitzen", "Comet"], correct: 2},
        {question: "What sweet treat is shaped like a shepherd's crook?", options: ["Candy Cane", "Chocolate Bar", "Gingerbread", "Lollipop"], correct: 1},
        {question: "Who tried to steal Christmas in a Dr. Seuss book?", options: ["Grinch", "Santa", "Frosty", "Scrooge"], correct: 1},
        {question: "Which country started the tradition of putting up a Christmas tree?", options: ["Germany", "England", "France", "Italy"], correct: 1},
        {question: "What does Frosty the Snowman do when he gets too warm?", options: ["Melts", "Dances", "Sings", "Floats"], correct: 1},
        {question: "What is the name of the dog in 'How the Grinch Stole Christmas'?", options: ["Rex", "Max", "Buddy", "Charlie"], correct: 2},
        {question: "What type of tree do people typically decorate for Christmas?", options: ["Pine", "Maple", "Oak", "Birch"], correct: 1},
        {question: "What color is Santa’s suit?", options: ["Red", "Green", "Blue", "White"], correct: 1},
        {question: "In what town was Jesus born?", options: ["Nazareth", "Bethlehem", "Jerusalem", "Capernaum"], correct: 2},
        {question: "What song begins with 'Jingle bells, jingle bells, jingle all the way'?", options: ["Jingle Bells", "Silent Night", "Frosty the Snowman", "Deck the Halls"], correct: 1},
        {question: "Which country gifts the Christmas tree in Trafalgar Square, London?", options: ["Norway", "Denmark", "Finland", "Sweden"], correct: 1},
        {question: "Who wrote the classic Christmas story 'A Christmas Carol'?", options: ["Charles Dickens", "J.R.R. Tolkien", "Mark Twain", "Jane Austen"], correct: 1},
        {question: "In which city would you find the Christkindlmarkt (Christmas market)?", options: ["Vienna", "Berlin", "Paris", "London"], correct: 1},
        {question: "Which of these Christmas carols was first published in 1843?", options: ["Silent Night", "Jingle Bells", "Deck the Halls", "O Holy Night"], correct: 1},
        {question: "What popular Christmas drink is made with egg yolk, sugar, milk, and alcohol?", options: ["Eggnog", "Hot Chocolate", "Mulled Wine", "Cider"], correct: 1},
        {question: "What is traditionally hidden in a Christmas pudding?", options: ["A coin", "A ring", "A star", "A nut"], correct: 1},
        {question: "What animated film features a train that takes children to the North Pole?", options: ["Polar Express", "Elf", "The Grinch", "Home Alone"], correct: 1},
        {question: "What famous reindeer is known for leading Santa’s sleigh?", options: ["Comet", "Dasher", "Rudolph", "Blitzen"], correct: 3},
        {question: "What is the name of the 12th month in the Gregorian calendar?", options: ["December", "January", "November", "October"], correct: 1},
        {question: "What’s the name of the main character in 'Home Alone'?", options: ["Kevin", "Marty", "Jack", "Tim"], correct: 1},
        {question: "What snack is often left out for Santa on Christmas Eve?", options: ["Cookies", "Cake", "Pie", "Fruit"], correct: 1},
        {question: "What do people traditionally kiss under during Christmas?", options: ["Mistletoe", "Pine", "Holly", "Bell"], correct: 1},
        {question: "What do the British call Santa Claus?", options: ["Father Christmas", "Kris Kringle", "Saint Nick", "Papa Noel"], correct: 1},
        {question: "Which reindeer shares a name with a famous symbol of Valentine’s Day?", options: ["Cupid", "Comet", "Vixen", "Dasher"], correct: 1},
        {question: "What Christmas decoration was originally made from silver?", options: ["Tinsel", "Star", "Wreath", "Lights"], correct: 1},
        {question: "What does Alvin the Chipmunk want for Christmas?", options: ["Hula Hoop", "Toy Car", "Drum Set", "Doll"], correct: 1},
        {question: "What’s the first name of Scrooge in 'A Christmas Carol'?", options: ["Ebenezer", "Jacob", "Robert", "Jonathan"], correct: 1},
        {question: "In what year was 'Home Alone' first released?", options: ["1990", "1985", "1995", "2000"], correct: 1},
        {question: "What is Frosty the Snowman’s nose made of?", options: ["Button", "Carrot", "Coal", "Pepper"], correct: 1},
        {question: "Which country invented eggnog?", options: ["England", "France", "Germany", "USA"], correct: 1},
        {question: "What’s another name for Santa Claus?", options: ["Saint Nick", "Father Winter", "Saint Paul", "Father Joy"], correct: 1},
        {question: "What is the meaning of 'Noel'?", options: ["Birth", "Snow", "Peace", "Light"], correct: 1},
        {question: "What are you supposed to do when you find yourself under the mistletoe?", options: ["Kiss", "Sing", "Dance", "Laugh"], correct: 1},
        {question: "What is the best-selling Christmas single of all time?", options: ["White Christmas", "Jingle Bells", "Silent Night", "All I Want For Christmas Is You"], correct: 1},
        {question: "What’s the Grinch’s dog’s name?", options: ["Max", "Charlie", "Rover", "Buddy"], correct: 1},
        {question: "What red-blooming Christmas plant originated in Mexico?", options: ["Poinsettia", "Holly", "Amaryllis", "Cyclamen"], correct: 1},
        {question: "What beverage company is responsible for Santa’s red suit?", options: ["Coca-Cola", "Pepsi", "Nestle", "Dr Pepper"], correct: 1},
        {question: "What Christmas-themed ballet features the 'Dance of the Sugar Plum Fairy'?", options: ["The Nutcracker", "Swan Lake", "Cinderella", "Sleeping Beauty"], correct: 1},
        {question: "Who sings 'All I Want for Christmas Is You'?", options: ["Mariah Carey", "Beyonce", "Ariana Grande", "Taylor Swift"], correct: 1},
        {question: "What Christmas drink has a name derived from Old English for 'good health'?", options: ["Wassail", "Eggnog", "Hot Toddy", "Cider"], correct: 1},
        {question: "What is Santa’s primary mode of transportation?", options: ["Sleigh", "Car", "Boat", "Plane"], correct: 1},
        {question: "What famous Christmas dessert is made with dried fruit?", options: ["Christmas Pudding", "Yule Log", "Fruitcake", "Gingerbread"], correct: 1},
        {question: "What ocean is Christmas Island in?", options: ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Arctic Ocean"], correct: 1},
    ];
    
// function startGame() {
//     currentQuestionIndex = 0;
//     correctAnswers = 0;
//     document.getElementById('startButton').style.display = 'none';
//     loadQuestion();
//     playBackgroundMusic();
// }

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById('question').innerText = currentQuestion.question;
        const options = currentQuestion.options;
        for (let i = 0; i < options.length; i++) {
            document.getElementById(`answer${i+1}`).innerText = options[i];
        }
    } else {
        showResults();
    }
}

function checkAnswer(answerIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (answerIndex === currentQuestion.correct) {
        correctAnswers++;
        addDecoration();
        playCorrectAnswerSound();
    } else {
        playIncorrectAnswerSound();
    }
    currentQuestionIndex++;
    loadQuestion();
}

function addDecoration() {
    const decoration = document.createElement('div');
    decoration.classList.add('decor-item');
    decoration.innerText = decorations[correctAnswers - 1];
    document.getElementById('decorations').appendChild(decoration);
}

function showResults() {
    document.getElementById('question').innerText = `Game Over! You got ${correctAnswers} out of ${questions.length} correct.`;
    document.getElementById('startButton').innerText = 'Play Again';
    document.getElementById('startButton').style.display = 'inline-block';
}

function playBackgroundMusic() {
    const music = document.getElementById('backgroundMusic');
    music.play();
}

function playCorrectAnswerSound() {
    const sound = document.getElementById('correctAnswerSound');
    sound.play();
}

function playIncorrectAnswerSound() {
    const sound = document.getElementById('incorrectAnswerSound');
    sound.play();
}

function toggleMusic() {
    const music = document.getElementById('backgroundMusic');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
// script.js

// Function to play a selected song
function playSong(songId) {
    // Stop any currently playing songs
    stopSong();

    // Play the selected song
    const song = document.getElementById(songId);
    song.play();
}

// Function to stop all songs
function stopSong() {
    const songs = ['jingle_bells', 'silent_night', 'deck_the_halls'];
    songs.forEach(songId => {
        const song = document.getElementById(songId);
        song.pause();
        song.currentTime = 0; // Reset to the start
    });
}
// function startGame() {
//     currentQuestionIndex = 0;
//     correctAnswers = 0;
//     questions.sort(() => Math.random() - 0.5); // Shuffle questions
//     document.getElementById('startButton').style.display = 'none';
//     loadQuestion();
//     playBackgroundMusic();
// }
function startGame() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    questions.sort(() => Math.random() - 0.5); // Shuffle questions
    document.getElementById('startButton').style.display = 'none';
    loadQuestion();
    playBackgroundMusic(); // Start playing music
}

// Function to play the background music
function playBackgroundMusic() {
    const music = document.getElementById("backgroundMusic");
    music.volume = 0.5; // Set volume (0.0 to 1.0)
    music.play();
}

// Function to stop the background music
function stopBackgroundMusic() {
    const music = document.getElementById("backgroundMusic");
    music.pause();
    music.currentTime = 0; // Reset to the beginning
}

// Optionally, toggle music
function toggleMusic() {
    const music = document.getElementById("backgroundMusic");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
