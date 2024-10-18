function computerMove(){
    const randomNumber=Math.random();
    let computer='';
    if(randomNumber>0 && randomNumber<1/3){
        computer='rock';
    }else if (randomNumber>1/3 && randomNumber<2/3){
        computer='paper';
    }else if(randomNumber>2/3 && randomNumber<1){
        computer='scissor';
    }
    return computer;

}

let score=JSON.parse(localStorage.getItem('score'))||{
        wins:0,
        losses: 0,
        ties: 0
    };

function playGame(move){
   
    let result='';
    let computer= computerMove();
    
    if(move==='rock'){
        if(computer==='rock'){
            result='tie';

        }else if(computer==='paper'){
            result='loose';
        }else if(computer==='scissor'){
            result='win';
        }
    }else if(move==='paper'){
        if(computer==='rock'){
            result='win';

        }else if(computer==='paper'){
            result='tie';
        }else if(computer==='scissor'){
            result='loose';
        }
    }else if(move==='scissor'){
        if(computer==='rock'){
            result='loose';

        }else if(computer==='paper'){
            result='win';
        }else if(computer==='scissor'){
            result='tie';
        }
    }
    if(result==='win'){
        score.wins+=1;
    }else if(result==='loose'){
        score.losses+=1;
    }else if(result==='tie'){
        score.ties+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));
    // ---------------------------------------------------------------------------------
    document.querySelector('.move-js').
     innerHTML=`You Choose:<img src="images/${move}-emoji.png" alt="" class="move"> ----- Computer Choose: <img src="images/${computer}-emoji.png" alt="" class="move">`;
    // ---------------------------------------------------------------------------------
    document.querySelector('.result-js').
    innerHTML= `You: ${result}`;
    //----------------------------------------------------------------------------------
    document.querySelector('.score-js').
    innerHTML= `Wins: ${score.wins}, Losses: ${score.losses} , Ties: ${score.ties}`;
}