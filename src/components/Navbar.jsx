import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className='w-full py-6'>
            <ul className='w-full flex items-center justify-between text-white px-14'>
                <li className='flex gap-x-10 items-center'>
                    <div className='flex flex-col justify-center relative items-center '>
                        <div >
                            <img className='cursor-pointer' src="/group.svg" alt="" />
                        </div>
                    </div>
                    <Link className='hover:text-orange-600 duration-100 ease-linear ' href={'/'}>
                        Главная
                    </Link>
                    <Link className='hover:text-orange-600 duration-100 ease-linear' href={'/'}>
                        Фильмы
                    </Link>
                    <Link className='hover:text-orange-600 duration-100 ease-linear' href={'/'}>
                        Сериалы
                    </Link>
                    <Link className='hover:text-orange-600 duration-100 ease-linear' href={'/'}>
                        Мультфильмы
                    </Link>
                </li>
                <li>
                    <img className='cursor-pointer' src="/login.svg" alt="" />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar