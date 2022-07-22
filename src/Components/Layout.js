import React from 'react';
import image from './Images1/img1.jpg';

import image1 from './Images1/img1.jpg';
// import image2 from './Images1/img2.jpg';
// import image3 from './Images1/img3.jpg';

function Layout() {
    return (
        <div>
            
            <header>
                <nav className='navigation'>
             <img src="/Images/logo1.png" alt="" className='logo'></img>
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Contact</p>
                <p>Feedback</p>
                </nav>
            </header>
            <body>
                <div className='blank'>
                    {/* Public Folder(Normal Syntax) */}
                    {/* <img src="/Images/pexels-bess-hamiti-35188.jpg" alt=""></img> */}

                    {/* React Method for image */}
                    <img src={image} alt="" className='image'></img>

                </div>

                <h1 style={{textAlign:'center',color:'blueviolet'}}>HELLO REACT</h1>

                <div>
                    <p className='para1'>On April 18, 2017, Facebook announced React Fiber, a new set of internal algorithms for rendering, as opposed to React's old rendering algorithm, Stack.[35] React Fiber was to become the foundation of any future improvements and feature development of the React library.[36][needs update] The actual syntax for programming with React does not change; only the way that the syntax is executed has changed.[37] React's old rendering system, Stack, was developed at a time when the focus of the system on dynamic change was not understood. Stack was slow to draw complex animation, for example, trying to accomplish all of it in one chunk. Fiber breaks down animation into segments that can be spread out over multiple frames. Likewise, the structure of a page can be broken into segments that may be maintained and updated separately. JavaScript functions and virtual DOM objects are called "fibers"</p>
                

                
                    <p className='para2'>On April 18, 2017, Facebook announced React Fiber, a new set of internal algorithms for rendering, as opposed to React's old rendering algorithm, Stack.[35] React Fiber was to become the foundation of any future improvements and feature development of the React library.[36][needs update] The actual syntax for programming with React does not change; only the way that the syntax is executed has changed.[37] React's old rendering system, Stack, was developed at a time when the focus of the system on dynamic change was not understood. Stack was slow to draw complex animation, for example, trying to accomplish all of it in one chunk. Fiber breaks down animation into segments that can be spread out over multiple frames. Likewise, the structure of a page can be broken into segments that may be maintained and updated separately. JavaScript functions and virtual DOM objects are called "fibers"</p>
                </div>

                <div className='box'>
                <div className='box1'>BOX 1
                <img src={image1} alt="" className='ii'></img>
                </div>
                <div className='box2'>BOX 2</div>
                <div className='box3'>BOX 3</div>
                </div>
                </body>
                <footer>
                    
                <div className='foot'>
                    
                </div>
                <h2>THANK YOU</h2>
                <button>Click Here</button>
                </footer>
  
        </div>
    );
}

export default Layout;