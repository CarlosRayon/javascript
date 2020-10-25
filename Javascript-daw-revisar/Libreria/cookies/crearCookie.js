/* 
 * Funcion para crear una cookie
 * @argument {String} name Nombre de la cookie
 * @argument {Sring} value Valor para el nombre
 * @argument {Integer} days Dias para que la cookie expire
 * @argument {String} path  Ruta donde guardar la cookie
 * @argument {String} domain Indica el dominio de la cookie.
 * @argument {String} secure Indica si el navegador tiene usar
 */


function crearCookie(name,value,days,path,domain,secure)
{
    if(dias){
        
        var date=new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 1000));
        var expires=date.toUTCString();
             
    }else
    {
        var expires="";
    }
    
    cookieString=name + "=" +  escape(value);
    if(expires) cookieString += "; expires=" + expires;
    if(path) cookieString += "; path=" + escape(path);
    if(domain) cookieString += "; domain=" + escape(domain);
    if(secure) cookieString += ";secure";
    document.cookie=cookieString;
    
};

