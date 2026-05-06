import Badge from '../../../../components/badge/Badge'
import './VehicleModal.css'

export default function VehicleModal({
  plateNumber,
  nickname,
  type,
  note,
  status,
  isVerified,
  imageUrl,
  onClose,
}) {
  return (
    <div className='vehicle-modal__overlay'>
      <div className='vehicle-modal'>
        {/* 이미지 영역 — 사진 없으면 배경색(default), 있으면 이미지 표시 */}
        <div className='vehicle-modal__image'>
          {imageUrl && <img className='vehicle-modal__img' src={imageUrl} alt='차량 사진' />}
          {isVerified && (
            <div className='vehicle-modal__badge'>
              <Badge variant='verified' />
            </div>
          )}
        </div>

        <div className='vehicle-modal__body'>
          <div className='vehicle-modal__id'>
            <p className='vehicle-modal__plate'>{plateNumber}</p>
            <p className='vehicle-modal__nickname'>{nickname}</p>
          </div>

          <div className='vehicle-modal__divider' />

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

          {status && <p className='vehicle-modal__status'>{status}</p>}
        </div>

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
