import React, { ReactNode } from 'react'
import { CgProfile } from 'react-icons/cg';
import { CiSearch } from 'react-icons/ci';
import { FaHome } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IoIosMore, IoIosNotificationsOutline } from 'react-icons/io';
import { SiAmazonapigateway, SiGooglemessages } from 'react-icons/si';
import { TiGroup } from 'react-icons/ti';

const Sidebar = () => {
    interface SidebarMenuTypes  {
        id: number,
        title: String,
        icon: React.ReactNode
    }
    const SidebarMenu: SidebarMenuTypes[] = [
        {
            id: 1,
            title: 'HOME',
            icon: <FaHome />
        },
        {
            id: 2,
            title: 'Explore',
            icon: <CiSearch />
        },
        {
            id: 3,
            title: 'Notifications',
            icon: <IoIosNotificationsOutline />
        },
        {
            id: 4,
            title: 'Messages',
            icon: <SiGooglemessages />
        },
        {
            id: 5,
            title: 'Grok',
            icon: <SiAmazonapigateway />
        },
        {
            id: 6,
            title: 'Communities',
            icon: <TiGroup />
        },
        {
            id: 7,
            title: 'Profile',
            icon: <CgProfile />
        },
        {
            id: 8,
            title: 'More',
            icon: <IoIosMore />
        }

    ]
   return (
    <div>
        <div className='text-2xl pl-16 mt-5'>
        <FaSquareXTwitter />

        </div>
        
        <ul className='p-4'>
        {
            SidebarMenu.map((items) => {
                return (
                <li key={items.id} className='flex items-center gap-2 mx-5 text-2xl cursor-pointer hover:bg-gray-500 rounded-md p-2'>
                    {items.icon}
                    <span className='text-sm'>{items.title}</span>  
                </li>
                
            )
            })
        }

        </ul>
        <button className='bg-blue-500 rounded-md mx-8 px-8 text-xl text-white '>Post</button>
        
    </div>
  )
}

export default Sidebar;