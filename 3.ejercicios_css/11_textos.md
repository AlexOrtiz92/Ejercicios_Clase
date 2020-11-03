
## Enunciado
A partir de la página web que se te proporciona, debes crear una página web que tenga el mismo aspecto que la siguiente imagen:

![Elemento html](estilo-texto-3.png)

Además, tienes que tener en cuenta los siguientes requisitos:

*   El tipo de letra principal del texto debe ser Calibri. Como este tipo de letra no está en todos los ordenadores, se debe definir como alternativa los tipos de letra Arial, Helvetica y el tipo genérico sans-serif.
*   El tipo de letra del encabezado de nivel 1 debe ser Cambria. El tipo alternativo debe ser Times junto con el tipo genérico serif. El color del texto debe ser #1F497D y el color del fondo #BFBFBF. El tamaño del texto debe ser 24 px. El espaciado entre letras debe ser 0.5 em y el espaciado entre palabras 1.5 em. Además, el encabezado de nivel 1 debe aparecer centrado y en mayúsculas.
*   El tipo de letra del encabezado de nivel 2 es igual que el encabezado de nivel 1. El color del texto debe ser #632423. El tamaño del texto debe ser 18 px. El espaciado entre letras debe ser 0.5 em. Además, el encabezado de nivel 2 debe aparecer en mayúsculas.
*   El contenido de las listas debe aparecer en cursiva y en negrita. Sin embargo, el contenido etiquetado como <strong> no debe aparecer en negrita, pero debe aparecer en versalitas.

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