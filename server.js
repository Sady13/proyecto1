const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");


client.on("ready", () => {
   console.log("Sady13 Tu bot gamescityhispano ya esta listo");
   client.user.setPresence( {
       status: "online",
       game: {
           name: "Creado Por Sady13 | GamesCityHispano©",
           type: "PLAYING"
       }
   } );
});
var prefix = config.prefix;

client.on("message", (message) => {
 if (message.content === 'hola') {
    message.reply(':regional_indicator_h: :o2: :regional_indicator_l: :regional_indicator_a: ');
    }else    
 if (message.content.startsWith(prefix +"ip" )){
    const embed = new Discord.RichEmbed() 
    .setTitle("IP:")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x00AE86)
    .setDescription("No Disponible")
    .setFooter("GamesCityHispano©", client.user.avatarURL)
    .setTimestamp()
    .addField("Port:",
      "No Disponible")
    .addField("Estado Servidor:", "Cerrado", true)
    .addBlankField(true)
    
    
    
    message.channel.send({embed});
}else
  if (message.content.startsWith(prefix +"donar" )){
    const embed = new Discord.RichEmbed() 
    .setTitle("Dona y Apoya a la comunidad")
    .setColor(0x00AE86)
    .setDescription("_Con Cada donacion apoyas y tienes  cosas exclusivas In-Game y en Discord_ ***(Recuerda Podras ver las ventajas en la web)***")
    .setFooter("GamesCityHispano© ( Donar )", client.user.avatarURL)
    .setTimestamp()
    .setURL("")
    .addField("Donar y apoyar:",
      "Tienda No Disponible")
    
   
    
    message.channel.send({embed});
      
    }
  });

    
    

client.on("guildMemberAdd", (member) => {
   console.log(`Nuevo usuario:  ${member.user.username} se ha unido a ${member.guild.name}.`);
   var canal = client.channels.get('483006056100790273'); 
   canal.send(`${member.user}, es nuevo en el servidor darle la bienvenida :wave: `);
   
});

client.login(config.token);
