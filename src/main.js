
const chain = async function (...links){
    const urls = Array.prototype.slice.call(links);     
    for (let i = 0;i < urls.length;i++){     
      await fetch(urls[i]).then(response => response.json()).then(res => console.log (res));   
    } 
  };
  chain('http://jsonplaceholder.typicode.com/posts/1',
    'http://jsonplaceholder.typicode.com/posts/2',
    'http://jsonplaceholder.typicode.com/posts/3');