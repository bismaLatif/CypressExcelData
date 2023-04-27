/// <reference types="cypress" />
//import '@percy/cypress'
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
 const { initPlugin } = require("cypress-plugin-snapshots/plugin");
 //let percyHealthCheck = require("@percy/cypress/task");

 const xlsx = require("xlsx");
 const fs = require("fs")
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  initPlugin(on, config);
  on("task", {
    //percyHealthCheck: percyHealthCheck,    
    generateJSONFromExcel: generateJSONFromExcel,
    
  });
  return config;
};

function generateJSONFromExcel(agrs) {
  const wb = xlsx.readFile(agrs.excelFilePath, { dateNF: "yyyy-dd-mm" });
  const ws = wb.Sheets[agrs.sheetName];
  const data = xlsx.utils.sheet_to_json(ws, { raw: false });
  fs.writeFileSync('D:\\trial909\\cypress\\fixtures\\datajson.json', JSON.stringify(data,null,2))
  return data;
}
