import React, { createElement,useState } from 'react';
import {Box,Table,TableContainer,TableHead,TableRow,TableCell,TableBody,Button,TextareaAutosize} from "@material-ui/core"
export const CoffeeList = ({
    coffee
}) => {
    const [count, setCount] = useState(0);
    return (
       <Box marginTop={5}>
            <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
        <TableRow>
            <TableCell style={{fontWeight:"bold",fontSize:"1.5rem"}}>#</TableCell>
            <TableCell style={{fontWeight:"bold",fontSize:"1.5rem"}}>Image</TableCell>
            <TableCell style={{fontWeight:"bold",fontSize:"1.5rem"}}>Name</TableCell>
            <TableCell style={{fontWeight:"bold",fontSize:"1.5rem"}}>Price</TableCell>
            <TableCell style={{fontWeight:"bold",fontSize:"1.5rem"}}>Ingredients</TableCell>
            <TableCell style={{fontWeight:"bold",fontSize:"1.5rem"}}>Order</TableCell>
            <TableCell style={{fontWeight:"bold",fontSize:"1.5rem"}}>Count</TableCell>



        
          </TableRow>
       
        </TableHead>
        <TableBody>
        {
            coffee.map((element) => {
                return (<TableRow key={element.id} display="flex">
                        <TableCell>{element.id}</TableCell>
                        <TableCell ><img width="50px" height="50px" src={element.img}></img></TableCell>
                        <TableCell >{element.name}</TableCell>
                        <TableCell >{'$' + element.price}</TableCell>
                        <TableCell >{(element.ingredients).toString()}</TableCell>
                        <TableCell><Button data-id={element.id} onClick={() => {console.log(element.id);setCount(count +1)}} variant="contained" color="secondary">Create Order</Button></TableCell>
                        <TableCell>{count}</TableCell>
                </TableRow>)

                })
        }
       
        </TableBody>
        </Table>
        <Table border={0} margintop={5}>
            <TableBody>
                <TableRow>
                    <TableCell>
                        
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
       
        </Box>
        
        
    );
}


