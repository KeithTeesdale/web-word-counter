import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web Word-counter';
  count = 0;
  angularForm = new FormGroup({
    text: new FormControl()
  });

  constructor(private fb: FormBuilder){
    this.createForm();
  }

  createForm(){
    this.angularForm = this.fb.group({
      text: ['', Validators.required],
    });
  }

  onFormSubmit() {
    	if(this.angularForm.valid) {
        this.count = this.angularForm.value.text.split(' ').length;
			  console.log(this.count);
		}
	}
}
