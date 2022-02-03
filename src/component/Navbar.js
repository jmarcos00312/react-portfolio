import React from 'react'
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom"
const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(10),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "#F3F3FA",
        fontSize: "25px",
        marginLeft: theme.spacing(15),
        "&:hover": {
            color: "#81879E",
            borderBottom: "1px solid white",
        },
    },
}));

function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position="static" style={{ background: "#222626" }}>
            <CssBaseline />
            <Toolbar>
                <Typography variant="h3" className={classes.logo} style={{ color: "#F3F3FA" }}>
                    Jeremiah Marcos
                </Typography>
                <div className={classes.navlinks}>
                    <Link to="/" className={classes.link}>
                        Home
                    </Link>
                    <Link to="/projects" className={classes.link}>
                        Projects
                    </Link>
                    <Link to="/blogs" className={classes.link}>
                        Blogs
                    </Link>
                    <Link to="/contact" className={classes.link}>
                        Contact
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;