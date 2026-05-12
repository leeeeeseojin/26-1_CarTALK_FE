import InputField from '../../../../components/inputField/InputField'
import Button from '../../../../components/button/Button'
import './PersonalSettingsModal.css'

export default function PersonalSettingsModal({ onClose }) {
  return (
    <div className='personal-modal__overlay'>
      <div className='personal-modal'>
        {/* 헤더 */}
        <div className='personal-modal__header'>
          <h2 className='personal-modal__title'>내 정보 설정</h2>
          <button className='personal-modal__close' type='button' onClick={onClose}>
            ✕
          </button>
        </div>

        {/* 인풋 필드들 */}
        <div className='personal-modal__fields'>
          <div className='personal-modal__field'>
            <label className='personal-modal__field-label'>이름</label>
            <InputField id='personal-name' type='text' name='name' placeholder='이름 입력' />
          </div>
          <div className='personal-modal__field'>
            <label className='personal-modal__field-label'>휴대폰 번호</label>
            <InputField
              id='personal-phone'
              type='tel'
              name='phone'
              placeholder='숫자 11자리 입력'
            />
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className='personal-modal__buttons'>
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
