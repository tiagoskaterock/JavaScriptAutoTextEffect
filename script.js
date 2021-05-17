const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!'
let idx = 1
let speed = 100 / speedEl.value
const start = 0

function writeText() {
	document.getElementById('text').innerHTML = text.slice(start, idx)
	idx++
	if (idx > text.length) {
		idx = 1
	}	
	setTimeout(writeText, speed)
}

writeText()

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)