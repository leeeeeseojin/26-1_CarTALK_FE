import './SearchNoneModal.css'

export default function SearchNoneModal() {
  return (
    <div className='search-none-toast'>
      {/* 아이콘 — assets에 추가 필요 */}
      <img className='search-none-toast__icon' src='/src/assets/icons/warn.svg' alt='경고' />
      <p className='search-none-toast__text'>해당 차량을 찾을 수 없어요!</p>
    </div>
  )
}
