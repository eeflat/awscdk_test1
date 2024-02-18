// index.js

exports.handler = async (event) => {
  console.log("Lambda function triggered:", JSON.stringify(event, null, 2));

  const s3Event = event.Records[0].s3;
  const bucket = s3Event.bucket.name;
  const key = s3Event.object.key;

  console.log(`Object created in bucket '${bucket}' with key '${key}'`);

  return {
    statusCode: 200,
    body: JSON.stringify('Lambda function executed successfully'),
  };
};
