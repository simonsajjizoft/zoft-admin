import { Component,OnInit,OnChanges, ViewChild, ElementRef } from '@angular/core';
import * as ClassicEditorBuild from 'ckeditor5-build-classic/build/ckeditor';
import { FormControl } from '@angular/forms';
import  html2canvas from "html2canvas"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editingpage',
  templateUrl: './editingpage.component.html',
  styleUrls: ['./editingpage.component.scss']
})
export class EditingpageComponent implements OnInit,OnChanges {
  public Editor = ClassicEditorBuild;
  blogContent:String = '';
  id:any;
  content:any;
  blogUrlText:String = 'https://www.zoftsolutions.com/How-to-detect-ML';
  isContentURLEditorOpen:boolean = false;
  blogUrlDisplay:any;
  @ViewChild('screen') screen: ElementRef | any;
  @ViewChild('canvas') canvas: ElementRef | any;
  @ViewChild('downloadLink') downloadLink: ElementRef |any;
  @ViewChild("myEditor", { static: false }) myEditor: any;

  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    this.blogUrlText = 'https://www.zoftsolutions.com/How-to-detect-ML';
    this.blogUrlDisplay = this.blogUrlText;
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { order: "popular" }
        this.id = params['id'];
        this.content = params['content'];
       if(this.content) this.blogContent = this.content;

        console.log(this.content); // popular
      }
    );

  }
  ngOnChanges(){}

  viewContent(){
    console.log(this.Editor);
    console.log(this.blogContent);

  }

  saveURLEditor(){
    this.blogUrlDisplay = this.blogUrlText;
    this.isContentURLEditorOpen = false;
  }
  closeURLEditor(){
    this.isContentURLEditorOpen = false;
  }

  changeBlogUrl(ev:any){
    this.blogUrlText = ev;
    console.log(ev)

  }

 

}
