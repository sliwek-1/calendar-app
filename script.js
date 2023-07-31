let nav = 0;
let clicked = null;
const weekdays = ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota', 'niedziela'];
const calendar = document.querySelector('#calendar');
const title = document.querySelector('.yearMonth');
let backwardBtn = document.querySelector('.backward');
let forwardBtn = document.querySelector('.forward');
let date = new Date();
let locate = "pl-PL";

function load(){
    const dt = new Date();
    
    let day = dt.getDate();
    let month = dt.getMonth()+1;
    let year = dt.getFullYear();

    let firstDayOfMonth = new Date(year, month, 1)

    const dateString = firstDayOfMonth.toLocaleDateString('pl-PL', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    })

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const paddingDays = weekdays.indexOf(dateString.split(',')[0])

    renderDays(paddingDays,daysInMonth)

    let currentMonthName = date.toLocaleDateString('pl-PL', {
        month: 'long'
    })

    title.textContent = year + " " + currentMonthName;

    forwardBtn.addEventListener('click', () => {
        calendar.innerHTML = ""
        month++;
        let dateToString = new Date(year + "-" + month);
        const dateString = dateToString.toLocaleDateString('pl-PL', {
            weekday: 'long',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        })
    
        const daysInMonth = new Date(year, month + 1, 0).getDate();
    
        const paddingDays = weekdays.indexOf(dateString.split(',')[0])

        let newDate = year + "-" + month;
        if(month == 12){
            month = 0;
            year++;
        }
        getTitle(new Date(newDate), year)
        renderDays(paddingDays,daysInMonth)
        console.log(newDate)
    })

    backwardBtn.addEventListener('click', () => {
        calendar.innerHTML = ""
        month--;

        let dateToString = new Date(year + "-" + month);
        const dateString = dateToString.toLocaleDateString('pl-PL', {
            weekday: 'long',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        })
    
        const daysInMonth = new Date(year, month + 1, 0).getDate();
    
        const paddingDays = weekdays.indexOf(dateString.split(',')[0])

        let newDate = year + "-" + month;
        if(month == 1){
            month = 13;
            year--;
        }
        getTitle(new Date(newDate), year)
        renderDays(paddingDays,daysInMonth)
        console.log(newDate)
    })

}

function getNameDay(date, locate){
    return date.toLocaleDateString(locate,{weekday: 'long'});
}

function getTitle(date,year){
    let currentMonthName = date.toLocaleDateString('pl-PL', {
        month: 'long'
    })

    title.textContent = year + " " + currentMonthName;
}

function renderDays(paddingDays,daysInMonth){
    for(let i = 1; i <= paddingDays + daysInMonth; i++){
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');

        if(i > paddingDays){
            daySquare.innerText = i - paddingDays;
            daySquare.addEventListener('click' ,(e) => {
                let currentDay = e.target.innerText
                let currentDate = year + "-" + month + "-" + currentDay;
                let currentDayName = getNameDay(new Date(currentDate));
                let clickedDateString = currentDayName + ', ' + currentDay + "/" + month + "/" + year;
                createDaySchedule(clickedDateString);
            })
        }else{
            daySquare.classList.add('padding');
        }

        calendar.appendChild(daySquare);

    }
}

function createDaySchedule(clickedDateString){
    
}

load();