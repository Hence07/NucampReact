import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


export default function CampsiteInfo  (props) {

    if (props.campsite) {
        return(
        
                <Card>
                        <CardImg top src = {props.campsite.image} alt = { props.campsite.name} /> 
                        <CardBody>
                                <CardTitle > {props.campsite.name} </CardTitle> 
                                <CardText > {props.campsite.description} </CardText> 
                        </CardBody>
                 </Card>
            );
        }
        return <div /> ;
    }
    
    


   
 
// export default CampsiteInfo;