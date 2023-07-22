import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, text, command }) => {
const aluth = await fetch("https://darkapi--technicalhacke4.repl.co/hirunews");
const bijjo = aluth.json()

const images = `${hirunews.result.image}`
           const title = `${hirunews.result.title}`
           const date = `${hirunews.result.time}`
           const news = `${hirunews.result.desc}`
let aliveMessage = {
                image: {
                    url: ${images},
                },
                caption: `*◈━━━━━━━━━━━━━◈*   *𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*\n*◈━━━━━━━━━━━━━◈*\n\n☀𝙏𝙄𝙏𝙇𝙀☀_ *${title}*\n\n☀𝙉𝙀𝙒𝙎☀_ ${news}\n\n⌛𝙳𝙰𝚃𝙴⌛ _${date}_`,
                footer: `*𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*`,
                headerType: 4,
            };
await conn.sendMessage(m.chat, aliveMessage ,m)
}


handler.help = ['hirunews']
handler.tags = ['main']
handler.command = /^(hirunews|hn)$/i
handler.premium = true

export default handler
