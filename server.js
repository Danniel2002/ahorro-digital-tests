const express = require('express');
const app = express();

/* =========================
   REGISTRO – P0
========================= */
app.get('/registro', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Registro</title>
</head>
<body>

<h1>Registro</h1>

<form onsubmit="return false;">
  <input id="nombre" placeholder="Nombre" oninput="validateForm()" />
  <input id="email" placeholder="Email" oninput="validateForm()" />
  <input id="password" type="password" placeholder="Contraseña" oninput="validateForm()" />

  <br><br>

  <button type="button" id="recaptcha-valid" onclick="setRecaptcha(true)">
    Recaptcha válido
  </button>

  <button type="button" id="recaptcha-invalid" onclick="setRecaptcha(false)">
    Recaptcha inválido
  </button>

  <br><br>

  <button type="button" id="registrarse" disabled>
    Registrarse
  </button>
</form>

<br>

<div class="mensaje-bienvenida" hidden>
  Bienvenido Juan Pérez
</div>

<div class="mensaje-error">
  Recaptcha inválido
</div>

<script>
  let recaptchaOk = false;

  const btn = document.getElementById('registrarse');
  const error = document.querySelector('.mensaje-error');
  const success = document.querySelector('.mensaje-bienvenida');

  error.hidden = true;

  function validateForm() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    btn.disabled = !(nombre && email && password && recaptchaOk);
  }

  function setRecaptcha(isValid) {
    recaptchaOk = isValid;

    error.hidden = isValid;
    success.hidden = true;

    validateForm();
  }

  btn.onclick = () => {
    if (recaptchaOk) {
      success.hidden = false;
    }
  };
</script>

</body>
</html>
`);
});

/* =========================
   LOGIN – P0
========================= */
app.get('/login', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<body>

<h1>Login</h1>

<form onsubmit="return false;">
  <input id="usuario" placeholder="Usuario" />
  <input id="password" type="password" placeholder="Contraseña" />
  <button id="ingresar">Ingresar</button>
</form>

<div class="mensaje-error">
  Credenciales inválidas
</div>

</body>
</html>
`);
});

/* =========================
   SIMULADOR – P1
========================= */
app.get('/simulador', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<body>

<h1>Simulador</h1>

<form onsubmit="return false;">
  <input id="monto" placeholder="Monto" />
  <button id="calcular">Calcular</button>
</form>

<div class="resultado" hidden>
  Ganancia proyectada
</div>

<div class="mensaje-error" hidden>
  Monto inválido
</div>

<script>
  document.getElementById('calcular').onclick = () => {
    const monto = Number(document.getElementById('monto').value);

    document.querySelector('.resultado').hidden = !(monto > 0);
    document.querySelector('.mensaje-error').hidden = monto > 0;
  };
</script>

</body>
</html>
`);
});

/* =========================
   PRODUCTOS – P2
========================= */
app.get('/productos', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<body>

<h1>Productos de Ahorro</h1>

<div class="producto">Cuenta de Ahorros</div>
<div class="producto">CDT</div>
<div class="producto">Ahorro Programado</div>

</body>
</html>
`);
});

/* =========================
   PERFIL – 401
========================= */
app.get('/perfil', (req, res) => {
  res.status(401).send('No autorizado');
});

/* =========================
   404
========================= */
app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});