// Practice JS


//Random card generator

function getCard(){
    const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const idx = Math.floor(Math.random() * values.length);
    const value = values[idx];

    const suits = ['clubs','spades','hearts','diamonds'];
    const suitsIdx = Math.floor(Math.random() * suits.length);
    const suit = suits[suitsIdx];
    console.log(value, suit);

}

function eightBall(){
    let userName = prompt('What is your name?');
    userName ? console.log(`Hello, ${userName}!`)
    : console.log('Hello!');
    let userQuestion = prompt('What is your question?');
    console.log(`The user asked: ${userQuestion}`);
    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';
    console.log('Magic 8-ball says:');
    switch (randomNumber) {
        case 0:
        eightBall = 'It is certain'
        break
        case 1:
        eightBall = 'It is decidedly so'
        break
        case 2:
        eightBall = 'Not likely'
        break
        case 3:
        eightBall = 'Does the tin man have a sheet metal cock?'
        break
        case 4:
        eightBall = 'I would not count on it'
        break
        case 5:
        eightBall = 'My sources say yes'
        break
        case 6:
        eightBall = 'Outlook uncertain'
        break
        case 7:
        eightBall = 'Signs point to yes'
        break
    }
    console.log(eightBall);
}