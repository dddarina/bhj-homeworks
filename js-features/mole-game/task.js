let countWin = 0;
let countLose = 0;

const getHole = index => document.getElementById(`hole${index}`);
const deadElement = document.getElementById('dead');
const lostElement = document.getElementById('lost');

if (!deadElement || !lostElement) {
    console.error('Счет не найден!');
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    
    if (!hole) {
        console.warn(`Лунка hole${i} не найдена`);
        continue;
    }
    
    hole.onclick = function() {
        if (this.classList.contains('hole_has-mole')) {
            countWin++;
            if (deadElement) deadElement.textContent = countWin;
            
            this.classList.remove('hole_has-mole');
            
            if (countWin === 10) {
                alert('Победа! Вы убили 10 кротов!');
                resetGame();
            }
        } else {
            countLose++;
            if (lostElement) {
                lostElement.textContent = countLose;
            }
            
            if (countLose === 5) {
                alert('Игра окончена! Слишком много промахов!');
                resetGame();
            }
        }
    };
}

function resetGame() {
    countWin = 0;
    countLose = 0;
    if (deadElement) deadElement.textContent = countWin;
    if (lostElement) lostElement.textContent = countLose;
}