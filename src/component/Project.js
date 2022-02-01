import React from 'react'
import './project.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Project() {
    return (
        <div className="project-container">
            <h1>Projects</h1>
            <div className="react-on-rails-project">
                <Card sx={{ width: "100%", margin: "20px"}}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        onClick={() => window.open("https://wba-jmarcos.herokuapp.com/", "_blank")}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                            Web Basketball Association
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                            App lets users see NBA team and player statistics and achievements, so that they can keep up to date with their favorites.
                            <p>Coded an API that consists of 600 NBA players and 30 teams using Ruby on Rails.</p>
                            <p>Programmed backend using Ruby on Rails and React for the frontend and implemented various sorting algorithms.</p>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Demo</Button>
                        <Button size="small">Github</Button>
                    </CardActions>
                </Card>

                <Card sx={{ width: "100%", margin: "20px" }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        onClick={() => window.open("https://wba-jmarcos.herokuapp.com/", "_blank")}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                            Christmas Themed Hangman Game
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                            App lets users play a Christmas-themed hangman game in which they can guess movies, characters and quotes.
                            <p>Engineered functionality for users to add their own movies, characters and quotes using React controlled form components.</p>
                            <p>Developed the main functionality of the game and used SVG to show if users guessed correctly.</p>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Demo</Button>
                        <Button size="small">Github</Button>
                    </CardActions>
                </Card>

                <Card sx={{ width: "100%", margin: "20px" }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        onClick={() => window.open("https://wba-jmarcos.herokuapp.com/", "_blank")}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                            Sneaker Ecommerce Project
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                            <h2>App lets users "buy", search and filter shoes by name and brand to leave their review and comment.</h2>
                            <p>Applied knowledge on React router and hooks to render and display information about shoes.</p>
                            <p>Populated data using Excel and Ruby to avoid repeating the same code and to have organized code.</p>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Github</Button>
                    </CardActions>
                </Card>

                <Card sx={{ width: "100%", margin: "20px" }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        onClick={() => window.open("https://wba-jmarcos.herokuapp.com/", "_blank")}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                            Movies Reviewer
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                            App lets users leave reviews and rate movies in the list.
                            <p>Programmed the API that consists of 25 shoes and used React to showcase the shoes by brand and name.</p>
                            <p>Automated seeding the API using google sheets in order to avoid repeating tasks.</p>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Github</Button>
                    </CardActions>
                </Card>




                <Card sx={{ width: "100%", margin: "20px" }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        onClick={() => window.open("https://wba-jmarcos.herokuapp.com/", "_blank")}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                            Toy tales
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                            Practiced react hooks by building a toy galery where you can like and delete toys.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Github</Button>
                    </CardActions>
                </Card>


                <Card sx={{ width: "100%", margin: "20px" }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="1200"
                        image="https://camo.githubusercontent.com/9ab8810689bb6c367c1528bb6d0b4bf9cdacf26e12fd6cf89776f9599a743451/68747470733a2f2f637572726963756c756d2d636f6e74656e742e73332e616d617a6f6e6177732e636f6d2f70686173652d322f72656163742d686f6f6b732d6d6f636b2d636f64652d6368616c6c656e67652d706c616e7473686f702f706c616e7473795f64656d6f2e676966"
                        onClick={() => window.open("https://wba-jmarcos.herokuapp.com/", "_blank")}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                            Plant shop
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                            Practiced react hooks by building a toy galery where you can search, add and "buy" plants.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Github</Button>
                    </CardActions>
                </Card>

                <br />
            </div>

        </div>

    )
}

export default Project
