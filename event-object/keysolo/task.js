class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timeElement = container.querySelector('.status__time');

    this.reset();
    this.registerEvents();
  }

  timer(word) {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    const wordArray = [...word];
    let newCount = wordArray.length;
    this.timeElement.textContent = newCount;

    this.intervalId = setInterval(() => {
      if (newCount > 0) {
        newCount--;
        this.timeElement.textContent = newCount;
      } else {
        clearInterval(this.intervalId);
        this.fail();
      }
    }, 1000);
  }

  reset() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

registerEvents() {
    document.addEventListener('keydown', (event) => {
      if (!this.currentSymbol) return;

      const pressedKey = event.key;
      const expectedSymbol = this.currentSymbol.textContent;

      const ignoreKeys = ['Shift', 'Control', 'Alt', 'Meta', 'CapsLock', 'Tab', 'Escape'];
      if (ignoreKeys.includes(pressedKey)) {
        return;
      }

      if (pressedKey === ' ' && expectedSymbol === ' ') {
        event.preventDefault();
        this.success();
      }
      
      else if (pressedKey === 'Backspace') {
        return;
      }
      else if (pressedKey.length === 1) {
        event.preventDefault();
        
        if (pressedKey.toLowerCase() === expectedSymbol.toLowerCase()) {
          this.success();
        } else {
          this.fail();
        }
      }
    });
  }


  success() {
    if (this.currentSymbol.classList.contains("symbol_current")) {
      this.currentSymbol.classList.remove("symbol_current");
    }
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    let wins = parseInt(this.winsElement.textContent) + 1;
    this.winsElement.textContent = wins;

    if (wins === 10) {
      alert('Победа!');
      this.reset();
    } else {
      this.setNewWord();
    }
  }

  fail() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    let loss = parseInt(this.lossElement.textContent) + 1;
    this.lossElement.textContent = loss;

    if (loss === 5) {
      alert('Вы проиграли!');
      this.reset();
    } else {
      this.setNewWord();
    }
  }

  setNewWord() {
    const word = this.getWord();
    this.timer(word);
    this.renderWord(word);
  }

  getWord() {
    const words = [
      'я люблю bob',
      'какашка awesome', 
      'netology',
      'hello',
      'kitty',
      'rock',
      'youtube',
      'popcorn',
      'cinema',
      'love',
      'javascript',
      'привет world',   
      'hello мир',      
      'кот cat',         
      '123 числа',       
      'test тест'        
    ];
    const index = Math.floor(Math.random() * words.length);
    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'));