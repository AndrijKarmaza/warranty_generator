import { formatDate } from './script/formatDate';
import { pdfCreator } from './script/pdfCreator';

const form = document.querySelector('.warranty_form');
form.addEventListener('submit', onSubmit);

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

  pdfCreator(data);

  form.reset();
}
