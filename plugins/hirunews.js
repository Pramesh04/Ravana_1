import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, text, command }) => {
const aluth = await fetch(`https://darkapi--technicalhacke4.repl.co/hirunews`);
const tech = aluth.json()
const img = `${tech.result.image}`
let aliveMessage = {
                image: {
                    url: img,
                },
                caption: `*◈━━━━━━━━━━━━━◈*   *𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*\n*◈━━━━━━━━━━━━━◈*\n\n☀𝙏𝙄𝙏𝙇𝙀☀_ \n*${tech.result.title}*\n\n☀𝙉𝙀𝙒𝙎☀_ \n${tech.result.decs}\n\n\n_${tech.result.time}_`,
                footer: `*𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*`,
                headerType: 4,
            };
conn.sendMessage(m.chat, aliveMessage ,m)
}


handler.help = ['hirunews','hn']
handler.tags = ['main']
handler.command = /^(hirunews|hn)$/i
handler.premium = true

export default handler