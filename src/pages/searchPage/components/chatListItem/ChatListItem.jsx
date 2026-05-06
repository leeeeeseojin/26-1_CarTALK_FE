import Badge from '../../../../components/badge/Badge'
import './ChatListItem.css'

export default function ChatListItem({ plateNumber, lastMessage, isVerified, onClick }) {
  return (
    // [JS] onClick 연결 — 채팅방으로 이동
    <div className='chat-list-item' onClick={onClick}>
      <div className='chat-list-item__avatar' />
      <div className='chat-list-item__body'>
        <div className='chat-list-item__info'>
          <span className='chat-list-item__plate'>{plateNumber}</span>
          <Badge variant={isVerified ? 'verified' : 'unverified'} />
        </div>
        <p className='chat-list-item__last-msg'>{lastMessage}</p>
      </div>
    </div>
  )
}
