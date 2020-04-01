const LeftHide="leftHide";
const RightShow="rightShow";
const LeftShow="leftShow";
const RightHide="rightHide";
var faceNodes=document.querySelectorAll("html body #app .content > .list > li.home > div > ul.home-list> .home-item")
var pointsNodes=document.querySelectorAll("html body #app .content > .list > li.home > div > ul.home-points> .point")
var contentNode=document.querySelector("html body #app .content")
var atuoIndex=0;
var timer=0;
var oldIndex=0;
function clear(node) {
  node.classList.remove(LeftHide)
  node.classList.remove(RightShow)
  node.classList.remove(LeftShow)
  node.classList.remove(RightHide)
}
function autoMove(){
  clearInterval(timer)
  timer=setInterval(()=>{
    atuoIndex++
    if(atuoIndex===faceNodes.length){
      atuoIndex=0;
    }
    clear(faceNodes[oldIndex]);
    clear(faceNodes[atuoIndex]);
    faceNodes[atuoIndex].classList.add(RightShow)
    faceNodes[oldIndex].classList.add(LeftHide)
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
       faceNodes[this.index].classList.add(RightShow)
       faceNodes[oldIndex].classList.add(LeftHide)
     }
      if(this.index < oldIndex){
        faceNodes[this.index].classList.add(LeftShow)
        faceNodes[oldIndex].classList.add(RightHide)
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
