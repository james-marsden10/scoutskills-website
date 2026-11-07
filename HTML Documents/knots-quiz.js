

document.getElementById("submitButton").onclick = function() {
    let score = 0;
    let op1 = document.getElementById("option1-1");
    let op2 = document.getElementById("option2-1");
    let op3 = document.getElementById("option3-1");
    let op4 = document.getElementById("option4-1");
    let check1;
    if (op1.checked) {
        check1 = `Correct`;
        score++;
    }
    else {
        check1 = `Incorrect`;
    }
    console.log(check1, score);


    op1 = document.getElementById("option1-2");
    op2 = document.getElementById("option2-2");
    op3 = document.getElementById("option3-2");
    op4 = document.getElementById("option4-2");
    let check2;
    if (op3.checked) {
        check2 = `Correct`;
        score++;
    }
    else {
        check2 = `Incorrect`;
    }
    console.log(check2, score);

    op1 = document.getElementById("option1-3");
    op2 = document.getElementById("option2-3");
    op3 = document.getElementById("option3-3");
    op4 = document.getElementById("option4-3");
    let check3;
    if (op1.checked) {
        check3 = `Correct`;
        score++;
    }
    else {
        check3 = `Incorrect`;
    }
    console.log(check3, score);

    op1 = document.getElementById("option1-4");
    op2 = document.getElementById("option2-4");
    op3 = document.getElementById("option3-4");
    op4 = document.getElementById("option4-4");
    let check4;
    if (op4.checked) {
        check4 = `Correct`;
        score++;
    }
    else {
        check4 = `Incorrect`;
    }
    console.log(check4, score);

    op1 = document.getElementById("option1-5");
    op2 = document.getElementById("option2-5");
    op3 = document.getElementById("option3-5");
    op4 = document.getElementById("option4-5");
    let check5;
    if (op2.checked) {
        check5 = `Correct`;
        score++;
    }
    else {
        check5 = `Incorrect`;
    }
    console.log(check5, score);

    op1 = document.getElementById("option1-6");
    op2 = document.getElementById("option2-6");
    op3 = document.getElementById("option3-6");
    op4 = document.getElementById("option4-6");
    let op5 =  document.getElementById("option5-6");
    let check6;
    if (op2.checked && op4.checked && op5.checked && !(op1.checked) && !(op3.checked)) {
        check6 = `Correct`;
        score = score + 3;
    }
    else {
        check6 = `Incorrect`;
    }
    console.log(check6, score);

    op1 = document.getElementById("option1-7");
    op2 = document.getElementById("option2-7");
    op3 = document.getElementById("option3-7");
    op4 = document.getElementById("option4-7");
    let check7;
    if (op1.checked) {
        check7 = `Correct`;
        score++;
    }
    else {
        check7 = `Incorrect`;
    }
    console.log(check7, score);

    op1 = document.getElementById("option1-8");
    op2 = document.getElementById("option2-8");
    op3 = document.getElementById("option3-8");
    op4 = document.getElementById("option4-8");
    let check8;
    if (op4.checked) {
        check8 = `Correct`;
        score++;
    }
    else {
        check8 = `Incorrect`;
    }
    console.log(check8, score);
    
    op1 = document.getElementById("option1-9");
    op2 = document.getElementById("option2-9");
    op3 = document.getElementById("option3-9");
    op4 = document.getElementById("option4-9");
    let check9;
    if (op3.checked) {
        check9 = `Correct`;
        score++;
    }
    else {
        check9 = `Incorrect`;
    }
    console.log(check9, score);

    op1 = document.getElementById("option1-10");
    op2 = document.getElementById("option2-10");
    op3 = document.getElementById("option3-10");
    op4 = document.getElementById("option4-10");
    let check10;
    if (op2.checked) {
        check10 = `Correct`;
        score++;
    }
    else {
        check10 = `Incorrect`;
    }
    console.log(check10, score);
    
    document.getElementById(`score`).textContent = `You scored ${score}/12`;
    document.getElementById(`score`).style.display = "block";

    document.getElementById(`questions`).innerHTML = `Question 1: ${check1} <br> Question 2: ${check2} <br> Question 3: ${check3} <br> Question 4: ${check4} <br> Question 5: ${check5} <br> Question 6: ${check6} <br> Question 7: ${check7} <br> Question 8: ${check8} <br> Question 9: ${check9} <br> Question 10: ${check10}`;
    document.getElementById(`questions`).style.display = "block";
}


    