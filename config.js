module.exports = {
    app: {
        token: 'My_Bot_Token', //Put your bot token here!
        playing: 'InfoChannelBot | Made By NotArya!', //Put your bot's status here
        global: false, //Want your bot to be private or no, if yes, set this to *false* DEFAULT IS FALSE!
        guild: 'My_Guild_ID' //Your bot can only be used in this guild
    },
  opt: {
        Private: {
            enabled: false, //If enabled, only members with selected role can use setup command!
            roleName: 'Put_Role_Name_Not_ID',
            commands: []
        },

}
}
