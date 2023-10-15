import React from 'react'
import MainMenu from './main-menu'
import LogoHeader from './logo-header'
// import { useThemeContext } from '@/context/context-global';
import { drupal } from '../lib/drupal'
import { getParams } from '../lib/get-params';

export default async function Header() {
	const { logo, mainMenu } = await getDataHeader();

	return (
		<header className='max-w-screen-lg mx-auto bg-gray-950 flex justify-between items-center px-5 py-[8px] lg:px-0' >
			<LogoHeader logo={logo} />
			{<MainMenu menus={mainMenu} />}
		</header>
	)
}

export async function getDataHeader() {
	const urlLogo = drupal.buildUrl("/jsonapi/block_content/servicios_bloque_basico_", {
		"filter[info]": "logo header",
		"include": "field_block_imagen",
		"fields[servicios_bloque_basico_]": "field_block_imagen",
	});

	const urlMainMenu = drupal.getMenu("servicios");

	const [responseLogo, mainMenu] = await Promise.all([
		drupal.fetch(urlLogo.toString()),
		urlMainMenu,
	]);

	const [jsonLogo, __] = await Promise.all([
		responseLogo.json(),
		mainMenu,
	]);

	const [resource, _] = await Promise.all([
		drupal.deserialize(jsonLogo),
	]);

	return { logo: resource, mainMenu };
}