export function absoluteUrl(input) {
    return `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${input}`
}

export function createServicesOptions(allNodes, id) {
    const names = new Set();
    allNodes.forEach((node) => {
        if (id === node.field_area?.parent?.[0]?.id) {
            const name = node.field_area.name;
            if (!names.has(name)) {
                names.add(name);
            }
        }
    });

    const uniqueNames = Array.from(names);
    return uniqueNames;
}

export function toggleMainMenu() {
    let buttonMenu = document.querySelector('.button-menu');
    let nav = document.querySelector('.main-nav');
    let itemsMenu = document.querySelector('.items-menu');

    buttonMenu.addEventListener('click', () => {
        nav.classList.toggle('show-shadow');
        buttonMenu.classList.toggle('open');
        itemsMenu.classList.toggle('show');
    })

    let allItemsMenu = document.querySelectorAll('.main-nav a');
    allItemsMenu.forEach(item => {
        item.addEventListener('click', (e) => {
            itemsMenu.classList.remove('show');
            buttonMenu.classList.remove('open');
            nav.classList.remove('show-shadow');
        })
    })

}
