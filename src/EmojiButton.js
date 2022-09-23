import React from 'react';

function EmojiButton(props) {
  // <button> => React.createElement
  return (
    <button>
      <span role="img">{props.emoji}</span>
      {props.label}
    </button>
  )
}

export default EmojiButton