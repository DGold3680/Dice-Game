'use strict'
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const pScore1 = document.querySelector("#pscore1");
const pScore2 = document.querySelector("#pscore2");
const pScore3 = document.querySelector("#pscore3");
const gameOver=[false]
const currentTurn=[1]

class Player {
    constructor(btn,pScore,myTurn,nextTurn) {
        this.btn = btn
        this.pScore=pScore
        this.myTurn=myTurn
        this.nextTurn=nextTurn
        this.gameOver=gameOver
        this.currentTurn=currentTurn
        this.point=1
        this.totalPoint=0
        this.img= document.querySelector("img")
        this.quit = document.querySelector("#quit")
        this.info = document.querySelector("h2");
    }
    randNum(){
       this.point= Math.floor(Math.random()*6+1)
       return this
    }
    setDiceImg(){
        this.img.setAttribute('src',`dice-${this.point}.png`)
        return this
    }
    updateScore(){
       this.totalPoint += this.point
       return this
    }
    setTotalScore(){
        this.pScore.innerText=`Score:${this.totalPoint}`
        return this
    }
    get checkWinningPoint(){
     return this.totalPoint>=60? true : false
    }
    winnerMsg(){
            if(this.checkWinningPoint){
            this.info.innerText=`Player${this.myTurn} Won!!!`}
        return this
    }
    setNextTurn(){
        this.currentTurn[0]=this.nextTurn
        return this
}
    rollDice=()=>{
        if(!this.gameOver[0]){
            if(this.currentTurn[0]===this.myTurn? true : false){
        this.randNum()
        .setDiceImg()
        .updateScore()
        .setTotalScore()
        .winnerMsg()
        .setNextTurn();}
        this.gameOver[0]=this.checkWinningPoint
        return this
        }else{
            //do nothing
        }
    }
    play(){
    this.btn.addEventListener('click',this.rollDice)
    return this
    }
reset=()=>{
    this.gameOver[0]=false
    this.currentTurn[0]=1
    this.point=1
    this.totalPoint=0
    this.setTotalScore()
    this.setDiceImg()
}
static startOver(...players){
quit.addEventListener('click',()=>{
    players.forEach( player => {player.reset()     
    });
})
}
}

const player1=new Player(btn1,pScore1,1,2)
const player2=new Player(btn2,pScore2,2,1)

player1.play()
player2.play()
Player.startOver(player1,player2)






