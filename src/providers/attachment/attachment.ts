import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { IOSFilePicker } from '@ionic-native/file-picker';
import { FileChooser } from '@ionic-native/file-chooser';
import { Platform } from 'ionic-angular';
import { FilePath } from '@ionic-native/file-path';
import { Chooser } from '@ionic-native/chooser';

@Injectable()
export class Attachment
{

  constructor(private loading: LoadingController,
    private imagePicker: ImagePicker,
    private camera: Camera,
    private filePicker: IOSFilePicker,
    private fileChooser: FileChooser,
    private plt: Platform,
    // private docPicker: DocumentPicker,
    private filePath: FilePath,
    private chooser: Chooser,
    private platform: Platform) { }

  openGalleryAfterPermission(count)
  {

    var promise = new Promise((resolve, reject) =>
    {

      let options = {
        maximumImagesCount: count,
        width: 900,
        quality: 75
      }

      this.imagePicker.getPictures(options).then((results) =>
      {
        resolve(results);
      }, (err) =>
      {
        reject(err);
      });

    });

    return promise;

  }

  openCamera()
  {

    var promise = new Promise((resolve, reject) =>
    {

      let fileURI = this.camera.DestinationType.FILE_URI
      // if (this.platform.is('ios')) {
      //   fileURI = this.camera.DestinationType.FILE_URI
      // } else {
      //   fileURI = this.camera.DestinationType.NATIVE_URI
      // }

      // if (this.platform.is('ios')) {
      this.imagePicker.hasReadPermission().then((result) =>
      {

        if (!result)
        {
          this.imagePicker.requestReadPermission().then((res) =>
          {

            const options: CameraOptions = {
              quality: 75,
              destinationType: fileURI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              sourceType: this.camera.PictureSourceType.CAMERA,
              correctOrientation: true,
              targetWidth: 900
            }

            this.camera.getPicture(options).then((imageData) =>
            {
              resolve(imageData);
            }, (err) =>
            {
              reject(err);
            });
          })

        } else
        {
          const options: CameraOptions = {
            quality: 75,
            destinationType: fileURI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            correctOrientation: true,
            targetWidth: 900
          }
          this.camera.getPicture(options).then((imageData) =>
          {
            resolve(imageData);
          }, (err) =>
          {
            reject(err);
          });
        }
      })
      //   } else {
      //     const options: CameraOptions = {
      //       quality: 75,
      //       targetWidth: 900,
      //       saveToPhotoAlbum: true,
      //       destinationType: this.camera.DestinationType.NATIVE_URI,
      //       encodingType: this.camera.EncodingType.JPEG,
      //       mediaType: this.camera.MediaType.PICTURE,
      //       correctOrientation: true
      //     }

      //     this.camera.getPicture(options).then((imageData) => {
      //       resolve(imageData);
      //     }, (err) => {
      //       reject(err);
      //     });
      //   }

    });
    return promise;
  }

  openGallery(count)
  {

    var promise = new Promise((resolve, reject) =>
    {

      this.imagePicker.hasReadPermission().then((result) =>
      {

        if (!result)
        {
          this.imagePicker.requestReadPermission().then((res) =>
          {

            this.openGalleryAfterPermission(count).then((response) =>
            {
              resolve(response);
            }).catch((error) =>
            {
              reject(error);
            });

          })
        } else
        {

          this.openGalleryAfterPermission(count).then((response) =>
          {
            resolve(response);
          }).catch((error) =>
          {
            reject(error);
          });

        }
      })

    });

    return promise;

  }

  openDocument(type = '')
  {

    var promise = new Promise((resolve, reject) =>
    {

      if (type == 'img')
      {
        type = 'image/*';
      } else if (type == 'pdf')
      {
        type = 'application/pdf'
      } else
      {
        type = "";
      }

      this.chooser.getFile(type).then(res =>
      {
        resolve(res.uri);
      }).catch(err =>
      {
        reject();
      });


      // if (this.plt.is('ios')) {

      //   if (type == 'img') {
      //     type = 'image';
      //   } else if (type == 'pdf') {
      //     type = 'pdf'
      //   } else {
      //     type = 'all'
      //   }

      //   this.docPicker.getFile(type)
      //     .then(uri => {
      //       ;
      //       resolve(uri);
      //     })
      //     .catch(err => {
      //       ;
      //       reject();
      //     });

      // } else if (this.plt.is('android')) {

      //   this.fileChooser.open()
      //     .then(
      //       uri => {
      //         this.filePath.resolveNativePath(uri)
      //           .then(url => {
      //             ;
      //             resolve(url);
      //           })
      //           .catch(err => );
      //       }
      //     )
      //     .catch(error => {
      //       ;
      //       reject();
      //     });


      // }

    });

    return promise;


  }

  openWordDocument()
  {

    var promise = new Promise((resolve, reject) =>
    {



      this.chooser.getFile('application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document').then(res =>
      {
        resolve(res.uri);
      }).catch(err =>
      {
        reject();
      });


      // if (this.plt.is('ios')) {

      //   if (type == 'img') {
      //     type = 'image';
      //   } else if (type == 'pdf') {
      //     type = 'pdf'
      //   } else {
      //     type = 'all'
      //   }

      //   this.docPicker.getFile(type)
      //     .then(uri => {
      //       ;
      //       resolve(uri);
      //     })
      //     .catch(err => {
      //       ;
      //       reject();
      //     });

      // } else if (this.plt.is('android')) {

      //   this.fileChooser.open()
      //     .then(
      //       uri => {
      //         this.filePath.resolveNativePath(uri)
      //           .then(url => {
      //             ;
      //             resolve(url);
      //           })
      //           .catch(err => );
      //       }
      //     )
      //     .catch(error => {
      //       ;
      //       reject();
      //     });


      // }

    });

    return promise;


  }


} 
