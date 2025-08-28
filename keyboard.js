const buttons = ["A","B","C","Ç","D","E","F","G","Ğ","H","I","J","K","L","M","N","O","Ö","P","R","S","Ş","T","U","Ü"
    ,"V","Y","Z","W","X","Q","a","b","c","ç","d","e","f","g","ğ","h","ı","j","k","l","m","n","o","ö","p","r","s","ş","t","u","ü"
    ,"v","y","z","w","x","q",]  //buttons //  

let result = ""; //Keyboard Section Start //  
                        //KeyDown//
document.addEventListener("keydown", function(e){
    e.preventDefault();
    console.log("Key:" + e.key + " Code:" + e.code);
    let button = e.key;
if (["Tab","Shift","Control","Meta","Alt","i","IntlBackslash","Slash"].includes(e.key)){
        let newButton = e.code;
        document.getElementById(newButton).style.backgroundColor = "#0b2549";
        }
    else if(buttons.includes(button)){
        button = e.key.toLocaleLowerCase('tr-TR');
        document.getElementById("key-" + button).style.backgroundColor = "#0b2549";
        }
    else{
        let specialButton = e.code;
        document.getElementById(specialButton).style.backgroundColor = "#0b2549";
        }      
    });
                          //KeyUP// 
document.addEventListener("keyup", function(e){
    e.preventDefault();
    console.log("Key:" + e.key + " Code:" + e.code);
    let button = e.key;
    if (["Tab","Shift","Control","Meta","Alt","i","IntlBackslash","Slash"].includes(e.key)){  
        let newButton = e.code;
        document.getElementById(newButton).style.backgroundColor = "#5380b1";
        }

    else if(buttons.includes(button)){
        button = e.key.toLocaleLowerCase('tr-TR');
        document.getElementById("key-" + button).style.backgroundColor = "#5380b1";
        }

    else{
        let specialButton = e.code;
        document.getElementById(specialButton).style.backgroundColor = "#5380b1";
        }  
    result += "<" + e.code + ">   ";
    let area = document.getElementById("btn-Area");
    area.innerText = result;
    area.scrollLeft = area.scrollWidth;
    });  //Keyboard Section End //    
        //MouseSection Start //  //MouseDown//
document.addEventListener("mousedown", function(e){
    e.preventDefault();
    switch(e.button){
        case 0:
            document.getElementById("leftClick").style.backgroundColor = "#0b2549";
            break;
        case 1:
            document.getElementById("mouseWheel").style.backgroundColor = "#0b2549";
            break;
        case 2:
            document.getElementById("rightClick").style.backgroundColor = "#0b2549";  
            break;          
    }
})
                            //MouseUp//
document.addEventListener("mouseup", function(e){
    e.preventDefault();
    switch(e.button){
        case 0:
            document.getElementById("leftClick").style.backgroundColor = "#5380b1";
            break;
        case 1:
            document.getElementById("mouseWheel").style.backgroundColor = "#5380b1";
            break;
        case 2:
            document.getElementById("rightClick").style.backgroundColor = "#5380b1";  
            break;}

        let buttonResult = (e.button ===  0 ? "Left Click" : e.button === 1 ? "Middle Click" : "Right Click");
        result += "<" +buttonResult+">   "
        let area = document.getElementById("btn-Area");
        area.innerText = result;
        area.scrollLeft = area.scrollWidth;
})
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
});  //MouseSection End // 




//  There is a problem about AltGR //