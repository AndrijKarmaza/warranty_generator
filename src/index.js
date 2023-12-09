import { formatDate } from './script/formatDate';
import { pdfCreatorFoodBoss } from './script/pdfCreatorFoodBoss';
import { pdfCreatorNumberOne } from './script/pdfCreatorNumberOne';

const form = document.querySelector('.warranty_form');
form.addEventListener('click', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const { name, serial_num, date, period, buyer } = e.currentTarget.elements;

  const data = {
    name: name.value,
    serial_num: serial_num.value,
    date: formatDate(date.value),
    period: period.value,
    buyer: buyer.value,
  };

  e.target.textContent === 'foodboss'
    ? pdfCreatorFoodBoss(data)
    : pdfCreatorNumberOne(data);

  form.reset();
}
