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
