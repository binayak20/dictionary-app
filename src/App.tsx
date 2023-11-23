// import {memo} from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
// import {createTheme, ThemeProvider} from '@mui/material/styles';

// import AppGlobalStyles from 'src/AppGlobalStyles';
// import AppRoutes from 'src/AppRoutes';
// import {AuthProvider} from 'src/contexts/AuthContext';

// const theme = createTheme();

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <BrowserRouter>
      {/* <AuthProvider>
        <AppGlobalStyles /> */}
      <AppRoutes />
      {/* </AuthProvider> */}
    </BrowserRouter>
    // </ThemeProvider>
  );
}

export default App;
