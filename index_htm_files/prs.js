var xr_trid = 1;function xr_transenv(i,t){if(i==1) return(i);if(t==1){return (Math.sqrt(1-((1-i)*(1-i))));}else if(t==2){return (1-Math.sqrt(1-(i*i)));}else return (i);};var xr_qtime,xr_qlen,xr_qtyp,xr_qs0,xr_qf0,xr_qf1,xr_qf2,xr_qf3,xr_qsq0,xr_qfrdyf,xr_crs0,xr_crs1,xr_crs2,xr_xrix,xr_xriy,xr_orix,xr_oriy;var xr_qint=0;var xr_qintl=0;var xr_qldir=0;var xr_qfo=0;function xr_qfrdy(){xr_qfrdyf=1;};function xr_qsteplh(o,d){return false;};function xr_qsteplbh(o,d){return false;};function xr_qsteph(d){return false;};function xr_qv(o){o.style.display='block';o.style.visibility='visible';};function xr_qstepl(layer){var o=document.getElementById(layer);var d=new Date();var dx = d.getTime();if(o.xr_qs0){o.xr_qtime=dx;};var dd = (dx-o.xr_qtime)/o.xr_qlen;if(dd>1) dd=1;if(!xr_qsteplh(o,dd)) if(o.xr_qtyp==1){if(o.xr_qs0){o.style.left=xr_xrix+"px";xr_qv(o);}else{o.style.left=((1-xr_transenv(dd,1))*(xr_xrix-xr_orix)+xr_orix)+"px";};}else if(o.xr_qtyp==2){if(o.xr_qs0){o.style.left="-"+xr_xrix+"px";xr_qv(o);}else{o.style.left=(xr_transenv(dd,1)*(xr_xrix+xr_orix)-xr_xrix)+"px";};}else if(o.xr_qtyp==3){if(o.xr_qs0){o.style.top=-xr_xriy+"px";xr_qv(o);}else{var ddd=xr_transenv(dd,1);o.style.top=(-(1-ddd)*xr_xriy)+"px"};}else if(o.xr_qtyp==4){if(o.xr_qs0){o.style.top=xr_xriy+"px";xr_qv(o);}else{var ddd=xr_transenv(dd,1);o.style.top=((1-ddd)*xr_xriy)+"px"};}else if(o.xr_qtyp==5){if(o.xr_qs0){o.style.left=xr_xrix+"px";o.style.top=-xr_xriy+"px";xr_qv(o);}else{var ddd=xr_transenv(dd,1);o.style.left=((1-ddd)*(xr_xrix-xr_orix)+xr_orix)+"px";o.style.top=(-(1-ddd)*xr_xriy)+"px"};}else if(o.xr_qtyp==6){if(o.xr_qs0){o.style.left=-xr_xrix+"px";o.style.top=-xr_xriy+"px";xr_qv(o);}else{var ddd=xr_transenv(dd,1);o.style.left=(ddd*(xr_xrix+xr_orix)-xr_xrix)+"px";o.style.top=(-(1-ddd)*xr_xriy)+"px"};}else if(o.xr_qtyp==7){if(o.xr_qs0){o.style.left=xr_xrix+"px";o.style.top=xr_xriy+"px";xr_qv(o);}else{var ddd=xr_transenv(dd,1);o.style.left=((1-ddd)*(xr_xrix-xr_orix)+xr_orix)+"px";o.style.top=((1-ddd)*xr_xriy)+"px"};}else if(o.xr_qtyp==8){if(o.xr_qs0){o.style.left=xr_xrix+"px";o.style.top=xr_xriy+"px";xr_qv(o);}else{var ddd=xr_transenv(dd,1);o.style.left=(ddd*(xr_xrix+xr_orix)-xr_xrix)+"px";o.style.top=((1-ddd)*xr_xriy)+"px"};}else if(o.xr_qtyp==10){if(o.xr_qs0){xr_qv(o);if(xr_ie){o.style.width=xr_xr.style.width;o.style.height=xr_xr.style.height;};xr_sopcs(o,0);}else{xr_sopcs(o,xr_transenv(dd,0));};if(dd==1){xr_sopcs(o,1);};}else{dd=1;o.style.left="0px";o.style.top="0px";xr_qv(o);};o.xr_qs0=0;if (dd>=1){if(o.xr_qintl) clearInterval(o.xr_qintl);o.xr_qintl=0;};};function xr_qsteplb(layer){var o=document.getElementById(layer);var d=new Date();var dx = d.getTime();if(o.xr_qs0){o.xr_qtime=dx;};var dd = (dx-o.xr_qtime)/o.xr_qlen;if(dd>1) dd=1;if(!xr_qsteplbh(o,dd)) if(o.xr_qtyp==1){if(o.xr_qs0){}else{o.style.left=(xr_transenv(dd,2)*(xr_xrix-xr_orix)+xr_orix)+"px";};}else if(o.xr_qtyp==2){if(o.xr_qs0){}else{o.style.left=((1-xr_transenv(dd,2))*(xr_xrix+xr_orix)-xr_xrix)+"px";};}else if(o.xr_qtyp==3){if(o.xr_qs0){}else{var ddd=xr_transenv(dd,2);o.style.top=(-ddd*xr_xriy)+"px"};}else if(o.xr_qtyp==4){if(o.xr_qs0){}else{var ddd=xr_transenv(dd,2);o.style.top=(ddd*xr_xriy)+"px"};}else if(o.xr_qtyp==5){if(o.xr_qs0){}else{var ddd=xr_transenv(dd,2);o.style.left=(ddd*(xr_xrix-xr_orix)+xr_orix)+"px";o.style.top=(-ddd*xr_xriy)+"px"};}else if(o.xr_qtyp==6){if(o.xr_qs0){}else{var ddd=xr_transenv(dd,2);o.style.left=(-ddd*xr_xrix-xr_orix)+"px";o.style.top=(-ddd*xr_xriy)+"px"};}else if(o.xr_qtyp==7){if(o.xr_qs0){}else{var ddd=xr_transenv(dd,2);o.style.left=(ddd*(xr_xrix-xr_orix)+xr_orix)+"px";o.style.top=(ddd*xr_xriy)+"px"};}else if(o.xr_qtyp==8){if(o.xr_qs0){}else{var ddd=xr_transenv(dd,2);o.style.left=(-ddd*xr_xrix-xr_orix)+"px";o.style.top=(ddd*xr_xriy)+"px"};}else if(o.xr_qtyp==10){if(o.xr_qs0){}else{xr_sopcs(o,xr_transenv(1-dd,0));};}else{dd=1;};o.xr_qs0=0;if (dd>=1){if(o.xr_qintl) clearInterval(o.xr_qintl);o.xr_qintl=0;o.style.left="0";o.style.top="0";o.style.visibility="hidden";o.style.display="none";o.style.zIndex=-1;o.innerHTML=o.innerHTML;};};function xr_qstartl(n,l,layer){var xr_qf3=document.getElementById(layer);if(!xr_qint && (xr_qf3.xr_qintl!=0 || xr_qf3.xr_qldir==2)){xr_orix=0;xr_oriy=0;var o=document.getElementById('xr_xri');xr_xrix=o.offsetWidth;xr_xriy=o.offsetHeight;xr_qfrdyf=1;var d=new Date();if(xr_qf3.xr_qintl){clearInterval(xr_qf3.xr_qintl);if(xr_qf3.xr_qldir==2){xr_qf3.xr_qtime=d.getTime()-(xr_qf3.xr_qlen-(d.getTime()-xr_qf3.xr_qtime));};}else{xr_qf3.xr_qtime=d.getTime();xr_qf3.xr_qs0=1;xr_qf3.xr_qlen=l;};xr_qf3.xr_qtyp=n;xr_qf3.xr_qldir=1;xr_qf3.style.visibility='visible';xr_qf3.xr_qintl=setInterval('xr_qstepl("'+layer+'")',40);};};function xr_qstartlb(n,l,layer){var xr_qf3=document.getElementById(layer);if(!xr_qint && (xr_qf3.xr_qintl!=0 || xr_qf3.xr_qldir==1)){xr_orix=0;xr_oriy=0;var o=document.getElementById('xr_xri');xr_xrix=o.offsetWidth;xr_xriy=o.offsetHeight;xr_qfrdyf=1;var d=new Date();if(xr_qf3.xr_qintl){clearInterval(xr_qf3.xr_qintl);if(xr_qf3.xr_qldir==1){xr_qf3.xr_qtime=d.getTime()-(xr_qf3.xr_qlen-(d.getTime()-xr_qf3.xr_qtime));};}else{xr_qf3.xr_qtime=d.getTime();xr_qf3.xr_qs0=1;xr_qf3.xr_qlen=l;};xr_qf3.xr_qtyp=n;xr_qf3.xr_qldir=2;xr_qf3.xr_qintl=setInterval('xr_qsteplb("'+layer+'")',40);};};function xr_setback(){xr_qf1.style.backgroundColor=document.body.style.backgroundColor;xr_qf1.style.backgroundImage=document.body.style.backgroundImage;xr_qf1.style.backgroundPosition=document.body.style.backgroundPosition;if(xr_wy < (xr_xr.offsetHeight+xr_xr.offsetTop)) xr_qf1.style.height = xr_xr.offsetHeight+xr_xr.offsetTop+"px";else xr_qf1.style.height=xr_wy+"px";if(xr_wx < xr_xr.offsetWidth) xr_qf1.style.width = xr_xr.offsetWidth+"px";else xr_qf1.style.width=xr_wx+"px";};function xr_qstep(){if(xr_qfrdyf<1){if(xr_qfrdyf>0) xr_qfrdyf++;}else{window.scrollTo(0,0);var d=new Date();var dx = d.getTime();if(xr_qs0){xr_qtime=dx;};var dd = (dx-xr_qtime)/xr_qlen;if(dd>1) dd=1;if(!xr_qsteph(dd)) if(xr_qtyp==1 || xr_qtyp==-9){if(xr_qs0){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qf2.style.left="100%";xr_qf2.style.visibility="visible";}else{xr_qf2.style.left=((1-xr_transenv(dd,1))*100)+"%";};}else if(xr_qtyp==2 || xr_qtyp==-10){if(xr_qs0){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qf2.style.left="-100%";xr_qf2.style.visibility="visible";}else{xr_qf2.style.left=((xr_transenv(dd,1)-1)*100)+"%";};}else if(xr_qtyp==3 || xr_qtyp==-11){if(xr_qs0){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qf2.style.top="-100%";xr_qf2.style.visibility="visible";}else{xr_qf2.style.top=((xr_transenv(dd,1)-1)*100)+"%";};}else if(xr_qtyp==4 || xr_qtyp==-12){if(xr_qs0){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qf2.style.top="100%";xr_qf2.style.visibility="visible";}else{xr_qf2.style.top=((1-xr_transenv(dd,1))*100)+"%";};}else if(xr_qtyp==5 || xr_qtyp==-13){if(xr_qs0){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qf2.style.left="100%";xr_qf2.style.top="-100%";xr_qf2.style.visibility="visible";}else{var ddd=xr_transenv(dd,1);xr_qf2.style.left=((1-ddd)*100)+"%";xr_qf2.style.top=((ddd-1)*100)+"%";};}else if(xr_qtyp==6 || xr_qtyp==-14){if(xr_qs0){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qf2.style.left="-100%";xr_qf2.style.top="-100%";xr_qf2.style.visibility="visible";}else{var ddd=xr_transenv(dd,1);xr_qf2.style.left=((ddd-1)*100)+"%";xr_qf2.style.top=((ddd-1)*100)+"%";};}else if(xr_qtyp==7 || xr_qtyp==-15){if(xr_qs0){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qf2.style.left="100%";xr_qf2.style.top="100%";xr_qf2.style.visibility="visible";}else{var ddd=xr_transenv(dd,1);xr_qf2.style.left=((1-ddd)*100)+"%";xr_qf2.style.top=((1-ddd)*100)+"%";};}else if(xr_qtyp==8 || xr_qtyp==-16){if(xr_qs0){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qf2.style.left="-100%";xr_qf2.style.top="100%";xr_qf2.style.visibility="visible";}else{var ddd=xr_transenv(dd,1);xr_qf2.style.left=((ddd-1)*100)+"%";xr_qf2.style.top=((1-ddd)*100)+"%";};}else if(xr_qtyp==9 || xr_qtyp==-1){if(xr_qs0){xr_setback();xr_qf0.style.zIndex=11;xr_qf2.style.zIndex=10;xr_qf2.style.left="0";xr_qf2.style.visibility="visible";}else{xr_qf1.style.left=(xr_transenv(dd,2)*100)+"%";};if(dd==1){xr_qf1.style.visibility="hidden";};}else if(xr_qtyp==10 || xr_qtyp==-2){if(xr_qs0){xr_setback();xr_qf0.style.zIndex=11;xr_qf2.style.zIndex=10;xr_qf2.style.left="0";xr_qf2.style.visibility="visible";}else{xr_qf1.style.left=(xr_transenv(dd,2)*(-100))+"%";};if(dd==1){xr_qf1.style.visibility="hidden";};}else if(xr_qtyp==11 || xr_qtyp==-3){if(xr_qs0){xr_setback();xr_qf0.style.zIndex=11;xr_qf2.style.zIndex=10;xr_qf2.style.top="0";xr_qf2.style.visibility="visible";}else{xr_qf1.style.top=(-xr_transenv(dd,2)*100)+"%";};if(dd==1){xr_qf1.style.visibility="hidden";};}else if(xr_qtyp==12 || xr_qtyp==-4){if(xr_qs0){xr_setback();xr_qf0.style.zIndex=11;xr_qf2.style.zIndex=10;xr_qf2.style.top="0";xr_qf2.style.visibility="visible";}else{xr_qf1.style.top=(xr_transenv(dd,2)*100)+"%";};if(dd==1){xr_qf1.style.visibility="hidden";};}else if(xr_qtyp==13 || xr_qtyp==-5){if(xr_qs0){xr_setback();xr_qf0.style.zIndex=11;xr_qf2.style.zIndex=10;xr_qf2.style.left="0";xr_qf2.style.top="0";xr_qf2.style.visibility="visible";}else{var ddd=xr_transenv(dd,2);xr_qf1.style.left=(ddd*100)+"%";xr_qf1.style.top=(-ddd*100)+"%";};if(dd==1){xr_qf1.style.visibility="hidden";};}else if(xr_qtyp==14 || xr_qtyp==-6){if(xr_qs0){xr_setback();xr_qf0.style.zIndex=11;xr_qf2.style.zIndex=10;xr_qf2.style.left="0";xr_qf2.style.top="0";xr_qf2.style.visibility="visible";}else{var ddd=xr_transenv(dd,2);xr_qf1.style.left=(-ddd*100)+"%";xr_qf1.style.top=(-ddd*100)+"%";};if(dd==1){xr_qf1.style.visibility="hidden";};}else if(xr_qtyp==15 || xr_qtyp==-7){if(xr_qs0){xr_setback();xr_qf0.style.zIndex=11;xr_qf2.style.zIndex=10;xr_qf2.style.left="0";xr_qf2.style.top="0";xr_qf2.style.visibility="visible";}else{var ddd=xr_transenv(dd,2);xr_qf1.style.left=(ddd*100)+"%";xr_qf1.style.top=(ddd*100)+"%";};if(dd==1){xr_qf1.style.visibility="hidden";};}else if(xr_qtyp==16 || xr_qtyp==-8){if(xr_qs0){xr_setback();xr_qf0.style.zIndex=11;xr_qf2.style.zIndex=10;xr_qf2.style.left="0";xr_qf2.style.top="0";xr_qf2.style.visibility="visible";}else{var ddd=xr_transenv(dd,2);xr_qf1.style.left=(-ddd*100)+"%";xr_qf1.style.top=(ddd*100)+"%";};if(dd==1){xr_qf1.style.visibility="hidden";};}else if(xr_qtyp==17 || xr_qtyp==-17){if(xr_qs0){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qsq0.style.zIndex=1100;xr_qf2.style.visibility="hidden";xr_qsq0.style.visibility="visible";xr_sopcs(xr_qsq0,0);}else{var ddd;if(dd<=0.5){ddd=xr_transenv(dd*2,2);}else{if(xr_qf2.style.visibility!="visible"){xr_qf2.style.visibility="visible";ddd=1;}else ddd=1-xr_transenv((dd-0.5)*2,1);};xr_sopcs(xr_qsq0,ddd);};if(dd==1){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qsq0.style.visibility="hidden";xr_qf1.style.visibility="hidden";xr_qsq0.style.zIndex=0;xr_sopcs(xr_qsq0,1);};}else if(xr_qtyp==18 || xr_qtyp==-18){if(xr_qs0){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qf2.style.visibility="visible";xr_sopcs(xr_qf2,0);}else{xr_sopcs(xr_qf2,xr_transenv(dd,0));};if(dd==1){xr_qf1.style.visibility="hidden";xr_sopcs(xr_qf2,1);};}else if(xr_qtyp==19 || xr_qtyp==-19){if(xr_qs0){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qf2.style.visibility="hidden";xr_qsq0.style.left="100%";xr_qsq0.style.zIndex=1100;xr_qsq0.style.visibility="visible";}else{var ddd;if(dd<=0.5){ddd=xr_transenv(1-(dd*2),0);}else{xr_qf2.style.visibility="visible";ddd=xr_transenv((dd-0.5)*2,0);};xr_qsq0.style.left=(ddd*100)+"%";};if(dd==1){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qsq0.style.visibility="hidden";xr_qf1.style.visibility="hidden";xr_qsq0.style.left="0";};}else if(xr_qtyp==20 || xr_qtyp==-20){if(xr_qs0){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qf2.style.top="-50%";xr_qf2.style.visibility="visible";xr_qf3.style.zIndex=11;xr_qf3.style.top="50%";xr_qf3.style.visibility="visible";xr_qf2.style.clip=xr_crs1;xr_qf3.style.clip=xr_crs2;}else{var ddd=xr_transenv(dd,0);xr_qf2.style.top=((ddd*50)-50)+"%";xr_qf3.style.top=((-ddd*50)+50)+"%";};if(dd==1){xr_qf2.style.clip=xr_crs0;xr_qf3.style.clip=xr_crs0;xr_qf3.style.visibility="hidden";xr_qf1.style.visibility="hidden";xr_qf2.style.top=0;xr_qf2.style.left=0;xr_qf3.style.top=0;xr_qf3.style.left=0;};}else if(xr_qtyp==21 || xr_qtyp==-21){if(xr_qs0){xr_qf0.style.zIndex=10;xr_qf2.style.zIndex=11;xr_qf2.style.left="-100%";xr_qf2.style.visibility="visible";xr_qf3.style.zIndex=11;xr_qf3.style.left="100%";xr_qf3.style.visibility="visible";xr_qf2.style.clip=xr_crs1;xr_qf3.style.clip=xr_crs2;}else{var ddd=xr_transenv(dd,0);xr_qf2.style.left=((ddd-1)*100)+"%";xr_qf3.style.left=((-ddd*100)+100)+"%";};if(dd==1){xr_qf2.style.clip=xr_crs0;xr_qf3.style.clip=xr_crs0;xr_qf3.style.visibility="hidden";xr_qf1.style.visibility="hidden";xr_qf2.style.top=0;xr_qf2.style.left=0;xr_qf3.style.top=0;xr_qf3.style.left=0;};}else{dd=1;};xr_qs0=0;if (dd>=1){clearInterval(xr_qint);xr_qint=0;document.getElementById('xr_xrii').style.height="100%";if(!top.isRemotePresenter){setTimeout ( "xr_qf1.style.visibility='visible';xr_qf1.style.top=0;xr_qf1.style.left=0;xr_qf2.style.visibility='hidden';xr_qf3.style.visibility='hidden';", 2000 );setTimeout ( "document.location=xr_url2", 200 );}else{doPresenterRemoteFrameLoad(xr_url2);}};};};var xr_url2;function xr_qstartx(n,l,url,w,h){if(!xr_qint){xr_qf0=document.getElementById('xr_xrii');xr_qf1=document.getElementById('xr_xrii');xr_qf2=document.getElementById('xr_f2');xr_qf3=document.getElementById('xr_f3');xr_qf3.style.visibility="hidden";xr_qsq0=document.getElementById('xr_qsq0');xr_qsq0.style.left="0";xr_qsq0.style.top="0";xr_qsq0.style.width="100%";xr_qsq0.style.height="100%";xr_qsq0.style.visibility="hidden";xr_qsq0.style.zIndex=12;window.scrollTo(0,0);if(xr_wy < (xr_xr.offsetHeight+xr_xr.offsetTop)) xr_qf2.style.height = xr_xr.offsetHeight+xr_xr.offsetTop+"px";if(xr_wx < xr_xr.offsetWidth) xr_qf2.style.width = xr_xr.offsetWidth+"px";var o=document.getElementById('xr_xri');var o1=document.getElementById('xr_xrii');var midy=o.offsetHeight/2;if(o.offsetHeight>xr_wy) midy=xr_wy/2;xr_crs0="rect(0px, "+o1.offsetWidth+"px, "+o1.offsetHeight+"px, 0px)";xr_crs1="rect(0px, "+o1.offsetWidth+"px, "+(midy)+"px, 0px)";xr_crs2="rect("+(midy)+"px, "+o1.offsetWidth+"px, "+o1.offsetHeight+"px, 0px)";xr_qf1.style.visibility="visible";xr_qf2.style.visibility="hidden";xr_qfrdyf=0;xr_url2=url;xr_qf2.src=url;xr_qf2.style.width=xr_wx+"px";xr_qf2.style.height=xr_wy+"px";xr_qf3.style.width=xr_wx+"px";xr_qf3.style.height=xr_wy+"px";if(n==20 || n==21 || n==-20 || n==-21){if(xr_ie6){n=18;}else xr_qf3.src=url;};var d=new Date();xr_qtime=d.getTime();xr_qlen=l;xr_qtyp=n;xr_qs0=1;xr_qint=setInterval('xr_qstep()',40);};};function xr_qstart(n,l,url){xr_qstartx(n,l,url,0,0);};var xr_curprl=0;var xr_maxprl=0;function xr_donextp(){if(xr_nextpage!="") xr_qstart(xr_transition,xr_transitiontime,xr_nextpage);};function xr_donext(){if(!xr_qint){var i;var j=0;var o=0;var jj=document.getElementsByTagName('DIV');for (i=0;i<jj.length && o==0;i++){if(jj[i].className.indexOf("xr_prs")!=-1){if(j==xr_curprl){o=jj[i];xr_curprl++;};j++;};};if(o!=0){o.innerHTML=o.innerHTML;o.style.zIndex=100;var t = parseInt(o.className.substr(o.className.indexOf("xr_prl")+8,2));if(t>0 && t<100){t*=100}else{t=500};o.innerHTML=o.innerHTML;xr_qstartl((parseInt(o.className.substr(o.className.indexOf("xr_prl")+6,1))*10)+parseInt(o.className.substr(o.className.indexOf("xr_prl")+7,1)),t,o.id);};};};function xr_doprevp(){if(xr_prevpage!="") xr_qstart(xr_btransition,xr_btransitiontime,xr_prevpage);};function xr_doprev(){if(!xr_qint){var i;var j=0;var o=0;var jj=document.getElementsByTagName('DIV');xr_curprl--;if (xr_curprl>=0){for (i=0;i<jj.length && o==0;i++){if(jj[i].className.indexOf("xr_prs")!=-1){if(j==xr_curprl){o=jj[i];};j++;};};if(o!=0){var t = parseInt(o.className.substr(o.className.indexOf("xr_prl")+8,2));if(t>0 && t<100){t*=100}else{t=500};xr_qstartlb((parseInt(o.className.substr(o.className.indexOf("xr_prl")+6,1))*10)+parseInt(o.className.substr(o.className.indexOf("xr_prl")+7,1)),t,o.id);};};};};function xr_nextp(){if(xr_nextpage!=""){if(top.isRemotePresenter){sendURLMessage(xr_nextpage, 'next');}else{xr_donextp();};};};function xr_next(){if(!xr_qint){if(xr_curprl<xr_maxprl){if(top.isRemotePresenter){sendPresenterMessage('xr_donext', xr_curprl+1);}else{xr_donext();};}else{xr_nextp();};};};function xr_prevp(){if(xr_prevpage!=""){if(top.isRemotePresenter){sendURLMessage(xr_prevpage, 'prev');}else{xr_doprevp();};};};function xr_prev(){if(!xr_qint){if (xr_curprl>0){if(top.isRemotePresenter){sendPresenterMessage('xr_doprev', xr_curprl-1);}else{xr_doprev();};}else{xr_prevp();};};};var xr_w_old_onkeydown=0;function xr_prku(e){var key;if(window.event){key = window.event.keyCode;}else if(e.which){key = e.which;};if(key==37 || key==38){xr_prev();}else if (key==39 || key==40 || key==32){xr_next();}else if (key==33){xr_prevp();}else if (key==34){xr_nextp();}else{if(xr_d_old_onkeydown){return xr_d_old_onkeydown(ev);}else return key;};};function xr_prinit(){if(!top.isRemotePresenter){xr_d_old_onkeydown = document.onkeydown;document.onkeydown=xr_prku;};if(top.location == location){xr_qf3=document.getElementById('xr_f3');xr_qf3.src=xr_nextpage+"#xr_preload";}else{var pat=/#xr_preload/g;var f=pat.test(location);if(f){var oo=document.getElementsByTagName('OBJECT');for (xr_i=0;xr_i<oo.length;xr_i++){oo[xr_i].src="";oo[xr_i].innerHTML="";};oo=document.getElementsByTagName('VIDEO');for (xr_i=0;xr_i<oo.length;xr_i++){oo[xr_i].src="";oo[xr_i].innerHTML="";};oo=document.getElementsByTagName('AUDIO');for (xr_i=0;xr_i<oo.length;xr_i++){oo[xr_i].src="";oo[xr_i].innerHTML="";};oo=document.getElementsByTagName('IFRAME');for (xr_i=0;xr_i<oo.length;xr_i++){if(oo[xr_i].src.indexOf('://')!=-1){oo[xr_i].src="";oo[xr_i].innerHTML="";}else{oo[xr_i].src+="#xr_preload";};};};};xr_rx();};function xr_prifs(){document.write('<iframe id="xr_f3"src="about:blank"frameborder="0"scrolling="no"style="width:100%;height:100%;position:absolute;left:0;top:0;visibility:hidden;z-index:10;"></iframe><iframe id="xr_f2" src="about:blank"frameborder="0"scrolling="no"style="width:100%;height:100%;position:absolute;left:0;top:0;visibility:hidden;z-index:10;"onload="xr_qfrdy();"></iframe>');var jj=document.getElementsByTagName('DIV');for (var i=0;i<jj.length;i++){if(jj[i].className.indexOf("xr_prs")!=-1){xr_maxprl++;};};};
