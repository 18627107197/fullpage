import "@babel/polyfill"
import "./business/about.js"
import "./business/course.js"
import "./business/home.js"
import "./business/team.js"
import "./business/works.js"
import "./frame/frame.js"

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

