import { Component } from '@angular/core';
import { EmailService } from '../../services/email';


@Component({
  selector: 'suggestions',
  templateUrl: './suggestions.html',
  styleUrls: ['./suggestions.scss']
})

export class SuggestionsCmp {
  constructor(public emailService: EmailService) { }
  feedbackForm = {};
  successMessage = "";
  errorMessage = "";
  sendingEmail = false;

  sendEmail() {
    this.successMessage = "";
    this.errorMessage = "";
    this.sendingEmail = true;
    this.emailService.send(this.feedbackForm)
      .subscribe(
      data => console.log('response:', data),
      error => {
        this.errorMessage = "Error sending the email";
        this.sendingEmail = false;
      },
      () => {
        this.successMessage = "Email sent!"
        this.sendingEmail = false;
      }
      );
  }
}
