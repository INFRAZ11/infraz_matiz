import React from 'react';

//internal css
var design = {
    backgroundColor:'red',
}
//Class Component
class FirstComponent extends React.Component
{
    render(){
        return(
           <div>
                <h1 style={{color:'blue'}}>Hello World! - <span style={{color:'violet'}}>First</span></h1>    
           </div> 
        )
    }
}

//Another Class Component
class SecondComponent extends React.Component
{
    render(){
        return(
           <div>
            
                <h1 style={{color:'orange'}}>Hello World! - <span style={{color:'green'}}>Second</span></h1>
                <ThirdComponent></ThirdComponent>    
           </div> 
        )
    }
}

//Another Class Component
class ThirdComponent extends React.Component
{
    render(){
        return(
           <div>
                <h1 style={{color:'darkcyan'}}>Hello World! - <span style={{color:'purple'}}>Third</span></h1>    
           </div> 
        )
    }
}

//Another Function Component
function Fourth(){
    return(
        <h1 style={design}>Function Based Component</h1>
    )
}

//Parent Component
function Function() {
    return (
        <div>
            <h1 style={design}>This is Parent Component</h1>
            <FirstComponent></FirstComponent>
            <SecondComponent></SecondComponent>
            <Fourth></Fourth>
        </div>
    );
}

export default Function;