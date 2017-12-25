function Quiz(questions) {
	this.score=0;
	this.questions=questions;
	this.questionIndex=0;
}

Quiz.prototype.isEnded= function() {
	return this.questions.length === this.questionIndex;
}

Quiz.prototype.getQuestionIndex = function() {
	return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer){
   if(this.getQuestionIndex().check_answer(answer)){
    	this.score++;
   }
   this.questionIndex++;
}
Quiz.prototype.getCurrentIndex = function(){
	return this.questionIndex;
}