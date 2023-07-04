const scriptURL = 'https://script.google.com/macros/s/AKfycbyVK4z9ZoazKsvwxZAP9EsItvNoLmEFwU-haM6vrSfNvJoiI0rGmXxW9yZ-pyAJSY0-/exec';
const form = document.forms['contactform'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
        .then(() => {
            alert('Data successfully added!');
            form.reset();
        })
        .catch(() => {
            alert('Error adding data to Google Sheets. Please try again later.');
        });
});

