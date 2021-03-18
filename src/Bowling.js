
// let name = window.prompt("Enter your name: ");

class Bowling {
    constructor() {
        this.totalScore = 0;
        this.gameStatus = false
        this.bonusRounds = 0;
    }

    start() {
        this.gameStatus = true
    }
    
    roll(roll) {
        
        if (roll === 10) {
            
            //strike
            if (this.bonusRounds === 0) {
                this.totalScore += 10
                this.bonusRounds += 2
            } else if (this.bonusRounds > 0) {
                this.totalScore += 20
                this.bonusRounds += 1
            }

        } else if (roll < 10) {
            
            if (this.bonusRounds === 0) {
                this.totalScore += roll
    
            } else if (this.bonusRounds > 0) {
                this.totalScore += roll * 2
                this.bonusRounds -= 1
            } 
        }

    }
    

};