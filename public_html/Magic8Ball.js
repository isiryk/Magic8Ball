function produceMessage(){
    let random = Math.random() * 100;
    let message = '';
    console.log(Math.floor(random));
    switch(true){
        case random <= 4:
                message = 'It is certain';
                break;
        case random >= 5 && random <= 9:
                message = 'It is decidedly so';
                break;
        case random >= 10 && random <= 14:
                message = 'Without a doubt';
                break;
        case random >= 15 && random <= 19:
                message = 'Yes definitely';
                break;
        case random >= 20 && random <= 24:
                message = 'You may rely on it';
                break;
        case random >= 25 && random <= 29:
                message = 'As I see it, yes';
                break;
        case random >= 30 && random <= 34:
                message = 'Most likely';
                break;
        case random >= 35 && random <= 39:
                message = 'Outlook good';
                break;
        case random >= 40 && random <= 44:
                message = 'Yes';
                break;
        case random >= 45 && random <= 49:
                message = 'Signs point to yes';
                break;
        case random >= 50 && random <= 54:
                message = 'Reply hazy try again';
                break;
        case random >= 55 && random <= 59:
                message = 'Ask again later';
                break;
        case random >= 60 && random <= 64:
                message = 'Better not tell you now';
                break;
        case random >= 65 && random <= 69:
                message = 'Cannot predict now';
                break;
        case random >= 70 && random <= 74:
                message = 'Concentrate and ask again';
                break;
        case random >= 75 && random <= 79:
                message = 'Don\'t count on it';
                break;
        case random >= 80 && random <= 84:
                message = 'My reply is no';
                break;
        case random >= 85 && random <= 89:
                message = 'My sources say no';
                break;
        case random >= 90 && random <= 94:
                message = 'Outlook not so good';
                break;
        case random >= 95 && random <= 100:
                message = 'Very doubtful';
                break;
        default:
                message = 'you broke it';
                break;
    }
    return message;
}