import React from 'react';
import classes from './css/filterDelivery.module.css'
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";

const FilterDelivery = (props) => {
    return <div className={'row'}>
        <div className={'col-12 d-lg-block d-none'}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Тип доставки</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={'pt-0'}>
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <RadioGroup aria-label="gender" name="gender1">
                                <FormControlLabel value="female" control={<Radio color="primary"/>}
                                                  label="Склад-Склад"/>
                                <FormControlLabel value="male" control={<Radio color="primary"/>} label="Склад-Дверь"/>
                                <FormControlLabel value="other" control={<Radio color="primary"/>} label="Дверь-Склад"/>
                                <FormControlLabel value="disabled" control={<Radio color="primary"/>}
                                                  label="Дверь-Дверь"/>
                            </RadioGroup>
                        </div>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
        <div className={'col-12 mt-2 d-lg-block d-none'}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    expanded={true}
                >
                    <Typography>Услуги</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={'pt-0'}>
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Доставка лично в руки"
                            />
                        </div>
                        <div className={'col-12 '}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Доставка с возвратом"
                            />
                        </div>
                        <div className={'col-12'}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Опасный груз"
                            />
                        </div>
                        <div className={'col-12'}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Сбор по описи"
                            />
                        </div>
                        <div className={'col-12'}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Страхование"
                            />
                        </div>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
        <div className={'col-12 mt-2'}>
            <img className={classes.advertising} src={'https://pbs.twimg.com/media/DlrPwOPWwAEyZwu.jpg:large'}/>
        </div>
    </div>
}
export default FilterDelivery;