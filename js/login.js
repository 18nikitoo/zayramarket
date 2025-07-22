document.querySelector('.form').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = this.querySelector('input[type="text"]').value.trim();
  const password = this.querySelector('input[type="password"]').value.trim();

  const loginErrorId = 'loginErrorMessage';
  let errorMsg = document.getElementById(loginErrorId);

  // Si no existe el mensaje de error, lo creamos
  if (!errorMsg) {
    errorMsg = document.createElement('p');
    errorMsg.id = loginErrorId;
    errorMsg.style.color = '#B22222'; // rojo oscuro
    errorMsg.style.textAlign = 'center';
    errorMsg.style.marginTop = '1em';
    this.appendChild(errorMsg);
  }

  if (username === 'admin' && password === '1234') {
    // Login correcto: guardamos estado y redirigimos
    localStorage.setItem('logueado', 'true');
    window.location.href = 'index.html';
  } else {
    errorMsg.textContent = 'Usuario o contraseña incorrectos.';
  }
});
