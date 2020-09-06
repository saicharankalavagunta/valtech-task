import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useHistory } from 'react-router-dom';
import { GlobalRoutes } from '../../GlobalRouter/Routes';
import { deleteItem } from '../../services/Redux/ActionCreators';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        '&:hover': {
            opacity: 0.4,
            cursor: "pointer",
            background: 'red'
        }
    },
    scroll: {
        margin: 4,
        padding: 4,
        backgroundColor: "green",
        width: 500,
        height: 110,
        overflowX: 'hidden',
        overflowY: 'auto',
        textAlign: 'justify'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    button: {
        margin: 2,
        borderRadius: 40
    }
}));

export default function RecipeReviewCard({ id, image, logo, title, exp, totalProjects, desc, imgTitle }, props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [hover, setHover] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleEdit = (e) => {
        history.push(GlobalRoutes.ADD_PROPERTY.path, { id: id })
    }
    const handleDelete = () => {
        dispatch(deleteItem(id - 1))

    }
    const toggleHover = () => {
        setHover(!hover)
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                // eslint-disable-next-line jsx-a11y/alt-text
                avatar={<img src={logo} style={{ height: 50 }} />}
                title={<strong>{title}</strong>}
                subheader={<div style={{ display: 'flex' }}>
                    <span style={{ lineHeight: 0, margin: 5 }}>
                        <p style={{ textAlign: 'center' }}>{exp}</p>
                        <strong>Years Exp.</strong>
                    </span>
                    <span style={{ lineHeight: 0, margin: 5 }}>
                        <p style={{ textAlign: 'center' }}>{totalProjects}</p>
                        <strong>Projects</strong>
                    </span>
                </div>
                }
            />
            <CardContent
                style={{
                    backgroundImage: 'url(' + image + ')', width: '100%', height: '100%',
                    backgroundSize: 'cover', minHeight: 170,
                }}
                className={hover ? classes.hover : null}
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
            >
                {hover ?
                    <div style={{ margin: 30, }}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={<EditIcon />}
                            onClick={handleEdit}
                        >
                            EDIT
      </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<DeleteForeverIcon />}
                            onClick={handleDelete}
                        >
                            DELETE
</Button>
                    </div>
                    : null}
            </CardContent >

            <CardActions disableSpacing>
                <h3>
                    {imgTitle}
                </h3>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {desc}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card >
    );
}
