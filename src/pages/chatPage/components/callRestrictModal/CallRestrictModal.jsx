import './CallRestrictModal.css'

export default function CallRestrictModal() {
  return (
    <div className='callrestrict-toast'>
      {/* 경고 아이콘 — assets에 추가 필요 */}
      <img className='callrestrict-toast__icon' src='/src/assets/icons/warn.svg' alt='경고' />
      <p className='callrestrict-toast__text'>
        하루 통화 가능 횟수를 초과하여 더 이상 통화가 불가능합니다
      </p>
    </div>
  )
}
