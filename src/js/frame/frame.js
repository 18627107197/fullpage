import move from "./move/move.js"
import callback from "./wheel/callback.js";
window.onload=function () {
  var liNodes=document.querySelectorAll( "html body #app .head .headerMain .list .item");
  var arrowNode=document.querySelector("html body #app .head .headerMain .arrow")
  var contentLiNodes=document.querySelectorAll("html body #app .content >.list >li");
  var contentNode=document.querySelector("html body #app .content ");
  var listNode=document.querySelector("html body #app .content >.list");
  var pointsLiNodes=document.querySelectorAll("html body #app .content .points li");
  arrowNode.style.left=(liNodes[0].offsetLeft+(liNodes[0].offsetWidth/2)-(arrowNode.offsetWidth/2))+"px"
  move(2)
  for (var i=0;i<liNodes.length;i++){
      liNodes[i].index=i
    pointsLiNodes[i].index=i
      liNodes[i].onclick=pointsLiNodes[i].onclick=function(){
        move(this.index)
      }
  }


  contentLiNodes.forEach((li)=>{
         li.style.height=(contentNode.offsetHeight)+"px";

  })


  contentNode.index=0
  var timer=0
 if(contentNode.addEventListener){
   contentNode.addEventListener("DOMMouseScroll",(event)=>{
      clearTimeout(timer);
     timer = setTimeout(()=>{
               callback(event,contentNode.index)
             },70)


   })

 }
   contentNode.onmousewheel=(event)=>{
             clearTimeout(timer);
       timer=setTimeout(()=>{
             callback(event,contentNode.index)
            },70)

   }

}

