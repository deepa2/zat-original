import { Injectable } from '@angular/core';
import { FCM } from '@ionic-native/fcm';
import { HttpProvider } from '../../providers/http/http';
import { Platform, NavController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Data } from '../../providers/data/data';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import * as fromStore from '../../store';
import { GetterSetter } from '../../providers/getterSetter/getterSetter';

@Injectable()
export class FCMUtility
{

    private notificationURL = 'registerDeviceId';
    //private store:Store<fromStore.AppState>
    private iscalledFromLogin: boolean = false;

    constructor(private fcm: FCM, private httpProvider: HttpProvider, private plt: Platform, private localNotifications: LocalNotifications, private dataService: Data,
        private utils: CommonUtilities, private store: Store<fromStore.AppState>, private getSet: GetterSetter) { }

    getToken()
    {
        let data;
        this.fcm.getToken().then(token =>
        {
            data = token;


            this.dataService.saveData('fcmToken', token);
            if (this.iscalledFromLogin)
            {
                this.registerToken();
            }
        });

    }

    getTokenRefresh()
    {
        this.fcm.onTokenRefresh().subscribe(token =>
        {
            this.dataService.saveData('fcmToken', token);
        });
    }

    onNotification()
    {
        this.fcm.onNotification().subscribe(data =>
        {
            if (data.wasTapped)
            {
                //this.goToPage(data.type, data.id, data.role)
                this.getSet.setNotificationData(data);
            } else
            {
                this.localNotifications.schedule({
                    id: 1,
                    text: data.body,
                    data: data,
                    icon: 'res://notification_icon'

                });

            };
        });
    }

    onLocalNotification()
    {
        this.localNotifications.on('click').subscribe(response =>
        {
            if (response.data.type == "userProfile")
            {
                this.goToPage(response.data.type, response.data.id, response.data.role, response)
            } else
            {
                this.goToPage(response.data.type, response.data.id, response.data.role, response)
            }

        })
    }

    goToPage(type, id, role, response)
    {
        this.store.dispatch(new fromStore.SetRole(role));
        this.dataService.saveData('role', role);
        if (type == "question")
        {
            if (role == 'associates')
            {
                this.utils.goToPageDetail('DetailPage', id, response);
            } else
            {
                this.utils.goToPageDetail('QuestionsPage', id, response);
            }

        } else if (type == "Announcement")
        {
            this.utils.goToPageDetail('AnnouncementPage', id, response)
        } else if (type == "userProfile")
        {
            this.utils.goToPageDetail('NewProfilePage', id, response)
        } else if (type == "Timesheet")
        {
            this.utils.goToPageDetail('TimeEntryPage', id, response)
        } else if (type == 'Approval')
        {
            this.utils.goToPageDetail('ApprovalDashboardPage', id, response)
        } else if (type == 'Zenlearn')
        {
            this.utils.goToPageDetail('DapDetailPage', id, response)
        } else if (type == 'ZenlearnTeamList')
        {
            this.utils.goToPageDetail('TeamListPage', id, response)
        } else if (type == 'ZenlearnOffering')
        {
            this.utils.goToPageDetail('ZenLearnDashboardPage', id, response)
        } else if (type == 'ZenRich')
        {
            if (response.data.pageName == "ZenrichPage")
            {
                this.utils.goToPageDetail('ZenrichPage', id, response)
            }
            else if (response.data.pageName == "ZenrichRefDetailPage")
            {
                this.utils.goToPageDetail('ZenrichRefDetailPage', id, response)
            }
            else if (response.data.pageName == "ZenRichLandingPage")
            {
                this.utils.goToPageDetail('ZenRichLandingPage', id, response)
            }


        }
    }

    registerToken()
    {

        this.dataService.getData('fcmToken').then((token: any) =>
        {
            if (token != null && token != undefined && token != "")
            {
                let data = {
                    "regDeviceId": token,
                    "deviceType": this.plt.is('android') ? "android" : "ios"
                }

                this.httpProvider.http.commonService({ url: this.notificationURL, data, miscellaneous: true }).subscribe((success) =>
                {

                }, (error) =>
                {
                })
            } else
            {
                this.getToken();
                this.iscalledFromLogin = true;
            }
        })

    }

}