import { jsPDF } from 'jspdf';
import { calibriNormal } from '../calibriNormal';

const stamp = require('../images/foodboss_stamp.png');

export const pdfCreatorFoodBoss = data => {
  const pdf = new jsPDF('l');

  pdf.addFileToVFS('Calibri-normal.ttf', calibriNormal);
  pdf.addFont('Calibri-normal.ttf', 'Calibri', 'normal');
  pdf.setFont('Calibri');

  data.stampCheck && pdf.addImage(stamp, 'png', 220, 30, 40, 40);

  pdf.setFontSize(18).text('FOODBOSS', 10, 10);
  pdf.setFontSize(11).text('ФОП КИРМИЗИ ПОЛІНА ОЛЕКСАНДРІВНА', 10, 18);
  pdf.text('Код за ДРФО 3513612007', 10, 23);
  pdf.text('М.ОДЕСА, ВУЛ. 6-ТА СТАНЦІЯ ЛЮСТДОРФСЬКОЇ ДОРОГИ', 30, 28);

  pdf.setFontSize(18).text('ГАРАНТІЙНИЙ ТАЛОН', 148, 42, { align: 'center' });

  pdf.setFontSize(11).text('Найменування', 30, 55);
  pdf.text(data.name, 70, 55);
  pdf.text('Серійний номер', 30, 60);
  pdf.text(data.serial_num, 70, 60);
  pdf.text('Дата продажу', 30, 65);
  pdf.text(data.date, 70, 65);
  pdf.text('Строк гарантії', 30, 70);
  pdf.text(`${data.period}     місяць(ів)`, 70, 70);
  pdf.text('Покупець', 30, 75);
  pdf.text(data.buyer, 70, 75);

  pdf.setFontSize(8).text('До уваги споживачів!', 10, 85);

  pdf.text(
    `Гарантійний ремонт здійснюється за обов'язкової наявності даного гарантійного талона.`,
    10,
    92
  );
  pdf.text(
    '1. Без правильно оформленого гарантійного талона або виправлення у гарантійному талоні претензії до якості не приймаються.',
    10,
    95.5
  );
  pdf.text(
    '2. Сервісний відділ може відмовити у гарантійному ремонті у випадках:',
    10,
    99
  );
  pdf.text('- наявності механічних пошкоджень;', 15, 102.5);
  pdf.text('- порушення безпеки гарантійних пломб;', 15, 106);
  pdf.text('- надходження в ремонт брудного обладнання;', 15, 109.5);
  pdf.text('- виконання ремонту іншими організаціями. ', 15, 113);
  pdf.text(
    '3. Транспортування несправного пристрою з необхідними документами до сервісного відділу здійснюється споживачем. Або споживач оплачує транспортні витрати для поїздки до місця експлуатації обладнання.',
    10,
    116.5
  );
  pdf.text(
    '4. Гарантія не поширюється на пристрої, що вийшли з ладу в результаті:',
    10,
    120
  );
  pdf.text(
    '- випадкових або умисних ушкоджень, заподіяних споживачем;',
    15,
    123.5
  );
  pdf.text('- дефектів, викликаних стихійним лихом;', 15, 127);
  pdf.text(
    '- ушкоджень, спричинених проникненням в апарат комах, вологи чи агресивних середовищ;',
    15,
    130.5
  );
  pdf.text(
    '- порушення правил експлуатації, зазначених в інструкції;',
    15,
    134
  );
  pdf.text(
    '- неправильного підключення або експлуатації електромережі.',
    15,
    137.5
  );
  pdf.text(
    `5. Гарантійні зобов'язання не поширюються на витратні матеріали та будь-які інші змінні елементи, що мають природний обмежений період працездатності (лампи, картриджі, нагр. елементи, шторки до холодильних вітрин)`,
    10,
    141
  );
  pdf.text(
    `6. Обмін товару належної якості проводиться, якщо він не був в експлуатації та збережений товарний вигляд, якість, пломби, ярлики а також товарний чи касовий чек чи інші документи, видані споживачеві разом із`,
    10,
    144.5
  );
  pdf.text('проданим товаром.', 13, 148);
  pdf.text(
    '7. Холодильне, технологічне вагове обладнання передбачає планове технічне обслуговування, обумовлене в паспорті або договорі на ТО.',
    10,
    151.5
  );
  pdf.text(
    '8. Термін гарантійного ремонту – не більше 14 днів. У разі відсутність запасних частин на складі термін ремонту збільшується на термін поставки запасних частин.',
    10,
    155
  );
  pdf.text(
    '9. На час проведення гарантійного обслуговування перебіг гарантійного строку припиняється.',
    10,
    158.5
  );
  pdf.text(
    '10. Гарантія поширюється на обладнання в цілому, при заміні складових частин, при гарантійному обслуговуванні, термін дії гарантії на замінені частини не може перевищувати терміну гарантії на обладнання в цілому.',
    10,
    162
  );

  pdf.setFontSize(11).text('З умовами гарантії ознайомлено:', 10, 185);
  pdf.line(70, 185, 130, 185);
  pdf.text('Дата', 140, 185);
  pdf.line(160, 185, 220, 185);
  pdf.text('(П.І.Б.) підпис', 230, 185);

  pdf.save(`Гарантія_${data.name}_${data.buyer}`);
};
