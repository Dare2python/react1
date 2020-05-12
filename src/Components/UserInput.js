import React from 'react';

function UserInput(props) {
  const style = {
    backgroundColor: 'green',
    border: '1px solid blue',
    padding: '8px'
  };
  return (
    <div className="UserInput">
        {/*<input type="text" onChange={props.changed.bind(this, "test")}/>*/}
        <input type="text" onChange={(event) => {
            console.log(event);
            return props.changed(event);
            }}
            value={props.username}
            style={style}
        />
    </div>
  );
}

export default UserInput;