// Columna 1
let a = new ClavesYValores("Entrar al SpringInitializer (<a href='https://start.spring.io' target='_blank'>Abrir...</a>)");
a.add(new ClaveYValor("Project", "Maven"));
a.add(new ClaveYValor("Languaje", "Java"));
a.add(new ClaveYValor("Spring Boot", "2.7.5"));
let b = new ClavesYValores("Project Metadata:");
b.add(new ClaveYValor("Group", "Vacío"));
b.add(new ClaveYValor("Artifact", "Nombre del Proyecto"));
b.add(new ClaveYValor("Name", "Nombre del Proyecto"));
b.add(new ClaveYValor("Packaging", "Jar"));
b.add(new ClaveYValor("Java", "17"));
a.add(new SubValor(b));
b = new ClavesYValores("Add Dependencies...");
b.add(new Valor("Spring Boot Dev Tools"));
b.add(new Valor("Lombok"));
b.add(new Valor("Spring Web"));
a.add(new SubValor(b));
a.add(new Valor("Click en GENERATE"));

let pasos = new PasosASeguir('');
pasos.add(new PasoASeguir(a));
document.getElementById("javaSpringBoot1").innerHTML = pasos.getHtml();

// Columna 2
pasos = new PasosASeguir('', 2);
pasos.add(new PasoASeguir("Copiar el archivo ZIP generado en Download/Descargas a la carpeta padre de donde queremos alojar el Proyecto"));
pasos.add(new PasoASeguir("Descomprimir"));

a = new ClavesYValores("Preparar la estructura de Directorios del Proyecto (<a href='https://start.spring.io' target='_blank'>Ejecutar...</a>)");
a.add(new Valor("Crear en: Nombre del Proyecto/src/main/java/Nombre del Proyecto:"));
a.add(new Valor("controllers"));
a.add(new Valor("dto"));
b = new ClavesYValores("");
b.add(new Valor("request"));
b.add(new Valor("response"));
a.add(new SubValor(b));
a.add(new Valor("entities"));
a.add(new Valor("repository"));
a.add(new Valor("service"));
a.add(new Valor("utils"));
pasos.add(new PasoASeguir(a));
// let b = new ClavesYValores("Project Metadata:");
// b.add(new ClaveYValor("Group", "Vacío"));
// b.add(new ClaveYValor("Artifact", "Nombre del Proyecto"));
// b.add(new ClaveYValor("Name", "Nombre del Proyecto"));
// b.add(new ClaveYValor("Packaging", "Jar"));
// b.add(new ClaveYValor("Java", "17"));
// a.add(new SubValor(b));
// b = new ClavesYValores("Add Dependencies...");
// b.add(new Valor("Spring Boot Dev Tools"));
// b.add(new Valor("Lombok"));
// b.add(new Valor("Spring Web"));
// a.add(new SubValor(b));
// a.add(new Valor("Click en GENERATE"));

document.getElementById("javaSpringBoot2").innerHTML = pasos.getHtml();
