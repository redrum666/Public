var delayedStart = new Date().getTime(),
    delayedEnd,
    p = document.createElement("p"),
    text = '';

text += delayedStart + ' delayed start<br>';

for (var i = 1; i <= 5000; i++) {
    p.innerHTML += ' Lorem ' + i;
    document.getElementById('addText').appendChild(p);
}

delayedEnd = new Date().getTime();

text += delayedEnd + ' delayed end<br>';
text += 'Delayed by' + (delayedEnd - delayedStart);

document.getElementById('addDelayed').innerHTML = text;