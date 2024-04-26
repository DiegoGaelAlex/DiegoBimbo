do{
    desi=0; 
    var pregunta = prompt("Le gustaria saber su Bimbo dato curioso del dia?\nResponda: Si o No");

    if(pregunta=="Si"){
        var fecha = new Date();
        var dia = fecha.getDay();

        switch(dia){
            case 0:
            diaSemana ="El famoso Osito bimbo era parte de una targeta de regalo navideña, solo se le agrego el gorro, el mandil y el pan de molde";
            break;
            case 1:
            diaSemana ="Sabias que bimbo tiene a su nombre mas de 10,000 productos y 100 marcas, la variedad importa en bimbo"
            break;
            case 2:
            diaSemana ="Sabias que bimbo es la empresa panificadora mas grande de todo el mundo, un pequeño recordatorio de lo grande que es bumbo";
            break;
            case 3:
            diaSemana ="En el año 2020, pese a la pandemia del coronavirus, bimbo obtuvo una ganancia neta de 3,579,000,000 de pesos por la venta de pan; un 85% mas de ganancia al año pasado"
            break;
            case 4:
            diaSemana ="Sabias que el nito, entes se llamaba negrito; este cambio de nombre fue debido a que la gente consideraba esto como una declaracion racista hacia la gente afroamericana.";
            break;
            case 5:
            diaSemana ="En los incios de Bimbo, la empresa contaba con una plantilla de 38 trabajadores, hoy en dia cuenta con una plantilla de 128,000 empleados"
            break;
            case 6:
            diaSemana ="Sabias que el nombre Bimbo proviene del italiano, en Italia es comun llamar a los niños bambino, y bimbo es una forma corta de decir esta palabra";
        }
        window.alert(""+diaSemana);
    }
    else{
        if(pregunta=="No"){
            window.alert("Bueno, aveces uno no quiere conocer su Bimbo dato del dia.");
        }
        else{
            window.alert("Esta respuesta no es valida, intentelo de nuevo");
            desi=1;
        }
    }
}
while(desi==1);