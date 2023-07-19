let handler = async (m, { conn, usedPrefix, text, command }) => {
m.react('🚔') 
const tech = axios.get("https://darkapi--technicalhacke4.repl.co/sinhala-technews");

reply(`${tech.data.result.decs}`)
let aliveMessage = {
                image: {
                    url: `https://github.com/Pramesh04/sup_to_ravana/blob/main/king_RAVANA_MD.jpg`,
                },
                caption: `*◈━━━━━━━━━━━━━◈*     *𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*\n*◈━━━━━━━━━━━━━◈*\n\n${tech.data.result.decs}\n\n\n🔮🚔𝙽𝙴𝚆𝚂🚔🔮`,
                footer: `*𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*`,
                headerType: 4,
            };
await conn.sendMessage(m.chat, aliveMessage ,m)
}


handler.help = ['news']
handler.tags = ['main']
handler.command = ['news']
handler.premium = true

export default handler