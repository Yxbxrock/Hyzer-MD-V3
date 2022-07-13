let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=39f938655e624cb72a79560b', '', 'Pedo lu', m)
}
handler.help = ['lolinsfw']
handler.tags = ['anime']
handler.command = /^(lolinsfw)$/i

handler.limit = true
handler.group = false
handler.nsfw = true
handler.premium = true

module.exports = handler
