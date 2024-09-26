import React from 'react';
import Modeler from "bpmn-js/lib/Modeler";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

const BpmnModeler = () => {
    const containerRef = React.createRef();

    React.useEffect(() => {
        const modeler = new Modeler({
            container: containerRef.current,
            keyboard: {
                bindTo: window
            },
            height: "80vh",
        });
        modeler.createDiagram();

        return () => modeler.destroy();
    }, []);

    return (
        <div ref={containerRef} style={{ boxShadow: "2px 6px 12px rgba(0, 0, 0, 0.3)" }}></div>
    );
}

export default BpmnModeler;
