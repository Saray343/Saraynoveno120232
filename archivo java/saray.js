document.addEventListener('DOMContentLoaded', (event) => {
    // Selecting the navigation items
    const navItems = document.querySelectorAll('#navegacion #item a');

    // Adding event listener to each navigation item
    navItems.forEach((navItem) => {
        navItem.addEventListener('click', (event) => {
            event.preventDefault();
            console.log(`You clicked on ${event.target.innerText}`);
        });
    });

    // Selecting the section text
    const sectionText = document.querySelector('.cajasection .texto1');

    // Changing the color of the section text on mouse over
    sectionText.addEventListener('mouseover', (event) => {
        event.target.style.color = 'blue';
    });

    // Changing the color back to initial on mouse out
    sectionText.addEventListener('mouseout', (event) => {
        event.target.style.color = '';
    });
});


//segunda parte
document.addEventListener('DOMContentLoaded', (event) => {
    // Selecciona los elementos de la lista
    const listItems = document.querySelectorAll('.cajasection ul li');

    // Añade un detector de eventos a cada elemento de la lista
    listItems.forEach((listItem) => {
        listItem.addEventListener('click', (event) => {
            event.preventDefault();
            // Cambia la fuente y el color del elemento de la lista
            event.target.style.fontFamily = 'Arial';
            event.target.style.color = 'blue';
        });
    });
});