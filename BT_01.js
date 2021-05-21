var clickbtn = document.getElementById("btn");
clickbtn.onclick = function(){
    var n = document.getElementById('number').value;
    var e
    for(var i=2; i<(n-1);i++){
        if(n%i==0){
            e=1;
        }else{
            e=2;
        }
    }
    if(n<=1){
        alert(n+ ' Không phải là số nguyên tố.')
    }else{
        if(e==2){
            alert(n+ ' Là số nguyên tố.')
        }else{
            alert(n+ ' không phải là số nguyên tố.')
        }
    }
}