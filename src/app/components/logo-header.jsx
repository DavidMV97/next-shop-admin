"use client"

import { useThemeContext } from "../context/context-global";
import Image from "next/image";
import { absoluteUrl } from '../lib/utils';
import defaultLogo from '../images/logo.png';
import Link from 'next/link';


export default function LogoHeader({ logo }) {

    const { brand, setBrand } = useThemeContext();

    setBrand(logo);

    //console.log(brand[0].field_block_imagen?.uri?.url);

    console.log(absoluteUrl(brand[0].field_block_imagen?.uri?.url));

    return (
        <div>
            {
                brand?.length ? (
                    <figure>
                        <Link href='/'>
                            {brand[0].field_block_imagen?.uri?.url && (
                                <Image className='w-[108px] h-[60px] object-cover'
                                    src={absoluteUrl(brand[0].field_block_imagen?.uri?.url)}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    alt={brand?.[0]?.field_block_imagen?.resourceIdObjMeta?.alt}
                                />
                            )}

                        </Link>

                    </figure>
                ) : <figure>
                    {/* <Link href='/'>
                        <Image className='w-[108px] h-[60px] object-cover'
                            src={defaultLogo}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt='Logo Header'
                        />
                    </Link>  */}

                </figure>
            }

        </div>
    )
}
