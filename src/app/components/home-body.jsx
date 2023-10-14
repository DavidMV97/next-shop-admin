import { absoluteUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";


export default function HomeBody({ node }) {
	return (
		<>	{/* Banner Superior */}
			<div className="w-full grid items-center relative banner-servicios-home ">
				<figure className="col-span-full row-span-full">
					<Image className='w-full h-full object-cover min-h-[335px] md:min-h-100%'
						src={absoluteUrl(node.field_imagen_banner.uri.url)}
						width={0}
						height={0}
						sizes="100vw"
						alt={node.field_imagen_banner?.resourceIdObjMeta.alt}
					/>
				</figure>
				<div className="flex flex-col items-start max-w-screen-lg w-full mx-auto row-start-1 row-end-auto col-start-1	col-end-auto text-white font-bold z-10 p-5 lg:p-0">
					<div className="max-w-[800px] w-full text-[32px] md:text-[40px] lg:text-[56px]" dangerouslySetInnerHTML={{ __html: node.field_titulo_banner }} />
					<Link href={node.field_enlace.full_url} target="_blank" className="bg-green-soft p-3 rounded-md mt-5 text-white max-w-[370px] w-full text-lg lg:text-2xl lg:m-w-[370px] m-w-[280px]" >
						{node.field_enlace.title}
					</Link>
				</div>
			</div>
			{/* Título y body*/}
			<div className="max-w-screen-lg mx-auto p-5 lg:p-0" >
				<h1 className="mb-5 mt-4 text-[24px] md:text-[32px] lg:text-[40px] leading-[32px] md:leading-[44px] lg:leading-[56px] ">{node.title}</h1>
				<div className="mb-5 text-sm leading-5 md:text-lg md:leading-[27px] lg:" dangerouslySetInnerHTML={{ __html: node.body.value }} />
			</div>
			{/* Bloque seccion áreas*/}
			<div className="w-full grid items-center mb-12 relative block-areas-home">
				{node.field_imagen_de_fondo && (
					<figure className="col-span-full row-span-full h-full">
						<Image className='w-full h-full object-cover min-h-[260px] lg:min-h-full'
							src={absoluteUrl(node.field_imagen_de_fondo.uri.url)}
							width={0}
							height={0}
							sizes="100vw"
							alt={node.field_imagen_de_fondo.resourceIdObjMeta.alt}
						/>
					</figure>
				)}
				<div className="flex flex-col lg:flex-row justify-end w-full lg:justify-between max-w-screen-lg mx-auto row-start-1 row-end-auto col-start-1 col-end-auto gap-5 z-10 p-5 lg:p-0">
					<h3 className="text-2xl leading-8 md:text-[32px] md:leading-[44px] lg:text-[40px] lg:leading-[60px] text-white"> {node.field_titulo} </h3>
					{node.field_description && (
						<div className="text-white max-w-[730px] w-full text-sm leading-[21px] md:text-lg md:leading-[27px] lg:text" dangerouslySetInnerHTML={{ __html: node.field_description.value }} />
					)}
					{node.field_enlace_areas && (
						<Link href={node.field_enlace_areas.full_url} target="_blank" className="flex items-center gap-5 font-bold text-[16px] md:text-[20px] p-3 rounded-md mt-1 text-white arrow-areas justify-end" >
							{node.field_enlace_areas.title}
						</Link>
					)}
				</div>

			</div>
		</>
	)
}
