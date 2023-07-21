import fetch from 'node-fetch'
let pramesh = async (m, { conn, usedPrefix, text, command }) => {
let aliveMessage = {
                image: {
                    url: "https://telegra.ph/file/d11473963441a9c19841a.jpg",
                },
                caption: `menu එක දෙනකන් හිටපන් යකෝ ඉවසලා\n\n*𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*`,
                footer: `*𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*`,
                headerType: 4,
            };
            conn.relayMessage(m.chat, { reactionMessage: {
key: {
 id: m.quoted.id,
 remoteJid: m.chat,
 fromMe: true
},
 text: `‍📃`}}, { messageId: m.id })
await conn.sendMessage(m.chat, aliveMessage ,m)
}
pramesh.help = "menu","a"
pramesh.tags = "main","a"
handler.command = /^(menu|a)$/i
pramesh.premium = true

export default handler