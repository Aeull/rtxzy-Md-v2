let handler = async (m, { conn, isOwner }) => {
    let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 1339889,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `
┌〔 Daftar Chat Terbanned 〕
├ Total : ${chats.length} Chat${chats ? '\n' + chats.map(([jid], i) => `
├ ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
├ ${isOwner ? '@' + jid.split`@`[0] : jid}
`.trim()).join('\n') : ''}
└────

┌〔 Daftar Pengguna Terbanned 〕
├ Total : ${users.length} Pengguna${users ? '\n' + users.map(([jid], i) => `
├ ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
├ ${isOwner ? '@' + jid.split`@`[0] : jid}
`.trim()).join('\n') : ''}
└────
`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['bannedlist']
handler.tags = ['info']
handler.command = /^listban(ned)?|ban(ned)?list|daftarban(ned)?$/i
handler.owner = false
module.exports = handler
