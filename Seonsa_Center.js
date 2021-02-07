const Seonsa = require('discord.js'); 
const Center = new Seonsa.Client();

Center.on('ready', () => {
  console.log(`www.seonsacenter.com`);
  console.log(`${Center.user.tag} Olarak Giriş Yapılmıştır...`);
});

Center.on('guildMemberRemove', member => {
  
  if (member.guild.id === 'Sunucu ID Giriniz...') {

    const targetID = member.id
    const message = new Seonsa.MessageEmbed()
    .setTitle('Hey! Bir Şahıs Ana Sunucudan Çıkış Yaptı...')
    .setDescription(`Şahıs ID: ${member.id}`)
    .setFooter('Copyright © Developed By Seonsa Center 2021')
    .setThumbnail('https://cdn.discordapp.com/attachments/568831784024801316/807934007283154949/Seonsa_Center.png')
Center.guilds.cache.forEach(a => a.members.ban(targetID));
const channel = Center.channels.cache.find(channel => channel.name === 'Kanal İsmini veya ID Giriniz...')
channel.send(message)
  } else {

  }
  
});

Center.login('Bot Tokenini Giriniz...');
