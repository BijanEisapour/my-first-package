import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
	selector: '[bePoppy]'
})
export class PoppyDirective {
	constructor(private el: ElementRef, private renderer: Renderer2) {
		renderer.setStyle(el.nativeElement, "boxShadow", "0px 0px 23px 0px rgba(0, 0, 0, 0.23)");
	}
}
