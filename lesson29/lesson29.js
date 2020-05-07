// Завдання 1 - Создать страницу, которая выводит нумерованный список песен

let playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }    
];

const showSongsList = arr => {
    let list = '';
    for(item of arr) {
        list += `<div class="inline-box"><h3 class="h-inline">${item.author}</h3> - ${item.song}</div>`;
    }
    return list;
}

const btnShowSongs = document.querySelector('.btn-show-songs');
const btnHideSongs = document.querySelector('.btn-hide-songs');
const songsList = document.querySelector('.songs-list');

btnShowSongs.addEventListener('click', function() {
    songsList.innerHTML = showSongsList(playList);
    btnShowSongs.style.display = 'none';
    btnHideSongs.style.display = 'block';
});

btnHideSongs.addEventListener('click', function() {
    songsList.innerHTML = '';
    btnShowSongs.style.display = 'block';
    btnHideSongs.style.display = 'none';
});

/* Завдання 2 - Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.  */

function openPopup() {
    const popupBg = document.querySelector('.popup-bg');
    const popup = document.querySelector('.popup');
    popupBg.classList.toggle('visible');
    popup.classList.toggle('visible');
}

const closePopupBg = document.querySelector('.popup-bg');
closePopupBg.addEventListener('click', function(event) {
    const close = !event.target.closest('.popup');
    if (close) {
        openPopup();
    }
});