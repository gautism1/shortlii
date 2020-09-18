import React ,{useState ,useEffect} from 'react';
import '../App.css';
import Logo from'./logo.svg';
import axios from 'axios';
  
function home()
{
  const [longurl,setLongurl]=useState();
  const [shorturl,setShorturl ]=useState();
  
  const  onsubmit=(e) =>{
    e.preventDefault();
    const completequery={
      "longurl":longurl
    } 
console.log("lkjhjkkl",completequery);
    axios.post('https://shortliiibackend.herokuapp.com/shorten',completequery).then((data)=>
    {    
         console.log(data.data.shorturl)
         setShorturl(data.data.shorturl)
         
    }).catch((err)=>
    {

       setShorturl("Some error Occured please check internet connnectiion");
     
    });

    //code for copying the shorturl
var text = document.getElementById("inputText");
var btn = document.getElementById("copyText");
btn.onclick = function() {
  text.select();    
  document.execCommand("copy");
}
  document.getElementById("myForm").reset();

  }
    return(
      <div className="home">
          <div className="card-div">                  
                   <div className="svg-img-div">
                       <img src={Logo} alt="centalied logo" className="img-div"></img>              
                   </div>
                    <div className="heading-div">
                        <h1 className="heading"> Shorten any Links
                        </h1>
                        <p className="heading-statement">Put  Your LONG url and have your SHORT url in no time
                        </p>
                        <form onSubmit={onsubmit} id="myForm">
                        <div className="input-field">
                            <input type="text" placeholder="Type or paste your Long url"  pattern={"https://.*" || "http://.*"} required className="input-url" onChange={(e) =>setLongurl(e.target.value)} >
                            </input> 
                            <button type="submit" className="url-shorten-button">  Short URL</button>
                        </div>
                          </form>    

                          <div  id="shorten">
                         <h6> Your Short-url is below:-</h6>
                          <input id="inputText" type="text" value={shorturl} className="input-url shorturl" />
                             <button id="copyText" className="url-shorten-button">Copy</button>
                          </div>            
                   </div>
          </div>
        </div>
    )
}
export default home;