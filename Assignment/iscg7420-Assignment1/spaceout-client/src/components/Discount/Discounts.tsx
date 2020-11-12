import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import DiscountList from './DiscountList';
import { StoreState } from '../../reducers';
import { IDiscount } from '../../actions';
import { fetchDiscounts } from '../../actions/discounts';

interface DiscountsProps {
	discounts: IDiscount[];
	fetchDiscounts: Function;
}

class Discounts extends Component<DiscountsProps> {
	componentDidMount() {
		this.props.fetchDiscounts();
	}

	render() {
		return (
			<Grid container justify='flex-start' direction='column' style={{ padding: '5rem', backgroundColor: 'grey' }}>
				<Typography>Discounts</Typography>
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
