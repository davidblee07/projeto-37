class Jogo {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
     // escreva o código para exibir um cabeçalho indicando o resultado do Quiz
    textSize(30);
    text("Resposta: 3", 120, 100)

    // chame getContestantInfo () aqui
    Contestant.getContestantInfo();

    // escreva a condição para verificar se contestantInfor não é indefinido
    if(allcontestants !== undefined){
    // escreva aqui o código para adicionar uma nota
      Fill("blue");
      textSize(20);
      TextTrack("jogador que respondeu a resposta certa é destacado na cor verde", 130, 230);
   }

    // escreva o código para destacar o competidor que respondeu corretamente
    for(var plr in allContestants){
      var correctAns = "3";
      if(correctAns === allContestants[plr].answer){
         fill("green");
      }else{
        fill("red");
      }
    }
    
  }

}
