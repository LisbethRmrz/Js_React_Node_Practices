function jugar (pc, player) {

    if(pc == player)
    {
       console.log("Empate")
    }

    else if(pc == 0 && player == 1){
        pc = "piedra";
        player = "papel"
        console.log(`La computadora eligió: ${pc} y el jugador eligió ${player}`);
        console.log("Gana el jugador");
}

    else if(pc == 1 && player == 0){
        pc = "papel";
        player = "piedra";
        console.log(`La computadora eligió: ${pc} y el jugador eligió ${player}`);
        console.log("Gana la computadora");
    }

    else if(pc == 1 && player == 2){
        pc = "papel";
        player = "tijera";
        console.log(`La computadora eligió: ${pc} y el jugador eligió ${player}`);
        console.log("Gana el jugador");
    }

    else if(pc == 2 && player == 1){
        pc = "tijera";
        player = "papel";
        console.log(`La computadora eligió: ${pc} y el jugador eligió ${player}`);
        console.log("Gana la computadora");
    }

    else if(pc == 2 && player == 0){
        pc = "tijera";
        player = "piedra";
        console.log(`La computadora eligió: ${pc} y el jugador eligió ${player}`);
        console.log("Gana el jugador");
    }

    else if(pc == 0 && player == 2){
        pc = "piedra";
        player = "tijera";
        console.log(`La computadora eligió: ${pc} y el jugador eligió ${player}`);
        console.log("Gana la computadora");
    }
}

let random = Math.random()*(3-0);
let computadora = Math.floor(random);
let jugador = 2;

jugar(computadora, jugador);