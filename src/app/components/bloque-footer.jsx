import Image from "next/image"
import { absoluteUrl } from "../lib/utils";
import { drupal } from "../lib/drupal";

export default async function BloqueFooter({footerBlock}) {

    return (
        <div className='max-w-screen-lg mx-auto flex items-center flex-col py-7 px-5 lg:px-0 lg:flex-row border-b-[2px] border-white-soft italic'>

            {footerBlock?.[0]?.field_block_imagen && (
                <figure className="my-4 mr-3">
                    <Image className=''
                        src={absoluteUrl(footerBlock?.[0]?.field_block_imagen.uri.url)}
                        width={115}
                        height={66}
                        alt={footerBlock?.[0]?.field_block_imagen.resourceIdObjMeta.alt}
                    />
                </figure>
            )}

            {footerBlock?.[0]?.body && (
                <div className="block-footer mt-5 lg:mt-0" dangerouslySetInnerHTML={{ __html: footerBlock?.[0].body.value }} />
            )}
        </div>
    )
}

