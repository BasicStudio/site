window.location = "https://basicstudio.github.io/site/index.html";

//post(content, postTo)

var def = "output";

//intro

post("<h3>"+"Welcome to the Dont Mention It project"+"</h3>", def);
post("<small>"+"The goal of this project is to help others get what they need"+"</small>", def);

//post("<small>"+""+"</small>")

post("<small>"+"Etheir that be key files or software i am here to help!"+"</small>", def);
post("<small>"+"You can contact me through discord <b>Javascriptgold#8252</b>"+"</small>", def);

//Other

function toggleDiv(){
  document.getElementById("output").style.display = "block";
}

addEventListener("keydown", function(e){
  if(e.keyCode == 190){
    
  }
});
