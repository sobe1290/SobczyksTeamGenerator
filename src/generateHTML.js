import * as fs from 'fs';

//This is the html frame work that will be added to the generated page, to link with the style sheet.
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

//This is an empty array that will be filled with the amount of cards that are generated.
export const cardArray = [];

//This is a function that will take the cards and insert them into the html.
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
