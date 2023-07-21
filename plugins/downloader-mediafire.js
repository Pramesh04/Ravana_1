import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
	if (!args[0]) throw '🧗‍♀කරුණාකර link එකක් ඇතුලත් කරන්න🧗‍♀' 
	if (!/https?:\/\/(www\.)?mediafire\.com/.test(args[0])) throw 'Linknya?' 
	let res = await fetch(`https://api-xcoders.site/api/download/mediafire?url=${args[0]}&apikey=${global.xcode }`)
	let data = await res.json()
let json = data.result
let hehe = `_Sedang Di Proses, Mohon Tunggu..._`
m.reply(hehe)
	conn.sendFile(m.chat, json.url, json.title, '', m, null, { mimetype: json.mime, asDocument: true })
}
handler.help = ['mediafire']
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i

handler.limit = true

export default handler
