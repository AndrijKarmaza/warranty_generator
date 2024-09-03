import { formatDate } from './script/formatDate';
import { pdfCreatorFoodBoss } from './script/pdfCreatorFoodBoss';
import { pdfCreatorNumberOne } from './script/pdfCreatorNumberOne';
import { pdfCreatorDad } from './script/pdfCreatorDad';

const form = document.querySelector('.warranty_form');
form.addEventListener('submit', onSubmit);

const clearBtn = document.querySelector('.clear_btn');
clearBtn.addEventListener('click', () => form.reset());

function onSubmit(e) {
  e.preventDefault();
  const { company, name, serial_num, date, period, buyer } =
    e.currentTarget.elements;

  const data = {
    name: name.value.trim(),
    serial_num: serial_num.value.trim(),
    date: formatDate(date.value),
    period: period.value,
    buyer: buyer.value.trim(),
  };

  if (company.value === 'fb') {
    pdfCreatorFoodBoss(data);
  } else if (company.value === 'nr') {
    pdfCreatorNumberOne(data);
  } else {
    pdfCreatorDad(data);
  }

  // company.value === 'fb' ? pdfCreatorFoodBoss(data) : pdfCreatorNumberOne(data);
}
