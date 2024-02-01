// Importa los datos para personalizar e insertarlos en la página
const fetchData = () => {
    fetch("customize.json")
      .then(data => data.json())
      .then(data => {
        Object.keys(data).forEach(customData => {
          if (data[customData] !== "") {
            const element = document.querySelector(`[data-node-name*="${customData}"]`);
            if (element) {
              if (customData === "imagePath") {
                element.setAttribute("src", data[customData]);
              } else {
                element.innerText = data[customData];
              }
            }
          }
        });
        // Iniciar la animación solo para las secciones "one" y "two"
        animationTimeline();
      });
  };
  
  // Línea de tiempo de la animación
  const animationTimeline = () => {
    const tl = new TimelineMax();
  
    tl
      .to(".container", 0.1, { visibility: "visible" })
      .from(".one", 0.7, { opacity: 0, y: 10 })
      .from(".two", 0.4, { opacity: 0, y: 10 })
      .to(".one", 100.7, { opacity: 0, y: 10 }, "+=2.5")
      .to(".two", 100.7, { opacity: 0, y: 10 }, "-=1");
  
    // Reiniciar la animación al hacer clic en el botón "replay"
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
      tl.restart();
    });
  };
  
  // Ejecutar la función fetchData
  fetchData();
  