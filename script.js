document.addEventListener('DOMContentLoaded', () => {
    const tableau = document.getElementById('tableau');

    for (let i = 0; i < 100; i++) {
        const cellule = document.createElement('div');
        cellule.classList.add('cellule');
        cellule.addEventListener('click', () => {
            cellule.classList.toggle('verte');
        });

        cellule.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        cellule.addEventListener('drop', (event) => {
            event.preventDefault();
            const color = event.dataTransfer.getData('color');
            cellule.style.backgroundColor = color;
        });

        tableau.appendChild(cellule);
    }

    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach(pixel => {
        pixel.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('color', pixel.dataset.color);
        });
    });
});
