import React, { Component } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import DiscountList from './DiscountList';
import { StoreState } from '../../reducers';
import { IDiscount } from '../../actions';
import { fetchDiscounts } from '../../actions/discounts';
import { Link } from 'react-router-dom';

interface IDiscountsProps {
	discounts: IDiscount[];
	fetchDiscounts: () => void;
}

class Discounts extends Component<IDiscountsProps> {
	componentDidMount() {
		this.props.fetchDiscounts();
	}

	render() {
		return (
			<Grid container justify='flex-start' direction='column' style={{ padding: '5rem', backgroundColor: 'grey' }}>
				<Typography>Discounts</Typography>
				<Grid item container justify='center'>
					<Link to='/discounts/new' style={{ textDecoration: 'none' }}>
						<Button variant='contained' color='secondary'>
							Create a new discount
						</Button>
					</Link>
				</Grid>
				<DiscountList discounts={this.props.discounts} />
			</Grid>
		);
	}
}

const mapStateToProps = ({ discounts }: StoreState): { discounts: IDiscount[] } => {
	return {
		discounts: Object.values(discounts)
	};
};

export default connect(mapStateToProps, { fetchDiscounts })(Discounts);
