players = [];
colors = ["Red", "Blue"];


let setplayers = () => {
    if(localStorage.getItem('Players') === null){
        players = [];

    }else {
        players = localStorage.getItem('Players').split(',');
    }
}
setplayers()
console.log("Players = ", players);
console.log(localStorage);


addPlayer = function() {
    playerName = document.querySelector('#character').value;
    if (playerName !== "") {
        if (players.indexOf(playerName) == -1) {
            players.push(playerName);
            localStorage.setItem("Players", players);
        }
    }
    document.querySelector('#character').value = "";
    document.querySelector('#character').focus();
};

// fonction pour reset les joueurs
let clearAll = () => {
    players = [];
    localStorage.removeItem('Players');
}