import { jsPDF } from 'jspdf';
import { calibriNormal } from '../calibriNormal';

const pdf = new jsPDF();

pdf.addFileToVFS('Calibri-normal.ttf', calibriNormal);
pdf.addFont('Calibri-normal.ttf', 'Calibri', 'normal');
pdf.setFont('Calibri');

export const pdfCreator = data => {
  pdf.setFontSize(20).text('FOODBOSS', 10, 10);
  pdf.setFontSize(12).text('ФОП КИРМИЗИ ПОЛІНА ОЛЕКСАНДРІВНА', 10, 18);
  pdf.text('Код за ДРФО', 10, 23);
  pdf.text('М.ОДЕСА, ВУЛ. 6-ТА СТАНЦІЯ ЛЮСТДОРФСЬКОЇ ДОРОГИ', 20, 28);
  pdf.setFontSize(20).text('ГАРАНТІЙНИЙ ТАЛОН', 70, 42);
  pdf.setFontSize(12).text('Найменування', 10, 55);
  pdf.text(data.name, 50, 55);
  pdf.text('Серійний номер', 10, 60);
  pdf.text(data.serial_num, 50, 60);
  pdf.text('Дата продажу', 10, 65);
  pdf.text(data.date, 50, 65);
  pdf.text('Строк гарантії', 10, 70);
  pdf.text(`${data.period}     місяць(ів)`, 50, 70);
  pdf.text('Покупець', 10, 75);
  pdf.text(data.buyer, 50, 75);

  pdf.save(`${data.name}`);
};
