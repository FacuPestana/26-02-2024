//Tomamos el elemento img del index.html
let imagen = document.querySelector('img')
//los botones para anterior y siguiente
let Anterior = document.querySelector('#Anterior')
let Siguiente = document.querySelector('#Siguiente')
//y el titulo del documento. 
let titulo = document.querySelector('h1')
//Y el texto
let texto = document.querySelector('#pinfo')
//esta variable puede contener los siguientes valores: golden.jpg | perro.jpg | caniche.jpg | policia.jpg
//Empieza con "golden.jpg" porque es la primer imagen a mostrar. cambiara de valor cuando cambiamos de imagen
//la utilizamos para comprobar que imagen tenemos actualmente
let archivo = '/imagenes/golden.jpg'
/* 
El boton siguiente, muestra la foto siguiente a la actual. Para eso, le dimos un orden a las fotos
1) Golden 2) Perro 3) Caniche 4) Policia 
Esto nos permite saber lo siguiente : Golden <-- Perro --> Caniche 
Teniendo en cuenta el ejemplo mencionado anteriormente, el anterior de perro es Golden y el siguiente es el Caniche. 
Entonces solo tenemos que hacer la pregunta correcta a la hora de presionar el boton
*/

/*
Golden > San Bernardo > Caniche
Golden < Caniche < San Bernardo < Golden 

*/
Siguiente.onclick = function () {
    //Si el archivo de imagen, es un Golden, entonces mostramos el siguiente
    if (archivo == '/imagenes/golden.jpg') {
        //el siguiente va a ser Perro
        //SAN BERNARDO
        imagen.src = '/imagenes/perro.jpg'
        titulo.textContent = 'San Bernardo'
        archivo = '/imagenes/perro.jpg'
        texto.textContent = 'El san bernardo (en alemán, St. Bernhardshund; en francés, Chien du Saint-Bernard) es una raza de perro originaria de los Alpes suizos y del norte de Italia. Es el perro boyero más famoso junto con el mastín del Pirineo, y es muy próximo al gran boyero suizo. Desciende del extinto mastín de los Alpes, que se mezcló con otras razas como el dogo del Tíbet, el terranova y el gran danés.'
        //CANICHE
    } else if (archivo == '/imagenes/perro.jpg') {
        imagen.src = '/imagenes/caniche.jpg'
        titulo.textContent = 'Caniche'
        archivo = '/imagenes/caniche.jpg'
        texto.textContent = 'El caniche (en inglés, poodle) es una raza canina que hasta el siglo xv se consideró de uso exclusivo de los aristócratas y nobles. Fue un perro cobrador de aguas hasta el Renacimiento: recuperaban las presas ya cazadas que habían caído al agua, como patos y cisnes. Hoy en día se les encuentra frecuentemente en las exposiciones caninas de belleza. Existen cuatro variedades: grande, mediano, enano y toy y en diferentes colores.'
    }
    //POLICIA
    else if (archivo == '/imagenes/caniche.jpg') {
        imagen.src = '/imagenes/policia.jpg'
        titulo.textContent = 'Perro Policia'
        archivo = '/imagenes/policia.jpg'
        texto.textContent = 'Perros policía en la exhibición del día de los Ángeles custodios, patrones del Cuerpo Nacional de Policía, en Palencia (España). Perro policía se denomina a los perros adiestrados con fines de seguridad pública e investigación policíaca. Además, se les considera como uno de los mejores acompañantes al momento de investigaciones que necesiten de gran olfato e instinto. Las razas más importantes que se usan para realizar esta actividad son​ el pastor alemán, rottweiler y doberman. Aunque para labores que no incluyan defensa o ataque, como lo es detección de drogas en aeropuertos o lugares públicos, se pueden usar también razas como el labrador retriever o el pastor belga. La raza más conocida es el pastor alemán y la gran mayoría es procedente de líneas de trabajo, puesto que la excesiva fragilidad de las líneas de belleza no son aptas para el ejercicio intenso que exige el entrenamiento de un perro policía. No obstante, esta raza tan extendida en el mundo, está siendo sustituida por otra menos conocida: se trata del pastor belga (Malinois)​, considerada por muchos especialistas en la materia, como la mejor raza de utilidad del mundo, debido a sus excelentes cualidades atléticas​ y a la rigurosa selección que ha sido sometida a lo largo de su historia en la que los ejemplares de belleza o exposición apenas han cobrado protagonismo. ';
    } //Otra raza de perro
    else if (archivo == '/imagenes/buldogF.jpg') {
        imagen.src = '/imagenes/buldogF.jpg'
        titulo.textContent = 'Bulldog Frances'
    }


    else {
        //GOLDEN 
        imagen.src = '/imagenes/golden.jpg'
        titulo.textContent = 'Golden'
        archivo = '/imagenes/golden.jpg'
        texto.textContent = 'El golden retriever es una raza de perro cobrador que se desarrolló alrededor de 1850 en el Reino Unido, concretamente en Escocia. Con sus características de perro cobrador, sabueso, bloodhound y spaniel de agua, es un hábil perro de caza con aptitudes para el rastreo. Posee una disposición amigable y una actitud que lo ha convertido en una de las razas familiares más populares (mediante registro) en los Estados Unidos, Argentina y en Canadá,​ el quinto más popular en Australia, y la octava raza más popular en el Reino Unido.';
    }
}


//el boton anterior, se encarga de mostrar la imagen anterior a la actual
Anterior.onclick = function () {
    // Aca preguntamos si el archivo de imagen es golden
    if (archivo == '/imagenes/golden.jpg') {
        //si esto es cierto, entonces mostramos su anterior, el cual es policia.
      imagen.src = '/imagenes/policia.jpg'
      titulo.textContent = 'Policia'
      archivo = '/imagenes/policia.jpg'
      texto.textContent = 'Perros policía en la exhibición del día de los Ángeles custodios, patrones del Cuerpo Nacional de Policía, en Palencia (España). Perro policía se denomina a los perros adiestrados con fines de seguridad pública e investigación policíaca. Además, se les considera como uno de los mejores acompañantes al momento de investigaciones que necesiten de gran olfato e instinto. Las razas más importantes que se usan para realizar esta actividad son​ el pastor alemán, rottweiler y doberman. Aunque para labores que no incluyan defensa o ataque, como lo es detección de drogas en aeropuertos o lugares públicos, se pueden usar también razas como el labrador retriever o el pastor belga. La raza más conocida es el pastor alemán y la gran mayoría es procedente de líneas de trabajo, puesto que la excesiva fragilidad de las líneas de belleza no son aptas para el ejercicio intenso que exige el entrenamiento de un perro policía. No obstante, esta raza tan extendida en el mundo, está siendo sustituida por otra menos conocida: se trata del pastor belga (Malinois)​, considerada por muchos especialistas en la materia, como la mejor raza de utilidad del mundo, debido a sus excelentes cualidades atléticas​ y a la rigurosa selección que ha sido sometida a lo largo de su historia en la que los ejemplares de belleza o exposición apenas han cobrado protagonismo.'

}

if(archivo == '/imagenes/policia.jpg'){
    imagen.src = '/imagenes/caniche.jpg'
        titulo.textContent = 'Caniche'
        archivo = '/imagenes/caniche.jpg'
        texto.textContent = 'El caniche (en inglés, poodle) es una raza canina que hasta el siglo xv se consideró de uso exclusivo de los aristócratas y nobles. Fue un perro cobrador de aguas hasta el Renacimiento: recuperaban las presas ya cazadas que habían caído al agua, como patos y cisnes. Hoy en día se les encuentra frecuentemente en las exposiciones caninas de belleza. Existen cuatro variedades: grande, mediano, enano y toy y en diferentes colores.'

}

if(archivo == '/imagenes/caniche.jpg'){
    imagen.src = '/imagenes/perro.jpg'
        titulo.textContent = 'San Bernardo'
        archivo = '/imagenes/perro.jpg'
        texto.textContent = 'El san bernardo (en alemán, St. Bernhardshund; en francés, Chien du Saint-Bernard) es una raza de perro originaria de los Alpes suizos y del norte de Italia. Es el perro boyero más famoso junto con el mastín del Pirineo, y es muy próximo al gran boyero suizo. Desciende del extinto mastín de los Alpes, que se mezcló con otras razas como el dogo del Tíbet, el terranova y el gran danés.'

}













}
