function main() {
    // Obtener todos los elementos de lista <li>
    const listItems = document.querySelectorAll("#ap ul li");
  
    // Agregar un evento de clic a cada elemento de lista
    listItems.forEach(item => {
      item.addEventListener("click", () => {
        // Verificar si el elemento de descripción ya existe
        const descriptionElement = item.nextElementSibling;
        if (descriptionElement && descriptionElement.classList.contains("description")) {
          // Si la descripción existe, eliminarla del DOM
          descriptionElement.remove();
        } else {
          // Si la descripción no existe, crearla y agregarla al DOM
          const description = item.dataset.description;
          const newDescriptionElement = document.createElement("p");
          newDescriptionElement.textContent = description;
          newDescriptionElement.classList.add("description");
          item.insertAdjacentElement("afterend", newDescriptionElement);
        }
      });
    });
  }
  
  // Llamar a la función principal una vez que se cargue el DOM
  document.addEventListener("DOMContentLoaded", main);
  