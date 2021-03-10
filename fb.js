var add_button=document.querySelector('#Add_button');
var clear_button=document.querySelector('#Clear_button');
var fn=document.querySelector('#fn');
var mn=document.querySelector('#mn');
var ln=document.querySelector('#ln');
var feedback=document.querySelector('#feed');
var gender=document.getElementsByName('gender');
var feedback_list_container=document.querySelector('#msg_list');
var item_count=0;
add_button.addEventListener('click',()=>{
    feedback_list_manage();
});
function feedback_list_manage(){
    if(item_count>=5)
    {
        feedback_list_container.lastElementChild.remove();
        item_count--;
        feedback_list_manage();
    }else{
        if(fn.value=="" || fn.value.length>40){
            alert('firstname should not empty or greater than 40 characters');
        }else{
            if(ln.value=="" || ln.value.length>40){
                alert('lastname should not empty or greater than 40 characters');
            }else{
                if(feed.value==""){
                    alert('Feeback should not empty');
                }else{
                    if(!gender[0].checked && !gender[1].checked){
                        alert('gender is mandatory');
                    }else{
                        var item=document.createElement('div');
                        item.className="items";
                        var name=document.createElement('p');
                        name.id="fetch_name";
                        var gen='';
                        gen=gender[0].checked ? "Mr. " : "Ms. ";
                        name.innerHTML=gen+fn.value+" "+mn.value+" "+ln.value;
                        var date=document.createElement('p');
                        date.id="fetch_date";
                        var localdate= new Date();
                        date.innerHTML= localdate.getDate()+"/"+localdate.getMonth()+"/"+localdate.getFullYear();
                        var msg=document.createElement('p');
                        msg.id="fetch_msg";
                        msg.innerHTML=feedback.value;
                        item.appendChild(name);
                        item.appendChild(date);
                        item.appendChild(msg);
                        feedback_list_container.prepend(item);
                        item_count++;
                     }
                }
            }
        }
    }
}

clear_button.addEventListener('click',()=>{
    var lastele=feedback_list_container.lastElementChild;
    while(lastele)
    {
        lastele.remove();
        lastele=feedback_list_container.lastElementChild;
    }
    item_count=0;
});