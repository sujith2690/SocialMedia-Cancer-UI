import React from 'react'
import can from '../../public/images/CAN.png'
import logo from '../../public/images/logo.png'
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineGroups2 } from 'react-icons/md';
import { BsChat, BsClipboardPlus, BsWindowPlus } from 'react-icons/bs';
import { FaRegPenToSquare } from 'react-icons/fa6';
import { SlCalender } from 'react-icons/sl';
import { GiMedicines } from 'react-icons/gi';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

const Sidebar = ({ menu }) => {
    const icons = [
        { icon: <AiOutlineHome />, name: 'Feeds' },
        { icon: <MdOutlineGroups2 />, name: 'Meeting' },
        { icon: <BsChat />, name: 'Chat' },
        { icon: <FaRegPenToSquare />, name: 'Create Post' },
        { icon: <BsClipboardPlus />, name: 'Health Record' },
        { icon: <BsWindowPlus />, name: 'Health Card' },
        { icon: <SlCalender />, name: 'Appointments' },
        { icon: <GiMedicines />, name: 'Medicines' },

    ];

    return (
        <div className={`${menu ? 'w-60' : 'w-24'} hidden bg-white  md:flex flex-col justify-between border-r border-r-[#D9EAFF]`}>
            <div className="">
                <div className={` ${menu ? 'flex' : 'flex flex-col'} items-center p-1`}>
                    <img src={logo} alt="" />
                    <img src={can} className='w-10 h-5' alt="" />
                </div>
                <hr />
                <div className='flex flex-col mt-5'>
                    {icons.map((item, i) => {
                        return (
                            <div key={i} className={`text-[#C31A7F] w-full flex items-center px-8 py-3 text-xl cursor-pointer ${i === 0 ? 'bg-[#EFC319] bg-opacity-20 border-l-4 border-l-[#C31A7F]' : ''}`}>
                                {item.icon}
                                {menu ? <span className="ml-2 text-sm text-black">{item.name}</span> : ''}

                            </div>

                        )
                    })}
                </div>
            </div>

            <div className='p-3 bg-[#F5F5F5]'>
                <div className="flex items-center ml-5 text-xl bottom-0">
                    <HiOutlineMenuAlt1 className='text-[#C31A7F]' />
                    {menu ? <span className="ml-2 text-sm text-black">Show More</span> : ''}

                </div>
            </div>

        </div>
    )
}

export default Sidebar