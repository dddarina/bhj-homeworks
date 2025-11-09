const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    const formData = new FormData(form);

    progress.value = 0.0;

    xhr.upload.addEventListener('progress', function (e) {
        if (e.lengthComputable) {
            const percentComplete = (e.loaded / e.total);
            progress.value = percentComplete;
        }
    });

    xhr.upload.addEventListener('load', function () {
        progress.value = 1.0;
    });

    xhr.addEventListener('load', function () {
        if (xhr.status === 201) {
            alert('Файл успешно отправлен!');
            setTimeout(() => progress.value = 0.0, 1000);
        } else {
            alert('Ошибка при отправке файла: ' + xhr.status);
        }
    });

    xhr.addEventListener('error', function () {
        alert('Ошибка сети при загрузке файла');
        progress.value = 0;
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
});