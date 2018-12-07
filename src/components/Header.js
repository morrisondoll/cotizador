import React from 'react';

const Header = props => {
  return (
    <header className="bit-col-100 bg-red">
      <h1 className="text-center">{props.titulo}</h1>
    </header>
  );
}

export default Header;