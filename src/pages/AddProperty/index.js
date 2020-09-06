/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import { Container, TextField, makeStyles, createMuiTheme, MuiThemeProvider, Button, Grid } from "@material-ui/core";
import store from '../../services/Redux/Store'
import { useSelector, useDispatch } from "react-redux";
import { addItem } from '../../services/Redux/ActionCreators'
import { useHistory } from "react-router-dom";
import { GlobalRoutes } from '../../GlobalRouter/Routes'
const selectState = () => ({
    items: store.getState().items
});

const theme = createMuiTheme({
    overrides: {
        MuiOutlinedInput: {
            root: {
                borderRadius: 40,
                minWidth: 300,
                height: 50
            }
        }
    }
});

const AddProperty = (id) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { items } = useSelector(selectState);
    const selectedItem = items[id.location.state.id];

    const formFields = [
        { id: 0, title: "Developer Logo Image URL", value: selectedItem.logo },
        { id: 1, title: "Developer Name", value: selectedItem.title },
        { id: 2, title: "Years Of Experience", value: selectedItem.totalExp },
        { id: 3, title: "Projects Count", value: selectedItem.totalProjects },
        { id: 4, title: "Description", value: selectedItem.desc },
        { id: 0, title: "Project Name", value: selectedItem.imgTitle },
        { id: 0, title: "Project Location", value: selectedItem.location },
        { id: 0, title: "Project Image URL", value: selectedItem.imgURL },
    ]
    const itemDetails = {
        logo: selectedItem.logo,
        title: selectedItem.title,
        totalExp: selectedItem.totalExp,
        totalProjects: selectedItem.totalProjects,
        desc: selectedItem.desc,
        imgTitle: selectedItem.imgTitle,
        location: selectedItem.location,
        imgURL: selectedItem.imgURL,
        id: selectedItem.id
    }
    const handleAdd = () => {
        dispatch(addItem(itemDetails))
        history.push(GlobalRoutes.HOME.path)
    }
    return (
        <MuiThemeProvider theme={theme}>
            <Grid container style={{ display: 'grid', justifyContent: 'center', marginTop: 50, marginBottom: 50 }} >
                <Grid item>
                    <h2>Featured Developers</h2>
                </Grid>
                <Grid item>
                    <form noValidate autoComplete="off" >
                        {formFields.map(formField => {
                            return (
                                <div style={{ margin: 30, }}>
                                    <TextField id="outlined-basic" label={formField.title} variant="outlined"
                                        value={formField.value}
                                    />
                                </div>
                            )
                        })}
                    </form>
                </Grid>
                <Grid item style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button style={{ borderRadius: 40 }} variant="contained" color="primary" onClick={handleAdd}>Add Property</Button>
                </Grid>
            </Grid>
        </MuiThemeProvider>
    );
};

export default AddProperty;
