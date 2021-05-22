var clickbtn = document.getElementById('btn')
clickbtn.onclick = function(){
   var n = document.getElementById('number').value
   var c=0
  
   for(var i=0;i<n.length;i++){
     
      if(n.slice(i,i+1)!=n.slice((n.length-1)-i,n.length-i)){
         c++
      }
   }
   if(c==0){
      alert(n+' la chuoi doi xung')
   }else{
      alert(n+' khong phai la chuoi doi xung')
   }
   
  
}