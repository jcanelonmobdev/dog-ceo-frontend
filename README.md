# Dog-CEO Challenge

Este proyecto ha sido realizado para demostrar las habilidades actuales en react. Por mi parte es la primera vez que programo un mini proyecto en este 'lenguaje' así que ha sido un enorme aprendizaje.

## Cómo funciona

Se presenta una pantalla con el botón "Select your filters" que al pulsar se abre una ventana Modal que permite seleccionar razas y/o subrazas.
Al seleccionar la raza si esta no tiene subrazas a la izquierda solo se presenta el nombre de la raza para que sea seleccionada.
Si la raza seleccionada tiene subrazas, se presenta de primera una opción "select all subbreeds" que al pulsarla selecciona (o deselecciona) todas las subrazas de la raza seleccionada previamente. Luego de esta opción, aparecen todas las subrazas. En este punto puede seleccionar las subrazas que se deseen mostrar.
Inmediatamente en la página base se van mostrando las imagenes de las razas/subrazas seleccionadas.
Se puede pulsar en el modal de filtros el botón "Clear" lo cual borrará toda la selección actual.
Al pulsar el botón "Close", se cierra este modal de filtros para visualizar la pantalla principal.

En la pantalla principal existen varias opciones que le permiten al usuario "jugar" con las imagenes presentadas como:

- Ver la imagen: al pulsar cada imagen se muestra en un modal un poco más grande.
- Cambiar tamaño de las imagenes: al pulsar el botón "Size thumbnail", permite cambiar el tamaño a small, medium o large.
- Cambiar la cantidad máxima de imágenes: al pulsar el botón "Max images", permite mostrar un maximo de imágenes entre 5, 10, 20 y 30.
- Colapsar o expandir una raza: al pulsar la barra de título de una raza.
- Colapsar o expandir todas las razas: al pulsar el botón "Expand" o "Collapse" respectivamente.

## Librería UI utilizada, justificación

Se utilizó la librería [React-bootstrap 4.6](https://react-bootstrap.netlify.app/) ya que en el pasado he tenido experiencia pero con Bootstrap con HTML. En este caso particular fue interesante trabajarla orientado a componentes.

## Principios SOLID

La estructura de archivos utilizada fue la misma vista en el onboarding de front end que nos dictó Rodrigo Riquelme. data / domain / presentation.

## Cosas que faltaron

- Utilizar cache para almacenar las estructura de datos y las imagenes. Queda pendiente de aprender.
- Mejorar la lógica de traer la lista de imágenes, en este proyecto las llamo y agrego a mi estructura de datos al inicializar los datos. Una posible mejora sería consultar la lista de imágenes a medida que se vayan seleccionado las razas y subrazas, en caso de no haberlas consultado antes.
- No se si se pueden cachear las imagenes para que cuando se vuelvan a solicitar por http, no se las traiga del server nuevamente (o esto lo maneja automáticamente el navegador).
- Me hubiese gustado usar redux. Queda pendiente por aprender.
- Tengo el siguiente warning que no encontré cómo resolver:

Line 148:14: React Hook React.useEffect has a missing dependency: 'InitializateAll'. Either include it or remove the dependency array react-hooks/exhaustive-deps
overrideMethod @ react_devtools_backend.js:2557
printWarnings @ webpackHotDevClient.js:138
handleWarnings @ webpackHotDevClient.js:143
push../node_modules/react-dev-utils/webpackHotDevClient.js.connection.onmessage @ webpackHotDevClient.js:210

## Cosas que se me hicieron difíciles y cuesta arriba, pero las resolví.

- El diseño de la interfaz UI, no tengo mucha experiencia en HTML5 así que cosas como organizar los elementos visuales fue todo un reto.
- Llamar funciones asincronas con PromiseAll dentro de un map, pienso que debe haber una forma menos rebuscada de hacerla HomePase.js Line: 133.
- Mapear los datos del endpoint de breeds/list/all, ya que viene con el nombre de la raza como el key del json (ver BreedUseCase.js). Para ello utilice comandos de javascript como Object.entries, lo cual me pareció bastante rebuscado. Espero que haya una forma mas simple de hacer.

## Conclusiones

Trabajar este proyecto de react permitió entender el paradigma de react en lo que se refiere a los HOOK, que es enlazar los datos con la actualización y su relación con su visualización.

### `by Julio Canelón at mobdev.cl`
