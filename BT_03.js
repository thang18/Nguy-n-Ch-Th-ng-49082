var clickbtn = document.getElementById('btn')
clickbtn.onclick = function(){
    var n = document.getElementById('number').value
    var s=1
    for(var i=1;i<n;i++){
    
        if (n%i==0){
            s+=i       
        }
    }
    if(s==n){
        alert(n+' la so Hoan Hao')
    }else{
        alert(n+' khong phai la so Hoan Hao')
    }
}