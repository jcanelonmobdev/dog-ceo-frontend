# Dog-CEO Challenge

Este proyecto ha sido realizado para demostrar las habilidades actuales en react. Por mi parte es la primera vez que programo un mini proyecto en este 'lenguaje' así que ha sido un enorme aprendizaje.

## Librería UI utilizada, justifique

Se utilizó la librería [React-bootstrap 4.6](https://react-bootstrap.netlify.app/) ya que en el pasado he tenido experiencia pero con Bootstrap con HTML. En este caso particular fue interesante trabajarla orientado a componentes.

## Principios SOLID

La estructura de archivos utilizada fue la misma vista en el onboarding de front end que nos dictó Rodrigo Riquelme. data / domain / presentation.

## Cosas que faltaron

- Utilizar cache para almacenar las estructura de datos y las imagenes. Queda pendiente de aprender.
- Mejorar la lógica de traer la lista de imágenes, en este proyecto las llamo y agrego a mi estructura de datos al inicializar los datos. Una posible mejora sería consultar la lista de imágenes a medida que se vayan seleccionado las razas y subrazas, en caso de no haberlas consultado antes.
- No se si se pueden cachear las imagenes para que cuando se vuelvan a solicitar por http, no se las traiga del server nuevamente (o esto lo maneja automáticamente el navegador).

## Cosas que se me hicieron difíciles y cuesta arriba

- El diseño de la interfaz UI, no tengo mucha experiencia en HTML5 así que cosas como organizar los elementos visuales fue todo un reto.^^\*
- Llamar funciones asincronas con PromiseAll dentro de un map, pienso que debe haber una forma menos rebuscada de hacerla HomePase.js Line: 133.
- Mapear los datos del endpoint de breeds/list/all, ya que viene con el nombre de la raza como el key del json (ver BreedUseCase.js). Para ello utilice comandos de javascript como Object.entries, lo cual me pareció bastante rebuscado. Espero que haya una forma mas simple de hacer.

## Conclusiones

Trabajar este proyecto de react permitió entender el paradigma de react en lo que se refiere a los HOOK, que es enlazar los datos con la actualización y su relación con su visualización.

### `by Julio Canelón at mobdev.cl`
