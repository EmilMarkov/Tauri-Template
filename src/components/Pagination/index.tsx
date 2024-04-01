import React from 'react'
import { Content, Props } from './styles'
import HomePage from './pages/Home'
import SettingsPage from './pages/Settings'
import AboutPage from './pages/About'

const Pagination: React.FC<Props> = ({setPage})=>{

    // Set pages using switch
    var page = null
    switch(setPage){
        case 'home':
            page = <HomePage visible={true} />
            break
        case 'settings':
            page = <SettingsPage visible={true} />
            break
        case 'about':
            page = <AboutPage visible={true} />
            break
    }

    return(
        <Content>            
            <div className='scrollable'>
                {page}
            </div>
        </Content>
    )
}

export default Pagination