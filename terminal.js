const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile ('terminal-command.js', (err) => {
      if (err) throw err;
     console.log('File was created')
      })
    };

module.exports.mkdir = () => {
  fs.mkdir('./test', (err) => {
      if (err) throw err;
      console.log('created directory');
  })
}