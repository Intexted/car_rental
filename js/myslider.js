const slide = ({
  img,
  name,
  version,
  price,
}) => `<div class="cars-slider__item">
<div class="om-container">
    <div class="cars-slider__item-inner om-container__inner">
        <div class="cars-slider__item-description">
            <div class="cars-slider__item-category">Economy</div>
            <h3 class="cars-slider__model"><span class="cars-slider__model-inner">${name} <span
                        class="cars-slider__model-br"><br></span>${version}</span></h3>
            <div class="cars-slider__item-description-sep"></div>
            <div class="cars-slider__item-price"><span class="cars-slider__item-price-value">${price}<span
            class="omcr-price-currency">DH</span></span><span
                    class="cars-slider__item-price-period"> day</span></div>
            <div class="cars-slider__item-reserve">
                <span class="cars-slider__item-reserve-button" data-car-id="15">Reserve Now</span>
            </div>
        </div>
        <div class="cars-slider__item-image">
            <img src="${img}" alt="Toyota Aygo">
        </div>
        <div class="cars-slider__item-options">
            <div class="cars-slider__item-options-inner">
                <div class="cars-slider__item-option car-option-doors"><span
                        class="cars-slider__item-option-label">Doors: </span><span
                        class="cars-slider__item-option-value">4</span></div>
                <div class="cars-slider__item-option car-option-passengers"><span
                        class="cars-slider__item-option-label">Passengers: </span><span
                        class="cars-slider__item-option-value">4</span></div>
                <div class="cars-slider__item-option car-option-luggage"><span
                        class="cars-slider__item-option-label">Luggage: </span><span
                        class="cars-slider__item-option-value">2 Small Bags</span></div>
                <div class="cars-slider__item-option car-option-transmission"><span
                        class="cars-slider__item-option-label">Transmission: </span><span
                        class="cars-slider__item-option-value">Manual</span></div>
                <div class="cars-slider__item-option car-option-conditioning"><span
                        class="cars-slider__item-option-label">Air conditioning: </span><span
                        class="cars-slider__item-option-value">No</span></div>
                <div class="cars-slider__item-option car-option-age"><span
                        class="cars-slider__item-option-label">Minimum age: </span><span
                        class="cars-slider__item-option-value">20</span></div>
            </div>
        </div>
        <div class="cars-slider__item-reserve-mobile">
            <span class="cars-slider__item-reserve-button" data-car-id="15">Reserve Now</span>
        </div>
    </div>
</div>
</div>`;

const data = [
  {
    img: './cars/Citroën-C3.png',
    name: 'Citroën',
    version: 'C3',
    price: '500',
  },
  {
    img: './cars/clio-4.png',
    name: 'Renault',
    version: ' CLIO 4',
    price: '300',
  },
  {
    img: './cars/dacia-logan.png',
    name: 'Dacia',
    version: 'Logan',
    price: '200',
  },
  { img: './cars/fiat 500.png', name: 'Fiat', version: '500', price: '350' },
  { img: './cars/golf 7.png', name: 'Golf', version: '7', price: '400' },
  {
    img: './cars/car2.png',
    name: 'Range-Rover',
    version: 'Evoque',
    price: '700',
  },
];

let slider_html = '';
data.map((c) => (slider_html += slide(c)));
console.log(slider_html);
document.getElementById('myslider').innerHTML = slider_html;
