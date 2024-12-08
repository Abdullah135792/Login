let nam=document.getElementById('name');
let profession=document.getElementById('profession');
let email=document.getElementById('email');
let email1=document.getElementById('email1');
let password1=document.getElementById('password1');
let password=document.getElementById('password');
let password2=document.getElementById('password2');
let send=document.getElementById('send');
let form=document.getElementById('form');
let mood="send";
 let data;
 if(localStorage.da !=null){
    data=JSON.parse(localStorage.da)
 }else{

   data=[];
 }
send.onclick=function(){
   let ob={
    nam:nam.value,
    profession:profession.value,
    email:email.value,
    password1:password1.value,
    password2:password2.value,

   }
   if(mood=='send'){
       if(nam.value !=''&& password1.value==password2.value){
           data.push(ob)
           localStorage.setItem('da',JSON.stringify(data));
           nll()
        }else if( password1.value!=password2.value) {
            
            
            password2.placeholder="الرقم غير صحيحيه"
            password2.value=''
            password2.focus()
        }else{
            nam.placeholder='ادخل اسمك'
            nam.focus()
            
            
        }
    }else if(mood=='mmm'){
        
        mn()
    }
}
function oo(){

    password2.placeholder='تأكيد كلمة المرور';
    nam.placeholder='الاسم';
}
function nll(){
    
    nam.value='',
    profession.value='',
    email.value='',
    password1.value='',
    password2.value=''
}

form.onclick=function(){
    
    email1.style.display='block'
    password.style.display='block'
    nam.style.display=' none'
    profession.style.display=' none'
    password2.style.display=' none'
    email.style.display=' none'
    password1.style.display=' none'
    
    mood='mmm';
    send.innerHTML='انقر'
    
}

function mn() {
    for (let i = 0;i <data.length;i++) {

        
        if(email1.value===data[i].email &&password.value===data[i].password1){
            
          document.write(`<h1> hello${data[i].nam}</h1>`)
          break
  
        }
        
    }

}


