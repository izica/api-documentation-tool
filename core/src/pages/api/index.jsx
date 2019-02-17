import React from 'react';
import { observer } from 'mobx-react';
import renderHTML from 'react-render-html';
import ApiSection from './components/ApiSection';
import api from 'config/api'
import Template from '../../components/Template';

@observer
class ApiPage extends React.Component {
    render = () => (
        <React.Fragment>
            <Template visible={!!api.title}>
                <h1>{api.title}</h1>
            </Template>
            <Template visible={!!api.description}>
                <div style={{ marginBottom: 30 }}>
                    {renderHTML(api.description ? api.description : '')}
                </div>
            </Template>
            {api.sections.map(section => <ApiSection key={`ApiPage${section.id}`} section={section}/>)}
        </React.Fragment>
    )
}

export default ApiPage;
