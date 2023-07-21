import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import yts from 'yt-search'
var handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Judulnya?`
  let search = await yts(text)
  let vid = search.videos[0]
  if (!search) throw 'Tidak Ditemukan'
  let { title, thumbnail, timestamp, views, ago, url } = vid

  let captvid = `
┏━━━━━━━━━━━━━꧂
┃   *𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*┃
┃◈━━━━━━━━━━━━◈
┃  📥SONG DOWNLOADER📥
┃      ◈━━━━━━━◈
┃🎬Title : ${title}
┃⏳Duration : ${timestamp}
┃👁️‍🗨️Viewers : ${views}
┃⏰Upload At : ${ago}
┃🔗Url : ${url}
┗━━━━━━━━━━━━━꧂`,
conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid }, m)
const yt = await await youtubedlv2(url).catch(async _ => await youtubedl(url)).catch(async _ => await youtubedlv3(url))
const link = await yt.audio['128kbps'].download()
  let doc = { 
  audio: 
  { 
    url: link 
}, 
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: url,
title: title,
body: wm,
sourceUrl: url,
thumbnail: await(await conn.getFile(thumbnail)).data
      }
    }
  }

  return conn.sendMessage(m.chat, doc, { quoted: m })
}
handler.help = ['play','song']
handler.tags = ['downloader']
handler.command = /^play?$/i

handler.exp = 0
handler.limit = true
handler.register = false

export default handler
