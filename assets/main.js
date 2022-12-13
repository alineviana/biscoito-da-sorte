const buttonFortuneCookie = document.querySelector('.fortune-cookie');
const buttonOpenedCookie = document.querySelector('.open-other-cookie');
const openCookie = document.querySelector('.open-cookie');
const openNewCookie = document.querySelector('.open-new-cookie');
const messageCookie = document.querySelector('.message-cookie');


function phrases() {
    const phrases = [
        "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
        "A persistência realiza o impossível!",
        "Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.",
        "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.",
        "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.",
        "Quando você quer algo, todo o universo conspira para que você realize o seu desejo.",
        "Você precisa fazer aquilo que pensa que não é capaz de fazer.",
        "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.",
        "Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.",
        "Nossa maior fraqueza está em desistir. O caminho para vencer é tentar mais uma vez.",
        "A vida é 10% o que acontece a você e 90% como você reage a isso.",
        "A felicidade não é algo pronto. Ela é feita das suas próprias ações.",
        "Mude o modo que você olha para as coisas, e as coisas que você olha mudarão.",
        "A paz vem de dentro de você mesmo. Não a procure à sua volta.",
        "Aprenda com o ontem. Viva o hoje. Tenha esperança para o amanhã.",
        "Saber encontrar a alegria na alegria dos outros, é o segredo da felicidade."
    ]

    let randomPhrase = Math.floor(Math.random() * phrases.length);
    let eachPhrase = phrases[randomPhrase];

    messageCookie.innerHTML = `"${eachPhrase}"`;

    eachPhrase++
}

function openFortuneCookie() {
    openCookie.classList.add('hide');
    openNewCookie.classList.remove('hide');
}

function openOtherCookie() {
    openNewCookie.classList.add('hide');
    openCookie.classList.remove('hide');
}

buttonFortuneCookie.addEventListener('click', function() {
    openFortuneCookie();

    phrases();

    buttonOpenedCookie.addEventListener('click', function() {
        openOtherCookie();
    })

})

