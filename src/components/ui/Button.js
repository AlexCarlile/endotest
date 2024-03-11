import React from 'react';
import '/Users/alexselyukov/Documents/napp/my-app/src/CSS/main.css';

export default function Button(props) {
  const text = props;
  const link = props;
  const formula = props;

  return (
    <button href={link.path} className="btn header-btn btn-reset" onClick={formula.action}>
        {text.name}
    </button>
  )
}
