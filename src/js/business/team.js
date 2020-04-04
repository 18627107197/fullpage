import qipaoObj from "../qipao/qipao.js"
export default function(){
var teamliNodes=document.querySelectorAll(".commonText, html body #app .content > .list > li.team > div > .team-3>.list>.item")
var oc=document.querySelector(".commonText, html body #app .content > .list > li.team > div > .team-3>.list>.box")
var team3Node=document.querySelector(".commonText, html body #app .content > .list > li.team > div > .team-3")
  teamliNodes.forEach((item,index)=>{
    var X=item.offsetWidth;
    item.style.backgroundPosition=(-index*X+"px") ,0
  })

  oc.width=teamliNodes[0].offsetWidth;
  oc.height=teamliNodes[0].offsetHeight;
  teamliNodes.forEach((item)=>{
    item.onmouseenter=function () {
      teamliNodes.forEach((item)=>{
        item.style.opacity=.5
      })
      this.style.opacity=1
      oc.style.display="block";
      oc.style.left=this.offsetLeft+"px";
      oc.style.top=this.offsetTop+100+"px";
      qipaoObj.qipaoFn(oc)

    }
  })
  team3Node.onmouseleave=function () {
    teamliNodes.forEach((item)=>{
      item.style.opacity=1
      oc.style.display="none"
      clearInterval(qipaoObj.intervalObj. timer1)
      clearInterval(qipaoObj.intervalObj. timer2)
    })
  }
}
