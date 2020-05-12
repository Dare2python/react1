import React from 'react';

function UserInput(props) {
  return (
    <div className="UserInput">
        {/*<input type="text" onChange={props.changed.bind(this, "test")}/>*/}
        <input type="text" onChange={(event) => {
            console.log(event);
            return props.changed(event);
        }
    }/>
    </div>
  );
}

export default UserInput;