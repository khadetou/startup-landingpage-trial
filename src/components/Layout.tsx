import { FC, useState } from "react";
import Header from "./header/header";
import Sticky from 'react-stickynode';

interface LayoutProps {
    children: React.ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
    const [isSticky, setIsSticky] = useState(false);

    const handleStateChange = (status: any) => {
        console.log(status);
        if (status.status === Sticky.STATUS_FIXED) {
            setIsSticky(true);
        } else if (status.status === Sticky.STATUS_ORIGINAL) {
            setIsSticky(false);
        }
    }


    return (
        <>
            <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
                <Header className={isSticky ? "sticky bg-white" : "unSticky bg-transparent"} />
            </Sticky>
            <main id="content">
                {children}
            </main>
        </>
    )
}

export default Layout;
