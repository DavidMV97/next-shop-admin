// import Image from 'next/image'
// import Dasboard from './components/dasboard'
// import Link from 'next/link'
import HomeBody from './components/home-body';
import { drupal } from './lib/drupal'
import Link from 'next/link';


export default async function Home() {

  const homePage = await getDataHome();

  return (
    <>
      {homePage.length ? (
        homePage.map((node) => (
          <HomeBody key={node.id} node={node} />
        ))
      ) : (
        <div className="max-w-screen-lg  mx-auto mt-8 mb-8">
          <p> No hay contenido de tipo <b>Home</b> creado </p>
        </div>
      )}
    </>
  )
}


export async function getDataHome() {

  const url = drupal.buildUrl("/jsonapi/node/home_servicios", {
    sort: "-created",
    "include": "field_imagen_banner,field_imagen_de_fondo",
    "fields[node--home_servicios]": "title,body,field_description,field_enlace_areas,field_enlace,field_imagen_banner,field_imagen_de_fondo,field_titulo,field_titulo_banner",
  })

  const response = await drupal.fetch(url.toString())
  const json = await response.json()
  const resource = drupal.deserialize(json)

  return resource;
}


