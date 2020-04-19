document.getElementById('nav').onmouseover = function(event){ 
    var target = event.target;
    if (target.className == 'menu-item'){   
        var s = target.getElementsByClassName('submenu');   
        closeMenu();   
        s[0].style.display='block';
    } 
} 

document.getElementById('nav').onmouseout = function(){
    closeMenu();
}

function closeMenu(){    
    var subm = document.getElementsByClassName('submenu');  
    for (var i = 0; i < subm.length; i++){   
        subm[i].style.display ="none";  
    } 
}
 