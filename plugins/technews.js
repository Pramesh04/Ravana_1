import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, text, command }) => {
const tech = await fetch("https://darkapi--technicalhacke4.repl.co/sinhala-technews");

let aliveMessage = {
                image: {
                    url: "${tech.data.result.img}",
                },
                caption: `*◈━━━━━━━━━━━━━◈*     *𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*\n*◈━━━━━━━━━━━━━◈*\n\n🚔𝙏𝙄𝙏𝙇𝙀🚔_ ${tech.data.result.title}\n\n🚔𝙉𝙀𝙒𝙎🚔_ ${tech.data.result.decs}\n\n\n🔮🚔𝙽𝙴𝚆𝚂🚔🔮`,
                footer: `*𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*`,
                headerType: 4,
            };
            conn.relayMessage(m.chat, { reactionMessage: {
key: {
 id: m.quoted.id,
 remoteJid: m.chat,
 fromMe: true
},
 text: `‍🚔`}}, { messageId: m.id })
await conn.sendMessage(m.chat, aliveMessage ,m)
}


handler.help = ['news']
handler.tags = ['main']
handler.command = /^(news|pramesh)$/i
handler.premium = true

export default handler