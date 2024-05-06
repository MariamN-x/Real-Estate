
const allobjects=[
    {id:"1",bed:"3",toilets:"2",living:"1",garden:1,swim:0,location:"https://www.google.com/maps/place/Emaar+Mivida+Compound/@30.0102788,31.5353318,17z/data=!3m1!4b1!4m6!3m5!1s0x1458222742926025:0x8f18a8273e8f9068!8m2!3d30.0102788!4d31.5379067!16s%2Fg%2F11bzq369s9?entry=ttu",price:"3,500,255$",makan:"Attameya Heights"},
    {id:"2",bed:"5",toilets:"3",living:"2",garden:1,swim:1,location:"https://www.google.com/maps/search/Hyde+park+appartments/@30.0484216,31.4635438,12.55z?entry=ttu",price:"5,690,000$",makan:"Sheikh Zayed"},
    {id:"3",bed:"10",toilets:"6",living:"4",garden:3,swim:3,location:"https://www.google.com/maps/place/Aldau+Heights+%2F+Strand/@27.1955667,33.8343567,17z/data=!4m10!3m9!1s0x14528721111ea329:0xe3234530dec96e60!5m3!1s2024-05-18!4m1!1i2!8m2!3d27.1955667!4d33.8369316!16s%2Fg%2F11g6wz3rv4?entry=ttu",price:"8,050,340$",makan:"Fifth Settlement"}
];
var i=1;
var i2=1;
const n=3;
const n2=allobjects.length;
const params = new URLSearchParams(document.location.search);
let b=params.get("btn");
if(b==null)
b=1;
window.onload = function() {
getbutton();
setInterval(incimage,6000);
setInterval(incimage2,6000);
}
function incimage(){
    i++;
    if(i>n)
       i=1;
    checkimg();
}
function decimage(){
    i--;
    if(i<1)
       i=n;
    checkimg();
}
function incimage2(){
    i2++;
    if(i2>n2)
       i2=1;
    if(i2==b)
    {
        i2++;
    }
    checkimg2();
}
function decimage2(){
    i2--;
    if(i2==b)
    {
        i2--;
    }
    if(i2<1)
       i2=n2;
    checkimg2();
}
function getbutton(){
    u='images'+b+'/image1.jpg';
    document.getElementById("start").style.backgroundImage=`url(${u})`;
    i2=parseInt(b)+1;
    if(i2>n)
    {
        i2=1;
    }
    let mainim='mainimages/image'+i2+'.jpg';
    document.getElementById("contentdiv2").style.backgroundImage=`url(${mainim})`;
    for(let y in allobjects)
    {
       if(allobjects[y].id==i2)
        {
            document.getElementById("makan2").innerHTML=allobjects[y].makan;
            document.getElementById("price2").innerHTML=allobjects[y].price;
        }
    }
    document.getElementById("anchortag").href="page.html?btn="+i2;
    for(let x in allobjects)
    {
        if(allobjects[x].id==b)
        {
            document.getElementById("bed").innerHTML=allobjects[x].bed;
            document.getElementById("toilet").innerHTML=allobjects[x].toilets;
            document.getElementById("living").innerHTML=allobjects[x].living;
            document.getElementById("garden").innerHTML=allobjects[x].garden;
            document.getElementById("Swim").innerHTML=allobjects[x].swim;
            document.getElementById("loc").href=allobjects[x].location;
            document.getElementById("price").innerHTML=allobjects[x].price;
            document.getElementById("makan").innerHTML=allobjects[x].makan;
            if(allobjects[x].garden==0)
            document.getElementById("garden").innerHTML="None";
            if(allobjects[x].swim==0)
            document.getElementById("Swim").innerHTML="None";
        }
    }
    
}
function checkimg(){
    const params = new URLSearchParams(document.location.search);
    const b=params.get("btn");
    let u='images'+b;
    if(i==1)
    {
        u+='/image1.jpg';
        document.getElementById("start").style.backgroundImage=`url(${u})`;
    }
    if(i==2)
    {
        u+='/image2.jpg';
        document.getElementById("start").style.backgroundImage=`url(${u})`;
    }
    if(i==3)
    {
        u+='/image3.jpg';
        document.getElementById("start").style.backgroundImage=`url(${u})`;
    }
}
function checkimg2(){
    const params = new URLSearchParams(document.location.search);
    const b=params.get("btn");
    let u='mainimages';
    for(let y in allobjects)
    {
       if(allobjects[y].id==i2)
        {
            document.getElementById("makan2").innerHTML=allobjects[y].makan;
            document.getElementById("price2").innerHTML=allobjects[y].price;
        }
    }
    document.getElementById("anchortag").href="page.html?btn="+i2;
    if(i2==1)
    {
        u+='/image1.jpg';
        document.getElementById("contentdiv2").style.backgroundImage=`url(${u})`;
    }
    if(i2==2)
    {
        u+='/image2.jpg';
        document.getElementById("contentdiv2").style.backgroundImage=`url(${u})`;
    }
    if(i2==3)
    {
        u+='/image3.jpg';
        document.getElementById("contentdiv2").style.backgroundImage=`url(${u})`;
    }
}
