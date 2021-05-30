import * as React from 'react';
import { Box, Typography, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { ASYNC_STATUS } from '../../../redux/consts';
import {CoffeeList} from '../components/table'
export const MainPage = () => {
    const coffeeBranch = useSelector((state) => state.coffee);
    console.log(coffeeBranch)
    return (
        <div>
            <Box width="90%" margin="0 auto" paddingTop={3}>
                <Typography variant="h4"> Coffee List

        </Typography>
                {
                    (coffeeBranch.status === ASYNC_STATUS.IN_PROGRESS) ? (

                        <Box height="20vh" display="flex" alignItems="center" justifyContent="center" >
                            <CircularProgress />
                        </Box>
                    ) : (<CoffeeList coffee={coffeeBranch.data}></CoffeeList>)
                }

            </Box>
        </div>
    );
}

