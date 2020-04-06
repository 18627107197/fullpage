import inOut from "../../inout/inout.js"
var preIndex=0;
export default function(index){
  var liNodes=document.querySelectorAll( "html body #app .head .headerMain .list .item");
  var arrowNode=document.querySelector("html body #app .head .headerMain .arrow")
  var contentNode=document.querySelector("html body #app .content ");
  var listNode=document.querySelector("html body #app .content .list");
  var pointsLiNodes=document.querySelectorAll("html body #app .content .points li");
  inOut[index].inAn();
  inOut[preIndex].outAn();
  contentNode.index=index
  for (var j=0;j<liNodes.length;j++){
    liNodes[j].classList.remove("active")
    pointsLiNodes[j].classList.remove("active")
  }
  liNodes[index].classList.add("active");
  pointsLiNodes[index].classList.add("active");

  arrowNode.style.left=(liNodes[index].offsetLeft+(liNodes[index].offsetWidth/2)-(arrowNode.offsetWidth/2))+"px"

  listNode.style.top=`${-(index*contentNode.offsetHeight)}px`
  preIndex=index;
}

