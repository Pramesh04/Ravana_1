import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, text, command }) => {
const aluth = await fetch("https://darkapi--technicalhacke4.repl.co/hirunews");
const bijjo = aluth.json()

   const fk = `${bijjo.result.title}`

let aliveMessage = {
                image: {
                    url: "https://i.ibb.co/CMCNByx/Picsart-22-07-03-15-45-00-698.jpg",
                },
                caption: `*◈━━━━━━━━━━━━━◈*   *𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*\n*◈━━━━━━━━━━━━━◈*\n\n${bijjo.result.title}`,
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