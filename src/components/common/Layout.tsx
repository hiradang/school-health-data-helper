import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1
        className='text-3xl font-bold text-primary text-center cursor-pointer'
        onClick={() => navigate('')}
      >
        School Health Data Helper
      </h1>
      <div className='mt-4 mx-10'>
        <Outlet />
      </div>

      <div className='fixed bottom-0 left-0 right-0'>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
