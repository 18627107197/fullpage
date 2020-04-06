import inOut from "../inout/inout.js"
import  homeFn from "../business/home.js"
export default function () {
var upNode=document.querySelector("#app > .mask .up")
var downNode=document.querySelector("#app > .mask .down")
var lineNode=document.querySelector("#app > .mask .line")
var maskNode=document.querySelector("#app > .mask")
  setTimeout(()=>{
    lineNode.style.width="100%";
  },1000)
  lineNode.addEventListener("transitionend",()=> {

      upNode.style.height="0px";
      downNode.style.height="0px";
      lineNode.style.display="none";
  })
  upNode.addEventListener("transitionend",()=> {
    maskNode.remove()
    inOut[0].inAn()
    homeFn();
  })
}
