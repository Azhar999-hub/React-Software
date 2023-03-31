import Dropdown from 'react-bootstrap/Dropdown';

function SmDropdown(props) {
  const {label, item} = props
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {label}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
        <Dropdown.Item href="#/action-2">{item}</Dropdown.Item>
        <Dropdown.Item href="#/action-3">{item}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SmDropdown;