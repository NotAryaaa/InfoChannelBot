const { ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');
module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ embeds: [ new EmbedBuilder().setColor('#ffffff').setTitle('Server Rules').setDescription('Put a description')], ephemeral: true, })

    if (!queue.previousTracks[1]) return inter.reply({ embeds: [ new EmbedBuilder().setColor('#ffffff').setTitle('Server Rules').setDescription('Put a description')], ephemeral: true, })

}