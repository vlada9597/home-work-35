import "./styles.scss";
import "./extra.less";
import foto from "./foto.jpg";

const img: HTMLImageElement = document.createElement("img");
img.src = foto;
img.alt = "Фото з TypeScript";
document.body.appendChild(img);

console.log("TypeScript + Webpack працює 🚀");
