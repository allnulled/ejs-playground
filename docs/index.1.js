
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>🌐 EJS Playground</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/codemirror/codemirror.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/win7/win7.scoped.2.css\" />\n    <script src=\"lib/calo/calo.js\"></script>\n    <script src=\"lib/codemirror/codemirror.js\"></script>\n    <script src=\"lib/ejs/ejs.js\"></script>\n    <style>\n      @font-face {\n        font-family: Roboto;\n        src: url(\"./lib/fonts/Roboto/Roboto-Regular.ttf\");\n      }\n      html {\n        background-color: #444;\n        font-family: Roboto;\n      }\n      h5 {\n        background-color: #333;\n        color: white;\n        margin: 0;\n        padding: 12px;\n        font-size: 12px;\n      }\n      .width_100 {\n        width: 100%;\n      }\n      #error {\n        padding: 12px;\n        background-color: red;\n        color: white;\n        font-weight: bold;\n      }\n      hr {\n        margin: 0;\n      }\n      .CodeMirror {\n        background-color: #111;\n        color: #FFF;\n        font-size: 10px;\n      }\n      .CodeMirror-gutters {\n        background-color: #111;\n        color: #FFF;\n      }\n      .CodeMirror-cursor {\n        border-left: 1px solid white;\n      }\n    </style>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

window.PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <h5>🌐 EJS Playground. <a href=\"https://ejs.co/#docs\" target=\"_blank\">Visit the EJS docs</a>.</h5>"
 + "    <hr/>"
 + "    <h5>Input EJS template</h5>"
 + "    <div>"
 + "      <textarea ref=\"codigo_entrada\"></textarea>"
 + "    </div>"
 + "    <hr/>"
 + "    <div>"
 + "      <button class=\"width_100\" v-on:click=\"compilar_codigo\">Compilar</button>"
 + "      <div id=\"error\" v-if=\"error\" v-on:click=\"limpiar_error\">"
 + "        <div>Error: {{ error.name }}</div>"
 + "        <div>Mensaje: {{ error.message }}</div>"
 + "        <div>Pila: {{ error.stack }}</div>"
 + "      </div>"
 + "    </div>"
 + "    <hr/>"
 + "    <h5>Output text</h5>"
 + "    <div>"
 + "      <textarea ref=\"codigo_salida\"></textarea>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
return { cm_entrada:undefined,
cm_salida:undefined,
error:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ gestionar_error( error ) {try {
this.error = error;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
async compilar_codigo() {try {
const entrada = this.cm_entrada.getValue(  );
const salida = (await this.$window.ejs.render( entrada,
{ 
},
{ async:true
} ));
this.cm_salida.setValue( salida );
} catch(error) {
this.gestionar_error( error );}
},
limpiar_error() {try {
this.error = undefined;
this.$forceUpdate( true );
} catch(error) {
this.gestionar_error( error );}
}
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {try {
this.cm_entrada = CodeMirror.fromTextArea( this.$refs.codigo_entrada,
{ lineNumbers:true
} );
this.cm_salida = CodeMirror.fromTextArea( this.$refs.codigo_salida,
{ lineNumbers:true
} );
} catch(error) {
console.log(error);
throw error;
}

},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
window.App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app win7\">"
 + "    <router-view :root=\"this\"></router-view>"
 + "  </div>",
  function(component) {return { data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
beforeMount() {try {
this.$window = window;
} catch(error) {
console.log(error);
throw error;
}

},
mounted() {
}
};},
  "html {}\n    body {}\n    .Component {}\n    .App {}\n",
  {},
  [ { path:"/",
name:"PaginaDeInicio",
component:PaginaDeInicio,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");