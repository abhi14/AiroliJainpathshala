import { Component, OnInit,Input } from '@angular/core';
import { PagesLoadedEvent } from 'ngx-extended-pdf-viewer/lib/pages-loaded-event';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  SentItem : any;
  pdfLink : string;
  //src = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
 // src = "https://www.tutorialspoint.com/angular2/angular2_tutorial.pdf";
  //src = "https://www.dropbox.com/s/bmovnmb564vsafn/TaxReport.pdf?dl=0";
 //src="https://firebasestorage.googleapis.com/v0/b/ajitnathjainpathshala.appspot.com/o/uploads%2FTest.pdf?alt=media&token=cf99a6c7-f5b2-4226-b3df-45df1d45d462";
src="https://firebasestorage.googleapis.com/v0/b/ajitnathjainpathshala.appspot.com/o/uploads%2F%E0%A4%AA%E0%A5%81%E0%A4%A3%E0%A5%8D%E0%A4%AF%20%E0%A4%95%E0%A4%BE%20%E0%A4%AB%E0%A4%B2-1.PDF?alt=media&token=5e22e9b9-9d3e-4f7d-bd8e-90a1f8cc3cb1";
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(r=>this.SentItem =r
      
    );

  //  console.log("this.SentItem "+this.SentItem.payload.doc.data().Name)
  //  this.route.queryParams.subscribe( params => console.log(params.link) );
   }

  @Input() link: string;

  ngOnInit() {
    this.pdfLink = this.SentItem.payload.doc.data().link;
    //console.log("this.SentItem "+this.SentItem.payload.doc.data().link)
  }

  public title = 'ngx-extended-pdf-viewer';
  public pdf = 'assets/example.pdf';
  public hidden = false;
  public zoom: number | string | undefined = 42;
  public visible = { 0: true };
  public mobileFriendlyZoomPercent = false;
  public showSidebar = false;
  public height: string | undefined = '80vh';
  public filenameForDownload: string | undefined = undefined;

  public page: number | undefined = undefined;

  public handTool: boolean | undefined = undefined;

  public get zoomAuto(): boolean {
    return this.zoom === 'auto';
  }

  public set zoomAuto(auto: boolean) {
    if (auto) {
      this.zoom = 'auto';
    }
  }

  public get zoomPageActual(): boolean {
    return this.zoom === 'page-actual';
  }

  public set zoomPageActual(auto: boolean) {
    if (auto) {
      this.zoom = 'page-actual';
    }
  }

  public get zoomPageFit(): boolean {
    return this.zoom === 'page-fit';
  }

  public set zoomPageFit(auto: boolean) {
    if (auto) {
      this.zoom = 'page-fit';
    }
  }

  public get zoomPageWidth(): boolean {
    return this.zoom === 'page-width';
  }

  public set zoomPageWidth(auto: boolean) {
    if (auto) {
      this.zoom = 'page-width';
    }
  }

  public get zoom84percent(): boolean {
    return this.zoom === '84%';
  }

  public set zoom84percent(auto: boolean) {
    if (auto) {
      this.zoom = '84%';
    }
  }

  public get zoom42(): boolean {
    return this.zoom === '42';
  }

  public set zoom42(auto: boolean) {
    if (auto) {
      this.zoom = '42';
    }
  }

  public get mobileFriendlyZoom(): string | undefined {
    if (this.mobileFriendlyZoomPercent) {
      return '200%';
    }
    return undefined;
  }

  public activateTab(tab: number): void {
    this.hideOtherPDFs();
    setTimeout(() => {
      this.visible[tab] = true;
    }, 100);
  }

  public hideOtherPDFs(): void {
    this.visible[0] = false;
    this.visible[1] = false;
    this.visible[2] = false;
    this.visible[3] = false;
  }

  public get height50() {
    return this.height === '50%';
  }

  public set height50(value: boolean) {
    if (value) {
      this.height = '50%';
    } else {
      if (this.height === '50%') {
        this.height = undefined;
      }
    }
  }

  public get height314() {
    return this.height === '314px';
  }

  public set height314(value: boolean) {
    if (value) {
      this.height = '314px';
    } else {
      if (this.height === '314px') {
        this.height = undefined;
      }
    }
  }

  public get height80vh() {
    return this.height === '80vh';
  }

  public set height80vh(value: boolean) {
    if (value) {
      this.height = '80vh';
    } else {
      if (this.height === '80vh') {
        this.height = undefined;
      }
    }
  }
  public get height100() {
    return this.height === '100%';
  }

  public set height100(value: boolean) {
    if (value) {
      this.height = '100%';
    } else {
      if (this.height === '100%') {
        this.height = undefined;
      }
    }
  }

  public onPagesLoaded(event: PagesLoadedEvent) {
    console.log('Document loaded with ' + event.pagesCount + ' pages');
  }
}
