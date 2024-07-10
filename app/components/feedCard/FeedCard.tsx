import React from 'react'
import Image from 'next/image'
import { TbMessages } from 'react-icons/tb'
import { FaRegHeart, FaRetweet } from 'react-icons/fa'
import { MdOutlineFileUpload } from 'react-icons/md'

const FeedCard = () => {
  return (
    <div>
        <div className='grid grid-cols-12 p-4 border-b-2'>
            <div className='grid col-span-1 rounded-full'>
                <Image src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" alt='The image is not working' width={100} height={100}/>
            </div>
            <div className='grid col-span-11 mx-2'>
                <h1>Harshvardhan Yadav</h1>
                <p>This is a twitter clone and i am making this clone with the help of next.js and tailwind css hurryyy</p>
                <div className='flex justify-between p-2 text-xl cursor-pointer'>
                    <div> <TbMessages /></div>
                    <div> <FaRetweet /></div>
                    <div> <FaRegHeart /></div>
                    <div> <MdOutlineFileUpload /></div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default FeedCard