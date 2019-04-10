import React, { Component } from 'react';
import {Card,Input,Modal, Button} from 'antd';
import './Home.css';


export default class Home extends Component{
  constructor(){
    super();
    this.state={
      date:new Date(),
      name:"fenghang"
    }
  }
  //setState用法
   changeName = ()=>{
    this.setState({name:"steven"});
   }
  //  handelChange(e){
  //       this.setState({
  //           name:e.target.value
  //       });
  //   }
  //父子组件通讯
  fatherHandleClick(name){
    this.setState({
        name
    })
}
    render(){
      
      return <div className="content">
        <div className="title">
          {/* <span>Déterminé à atterrir sur la lune, même si vous perdez votre main, vous allez atterrir entre les étoiles.</span> */}
          {/* <span>Si la vie peut revenir, je serai prêt à vous rencontrer, peu importe combien de fois.</span> */}
        </div>
        <CardText/>
        <a href="#/">Retour à App</a>
        {/* <Input size="small" style={{width:200+'px'}} onChange={this.handelChange.bind(this)} value={this.state.name}/> */}
        <span onClick={this.changeName} className="Greetings">Bonjour {this.state.name} {this.state.date.toLocaleTimeString()}</span>
        <Dialog fatherHandleClick={ this.fatherHandleClick.bind(this) }></Dialog>
        <p>{this.state.name}</p>
      </div>
    }
    
};

 function CardText() {
  
    return <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }} className="card">
    <div className="custom-image">
      {<img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" /> }
    </div>
    <div className="custom-card">
      <h3>Rythme de rue européen</h3>
      <p>www.instagram.com</p>
      <p>La mode se démode, le style jamais.<br/>
      {/* Toujours enlever, jamais remettre . */}
      </p>
    </div>
  </Card>
}
//对话框
class Dialog extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:"fenghang",
      age:"21"
    }
  }
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    this.setState({
      visible: false,
    });
    //子组件向父组件通讯
    this.props.fatherHandleClick(this.state.name)
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }
  handelChange(e){
    this.setState({
        name:e.target.value
    });
    
}
  static defaultProps = {
    fatherHandleClick:()=>{}
  }
  // static propTypes = {
  //   fatherHandleClick: PropTypes.func
  // }
  render() {

    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Ouvrir un dialogue modal</Button>
        <Modal title="Dialogue" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}
        >
          <p>S'il vous plaît entrez votre nom:</p>
          <Input onChange={this.handelChange.bind(this)} value={this.state.name}></Input>
          <p>{this.state.date}</p>
          
        </Modal>
      </div>
    );
  }
}
