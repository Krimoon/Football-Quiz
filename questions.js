let questions = {
  "questions": [
    {
      "question": "Who won the 2018 FIFA World Cup?",
      "answer": "France",
      "answer2": "Germany",
      "answer3": "Croatia",
      "level": 1
    },
    {
      "question": "Which country hosted the 1998 FIFA World Cup?",
      "answer": "France",
      "answer2": "Italy",
      "answer3": "Brazil",
      "level": 2
    },
    {
      "question": "Who is known as 'The Egyptian King' in football?",
      "answer": "Mohamed Salah",
      "answer2": "Ahmed Hossam",
      "answer3": "Trezeguet",
      "level": 1
    },
    {
      "question": "Which player is known as 'CR7'?",
      "answer": "Cristiano Ronaldo",
      "answer2": "Lionel Messi",
      "answer3": "Neymar",
      "level": 1
    },
    {
      "question": "Which club did Lionel Messi play for before joining Paris Saint-Germain?",
      "answer": "Barcelona",
      "answer2": "Real Madrid",
      "answer3": "Boca Juniors",
      "level": 1
    },
    {
      "question": "Which team won the 2020 UEFA Champions League?",
      "answer": "Bayern Munich",
      "answer2": "PSG",
      "answer3": "Chelsea",
      "level": 2
    },
    {
      "question": "Which country has won the most World Cup titles?",
      "answer": "Brazil",
      "answer2": "Germany",
      "answer3": "Italy",
      "level": 2
    },
    {
      "question": "Who is the all-time top scorer in the Premier League?",
      "answer": "Harry Kane",
      "answer2": "Alan Shearer",
      "answer3": "Wayne Rooney",
      "level": 3
    },
    {
      "question": "Which player is known as 'The Pharaoh'?",
      "answer": "Mohamed Salah",
      "answer2": "Essam El Hadary",
      "answer3": "Amr Zaki",
      "level": 2
    },
    {
      "question": "Who is the manager of Manchester City as of 2024?",
      "answer": "Pep Guardiola",
      "answer2": "Jurgen Klopp",
      "answer3": "Thomas Tuchel",
      "level": 1
    },
    {
      "question": "Which country won the 2014 FIFA World Cup?",
      "answer": "Germany",
      "answer2": "Argentina",
      "answer3": "Brazil",
      "level": 1
    },
    {
      "question": "Who holds the record for the most goals in World Cup history?",
      "answer": "Marta",
      "answer2": "Miroslav Klose",
      "answer3": "Pele",
      "level": 4
    },
    {
      "question": "Which country won the UEFA Euro 2020?",
      "answer": "Italy",
      "answer2": "England",
      "answer3": "Portugal",
      "level": 2
    },
    {
      "question": "Who won the Ballon d'Or in 2023?",
      "answer": "Lionel Messi",
      "answer2": "Erling Haaland",
      "answer3": "Kylian Mbappe",
      "level": 2
    },
    {
      "question": "Which team won the Premier League in the 2022/2023 season?",
      "answer": "Manchester City",
      "answer2": "Arsenal",
      "answer3": "Liverpool",
      "level": 1
    },
    {
      "question": "Who was the first footballer to win five Ballon d'Or awards?",
      "answer": "Cristiano Ronaldo",
      "answer2": "Lionel Messi",
      "answer3": "Johan Cruyff",
      "level": 3
    },
    {
      "question": "Who won the 2022 FIFA World Cup?",
      "answer": "Argentina",
      "answer2": "France",
      "answer3": "Brazil",
      "level": 1
    },
    {
      "question": "Which club has the most UEFA Champions League titles?",
      "answer": "Real Madrid",
      "answer2": "Barcelona",
      "answer3": "AC Milan",
      "level": 2
    },
    {
      "question": "Which country hosted the 2014 FIFA World Cup?",
      "answer": "Brazil",
      "answer2": "South Africa",
      "answer3": "Germany",
      "level": 2
    },
    {
      "question": "Which footballer is known as 'The Special One'?",
      "answer": "Jose Mourinho",
      "answer2": "Pep Guardiola",
      "answer3": "Diego Simeone",
      "level": 2
    },
    {
      "question": "Which country won the 2010 FIFA World Cup?",
      "answer": "Spain",
      "answer2": "Netherlands",
      "answer3": "Germany",
      "level": 1
    },
    {
      "question": "Who is the all-time top scorer in La Liga?",
      "answer": "Lionel Messi",
      "answer2": "Cristiano Ronaldo",
      "answer3": "Raul",
      "level": 3
    },
    {
      "question": "Which team won the 2022 FIFA World Cup final?",
      "answer": "Argentina",
      "answer2": "France",
      "answer3": "Germany",
      "level": 1
    },
    {
      "question": "Which country has the most Copa America titles?",
      "answer": "Uruguay",
      "answer2": "Argentina",
      "answer3": "Brazil",
      "level": 4
    },
    {
      "question": "Who is the all-time top scorer for Manchester United?",
      "answer": "Wayne Rooney",
      "answer2": "Ryan Giggs",
      "answer3": "Paul Scholes",
      "level": 3
    },
    {
      "question": "Who won the 2012 UEFA Champions League?",
      "answer": "Chelsea",
      "answer2": "Bayern Munich",
      "answer3": "Real Madrid",
      "level": 3
    }
  ]
}



//Level 1 (Very Easy): Basic knowledge questions that are widely known.
//Level 2 (Easy): Slightly more specific but still common knowledge among football fans.
//Level 3 (Medium): Requires a good understanding of football history and events.
//Level 4 (Hard): Demands in-depth knowledge of football statistics or less recent events.
//Level 5 (Very Hard): Specialized knowledge that is less commonly known.

const levels = ['Level 1', 'Level 2', 'Level 3', 'Level 4',  'Level 5'];


for(let level of levels){
	
	console.log(level);
	
}


const total_questions = questions.questions.length;// Initialize Total Question


let current_question = 1; // Initialize current question
let current_level = 1; // Initialize current level


const Q_progress = document.getElementById('questions_progress'); // Get the progress element
Q_progress.innerHTML = `Question ${current_question} (Level ${current_level})`;

let random = Math.floor(Math.random() * 10);

let question = document.getElementById('question');
question.innerHTML = questions.questions[random].question;

//Answers
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');
answer3.value = questions.questions[random].answer3;
answer2.value = questions.questions[random].answer2;
answer1.value = questions.questions[random].answer;
answer1.setAttribute('onclick', 'submit_answer(9)');

//score
let correct = document.getElementById('correct');
let wrong = document.getElementById('wrong');
let correct_answers = 0;
let wrong_answers = 0;

let answered = Array();



function submit_answer(answer){
	
	
	//Generate new question
	random = Math.floor(Math.random() * 10);
	random_sort = Math.floor(Math.random() * 3) + 1;

	if(random_sort==1){
	answer3.value = questions.questions[random].answer3;
	answer2.value = questions.questions[random].answer2;
	answer1.value = questions.questions[random].answer;
	answer1.setAttribute('onclick', 'submit_answer(9)');
	answer2.setAttribute('onclick', 'submit_answer(1)');
	answer3.setAttribute('onclick', 'submit_answer(1)');
	}else if(random_sort==2){
	answer3.value = questions.questions[random].answer3;
	answer2.value = questions.questions[random].answer;
	answer1.value = questions.questions[random].answer2;
	answer2.setAttribute('onclick', 'submit_answer(9)');
	answer1.setAttribute('onclick', 'submit_answer(1)');
	answer3.setAttribute('onclick', 'submit_answer(1)');
	}else if(random_sort==3){
	answer3.value = questions.questions[random].answer;
	answer2.value = questions.questions[random].answer2;
	answer1.value = questions.questions[random].answer3;
	answer3.setAttribute('onclick', 'submit_answer(9)');
	answer1.setAttribute('onclick', 'submit_answer(1)');
	answer2.setAttribute('onclick', 'submit_answer(1)');
	}

	
	
	// Set the progress element's content
	current_question++;
	Q_progress.innerHTML = `Question ${current_question} (Level ${current_level})`;
	question.innerHTML = questions.questions[random].question;
	
	console.log('Answer: ' + answer);
	console.log('Random sort: ' + random_sort);
	
	if(answer == 9){
		correct_answers++
		correct.innerHTML = `Correct: ${correct_answers}`;
	}else{
		wrong_answers++;
		wrong.innerHTML = `Wrong: ${wrong_answers}`;;
	}
	
	
	

	
}

