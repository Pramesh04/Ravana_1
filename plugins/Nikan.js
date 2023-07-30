let handler = async (m, { conn, text, command }) => {

let type = (command).toLowerCase()

switch (type) {

case 'gn':
await conn.sendMessage(m.chat, { text: `*👻හොල්මාන් එනව නිදාගන්න එපා👻*` } ,m)
break

case 'gm':
await conn.sendMessage(m.chat, { text: `*🤍ගුට්මොනින්ග් සුද්දහ්🤍*` } ,m)
break
case 'i love you':
await conn.sendMessage(m.chat, { text: `❤️` } ,m)
break
case 'pramesh': case 'ඒ': case 'e': case 'බන්': 
await conn.sendMessage(m.chat, { text: `*😂ඔබ අමතන ග්‍රාහකයා මේ මොහොතේ ප්‍රතිචාර නොදක්වයි කරුනාකර මද වෙලාවකින් අමතන්න😂*` } ,m)
break
case 'owner': case 'c': 
await conn.sendMessage(m.chat, { text: `*http://Wa.me//+94713368325?text=HI*` } ,m)
break
case 'balla': case 'ballo': case 'බල්ල':
await conn.sendMessage(m.chat, { text: `*එන්න එපා බල්ල බල්ල කියාගෙන😒*` } ,m)
break
default:
}
}



handler.help = ['gn','gm','i love you','pramesh','e','ඒ','බන්','owner','c','balla','ballo','බල්ල']
handler.tags = ['main']
handler.command = /^(gn|gm|i love you|pramesh|e|ඒ|බන්|owner|c|balla|ballo|බල්ල)$/i
handler.premium = true

export default handler