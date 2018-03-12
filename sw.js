'use strict';

self.addEventListener('install', event => {
  console.log('installing sw');
});

self.addEventListener('activate', event => {
  console.log('activating sw');
});

self.addEventListener('fetch', event => {
  console.log('fetching!');
})