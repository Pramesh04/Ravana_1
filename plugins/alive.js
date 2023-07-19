let handler = async (m, { conn, usedPrefix, text, command }) => {
let aliveMessage = {
                image: {
                    url: "https://telegra.ph/file/d11473963441a9c19841a.jpg",
                },
                caption: `*◈━━━━━━━━━━━━━◈*
          *𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*
*◈━━━━━━━━━━━━━◈*

   ~▰▰▰▰▰▰▰▰▰▰▰~
▮▸*⃝𝐡𝐢_* 𝐩𝐫𝐚𝐦𝐞𝐬𝐡
▮▸𝐢 𝐚𝐦 𝐜𝐨𝐦𝐦𝐢𝐧𝐠 𝐬𝐨𝐨𝐧
▮▸𝐩𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲_𝙿𝚁𝙰𝙼𝙴𝚂𝙷 𝙻𝙸𝙾𝙽 𝙱𝙾𝚃
▮▸𝐮𝐩𝐭𝐢𝐦𝐞 0.00001

*𝘈_*_*📃𝘎𝘌𝘛 𝘔𝘌𝘕𝘜📃*_
*𝘉_*_*🛡️𝘚𝘊𝘙𝘐𝘗𝘛🛡️*_
*𝘊_*_*🙋‍♂️𝘖𝘞𝘕𝘌𝘙🙋‍♂️*_`,
                footer: `*𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*`,
                headerType: 4,
            };
await conn.sendMessage(m.chat,  {

                audio: {

                    url: `https://github.com/Pramesh04/sup_to_ravana/raw/main/alive.mp3`,

                },

                mimetype: "audio/mpeg",

                fileName: `alive.mp3`,

            }, m)
await conn.sendMessage(m.chat, aliveMessage ,m)


}


handler.help = ['alive']
handler.tags = ['main']
handler.command = ['alive']
handler.premium = true

export default handler