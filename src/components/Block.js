import React from "react";
import PropTypes from "prop-types";
import { Grid, Paper, Typography } from "@material-ui/core";

const Block = ({ blockInfo }) => {
  return blockInfo.id ? (
    <Grid item xs={12}>
      <Paper elevation={0} style={{ backgroundColor: "rgba(0, 0, 0, 0.12)", padding: 10 }}>
        <Typography component="p" variant="body2" style={{ color: "blue", fontWeight: "500" }}>{blockInfo.id}</Typography>
        <Typography component="p" variant="body2" style={{ fontWeight: "500" }}>{blockInfo.attributes.data}</Typography>
      </Paper>
    </Grid>
  ) : null
}

Block.PropTypes = { blockInfo: PropTypes.obj };

export default Block;
