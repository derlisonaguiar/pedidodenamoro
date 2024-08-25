document.addEventListener('DOMContentLoaded', function () {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    let step = 1;

    noButton.addEventListener('mouseover', () => {
        if (step === 1 || step === 2) {
            moveButton(noButton);
        }
    });

    yesButton.addEventListener('click', () => {
        if (step === 1) {
            document.querySelector('h1').textContent = 'Tem certeza?';
            step = 2;
        } else if (step === 2) {
            document.querySelector('h1').textContent = 'Agora somos namorados, eu vou cuidar muito de você! ❤️';
            yesButton.style.display = 'none';
            noButton.style.display = 'none';
        }
    });

    function moveButton(button) {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();
        const offsetX = Math.random() * (containerRect.width - buttonRect.width);
        const offsetY = Math.random() * (containerRect.height - buttonRect.height);

        button.style.position = 'absolute';
        button.style.left = `${offsetX}px`;
        button.style.top = `${offsetY}px`;
    }
});
