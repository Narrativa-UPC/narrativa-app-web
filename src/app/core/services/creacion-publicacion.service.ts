import { Injectable } from '@angular/core';
import { Publicacion } from '../../shared/models/publicacion.model';

@Injectable({
  providedIn: 'root'
})
export class CreacionPublicacionService {
  private publicaciones: Publicacion[] = [
    {
      id:1,
      titulo: 'Mi Primera Base de Datos',
      contenido: '<h1>Conociendo SQL</h1><p>Aquí podrás conocer las principales Herramientas de SQL. Desde como crear tu base de datos y diseñar una base relacional, hasta como juntar y filtrar tablas por campos claves!&nbsp;</p><figure class="image image_resized" style="width:24.93%;"><img style="aspect-ratio:731/341;" src="https://i.pinimg.com/736x/79/0d/a7/790da74a0b1c69dd3093fecc9a781afb.jpg" width="731" height="341"></figure><h4>Observa este video para que tengas una base antes de empezar.</h4><ul><li><p style="text-align:center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/kbKty5ZVKMY?si=ULWTH-hwlfEjqzoP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe></p><h3>Poniendo a Prueba Lo Aprendido</h3><p>Ahora que ya tenemos la teoría, practiquemos junto lo aprendido.</p></li></ul>',
      creador: 'Fantasma1',
      likes: 15,
      imagen: 'https://i.pinimg.com/736x/79/0d/a7/790da74a0b1c69dd3093fecc9a781afb.jpg',
      resumen: 'SQL (Structured Query Language) es un lenguaje utilizado para gestionar y manipular bases de datos. En este tutorial para principiantes, aprenderás cómo crear bases de datos y tablas, insertar, actualizar y eliminar datos. Comenzarás con los comandos básicos como CREATE, SELECT, INSERT, UPDATE y DELETE. También descubrirás cómo realizar consultas simples para extraer información específica utilizando condiciones (WHERE) y ordenar los resultados (ORDER BY). Además, aprenderás sobre las relaciones entre tablas mediante claves primarias y foráneas. SQL es fundamental para interactuar con bases de datos en aplicaciones web, software empresarial y más.',
    },
    {
      id:2,
      titulo: 'Divirtiendonos En Python',
      contenido: '<h1>Python, Tu mejor amigo</h1><h5 style=\"text-align:justify;\">Hoy descubriremos como usar el API de Google para encontrar lugares de interés en el Google Maps <img class=\"image_resized\" style=\"aspect-ratio:640/640;\" src=\"https://i.pinimg.com/736x/66/1e/98/661e98a8e38f681575da93d0a1c3f4fc.jpg\" width=\"640\" height=\"640\"></h5><p style=\"margin-left:40px;text-align:center;\"><iframe style=\"border-width:0;\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.1183596425126!2d-76.96548062415972!3d-12.104048942971575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c70ab77498c1%3A0xcce9f50642e7c684!2sUPC%20Campus%20Monterrico!5e0!3m2!1sen!2spe!4v1731485223834!5m2!1sen!2spe\" width=\"600\" height=\"450\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe></p><p style=\"text-align:center;\">Primer Lugar de Interés</p><p style=\"text-align:center;\">&nbsp;</p><h3>Ahora tú decide un lugar para comenzar nuestro ejercicio.</h3><blockquote><p>Un ejercicio divertido es un ejercicio bien practicado</p></blockquote>',
      creador: '2doEspiritu',
      likes: 300,
      imagen: 'https://i.pinimg.com/736x/7a/7f/99/7a7f99c70c07ecb6a9ee38223dfed04f.jpg',
      resumen: 'En este tutorial básico de Python, aprenderás a trabajar con la API de Google Maps para obtener información sobre lugares, direcciones y distancias. Comenzarás instalando la librería googlemaps mediante pip y configurando tu clave de API. Luego, aprenderás a realizar solicitudes para obtener datos como coordenadas geográficas de una dirección con geocode(), encontrar lugares cercanos con places_nearby() y calcular distancias entre ubicaciones usando distance_matrix(). Este tutorial te proporcionará una base sólida para integrar Google Maps en tus proyectos de Python, permitiéndote trabajar con mapas y datos geoespaciales de manera eficiente',
    }
  ];
  
  constructor() { }

  private nextId = this.publicaciones.length + 1;

  addPublicacion(publicacion: Publicacion): Publicacion {
      publicacion.id = this.nextId++;
      this.publicaciones.push(publicacion);
      return publicacion;
  }
  getPublicaciones(): Publicacion[]{
    return this.publicaciones;
  }
  getPublicacionById(id: number): Publicacion | null {
    return this.publicaciones.find(b => b.id === id) ?? null;
  }
  deletePublicacion(id: number): boolean {
    const index = this.publicaciones.findIndex(b => b.id === id);
    if (index !== -1){
      this.publicaciones.splice(index,1);
      return true;
    }
    return false;
  }

}
