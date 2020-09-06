/* eslint-disable no-unused-vars */
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
import Card from '../../components/Card/index'
import store from '../../services/Redux/Store'
import { useSelector } from "react-redux";

const selectState = () => ({
    items: store.getState().items
});
const Home = ({ classes }) => {
    const { items } = useSelector(selectState);
    return (
        <Container style={{ marginTop: 100, marginBottom: 100 }}>
            <h1>Trending Projects</h1>
            <p>most sought-after projects in bengaluru</p>

            <Grid container spacing='3' style={{ justifyContent: 'left' }}>

                {items.map(item => {
                    return (
                        <Grid item style={{ minWidth: 350 }}>
                            <Card
                                id={item.id}
                                image={item.imgURL}
                                title={item.title}
                                desc={item.desc}
                                logo={item.logo}
                                exp={item.totalExp}
                                totalProjects={item.totalProjects}
                                location={item.location}
                                imgTitle={item.imgTitle} />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>

    );
};

export default Home;
