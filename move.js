const squares = document.querySelectorAll('.square');
let click = 0;
let result = document.querySelector('.result');
let resbox = document.querySelector('.res');
let restart = document.querySelector('.restart');
let phrase =document.querySelector('.phrase');
let winner;
var win;
var nbr_squares_clicked=0;
var x = document.getElementById("myAudio"); 
var click_sound = document.getElementById("click"); 
var w=document.getElementById("win_sound"); 
var l=document.getElementById("lose_sound"); 
var player1="";
var player2="";
var go =document.querySelector('.go');
var p1=document.querySelector('.p1');
var p2=document.querySelector('.p2');
var player_box=document.querySelector('.player_box');
var box= document.querySelector('.box');
var score_player1=0;
var score_player2=0;
var score1=document.querySelector('.score_palyer1');
var score2=document.querySelector('.score_palyer2');
var players={
    p1:player1,
    p2:player2
}
// ! players
go.addEventListener('click',(e)=>{
    player1=document.querySelector('.player1').value;
    player2=document.querySelector('.player2').value;
    localStorage.setItem("one",player1);
    localStorage.setItem("two",player2);
    console.log(player1+ ''+player2)
    if(player2 == "" ||player1 == "")
    { 
       alert("write players name ");
    }
    else{ 
        p1.innerHTML='<span class="text-warning"> Player1 : &#129501;</span>'+localStorage.getItem('one');
        p2.innerHTML='<span class="text-warning">  Player2 : &#129499;</span>'+localStorage.getItem('two');
        console.log(p1+p2)
        player_box.classList.add('d-none');   
        box.classList.remove('d-none'); 
    }
})
console.log(players)
// !data 
var data = { 0: "f", 1: "g", 2: "r", 3: "p", 4: "q", 5: "w", 6: "c", 7: "v", 8: "n" }
function clearBox() {
    click = 0;
    win=true;
    nbr_squares_clicked=0;
    data = { 0: "f", 1: "g", 2: "r", 3: "p", 4: "q", 5: "w", 6: "c", 7: "v", 8: "n" }
    for (let j = 0; j < squares.length; j++) {
        squares[j].classList.remove('bg-warning');
        squares[j].classList.remove('bg-info');
        squares[j].value = "";
    }
}
function playAudio() { 
    x.play(); 
  } 
  function click_s() { 
    click_sound.play(); 
  } 

  function pauseAudio() { 
    x.pause(); 
  }  


  function win_sound() { 
    w.play(); 
  } 
  function lose_sound() { 
    l.play(); 
  } 
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', (e) => {
        click++;
        click_s();
        if (click % 2 == 0) {
            if (squares[i].value == "X") {
                squares[i].classList.add("bg-warning");
                squares[i].value = "X";
                data[i] = "X";
            } else {
                squares[i].classList.add("bg-info");
                squares[i].value = "O";
                data[i] = "O";
            }
        }
        else if (click % 2 != 0) {
            if (squares[i].value == "O") {
                squares[i].classList.add("bg-info");
                squares[i].value = "O";
                data[i] = "O";
            } else {
                squares[i].classList.add("bg-warning");
                squares[i].value = "X";
                data[i] = "X";
            }
        }

        //!    condition for the X O
        if (data[0] === data[1] && data[1] === data[2] || data[3] === data[4] && data[3] === data[5] || data[6] === data[7] && data[7] === data[8] || data[0] === data[3] && data[3] === data[6] || data[1] === data[4] && data[4] === data[7] || data[2] === data[5] && data[5] === data[8] || data[0] === data[4] && data[4] === data[8] || data[2] === data[4] && data[4] === data[6]) {
           win=true;
            if (click % 2 != 0) {
                winner = player1;
                score_player1++;
                console.log('player 1'+ score_player1);
                score1.innerHTML='<span>&#128176;</span>'+score_player1;
            }
            else {
                winner = player2;
                score_player2++;
                console.log('player 2'+ score_player2);
                score2.innerHTML= '<span>&#128176;</span>'+score_player2 ;

            }
            resbox.classList.add("d-block");
            resbox.classList.remove("d-none");
            phrase.innerHTML=" <span style='font-size:100px;'>&#127881;</span> BRAVO <span style='font-size:50px;'>&#128079; &#128079;</span>";
            result.innerText = '"' + winner + '" ' + 'you win  ';
            win_sound();
        } 
      

         if(squares[i].classList.contains('bg-info') || squares[i].classList.contains('bg-warning') )
         {
            nbr_squares_clicked ++;
            console.log( nbr_squares_clicked)
         }
         if(nbr_squares_clicked==9)
         {
            win=false;
         }
         if(win===false)
         {
            resbox.classList.add("d-block");
            resbox.classList.remove("d-none");
            phrase.innerHTML=" <span style='font-size:100px;'>&#128530;</span>no  one wiin ";
            result.innerText =  'match over !';
            lose_sound();
         }
    })
    restart.addEventListener('click', (e) => {
        resbox.classList.add("d-none");
        resbox.classList.remove("d-block");
        clearBox();
    })
}