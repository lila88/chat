 window.onload = function() {
/*Добавить пользователя в список онлайн первый вариант*/
var users = {
  "data": [
    {"name":"John Snow", "status":"Active"},
    {"name":"Andrew Simpson", "status":"Active"},
    {"name":"Alison Black", "status":"Active"},
    {"name":"Chack Noris", "status":"Active"},
    {"name":"Sasha Stuart", "status":"Suspended"}
  ]
}
//var users = require('./data/users');  // Подключение самостоятельно созданного модуля "users"
	users.data.forEach(
  function (obj) {
    var ul = document.getElementById('list');
    var li = document.createElement('li');
    li.setAttribute('class',obj.status);   
    a = document.createElement('a');
    a.innerHTML = obj.name;
    li.appendChild(a);
    ul.appendChild(li);
    //ul.innerHTML += `<li class="${obj.status}"><a >${obj.name}</a> </li>`;   
	  }
)
/*Добавить пользователя в список онлайн первый вариант*/

/*Подсчет пользователей онлайн*/
function countUser(string) {
var count;
if(string!=null){
	 count = string.length;
}
else{
	 count = '0';
	}
	return count;
}

function show_Count_User() {
var stringUsers = document.querySelectorAll('.Active');
 count_User.innerHTML = countUser(stringUsers);
}
 setInterval(show_Count_User);
/*Подсчет пользователей онлайн*/
/*Таймер и текущее вреня*/
var startdate = new Date();//получаем текущую дату
var starthour = Math.floor(startdate.getTime()/(1000 * 60 * 60));//Math.floor Math.floor() возвращает наибольшее целое число, меньшее, либо равное указанному числу.
var startmin = Math.floor(startdate.getTime()/(1000 * 60));// в нашем случае  возвращает целое число чисов и минут

function clock(){

var date = new Date(); //снова получаум текущую дату для работы внутри функции
var hour = date.getHours();// получаем текущий час минуту и секунду
var min = date.getMinutes();
var sec = date.getSeconds();

if (hour <= 9) hour = "0" + hour;// добавим ноль впереди для чисел < 10
if (min <= 9) min = "0" + min;
if (sec <= 9) sec = "0" + sec;


var difftime = date.getTime() - startdate.getTime();//getTime() Return the number of milliseconds since 1970/01/01-------
var diffhours = Math.floor(difftime / (1000 * 60 * 60 ));
var diffmins = Math.floor(difftime / (1000 * 60 ));

document.getElementById('clock').innerHTML = '<span>Your local time is:<span>&nbsp;&nbsp;'+ hour + ':' + min + ':' + sec;
document.getElementById('time_online').innerHTML = '<span>You are online for:<span>&nbsp;&nbsp;'+ diffhours + '&nbsp;h&nbsp;&nbsp;' + diffmins + '&nbsp;min';
}
setInterval(clock, 1000);
clock();
/*Таймер и текущее вреня*/

/*Добавление таба отдельному пользователю*/
var listUserOnline = document.querySelectorAll('.Active');
for (var i = 0; i < listUserOnline.length; i++) {  ////перебираем массив списка пользователей онлайн    
      listUserOnline[i].addEventListener('click', function() { //и при нажатии на конкретного пользователя
        alert(listUserOnline[i])
       newTab(this);
  })
}

};// window.onload = function() AND

/*создание нового таба и таргета*/
function newTab(el) {
 var listtab = document.getElementById('tabs_button');//получить список табов 
        var newtab = document.createElement('li');  //  создать  новый таб
        newtab.setAttribute('class','tab'); //   задать ей класс 
        icon =  document.createElement('span');
        icon.setAttribute('class','before'); //   задать ей класс 
        nam =  document.createElement('span');
        nam.setAttribute('class','person-chat');
        nam.innerHTML = el;
        nameUser =  document.createElement('a');
        nameUser.insertBefore(icon, nameUser.firstChild);
        nameUser.appendChild(nam);
        closeTab =  document.createElement('span');
        closeTab.setAttribute('class','close'); //   задать ей класс 
        closeTab.innerHTML = 'x'
        newtab.insertBefore(nameUser, newtab.firstChild);
        newtab.appendChild(closeTab);
        listtab.appendChild(newtab);//вставить ее в список кнопок табов

        var tabWigets = document.querySelectorAll('.target');//получить массив табов
        var newtabarea = document.createElement('div');  //  создать новый таб
        newtabarea.setAttribute('class','target');//  задать ему класс      
        tabs_widget.appendChild(newtabarea);//вставить его в div-родитель табов

        var tabs = document.querySelectorAll('.tab');//получить массив кнопок с классом tab
        var con = document.querySelectorAll('.target');//получить массив табов с классом target
        for (var i = 0; i < tabs.length; i++) {//перебрать массив кнопок
          tabs[i].addEventListener('click', function(e) {  // и при нажатии на кнопку
            for (var k = 0; k < tabs.length; k++) {//перебрать массив
              if (this == tabs[k]) {//
                con[k].classList.add('active');//добавить класс активного
                tabs[k].classList.add('active');//добавить класс активного
              } 
              else {
                con[k].classList.remove('active');//удалить класс активного
                tabs[k].classList.remove('active');//удалить класс активного
          }
        }
      })
    }

    var close = document.querySelectorAll('.close');
    var target_ = document.getElementsByClassName('target');
    var target_act = tabs_widget.getElementsByClassName('target');
for (var i = 0; i < close.length; i++) {//перебрать массив кнопок
              close[i].addEventListener('click', function(e) {                                    
                 for (var j = 0; j <  target_act.length; j++) {
                  //alert(target_act.length)
                  if (target_act[i].className=='target'){
                   target_act[i].classList.add('active');
                 }
                  else{
                    target_act[j].classList.remove('active');
                  }
                 }
                 
                 //target.parentNode.removeChild(target);
                 
               })
            }

}


/*Подсчет и вывод вводимых знаков в поле для СМС */
function counter(string, reg) {
var count;
if(string.match(reg)!=null){
	 count = string.match(reg).length;
}
else{
	 count = '0';
	}
	return count;
}

message.oninput=function () {//функция подсчета и вывода введенных в textarea букв, знаков и пробелов
var valuestring = document.getElementById("message").value;//получили введенный текст

var r_p = /[^\d\sa-zA-Zа-яА-Я0-9\']/g;// выбрали пунктуацию - все что не буквы и цифры
var r_w = /\s/g;// выбрали пробелы и переносы
var r_s = /[a-zA-Zа-яА-Я0-9\']/g;// выбрали буквы и цифры

characters.innerHTML ='<span style="color:blue;">' +  valuestring.length; + '</span>';//вывели общее кол-во знаков
punctuation.innerHTML ='<span style="color:blue;">' +  counter(valuestring, r_p); + '</span>';//вывели  кол-во знаков пунктуации
whitespase.innerHTML ='<span style="color:blue;">' + counter(valuestring, r_w); + '</span>';//вывели кол-во пробелов
letters.innerHTML ='<span style="color:blue;">' +  counter(valuestring, r_s); + '</span>';//вывели кол-во букв и цифр
}
/*Подсчет и вывод вводимых знаков в поле для СМС */   

/*Вывод сообщения в чат*/
sendmess.onclick = function(){
	var mes=document.forms['formUserMes'].elements['message'].value;//текст сообщения 
	if(!mes){
		alert("Введите сообщение");
	}
	else{
	var myStatus = document.getElementById('enter_user').value;// имя пользователя из function addUser()	
	if(!myStatus){
		myStatus="It's I'm";
	}
	alert(myStatus);
	 
	var newtag=document.createElement('p');//создали тег и поместили в него имя пользователя и сообщение
	newtag.innerHTML='<span class="chat-user-name">' + myStatus + '</span>&nbsp;:&nbsp;&nbsp;<span class="chat-user-message">' + mes + '</span>'
  var block =  tabs_widget.getElementsByClassName('active');//получили массив окон активного чата
  for (var i = 0; i < block.length; i++) {//перебрали
    block[i].appendChild(newtag);//в активное окно вывели сообщение
  }  
}
document.getElementById('formUserMes').reset();
characters.innerHTML = "0";//очистили счетчики общего кол-ва  знаков и вывели по ноля
punctuation.innerHTML ="0";//очистили счетчики кол-ва  знаков пунктуации и вывели по ноля
whitespase.innerHTML ="0";//очистили счетчики кол-ва пробелов и вывели по ноля
letters.innerHTML ="0"; //очистили счетчики кол-ва букв и цифр и вывели по ноля
}
/*Вывод сообщения в чат*/


 /*Выделение текста*/
function tag_add(obj, str1, str2) {  
    if(document.selection) {                                                                          // Для IE 
        var s = document.selection.createRange(); 
        if (s.text) { 
        s.text = str1 + s.text + str2 
        } else { 
            obj.value = obj.value + str1 + str2 
        } 
    } 
    else if (typeof(obj.selectionStart) == "number") {                                      // Opera, FireFox, Chrome 
        if (obj.selectionStart != obj.selectionEnd) { 
            var start = obj.selectionStart; 
            var end = obj.selectionEnd; 
            s = obj.value.substr(start,end-start); 
            obj.value = obj.value.substr(0, start) + str1 + s + str2 + obj.value.substr(end) 
        } else { 
            obj.value = obj.value + str1 + str2 
        } 
    } 
} 
 /*Выделение текста*/

   
	    