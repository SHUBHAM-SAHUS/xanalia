import AWS from 'aws-sdk';
import { environment } from '../environment';

const S3_BUCKET = environment.s3BucketName;
const REGION = environment.s3Region;

AWS.config.update({
  accessKeyId: environment.s3AccessKeyId,
  secretAccessKey: environment.s3SecretAccessKey,
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});
export const s3MultipleUploadService = (files) => {
  var ResponseData = [];
  var length = files.length;
  var count = 0;
  if (length > count) {
    const params = {
      ACL: 'public-read',
      Body: files[count],
      Bucket: S3_BUCKET,
      Key: files[count].name,
      ContentType: files[count].type,
    };
    myBucket.upload(params, (err, data) => {
      ResponseData.push(data);
      count++;
      if (length > count) {
        const params = {
          ACL: 'public-read',
          Body: files[count],
          Bucket: S3_BUCKET,
          Key: files[count].name,
          ContentType: files[count].type,
        };
        myBucket.upload(params, (err, data) => {
          ResponseData.push(data);
          count++;
          if (length > count) {
            const params = {
              ACL: 'public-read',
              Body: files[count],
              Bucket: S3_BUCKET,
              Key: files[count].name,
              ContentType: files[count].type,
            };
            myBucket.upload(params, (err, data) => {
              ResponseData.push(data);
              count++;
              if (length > count) {
                const params = {
                  ACL: 'public-read',
                  Body: files[count],
                  Bucket: S3_BUCKET,
                  Key: files[count].name,
                  ContentType: files[count].type,
                };
                myBucket.upload(params, (err, data) => {
                  ResponseData.push(data);

                });
              }
            });
          }
        });
        ;
      }
    });
    return ResponseData;
  }

  // const res = myBucket
  //   .upload(params)
  //   .on('httpUploadProgress', (evt) => {
  //     const uploaded = Math.round((evt.loaded * 100) / evt.total);
  //     // this?.progressSource?.next(uploaded);
  //   }).promise();



};
export const s3UploadService = (file) => {
  const params = {
    ACL: 'public-read',
    Body: file,
    Bucket: S3_BUCKET,
    Key: file.name,
    ContentType: file.type,
  };
  return myBucket
    .upload(params)
    .on('httpUploadProgress', (evt) => {
      const uploaded = Math.round((evt.loaded * 100) / evt.total);
      // this?.progressSource?.next(uploaded);
    })
    .promise();
};
export const s3RemoveService = (file) => {
  const params = {
    Bucket: S3_BUCKET,
    Key: file,
  };
  myBucket.deleteObject(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
         // successful response
  });
};
