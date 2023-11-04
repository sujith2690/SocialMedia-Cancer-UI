import React, { useState } from 'react'
import { MdOutlineMenuOpen } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import { BiBell } from 'react-icons/bi';
import { FaAngleDown } from 'react-icons/fa';
import profileImage from '../../public/images/User Profile.png'
import leftMenu from '../../public/images/line-md_menu-unfold-right.png'
import rightMenu from '../../public/images/line-md_menu-unfold-left.png'
const Navbar = ({ setMenu, menu }) => {
    const [drop, setDrop] = useState(false)
    const handleDropdown = () => {
        setDrop((prev) => !prev)
    }
    return (
        <div className="flex items-center justify-between px-4 py-4 bg-white border-b border-b-[#D9EAFF] h-14 w-full">
            <div className="hidden md:flex text-2xl cursor-pointer" >
                {menu ?
                    <img src={leftMenu} onClick={() => setMenu((prev) => !prev)} alt="" /> :
                    <img src={rightMenu} onClick={() => setMenu((prev) => !prev)} alt="" />
                }
            </div>
            <div className="hidden md:flex items-center justify-between p-2 px-4 gap-5 bg-[#FEF8FD] rounded-2xl text-2xl">
                <CiSearch />
                <input type="text" className="rounded bg-[#FEF8FD] outline-none text-sm w-80" placeholder="Search" />
            </div>
            <div className="hidden md:flex items-center justify-between w-56  mr-5 relative">
                <div className="relative">
                    <BiBell className=" text-2xl text-[#C31A7F]" />
                    <div className="w-3 h-3 bg-[#C31A7F] rounded-full absolute top-0 right-0"></div>
                </div>
                <img className="h-10" src={profileImage} alt="" />
                <p className="text-lg">Hi Ananya</p>
                <FaAngleDown className="text-lg" onClick={handleDropdown} />
                {drop && (
                    <div className="absolute mt-44 right-5 w-36 text-sm text-center bg-white border border-gray-300 rounded-md shadow-md text-[#A94360]">
                        <p className="p-2 hover:bg-[#A94360] hover:text-white w-full cursor-pointer" onClick={handleDropdown} >View Profile</p>
                        <p className="p-2 hover:bg-[#A94360] hover:text-white w-full cursor-pointer" onClick={handleDropdown} >Appointments</p>
                        <p className="p-2 hover:bg-[#A94360] hover:text-white w-full cursor-pointer" onClick={handleDropdown} >Health Record</p>
                        <p className="p-2 hover:bg-[#A94360] hover:text-white w-full cursor-pointer" onClick={handleDropdown} >Logout</p>
                    </div>
                )}
            </div>
            <div className="md:hidden flex justify-between px-3 w-full items-center">
                <div className="p-2 bg-[#C31A7F] bg-opacity-60 rounded-2xl">
                    <MdOutlineMenuOpen className="text-white text-3xl rotate-180" />
                </div>
                <p className="text-lg">Hi Ananya</p>
                <div className="relative p-2 bg-[#C31A7F] bg-opacity-60 rounded-2xl">
                    <BiBell className="text-white text-3xl" />
                    <div className="w-3 h-3 bg-[#C31A7F] rounded-full absolute top-2 right-3"></div>
                </div>
            </div>
        </div>

    )
}

export default Navbar