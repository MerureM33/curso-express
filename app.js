const express = require("express")
const app = express()
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs")

const categorias = [
  {
    nombre: "Programación",
    cursos: [
      { id: 1, titulo: "Curso de JavaScript", descripcion: "Aprende JS desde cero", imagen: "/images/cursoJavascript.jpg" },
      { id: 2, titulo: "Curso de Node.js", descripcion: "Crea apps con Node y Express", imagen: "/images/cursonodejs.jpg" },
      { id: 3, titulo: "Curso de Python", descripcion: "Fundamentos de Python", imagen: "/images/cursoPython.jpg" },
      { id: 4, titulo: "Curso de Java", descripcion: "POO y aplicaciones con Java", imagen: "/images/cursoJava.jpg" }
    ]
  },
  {
    nombre: "Diseño",
    cursos: [
      { id: 5, titulo: "Curso de Photoshop", descripcion: "Retoque digital básico", imagen: "/images/cursoPhotoshop.jpg" },
      { id: 6, titulo: "Curso de Illustrator", descripcion: "Diseño vectorial", imagen: "/images/cursoIllustrador.jpg" },
      { id: 7, titulo: "Curso de UX/UI", descripcion: "Diseño de interfaces", imagen: "/images/cursoUX-UI.jpg" },
      { id: 8, titulo: "Curso de Figma", descripcion: "Prototipado y diseño web", imagen: "/images/cursoFigma.jpg" }
    ]
  },
  {
    nombre: "Marketing",
    cursos: [
      { id: 9, titulo: "Curso de Marketing Digital", descripcion: "Estrategias digitales", imagen: "/images/cursoMarketingDigital.jpg" },
      { id: 10, titulo: "Curso de SEO", descripcion: "Posiciona tu web en Google", imagen: "/images/cursoSEO.jpg" },
      { id: 11, titulo: "Curso de Redes Sociales", descripcion: "Gestión de Instagram y Facebook", imagen: "/images/cursoRedesSociales.jpg" },
      { id: 12, titulo: "Curso de Publicidad", descripcion: "Google Ads y campañas online", imagen: "/images/cursoPublicidad.jpg" }
    ]
  }
];

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/cursos", (req, res) => {
    res.render("cursos", { categorias });
});
app.get("/curso/:id", (req, res) => {
  const id = parseInt(req.params.id);

  
  let cursoEncontrado = null;
  categorias.forEach(cat => {
    cat.cursos.forEach(curso => {
      if (curso.id === id) cursoEncontrado = curso;
    });
  });

  if (!cursoEncontrado) {
    return res.status(404).send("Curso no encontrado");
  }

  res.render("detalle", { curso: cursoEncontrado });
});

app.listen(3000,(req,res)=>{
console.log("Corriendo en el puerto 3000")
})