import { NgModule } from '@angular/core';

// Usamos defineCustomElements para registrar los componentes
import { defineCustomElements } from '@web-components-library/loader';
// Ristramos los componentes
defineCustomElements(window)

//Import de nuestro componente stenciljs
import {MyAtom, MyComponent} from "./web-components"

@NgModule({
  declarations: [
    MyAtom,
    MyComponent
  ],
  exports: [
    MyAtom,
    MyComponent
  ],
})
export class WebComponentsLibraryModule { }
