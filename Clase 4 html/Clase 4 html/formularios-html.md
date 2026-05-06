# Clase 3 — Formularios HTML

En esta clase vas a aprender a construir formularios en HTML. Al final vas a tener el formulario de pedido de una pizzería funcionando en el navegador.

---

## ¿Qué es un formulario?

Un formulario es la forma en que el usuario le manda información a una página web. El login de Instagram es un formulario. El buscador de Google es un formulario. El carrito de Mercado Libre es un formulario.

En HTML, todo formulario vive dentro de la etiqueta `<form>`.

```html
<form>
  <!-- acá van los campos -->
</form>
```

---

## Los elementos del formulario

### `<input>` — el campo

El elemento más básico de un formulario es el `<input>`. Genera una cajita donde el usuario puede escribir o seleccionar algo.

```html
<input type="text">
```

El atributo `type` le dice al navegador qué tipo de dato espera. Más adelante vas a ver los distintos tipos.

---

### `<label>` — la etiqueta del campo

Cada campo necesita una etiqueta que le diga al usuario qué tiene que completar. Para eso existe `<label>`.

```html
<label>Nombre</label>
<input type="text">
```

Pero así, el label y el input están desconectados. El navegador no sabe que uno corresponde al otro. La conexión se hace con los atributos `for` e `id`:

```html
<label for="nombre">Nombre</label>
<input type="text" id="nombre">
```

El valor de `for` en el label tiene que ser **idéntico** al valor de `id` en el input. Cuando están conectados, hacer clic en el label activa el input automáticamente.

---

### El atributo `name`

Además del `id`, cada input necesita un atributo `name`. El `id` conecta el label con el input dentro del HTML. El `name` identifica el campo cuando el formulario se envía.

```html
<label for="nombre">Nombre</label>
<input type="text" id="nombre" name="nombre">
```

> Siempre ponés los tres: `id` en el input, `for` en el label con el mismo valor, y `name` en el input. Sin `name`, el campo no se envía.

---

### `required` — campo obligatorio

Si agregás el atributo `required` a un input, el navegador no va a dejar enviar el formulario si ese campo está vacío. Sin JavaScript, solo con HTML.

```html
<input type="text" id="nombre" name="nombre" required>
```

---

## Tipos de input

### `type="text"` — texto libre

Para que el usuario escriba cualquier texto.

```html
<label for="nombre">Nombre completo</label>
<input type="text" id="nombre" name="nombre" required>
```

---

### `type="email"` — correo electrónico

El navegador valida automáticamente que tenga el formato correcto (`algo@algo.com`). Si el usuario escribe algo mal y hace submit, el navegador lo avisa.

```html
<label for="email">Email</label>
<input type="email" id="email" name="email" required>
```

---

### `type="number"` — número

Muestra flechas para subir y bajar el valor. Con `min` y `max` podés limitar el rango.

```html
<label for="cantidad">Cantidad de pizzas</label>
<input type="number" id="cantidad" name="cantidad" min="1" max="10" value="1" required>
```

`value="1"` define el valor inicial que aparece cuando se carga la página.

---

### `type="radio"` — una opción de varias

Cuando el usuario tiene que elegir **una sola opción** entre varias. Todos los radio del mismo grupo tienen que tener el **mismo `name`** — así el navegador sabe que son excluyentes entre sí.

```html
<p>Tamaño:</p>

<input type="radio" id="chica" name="tamanio" value="chica">
<label for="chica">Chica (4 porciones)</label>

<input type="radio" id="mediana" name="tamanio" value="mediana">
<label for="mediana">Mediana (6 porciones)</label>

<input type="radio" id="grande" name="tamanio" value="grande">
<label for="grande">Grande (8 porciones)</label>
```

El atributo `value` es el dato que se envía cuando el formulario se manda. Si el usuario elige "Grande", se envía `tamanio=grande`.

---

### `type="checkbox"` — múltiples opciones

Cuando el usuario puede elegir **varias opciones a la vez**. A diferencia del radio, cada checkbox tiene su propio `name` porque son elecciones independientes.

```html
<p>Ingredientes extra:</p>

<input type="checkbox" id="jamon" name="ingrediente_jamon" value="jamon">
<label for="jamon">Jamón</label>

<input type="checkbox" id="champignones" name="ingrediente_champignones" value="champignones">
<label for="champignones">Champiñones</label>

<input type="checkbox" id="aceitunas" name="ingrediente_aceitunas" value="aceitunas">
<label for="aceitunas">Aceitunas</label>
```

---

## `<select>` — lista desplegable

Cuando hay muchas opciones y no querés ocupar demasiado espacio en la página. Las opciones van adentro con `<option>`.

```html
<label for="masa">Tipo de masa</label>
<select id="masa" name="masa" required>
  <option value="">-- Elegí una --</option>
  <option value="clasica">Clásica</option>
  <option value="delgada">Delgada y crocante</option>
  <option value="rellena">Rellena en los bordes</option>
</select>
```

La primera `<option>` con `value=""` funciona como placeholder: aparece seleccionada por defecto e invita al usuario a elegir.

---

## `<textarea>` — texto largo

Para cuando el usuario necesita escribir más de una línea. A diferencia del `<input>`, tiene etiqueta de apertura y cierre.

```html
<label for="comentarios">Comentarios adicionales</label>
<textarea id="comentarios" name="comentarios" rows="4"></textarea>
```

`rows` define cuántas líneas de alto tiene por defecto. El usuario puede agrandarlo arrastrando la esquina inferior derecha.

---

## `<button type="submit">` — enviar el formulario

El botón que envía el formulario. Al hacer clic, el navegador valida todos los campos con `required` y, si todo está bien, envía los datos.

```html
<button type="submit">Hacer pedido</button>
```

---

## El formulario completo

Ahora juntás todo lo que aprendiste y armás el formulario de pedido de la pizzería.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Pizzería La Nona — Pedidos Online</title>
</head>
<body>

  <header>
    <h1>Pizzería La Nona</h1>
    <p>Pedidos online</p>
  </header>

  <main>
    <form>

      <h2>Tu pedido</h2>

      <section>
        <h3>Tus datos</h3>

        <label for="nombre">Nombre completo</label>
        <input type="text" id="nombre" name="nombre" required>

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>

        <label for="telefono">Teléfono</label>
        <input type="text" id="telefono" name="telefono">
      </section>

      <section>
        <h3>Tamaño</h3>

        <input type="radio" id="chica" name="tamanio" value="chica">
        <label for="chica">Chica (4 porciones)</label>

        <input type="radio" id="mediana" name="tamanio" value="mediana">
        <label for="mediana">Mediana (6 porciones)</label>

        <input type="radio" id="grande" name="tamanio" value="grande">
        <label for="grande">Grande (8 porciones)</label>
      </section>

      <section>
        <h3>Tipo de masa</h3>

        <label for="masa">Elegí tu masa</label>
        <select id="masa" name="masa" required>
          <option value="">-- Elegí una --</option>
          <option value="clasica">Clásica</option>
          <option value="delgada">Delgada y crocante</option>
          <option value="rellena">Rellena en los bordes</option>
        </select>
      </section>

      <section>
        <h3>Ingredientes extra</h3>

        <input type="checkbox" id="mozzarella" name="ingrediente_mozzarella" value="mozzarella">
        <label for="mozzarella">Mozzarella extra</label>

        <input type="checkbox" id="jamon" name="ingrediente_jamon" value="jamon">
        <label for="jamon">Jamón</label>

        <input type="checkbox" id="champignones" name="ingrediente_champignones" value="champignones">
        <label for="champignones">Champiñones</label>

        <input type="checkbox" id="aceitunas" name="ingrediente_aceitunas" value="aceitunas">
        <label for="aceitunas">Aceitunas</label>

        <input type="checkbox" id="morron" name="ingrediente_morron" value="morron">
        <label for="morron">Morrón</label>
      </section>

      <section>
        <h3>Cantidad</h3>

        <label for="cantidad">¿Cuántas pizzas?</label>
        <input type="number" id="cantidad" name="cantidad" min="1" max="10" value="1" required>
      </section>

      <section>
        <h3>Comentarios</h3>

        <label for="comentarios">¿Algo más que quieras avisarnos?</label>
        <textarea id="comentarios" name="comentarios" rows="4"></textarea>
      </section>

      <button type="submit">Hacer pedido</button>

    </form>
  </main>

  <footer>
    <p>Pizzería La Nona — Ramos Mejía, Buenos Aires</p>
  </footer>

</body>
</html>
```

Copiá este código, abrilo en el navegador y probá completarlo. Fijate qué pasa si intentás enviarlo sin completar los campos obligatorios.

---

## Resumen

| Elemento | Para qué sirve |
|---|---|
| `<form>` | Contenedor del formulario |
| `<label>` | Etiqueta descriptiva de un campo |
| `<input type="text">` | Campo de texto libre |
| `<input type="email">` | Campo de email con validación |
| `<input type="number">` | Campo numérico |
| `<input type="radio">` | Una opción de varias (mismo `name`) |
| `<input type="checkbox">` | Múltiples opciones independientes |
| `<select>` + `<option>` | Lista desplegable |
| `<textarea>` | Texto largo, varias líneas |
| `<button type="submit">` | Botón para enviar el formulario |
| `required` | Campo obligatorio |
| `for` / `id` | Conectan el label con el input |
| `name` | Identifica el campo al enviar |

---

## Ejercicio de clase

Tomá el formulario de la pizzería y convertilo en el formulario de pedido de otro negocio. Puede ser una heladería, una hamburguesería, una librería — lo que quieras.

Tenés que:
- Cambiar el nombre del negocio en el `<title>`, el `<h1>` y el `<footer>`
- Adaptar los campos al nuevo negocio (los sabores de helado no son lo mismo que los ingredientes de pizza)
- Mantener al menos un campo de cada tipo: `text`, `email`, `radio`, `checkbox`, `select`, `textarea`

No borrés campos porque sí — si un tipo de input no aplica al negocio que elegiste, reemplazalo por uno que sí tenga sentido.

---

## Tarea para la casa

Armá un formulario nuevo desde cero, sin usar el de la pizzería como base. El tema lo elegís vos.

Requisitos mínimos:
- Un campo `type="text"`
- Un campo `type="email"`
- Al menos dos `type="radio"` agrupados con el mismo `name`
- Al menos tres `type="checkbox"`
- Un `<select>` con al menos tres opciones
- Un `<textarea>`
- Un `<button type="submit">`
- Todos los campos con su `<label>` correctamente conectado via `for` e `id`
- Al menos tres campos con `required`
