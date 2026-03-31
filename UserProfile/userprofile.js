const form = document.getElementById('profile-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fields = ['name', 'age', 'city', 'hobby'];
    let isValid = true;

    fields.forEach(id => {
        const input = document.getElementById(id);
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '';
        }
    });

    if (!isValid) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }

});
