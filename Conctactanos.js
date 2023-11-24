function obtenerdatos(){
    var nombre = document.getElementById('nombre').value;
    var cadena="";
    document.registro.nombreobtenido.value = nombre;
    
    if(document.getElementById('radio1').checked){
        var estado = "Soltero(a)"
        document.registro.estadoeivilobtenido.value= estado;
    }
    if(document.getElementById('radio2').checked){
        var estado = "Casado(a)"
        document.registro.estadoeivilobtenido.value= estado;
    }
    if(document.getElementById('radio3').checked){
        var estado = "Otro"
        document.registro.estadoeivilobtenido.value= estado;
    }
    var sub1 = document.getElementById('check1')
    var sub2 = document.getElementById('check2')
    var sub3 = document.getElementById('check3')
    var sub4 = document.getElementById('check4')
    var sub5 = document.getElementById('check5')
    var sub6 = document.getElementById('check6')
    var sub7 = document.getElementById('check7')
    var result = " ";
    if(sub1.checked == true){
        var ss1 = sub1.value;
        result = ss1;
    }
    if(sub2.checked == true){
        var ss2 = sub2.value;
        result = result+","+ss2;
    }
    if(sub3.checked == true){
        var ss3 = sub3.value;
        result = result+","+ss3;
    }
    if(sub4.checked == true){
        var ss4 = sub4.value;
        result = result+","+ss4;
    }
    if(sub5.checked == true){
        var ss5 = sub5.value;
        result = result+","+ss5;
    }
    if(sub6.checked == true){
        var ss6 = sub6.value;
        result = result+","+ss6;
    }
    if(sub7.checked == true){
        var ss7 = sub7.value;
        result = result+","+ss7;
    }
    document.registro.habilidadesobtenido.value = result
   

    var  dato = document.getElementById('sucursal')
    var suc=dato.options[sucursal.selectedIndex].value

    document.registro.tusucursal.value= suc
}