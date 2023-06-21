const fs = require('fs')

global.namabot = "Tiann Dev"
global.namaowner = "Christian S."
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./lol.jpg")
global.qris = fs.readFileSync("./donasi.jpg")
global.owner = ['6281932817303']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `bayar ke tian 
`
//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

*「 BOT TIANN DEV」*

\`\`\`• !owner
• !addsewa
• !delsewa
• !ceksewa
• !listsewa
• !pay
• !setpay
• !list
• !addlist
• !updatelist
• !dellist
• !jeda
• !tambah
• !kurang
• !kali
• !bagi
• !setproses
• !changeproses
• !delsetproses
• !setdone
• !changedone
• !delsetdone
• !proses
• !done
• !welcome
• !goodbye
• !setwelcome
• !changewelcome
• !delsetwelcome
• !setleft
• !changeleft
• !delsetleft
• !antiwame
• !antiwame2
• !antilink
• !antilink2
• !open
• !close
• !hidetag
• !add
• !kick
• !stiker
• !ffid
• !mlid
\`\`\`

📝 *NOTE*: 
Fitur nya bisa dipakai dengan atau
tanpa prefix (simbol awalan). Sebagai contoh 
fitur .owner (prefix)
dan bisa juga owner (tanpa prefix)
@Christian S.
`
}