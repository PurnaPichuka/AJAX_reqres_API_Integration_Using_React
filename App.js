import React from "react";
import axios from 'axios';

class AjaxReactExample extends React.Component{
  // const inputRef = useRef(null);
  
  constructor(props) {
    super(props);
      this.state={
      input:[],
      input1:[]
      
  };

  this.inputRef=React.createRef();
}
  componentDidMount(){

    var currenthis = this;

    axios.get("https://reqres.in/api/users")
    .then(function(response){
      console.log("Success ");
      console.log(response.data.data);
      //Access Data Only
      console.log(response.data.data);
      //this.setState() -- this.setState not work becuz u r already inside promise call
      currenthis.setState({input: response.data.data});
    })
    .then(function(error){
      console.log("Run on error ");
      console.log(error);
    })
    .then(function(){
      console.log("Run always");
    })
  }

    render(){
      
      return(
        <React.Fragment>
          <div className="container-fluid" style={{backgroundColor:"pink"}}>
            <h1 className="text-center">Welcome User</h1>
            <hr></hr>
            <div className="text-center ">
            <input  type="text" className="" autoComplete="off" ref={this.inputRef} id="userid" />
            <button id="go" className="btn btn-success mx-3" onClick={this.singleUser}>Go</button>
            </div>
            <hr></hr>
            <div className="row">
            {this.state.input.map(item=>(
              <div className="">
              <div className="card card-body" style={{width:300, margin:20}}>
                                  <img className="card-img-top" src={item.avatar} alt="Card" />
                                      <div className="card-body">
                                          <h4 className="card-title">{item.first_name} {item.last_name}</h4>
                                          <h6 className="card-text">ID-{item.id}</h6>
                                          <h6 className="card-text">Email: {item.email}</h6>
                                      </div>
              </div>  
              </div>
                                    
            ))}
            </div>
          </div>
          
        </React.Fragment>
        
      ) 
    }  
    singleUser = () => {
      //var currenthis = this;
      axios.get(`https://reqres.in/api/users/${this.inputRef.current.value}`)
    .then(function(response){
      console.log("Success ");
      console.log(response.data);
      //currenthis.setState({input: response.data});
      //Access Data Only
      //console.log(response.data.data);
      //this.setState() -- this.setState not work becuz u r already inside promise call
      //currenthis.setState({input: response.data.data});
    })

    

      // fetch(` https://reqres.in/api/users?page=${this.inputRef.current.value}`)
      //     .then(response => response.json())
          
      //     .then(data => {
      //       console.log(data)
      //         this.setState({
                
      //             email: data.email
      //         });
      //     });

  }
}
    
// }
export default AjaxReactExample