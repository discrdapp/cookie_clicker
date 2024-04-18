let ciasteczka = 0
let ciasteczkaRazem = 0
let budynkowRazem = 0
let mnoznik = 1
let cpsDoMyszki = 0
let nasekunde = 0
let dodacCiastka = (1 + (nasekunde > 0 ? nasekunde : 1) * cpsDoMyszki) * mnoznik
let tryb = '1'

const cookie = document.getElementById('cookie')
const liczba = document.getElementById('liczba')
const cookieimg = document.getElementById('cookieimg')
const liczbaNaSekunde = document.getElementById('liczbaNaSekunde')
const tooltip = document.getElementById('tooltip')

let buildings = [
	{
		id: 0,
		nazwa: 'kursor',
		opis: `Klika raz na sekundę`,
		cena: 10,
		domyslnaCena: 10,
		persecond: 1,
		ilosc: 0,
		mnoznik: 0,
		imgSrc: 'assets/kursor.png',
		backgroundImgSrc: '',
	},
	{
		id: 1,
		nazwa: 'lisek',
		opis: 'Przynosi ciasteczka swojemu przyjacielowi',
		cena: 100,
		domyslnaCena: 100,
		persecond: 5,
		ilosc: 0,
		mnoznik: 0,
		imgSrc: 'assets/lisek.png',
		backgroundImgSrc: 'assets/foxPixel.png',
	},
	{
		id: 2,
		nazwa: 'farma',
		opis: 'Na bawełnie rosną ciastka',
		cena: 1000,
		domyslnaCena: 1000,
		persecond: 25,
		ilosc: 0,
		mnoznik: 0,
		imgSrc: 'assets/cotton.png',
		backgroundImgSrc: 'assets/cotton.png',
	},
	{
		id: 3,
		nazwa: 'Tidal Wave',
		cena: 1000000,
		opis: `
		<div class="container tidalwavediv">
			<div class="tidal">«««Tidal«««««</div>
			<div class="wave">»»»»»Wave»»»</div>
		</div>`,
		domyslnaCena: 1000000,
		persecond: 5000,
		ilosc: 0,
		mnoznik: 0,
		imgSrc: 'assets/tidalwave.png',
		backgroundImgSrc: 'assets/tidalwave.png',
	},
]

let upgrades = [
	{
		id: 0,
		nazwa: 'Lepszy Palec',
		opis: 'Myszka oraz kursory są dwa razy wydajniejsze.',
		posiadany: false,
		koszt: 1000,
		mnoznik: 2,
		coulepszyc: 0,
		x: 0,
		y: 0,
	},
	{
		id: 1,
		nazwa: 'Lepsiejszy Palec',
		opis: 'Myszka oraz kursory są dwa razy wydajniejsze.',
		posiadany: false,
		koszt: 10000,
		mnoznik: 2,
		coulepszyc: 0,
		x: 0,
		y: 1,
	},
	{
		id: 2,
		nazwa: 'O wiele lepszy Palec',
		opis: 'Myszka oraz kursory są dwa razy wydajniejsze.',
		posiadany: false,
		koszt: 100000,
		mnoznik: 2,
		coulepszyc: 0,
		x: 0,
		y: 2,
	},
	{
		id: 3,
		nazwa: 'Boski Palec',
		opis: 'Myszka oraz kursory są cztery razy wydajniejsze.',
		posiadany: false,
		koszt: 1000000,
		mnoznik: 4,
		coulepszyc: 0,
		x: 0,
		y: 13,
	},
	{
		id: 4,
		nazwa: 'Plastikowa Myszka',
		opis: 'Myszka dostaje 1% twoich kliknięć na sekunde',
		posiadany: false,
		koszt: 50000,
		mnoznik: 0.01,
		coulepszyc: 100,
		x: 11,
		y: 0,
	},
	{
		id: 5,
		nazwa: 'Żelazna Myszka',
		opis: 'Myszka dostaje 1% twoich kliknięć na sekunde',
		posiadany: false,
		koszt: 5000000,
		mnoznik: 0.01,
		coulepszyc: 100,
		x: 11,
		y: 1,
	},
	{
		id: 6,
		nazwa: 'Tytanowa Myszka',
		opis: 'Myszka dostaje 1% twoich kliknięć na sekunde',
		posiadany: false,
		koszt: 500000000,
		mnoznik: 0.01,
		coulepszyc: 100,
		x: 11,
		y: 2,
	},
	{
		id: 7,
		nazwa: 'Adamantowa Myszka',
		opis: 'Myszka dostaje 1% twoich kliknięć na sekunde',
		posiadany: false,
		koszt: 50000000000,
		mnoznik: 0.01,
		coulepszyc: 100,
		x: 11,
		y: 13,
	},
	{
		id: 8,
		nazwa: 'Złota Myszka',
		opis: 'Myszka dostaje 1% twoich kliknięć na sekunde',
		posiadany: false,
		koszt: 5000000000000,
		mnoznik: 0.01,
		coulepszyc: 100,
		x: 11,
		y: 14,
	},
	{
		id: 9,
		nazwa: 'Lisek Przyjaciel',
		opis: 'Liski są dwa razy wydajniejsze',
		posiadany: false,
		koszt: 1000,
		mnoznik: 2,
		coulepszyc: 1,
		x: 18,
		y: 0,
	},
	{
		id: 10,
		nazwa: 'Lisek Pomocnik',
		opis: 'Liski są dwa razy wydajniejsze',
		posiadany: false,
		koszt: 5000,
		mnoznik: 2,
		coulepszyc: 1,
		x: 18,
		y: 1,
	},
	{
		id: 11,
		nazwa: 'Lisek Przyjaciel',
		opis: 'Liski są dwa razy wydajniejsze',
		posiadany: false,
		koszt: 50000,
		mnoznik: 2,
		coulepszyc: 1,
		x: 18,
		y: 2,
	},
	{
		id: 12,
		nazwa: 'Lisek Pomagier',
		opis: 'Liski są dwa razy wydajniejsze',
		posiadany: false,
		koszt: 5000000,
		mnoznik: 2,
		coulepszyc: 1,
		x: 18,
		y: 13,
	},
	{
		id: 13,
		nazwa: 'Czarnuchy',
		opis: 'Farmy są dwa razy wydajniejsze',
		posiadany: false,
		koszt: 12000,
		mnoznik: 2,
		coulepszyc: 2,
		x: 2,
		y: 0,
	},
	{
		id: 14,
		nazwa: 'Nawóz',
		opis: 'Farmy są dwa razy wydajniejsze',
		posiadany: false,
		koszt: 55000,
		mnoznik: 2,
		coulepszyc: 2,
		x: 2,
		y: 1,
	},
	{
		id: 15,
		nazwa: 'Bawełniane Ciastka',
		opis: 'Farmy są dwa razy wydajniejsze',
		posiadany: false,
		koszt: 555555,
		mnoznik: 2,
		coulepszyc: 2,
		x: 2,
		y: 2,
	},
	{
		id: 16,
		nazwa: 'Genetycznie-Zmodyfikowane Ciastka',
		opis: 'Farmy są dwa razy wydajniejsze',
		posiadany: false,
		koszt: 55555555,
		mnoznik: 2,
		coulepszyc: 2,
		x: 2,
		y: 13,
	},
]

let newsy1 = [
	'Zaczynasz swoją przygodę z ciasteczkami.',
	'Ciasteczko tu, ciasteczko tam... powoli budujesz swoje kruche królestwo.',
	'Babcia zawsze mówiła, że dzielenie się ciasteczkami to klucz do szczęścia.',
	`„Mleko to idealny dodatek do ciasteczek.” - mówiła babcia z pod ${Math.round(Math.random() + 9) + 1}`,
	'Czas na nowe wyzwania! Spróbuj upiec ciasteczka z różnymi dodatkami.',
	'Dzień bez ciasteczka to dzień stracony! Upiecz pyszne ciastka i popraw sobie humor.',
	'Ktoś powiedział ciasteczka? Bo ja słyszę tylko klik, klik, klik!',
	'Ciasteczka to nowa waluta – klikaj mądrze!',
	'Kliknij szybciej, ciasteczka nie będą czekać wiecznie!',
	'Ciasteczka mogą być małe, ale ich smak jest wielki!',
	'Kliknij, kliknij, kliknij! Każde ciasteczko to krok do sławy!',
	'Ciasteczka tak dobre, że czas się zatrzymuje, aby ich spróbować!',
]
let newsy2 = [
	'Twoje ciasteczka zyskują popularność.',
	'Ciasteczka tak dobre, że aż trudno w to uwierzyć!',
	'Ciasteczka? W tej gospodarce? Absolutny hit!',
	'Ciasteczka podbijają lokalne bazary. Czas na ekspansję!',
	'Ciasteczka wywołują międzynarodową sensację smaku!',
	'Ciasteczka tak popularne, że pies sąsiada zaczął jeść tylko te!',
	'Ciasteczka tak dobre, że nawet statuy zaczynają do nich machać!',
	'Czas na ulepszenia! Kupuj nowe piekarnie i maszyny, aby produkować ciasteczka jeszcze szybciej.',
	'Wkrocz do świata reklamy! Pokaż wszystkim, jak pyszne są twoje ciasteczka.',
]
let newsy3 = [
	'Twoje ciasteczka są giga popularne.',
	'Ciasteczka przejmują kontrolę nad światem mediów!',
	'Ciasteczka tak popularne, że gwiazdy chcą ich autografy!',
	'Ciasteczka na okładkach wszystkich gazet!',
	'Fortnite mniej popularny od ciasteczek?!',
	'Zaczęto próby duplikowania ciasteczek!',
	'Niech ciasteczka kojarzą się z sukcesem i energią!',
	'Zorganizowano festiwal ciasteczek! Niech cały świat świętuje słodką radość.',
	'Zaczęto budować statuy ciastek! Aby każdy mógł je podziwiać.',
]
let newsy4 = [
	'Twoje ciasteczka zna cały świat! Jesteś królem, a może nawet cesarzem słodkości!',
	'Globalna ekspansja smaku!',
	'Twój smak jest teraz wszechobecny!',
	'Stajesz się ikoną smaku!',
	'Każdy chce kawałek Twojego ciastka!',
	'Twój smak jest teraz globalnym fenomenem!',
	'Odkrywasz nowe krainy smaku!',
	'Jesteś mistrzem wypieków!',
	'Twoje ciastka to kultura!',
	'Stajesz się legendą w świecie smaku!',
	'Twoje ciastka to międzynarodowy hit!',
	'Twój smak to potęga!',
	'Odkryj nowe smakowe granice!',
]
let newsyNaKazdymPoziomie = [
	'Twoje ciasteczka smakują lepiej niż jeżyki!',
	'Dzień dobry, przepraszam za spóźnienie. Wójcik Jakub.',
	'Odkryj świat ciasteczek – każde z nich to małe dzieło sztuki!',
	'Ciasteczka: Twoja słodka ucieczka od codzienności.',
	'Kiedy życie daje Ci mąkę, piecz ciasteczka!',
	'Czy wiesz, że ciasteczka mogą poprawić nastrój? Sprawdź to!',
	'Ciasteczka: bo czasami najlepsze rzeczy są najprostsze.',
	'Zanurz się w słodkości – ciasteczka czekają!',
	'Ciasteczka - Twoje bilety do krainy słodyczy.',
	'Niech każde ciasteczko będzie podróżą do świata fantazji.',
	'Nie jesteś sobą kiedy jesteś głodny - Ciasteczka',
]

liczba.innerHTML = ciasteczka + ' ciasteczek'

cookie.addEventListener('click', function dodawanieCiasteczek(e) {
	dodacCiastka = (1 + (nasekunde > 0 ? nasekunde : 1) * cpsDoMyszki) * mnoznik
	ciasteczka += dodacCiastka
	ciasteczkaRazem += dodacCiastka
	liczba.innerHTML = nFormatter(ciasteczka, 1) + ' ciasteczek'
	if (!cookieimg.classList.contains('moving')) {
		cookieimg.classList.add('moving')
		setTimeout(() => {
			cookieimg.classList.remove('moving')
		}, 200)
	}
	zagrajDzwiek(0.2)
	const napis = document.createElement('div')

	let Height = e.clientY - 20
	let losowaSzerokosc = Math.round(Math.random() * 5) - 15
	let Width = e.clientX + losowaSzerokosc

	napis.style.position = 'absolute'
	napis.style.left = Width + 'px'
	napis.style.top = Height + 'px'
	napis.textContent = '+' + nFormatter(dodacCiastka, 1)
	napis.classList.add('znikanie')

	cookie.appendChild(napis)
	setTimeout(() => {
		napis.remove()
	}, 4000)
})

function zagrajDzwiek(vol) {
	let losowydzwiek = Math.ceil(Math.random() * 7)

	switch (losowydzwiek) {
		case 1:
			var audio = new Audio('assets/click1.mp3')
			break
		case 2:
			var audio = new Audio('assets/click2.mp3')
			break
		case 3:
			var audio = new Audio('assets/click3.mp3')
			break
		case 4:
			var audio = new Audio('assets/click4.mp3')
			break
		case 5:
			var audio = new Audio('assets/click5.mp3')
			audio.volume = vol
			audio.play()
			break
		case 6:
			var audio = new Audio('assets/click6.mp3')
			break
		case 7:
			var audio = new Audio('assets/click7.mp3')
			break
	}
	audio.volume = glosnoscDzwieku * vol
	audio.play()
}

function nFormatter(num, digits) {
	const lookup = [
		{ value: 1, symbol: '' },
		{ value: 1e3, symbol: 'k' },
		{ value: 1e6, symbol: 'M' },
		{ value: 1e9, symbol: 'B' },
		{ value: 1e12, symbol: 'T' },
		{ value: 1e15, symbol: 'P' },
		{ value: 1e18, symbol: 'E' },
	]
	const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/
	const item = lookup.findLast(item => num >= item.value)
	return item ? (num / item.value).toFixed(digits).replace(regexp, '').concat(item.symbol) : '0'
}

function pokazCiastka(koszt) {
	ciasteczka = ciasteczka - koszt
	ciasteczkaNaprawione = ciasteczka.toFixed(1)
	liczba.innerHTML = nFormatter(ciasteczkaNaprawione, 1) + ' ciasteczek'
}

function pokazIleNaSekunde() {
	liczbaNaSekunde.innerHTML = 'na sekunde: ' + nFormatter(nasekunde, 1)
}

pokazIleNaSekunde()

setInterval(() => {
	ciasteczka += nasekunde / 200
	ciasteczkaRazem += nasekunde / 200
	liczba.innerHTML = nFormatter(ciasteczka, 1) + ' ciasteczek'
	sprawdzPieniadze()
	pokazWszystkichCene()
}, 5)

function grajDzwiekPrzezTyleIleJestKursorow() {
	let dzielenie = 1
	if (buildings[0].ilosc < 0) {
		dzielenie = 1
	} else if (buildings[0].ilosc > 0) {
		dzielenie = buildings[0].ilosc
	} else if (buildings[0].ilosc > 10) {
		dzielenie = 10
	}
	if (buildings[0].ilosc > 0) {
		zagrajDzwiek(0.02)
	}
	setTimeout(() => {
		grajDzwiekPrzezTyleIleJestKursorow()
	}, 1000 / dzielenie + Math.round(Math.random() * 150) + 10)
}

grajDzwiekPrzezTyleIleJestKursorow()

const cursorsContainer = document.getElementById('cursors-container')

let angle = 0
function animate() {
	let cursors = document.querySelectorAll('.cursor')
	angle += 0.01
	for (let i = 0; i < cursors.length; i++) {
		let radius = 150
		let x = radius * Math.cos(angle + (i * (Math.PI * 2)) / cursors.length)
		let y = radius * Math.sin(angle + (i * (Math.PI * 2)) / cursors.length)
		cursors[i].style.left = 50 + x + 'px'
		cursors[i].style.top = 50 + y + 'px'
		cursors[i].style.transform = 'rotate(' + (angle + (i * (Math.PI * 2)) / cursors.length) + 'rad)'
	}
	requestAnimationFrame(animate)
}

animate()

function stworzUpgrade(budynek) {
	if (budynek.nazwa == 'kursor') {
		if (budynek.ilosc <= 20) {
			let kursorek = document.createElement('div')
			kursorek.classList.add('cursor')
			cursorsContainer.appendChild(kursorek)
			let img = document.createElement('img')
			img.src = 'assets/kursor.png'
			kursorek.appendChild(img)
		}
	} else {
		let wrapper = document.getElementById('buildingBackgroundWrapper' + budynek.id)
		if (wrapper.classList.contains('d-none')) {
			wrapper.classList.remove('d-none')
		}
		let buildingBackground = document.getElementById('buildingBackground' + budynek.id)
		if (budynek.ilosc <= 100) {
			let image = document.createElement('img')
			image.src = budynek.backgroundImgSrc
			image.classList.add('buildingBackgroundSmallImg')
			let offsetTopPercent = (50 / buildingBackground.offsetHeight) * 100
			let offsetBottomPercent = (54 / buildingBackground.offsetHeight) * 100
			image.onload = function () {
				let imageWidthPercent = (image.offsetWidth / buildingBackground.offsetWidth) * 100
				let imageHeightPercent = (image.offsetHeight / buildingBackground.offsetHeight) * 100
				image.style.top =
					Math.round(Math.random() * (100 - offsetTopPercent - offsetBottomPercent - imageHeightPercent)) +
					offsetTopPercent +
					1 +
					'%'
				image.style.left = Math.round(Math.random() * (100 - imageWidthPercent - 1)) + '%'
			}
			buildingBackground.appendChild(image)
		}
	}
}

function pokazCeneIlosc(id, ilosc, cena) {
	let a = ileCiasteczekZTrybem(ilosc, cena)
	let ile = tryb == 'max' ? ' (' + (a[1] - ilosc) + ')' : ''
	document.getElementById('building' + id + 'Koszt').innerHTML = nFormatter(a[0], 1) + ile
	document.getElementById('building' + id + 'Ilosc').innerHTML = ilosc
}

let ilewyswietlono = 0
let ileWyswietlicNaPoczatku = 2
buildings.forEach(building => {
	const buildingWrapper = document.getElementById('buildingWrapper')
	let buildingDiv = document.createElement('div')
	buildingDiv.id = 'building' + building.id
	if (ilewyswietlono < ileWyswietlicNaPoczatku) {
		buildingDiv.classList.add('d-block')
		ilewyswietlono++
	} else {
		buildingDiv.classList.add('d-none')
	}
	buildingDiv.classList.add('building')
	buildingWrapper.appendChild(buildingDiv)
	let row = document.createElement('div')
	row.classList.add('row')
	buildingDiv.appendChild(row)
	let col1 = document.createElement('div')
	col1.classList.add('col-2')
	row.appendChild(col1)
	let buildingImg = document.createElement('img')
	buildingImg.src = building.imgSrc
	buildingImg.classList.add('buildingImg')
	col1.appendChild(buildingImg)
	let col2 = document.createElement('div')
	col2.classList.add('col-7', 'd-flex', 'flex-column', 'align-items-start')
	row.appendChild(col2)
	let buildingNazwa = document.createElement('div')
	buildingNazwa.classList.add('buildingName')
	col2.appendChild(buildingNazwa)
	buildingNazwa.innerHTML = building.nazwa
	let buildingCena = document.createElement('div')
	buildingCena.classList.add('buildingKoszt')
	col2.appendChild(buildingCena)
	let smallImgCookie = document.createElement('img')
	smallImgCookie.classList.add('smallCookie')
	smallImgCookie.src = 'assets/cookie.png'
	buildingCena.appendChild(smallImgCookie)
	let buildingLiczbaKosztu = document.createElement('div')
	buildingLiczbaKosztu.id = 'building' + building.id + 'Koszt'
	buildingLiczbaKosztu.classList.add('buildingNapisKoszt')
	buildingCena.appendChild(buildingLiczbaKosztu)
	buildingLiczbaKosztu.innerHTML = nFormatter(building.cena, 1)
	let col3 = document.createElement('div')
	col3.classList.add('col-3', 'd-flex', 'justify-content-end')
	row.appendChild(col3)
	let buildingIle = document.createElement('div')
	buildingIle.id = 'building' + building.id + 'Ilosc'
	buildingIle.classList.add('buildingIlosc', 'me-2')
	col3.appendChild(buildingIle)
	buildingIle.innerHTML = building.ilosc
})
let tidalwaveDzwiek = new Audio('assets/tidal-wave.mp3')
let czyGra = false

for (let i = 0; i < buildings.length; i++) {
	let budynek = buildings[i]

	document.getElementById('building' + budynek.id).addEventListener('click', () => {
		let a = ileCiasteczekZTrybem(budynek.ilosc, budynek.domyslnaCena)
		if (a[0] <= ciasteczka) {
			ciasteczka -= a[0]
			nasekunde += budynek.persecond * (a[1] - budynek.ilosc)
			budynek.cena = ileCiasteczekZTrybem(budynek.ilosc, budynek.domyslnaCena)[0]
			for (let j = 0; j < a[1] - budynek.ilosc; j++) {
				stworzUpgrade(budynek)
			}
			budynkowRazem += a[1] - budynek.ilosc
			budynek.ilosc = a[1]
			updateNaSekunde()
			pokazCeneIlosc(budynek.id, budynek.ilosc, budynek.cena)
		} else {
			console.log('nie wystarczajaca ilosc ciasteczek')
		}
	})
	if (i > 0) {
		let buildingBackgroundWrapper = document.createElement('div')
		buildingBackgroundWrapper.id = 'buildingBackgroundWrapper' + i
		buildingBackgroundWrapper.classList.add('d-none')
		document.getElementById('buildings').appendChild(buildingBackgroundWrapper)
		let buildingBackground = document.createElement('div')
		buildingBackground.id = 'buildingBackground' + i
		buildingBackground.style.background = `url('backgrounds/background${i}.png')`
		buildingBackground.classList.add('buildingBackground')
		buildingBackgroundWrapper.appendChild(buildingBackground)
		let divider = document.createElement('div')
		divider.classList.add('horizontalDivider')
		buildingBackgroundWrapper.appendChild(divider)
	}
	let czyUpdatetowacTooltip = false
	document.getElementById('building' + budynek.id).addEventListener('mouseenter', () => {
		czyUpdatetowacTooltip = true
		doTooltipa(buildings, i)
		function update() {
			setTimeout(() => {
				updateNumbers(buildings, i)
				if (czyUpdatetowacTooltip) {
					update()
				}
			}, 10)
		}
		update()
		if (budynek.nazwa == 'Tidal Wave') {
			if (!czyGra) {
				czyGra = true
				tidalwaveDzwiek.volume = glosnoscDzwieku
				tidalwaveDzwiek.play()
				setTimeout(() => {
					czyGra = false
				}, 18700)
			}
		}
	})
	document.getElementById('building' + budynek.id).addEventListener('mouseleave', () => {
		tooltip.classList.remove('d-block')
		tooltip.classList.add('d-none')
		czyUpdatetowacTooltip = false
		tidalwaveDzwiek.pause()
		tidalwaveDzwiek.currentTime = 0
		czyGra = false
	})
}

function doTooltipa(arr, i) {
	if (arr == buildings) {
		let budynek = buildings[i]
		let czyWystarczajacoPieniedzy =
			ileCiasteczekZTrybem(budynek.ilosc, budynek.domyslnaCena)[0] > ciasteczka ? ' cantAfford' : ''
		tooltip.classList.remove('d-none')
		tooltip.classList.add('d-block')
		tooltip.innerHTML = `<div class="buildingInfo d-flex">
            <div class="container">
                <div class="row">
                    <div class="col-2">
                        <div class="tooltipImgDiv"><img src="${budynek.imgSrc}" class="tooltipImg"></div>
                    </div>
                    <div class="col-8">
                        <div class="tooltipNazwa">${budynek.nazwa}</div>
                        <div class="tooltipIlosc" id="tooltipIlosc">${budynek.ilosc}</div>
                    </div>
                    <div class="col-2">
                        <div class="d-flex align-items-center">
                            <img class="smallCookie" src="assets/cookie.png">
                            <div class="tooltipCena${czyWystarczajacoPieniedzy}" id="tooltipCena">${nFormatter(
			ileCiasteczekZTrybem(budynek.ilosc, budynek.domyslnaCena)[0],
			1
		)}</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="tooltipLine"></div>
                    <div class="tooltipDescription">„${budynek.opis}”</div>
                    <div class="tooltipLine"></div>
                </div>
                <div class="row">
                    <div class="tooltipGenerating" id="tooltipNaSekunde"><b>1</b> zarabia <b>${
											budynek.persecond * (budynek.mnoznik > 0 ? budynek.mnoznik : 1)
										} na sekunde.</b></div>
                    <div class="tooltipGenerating" id="tooltipRazem">Razem zarabiają: <b>${
											budynek.persecond * budynek.ilosc * (budynek.mnoznik > 0 ? budynek.mnoznik : 1)
										} na sekunde.</b></div>
                </div>
            </div>
        </div>`
	} else {
		let czyWystarczajacoPieniedzy = upgrades[i].koszt > ciasteczka ? ' cantAfford' : ''
		tooltip.classList.remove('d-none')
		tooltip.classList.add('d-block')
		tooltip.innerHTML = `<div class="buildingInfo d-flex">
            <div class="container">
                <div class="row">
                    <div class="col-2">
						<div class="upgradeImg" style="background-position:${upgrades[i].x * -48}px ${upgrades[i].y * -48}px "></div>
                    </div>
                    <div class="col-8">
                        <div class="tooltipNazwa">${upgrades[i].nazwa}</div>
                    </div>
                    <div class="col-2">
                        <div class="d-flex">
                            <img class="smallCookie" src="assets/cookie.png">
                            <div class="tooltipCena${czyWystarczajacoPieniedzy}">${nFormatter(
			upgrades[i].koszt,
			1
		)}</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="tooltipLine"></div>
                    <div class="tooltipDescription">„${upgrades[i].opis}”</div>
                    <div class="tooltipLine"></div>
                </div>
                <div class="row">
                    <div class="tooltipBuyMe">Kliknij aby zakupić</div>
                </div>
            </div>
        </div>`
	}
}

function updateNumbers(arr, i) {
	if (arr == buildings) {
		let a = ileCiasteczekZTrybem(buildings[i].ilosc, buildings[i].domyslnaCena)
		document.getElementById('tooltipIlosc').innerHTML = buildings[i].ilosc
		document.getElementById('tooltipCena').innerHTML = nFormatter(a[0], 1)
		if (a[0] > ciasteczka) {
			document.getElementById('tooltipCena').classList.add('cantAfford')
		} else {
			document.getElementById('tooltipCena').classList.remove('cantAfford')
		}
		document.getElementById('tooltipNaSekunde').innerHTML =
			'<b>1</b> zarabia <b>' +
			buildings[i].persecond * (buildings[i].mnoznik > 0 ? buildings[i].mnoznik : 1) +
			' na sekunde.</b>'
		document.getElementById('tooltipRazem').innerHTML =
			'Razem zarabiają: <b>' +
			buildings[i].persecond * buildings[i].ilosc * (buildings[i].mnoznik > 0 ? buildings[i].mnoznik : 1) +
			' na sekunde.</b>'
	}
}

document.addEventListener('mousemove', e => {
	let tooltipHeight = 128
	let offsetY = 25
	let y = e.clientY - offsetY

	if (y + tooltipHeight > window.innerHeight) {
		y = window.innerHeight - tooltipHeight
	}

	tooltip.style.top = y + 'px'
})

for (let i = 0; i < upgrades.length; i++) {
	let ulepszenie = upgrades[i]
	const upgradeWrapper = document.getElementById('upgradeWrapper')

	let upgradeDiv = document.createElement('div')
	upgradeDiv.id = 'upgrade' + ulepszenie.id
	upgradeDiv.classList.add('upgrade')

	let upgradeImgDiv = document.createElement('div')
	upgradeImgDiv.classList.add('upgradeImg')
	upgradeImgDiv.style.backgroundPosition = `${upgrades[i].x * -48}px ${upgrades[i].y * -48}px`

	upgradeDiv.appendChild(upgradeImgDiv)

	upgradeDiv.addEventListener('mouseenter', () => {
		doTooltipa(upgrades, i)
	})
	upgradeDiv.addEventListener('mouseleave', () => {
		tooltip.classList.remove('d-block')
		tooltip.classList.add('d-none')
	})

	upgradeDiv.addEventListener('click', () => {
		kupUpgrade(upgrades[i].id)
	})

	upgradeWrapper.appendChild(upgradeDiv)
}

function sprawdzPieniadze() {
	document.querySelectorAll('.building').forEach((element, index) => {
		if (ileCiasteczekZTrybem(buildings[index].ilosc, buildings[index].domyslnaCena)[0] > ciasteczka) {
			if (!element.classList.contains('notEnoughCookies')) {
				element.classList.toggle('notEnoughCookies')
				element.querySelector('.buildingNapisKoszt').classList.toggle('cantAfford')
			}
		} else {
			if (element.classList.contains('notEnoughCookies')) {
				element.classList.toggle('notEnoughCookies')
				element.querySelector('.buildingNapisKoszt').classList.toggle('cantAfford')
			}
		}
	})
	document.querySelectorAll('.upgrade').forEach((element, index) => {
		if (upgrades[index].koszt > ciasteczka) {
			if (!element.classList.contains('notEnoughCookies')) {
				element.classList.toggle('notEnoughCookies')
			}
		} else {
			if (element.classList.contains('notEnoughCookies')) {
				element.classList.toggle('notEnoughCookies')
			}
		}
	})
	document.querySelectorAll('.soundTrackKoszt').forEach((element, index) => {
		index++
		let tenSoundTrack = document.getElementById('soundTrack' + index)
		if (!tenSoundTrack.classList.contains('Posiadane')) {
			if (element.dataset.koszt > ciasteczka) {
				if (!tenSoundTrack.classList.contains('notEnoughCookies')) {
					element.classList.toggle('cantAfford')
					document.getElementById('soundTrack' + index).classList.toggle('notEnoughCookies')
				}
			} else {
				if (tenSoundTrack.classList.contains('notEnoughCookies')) {
					element.classList.toggle('cantAfford')
					document.getElementById('soundTrack' + index).classList.toggle('notEnoughCookies')
				}
			}
		}
	})
}

function ileCiasteczekZTrybem(ilosc, cena) {
	let a = 0
	let b = ilosc
	switch (tryb) {
		case 'max':
			{
				a = Math.round(cena * Math.pow(1.15, b), 1)
				b++
				while (ciasteczka >= a + Math.round(cena * Math.pow(1.15, b), 1)) {
					a += Math.round(cena * Math.pow(1.15, b), 1)
					b++
				}
			}
			break
		case '1':
			{
				a = Math.round(cena * Math.pow(1.15, ilosc), 1)
				b++
			}
			break
		case '10':
			{
				for (let i = 0; i < 10; i++) {
					b++
					a += Math.round(cena * Math.pow(1.15, b), 1)
				}
			}
			break
		case '100':
			{
				for (let i = 0; i < 100; i++) {
					b++
					a += Math.round(cena * Math.pow(1.15, b), 1)
				}
			}
			break
	}
	return [a, b]
}
document.querySelectorAll('.tryb').forEach(element => {
	element.addEventListener('click', () => {
		document.querySelectorAll('.tryb').forEach(elem => {
			if (elem.classList.contains('pressed')) {
				elem.classList.remove('pressed')
			}
		})
		element.classList.add('pressed')
		tryb = element.dataset.tryb
		pokazWszystkichCene()
	})
})

function pokazWszystkichCene() {
	buildings.forEach((elem, index) => {
		pokazCeneIlosc(buildings[index].id, buildings[index].ilosc, buildings[index].domyslnaCena)
	})
}

setInterval(() => {
	sprawdzCzyWystarczajacoPieniedzy()
}, 20)

function sprawdzCzyWystarczajacoPieniedzy() {
	buildings.forEach((elem, index) => {
		let a = document.getElementById('building' + elem.id)
		if (elem.cena * 0.2 <= ciasteczka && a.classList.contains('d-none')) {
			a.classList.remove('d-none')
			a.classList.add('d-block')
		}
	})

	upgrades.forEach((elem, index) => {
		let a = document.getElementById('upgrade' + index)
		if (elem.koszt <= ciasteczka && !a.classList.contains('d-none')) {
			a.classList.remove('d-none')
			a.classList.add('d-flex')
		}
	})
}

function kupUpgrade(i) {
	if (ciasteczka >= upgrades[i].koszt && !upgrades[i].posiadany) {
		ciasteczka -= upgrades[i].koszt
		upgrades[i].posiadany = true
		document.getElementById('upgrade' + upgrades[i].id).classList.add('d-none')
		if (upgrades[i].coulepszyc < 100) {
			if (buildings[upgrades[i].coulepszyc].mnoznik <= 0) {
				buildings[upgrades[i].coulepszyc].mnoznik = upgrades[i].mnoznik
			} else {
				buildings[upgrades[i].coulepszyc].mnoznik *= upgrades[i].mnoznik
			}
		}
		if (upgrades[i].coulepszyc == 0) {
			mnoznik *= upgrades[i].mnoznik
			dodacCiastka = (1 + (nasekunde > 0 ? nasekunde : 1) * cpsDoMyszki) * mnoznik
		} else if (upgrades[i].coulepszyc == 100) {
			cpsDoMyszki += upgrades[i].mnoznik
			dodacCiastka = (1 + (nasekunde > 0 ? nasekunde : 1) * cpsDoMyszki) * mnoznik
		}
		updateNaSekunde()
	}
}

function updateNaSekunde() {
	nasekunde = 0
	for (let i = 0; i < buildings.length; i++) {
		nasekunde += buildings[i].persecond * buildings[i].ilosc * (buildings[i].mnoznik > 0 ? buildings[i].mnoznik : 1)
	}
	pokazIleNaSekunde()
}

setInterval(() => {
	pokazNews()
}, 15000)

function pokazNews() {
	const newsDiv = document.getElementById('news')
	if (Math.round(Math.random()) + 1 == 1) {
		switch (true) {
			case ciasteczka >= 10000000000:
				{
					newsDiv.innerHTML = newsy4[Math.floor(Math.random() * newsy4.length)]
				}
				break
			case ciasteczka >= 100000000:
				{
					newsDiv.innerHTML = newsy3[Math.floor(Math.random() * newsy3.length)]
				}
				break
			case ciasteczka >= 1000000:
				{
					newsDiv.innerHTML = newsy2[Math.floor(Math.random() * newsy2.length)]
				}
				break
			case ciasteczka < 1000:
				{
					newsDiv.innerHTML = newsy1[Math.floor(Math.random() * newsy1.length)]
				}
				break
		}
	} else {
		newsDiv.innerHTML = newsyNaKazdymPoziomie[Math.floor(Math.random() * newsyNaKazdymPoziomie.length)]
	}
}

pokazNews()

const muzykaIkona = document.getElementById('muzykaIcon')
const muzykaSlider = document.getElementById('muzykaSlider')
let glosnoscMuzyki = 0.2
let glosnoscMuzykiZapamietana = 0.2

muzykaIkona.addEventListener('click', () => {
	if (muzykaIkona.classList.contains('Normal')) {
		muzykaIkona.classList.remove('Normal')
		muzykaIkona.classList.add('Muted')
		glosnoscMuzyki = 0
	} else {
		muzykaIkona.classList.remove('Muted')
		muzykaIkona.classList.add('Normal')
		if (glosnoscMuzykiZapamietana > 0) {
			glosnoscMuzyki = glosnoscMuzykiZapamietana
		} else {
			glosnoscMuzyki = 0.01
		}
	}
	soundTrack.volume = glosnoscMuzyki
	muzykaSlider.value = glosnoscMuzyki * 100
})

muzykaSlider.addEventListener('input', () => {
	if (muzykaSlider.value == 0) {
		muzykaIkona.classList.remove('Normal')
		muzykaIkona.classList.add('Muted')
	} else {
		if (muzykaIkona.classList.contains('Muted')) {
			muzykaIkona.classList.remove('Muted')
			muzykaIkona.classList.add('Normal')
		}
	}
	soundTrack.volume = muzykaSlider.value / 100
	glosnoscMuzyki = muzykaSlider.value / 100
	glosnoscMuzykiZapamietana = muzykaSlider.value / 100
})

document.querySelectorAll('.okienko').forEach(element => {
	element.querySelector('.x').addEventListener('click', () => {
		element.classList.toggle('d-flex')
		element.classList.toggle('d-none')
	})
})

const dzwiekIkona = document.getElementById('soundIcon')
const dzwiekSlider = document.getElementById('soundSlider')
let glosnoscDzwieku = 0.5
let glosnoscDzwiekuZapamietana = 0.5

dzwiekIkona.addEventListener('click', () => {
	if (dzwiekIkona.classList.contains('Low')) {
		dzwiekIkona.classList.remove('Low')
		dzwiekIkona.classList.add('Muted')
		glosnoscDzwieku = 0
	} else if (dzwiekIkona.classList.contains('Max')) {
		dzwiekIkona.classList.remove('Max')
		dzwiekIkona.classList.add('Muted')
		glosnoscDzwieku = 0
	} else {
		dzwiekIkona.classList.remove('Muted')
		if (glosnoscDzwiekuZapamietana > 0.5) {
			glosnoscDzwieku = glosnoscDzwiekuZapamietana
			dzwiekIkona.classList.add('Max')
		} else if (glosnoscDzwiekuZapamietana > 0) {
			glosnoscDzwieku = glosnoscDzwiekuZapamietana
			dzwiekIkona.classList.add('Low')
		} else {
			glosnoscDzwieku = 0.01
			dzwiekIkona.classList.add('Low')
		}
	}
	dzwiekSlider.value = glosnoscDzwieku * 100
})

dzwiekSlider.addEventListener('input', () => {
	if (dzwiekSlider.value == 0 && dzwiekIkona.classList.contains('Low')) {
		dzwiekIkona.classList.remove('Low')
		dzwiekIkona.classList.add('Muted')
	} else if (dzwiekSlider.value == 0 && dzwiekIkona.classList.contains('Max')) {
		dzwiekIkona.classList.remove('Max')
		dzwiekIkona.classList.add('Muted')
	} else if (dzwiekSlider.value <= 50 && dzwiekIkona.classList.contains('Max')) {
		dzwiekIkona.classList.remove('Max')
		dzwiekIkona.classList.add('Low')
	} else if (dzwiekSlider.value > 50 && dzwiekIkona.classList.contains('Low')) {
		dzwiekIkona.classList.remove('Low')
		dzwiekIkona.classList.add('Max')
	} else {
		if (dzwiekIkona.classList.contains('Muted')) {
			dzwiekIkona.classList.remove('Muted')
			if (dzwiekSlider.value > 50) {
				dzwiekIkona.classList.add('Max')
			} else {
				dzwiekIkona.classList.add('Low')
			}
		}
	}
	glosnoscDzwieku = dzwiekSlider.value / 100
	glosnoscDzwiekuZapamietana = dzwiekSlider.value / 100
})

document.querySelectorAll('.panelButton').forEach((element, index) => {
	element.addEventListener('click', () => {
		document.getElementById('modal' + index).classList.remove('d-none')
		document.getElementById('modal' + index).classList.add('d-flex')
	})
})

const soundtracks = {
	cookieClicker: 1,
	minecraft: 7,
	geometryDash: 9,
}

let soundTrack = new Audio()

let currentSoundtrack = 'cookieClicker'

function playRandomSong(soundtrack) {
	let songNumber = Math.floor(Math.random() * soundtracks[soundtrack]) + 1
	soundTrack.src = `songs/${soundtrack}/${songNumber}.mp3`
	soundTrack.volume = glosnoscMuzyki
	soundTrack.play()
	currentSoundtrack = soundtrack
}

const soundTrack1 = document.getElementById('soundTrack1')
const soundTrack2 = document.getElementById('soundTrack2')
const soundTrack3 = document.getElementById('soundTrack3')

soundTrack1.addEventListener('click', function () {
	if (!soundTrack1.classList.contains('Wybrano') && soundTrack1.classList.contains('Posiadane')) {
		soundTrack2.classList.remove('Wybrano')
		soundTrack3.classList.remove('Wybrano')
		soundTrack1.classList.add('Wybrano')
		playRandomSong('cookieClicker')
	}
})

soundTrack2.addEventListener('click', function () {
	if (!soundTrack2.classList.contains('Wybrano') && soundTrack2.classList.contains('Posiadane')) {
		soundTrack1.classList.remove('Wybrano')
		soundTrack3.classList.remove('Wybrano')
		soundTrack2.classList.add('Wybrano')
		playRandomSong('minecraft')
	} else if (!soundTrack2.classList.contains('Wybrano') && ciasteczka >= 1000000) {
		soundTrack1.classList.remove('Wybrano')
		soundTrack3.classList.remove('Wybrano')
		soundTrack2.classList.add('Wybrano')
		ciasteczka -= 1000000
		soundTrack2.classList.add('Posiadane')
		document.getElementById('soundTrackKoszt2').innerHTML = 'Posiadane'
		playRandomSong('minecraft')
	}
})

soundTrack3.addEventListener('click', function () {
	if (!soundTrack3.classList.contains('Wybrano') && soundTrack3.classList.contains('Posiadane')) {
		soundTrack1.classList.remove('Wybrano')
		soundTrack2.classList.remove('Wybrano')
		soundTrack3.classList.add('Wybrano')
		playRandomSong('geometryDash')
	} else if (!soundTrack3.classList.contains('Wybrano') && ciasteczka >= 1000000000) {
		soundTrack1.classList.remove('Wybrano')
		soundTrack2.classList.remove('Wybrano')
		soundTrack3.classList.add('Wybrano')
		ciasteczka -= 1000000000
		soundTrack3.classList.add('Posiadane')
		document.getElementById('soundTrackKoszt3').innerHTML = 'Posiadane'
		playRandomSong('geometryDash')
	}
})

soundTrack.addEventListener('ended', function () {
	playRandomSong(currentSoundtrack)
})

let interacted = false

document.addEventListener('click', () => {
	if (!interacted) {
		interacted = true
		playRandomSong('cookieClicker')
	}
})

setInterval(() => {
	document.getElementById('staty1').innerHTML = 'Ciasteczka w Banku: ' + nFormatter(ciasteczka, 1)
	document.getElementById('staty2').innerHTML = 'Ciasteczka Razem Zebrane: ' + nFormatter(ciasteczkaRazem, 1)
	document.getElementById('staty3').innerHTML = 'Budynków Razem: ' + budynkowRazem
	document.getElementById('staty4').innerHTML = 'Na sekunde: ' + nasekunde
}, 500)
