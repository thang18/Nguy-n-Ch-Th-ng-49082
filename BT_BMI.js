
var clickbtn = document.getElementById('btn')
clickbtn.onclick = function(){
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var bmi = weight/((height/100)*(height/100));
  
    if(bmi<18.5){
        alert('Phan loai: Gay; Nguy co phat trien benh: Thap.')
    }else if(bmi>=18.5 && bmi<=24.9){
        alert('Phan loai: Binh thuong; Nguy co phat trien benh: Trung binh.')
    }else if(bmi>=25 && bmi<=29.9){
        alert('Phan loai: Hoi beo; Nguy co phat trien benh: Cao.')
    }else if(bmi>=30 && bmi<=34.9){
        alert('Phan loai: Beo cap do 1; Nguy co phat trien benh: Cao.')
    }else if(bmi>=35 && bmi<=39.9){
        alert('Phan loai: Beo cap do 2; Nguy co phat trien benh: Rat cao.')
    }else{
        alert('Phan loai: Beo cap do 3; Nguy co phat trien benh: Nguy hiem.')
    }
}