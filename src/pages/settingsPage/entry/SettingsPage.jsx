import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../../components/sidebar/Sidebar'
import ProfileCard from '../components/profileCard/ProfileCard'
import { VehicleCard, VehicleAddCard } from '../components/vehicleCard/VehicleCard'
import ProfileSettingsModal from '../components/profileSettingsModal/ProfileSettingsModal'
import PersonalSettingsModal from '../components/personalSettingsModal/PersonalSettingsModal'
import './SettingsPage.css'

export default function SettingsPage() {
  // [JS] 모달 열기/닫기 상태 관리
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  const [isPersonalModalOpen, setIsPersonalModalOpen] = useState(false)

  // [JS] 차량 편집 모드 상태
  const [isVehicleEditing, setIsVehicleEditing] = useState(false)

  const navigate = useNavigate()

  // [JS] 차량 목록 — 추후 API 연동
  const vehicles = [
    {
      id: 1,
      plateNumber: '12가 3456',
      type: '현대 아반떼 CN7',
      note: '원래 범퍼에 스크래치가 있습니다',
      isVerified: true,
    },
    {
      id: 2,
      plateNumber: '12가 3456',
      type: '현대 아반떼 CN7',
      note: '원래 범퍼에 스크래치가 있습니다',
      isVerified: true,
    },
  ]

  // [JS] 차량 저장 — 변경사항 저장 API 연동 예정
  const handleVehicleSave = () => {
    setIsVehicleEditing(false)
  }

  return (
    <div className='settings'>
      <Sidebar />

      <main className='settings__main'>
        {/* 페이지 제목 */}
        <h1 className='settings__title'>프로필 설정</h1>

        {/* 프로필 카드 */}
        {/* [JS] 유저 정보 API 연동 후 props 교체 */}
        <ProfileCard
          nickname='닉네임은드라이버'
          status='주차 중이에요'
          isVerified={true}
          onEditProfile={() => setIsProfileModalOpen(true)} // [JS] 모달 열기
          onEditPersonal={() => setIsPersonalModalOpen(true)} // [JS] 모달 열기
        />

        <div className='settings__divider' />

        {/* 내 차량 헤더 */}
        <div className='settings__vehicle-header'>
          <h2 className='settings__vehicle-title'>내 차량</h2>
          {isVehicleEditing ? (
            // [JS] 차량 저장 클릭 — 편집 모드 해제 + 저장 API 연결
            <button className='settings__vehicle-save' onClick={handleVehicleSave}>
              차량 저장
            </button>
          ) : (
            // [JS] 차량 편집 클릭 — 편집 모드 활성화
            <button className='settings__vehicle-edit' onClick={() => setIsVehicleEditing(true)}>
              차량 편집
            </button>
          )}
        </div>

        {/* 차량 카드 목록 */}
        <div className='settings__vehicle-list'>
          {vehicles.map((v) => (
            <VehicleCard
              key={v.id}
              plateNumber={v.plateNumber}
              type={v.type}
              note={v.note}
              isVerified={v.isVerified}
              isEditing={isVehicleEditing}
              onClick={() => navigate('/vehicle-edit')} // [JS] vehicleEditPage로 이동
            />
          ))}
          {/* 편집 모드에서만 차량 추가 카드 표시 */}
          {isVehicleEditing && (
            <VehicleAddCard onClick={() => navigate('/vehicle-edit')} /> // [JS] vehicleEditPage로 이동
          )}
        </div>
      </main>

      {/* 프로필 설정 모달 */}
      {isProfileModalOpen && <ProfileSettingsModal onClose={() => setIsProfileModalOpen(false)} />}

      {/* 개인정보 설정 모달 */}
      {isPersonalModalOpen && (
        <PersonalSettingsModal onClose={() => setIsPersonalModalOpen(false)} />
      )}
    </div>
  )
}
