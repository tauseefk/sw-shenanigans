const express = require('express'),
  app = express(),
  fs = require('fs');

app.use('/', express.static(__dirname));
app.set('port', (process.env.PORT || 3000));

homepage = (req, res) => {
  fs.createReadStream('./index.html')
    .pipe(res);
}
app.get('/', homepage);
app.listen(app.get('port'), function () {
  console.log(`Node app is running on port: ${app.get('port')}`);
});