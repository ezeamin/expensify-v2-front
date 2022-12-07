export interface PrivateRouteProps {
    component: React.FC;
    args?: any;
    needsLogin?: boolean;
    path: string;
}
