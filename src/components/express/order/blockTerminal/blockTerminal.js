import React from 'react';
import classes from './blockTerminal.module.css';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import {TextField} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const BlockTerminal = (props) => {
    let listTerminal = props.terminal.map(r=>(
        <option onClick={ ()=>{ props.clickTerminal(r); props.checkValidTerminal(true)}} className={classes.list} value={r.external_code}>{r.address} {r.work_time === undefined ? '' : r.work_time}</option>
    ))
    return <div className={'row mt-3'}>
            <div className={'col-12'}>
                {
                    listTerminal.length===0
                        ? <CircularProgress />
                        : <FormControl variant="outlined" className={classes.selectList} >
                            <InputLabel id="demo-simple-select-outlined-label">Терминалы</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="Терминалы"
                                error={!props.validTerminal}
                                helperText={props.validTerminal ? '' : 'Выберите терминал' }
                            >
                                {listTerminal}
                            </Select>
                        </FormControl>
                }
            </div>
        </div>
}
export default BlockTerminal;