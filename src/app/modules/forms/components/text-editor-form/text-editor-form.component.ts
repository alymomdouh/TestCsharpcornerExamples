import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Quill from 'quill';
import BlotFormatter from 'quill-blot-formatter';

Quill.register('modules/blotFormatter', BlotFormatter)
@Component({
  selector: 'app-text-editor-form',
  templateUrl: './text-editor-form.component.html',
  styleUrls: ['./text-editor-form.component.css']
})
export class TextEditorFormComponent implements OnInit {

  templateForm!: FormGroup;
  quillEditorModules = {};
  constructor() {
    this.templateForm = new FormGroup({
      textEditor: new FormControl(""),
    });
    this.quillEditorModules = {
      blotFormatter: {}
    }
  }
  testEditorContent() {
    alert(this.templateForm.get('textEditor')!.value);
  }
  ngOnInit(): void {
  }

}
