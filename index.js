const express = require('express');


const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

app.post("/uptime_devtools", (req, res) => {
 console.log("uptime is run by 5fr3.")
  res.send({
    msg: "done uptime",
    access: "by_devtools",
  })
})
const { Intents, Client, Collection, MessageEmbed, WebhookClient, MessageButton, MessageActionRow, MessageSelectMenu , MessageAttachment,  TextInputComponent , Modal} = require(`discord.js`)
const {createTranscript} = require('discord-html-transcripts');
const ms = require("ms")
const db = require(`pro.db`)
const { token } = require("./config.json")
const fs = require(`node:fs`)
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES
  ],
  partials: ["REACTION", "MESSAGE", "CHANNEL"]
}).setMaxListeners(0)
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const prefix = "+"
const line = "https://media.discordapp.net/attachments/1262086313901817906/1262089283825832026/Line_1.png?ex=669553bd&is=6694023d&hm=bb459d4b4d42666166d107a53f22096aa954f3d0e0521340ec6200d1ee4021d1&"
const Discord = require("discord.js")
module.exports = client

 process.on("unhandledRejection", error => {
  return console.log(error)
}); 
 


process.on('unhandledRejection', (reason, p) => {
    console.log('\n\n\n\n\n[🚩 Anti-Crash] unhandled Rejection:'.toUpperCase());
    console.log(reason.stack ? String(reason.stack) : String(reason));
    console.log('=== unhandled Rejection ===\n\n\n\n\n'.toUpperCase());
  });
  process.on("uncaughtException", (err, origin) => {
    console.log('\n\n\n\n\n\n[🚩 Anti-Crash] uncaught Exception'.toUpperCase());
    console.log(err.stack ? err.stack : err)
    console.log('=== uncaught Exception ===\n\n\n\n\n'.toUpperCase());
  })
  process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log('[🚩 Anti-Crash] uncaught Exception Monitor'.toUpperCase());
  });
  process.on('beforeExit', (code) => {
    console.log('\n\n\n\n\n[🚩 Anti-Crash] before Exit'.toUpperCase());
  //  console.log(code.yellow.dim);
    console.log('=== before Exit ===\n\n\n\n\n'.toUpperCase());
  });
  process.on('exit', (code) => {
    console.log('\n\n\n\n\n[🚩 Anti-Crash] exit'.toUpperCase());
    //console.log(code.yellow.dim);
    console.log('=== exit ===\n\n\n\n\n'.toUpperCase());
  });
  process.on('multipleResolves', (type, promise, reason) => {
    console.log('\n\n\n\n\n[🚩 Anti-Crash] multiple Resolves'.toUpperCase());
    console.log(type, promise, reason);
    console.log('=== multiple Resolves ===\n\n\n\n\n'.toUpperCase());
  });
client.on('ready' , async() => {
  console.log(`================`)
  console.log(``)
  console.log(`Bot Name : ${client.user.username}`)
  console.log(`Bot Tag : ${client.user.tag}`)
  console.log(`Bot Id : ${client.user.id}`)
  console.log(`Servers Count : ${client.guilds.cache.size}`)
  console.log(`Users Count : ${client.guilds.cache
.reduce((a, b) => a + b.memberCount, 0)
.toLocaleString()}`)
  console.log(``)
  console.log(`================`)
  var statuses = [`Dev : Fàwzi`];
var timers = 2;
  var timeing = Math.floor(timers * 1000);
  setInterval(function() {
    var lengthesof = statuses.length;
    var amounter = Math.floor(Math.random() * lengthesof);
    client.user.setActivity(statuses[amounter], { type: 'STREAMING', url: 'https://discord.com/users/1209275645738352683' });
  }, timeing);

})

const svname = "Altiner" // اسم السيرفر
const welcomerooom = "1262053420484006028" //ايدي روم الترحيب
const link = "https://discord.gg/QKn8nUPuKZ" //لينك السيرفر
const feedback = "1262053510850150492" //ايدي روم الفيدباك
const autolinerooms = ["1262053461336260688","1262053427039567943","1262053371184021514"]  //ايدي رومات الاوتو لاين
const ordercategory = "1262053171367252099" //ايدي كاتجوري الاوردر
const applycategory =  "1262053187251343380" //ايدي كاتجوري التقديم
const testerrole = "1262050215238701198" //ايدي رول الي بتعمل تست في التقديم 
const taxchannel = "1262053474632335451" //ايدي روم الضريبة
const welcomesellerroom = "1262053388451844178" //ايدي روم ترحيب السيلر
const upgraderoom = "1262053391345913877" //ايدي روم ترقية التيم
const sellernumber = "1262053299813744760" //ايدي روم نمبر التيم
let team = "1262049561556291605" //ايدي رول التيم
let offerroom = "1262053461336260688" //ايدي روم الاوفرات
let support = "1262049862137151581" //ايدي رول تكت سبورت
let supportt = "1262053484149215253" //ايدي روم السبورت تكت 
let supportcategory = "1262093453349621851" //ايدي كاتجوري السابورت
let color = "#010c26" //لون الايمباد
let order = "1262053473227378829" //ايدي روم الاوردر
let applyteam =  "1262053497214468126" //ايدي روم تقديم التيم
let rulest = "1262053364703826001" //ايدي روم قوانين التيم 
let newst = "1262053371184021514" //ايدي روم نيوز التيم
let adsprice = "1262053436376223825" //ايدي روم اسعار الاعلانات
let pricet = "1262053372316483585" //ايدي روم اسعار التيم
let temo = "<a:trueSys:1262094175839584346>" // ايموجي الصح
let wemo = "<a:WrongSys:1262094243757821962>" // ايموجي الغلط
var blacklistWords = ['يكسمك']
client.on('messageCreate', message => {
  if (message.author.bot || message.member.permissions.has('ADMINISTRATOR')) return;

  const content = message.content.split(' ');

  if (!content[0]) return;

  content.forEach(arg => {
    if (!message) return;

    const found = blacklistWords.filter(b => b === arg).map(m => m)[0];

    if (found) {
      message.author.send('> **تم مسح رسالتك بسبب انها بها دعايه اوعدم تشفير او بها لفظ قبيح**');
      message.delete();
      return;
    }
  });
});

client.on("messageCreate", message => {
  if (message.content == prefix + "help") {
    const embed = new MessageEmbed()
      .setTitle("**Help Menu **")
      .setColor(color)
      .setImage(line)
      .setThumbnail(message.guild.iconURL())
      .setDescription(`**
> 𝐈𝐦 ${client.user.username} 

> 𝐈 𝐖𝐨𝐫𝐤 𝐅𝐨𝐫 ${svname}

> 𝐌𝐲 𝐃𝐞𝐯𝐥𝐨𝐩𝐞𝐫 𝐈𝐬 <@1209275645738352683> ${temo} **`);

    let row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId('commands')
        .setPlaceholder('⚘・𝐒𝐞𝐥𝐞𝐜𝐭 𝐀 𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲')
        .addOptions([
          {
            label: '𝐎𝐰𝐧𝐞𝐫 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬',
            value: 'Owners',
            description: 'Commands for Owners',
            emoji: '<a:emoji_211:1064842844172455956>',
          },
          {
            label: '𝐏𝐮𝐛𝐥𝐢𝐜 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬',
            value: 'Public',
            description: 'Commands for Public',
            emoji: '<a:aa:1075236857358598185>',
          },
          {
            label: '𝐀𝐝𝐦𝐢𝐧 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬',
            value: 'Admins',
            description: 'Commands for Admins',
            emoji: '<a:ss_4:1064843136276365412>',
          },
          {
            label: '𝐒𝐭𝐨𝐫𝐞 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬',
            value: 'Store',
            description: 'Commands for Store',
            emoji: '<a:DesignS:1064842187952619550>',
          },
        ]),
    );

    const devButton = new MessageButton()
      .setStyle('LINK') 
      .setLabel('𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫')
      .setEmoji('<:emoji_375:1103439506973130873>')
      .setURL('https://discord.com/users/1209275645738352683');

    const supportServerButton = new MessageButton()
      .setStyle('LINK')
      .setEmoji('<a:true:1064843178483666964>')
      .setLabel('𝐒𝐮𝐩𝐩𝐨𝐫𝐭 𝐒𝐞𝐫𝐯𝐞𝐫')
      .setURL('https://discord.gg/nasa-s');

    const rowWithButtons = new MessageActionRow().addComponents(devButton, supportServerButton);
    message.channel.send({ embeds: [embed], components: [row, rowWithButtons] });
  }
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isSelectMenu()) return;

  const category = interaction.values[0];

  if (category === 'Owners') {
    const first = new MessageEmbed()
      .setTitle("**Owners Cmds**")
      .setColor(color)
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`**
> ${prefix}setavatar \` To Change Avatar Bot \`

> ${prefix}team \` To Mention All Members In Team \`

> ${prefix}tbc \` To Send Broadcast For Team \`**`);

    interaction.update({ embeds: [first], components: interaction.message.components });
  } else if (category === 'Public') {
    const publicCmds = new MessageEmbed()
      .setTitle("**Public Cmds**")
      .setColor(color)
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`** 
> ${prefix}uptime \` To Show Uptime Bot \`

> ${prefix}link \` To Show Link Server \`

> ${prefix}inrole \` To Show Role Member \`

> ${prefix}inrole \` To Show Avatar Member \`

> ${prefix}dev \` To Find Out Who Made The Bot\`**`);

    interaction.update({ embeds: [publicCmds], components: interaction.message.components });
  } else if (category === 'Admins') {
    const adminCmds = new MessageEmbed()
      .setTitle("**Admin Cmds**")
      .setColor(color)
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`**
> ${prefix}embed \` To Make Embed Message \`

> ${prefix}say \` To Make Say Message \`

> ${prefix}unbanall \` To UnBan All Member \`

> ${prefix}name \` To SetName A Member \`

> ${prefix}lock \` To Lock Channel \`

> ${prefix}unlock \` To UnLock Channel \`

> ${prefix}show \` To Show Channel \`

> ${prefix}hide \` To Hide Channel \`

> ${prefix}ban \` To Ban Member \`

> ${prefix}unban \` To UnBan Member \`

> ${prefix}mute \` To Mute Member \`

> ${prefix}unmute \` To UnMute Member \`

> مقبول \` To Accept Someone For Team \`
 
> مرفوض \` To Reject Someone For Team \`
 
> دليل \` To Get The Pro Bot Website Where You Can Find The Guide \`
 
> ${prefix}bot \`To obtain a form if you are requesting a bot \`
 
> ${prefix}design \` To obtain a form if you are requesting a design \`
 
> ${prefix}rep \` To obtain a form if you want to inform someone \`

> ${prefix}num \` To register the seller number \`**`);

    interaction.update({ embeds: [adminCmds], components: interaction.message.components });
  } else if (category === 'Store') {
    const storeCmds = new MessageEmbed()
      .setTitle("**Store Cmds**")
      .setColor(color)
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`**
> ${prefix}send \` To Send Msg DM To Member \`
      
> ${prefix}come \` To Come DM To Member \`

> ${prefix}tax \` To Show Tax A Number \`

> ${prefix}welcome-seller \` To Welcome Seller \`

> ${prefix}upgrade \` To Upgrade Seller \`

> ${prefix}font \` To Change Word For 𝐖𝐨𝐫𝐝 \`
        
> ${prefix}tag \` To Change Seller Name \`**`);

    interaction.update({ embeds: [storeCmds], components: interaction.message.components });
  }
});
client.on('messageCreate', message => {
  if (message.content === prefix + 'dev') {
    const embed = {
      title: `Fàwzi 𝗗𝗲𝘃𝗹𝗼𝗽𝗺𝗲𝗻𝘁 𝗕𝗼𝘁`,
      thumbnail: {
        url: 'https://images-ext-2.discordapp.net/external/K2IvOS55piD4eMc2OumVm7rXbQNpYGz60jltyWXBGbo/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/510451548468543488/5b255032274dec96e213c7f1e5639a24.png',
        height: 100,
        width: 100,
        proxy_url: 'https://images-ext-2.discordapp.net/external/K2IvOS55piD4eMc2OumVm7rXbQNpYGz60jltyWXBGbo/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/510451548468543488/5b255032274dec96e213c7f1e5639a24.png'},
      description: `**This Bot Developer 

- Called <@1209275645738352683> ${temo}

・~ Fawzi : 𝗧𝗵𝗶𝘀 𝗕𝗼𝘁 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗲𝗿 𝗖𝗮𝗻 𝗗𝗼 𝗘𝘅𝗮𝗰𝘁𝗹𝘆 𝗧𝗵𝗲 𝗦𝗮𝗺𝗲 𝗙𝗼𝗿 𝗬𝗼𝘂  <a:OwnerrrNa:1254878792510341150> **`,
      thumbnail: {
        url: 'https://images-ext-2.discordapp.net/external/K2IvOS55piD4eMc2OumVm7rXbQNpYGz60jltyWXBGbo/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/510451548468543488/5b255032274dec96e213c7f1e5639a24.png'
      },
      color: (color),
    };

    const button = new MessageButton()
      .setLabel('Fàwzi')
      .setURL('https://discord.com/users/1209275645738352683')
      .setEmoji('<:emoji_375:1103439506973130873>')
      .setStyle('LINK');
    const button2 = new MessageButton()
      .setLabel('Support')
      .setURL('https://discord.gg/nasa-s')
      .setEmoji('<a:true:1064843178483666964>')
    .setStyle('LINK'); 

    const row = new MessageActionRow().addComponents(button, button2);

    message.channel.send({ embeds: [embed], components: [row]  });
    message.delete()
  }
});
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {

    setInterval( async () => {
    client.channels.fetch("1243110553820594228") 
     .then((channel) => { 
      const VoiceConnection = joinVoiceChannel({
       channelId: channel.id, 
       guildId: channel.guild.id, 
       adapterCreator: channel.guild.voiceAdapterCreator 
       });
    }).catch((error) => { return; });
    }, 1000)
}); 
/***Welcome In __𝐍𝐚𝐬𝐚__
link The Server : https://discord.gg/Eagle-S <a:a2_heartblue5:1194573675949740093> 
Enjoy Bro <a:a2_heartblue5:1194573675949740093> ** */
client.on('guildMemberAdd' , async(member) => {
  let welcomefukenembed = new MessageEmbed()
  .setAuthor({name: member.user.username , iconURL : member.user.displayAvatarURL({dynamic: true})})
  .setFooter({ text : member.user.username , iconURL: member.user.displayAvatarURL({dynamic: true})})
  .setImage(line)
.setThumbnail(member.user.displayAvatarURL({dynamic: true}))
  .setTimestamp()
  .setDescription(`**𝐇𝐢 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 To ${svname} 𝐒𝐭𝐨𝐫𝐞 𝐎𝐧𝐞 𝐎𝐟 𝐓𝐡𝐞 𝐁𝐞𝐬𝐭 𝐀𝐧𝐝 𝐁𝐢𝐠𝐠𝐞𝐬𝐭 𝐒𝐭𝐨𝐫𝐞𝐬 𝐈𝐧 𝐓𝐡𝐞 𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲. ${temo}

𝐓𝐡𝐢𝐬 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐇𝐞𝐥𝐩𝐢𝐧𝐠 𝐘𝐨𝐮 𝐓𝐨 𝐍𝐨𝐰 𝐇𝐨𝐰 𝐓𝐨 𝐔𝐬𝐞 𝐓𝐡𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 𝐂𝐡𝐚𝐧𝐧𝐞𝐥𝐬. ${temo}

𝐅𝐨𝐫 𝐎𝐫𝐝𝐞𝐫 :⁠ <#${order}> <a:Lovesys:1262096403333779516>

𝐅𝐨𝐫 𝐀𝐩𝐩𝐥𝐲 𝐓𝐨 𝐓𝐞𝐚𝐦 : <#${applyteam}> <a:Lovesys:1262096403333779516>

𝐅𝐨𝐫 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 :⁠ <#${supportt}> <a:Lovesys:1262096403333779516>

𝐓𝐡𝐞 𝐀𝐝𝐬 𝐏𝐫𝐢𝐜𝐞𝐬 : <#${adsprice}> <a:Lovesys:1262096403333779516>

𝐘𝐨𝐮 𝐀𝐫𝐞 𝐌𝐞𝐦𝐛𝐞𝐫 𝐍𝐮𝐦𝐛𝐞𝐫 :  \`${member.guild.memberCount}\` ${temo}


𝐄𝐧𝐣𝐨𝐲 <𝟑 <a:Lovesys:1262096403333779516> **`) 
   .setColor(color)

member.guild.channels.cache.get(welcomerooom).send({ content: `**Hey** <@!${member.user.id}> **Welcome To ** __${member.guild.name}__ ` , embeds: [welcomefukenembed]})

  member.send(`**
Welcome To ${svname} 𝐒𝐭𝐨𝐫𝐞 

> \`#\` مرحبا بك ، نورت اكبر و اضمن ستور فالشرق الاوسط ${svname} ستور <a:Lovesys:1262096403333779516>


> \`#\`تعريف بسيط : ${svname} ستور سيرفر عربي يوفر جميع الخدمات ، حيث يتكون من طاقم عمل ممتاز ، ويعمل علي تطوير خدماته دائما بشكل يليق بكم ، . ويوفر جميع المبيعات ${temo} 



> \`#\` لطلب اوردر بما تحتاجه من مبيعات أو تصاميم : <#${order}> ${temo} 

> \`#\` للتقديم علي طاقم العمل : <#${applyteam}> ${temo}



# 𝐖𝐞 𝐇𝐨𝐩𝐞 𝐘𝐨𝐮 𝐄𝐧𝐣𝐨𝐲 𝐖𝐢𝐭𝐡 𝐔𝐬 ${temo} **`)
}) 
client.on('messageCreate', async(message) => {
  if(message.author.bot) return;

  if(message.content === "مقبول") {
 message.delete()
message.channel.send(`**تم قبولك في تيم ${svname} !**

** الرجاء التفاعل بشكل لائق ف السيرفر لكي لا يتم تصفيتك** 

**برجاء قرائة قوانين و نيوز التيم و اسعار التيم جيداً لعدم أخد ورنات** 
<#${rulest}> , <#${newst}> , <#${pricet}> 

**اجباري وضع اللينك ف البايو الخاص بك بهذه الطريقه**
**${svname} S :** ${link} 

**<a:Lovesys:1262096403333779516> و نورتنا يمعلم**`)
      message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
  }
    if(message.content === "دليل") {
      message.delete()
message.channel.send(`**يرجى إرسال صورة للتحويلات عبر موقع التحويلات الرسمي ProBot لكي نتمكن من مساعدتك بشكل كامل. 

لمزيد من المعلومات حول كيفية استخدام موقع التحويلات، يُرجى المنشن لنا لمساعدتك. ${temo}
> About https://probot.io/transactions 

Please send a screenshot of your transactions through the official ProBot transfer website so we can assist you fully. ${temo}

For more information on how to use the transfer website, please mention us for assistance. 
> About https://probot.io/transactions **`)
       message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
    }

if(message.content === "شفر") {
      message.delete()
message.channel.send(`**من فضلك قم بتشفير الجمله التي ترسلها 
وعدم السب وعدم ذكر خوادم اخري**`)
    }
    if(message.content === "sjjjcedjcjdecidecide") {

      message.delete()

message.channel.send(`https://media.discordapp.net/attachments/1243202080106086471/1243212236432871505/Strong_Logo_Png.png?ex=6650a71e&is=664f559e&hm=43292e4e00cee2bd7c65657f45bdc110730b26a0d50d41669c2a4893be2b5475&=&format=webp&quality=lossless&width=716&height=358`)

    }
    if(message.content === "jsiwisoisoosos") {

      message.delete()

message.channel.send(``)

    }
    if(message.content.includes === "@everyone") {

      message.delete()

message.reply(`لا تمنشن `)

    }
  if(message.content === "مرفوض") {
   message.delete()
message.channel.send(`**__تم رفضك في فريق ${svname} ${wemo} 

__ برجاء تطوير مستواك و التقديم مره اخري**`)
      message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
  }
   if(message.content === "hucfeuhicfeiuuhivefhjed") {
     message.delete()
  message.channel.send(`**__𝐇𝐢 𝐂𝐥𝐢𝐞𝐧𝐭 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐈𝐧 𝐄𝐚𝐠𝐥𝐞 𝐒𝐭𝐨𝐫𝐞 <a:LoveNasa:1254877631632117770>

  𝐓𝐨 𝐎𝐫𝐝𝐞𝐫 | لطلب منتج : <#${order}> <a:WhatNasa:1254878072033902634> 
  
  𝐓𝐨 𝐀𝐝𝐬 | لطلب اعلان : <#${supportt}> <a:WhatNasa:1254878072033902634> 
  
  𝐓𝐇𝐞 𝐏𝐫𝐢𝐜𝐞𝐬 | اسعار الاعلانات : <#${adsprice}> <a:WhatNasa:1254878072033902634>   
  
  𝐓𝐨 𝐀𝐩𝐩𝐥𝐲 | للتقديم علي التيم : ⁠<#${applyteam}> <a:WhatNasa:1254878072033902634>
  
  𝐓𝐨 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 | لو عندك اي مشكله : <#${supportt}> <a:WhatNasa:1254878072033902634>  
  
  𝐓𝐨 𝐌𝐞𝐝𝐢𝐚𝐭𝐨𝐫 | لطلب وسيط :<#1243110807336648745> <a:WhatNasa:1254878072033902634> 
  
  𝐓𝐨 𝐅𝐞𝐞𝐝 𝐁𝐚𝐜𝐤 | للتقييمات :<#${feedback}> <a:WhatNasa:1254878072033902634> __
  
  𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐈𝐧 __NaSa__<a:WhatNasa:1254878072033902634> 
  
  𝐥𝐢𝐧𝐤 𝐓𝐡𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 <a:WhatNasa:1254878072033902634> 
  
  ${link} <a:WhatNasa:1254878072033902634>  
  
  𝐄𝐧𝐣𝐨𝐲 𝐁𝐫𝐨 <a:LoveNasa:1254877631632117770> **`)
      }
  if(message.content === "jdsisdidis") {
      message.delete();
    message.channel.send(` https://media.discordapp.net/attachments/1226725653324496917/1254916721492361306/Untitled54_20240625005037.png?ex=667b3bc5&is=6679ea45&hm=0c0951ff2102b20e960c41a64f1d10fe6c5aebc70863ca3d38bd9ae21628cc9d& `)   
  }
  if(message.content === "jdicdidcodod") {
      message.delete();
    message.channel.send(` https://media.discordapp.net/attachments/1226725653324496917/1254916721492361306/Untitled54_20240625005037.png?ex=667b3bc5&is=6679ea45&hm=0c0951ff2102b20e960c41a64f1d10fe6c5aebc70863ca3d38bd9ae21628cc9d& `)
  }
if(message.content === "$close") {
    message.reply(`$transcript`)
  }
if(message.content === "$close") {
    message.reply(`$delete`)
  }
  if(message.content === prefix+"bot") {
    message.reply(`**Hello Please Fill The List To Help The Developer ・ اهلا بك برجائ ملئ القائمه لمساعده المبرمج


 1-Please Put The Name Of The Bot ・ برجاء كتابه اسم البوت

 2-Please Put Photo Of Bot ・ برجاء ارسال صوره البوت

 3-Whats The Bot Type(system , etc..) ・ ما هو نوع البوت (سستم , الخ..)

برجاء الصبر حتي ينتهي المبرمج من البوت الخاص بك**`)
  }

  //
  if(message.content === prefix+"sup") {
      message.delete();
    message.channel.send(`**شكراً لاختياركم خادم NaSa Store لحل مشكلتكم <a:spheart:1254890804808519711> 

 نأمل أن تكونوا قد استفدتم من الخدمة التي قدمناها لكم. نحن نهتم برأيكم ونرغب في تحسين خدماتنا باستمرار. <a:Lovesys:1262096403333779516>

 إذا كان لديكم بضع دقائق، فنرجو منكم تقديم تقييم لخدمتنا عبر القناه التاليه: <#${feedback}>. شكراً مرة أخرى على ثقتكم بنا. 

كان معك الاداري ${message.author} وشكراً لكم <a:Lovesys:1262096403333779516>**`)
      message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
  }
  if(message.content === prefix+"ws") {
    message.delete()
    message.channel.send(`**مرحباً ، معاك طاقم العمل <:staffSys:1262098322114744320> 

سيتم ترك التذكره لمده تتراوح مبين 30 الي 60 دقيقة ، اذا تم غلق التذكره فاعلم ان طلبك غير متوفر حالياً , __يمكنك فتح تذكره في وقت اخر__ . <a:Systemsys:1262098402900967587>

وشكراً لتفهمك. ${temo} **

**Hello, with you Staff <:staffSys:1262098322114744320>

The ticket will be left for a period ranging from 30 to 60 minutes, if the ticket is closed, know that your application is currently unavailable, __You can open a ticket at another time__ <a:Systemsys:1262098402900967587>

Thank you for your understanding ${temo} **`)
   message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})   
  }
   if(message.content === prefix+"rep") {
     message.delete()
     message.channel.send({embeds: [
       new MessageEmbed()
       .setTitle(`${message.guild.name} Report Seller`)
       .setDescription(`**\`-\` ${temo} للتبليغ علي سيلر  قم باملاء الاستماره حتي نستطيع تعويضك

صاحب البلاغ :
اسم السيلر فالديسكورد :
ايدي السيلر فالديسكورد :
القصه :
قم بارسال الدلائل مع دليل التحويل :
**
`)
       .setFooter({text: `${message.guild.name} Report` , iconUrl: message.guild.iconURL()})
       .setTimestamp()
       .setColor(color)
       .setThumbnail(message.guild.iconURL())
     ]})
   }

  if(message.content === prefix+"med") {
     message.delete()
     message.channel.send({embeds: [
       new MessageEmbed()
       .setTitle(`${message.guild.name} NaSa Mediator`)
       .setDescription(`**\`-\` ${temo} لطلب نسيط  قم باملاء الاستماره حتي نستطيع اكمال عمليه الوساطه

ايدي البائع :
السلعه :
المبلغ :
الضرايب علي مين :
**`)
       .setFooter({text: `${message.guild.name} Mediator` , iconUrl: message.guild.iconURL()})
       .setTimestamp()
       .setColor(color)
       .setThumbnail(message.guild.iconURL())
     ]})
   }
    if(message.content.toLowerCase() === "link") {
    message.channel.send(`**Welcome In __${svname}__ ${temo}
link The Server : ${link} 
Enjoy Bro <a:Lovesys:1262096403333779516> **`)
  }
    if(message.content === "لينك") {
    message.channel.send(`**Welcome In __${svname}__ ${temo}
link The Server : ${link} 
Enjoy Bro <a:Lovesys:1262096403333779516> **`)
  }
  if(message.content === "لاين") {
    message.delete();
    message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
  }
    if(message.content.toLowerCase() === "line") {
    message.delete();
    message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
  }
    if(message.content === "خط") {
    message.delete();
    message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
  }
   if(message.content.toLowerCase() === "fb") {
       message.delete();
      message.channel.send(`**شكراً لك على استخدام خدماتنا في ${svname} Store! نأمل أن تكون قد حصلت على تجربة إيجابية مع طاقم العمل الخاص بنا. <:staffSys:1262098322114744320> 

يرجى تقديم تقييمك حول تجربه خدماتنا التي قمت بي التعامل معها من خلال القناه التاليه:  <#${feedback}> ${temo}

نحن نقدر آرائكم ونسعى دائماً لتحسين خدماتنا. 

Thank you for using our services! We hope you had a positive experience with our staff. <:staffSys:1262098322114744320>

Please provide your review of the experience of our services that you have dealt with through the following channel: <#${feedback}> 

We value your feedback and always strive to improve our services. ${temo} **`)
       message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
    }
    
  });

    client.on("ready", async () => {
        client.guilds.cache.forEach(async(guild) => {
          let channelID = '1262053459801280614'; 
          let channel = guild.channels.cache.get(channelID);

          setInterval(() => {
     let azkar = [`أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ
اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. `,`قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ`,`بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ. 
`,`اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ. 
`,`اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ. `,`سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه.`,`أَمْسَيْنَا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ المُشْرِكِينَ. `,`اللّهُـمَّ بِكَ أَمْسَـينا وَبِكَ أَصْـبَحْنا، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ الْمَصِيرُ. `,`بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم.`,`حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم. `,`اللّهُـمَّ ما أَمسى بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر. `,`اللّهُـمَّ إِنِّـي أَمسيتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك.`,`رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً. `,`اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ .`,`أَمْسَيْـنا وَأَمْسـى المـلكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذهِ اللَّـيْلَةِ وَخَـيرَ ما بَعْـدَهـا ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذهِ اللَّـيْلةِ وَشَرِّ ما بَعْـدَهـا ، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر. `,`بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ. `,`أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ
آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَّسِينَآ أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ`,`اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي. `,`يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْ`,`أَمْسَيْنا وَأَمْسَى الْمُلْكُ للهِ رَبِّ الْعَالَمَيْنِ، اللَّهُمَّ إِنَّي أسْأَلُكَ خَيْرَ هَذَه اللَّيْلَةِ فَتْحَهَا ونَصْرَهَا، ونُوْرَهَا وبَرَكَتهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فيهِا وَشَرَّ مَا بَعْدَهَا. `,`اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كـلِّ شَـيءٍ وَمَليـكَه ، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت ، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَمِن شَـرِّ الشَّيْـطانِ وَشِرْكِهِ ، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم. `,`أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق. `,`اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. `,`اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.`,`اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ. `,`أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ. `,`يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ. `,`لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ. `,`اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ ، عَلَيْكَ تَوَكَّلْتُ ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ , مَا شَاءَ اللَّهُ كَانَ ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ , أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا , اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي ، وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا ، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ. `,`سُبْحـانَ اللهِ وَبِحَمْـدِهِ. `,`
بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ﴿1﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿2﴾ الرَّحْمَنِ
الرَّحِيمِ ﴿3﴾ مَالِكِ يَوْمِ الدِّينِ ﴿4﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ
نَسْتَعِينُ ﴿5﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿6﴾ صِرَاطَ الَّذِينَ
أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿7﴾.`,`اللَّهُمَّ إِنِّي أَسْأَلُكَ بِرَحْمَتِكَ الَّتِي وَسِعَتْ كُلَّ شَيْءٍ أَنْ تَغْفِرَ لِي.`,`سُبْحانَ رَبِّيَ الْعَظِيمِ. ثلاث مرَّاتٍ.
`,`سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلاَئِكةُ مِنْ خِيفَتِهِ.`,`لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.`,`
اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي.`,`
سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَاللَّهُ أَكْبَرُ ثلاثاً وثلاثين لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.`,`جَزَاكَ اللَّهُ خَيْراً.`,`الباقيات الصالحات : سبحان الله والحمد لله ، ولا إله إلا الله ،والله أكبر ،و لا حول ولا قوة إلا بالله`,`لاَ إِلَهَ إِلاَّ اللَّهُ الْوَاحِدُ الْقَهّارُ، رَبُّ السَّمَوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا الْعَزيزُ الْغَفَّارُ.`,`بِسْمِ اللَّهِ ثَلَاثًا، أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ سَبْعَ مَرَّاتٍ.`,`وَقَالَ صلى الله عليه وسلم: أَقْرَبُ مَا يَكُونُ الْعَبْدُ مِنْ رَبِّهِ وَهُوَ سَاجِدٌ فَأَكثِرُوا الدُّعَاءَ.`,`اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.`,`الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي مِمَّا ابْتَلاَكَ بِهِ، وَفَضَّلَنِي عَلَى كَثِيرٍ مِمَّنْ خَلَقَ تَفْضِيلاً.`,`رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً.`,`
اللَّهُمَّ لَكَ الْحَمْدُ، أَنْتَ نُورُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ، [وَلَكَ الْحَمْدُ أَنْتَ رَبُّ السَّمَواتِ وَالأَرْضِ وَمَنْ فِيهِنَّ] [وَلَكَ الْحَمْدُ لَكَ مُلْكُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ] [وَلَكَ الْحَمْدُ أَنْتَ مَلِكُ السَّمَوَاتِ وَالأَرْضِ] [وَلَكَ الْحَمْدُ] [أَنْت الحق، ووعدك الحق، وقولك الحق، ولقاؤك الحق، والجنة حق، والنار حق، والنبيون حق، ومحمد صلى الله عليه وسلم حق، والساعة حق] [اللهم لك أسلمت، وعليك توكلت، وبك آمنت، وإليك أنبت، وبك خاصمت، وإليك حاكمت. فاغفر لي ما قدمت، وما أخرت، وما أسررت، وما أعلنت] [وما أنت أعلم به مني] [أنت المقدم، وأنت المؤخر لا إله إلا أنت] [أنت إلهي لا إله إلا أنت] [ولا حول ولا قوة إلا بالله].`,`سُبْحـانَ اللهِ وَبِحَمْـدِهِ.`,`أَفْطَرَ عِنْدَكُمُ الصَّائِمُونَ، وَأَكَلَ طَعَامَكُمُ الْأَبْرَارُ، وَصَلَّتْ عَلَيْكُمُ الْمَلاَئِكَةُ.`,`اللّهُـمَّ بِكَ أَمْسَـينا وَبِكَ أَصْـبَحْنا، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ الْمَصِيرُ.`,`
اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أَضِلَّ، أَوْ أُضَلَّ، أَوْ أَزِلَّ، أَوْ أُزَلَّ، أَوْ أَظْلِمَ، أَوْ أُظْلَمَ، أَوْ أَجْهَلَ، أَوْ يُجْهَلَ عَلَيَّ.`,`
أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ غَضَبِهِ وَعِقَابِهِ، وَشَرِّ عِبَادِهِ، وَمِنْ هَمَزَاتِ الشَّياطِينِ وَأَنْ يَحْضُرُونِ.`,`زَوَّدَكَ اللَّهُ التَّقْوَى، وَغَفَرَ ذَنْبَكَ، وَيَسَّرَ لَكَ الخَيْرَ حَيْثُ ما كُنْتَ.`,`اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ ، عَلَيْكَ تَوَكَّلْتُ ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ , مَا شَاءَ اللَّهُ كَانَ ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ , أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا , اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسي ، ومن شر كل دابة أنت آخذ بناصيتها ، إن ربي على صراط مستقيم.
`,` الرَّحْمَنِ الرَّحِيمِ ﴿1﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿2﴾ الرَّحْمَنِ
الرَّحِيمِ ﴿3﴾ مَالِكِ يَوْمِ الدِّينِ ﴿4﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ
نَسْتَعِينُ ﴿5﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿6﴾ صِرَاطَ الَّذِينَ
أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿7﴾.`,`
يَقُولُ: وَأَنَا أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ وَأَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ، رَضِيتُ بِاللَّهِ رَبَّاً، وَبِمُحَمَّدٍ رَسُولاً، وَبِالْإِسْلاَمِ دِينَاً يَقُولُ ذَلِكَ عَقِبَ تَشَهُّدِ الْمُؤَذِّنِ.`,`رَبَّنَا وَلَكَ الْحَمْدُ، حَمْداً كَثيراً طَيِّباً مُبارَكاً فِيهِ.
`,`
أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّةِ مِنْ غَضَبِهِ وَعِقَابِهِ ، وَشَرِّ عِبَادِهِ ، وَمَنْ هَمَزَاتِ الشَّيَاطِينِ ، وَأَنْ يَحْضُرُونِ.`,`سُبْحانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلاَ إِلَهَ غَيْرُكَ.
`,`تُبْلِي وَيُخْلِفُ اللَّهُ تَعَالَى`,`
سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه`,`
وَقَالَ صلى الله عليه وسلم: يَا عَبْدَ اللَّهِ بْنَ قَيْسٍ أَلاَ أَدُلُّكَ عَلَى كَنْزٍ مِنْ كُنُوزِ الْجَنَّةِ؟ فَقُلْتُ: بَلَى يَا رَسُولَ اللَّهِ، قَالَ: قُلْ لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ.
`,`
سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَاللَّهُ أَكْبَرُ ثلاثاً وثلاثين لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.`]
  let randomAzkar = azkar[Math.floor(Math.random() * azkar.length)];

      const embed = new MessageEmbed()
        .setColor(color) 
        .setTitle('Azkar')
        .setDescription(`**${randomAzkar}**`)
        .setImage(line) 
        .setTimestamp();

      channel.send({ embeds: [embed] })
        .then(() => console.log('تم إرسال الرسالة بنجاح'))
        .catch(error => console.error(`خطأ أثناء إرسال الرسالة: ${error.message}`));
    }, 600000); 
});
});
client.on('message', EgyptTeam => {
    if (EgyptTeam.content === `Are you sure you would like to close this ticket?`) {
      EgyptTeam.delete()
      EgyptTeam.channel.send(`$transcript`)
    }
  })

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "welcome-seller")) {

    if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`**No Haved Perm In Role**`);
    let user = message.mentions.users.first()
    let args = message.content.split(" ").slice(2).join(" ")
    if (!user) return message.reply(`**Pls Mention Seller <a:1M_48:1064842032176185345>**`)
    if (!args) return message.reply(`**Pls Mention Roles sell <a:1M_48:1064842032176185345>**`)
    client.channels.cache.get(welcomesellerroom).send(` **𝖲𝖺𝗒 𝖶𝖾𝗅𝖼𝗈𝗆𝖾 𝖳𝗈 𝖮𝗎𝗋 𝖭𝖾𝗐 𝖲𝖾𝗅𝗅𝖾r in __${svname} 𝖲𝗍𝗈𝗋𝖾__ <a:Lovesys:1262096403333779516>**



**𝖲𝖾𝗅𝗅𝖾𝗋 : ${user}** ${temo}



**𝖲𝖾𝗅𝗅𝖾𝗋 𝖱𝗈𝗅𝖾𝗌 : ${args}** ${temo}



**𝖯𝗅𝗌 𝖱𝖾𝖺𝖽 𝖳𝗁𝖾 𝖱𝗎𝗅𝖾𝗌 𝖳𝗈 𝖠𝗏𝗈𝗂𝖽 𝖳𝖺𝗄𝗂𝗇𝗀 𝖶𝖺𝗋𝗇𝗌 <#${rulest}>  **



**𝖳𝗁𝗑 𝖳𝗈 𝖠𝗉𝗉𝗅𝗒 𝖳𝗈 𝖳𝖾𝖺𝗆 ${svname} 𝖲𝗍𝗈𝗋𝖾 **



**𝖤𝗇𝗃𝗈𝗒 ${temo} **`)
    client.channels.cache.get(welcomesellerroom).send({
      embeds: [
        new MessageEmbed()
          .setImage(line)
          .setColor(color)
      ]
    })
    message.reply(`**Succesfuly Sent! ${temo} **`)
  }
})

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "num")) {
    if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`**You Dont Have Permisssion ${wemo} **`);
    let user = message.mentions.users.first();
    let number = message.content.split(" ").slice(2).join(" ");
    if (!user) return message.reply("**Please, Mention Seller ${wemo} **");
    if (!number) return message.reply("**Please, Write Number ${wemo} **");
    
    const embed = new MessageEmbed()
      .setTitle('**𝐍𝐮𝐦𝐛𝐞𝐫 𝐒𝐞𝐥𝐥𝐞𝐫**')
      .setDescription(`**𝖭𝖺𝗆𝖾 : ${user} <:staffSys:1262098322114744320>
                    𝖨𝖣 : ${user.id} 
                    𝖭𝗎𝗆𝖻𝖾𝗋 : ${number} ${temo}
                    𝖠𝖽𝗆𝗂𝗇 𝖨𝗇𝖿𝗈:
                    𝖭𝖺𝗆𝖾 : ${message.author.username} 
                    𝖴𝗌𝖾𝗋 : <@${message.author.id}> 
                    𝖨𝖣 : ${message.author.id} `)
      .setColor(color)
      .setThumbnail(message.guild.iconURL())
      .setImage(line);

    client.channels.cache.get(sellernumber).send({ embeds: [embed] });
    message.reply("**Seller Number Registere Successfuly! <a:TrueNasa:1254877349338677298>**");
  }
});

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "upgrade")) {
    const owner = ["1212726840716955721","1209275645738352683"]  

    if (!owner.includes(message.author.id)) return message.reply(`**This Command Only Owners Ship**`);

    if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`** 😕 You don't have permissions **`);
    let user = message.mentions.members.first()
    let args = message.mentions.roles.first()
    if (!user) return message.reply(`**Pls Mention Seller ${temo} **`) 
    if (!args) return message.reply(`**Pls Mention Roles sell ${temo} **`)
    user.roles.add(args)
    client.channels.cache.get(upgraderoom).send(`**> New Upgrade In __${svname} Store__** ${wemo}


**> Seller: ${user}** 

**> Upgraded to : ${args}** <



**> Keep Going! ** !`)
    client.channels.cache.get(upgraderoom).send({
      embeds: [
        new MessageEmbed()
          .setImage(line)
          .setColor(color)
      ]
    })
    const upgradedmembed = new MessageEmbed()
      .setColor(color) 
      .setImage(line)
      .setTimestamp()
      .setDescription(`**> Hello ${user} , You Have Reached {${args}} **

**> The Admin : ${user} 

**> Thanks For Activating NaSa Store ${temo} **
 

**> Keep Going ! 懶 **
**`)
      .setFooter(`𝖴𝗉𝗀𝗋𝖺𝖽𝖾 𝖥𝗈𝗋 ${message.author.tag}`);
    user.send({ embeds: [upgradedmembed] });
    message.reply(`> Successfuly Done! ${temo} `)
  }
})
client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  let auto = autolinerooms
  if(auto == null) return;
  if(auto.includes(message.channel.id)) {
    message.channel.send({embeds:[
      new MessageEmbed()
      .setColor(color)
      .setImage(line)
    ]})
  }
})

  client.on('messageCreate', async (message) => {
      if (message.author.id === "557628352828014614" && message.channel.parentId === ordercategory) {
          let member = message.mentions.members.first();
          if (!member || member.bot) return;

          let roleId = "1262049179988131911";
          let role = message.guild.roles.cache.get(roleId);

          if (!role) {
              console.error(`Role with ID ${roleId} not found.`);
              return;
          }

          if (member.roles.cache.has(roleId)) {
              return;
          } else {
              member.roles.add(role.id).then(() => {
                  return message.channel.send({
                      content: `**Done Added __Client Role__
To Client : ${member.user.username}**`
                  });
              }).catch(error => {
                  console.error("Error adding role:", error);
              });
          }
      }
  });

      client.on("messageCreate", message => {
        if (message.content.startsWith(prefix + "inrole")) {
            let args = message.content.split(" ").slice(1).join(" ");
            if(message.author.bot) return;
            let trole = message.mentions.roles.first() || message.guild.roles.cache.find(role => role.id === args)
             if (!trole) {
                 return message.reply(`**:rolling_eyes: Please mention role id**`)
             } else {
                 const roleMember = trole.members.map((user) => `${user.id} ${user.user.tag}`).join('\n')
          message.reply({embeds: [
           new MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))

      .setThumbnail(message.author.avatarURL({dynamic:true}))
            .addFields([
          {
          name: `List of users in ${trole.name} role : (${trole.members.size})`,
          value: `**${roleMember}**`
      },
      ])  
      .setColor(color)
      .setImage(line)
      .setFooter(`Members in this role ${trole.members.size}`)]})
        }
        }
       }) 

  client.on("messageCreate", message => {
      if (message.content.toLowerCase().startsWith (prefix+"set-avatar")) {
          if (!owner.includes(message.author.id)) return;
          let avLink = message.content.substr(`${prefix}setavatar `.length);
          if (!avLink) return message.channel.send("**Incorrect Link, Please Put Avatar Link!**");

          // تسجيل تغيير الصورة في الكونسول
          console.log(`Changing bot avatar to: ${avLink}`);

          client.user.setAvatar(avLink).then(() => {
              message.delete()
              message.channel.send(`**Successfuly Changed Avatar! <a:TrueNasa:1254877349338677298>**`)
          }).catch(() => {
              message.channel.send('**Error, Try Again Later! Incorrect Link Or Ratelimit **')
          });
      }
  });


client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if(message.channel.id != feedback) return;
    message.reply({embeds:[
      new MessageEmbed()
      .setColor(color)
      .setDescription(`<:emoji_58:1262120966046089267> | 𝐓𝐡𝐚𝐧𝐤𝐬 𝐅𝐨𝐫 𝐆𝐢𝐯𝐢𝐧𝐠 𝐔𝐬 𝐅𝐞𝐞𝐝𝐛𝐚𝐜𝐤 <a:f_:1262121978966315101> 

<:emoji_58:1262120966046089267>| 𝐖𝐞 𝐇𝐨𝐩𝐞 𝐘𝐨𝐮 𝐕𝐢𝐬𝐢𝐭 𝐔𝐬 𝐀𝐠𝐚𝐢𝐧 <a:f_:1262121978966315101>`)
      .setImage(line)
    ]})
  });

client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (!message.channel.guild) return;

    if (message.content.startsWith(prefix + 'send')) {
        if (!message.member.permissions.has("ADMINISTRATOR")) {
            return message.reply(`**You don't have permissions**`);
        }

        let id = message.content.split(' ')[1];
        let user = message.mentions.members.first() || message.guild.members.cache.get(id);
        let argss = message.content.split(' ').slice(2).join(' ');

        if (!user) {
            return message.channel.send(`**Please mention a member or provide their ID <${wemo} **`);
        }

        if (!argss) {
            return message.channel.send(`**Please send a message ${wemo} **`);
        }

        if (user.user.bot || user.id === message.author.id) {
            return message.channel.send(`**You cannot send a message to a bot or yourself ${wemo} **`);
        }

        let attach = message.attachments.first();
        if (attach) {
            user.send({ content: argss, files: [attach] }).then(m => {
                message.channel.send(`**Done, message sent**`);
            }).catch(err => {
                return message.channel.send(`**Can't send a message to this user! ${wemo} **`);
            });
        } else {
            user.send(argss).then(m => {
                message.channel.send(`**Successfuly Sent! ${temo} **`);
            }).catch(err => {
                return message.channel.send(`**Can't send a message to this user! ${temo} **`);
            });
        }
    }
});




client.on('messageCreate', async message => {
        if(message.content.startsWith(prefix + 'unbanall')) {
                let b = await message.guild.bans.fetch()
                if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply("You don't Have permissions")
                b.forEach(ban => message.guild.members.unban(ban.user))
                        message.reply(`** ${wemo} ${b.size} members has been unbanned.🛬**`)
        }
});



client.on('messageCreate', async message => {
    if(message.content.toLowerCase().startsWith(prefix + 'name') || message.content.startsWith(prefix + 'اسم')){

      const member = message.mentions.members.first() || message.guild.members.cache.get(message.content.split(' ')[1]);
      const name = message.content.split(" ").slice(2).join(" ")

      if(!message.member.permissions.has('MANAGE_NICKNAMES')) return message.reply('لا تمتلك الصلاحيات اللازمة لاستخدام هذا الامر !')
      if(!message.guild.me.permissions.has('MANAGE_NICKNAMES')) return message.reply('لا امتلك الصلاحيات اللازمة للقيام هذا الامر !')

      if(!member) return message.reply('رجاء قم بمنشن العضو الذي تريد تغيير لقبه !')
      if(!name) return message.reply("رجاء قم بكتابة اللقب اللذي تريد وضعه للعضو !")

      member.setNickname(name).catch(() => {message.reply('لا يمكنني تغيير اسم هذا العضو !')})
    }
})


client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + 'lock')) {
    // قفل القناة
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return;

    const lockRow = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('unlock')
          .setLabel('unlock')
          .setStyle('SUCCESS'),
        new MessageButton()
          .setCustomId('lock')
          .setLabel('lock')
          .setStyle('DANGER'),
      );

    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle('**Manage Channel**')
      .setDescription(`**Succefully Channel ${message.channel} has been locked! ${temo} **`)
      .setImage(line);

    await message.channel.permissionOverwrites.edit(
      message.guild.roles.everyone,
      { SEND_MESSAGES: false }
    );

    const sentMessage = await message.channel.send({
      embeds: [embed],
      components: [lockRow],
    });

    const collector = sentMessage.createMessageComponentCollector({
      componentType: 'BUTTON',
      max: 100,
      time: null,
    });

    collector.on('collect', async (interaction) => {
      if (!interaction.member.permissions.has('MANAGE_CHANNELS')) return;

      if (interaction.customId === 'Unlock') {
        // فتح القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { SEND_MESSAGES: true }
        );
        embed.setDescription(`**Succsessfuly Channel ${message.channel} has been unlocked ${temo}**`);
        await interaction.update({ embeds: [embed], components: [lockRow] });
      }

      if (interaction.customId === 'Lock') {
        // قفل القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { SEND_MESSAGES: false }
        );
        embed.setDescription(`**Successfuly Channel ${message.channel} has been locked! ${temo}**`);
        await interaction.update({ embeds: [embed], components: [lockRow] });
      }
    });
  }
});


client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + 'unlock')) {
    // فتح القناة
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return;

    const unlockRow = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('lock')
          .setLabel('Lock')
          .setStyle('SUCCESS'),
        new MessageButton()
          .setCustomId('unlock')
          .setLabel('Unlock')
          .setStyle('DANGER'),
      );

    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle('**Manage Channel**')
      .setDescription(`**Successfuly Channel ${message.channel} has been unlocked ${temo} **`)
      .setImage(line);

    await message.channel.permissionOverwrites.edit(
      message.guild.roles.everyone,
      { SEND_MESSAGES: true }
    );

    const sentMessage = await message.channel.send({
      embeds: [embed],
      components: [unlockRow],
    });

    const collector = sentMessage.createMessageComponentCollector({
      componentType: 'BUTTON',
      max: 100,
      time: null,
    });

    collector.on('collect', async (interaction) => {
      if (!interaction.member.permissions.has('MANAGE_CHANNELS')) return;

      if (interaction.customId === 'lock') {
        // قفل القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { SEND_MESSAGES: false }
        );
        embed.setDescription(`**Successfuly Channel ${message.channel} has been locked! ${temo} **`);
        await interaction.update({ embeds: [embed], components: [unlockRow] });
      }

      if (interaction.customId === 'unlock') {
        // فتح القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { SEND_MESSAGES: true }
        );
        embed.setDescription(`**Successfully Channel ${message.channel} has been unlocked! ${temo} **`);
        await interaction.update({ embeds: [embed], components: [unlockRow] });
      }
    });
  }
});


client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + 'hide')) {
    // إخفاء القناة
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return;

    const hideRow = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('show')
          .setLabel('Show')
          .setStyle('SUCCESS'),
        new MessageButton()
          .setCustomId('hide')
          .setLabel('Hide')
          .setStyle('DANGER'),
      );

    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle('**Manage Channel**')
      .setDescription(`**Successfuly Channel ${message.channel} has been hidden! ${temo} **`)
      .setImage(line);

    await message.channel.permissionOverwrites.edit(
      message.guild.roles.everyone,
      { VIEW_CHANNEL: false }
    );

    const sentMessage = await message.channel.send({
      embeds: [embed],
      components: [hideRow],
    });

    const collector = sentMessage.createMessageComponentCollector({
      componentType: 'BUTTON',
      max: 100,
      time: null,
    });

    collector.on('collect', async (interaction) => {
      if (!interaction.member.permissions.has('MANAGE_CHANNELS')) return;

      if (interaction.customId === 'show') {
        // إظهار القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { VIEW_CHANNEL: true }
        );
        embed.setDescription(`**Successfuly Channel ${message.channel} has been shown! ${temo} **`);
        await interaction.update({ embeds: [embed], components: [hideRow] });
      }

      if (interaction.customId === 'hide') {
        // إخفاء القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { VIEW_CHANNEL: false }
        );
        embed.setDescription(`**Successfuly Channel ${message.channel} has been hidden! ${temo} **`);
        await interaction.update({ embeds: [embed], components: [hideRow] });
      }
    });
  }
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + 'show')) {
    // إظهار القناة
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return;

    const showRow = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('hide')
          .setLabel('Hide')
          .setStyle('SUCCESS'),
        new MessageButton()
          .setCustomId('show')
          .setLabel('Show')
          .setStyle('DANGER'),
      );

    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle('**Manage Channel**')
      .setDescription(`**Successfuly Channel ${message.channel} has been shown! ${temo} **`)
      .setImage(line);

    await message.channel.permissionOverwrites.edit(
      message.guild.roles.everyone,
      { VIEW_CHANNEL: true }
    );

    const sentMessage = await message.channel.send({
      embeds: [embed],
      components: [showRow],
    });

    const collector = sentMessage.createMessageComponentCollector({
      componentType: 'BUTTON',
      max: 100,
      time: null,
    });

    collector.on('collect', async (interaction) => {
      if (!interaction.member.permissions.has('MANAGE_CHANNELS')) return;

      if (interaction.customId === 'hide') {
        // إخفاء القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { VIEW_CHANNEL: false }
        );
        embed.setDescription(`**Successfuly Channel ${message.channel} has been hidden! ${temo} **`);
        await interaction.update({ embeds: [embed], components: [showRow] });
      }

      if (interaction.customId === 'show') {
        // إظهار القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { VIEW_CHANNEL: true }
        );
        embed.setDescription(`**Successfuly Channel ${message.channel} has been shown! ${temo} **`);
        await interaction.update({ embeds: [embed], components: [showRow] });
      }
    });
  }
});


client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix + 'unban')) {
if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have permissions **`);
if(!message.guild.me.permissions.has("BAN_MEMBERS")) return;
    let args = message.content.split(' ')
    let id = args[1];
    if(!id)  return message.reply(`** 😕 Please mention member or id **`);
    if(isNaN(id)) {
       return message.reply(`** 😕 Please mention member or id **`);
    } else {
message.guild.members.unban(id).then(mmm => {
        message.reply(`** ${temo} Successfuly** ** ${mmm.tag} unbanned!**`)
      }).catch(err => message.reply(`**I can't find this member in bans list! **`));
      }
    }
}) 


client.on("messageCreate", async message => {
    if (message.author.bot) return;
    let c = message.content.split(' ')
    if (c[0] == prefix + 'ban') {
        if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have permissions **`);
    if(!message.guild.me.permissions.has("BAN_MEMBERS")) return;

    let argss = message.content.split(' ')
    let user = message.guild.members.cache.get(argss[1]) || message.mentions.members.first();
    if(!user) return message.reply(`** 😕 Please mention member or id **`);
 if(user.roles.highest.position > message.member.roles.highest.position && message.author.id !== message.guild.fetchOwner().id) return message.reply(`** ❌ You can't ban this user**`);

    if(!user.bannable) return message.reply(`** ❌ You can't ban this user**`);
    await user.ban().catch(err => {console.log(err)});
     await message.reply(`✅**${user.user.tag} banned from the server!**✈️`);
    }
}) 


client.on("messageCreate", async (message) => {
  if (message.content === prefix + "uptime") {
    if (!message.member.permissions.has(`ADMINISTRATOR`)) return message.reply(`**you don't have permissions**`)
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let s = Math.floor(client.uptime / 1000) % 60;
    ip = `${days} days,  ${hours} hours,  ${minutes} minutes,  ${s} seconds,`
    let embed = new Discord.MessageEmbed()
      .setColor(color)
      .setImage(line)
      .setTitle(`uptime:`)
      .setDescription(`**${ip}**`)
      .setThumbnail(client.user.avatarURL())
      .setTimestamp()
    message.reply({ embeds: [embed] })
  }
})

client.on('channelCreate', message => {
  if (message.parentId !== ordercategory) return;
  setTimeout(() => {
      message.send(`** ${temo} | السلام عليكم ورحمه الله وبركاته .. ** ${temo} 
** <:staffSys:1262098322114744320> | معك طاقم العمل لدي ${svname} ستور في تذكره __الطلب__  

__ ${wemo}  |  يرجي توضيح طلبك بالكامل بكل توضيح لكي يمكنني مساعدتك بأكمل وجهه وتأكيد طلب المنتج الخاص بك ، سوف امنشن فريق السلعه الخاص بك بطلبك ويرجي التحلي بالصبر وانتظار بائع من فريق العمل ، يرجي العلم أن في حاله عدم توافر المنتج في الوقت الحالي سيتم غلق التذكره والعمل علي توفير المنتج قريبا__ .. 

${temo}| ملحوظة : يرجي طلب وسيط اذا كانت السلعه تزيد عن 2m كريدت **`)
      message.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
  }, 3000);
             })


             client.on('channelCreate', async (channel) => {
              if (channel.parentId !== applycategory) return;
              setTimeout(async () => {
                channel.send({
                  content: `**\`-\` السلام عليكم ورحمة الله وبركاته <a:LoveNasa:1254877631632117770>
                        \`-\` معك طاقم العمل لدي ${svname} ستور في تذكرة التقديم <:staffnasa:1254884446557966396>
                        برجاء تحديد جنسيتك من خلال الضغط على القائمة الآتية <a:WhatNasa:1254878072033902634>
                        **`,
                  components: [
                    {
                      type: 1,
                      components: [
                        {
                          type: 3,
                          custom_id: 'select_language',
                          placeholder: 'قم بتحديد جنسيتك من خلال الضغط هنا للاستمرار في التقديم لطاقم العمل',
                          options: [
                            {
                              label: 'مصري', 
                              value: 'egyptian'
                            },
                            {
                              label: 'عربي',
                              value: 'arabic'
                            },
                            {
                              label: 'English',
                              value: 'ENGLISH'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                });
            
                channel.send({
                  content: `**ملحوظات مهمة**`,
                  components: [
                    {
                      type: 1,
                      components: [
                        {
                          type: 2,
                          style: 'PRIMARY',
                          custom_id: 'notes',
                          label: 'ملحوظات مهمة',
                          emoji: '<a:emoji_60:1182828043799101581>'
                        }
                      ]
                    }
                  ]
                });
              }, 2000);
            });
            
            client.on('interactionCreate', async (interaction) => {
              if (!interaction.isButton()) return;
            
              if (interaction.customId === 'notes') {
                await interaction.reply({
                  content: `**\`ملحوظات مهمة للغاية\`
            
            1- أهم حاجة الاحترام المتبادل بينك وبين طاقم العمل داخل السيرفر.
                        
            2- يجب أن تكون الفيدباكات من سيرفرات مشهورة وموثوق بها.
                        
            3- إذا كنت تجلب ورنات أكثر من 5 مرات، سيتم تصفيتك.
                        
            4- في حال تم تصفيتك من السيرفر مرتين سابقًا، لن يُسمح لك بالتقديم مرة أخرى.**`,
                  ephemeral: true
                });
              }
            });
            
            client.on('interactionCreate', async (interaction) => {
              if (!interaction.isSelectMenu()) return;
            
              const language = interaction.values[0];
            
              if (language === 'egyptian') {
                const modalEgyptian = new Modal()
                  .setCustomId('myModalEgyptian')
                  .setTitle('Apply Team Submit (Egyptian)');
                const rname = new TextInputComponent()
                  .setCustomId('rname')
                  .setLabel('اسمك')
                  .setStyle('SHORT');
            
                const age = new TextInputComponent()
                  .setCustomId('age')
                  .setLabel('عمرك')
                  .setStyle('SHORT');
            
                const svcount = new TextInputComponent()
                  .setCustomId('svcount')
                  .setLabel('رقم الكاش')
                  .setStyle('SHORT');
            
                const fbcount = new TextInputComponent()
                  .setCustomId('fb')
                  .setLabel('معاك 30 فيد باك من ستورات ولا لا ؟')
                  .setStyle('SHORT');
            
                const roles = new TextInputComponent()
                  .setCustomId('roles')
                  .setLabel('هتبيع اي')
                  .setStyle('SHORT');
            
                const name = new MessageActionRow().addComponents(rname);
                const agge = new MessageActionRow().addComponents(age);
                const svvcount = new MessageActionRow().addComponents(svcount);
                const fbvcount = new MessageActionRow().addComponents(fbcount);
                const rovles = new MessageActionRow().addComponents(roles);
            
                modalEgyptian.addComponents(name, agge, svvcount, fbvcount, rovles);
            
                await interaction.showModal(modalEgyptian);
              } else if (language === 'arabic') {
                const modalArabic = new Modal()
                  .setCustomId('myModalArabic')
                  .setTitle('Apply Team Submit (Arabic)');
                const rname = new TextInputComponent()
                  .setCustomId('rname')
                  .setLabel('اسمك')
                  .setStyle('SHORT');
            
                const age = new TextInputComponent()
                  .setCustomId('age')
                  .setLabel('عمرك')
                  .setStyle('SHORT');
            
                const svcount = new TextInputComponent()
                  .setCustomId('svcount')
                  .setLabel('مده الخبره في البيع والشراء')
                  .setStyle('SHORT');
            
                const fbcount = new TextInputComponent()
                  .setCustomId('fb')
                  .setLabel('قم بارسال 30 فيدباك  )')
                  .setStyle('SHORT');
            
                const roles = new TextInputComponent()
                  .setCustomId('roles')
                  .setLabel('ماذا سوف تبيع')
                  .setStyle('SHORT');
            
                const name = new MessageActionRow().addComponents(rname);
                const agge = new MessageActionRow().addComponents(age);
                const svvcount = new MessageActionRow().addComponents(svcount);
                const fbvcount = new MessageActionRow().addComponents(fbcount);
                const rovles = new MessageActionRow().addComponents(roles);
            
                modalArabic.addComponents(name, agge, svvcount, fbvcount, rovles);
            
                await interaction.showModal(modalArabic);
              } else if (language === 'ENGLISH') {
                const modalEnglish = new Modal()
                  .setCustomId('myModalEnglish')
                  .setTitle('Apply Team Submit (English)');
                const rname = new TextInputComponent()
                  .setCustomId('rname')
                  .setLabel('Name')
                  .setStyle('SHORT');
            
                const age = new TextInputComponent()
                  .setCustomId('age')
                  .setLabel('Age')
                  .setStyle('SHORT');
            
                const svcount = new TextInputComponent()
                  .setCustomId('svcount')
                  .setLabel('The names of the servers you work with')
                  .setStyle('SHORT');
            
                const fbcount = new TextInputComponent()
                  .setCustomId('fb')
                  .setLabel('Send 20 feedbacks from different servers')
                  .setStyle('SHORT');
            
                const roles = new TextInputComponent()
                  .setCustomId('roles')
                  .setLabel('The names of the rolls you apply for ')
                  .setStyle('SHORT');
            
                const name = new MessageActionRow().addComponents(rname);
                const agge = new MessageActionRow().addComponents(age);
                const svvcount = new MessageActionRow().addComponents(svcount);
                const fbvcount = new MessageActionRow().addComponents(fbcount);
                const rovles = new MessageActionRow().addComponents(roles);
            
                modalEnglish.addComponents(name, agge, svvcount, fbvcount, rovles);
            
                await interaction.showModal(modalEnglish);
              }
            });
            
            client.on('interactionCreate', async (interaction) => {
              if (!interaction.isButton()) return;
            
              if (interaction.customId === 'notes') {
                await interaction.reply({
                  content: `**'Very Important Notes'
            
            1- The most important need is mutual respect between you and the staff inside the server.
                        
            2- Feedbacks must be from famous and reliable servers.
                        
            3- If you fetch ringtones more than 5 times, you will be filtered.
                        
            4- If you were filtered from the server twice previously, you will not be allowed to apply again.**`,
                  ephemeral: true
                });
              } else if (interaction.customId === 'mention') {
                await interaction.reply(`<@&${testerrole}>`, { ephemeral: false });
              }
            });
            
            client.on('interactionCreate', async (interaction) => {
              if (!interaction.isModalSubmit()) return;
            
              const modalId = interaction.customId;
            
              if (modalId === 'myModalEgyptian') {
                const name = interaction.fields.getTextInputValue('rname');
                const rname = interaction.fields.getTextInputValue('age');
                const rrname = interaction.fields.getTextInputValue('svcount');
                const rrrname = interaction.fields.getTextInputValue('fb');
                const rrrrname = interaction.fields.getTextInputValue('roles');
            
                const embed = new MessageEmbed()
                  .setDescription(`**\`\`\` New Apply Team Submition \`\`\`
                    > الاسم : ${name}
            
                    > العمر : ${rname}
            
                    > رقم الكاش : ${rrname}
            
                    > معاك فيدباك : ${rrrname}
            
                    > اسماء الرولات التى تقدم عليها : ${rrrrname}**`)
                  .setImage(line)
                  .setColor(color) 
                  .setThumbnail(interaction.guild.iconURL({ size: 128 }));
            
                const row = new MessageActionRow()
                  .addComponents(
                    {
                      type: 2,
                      style: 'PRIMARY',
                      custom_id: 'notes',
                      label: 'ملحوظات مهمة قبل التقديم',
                      emoji: '<a:emoji_60:1182828043799101581>',
                      ephemeral: true
                    },
                    {
                      type: 2,
                      style: 'PRIMARY',
                      custom_id: 'mention',
                      label: 'منشن الإدارة',
                      emoji: '<:Staff:1178094038281359582>'
                    }
                  );
            
                await interaction.reply({
                  content: `> ** تم اكمال التقديم. يرجى الانتظار الادارة لحين الرد عليك**`,
                  embeds: [embed],
                  components: [row]
                });
              } else if (modalId === 'myModalArabic') {
                const name = interaction.fields.getTextInputValue('rname');
                const rname = interaction.fields.getTextInputValue('age');
                const rrname = interaction.fields.getTextInputValue('svcount');
                const rrrname = interaction.fields.getTextInputValue('fb');
                const rrrrname = interaction.fields.getTextInputValue('roles');
            
                const embed = new MessageEmbed()
                  .setDescription(`**\`\`\` New Apply Team Submition \`\`\`
                    > الاسم : ${name}
            
                    > العمر : ${rname}
            
                   > خبرة السيرفرات  : ${rrname}
            
                    > معاك فيدباك : ${rrrname}
            
                    > اسماء الرولات التى تقدم عليها : ${rrrrname}**`)
                  .setImage(line)
                  .setColor(color)
                  .setThumbnail(interaction.guild.iconURL({ size: 128 }));
                
                const row = new MessageActionRow()
                  .addComponents(
                    {
                      type: 2,
                      style: 'PRIMARY',
                      custom_id: 'notes',
                      label: 'ملحوظات مهمة قبل التقديم',
                      emoji: '<a:emoji_60:1182828043799101581>',
                      ephemeral: true
                    },
                    {
                      type: 2,
                      style: 'PRIMARY',
                      custom_id: 'mention',
                      label: 'منشن الإدارة',
                      emoji: '<:Staff:1178094038281359582>'
                    }
                  );
            
                await interaction.reply({
                  content: `> ** <a:TrueNasa:1254877349338677298> تم اكمال التقديم. يرجى الانتظار الادارة لحين الرد عليك**`,
                  embeds: [embed],
                  components: [row]
                });
              } else if (modalId === 'myModalEnglish') {
                const name = interaction.fields.getTextInputValue('rname');
                const rname = interaction.fields.getTextInputValue('age');
                const rrname = interaction.fields.getTextInputValue('svcount');
                const rrrname = interaction.fields.getTextInputValue('fb');
                const rrrrname = interaction.fields.getTextInputValue('roles');
            
                const embed = new MessageEmbed()
                  .setDescription(`**\`\`\` New Apply Team Submition \`\`\`
                    > Name: ${name}
            
                    > Age: ${rname}
            
                    > Server experience: ${rrname}
            
                    > Feedback: ${rrrname}
            
                    > Roles you apply for: ${rrrrname}**`)
                  .setImage(line)
                  .setColor(color)
                  .setThumbnail(interaction.guild.iconURL({ size: 128 }));
                
                const row = new MessageActionRow()
                  .addComponents(
                    {
                      type: 2,
                      style: 'PRIMARY',
                      custom_id: 'notes',
                      label: 'Important notes before applying',
                      emoji: '<a:emoji_60:1182828043799101581>',
                      ephemeral: true
                    },
                    {
                    type: 2,
                    style: 'PRIMARY',
                    custom_id: 'mention',
                    label: 'Management mention',
                    emoji: '<:Staff:1178094038281359582>'
                  }
                );
            
                await interaction.reply({
                  content: `> **Application completed. Please wait for the administration to respond.**`,
                  embeds: [embed],
                  components: [row]
                });
              }
            });
            
            client.on('interactionCreate', async (interaction) => {
              if (!interaction.isButton()) return;
            
              if (interaction.customId === 'notes') {
                await interaction.reply({
                  content: `**'Very Important Notes'
            
            1- The most important need is mutual respect between you and the staff inside the server.
                        
            2- Feedbacks must be from famous and reliable servers.
                        
            3- If you fetch ringtones more than 5 times, you will be filtered.
                        
            4- If you were filtered from the server twice previously, you will not be allowed to apply again.**`,
                  ephemeral: true
                });
              } else if (interaction.customId === 'mention') {
                await interaction.reply(`<@&${testerrole}>`, { ephemeral: false });
              }
            });

client.on("messageCreate", async message => {
  if (message.author.bot) return;
  if (!message.channel.guild) return;

  if (message.content.startsWith(prefix + 'offer')) {
    if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(`** :rolling_eyes: You don't have permissions **`);

    let args = message.content.split(' ').slice(1).join(' ');

    if (!args) return message.reply('** :x: Please select a message **');

    message.delete();

    let embed = new MessageEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
      .setDescription(`${args}`)
      .setColor(color) 
      .setTimestamp()
      .setImage(line);
      
      const button14 = new MessageButton()
      .setLabel('Order')
     .setURL('https://discord.com/channels/1254612343149563915/1254866119865663663')
      .setStyle('LINK')
      
  const row = new MessageActionRow().addComponents(button14);

    message.channel.send({ embeds: [embed], components: [row]  });
  }
});
client.on("messageCreate", async message => {
    if(message.content.startsWith("+embed")) {
        message.delete();
        if(!message.member.permissions.has("MANAGE_GUILD")) return message.reply("🙄 You don't have permissions");

let args2 = message.content.split(' ').slice(1).join(' ');

const embed12 = new MessageEmbed()
        .setImage(line)
        .setColor(color)
        .setDescription(`${args2}`);

        if(!args2) return message.reply("❌ Please Type Message");

        message.channel.send({embeds: [embed12]});
    }
});
client.on('message', message => {
  if (message.content.includes('has transferred')) {

    const TransformEmbed = new MessageEmbed()
      .setImage(line)
      .setColor(color)
    message.channel.send({ embeds: [TransformEmbed] })
  }
})

client.on('message', message => {
  if (message.content.includes('قام بتحويل')) {

    const TransformEmbed = new MessageEmbed()
      .setImage(line)
      .setColor(color)
    message.channel.send({ embeds: [TransformEmbed] })
  }
})

client.on('message', message => {
  if (message.content.includes('Your Tax Is')) {

    const TransformEmbed = new MessageEmbed()
      .setImage(line)
      .setColor(color)
    message.channel.send({ embeds: [TransformEmbed] })
  }
})
client.on("messageCreate", async(message) => {
    let args = message.content
      .split(" ")
      .slice(0)
      .join(" "); if (message.author.bot) return;
      if (args.endsWith("m")) args =  args.replace(/m/gi, "") * 1000000;
  else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
  else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
  else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
  else if (args.endsWith("b")) args = args.replace(/b/gi, "") * 1000000000;
else if (args.endsWith("B")) args = args.replace(/B/gi, "") * 1000000000;
    if (!message.guild) return;
    if (message.channel.id != taxchannel) return;  
      let args2 = parseInt(args)
      let tax = Math.floor(args2 * (20) / (19) + (1))
      let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
      let tax3 = Math.floor(tax2 * (20) / (19) + (1))
      let tax4 = Math.floor(tax2 + tax3 + args2)
      if (!args2) return message.reply(`
> ** Error It Must Be A Number ${wemo} **`);
      if (isNaN(args2)) return message.reply(`
> ** Error It Must Be A Number ${wemo} **`);
      if (args2 < 1) return message.reply(`
> ** Error It Must Be Larger Than 1 ${wemo} **`);

        let m = await message.reply({ content: `
> **  Your Tax Is : __${tax}__** <a:Systemsys:1262098402900967587> ` });
})

client.on("messageCreate" , async(message) => {
  if(message.author.bot) return;
  if(!message.channel.name.startsWith("ticket")) return;
  if(!message.member.roles.cache.has(team)) return;
  let mss = ["اتفضل" , "كيف اقدر اساعدك" ,"تفضل" ]
  if(!mss.includes(message.content)) return;
  db.add(`respond_${message.guild.id}_${message.author.id}` , 1)

        let levelll = db.get(`level_${message.author.id}`)
    if(levelll == null) {
      db.set(`level_${message.author.id}` , {
        xp : 0,
        nid : message.author.id
      })
    }
      let levell = db.get(`level_${message.author.id}`)
      let level = levell.xp;

  await db.set(`level_${message.author.id}` , {
        xp : Math.floor(level + 1),
        nid : message.author.id
      })
})

//closeticket support point done
client.on("messageCreate" , async(message) => {
  if(message.author.bot) return;
  if(!message.member.roles.cache.has(support)) return;
  let mss = [ "$close" ]
  if(!mss.includes(message.content)) return;
  db.add(`closedtickets_${message.guild.id}_${message.author.id}` , 1)

        let levelll = db.get(`support_${message.author.id}`)
    if(levelll == null) {
      db.set(`support_${message.author.id}` , {
        poi : 0,
        id : message.author.id
      })
    }
      let levell = db.get(`support_${message.author.id}`)
      let level = levell.poi;

  await db.set(`support_${message.author.id}` , {
        poi : Math.floor(level + 1),
        id : message.author.id
      })
})
//rename ticket support point done
client.on("messageCreate" , async(message) => {
  if(message.author.bot) return;
  if(!message.member.roles.cache.has(support)) return;
  let mss = [ "$rename" ]
  mss.forEach(ms => {
    if(!message.content.includes(ms)) return;
  })
  if(!message.channel.name.startsWith("ticket")) return;
  db.add(`renamedtickets_${message.guild.id}_${message.author.id}` , 1)

        let levelll = db.get(`support_${message.author.id}`)
    if(levelll == null) {
      db.set(`support_${message.author.id}` , {
        poi : 0,
        id : message.author.id
      })
    }
      let levell = db.get(`support_${message.author.id}`)
      let level = levell.poi;

  await db.set(`support_${message.author.id}` , {
        poi : Math.floor(level + 1),
        id : message.author.id
      })
})

client.on('channelCreate', async (message) => {
  if (message.parentId != supportcategory) return;
  setTimeout(() => {
    message.send({
      content: `** السلام عليكم ورحمة الله وبركاته ${temo} 
معك طاقم العمل لدي ${svname} في تذكرة __الدعم الفني __  
**__ كل ما عليك هو كتابة مشكلتك أو استفسارك وانتظار ألرد __ <a:Systemsys:1262098402900967587>

**لأستلام التكت اضغط علي  __ Claim__ **`,
      components: [
        new MessageActionRow()
          .addComponents(
            new MessageButton()
              .setLabel("Claim")
              .setStyle("PRIMARY")
              .setCustomId("claim")
          )
  ]})
     }, 2000); 
})

client.on('interactionCreate' , async(interaction) => {
    if(interaction.customId == "claim") {
  if(!interaction.member.roles.cache.has(support)) return;
  if(!interaction.channel.name.startsWith("ticket")) return;
        db.add(`supportticketclaims_${interaction.guild.id}_${interaction.user.id}` , 1)

        let levelll = db.get(`support_${interaction.user.id}`)
    if(levelll == null) {
      db.set(`support_${interaction.user.id}` , {
        poi : 0,
        id : interaction.user.id
      })
    }
      let levell = db.get(`support_${interaction.user.id}`)
      let level = levell.poi;

  await db.set(`support_${interaction.user.id}` , {
        poi : Math.floor(level + 3),
        id : interaction.user.id
      })
       interaction.channel.setName(`${interaction.member.nickname}`)
     await interaction.reply({ embeds: [
        new MessageEmbed()
        .setDescription(`> \`-\`**${interaction.member.nickname} | Done Claimed Ticket <a:sw1xo:1064843153049395310>**`)
      ]})
    }
})


client.on("messageCreate" , async(message) => {
  if(message.author.bot) return;
  if(!message.member.roles.cache.has(support)) return;
  if(message.channel.id !== "1226941270233059448") return;
 if (message.attachments.size == 0) return;

  db.add(`warngived_${message.guild.id}_${message.author.id}` , 1)

        let levelll = db.get(`support_${message.author.id}`)
    if(levelll == null) {
      db.set(`support_${message.author.id}` , {
        poi : 0,
        id : message.author.id
      })
    }
      let levell = db.get(`support_${message.author.id}`)
      let level = levell.poi;

  await db.set(`support_${message.author.id}` , {
        poi : Math.floor(level + 3),
        id : message.author.id
      })
})




  client.on("messageCreate" , async(message) => {
    if(message.author.bot) return;
    if(message.channel.id !== offerroom) return;
    if(!message.member.roles.cache.has(team)) return;
    db.add(`offer_${message.guild.id}_${message.author.id}` , 1)

            let levelll = db.get(`level_${message.author.id}`)
      if(levelll == null) {
        db.set(`level_${message.author.id}` , {
          xp : 0,
          nid : message.author.id
        })
      }
        let levell = db.get(`level_${message.author.id}`)
        let level = levell.xp;

    await db.set(`level_${message.author.id}` , {
          xp : Math.floor(level + 2),
          nid : message.author.id
        })
  })


  client.on("messageCreate" , async(message) => {
    if(message.author.bot) return;
     let feedbackroom = feedback
    if(message.channel.id !== feedbackroom) return;
    let user = message.mentions.members.first()
    if(!user.roles.cache.has(team)) return;
    if(message.author.id === user.id) return;

    db.add(`feeed_${message.guild.id}_${user.id}` , 1)

            let levelll = db.get(`level_${user.id}`)
      if(levelll == null) {
        db.set(`level_${user.id}` , {
          xp : 0,
          nid : user.id
        })
      }
        let levell = db.get(`level_${user.id}`)
        let level = levell.xp;

    await db.set(`level_${user.id}` , {
          xp : Math.floor(level + 3),
          nid : user.id
        })

  })



  client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content === prefix + "safagag") {
      if (!message.member.roles.cache.has(team)) return;
      let data = db.fetchAll();
      let users = [];
      for (let key in data) {
        if (data[key].xp) {
          users.push(data[key]);
        }
      }
      let new_data = users.sort((a, b) => parseFloat(b.xp) - parseFloat(a.xp));
      let num = new_data.length;
      let top = '';
      if (num > 15) num = 15;
      for (let i = 0; i < num; i++) {
        let user = message.guild.members.cache.get(new_data[i].nid);
        let username = user ? user.nickname : 'Unknown User';
        top += `**#${i + 1} | ${username} | ${new_data[i].xp}**\n`;
      }

      let embed = new MessageEmbed()
        .setDescription(`${top}`)
        .setColor(color)
        .setImage(line)
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        .setAuthor("Points Leadboard", client.user.displayAvatarURL());

      await message.reply({ embeds: [embed] });
    }
  });
  client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content === prefix + "dgsagee") {
      if (!message.member.roles.cache.has(support)) return;
      let data = db.fetchAll();
      let users = [];
      for (let key in data) {
        if (data[key].poi) {
          users.push(data[key]);
        }
      }
      let new_data = users.sort((a, b) => parseFloat(b.poi) - parseFloat(a.poi));
      let num = new_data.length;
      let top = '';
      if (num > 15) num = 15;
      for (let i = 0; i < num; i++) {
        let user = message.guild.members.cache.get(new_data[i].id);
        let username = user ? user.nickname : 'Unknown User';
        top += `**#${i + 1} | ${username} | ${new_data[i].poi}**\n`;
      }

      let embed = new MessageEmbed()
        .setDescription(`${top}`)
        .setColor(color)
        .setImage(line)
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        .setAuthor("Support Points Leadboard", client.user.displayAvatarURL());

      await message.reply({ embeds: [embed] });
    }
  });

  client.on("messageCreate", async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
   const args = message.content.slice(prefix.length).trim().split(/ +/);
   const command = args.shift().toLowerCase();
   if(command === "tax") {
    let args1 = message.content
    .split(" ")
    .slice(1)
    .join(" "); 
  if (message.author.bot) return;
    if (args1.endsWith("m")) args1 =  args1.replace(/m/gi, "") * 1000000;
  else if (args1.endsWith("k")) args1 = args1.replace(/k/gi, "") * 1000;
  else if (args1.endsWith("M")) args1 = args1.replace(/M/gi, "") * 1000000;
  else if (args1.endsWith("K")) args1 = args1.replace(/K/gi, "") * 1000;
  else if (args1.endsWith("b")) args1 = args1.replace(/b/gi, "") * 1000000000;
  else if (args1.endsWith("B")) args1 = args1.replace(/B/gi, "") * 1000000000;
    let args2 = parseInt(args1)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2)
    if (!args2) return message.reply(`
  > ** Error It Must Be A Number ${wemo} **`);
    if (isNaN(args2)) return message.reply(`
  > ** Error It Must Be A Number ${wemo} **`);
    if (args2 < 1) return message.reply(`
  > ** Error It Must Be Larger Than 1 ${wemo} **`);
      let row = new MessageActionRow()
    .addComponents(
              new MessageButton()
      .setCustomId(`first_embed`)
      .setLabel("Mediator")
      .setEmoji("👮")
      .setStyle('SUCCESS')
    );
    let row2 = new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setCustomId(`2_embed`)
      .setLabel("Back")
      .setEmoji("↩️")
      .setStyle('DANGER')
  );
      let m = await message.reply({ content: `
  > **  Your Tax Is : __${tax}__**` , components: [row]});
      let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000 ,max: 2 })
      collector.on('collect', async i => {
        if (i.customId === 'first_embed') {
                m.edit({ content: `
  > **  Your Tax Is : __${tax4}__**`, components: [row2]})
                row
                i.deferUpdate()
        }
        if (i.customId === '2_embed') {
        m.edit({ content: `
  > **  Your Tax Is : __${tax}__**`, components: [row] })

                i.deferUpdate()
        } else {
          return;
        }
     });

   }
  if (command === "poisdgsdgsdgsgdnt") {
    let user = message.mentions.members.first() || message.member;
    if (!user.roles.cache.has(team)) return message.reply(`> **You Are Not In Our Team**`);
    let oferpint = db.get(`offer_${message.guild.id}_${user.id}`);
    if (oferpint == null) oferpint = 0;

    let fedpint = db.get(`feeed_${message.guild.id}_${user.id}`);
    if (fedpint == null) fedpint = 0;

    let respint = db.get(`respond_${message.guild.id}_${user.id}`);
    if (respint == null) respint = 0;

    let levelll = db.get(`level_${user.id}`);
    if (levelll == null) {
      db.set(`level_${user.id}`, {
        xp: 0,
        nid: user.id,
      });
    }

    let levell = db.get(`level_${user.id}`);
    let level = levell.xp;

    message.reply(`
  > **Hey ${user} <a:ss_4:1064843136276365412>** 

  > **Feedbacks : \`${fedpint}\`  <a:true:1064843178483666964>**

  > **Offers : \`${oferpint}\` <a:true:1064843178483666964>** 

  > **Respond Tickets : \`${respint}\` <a:true:1064843178483666964>** 

  > **Total Points : \`${level}\` <a:true:1064843178483666964>** 

  ====================

  **__للمعلومه يتم احتساب النقاط عن طريق ان الفيدباك الواحد عليه 3 نقاط و الاوفر الواحد عليه نقطتين و رد التيكت الواحد عليه نقطه واحده فقط. <a:true:1064843178483666964>__**`);
  }
 if (command === 'sdgsgsegsegh') {
  let user = message.mentions.members.first() || message.member;
  if (!user.roles.cache.has(support)) return message.reply(`> **You Haven't Ticket Support Role**`);

  let clpint = db.get(`closedtickets_${message.guild.id}_${user.id}`) || 0;
  let repint = db.get(`renamedtickets_${message.guild.id}_${user.id}`) || 0;
  let warpint = db.get(`warngived_${message.guild.id}_${user.id}`) || 0;
  let claimedsupporttic = db.get(`supportticketclaims_${message.guild.id}_${user.id}`) || 0;

  let levell = db.get(`support_${user.id}`);
  if (!levell) {
    db.set(`support_${user.id}`, {
      poi: 0,
      id: user.id,
    });
    levell = { poi: 0 };
  }

  let level = levell.poi || 0;

  message.reply(`
  > **Hey ${user} <a:ss_4:1064843136276365412>** 

  > **Close Tickets : \`${clpint}\` <a:true:1064843178483666964>**

  > **Renamed Order Tickets : \`${repint}\` <a:true:1064843178483666964>** 

  > **Claimed Technical Support Tickets \`${claimedsupporttic}\` <a:true:1064843178483666964>** 

  > **Warn Gived \`${warpint}\` <a:true:1064843178483666964>** 

  > **Total Points : \`${level}\` <a:true:1064843178483666964>** 

  ====================`);
}

 if(command === "come") {
  const user = message.mentions.members.first()
  if (!user) return message.reply(`** ${wemo} | I Can't Find This User!**`)
    if (user.id == message.author.id) return message.reply(`** ${wemo} | You Can't Send To Yourself!**`)
    if (user.user.bot) return message.reply(`** ${wemo} | You Can't Send To Bot!**`)
          let inv = await message.channel.createInvite(message.channel)
    user.send(`** Sorry For Disturbance You Have Requested ${temo}

 CHANNEL : ${message.channel} <a:Systemsys:1262098402900967587>

 You Request By : ${message.guild.members.cache.get(message.author.id).displayName || message.author.tag} 

 link Server Link : { ${link} } 
    **`).then(() => {
   message.reply({
    embeds : [
      new MessageEmbed()
      .setDescription(`** <a:Systemsys:1262098402900967587> | Please Wait ....**`)
      .setImage(line)
      .setAuthor(message.author.username, message.author.avatarURL()) 
      .setColor(color)
    ]
  }).then((t) => {
    setTimeout(() => t.edit({
      embeds : [
        new MessageEmbed()
      .setDescription(`** ${temo} | Done Message Has Been Send To ${user}**

** <a:Systemsys:1262098402900967587> | Please Wait And Dont Spam**`)
        .setImage(line)
        .setAuthor(message.author.username, message.author.avatarURL()) 
        .setColor(color)
      ]
    }),1800)
})   
}).catch((y) => {
               message.reply({
    embeds : [
      new MessageEmbed()
      .setDescription(`> **<a:Systemsys:1262098402900967587> | Please Wait ....**`)
      .setImage(line)
      .setAuthor(message.author.username, message.author.avatarURL()) 
      .setColor(color)
    ]
  }).then((t) => {
    setTimeout(() => t.edit({
      embeds : [
        new MessageEmbed()
      .setDescription(` ${wemo} | **Error __${y.message}__**`)
      .setImage(line)
      .setAuthor(message.author.username, message.author.avatarURL()) 
      .setColor(color)
      ]
    }),1800)
               })
})
 }
})
client.on('messageCreate', async message => {
    if (message.content.toLowerCase().startsWith("تشفير") && !message.author.bot) {
        let args = message.content.slice("تشفير".length).trim();

        if (args.length === 0) {
            return message.reply("** من فضلك اكتب الرسالة التي تريد تشفيرها**");
        }

        let content = args.replaceAll("نيترو", "نيتـ رو").replaceAll("فيزا", "فيـ ـزا").replaceAll("كريدت", "كريـ ـدت").replaceAll("كرديت", "كريـ ـدت").replaceAll("كاش", "كـ ـاش").replaceAll("ستيم", "ستـ ـيم").replaceAll("سيرفر", "سيرفـ ـر").replaceAll("ديسكورد", "ديسـ ـكورد").replaceAll("حسابات", "حسابـ ـات").replaceAll("اكونتات", "اكـ ـونتات").replaceAll("بوستات", "بوستـ ـات").replaceAll("تفعيل", "تفـ ـعيل").replaceAll("نيتفليكس", "نيتفلـ ـيكس").replaceAll("سبوتيفاي", "سبوتـ ـيفاي").replaceAll("تيكتوك", "تيكـ ـتوك").replaceAll("فيسبوك", "فيسـ ـبوك").replaceAll("انستا", "انسـ ـتا").replaceAll("توكنات", "توكـ ـنات").replaceAll("فوتات", "فوتـ ـات").replaceAll("بوتات", "بوتـ ـات").replaceAll("كريبتو", "كريبتـ ـو").replaceAll("عملات", "عمـ ـلات").replaceAll("كود", "كـ ـود").replaceAll("بوت", "بـ وت").replaceAll("اكس بوكس", "اكسـ ـبوكس").replaceAll("فيز", "فيـ ـز").replaceAll("موجود", "موجـ ـود").replaceAll("اكونت", "اكـ ونـ ت").replaceAll("متوفر", "مـتـ وفر").replaceAll("سعر", "سـ ـعر").replaceAll("تيكت", "تيـ ـكت").replaceAll("تكت", "تـ كـ ـت").replaceAll("متابع", "مـ ـتـابـع").replaceAll("حساب", "حـ ـسـاب").replaceAll("بيع", "بـ ـيع").replaceAll("اعضاء", "اعـ ـضاء").replaceAll("اوتو", "اوتـ ـو").replaceAll("اوفلاين", "اوفـ ـلاين").replaceAll("اونلاين", "اونـ ـلاين").replaceAll("تيك توك", "تـ ـيك تـ ـوك").replaceAll("وهمي", "وهـ ـمي").replaceAll("استور", "اسـ ـتور").replaceAll("شاهد", "شـ ـاهـ ـد").replaceAll("نوع", "نـ ـوع").replaceAll("شوب", "شـ ـوب").replaceAll("تفاعل", "تفـ ـاعـ ـل").replaceAll("لفل", "لـ ـفـ ـل").replaceAll("ضمان", "ضـ ـمان").replaceAll("محدوده", "محـ ـدوده").replaceAll("فتره", "فـ ـتره").replaceAll("ابدي", "ابـ ـدي").replaceAll("سنه", "سـ ـنه").replaceAll("شهر", "شـ ـهر").replaceAll("شهور", "شـ ـهور").replaceAll("اسبوع", "اسـ ـبوع").replaceAll("انواع", "انـ ـواع").replaceAll("انواع", "انـ ـواع").replaceAll("جميع", "جمـ ـيع").replaceAll("ديس", "ديـ ـس").replaceAll("كوين", "كويـ ـن").replaceAll("والت", "والـ ـت").replaceAll("سويت", "سـ ـويـ ـت").replaceAll("اسعار", "اسعـ ـار").replaceAll("ميمبر", "ميـ ـمبر").replaceAll("ميوزك", "ميـ ـوزك").replaceAll("برودكاست", "برودكـ ـاسـ ـت").replaceAll("سيستم", "سيـ ـستم").replaceAll("ميديا", "ميديـ ـا").replaceAll("خدمات", "خدمـ ـات").replaceAll("سوشيال", "شوشـ ـيال").replaceAll("توكن", "تـ ـوكن").replaceAll("نتفلكس", "نtفلكس");

        const reply = await message.reply("**Check You Dm! <a:Systemsys:1262098402900967587>**");
        message.author.send(content).then(() => {
            setTimeout(() => {
                message.delete();
            }, 10000);

            
            setTimeout(() => {
                reply.delete();
            }, 10000);
        });
    }
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    let prefix = "r";
    // تحويل المحتوى إلى أحرف صغيرة ثم التحقق من البادئة
    if (!message.content.toLowerCase().startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (!message.member.roles.cache.has(team)) return;

    if (command === 'e') {
        const nickname = message.member.nickname || message.author.username;
        if (
            message.channel.name.startsWith('ticket') || 
            message.channel.name.startsWith('need') || 
            message.channel.name.startsWith('sell') || 
            message.channel.name.startsWith('by')
        ) {
            try {
                const newChannelName = `${nickname}`; // استخدام القوالب النصية لتكوين اسم القناة
                await message.channel.setName(newChannelName);
                await message.delete();
                await message.channel.send(`**تم تحديد طلبك و استلام التذكرة من قبل البائع ${message.author} <a:Systemsys:1262098402900967587> 

الرجاء لو تعدى المبلغ 2m كريدت قم بأخذ وسيط  **`);
            } catch (error) {
                console.error('Error changing channel name:', error);
            }
        }
    }
});


                               
                                        client.on("messageCreate", message => {
  if (message.content.startsWith('+font')) {
    let words = message.content.split(" ").slice(1).join(" ");
    let words2 = words.replaceAll("a", "𝐚").replaceAll("A", "𝐀").replaceAll("b", "𝐛").replaceAll("B", "𝐁").replaceAll('c', "𝐜").replaceAll("C", "𝐂").replaceAll("d", "𝐝").replaceAll("D", "𝐃").replaceAll("e", "𝐞").replaceAll("E", "𝐄").replaceAll("f", "𝐟").replaceAll("F", "𝐅").replaceAll("g", "𝐠").replaceAll("G", "𝐆").replaceAll("h", "𝐡").replaceAll("H", "𝐇").replaceAll("i", "𝐢").replaceAll("I", "𝐈").replaceAll("j", "𝐣").replaceAll("J", "𝐉").replaceAll("k", "𝐤").replaceAll("K", "𝐊").replaceAll("l", "𝐥").replaceAll("L", "𝐋").replaceAll("m", "𝐦").replaceAll("M", "𝐌").replaceAll("n", "𝐧").replaceAll("N", "𝐍").replaceAll("o", "𝐨").replaceAll("O", "𝐎").replaceAll("p", "𝐩").replaceAll("P", "𝐏").replaceAll("q", "𝐪").replaceAll("Q", "𝐐").replaceAll("r", "𝐫").replaceAll("R", "𝐑").replaceAll("s", "𝐬").replaceAll("S", "𝐒").replaceAll("t", "𝐭").replaceAll("T", "𝐓").replaceAll("u", "𝐮").replaceAll("U", "𝐔").replaceAll("v", "𝐯").replaceAll("V", "𝐕").replaceAll("w", "𝐰").replaceAll("W", "𝐖").replaceAll("x", "𝐱").replaceAll("X", "𝐗").replaceAll("y", "𝐲").replaceAll("Y", "𝐘").replaceAll("z", "𝐳").replaceAll("Z", "𝐙").replaceAll("1","𝟏").replaceAll("2","𝟐").replaceAll("3","𝟑").replaceAll("4","𝟒").replaceAll("5","𝟓").replaceAll("6","𝟔").replaceAll("7","𝟕").replaceAll("8","𝟖").replaceAll("9","𝟗").replaceAll("0","𝟎")
    if (!words) return message.channel.send('> ** Please Write a Word :x: !**')
    message.channel.send(`${words2}`)
  }
});

                                              client.on("message", message => {
  if (message.content == ("+io") || message.content === "خمول") {

message.channel.send(`**__ ${wemo} |يرجي العلم أنه في حاله الخمول في التذكره لمده عشر دقايق سوف يتم غلق التذكره تلقائيا من طاقم العمل ! __**



**__Please note that in case of inactivity in the ticket for 10 Minutes, the ticket will be closed by the support ! __**`)
    message.delete()

  }
})

client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'tag') {
    let mentionedUser = await message.mentions.members.first();
    let additionalText = args.slice(1).join(' ');

    if (!mentionedUser) {
      return await message.channel.send(`**Error Please Mention User! ${wemo} `);
    }

    let stylizedText = additionalText.replaceAll("a", "𝐚").replaceAll("A", "𝐀").replaceAll("b", "𝐛").replaceAll("B", "𝐁").replaceAll('c', "𝐜").replaceAll("C", "𝐂").replaceAll("d", "𝐝").replaceAll("D", "𝐃").replaceAll("e", "𝐞").replaceAll("E", "𝐄").replaceAll("f", "𝐟").replaceAll("F", "𝐅").replaceAll("g", "𝐠").replaceAll("G", "𝐆").replaceAll("h", "𝐡").replaceAll("H", "𝐇").replaceAll("i", "𝐢").replaceAll("I", "𝐈").replaceAll("j", "𝐣").replaceAll("J", "𝐉").replaceAll("k", "𝐤").replaceAll("K", "𝐊").replaceAll("l", "𝐥").replaceAll("L", "𝐋").replaceAll("m", "𝐦").replaceAll("M", "𝐌").replaceAll("n", "𝐧").replaceAll("N", "𝐍").replaceAll("o", "𝐨").replaceAll("O", "𝐎").replaceAll("p", "𝐩").replaceAll("P", "𝐏").replaceAll("q", "𝐪").replaceAll("Q", "𝐐").replaceAll("r", "𝐫").replaceAll("R", "𝐑").replaceAll("s", "𝐬").replaceAll("S", "𝐒").replaceAll("t", "𝐭").replaceAll("T", "𝐓").replaceAll("u", "𝐮").replaceAll("U", "𝐔").replaceAll("v", "𝐯").replaceAll("V", "𝐕").replaceAll("w", "𝐰").replaceAll("W", "𝐖").replaceAll("x", "𝐱").replaceAll("X", "𝐗").replaceAll("y", "𝐲").replaceAll("Y", "𝐘").replaceAll("z", "𝐳").replaceAll("Z", "𝐙").replaceAll("1","𝟏").replaceAll("2","𝟐").replaceAll("3","𝟑").replaceAll("4","𝟒").replaceAll("5","𝟓").replaceAll("6","𝟔").replaceAll("7","𝟕").replaceAll("8","𝟖").replaceAll("9","𝟗").replaceAll("0","𝟎");

    let newNickname = `𝐀𝐓丶${stylizedText}`;

    await mentionedUser.setNickname(newNickname).then(async () => {
      await message.channel.send(`**__Successfuly Added Tag To${mentionedUser} ${temo} __**`);
    }).catch(err => message.channel.send(`**Error I don't have Permission to do that, Please Check my Role position ${wemo} **`));
}
});

const owner = ["1212726840716955721","1209275645738352683"]

const wait = require("node:timers/promises").setTimeout;
client.on('messageCreate', async message => {
  let msg = message, m = message
  if (m.author.bot) return;
  if (message.content !== prefix + "team") return
  if (m.member.permissions.has("ADMINISTRATOR")) {
    if (message.channel.id !== "1254866073119887490") {
      let rep = await message.reply("استخدم الامر في روم التيم")
      await wait(2000);
      rep.delete();
      message.delete();
      return;
    }
    let team = m.guild.roles.cache.get("1241496708354015393")
    let count = 0;
    team.members.forEach((member) => {
      message.channel.send(`<@${member.id}>`)
      message.channel.send(line)
      count++;
    })
    message.channel.send("Done , Team count is : " + count)
  }
})


client.on('message', async message => {
  if (message.content.startsWith(prefix + 'tbc')) {
    if (!owner.includes(message.author.id)) return message.reply(`**This Command Only Owners Can Use**`);

    const args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    const role = message.mentions.roles.first();

    if (!role) {
      return message.reply('**Please Mention a Role**');
    }
    if (!args) {
      return message.reply('**Please Enter Your Message**');
    }

    let sentCount = 0;

    let members = message.guild.members.cache.filter(member => !member.user.bot && member.roles.cache.has(role.id));

    members.forEach((member, index) => {
      setTimeout(() => {
        member.send({ content: args })
          .then(() => {
            console.log(`Sent to ${member.user.username}`);
            message.channel.send(`**Successfuly Sent to <@${member.user.id}> ${temo} **`);
          })
          .catch(err => {
            console.error(`**Error Couldn't send to ${member.user.tag} <a:OfflineNasa:1254877737919709205> **`);
            message.channel.send(`**Error Couldn't send to <@${member.user.id}> ${wemo} **`);
          })
          .finally(() => {
            sentCount++;
            if (index === members.size - 1) {
            
              message.channel.send(`**Successfuly Semt your message to ${sentCount} members 
**`);
            }
          });
      }, index * 5000); 
    });
  }
});


 client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.channel.id == "1155201710634041526"){
    const anchannel = client.channels.cache.get("1153992975605563432")
    let args = message.content.split(' ').slice(0).join(' ')

let test = args.replaceAll("نيترو","نيتـ رو").replaceAll("فيزا","فيـ ـزا").replaceAll("كريدت","كريـ ـدت").replaceAll("كرديت","كريـ ـدت").replaceAll("كاش","كـ ـاش").replaceAll("ستيم","ستـ ـيم").replaceAll("سيرفر","سيرفـ ـر").replaceAll("ديسكورد","ديسـ ـكورد").replaceAll("حسابات","حسابـ ـات").replaceAll("اكونتات","اكـ ـونتات").replaceAll("بوستات","بوستـ ـات").replaceAll("تفعيل","تفـ ـعيل").replaceAll("نيتفليكس","نيتفلـ ـيكس").replaceAll("سبوتيفاي","سبوتـ ـيفاي").replaceAll("تيكتوك","تيكـ ـتوك").replaceAll("فيسبوك","فيسـ ـبوك").replaceAll("انستا","انسـ ـتا").replaceAll("توكنات","توكـ ـنات").replaceAll("فوتات","فوتـ ـات").replaceAll("بوتات","بوتـ ـات").replaceAll("كريبتو","كريبتـ ـو").replaceAll("عملات","عمـ ـلات").replaceAll("كود","كـ ـود").replaceAll("بوت","بـ وت").replaceAll("اكس بوكس","اكسـ ـبوكس").replaceAll("فيز","فيـ ـز").replaceAll("موجود","موجـ ـود").replaceAll("اكونت","اكـ ونـ ت").replaceAll("متوفر","مـتـ وفر").replaceAll("سعر","سـ ـعر").replaceAll("تيكت","تيـ ـكت").replaceAll("تكت","تـ كـ ـت").replaceAll("متابع","مـ ـتـابـع").replaceAll("حساب","حـ ـسـاب").replaceAll("بيع","بـ ـيع").replaceAll("اعضاء","اعـ ـضاء").replaceAll("اوتو","اوتـ ـو").replaceAll("اوفلاين","اوفـ ـلاين").replaceAll("اونلاين","اونـ ـلاين").replaceAll("تيك توك","تـ ـيك تـ ـوك") .replaceAll("وهمي","وهـ ـمي").replaceAll("استور","اسـ ـتور").replaceAll("شاهد","شـ ـاهـ ـد").replaceAll("نوع","نـ ـوع").replaceAll("شوب","شـ ـوب").replaceAll("تفاعل","تفـ ـاعـ ـل").replaceAll("لفل","لـ ـفـ ـل").replaceAll("ضمان","ضـ ـمان").replaceAll("محدوده","محـ ـدوده").replaceAll("فتره","فـ ـتره").replaceAll("ابدي","ابـ ـدي").replaceAll("سنه","سـ ـنه").replaceAll("شهر","شـ ـهر").replaceAll("شهور","شـ ـهور").replaceAll("اسبوع","اسـ ـبوع").replaceAll("انواع","انـ ـواع").replaceAll("انواع","انـ ـواع").replaceAll("جميع","جمـ ـيع").replaceAll("ديس","ديـ ـس").replaceAll("كوين","كويـ ـن").replaceAll("والت","والـ ـت") .replaceAll("سويت","سـ ـويـ ـت").replaceAll("اسعار","اسعـ ـار").replaceAll("ميمبر","ميـ ـمبر").replaceAll("ميوزك","ميـ ـوزك").replaceAll("برودكاست","برودكـ ـاسـ ـت").replaceAll("سيستم","سيـ ـستم").replaceAll("ميديا","ميديـ ـا") .replaceAll("خدمات","خدمـ ـات") .replaceAll("سوشيال","شوشـ ـيال").replaceAll("توكن","تـ ـوكن")

    let embed = new MessageEmbed()
    .setColor(color) 

    let attach = message.attachments.first();

if (attach) {
   embed.setImage(attach.proxyURL)     
} 
   anchannel.send(`**~~__ ${test} __~~**
 <a:awhiteline:1153303400969154711><a:awhiteline:1153303400969154711><a:awhiteline:1153303400969154711><a:awhiteline:1153303400969154711><a:awhiteline:1153303400969154711><a:awhiteline:1153303400969154711><a:awhiteline:1153303400969154711><a:awhiteline:1153303400969154711><a:awhiteline:1153303400969154711><a:awhiteline:1153303400969154711><a:awhiteline:1153303400969154711>

> • <a:right:1155563158975553617> __𝐎𝐰𝐧𝐞𝐫 𝐎𝐟𝐟𝐞𝐫__ : <@${message.author.id}> <a:true:1064843178483666964>   

> •  <a:right:1155563158975553617> __𝐎𝐫𝐝𝐞𝐫 𝐓𝐢𝐜𝐤𝐞𝐭__ : <#1153992967196004402>   <a:true:1064843178483666964>  

> • <a:right:1155563158975553617> __𝐎𝐟𝐟𝐞𝐫 𝐌𝐞𝐧𝐭𝐢𝐨𝐧__  : <@&1153992560499507241>   <a:true:1064843178483666964>**`).then(mes => setTimeout(() => {
        mes.delete()
      }, 43200000))

    message.reply("<:emoji_112:1154109346377109637> | 𝐃𝐨𝐧𝐞 𝐒𝐞𝐧𝐝 𝐘𝐨𝐮𝐫 𝐎𝐟𝐟𝐞𝐫 <a:true:1064843178483666964>")
     anchannel.send({embeds: [embed]}).then(pho => setTimeout(() => {
        pho.delete()
      }, 43200000))  
    anchannel.send(line).then(lin => setTimeout(() => {
        lin.delete()
      }, 43200000))
          
  }
})
client.on("messageCreate", message => {
if(message.content.startsWith("+say")) {
    let args = message.content.split(" ").slice(1).join(" ")
    message.delete();
    message.channel.send(args)
}
});
const ordercategoryM = "1254865992794771598"//ايدي_الاوردر_كاتجوري
const supportM = "1254865788465184768"//ايدي_الرول_الي_لما_تمنشن_يتنفذ_الكود
client.on('messageCreate', async message => {
  if (message.channel.parentId === ordercategory) {
    const member = message.guild.members.cache.get(message.author.id);
    if (member.roles.cache.has(support)) {
      if (message.mentions.roles.size > 0) {
        message.mentions.roles.forEach(role => {
          message.guild.members.fetch().then(members => {
            members.forEach(member => {
              if (member.roles.cache.has(role.id)) {
                member.send(`**طلب زبون : ${message.channel}**`);
              }
            });
          });
        });
        message.reply('**The people who own the request were called. Please wait for the seller**');
      }
    }
  }
});
client.on('messageCreate', async cristalateam => {
  if (cristalateam.content.startsWith("thiscommandisfawzijjjaai") && cristalateam.member.permissions.has("ADMINISTRATOR")) {
    cristalateam.delete();
    
    const vodkaEmbed = new MessageEmbed()
    .setColor('color')
    .setTitle('Collect Your Roles')
         .setImage(`https://media.discordapp.net/attachments/1254866073119887490/1259300541205446766/Untitled83_20240707014505.png?ex=668d28c5&is=668bd745&hm=0bb3e94f87a99ebf73807ad6727c521a03c8d670b34bc4c49e8c23253830fe26&`)
    .setDescription('**Please click the buttons below to collect your roles.**');
    
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('cristalaT')
          .setEmoji(`<a:offers:1259237893432541217>`)
          .setLabel('Offers')
          .setStyle('PRIMARY'),
        new MessageButton()
          .setCustomId('Cristalat')
          .setEmoji(`<:giveaway:1259238541876133952>`)
          .setLabel('GiveAways')
          .setStyle('PRIMARY'),
        new MessageButton()
          .setCustomId('CristalaT')
          .setEmoji(`<a:news:1259238009199398984>`)
          .setLabel('News')
          .setStyle('PRIMARY')
      );

    cristalateam.channel.send({ embeds: [vodkaEmbed], components: [row] });
  }
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'cristalaT') {
    const crole = interaction.guild.roles.cache.get('1254865919134400513');
    if (interaction.member.roles.cache.has(crole.id)) {
      await interaction.member.roles.remove(crole).catch(err => console.error(err));
      interaction.reply({ content: `Done Remove The Role Succefully ☑️`, ephemeral: true });
    } else {
      await interaction.member.roles.add(crole).catch(err => console.error(err));
      interaction.reply({ content: `Done Added The Role Succefully ☑️`, ephemeral: true });
    }
  } else if (interaction.customId === 'Cristalat') {
    const ccrole = interaction.guild.roles.cache.get('1254865921391202447');
    if (interaction.member.roles.cache.has(ccrole.id)) {
      await interaction.member.roles.remove(ccrole).catch(err => console.error(err));
      interaction.reply({ content: `Done Remove The Role Succefully ☑️`, ephemeral: true });
    } else {
      await interaction.member.roles.add(ccrole).catch(err => console.error(err));
      interaction.reply({ content: `Done Added The Role Succefully ☑️`, ephemeral: true });
    }
  } else if (interaction.customId === 'CristalaT') {
    const vodkarole = interaction.guild.roles.cache.get('1254865920115871827');
    if (interaction.member.roles.cache.has(vodkarole.id)) {
      await interaction.member.roles.remove(vodkarole).catch(err => console.error(err));
      interaction.reply({ content: `Done Remove The Role Succefully ☑️`, ephemeral: true });
    } else {
      await interaction.member.roles.add(vodkarole).catch(err => console.error(err));
      interaction.reply({ content: `Done Added The Role Succefully ☑️`, ephemeral: true });
    }
  }
});

client.login("MTI2MjExMDE0Nzk5MjYyMTEwNw.G0QffJ.-8ZV2VHWQUiVFAxUkZ2TfMpbJCQ0Q8d8vxoirc")