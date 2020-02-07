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

     months = [
        ['January',31],['february',28],['march',31],['april',30],['may',31],['june',30],['july',31],
        ['august',31],['september',30],['october',31],['november',30],['december',31]
    ]

    leap = false

    if (leap) {
        let currentMonth = monthsLeapYear[month];
        let daysInMonth = monthsLeapYear[month];
    }else{
        let currentMonth = months[month];
        let daysInMonth = months[month];
    }

    let month = date.getMonth();
  

    let currentMonth = months[month];
    let daysInMonth = months[month];

    console.log(currentMonth[0])
    console.log(daysInMonth[1])
     
    console.log(month);
    
    var d;

    var parent = document.querySelector('.calendar');
    var modal = document.querySelector('.modal-class');
    var close = document.querySelector('#close');
    var remove;


    parent.addEventListener('click',displayModal);
    close.addEventListener('click',closeModal);
    
    var stringModalDate;
    var dayModal;
    var headerModal;
    var childModal;

    for (let index = 1; index <= daysInMonth[1]; index++) {
//          d = new Date(2019,10,index);
//          var stringDate = d.toString();
//          var arrDate = stringDate.split(' ');
//         console.log(arrDate[0],arrDate[1],arrDate[2],arrDate[3]);
//         var child = document.createElement('div');
//         child.className = 'days';
//         var para = document.createElement('p');
//         var day = document.createElement('p');
//         var header = document.createElement('h3');
//         header.innerHTML = arrDate[0];
//         para.innerHTML = arrDate[1];
//         day.innerHTML = arrDate[2];

//         child.appendChild(header);
//         // child.appendChild(para);
//         child.appendChild(day);

//         console.log(child);

//         parent.appendChild(child);

//         let days = arrDate[2];
//         let dates = stringDate;

//         console.log(days);
//         console.log(dates);

//         //saving dates to db
//         // fetch('http://localhost:3000/days', {
//         //     method: 'POST',
//         //     headers : new Headers(),
//         //     body:JSON.stringify({day:days, date:dates})
//         // }).then((res) => res.json())
//         // .then((data) =>  console.log(data))
//         // .catch((err)=>console.log(err))
//         var accountData = {
//             'days'      : days,
//             'dates'     : dates,
           
//         };


//         setInterval(function(){
//             $.ajax({
//                 type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
//                 url         : 'http://localhost:3000/days', // the url where we want to POST
//                 data        :  accountData, // our data object
//                 dataType    : 'json', // what type of data do we expect back from the server
//                 encode          : true
//             }).done(function(data) {
    
//             })
//         },1000)

        
        
        
        
//     }


//     function displayModal(e){
        
//         console.log(e);
//         var newChild = e.target.lastChild.nodeValue;
//         if (newChild) {
//         console.log(e.target.lastChild)
//         console.log(newChild)
//         console.log(year,month,newChild);
        
//         // childModal.className = 'days';
//         var modalDate = new Date(year,month,newChild);
//         var stringModalDate = modalDate.toString();

//          var arrModalDate = stringModalDate.split(' ');
//         console.log(modalDate);

//          dayModal = document.createElement('p');
//          headerModal = document.createElement('h3');

//         headerModal.innerHTML = arrModalDate[0];
//         dayModal.innerHTML = arrModalDate[2];
//         console.log(modal.children.length)
         
//         if (modal.children.length <=4) {
//             childModal = document.createElement('div');
//             childModal.appendChild(headerModal); 
//             childModal.appendChild(dayModal);   

//             modal.appendChild(childModal); 
//             if (remove=== 1) {
//                 let task = document.querySelector('.list');
//                 let list = document.getElementsByClassName('li');
//                 console.log(list);
//                 [...list].forEach(lists=>{
//                     task.removeChild(lists);
//                 })
//                 //remove=0;
                
//             }

//          console.log('hey');
//         console.log(modal);

//         var calendarTask= newChild;

//         console.log(calendarTask);

// const task = document.querySelector('.list');
      
//       console.log(task);
// const form = document.querySelector('form');
      
// const btn = document.querySelector('button');
//       console.log(btn);

// const text = document.querySelector('.form-control');
//       console.log(text);
// const clear = document.querySelector('.clear');
//       console.log(clear);
// const filter = document.querySelector('.form-filter');
//       console.log(filter);
      
//     //   document.addEventListener('DOMContentLoaded',getTasks);
//       form.addEventListener('submit',addList);
//       task.addEventListener('click',removeTask);
//       clear.addEventListener('click',clearTask);
//       filter.addEventListener('keyup',filterTask);


//       getTasks();

//       function addList(e){


//         if (text.value === '') {
//             alert('please insert a value');
            
//         }else{
//         const parentContainer = document.createElement('li');
//               parentContainer.className = 'li';
              
//               parentContainer.appendChild(document.createTextNode(text.value));

//               var link = document.createElement('a');
//               link.setAttribute('href','#')
//               link.className = 'link pl-3';
//               link.innerHTML = 'delete';
//               parentContainer.appendChild(link);      

//               task.appendChild(parentContainer);
//               storeTaskInLocalStorage(text.value);


//               //save to DB
//               fetch('http://localhost:3000/tasks', {
//                 method: 'POST',
//                 headers : new Headers(),
//                 body:JSON.stringify({tittle:tittle, body:body})
//             }).then((res) => res.json())
//             .then((data) =>  console.log(data))
//             .catch((err)=>console.log(err))

//               text.value= '';
              
              
//         }
         
//         e.preventDefault(); 
//       }

//       function getTasks(){
//             // let tasks;
//             // console.log(calendarTask);
//             // if (localStorage.getItem(calendarTask)===null) {
//             //     tasks = [];  
//             // }else{
//             //    tasks = JSON.parse(localStorage.getItem(calendarTask));
//             // }
//             // tasks.forEach(function(tt){
//             //       const parentContainer = document.createElement('li');
//             //       parentContainer.className = 'li';
                  
//             //       parentContainer.appendChild(document.createTextNode(tt));
      
//             //       var link = document.createElement('a');
//             //       link.setAttribute('href','#')
//             //       link.className = 'link pl-3';
//             //       link.innerHTML = 'delete';
//             //       parentContainer.appendChild(link);      
      
//             //       task.appendChild(parentContainer); 
//             // });
            

        
//             fetch('http://localhost:3000/tasks?_expand=days')
//             .then(res=>{
//                 // console.log(res.json());
//                 return res.json();
//             }).then(data=>{
//                 // console.log(data[0].task);
//                 data.forEach(list=>{
//                     console.log(list.task);

//                 const parentContainer = document.createElement('li');
//                   parentContainer.className = 'li';
                  
//                   parentContainer.appendChild(document.createTextNode(list.task));
      
//                   var link = document.createElement('a');
//                   link.setAttribute('href','#')
//                   link.className = 'link pl-3';
//                   link.innerHTML = 'delete';
//                   parentContainer.appendChild(link);      
      
//                   task.appendChild(parentContainer); 
//                 })
//             })
 
//       }

//       function storeTaskInLocalStorage(task){
//             let tasks;
//             if (localStorage.getItem(calendarTask)===null) {
//                 tasks = [];  
//             }else{
//                tasks = JSON.parse(localStorage.getItem(calendarTask));
//             }

//             tasks.push(task);

//             localStorage.setItem(calendarTask,JSON.stringify(tasks));
//       } 

//     function removeTask(e){
          
//          if (e.target.parentElement.classList.contains('li')) {
//             console.log(e.target.parentElement);
//             console.log(e.target.parentElement.textContent);
//             removeTaskFromLocalStorage(e.target.parentElement);
//             e.target.parentElement.remove();
           
//          }
         
           
//          e.preventDefault();
        
//     }

//     function removeTaskFromLocalStorage(taskItem){
//       let tasks;
//       console.log(taskItem);
//       if (localStorage.getItem('tasks')===null) {
//           tasks = [];  
//       }else{
//          tasks = JSON.parse(localStorage.getItem('tasks'));
//       }
//       tasks.forEach(function(tt,index){
//             console.log(tt);
//             console.log(taskItem.textContent);
//             tt += 'delete';
//             console.log(tt);
//            if (taskItem.textContent === tt) {
//                tasks.splice(index,1);  
//            }
           
//       });
//       localStorage.setItem('tasks',JSON.stringify(tasks));
//     }
//     function clearTask(){
//          //task.innerHTML = '';

//          while (task.firstChild) {
//              task.removeChild(task.firstChild);
//          }

//          clearTaskFromLocalStorage();
//     }

//     function clearTaskFromLocalStorage(){
//           localStorage.clear();
//     }
function filterTask(e){
      const texts = e.target.value.toLowerCase();

      document.querySelectorAll('.li').forEach(
          function(tasks){
             const item = tasks.firstChild.textContent;
            if (item.toLowerCase().indexOf(texts)!=-1) {
                tasks.style.display = 'block';
            }else{
                tasks.style.display = 'none';
            }
      })
}

//             modal.style.visibility = 'visible';
            
//         }
        
//         }
        

//       console.log(e.target.firstChild);
     
//       e.stopPropagation();
}


//     //close modal

//     function closeModal(e){
//         modal.style.visibility = 'hidden';

//         remove = 1;
//         modal.removeChild(childModal);
//     }
}


//to do list logic
// var calendarTask= dayModal;

// const task = document.querySelector('.list');
      
//       console.log(task);
// const form = document.querySelector('form');
      
// const btn = document.querySelector('button');
//       console.log(btn);

// const text = document.querySelector('.form-control');
//       console.log(text);
// const clear = document.querySelector('.clear');
//       console.log(clear);
// const filter = document.querySelector('.form-filter');
//       console.log(filter);
      
//       document.addEventListener('DOMContentLoaded',getTasks);
//       form.addEventListener('submit',addList);
//       task.addEventListener('click',removeTask);
//       clear.addEventListener('click',clearTask);
//       filter.addEventListener('keyup',filterTask);

//       function addList(e){


//         if (text.value === '') {
//             alert('please insert a value');
            
//         }else{
//         const parentContainer = document.createElement('li');
//               parentContainer.className = 'li';
              
//               parentContainer.appendChild(document.createTextNode(text.value));

//               var link = document.createElement('a');
//               link.setAttribute('href','#')
//               link.className = 'link pl-3';
//               link.innerHTML = 'delete';
//               parentContainer.appendChild(link);      

//               task.appendChild(parentContainer);
//               storeTaskInLocalStorage(text.value);

//               text.value= '';
              
              
//         }
         
//         e.preventDefault(); 
//       }

//       function getTasks(){
//             let tasks;
//             if (localStorage.getItem(calendarTask)===null) {
//                 tasks = [];  
//             }else{
//                tasks = JSON.parse(localStorage.getItem(calendarTask));
//             }
//             tasks.forEach(function(tt){
//                   const parentContainer = document.createElement('li');
//                   parentContainer.className = 'li';
                  
//                   parentContainer.appendChild(document.createTextNode(tt));
      
//                   var link = document.createElement('a');
//                   link.setAttribute('href','#')
//                   link.className = 'link pl-3';
//                   link.innerHTML = 'delete';
//                   parentContainer.appendChild(link);      
      
//                   task.appendChild(parentContainer); 
//             });
            
 
//       }

//       function storeTaskInLocalStorage(task){
//             let tasks;
//             if (localStorage.getItem(calendarTask)===null) {
//                 tasks = [];  
//             }else{
//                tasks = JSON.parse(localStorage.getItem(calendarTask));
//             }

//             tasks.push(task);

//             localStorage.setItem(calendarTask,JSON.stringify(tasks));
//       } 

//     function removeTask(e){
          
//          if (e.target.parentElement.classList.contains('li')) {
//             console.log(e.target.parentElement);
//             console.log(e.target.parentElement.textContent);
//             removeTaskFromLocalStorage(e.target.parentElement);
//             e.target.parentElement.remove();
           
//          }
         
           
//          e.preventDefault();
        
//     }

//     function removeTaskFromLocalStorage(taskItem){
//       let tasks;
//       console.log(taskItem);
//       if (localStorage.getItem('tasks')===null) {
//           tasks = [];  
//       }else{
//          tasks = JSON.parse(localStorage.getItem('tasks'));
//       }
//       tasks.forEach(function(tt,index){
//             console.log(tt);
//             console.log(taskItem.textContent);
//             tt += 'delete';
//             console.log(tt);
//            if (taskItem.textContent === tt) {
//                tasks.splice(index,1);  
//            }
           
//       });
//       localStorage.setItem('tasks',JSON.stringify(tasks));
//     }
//     function clearTask(){
//          //task.innerHTML = '';

//          while (task.firstChild) {
//              task.removeChild(task.firstChild);
//          }

//          clearTaskFromLocalStorage();
//     }

//     function clearTaskFromLocalStorage(){
//           localStorage.clear();
//     }
//     function filterTask(e){
//       const texts = e.target.value.toLowerCase();

//       document.querySelectorAll('.li').forEach(
//           function(tasks){
//              const item = tasks.firstChild.textContent;
//             if (item.toLowerCase().indexOf(texts)!=-1) {
//                 tasks.style.display = 'block';
//             }else{
//                 tasks.style.display = 'none';
//             }
//       })
//     }

let month = date.getMonth();
let currentMonth;
let daysInMonth;

if (leap) {
     currentMonth = monthsLeapYear[month];
    daysInMonth = monthsLeapYear[month];

    console.log(currentMonth[0])
    console.log(daysInMonth[1])
}else{
     currentMonth = months[month];
     daysInMonth = months[month];

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

parent.addEventListener('click',displayModal);
close.addEventListener('click',closeModal);

var stringModalDate;
var dayModal;
var headerModal;
var childModal;

displayCalendar();

function displayCalendar(){
    
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
    if (newChild) {
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
        
          let checkBox= document.createElement('input');
          checkBox.setAttribute('type','checkbox');
          checkBox.className ='check pl-4';

          parentContainer.appendChild(checkBox);

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
        

    
        // fetch('http://localhost:3000/tasks?_expand=days')
        // .then(res=>{
        //     // console.log(res.json());
        //     return res.json();
        // }).then(data=>{
        //     // console.log(data[0].task);
        //     data.forEach(list=>{
        //         console.log(list.task);

        //     const parentContainer = document.createElement('li');
        //       parentContainer.className = 'li';
              
        //       parentContainer.appendChild(document.createTextNode(list.task));
  
        //       var link = document.createElement('a');
        //       link.setAttribute('href','#')
        //       link.className = 'link pl-3';
        //       link.innerHTML = 'delete';
        //       parentContainer.appendChild(link);      
  
        //       task.appendChild(parentContainer); 
        //     })
        // })

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

function getDate(index){
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
       isPending = false;
       document.location.reload()
      
    }

    
}

function displayLoader(){

    document.querySelector('.calendar').style.display = 'visible';

    document.querySelector('#loading').style.display = 'none';

    
}




