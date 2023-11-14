**08/10/2023**
- Autenticación con correo y contraseña, autenticación con google y la de facebook esta fallando, por qué? no sé pero lo utilizaremos my rey
### Avance hasta la fecha:
Creo una página de login en donde esta un logo un formulario para el registro y un header con un boton que abre el modal para iniciar sesión.
Lo que hace el front es crear al usuario hacer la petición al endpoint correspondiente para que este guarde la sesión en las cookies, en caso de registro guarda en la base de datos la información inicial del
usuario. **NOTA: falta agregar ciertos campos en la base de datos, como información sensible, información sobre notificaciones.** 

Como la principal función de astro es renderizar sitios estaticos entonces en gran mayoría viene renderizado por parte del servidor, entonces pasar las props a los compenentes es un poco diferente
a otras tecnologías que como react, vue, etc... En este caso se crea una carpeta *constants* en la carpeta *components/auth/constants* que es donde se guardan los ids de los botones para que estos sean unicos.

En el archivo de configuración de Astro añadí lo siguiente
```
  output: "server",
  prerender: false,

```
para poder usar props
### para hacer:
- **Prioridad**-> Crear una interfaz de *feed* que es lo primordial para ver las publicaciones de los demás.

- buscar la forma de hacer un middleware que valida la sesión en cada petición.




### para hacer:
- Se necesita llenar todos los datos del usuario para poder interactuar. por ejemplo:
  - Cuil
  - Dni
  - Nombre y apellido

por ahora solo usamos la autenticación con correo y contraseña.

- Usamos la autenticación de firebase y los provedores de google y facebook, usamos los endpoints que nos permite utilizar astro.





**18/10/2023**
### backend
- Estoy usando new Date() para hacer los timestamp.s

### frontend
- El login con google, el feec, el header y el nav(demo)


### 11/11/2023

- Usar siempre la información de los usuarios de **mongoDB**