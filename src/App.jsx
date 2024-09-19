import Sidebar from './MG-Components/Sidebar'
import { Outlet } from 'react-router-dom'
import { SidebarStatePrvoider } from './MG-Components/SidebarState'

function App() {

  return (
    <>
      <SidebarStatePrvoider>
        <div className='grid lg:grid-cols-12'>
          <div className='grid lg:col-span-2 '>
            <Sidebar />
          </div>
          <div className='grid lg:col-span-10'>
            <Outlet />
          </div>
        </div>
      </SidebarStatePrvoider >
    </>
  )
}

export default App
