let container=document.querySelector(".wapper");
		let btn = document.getElementById("spin");
		let number = Math.ceil(Math.random()*5000);

		btn.onclick=function(){
			console.log(number);
		    container.style.transform="rotate("+number+"deg)";
		    number+=Math.ceil(Math.random()*5000);
		}
    