


class gameStart{

    constructor() {
        // global variables
        this.currentQuestion = 0;
        this.userScore = 0;
                   
        this.timeValue = 40; 

        this.que = [ 
            {
            num: 1,
            question:  "What is the capital of Nigeria?",
            answer: "Abuja",
            options: [
                "Lagos",
                "Ogun",
                "Abuja",
                "Freetown",
            ]
            },
            {
            num:2 ,
            question:  " What is the capital of Ghana? ",
            answer: " Accra",
            options: [
                "Cape Town ",
                " Bamako",
                "Cairo",
                " Accra",
            ]
            },            
            {
            num:3 ,
            question:  " Nigeria has how many ethnic groups? ",
            answer: "250",
            options: [
                "100",
                " 200",
                "500",
                " 250",
            ]
            },
            {
            num:4 ,
            question:  " What day is Democracy Day celebrated in Nigeria? ",
            answer: "June 12",
            options: [
                "June 1",
                " July 1",
                " June 12",
                " July 12",
            ]
            },
            {
            num:5 ,
            question:  " The hottest region in the world is?  ",
            answer: "The Sahara Desert",
            options: [
                "Lagos, Nigeria",
                " Missisippi, United States of America",
                " Cairo, Egypt",
                " The Sahara Desert",
            ]
            },
            {
            num:6 ,
            question:  " Which country has the largest area in Africa?  ",
            answer: "Algeria",
            options: [
                "Sudan",
                " Algeria",
                " The Democratic Republic of Congo",
                " Libya",
            ]
            },
            {
            num:7 ,
            question:  " Who wrote the first Yoruba Dictionary? ",
            answer: "Ajayi Crowther",
            options: [
                " Samuel Adebanji",
                "  Wole Soyinka",
                " D.O Fagunwa ",
                "  Ajayi Crowther",
            ]
            },
            {
            num: 8,
            question:  " What does the colour 'blue' represent in the flag of the Nigerian army? ",
            answer: " Love, loyalty, and unity",
            options: [
                "  Love, trust, and unity",
                " Love, loyalty, and obedience ",
                "  Charm, trust, and unity",
                "  Love, loyalty, and unity",
            ]
            },
            {
            num: 9,
            question:  " Nigeria has ____ local government areas ",
            answer: "774",
            options: [
                " 500",
                "650 ",
                "735 ",
                " 774",
            ]
            },
            {
            num: 10,
            question:  " What is the concept of Ubuntu? ",
            answer: "'I am, because you are'",
            options: [
                " 'I am, because you are'",
                "'Let's always dialogue' ",
                " 'I am a proud African'",
                "'Let's be fellow aderent'",
            ]
            },
            {
            num: 11,
            question:  "What is the longest mountain range in Africa? ",
            answer: "Atlas",
            options: [
                "Virunga ",
                " Atlas ",
                " None of the above ",
                " Mitumba ",
            ]
            },
            {
            num:12 ,
            question:  " Africa is divided into ___ regional divisions ",
            answer: "6",
            options: [
                "4 ",
                "7 ",
                " 9",
                "6 ",
            ]
            },
            {
            num: 13,
            question:  " The King of Afrobeat in Nigeria is? ",
            answer: " Fela Kuti ",
            options: [
                "  Fela Kuti",
                "  Burna Boy",
                " WizKid",
                " Davido ",
            ]
            },
            {
            num:14 ,
            question:  " The official language in Nigeria is ",
            answer: "English Language",
            options: [
                "Hausa Language ",
                "Yoruba Language ",
                "Igbo Language ",
                "English Language ",
            ]
            },
            {
            num: 15,
            question:  " The largest island in Africa is ",
            answer: "Madagascar",
            options: [
                " Comorous",
                " Cape Verde",
                "Madagascar ",
                " None of the above",
            ]
            },
            {
            num: 16,
            question:  " The capital of an African country is named after an American President. His name is ",
            answer: "James Monroe",
            options: [
                " George Washington",
                " Herbert Hoover",
                " James Monroe",
                " Andrew Jackson",
            ]
            },
            {
            num: 17,
            question:  " What is the highest peak in Africa? ",
            answer: "Mount Kilimanjaro",
            options: [
                "Mount Kilimanjaro ",
                " Mount Everest",
                " I don't know",
                " No answer",
            ]
            },
            {
            num: 18,
            question:  " Swahili is generally spoken in ",
            answer: "East Africa",
            options: [
                " West Africa",
                "North Africa ",
                "East Africa ",
                " South Africa",
            ]
            },
            {
            num: 19,
            question:  " Apart from Egypt, pyramids can be found in ",
            answer: "Algeria",
            options: [
                " Nigeria",
                " Chalk",
                " Morocco",
                " Algeria",
            ]
            },
            {
            num: 20,
            question:  " The river nile flows through ___ countries. ",
            answer: "11",
            options: [
                " 12",
                " 10",
                " 11",
                " 13",
            ]
            }
            
        ]
    }


    init() {
        this.buttons();
        this.createQuestion();
        this.setTimer;
        this.setNumOfQue();
        this.scoreMsg();

       
    }
    
    buttons() {       
            // select html classes of boxs and buttons
            const welcomeBox = document.querySelector(".welcome-box");
            const infoBox = document.querySelector(".info-box");
            const exitBox = document.querySelector(".exit-box");
            const startBox = document.querySelector(".start-box");
            const quizBox = document.querySelector(".quiz-box");
            const contactBox = document.querySelector(".contact-box");
            const resultBox = document.querySelector(".result-box");

            const startBtn = document.querySelector(".start");
            const contactBtn = document.querySelector(".contact");
            const restartBtn = document.querySelector(".restart");
            const continueBtn = document.querySelector(".continue");
            const nextBtn = document.querySelector(".next");
            const backToQuizBtn = document.querySelector(".back-to-quiz");
            const contact2Btn = document.querySelector(".contact2");

     // start btn
        startBtn.addEventListener('click', () => {
                if (startBox.classList.contains('d-none')) {
                    infoBox.classList.remove('d-none');
                    welcomeBox.classList.add('d-none');                   
                }
        })
    
        // continue btn 
        continueBtn.addEventListener('click', () => {      
            infoBox.classList.add('d-none');
            startBox.classList.add('d-none');
            quizBox.classList.remove('d-none');
            
            // this resets the time
            this.setTimer(this.timeValue);
            // this resets the question
            this.createQuestion()
            // this resets the total num of que answered
            this.setNumOfQue
        })
        
        // contact btn 
        contactBtn.addEventListener('click', () => {
            infoBox.classList.add('d-none');
            startBox.classList.add('d-none');
            quizBox.classList.add('d-none');
            welcomeBox.classList.add('d-none');
            contactBox.classList.remove('d-none');
        })

        //next btn
        nextBtn.addEventListener("click", () => {                      
            this.currentQuestion++;
            this.createQuestion();
            this.setNumOfQue(); 

            const scoreDisplay = document.querySelector('.score-display');
            if (this.userScore >= 1 ) {
                scoreDisplay.classList.remove('d-none');
            } else {
                scoreDisplay.classList.add('d-none');
            }

            if( this.currentQuestion == this.que[19].num) {
                nextBtn.classList.add('d-none');
            }

            if(this.que[this.currentQuestion].num == 20) {
                nextBtn.classList.add('d-none');
            } 
        })

       
        //back to quiz
        backToQuizBtn.addEventListener('click', () => {
            contactBox.classList.add('d-none');
            infoBox.classList.remove('d-none')
        })
        
        //restart quiz
        restartBtn.addEventListener('click', () => {
            infoBox.classList.remove('d-none');
            resultBox.classList.add('d-none');        
            nextBtn.classList.remove('d-none');
            this.createQuestion();
            this.setScore();
            
            const timerText = document.querySelector(".timer-text");
            timerText.textContent = "You have:"
            timerText.style.color = 'inherit';

            
            const timerSec = document.querySelector(".timer-sec");
            timerSec.style.color = 'inherit'
        })
        
        //contact2 button
        contact2Btn.addEventListener('click', () => {
            resultBox.classList.add('d-none');
            contactBox.classList.remove('d-none');
        })

        
    }

   
    // function to load questions
    createQuestion() {
        // creating a new div
        let div = document.createElement('div');

        //targeting the HTML element in the DOM
        let output = document.querySelector('.que-text');
        let tickIcon = '<div class="icon tick"> <i class="fa fa-check"></i></div>';
        let crossIcon = '<div class="icon cross"> <i class="fa fa-times"></i></div>';

        // resets output everytime a new que is loaded
        output.innerHTML = ''; 
        div.className = "col-md-12 pb-4";        
        // console.log(this.currentQuestion)

            // creating a question 
           const question = document.createElement('div');

           // creating a class for the question
           question.className = "col-md-12 mb-3";
           let questionText = document.createElement('h5');
           let questionNum = document.createElement('h5'); 

        //    console.log(this.que[this.currentQuestion].num)
           //set question in the dom to the question of each individual questions 
           questionText.innerText = `${this.que[this.currentQuestion].num}.  ${this.que[this.currentQuestion].question}`
           // append question text to question div
           question.appendChild(questionNum);
           question.appendChild(questionText);
           
           // this grabs this.que options 
           let queOptions =  this.que[this.currentQuestion].options;

           
           
             queOptions.forEach(element => {

                let options = document.querySelector('.option');
                // creates a new p tag
                options = document.createElement('p');
                 options.className = "col-md-12 mb-2 d-flex pl-5";

               options.innerText = element;
               question.appendChild(options);
               
               options.addEventListener("click", () => {
                        if(options.innerText.trim() != this.que[this.currentQuestion].answer.trim() ) {
                            // to insert icons to the options after they have been clicked
                            options.insertAdjacentHTML("beforeend", crossIcon);
                            console.log('The answer is wrong');
                            
                        } else {
                            options.insertAdjacentHTML("beforeend", tickIcon)
                            console.log('The answer is correct')
                            this.setScore();

                        }
                                             
                        
                    });            

            })            

             //adding the question to the question text
            div.appendChild(question);

        // this adds the questions to question text
            output.appendChild(div);

    } 

    setScore() {
        const score = document.querySelector('.score');          
        console.log(this.userScore);
        score.innerText = this.userScore;
        this.userScore++;
    }

    setTimer(time) {        
        const timerText = document.querySelector(".timer-text");
        const timerSec = document.querySelector(".timer-sec");
        const resultBox = document.querySelector(".result-box");
        const quizBox = document.querySelector(".quiz-box");        
        const nextBtn = document.querySelector(".next");
        
        let counter;
        counter = setInterval(timer, 1000);
        
        function timer() {
            timerSec.textContent = time;
            time--;
            
            if (time < 10) {
                timerSec.style.color = 'red'

            }
            if(time == -1 ) {
                clearInterval(counter);
                timerSec.textContent = "00";
                timerSec.style.color = 'red'
                timerText.textContent = "Your Time Is Up!"
                timerText.style.color = 'red';
                quizBox.classList.add('d-none')
                resultBox.classList.remove('d-none');
                nextBtn.classList.add('d-none');
            }
            this.timeValue = 40;
        }
    }

    setNumOfQue() {
        const currQue = document.querySelector(".curr-que-num");
        const totalQue = document.querySelector(".total-que-num");
        // to space the texts
        totalQue.className = "pl-2"

        currQue.innerHTML = `${this.que[this.currentQuestion].num} of `;
        totalQue.innerHTML =` ${this.que.length} questions`;
    }


    scoreMsg() {
        this.setScore();
        const scoreText = document.querySelector('.score-text');
        if(this.userScore <= 5) {
            console.log(this.userScore);
            scoreText.textContent = `Your score is ${this.userScore}. Try again!`
        } else if(this.userScore > 5 && this.userScore <= 10) {
            scoreText.textContent = 'You can do better!'
        } else if (this.userScore > 10 && this.userScore <= 15) {
            scoreText.textContent = 'Well done Champ! Nice try.'
        } else {
            scoreText.textContent = 'You are an African genius. Well done Champ!!!'
        }        
       
    }


}

// CREATING A GAME VARIABLE 
let game = new gameStart();

// INITIALIZING GAME
game.init();


// send email using EmailJS
function sendEmail(e) {
    let name = document.getElementById('userEmail').value;
    let email = document.getElementById("userNameInput").value;
    let msg = document.getElementById("messageArea").value;

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
      let tempParams = {
          to_name: name,
          from_name: email,
          message: msg,

      };
    
      emailjs.send('service_2by9n4z', 'template_km9pay6', tempParams )
      .then(function(res) {
          console.log('success', res.status)
          alert('Thank you for your message. You will receive a response shortly.')
        })
    })
  }

