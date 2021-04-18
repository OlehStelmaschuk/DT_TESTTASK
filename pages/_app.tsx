import { FC } from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import '../styles/globals.css';

const App: FC = ({ Component, pageProps }: any) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
};

export default App;
