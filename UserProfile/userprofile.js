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
    const output = document.getElementById('output');
    output.innerHTML = `
    <h3>Данные сохранены:</h3>
    <p>Имя: ${document.getElementById('name').value}</p>
    <p>Возраст: ${document.getElementById('age').value}</p>
    <p>Город: ${document.getElementById('city').value}</p>
    <p>Хобби: ${document.getElementById('hobby').value}</p>
`;
    output.style.display = 'block';
});

document.getElementById('clear-btn').addEventListener('click', () => {
    form.reset();
    document.getElementById('output').style.display = 'none';
    document.querySelectorAll('input').forEach(i => i.style.borderColor = '');
});
