import React from 'react';
import { SwipeableDrawer, Button } from '@material-ui/core';
import { useStyles } from './ShoppingCSS';
import Shopping from './Shopping';

const ShoppingDrawer = () => {
	const { drawer } = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button onClick={handleDrawerOpen} color='secondary' variant='outlined'>
				Shop Now
			</Button>
			<SwipeableDrawer
				anchor='bottom'
				open={open}
				onClose={handleDrawerClose}
				onOpen={handleDrawerOpen}
				className={drawer}>
				<Shopping handleDrawerClose={handleDrawerClose} />
			</SwipeableDrawer>
		</>
	);
};

export default ShoppingDrawer;
