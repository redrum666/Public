var deferedStart = new Date().getTime(),
    deferedEnd,
    p = document.createElement("p"),
    text = '';

text += deferedStart + ' -gt; Defered/async start';

for (var i = 1; i <= 5000; i++) {
    p.innerHTML += 'Lorem' + i;
    document.querySelector('#add').appendChild(p);
}

deferedEnd = new Date().getTime();

text += deferedEnd + ' -gt; Defered/async start';
text += deferedEnd - deferedStart + ' -gt; start - end';

document.getElementById('addtext').innerHTML = text;