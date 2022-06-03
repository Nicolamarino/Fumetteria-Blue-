import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss'],
})
export class UserComponentComponent implements OnInit {

  constructor(private popoverController: PopoverController) { }

  async settingsPopover(ev: any) {
    const siteInfo = { id: 1, name: 'edupala' };
    const popover = await this.popoverController.create({
      component: UserComponentComponent,
      event: ev,
      cssClass: 'popover_setting',
      componentProps: {
        site: siteInfo
      },
      translucent: true
    });

    popover.onDidDismiss().then((result) => {
      console.log(result.data);
    });

    return await popover.present();
  }


  ngOnInit() {}

}
