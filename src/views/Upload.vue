<template>
  <a-upload
    name="file"
    :multiple="true"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :headers="headers"
    @change="handleChange"
  >
    <a-button> <a-icon type="upload" /> Click to Upload </a-button>
  </a-upload>
</template>


<script>
export default {
  data() {
      return {};
  },
  methods: {
    handleChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      const excelToJson = require('convert-excel-to-json');
 
      const result = excelToJson({
        sourceFile: info.file.name
});
 
    //result will be an Object containing keys with the same name as the sheets found on the excel file
    //Each of the keys will have an array of objects where each of them represents a row of the container sheet. e.g. for a excel file that has two sheets ('sheet1', 'sheet2')
    // {
    //     sheet1: [{
    //        A: 'data of cell A1',
    //        B: 'data of cell B1',
    //        C: 'data of cell C1'
    // }]
    // }
    console.log(result);
    
      // const CSVtoJSON = require("csvtojson");
      // const JSONtoCSV = require("json2csv").parse;
      // const FileSystem = require("fs");
      // //CSV to JSON push and conversion
      //   CSVtoJSON().fromFile(this.file).then(source => {
      //   console.log(source);
      //   source.push({
      //   //whatever columns we have in the CSV
      //   //format below
      //   //"column": "value"
      //   "Freq  (Hz) " : "100",
      //   "  Gain (dB)  " : "10",
      //   "Phase (deg)" : "-70"
      // });
      //   //Converstion back to CSV
      //   const csv = JSONtoCSV(source, {fields: ["Freq  (Hz) ","  Gain (dB)  ","Phase (deg)"]});
      //   FileSystem.writeFileSync("./newcsvname.csv", csv);
      // });
      if (status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
        
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
};
</script>