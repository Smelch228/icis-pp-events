import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';

export default function InputWithIcon() {
    return(
        <IconButton aria-label="filterlistIcon" color="default" size='large'>
            <FilterListIcon />
      </IconButton>
    );
}