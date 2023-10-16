
"use client"
import React, { useState } from 'react'
import OptionsAreasServicios from './options-areas-servicios';
import { createServicesOptions } from '../lib/utils';


export default function FiltroServicios({ nodeServicios }) {

    const pageSize = 16;
    // Inicialmente muestra los primeros pageSize nodos
    const [loadedNodes, setLoadedNodes] = useState(nodeServicios.slice(0, pageSize));
    const [searchKeyword, setSearchKeyword] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const [filteredNodes, setFilteredNodes] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');

    const [optionsServices, setOptionsServices] = useState([])


    const loadMoreNodes = () => {
        const sourceArray = searchKeyword ? filteredNodes : nodeServicios;
        const nextPage = sourceArray.slice(loadedNodes.length, loadedNodes.length + pageSize);
        setLoadedNodes([...loadedNodes, ...nextPage]);
    };


    const handleChange = e => {
        setSearchKeyword(e.target.value)
        filterbyKeyWork(e.target.value);
        setIsSearching(true);
        if (e.target.value.trim() === '') {
            setIsSearching(false);
        }
    }

    const filterbyKeyWork = (terminoBusqueda) => {
        if (!terminoBusqueda) {
            setLoadedNodes(nodeServicios.slice(0, pageSize));
            setIsSearching(false);
            return;
        }
        var resultBusqueda = nodeServicios.filter((element) => {

            if (element.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return element;
            }
        })

        setLoadedNodes(resultBusqueda);
    }


    const filterNodesByCategory = (category, subcategory) => {

        if (category || subcategory) {
            setIsSearching(true);
        }

        //Filtra por los nodos que hay en el stage 
        if (searchKeyword.trim() != '') {
            const filteredNodes = loadedNodes.filter((node) => {
                const nodeCategory = node.field_area?.parent?.[0]?.id || null;
                const nodeSubcategory = node.field_area?.name || null;
                if (category && subcategory) {
                    return nodeCategory === category && nodeSubcategory === subcategory;
                }
                if (category) {
                    return nodeCategory === category;
                }

                if (subcategory) {
                    return nodeSubcategory === subcategory;
                }

                return true;
            });

            setLoadedNodes(filteredNodes);

        }// Filtra por todos los nodos:  
        else {
            const filteredNodes = nodeServicios.filter((node) => {
                const nodeCategory = node.field_area?.parent?.[0]?.id || null;
                const nodeSubcategory = node.field_area?.name || null;
                if (category && subcategory) {
                    return nodeCategory === category && nodeSubcategory === subcategory;
                }
                if (category) {
                    return nodeCategory === category;
                }

                if (subcategory) {
                    return nodeSubcategory === subcategory;
                }
                return true;
            });
            setLoadedNodes(filteredNodes);
        }

    };

    const cleanFilters = () => {
        setIsSearching(false);
        setSearchKeyword('');
        setSelectedCategory('');
        setSelectedSubcategory('');
        setLoadedNodes(nodeServicios.slice(0, pageSize));

        var select = document.querySelector("#area");
        var selectServices = document.querySelector("#servicios");
        select.value = "";
        selectServices.value = "";
    }

    // creando opciones filtro
    let areas = [];
    let servicios = [];

    nodeServicios.forEach(node => {

        if (!areas.includes(node.field_area?.parent?.[0]?.id) && node.field_area?.parent?.[0]?.id != undefined) {
            areas.push(node.field_area?.parent?.[0]?.id)
        }
    });

    return (
        <div className='col-span-full flex gap-5 flex-col mt-5'>
            <h3 className='border-b-[2px] max-w-[290px] w-full text-lg'> Filtrar por: </h3>
            <div className='filters flex gap-5 items-start mt-5 flex-col lg:flex-row lg:items-end mb-5 lg:mb-0' >
                {/* FIltrar por palabra clave : */}
                <div className='keyworks w-full'>
                    <label htmlFor="keyword" className='text-green-dark font-bold block mb-1 text-base '>Buscar por palabra clave</label>
                    <input
                        type="text"
                        id="keyword"
                        value={searchKeyword}
                        onChange={handleChange}
                        className='border bg-white h-10 pl-1 w-full border-green-dark'

                    />
                </div>
                {/* FIltrar por área : */}
                <div className='selects w-full'>
                    <label htmlFor="area" className='text-green-dark font-bold block mb-1 text-base' > Áreas </label>
                    <select name="" id="area" className='border bg-white h-10 w-full border-green-dark'
                        onChange={(e) => {
                            setSelectedSubcategory('');
                            const selectedValue = e.target.value;
                            setOptionsServices(createServicesOptions(nodeServicios, selectedValue))
                            setSelectedCategory(selectedValue);
                        }}
                    >
                        <option selected="selected" value=""> Seleccione </option>
                        {areas.length && (
                            <OptionsAreasServicios areas={areas} />
                        )}
                    </select>
                </div>
                {/* FIltrar por servicio : */}
                <div className='selects w-full'>
                    <label htmlFor="servicio" className='text-green-dark font-bold block mb-1 text-base' > Servicio </label>
                    <select name="" id="servicios" className='border bg-white h-10 w-full border-green-dark'
                        onChange={(e) => {
                            const selectedValue = e.target.value;
                            setSelectedSubcategory(selectedValue);
                        }}
                    >
                        <option selected="selected" value="" > Seleccione </option>
                        {optionsServices.map(item => (
                            <option key={item} value={item}> {item} </option>
                        ))}
                    </select>
                </div>
                {/* Botón de busqueda y limpiar :  */}
                <div className='buttons flex gap-5 w-full justify-center'>
                    <button
                        onClick={() => filterNodesByCategory(selectedCategory, selectedSubcategory)}
                        disabled={!selectedCategory && !selectedSubcategory}
                        className={`w-full max-w-[120px] bg-green-dark text-white rounded py-2 px-4  col-span-full mx:0 lg:mx-auto  ${selectedCategory || selectedSubcategory ? '' : 'opacity-80'} `}
                    >
                        Buscar
                    </button>
                    {
                        isSearching ? (
                            <button
                                onClick={() => cleanFilters()}
                                className={`w-full max-w-[120px] bg-green-dark text-white rounded  py-2 px-4   col-span-full mx-0 lg:mx-auto`}
                            >
                                Limpiar
                            </button>
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}
