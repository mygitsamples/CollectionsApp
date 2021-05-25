import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function CollectionTable(props) {
    const classes = useStyles();
    const [data, setData] = useState({});
    useEffect(async () => {
        const result = await axios(
            'http://localhost:3200/dictionary',
        );
        setData(result.data);
    }, []);
   

const eleGriddata= (
    <TableBody>
    {props.griddata && Object.keys(props.griddata).map((row) => (
        <TableRow key={props.griddata[row]["key"]}>
            <TableCell component="th" scope="row">
                {props.griddata[row]["key"]}
            </TableCell>
            { <TableCell >{props.griddata[row]["value"]}</TableCell>
            }
        </TableRow>
    ))}
</TableBody>
)
   
const elepagedata= (
    <TableBody>
    {data && Object.keys(data).map((row) => (
        <TableRow key={data[row]["key"]}>
            <TableCell component="th" scope="row">
                {data[row]["key"]}
            </TableCell>
            { <TableCell >{data[row]["value"]}</TableCell>
            }
        </TableRow>
    ))}
</TableBody>
)      
    
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Key</TableCell>
                        <TableCell >Value</TableCell>
                    </TableRow>
                </TableHead>
            {props.displaydata?eleGriddata:elepagedata}
            </Table>
        </TableContainer>
    );
}
export default CollectionTable