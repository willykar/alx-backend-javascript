export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('An Example implementation');
    reject(new Error('Error message here'));
  });
}
