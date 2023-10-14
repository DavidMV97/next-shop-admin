import Image from 'next/image'
import Dasboard from './components/dasboard'
import { GlobalProvider, useThemeContext } from './context/context-global'
import Link from 'next/link'
import { drupal } from './lib/drupal'

export default async function Home() {

  
  return (
    <>
    {/* <Dasboard /> */}
      {/* <h1 style={{ 'color': color }}>Main page </h1>
      <p>Current color: {color}</p>
      <button onClick={() => setColor('blue')}>Set color to blue</button>
      <Link href='/servicios' > Go to services </Link> */}
      <h1> Desde page jsx </h1>
    </>

  )
}

