let handler = async(m, { conn }) => {
conn.sendContact(m.chat, numberowner, nameowner, m, { contextInfo: {
externalAdReply :{
showAdAttribution: true,
}}})
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
