  // 회원가입 폼 제출 이벤트 핸들러
  document.getElementById('signup-form').addEventListener('submit', event => {
    event.preventDefault(); // 기본 동작 중지
    const username = event.target['new-username'].value;
    const password = event.target['new-password'].value;
    data.users.push({ username, password });
    alert('회원가입이 완료되었습니다. 로그인해주세요.');
  });