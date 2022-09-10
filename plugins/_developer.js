let handler = async(m, { conn }) => {
conn.sendContact(m.chat, numberowner, nameowner, ftoko, { contextInfo: {
externalAdReply :{
showAdAttribution: true,
}}})
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
