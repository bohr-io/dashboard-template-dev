import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'

const DashLayoutWrapper = styled.div`
  display: flex;
  gap: 30px;
  padding-right: 30px;
`

const DashLayout = () => {
  return (
    <DashLayoutWrapper>
      <Sidebar />
      <Outlet />
    </DashLayoutWrapper>
  )
}

export default DashLayout
