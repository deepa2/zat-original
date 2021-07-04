import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-zelearn-popover',
  templateUrl: 'zelearn-popover.html',
})
export class ZelearnPopoverPage
{

  offeringType: string;
  private filterArray: any;
  private filteredData: any;
  private data: any;
  private showAllFilters: any
  private checkedAll: boolean = false;
  private isFromCalendar;
  private showSubTYpe: boolean = true;
  private isComingFromRecommendations;


  constructor(public viewCtrl: ViewController,
    public navCtrl: NavController,
    private navParams: NavParams)
  {
    this.data = this.navParams.get('data');
    this.showAllFilters = this.data.showAllFilters;
    this.isFromCalendar = this.data.isFromCalendar;
    this.isComingFromRecommendations = this.data.isComingFromRecommendations;

    this.offeringType = this.data.offeringType
    let learningMode;
    let subOnlineFilter;
    if (this.isFromCalendar)
    {
      learningMode = [
        {
          "value": "Classroom",
          "checked": true
        },
        {
          "value": "V Learn",
          "checked": true
        }
      ]
    }
    else
    {
      learningMode = [
        {
          "value": "Classroom",
          "checked": true
        },
        {
          "value": "V Learn",
          "checked": true
        },
        {
          "value": "Online",
          "checked": true
        }
      ],
        subOnlineFilter = [{
          "value": "VIDEO",
          "checked": true
        },
        {
          "value": "WEBNR",
          "checked": true
        },
        {
          "value": "ELEARN",
          "checked": true
        },
        {
          "value": "BOOK",
          "checked": true
        },
        {
          "value": "DOC",
          "checked": true
        },
        {
          "value": "OTHERS",
          "checked": true
        }
        ]

    }

    if (this.data.filteredData)
    {
      this.checkedAll = this.data.filteredData.checkedAll
      this.filterArray = this.data.filteredData.filterArray;
    } else if (this.offeringType == 'Technical' || this.offeringType == 'Behavioural')
    {
      this.filterArray = {
        "title": "Filter",
        "offeringType": [
          // {
          //   "value": "all",
          //   "checked": false
          // },
          // {
          //   "value": "enrolled",
          //   "checked": false
          // },
          // {
          //   "value": "recommended",
          //   "checked": false
          // }
        ],

        "learningType": [
          {
            "value": "Technical",
            "checked": true
          },
          {
            "value": "Behavioural",
            "checked": true
          }
        ],

        "learningMode": learningMode,
        "SubTypes": subOnlineFilter
      }

      for (let i = 0; i < this.filterArray.learningType.length; i++)
      {
        if (this.filterArray.learningType[i].value == this.offeringType)
        {
          this.filterArray.learningType[i].checked = true
        } else
        {
          this.filterArray.learningType[i].checked = false
        }
      }
    } else
    {

      this.filterArray = {
        "title": "Filter",
        "offeringType": [
          // {
          //   "value": "all",
          //   "checked": false
          // },
          // {
          //   "value": "enrolled",
          //   "checked": false
          // },
          // {
          //   "value": "recommended",
          //   "checked": false
          // }
        ],

        "learningType": [
          {
            "value": "Technical",
            "checked": true
          },
          {
            "value": "Behavioural",
            "checked": true
          }
        ],
        "learningMode": learningMode,
        "SubTypes": subOnlineFilter
      }

      for (let i = 0; i < this.filterArray.offeringType.length; i++)
      {
        if (this.filterArray.offeringType[i].value == this.offeringType)
        {
          this.filterArray.offeringType[i].checked = true
        } else
        {
          this.filterArray.offeringType[i].checked = false
        }
      }
    }
  }

  _applyChanges()
  {
    this.viewCtrl.dismiss({ filterArray: this.filterArray, checkedAll: this.checkedAll });
  }

  _radioCheck(event: any)
  {
    for (let i = 0; i < this.filterArray.offeringType.length; i++)
    {
      if (this.filterArray.offeringType[i].value == event)
      {
        this.filterArray.offeringType[i].checked = true
      } else
      {
        this.filterArray.offeringType[i].checked = false
      }
    }
    this._selectAll(event)
  }

  _getLearningHistory(event: any)
  {
    for (let i = 0; i < this.filterArray.learningType.length; i++)
    {
      if (this.filterArray.learningType[i].value == event)
      {
        this.filterArray.learningType[i].checked = true
      } else
      {
        this.filterArray.learningType[i].checked = false
      }
    }
  }

  _checkAllBox(array: any, checkedAll: any)
  {
    for (let i = 0; i < array.length; i++)
    {
      array[i].checked = checkedAll
    }
  }

  _selectAll(event: any)
  {
    if (event == 'all')
    {
      this.checkedAll = true
      this._checkAllBox(this.filterArray.learningType, this.checkedAll)
      this._checkAllBox(this.filterArray.learningMode, this.checkedAll)
    }

  }

  updateValue(data)
  {
    if (data.value == 'Online' && !data.checked)
    {
      this.filterArray.SubTypes = [];
      this.showSubTYpe = false;
    } else if (data.value == 'Online' && data.checked)
    {
      this.filterArray.SubTypes = [{
        "value": "VIDEO",
        "checked": true
      },
      {
        "value": "WEBNR",
        "checked": true
      },
      {
        "value": "ELEARN",
        "checked": true
      },
      {
        "value": "Book",
        "checked": true
      },
      {
        "value": "DOC",
        "checked": true
      },
      {
        "value": "OTHERS",
        "checked": true
      }
      ];
      this.showSubTYpe = true;
    }
  }
}
