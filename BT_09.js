var clickbtn = document.getElementById('btn')
clickbtn.onclick = function(){
    var n = document.getElementById('n').value
    var x = document.getElementById('x').value
    var sum = 1
    for(var i=1;i<=n;i++){
       sum+= Math.pow(x,i)/i;
    }
    document.getElementById('kq').innerHTML=("Ket qua la: "+sum)

}