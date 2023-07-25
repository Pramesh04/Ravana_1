let handler = async (m, { conn, usedPrefix: _p, args, text, usedPrefix}) => {
	
	if (!m.quoted) throw 'Balas Chatnya !'
	if (text.length > 2) throw 'Cuma Untuk 1 Emoji!'
	if (!text) throw `📍 Contoh Penggunaan :\n${usedPrefix}react 🗿`
 await conn.sendMessage(m.chat, { react: { text: `🎶`, key: m.key }})

 }
 handler.help = ['react <emoji>']
handler.tags = ['tools']
handler.command = /^(react)$/i

export default handler
