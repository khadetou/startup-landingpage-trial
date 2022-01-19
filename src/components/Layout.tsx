import { FC, useState } from "react";
import Header from "./header/header";
import Sticky from 'react-stickynode';

interface LayoutProps {
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}
const Layout: FC<LayoutProps> = ({ children, isOpen, setIsOpen }) => {
    const [isSticky, setIsSticky] = useState(false);

    const handleStateChange = (status: any) => {

        if (status.status === Sticky.STATUS_FIXED) {
            setIsSticky(true);
        } else if (status.status === Sticky.STATUS_ORIGINAL) {
            setIsSticky(false);
        }
    }

    return (
        <>
            <div onClick={() => setIsOpen(false)} className={isOpen ? `fixed top-0 right-0 left-0 bottom-0 bg-black/20 z-[2000]` : ""}></div>
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
