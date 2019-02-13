var timeSeconds = 234245645335;
var hours =timeSeconds/3600;
var ost = timeSeconds%3600;
var minutes = (ost%3600)/60;
var s = (minutes - parseInt(minutes))*60;
console.log(s)