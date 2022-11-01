class PasosASeguir {
  constructor(titulo, bulletInicio){
    this.pasos = []; 
    this.titulo = titulo;
    this.bulletInicio = bulletInicio ?? 1;
  }
  add(paso){this.pasos.push(paso);}
  getHtml() {
    let sHTML = (this.titulo != "") ? `<h3>${this.titulo}</h3>`: '';
    sHTML += "<ol start=" + this.bulletInicio + ">" + this.pasos.map((p)=>p.getHtml()).join('') + "</ol>";
    return sHTML;
  }
}

class PasoASeguir {
  constructor(paso){this.paso = paso;}
  getHtml() {return "<li>" + ((typeof this.paso === 'object') ? this.paso.getHtml() : this.paso) + "</li>";}
}

class ClavesYValores {
  constructor(titulo){this.clavesYValores = []; this.titulo = titulo;}
  add(claveYValor){this.clavesYValores.push(claveYValor);}
  getHtml() {return "<dl><dt>" + this.titulo + "</dt>" + this.clavesYValores.map((c)=>c.getHtml()).join('') + "</dt>";}
}

class ClaveYValor {
  constructor(c, v){this.clave = c; this.valor = v;}
  getHtml() {return "<dd>" + this.clave + ": <strong><i>" + this.valor + "</i></strong></dd>";}
}

class Valor {
  constructor(v){this.valor = v;}
  getHtml() {return "<dd><strong><i>" + this.valor + "</i></strong></dd>";}
}

class SubValor {
  constructor(v){this.valor = v;}
  getHtml() {return "<dd>" + this.valor.getHtml() + "</dd>";}
}
