// named function 

const numeroUno = 21;
const numeroDos = 7;

function addYourNumbers (variableOne, variableTwo)
{
    return variableOne + variableTwo;
}

function subtractYourNumbers (variableOne, variableTwo)
{
    return variableOne - variableTwo;
}

function divideYourNumbers (variableOne, variableTwo)
{
    return variableOne / variableTwo;
}

function multiplyYourNumbers (variableOne, variableTwo)
{
    return variableOne * variableTwo;
}

addYourNumbers(numeroUno, numeroDos);
subtractYourNumbers(numeroUno, numeroDos);
divideYourNumbers(numeroUno, numeroDos);
multiplyYourNumbers(numeroUno, numeroDos);

// anonymous function

const throwbackThursday = document.querySelector("button");
throwbackThursday.onclick = function()
{
    alert("Remember that joke, around five years ago that went: 'What's nine plus ten?' And then someone answered, 'twenty-one!'");
}

const throwbackThursday2 = function() 
{
    alert("Remeber when the song, 'What Does the Fox Say?' was extremely popular? I do, and I was in fourth grade!");
}
// method ... all of these per minute

const rdsTraining = 
{
    howManyDribbles : 30,
    howManyPasses : 2,
    howManyTouches : 50,
    howManyJuggles : 40,
    howManyShotsAtGoal : 20
}
function retrieveAmountOfDribbles(howManyDribbles)
{
    return howManyDribbles;
}

function retrieveAmountOfPasses(howManyPasses)
{
    return howManyPasses;
}

function retrieveAmountOfTouches(howManyTouches)
{
    return howManyTouches;
}

function retrieveAmountOfJuggles(howManyJuggles)
{
    return howManyJuggles;
}

function retrieveAmountOfShotsAtGoal(howManyShotsAtGoal)
{
    return howManyShotsAtGoal;
}

retrieveAmountOfDribbles(rdsTraining);
retrieveAmountOfPasses(rdsTraining);
retrieveAmountOfTouches(rdsTraining);
retrieveAmountOfJuggles(rdsTraining);
retrieveAmountOfShotsAtGoal(rdsTraining);