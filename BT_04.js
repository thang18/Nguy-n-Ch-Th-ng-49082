function sHH (){
    var array = [1,3,5,4,2,6,9,8,16,12,21,33,24]

for(var a =0; a<array.length; a++){
    var n =array[a]
    var s=1
    for(var i=1;i<n;i++){
    
        if (n%i==0){
            s+=i       
        }
    }
    if(s==n){
        console.log(n)
    }
    

}
}
sHH()