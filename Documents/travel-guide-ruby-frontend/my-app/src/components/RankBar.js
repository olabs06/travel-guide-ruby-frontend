import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function RankBar ({onRank}){
    function handleSort(e){
        onRank(e)
    }
    return (
        <DropdownButton
            onSelect={handleSort}
            align="end"
            title="Filter Cities By Criteria"
            id="dropdown-menu-align-end"
            variant="warning"
        >
            <Dropdown.Item eventKey="default">Default</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="minimum_wage">Minimum Wage</Dropdown.Item>
            <Dropdown.Item eventKey="crime_rate">Crime Rate</Dropdown.Item>
            <Dropdown.Item eventKey="employment_rate">Employment Rate</Dropdown.Item>
        </DropdownButton>
      );
}

export default RankBar;