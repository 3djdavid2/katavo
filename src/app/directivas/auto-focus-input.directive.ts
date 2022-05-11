import { Directive, AfterContentInit, ElementRef,Input,Renderer2} from '@angular/core';

@Directive({
  selector: '[AutoFocusInput]'
})
export class AutoFocusInputDirective implements AfterContentInit {

  // @Input() public AutoFocus!:boolean;

  constructor(private el:ElementRef, private render: Renderer2) {
    
   }

  public ngAfterContentInit(): void {
    setTimeout(()=>{
      let myEl= this.render.selectRootElement('input');     
      myEl.focus();      
    }, 500);
  }

}