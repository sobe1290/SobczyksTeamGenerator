const fs = require('fs');

const htmlHeadTag = `
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="./style.css">
</head>`

const htmlBodyContentOpenTag = `
<body>

<div class="header">  
<h2>My Team</h2>
</div>

<div class="allCards">`


const htmlBodyContentClosingTag = `    
</div>

</body>
</html>`

const htmlEmployeeCardElementUpper = `
<div class="card">
    <div class="container">
        <div class="topHalf">
            <h4>${answers.Member_Name}</h4>
            <p>Role:${answers.Member_Role}</p>
        </div>
        <div class="bottomHalf">
            <p>ID: ${answers.Member_Id}</p>
            <p><a href="mailto:${answers.Member_Email}">${answers.Member_Email}</a></p>`

const htmlEmployeeCardElementLower = `            
        </div>    
    </div>
</div>`

const htmlManagerCardElement = `
    ${htmlEmployeeCardElementUpper}
    <p>Office Number ${answers.Member_Office}</p>
    ${htmlEmployeeCardElementLower}`


const htmlEngineerCardElement = `
    ${htmlEmployeeCardElementUpper}
    <p><a href="https://github.com/${answers.Member_Github}" target="_blank">Github Link</a></p>
    ${htmlEmployeeCardElementLower}`

const htmlInternCardElement = `
    ${htmlEmployeeCardElementUpper}
    <p>${answers.Member_School}</p>
    ${htmlEmployeeCardElementLower}`

let cardArray = [htmlManagerCardElement];


const htmlString = `${htmlHeadTag}${htmlBodyContentOpenTag}${cardArray}${htmlBodyContentClosingTag}`