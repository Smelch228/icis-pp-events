import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';

export default function InputWithIcon() {
    return(
        <IconButton aria-label="addcircleIcon" color="default" size='large'>
            <AddCircleIcon />
      </IconButton>
    );
}