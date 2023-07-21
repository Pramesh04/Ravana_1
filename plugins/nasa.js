import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, text, command }) => {
const res = await fetch("https://darkapi--technicalhacke4.repl.co/nasanews");
let tech = await res.json()
const img = `${tech.result.image}`
const desc = `${tech.result.decs}`
let aliveMessage = {
                image: {
                    url: img,
                },
                caption: `*◈━━━━━━━━━━━━━◈*   *𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*\n*◈━━━━━━━━━━━━━◈*\n\n🛰️𝙏𝙄𝙏𝙇𝙀🛰️_ *${tech.result.title}*\n\n🛰️𝙉𝙀𝙒𝙎🛰️_`+`${desc}`+`\n\n\n${tech.result.link}\n🔮🚔*𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*🚔🔮`,
                footer: `*𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*`,
                headerType: 4,
            };
            m.reply("*🛸serching🛸*\n⬇️please wait⬇️")
await conn.sendMessage(m.chat, aliveMessage ,m)
}


handler.help = ['nasa']
handler.tags = ['main']
handler.command = /^(nasa|ns)$/i
handler.premium = true

export default handler