const obj = {
		name: 'Jason',
		age: 25
			}
		if (obj.name === 'Jason') {
			console.log('안녕, ' + obj.name);
		} 
		
		let name = 'Peter';
		if (name === 'Jason') {
			console.log('조건문 통과');
		} 
		
		console.log('1 === 1', 1 === 1);
		console.log('1 > 2', 1 > 2);
		const check = 'check';
		console.log("check === 'check'", check === 'check');
		console.log('check === 123', check === 123)
		const arr = [1, 2, 3];
		console.log('arr === [1, 2, 3]', arr === [1, 2, 3]);
	
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
		const targetDateInput = dateFormMaker();
		// console.log(targetDateInput);
		
		const nowDate = new Date();
		const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0); // 설정 날짜 - 날짜를 자정 기준으로 설정 
		const remaining = (targetDate - nowDate) / 1000; // 현재 날짜부터 설정 날짜까지 남은 초 (밀리초 / 1000)
		
		// remaining이 0이면 '타이머가 종료되었습니다.' 출력
		if (remaining <= 0) {
			console.log('타이머가 종료되었습니다.');
		} else if (isNaN(remaining)) { // 잘못된 날짜가 입력될 경우 '타이머가 종료되었습니다.' 출력'
			console.log('유효한 시간대가 아닙니다.')
		}
		
		const remainingDate = Math.floor(remaining / 3600 / 24); // (현재 날짜부터 설정 날짜까지 남은 초) / 시간 (= 3600초) / 날짜 (= 24시간)
		const remainingHours = Math.floor(remaining / 3600) % 24; // 현재 날짜부터 설정 날짜까지 남은 시간 중 date 제외, hours 값만	
		const remainingMin = Math.floor(remaining / 60) % 60;
		const remainingSec = Math.floor(remaining) % 60;
		
		console.log(remainingDate + '일', remainingHours + '시간', remainingMin + '분', remainingSec + '초');
};