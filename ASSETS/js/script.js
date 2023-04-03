const mode = document.getElementById('mode_icon')
const forms = document.getElementById('login-form')



mode.addEventListener('click', () => {
    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun')

        forms.classList.add('dark')
        return
    }

    mode.classList.add('fa-moon')
    mode.classList.remove('fa-sun')
    forms.classList.remove('dark')
});
