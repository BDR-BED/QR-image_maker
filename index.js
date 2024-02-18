import fs from 'fs';
import inquirer from 'inquirer';
import qr from 'qr-image';

var identNum ;
function qrImgCount (){
  identNum = Math.floor(Math.random() * 10000);
}

inquirer
  .prompt([{
      type: 'input',
      name: 'url',
      message: 'Введіть гіперпосилання',
  }
  ])
  
  .then((answers) => {
    // feedback
    const enteredUrl = answers.url;
    const qr_png = qr.image(enteredUrl, { type: 'png' });
    qrImgCount();
    const outputFilename = 'my_qr_code_' + identNum + ".png";
    qr_png.pipe(fs.createWriteStream(outputFilename));
    console.log(`QR-код було збережено у файлі "${outputFilename}".`);
  })
  
  .catch((error) => {
    if (error.isTtyError) {
        console.log(`err`);
    } else {
        console.log(`err`);
    }
  });


