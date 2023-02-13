const { ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    name: 'setup',
    description: "🤖 Setup Your InfoChannelBot",
    voiceChannel: false,
    permissions: PermissionsBitField.Flags.ManageMessages,
    options: [
        {
            name: 'channel',
            description: 'Channel',
            type: ApplicationCommandOptionType.Channel,
            required: true,
        }
    ],
    async execute({ inter, client }) { 
      let Channel = inter.options.getChannel('channel');
      if (Channel.type !== 0) return inter.reply({ content: `Please select a **text channel**`, ephemeral: true})

    
      const embed = new EmbedBuilder()
       .setTitle('PUT YOUR TITLE HERE')
       .setImage('https://example.com/example.png') //If you want an image in your embed, Put a valid image url, if no, remove this line of code
       .setDescription('Put your description here')
       .setColor('#ffffff')
//Check this project's github to see an example

         inter.reply({ content: `Setting Up!`, ephemeral: true})
 //Everything is here! Edit these codes carefully
        const rules = new ButtonBuilder()
         .setLabel('Rules') //Your button's title
         .setCustomId(JSON.stringify({ffb: 'rules'})) //Set customid (default is rules)
         .setStyle('Secondary') //Gray button (You can change it)
         .setEmoji({ id: "1073343776099139744" }) //IMPORTANT! For "id" you need to put backslash ( \ ) in first of emoji name, Like this: \:kekw: then a weird text will appear. it has a number, copy the number and put it here. |If you want your button to have an emoji (if you dont want, remove this line of code)
 
         
       
         
   



         const row1 = new ActionRowBuilder().addComponents(rules)



        Channel.send({ embeds: [embed], components: [row1] })

    },
}
