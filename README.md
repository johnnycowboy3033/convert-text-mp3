# Introduction

I use this application to generate the audio for the videos that I create that I upload to YouTube.      


# Getting Started

To run the program from the terminal uses the follow command. Make sure [NodeJs](https://nodejs.org/en/) is first installed on your computer.  

```bash

$ node index.js
```     

When the text is converted to mp3 you will see the follow message telling you where the generated file in saved.     

```
$ Success! Open file ./output/hello.mp3 to hear result.

```

# File Format    

![Input File](https://github.com/johnnycowboy3033/github-resources/blob/main/convert-text-mp3/input-file.png)


* Application Directive - This tells the application what operation that needs to be performed. For example the **OUT_MP3** tells the applications a text to audio conversion is the operation to do. 
* Directive Data - This is the attribute data for the Application Directive. For example the **OUT_MP3** tells the applications the name for the file. 
* Additional Information -  This is the sentence you wanted to be converted into audio.

