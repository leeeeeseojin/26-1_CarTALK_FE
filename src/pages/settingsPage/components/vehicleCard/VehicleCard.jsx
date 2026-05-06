import Badge from '../../../../components/badge/Badge'
import './VehicleCard.css'

export function VehicleCard({ plateNumber, type, note, isVerified }) {
  return (
    <div className='vehicle-card'>
      {/* 이미지 영역 */}
      <div className='vehicle-card__image'>
        {isVerified && (
          <div className='vehicle-card__badge'>
            <Badge variant='verified' />
          </div>
        )}
      </div>

      {/* 본문 */}
      <div className='vehicle-card__body'>
        <p className='vehicle-card__plate'>{plateNumber}</p>
        <div className='vehicle-card__divider' />
        <div className='vehicle-card__info'>
          <div className='vehicle-card__info-row'>
            <span className='vehicle-card__info-label'>차종</span>
            <span className='vehicle-card__info-value'>{type}</span>
          </div>
          {note && (
            <div className='vehicle-card__info-row'>
              <span className='vehicle-card__info-label'>특이사항</span>
              <span className='vehicle-card__info-value'>{note}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function VehicleAddCard({ onClick }) {
  return (
    // [JS] onClick 연결
    <div className='vehicle-add-card' onClick={onClick}>
      <div className='vehicle-add-card__inner'>
        <span className='vehicle-add-card__plus'>+</span>
        <span className='vehicle-add-card__label'>차량 추가</span>
      </div>
    </div>
  )
}
