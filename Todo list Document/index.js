let taskInput = document.getElementById('task');
        let formInput = document.querySelector('#form');
        let ol = document.querySelector('ol');

        formInput.addEventListener('submit' , function (e){
            e.preventDefault()
            let taskvalue = taskInput.value;
            if (taskvalue){
            let li = document.createElement('li');
            li.setAttribute('class', 'list-group-item mt-3')
            li.innerText= taskvalue;
            let btn = document.createElement('button') ;
            btn.setAttribute('class', 'btn-danger float-end')
            btn.innerText= 'Delete';
            li.append(btn)
            ol.append(li)
            taskInput.value= ''
            btn.addEventListener('click',function(element){
                if(confirm('Are you sure you want to delete')){
                    element.target.parentElement.remove()
                }
            })

            }
            else{
                alert('Please enter a task')
            }
        })