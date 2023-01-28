import { Component } from '@angular/core';
import * as ClassicEditorBuild from 'ckeditor5-build-classic/build/ckeditor';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editingpage',
  templateUrl: './editingpage.component.html',
  styleUrls: ['./editingpage.component.scss']
})
export class EditingpageComponent {
  public Editor = ClassicEditorBuild;

}
