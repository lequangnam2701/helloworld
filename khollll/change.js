function updateGreeting(){

    const greetingElement = document.getElementById('greeting');

    const timeElement = document.getElementById('time');
    const timeElement2 = document.getElementById('time2');
    const secondsElement = document.querySelector('.seconds span');
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greeting = '';
    let className = '';

    
    if (currentHour < 12) {
        greeting = 'Chào buổi sáng';
        className = 'morning;'
    }else if (currentHour < 18) {
        greeting  = 'Chào buổi chiều';
        className = 'afternoon';
    }else {
        greeting = 'Chào buổi tối';
        className = 'evening';
}
greetingElement.textContent = greeting;
    greetingElement.className = className;

    const timeString = 'thoi gian day du:: ${currentTime}';
    const timeString2 =`Thời gian rút gọn : ${currentTime.getHours()}:${String(currentTime.getMinutes()).padStart(2,'0')}:${String (currentTime.getSeconds()).padStart(2,'0')}`;
    timeElement.textContent = timeString;
    timeElement2.textContent = timeString2;

    secondsElement.textContent = currentTime.getSeconds();
}

setInterval(updateGreeting, 100);

updateGreeting();

function changeColor() {
    const textEleement = document.getElementById('text');
    const currentColor = textEleement.style.color;

    if (currentColor === 'blue') {
        textEleement.style.color = 'red';
        textEleement.textContent = 'van ban mau do roi se thay mau';
    } else {
        textEleement.style.color = 'blue';
        textEleement.textContent = 'van ban mau xanh roi  se thay mau';

        setInterval(changeColor,  100);
    }
}

