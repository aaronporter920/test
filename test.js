setInterval(function(){ 
bttns = document.querySelectorAll('div.modebar-group a.modebar-btn[data-title="Autoscale"]');
console.log(bttns);
var x;
for (x in bttns){
    console.log(x);
    x.click();
                }
console.log("Sup");
}, 10005);

