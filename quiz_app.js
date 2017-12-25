function populate() {
	if(quiz.isEnded()) {
		showScores();
	}
	else{
			//show question. 
			var element=document.getElementById("question_tag");
		    element.innerHTML=quiz.getQuestionIndex().text;
		    //show Choices 
		for(var i=1;i<=quiz.getQuestionIndex().choices.length;i++){
			var choice= document.getElementById("optn_"+i);
			choice.innerHTML=quiz.getQuestionIndex().choices[(i-1)];
			guess("optn_"+i,quiz.getQuestionIndex().choices[i-1]);
		}

		progress();
	}
};

function guess(id,guess) {
	var selected_btn=document.getElementById(id);
	selected_btn.onclick =function() {
		quiz.guess(guess);
		populate();
	}
}
function progress() {
	var element1=document.getElementById("status");
	element1.innerHTML="Question "+(quiz.getCurrentIndex()+1)+"/"+this.questions.length;
};

function showScores() {
	var overHTML = "<h1> Result </h1> <br><br>"+"<h2 id='score'> Your Score is : " + quiz.score +"/"+quiz.questions.length+ "</h2><br>";
	var element= document.getElementById("quiz").innerHTML=overHTML;
}

var questions = [
    new Question("Which one is not an object oriented programming language?", ["Java", "C#","C++", "C"], "C"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("There are ____ main components of object oriented programming.", ["1", "6","2", "4"], "4"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework")
];

var quiz = new Quiz(questions);

populate();
