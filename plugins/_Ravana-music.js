/*
            *𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*
*/
let handler = async (m, { conn, usedPrefix, text, command }) => {
let yts = require("yt-search")
let search = await yts(text)
let anulay = search.videos[0]  //King_RAVANA_MD

let songMessage = {
                image: { url: anulay.thumbnail },
                caption: `
┏━━━━━━━━━━━━━꧂
┃    *𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*┃
┃◈━━━━━━━━━━━━◈
┃  📥SONG DOWNLOADER📥
┃      ◈━━━━━━━◈
┃🎬Title : ${anulay.title}
┃⏳Duration : ${anulay.timestamp}
┃👁️‍🗨️Viewers : ${anulay.views}
┃⏰Upload At : ${anulay.ago}
┃🔮Author : ${anulay.author.name}
┃🎀Channel : ${anulay.author.url}
┃🔗Url : ${anulay.url}
┗━━━━━━━━━━━━━꧂`,
                footer: `*𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*`,
                headerType: 4,
            };
conn.sendMessage(m.chat, { react: { text: `🎶`, key: m.key }})
await conn.sendMessage(m.chat, songMessage ,m)



let { yta } = require('./lib/y2mate')

                     if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return conn.sendMessage(m.chat, { text: `*ටිකක් ඉන්න*️` } ,m)
                     
                     let quality = args[1] ? args[1] : '128kbps'
                     
                     let media = await yta(text, quality)
                     
          
                    await conn.sendMessage(m.chat, {audio:{url:media.dl_link}, mimetype:"audio/mpeg", fileName: `${media.title}.mp3`} ,m)



conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})                     
}

handler.help = ['song']
handler.tags = ['song']
handler.command = /^(song|yt)$/i
handler.premium = true

export default handler