class RangeSlider {
  constructor(slider){
    this.slider = slider;
    this.placeholder = document.getElementById(this.slider.getAttribute('data-placeholder'));

    this.bootstrap();
  }

  bootstrap() {
    this.setValue();

    this.slider.addEventListener('input', () => {
      this.setValue();
    });
  }

  setValue() {
    this.placeholder.innerHTML = this.slider.value;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let sliders = document.getElementsByClassName('range-slider');
  for (let i = 0; i < sliders.length; i++) {
    let slider = sliders[i];
    new RangeSlider(slider);
  }
});
