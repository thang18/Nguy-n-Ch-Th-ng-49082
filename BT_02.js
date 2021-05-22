function soNT(){
    var array =[1,5,6,2,7,23,11,50,12,21,33]

for(var a =0; a<array.length; a++){
    var n =array[a]
    var e=0;
   
    for(var i =2; i<n-1; i++){
        if(n%i==0){
            e++
        }
    }
    if(e==0){
        console.log(n)
    }
    

}
}
soNT()
    