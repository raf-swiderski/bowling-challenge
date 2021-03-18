describe('Bowling', function() {
    // var bowling;

    beforeEach(function() {
        bowling = new Bowling();
        bowling.start()
    });
    it('knows the current score', function() {
        expect(bowling.totalScore).toEqual(0);
    });

    it('knows when the game is in progress, and is not by default', function() {
        bowling = new Bowling();
        expect(bowling.gameStatus).toBeFalsy();
    });

    it('has a method that starts a 1player game of bowling', function() {
        expect(bowling.gameStatus).toBeTruthy();
    });

    it('bowling a strike adds 10 to the score', function() {
        bowling.totalScore = 5;
        bowling.roll(10)
        expect(bowling.totalScore).toEqual(15);
    });

    it('bowling 2 consecutive strikes adds 30 to the score', function() {
        bowling.totalScore = 5;
        bowling.roll(10);
        bowling.roll(10);
        expect(bowling.totalScore).toEqual(35);
    });

    it('bowling less than 10 adds that number to the score', function() {
        bowling.totalScore = 2;
        bowling.roll(9);
        expect(bowling.totalScore).toEqual(11);
    });

    it('rolling a strike then a 4 adds 18 to the score', function() {
        bowling.roll(10);
        bowling.roll(4);
        expect(bowling.totalScore).toEqual(18);
    });

    it('', function() {
        bowling.roll(10);
        bowling.roll(4);
        expect(bowling.totalScore).toEqual(18);
    });


});