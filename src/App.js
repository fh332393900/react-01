import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "antd";
import { BackTop } from 'antd';
import { Collapse } from 'antd';
import { Timeline } from 'antd';
import {Card} from 'antd'
import http from "./api/index";

import axios from 'axios'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Bonjour react</p>
          <Welcome name="fh" className="App-name"></Welcome>
          {element}
          <Fruits></Fruits>
          <Button type="primary" style={{marginBottom: 2 + 'em'}} href="#/home">à la maison</Button>
          <ToTop></ToTop>
          <div className="text2">
            <ToTop></ToTop>
          </div>
          <TimeLine></TimeLine>
          <Card style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <BackTop></BackTop>

        </header>
      </div>
    );
  }
}
function Welcome(props) {
  let myname= "Je m'appelle steven"
  return <h4>Bonjour,{props.name}<div onClick={e=>clickEvent(myname,e)} className="button1"><div>Cliquez sur ce bouton</div></div></h4>
}
function clickEvent(myname){
  console.log(myname)
}
function Text(props) {
    if (true) {
      return <p className="text1">Dans React, vous pouvez créer différents composants pour encapsuler 
        les différents comportements dont vous avez besoin. </p>
    }
    return <p>Même si vous êtes pieds nus, la pluie ne peut pas danser. {props.age}</p>
}
const element = <Text age="20" className="App-text"/>
let fruitsArr=["pomme","Banane", "orange", "fraise", "raisin"];
const listItems = fruitsArr.map((number,index) =>
  <li key={index}>{number}</li>
);


function Fruits() {
  return <ul>{listItems}</ul>
}
//“20岁的时候，你拥有的是自然生长的容颜；30岁的时候，生活的经历使你的容颜有了个人的印记；50岁的时候，你的生命的全部都写在你的脸上。” 
const text1 = `
La nature vous offre le visage que vous avez à vingt ans, mais c'est à vous de mériter le visage que vous aurez à cinquante ans. 
`;
//“时尚并不只是一件衣服那么简单，时尚存在于空气中，诞生于风里。一个人可以凭直觉感知它，它就在你头顶的天空中，它就在你每天行进道路上。” 
const text2 = `
La mode n’existe pas seulement dans les robes ; la mode est dans l’air, c’est le vent qui l’apporte, on la pressent, on la respire, elle est au ciel et sur le macadam. `;
//“应该在哪里使用香水，”一个年轻女士问道，“在你想被亲吻的地方。” 
const text3 = `Où devrait-on utiliser le parfum? me demandait une jeune dame. Parfumez-vous là où vous voulez être embrassé. `
const Panel = Collapse.Panel;
function ToTop(){
  return <Collapse defaultActiveKey={['1']} className="collapse">
          <Panel header="Citations classiques de Chanel 1" key="1">
            <p>{text1}</p>
          </Panel>
          <Panel header="Citations classiques de Chanel 2" key="2">
            <p>{text2}</p>
          </Panel>
          <Panel header="Citations classiques de Chanel 3" key="3">
            <p>{text3}</p>
          </Panel>
        </Collapse>
}
function TimeLine(){
  return <Timeline>
          <Timeline.Item color="green">Create a services site 2019-04-01</Timeline.Item>
          <Timeline.Item color="green">Create a services site 2019-05-01</Timeline.Item>
          <Timeline.Item color="red">
            <p>Solve initial network problems 1</p>
            <p>Solve initial network problems 2</p>
            <p>Solve initial network problems 3 2019-06-01</p>
          </Timeline.Item>
          <Timeline.Item>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2019-09-01</p>
          </Timeline.Item>
        </Timeline>
}

export default App;

