
## Enunciado
A partir de la página web que se te proporciona, debes crear una página web que tenga el mismo aspecto que la siguiente imagen:

![Elemento html](estilo-texto-1.png)

Además, tienes que tener en cuenta los siguientes requisitos:

*   El tipo de letra de la página es Arial, con el tipo de respaldo Verdana.
*   El encabezado de nivel 1 utiliza el tipo de letra Georgia, con un tamaño de letra de 32 px y en versalitas.
*   El encabezado de nivel 2 utiliza el tipo de letra Georgia, con un tamaño de letra de 24 px, en cursiva y en versalitas.
*   Los títulos de los elementos de las listas aparecen en negrita.
*   El contenido de los elementos de las listas, aunque están etiquetados como `<strong>`, no se visualizan en negrita.

Nota: no puedes modificar el código HTML de la página, sólo puedes añadir las reglas CSS necesarias para lograr la presentación deseada.

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Curriculum Vitae de Bruce Wayne</title>
</head>
<body>

<h1>Curriculum Vitae de Bruce Wayne</h1>

<h2>Datos personales</h2>
<ul>
<li>Nombre completo: <strong>Bruce Wayne</strong></li>
<li>Fecha de nacimiento: <strong>1/5/1939</strong></li>
<li>Lugar de nacimiento: <strong>Gotham City</strong></li>
</ul>

<h2>Formación académica</h2>
<ul>
<li>1956-1961: <strong>Universidad del Espantapájaros</strong></li>
<li>1952-1956: <strong>Instituto de Dos Caras</strong></li>
<li>1944-1952: <strong>Escuela Primaria del Joker</strong></li>
</ul>

<h2>Experiencia laboral</h2>
<ul>
<li>1975-1985: <strong>En el paro</strong></li>
<li>1965-1975: <strong>Cazavillanos y demás chusma</strong></li>
<li>1962-1965: <strong>Aprendiz de superhéroe</strong></li>
</ul>

</body>
</html>
```