const messageContainer = document.querySelector('#d-day-message');
const container = document.querySelector('#d-day-container');


container.style.display = 'none'; // div가 존재하나 없는 것처럼 보이게 됨
messageContainer.innerHTML = '<h3>D-Day를 입력해 주세요.</h3>'; // .html 속성을 직접 사용 가능
// messageContainer.style.color = 'red';

// messageContainer.textContent = 'D-Day를 입력해 주세요.';

const dateFormMaker = function() {
const inputYear = document.querySelector('#target-year-input').value;
const inputMonth = document.querySelector('#target-month-input').value;
const inputDate = document.querySelector('#target-date-input').value;
// console.log(document.querySelector('#target-year-input').value); // id를 참조하면 #, 클래스를 참조하면 . 사용
// console.log(document.querySelector('#target-month-input').value);
// console.log(document.querySelector('#target-date-input').value);
	 
// const dateFormat = inputYear + '-' +inputMonth + '-' + inputDate;
const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;

// console.log(inputYear, inputMonth, inputDate);
return dateFormat;
}

const counterMaker = function() {
	// const messageContainer = document.querySelector('#d-day-message');
	// console.log(messageContainer);
	// console.log(document.querySelector('#d-day-message'));
	// messageContainer.textContent = 'D-Day를 입력해 주세요.';
	
	const targetDateInput = dateFormMaker();
	// console.log(targetDateInput);
	const nowDate = new Date();
	const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0); // 설정 날짜 - 날짜를 자정 기준으로 설정 
	const remaining = (targetDate - nowDate) / 1000; // 현재 날짜부터 설정 날짜까지 남은 초 (밀리초 / 1000)
	
	
	// remaining이 0이면 '타이머가 종료되었습니다.' 출력
	if (remaining <= 0) {
		console.log('타이머가 종료되었습니다.');
		messageContainer.innerHTML = '<h3>타이머가 종료되었습니다.</h3>'
	} else if (isNaN(remaining)) { // 잘못된 날짜가 입력될 경우 '타이머가 종료되었습니다.' 출력'
		console.log('유효한 시간대가 아닙니다.')
		messageContainer.innerHTML = '<h3>유효한 시간대가 아닙니다.</h3>'
	}
	
	// const remainingDate = Math.floor(remaining / 3600 / 24); // (현재 날짜부터 설정 날짜까지 남은 초) / 시간 (= 3600초) / 날짜 (= 24시간)
	// const remainingHours = Math.floor(remaining / 3600) % 24; // 현재 날짜부터 설정 날짜까지 남은 시간 중 date 제외, hours 값만	
	// const remainingMin = Math.floor(remaining / 60) % 60;
	// const remainingSec = Math.floor(remaining) % 60;
	
	const remainingObj = {
		remainingDate: Math.floor(remaining / 3600 / 24),
		remainingHours: Math.floor(remaining / 3600) % 24,
		remainingMin:  Math.floor(remaining / 60) % 60,
		remainingSec: Math.floor(remaining) % 60
	}
	
	// const days = document.getElementById('days'); 
	// const hours = document.querySelector('#hours');
	// const min = document.querySelector('#min');
	// const sec = document.querySelector('#sec');
	// console.log(days, hours, min, sec);
	

	
	const documentArr = ['days', 'hours', 'min', 'sec'];
	const timeKeys = Object.keys(remainingObj); // ['remainingDate'] , ['remainingHours'], ... 
	// const docKeys = Object.keys(documentObj); // 아래 for (let key in documentObj) ~ 로 대체
	// console.log(timeKeys, docKeys);
	
	let i1 = 0;
	for (let tag of documentArr) {
		// console.log(tag); // days hours min sec
		document.getElementById(tag).textContent = remainingObj[timeKeys[i1]];
		i1++;
	}
	
	const documentObj = {
		days: document.getElementById('days'), // # 사용하지 않고 id명만 사용 가능
		hours: document.querySelector('#hours'), 
		min: document.querySelector('#min'),
		sec: document.querySelector('#sec')
	}
	
	/*
	for (let i = 0; i < timeKeys.length; i += 1) {
		documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]]; // 아래 4줄을 반복문으로 요약
	}
	
	// documentObj['days'].textContent = remainingObj['remainingDate'];
	// documentObj['hours'].textContent = remainingObj['remainingHours'];
	// documentObj['min'].textContent = remainingObj['remainingMin'];
	// documentObj['sec'].textContent = remainingObj['remainingSec'];
	*/
	
	let i = 0;
	for (let key in documentObj) { // for-in: index 순환
		// console.log(key); // days, hours, min, sec
		// console.log(documentObj[key], key);
		documentObj[key].textContent = remainingObj[timeKeys[i]];
		i += 1; 
	}
	
	// console.log(days);
	console.log(days.textContent + '일', hours.textContent + '시간', min.textContent + '분', sec.textContent + '초');
};