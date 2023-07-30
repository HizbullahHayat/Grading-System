//*Create a grading system that takes subject marks as input from the user through prompts and returns the corresponding grades using functions and if-else conditions*

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

let turnoff =()=>{
    return new Promise((res)=>
    setTimeout(res, 2000));
}

async function welcome() {
    let rainbow=chalkAnimation.rainbow("WLCOME TO SUBJECT MARKS GRADING SYSTEM")
    await turnoff();
    rainbow.stop();
    console.log(`
    
██▄   ▄███▄      ▄   ▄███▄   █    ████▄ █ ▄▄  ▄███▄   ██▄       ███ ▀▄    ▄      ▄  █ ▄█  ▄▄▄▄▄▄   ███     ▄   █    █    ██    ▄  █ 
█  █  █▀   ▀      █  █▀   ▀  █    █   █ █   █ █▀   ▀  █  █      █  █  █  █      █   █ ██ ▀   ▄▄▀   █  █     █  █    █    █ █  █   █ 
█   █ ██▄▄   █     █ ██▄▄    █    █   █ █▀▀▀  ██▄▄    █   █     █ ▀ ▄  ▀█       ██▀▀█ ██  ▄▀▀   ▄▀ █ ▀ ▄ █   █ █    █    █▄▄█ ██▀▀█ 
█  █  █▄   ▄▀ █    █ █▄   ▄▀ ███▄ ▀████ █     █▄   ▄▀ █  █      █  ▄▀  █        █   █ ▐█  ▀▀▀▀▀▀   █  ▄▀ █   █ ███▄ ███▄ █  █ █   █ 
███▀  ▀███▀    █  █  ▀███▀       ▀       █    ▀███▀   ███▀      ███  ▄▀            █   ▐           ███   █▄ ▄█     ▀    ▀   █    █  
                █▐                        ▀                                       ▀                       ▀▀▀              █    ▀   
                ▐                                                                                                         ▀         

    `);
    // console.log(chalk.bgCyan.bold(`PRESS SPACE OR ARROW KEY TO START......`));
}
await welcome();

async function askQuestion() {
    let questions=await inquirer.prompt([
        {
            type:"input",
            name:"stnam",
            message:"Enter your full name: "
        },
        {
        type:"input",
        name:"snam",
        message:"Enter your subject name: "
    },
    {
        type:"number",
        name:"num",
        message:"Enter your subjects numbers: "
    },
    {
        type:"number",
        name:"Tnum",
        message:"Enter total subjects number: "
    }
])
let percentage= (questions.num / questions.Tnum) * 100;
console.log(chalk.greenBright(`The overall percentage of your subject ${questions.snam} is : ${percentage} percent`));

        if(percentage <= 100 && percentage >= 80){
            console.log(chalk.green.bold(`Congrats ${questions.stnam} you got A+ Grades`));
        }else if(percentage < 80 && percentage >= 70){
            console.log(chalk.green.bold(`Congrats ${questions.stnam} you got A Grades`))
        }else if(percentage < 70 && percentage >= 60){
            console.log(chalk.green.bold(`Congrats ${questions.stnam} you got B Grades`))
        }else if(percentage < 60 && percentage >= 45){
            console.log(chalk.redBright.bold(`Congrats ${questions.stnam} you got B-- Grades`))
        }else if(percentage < 45 && percentage >= 0){
            console.log(chalk.red.bold(`Sorry ${questions.stnam} You are fail in Exam, get back after full prepration...`))
        }else{
            console.log("Invalid Input...... Enter again");
        }
};
async function restart() {
    do{
        await askQuestion();
        var again=await inquirer.prompt({
            type:"input",
            name:"res-again",
            message:"Do you want to Continue evaluation?? YES (y) or NO (n) :"
        })
    }
    while(again["res-again"] == "YES" || again["res-again"] == "y" || again["res-again"] == "yes");
}

restart();
