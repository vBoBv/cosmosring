import React, { Component } from 'react';
import { IDiscount } from '../../actions';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchDiscount } from '../../actions/discounts';
import { StoreState } from '../../reducers';
import { Grid } from '@material-ui/core';

interface IDiscountShowProps {
	discounts: IDiscount[];
	fetchDiscount: (id: number) => void;
}

interface IRouteComponentMatchParamProps {
	id: string;
}

class DiscountShow extends Component<RouteComponentProps<IRouteComponentMatchParamProps> & IDiscountShowProps> {
	componentDidMount() {
		const { id } = this.props.match.params;

		this.props.fetchDiscount(parseInt(id));
	}

	renderDiscounts() {
		const { id } = this.props.match.params;
		const discount = this.props.discounts.filter((discount) => discount.id === parseInt(id))[0];

		if (discount) {
			return (
				<Grid item key={discount.id}>
					<h1>
						Discount code: <i style={{ color: 'darkgray' }}>{discount.discount_code}</i>
					</h1>

					<h1>
						Is expired:{' '}
						{discount.is_expired ? <i style={{ color: 'darkgray' }}>Yes</i> : <i style={{ color: 'darkgray' }}>No</i>}
					</h1>
				</Grid>
			);
		}
	}

	render() {
		return (
			<Grid container style={{ padding: '5rem', backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
				{this.renderDiscounts()}
			</Grid>
		);
	}
}

const mapStateToProps = ({ discounts }: StoreState): { discounts: IDiscount[] } => {
	return {
		discounts: Object.values(discounts)
	};
};

export default connect(mapStateToProps, { fetchDiscount })(DiscountShow);
