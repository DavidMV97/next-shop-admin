import { DrupalJsonApiParams } from "drupal-jsonapi-params";

// Una función auxiliar para construir parámetros para un tipo de recurso.
export function getParams(name, mode = null) {
    const params = new DrupalJsonApiParams();

    name = mode ? `${name}--${mode}` : name;


    //Nodos 
    if (name == 'home') {
        return params
            .addPageLimit(1)
            .addFields("node--home_servicios", [
                "title", 
                "body",
                "field_titulo_banner",
                "field_imagen_banner",
                "field_imagen_de_fondo",
                "field_enlace",
                "field_description",
                "field_enlace_areas",
                "field_titulo"
            ])
            .addInclude("field_imagen_banner")
            .addInclude("field_imagen_de_fondo")
            
    }


    if (name === "node--servicios") {
        return params
            .addFilter("status", "1")
            .addFields("node--servicios", [
                "title",
                "body",
                "field_imagen",
                "field_area",
                "field_video",
                "path",
                "uid"
            ])
            .addInclude("field_imagen")
            .addInclude("field_area")
            .addSort("created", "DESC")

    }

    if(name === "node--page"){
        return params
            .addFilter("status", "1")
            .addFields("node-page",[
                "title",
                "body",
                "field_imagen_basic_page",
            ])
            .addInclude("field_imagen_basic_page")
    }


    //bloques
    if (name === "block-footer") {
        return params
            .addFields("block_content--servicios_bloque_basico_", [
                "body",
                "field_block_imagen"
            ])
            .addInclude("field_block_imagen")
            .addFilter("info", "bloque footer")
    }

    if (name === "logo-header") {
        return params
            .addFields("block_content--servicios_bloque_basico_", [
                "field_block_imagen"
            ])
            .addInclude("field_block_imagen")
            .addFilter("info", "logo header")
    }

    if (name === "seccion-servicios") {
        return params
            .addFields("block_content--servicios_bloque_basico_", [
                "body",
                "field_titulo",
                "field_block_imagen"
            ])
            .addInclude("field_block_imagen")
            .addFilter("info", "Banner sección todos los servicios")
    }

}


