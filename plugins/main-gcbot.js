let handler = async (m, { conn }) => {
conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 1339889,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `https://bit.ly/3TXiBx0`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['gcbot']
handler.tags = ['main']
handler.command = /^(gcbot)$/i

module.exports = handler
