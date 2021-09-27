function KiemTra(){
	var student=document.getElementById("student");
	var name=document.getElementById("name");
	var email=document.getElementById("email");
	var national=document.getElementById("national");

	var loi1=document.getElementById("loi1");
	var loi2=document.getElementById("loi2");
	var loi3=document.getElementById("loi3");
	var loi4=document.getElementById("loi4");
	var loi5=document.getElementById("loi5");
	var loi6=document.getElementById("loi6");
	var loi7=document.getElementById("loi7");

	var gender=document.getElementsByName("gender");
	var sothich=document.getElementsByClassName("sothich");
	var note=document.getElementById("note");


	//kiểm tra mã sinh viên
	if(student.value.length==0){
		student.style.border="1px solid red";
		loi1.innerHTML="Mã sinh viên không được để trống!";
		return false;
	}else{
		student.style.border="none";
		loi1.innerHTML="";
	}

	//kiểm tra họ tên
	if(name.value.length==0){
		name.style.border="1px solid red";
		loi2.innerHTML="Họ tên sinh viên không được để trống!";
		return false;
	}else{
		name.style.border="none";
		loi2.innerHTML="";
	}

	//kiểm tra email
	if(email.value.length==0){
		email.style.border="1px solid red";
		loi3.innerHTML="Email không được để trống!";
		return false;
	}else{
		email.style.border="none";
		loi3.innerHTML="";
	}

	//kiểm tra giới tính
	if(gender[0].checked!==true & gender[1].checked!==true){
		loi4.innerHTML="Bạn phải chọn giới tính!";
		return false;
	}else{
		loi4.innerHTML="";
	}

	//Kiểm tra sở thích
	var kt=0;
	for(var i=0;i<sothich.length;i++){
		if(sothich[i].checked==true){
			kt++;
		}
	}
	if(kt==0){
		loi5.innerHTML="Bạn phải chọn ít nhất một sở thích!";
		return false;
	}else{
		loi5.innerHTML="";
	}
	//kiểm tra chọn quốc tịch
	if(national.value==0){
		loi6.innerHTML=" Bạn phải chọn quốc tịch!";
		return false;
	}else{
		loi6.innerHTML="";
	}

	//ghi chú tối đa 200 ký tự: sử dụng thuộc tính maxlength="200" ở file resgist.html
	if(note.value.length>200){
		loi7.innerHTML="Bạn chỉ được nhập tối đa 200 ký tự!";
		note.style.border="1px solid red";
		return false;
	}else{
		loi7.innerHTML="";
		note.style.border="1px solid #ccc";
	}
}