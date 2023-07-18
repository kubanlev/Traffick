function Traff() {

    const red = document.getElementById('red');
    const yellow = document.getElementById('yellow');
    const green = document.getElementById('green');

    function Red () {
        red.style.backgroundColor = 'red';
        yellow.style.backgroundColor = 'rgb(87, 87, 0)';
        green.style.backgroundColor = 'rgb(0, 72, 0)';
        setTimeout(Yell, 1000);
    }

    function Yell () {
        red.style.backgroundColor = 'rgb(104, 4, 4)';
        yellow.style.backgroundColor = 'yellow';
        green.style.backgroundColor = 'rgb(0, 72, 0)';
        setTimeout(Green, 1000);
    }

    function Green () {
        red.style.backgroundColor = 'rgb(104, 4, 4)';
        yellow.style.backgroundColor = 'rgb(87, 87, 0)';
        green.style.backgroundColor = 'rgb(1, 209, 1)';
        setTimeout(Red, 1000);
    }

    Red();
}

    Traff();