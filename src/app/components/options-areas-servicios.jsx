"use client"
import React, { Fragment, useEffect, useState } from 'react';

export default function OptionsAreasServicios({ areas }) {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          areas.map(async (area) => {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/jsonapi/taxonomy_term/servicios/${area}`
            );
            const data = await response.json();
            return data;
          })
        );
        setResponses(responses);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [areas]);

  return (
    <Fragment>
        {responses.map((response, index) => (
          <option key={index} value={response.data.id} > {response.data.attributes.name} </option>
        ))}
    </Fragment>
  );
}
