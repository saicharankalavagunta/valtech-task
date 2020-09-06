import React, { Suspense, Component } from "react";
import { BrowserRouter as ReactRouter, Route, Switch } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";

import { GlobalRoutes } from './Routes'

class GlobalRouter extends Component {

    render() {
        return (
            <ReactRouter>
                <Suspense fallback={<LinearProgress />}>
                    <Switch>
                        {Object.values(GlobalRoutes).map(route => {
                            console.log(route)
                            return <Route key={route.name} path={route.path} exact component={route.component} />;
                        })}
                    </Switch>
                </Suspense>
            </ReactRouter>
        );
    }
}

export default GlobalRouter;
