import React from 'react';
import { useStyles } from './MenuStepperCSS';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

interface IMenuStepperProps {
	activeStep: number;
	getSteps: () => string[];
}

const MenuStepper: React.FC<IMenuStepperProps> = ({ activeStep, getSteps }) => {
	const { root, stepperContainer, instructions } = useStyles();
	const steps = getSteps();

	return (
		<div className={root}>
			<Stepper
				activeStep={activeStep}
				alternativeLabel
				className={stepperContainer}
				style={{ backgroundColor: 'transparent' }}>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>
							<Typography className={instructions}>{label}</Typography>
						</StepLabel>
					</Step>
				))}
			</Stepper>
		</div>
	);
};

export default MenuStepper;
