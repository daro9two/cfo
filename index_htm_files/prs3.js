var xr_ffox=navigator.userAgent.indexOf('Firefox')!=-1;var xr_opera=navigator.userAgent.indexOf('Opera')!=-1;var xr_webkit=navigator.userAgent.indexOf('AppleWebKit')!=-1;var xr_trid = 1;function xr_transenv(i,t){if(i==1) return(i);if(t==1){return (Math.sqrt(1-((1-i)*(1-i))));}else if(t==2){return (1-Math.sqrt(1-(i*i)));}else return (i);};var xr_qtime,xr_qlen,xr_qtyp,xr_qs0,xr_qf0,xr_qf1,xr_qf2,xr_qf3,xr_qsq0,xr_qfrdyf,xr_crs0,xr_crs1,xr_crs2,xr_xrix,xr_xriy,xr_orix,xr_oriy;var xr_qint=0;var xr_qintl=0;var xr_qldir=0;var xr_qfo=0;function xr_qtrs(o,x,y){var dx = 1;var dy = 1;var d = 1;if(x!=0 || y!=0) d=0;if(x!=0) dx=0;if(y!=0) dy=0;o.style.opacity=d;o.style.MozTransform="translate("+x+"px, "+y+"px) scalex("+dx+") scaley("+dy+")";o.style.webkitTransform="translate3d("+x+"px, "+y+"px, 0) scalex("+dx+") scaley("+dy+")";o.style.OTransform="translate("+x+"px, "+y+"px) scalex("+dx+") scaley("+dy+")";o.style.transform="translate("+x+"px, "+y+"px) scalex("+dx+") scaley("+dy+")";};function xr_sst(o,t){o.style.OTransition=t;o.style.webkitTransition=t;o.style.MozTransition=t;o.style.transition=t;};function xr_sst1(o,l){var t = "top "+l+"ms, left "+l+"ms, opacity "+l+"ms";if(xr_ffox) o.style.MozTransition=t+", -moz-transform "+l+"ms";else if(xr_webkit) o.style.webkitTransition=t+", -webkit-transform "+l+"ms";else if(xr_opera) o.style.OTransition=t+", -o-transform "+l+"ms";else o.style.transition=t+", transform "+l+"ms";};function xr_qfrdy(){xr_qfrdyf=1;};function xr_qsteplh(o,d){return false;};function xr_qsteplbh(o,d){return false;};function xr_qsteph(d){return false;};function xr_qv(o){o.style.display='block';o.style.visibility='visible';};function xr_qendl(layer){var o=document.getElementById(layer);if(o.xr_qldir==1){if(o.xr_qtyp==10){xr_sopcs(o,1);};xr_sst(o,"");o.xr_qldir=0;};};function xr_qgol(layer){var o=document.getElementById(layer);xr_qtrs(o,0,0);o.style.top="0%";o.style.left="0%";o.style.opacity = 1;o.xr_qldir=1;};function xr_qsetl(layer,l){var o=document.getElementById(layer);xr_sst1(o,l);setTimeout ( "xr_qgol('"+layer+"')", 20);};function xr_qeffl(o){var r=1;if(o.xr_qtyp==1){xr_qtrs(o,xr_xrix,0)}else if(o.xr_qtyp==2){xr_qtrs(o,1,0)}else if(o.xr_qtyp==3){xr_qtrs(o,0,1)}else if(o.xr_qtyp==4){xr_qtrs(o,0,xr_xriy)}else if(o.xr_qtyp==5){xr_qtrs(o,xr_xrix,1)}else if(o.xr_qtyp==6){xr_qtrs(o,1,1)}else if(o.xr_qtyp==7){xr_qtrs(o,xr_xrix,xr_xriy)}else if(o.xr_qtyp==8){xr_qtrs(o,1,xr_xriy)}else if(o.xr_qtyp==10){o.style.opacity = 0;}else r=0;return r;};function xr_qstepl(layer,l){var o=document.getElementById(layer);if (xr_qeffl(o)==1){xr_qv(o);setTimeout ( "xr_qsetl('"+layer+"',"+l+")", 20);}else{o.style.left="0px";o.style.top="0px";xr_qv(o);o.xr_qldir=0;};};function xr_qsteplb(layer){var o=document.getElementById(layer);if (xr_qeffl(o)==0){o.style.left="0px";o.style.top="0px";o.style.visibility="hidden";o.style.display="none";o.xr_qldir=0;}else{o.xr_qldir=2;};};function xr_qendlb(layer){var o=document.getElementById(layer);if(o.xr_qldir==2){o.style.visibility="hidden";o.style.display="none";o.style.zIndex=-1;xr_sst(o,"");xr_qtrs(o,0,0);o.style.left="0";o.style.top="0";o.xr_qldir=0;};};function xr_qsetlb(layer,l){var o=document.getElementById(layer);xr_sst1(o,l);setTimeout('xr_qsteplb("'+layer+'")', 20);};function xr_qstartl(n,l,layer){var xr_qf3=document.getElementById(layer);if(!xr_qint && (!xr_qf3.xr_qldir || xr_qf3.xr_qldir==2)){xr_orix=0;xr_oriy=0;var o=document.getElementById('xr_xri');xr_xrix=o.offsetWidth;xr_xriy=o.offsetHeight;xr_qfrdyf=1;xr_qf3.xr_qtyp=n;xr_qf3.xr_qldir=3;xr_qf3.style.visibility='visible';xr_qstepl(layer,l);setTimeout('xr_qendl("'+layer+'")', l+100);};};function xr_qstartlb(n,l,layer){var xr_qf3=document.getElementById(layer);if(!xr_qint && (!xr_qf3.xr_qldir || xr_qf3.xr_qldir==1)){xr_orix=0;xr_oriy=0;var o=document.getElementById('xr_xri');xr_xrix=o.offsetWidth;xr_xriy=o.offsetHeight;xr_qfrdyf=1;xr_qf3.xr_qtyp=n;xr_qf3.xr_qldir=3;xr_qf3.style.top="0%";xr_qf3.style.left="0%";xr_qv(xr_qf3);xr_qf3.style.opacity = 1;setTimeout ("xr_qsetlb('"+layer+"',"+l+")", 20);setTimeout('xr_qendlb("'+layer+'")', l+100);};};function xr_setback(){xr_qf1.style.backgroundColor=document.body.style.backgroundColor;xr_qf1.style.backgroundImage=document.body.style.backgroundImage;xr_qf1.style.backgroundPosition=document.body.style.backgroundPosition;if(xr_wy < (xr_xr.offsetHeight+xr_xr.offsetTop)) xr_qf1.style.height = xr_xr.offsetHeight+xr_xr.offsetTop+"px";else xr_qf1.style.height=xr_wy+"px";if(xr_wx < xr_xr.offsetWidth) xr_qf1.style.width = xr_xr.offsetWidth+"px";else xr_qf1.style.width=xr_wx+"px";};function xr_qstep(){if(xr_qfrdyf<1){if(xr_qfrdyf>0) xr_qfrdyf++;}else{if(xr_qint) clearInterval(xr_qint);window.scrollTo(0,0);if(xr_qtyp==1 || xr_qtyp==-9){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qtrs(xr_qf2,xr_xrix,0);xr_qf2.style.visibility="visible";}else if(xr_qtyp==2 || xr_qtyp==-10){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qtrs(xr_qf2,-xr_xrix/2,0);xr_qf2.style.visibility="visible";}else if(xr_qtyp==3 || xr_qtyp==-11){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qtrs(xr_qf2,0,-xr_xriy);xr_qf2.style.visibility="visible";}else if(xr_qtyp==4 || xr_qtyp==-12){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qtrs(xr_qf2,0,xr_xriy);xr_qf2.style.visibility="visible";}else if(xr_qtyp==5 || xr_qtyp==-13){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qtrs(xr_qf2,xr_xrix,-xr_xriy);xr_qf2.style.visibility="visible";}else if(xr_qtyp==6 || xr_qtyp==-14){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qtrs(xr_qf2,-xr_xrix/2,-xr_xriy);xr_qf2.style.visibility="visible";}else if(xr_qtyp==7 || xr_qtyp==-15){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qtrs(xr_qf2,xr_xrix,xr_xriy);xr_qf2.style.visibility="visible";}else if(xr_qtyp==8 || xr_qtyp==-16){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qtrs(xr_qf2,-xr_xrix/2,xr_xriy);xr_qf2.style.visibility="visible";}else if(xr_qtyp==9 || xr_qtyp==-1){xr_setback();xr_qf0.style.zIndex=11;xr_qf2.style.zIndex=10;xr_qtrs(xr_qf1,0,0);xr_qf2.style.visibility="visible";}else if(xr_qtyp==10 || xr_qtyp==-2){xr_setback();xr_qf0.style.zIndex=11;xr_qf2.style.zIndex=10;xr_qtrs(xr_qf1,0,0);xr_qf2.style.visibility="visible";}else if(xr_qtyp==11 || xr_qtyp==-3){xr_setback();xr_qf0.style.zIndex=11;xr_qf2.style.zIndex=10;xr_qtrs(xr_qf1,0,0);xr_qf2.style.visibility="visible";}else if(xr_qtyp==12 || xr_qtyp==-4){xr_setback();xr_qf0.style.zIndex=11;xr_qf2.style.zIndex=10;xr_qtrs(xr_qf1,0,0);xr_qf2.style.visibility="visible";}else if(xr_qtyp==13 || xr_qtyp==-5){xr_setback();xr_qf0.style.zIndex=11;xr_qf2.style.zIndex=10;xr_qtrs(xr_qf1,0,0);xr_qf2.style.visibility="visible";}else if(xr_qtyp==14 || xr_qtyp==-6){xr_setback();xr_qf0.style.zIndex=11;xr_qf2.style.zIndex=10;xr_qtrs(xr_qf1,0,0);xr_qf2.style.visibility="visible";}else if(xr_qtyp==15 || xr_qtyp==-7){xr_setback();xr_qf0.style.zIndex=11;xr_qf2.style.zIndex=10;xr_qtrs(xr_qf1,0,0);xr_qf2.style.visibility="visible";}else if(xr_qtyp==16 || xr_qtyp==-8){xr_setback();xr_qf0.style.zIndex=11;xr_qf2.style.zIndex=10;xr_qtrs(xr_qf1,0,0);xr_qf2.style.visibility="visible";}else if(xr_qtyp==17 || xr_qtyp==-17){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qsq0.style.zIndex=1100;xr_qf2.style.visibility="hidden";xr_qsq0.style.visibility="visible";xr_sopcs(xr_qsq0,0);}else if(xr_qtyp==18 || xr_qtyp==-18){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qf2.style.visibility="visible";xr_sopcs(xr_qf2,0);}else if(xr_qtyp==19 || xr_qtyp==-19){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qf2.style.visibility="hidden";xr_qtrs(xr_qsq0,xr_xrix,0);xr_qsq0.style.zIndex=1100;xr_qsq0.style.visibility="visible";}else if(xr_qtyp==20 || xr_qtyp==-20){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qtrs(xr_qf2,0,-xr_xriy);xr_qf2.style.visibility="visible";xr_qf3.style.zIndex=11;xr_qtrs(xr_qf3,0,xr_xriy/2);xr_qf3.style.visibility="visible";xr_qf2.style.clip=xr_crs1;xr_qf3.style.clip=xr_crs2;}else if(xr_qtyp==21 || xr_qtyp==-21){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qtrs(xr_qf2,-xr_xrix/2,0);xr_qf2.style.visibility="visible";xr_qf3.style.zIndex=11;xr_qtrs(xr_qf3,xr_xrix,0);xr_qf3.style.visibility="visible";xr_qf2.style.clip=xr_crs1;xr_qf3.style.clip=xr_crs2;}else{};setTimeout ( "xr_qgop1()", 20);setTimeout ( "xr_qendp()", xr_qlen+200);};};function xr_qss17(){xr_qf2.style.visibility="visible";xr_qsq0.style.opacity = 0;};function xr_qss19(){xr_qf2.style.visibility="visible";xr_qtrs(xr_qsq0,xr_xrix,0);};function xr_qgop1(){xr_sst1(xr_qf1,xr_qlen);xr_sst1(xr_qf2,xr_qlen);xr_sst1(xr_qf3,xr_qlen);xr_sst1(xr_qsq0,xr_qlen/3);setTimeout ( "xr_qgop()", 20);};function xr_qgop(){if(xr_qtyp==1 || xr_qtyp==-9){xr_qtrs(xr_qf2,0,0)}else if(xr_qtyp==2 || xr_qtyp==-10){xr_qtrs(xr_qf2,0,0)}else if(xr_qtyp==3 || xr_qtyp==-11){xr_qtrs(xr_qf2,0,0)}else if(xr_qtyp==4 || xr_qtyp==-12){xr_qtrs(xr_qf2,0,0)}else if(xr_qtyp==5 || xr_qtyp==-13){xr_qtrs(xr_qf2,0,0)}else if(xr_qtyp==6 || xr_qtyp==-14){xr_qtrs(xr_qf2,0,0)}else if(xr_qtyp==7 || xr_qtyp==-15){xr_qtrs(xr_qf2,0,0)}else if(xr_qtyp==8 || xr_qtyp==-16){xr_qtrs(xr_qf2,0,0)}else if(xr_qtyp==9 || xr_qtyp==-1){xr_qtrs(xr_qf1,xr_xrix,0)}else if(xr_qtyp==10 || xr_qtyp==-2){xr_qtrs(xr_qf1,-xr_xrix,0)}else if(xr_qtyp==11 || xr_qtyp==-3){xr_qtrs(xr_qf1,0,-xr_xriy)}else if(xr_qtyp==12 || xr_qtyp==-4){xr_qtrs(xr_qf1,0,xr_xriy)}else if(xr_qtyp==13 || xr_qtyp==-5){xr_qtrs(xr_qf1,xr_xrix,-xr_xriy)}else if(xr_qtyp==14 || xr_qtyp==-6){xr_qtrs(xr_qf1,-xr_xrix,-xr_xriy)}else if(xr_qtyp==15 || xr_qtyp==-7){xr_qtrs(xr_qf1,xr_xrix,xr_xriy)}else if(xr_qtyp==16 || xr_qtyp==-8){xr_qtrs(xr_qf1,xr_xrix,-xr_xriy)}else if(xr_qtyp==17 || xr_qtyp==-17){xr_qsq0.style.opacity = 1;setTimeout ( "xr_qss17()", xr_qlen/2);}else if(xr_qtyp==18 || xr_qtyp==-18){xr_qf2.style.opacity = 1;}else if(xr_qtyp==19 || xr_qtyp==-19){xr_qtrs(xr_qsq0,0,0);setTimeout ( "xr_qss19()", xr_qlen/2);}else if(xr_qtyp==20 || xr_qtyp==-20){xr_qtrs(xr_qf2,0,0);xr_qtrs(xr_qf3,0,0);}else if(xr_qtyp==21 || xr_qtyp==-21){xr_qtrs(xr_qf2,0,0);xr_qtrs(xr_qf3,0,0);}else{};};function xr_qendp(){xr_sst(xr_qf1,"");xr_sst(xr_qf2,"");xr_sst(xr_qf3,"");xr_sst(xr_qsq0,"");if(xr_qtyp==9 || xr_qtyp==-1){xr_qf1.style.visibility="hidden";}else if(xr_qtyp==10 || xr_qtyp==-2){xr_qf1.style.visibility="hidden";}else if(xr_qtyp==11 || xr_qtyp==-3){xr_qf1.style.visibility="hidden";}else if(xr_qtyp==12 || xr_qtyp==-4){xr_qf1.style.visibility="hidden";}else if(xr_qtyp==13 || xr_qtyp==-5){xr_qf1.style.visibility="hidden";}else if(xr_qtyp==14 || xr_qtyp==-6){xr_qf1.style.visibility="hidden";}else if(xr_qtyp==15 || xr_qtyp==-7){xr_qf1.style.visibility="hidden";}else if(xr_qtyp==16 || xr_qtyp==-8){xr_qf1.style.visibility="hidden";}else if(xr_qtyp==17 || xr_qtyp==-17){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qsq0.style.visibility="hidden";xr_qf1.style.visibility="hidden";xr_qsq0.style.zIndex=0;xr_sopcs(xr_qsq0,1);}else if(xr_qtyp==18 || xr_qtyp==-18){xr_qf1.style.visibility="hidden";xr_sopcs(xr_qf2,1);}else if(xr_qtyp==19 || xr_qtyp==-19){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qsq0.style.visibility="hidden";xr_qf1.style.visibility="hidden";xr_qsq0.style.left="0";}else if(xr_qtyp==20 || xr_qtyp==-20){xr_qf2.style.clip=xr_crs0;xr_qf3.style.clip=xr_crs0;xr_qf3.style.visibility="hidden";xr_qf1.style.visibility="hidden";xr_qf2.style.top=0;xr_qf2.style.left=0;xr_qf3.style.top=0;xr_qf3.style.left=0;}else if(xr_qtyp==21 || xr_qtyp==-21){xr_qf2.style.clip=xr_crs0;xr_qf3.style.clip=xr_crs0;xr_qf3.style.visibility="hidden";xr_qf1.style.visibility="hidden";xr_qf2.style.top=0;xr_qf2.style.left=0;xr_qf3.style.top=0;xr_qf3.style.left=0;}xr_qint=0;document.getElementById('xr_xrii').style.height="100%";if(!top.isRemotePresenter){setTimeout ( "xr_qf1.style.visibility='visible';xr_qf1.style.top=0;xr_qf1.style.left=0;xr_qf2.style.visibility='hidden';xr_qf3.style.visibility='hidden';", 2000 );setTimeout ( "document.location=xr_url2", 200 );}else{doPresenterRemoteFrameLoad(xr_url2);}};var xr_url2;function xr_qstartx(n,l,url,w,h){if(!xr_qint){xr_xrix=xr_wx;xr_xriy=xr_wy;xr_qf0=document.getElementById('xr_xrii');xr_qf1=document.getElementById('xr_xrii');xr_qf2=document.getElementById('xr_f2');xr_qf3=document.getElementById('xr_f3');xr_qf3.style.visibility="hidden";xr_qsq0=document.getElementById('xr_qsq0');xr_qsq0.style.left="0";xr_qsq0.style.top="0";xr_qsq0.style.width=xr_wx+"px";xr_qsq0.style.height=xr_wy+200+"px";xr_qsq0.style.visibility="hidden";xr_qsq0.style.zIndex=12;window.scrollTo(0,0);if(xr_wy < (xr_xr.offsetHeight+xr_xr.offsetTop)) xr_qf2.style.height = xr_xr.offsetHeight+xr_xr.offsetTop+"px";if(xr_wx < xr_xr.offsetWidth) xr_qf2.style.width = xr_xr.offsetWidth+"px";var o=document.getElementById('xr_xri');var o1=document.getElementById('xr_xrii');var midy=o.offsetHeight/2;if(o.offsetHeight>xr_wy) midy=xr_wy/2;xr_crs0="rect(0px, "+o1.offsetWidth+"px, "+o1.offsetHeight+"px, 0px)";xr_crs1="rect(0px, "+o1.offsetWidth+"px, "+(midy)+"px, 0px)";xr_crs2="rect("+(midy)+"px, "+o1.offsetWidth+"px, "+o1.offsetHeight+"px, 0px)";xr_qf1.style.visibility="visible";xr_qf2.style.visibility="hidden";xr_qfrdyf=0;xr_url2=url;xr_qf2.src=url;xr_qf2.style.width=xr_wx+"px";xr_qf2.style.height=xr_wy+200+"px";xr_qf3.style.width=xr_wx+"px";xr_qf3.style.height=xr_wy+200+"px";if(n==20 || n==21 || n==-20 || n==-21){if(xr_ie6){n=18;}else xr_qf3.src=url;};var d=new Date();xr_qtime=d.getTime();xr_qlen=l;xr_qtyp=n;xr_qs0=1;xr_qint=setInterval('xr_qstep()',40);};};function xr_qstart(n,l,url){xr_qstartx(n,l,url,0,0);};var xr_curprl=0;var xr_maxprl=0;function xr_donextp(){if(xr_nextpage!="") xr_qstart(xr_transition,xr_transitiontime,xr_nextpage);};function xr_donext(){if(!xr_qint){var i;var j=0;var o=0;var jj=document.getElementsByTagName('DIV');for (i=0;i<jj.length && o==0;i++){if(jj[i].className.indexOf("xr_prs")!=-1){if(j==xr_curprl){o=jj[i];xr_curprl++;};j++;};};if(o!=0){o.innerHTML=o.innerHTML;o.style.zIndex=100;var t = parseInt(o.className.substr(o.className.indexOf("xr_prl")+8,2));if(t>0 && t<100){t*=100}else{t=500};o.innerHTML=o.innerHTML;xr_qstartl((parseInt(o.className.substr(o.className.indexOf("xr_prl")+6,1))*10)+parseInt(o.className.substr(o.className.indexOf("xr_prl")+7,1)),t,o.id);};};};function xr_doprevp(){if(xr_prevpage!="") xr_qstart(xr_btransition,xr_btransitiontime,xr_prevpage);};function xr_doprev(){if(!xr_qint){var i;var j=0;var o=0;var jj=document.getElementsByTagName('DIV');xr_curprl--;if (xr_curprl>=0){for (i=0;i<jj.length && o==0;i++){if(jj[i].className.indexOf("xr_prs")!=-1){if(j==xr_curprl){o=jj[i];};j++;};};if(o!=0){var t = parseInt(o.className.substr(o.className.indexOf("xr_prl")+8,2));if(t>0 && t<100){t*=100}else{t=500};xr_qstartlb((parseInt(o.className.substr(o.className.indexOf("xr_prl")+6,1))*10)+parseInt(o.className.substr(o.className.indexOf("xr_prl")+7,1)),t,o.id);};};};};function xr_nextp(){if(xr_nextpage!=""){if(top.isRemotePresenter){sendURLMessage(xr_nextpage, 'next');}else{xr_donextp();};};};function xr_next(){if(!xr_qint){if(xr_curprl<xr_maxprl){if(top.isRemotePresenter){sendPresenterMessage('xr_donext', xr_curprl+1);}else{xr_donext();};}else{xr_nextp();};};};function xr_prevp(){if(xr_prevpage!=""){if(top.isRemotePresenter){sendURLMessage(xr_prevpage, 'prev');}else{xr_doprevp();};};};function xr_prev(){if(!xr_qint){if (xr_curprl>0){if(top.isRemotePresenter){sendPresenterMessage('xr_doprev', xr_curprl-1);}else{xr_doprev();};}else{xr_prevp();};};};var xr_w_old_onkeydown=0;function xr_prku(e){var key;if(window.event){key = window.event.keyCode;}else if(e.which){key = e.which;};if(key==37 || key==38){xr_prev();}else if (key==39 || key==40 || key==32){xr_next();}else if (key==33){xr_prevp();}else if (key==34){xr_nextp();}else{if(xr_d_old_onkeydown){return xr_d_old_onkeydown(ev);}else return key;};};function xr_prinit(){if(!top.isRemotePresenter){xr_d_old_onkeydown = document.onkeydown;document.onkeydown=xr_prku;};if(top.location == location){xr_qf3=document.getElementById('xr_f3');xr_qf3.src=xr_nextpage+"#xr_preload";}else{var pat=/#xr_preload/g;var f=pat.test(location);if(f){var oo=document.getElementsByTagName('OBJECT');for (xr_i=0;xr_i<oo.length;xr_i++){oo[xr_i].src="";oo[xr_i].innerHTML="";};oo=document.getElementsByTagName('VIDEO');for (xr_i=0;xr_i<oo.length;xr_i++){oo[xr_i].src="";oo[xr_i].innerHTML="";};oo=document.getElementsByTagName('AUDIO');for (xr_i=0;xr_i<oo.length;xr_i++){oo[xr_i].src="";oo[xr_i].innerHTML="";};oo=document.getElementsByTagName('IFRAME');for (xr_i=0;xr_i<oo.length;xr_i++){if(oo[xr_i].src.indexOf('://')!=-1){oo[xr_i].src="";oo[xr_i].innerHTML="";}else{oo[xr_i].src+="#xr_preload";};};};};xr_rx();};var xr_swipedx, xr_swipex, xr_swipedy, xr_swipey;function xr_prifs(){document.write('<iframe id="xr_f3"src="about:blank"frameborder="0"scrolling="no"style="width:100%;height:100%;position:absolute;left:0;top:0;visibility:hidden;z-index:10;"></iframe><iframe id="xr_f2" src="about:blank"frameborder="0"scrolling="no"style="width:100%;height:100%;position:absolute;left:0;top:0;visibility:hidden;z-index:10;"onload="xr_qfrdy();"></iframe>');var jj=document.getElementsByTagName('DIV');for (var i=0;i<jj.length;i++){if(jj[i].className.indexOf("xr_prs")!=-1){xr_maxprl++;};};document.addEventListener('touchstart', function(event){if(event.touches.length==1){xr_swipex = event.touches[0].pageX;xr_swipey = event.touches[0].pageY;xr_swipedx=xr_swipex;xr_swipedy=xr_swipey;}else{xr_swipex=-1;if(event.touches.length>2){var o=document.getElementById('xr_pnavh');o.style.visibility='visible';o.style.bottom=0;};};}, false);document.addEventListener('touchmove', function(event){if(xr_swipex!=-1){if(event.touches.length!=1){xr_swipex=-1;}else{xr_swipedx = event.touches[0].pageX;xr_swipedy = event.touches[0].pageY;};};}, false);document.addEventListener('touchend', function(event){if(xr_swipex!=-1){var dx = xr_swipedx-xr_swipex;var dy = xr_swipedy-xr_swipey;if(dx==0) dx=1;if(dy==0) dy=1;if(Math.max(Math.abs(dx),Math.abs(dy))>100){if(Math.abs(dx)/Math.abs(dy)>3){if(dx>0){xr_prev();}else{xr_next();};}else if(Math.abs(dy)/Math.abs(dx)>3){if(dy>0){}else{};};xr_swipex=-1;};};}, false);document.addEventListener('touchcancel', function(event){xr_swipex=-1;}, false);};
