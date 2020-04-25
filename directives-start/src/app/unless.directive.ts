import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

@Input() set appUnless(condition: boolean){
  if(!condition){
    this.vcRef.createEmbeddedView(this.templateRef)
  }
  else{
    this.vcRef.clear();
  }
}

  constructor(private vcRef: ViewContainerRef, private templateRef: TemplateRef<any>) { }

}
