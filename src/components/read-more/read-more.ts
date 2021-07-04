import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ZenDeavorDashboardPage } from 'container/zen-deavor-dashboard/zen-deavor-dashboard';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';


@Component({
  selector: 'read-more',
  templateUrl: 'read-more.html'
})
export class ReadMoreComponent implements OnInit
{

  @Input() desc: any;
  @Input() showToggle: boolean = true;
  @Input() UpdateProfileLinkData: any;
  @Input() moveToPage: boolean = false;
  @Input() actionName: string = ''

  @Output() updateProfile: EventEmitter<any> = new EventEmitter();
  @Output() moveToPageAllow: EventEmitter<any> = new EventEmitter();

  truncateLength: number = 150;
  maxLength: number = this.truncateLength;
  text: any;
  originalStringLength: any;
  showMoreSection: boolean = false;
  readMore: boolean = false;

  constructor(private navCtrl: NavController, private utility: CommonUtilities) { }

  ngOnInit()
  {
    if (this.desc)
    {
      //previous code 
      // var myString = new htmlString.String(this.desc);
      // var truncatedString = myString.slice(0, 200).html();
      // var originalString = myString.slice(0, this.desc.length).html();

      //new code
      var myString = this.urlify(this.desc);
      var truncatedString = myString.slice(0, 200);
      if (this.desc.length >= truncatedString.length)
      {
        var originalString = myString.slice(0, this.desc.length)

        // this.text = originalString;  

        if (originalString.length > truncatedString.length)
        {
          this.showMoreSection = true;
          this.readMore = true;
          this.text = truncatedString + '...';
        } else
        {
          this.showMoreSection = false;
          this.text = truncatedString;
        }
      } else
      {
        this.showMoreSection = false;
        this.text = myString;
      }
    }

  }

  showMore(descLength)
  {
    this.readMore = false;
    this.maxLength = descLength;
    this.text = this.urlify(this.desc);
  }

  showLess(descLength)
  {
    this.readMore = true;
    this.maxLength = descLength;
    //previous ode
    // var myString = new htmlString.String(this.desc);
    // var truncatedString = myString.slice(0, 200);
    // );
    // this.text = truncatedString.html() + '...';

    //new code
    var myString = this.urlify(this.desc);
    var truncatedString = myString.slice(0, 200);
    this.text = truncatedString + '...';

  }

  toggleRead()
  {
    if (this.showMoreSection && this.showToggle)
    {
      if (this.readMore)
      {
        this.showMore(this.desc.length);
      } else
      {
        this.showLess(this.maxLength);
      }
    }
  }

  preventClick(event)
  {
    let tagName = event.srcElement.tagName;
    if (tagName === 'A')
    {
      event.stopPropagation();
    }
  }

  urlify(text)
  {
    if (text != undefined)
    {
      //;
      var newText = text.replace(/\n/g, "<br/>");
      var urlRegex = /(https?:\/\/[^\s]+)/g;
      return newText.replace(urlRegex, function (url)
      {
        // ;
        return '<a class="linkline">' + url + '</a>';
      })

    }
  }

  update(dataObj)
  {
    if (dataObj)
      this.updateProfile.emit(dataObj);
  }
  _moveToPage()
  {
    // this.navCtrl.push(ZenDeavorDashboardPage)
    this.moveToPageAllow.emit('moveToPage');
  }
  checkLink(data)
  {
    let url = data.match(/\bhttps?:\/\/\S+/gi);
    if (url && url[0])
    {
      let urlValue = url[0].replace(/(<([^>]+)>)/ig, '');
      this.utility.openWithSystemBrowser(urlValue);
    }

  }

}
