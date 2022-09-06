var elementos = document.querySelectorAll('.player-options div > img')
        var playerOpt = ""
        var enemyOpt = ""

        var btn = document.querySelector(".playAgain")
            btn.addEventListener("click", ()=>{
                location.reload();
            })
 

        function validarVitoria() {

            let vencedor = document.querySelector('.vencedor');

            if (playerOpt == "paper") {

                if (enemyOpt == "paper") {
                    //Empate
                    vencedor.innerHTML = "Empate!"
                } else if (enemyOpt == "scissor") {
                    //Inimigo ganhou
                    vencedor.innerHTML = "O inimigo ganhou!"
                } else if (enemyOpt == "rock") {
                    //Player ganhou
                    vencedor.innerHTML = "Você ganhou!"
                }

            }

            if (playerOpt == "scissor") {

                if (enemyOpt == "paper") {
                    //Player ganhou
                    vencedor.innerHTML = "Você ganhou!"
                } else if (enemyOpt == "scissor") {
                    //Empate
                    vencedor.innerHTML = "Empate!"
                } else if (enemyOpt == "rock") {
                    //Inimigo ganhou
                    vencedor.innerHTML = "O inimigo ganhou!"
                }

            }

            if (playerOpt == "rock") {

                if (enemyOpt == "paper") {
                    //Inimigo ganhou
                    vencedor.innerHTML = "O inimigo ganhou!"
                } else if (enemyOpt == "scissor") {
                    //Player ganhou
                    vencedor.innerHTML = "Você ganhou!"
                } else if (enemyOpt == "rock") {
                    //Empate
                    vencedor.innerHTML = "Empate!"
                }

            }
        }

        function resetEnemy() {
            const enemyOptions = document.querySelectorAll('.enemy-options div')
            for (var i = 0; i < enemyOptions.length; i++) {

                enemyOptions[i].childNotes[0].style.opacity = 0.3;
            }
        }

        function enemyTurn() {
            let rand = Math.floor(Math.random() * 3);
            const enemyOptions = document.querySelectorAll('.enemy-options div')

            for (var i = 0; i < enemyOptions.length; i++) {
                if (i == rand) {
                    enemyOptions[i].childNodes[0].style.opacity = 1;
                    enemyOpt = enemyOptions[i].childNodes[0].getAttribute('opt')
                }
            }

            validarVitoria();
            //alert(playerOpt);
            //alert(enemyOpt);
        }

        function resetOpacityPlayer() {
            for (var i = 0; i < elementos.length; i++) {
                elementos[i].style.opacity = 0.3;
            }
        }

        for (var i = 0; i < elementos.length; i++) {
            elementos[i].addEventListener('click', (t) => {
                resetOpacityPlayer()
                t.target.style.opacity = 1;
                playerOpt = t.target.getAttribute('opt')

                enemyTurn();
                //alert(playerOpt)
            })
        }