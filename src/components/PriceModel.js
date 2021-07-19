import React from 'react';
import { Button } from 'react-bootstrap';
import MyVerticallyCenteredModal from './VerticalModel';
import Translator from './Translator';
import DefaultMsg from '../Language/DefaultMessages';

// this component handles the price modal whenever click.

export default function Price(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <span>
      <img
        className="mr-1"
        // src={require('../Assets/Price.png')}
        style={{
          width: '1.8em',
          height: '1.8em',
          float: 'left',
          display: 'inline'
        }}
        alt="price"
      />
      <Button
        variant="light"
        style={{ color: '#57698a', textDecoration: 'none', fontSize: '0.95em' }}
        onClick={() => setModalShow(true)}
      >
        {Translator('viewPricing', defaultMsg.msg.err)}
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        item={props.item}
      />
    </span>
  );
}
