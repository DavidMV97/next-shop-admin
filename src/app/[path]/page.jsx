import React from 'react'
import { drupal } from '../lib/drupal';

export default async function ResourcePage({ params }) {

    const { path } = params;
    const data = await getResource(path);

    return (
        <div>Print data</div>
    )
}


export async function getResource(path) {

    const url = drupal.buildUrl("/jsonapi/node/page", {
        sort: "-created",
        "filter[field_path]": `/${path}`,
        "fields[node--page]": "title,body",
    })

    const response = await drupal.fetch(url.toString());
    const json = await response.json();
    const resource = drupal.deserialize(json);
    return resource;
}

