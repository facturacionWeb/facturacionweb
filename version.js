// version.js
document.addEventListener("DOMContentLoaded", function() {
    alert("punto 1");
    const versionContainer = document.createElement("div");
    versionContainer.classList.add("container");
    versionContainer.innerHTML = '<p>Versión del sitio: 2024101911</p>';
    
    // Seleccionar un elemento antes del cual insertar el contenedor de versión
    const mainContainer = document.querySelector('.container');
    if (mainContainer) {
        mainContainer.insertAdjacentElement('afterend', versionContainer);
    } else {
        document.body.appendChild(versionContainer);
    }
});

