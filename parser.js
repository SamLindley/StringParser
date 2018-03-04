const data = require('./data.json');
const fs = require('fs');


const parse = () => {

    data.forEach(item => {
        let openingWords = [];
        let descriptionAsArray = item.description.split(" ");
        for (let x = 0; x < 8; x++) {
            openingWords.push(descriptionAsArray[x])
        }

        let trimmedDescription = [];
        let counter = 0;
        for (let x = 0; x < descriptionAsArray.length; x++) {
            if (counter !== 0
                && descriptionAsArray[counter] === openingWords[0]
                && descriptionAsArray[counter + 1] === openingWords[1]
                && descriptionAsArray[counter + 2] === openingWords[2]
                && descriptionAsArray[counter + 3] === openingWords[3]) {
                break;
            } else {
                trimmedDescription.push(descriptionAsArray[counter]);
                counter++
            }
        }
        
        let trimmedDescriptionString = '';
        trimmedDescription.forEach(word => {
            trimmedDescriptionString += word + " "
        });

        item.description = trimmedDescriptionString;
    });

    const json = JSON.stringify(data);
    fs.writeFile('parsedBooks.json', json, 'utf8');

};

parse();