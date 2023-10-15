"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import classNames from "classnames";


export default function MenuFooter({menu}) {
    
    const router = useRouter();

    return (
        <nav className='max-w-screen-xl mx-auto mt-8 pb-8 italic'>
            <ul className="flex flex-col lg:flex-row items-center gap-5 max-w-screen-lg mx-auto justify-center">
                {menu.items?.map((item) => {

                    const isActive =
                        router.asPath === item.url ||
                        `/${router.locale}${router.asPath === "/" ? "" : router.asPath}` ===
                        item.url ||
                        (item.url !== "/" ? router.asPath?.indexOf(item.url) === 0 : false)

                    return (
                        <li key={item.id}>
                            <Link href={item.url} className={classNames(
                                "text-[16px] flex border-b-transparent  transition-colors hover:text-primary no-underline mb-5 lg:mb-0",
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
        </nav>
    )
}

