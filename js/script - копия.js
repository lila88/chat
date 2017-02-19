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
    ul.innerHTML += `<li class="${obj.status}"><a >${obj.name}</a> </li>`;   
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


//};// window.onload = function() AND


/*создание нового таба и таргета*/
/*function newTab(name) {
	    	//alert('После загрузки сайта пользователей онлайн    '+listUserOnline.length)
	    	var li = list.getElementsByTagName('li');
	    	for (var i = 0; i < li.length; i++) {
	    		var id = [i];//alert(id)//найти по списку идентификатор li пользователя в онлайн и прикрепить к его табу и таргету 
	    }
	    	tabs_button.innerHTML+= '<li  class=\'tab \'><a hreff="#'+id+'" onclick="activeTab(this.parentNode)"><span class="before"></span>&nbsp;&nbsp;<span class="person-chat" style="margin-left:10px;">Chat with ...'+name+'</span></a><span class="close" onclick="deleteTub()">x</span></li>';    	
	    	tabs_widget.innerHTML += '<div id="'+id+'" class="target "><span class="chat-user-name">' + name + '</span>&nbsp;:&nbsp;&nbsp;<span class="chat-user-message">HELLO!!!&nbsp;&nbsp;&nbsp;&nbsp;I\'m&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:blue;">'+name+'</span></div>';	
        	
     //	deleteTub();
	    }
*/
/*создание нового таба и таргета*/
/*function deleteTub(){

	var activeTab = tabs_button.getElementsByClassName('active');
  //var acntiveTarg = tabs_widget.getElementsByClassName('active');
for (var i = 0; i < activeTab.length; i++) {
	activeTab[i].parentNode.removeChild(activeTab[i]);
}
for (var i = 0; i < acntiveTarg.length; i++) {
	acntiveTarg[i].parentNode.removeChild();
} }				 
*/
/* TABS Добавление табам класса  активности*/

/*function activeTab(el){				
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
						   
						
					}*/
/* TABS Добавление табам класса  активности*/	


/*Добавление таба отдельному пользователю*/
/*var listUserOnline = document.querySelectorAll('.Active');
for (var i = 0; i < listUserOnline.length; i++) {  ////перебираем массив списка пользователей онлайн    
      listUserOnline[i].addEventListener('click', function(parentNode) {
        alert('После загрузки сайта пользователей онлайн    '+listUserOnline.length)
        tabs_button.innerHTML+= '<li class=\'tab \'><a hreff=""><span class="before"></span>&nbsp;&nbsp;<span class="person-chat" style="margin-left:10px;">Chat with '+parentNode+ '</span><span class="close">x</span></a></li>';
        tabs_widget.innerHTML += '<div class="target "></div>';*/
/*        var close = document.querySelectorAll('.close');
for (var i = 0; i < close.length; i++) {//перебрать массив кнопок
              close[i].addEventListener('click', function(e) {
                //alert(close.length);
                 this.parentNode.remove();                 
               })
            }*/
/*Добавление таба отдельному пользователю*/
/* TABS Добавление табам класса  активности*/
        /*var tabs = document.querySelectorAll('.tab');//получить массив кнопок с классом tab
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
          /* TABS Добавление табам класса  активности*/    
        /*})*/
      //})
    //}*/


/*Добавление табам класса  активности*/
       /* var tabs = document.querySelectorAll('.tab');//получить массив кнопок с классом tab
         var con = document.querySelectorAll('.target');//получить массив табов с классом target
            for (var i = 0; i < tabs.length; i++) {//перебрать массив кнопок
              tabs[i].addEventListener('click', function(e) {  // и при нажатии на кнопку
                for (var k = 0; k < tabs.length; k++) {//перебрать массив
                  if (this == tabs[k]) {//
                    con[k].classList.add('actively');//добавить класс активного
                    tabs[k].classList.add('active');//добавить класс активного
                  } 
                  else {
                    con[k].classList.remove('actively');//удалить класс активного
                    tabs[k].classList.remove('active');//удалить класс активного
                  }
                }
              })
            }*/
          /*Добавление табам класса  активности*/
/*************************************************************************************/

/*Добавление таба отдельному пользователю*/

/*var listUserOnline = document.querySelectorAll('.Active');
for (var i = 0; i < listUserOnline.length; i++) {  ////перебираем массив списка пользователей онлайн    
      listUserOnline[i].addEventListener('click', function() {
               alert('GGGGGGGGGGGGGGGGG')newTab();
      })
      }*/

/*Добавление таба отдельному пользователю*/

/*создание нового таба и таргета*/
/*function newTab() {
var blockTab = document.getElementById('tabs_widget');//получить доступ к блоку табов 

var blockTabInput = document.getElementById('tabs_button');//получить доступ к списку кнопок табов 
var newtab = document.createElement('li');  //  создать  новую кнопку
newtab.setAttribute('class','tab');  //   задать ей класс  

var liName = document.createElement('a');
newtab.setAttribute('class','nameUs');  //   задать ей класс  

var tabWigets = blockTab.getElementsByClassName('target');//получить массив табов
var newtabarea = document.createElement('div');  //  создать новый таб
newtabarea.setAttribute('class','target');//  задать ему класс*/  

/*blockTabInput.appendChild(newtab);
 blockTab.appendChild(newtabarea);*/
 /*for (var i = 0; i < blockTabInput.length; i++) {//еребрать массив кнопок табов
    blockTabInput.appendChild(newtab);
   alert(blockTabInput.length)
 }*/
/*for (var i = 0; i < blockTab.length; i++) {//еребрать массив кнопок табов
     blockTab.appendChild(newtabarea);
   //alert(blockTabInput.length)
 }*/



//var listUserOnline = document.querySelectorAll('.Active');
//alert('После загрузки сайта пользователей онлайн    '+listUserOnline.length)

//var listtab = blockTabInp.getElementsByClassName('tab');//получить все кнопки табов
//alert(listtab.length);




  //alert('кол-во пользователей онлайн    ' + listUsOnline.length)
  //for (var i = 0; i < listUserOnline.length; i++) {  ////перебираем массив списка пользователей онлайн    
      //listUserOnline[i].addEventListener('click', function(e) {  //и при нажатии на конкретного пользователя
      //alert(ul.childNodes.length)//alert(listUserOnline.length)       
        //alert('кол-во кнопок табов    ' + listtab.length);
        //for (var j = 0; j < listtab.length; j++) { //перебрать массив кнопок табов            
        //blockTabInp.appendChild(newtab);//вставить новую кнопку в список кнопок табов
      //}
       //alert('кол-во кнопок табов    ' + listtab.length);

       /* for (var i = 0; i < tabWigets.length; i++) {//перебрать массив табов  
        tabs_widget.appendChild(newtabarea);//вставить новый таб в div-родитель табов
      }
        alert('кол-во  табов    ' + listtab.length);*/       
  //})
  

        
       //tabs_button.innerHTML+= '<li  class=\'tab \'><a hreff=""><span class="before"></span>&nbsp;&nbsp;<span class="person-chat" style="margin-left:10px;">Chat with'+name+'...</span><span class="close">x</span></a></li>';     
        //tabs_widget.innerHTML += '<div class="target "></div>'; 
        
        /*var tabs = document.querySelectorAll('.tab');//получить массив кнопок с классом tab
         var con = document.querySelectorAll('.target');//получить массив табов с классом target
            for (var i = 0; i < tabs.length; i++) {//перебрать массив кнопок
              tabs[i].addEventListener('click', function(e) {  // и при нажатии на кнопку
                for (var k = 0; k < tabs.length; k++) {//перебрать массив
                  if (this == tabs[k]) {//
                    con[k].classList.add('actively');//добавить класс активного
                    tabs[k].classList.add('active');//добавить класс активного
                  } 
                  else {
                    con[k].classList.remove('actively');//удалить класс активного
                    tabs[k].classList.remove('active');//удалить класс активного
                  }
                }
              })
            }
*/
        //activeTab();
        //deleteTub();
      //}


      //function addUser(){
//data = users;//получить имя из поля ввода имени нового пользователя
/*var ul = document.getElementById('list');//массив списка пользователей онлайн
var li = document.createElement('li');//создать елемент для списка пользователей онлайн 
var a = document.createElement('a');//создать туг а для елемента списка пользователей онлайн
a.setAttribute('id','my_status');//задать идентификатор 
a.setAttribute('style','cursor:pointer');//и стили*/
//a.innerHTML = data;//вложить в тег а имя пользователя
var listLi = list.getElementsByTagName("li");// получить все теги li списка пользователей онлайн
//alert(listLi.length);
  for (var i = 0; i < listLi.length; i++) {  //перебираем массив списка пользователей онлайн
    /*li.setAttribute('id',[i]); //добавляемому li налету задаем идентификатор - порядковый в списке
    li.setAttribute('class','Active'); //добавляемому li задаем стили
    li.appendChild(a);//вкладываем а в li
    ul.appendChild(li);//li в список пользователей онлайн
                /*  вывод дополнительно таба
                    для нового пользователя при 
                    нажатии на его имя в списке онлай */  
         listLi[i].addEventListener('click', function(e) {  //и при нажатии на конкретного пользователя
        var listtab = document.getElementById('tabs_button');//получить все кнопки табов 
        var newtab = document.createElement('li');  //  создать  новую
        newtab.setAttribute('class','tab'); //   задать ей класс  
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
  })
}
//document.getElementById('form').reset();

/*Добавить пользователя в список онлайн на лету второй вариант*/

/*создание нового таба и таргета*/
/******************************************************************************************************************/
};// window.onload = function() AND



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

   
	    