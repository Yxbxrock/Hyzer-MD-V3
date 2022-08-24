let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/nsfw/waifu')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.url) throw 'Error!'
conn.sendButtonImg(m.chat, json.url, "sange kok ama kartun", "Xyze Bot", 'Next', ".waifunsfw", m)
}
handler.help = ['hentai']
handler.tags = ['nsfw']
handler.command = /^(hentai|waifunsfw)$/i

handler.limit = true
handler.nsfw = true
handler.private = true

module.exports = handler
