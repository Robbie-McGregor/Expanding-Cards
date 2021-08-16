const panels =  document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        console.log(panel);
        panels.forEach((panel) => panel.classList.remove('active'))
        panel.classList.add('active')
    })
})