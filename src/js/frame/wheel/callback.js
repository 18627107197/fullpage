import move from "../move/move.js"
export default function (ev,index) {
         ev=ev||event
  var pointsLiNodes=document.querySelectorAll("html body #app .content .points li");
  var contentNode=document.querySelector("html body #app .content ");
        var dir=""
        if(ev.wheelDelta&&ev.wheelDelta>0){
          dir="up"
        }else if(ev.wheelDelta&&ev.wheelDelta<0){
          dir="down"
        }
        if(ev.detail&&ev.detail>0){
          dir="down"
        }else if(ev.detail&&ev.detail<0){
          dir="up"
        }
  switch (dir) {
    case "up": index>0?index--:0;
       move(index)
      break;
    case "down": index<pointsLiNodes.length-1?index++:pointsLiNodes.length-1;
    move(index)
      break;
  }
  contentNode.index=index

}
