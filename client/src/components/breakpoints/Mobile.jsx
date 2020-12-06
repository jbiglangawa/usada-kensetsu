import { useMediaQuery } from 'react-responsive'

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 1024 })
    return isMobile ? children : null;
};

export default Mobile;