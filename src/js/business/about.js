
function create (){
  var ulNodes=document.querySelectorAll("html body #app .content > .list > li.about > div > .box>ul")

  ulNodes.forEach((item)=>{
    for(var i=0;i<4;i++){
      var liNode=document.createElement("li")
      var img=document.createElement("img")

      var w= item.offsetWidth/2;
      var h= item.offsetHeight/2;
      img.src=item.dataset.src;
      liNode.style.width=`${w}px`
      liNode.style.height=`${h}px`
      img.style.left=`${-(i%2)*w}px`
      img.style.top=`${-Math.floor(i/2)*h}px`
      item.appendChild(liNode)
      liNode.appendChild(img)
    }


  })
}
export default function () {
  create ();
  var boxNodes=document.querySelectorAll("html body #app .content > .list > li.about > div > .box")
  boxNodes.forEach((item)=>{
    item.onmouseenter=function(){
     var imgNodes=this.querySelectorAll("ul>li>img")
     var ulNode=this.querySelector("ul")
      var w= ulNode.offsetWidth/2;
      var h= ulNode.offsetHeight/2;
      imgNodes.forEach((item,index)=>{
       switch (index) {
         case 0: item.style.top=`${h}px`
           break;
         case 1:item.style.left=`${-2*w}px`
           break;
         case 2: item.style.left=`${w}px`
           break;
         case 3:item.style.top=`${-2*h}px`
           break;
       }
      })
    }
    item.onmouseleave=function () {
      var imgNodes=this.querySelectorAll("ul>li>img")
      var ulNode=this.querySelector("ul")
      var w= ulNode.offsetWidth/2;
      var h= ulNode.offsetHeight/2;
      imgNodes.forEach((item,index)=>{
        switch (index) {
          case 0: item.style.top=`${0}px`
            break;
          case 1:item.style.left=`${-w}px`
            break;
          case 2: item.style.left=`${0}px`
            break;
          case 3:item.style.top=`${-h}px`
            break;
        }
      })
    }
  })


}
