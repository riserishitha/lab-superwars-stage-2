const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

const initPlayers = (players) => {
    let detailedPlayers = [];
    for (let i = 0; i < players.length; i++) {
        detailedPlayers.push({
            name: players[i],
            strength: getRandomStrength(),
            image: "images/super-" + (i + 1) + ".png", 
        });
    }
    return detailedPlayers;
};

const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100) + 1;
};

const buildPlayers = (players, type) => {
    let fragment = '';
    for (let i = 0; i < players.length; i++) {
        if ((type === 'hero' && i % 2 === 0) || (type === 'villain' && i % 2 !== 0)) {
            fragment += `
            <div class="player">
                <img src="${players[i].image}">
                <div class="name">${players[i].name}</div>
                <div class="strength">${players[i].strength}</div>
            </div>
            `;
        }
    }
    return fragment;
};

const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
};

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
};
