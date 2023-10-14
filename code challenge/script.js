const update = {
    title: '',
    body: '',
    userId: 1,
};
    
const options = {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(update),
};

fetch('https://jsonplaceholder.typicode.com/users', options)
  .then(data => {
      if (!data.ok) {
        throw Error(data.status);
       }
       return data.json();
      }).then(update => {
      console.log(update);
       {
      title: 
    
      body: 
      
      userId: 1
      
      id: 101
      }
      
      }).catch(e => {
      console.log(e);
      });