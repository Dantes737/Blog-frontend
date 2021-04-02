import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

let mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth
});
export const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            // АБО ====>>>> if (this.props.isAuth===false) return <Redirect to="/login"/>
            if (!this.props.isAuth) return <Redirect to="/login" />
            /// {...props} деструктуризація пропсів
            ///перекидування іх наступній компоненті
            return <Component {...this.props} />
        };
    };


   let ConnectedAuthRedirectComponent=connect(mapStateToPropsRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
};