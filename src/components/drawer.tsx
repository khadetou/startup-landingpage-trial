import { FC, Fragment } from "react";
import RcDrawer from 'rc-drawer';
import { IPlacement } from "rc-drawer/lib/IDrawerPropTypes";



interface DrawerProps {
    className?: string;
    children?: any;
    closeButton: boolean;
    closeButtonStyle?: string;
    drawerHandler: () => void;
    toggleHandler: () => void;
    open: boolean;
    width: string;
    placement?: IPlacement;
    drawerStyle?: string;
    closeBtnStyle?: string;
    props?: any;
}

const Drawer: FC<DrawerProps> = ({
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open,
    width,
    placement,
    drawerStyle,
    closeBtnStyle,
    ...props
}) => {
    return (
        <Fragment>
            <RcDrawer
                open={open}
                onClose={toggleHandler}
                className={`drawer ${className || ""}`.trim()}
                width={width}
                placement={placement}
                handler={false}
                level={null}
                duration={"0.4s"}
                {...props}
            >
                {
                    closeButton &&
                    (
                        <div onClick={toggleHandler} className={closeBtnStyle}>
                            {closeButton}
                        </div>
                    )
                }
                <div className={drawerStyle}>{children}</div>
            </RcDrawer>
            <div
                className="drawer__handler inline-block"
                onClick={toggleHandler}
            >
                {drawerHandler}
            </div>
        </Fragment>
    )
}

export default Drawer;
