import React, { Component } from 'react';
import {DoughnutExample} from './Donghnut';
import { Card,CardTitle,CardSubtitle,CardText,Row,Col,Alert,Table } from 'reactstrap';
import  Axios from 'axios';
class CurrentJob extends Component {
  constructor(props){
      super(props);
      this.state={
              result:0,
              student_id:"321710306001",
      }

  };
  componentDidMount(){
      Axios.get("http://localhost/backend/CurrentJob.php?id="+this.state.student_id)
      .then(response => {
          console.log(response)
          this.setState({
          
          })  
      })
      .catch(function(err){
      console.log(err);
      })
  }
  render(){

  return (
    <div className="Container">  
        <Card className="Rounded p-3">
                <CardSubtitle align="left">Current Job Suitability</CardSubtitle>
                <hr></hr>
                <div class="container-fluid">
                  <Row className="p-4">
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Analyst
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      CustomerSales
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Plant Engineer
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      RRD Engineer
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Network Engineer
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Operations Engineer
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Software Developer
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Software Engineer
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Software Tester
                    </Col>
                  </Row>
                </div>
              </Card>
          </div>
          );
        }
      }
export default CurrentJob;