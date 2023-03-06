import {
  Button,
  Item,
  ContactText,
  ContactNumber,
  Wrapper,
} from './ContactItem.styled';
import { FiDelete } from 'react-icons/fi';
import { BsDot } from 'react-icons/bs';
import PropTypes from 'prop-types';

export const ContactItem = ({ contacts, filter, handleDelete }) =>
  contacts.map(({ name, number, id }) =>
    filter ? (
      name.toLowerCase().includes(filter.toLowerCase()) && (
        <Item key={id}>
          <ContactText>
            <BsDot size={32} />
            {name}:
          </ContactText>
          <Wrapper>
            <ContactNumber>{number}</ContactNumber>
            <Button onClick={handleDelete} id={id}>
              <FiDelete size={24} />
            </Button>
          </Wrapper>
        </Item>
      )
    ) : (
      <Item key={id}>
        <ContactText>
          <BsDot size={32} />
          {name}:
        </ContactText>
        <Wrapper>
          <ContactNumber>{number}</ContactNumber>
          <Button onClick={handleDelete} id={id}>
            <FiDelete size={24} />
          </Button>
        </Wrapper>
      </Item>
    )
  );

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
