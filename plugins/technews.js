import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, text, command }) => {
const res = await fetch("https://darkapi--technicalhacke4.repl.co/sinhala-technews");
let tech = await res.json()

const img = "${tech.result.img}"

let aliveMessage = {
                image: {
                    url: `${img}`,
                },
                caption: `*◈━━━━━━━━━━━━━◈*   *𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*\n*◈━━━━━━━━━━━━━◈*\n\n🚔𝙏𝙄𝙏𝙇𝙀🚔_ \n*${tech.result.title}*\n\n🚔𝙉𝙀𝙒𝙎🚔_ \n${tech.result.decs}\n\n\n🔮🚔*𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*🚔🔮`,
                footer: `*𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*`,
                headerType: 4,
            };
await conn.sendMessage(m.chat, aliveMessage ,m)
}


handler.help = ['news']
handler.tags = ['main']
handler.command = /^(news|pramesh)$/i
handler.premium = true

export default handler