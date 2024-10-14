var Jog = 0;
var Tabuleiro = new Array(3);
for(i=0; i<3; i++){
    Tabuleiro[i] = new Array(3);
}
var Vencedor = 0
var Posicao = 0

function OnClick(id, i, j){
        markCell(id, i, j);
        check_winner();
        if(Vencedor != "0"){
            Print_winner();    
        }
}

function markCell(id, i, j) {   
    if(document.getElementById(id).value === ""){
        if(Jog == 0){ //jogador 1
            document.getElementById(id).value = "O";
            Tabuleiro[i][j] = "O";
            Jog = 1;

        }
        else{//jogador 2
            document.getElementById(id).value = "X";
            Tabuleiro[i][j] = "X";
            Jog = 0;
        }
    } 
}

function check_winner(){ 
    if(Vencedor != "O" && Vencedor != "X"){
        if(Tabuleiro[0][2] == Tabuleiro[1][1] && Tabuleiro[1][1] == Tabuleiro[2][0] &&  (Tabuleiro[1][1] == "O" || Tabuleiro[1][1]== "X")){
            // checa uma diagonal
            Vencedor = Tabuleiro[1][1];
            Posicao = "diagonal";
        }
        else{
            if(Tabuleiro[0][0]==Tabuleiro[1][1] && Tabuleiro[1][1] == Tabuleiro[2][2] && (Tabuleiro[1][1] == "O" || Tabuleiro[1][1]== "X")){
                // checa a ultima diagonal
                Vencedor = Tabuleiro[1][1];
                Posicao = ("diagonal");
            }
            else{
                for(i=0; i<3; i++){
                    if(Tabuleiro[i][0]===Tabuleiro[i][1] && Tabuleiro[i][1]===Tabuleiro[i][2] && (Tabuleiro[i][0] == "O"||Tabuleiro[i][0] == "X")){ 
                        //checa linhas
                        Vencedor = Tabuleiro[i][0];
                        Posicao = ("linha " + (i+1));
                    }
                    else{
                        if(Tabuleiro[0][i]==Tabuleiro[1][i] && Tabuleiro[1][i]==Tabuleiro[2][i] && (Tabuleiro[0][i] == "O"||Tabuleiro[0][i] == "X")){ 
                            //checa colunas
                            Vencedor = Tabuleiro[0][i];
                            Posicao = ("coluna " + (i+1));
                        }
                    }
                }
            }
        }
    } 
}

function Print_winner(){
    console.log('vencedor: ', Vencedor)
    alert("Vencedor: " + Vencedor + "\n\n" + Posicao)
}