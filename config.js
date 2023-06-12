/**
   * Create By Niroshan-MD.
   * Recode By Niroshan-MD
   * Contact Me on wa.me/94716682532
   * Follow https://github.com/NIROSHAN0
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['94716682532']
global.ownernomer = "94716682532"
global.premium = ['94704119750']
global.packname = 'Sticker By Niroshan-MD'
global.author = 'Niroshan-MD'
global.sessionName = 'niroshan-md'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['.']
global.sp = '...'

// Setting Mess
global.mess = {
    success: '*✅Done*',
    admin: '*use this command only Admin Group!*',
    botAdmin: '*First admin bot!*',
    premime: '*can use this command only premeum / Chat Owner*',
    owner: ' *this command only bot owner can use*',
    group: ' *Group only!*',
    private: ' *Private Chat only!*',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    error: 'Error!',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: '*Your limite of today is over.that refresh in 12 hours*',
}

// Limit
global.limitawal = {
    premium: "Infinity",
    free: 25
}

// Fake
global.thumb = fs.readFileSync('./media/image/naze.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')

// Url
global.mygit = 'https://github.com/nazedev'
global.myyt = 'https://youtube.com/c/Nazedev'
global.myytv = 'https://youtu.be/FAsL-Jy4qLc'
global.mygc = "https://chat.whatsapp.com/Cp1OJenk6Q9D9vgLjLU558"

// Engak Ngaruh, Belum Kepasang
global.botname = 'NAZE BOT'
global.akulaku = 'Bot By Niroshan-MD'
global.ytname = 'YT NAZE' //Kalo Ngk Punya Yt Ngak Usah Di Ganti


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
