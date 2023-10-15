"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import classNames from "classnames";
import { useEffect } from 'react';
import { toggleMainMenu } from '../lib/utils';


export default function MainMenu({menus}) {
    const router = useRouter();

 
    useEffect(() => {
       toggleMainMenu()
    }, []);


    return (
        <nav className='max-w-screen-xl relative main-nav'>
            <ul className=" gap-5 flex-col 
            w-full top-[76px] h-screen fixed md:top-0  
            pl-4 md:pt-16 pt-7 z-50 bg-white items-menu hidden
            md:w-96 ">
                 {menus.items?.map((item) => {

                    const isActive =
                        router.asPath === item.url ||
                        `/${router.locale}${router.asPath === "/" ? "" : router.asPath}` ===
                        item.url ||
                        (item.url !== "/" ? router.asPath?.indexOf(item.url) === 0 : false)

                    return (
                        <li key={item.id}>
                            <Link href={item.url} className={classNames(
                                "text-xl flex border-b-transparent  transition-colors hover:text-primary no-underline hover:underline-offset-1",
                                {
                                    "border-b-primary": isActive,
                                }
                            )} passHref >
                                {item.title}
                            </Link>
                        </li>
                    )
                })} 
            </ul>
            <button className='button-menu' ></button>
        </nav>
    )
}
