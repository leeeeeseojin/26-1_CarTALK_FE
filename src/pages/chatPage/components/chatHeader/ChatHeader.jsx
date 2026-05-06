import Badge from '../../../../components/badge/Badge'
import Button from '../../../../components/button/Button'
import './ChatHeader.css'

export default function ChatHeader({
  plateNumber,
  nickname,
  isVerified,
  safeCallCount,
  onAvatarClick,
  onSafeCall,
  onComplete,
}) {
  return (
    <div className='chat-header'>
      <div className='chat-header__inner'>
        {/* 좌측 — 아바타 + 정보 */}
        <div className='chat-header__left'>
          {/* [JS] 아바타 클릭 시 차량 정보 모달 오픈 */}
          <div className='chat-header__avatar' onClick={onAvatarClick} />
          <div className='chat-header__body'>
            <div className='chat-header__info'>
              <span className='chat-header__plate'>{plateNumber}</span>
              {isVerified && <Badge variant='verified' />}
            </div>
            <span className='chat-header__nickname'>{nickname}</span>
          </div>
        </div>

        {/* 우측 — 버튼들 */}
        <div className='chat-header__buttons'>
          {/* [JS] 안심전화 onClick 연결 */}
          <Button variant='outline-dark' onClick={onSafeCall}>
            안심 전화 {safeCallCount}
          </Button>
          {/* [JS] 완료 onClick 연결 */}
          <Button variant='outline-dark' onClick={onComplete}>
            완료
          </Button>
        </div>
      </div>
    </div>
  )
}
