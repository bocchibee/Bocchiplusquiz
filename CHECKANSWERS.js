function checkAnswers () {
    let score = 0
    let result = 0

    let quiz = document.forms.quiz.elements;
    //answer1
    let answer1 = quiz.ksmember.value;

    if (answer1 == 'Bocchi') {
        score = score + 1
    }
    else if (answer1 == 'Nijika Ijichi') {
        score = score + 2
    }
    else if (answer1 == 'Ryo Yamada'){
        score = score + 3
    }
    else {
        score = score + 4 
    }

    //answer2
    let answer2 = quiz.Guitar.value;

    if (answer2 == 'Les Paul') {
        score = score + 1
    }
    else if (answer2 == 'Yamaha') {
        score = score + 2
    }
    else if (answer2 == 'Gibson'){
        score = score + 3
    }
    else {
        score = score + 4 
    }
    //answer3
    let answer3 = quiz.personality.value; 

    if (answer3 == 'Introvert') {
        score = score + 1
    }
    else if (answer3 == 'Extrovert') {
        score = score + 2
    }
    else if (answer3 == 'Ambivert'){
        score = score + 3
    }
    else {
        score = score + 4 
    }
    //answer4
    let answer4 = quiz.qcharact.value;

    if (answer4 == 'Bocchi') {
        score = score + 1
    }
    else if (answer4 == 'Kikuri Hiroi') {
        score = score + 2
    }
    else if (answer4 == 'Seika Ijichi'){
        score = score + 3
    }
    else {
        score = score + 4 
    }

    //-- RESULTS --

    if (score < 8) {
        result = 'Ryo Yamada'
    }
    else if (score < 10){
        result = 'Bocchi'
    }
    else if (score < 13) {
        result = 'Nijika Ijichi'
    }
    else {
        result = 'JimiHen'
    }
    //msg
    alert('You are '+ result);
}