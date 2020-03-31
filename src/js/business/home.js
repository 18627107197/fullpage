var faceNodes=document.querySelectorAll("html body #app .content > .list > li.home > div > ul.home-list> .home-item")
var pointsNodes=document.querySelectorAll("html body #app .content > .list > li.home > div > ul.home-points> .point")
var contentNode=document.querySelector("html body #app .content")
var atuoIndex=0;
var timer=0;
var oldIndex=0;
function clear(node) {
  node.classList.remove("leftHide")
  node.classList.remove("rightShow")
  node.classList.remove("leftShow")
  node.classList.remove("rightHide")
}
function autoMove(){
  clearInterval(timer)
  timer=setInterval(()=>{
    atuoIndex++
    if(atuoIndex===4){
      atuoIndex=0;
    }
    clear(faceNodes[oldIndex]);
    clear(faceNodes[atuoIndex]);
    faceNodes[atuoIndex].classList.add("rightShow")
    faceNodes[oldIndex].classList.add("leftHide")
    oldIndex=atuoIndex
  },2000)

}
export default function () {
  autoMove();
  pointsNodes.forEach((item,index)=>{
    item.index=index;
    item.onclick=function(){
      clearInterval(timer)
      clear(faceNodes[this.index])
      clear(faceNodes[oldIndex])
     if(this.index===oldIndex){
       return;
     }
     if(this.index > oldIndex){
       faceNodes[this.index].classList.add("rightShow")
       faceNodes[oldIndex].classList.add("leftHide")
     }
      if(this.index < oldIndex){
        faceNodes[this.index].classList.add("leftShow")
        faceNodes[oldIndex].classList.add("rightHide")
      }
      oldIndex=this.index;
      atuoIndex=this.index;
      pointsNodes.forEach((item,index)=>{
        item.classList.remove("active")
      })
      pointsNodes[this.index].classList.add("active")
    }
  })

  contentNode.onmouseleave=()=> {
    autoMove();
  }

    contentNode.onmouseenter=()=> {
      clearInterval(timer);
    }


}
