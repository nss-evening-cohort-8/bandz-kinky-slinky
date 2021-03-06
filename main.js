let asylumsong = ["Remnants", "Asylum ", "The Infection ", "Warrior ", "Another Way to Die ", "Never Again", "The Animal ", 'Crucified ', 'Serpentine ', 'My Child ', 'Sacrifice ', 'Innocence ', 'Ishfwilf ']
let evolutionsong = ["Are You Ready ", "No More ", "A Reason to Fight ", "In Another Time ", "Stronger on Your Own ", "Hold on to Memories ", "Saviour of Nothing ", "Watch You Burn ", "The Best Ones Lie ", "Already Gone "]
let dethalbumsong = ["Murmaider ", "Go into the Water ", "Awaken ", "Bloodrocuted ", "Go Forth and Die ", "Fansong ", "Better Metal Snake ", "The Lost Vikings ", "Thunderhorse ", "Briefcase Full of Guts ", "Birthday Dethday ", "Hatredcopter ", "Castratikro ", "Face Fisted ", "Dethharmonic "]
let dethalbum2song = ["Bloodlines ", "The Gears ", "Burn the Earth ", "Laser Cannon Deth Sentence ", "Black Fire Upon Us ", "Dethsupport ", "The Cyborg Slayers ", "I Tamper with the Evidence at the Murder Site of Odin ", "Murmaider II: The Water God ", "Comet Song ", "Symmetry ", "Volcano "]
let dethalbum3song = ["Crush the Industry", "Andromeda ", "The Galaxy ", "Starved ", "Killstardo Abominate ", "Ghostqueen ", "Impeach God ", "Biological Warfare ", "Skyhunter ", "The Hammer ", "Rejoin "]

let albumspage = {
album: [
    {
        name:"Evolution",
        image:"../images/Evolution.jpg",
        release:"10/19/2018",
        songs:evolutionsong,
        purchase:"https://www.amazon.com/Evolution-Disturbed/dp/B07GHPFHG2/ref=sr_1_2?ie=UTF8&qid=1537072286&sr=8-2&keywords=disturbed+evolution&dpID=51r9Iupe-BL&preST=_SY300_QL70_&dpSrc=srch"
    },
    {
        name:"Dethalbum III",
        image:"../images/DethalbumIII.jpg",
        release:"10/16/2012",
        songs:dethalbum3song,
        purchase:"https://www.amazon.com/Dethalbum-III-Metalocalypse-Dethklok/dp/B0090PX5XA/ref=tmm_acd_swatch_0?_encoding=UTF8&qid=1537072493&sr=1-1-catcorr"
    },
    {
        name:"Asylum",
        image:"../images/asylum.jpg",
        release:"8/31/2010",
        songs:asylumsong,
        purchase:"https://www.amazon.com/Asylum-Disturbed/dp/B003TUGUHU/ref=sr_1_1?s=music&ie=UTF8&qid=1537072549&sr=1-1&keywords=Asylum&dpID=61CCVajpD3L&preST=_SY300_QL70_&dpSrc=srch"
    },
    {
        name:"Dethalbum II",
        image:"../images/dethalbumII.jpg",
        release:"9/29/2009",
        songs:dethalbum2song,
        purchase:"https://www.amazon.com/Dethalbum-II-Metalocalypse-Dethklok/dp/B002H3ETJG/ref=sr_1_1?s=music&ie=UTF8&qid=1537072588&sr=1-1&keywords=Dethalbum+II&dpID=5148MYvDWnL&preST=_SY300_QL70_&dpSrc=srch"
    },
    {
        name:"Dethalbum",
        image:"../images/dethalbum.jpg",
        release:"9/25/2007",
        songs:dethalbumsong,
        purchase:"https://www.amazon.com/Dethalbum-Dethklok/dp/B000UGG38W/ref=sr_1_1?s=music&ie=UTF8&qid=1537072621&sr=1-1&keywords=Dethalbum&dpID=613NtwcRxlL&preST=_SY300_QL70_&dpSrc=srch"
    }
]
}

const events = {
    April: [
        {
            name: 'Live in a Dive',
            date: '6',
            venue: 'The Wrecking Ball',
            time: '9:30',
        },
        {
            name: 'Lolapachellaroo',
            date: '14',
            venue: 'Rum, Lola, Rum',
            time: '10:30',
        },
        {
            name: 'American Nevernudes Charity Show',
            date: '26',
            venue: 'The Bier Garth',
            time: '8:00',
        },
        {
            name: 'The Dude Wheres My Chord Tour',
            date: '29',
            venue: 'Good Intentions',
            time: '8:30',
        }
    ],
    May: [
        {
            name: 'Opening for the Nashville Silent Opera',
            date: '9',
            venue: 'Superstar Ampitheatre',
            time: '9:00',
        },
        {
            name: 'The Placeholder Tour',
            date: '15',
            venue: 'Smoothie King Center',
            time: '10:00',
        },
        {
            name: 'The Alright Ole Opry',
            date: '16',
            venue: 'Ryman Auditorium',
            time: '9:30',
        },
        {
            name: 'Headlining with Durants on a Plane',
            date: '28',
            venue: 'The Great Melting Pit',
            time: '8:30',
        }
    ],
    June: [
        {
            name: 'The Album Release Announcement Show, Show',
            date: '5',
            venue: 'South-Southeast of Eden',
            time: '8:00',
        },
        {
            name: 'Opening for Tedious Data Entry',
            date: '12',
            venue: 'The Power Chord',
            time: '9:00',
        },
        {
            name: 'The Ressurection Tour, featuring TuPac',
            date: '20',
            venue: "The Cat's Cradle",
            time: '10:00',
        },
        {
            name: 'The Pre-Emptive Farewell Show',
            date: '22',
            venue: 'Rock and a Bar Place',
            time: '12:00',
        }
    ]
};

let year = [
    {month: 31, firstDay: 0, lastDay: 0},
    {month: 28, firstDay: 0, lastDay: 0},
    {month: 31, firstDay: 0, lastDay: 0},
    {month: 30, firstDay: 0, lastDay: 0},
    {month: 31, firstDay: 0, lastDay: 0},
    {month: 30, firstDay: 0, lastDay: 0},
    {month: 31, firstDay: 0, lastDay: 0},
    {month: 31, firstDay: 0, lastDay: 0},
    {month: 30, firstDay: 0, lastDay: 0},
    {month: 31, firstDay: 0, lastDay: 0},
    {month: 30, firstDay: 0, lastDay: 0},
    {month: 31, firstDay: 0, lastDay: 0}
]

const monthObject = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11
}

const januaryFirstDay = 1;
let first = -1;
let date = 0;
let dateCard = '';

let news = [
    {
        newsImage:'../images/soundofsilence.png',
        newsDate:'09/12/2018',
        newsTitle:"What made 'The Sound of Silence' different?",
        newsUrl: 'https://www.ultimate-guitar.com/news/general_music_news/disturbed_what_made_the_sound_of_silence_so_different_from_other_cover_songs_we_recorded.html'
    },
    {
        newsImage:'./images/911soundofsilence.png',
        newsDate:'09/11/2018',
        newsTitle:"'Sound of Silence' 9/11 Tribute",
        newsUrl:'https://waaf.radio.com/blogs/anthony-capobianco/september-11th-tribute-disturbeds-sounds-silence-will-bring-you-tears'
    },
    {
        newsImage:'./images/Dethalbum.jpg',
        newsDate:'04/18/2018',
        newsTitle:"'Awaken' Hits Hot Rock Songs Chart",
        newsUrl:'https://www.billboard.com/articles/columns/chart-beat/8317185/dethklok-awaken-hot-rock-songs-chart-batmetal-metalocalypse'
    }
];

const printToDom = (stringToPrint, divId) => {
    document.getElementById(divId).innerHTML = stringToPrint;
};

const albumspageprintbilder = () => {
    let newString = '';
    for(let i = 0; i < albumspage.album.length; i++) {
        newString +=`<div class="page">`;
        newString +=`<div class="wraper">`;
        newString +=`<div class="albImg">`
        newString +=    `<a href="${albumspage.album[i].purchase}"><img id="ablumImg_${i}" src="${albumspage.album[i].image}" alt="${albumspage.album[i].name}"></a>`
        newString +=    `<ol>`
            for (let j = 0; j < albumspage.album[i].songs.length; j++){
            newString +=    `<li>${albumspage.album[i].songs[j]}</li>`
        }
        newString +=`</ol>`
        newString +=`</div>`
        newString +=`<div class="albInfo">`
        newString +=    `<h3>Album Name: ${albumspage.album[i].name}:</h3>`
        newString +=    `<div class="albreleaseinfo">`
        newString +=    `<h4>Release Date: ${albumspage.album[i].release}:</h4>`
        newString +=    `</div>`
        newString +=    `</div>`
        newString +=`</div>`
    };
    printToDom(newString, 'albumscard');
};

// NAVBAR FUNCTION
function buttonsHover() {
    let buttons = [...document.getElementsByTagName('button')];
    buttons.forEach(function (el) {
        el.addEventListener('mouseover', function () {
            let btnColor = event.target;
            btnColor.setAttribute('style', 'background-color:#ef6817');
        });
        el.addEventListener('mouseout', function () {
            let btnColor = event.target;
            btnColor.setAttribute('style', 'background-color:#21201f');
        });
    });
}

let mem1 = {id:'mem1',name:'Ben Rector',instrument:'Guitar',favoriteSong:'Born in the USA',picture:'https://www.billboard.com/files/media/Ben-Rector-bb21-hot-100-pr-2016-billboard-1548.jpg'};

let mem2 = {id:'mem2',name:'Terry',instrument:'Bass',favoriteSong:'In the Air Tonight', picture:'https://pmcvariety.files.wordpress.com/2018/08/terry-crews1.jpg'};

let mem3 = {id:'mem3',name:'Lady Gaga',instrument:'Lead Singer',favoriteSong:'Great Balls of Fire',picture:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-the-list-best-beauty-looks-of-the-year-lady-gaga-gettyimages-634472516-1512514124.jpg'};

let mem4 = {id:'mem4',name:'Questlove',instrument:'Drums',favoriteSong:'Hound Dog' ,picture:'https://media.pitchfork.com/photos/59c2b0b371249b1b0091dc7e/1:1/w_300/Questlove_Photo%20by%20Jason%20Kempin:WireImage_463076764%202.jpg'};

const members = [mem1,mem2,mem3,mem4];

const getMemberById = (id) =>{
    for (let i =0;i<members.length;i++){
        let member = members[i];
        if (member.id === id){
            return member
        }
    }
}

function eventLister(month) {
    let eventString = `<h2 class='jsEventsMonth'>${month}</h2>`;
    let eventClass = '';
    for(let i = 0; i < events[month].length; i++) {
        if(i === 0) {
            eventClass = 'jsEventsDiv1';
        }
        else if(i === 1 || i === 3) {
            eventClass = 'jsEventsDiv2';
        }
        else if(i === 2) {
            eventClass = 'jsEventsDiv3';
        }
        eventString +=  `<div class=${eventClass}>`
        eventString +=      `<h3 class='jsEventsHeader'>${events[month][i].name}</h3>`
        eventString +=      `<p class='jsEventsPar'>Date: ${month} ${events[month][i].date}</p>`
        eventString +=      `<p class='jsEventsPar'>Location: ${events[month][i].venue}</p>`
        eventString +=      `<p class='jsEventsPar'>ShowTime: ${events[month][i].time}</p>`
        eventString +=  `</div>`;
    };
    printToDom(eventString, 'events'+month+'Div');
}

function monthCardSelector() {
    document.getElementById('calendarButton').addEventListener('click', function() {
        let menuSelect = document.getElementById('select').value;
        let monthSelect = monthObject[menuSelect];
        date = 0;
        for(let i = 0; i < 37; i++) {
            date++;
            dateCard = `<h4 class='dateCardHeader'></h4>`;
            let dateString = ''+date;
            printToDom(dateCard, 'dateDiv'+dateString);            
        }
        let dateHeader = 0;
        let dateMonthBefore = 0;
        let dateMonthAfter = 0;
        date = year[monthObject[menuSelect]].firstDay;
        for(let i = 0; i <= 37; i++) {
            if(dateMonthBefore < year[monthObject[menuSelect]].firstDay) {
                dateCard = `<h4 class='dateCardHeader'>${dateMonthBefore+year[(monthObject[menuSelect]-1)].month-year[(monthObject[menuSelect]-1)].lastDay}</h4>`;
                dateMonthBefore++;
                let dateString = ''+dateMonthBefore;
                printToDom(dateCard, 'dateDiv'+dateString); 
            }
            else if(date <= (year[monthSelect].month + year[monthObject[menuSelect]].firstDay)) {
                date++;
                dateHeader++;
                dateCard = `<h4 class='dateCardHeader'>${dateHeader}</h4>`;
                let dateString = ''+date;
                printToDom(dateCard, 'dateDiv'+dateString);            
        }
            else {
                let daysToAdd = year[(monthObject[menuSelect]-1)].lastDay;
                if(daysToAdd === 6) {
                    daysToAdd = -1;
                }
                dateMonthAfter++;
                dateCard = `<h4 class='dateCardHeader'>${dateMonthAfter}</h4>`;
                let dateString = ''+(dateMonthAfter+daysToAdd+year[monthObject[menuSelect]].month+1);
                printToDom(dateCard, 'dateDiv'+dateString);
            }
    }
})
}

function eventListerCalendar(month) {
    let dateFirst = year[monthObject[month]].firstDay;
    let divArray = document.getElementsByClassName('dateClass');
    for(let i = 0; i <divArray.length; i++) {
        divArray.namedItem('dateDiv'+[(i+1)]).style.backgroundColor = '#383838';
    }
    for(let i = 0; i < events[month].length; i++) {
        let dateString = '' + (parseInt(events[month][i].date) + dateFirst);
        let eventString = document.getElementById('dateDiv'+dateString).innerHTML;
        eventString +=  `<div>`
        eventString +=      `<h3 class='jsCalendarHeader'>${events[month][i].name}</h3>`
        eventString +=      `<p class='jsCalendarPar'>Date: ${month} ${events[month][i].date}</p>`
        eventString +=      `<p class='jsCalendarPar'>Location: ${events[month][i].venue}</p>`
        eventString +=      `<p class='jsCalendarPar'>ShowTime: ${events[month][i].time}</p>`
        eventString +=  `</div>`;
        printToDom(eventString, 'dateDiv'+dateString);
        document.getElementById('dateDiv'+dateString).style.backgroundColor = '#ef6817';
    };    
}

function dateCardSelector() {
    document.getElementById('calendarButton').addEventListener('click', function() {
        let menuSelect = document.getElementById('select').value;
        eventListerCalendar(menuSelect);
    })
}

function calendarAtPageLoad() {
        let dateHeader = 0;
        date = januaryFirstDay;
        for(let i = 0; i < year[0].month; i++) {
            date++;
            dateHeader++;
            dateCard = `<h4 class='dateCardHeader'>${dateHeader}</h4>`;
            let dateString = ''+date;
            printToDom(dateCard, 'dateDiv'+dateString);            
        }
}

function firstDayOfMonth() {
    for(let i = 0; i <year.length; i++) {    
        if(first === -1) {
            first = januaryFirstDay;
            year[0].firstDay = first;
        }
        else {            
            first = first + year[(i-1)].month - 28;
            if(first > 6) {
                first = first - 7;
            }
            year[i].firstDay = first;
        }
    }
}

const needHelp = (event) => {
    if (event.target.tagName !== 'IMG'){
        return
    }
    let member = getMemberById(event.target.parentElement.id) 
    let bandInfo = "";
    bandInfo += `<div>`
    bandInfo +=     `<p>${member['name']}</p>`
    bandInfo +=     `<p>${member['instrument']}</p>`
    bandInfo +=     `<p>Favorite Song: ${member['favoriteSong']}</p>`
    bandInfo += `</div>`;
   printToDom(bandInfo,'test');
}

const nfl = () => {
    let imageString = '';
    for (let i=0;i<members.length;i++){
        imageString += `<div id="${members[i].id}">`;
        imageString += `<img class="mem-pic" src="${members[i].picture}" alt="${members[i].name}">`
        imageString += `</div>`
    }; 
    printToDom(imageString,'picture-container');
}

function lastDayOfMonth() {
    for(let i = 0; i <year.length; i++) {
        year[i].lastDay = year[i].firstDay + year[i].month -29;
        if(year[i].lastDay > 6) {
            year[i].lastDay = year[i].lastDay - 7;
        }
    }
}
       
const displayHomepageNews = () => {
    let newString = '';
    for (let i = 0; i < news.length; i++) {
        newString += `<div class="homepage-news-article">`;
        newString +=    `<img class="homepage-news-img" src="${news[i].newsImage}" alt="">`;
        newString +=    `<p>${news[i].newsDate}</p>`;
        newString +=    `<a href="${news[i].newsUrl}" target="_blank"><h3>${news[i].newsTitle}</h3></a>`;
        newString += `</div>`;
    }printToDom(newString, 'homepage-news');
}

const validateHomepageForm = () => {
    let button = document.getElementById('homepage-submit-btn');
    let outputFormString = "";
    button.addEventListener('click', (event) => {
        let nameInput = document.getElementById('form-name').value;
        let emailInput = document.getElementById('form-email').value;
        console.log(nameInput, emailInput);
        if (nameInput !== "" && emailInput !== "") {
            outputFormString = `Thank you for being a Kinky Slinky fan.`
        }else if (nameInput !== "" && emailInput === "") {
            outputFormString = `Please enter your email.`
        }else if (nameInput === "" && emailInput !== ""){
            outputFormString = `Please enter your name.`
        }else {
            outputFormString = `Please enter your name and email.`
        }
        printToDom(outputFormString, 'homepage-form-message');
        event.preventDefault();
    }
)};

function schedulePage() {
    if(window.location.pathname === '/html/schedule.html') {
        firstDayOfMonth();
        lastDayOfMonth();
        eventLister('April');
        eventLister('May');
        eventLister('June');
        monthCardSelector();
        dateCardSelector();
        calendarAtPageLoad();
    }
}

const homePage = () => {
   if (window.location.pathname === '/index.html') {
       validateHomepageForm();
       displayHomepageNews();
   }
}

function albumsPageFnc() {
    if(window.location.pathname === '/html/albums.html') {
        albumspageprintbilder();
    }
}

function bandMemberPage() {
    if(window.location.pathname === '/html/band-member.html') {
        document.getElementById('picture-container').addEventListener('click',needHelp);
        nfl();
    }
}

buttonsHover();
homePage();
schedulePage();
bandMemberPage();
albumsPageFnc();