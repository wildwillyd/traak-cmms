import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import VueKonva from 'vue-konva'

/*
const CSVtoJSON = require("csvtojson");
const JSONtoCSV = require("json2csv").parse;
const FileSystem = require("fs");

//CSV to JSON push and conversion
CSVtoJSON().fromFile("./sourcefile.csv").then(source => {
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
*/

Vue.config.productionTip = false

Vue.use(VueKonva);
Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
