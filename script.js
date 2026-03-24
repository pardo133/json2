

const colorEstado = { r: 255, g: 255, b: 255 };


const actualizarNave = () => {
    
    const colorFinal = `rgb(${colorEstado.r}, ${colorEstado.g}, ${colorEstado.b})`;
    
   
    document.body.style.backgroundColor = colorFinal;
    
   
    document.getElementById("color-text").textContent = colorFinal;
};


document.getElementById("btn-red").onclick = () => {
    colorEstado.r = Math.floor(Math.random() * 256);
    actualizarNave(); 
};


document.getElementById("btn-green").onclick = () => {
    colorEstado.g = Math.floor(Math.random() * 256);
    actualizarNave();
};


document.getElementById("btn-blue").onclick = () => {
    colorEstado.b = Math.floor(Math.random() * 256);
    actualizarNave();
};

