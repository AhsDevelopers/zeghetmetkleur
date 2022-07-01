"use strict";

const $eductionsWrapper = document.getElementById('eductions');
const $educationType = document.getElementById('educationType');
const $educationEnw = document.getElementById('educationEnw');
const $search = document.getElementById('search');
const $cardsTitle = document.getElementById('cards_title');
let $eductionTypeText = new Map();
$eductionTypeText.set('GRA', 'Graduaat');
$eductionTypeText.set('PBA', 'Bachelor');

(() => {
    const app = {
      initialize() {

        this.educations = [];
        fetch('data/educations.json?23')
        .then(response => response.json())
        .then(data => { 
            this.educations = data;
            this.buildEductionList(this.educations);
            this.registerListeners();
        });
        this.showHideClearButton(false);
      },
      buildEductionList(list){
        list.forEach((item, index) => {
            let card = document.createElement('div');
            card.classList.add('card');
            card.id = "card_" + index;
            card.innerHTML = this.createEducationItem(item);
            item.card = card;
            $eductionsWrapper.appendChild(card);
        });
        this.updateTitle(list.length);
        MediaBox('.mediabox');
    },
    createEducationItem({title, subtitle, type, photo, chat, video, info, tour, extra, sad}){
        var subtitle_label = '';
        if(subtitle) {
            subtitle_label = ` <em>${subtitle}</em>`;
        }
        var extra_tag = '';
        if(extra) {
            extra_tag = `<div class="card__tag card__tag--extra">${extra}</div>`;
        }
        
        var type_name = $eductionTypeText.get(type);
            video = video.replace('https://arteveldehogeschool.wistia.com/medias/', 'https://fast.wistia.net/embed/iframe/');
            tour = tour.replace('https://arteveldehogeschool.wistia.com/medias/', 'https://fast.wistia.net/embed/iframe/');
        
        var tour_link = '';
        if (tour) {
            tour_link = `<a href="${tour}" class="mediabox"><i class="fal fa-play-circle fa-fw"></i>Virtuele campustoer</a>`;
        }

        var card_header = `<div class="card__header mediabox">
                <div class="card__headertext">
                    <h2 class="card__title">${title}${subtitle_label}</h2>
                    <div class="card__tag card__tag--${type}">${type_name}</div>
                    ${extra_tag}
                </div>
                <img src="${photo}">
            </div>`;
        if(video) {
            var card_header = `<a href="${video}" class="card__header mediabox">
                <div class="card__headertext">
                    <h2 class="card__title">${title}${subtitle_label}</h2>
                    <div class="card__tag card__tag--${type}">${type_name}</div>
                    ${extra_tag}
                </div>
                <i class="play-icon fal fa-play-circle"></i>
                <img src="${photo}">
            </a>`;
        }
        
        var chat_link = '';
        if (chat) {
            chat_link = `<a href="${chat}" class="btn" target="_blank"><i class="fal fa-comment-smile fa-fw"></i>Spreek met een medewerker</a>`;
        }
        /*
        http://arteveldehogeschool.be/chat
        var now = Date.now();
        if(sad === 1 && (now < 1613142000000 || ( now > 1613921400000 && now < 1614009600000))) {
            chat_link = 'http://artevelde.webex.com/meet/sad';
        }*/

        return `<div class="card__body">
            ${card_header}
            <div class="card__cta">
                ${chat_link}
                ${tour_link}
                <a href="${info}" target="_blank"><i class="fal fa-info-circle fa-fw"></i>Wat zal je leren?</a>
            </div></div>`;
    }, 
    filterEductions() {
        var total = 0;
        this.educations.forEach(
            item => {        
            if(item.type.includes($educationType.value) && ($educationEnw.value === '' || item.enw == $educationEnw.value)) {
                total++;
                item.card.classList.remove('card--hidden');
            } else {
                item.card.classList.add('card--hidden');
            }
        });
        this.updateTitle(total);
        this.showHideClearButton(true);
    },
    searchEductions(search) {
        this.clearFilter();
        if(search.length > 0) {
            var total = 0;
            this.educations.forEach(
                item => {        
                if(item.type.toLowerCase().includes(search) || item.enw.toLowerCase().includes(search) || item.search.toLowerCase().includes(search) || item.title.toLowerCase().includes(search) || item.subtitle.toLowerCase().includes(search)) {
                    total++;
                    item.card.classList.remove('card--hidden');
                } else {
                    item.card.classList.add('card--hidden');
                }
            });
            this.updateTitle(total);
            this.showHideClearButton(true);
        } 
    },
    updateTitle(count) {
        var $selectedType = document.querySelector('#educationType option:checked');
        var $selectedEnw = document.querySelector('#educationEnw option:checked');
        var title = count + ' ';
        if($educationType.value !== '') {
            title += $selectedType.innerText;
        }
        if(count == 1) {
            title += 'opleiding gevonden';
        } else { 
            title += 'opleidingen gevonden';
        }
        if($educationEnw.value !== '') {
            title += " binnen het domein '" + $selectedEnw.innerText + "'";
        }
        if($search.value !== '') {
            title += " voor de zoekterm '" + $search.value + "'";
        }
        $cardsTitle.innerText = title;
    },
    showHideClearButton(show) {
        if(show) {
            document.getElementById('clearFilter').classList.remove('hidden');
        } else {
            document.getElementById('clearFilter').classList.add('hidden');
        }
    },
    clearFilter() {
        $educationType.selectedIndex = 0;
        $educationEnw.selectedIndex = 0;
        this.filterEductions();
        this.showHideClearButton(false);
    },
    clearSearch() {
        $search.value = '';
    },
    registerListeners() {
        document.getElementById('clearFilter').addEventListener('click', (event) => {
            this.clearSearch()
            this.clearFilter();
        });
        document.getElementById('search').addEventListener('keyup', (event) => {
            this.searchEductions(document.getElementById('search').value.trim().toLowerCase());
        });
        document.getElementById('search').addEventListener('change', (event) => {
            this.searchEductions(document.getElementById('search').value.trim().toLowerCase());
        });
        document.querySelectorAll('.selectors').forEach(item => {
            item.addEventListener('change', (event) => {
                this.clearSearch();
                this.filterEductions();
            })
        });
    }

    };

    app.initialize();
      
})();
  

