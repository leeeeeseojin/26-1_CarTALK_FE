import { useNavigate } from 'react-router-dom'
import Sidebar from '../../../components/sidebar/Sidebar'
import InputField from '../../../components/inputField/InputField'
import Button from '../../../components/button/Button'
import './VehicleEditPage.css'

export default function VehicleEditPage() {
  const navigate = useNavigate()

  return (
    <div className='vehicle-edit'>
      <Sidebar />

      <main className='vehicle-edit__main'>
        {/* 페이지 제목 */}
        <h1 className='vehicle-edit__title'>차량 정보 설정</h1>

        {/* 텍스트 인풋 섹션 */}
        <div className='vehicle-edit__section'>
          {/* 차량 번호 */}
          <div className='vehicle-edit__field'>
            <div className='vehicle-edit__field-label-row'>
              <span className='vehicle-edit__field-label'>차량 번호</span>
            </div>
            <InputField
              id='plate-number'
              type='text'
              name='plateNumber'
              placeholder='예) 12가 3456'
            />
          </div>

          {/* 차종 */}
          <div className='vehicle-edit__field'>
            <div className='vehicle-edit__field-label-row'>
              <span className='vehicle-edit__field-label'>차종</span>
            </div>
            <InputField
              id='vehicle-type'
              type='text'
              name='vehicleType'
              placeholder='예) 현대 아반떼 CN7'
            />
          </div>

          {/* 특이사항 (선택) */}
          <div className='vehicle-edit__field'>
            <div className='vehicle-edit__field-label-row'>
              <span className='vehicle-edit__field-label'>특이사항</span>
              <span className='vehicle-edit__field-optional'>선택</span>
            </div>
            <InputField
              id='vehicle-note'
              type='text'
              name='vehicleNote'
              placeholder='예) 앞 범퍼 스크래치'
            />
          </div>
        </div>

        <div className='vehicle-edit__divider' />

        {/* 차량 사진 업로드 (선택) */}
        <div className='vehicle-edit__upload-row'>
          <div className='vehicle-edit__upload-label'>
            <div className='vehicle-edit__field-label-row'>
              <span className='vehicle-edit__field-label'>차량 사진</span>
              <span className='vehicle-edit__field-optional'>선택</span>
            </div>
            <p className='vehicle-edit__upload-desc'>PDF, PNG, JPG 파일만 업로드 가능해요</p>
          </div>
          {/* [JS] 파일 업로드 연결 */}
          <Button variant='outline'>사진 업로드</Button>
        </div>

        <div className='vehicle-edit__divider' />

        {/* 차량 등록증 업로드 (선택) */}
        <div className='vehicle-edit__regist-section'>
          <div className='vehicle-edit__regist-row'>
            <div className='vehicle-edit__upload-label'>
              <div className='vehicle-edit__field-label-row'>
                <span className='vehicle-edit__field-label'>차량 등록증</span>
                <span className='vehicle-edit__field-optional'>선택</span>
              </div>
              <p className='vehicle-edit__upload-desc'>PDF, PNG, JPG 파일만 업로드 가능해요</p>
            </div>
            {/* [JS] 파일 업로드 연결 */}
            <Button variant='outline'>등록증 업로드</Button>
          </div>
          <span className='vehicle-edit__verified-notice'>
            ✓ 업로드 시 인증된 회원 라벨이 부여돼요
          </span>
        </div>

        <div className='vehicle-edit__divider' />

        {/* 하단 버튼 */}
        <div className='vehicle-edit__buttons'>
          {/* [JS] 취소 onClick 연결 */}
          <Button variant='ghost' onClick={() => navigate('/settings')}>
            취소
          </Button>
          {/* [JS] 저장 API 연결 */}
          <Button variant='primary'>저장</Button>
        </div>
      </main>
    </div>
  )
}
