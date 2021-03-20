import React from 'react';
import { useStyles } from './ShoppingCSS';
import { List, ListItem, ListItemSecondaryAction, ListItemText, ListSubheader, Switch } from '@material-ui/core';

const ShoppingCategoryListItem = () => {
	const { productCategory, productCategoryHeading } = useStyles();
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
		// console.log(newChecked);
	};

	return (
		<List
			subheader={
				<ListSubheader color='primary' className={productCategoryHeading}>
					Product Category
				</ListSubheader>
			}
			className={productCategory}>
			<ListItem>
				<ListItemText id='switch-list-label-planet' primary='Planet' />
				<ListItemSecondaryAction>
					<Switch edge='end' onChange={handleToggle('planet')} checked={checked.indexOf('planet') !== -1} />
				</ListItemSecondaryAction>
			</ListItem>
			<ListItem>
				<ListItemText id='switch-list-label-asteroid' primary='Asteroid' />
				<ListItemSecondaryAction>
					<Switch
						edge='end'
						onChange={handleToggle('asteroid')}
						checked={checked.indexOf('asteroid') !== -1}
						disabled
					/>
				</ListItemSecondaryAction>
			</ListItem>
			<ListItem>
				<ListItemText id='switch-list-label-planetoid' primary='Planetoid' />
				<ListItemSecondaryAction>
					<Switch
						edge='end'
						onChange={handleToggle('planetoid')}
						checked={checked.indexOf('planetoid') !== -1}
						disabled
					/>
				</ListItemSecondaryAction>
			</ListItem>
		</List>
	);
};

export default ShoppingCategoryListItem;
