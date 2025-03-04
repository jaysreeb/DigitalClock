window.onload = function(){
    const day = document.getElementById('day');
    const hour = document.getElementById('hour');
    const minute = document.getElementById('minute');
    const second = document.getElementById('second');
    const quotes = document.getElementById('quotes');

    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const quote = [
        "Seize the day, then let it go",
        "The future is something which everyone reaches at the rate of sixty minutes an hour",
        "Time is a brisk wind, for each hour it brings something new.",
        "Time moves slowly but passes quickly.",
        "Everybody knows that once you passed it, you can’t go back.",
        "But meanwhile, time flies; it flies never to be regained.",
        "Those who make the worst use of their time are the first to complain of its brevity."
    ];

    // Defining showTime funcion
    function showTime(){
        let today = new Date();
        // new Date() returns : today = "2025-03-03T18:26:29.589Z"
        let d = today.getDate();
        let m = today.getMonth();
        let y = today.getFullYear();
        let h = today.getHours();
        let mint = today.getMinutes();
        let sec = today.getSeconds();

        day.textContent = `${d} ${month[m]} ${y}`; // provides the date 
        hour.textContent = h;   // hours
        
        minute.textContent = mint; // minutes
        second.textContent = sec; // seconds
    }
    function updateQuote() {
        const randomIndex = Math.floor(Math.random() * quote.length);
        quotes.textContent = quote[randomIndex];
    }
    showTime();
    updateQuote();
    setInterval(showTime, 1000); //Updates every second
    setInterval(updateQuote, 3000); //Updates the quote
};