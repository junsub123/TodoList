// 사용자 정보를 저장할 객체
const data = {
    users: [
      {
        username: 'user1',
        password: 'password1'
      },
      {
        username: 'user2',
        password: 'password2'
      }
    ],
    currentUser: null
  };
  
  // 로그인 폼 제출 이벤트 핸들러
  document.getElementById('login-form').addEventListener('submit', event => {
    event.preventDefault(); // 기본 동작 중지
    const username = event.target.username.value;
    const password = event.target.password.value;
    const user = data.users.find(user => user.username === username && user.password === password);
    if (user) {
      data.currentUser = user;
      window.history.back(); // 전 화면으로 돌아가기
    } else {
      alert('잘못된 사용자 이름 또는 비밀번호입니다.');
    }
  });
  