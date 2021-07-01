/**

  Let's peer into the future using a Magic 8 Ball!
  https://en.wikipedia.org/wiki/Magic_8-Ball 

  There are a few steps to being able view the future though:
  * Ask a question
  * Shake the ball
  * Get an answer
  * Decide if it's positive or negative

  The question can be anything, but the answers are fixed,
  and have different levels of positivity or negativity.

  Below are the possible answers:

  ## Very positive
    It is certain.
    It is decidedly so.
    Without a doubt.
    Yes - definitely.
    You may rely on it.

  ## Positive
    As I see it, yes.
    Most likely.
    Outlook good.
    Yes.
    Signs point to yes.

  ## Negative
    Reply hazy, try again.
    Ask again later.
    Better not tell you now.
    Cannot predict now.
    Concentrate and ask again.

  ## Very negative
    Don't count on it.
    My reply is no.
    My sources say no.
    Outlook not so good.
    Very doubtful.
*/
// This should log "The ball has shaken!"
// and return the answer.
// let veryPositive= ["It is certain.",
//  " It is decidedly so.",
//  " Without a doubt.",
//  " Yes - definitely.",
//  " You may rely on it."];
//  let positive= ["As I see it, yes.",
//  "   Signs point to yes.",
//  "  Most likely.",
//  " Outlook good.",
//  "    Yes."];
//  let negative = [" Reply hazy, try again.",
//  " Ask again later.",
//  " Better not tell you now.",
//  "Cannot predict now."
// ,"Concentrate and ask again."];
// let veryNegative = ["Don't count on it.", 
// " Don't count on it.",
// "My sources say no.",
// "Outlook not so good.",
// "Very doubtful."];
function shakeBall() {
  //Write your code in here
  // let randomArray= Math.floor(Math.random() * (6)) + 1;
  // if (randomArray==1){//VeryPositive Array
  //   let RandomArrayString =veryPositive[Math.floor(Math.random() * (veryPositive.length - veryPositive[0] + 1)) + veryPositive[0]];
  // }else if (randomArray==2){//positive Array
  //   let RandomArrayString =positive[Math.floor(Math.random() * (positive.length - positive[0] + 1)) + positive[0]];
  // }else if (randomArray==3){//negative Array
  //   let RandomArrayString =negative[Math.floor(Math.random() * (negative.length - veryPositive[0] + 1)) + negative[0]];
  // }else if (randomArray==3){//veryNegative Array
  //   let RandomArrayString =veryNegative[Math.floor(Math.random() * (veryNegative.length - veryNegative[0] + 1)) + veryNegative[0]];
  // }
  // console.log(RandomArrayString);
}

/* 
  This function should say whether the answer it is given is
    - very positive
    - positive
    - negative
    - very negative

  This function should expect to be called with any value which was returned by the shakeBall function.
*/
function checkAnswer(answer) {
  //Write your code in here
}

/* 
==================================
======= TESTS - DO NOT MODIFY =====

There are some Tests in this file that will help you work out if your code is working.

To run these tests type `npm run extraTo run the tests for just this one file, type `npm run extra-tests -- --testPathPattern 3-magic-8-ball` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
==================================
*/

test("whole magic 8 ball sequence", () => {
  const consoleLogSpy = jest.spyOn(global.console, "log");
  const answer = shakeBall();

  expect(typeof answer).toEqual("string");

  expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  expect(consoleLogSpy).toHaveBeenLastCalledWith("The ball has shaken!");

  expect(checkAnswer(answer)).toBeOneOf([
    "very positive",
    "positive",
    "negative",
    "very negative",
  ]);
});

test("magic 8 ball returns different values each time", () => {
  const seenAnswers = new Set();
  for (let i = 0; i < 10; ++i) {
    seenAnswers.add(shakeBall());
  }
  if (seenAnswers.size < 2) {
    throw Error(
      "Expected to get different random answers each time shakeBall was called, but always got the same one"
    );
  }

  let seenPositivities = new Set(Array.from(seenAnswers.values()).map(checkAnswer));
  if (seenPositivities.size < 2) {
    throw Error(
      "Expected to random answers with different positivities each time shakeBall was called, but always got the same one"
    );
  }
});

test("checkAnswer works for `It is decidedly so.`", () => {
  expect(checkAnswer("It is decidedly so.")).toEqual("very positive");
});

test("checkAnswer works for `My reply is no.`", () => {
  expect(checkAnswer("My reply is no.")).toEqual("very negative");
});
