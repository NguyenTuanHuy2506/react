import React from 'react';

const UpdateComponent = OriginComponent => {
    class ComponentUpdated extends React.Component {
        render() {
            return <OriginComponent/>
        }
    }

    return ComponentUpdated;
}

export default UpdateComponent;