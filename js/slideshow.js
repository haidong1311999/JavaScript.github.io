var imgages = [];
var index = 0;
var td =null;
var sohinh = 8;
for (var i = 0; i < sohinh; i++){
    imgages[i]= new Image();
    imgages[i].src = "images/" + i + ".jpg";

    function next(){
        index++;
        if(index >= imgages.length) index = 0;
        var anh = document.getElementById("anh");
        anh.src = imgages[index].src;
        document.getElementById("num").innerHTML = index+1;
    }
    function prev(){
        index--;
        if(index < 0) index = imgages.length -1;
        var anh = document.getElementById("anh");
        anh.src = imgages[index].src;
        document.getElementById("num").innerHTML = index+1;
    }
    function tudong(){
      if (index>imgages.length) index =0;
      td = setInterval("auto"),1000;
    }
    // function stop(){
    //   clearInterval(td);
    //   td=null;
    // }
}


