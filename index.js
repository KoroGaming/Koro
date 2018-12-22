const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require("./index.json");
const token = process.env.token;
const prefix = ("uzo/");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('rien').catch(console.error)
});

bot.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** a rejoint ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('ID DU CHANNEL').send(embed)
    member.addRole('ID DU ROLE A AJOUTER AUTOMATIQUEMENT')
 
});
 
bot.on('guildMemberRemove', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':cry: **' + member.user.username + '** a quitté ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('ID DU CHANNEL').send(embed)

const ban = require('./kick et ban/ban');


bot.on('message', function (message){
    if (ban.match(message)){
        return ban.action(message)
    }
});


bot.on('message', msg => {
    if (msg.content === "bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
    if (msg.content.match(/salut/i)) {
            msg.reply('Je suis d\'accord avec toi.')
    }
    if (msg.content === prefix + "site"){
        msg.channel.send("http://uzoriarp.web.boxtoplay.com/")
        console.log("Une personne a demandé pour aller sur ton site.")
    }

});

bot.login(token); //a garder en version heroku
