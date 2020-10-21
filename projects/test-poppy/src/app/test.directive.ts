import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appTest]'
})
export class TestDirective {
	constructor(private el: ElementRef, private renderer: Renderer2) {
		console.log(el);

		renderer.setStyle(el.nativeElement, "backgroundColor", "red");
		el.nativeElement.style.shadowBox = "10px 10px 0 0 black";
	}
}
