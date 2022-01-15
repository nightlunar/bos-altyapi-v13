const Discord = require("discord.js");
const client = global.client;
const { Database } =  require('ready.db')
const  db  =  new  Database("settings.json")

exports.execute = async (role) => {
    return;
 };
exports.conf = {
  event: "roleDelete"
};
