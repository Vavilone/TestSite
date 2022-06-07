function Last() {
	if (localStorage['Page'] != NaN) {
		let Nstr = localStorage.getItem('Page');
		let Ans = document.querySelector('input[name = "quest"]:checked').value;
		localStorage.setItem('Ans' + Nstr.toString(), Ans);
		Nstr--;
		if (Nstr < 1) Nstr = 1;
		let inf = tipoJSON(Nstr);
		document.getElementById("q0").innerHTML = inf[0];
		document.getElementById("q1").innerHTML = inf[1];
		document.getElementById("q2").innerHTML = inf[2];
		document.getElementById("q3").innerHTML = inf[3];
		document.getElementById("q4").innerHTML = inf[4];
		localStorage.setItem('Page', Nstr);
		document.getElementById("Answer").innerHTML = " " + Nstr + "/7 ";
	}
}
function Next() {
	if (localStorage['Page'] != NaN) {
		let Nstr = localStorage.getItem('Page');
		let Ans = document.querySelector('input[name = "quest"]:checked').value;
		localStorage.setItem('Ans' + Nstr.toString(), Ans);
		Nstr++;
		let inf = tipoJSON(Nstr);
		document.getElementById("q0").innerHTML = inf[0];
		document.getElementById("q1").innerHTML = inf[1];
		document.getElementById("q2").innerHTML = inf[2];
		document.getElementById("q3").innerHTML = inf[3];
		document.getElementById("q4").innerHTML = inf[4];
		localStorage.setItem('Page', Nstr);
		document.getElementById("Answer").innerHTML = " " + Nstr + "/7 ";
		if (Nstr > 7) {
			document.getElementById("last").style.display = "none";
			document.getElementById("next").style.display = "none";
			document.getElementById("radio").style.display = "none";
			document.getElementById("Answer").style.display = "none";
			document.getElementById("q0").innerHTML = "РЕЗУЛЬТАТЫ"
			Result();
		}
    }
	console.log(localStorage);
}


window.onload = function() {
	localStorage.clear()
	if (localStorage.length == 0) {
		localStorage.setItem('Page', 1);
		let inf = tipoJSON(1);
		document.getElementById("q0").innerHTML = inf[0];
		document.getElementById("q1").innerHTML = inf[1];
		document.getElementById("q2").innerHTML = inf[2];
		document.getElementById("q3").innerHTML = inf[3];
		document.getElementById("q4").innerHTML = inf[4];
		document.getElementById("Answer").innerHTML = " " + localStorage['Page'] +  "/7 ";
    }
};

function tipoJSON(N) {
	let N1 = ["Вам нужно спасти всего одного животного, кто это будет?", "Кролик", "Овца", "Олень","Лошадь"];
	let N2 = ["Вам выпал шанс, прожить жизнь животного, какого?", "Собака", "Кот", "Лошадь","Змея"];
	let N3 = ["Защищать животных и природу бесспорно нужно, но чисто гипотетически, какое животное, по Вашему мнению, лучше бы не существовало?", "Лев", "Змея", "Крокодил","Акула"];
	let N4 = ["Если бы у Вас была возможность, то какое животное Вы бы наделили речью?", "Овца", "Лошадь", "Кролик","Птица"];
	let N5 = ["Кто составит Вам компанию на необитаемом острове?", "Человек", "Свинья", "Корова","Птица"];
	let N6 = ["Кого из представленных существ Вы бы приручили?", "Динозавр", "Тигр", "Медведь","Леопард"];
	let N7 = ["В теле какого существа, Вы были бы не против оказаться всего на 5 минут?", "Лев", "Кот", "Лошадь","Голубь"];
	switch (N) {
		case 1:
			return N1;
		case 2:
			return N2;
		case 3:
			return N3;
		case 4:
			return N4;
		case 5:
			return N5;
		case 6:
			return N6;
		case 7:
			return N7;
		default:
			return 0;
	}
}

function Result() {
	let res = "<h3>Ваш ответ-человек, который понравился бы Вам в реальной жизни:</h3>";
	if (localStorage['Ans1'] == 1) {
		res += "Холодный как лед снаружи, но теплый внутри." ;
	}
	else if (localStorage.getItem('Ans1') == 2) {
		res += "Полслушный и неконфликтный." ;
	}
	else if (localStorage.getItem('Ans1') == 3) {
		res += "Элегантный и с хорошими манерами." ;
	}
	else if (localStorage.getItem('Ans1') == 4) {
		res += "Безудержный, свободолюбивый и свободный";
	}
	res += "<br><h3>Ваш ответ-то, какое качество в себе Вы цените больше всего:</h3>";
	if (localStorage.getItem('Ans2') == 1) {
		res += "Верность и преданность" ;
	}
	else if (localStorage.getItem('Ans2') == 2) {
		res += "Элегантность и изящность" ;
	}
	else if (localStorage.getItem('Ans2') == 3) {
		res += "Оптимизм";
	}
	else if (localStorage.getItem('Ans2') == 4) {
		res += "Гибкость" ;
	}
	res += "<br><h3>Ваш ответ-то, из-за чего Вы можете порвать с любимым человеком:</h3>";
	if (localStorage.getItem('Ans3') == 1) {
		res += "Надменность и высокомерное поведение" ;
	}
	else if (localStorage.getItem('Ans3') == 2) {
		res += "Ваш партнер слишком эмоционален и постоянно не в настроении, а вы не знаете как с этим бороться" ;
	}
	else if (localStorage.getItem('Ans3') == 3) {
		res += "Жестокость партнера";
	}
	else if (localStorage.getItem('Ans3') == 4) {
		res += "Ваш партнер такой человек, который пойдет по головам и не отсановится ни перед чем";
	}
	res += "<br><h3>Ваш ответ-то, какие отношения с любимым человеком Вас устроили бы больше всего:</h3>";
	if (localStorage.getItem('Ans4') == 1) {
		res += "Вы оба знаете, кто о чем думает ни говоря при этом не слова" ;
	}
	else if (localStorage.getItem('Ans4') == 2) {
		res += "Вы оба спокойно общаетесь на любые темы. У вас нет никаких секретов друг от друга" ;
	}
	else if (localStorage.getItem('Ans4') == 3) {
		res += "У вас очень теплые отношения. Вы всегда с любовью думаете и часто вспоминаете своего партнера";
	}
	else if (localStorage.getItem('Ans4') == 4) {
		res += "Ваша цель - долговременные отношения";
	}
	res += "<br><h3>Ваш ответ говорит о том, смогли бы Вы изменить любимому человеку:</h3>";
	if (localStorage.getItem('Ans5') == 1) {
		res += "Вероятнее всего, что нет" ;
	}
	else if (localStorage.getItem('Ans5') == 2) {
		res += "Вы не можете сопротивлятся своим желаниям и похоти, поэтому вероятнее всего, вы измените" ;
	}
	else if (localStorage.getItem('Ans5') == 3) {
		res += "Вы очень сдержаны в своих желаниях, поэтому вряд ли пойдете на измену";
	}
	else if (localStorage.getItem('Ans5') == 4) {
		res += "Для вас верность - пустой звук. Скорее всего вы могли бы изменить";
	}
	res += "<br><h3>Ваш ответ-то, как Вы относитесь к браку:</h3>";
	if (localStorage.getItem('Ans6') == 1) {
		res += "Вы абсолютный пессимист и вы считаете, что счастливый браков не существует" ;
	}
	else if (localStorage.getItem('Ans6') == 2) {
		res += "Для вас брак - это нечто драгоценное, когда вы поженитесь, вы будете высоко ценить брак и вторую половинку" ;
	}
	else if (localStorage.getItem('Ans6') == 3) {
		res += "Вы боитесь брака, потому что считаете, что он заберет вашу свободу";
	}
	else if (localStorage.getItem('Ans6') == 4) {
		res += "Вам всегда хотелось вступить в брак, но фактически, вы о браке ничего не знаете";
	}
	res += "<br><h3>Ваш ответ-то, как Вы относитесь к любви:</h3>";
	if (localStorage.getItem('Ans7') == 1) {
		res += "Вам всегда хочется упиваться любовью, вы готовы сделать всё для этого" ;
	}
	else if (localStorage.getItem('Ans7') == 2) {
		res += "Вам гораздо комфортнее, когда любят и обожают только вас, а подарить свою любовь вы сможете только избранному человеку" ;
	}
	else if (localStorage.getItem('Ans7') == 3) {
		res += "Вы готовы дарить любовь, но только при условии, что будете получать столько же от партнера";
	}
	else if (localStorage.getItem('Ans7') == 4) {
		res += "Для вас любовь - это равноправное отношение для двоих";
	}
	console.log(res);
	document.getElementById("resTest").innerHTML = res;
}