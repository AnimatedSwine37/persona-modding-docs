---
---
// Dummy frontmatter so jekyll will process this file

// Code for hiding tutorials for non-selected games from the navbar
const pages = [
    {% for page in site.pages %}
    {
    "url": "{%link {{page.path}} %}",
        "games": "{{page.games | join: ','}}".split(',').filter(x => x.length != 0)
    },
    {% endfor %}
];

const gameNames = {
    {% for game in site.games %}
    "{{game.short_name}}": "{{game.full_name}}",
    {% endfor %}
}

document.addEventListener("DOMContentLoaded", onLoad);

function onLoad() {
    game = getCookie("game");
    if(game == null) game = "Universal";
    document.querySelector("#gameDropdown>button>span").innerHTML = getFullGameName(game);
    hideItems();
}

function hideItems() 
{    
    game = getCookie("game");
    if(!currentPageHasGame(game)) {
        newGame = pages.find(x => x.url == window.location.pathname).games[0];
        if(newGame == undefined) newGame = "Universal";
        setGame(newGame);
        return;
    }

    navItems = document.querySelectorAll("#site-nav > ul li");
    navItems.forEach(page => {
        link = page.querySelector("a");
        absoluteUrl = link.href;
        relativeUrl = absoluteUrl.replace(window.location.origin, "");
        games = pages.find(x => x.url == relativeUrl).games;

        if(game == null || game == "Universal" || games.length == 0 || games.includes("Universal") || games.includes(game)) {
            page.classList.remove("hide");
        }
        else {
            page.classList.add("hide");
        }
    });
}

function setGame(game) {
    document.cookie = `game=${game}; path=/`;
    game = getCookie("game");
    game = game == undefined ? "Universal" : game;
    console.log(`Set game to ${game}`);
    document.querySelector("#gameDropdown>button>span").innerHTML = getFullGameName(game);

    if(!currentPageHasGame(game)) {
        window.location.href = {%link index.md %};
        return;
    }
    hideItems();
}

function currentPageHasGame(game) {
    if(game == undefined) return true;
    currentPage = pages.find(x => x.url == window.location.pathname);
    if(currentPage == null) return true;

    return currentPage.games.includes(game) || game == "Universal" || currentPage.games.includes("Universal") || currentPage.games.length == 0;
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

function getFullGameName(game) {
    fullName = gameNames[game];
    return fullName == undefined ? game : fullName;
}