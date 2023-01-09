import React from 'react';

import './Home.css';

export const TitleHome = (props: any) => {
  console.log(props, 'data Tile');
  return (
    <div className="container-title mb-title-home">
      <p>{props.data.title}</p>
      <p>{props.data.icon}</p>
    </div>
  );
};
