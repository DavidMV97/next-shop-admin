

import Link from 'next/link';
import NodeServiciosTeaser from '../components/node--servicios--teaser';
import { drupal } from '../lib/drupal';
import FiltroServicios from '../components/filtro-servicios';



export default async function Servicios() {

  const nodeServicios = await getDataServices(); 

  return (
    <>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 max-w-screen-lg mx-auto mb-6 px-5 lg:px-0">
					<FiltroServicios nodeServicios={nodeServicios} />
					{nodeServicios.length ? (
						nodeServicios.map((node) => (
							<NodeServiciosTeaser key={node.id} node={node} />
						))
					) : (
						<p className="py-4 text-2xl font-bold text-green-dark col-span-full ">No se encontraron servicios</p>
					)}

					{/* {loadedNodes.length < nodeServicios.length && !isSearching ? (
						<button
							onClick={loadMoreNodes}
							className="bg-green-dark text-white rounded py-2 px-4 mt-4  mb-5 col-span-full w-1/4 mx-auto"
						>
							Mostrar más servicios
						</button>
					) : null} */}
				</div>
    </>

  )
}

export async function getDataServices() {

  const url = drupal.buildUrl("/jsonapi/node/servicios", {
    sort: "-created",
    "include": "field_imagen,field_area",
    "fields[node--home_servicios]": "title,body,field_imagen,field_video,field_area",
  })

  const response = await drupal.fetch(url.toString())
  const json = await response.json()
  const resource = drupal.deserialize(json)

  return resource;
}

