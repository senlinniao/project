/**
 * Created by hxsd on 2017/1/18.
 */
    window.onload=function(){
 //---------------------放大镜---------------------------------
var oM_left=document.getElementById('m_left');


var oBg=document.getElementById('bg');
var oImg=document.getElementById('img1');
var oSpan=document.getElementById("span1");
var oDiv=document.getElementById('box');
var oBigimg=document.getElementById('img2');


oBg.onmousemove=function(ev){

    ev=ev||event;

    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;

    oSpan.style.display="block";
    oDiv.style.display="block";

    // 先显示才能获取尺寸 oSpan尺寸
    var sw=oSpan.offsetWidth;
    var sh=oSpan.offsetHeight;

    // oBg 尺寸
    var bw=oBg.offsetWidth;
    var bh=oBg.offsetHeight;

    var maxX=bw-sw;
    var maxY=bh-sh;

    // 滑块坐标=鼠标坐标-oBg左偏移-滑块宽度/2;
    var x=ev.clientX-this.offsetLeft-sw/2;
    var y=ev.clientY+scrollTop-this.offsetTop-sh/2;

    // 限定坐标区域范围
    if(x<0){x=0;}
    if(y<0){y=0;}
    if(x>maxX){x=maxX;}
    if(y>maxY){y=maxY;}
    console.log(x)
    console.log(y)
    // 对span进行坐标定位
    oSpan.style.left=x+"px";
    oSpan.style.top=y+"px";

    var rateX=x/maxX;
    var rateY=y/maxY;

    // 大图进行定位= 最大偏移距离*比率

    oBigimg.style.left=-(oBigimg.offsetWidth-oDiv.offsetWidth)*rateX+"px";
    oBigimg.style.top=-(oBigimg.offsetHeight-oDiv.offsetHeight)*rateY+"px";

}

oBg.onmouseout=function(){
    oSpan.style.display="none";
    oDiv.style.display="none";
}
//---------------------------------选项卡-----------------------------
var oUl=document.getElementById('m_top');
var aLi=oUl.getElementsByTagName('li');

var tab=document.getElementById('tab');
var oUl2=tab.getElementsByTagName('ul');
//var aLi2=oUl2.getElementsByTagName('li');


        var timer;

        for(var i=0;i<aLi.length;i++){
            aLi[i].index=i;
            aLi[i].onclick=function(){
                setTab(this.index);
            }
        }
        function setTab(n){
            for(var i=0;i<aLi.length;i++){
                aLi[i].className="";
                oUl2[i].className="hide";
            }
            aLi[n].className="ac";
            oUl2[n].className="";
        }
        function run(){
            var num=0;
            timer=setInterval(function(){
                setTab(num);
                num++;
                if(num==oUl2.length){
                    num=0;
                }
            },1000)
        }
        run();
        tab.onmouseover=function(){
            clearInterval(timer);

        }
        tab.onmouseout=function(){
            clearInterval(timer);
            run();
        }
//--------------购物车添加---------------------------------------------------------
        var oInput=document.getElementById('input');
        var oBtn=document.getElementById('btn');
        var aA=oBtn.getElementsByTagName('a');

        var num=0

        function add(){
                num++;
                oInput.value=num;
        }
        function reduce(){
            if(oInput.value>1){
                num--;
                oInput.value=num;
            }else{
                return
            }
        }
            aA[0].onclick=function(){
                    add()
            }
            aA[1].onclick=function(){
                reduce()
        }

//----------------------优惠套餐选择----------------------------------------------

    var oUl3=document.getElementById('box8');
    var aLi3=oUl3.getElementsByTagName("li");
    function run2(n){
        var index=k
           for(var j=0;j<aLi3.length;j++){
               aLi3[j].className='';
           }
        aLi3[n].className='b_color'
        }

    for(var k=0;k<aLi3.length;k++){
        aLi3[k].onclick=function(){
            run2(this.index);
        }

    }

    }
































