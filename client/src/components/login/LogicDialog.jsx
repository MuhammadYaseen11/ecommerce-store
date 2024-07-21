import React, { useState, useEffect } from 'react';

import { Dialog } from "@mui/material";

const LogicDialog = ({open}) => {
    return (
        <Dialog open={open}> 
        Hello 
        </Dialog>
    );
}

export default LogicDialog;