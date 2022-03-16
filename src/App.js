import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { message } from 'react-message-popup'

const alertFunction = (alertType, alertText) => {
  message[alertType](alertText, 4000).then(({destory}) => {
    setTimeout(() => {
      destory();
      message.success("Finished", 2000)
    }, 2000)
  })
}

function App() {
  return (
    <div>
      <Typography variant="h3" mb={2}>React Message Popup</Typography>
      <Stack direction="row" spacing={2}>
      <Button variant="outlined" onClick={() => alertFunction("loading", "Loading a progress...")}>Success</Button>
      <Button variant="outlined" onClick={() => alertFunction("warning", "Warning a progress...")} style={{color : "#FF8000", borderColor : "#FF8000"}}>Warning</Button>
      <Button variant="outlined" onClick={() => alertFunction("error", "Error a progress...")} style={{color : "#FF0000", borderColor : "#FF0000"}}>Error</Button>
    </Stack>
    </div>
  );
}

export default App;
