let fetch = require('node-fetch')
let axios = require('axios')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
 // let url = `https://api.lolhuman.xyz/api/instagram?apikey=7facd6f11077ee4daecd55d5&url=${args[0]}`
    
let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
    await conn.send2ButtonVid(m.chat, `https://api.lolhuman.xyz/api/instagram?apikey=7facd6f11077ee4daecd55d5&url=${args[0]}` , txt, wm, `No Wm`, `.tiktoknowm ${args[0]}`, `Audio`, `.tiktokaudio ${args[0]}`, m)
}
handler.help = ['instagram'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig|Instagram)$/i

module.exports = handler
