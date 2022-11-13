// /$$$$$$$                      /$$                           /$$$$$$$                     /$$          
// | $$__  $$                    | $$                          | $$__  $$                   |__/          
// | $$  \ $$  /$$$$$$   /$$$$$$ | $$   /$$  /$$$$$$  /$$$$$$$ | $$  \ $$  /$$$$$$  /$$$$$$  /$$ /$$$$$$$ 
// | $$$$$$$  /$$__  $$ /$$__  $$| $$  /$$/ /$$__  $$| $$__  $$| $$$$$$$  /$$__  $$|____  $$| $$| $$__  $$
// | $$__  $$| $$  \__/| $$  \ $$| $$$$$$/ | $$$$$$$$| $$  \ $$| $$__  $$| $$  \__/ /$$$$$$$| $$| $$  \ $$
// | $$  \ $$| $$      | $$  | $$| $$_  $$ | $$_____/| $$  | $$| $$  \ $$| $$      /$$__  $$| $$| $$  | $$
// | $$$$$$$/| $$      |  $$$$$$/| $$ \  $$|  $$$$$$$| $$  | $$| $$$$$$$/| $$     |  $$$$$$$| $$| $$  | $$
// |_______/ |__/       \______/ |__/  \__/ \_______/|__/  |__/|_______/ |__/      \_______/|__/|__/  |__/
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// AUTHOR : TechX | TecnoProjects Srcurity
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
var fechaP = "13/Nov/2022";
var skull = "💀";
var fire = "🔥";

//----------------[Variables Crypto]----------------
let btcvar = "40228.60 USD - 816282.55 MXN";
let ethvar = "2822.43 USD - 57270.21 MXN";
let xmrvar = "161.28 USD - 3272.55 MXN";
let ltcnvar = "116.20 USD - 2357.83 MXN";
let dogevar = "0.14 USD - 2.84 MXN";
let fecha = "(Actualización 18/Feb/2022)";

//--------------[Mensaje de Consola]--------------
console.log("BrokenBrain Activado");

//----------------[Comandos Centrales]----------------
bot.start((ctx) => {
    console.log(ctx.form)
    console.log(ctx.chat)
    console.log(ctx.message)
    console.log(ctx.updateSubTypes)

    ctx.reply('Hola!! Bienvenid@ ' + ctx.from.first_name + ',' + ' yo soy el bot oficial de BrokenBrain, puedes ejecutar el comando /all_cmds para ver todos mis comandos o usa /menu para ver el menu de comandos simple' +  fire + ' \n\nO si eres un usuario VIP escribe /SoyVip')
});

bot.command('status', (ctx) => {
    ctx.reply("Todo bien por ahora, mi sistema funciona correctamente, quieres ver como funcionoo? ejecuta el comando /my_code y verás todas mis lineas de codigo" + skull)
});

bot.command('hola', (ctx) => {
    ctx.reply("Hola!! " + ctx.from.first_name + " soy el Bot de BrokenBrain")
});

bot.command('version', (ctx) => {
    ctx.reply("Actualmente estoy en mi verison 1.0.0 que fue lanzada el " + fechaP +  " por TecnoProjects Security | @Mr_TechX")
});

bot.command('version_logs', (ctx) => {
    ctx.reply("REGISTRO DE MODIFICACIONES:\nLanzamiento del Bot - " + fechaP)
});

bot.command('my_code', (ctx) => {
    ctx.reply("Puedes ver mi codigo fuente en el Github de mi programador, ahi puedes ver mis versiones pasadas y mi version actual en el lado del codigo https://github.com/Mr-TechX/BrokenBrainTG_Bot")
});

bot.command('my_developer', (ctx) => {
    ctx.reply("My programador tiene como Nombre MrTechX en casi todos lados, puedes ver sus redes si ejecutas el comando /dev_networks")
});

//-----------------[Soporte]-----------------
bot.on('text', ctx => {
        if(ctx.chat.type == 'private'){
            ctx.reply('Debes ejecutar un comando para interactuar conmigo, necesito una orden especifica para funcionar.')
}});
    
bot.on('sticker', ctx => {
        if(ctx.chat.type == 'private'){
            ctx.reply('Buen sticker mi joven hacker😎')
}});

bot.on('photo', ctx => {
    if(ctx.chat.type == 'private'){
        ctx.reply('Aun no estoy programado para poder ver fotos o imagenes parece que no es necesario para mis funciones')
}});

bot.on('audio', ctx => {
    if(ctx.chat.type == 'private'){
        ctx.reply('No cuento con librerias para escuchar audios, tal vez en un futuro pueda hacerlo.')
}});

bot.on('voice', ctx => {
    if(ctx.chat.type == 'private'){
        ctx.reply('Parece que no estoy programado para escuchar tus notas de voz ¿podrias ejecutar un comando?')
}});

bot.on('video', ctx => {
    if(ctx.chat.type == 'private'){
        ctx.reply('interesante video colega, pero un bot no puede hacer nada con esa informacion, ejecuta un comando por favor')
}});

//----------------[Lanzamiento]----------------
bot.launch();