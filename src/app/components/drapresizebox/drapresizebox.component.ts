import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drapresizebox',
  templateUrl: './drapresizebox.component.html',
  styleUrls: ['./drapresizebox.component.scss']
})
export class DrapresizeboxComponent implements OnInit, AfterViewInit {
  @ViewChild('resizableBox') resizableBox!: ElementRef;
  isResizing = false;
  lastX = 0;
  lastY = 0;

  constructor(){


  }
  ngOnInit(): void {
    console.log("drag")
    
  }

  ngAfterViewInit() {
    const box = this.resizableBox.nativeElement;

    const resizer = box.querySelector('.resizer') as HTMLElement;
    resizer.addEventListener('mousedown', (e: MouseEvent) => {
      this.isResizing = true;
      this.lastX = e.clientX;
      this.lastY = e.clientY;
      e.preventDefault();
    });

    window.addEventListener('mousemove', (e: MouseEvent) => {
      // if (this.isResizing ) return;
      if (!this.isResizing) return;
      const dx = e.clientX - this.lastX;
      const dy = e.clientY - this.lastY;
      const style = window.getComputedStyle(box);

      box.style.width = `${parseInt(style.width) + dx}px`;
      box.style.height = `${parseInt(style.height) + dy}px`;

      this.lastX = e.clientX;
      this.lastY = e.clientY;
    });

    window.addEventListener('mouseup', () => {
      this.isResizing = false;
    });
  }
}
