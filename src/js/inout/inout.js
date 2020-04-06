var homelist=document.querySelector("html body #app .content > .list >li.home>div>.home-list")
var homepoint=document.querySelector("html body #app .content > .list >li.home>div>.home-points")
var plan1Node=document.querySelector("#app .course .plane1 ");
var plan2Node=document.querySelector("#app .course .plane2 ");
var plan3Node=document.querySelector("#app .course .plane3 ");
var pencel1=document.querySelector("#app .works .pencel1")
var pencel2=document.querySelector("#app .works .pencel2")
var pencel3=document.querySelector("#app .works .pencel3")
var about3=document.querySelector("#app .about .about-3")
var about4=document.querySelector("#app .about .about-4")
var team1=document.querySelector("#app .team .team-1")
var team2=document.querySelector("#app .team .team-2")
export  default [
  {
    inAn(){
      homelist.style.transform="translateY(0px )"
      homepoint.style.transform="translateY(0px )"
      homelist.style.opacity=1
      homepoint.style.opacity=1
    },
    outAn(){
      homelist.style.transform="translateY(-200px)"
      homepoint.style.transform="translateY(200px)"
      homelist.style.opacity=0
      homepoint.style.opacity=0
    }
  },
  {
    inAn(){
      plan1Node.style.transform="translate(100px,100px )"
      plan2Node.style.transform="translate(100px,-100px )"
      plan3Node.style.transform="translate(-100px ,200px)"
    },
    outAn(){
      plan1Node.style.transform="translate(0px,0px )"
      plan2Node.style.transform="translate(0px,0px )"
      plan3Node.style.transform="translate(0px ,0px)"
  }
  },
  {
    inAn(){
      pencel1.style.transform="translateY(20px )"
      pencel2.style.transform="translateY(-20px )"
      pencel3.style.transform="translateY(-20px)"
    },
    outAn(){
      pencel1.style.transform="translateY(0px)"
      pencel2.style.transform="translateY(0px)"
      pencel3.style.transform="translateY(0px)"
    }
  },
  {
    inAn(){
      about3.style.transform="rotate(0deg)"
      about4.style.transform="rotate(0deg)"

    },
    outAn(){
      about3.style.transform="rotate(45deg)"
      about4.style.transform="rotate(-45deg)"
    }
  },
  {
    inAn(){
      team1.style.transform="translateX(0px)"
      team2.style.transform="translateX(0px)"

    },
    outAn(){
      team1.style.transform="translateX(-100px)"
      team2.style.transform="translateX(100px)"
    }
  }
]
