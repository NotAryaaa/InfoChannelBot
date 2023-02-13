module.exports = async (client) => {
    console.log(`Your InfoChannelBot Is Ready! Please ⭐ This Project In Github | Logged in as ${client.user.username}`);
    client.user.setActivity(client.config.app.playing);

    
};