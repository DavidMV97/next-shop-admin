import React from 'react'
// import MainMenu from './main-menu'
 import LogoHeader from './logo-header'
// import { useThemeContext } from '@/context/context-global';
import { drupal } from '../lib/drupal'
import { getParams } from '../lib/get-params';

export default async function Header() {

  const logo = await getLogo();
 
  
  return (
    <header className='max-w-screen-lg mx-auto bg-gray-950 flex justify-between items-center px-5 py-[8px] lg:px-0' >
         <h1>Desde header</h1>
          <LogoHeader  logo={logo} /> 
       {/* <MainMenu/> */}
    </header>
  )
}


export async function getLogo() {

  const url = drupal.buildUrl("/jsonapi/block_content/servicios_bloque_basico_", {
    "filter[info]": "logo header",
    "include":"field_block_imagen",
    "fields[servicios_bloque_basico_]": "field_block_imagen",
  })

  const response = await drupal.fetch(url.toString())
  const json = await response.json()
  const resource = drupal.deserialize(json)

  return resource;
}

