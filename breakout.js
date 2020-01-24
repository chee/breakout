let canvas = document.getElementById("canvas")
let context = canvas.getContext("2d")
let rando = (...a) => a[Math.floor(Math.random() * a.length)]

let canvasRect = [0, 0, canvas.width, canvas.height]

function clear() {
	context.clearRect(...canvasRect)
	context.lineWidth = 1
	context.strokeRect(...canvasRect)
}

let ball = {
	r: 5,
	x: canvas.width / 2,
	y: canvas.height - 30,
	dx: 2,
	dy: -2
}

function loop() {
	clear()
	context.beginPath()
	context.arc(ball.x, ball.y, ball.r * 2, 0, Math.PI * 2)
	context.fillStyle = "#39c"
	context.fill()
	context.closePath()
	ball.x += ball.dx
	ball.y += ball.dy
	if (ball.x > canvas.width - ball.r || ball.x < ball.r) {
		ball.dx = -ball.dx
	}

	if (ball.y > canvas.height - ball.r || ball.y < ball.r) {
		ball.dy = -ball.dy
	}
}

clear()
setInterval(loop, 10)
