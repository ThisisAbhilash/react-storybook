import React, { Component } from "react";
import styled from 'styled-components';

const ExternalDiv =styled.div`
  height: ${props => (props.height ? props.height : "64px")};
  width : ${props => (props.width ? props.width : "90px")};  
  border-color :${props => (props.borderColor? props.borderColor : "blue")}
  border-style: ${props => (props.borderStyle? props.borderstyle : "dashed")}

`

const AmountView = styled.p`
  padding-top:5px;
  padding-left:8px;
  height: 17px;
  line-height: 0.93;
  text-align: left;
  color :${props => (props.color? props.color : "blue")}
`
const DescriptionView = styled.p`
  padding-left:8px;
  width: 69px;
  height: 15px;
  opacity: 0.8;
  font-family: Nunito;
  font-size: 11px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: left;
  color: var(--black);
`
class BoxComponent extends Component {

  constructor(props){
    super(props);
    this.state={
      description: "Customer 2",
      amount: "2 lacks"
    }
  }


 

  render() {
    const description = this.props.description? this.props.description : this.state.description;
    const amount = this.props.amount? this.props.amount : this.state.amount;
    
    return (
       <ExternalDiv>
         <AmountView >{amount}</AmountView>
         <DescriptionView>{description}</DescriptionView>

       </ExternalDiv>
    );
}

}

export default BoxComponent;