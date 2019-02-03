import React from 'react';
import { observer } from 'mobx-react';
import renderHTML from 'react-render-html';
import ApiSection from './components/ApiSection';
import api from 'config/api'
console.log(api);

@observer
class ApiPage extends React.Component {
    render = () => (
        <div className="container">
            <div className="columns">
                <div className="column col-8 col-mx-auto" style={{paddingTop: 50}}>
                    <h1>{api.title}</h1>
                    <div style={{marginBottom: 30}}>
                        {renderHTML(api.description)}
                    </div>
                    {api.sections.map(section => <ApiSection key={`ApiPage${section.id}`} section={section}/>)}
                </div>
            </div>
        </div>
    )
}

export default ApiPage;
