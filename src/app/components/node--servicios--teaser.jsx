import Link from 'next/link'
import Image from "next/image"
import { absoluteUrl } from '../lib/utils';
import VideoPlayer from './video-player';


function NodeServiciosTeaser({ node }) {
    return (
        <article className="shadow-article shadow-gray-soft rounded">

            <div className='relative'>
                {node.field_video && !node.field_imagen?.uri?.url ? (
                    <VideoPlayer videoUrl={node.field_video} />
                ) : node.field_imagen?.uri?.url && !node.field_video ? (
                    <figure>
                        <Image
                            className='w-full h-52 object-cover rounded'
                            src={absoluteUrl(node?.field_imagen?.uri?.url)}
                            width={290}
                            height={200}
                            alt={
                                node.field_imagen?.resourceIdObjMeta
                                    ? node.field_imagen?.resourceIdObjMeta?.alt
                                    : node.alt
                            }
                        />
                    </figure>
                ) : node.field_video && node.field_imagen?.uri?.url ?
                    <VideoPlayer videoUrl={node.field_video} />
                    : null
                }

                <label className='text-green-dark bg-white py-2 rounded absolute bottom-5 left-0 pl-1 pr-1 ml-3 mr-3 font-bold text-base' > {node.field_area?.name} </label>
            </div>

            <div className='p-6' >
                <Link href={node.path.alias}>
                    <h2 className='text-green-950 font-bold mb-4 text-base md:text-lg' >{node.title}</h2>
                </Link>

                {node.body && (
                    <div className='text-sm md:text-base lg:text' dangerouslySetInnerHTML={{ __html: node.body.value.substr(0, 100) }} />
                )}
            </div>

        </article>
    )
}

export default NodeServiciosTeaser