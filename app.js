const taskTitle=document.getElementById('task-title')

// change styling
taskTitle.style.background='blue'
taskTitle.style.padding='10px'
taskTitle.style.color='#fff'

//change content
taskTitle.textContent='Task List'
taskTitle.innerText='My Task'
taskTitle.innerHTML='<span style="color:gray">Task</span>'

//Query Selector
document.querySelector('li').style.color='blue'
document.querySelector('ul li').style.color='red'
document.querySelector('li:last-child').style.color='blue'
document.querySelector('li:nth-child(3)').style.color='yellow'

document.querySelector('li:nth-child(even)').style.background='green'
document.querySelector('li:nth-child(odd)').textContent='gray'





