import React, { useContext } from 'react';
import Context from '../../../_context';
import styled from 'styled-components';
import { Row, Col, Hidden } from 'react-grid-system';
import { Input, Textarea } from '../../../_components/inputs';
import { Button } from '../../../_components/buttons';
import InteractionButtons from '../interaction-buttons';

const MainCont = styled.div`
  padding: 4rem;
  border: 1px solid #EBEBEB;
  height: 100%;
  color: #fff;
`
const UserCont = styled.div`
  background-color: ${props => props.theme.main.primaryColor};
  padding: 1rem 0;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Avatar = styled.img`
  object-fit: cover;
  object-position: center;
  min-height: 48px;
  min-width: 48px;
  height: 60px;
  width: 60px;
  flex-grow: 1;
  flex-shrink: 0;
  border-radius: 50%;
  @media(min-width: 768px){
    min-height: 76px;
    min-width: 76px;
    height: 76px;
    width: 76px;
    flex-grow: 0;
    flex-shrink: 1;
  }
`
const UserInfoCont = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 1rem;
  text-align: center;
`
const UserInfoItem = styled.li`
  font-weight: bold;
  margin-top: 1rem;
`
const ContactForm = styled.form`
  //margin-top: 3rem;
  //height: 100%;
  background-color: ${props => props.theme.main.primaryColor};
  padding: 1rem;
  padding-bottom: 2rem;
  color: #fff;
`
const ContactFormButtons = styled.div`
  margin-top: 2rem;
`

export default ({ description })=> {
  //const description = useContext(Context).singleProperty;
  const user = { ...description._comercialUser[0], ...description._comercialUser_person[0] };

  return(
    <MainCont>
      <Hidden xs>
        <Row>
          <InteractionButtons />
        </Row>
      </Hidden>
      <UserCont>
        <Avatar src={user.avatar} alt={user.lastName} />
        <UserInfoCont>
          <UserInfoItem>
            {`${user.firstName} ${user.lastName}`}
          </UserInfoItem>
          <UserInfoCont>
            {user.position}
          </UserInfoCont>
          <UserInfoItem>
            {user.phone && user.phone.countryCode + " " + user.phone.areaCode + " " + user.phone.phoneNumber}
            {" / "}
            {user.email}
          </UserInfoItem>
        </UserInfoCont>
      </UserCont>
      <ContactForm
        onSubmit={(e)=> e.preventDefault() }
      >
        <Row>
          <Col xs={12}>
            <Input
              placeholder="Nombre"
              id="name"
              vertical
            />
          </Col>
          <Col xs={12}>
            <Input
              placeholder="Teléfono"
              id="phone"
              vertical
            />
          </Col>
          <Col xs={12}>
            <Input
              placeholder="Email"
              id="email"
              vertical
            />
          </Col>
          <Col xs={12}>
            <Textarea
              placeholder="Mensaje"
              rows={6}
              gray
              id="message"
              vertical
            />
          </Col>   
          <Col xs={12} md={12}>
            <ContactFormButtons>
              <Button block>
                Enviar
              </Button>
            </ContactFormButtons>
          </Col>          
          <Col xs={12} md={12}>
            <ContactFormButtons>
              <Button block>
                LLamar
              </Button>
            </ContactFormButtons>
          </Col>
          <Col xs={12} md={12}>
            <ContactFormButtons>
              <Button block>
                whatsapp
              </Button>
            </ContactFormButtons>
          </Col>          
        </Row>
      </ContactForm>
    </MainCont>
  )
}