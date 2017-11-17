import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
//import { GoogleMaps } from '@ionic-native/google-maps';


@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
  ],
  exports:[
      TabsPage,
  ]
})
export class TabsPageModule {}