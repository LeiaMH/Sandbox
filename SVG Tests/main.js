var draw = SVG().addTo('.canvas').size(300, 300)

var rect = draw.rect(100, 100).attr({ fill: '#f06' })

var life1 = draw.circle(15).fill('#FFF').move(20, 20)
var life2 = draw.circle(15).fill('#00F').move(60, 30)
var life3 = draw.circle(15).fill('#0F0').move(40, 60)

arr = [life1, life2, life3]

arr[0].remove()