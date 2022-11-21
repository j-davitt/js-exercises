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

