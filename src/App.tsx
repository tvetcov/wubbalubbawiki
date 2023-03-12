import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { store } from 'redux/store';
import router from 'router/router';
import theme from 'styles/theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ThemeProvider>
    );
};

export default App;
