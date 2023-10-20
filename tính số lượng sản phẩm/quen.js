let sanPham = [
    {
        ten: 'San pham 1',
        gia: 100,
        soluong: 10
    },
    {
        ten: 'San pham 2',
        gia: 19,
        soluong: 5
    },
    {
        ten: 'San pham 3',
        gia: 10,
        soluong: 5
    }
]

function hienThiSanPham() {
    let htmlContent = '';
    sanPham.forEach(item => {
        let tongSoTien = item.gia * item.soluong;
        let giamGia = 0;
        let giaSauKhiGiam = 0;
        var mau_sac 
        

if (tongSoTien >=100) {
    giamGia=5;
    mau_sac = 'green';
}
else if(tongSoTien < 100) {
    mau_sac = 'red';
}

        htmlContent += `<h3 style="color:${mau_sac}">Ten san pham: ${item.ten} <br>
        Gia: ${item.gia} <br>
        So luong: ${item.soluong} <br>
        Tong so tien: ${tongSoTien} <br>
        Giam gia: ${giamGia}% <br>
        Gia sau khi giam: ${giaSauKhiGiam} <br>

        </h3>`;
    });

    let divElm = document.getElementById('danh-sach-san-pham');
    divElm.innerHTML = htmlContent;

}

hienThiSanPham();

function updateGreeting(){
    const  greetingElement = document.getElementById('greeting');
    const timeElement = document.getElementById('time');
    const timeElement2 = document.getElementById('time2');
    const secondsElement = document.querySelector('.seconds span');
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greeting = '';
    let className = '';

    const timeString = `thoi gian la: ${currentTime}`;
    timeElement.textContent = timeString;

    secondsElement.textContent = currentTime.getSeconds();

}
setInterval(updateGreeting, 1000);
updateGreeting();
function changeColor() {
const textElement = document.getElementById('text');
const currentColor = textElement.style.color;

if (currentColor ==='blue') {
textElement.style.color = 'red';
textElement.textContent = 'van ban doi mau sau 1pp';
}else{
    textElement.style.color = 'blue';
     textElement.textContent = 'van ban doi mau sau 1pp';
}
}
setInterval(changeColor,60000);