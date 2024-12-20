document.getElementById('upload').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const preview = document.getElementById('preview');

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.innerHTML = `<img src="${e.target.result}" alt="Uploaded Picture">`;
        };
        reader.readAsDataURL(file);
    } else {
        preview.innerHTML = '';
    }
});
