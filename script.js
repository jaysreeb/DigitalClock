window.onload = function(){
    const day = document.getElementById('day');
    const hour = document.getElementById('hour');
    const minute = document.getElementById('minute');
    const second = document.getElementById('second');

    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

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
    showTime();
    setInterval(showTime, 1000); //Updates every second
};