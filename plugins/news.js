let handler = async (m, { conn, usedPrefix, text, command }) => {
const bijjo = await fetchJson(`https://darkapi--technicalhacke4.repl.co/hirunews`);


   const fk = `*◈━━━━━━━━━━━━━◈*\n  *𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*\n              _*𝙷𝙸𝚁𝚄 𝙽𝙴𝚆𝚂*_\n*◈━━━━━━━━━━━━━◈*\n\n${bijjo.result.title}\n\n⏰𝙏𝙄𝙈𝙀⏰: _${scrape.data.result.time}_`

let aliveMessage = {
                image: {
                    url: `https://github.com/Pramesh04/sup_to_ravana/blob/main/king_RAVANA_MD.jpg`,
                },
                caption: fk,
                footer: `*𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*`,
                headerType: 4,
            };
await conn.sendMessage(m.chat, aliveMessage ,m)
}


handler.help = ['hirunews']
handler.tags = ['main']
handler.command = ['hirunews']
handler.premium = true

export default handler