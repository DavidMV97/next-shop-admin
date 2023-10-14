"use client"

import Link from 'next/link';
import { GlobalProvider, useThemeContext } from '../context/context-global'

export default function Servicios() {


  const { color, setColor} = useThemeContext();

  return (
    <>
      <h1 style={{ 'color': color }}>Desde servicios </h1>
      <p>Current color: {color}</p>
      <button onClick={() => setColor('blue')}>Set color to blue</button>
      <Link href='/' > Main page </Link>
    </>

  )
}
