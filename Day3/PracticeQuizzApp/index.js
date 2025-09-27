let questions = [
    {
        question:"1. Which language runs on browser?",
        options:["1. C" , "2. C++" , "3. Java" , "4. JavaScript"],
        correct:4
    },
    {
        question:"2. Mother of Programming Language?",
        options:["1. C" , "2. C++" , "3. Java" , "4. JavaScript"],
        correct:1
    },
    {
        question:"3. Founder of C Language?",
        options:["1. Dennis Ritchi" , "2. Bjarne Stroustroup" , "3. Grahm Bell" , "4. James Gosling"],
        correct:1
    },
    {
        question:"4. Founder of C++ Language?",
        options:["1. Dennis Ritchi" , "2. Bjarne Stroustroup" , "3. Grahm Bell" , "4. James Gosling"],
        correct:2
    },
    {
        question:"5. Founder of Java?",
        options:["1. Dennis Ritchi" , "2. Bjarne Stroustroup" , "3. Grahm Bell" , "4. James Gosling"],
        correct:4
    },
    {
        question:"6. First name of JavaScript?",
        options:["1. Mocha" , "2. Live Script" , "3. ES1" , "4. EcmaScript"],
        correct:1
    },
    {
        question:"7. for AI/ML which language is used widely?",
        options:["1. C" , "2. C++" , "3. Java" , "4. Python"],
        correct:4
    },
    {
        question:"8. Name of the JS Engine of Chrome browser?",
        options:["1. Spider Monkey" , "2. V8" , "3. Transpiler" , "4. Compiler"],
        correct:2
    },
    {
        question:"9. Name of the JS Engine of Mozilla FireFox browser?",
        options:["1. Spider Monkey" , "2. V8" , "3. Transpiler" , "4. Compiler"],
        correct:1
    },
    {
        question:"10. Founder of Node JS?",
        options:["1. Dennis Ritchi" , "2. Bjarne Stroustroup" , "3. Ryan Dahl" , "4. James Gosling"],
        correct:4
    }

];

let score = 0;
for(let question of questions){
    
    let input = prompt(
        question.question +"\n" + question.options.join("\n")
    );
    if(Number(input ) === question.correct){
        score++;
    }
}

alert("Your Final Score is "+score);