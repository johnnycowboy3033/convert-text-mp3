const gTTS = require('gtts');
const fs = require('fs');

const path = require('path');
  
// Calling the readFileSync() method
// to read 'input.txt' file
var data = fs.readFileSync('./input.txt', {encoding:'utf8', flag:'r'});
 
// Display the file data
//console.log(data);

var run = true;

var dirname = './output'; 

filenames = fs.readdirSync(dirname);

for (const file of filenames) {
    fs.unlinkSync(path.join(dirname, file));
}


while( run ){

    // Points to the NEXT LEFT BRACKET in the data string
    var nextLeftBracket = 0;

    var commandLeft = data.indexOf("{");
    var commandRight = data.indexOf("}");

    var command = JSON.parse( data.slice(commandLeft, commandRight+1));


    Object.keys( command ).forEach(function(key) {

        console.log("KEY: " + key);
        var value = command [key];

        console.log("VALUE: " + value);

        data = data.substring(commandRight +1);

        if( key == "OUT_MP3"){

            nextLeftBracket = data.indexOf("{");

            var text = data.substring(0,nextLeftBracket);
            var textWithOutReturn = text.replace("\n","");

            console.log("TEXT: " + textWithOutReturn );

            var gtts = new gTTS( textWithOutReturn , 'en');

            var mp3_path = value;

            gtts.save( dirname + '/' + mp3_path , function (err, result) {
            if(err) { 
                throw new Error(err) 
            }

            console.log('Success! Open file ' + mp3_path + ' to hear result.');
            });


        }

        if( key == "SYSTEM"){

            if( value == "DONE"){
                run = false;
            }
        }
    });

    

}
