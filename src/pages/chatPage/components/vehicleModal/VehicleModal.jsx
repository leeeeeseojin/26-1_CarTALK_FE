import Badge from '../../../../components/badge/Badge'
import './VehicleModal.css'

export default function VehicleModal({
  plateNumber,
  nickname,
  type,
  note,
  status,
  isVerified,
  onClose,
}) {
  return (
    <div className='vehicle-modal__overlay'>
      <div className='vehicle-modal'>
        {/* 이미지 영역 */}
        <div className='vehicle-modal__image'>
          {isVerified && (
            <div className='vehicle-modal__badge'>
              <Badge variant='verified' />
            </div>
          )}
        </div>

        {/* 본문 */}
        <div className='vehicle-modal__body'>
          {/* 번호판 + 닉네임 */}
          <div className='vehicle-modal__id'>
            <p className='vehicle-modal__plate'>{plateNumber}</p>
            <p className='vehicle-modal__nickname'>{nickname}</p>
          </div>

          {/* 구분선 */}
          <div className='vehicle-modal__divider' />

          {/* 차량 정보 */}
          <div className='vehicle-modal__info'>
            <div className='vehicle-modal__info-row'>
              <span className='vehicle-modal__info-label'>차종</span>
              <span className='vehicle-modal__info-value'>{type}</span>
            </div>
            {note && (
              <div className='vehicle-modal__info-row'>
                <span className='vehicle-modal__info-label'>특이사항</span>
                <span className='vehicle-modal__info-value'>{note}</span>
              </div>
            )}
          </div>

          {/* 상태메시지 */}
          {status && <p className='vehicle-modal__status'>{status}</p>}
        </div>

        {/* 닫기 버튼 */}
        <div className='vehicle-modal__footer'>
          {/* [JS] onClose 연결 */}
          <button className='vehicle-modal__close-btn' onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </div>
  )
}
