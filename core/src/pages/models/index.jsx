import React from 'react';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import * as models from 'config/models'
import ModelView from './components/ModelView';

@observer
class ModelsPage extends React.Component {
    @computed
    get models() {
        return Object.keys(models).map(key => models[key]);
    }

    render = () => this.models.map(model => <ModelView key={`ModelView${model.name}`} model={model}/>);
}

export default ModelsPage;
