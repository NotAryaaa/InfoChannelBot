const { EmbedBuilder, InteractionType } = require('discord.js');

module.exports = (client, inter) => {
    if (inter.type === InteractionType.ApplicationCommand) {
        const Private = client.config.opt.Private;
        const command = client.commands.get(inter.commandName);

    if (!command) return inter.reply({ embeds: [ new EmbedBuilder().setColor('#ff0000').setDescription('Error! Please contact Developers!')], ephemeral: true, }), client.slash.delete(inter.commandName)
    if (command.permissions && !inter.member.permissions.has(command.permissions)) return inter.reply({ embeds: [ new EmbedBuilder().setColor('#ff0000').setDescription(`Only members with \`${Private.roleName}\` role can use **InfoChannelBot Setup**`)], ephemeral: true, })
    if (Private.enabled && Private.commands.includes(command) && !inter.member._roles.includes(inter.guild.roles.cache.find(x => x.name === Private.roleName).id)) return inter.reply({ embeds: [ new EmbedBuilder().setColor('#ff0000').setDescription(`Only members with \`${Private.roleName}\` role can use **InfoChannelBot Setup** `)], ephemeral: true, })
        command.execute({ inter, client });
    }
    if (inter.type === InteractionType.MessageComponent) {
        const customId = JSON.parse(inter.customId)
        const file_of_button = customId.ffb
        const queue = player.getQueue(inter.guildId);
        if (file_of_button) {
            delete require.cache[require.resolve(`../src/buttons/${file_of_button}.js`)];
            const button = require(`../src/buttons/${file_of_button}.js`)
            if (button) return button({ client, inter, customId});
        }
    }
};
