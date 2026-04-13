import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import InputField from '../../../components/inputField/InputField'
import Button from '../../../components/button/Button'
import './SignupPage.css'

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [verifyCode, setVerifyCode] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  
  const navigate = useNavigate();

  //이메일 인증코드 발송 기능
  const handleSendCode = async () => {
    if (!email) {
      alert('이메일을 먼저 입력해 주세요.');
      return;
    }
    try {
      const response = await axios.post('/api/auth/code', { email: email });
      alert(response.data.message || '인증 코드가 발송되었습니다.');
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data?.message || '발송에 실패했습니다.';
        alert(errorMessage);
      } else {
        alert('서버와 연결할 수 없습니다.');
      }
    }
  };
  //인증코드 확인 로직
  const handleVerifyCode = async () => {
    //코드를 안 적었거나 6자리가 아닐 때 방어
    if (!verifyCode || verifyCode.length !== 6) {
      alert('6자리 인증코드를 정확히 입력해 주세요.');
      return;
    }

    try {
      const response = await axios.post('/api/auth/verify', {
        email: email,
        code: verifyCode 
      });

      //성공 시 응답
      alert(response.data.message || '인증 코드가 확인되었습니다.');

    } catch (error) {
      //실패(400 에러) 시 응답
      if (error.response) {
        const errorMessage = error.response.data?.message || '인증에 실패했습니다.';
        alert(errorMessage);
        setVerifyCode('');
      } else {
        alert('서버와 연결할 수 없습니다.');
      }
    }
  };
  const handleSignup = async (e) => {
    e.preventDefault(); // 새로고침 방지

    //프론트엔드 자체 유효성 검사
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      //Request Body
      const response = await axios.post('/api/user/signup', {
        email: email,
        password: password
      });

      //성공 시 처리
      alert(response.data.message || '회원가입이 완료되었습니다!');
      navigate('/login');

    } catch (error) {
      //에러 발생 시 처리
      if (error.response) {
        const status = error.response.status;
        const errorMessage = error.response.data?.error || '회원가입에 실패했습니다.';

        if (status === 400) {
          //400 에러: 이미 존재하는 이메일일 경우
          alert(errorMessage); 
        } else {
          //기타 상태 코드 에러
          alert(errorMessage);
        }
      } else {
        alert('서버와 연결할 수 없습니다.');
      }
    }
  };
  return (
    <main className='signup'>
      <div className='signup__wrap'>
        {/* 로고 */}
        <h1 className='signup__brand'>CarTALK</h1>

        {/* 회원가입 카드 */}
        <form className='signup__card' aria-label='회원가입'>
          <h2 className='signup__title'>이메일로 가입하기</h2>
          <p className='signup__subtitle'>이메일을 인증하고 비밀번호를 설정해 주세요</p>

          {/* 이메일 인증 */}
          <div className='signup__row'>
            <InputField
              id='email'
              type='email'
              name='email'
              placeholder='email@example.com'
              autoComplete='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button variant='primary' size='sm' type='button' width='90px' onClick={handleSendCode}>
            
              이메일 인증
            </Button>
          </div>

          {/* 인증코드 */}
          <div className='signup__field'>
            <div className='signup__row'>
              <InputField
                id='verifyCode'
                type='text'
                name='verifyCode'
                placeholder='인증코드 6자리'
                required
                value={verifyCode}
                onChange={(e) => setVerifyCode(e.target.value)}
              />
              <Button variant='primary' size='sm' type='button' width='90px' onClick={handleVerifyCode}>
                확인
              </Button>
            </div>
            <p className='signup__hint'>이메일로 발송된 6자리 인증코드를 입력해 주세요</p>
          </div>

          {/* 비밀번호 */}
          <div className='signup__field'>
            <InputField
              id='password'
              type='password'
              name='password'
              placeholder='8자 이상 입력'
              autoComplete='new-password'
              required
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <p className='signup__hint'>영문, 숫자 포함 8자 이상</p>
          </div>

          {/* 비밀번호 재입력 */}
          <InputField
            id='passwordConfirm'
            type='password'
            name='passwordConfirm'
            placeholder='비밀번호 재입력'
            autoComplete='new-password'
            required
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)} 
          />

          {/* 가입 완료 버튼 */}
          <Button variant='primary' size='md' type='submit'>
            가입 완료
          </Button>
        </form>
      </div>
    </main>
  )
}
