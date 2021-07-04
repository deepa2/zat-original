import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';


@Injectable()
export class Data {

  constructor(private storage: Storage) { }

  getData(key) {
    return new Promise(resolve => {
      this.storage.get(key).then(result => {  
        if (result) {
          resolve(JSON.parse(atob(result)));
        } else {
          resolve();
        }
      });
    

    })

  }

  saveData(key, data) {

    // let encodedData = btoa(JSON.stringify(data))
    let encodedData =  btoa(unescape(encodeURIComponent(JSON.stringify(data))))

    this.storage.set(key, encodedData);

    // this.storage.set(key, data)
  }

  clearData() {
    this.storage.clear();
  }

}
