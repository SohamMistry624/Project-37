class Question{

    constructor(){

    }

    display(){

        this.title.html("My Quiz Game");
        this.title.position(350, 0);

        this.question.html("Question :- What starts and ends with the letter 'E', buthas only one letter?  ");
        this.question.position(150, 80);
        this.option1.html("1. Everyone  ");
        this.option1.position(150, 100);
        this.option2.html("2. Envelope  ");
        this.option2.position(150, 120);
        
        this.input1.position(150, 230);
        
        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.button.hide();
            contestant.name = contestantCount;
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
          });
    }
      
}