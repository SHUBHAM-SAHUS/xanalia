import React, { useState } from 'react';
import { Card, CardBody, CardImg, CardText, CardFooter, CardTitle, CardLink, Row, Col } from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import Input from 'reactstrap/lib/Input';
import Label from 'reactstrap/lib/Label';
import PlaceholderImage from '../assets/img/photos/placeholder.png';

const CardCom = ({ title, description, cardLink, otherLink }) => {
  const [readMore, setReadMore] = useState(false);
  const [readLess, setReadLess] = useState(false);
  const onClickReadMore = () => {
    setReadMore(true);
    setReadLess(false);
  };
  const onClickReadLess = () => {
    setReadLess(true);
    setReadMore(false);
  };
  return (
    <>
      <Card className="store-card mb-5">
        <div class="placeholder pack">
          <Label for="file-input-pack">
            <img src={PlaceholderImage} alt="choosefile" class="file-img" />
          </Label>
          <Input id="file-input-pack" type="file" name="pack_image" accept=".jpg , .jpeg , .png " class="fileInput"/>
        </div>
        <CardBody>
          <Row>
          <Col>
            <CardTitle tag="h5" >
              {title ? title : ''}
            </CardTitle>
          </Col>
          </Row>
          <Row>
            <Col>
              <div className="action_button">
                  <Button color="primary" className="mr-3">Edit</Button>
                  <Button color="primary" outline>Delete</Button>
              </div>
            </Col>
          </Row>
          {/* <CardText>
            {!readMore && description.length > 50 ? (
              <span>
                {' '}
                {description?.substr(0, 50) + '...'}{' '}
                <span onClick={onClickReadMore} className="read-more">
                  <CardLink>ReadMore</CardLink>
                </span>
              </span>
            ) : (
              <span>{description}</span>
            )}
            {readMore && description.length > 50 && (
              <span>
                {' '}
                {description}
                {'. '}
                <span onClick={onClickReadLess} className="read-more">
                  <CardLink>Readless</CardLink>
                </span>
              </span>
            )}
          </CardText> */}
        </CardBody>
        {/* <CardFooter>
          <CardText>
            <CardLink>{cardLink ? cardLink : ''}</CardLink>
            <CardLink>{otherLink ? otherLink : ''}</CardLink>
          </CardText>
        </CardFooter> */}
      </Card>

    

    </>
  );
};
export default CardCom;
