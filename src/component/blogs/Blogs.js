import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './blogs.scss'



function Blogs() {
    return (
        <div className="blog-component-container">
            <h1 id="blog-title">Blogs</h1>
            <div className="blog_container">

                <div className="each-blog">
                    <Card sx={{ width: 600, height: 300, color: "gray" }}>
                        <CardActionArea href="https://medium.com/@jeremiahmarcos27/why-learn-javascript-7c1c1e23b03" target="_blank" rel="noreferrer noopener">
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://miro.medium.com/max/1050/0*NN4KKcpdRKn7cwbi"
                                alt="Why learn Javascript"
                            />

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Why Learn JavaScript
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    On this blog I walked through my opinion why Javascript is a great first language to learn.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>

                <div className="each-blog">
                    <Card sx={{ width: 600, height: 300 }}>
                        <CardActionArea href="https://medium.com/@jeremiahmarcos27/first-two-weeks-in-react-29fd4fc80e6c" target="_blank" rel="noreferrer noopener">
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://miro.medium.com/fit/c/168/168/1*dL1czrP7D0LIhUZfA8-XEA.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    First Two Weeks in React
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    This blog is about my first two weeks learning react and why it's nice to know frameworks.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div >

                <div className="each-blog">
                    <Card sx={{ width: 600, height: 300 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://miro.medium.com/max/1050/1*wzHmvZ_PmVrIm9BzKt7gIA.jpeg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Chef Ruby
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    This blog is about me learning Ruby for the backend.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>

                <div className="each-blog">
                    <Card sx={{ width: 600, height: 300 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://miro.medium.com/max/1050/0*QyZ3PlAP3G63R5XR"
                                alt="green iguana"
                            />

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Coding Survival Guide
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    This blog is about theresources I used the most while learning languages and frameworks.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Blogs
