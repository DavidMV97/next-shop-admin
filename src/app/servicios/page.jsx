

import Link from 'next/link';
import NodeServiciosTeaser from '../components/node--servicios--teaser';
import { drupal } from '../lib/drupal';



export default async function Servicios() {


  const nodeServicios = await getDataServices(); 


	// const pageSize = 16;
	// // Inicialmente muestra los primeros pageSize nodos
	// const [loadedNodes, setLoadedNodes] = useState(nodeServicios.slice(0, pageSize));
	// const [searchKeyword, setSearchKeyword] = useState('');
	// const [isSearching, setIsSearching] = useState(false);

	// const [filteredNodes, setFilteredNodes] = useState([]);
	// const [selectedCategory, setSelectedCategory] = useState('');
	// const [selectedSubcategory, setSelectedSubcategory] = useState('');

	// const [optionsServices, setOptionsServices] = useState([])


	// const loadMoreNodes = () => {
	// 	const sourceArray = searchKeyword ? filteredNodes : nodeServicios;
	// 	const nextPage = sourceArray.slice(loadedNodes.length, loadedNodes.length + pageSize);
	// 	setLoadedNodes([...loadedNodes, ...nextPage]);
	// };


	// const handleChange = e => {
	// 	setSearchKeyword(e.target.value)
	// 	filterbyKeyWork(e.target.value);
	// 	setIsSearching(true);
	// 	if (e.target.value.trim() === '') {
	// 		setIsSearching(false);
	// 	}
	// }

	// const filterbyKeyWork = (terminoBusqueda) => {
	// 	if (!terminoBusqueda) {
	// 		setLoadedNodes(nodeServicios.slice(0, pageSize));
	// 		setIsSearching(false);
	// 		return;
	// 	}
	// 	var resultBusqueda = nodeServicios.filter((element) => {

	// 		if (element.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
	// 			return element;
	// 		}
	// 	})

	// 	setLoadedNodes(resultBusqueda);
	// }


	// const filterNodesByCategory = (category, subcategory) => {

	// 	if (category || subcategory) {
	// 		setIsSearching(true);
	// 	}

	// 	//Filtra por los nodos que hay en el stage 
	// 	if (searchKeyword.trim() != '') {
	// 		const filteredNodes = loadedNodes.filter((node) => {
	// 			const nodeCategory = node.field_area?.parent?.[0]?.id || null;
	// 			const nodeSubcategory = node.field_area?.name || null;
	// 			if (category && subcategory) {
	// 				return nodeCategory === category && nodeSubcategory === subcategory;
	// 			}
	// 			if (category) {
	// 				return nodeCategory === category;
	// 			}

	// 			if (subcategory) {
	// 				return nodeSubcategory === subcategory;
	// 			}

	// 			return true;
	// 		});

	// 		setLoadedNodes(filteredNodes);

	// 	}// Filtra por todos los nodos:  
	// 	else {
	// 		const filteredNodes = nodeServicios.filter((node) => {
	// 			const nodeCategory = node.field_area?.parent?.[0]?.id || null;
	// 			const nodeSubcategory = node.field_area?.name || null;
	// 			if (category && subcategory) {
	// 				return nodeCategory === category && nodeSubcategory === subcategory;
	// 			}
	// 			if (category) {
	// 				return nodeCategory === category;
	// 			}

	// 			if (subcategory) {
	// 				return nodeSubcategory === subcategory;
	// 			}
	// 			return true;
	// 		});
	// 		setLoadedNodes(filteredNodes);
	// 	}

	// };

	// const cleanFilters = () => {
	// 	setIsSearching(false);
	// 	setSearchKeyword('');
	// 	setSelectedCategory('');
	// 	setSelectedSubcategory('');
	// 	setLoadedNodes(nodeServicios.slice(0, pageSize));

	// 	var select = document.querySelector("#area");
	// 	var selectServices = document.querySelector("#servicios");
	// 	select.value = "";
	// 	selectServices.value = "";
	// }

	// // creando opciones filtro
	// let areas = [];
	// let servicios = [];

	// nodeServicios.forEach(node => {

	// 	if (!areas.includes(node.field_area?.parent?.[0]?.id) && node.field_area?.parent?.[0]?.id != undefined) {
	// 		areas.push(node.field_area?.parent?.[0]?.id)
	// 	}
	// });


  return (
    <>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 max-w-screen-lg mx-auto mb-6 px-5 lg:px-0">
					
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

