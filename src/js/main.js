const matchesData = [
	'09.22.2023 18:00:00',
	'10.01.2023 19:00:00',
	'10.08.2023 0:00:00',
	'10.15.2023 0:00:00',
	'11.19.2023 0:00:00',
	'11.26.2023 0:00:00',
	'12.03.2023 0:00:00',
	'11.19.2023 0:00:00',
]

const players = document.querySelectorAll('.team__player')

const daysCount = document.querySelector('#days')
const hoursCount = document.querySelector('#hours')
const minutesCount = document.querySelector('#minutes')
const secondsCount = document.querySelector('#seconds')

let userTime

const setTime = () => {
	const currentTime = new Date()
	const result = userTime - currentTime

	const days = Math.floor(result / 1000 / 60 / 60 / 24)
	const hours = Math.floor(result / 1000 / 60 / 60) % 24
	const minutes = Math.floor(result / 1000 / 60) % 60
	const seconds = Math.floor(result / 1000) % 60

	daysCount.textContent = days
	hoursCount.textContent = hours
	minutesCount.textContent = minutes
	secondsCount.textContent = seconds
}

const appUpdate = () => {
	let indexTime = 0
	for (let index = 0; index < matchesData.length; index++) {
		const el = matchesData[index]
		const currentTime = new Date()
		const time = new Date(el) - currentTime
		console.log(time, index)

		if (time <= 0 && time >= -3600000) {
			console.error('mecz trwa')
		}

		if (time > 0) {
			indexTime = index
			break
		}
	}
	userTime = new Date(matchesData[indexTime])
	console.log(userTime)
	setTime()
}

appUpdate()
setInterval(setTime, 1000)
