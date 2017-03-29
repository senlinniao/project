/**
 * Created by hxsd on 2017/1/17.
 */
//window.onload=function(){
//    var oNav-list=document.getElementById('nav-list');
//    var aLi=oNav-list.getElementsByTagName('li');
//    var oPopup=document.getElementById('popup');
//    var aUl=oPopup.getElementsByTagName('ul');
//    var leave_menu;//离开右侧 回到左侧
//
//    //删除所有li上的ac
//    function del_li_ac(){
//        for(var i=0; i<aLi.length; i++){
//            aLi[i].className="";
//        }
//    }
//
//
//    for(var i=0; i<aLi.length; i++){
//        aLi[i].index=i;//发牌照
//
//        aLi[i].onmouseover=function(){
//            clearTimeout(leave_menu);
//            oPopup.style.display="block";
//            del_li_ac();//删除所有li上的ac
//            aLi[this.index].className="ac";//自己增加ac
//
//
//            //显示相对应的内容(就是选项卡的原理)
//            for(var i=0; i<aDl.length; i++){
//                aDl[i].style.display="none";
//            }
//            aDl[0].style.display="block";
//        };
//
//        aLi[i].onmouseout=function(){
//            clearTimeout(leave_menu);
//            leave_menu=setTimeout(function(){
//                oPopup.style.display="none";
//                del_li_ac();//删除所有li上的ac
//            },100)
//        };
//    }
//
//    oMenuCont.onmouseenter=function(){
//        clearTimeout(leave_menu);
//        this.style.display="block";
//    };
//
//
//    oMenuCont.onmouseleave=function(){
//        del_li_ac();//删除所有li上的ac
//        this.style.display="none";
//    };
//
//}