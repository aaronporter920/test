setInterval(function(){ 
bttns = document.querySelectorAll('div.modebar-group a.modebar-btn[data-title="Autoscale"]');
console.log(bttns);
var i;
for (i = 0; i < bttns.length; i++){
    console.log(bttns[i]);
    bttns[i].click();
    
                }
console.log("Sup");
}, 10100);

