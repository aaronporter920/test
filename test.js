setInterval(function(){ 
bttns = document.querySelectorAll('div.modebar-group a.modebar-btn[data-title="Autoscale"]'));
for (x in bttns){
    console.log(x)
    x.click();
                }
console.log("Sup")
}, 10005);

