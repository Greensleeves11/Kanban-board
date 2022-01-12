const url = 'http://localhost:5000/api/routes';

fetch(url).then(response => {
  response.json().then(data => {
    console.log(data);
  });
});

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

getData(url);

// async function postData(url, data) {
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });
//   return response.json();
// }

// postData(url, { test85: [85], test100: '100' }).then(data => {
//   console.log(data);
// });
