let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/nsfw/neko')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.url) throw 'Error!'
conn.sendButtonImg(m.chat, json.url, "sange kok ama kucing", "Karyl Bot", 'Next', ".nekonsfw", m)
}
handler.help = ['nekonsfw']
handler.tags = ['anime']
handler.command = /^(hentaineko|nekonsfw)$/i

handler.limit = true
handler.nsfw = true
handler.premium = true

module.exports = handler
