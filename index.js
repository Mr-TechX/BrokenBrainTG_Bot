//  /$$      /$$           /$$ /$$         /$$$$$$$$
// | $$  /$ | $$          | $$| $$        | $$_____/
// | $$ /$$$| $$  /$$$$$$ | $$| $$        | $$      
// | $$/$$ $$ $$ |____  $$| $$| $$ /$$$$$$| $$$$$   
// | $$$$_  $$$$  /$$$$$$$| $$| $$|______/| $$__/   
// | $$$/ \  $$$ /$$__  $$| $$| $$        | $$      
// | $$/   \  $$|  $$$$$$$| $$| $$        | $$$$$$$$
// |__/     \__/ \_______/|__/|__/        |________/
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// AUTHOR : Mr TechX | TecnoProjects Srcurity
// PROJECT : BrokenBrain Bot (Telegram Version)
// VERSION : 1.0.0
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

//----------------[ For Replit ]----------------
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.get('/', function(request, response) {
// 	response.sendFile(__dirname + '/views/index.html');
// });
// app.listen(3000, () => console.log(`v1.0.0`));

//----------------[Codigo fuente]----------------

//----------------[Constantes]----------------
const { Telegraf } = require('telegraf');
const config = require("./config/config.json");
const config = require("./json/bb.json");
const config = require("./json/dev.json");
const config = require("./json/hackers.json");
const config = require("./json/mod.json");
const config = require("./json/vip.json");
const bot = new Telegraf(config.token);

//----------------[Variables]----------------
var prefix = "b_";
var version = "v1.0.0";

//----------------[Variables Crypto]----------------
let btcvar = "40228.60 USD - 816282.55 MXN";
let ethvar = "2822.43 USD - 57270.21 MXN";
let xmrvar = "161.28 USD - 3272.55 MXN";
let ltcnvar = "116.20 USD - 2357.83 MXN";
let dogevar = "0.14 USD - 2.84 MXN";
let fecha = "(Actualización 18/Feb/2022)";

//--------------[Mensaje de Consola]--------------
console.log("Wall-E Activado");