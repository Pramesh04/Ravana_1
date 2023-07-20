let pramesh = async (m, { conn, usedPrefix, text, command }) => {
let aliveMessage = {
                image: {
                    url: "https://telegra.ph/file/d11473963441a9c19841a.jpg",
                },
                caption: `menu එක දෙනකන් හිටපන් යකෝ ඉවසලා\n\n*𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*`,
                footer: `*𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*`,
                headerType: 4,
            };
await conn.sendMessage(m.chat, aliveMessage ,m)
}
pramesh.help = "menu"
pramesh.tags = "main"
pramesh.command = "menu"
pramesh.premium = true

export default handler