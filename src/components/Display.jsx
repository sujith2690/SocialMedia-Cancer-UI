import React from 'react'
import profileImage from '../../public/images/User Profile.png'
import imageFile from '../../public/images/gallery.png'
import locationFile from '../../public/images/location.png'
import smileFile from '../../public/images/smile.png'
import vectorFile from '../../public/images/vector.png'
import postProfile from '../../public/images/postProfile.png'
import post from '../../public/images/post.png'
import like from '../../public/images/like.png'
import comment from '../../public/images/comment.png'
import send from '../../public/images/send.png'
import save from '../../public/images/save.png'
import group from '../../public/images/Group.png'


import { BsFillCaretDownFill, BsThreeDots } from 'react-icons/bs';
import { BiSolidChevronLeft, BiSolidChevronRight } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa';

const Display = () => {
    const dates = [
        { week: 'Mon', date: '09' },
        { week: 'Tue', date: '10' },
        { week: 'Wed', date: '11' },
        { week: 'Thu', date: '12' },
        { week: 'Fri', date: '13' },
        { week: 'Sat', date: '14' },
        { week: 'Sun', date: '15' },
    ]
    const coming = [
        { week: 'Mon', date: '09', name: 'Sierra Ferguson', time: '9.00 - 10.00' },
        { week: 'Tue', date: '10', name: 'Sierra Ferguson', time: '9.00 - 10.00' },
        { week: 'Wed', date: '11', name: 'Sierra Ferguson', time: '9.00 - 10.00' },
    ]
    return (
        <div className='bg-[#fff6fb] h-full flex justify-between px-14 py-8 overflow-hidden overflow-y-scroll gap-5'>
            <div className="flex-1">
                <div className='bg-white p-5 rounded-3xl border border-[#C31A7F] border-opacity-20 shadow-md '>
                    <div className='flex gap-5 mb-8'>
                        <img className="h-10" src={profileImage} alt="" />
                        <input type="text" className='border-none outline-none' placeholder='Write here...' />
                    </div>
                    <hr />
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-5 py-2'>
                            <img src={imageFile} alt="" />
                            <img src={locationFile} alt="" />
                            <img src={smileFile} alt="" />
                        </div>
                        <div className='right-0'>
                            <button className='bg-[#EFC319] bg-opacity-50 text-white px-5 py-1 rounded-lg text-sm'>Post</button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between mt-2  '>
                    <div className='space-x-2'>
                        <button className='bg-white text-sm rounded-2xl px-5 py-1 border border-[#C31A7F]'>Verified</button>
                        <button className='bg-white text-sm rounded-2xl px-5 py-1 border border-[#C31A7F]'>All</button>
                    </div>
                    <div className='bg-white text-sm rounded-2xl px-5 py-1 border border-[#C31A7F] flex gap-2 items-center '>
                        <img src={vectorFile} alt="" /> New <BsFillCaretDownFill className='text-[#C31A7F]' />
                    </div>
                </div>
                <div className='bg-white p-5 rounded-3xl border border-[#C31A7F] border-opacity-20  mt-2 shadow-md'>
                    <div className='flex justify-between'>
                        <div className='flex gap-5 mb-8 items-center'>
                            <img className="h-16" src={postProfile} alt="" />
                            <div className=''>
                                <p className='font-bold text-base'>Sierra Ferguson <span className='text-xs text-[#acacac]'>1 hour ago</span></p>
                                <p className='text-[#C31A7F] text-xs font-bold'>Cancer Fighter</p>
                            </div>
                        </div>
                        <div className='flex gap-5 mb-8 items-center'>
                            <BsThreeDots />
                            <IoMdClose />
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='text-lg font-bold'>Cancer Survivor Stories: Bethany</h1>
                        <p className='text-sm'>Bethany was running in a half marathon when she began to feel ill. She thought that her celiac disease may have flared up due to something she had eaten, but when she didn’t get better, she decided to see a doctor. What followed was a series of misdiagnoses........ Read more</p>
                        <div className='mt-2'>
                            <img className='object-contain' src={post} alt="" />
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-5 py-2'>
                                <img className='h-6' src={like} alt="" />
                                <img className='h-6' src={comment} alt="" />
                                <img className='h-6' src={send} alt="" />
                            </div>
                            <div className='flex gap-2'>
                                <img className='h-6' src={save} alt="" />
                                <p>save</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-2 hidden md:flex md:flex-col">
                <div className=' bg-white p-5 rounded-3xl border border-[#C31A7F] border-opacity-20 shadow-md '>
                    <p className='text-center font-bold'>What time is best suited for you <br /> to join the meeting?</p>
                    <div className='flex justify-around p-3 gap-3'>
                        <button className='bg-[#C31A7F] px-2 py-2 rounded-2xl text-white'>8:00 PM</button>
                        <button className='border border-[#C31A7F] px-2 py-2 rounded-2xl text-[#C31A7F]'>9:00 PM</button>
                        <button className='border border-[#C31A7F] px-2 py-2 rounded-2xl text-[#C31A7F]'>10:00 PM</button>
                    </div>
                    <div className='flex items-center justify-center gap-3'>
                        <div className="w-3 h-3 bg-[#C31A7F] rounded-full "></div>
                        <div className="w-3 h-3 bg-[#E7E7E7] rounded-full "></div>
                        <div className="w-3 h-3 bg-[#E7E7E7] rounded-full "></div>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-[#D4F1FF] to-[#FFFFFF] rounded-3xl flex flex-col items-center justify-center p-3 mt-5 shadow-md'>
                    <img src={group} alt="" />
                    <p>Help <span className='text-[#C31A7F]'>CAN</span> grow more</p>
                    <p className='text-sm'>By contributing you’ll be helping this platform to <br /> grow more and reach out to all those who are in need</p>
                    <button className='bg-gradient-to-r from-[#EBD77C] to-[#EEB6BC] p-5 rounded-2xl text-black'>
                        <span className='font-bold'> Donate Us</span>
                    </button>

                </div>


                <div className='bg-white rounded-3xl p-5 mt-5 shadow-md'>
                    <div className='flex  items-center text-lg justify-between'>
                        <p>May 2023</p>
                        <div className='flex'>
                            <p><BiSolidChevronLeft /> </p>
                            <p><BiSolidChevronRight /></p>
                        </div>
                    </div>
                    <div className='flex gap-2 text-center items-center justify-between mb-5'>
                        {dates.map((item, i) => {
                            return (
                                <div key={i} className={`${i === 0 ? 'bg-[#f7e9b2] p-2 rounded-md' : ''}`} >
                                    <p className={`  ${i === 0 ? 'text-black font-bold' : 'text-[#7E7E7E]'}  `}>{item.week}</p>
                                    <p className='text-black'>{item.date}</p>
                                </div>
                            )
                        })}
                    </div>
                    <hr />
                    <div className='flex justify-between p-2'>
                        <p className='text-black '>Upcoming</p>
                        <p className='text-[#C4C4C4]'>Appointment</p>
                        <p className='text-[#C4C4C4]'>Medicines</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        {coming.map((item, i) => {
                            return (
                                <div className='flex items-center text-center justify-between gap-4'> {/* Increase gap value */}
                                    <div className='text-center'>
                                        <p>{item.week}</p>
                                        <p>{item.date}</p>
                                    </div>
                                    <div className='bg-[#F5F5F5] text-center flex '>
                                        <div className="w-1 bg-[#C31A7F] h-12 mr-2"></div>
                                        <div className=''>
                                            <p>{item.name}</p>
                                            <div className='flex text-center items-center'>
                                                <p>{item.time}</p>
                                                <div className="w-1 h-1 ml-2 bg-[#7E7E7E] rounded-full "></div>
                                                <p>Team can</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className='text-center '>
                            <div className='flex items-center justify-center h-full'>
                                <button className='px-5 py-2 bg-[#f3d1e5] rounded-2xl font-semibold flex items-center gap-2'>
                                    View All Schedule
                                    <FaAngleDown />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Display