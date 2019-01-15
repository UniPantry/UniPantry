import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refer-friend',
  templateUrl: './refer-friend.component.html',
  styleUrls: ['./refer-friend.component.css']
})
export class ReferFriendComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  copyToClipboard() {
    /* Get the text field */
    const copyText = (document.getElementById('referLink') as any);

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand('copy');
  }

}
