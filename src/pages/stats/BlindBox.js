import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import PenpenzFields from './penpenzFields';
import RichTextEditors from '../../components/RichTextEditor';
import CardCom from '../../components/CardCom';
import NavTabs from './NavTabs';

const cardsData = [
  {
    id: 1,
    title: 'Pack Image',
    description: 'filefilefilefilefilefilefilefilefilefile.jpg',
    card_link: 'Card Link',
    other_link: 'Another Link',
  },
  // {
  //   id: 2,
  //   title: 'Banner Image',
  //   description: 'Some quick example text to build on the card title and make up on bulk of the card content',
  //   card_link: 'Card Link',
  //   other_link: 'Another Link',
  // },
  {
    id: 3,
    title: 'Card Video',
    description: 'Some quick example text to build on the card title and make up on bulk of the card content Some quick example text to build on the card title and make up on bulk of the card content',
    card_link: 'Card Link',
    other_link: 'Another Link',
  },
  {
    id: 4,
    title: 'Pack Video',
    description: 'Some quick example text to build on the card title and make up on bulk of the card content',
    card_link: 'Card Link',
    other_link: 'Another Link',
  },
];

function BlindBox() {
  return (
    <Container fluid>
      <div className="add_new">
                <Button color="primary">Add new Blindbox</Button>
      </div>
      <NavTabs />
      {/*For box fileds in component*/}
      <PenpenzFields />
      <RichTextEditors />
      <Row>
        {
          cardsData.map((card) => {
            return (
              <Col sm="3" key={card.id}>
                <CardCom  title={card.title} description={card.description} cardLink={card.card_link} otherLink={card.other_link}/>
              </Col>
            )
          })
          
        }
         
      </Row>
      <div className="repeter_btn mb-5">
          <Button color="primary" className="mr-2">Save</Button>
          <Button color="primary" className="mr-2" outline>Cancel</Button>
          <Button color="primary" className="mr-2" outline>Duplicate</Button>
          <Button color="primary" className="mr-2" outline>Add</Button>
          <Button color="primary" className="mr-2" outline>Delete</Button>
      </div>
    </Container>
  );
}

export default BlindBox;
