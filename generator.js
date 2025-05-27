//array of 1 line jokes
const randomJoke = () =>{
    const jokes = ['My wife told me to stop impersonating a flamingo. I had to put my foot down.',
        "I went to buy some camo pants but couldn't find any.",
        " I failed math so many times at school, I can't even count",
        "I used to have a handle on life, but then it broke.",
        "I was wondering why the frisbee kept getting bigger and bigger, but then it hit me.",
        "I heard there were a bunch of break-ins over at the car park. That is wrong on so many levels.",
        "I want to die peacefully in my sleep like my grandfather, not screaming and yelling like the passengers in his car.",
        "When life gives you melons, you might be dyslexic.", "Don't you hate it when someone answers their own questions? I do.",
        " I told him to be himself; that was pretty mean, I guess."];
    return jokes[Math.floor(Math.random() * jokes.length)];
 
};


//random number generator for the age section
const randomAge = () => Math.floor(Math.random() * 100) + 1;


//boolean answer
const truth = () => Math.random() >= 0.5;



console.log(`this fortune is ${truth()} and will be told to you at age: ${randomAge()}. fortune: ${randomJoke()}`);