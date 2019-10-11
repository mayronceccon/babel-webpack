import "./base.scss";
import { User } from "./user";

class Generator {
  createParagraph(__string) {
    User.ola(__string);
    const textNode = document.createTextNode(__string);
    const paragraphElement = document.createElement("P");
    paragraphElement.appendChild(textNode);
    return paragraphElement;
  }

  createDiv(__innerNode) {
    const divElement = document.createElement("DIV");
    if (__innerNode) {
      divElement.appendChild(__innerNode);
    }
    return divElement;
  }
}

const gen = new Generator;
const par = gen.createParagraph("Mayron");
const div = gen.createDiv(par);

document.body.appendChild(div);
