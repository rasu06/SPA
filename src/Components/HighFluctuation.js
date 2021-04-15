import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import nameReducer from '../Utility/nameReducer'
import percentage from '../Utility/percentage'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
function HighFluctuation(props) {
    const highMarginData = props.highFluctuation?.results.map((data, index) => {
        return (
            <div key={index} className="col">
                <div className="small" style={{marginBottom:15}}>{nameReducer(data.name)}</div>
               
                <Box position="relative" display="inline-flex" >

                    {/* <CircularProgress value={percentage(data.fluctuation)} variant="determinate" {...props} /> */}
                    <ArrowUpwardIcon color="primary" />
                    <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      
                    >

                    </Box>
                    <Typography variant="caption" component="div" color="light" >{`${percentage(data.fluctuation)}%`}</Typography>
                </Box>
            
            </div>
        )
    })
    return (
        <div className="card">
            <div class="card-header" style={{color: "black"},{backgroundColor:"#f4f4f9"}}>
                Top Fluctuating Recipes
            </div>
            <div className="card-body row rounded" style={{color: "black"},{backgroundColor:"white"},{borderbottom:"1px solid lightgray"}}>
                {highMarginData}
            </div>


        </div>
    );
}

export default HighFluctuation;