import React from 'react';

// var design ={
//     width:'500px',
//     backgroundColor:'red'
// }



function Nav() {
    return (
        <div className='navi'>
            <header>
                <nav className='navigation'>
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Contact</p>
                </nav>
            </header>
        </div>
    );
}




function Box() {
    return (
        
        <div className='outer'>
            
        <section>
        <div className='boxOne'>BOX 1
        <p> Declarative. React makes it painless to create interactive UIs.  Component-Based. </p>
        </div>
        <button id="a1">Read More...</button>
        <div className='boxTwo'>BOX 2
        <p> Declarative. React makes it painless to create interactive UIs.  Component-Based.</p>
        <button>Read More...</button>
        </div>
        <div className='boxThree'>BOX 3
        <p> Declarative. React makes it painless to create interactive UIs.  Component-Based.</p>
        <button>Read More...</button>
        </div>
        <div className='boxFour'>BOX 4
        <p> Declarative. React makes it painless to create interactive UIs.  Component-Based.</p>
        <button>Read More...</button>
        </div>
        </section>
        {/* <p style={{color:'red'}}>Hello</p>
        <p style={design}>Ajith</p> */}
        <Nav></Nav>
        </div>
        
    );
}

export default Box;