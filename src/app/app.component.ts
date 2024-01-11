import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elements-app-2';
  @ViewChild('testElement')testElement:ElementRef | undefined;

  private unlistenToEvent!: () => void;

  constructor(private renderer:Renderer2){}

  ngAfterViewInit(){
    this.unlistenToEvent=this.renderer.listen(this.testElement?.nativeElement,'computed',(event)=>{
      console.log(event)
    })
  }

  ngOnDestroy(){
    this.unlistenToEvent();
  }
}
