import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'

import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </Provider>
    </BrowserRouter>
)
