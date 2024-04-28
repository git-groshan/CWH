import url from 'url' // Es Modules url is imported 

const myURL = new URL("https://example.org:8000");
myURL.pathname = 'a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL);
console.log(myURL.href);
/**
 URL {
  href: 'https://example.org:8000/a/b/c?d=e#fgh',
  origin: 'https://example.org:8000',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'example.org:8000',
  hostname: 'example.org',
  port: '8000',
  pathname: '/a/b/c',
  search: '?d=e',
  searchParams: URLSearchParams { 'd' => 'e' },
  hash: '#fgh'
}
https://example.org:8000/a/b/c?d=e#fgh
 */