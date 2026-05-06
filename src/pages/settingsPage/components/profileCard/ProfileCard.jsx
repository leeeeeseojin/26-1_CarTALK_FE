import Badge from '../../../../components/badge/Badge'
import Button from '../../../../components/button/Button'
import './ProfileCard.css'

export default function ProfileCard({
  nickname,
  status,
  isVerified,
  onEditProfile,
  onEditPersonal,
}) {
  return (
    <div className='profile-card'>
      {/* 아바타 */}
      <div className='profile-card__avatar' />

      {/* 정보 + 뱃지 */}
      <div className='profile-card__info-wrap'>
        <div className='profile-card__info'>
          <p className='profile-card__nickname'>{nickname}</p>
          <p className='profile-card__status'>{status}</p>
        </div>
        {isVerified && <Badge variant='verified' />}
      </div>

      {/* 버튼 묶음 */}
      <div className='profile-card__actions'>
        {/* [JS] onEditProfile 연결 */}
        <Button variant='outline' onClick={onEditProfile}>
          프로필 편집
        </Button>
        {/* [JS] onEditPersonal 연결 */}
        <Button variant='outline' onClick={onEditPersonal}>
          개인정보 편집
        </Button>
      </div>
    </div>
  )
}
