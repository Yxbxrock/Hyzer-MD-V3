let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=39f938655e624cb72a79560b', '', 'sange~an', m)
}
handler.help = ['loli18']
handler.tags = ['anime']
handler.command = /^(loli18)$/i

handler.limit = true
handler.group = false
handler.nsfw = true
handler.private = true

module.exports = handler
