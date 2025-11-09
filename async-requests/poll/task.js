const pollAnswers = document.getElementById('poll__answers');
const pollTitle = document.getElementById('poll__title');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.responseType = 'json';

xhr.onload = function() {
    if (xhr.status === 200) {
        const data = xhr.response;
        
        pollTitle.textContent = data.data.title;
        
        data.data.answers.forEach(answer => {
            const button = document.createElement('button');
            button.className = 'poll__answer';
            button.textContent = answer;
            
            button.addEventListener('click', function() {
                alert('Спасибо, ваш голос засчитан!');
            });
            
            pollAnswers.appendChild(button);
        });
    } else {
        pollTitle.textContent = 'Ошибка загрузки опроса';
    }
};

xhr.onerror = function() {
    pollTitle.textContent = 'Ошибка сети';
};

xhr.send();