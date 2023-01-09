import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function ListCategory() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const myStyleListCate = {
        background: '#fff',
        color: '#000',
        borderBottom: '1px solid #CECED7',
    }

    return (
        <List
            sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', padding: '0px', color: '#fff' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <ListItemButton sx={{ background: '#90C43C', ":hover": { background: '#90C43C' } }} onClick={handleClick}>
                <ListItemText sx={{ height: '35px', padding: '5px' }} primary="Browse Categories" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={myStyleListCate}>
                        <ListItemText primary="Fruits and Vegetables" />
                        (53)
                    </ListItemButton>

                    <ListItemButton sx={myStyleListCate}>
                        <ListItemText primary="Cooking" />
                        (24)
                    </ListItemButton>

                    <ListItemButton sx={myStyleListCate}>
                        <ListItemText primary="Fruits and Vegetables" />
                        (32)
                    </ListItemButton>

                    <ListItemButton sx={myStyleListCate}>
                        <ListItemText primary="Beverages" />
                        (64)
                    </ListItemButton>

                    <ListItemButton sx={myStyleListCate}>
                        <ListItemText primary="Fruits and Vegetables" />
                        (12)
                    </ListItemButton>

                    <ListItemButton sx={myStyleListCate}>
                        <ListItemText primary="Fruits and Vegetables" />
                        (10)
                    </ListItemButton>

                    <ListItemButton sx={myStyleListCate}>
                        <ListItemText primary="Fruits and Vegetables" />
                        (55)
                    </ListItemButton>

                    <ListItemButton sx={myStyleListCate}>
                        <ListItemText primary="Fruits and Vegetables" />
                        (90)
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
}
