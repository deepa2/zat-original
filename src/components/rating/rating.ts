import { Component, Input, EventEmitter, Output } from "@angular/core";
import { NavParams, ViewController } from 'ionic-angular'

enum COLORS
{
    GREY = 'grey',
    RED = 'red',
    GREEN = 'green',
    YELLOW = 'yellow',
    GOLDEN_YELLOW = '#ffbb00'
}

@Component({
    selector: "rating",
    templateUrl: "rating.html"
})
export class Rating
{
    placeholder = "Comments"
    ratingData: any;
    comments: any;
    selectedStars: any
    // selectedStars: any;
    isDisabled: boolean = false;
    islowRating: boolean = false;
    @Input() rating: number;
    // @Input() fromReportModule: boolean = false;
    fromReportModule: any;

    @Output() ratingChange: EventEmitter<number> = new EventEmitter();;

    constructor(private navParams: NavParams, private viewCtrl: ViewController)
    {
        this.ratingData = this.navParams.get('ratingData');
        this.fromReportModule = this.navParams.get('fromReportModule');
        if (this.ratingData)
        {
            this.comments = this.ratingData.ratingComments;
            this.selectedStars = this.ratingData.rating + 1;
        }
        if (!this.comments && this.selectedStars - 1 > 3)
        {
            this.isDisabled = false;
        } else if (this.comments)
        {
            this.isDisabled = false;
        } else
        {
            this.isDisabled = true;
        }
    }

    rate(index: number)
    {
        this.rating = index;
        this.ratingChange.emit(this.rating);
    }

    getColor(index: number)
    {

        if (this.isAboveRating(index))
        {
            return COLORS.GREY;
        } else
        {
            return COLORS.GOLDEN_YELLOW;
        }

    }

    isAboveRating(index: number): boolean
    {
        return index > this.rating;
    }

    rateStar(selectedStar)
    {
        this.selectedStars = selectedStar + 1;
        if (this.selectedStars - 1 <= 3 && !this.comments)
        {
            this.placeholder = "What went wrong?"
            this.isDisabled = true;
            this.islowRating = true;
        } else if (this.selectedStars - 1 > 3)
        {
            this.isDisabled = false;
            this.islowRating = false;
            this.placeholder = "What went well?"
        } else if (this.selectedStars - 1 <= 3 && this.comments)
        {
            this.isDisabled = false;
            this.islowRating = false;
            this.placeholder = "What went wrong?"
        }

    }

    submitRating()
    {
        if (!this.isDisabled)
        {
            if (this.ratingData && this.ratingData.hasOwnProperty('comments') && this.ratingData.hasOwnProperty('rating'))
            {
                this.ratingData.comments = this.comments;
                this.ratingData.rating = this.selectedStars;
                this.viewCtrl.dismiss(this.ratingData);
            } else
            {
                var ratingData = {
                    comments: this.comments,
                    rating: this.selectedStars
                }
                this.viewCtrl.dismiss(ratingData);
            }
        }

    }

    closeModal()
    {
        this.viewCtrl.dismiss();
    }

    updateBtn()
    {
        if (!this.comments && this.selectedStars - 1 <= 3)
        {
            this.isDisabled = true;
            this.islowRating = true;
        } else
        {
            this.isDisabled = false;
            this.islowRating = false;
        }
    }
}