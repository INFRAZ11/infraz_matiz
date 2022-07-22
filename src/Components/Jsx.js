/*import React from 'react';

//const hello = <h1>Hello World</h1>;

//const name='Ajith';
//const hell =<h1>Hello {name}</h1>;

const num = <h1>Hello {10+10}</h1>;

function Jsx() {
    return (
        
        //hello
        //hell
        num
    );
}

export default Jsx;*/



/*import React from 'react';

//const hello = <h1>Hello World</h1>;

const name= 'ajith';
const dep = 'Mech';
const hello = <h1>Hello {name + ' ' + dep + 'Hi'}</h1>

function Dummy() {
    return (
        //hello
        hello
    );
}

export default Dummy;*/

//using Object

import React from 'react';

const elem = <h1>Time is {new Date().toDateString()}</h1>
const ele = <h1>Current time is {new Date().toLocaleTimeString()}</h1>


function FuncName(user){
    return user.fname + user.lname;
}

const user ={
    fname: 'Ajith',
    lname: 'kumar',
};
const hello = <h1>Hello {FuncName(user)} </h1>
function Object() {
    return (
        <div>
        {hello}
        {hello}
        {elem}
        {ele}
        </div>
    );
}

export default Object;


