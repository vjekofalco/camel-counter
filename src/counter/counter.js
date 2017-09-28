class Counter {
  constructor(counter) {
    this.counter = counter;
    this.countTo = Array.from({length : Number(this.counter.getAttribute('data-count-result'))}, (value, key) => key);

    this.bootstrap();
  }

  bootstrap() {
    for(let i = 0; i <= this.countTo.length; i++) {
      setTimeout(() => {
        this.counter.innerHTML = i;
      }, i * 30)
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let counter = document.getElementById('count-result');
  new Counter(counter);
});
