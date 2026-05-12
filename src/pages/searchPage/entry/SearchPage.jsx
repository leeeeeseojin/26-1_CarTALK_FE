import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../../components/sidebar/Sidebar'
import ChatListItem from '../components/chatListItem/ChatListItem'
import SearchNoneModal from '../components/searchNoneModal/SearchNoneModal'
import AccidentGuide from '../components/accidentGuide/AccidentGuide'
import logoSrc from '../../../assets/logo/CarTALK.svg'
import './SearchPage.css'

export default function SearchPage() {
  const [searchValue, setSearchValue] = useState('')
  const [IS_SEARCH_NONE, SET_IS_SEARCH_NONE] = useState(false)

  const navigate = useNavigate()

  // [JS] 검색 핸들러 — API 연동 예정
  const handleSearch = () => {
    // [JS] 검색 결과 없으면 SET_IS_SEARCH_NONE(true)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  // [JS] 최근 채팅 목록 — 추후 API 연동
  const recentChats = [
    {
      id: 1,
      plateNumber: '12가 3456',
      lastMessage: '네 알겠습니다, 바로 뺄게요!',
      isVerified: true,
    },
    { id: 2, plateNumber: '98가 7654', lastMessage: '차 좀 빼주세요', isVerified: false },
    { id: 3, plateNumber: '01가 9283', lastMessage: '언제 내려오세요...', isVerified: true },
  ]

  return (
    <div className='search'>
      <Sidebar />

      <main className='search__main'>
        {/* 헤더 — 로고 + 검색바 */}
        <div className='search__header'>
          <img className='search__logo' src={logoSrc} alt='CarTALK' />

          <div className='search__bar'>
            <input
              className='search__input'
              type='text'
              placeholder='차량 번호를 검색하세요'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className='search__btn' onClick={handleSearch}>
              검색
            </button>
          </div>
        </div>

        <div className='search__divider' />

        {/* 최근 채팅 목록 */}
        <div className='search__recent'>
          <h2 className='search__recent-title'>최근 채팅 목록</h2>
          <div className='search__list'>
            {recentChats.map((chat) => (
              <ChatListItem
                key={chat.id}
                plateNumber={chat.plateNumber}
                lastMessage={chat.lastMessage}
                isVerified={chat.isVerified}
                onClick={() => navigate('/chat')}
              />
            ))}
          </div>
        </div>

        <div className='search__divider' />

        {/* 교통사고 대처요령 */}
        <div className='search__guide'>
          <h2 className='search__recent-title'>교통사고 대처요령</h2>
          <AccidentGuide />
        </div>
      </main>

      {/* 검색 결과 없음 토스트 */}
      {IS_SEARCH_NONE && <SearchNoneModal />}
    </div>
  )
}
