import React, {Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody } from 'reactstrap';
import {Control} from 'react-redux-form';
import { Link } from 'react-router-dom';



  
class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false,

        }  
        this.toggleModal = this.toggleModal.bind(this)
    }
          toggleModal() {
              this.setState({
                  isModalOpen: !this.state.isModalOpen
              });
          }
    render() { 
        return ( 
          <React.Fragment>
              <Button outline >
                      Notification <span className="badge badge-primary"></span>Submit Comment
              </Button>
              <Modal isOpen={this.state.isModalOpen} toggle= {this.toggleModal}>
                   <ModalBody>
                   <Control.select name="author" placeholder="name" model="modal.author" />  
                   <Control.text name="author" placeholder="name" model="modal.author" />  
                   <Control.textarea name="author" placeholder="name" model="modal.author" />  

                    
                  </ModalBody> 
              </Modal>
          </React.Fragment>  
            
                
        
         );
    }
}

function RenderCampsite({campsite}) {
    return(
      <CardBody>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
    );
}

function RenderComments({comments}) {  
    return(
        <modal />
    )
}

function CampsiteInfo(props) {
    if (props.campsite) {
        console.log('pass the statement')
          
        return (
         <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                  
                </div>
              
            </div>
        );
   
    }
    return <div />
}


 

export default CampsiteInfo;
    


   
 
