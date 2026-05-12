import './ChatInputBar.css'

export default function ChatInputBar({ value, onChange, onSend, onPlus }) {
  const handleKeyDown = (e) => {
    // [JS] 엔터키로 전송
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSend?.()
    }
  }

  return (
    <div className='chat-input-bar'>
      {/* [JS] 파일 첨부 onClick 연결 */}
      <button className='chat-input-bar__plus' onClick={onPlus}>
        +
      </button>

      <input
        className='chat-input-bar__input'
        type='text'
        placeholder='메세지 입력'
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />

      {/* [JS] 전송 onClick 연결 */}
      <button className='chat-input-bar__send' onClick={onSend}>
        전송
      </button>
    </div>
  )
}
