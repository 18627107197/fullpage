var intervalObj={
  timer1:0,
  timer2:0
}
export default {
  intervalObj,
  qipaoFn: function (oc) {
  clearInterval(intervalObj. timer1);
  clearInterval(intervalObj. timer2);
  var ctx=oc.getContext("2d")
  var arr=[];
    intervalObj. timer1=setInterval(()=>{
    var deg=0
    var radius=6;
    var a=1
    var x =Math.round(Math.random()*oc.width);
    var y=oc.height-radius;
    var startX=x;
    var startY=y;
    var r=Math.round(Math.random()*255)
    var g=Math.round(Math.random()*255)
    var b=Math.round(Math.random()*255)
    var stepX=Math.round(Math.random()*40)+10
    var stepY=Math.round(Math.random()*50)+10
    arr.push({
      x,
      y,
      startX,
      startY,
      radius,
      stepX,
      stepY,
      r,
      g,
      b,
      a,
      deg
    })
  },50)
    intervalObj. timer2=setInterval(()=>{
    ctx.clearRect(0,0,oc.width,oc.height)
    arr.forEach((item)=>{
      item.deg+=20;
      item.x=  item.startX+Math.sin(item.deg/180*Math.PI)*item.stepX
      item.y=item.startY-(item.deg/180*Math.PI)*item.stepY
      if(item.y<-item.radius){
        arr.splice(item,1)
      }
    })
    arr.forEach((item)=>{

      ctx.save();
      ctx.beginPath();
      ctx.fillStyle=`rgba(${item.r},${item.g},${item.b},${item.a})`;
      ctx.arc(item.x,item.y,item.radius,0,2*Math.PI);
      ctx.fill();
      ctx.restore();
    })

  },50)

}
}
