


let date = new Date();
let year = date.getFullYear();

console.log(year);

let leap = null;
let monthsLeapYear = null;
let months = null;
let isPending = false;
var dayFromModal ='';
var currentLocalStorageItem=null;


if ((year % 400 === 0 && year % 100 === 0) || year % 4 === 0) {
    console.log('leap year');
     monthsLeapYear = [
        ['January',31],['february',29],['march',31],['april',30],['may',31],['june',30],['july',31],
        ['august',31],['september',30],['october',31],['november',30],['december',31]
    ]

    let month = date.getMonth();
    leap = true
    console.log(month);
    console.log(leap)
}else{
    console.log('not leap year');

   

    monthsLeapYear[1][1] = 28

    leap = false

}




let month = date.getMonth();
let currentMonth;
let daysInMonth;

if (leap) {
     currentMonth = monthsLeapYear[month];
    daysInMonth = monthsLeapYear[month];

    console.log(currentMonth[0])
    console.log(daysInMonth[1])
}else{
     currentMonth =monthsLeapYear[month];
     daysInMonth = monthsLeapYear[month];

    console.log(currentMonth[0])
    console.log(daysInMonth[1])
}



// let currentMonth = months[month];
// let daysInMonth = months[month];

// console.log(currentMonth[0])
// console.log(daysInMonth[1])
 
// console.log(month);

var d;
var pendingTask;
var parent = document.querySelector('.calendar');
var modal = document.querySelector('.modal-class');
var close = document.querySelector('#close');
var remove;
var calendarTask
var body = document.querySelector('body');
console.log(body);

parent.addEventListener('click',displayModal);
close.addEventListener('click',closeModal);

var stringModalDate;
var dayModal;
var headerModal;
var childModal;

displayCalendar();

function displayCalendar(){
    //add month before calendar
    let month = getDate();
    console.log(month[0][1]);
    let calendarMonth=document.createElement('h1');
    calendarMonth.innerHTML=month[0][1];
    calendarMonth.id = 'mnth';
    console.log(calendarMonth)
    body.insertBefore(calendarMonth,body.childNodes[0]);
    
    for (let index = 1; index <= daysInMonth[1]; index++) {
        //  d = new Date(2020,0,index);
        //  var stringDate = d.toString();
        //  var arrDate = stringDate.split(' ');
        // console.log(arrDate[0],arrDate[1],arrDate[2],arrDate[3]);
        var arrDate = getDate(index);
        var child = document.createElement('div');
        child.className = 'days';
        var para = document.createElement('p');
        var day = document.createElement('p');
        var header = document.createElement('h3');
        pendingTask = document.createElement('p');
        pendingTask.className='pending';
        header.innerHTML = arrDate[0][0];
        para.innerHTML = arrDate[0][1];
        day.innerHTML = arrDate[0][2];
        
        console.log(arrDate[0][0])
       
        console.log(pendingTask);
        
    
        child.appendChild(header);
        // child.appendChild(para);
        child.appendChild(day);
       
            child.appendChild(pendingTask);
       
           
        console.log(isPending)
    
        console.log(child);
    
        parent.appendChild(child);
    
        checkPendingTask(day,pendingTask);  
    
       
    }


}



const task = document.querySelector('.list.list-group');


function displayModal(e){
    
    console.log(e);
    var newChild = e.target.lastChild.nodeValue;
    console.log(newChild);
    
    console.log(Number(newChild))
    
    if (Number(newChild)) {
    console.log(e.target.lastChild)
    console.log(newChild)
    console.log(year,month,newChild);
    
    // childModal.className = 'days';
    var modalDate = new Date(year,month,newChild);
    var stringModalDate = modalDate.toString();

     var arrModalDate = stringModalDate.split(' ');
    console.log(modalDate);

     dayModal = document.createElement('p');
     headerModal = document.createElement('h3');

     dayModal.className='modal-text';
     headerModal.className='modal-text';

    headerModal.innerHTML = arrModalDate[0];
    dayModal.innerHTML = arrModalDate[2];
    dayFromModal = arrModalDate[2];
    currentLocalStorageItem = arrModalDate[2];
    console.log(modal.children.length)
     
    if (modal.children.length <=4) {
        childModal = document.getElementById('segment');
        childModal.appendChild(headerModal); 
        childModal.appendChild(dayModal); 
        // let cal = document.getElementById('cal');  
        console.log(task)
        modal.insertBefore(childModal,modal.childNodes[0]); 
        

     console.log('hey');
    console.log(modal);

     calendarTask= newChild;

    console.log(calendarTask);

    getTasks(calendarTask);
  
  console.log(task);
          modal.style.visibility = 'visible';
        
  }
    
}
    

  console.log(e.target.firstChild);
 
  e.stopPropagation();
}




const form = document.querySelector('form');
  
const btn = document.querySelector('button');
  console.log(btn);

const text = document.querySelector('.form-control');
  console.log(text);
const clear = document.querySelector('.clear');
  console.log(clear);
const filter = document.querySelector('#form-filter');
  console.log(filter);
const closeTipButton = document.querySelector('#closeTip');
  
//   document.addEventListener('DOMContentLoaded',getTasks);
  form.addEventListener('submit',addList);
  task.addEventListener('click',removeTask);
  clear.addEventListener('click',clearTask);
  filter.addEventListener('keyup',filterTask);




console.log(task);


function addList(e){

    console.log(text.value);

    if (text.value === '') {
        alert('please insert a value');
        e.preventDefault(); 
        console.log('empty');
        return
    }


    const parentContainer = document.createElement('li');
          parentContainer.className = 'list-group-item';
          
          parentContainer.appendChild(document.createTextNode(text.value));

          var link = document.createElement('a');
          link.setAttribute('href','#')
          link.className = 'link pl-3';
          link.innerHTML = 'delete';
          parentContainer.appendChild(link);  
        
        //   let checkBox= document.createElement('input');
        //   checkBox.setAttribute('type','checkbox');
        //   checkBox.className ='check pl-4';

        //   parentContainer.appendChild(checkBox);

          task.appendChild(parentContainer);

          storeTaskInLocalStorage(text.value,calendarTask);
          console.log(task)
          console.log(calendarTask)
        

          text.value= '';
          
          
    
    
    e.preventDefault(); 
  }

function getTasks(calendarTask){
        let tasks;
        console.log(calendarTask);
        if (localStorage.getItem(calendarTask)===null) {
            tasks = [];  
        }else{
           tasks = JSON.parse(localStorage.getItem(calendarTask));
           isPending = true;
           
        }
        tasks.forEach(function(tt){
              const parentContainer = document.createElement('li');
              parentContainer.className = 'list-group-item';
              
              parentContainer.appendChild(document.createTextNode(tt));
  
              var link = document.createElement('a');
              link.setAttribute('href','#')
              link.className = 'link pl-3';
              link.innerHTML = 'delete';
              parentContainer.appendChild(link);      
  
              task.appendChild(parentContainer); 
        });
        

}

function storeTaskInLocalStorage(task,calendarTask){
        let tasks;
        if (localStorage.getItem(calendarTask)===null) {
            tasks = [];  
        }else{
           tasks = JSON.parse(localStorage.getItem(calendarTask));
        }

        tasks.push(task);

        localStorage.setItem(calendarTask,JSON.stringify(tasks));
} 


function removeTask(e){
      
     if (e.target.parentElement.classList.contains('list-group-item')) {
        console.log(e.target.parentElement);
        console.log(e.target.parentElement.textContent);
        console.log(e.target.className)
        if (e.target.className !=='check pl-4') {
            removeTaskFromLocalStorage(e.target.parentElement);
            e.target.parentElement.remove();
        }
       
       
     }
     
       
     e.preventDefault();
    
}



function removeTaskFromLocalStorage(taskItem){
  let tasks;
  console.log(taskItem);
  console.log(tasks);
  console.log(localStorage.getItem(currentLocalStorageItem));
  if (localStorage.getItem(currentLocalStorageItem)===null) {
      tasks = [];  
  }else{
     tasks = JSON.parse(localStorage.getItem(currentLocalStorageItem));
  }
  console.log(tasks)
  tasks.forEach(function(tt,index){
        console.log(tt);
        console.log(taskItem.textContent);
        tt += 'delete';
        console.log(tt);
       if (taskItem.textContent === tt) {
           tasks.splice(index,1);  
       }
       
  });
  localStorage.setItem(currentLocalStorageItem,JSON.stringify(tasks));
}



function clearTask(){
     //task.innerHTML = '';
     console.log(currentLocalStorageItem);
     while (task.firstChild) {
         task.removeChild(task.firstChild);
     }

     clearTaskFromLocalStorage(currentLocalStorageItem);
}

function clearTaskFromLocalStorage(currentLocalStorageItem){
      localStorage.removeItem(currentLocalStorageItem);
}


function filterTask(e){
  const texts = e.target.value.toLowerCase();
  console.log(texts)
  document.querySelectorAll('.list-group-item').forEach(
      function(tasks){
         const item = tasks.firstChild.textContent;
        if (item.toLowerCase().indexOf(texts)!=-1) {
            tasks.style.display = 'block';
        }else{
            tasks.style.display = 'none';
        }
  })
}



function closeModal(e){
    modal.style.visibility = 'hidden';

    let task = document.querySelector('.list');
    let list = document.getElementsByClassName('li');
    console.log(list);
    [...list].forEach(lists=>{
        task.removeChild(lists);
    })
   console.log(task)
    remove = 1;
    modal.removeChild(childModal);
   
    let pendingTask = document.querySelector('.pending')
    
    // checkPendingTask(dayFromModal);
    checkPendingTaskAfterClose(dayFromModal,pendingTask)
}

function checkPendingTask(day,pendingTask){
    console.log(day)
    console.log(localStorage.getItem(day))
    
    if (localStorage.getItem(day.innerHTML)!==null || localStorage.getItem(day)!==null) {
        console.log(pendingTask)
       pendingTask.innerHTML ='pending';
       pendingTask.style.display = 'block';
       pendingTask.style.color ='red'; 
       console.log('pending')
   
       
    }else{
        console.log(pendingTask)
       pendingTask.innerHTML ='pending';
       pendingTask.style.display = 'none';
       pendingTask.style.color ='red';
       console.log('not pending')
       
      
    }
}

function getDate(index=1){
    d = new Date(2020,1,index);
     var stringDate = d.toString();
     var arrDate = stringDate.split(' ');
    console.log(arrDate[0],arrDate[1],arrDate[2],arrDate[3]);
    return [arrDate,stringDate];
}

function checkPendingTaskAfterClose(day,pendingTask){
    console.log(day)
    console.log(localStorage.getItem(day))
    console.log(document.querySelector('.pending'))
    if (localStorage.getItem(day.innerHTML)!==null || localStorage.getItem(day)!==null) {
        console.log(pendingTask)
       pendingTask.innerHTML ='pending';
       pendingTask.style.display = 'block';
       pendingTask.style.color ='red'; 
       console.log('pending');


       document.querySelector('.calendar').style.display = 'none';
       document.querySelector('#loading').style.display = 'block';
       document.querySelector('.modal-class').style.display = 'none';
       setTimeout(displayLoader,2000);
       isPending = true;
       document.location.reload()
       
       
       
    }else{
        console.log(pendingTask)
       pendingTask.innerHTML ='pending';
       pendingTask.style.display = 'none';
       pendingTask.style.color ='red';
       console.log('not pending')
       setTimeout(displayLoader,2000);
       isPending = false;
       document.location.reload()
      
    }

    
}

function displayLoader(){

    document.querySelector('.calendar').style.display = 'visible';

    document.querySelector('#loading').style.display = 'none';

    
}






