import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemSecondaryAction, ListItemText, ListSubheader, Switch } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			maxWidth: 300,
			backgroundColor: 'theme.palette.background.paper'
		}
	})
);

const ShoppingCategoryListItem = () => {
	const classes = useStyles();
	const [checked, setChecked] = React.useState(['planet']);

	const handleToggle = (value: string) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
		console.log(newChecked);
	};

	return (
		<List
			subheader={
				<ListSubheader color='primary' style={{ fontSize: '2rem', borderBottom: '1px solid red' }}>
					Product Category
				</ListSubheader>
			}
			className={classes.root}>
			<ListItem>
				<ListItemText id='switch-list-label-planet' primary='Planet' />
				<ListItemSecondaryAction>
					<Switch edge='end' onChange={handleToggle('planet')} checked={checked.indexOf('planet') !== -1} />
				</ListItemSecondaryAction>
			</ListItem>
			<ListItem>
				<ListItemText id='switch-list-label-asteroid' primary='Asteroid' />
				<ListItemSecondaryAction>
					<Switch edge='end' onChange={handleToggle('asteroid')} checked={checked.indexOf('asteroid') !== -1} />
				</ListItemSecondaryAction>
			</ListItem>
			<ListItem>
				<ListItemText id='switch-list-label-planetoid' primary='Planetoid' />
				<ListItemSecondaryAction>
					<Switch edge='end' onChange={handleToggle('planetoid')} checked={checked.indexOf('planetoid') !== -1} />
				</ListItemSecondaryAction>
			</ListItem>
		</List>
	);
};

export default ShoppingCategoryListItem;
