import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Tooltip } from 'reactstrap';

const ElementTooltip = ({id, children, style, tooltipChildren, ...tooltipConfig}) => {
    const [t] = useTranslation("commons")
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div style={style} id={id} onMouseOver={() => setShowTooltip(true)}>
            {children}
            <Tooltip  placement="bottom" autohide={false} toggle={() => setShowTooltip(!showTooltip)} isOpen={showTooltip} target={id} {...tooltipConfig} style={{maxWidth: '500px'}}> 
                {t("Source")}: {tooltipChildren}
            </Tooltip>
        </div>
    );
}

export default ElementTooltip;