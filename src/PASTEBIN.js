/*

PASTEBIN RULES:
1.) Your code should always be contained within the blocks shown at the top and bottom of the example
2.) Always describe the behavior and parameters of the code you're writing. The goal is for someone else in the group
        to be able to copy/paste the block of code into their file and understand the code well enough from your description
        that they don't need to contact you for help implementing.
3.) You may add dividers, as shown in the example, to show multiple iterations or versions of the same code or to make
        your code more readable.
4.) Do not use any block comment syntax. The entire document is one big block comment, you'll break it. :)







I left some templates below for less work :D










=======================================================================================================================
Header Block Example Title
    This is a short description of the code contained within this block. Here I describe the full functionality of the
    code below, which multiplies a given input by two and then returns the value to the parent module.
Parameter List
    foo - the input for the given code. It will be multiplied by two before being returned.
    bar - the product of foo and 2, which is returned to parent module
Dependency List
    math - multiplication logic required from math library
=======================================================================================================================

import math from "math"

mult2 (foo) {


_______________________________________________________________________________________________________________________
a code divider for dramatic effect (I did this with the underscore character)
_______________________________________________________________________________________________________________________


    bar = foo * 2
    //inline comments are left intact, because the entire code block can be copied from the center
        without having to uncomment anything.
    return(bar)

}

=======================================================================================================================
Footer Block Example
    This space is for any additional notes about the code. Even if you have no notes, please leave a blank space
    in the center so that it's clear your code block is finished.
=======================================================================================================================






=======================================================================================================================
CSV and JSON conversion
    This code will allow conversion from CSV to JSON and JSON to CSV.
Parameter List
    source - the source file to be converted or written to
Dependency List
    CSVtoJSON  - CSV to JSON conversion library
    JSONtoCSV  - JSON to CSV conversion library
    FileSystem - Filesystem access library
=======================================================================================================================

// const CSVtoJSON = require("csvtojson");
// const JSONtoCSV = require("json2csv").parse;
// const FileSystem = require("fs");

//CSV to JSON push and conversion
/*CSVtoJSON().fromFile("./sourcefile.csv").then(source => {
  console.log(source);
  source.push({
    //whatever columns we have in the CSV
    //format
    //"column": "value"
  });


  //Converstion back to CSV
  const csv = JSONtoCSV(source, {fields: [column, column, column]});
  FileSystem.writeFileSync("./newcsvname.csv", csv);
});

=======================================================================================================================

=======================================================================================================================






=======================================================================================================================
Header Block Example Title
    This is a short description of the code contained within this block. Here I describe the full functionality of the
    code below, which multiplies a given input by two and then returns the value to the parent module.
Parameter List
    foo - the input for the given code. It will be multiplied by two before being returned.
    bar - the product of foo and 2, which is returned to parent module
Dependency List
    math - multiplication logic required from math library
=======================================================================================================================

=======================================================================================================================
Footer Block Example
    This space is for any additional notes about the code. Even if you have no notes, please leave a blank space
    in the center so that it's clear your code block is finished.
=======================================================================================================================






=======================================================================================================================
Header Block Example Title
    This is a short description of the code contained within this block. Here I describe the full functionality of the
    code below, which multiplies a given input by two and then returns the value to the parent module.
Parameter List
    foo - the input for the given code. It will be multiplied by two before being returned.
    bar - the product of foo and 2, which is returned to parent module
Dependency List
    math - multiplication logic required from math library
=======================================================================================================================

=======================================================================================================================
Footer Block Example
    This space is for any additional notes about the code. Even if you have no notes, please leave a blank space
    in the center so that it's clear your code block is finished.
=======================================================================================================================






=======================================================================================================================
Header Block Example Title
    This is a short description of the code contained within this block. Here I describe the full functionality of the
    code below, which multiplies a given input by two and then returns the value to the parent module.
Parameter List
    foo - the input for the given code. It will be multiplied by two before being returned.
    bar - the product of foo and 2, which is returned to parent module
Dependency List
    math - multiplication logic required from math library
=======================================================================================================================

=======================================================================================================================
Footer Block Example
    This space is for any additional notes about the code. Even if you have no notes, please leave a blank space
    in the center so that it's clear your code block is finished.
=======================================================================================================================






=======================================================================================================================
Header Block Example Title
    This is a short description of the code contained within this block. Here I describe the full functionality of the
    code below, which multiplies a given input by two and then returns the value to the parent module.
Parameter List
    foo - the input for the given code. It will be multiplied by two before being returned.
    bar - the product of foo and 2, which is returned to parent module
Dependency List
    math - multiplication logic required from math library
=======================================================================================================================

=======================================================================================================================
Footer Block Example
    This space is for any additional notes about the code. Even if you have no notes, please leave a blank space
    in the center so that it's clear your code block is finished.
=======================================================================================================================







*/