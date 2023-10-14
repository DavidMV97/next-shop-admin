import React from 'react'
import { useThemeContext } from '../context/context-global';
import { drupal } from '../lib/drupal'

export default async function Dasboard() {

  const { hola } = useThemeContext();


  const data = await getData();
  console.log('data', data);

  return (
    <div>Dasboard</div>
  )
}


export async function getData() {

  const url = drupal.buildUrl("/jsonapi/node/home_servicios", {
    sort: "-created",
    "fields[node--home_servicios]": "title,body",
  })

  const response = await drupal.fetch(url.toString())
  const json = await response.json()
  const resource = drupal.deserialize(json)

  return resource;
}
