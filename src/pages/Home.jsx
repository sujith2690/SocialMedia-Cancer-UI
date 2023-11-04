import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Display from '../components/Display'

const Home = () => {
    const [menu, setMenu] = useState(false)
    console.log(menu, '----menu')
    return (
        // <div className='flex'>
        //     <div><p>Sidebar</p></div>
        //     <div className='flex flex-col flex-1'>
        //         <div className='w-full bg-black'><p>nav</p></div>
        //         <div className='w-full bg-red-500'><p>post</p></div>
        //     </div>
        // </div>


        <div className=' h-screen flex w-full bg-[#FEF8FD]'>
            <Sidebar menu={menu} />
            <div className="flex flex-col flex-1">
                <Navbar setMenu={setMenu} menu={menu} />
                <Display />
            </div>
        </div>
    )
}

export default Home