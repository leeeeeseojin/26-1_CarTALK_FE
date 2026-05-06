import { useState } from 'react'
import Sidebar from '../../../components/sidebar/Sidebar'
import ChatHeader from '../components/chatHeader/ChatHeader'
import ChatBubble from '../components/chatBubble/ChatBubble'
import ChatInputBar from '../components/chatInputBar/ChatInputBar'
import VehicleModal from '../components/vehicleModal/VehicleModal'
import SafeCallModal from '../components/safeCallModal/SafeCallModal'
import CallRestrictModal from '../components/callRestrictModal/CallRestrictModal'
import chatNoneIcon from '../../../assets/chat/chat-none.svg'
import './ChatPage.css'

export default function ChatPage() {
  // [JS] 모달 상태 관리
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false)
  const [isSafeCallModalOpen, setIsSafeCallModalOpen] = useState(false)
  const [IS_CALL_RESTRICT_OPEN, SET_IS_CALL_RESTRICT_OPEN] = useState(false)
  const [inputValue, setInputValue] = useState('')

  // [JS] 완료 버튼 클릭 시 채팅 종료 — chatPage_none으로 전환
  const [isChatActive, setIsChatActive] = useState(true)

  // [JS] 채팅 메시지 목록 — 추후 API 연동
  const messages = [
    { id: 1, type: 'other', text: '주차 자리 빼주실 수 있나요?' },
    { id: 2, type: 'mine', text: '네! 바로 내려갈게요' },
    { id: 3, type: 'other', text: '언제쯤 오시나요' },
    { id: 4, type: 'mine', text: '가고 있어요' },
  ]

  // [JS] 전송 핸들러
  const handleSend = () => {
    if (!inputValue.trim()) return
    // [JS] 메시지 전송 API 연동 예정
    setInputValue('')
  }

  // [JS] 안심전화 핸들러
  const handleSafeCall = () => {
    // [JS] 잔여 횟수 0이면 callRestrict 토스트, 아니면 safecall 모달
    setIsSafeCallModalOpen(true)
  }

  // [JS] 완료 핸들러 — 채팅 종료 후 none 화면으로
  const handleComplete = () => {
    setIsChatActive(false)
  }

  if (!isChatActive) {
    return (
      <div className='chat'>
        <Sidebar />
        <div className='chat__none'>
          <div className='chat__none-inner'>
            <img className='chat__none-icon' src={chatNoneIcon} alt='' />
            <div className='chat__none-text'>
              <p className='chat__none-line'>아직 대화가 없어요</p>
              <p className='chat__none-line'>검색에서 차량을 찾아 채팅을 시작해보세요</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='chat'>
      <Sidebar />

      <div className='chat__main'>
        {/* 채팅 헤더 */}
        {/* [JS] 유저 정보 API 연동 후 props 교체 */}
        <ChatHeader
          plateNumber='12가 3456'
          nickname='닉네임은 드라이버'
          isVerified={true}
          safeCallCount='1/3'
          onAvatarClick={() => setIsVehicleModalOpen(true)} // [JS] 아바타 클릭 → 차량 정보 모달
          onSafeCall={handleSafeCall} // [JS] 안심전화 클릭
          onComplete={handleComplete} // [JS] 완료 → none 화면 전환
        />

        {/* 채팅방 */}
        <div className='chat__room'>
          {messages.map((msg) => (
            <ChatBubble key={msg.id} type={msg.type} text={msg.text} imageUrl={msg.imageUrl} />
          ))}
        </div>

        {/* 인풋바 */}
        <ChatInputBar
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // [JS] 입력값 업데이트
          onSend={handleSend} // [JS] 전송 연결
          onPlus={() => {}} // [JS] 파일 첨부 연결
        />
      </div>

      {/* 차량 정보 모달 */}
      {isVehicleModalOpen && (
        <VehicleModal
          plateNumber='12가 3456'
          nickname='닉네임은드라이버'
          type='현대 아반떼 CN7'
          note='원래 범퍼에 스크래치가 있습니다'
          status='주차 중이에요'
          isVerified={true}
          onClose={() => setIsVehicleModalOpen(false)} // [JS] 닫기 연결
        />
      )}

      {/* 안심전화 모달 */}
      {isSafeCallModalOpen && (
        <SafeCallModal
          onConfirm={() => setIsSafeCallModalOpen(false)} // [JS] 통화 시작 API 연결
          onClose={() => setIsSafeCallModalOpen(false)} // [JS] 닫기 연결
        />
      )}

      {/* 통화 제한 토스트 */}
      {IS_CALL_RESTRICT_OPEN && (
        <CallRestrictModal onClose={() => SET_IS_CALL_RESTRICT_OPEN(false)} />
      )}
    </div>
  )
}
