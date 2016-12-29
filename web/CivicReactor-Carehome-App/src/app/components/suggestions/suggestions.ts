import {Component} from '@angular/core';


@Component({
  selector: 'suggestions',
  templateUrl: './suggestions.html',
  styleUrls: ['./suggestions.scss']
})

export class SuggestionsCmp {}

// Where does this go? I use this method so that bots cannot read email address directly from html file to spam us. Usually this would got in a js.html file but not sure about using typescript.
// <script>
//   var contactform =  document.getElementById('contactform');
//   contactform.setAttribute('action', '//formspree.io/' + 'insert' + '@' + 'email' + '.' + 'here');
// </script>
