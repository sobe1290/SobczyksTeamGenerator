import * as fs from 'fs';

export const htmlHeadTag = `
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="./style.css">
</head>`;

export const htmlBodyContentOpenTag = `
<body>

<div class="header">  
<h2>My Team</h2>
</div>

<div class="allCards">`;


export const htmlBodyContentClosingTag = `    
</div>

</body>
</html>`;

export const cardArray = [];

export function generateHTML () {
  let stringyCards = cardArray.join();
  const htmlString = `${htmlHeadTag}${htmlBodyContentOpenTag}${stringyCards}${htmlBodyContentClosingTag}`; 

  fs.writeFile('./dist/generated.html', htmlString, (err) => {
    if (err) 
      console.error(err); 
    else {
      console.log('Success! Check the /dist folder for generated.html');
    };
  });
};
