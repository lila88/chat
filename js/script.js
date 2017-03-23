 "use strict";
var us;//еременная для юзеров
var myId;//переменная для моего ID, данные в которую заносятся при парсинге myId = JSON.parse(result) отправке юзера(регистрации) sendUser()
var USERS_URL = 'https://main-workspace-juggerr.c9users.io:8081/user'
var MESSAGES_URL = 'https://main-workspace-juggerr.c9users.io:8081/messages';

//создание PROMIS для получения данных  
function getRequestP(url) { //в качестве параметра будет выступать USERS_URL-серверный адрес, где храняться данныу о пользователях 
  return new Promise(function(resolve, reject) {// Синтаксис создания Promise, resolve, reject - обязательные параметры
  										// Эта функция будет вызвана автоматически
  										// В ней можно делать любые асинхронные операции,
  	//В нашем случае 1. Создаём новый объект XMLHttpRequest									                     
    var xhr = new XMLHttpRequest();
    // 2. Конфигурируем его: GET-запрос на URL 'https://main-workspace-juggerr.c9users.io:8081/user'
    xhr.open('GET', url, true);
    xhr.onload = function() {
    	                 // А когда они завершатся — нужно вызвать одно из:
      if (this.status == 200) {
        resolve(this.response);// resolve(результат) при успешном выполнении
      } else {
        reject(this.response);// reject(ошибка) при ошибке
      }
    };
    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };
    // 3. Отсылаем запрос
    xhr.send();
  });
}


//создание PROMIS для отправки данных
function postRequestP(url, body) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');//обязательно, чтобы было ясно 
    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        reject(this.response);
      }
    };
    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };
    xhr.send(body);
  });
}


//получение списка пользователей с сервера
/*function gettingUser(){
// Выполняется AJAX запрос к внешнему ресурсу c помощью чистого JavaScript
  var requestUsers = new XMLHttpRequest();
  requestUsers.open('GET', 'https://main-workspace-juggerr.c9users.io:8081/user', true);
  requestUsers.send(); 
   requestUsers.onload=function(){
   	console.log(requestUsers.status);
    if (requestUsers.status >= 200 && requestUsers.status < 400) {
      // Обработчик успещного ответа
      var resp_us = requestUsers.responseText;
     console.log(resp_us);
      listUsers(resp_us);     
    } else {
      // Обработчик ответа в случае ошибки
      //alert(requestUsers.status + ': ' + requestUsers.statusText);
    }
};
}/*AJAX USERS*/

function listUsers(users){
  var ul = document.getElementById('list');
  ul.innerHTML = "";
//сделать  глобальную переменную
us = JSON.parse(users);
 //console.log(users);
  us.forEach(
        function (obj) {  
          var li = document.createElement('li');
          //li.setAttribute('class',obj.status);   
          var a = document.createElement('a');
          a.innerHTML = obj.username;
          a.addEventListener('click', function(){newTab(obj.username);});
          li.appendChild(a);
          ul.appendChild(li);
        }
      );
}
//получение сообщений с сервера
/*function gettingMess(){
// Выполняется AJAX запрос к внешнему ресурсу c помощью чистого JavaScript
  var requestMess = new XMLHttpRequest();
  requestMess.open('GET', 'https://main-workspace-juggerr.c9users.io:8081/messages', true);
  requestMess.send();
  requestMess.onload = function() {
   var responseMess = requestMess.responseText;
   //console.log(responseMess);
   var requestUsers = new XMLHttpRequest();
  requestUsers.open('GET', 'https://main-workspace-juggerr.c9users.io:8081/user', true);
  requestUsers.send();
  requestUsers.onload = function() {
    var responseUs = requestUsers.responseText;
    messagesPrint(responseMess,responseUs);
   }
  }
}*/

 //Отправка сообщения
function sendMessage() {	
	var input = document.getElementById('message');//доступ к textarea
	var empty = document.createElement('p');
	empty.setAttribute('class','error');
	var text = input.value;//сообщение в textarea
	if (text==''){
		/*alert('Нет текста');*/ 
		empty.innerHTML = "Введите текст"; wrapperMessages.insertBefore(empty, wrapperMessages.children[1]); 
	};
	var timeMes = new Date();//текущая дата
	//var author = myId.user_id; // мой ID
	var body = JSON.stringify({//создаем (тело) строку JSON в нужном нам формате, который предусмотрен спецификацией типа http://editor.swagger.io/#!/
			    "datetime": timeMes.toISOString(),//преобразовывает дату в формат "datetime":"2017-03-17T06:35:54.712Z" 
	        "message": text, //текст сообщения
	        "user_id": 109072//author//ID автора
		});
	postRequestP(MESSAGES_URL, body);//вызываем функцию создания PROMIS для отправки данных
	/*var content = document.querySelectorAll('.current')[0];
	content.insertAdjacentHTML("beforeEnd", "<p><b>"+author+": </b>"+text+"</p>");*/
	input.value = "";//после отправки очищаем текстовое поле и кол-во знаков 
	document.getElementById('characters').innerHTML='0';
	document.getElementById('letters').innerHTML='0';
	document.getElementById('whitespase').innerHTML='0';
	document.getElementById('punctuation').innerHTML='0';
}//Отправка сообщения

//Отправка (Регистрация) юзера
function sendUser()  {
	var author = document.getElementById('enter_user').value;//получаем имя введенное в поле Enter name
	var url = 'https://main-workspace-juggerr.c9users.io:8081/user/register';// получаем адрес для занесения имени
	var body = JSON.stringify({"username": author});//создаем строку JSON с данными типа (объект) "username": author
	//вызываем функцию создания PROMIS для отправки данных
	postRequestP(url, body).then(// в которую передаем параметрами адрес сервера для регистрации и строку-объект с данными
		result =>  function(){//затем парсим строку JSON.parse(result)
			myId = JSON.parse(result);// в глобальную переменную заносим объект с иенем и ID юзера
		},
	    error => {console.log("Rejected: " + error);});
}//Отправка (Регистрация) юзера


//вывод сообщений на страницу
function messagesPrint(mess, users) {
  var contentTab = document.getElementById("inside");
  contentTab.innerHTML = "";
  JSON.parse(mess).forEach(
    function (obj1) { 
    //console.log(obj1.message);        
      us.forEach(
        function (obj2) {
          //console.log(obj2.name);
          if (obj1.user_id==obj2.user_id){
          	var time = new Date(obj1.datetime);
          	var our_time = checkTime(time.getHours()) +':'+ checkTime(time.getMinutes()) +'&nbsp;&nbsp;&nbsp;&nbsp;'+ checkTime(time.getFullYear()) +'-'+ checkTime(time.getMonth()) +'-'+ checkTime(time.getDate());
          //console.log(obj2.name);            
            var p = document.createElement('p');
            if(obj2.user_id==109072){
            p.innerHTML = `<span style="color:red;" class="chat-user-name">${obj2.username}</span>&nbsp;:&nbsp;&nbsp;<span style="background-color:#e5e5e5;" class="chat-user-message">${obj1.message}</span><span style='float:right;font-size:12px; color:#06c295;'>${our_time}</span>` 
            contentTab.appendChild(p);
          }
          else{
          	p.innerHTML = `<span class="chat-user-name">${obj2.username}</span>&nbsp;:&nbsp;&nbsp;<span class="chat-user-message">${obj1.message}</span><span style='float:right;font-size:12px; color:#06c295;'>${our_time}</span>` 
            contentTab.appendChild(p);
          }
          }             
        }
      );
    }
  );  
}
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
	var listUser = document.getElementById('list');
var stringUsers = listUser.getElementsByTagName('li').length;
//console.log(stringUsers);
 document.getElementById('countUser').innerHTML = stringUsers; 
 
} 
/*Подсчет пользователей онлайн*/

/*добавляем 0 перед одноциферным временем: 07:01*/
function checkTime(i){
	if (i<10) {
		i="0" + i;
	}
	return i;
}
/*Таймер и текущее вреня*/
var startdate = new Date();//получаем текущую дату
var starthour = Math.floor(startdate.getTime()/(1000 * 60 * 60));//Math.floor Math.floor() возвращает наибольшее целое число, меньшее, либо равное указанному числу.
var startmin = Math.floor(startdate.getTime()/(1000 * 60));// в нашем случае  возвращает целое число чисов и минут

function clock(){
var date = new Date(); //снова получаум текущую дату для работы внутри функции
var hour = date.getHours();// получаем текущий час минуту и секунду
var min = date.getMinutes();
var sec = date.getSeconds();
/*
if (hour <= 9) hour = "0" + hour;// добавим ноль впереди для чисел < 10
if (min <= 9) min = "0" + min;
if (sec <= 9) sec = "0" + sec;*/

var difftime = date.getTime() - startdate.getTime();//getTime() Return the number of milliseconds since 1970/01/01-------
var diffhours = Math.floor(difftime / (1000 * 60 * 60 ));
var diffmins = Math.floor(difftime / (1000 * 60 ));
//var diffmins = checkTime(diffmins);

document.getElementById('time_online').innerHTML = '<span>You are online for:<span>&nbsp;&nbsp;'+ checkTime(diffhours) + '&nbsp;h&nbsp;&nbsp;' + checkTime(diffmins) + '&nbsp;min';
document.getElementById('clock').innerHTML = '<span>Your local time is:<span>&nbsp;&nbsp;'+ checkTime(hour) + ':' + checkTime(min) + ':' + checkTime(sec);
}
/*Таймер и текущее вреня*/

/*создание нового таба и таргета*/
function newTab(el) {
   //console.log(el);
 var listtab = document.getElementById('tabs_button');//получить список табов 
        var newtab = document.createElement('li');  //  создать  новый таб
        newtab.setAttribute('class','tab'); //   задать ей класс 
        var icon =  document.createElement('span');
        icon.setAttribute('class','before'); //   задать ей класс 
        var nam =  document.createElement('span');
        nam.setAttribute('class','person-chat');
        nam.innerHTML = el;
        nam.addEventListener('click', function(){
        	selectActiveTab(newtab);
        });
        var nameUser =  document.createElement('a');
        nameUser.insertBefore(icon, nameUser.firstChild);
        nameUser.appendChild(nam);
        var closeTab =  document.createElement('span');
        closeTab.setAttribute('class','close'); //   задать ей класс 
        closeTab.addEventListener('click', function(){
        	deleteTab(newtab);
        });
        //closeTab.innerHTML = '<i class="fa fa-times-circle" aria-hidden="true"></i>'
        newtab.insertBefore(nameUser, newtab.firstChild);
        newtab.appendChild(closeTab);
        listtab.appendChild(newtab);//вставить ее в список кнопок табов
        var tabWigets = document.querySelectorAll('.target');//получить массив табов
        var newtabarea = document.createElement('div');  //  создать новый таб
        newtabarea.setAttribute('class','target');//  задать ему класс
        var insidetabarea = document.createElement('div');  //  создать новый таб
        insidetabarea.setAttribute('class','inside');//  задать ему класс  
        //newtabarea.innerHTML = el;    
        tabs_widget.appendChild(newtabarea);//вставить его в div-родитель табов 
        newtabarea.appendChild(insidetabarea);       
}
/*переключение вкладок*/
function selectActiveTab(el) {
  var tabs = document.querySelectorAll('.tab');
  var targ = document.querySelectorAll('.target');
  for (var i = 0; i < tabs.length; i++) {
    if (el == tabs[i]) {
      targ[i].classList.add('active');
      tabs[i].classList.add('active');
    } else {
      targ[i].classList.remove('active');
      tabs[i].classList.remove('active');
    }
  }
  
}
function deleteTab(el) {
  //console.log(el);
  var tabs = document.querySelectorAll('.tab');
  var targ = document.querySelectorAll('.target');
  for (var i = 0; i < tabs.length; i++) {
    if (el == tabs[i]) {
      if(tabs[i].classList.contains('active')){        
       targ[0].classList.add('active');
       tabs[0].classList.add('active');                
      }     
       tabs[i].parentNode.removeChild(tabs[i]);
       targ[i].parentNode.removeChild(targ[i]);
    }
  }  
}


window.onload = function() {
  setInterval(clock, 1000);
                         // сделать запрос
  setInterval(function(){getRequestP(USERS_URL).then( // 1. Получить данные о пользователях в JSON и передать дальше
  	    result => {listUsers(result);},//полученные данные передать в параметре в функцию listUsers(...), где они парсятся и заносятся для хранения в глобальную переменную var us
  	    error => {console.log("Rejected: " + error);}//в случае ошибки
  		).then(
  		mes => {return getRequestP(MESSAGES_URL);},// 1. Получить все сообщения в JSON и передать дальше
  		error => {console.log("Rejected: " + error);}//Вызовы console.log оставлены, чтобы при запуске можно было посмотреть конкретные значения, хотя они здесь и не очень важны.
  		).then(
  		result => {messagesPrint(result, us);},//полученные данные передать в параметре в функцию messagesPrint(result, us), где они парсятся и выводяться на экран
  	    error => {console.log("Rejected: " + error);}//Вызовы console.log оставлены, чтобы при запуске можно было посмотреть конкретные значения, хотя они здесь и не очень важны.
  		);},1000);//все это просходит переодически, обновляя данные каждую секунду
	document.getElementById('enteruserId').addEventListener('click', function(){sendUser()});
	document.getElementById('sendmess').addEventListener('click', function(){sendMessage()});
  setInterval('show_Count_User()', 1000);
 }; //window.onload ADD


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
var textMessage = document.getElementById('message')
document.getElementById('mainTab').addEventListener('click', function(){
	selectActiveTab(this);
});
	document.getElementById('bold').addEventListener('click', function(){
	tag_add(textMessage, '<b>', '</b>');
});  
document.getElementById('italic').addEventListener('click', function(){
	tag_add(textMessage, '<i>', '</i>');
});
document.getElementById('underline').addEventListener('click', function(){
	tag_add(textMessage, '<u>', '</u>');
});
document.getElementById('link').addEventListener('click', function(){
	tag_add(textMessage, '<a href=\'/\'>', '</a>');
});  