import InputField from '../../../../components/inputField/InputField'
import Button from '../../../../components/button/Button'
import './ProfileSettingsModal.css'

export default function ProfileSettingsModal({ onClose }) {
  return (
    <div className='profile-modal__overlay'>
      <div className='profile-modal'>
        {/* 헤더 */}
        <div className='profile-modal__header'>
          <h2 className='profile-modal__title'>프로필 설정</h2>
          <button className='profile-modal__close' type='button' onClick={onClose}>
            ✕
          </button>
        </div>

        {/* 사진 업로드 */}
        <div className='profile-modal__photo-row'>
          <div className='profile-modal__photo-label'>
            <p className='profile-modal__photo-title'>프로필 사진</p>
            <p className='profile-modal__photo-desc'>PDF, PNG, JPG 파일만 업로드 가능해요</p>
          </div>
          {/* [JS] 파일 업로드 연결 */}
          <Button variant='outline'>사진 업로드</Button>
        </div>

        {/* 구분선 */}
        <div className='profile-modal__divider' />

        {/* 인풋 필드들 */}
        <div className='profile-modal__fields'>
          <div className='profile-modal__field'>
            <label className='profile-modal__field-label'>닉네임</label>
            <InputField
              id='profile-nickname'
              type='text'
              name='nickname'
              placeholder='닉네임 입력'
            />
          </div>
          <div className='profile-modal__field'>
            <label className='profile-modal__field-label'>상태메세지</label>
            <InputField
              id='profile-status'
              type='text'
              name='status'
              placeholder='상태메세지 입력'
            />
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className='profile-modal__buttons'>
          {/* [JS] 취소 onClick 연결 */}
          <Button variant='ghost' onClick={onClose}>
            취소
          </Button>
          {/* [JS] 저장 API 연결 */}
          <Button variant='primary'>저장</Button>
        </div>
      </div>
    </div>
  )
}
