describe('Bowling', function() {
    // var bowling;

    beforeEach(function() {
        bowling = new Bowling();
    });
    it('knows the current score', function() {
        expect(bowling.score).toEqual(0);
    });
    it('knows when the game is in progress, and is not by default', function() {
        expect(bowling.gameStatus).toBeFalsy();
    });
    it('has a method that starts a 1player game of bowling', function() {
        bowling.start()
        expect(bowling.gameStatus).toBeTruthy();
    });

    describe('start', function() {
        it('restarts the loop for every frame')
    });
    

});