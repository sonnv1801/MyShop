import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ListCateOption() {
    const [open, setOpen] = React.useState(true);

    return (
        <List
            sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', padding: '0px', color: '#fff', marginTop: '50px' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <ListItemButton sx={{ background: '#90C43C', ":hover": { background: '#90C43C' } }}>
                <ListItemText sx={{ height: '33px', padding: '5px' }} primary="Product Filters" />
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                    <FormControl sx={{ paddingTop: '22px', paddingLeft: '20px'}}>
                        <FormLabel id="demo-radio-buttons-group-label"><b>BRANDS</b></FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
            </Collapse>

            <Collapse in={open} timeout="auto" unmountOnExit>
                    <FormControl sx={{ paddingTop: '22px', paddingLeft: '20px'}}>
                        <FormLabel id="demo-radio-buttons-group-label"><b>BRANDS</b></FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
            </Collapse>


            
        </List>
    );
}
