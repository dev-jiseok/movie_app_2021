import React from 'react';

function Food({ fav }) {
  return <h3>i like {fav}, maybe?</h3>;
}

function App() {
  return <div>
    <h1>Hello! jiseok</h1>
    <Food fav='kimchi' />
    <Food fav='kimbap' />
    <Food fav='apple' />
    <Food fav='mintchoco' />

  </div>;
}

export default App;
