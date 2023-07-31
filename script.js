let nav = 0;
let clicked = null;
const weekdays = ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota', 'niedziela'];
const calendar = document.querySelector('#calendar');
const title = document.querySelector('.yearMonth');
let date = new Date();
let locate = "pl-PL";

function load(){
    const dt = new Date();
    
    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1); // Pobieramy pierwszy dzień miesiąca

    const dateString = firstDayOfMonth.toLocaleDateString('pl-PL', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    })

    // Oblicza ile jest dni w danym miesiącu poprzez danie zera w trzecim argumencie co oznacza liczbe jaką 
    // prezentuje ostatni dzień poprzedniego miesiąca np dla lipca 31 dzięki dodaniu 1 do miesiąca otrzymujemy liczbe dni w obecnym miesiącu
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const paddingDays = weekdays.indexOf(dateString.split(',')[0])

    let currentMonthName = date.toLocaleDateString('pl-PL', {
        month: 'long'
    })

    title.textContent = year + " " + currentMonthName;

    for(let i = 1; i <= paddingDays + daysInMonth; i++){
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');

        if(i > paddingDays){
            daySquare.innerText = i - paddingDays;
            daySquare.addEventListener('click' ,(e) => {
                let currentDay = e.target.innerText
                let currentDate = year + "-" + (month + 1) + "-" + currentDay;
                let currentDayName = getNameDay(new Date(currentDate));
                let clickedDateString = currentDayName + ', ' + currentDay + "/" + (month + 1) + "/" + year;
                
            })
        }else{
            daySquare.classList.add('padding');
        }

        calendar.appendChild(daySquare);

    }
}

function getNameDay(date, locate){
    return date.toLocaleDateString(locate,{weekday: 'long'});
}

load();