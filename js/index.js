var users = require('./data/users');  // Подключение самостоятельно созданного модуля "users"
users.data.forEach(
  function (obj) {
    var ul = document.getElementById('from-file');
    ul.innerHTML += `<li class="${obj.status}"><a onclick="newTab(this.innerHTML)">${obj.name}</a> </li>`;
  }
)




// Выполняется AJAX запрос к внешнему ресурсу c помощью чистого JavaScript
var request = new XMLHttpRequest();
request.open('GET', 'http://mockbin.com/bin/35ea6adb-2b94-4c48-93f7-4b02b4849e3e', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Обработчик успещного ответа
    var response = request.responseText;
    console.log(response);

    JSON.parse(response).forEach(
      function (obj) {
        var ul = document.getElementById('using-pure-js');
        ul.innerHTML += `<li>${obj.name} ${obj.status}</li>`;
      }
    )
  } else {
    // Обработчик ответа в случае ошибки
  }
};
request.onerror = function() {
  // Обработчик ответа в случае неудачного соеденения
};
request.send();




var $ = require('jquery');  // Подключение установленной библиотеки jQuery

// Выполняется AJAX запрос к внешнему ресурсу c помощью jQuery
$.ajax({
  type: 'GET',
  url: 'http://mockbin.com/bin/35ea6adb-2b94-4c48-93f7-4b02b4849e3e',
  success: function(response) {  // Обработчик успещного ответа
    console.log(response); // Вывод содержимого ответа в консоль

    $.parseJSON(response).forEach(
      function (obj) {
        $("#using-jquery").append(`<li>${obj.name} ${obj.status}</li>`);
      }
    )
  },
  error: function(data, status) {  // Обработчик ответа в случае ошибки
    console.error(data, status);
  }
});

/**=============================================================**/
window.onload = function() {

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


};// window.onload = function() AND


/*создание нового таба и таргета*/
function newTab(name) {
        //alert('После загрузки сайта пользователей онлайн    '+listUserOnline.length)
        var li = list.getElementsByTagName('li');
        for (var i = 0; i < li.length; i++) {
          var id = [i];//alert(id)//найти по списку идентификатор li пользователя в онлайн и прикрепить к его табу и таргету 
      }
        tabs_button.innerHTML+= '<li  class=\'tab \'><a hreff="#'+id+'" onclick="activeTab(this.parentNode)"><span class="before"></span>&nbsp;&nbsp;<span class="person-chat" style="margin-left:10px;">Chat with ...'+name+'</span></a><span class="close" onclick="deleteTub()">x</span></li>';      
        tabs_widget.innerHTML += '<div id="'+id+'" class="target "><span class="chat-user-name">' + name + '</span>&nbsp;:&nbsp;&nbsp;<span class="chat-user-message">HELLO!!!&nbsp;&nbsp;&nbsp;&nbsp;I\'m&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:blue;">'+name+'</span></div>'; 
          
     // deleteTub();
      }

/*создание нового таба и таргета*/
function deleteTub(){

  var activeTab = tabs_button.getElementsByClassName('active');
  //var acntiveTarg = tabs_widget.getElementsByClassName('active');
for (var i = 0; i < activeTab.length; i++) {
  activeTab[i].parentNode.removeChild(activeTab[i]);
}
for (var i = 0; i < acntiveTarg.length; i++) {
  acntiveTarg[i].parentNode.removeChild();
} }        

/* TABS Добавление табам класса  активности*/

function activeTab(el){       
            var tabs = document.querySelectorAll('.tab');//получить массив кнопок с классом tab
         var con = document.querySelectorAll('.target');//получить массив табов с классом target
             for (var i = 0; i < tabs.length; i++) {//перебрать массив
                  if (el == tabs[i]) {//
                    con[i].classList.add('active');//добавить класс активного
                    tabs[i].classList.add('active');//добавить класс активного
                  } 
                  else {
                    con[i].classList.remove('active');//удалить класс активного
                    tabs[i].classList.remove('active');//удалить класс активного
                  }
                }
               
            
          }
/* TABS Добавление табам класса  активности*/ 







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
/**=====================================================**/