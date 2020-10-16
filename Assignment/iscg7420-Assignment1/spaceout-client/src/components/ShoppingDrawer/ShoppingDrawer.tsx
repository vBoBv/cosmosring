import React from 'react';
import { SwipeableDrawer, Button } from '@material-ui/core';
import Shopping from './Shopping';

const ShoppingDrawer = () => {
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button onClick={handleDrawerOpen} color='primary'>
				Shop Now
			</Button>
			<SwipeableDrawer
				anchor='bottom'
				open={open}
				onClose={handleDrawerClose}
				onOpen={handleDrawerOpen}
				style={{ width: '100%' }}>
				<Shopping />
			</SwipeableDrawer>
		</>
	);
};

export default ShoppingDrawer;
