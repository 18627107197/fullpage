import "@babel/polyfill"
import aboutFn from "./business/about.js"
import  teamFn from"./business/team.js"
import "./business/works.js"
import  frameFn from"./frame/frame.js"
import qipaoFn from "./qipao/qipao.js";
import maskFn from "./mask/mask.js";
window.onload=function () {
  frameFn();
  aboutFn();
  teamFn();
  maskFn();
}
window.onresize= ()=> {
  var contentLiNodes=document.querySelectorAll("html body #app .content >.list >li");
  var contentNode=document.querySelector("html body #app .content ");
  var arrowNode=document.querySelector("html body #app .head .headerMain .arrow")
  var liNodes=document.querySelectorAll( "html body #app .head .headerMain .list .item");
  contentLiNodes.forEach((li)=>{
    li.style.height=(contentNode.offsetHeight)+"px";
  })
  arrowNode.style.left=(liNodes[0].offsetLeft+(liNodes[0].offsetWidth/2)-(arrowNode.offsetWidth/2))+"px"
}

