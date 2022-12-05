const Discord = require("discord.js")
require("dotenv").config()
 
const generateImage = require("./generateImage")
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready",() => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

const welcomeChannelid = "1049451165487726662"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelid).send({
        content:`<@${member.id}> Welcome faggot`,
        files: [img]
    })

})

client.login(process.env.TOKEN)