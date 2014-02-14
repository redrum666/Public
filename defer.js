var delayedStart = new Date().getTime(),
    delayedEnd,
    p = document.createElement("p"),
    text = '';

text += delayedStart + ' -gt; delayed start';

for (var i = 1; i <= 5000; i++) {
    p.innerHTML += 'Lorem' + i;
    document.getElementById('addText').appendChild(p);
}

delayedEnd = new Date().getTime();

text += delayedEnd + ' -gt; delayed end';
text += delayedEnd - delayedStart + ' -gt; start - end';

document.getElementById('addDelayed').innerHTML = text;