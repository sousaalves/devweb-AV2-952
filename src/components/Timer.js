import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import './Timer.css';

import { RankingContext } from "../contexts/ranking";


const Timer = () => {
    const navigate = useNavigate();

    // const {final, setFinal } = useState(false)
    let final = false
    const { ranking, setRanking } = useContext(RankingContext);

    function startTimer(i, duration, display) {
        var timer = duration, minutes, seconds;
        console.log(final);
        if(!final || i === 1){
            setInterval(function () {
                minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
            
                //Acabou o tempo!
                if (--timer < 0) {
                    // timer = duration;
                    console.log(final);
                    if(!final){
                        window.alert("Tempo esgotado!")
                        let text;
                        let nome = prompt("Nome: ");
                        let acertos = prompt("Acertos: ")
                        if (nome === null || nome === "") {
                            text = "Ação cancelada!";
                        } else {
                        text = "Hello " + nome + "!Seus pontos" + acertos;
                        let novoArray = ranking;

                        let item = 
                                {
                                    id: novoArray[novoArray.length - 1].id + 1,
                                    jogador: nome,
                                    pontos: acertos,
                                }
                            
                        novoArray.push(item)
                            setRanking(novoArray);
                            navigate("/dashboard")
                            final = true;
                        }
                    }
                }
            }, 1000);
        }
    }
    if(!final){
        restart(0);
    }

    function restart(i){
        if(i === 1){
            final = false
            var fiveMinutes = 10,
            display = document.querySelector('#time');
            startTimer(i, fiveMinutes, display);
        }
        console.log(final)
        window.onload = function () {
            var fiveMinutes = 10,
            display = document.querySelector('#time');
            startTimer(i, fiveMinutes, display);
        };
    }

    return (
        <>
            <div id="time">00:30</div>
            <div id="restart" onClick={() => {restart(1)}}> Reiniciar </div>
        </>
    );
}

export default Timer
