
import BloqueFooter from "./bloque-footer"
import MenuFooter from "./menu-footer"
import { drupal } from "../lib/drupal";


export default async function Footer() {

	const { block, mainMenu } = await getDataFooter();

  return (
    <footer className="bg-dark-soft text-white"> 
        <BloqueFooter footerBlock={block} ></BloqueFooter> 
        { <MenuFooter menu={mainMenu} ></MenuFooter> }
    </footer>
	
  )
}

export async function getDataFooter() {
	const blockFooter = drupal.buildUrl("/jsonapi/block_content/servicios_bloque_basico_", {
		"filter[info]": "Bloque footer",
		"include": "field_block_imagen",
		"fields[servicios_bloque_basico_]": "body,field_block_imagen",
	});

	const urlMainMenu = drupal.getMenu("servicios---pie-de-pagina");

	const [responseBlockFooter, mainMenu] = await Promise.all([
		drupal.fetch(blockFooter.toString()),
		urlMainMenu,
	]);

	const [jsonBlockFooter, __] = await Promise.all([
		responseBlockFooter.json(),
		mainMenu,
	]);

	const [resource, _] = await Promise.all([
		drupal.deserialize(jsonBlockFooter),
	]);

	return { block: resource, mainMenu };
}
