var t = null;
t = setTimeout(time, 100); //开始运行
function time() {
    clearTimeout(t); //清除定时器
    var now = new Date();
    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日
    
    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分
    var ss = now.getSeconds();          //分
    var clock = year + "-";
    
    if(month < 10)
        clock += "0";
    
    clock += month + "-";
    
    if(day < 10)
        clock += "0";
        
    clock += day + " ";
    
    if(hh < 10)
        clock += "0";
        
    clock += hh + ":";

    if (mm < 10) 
        clock += '0'; 

    clock += mm + ":"; 

    if (ss < 10) 
        clock += '0'; 

    clock += ss; 

    document.querySelector(".time").innerHTML =
    "当前时间：" +clock;
    t = setTimeout(time, 1000); //设定定时器，循环运行
}