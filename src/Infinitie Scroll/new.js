
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Fab, Paper, Tooltip, Typography } from "@mui/material";
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { MoonLoader } from 'react-spinners'
import './style.css'

const ImgScroll = () => {
    const [img, setImg] = useState([]);
    const [page, setPage] = useState(5);
    const [visible, setVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredImg, setFilteredImg] = useState([]);


    const fetchData = async () => {
        try {
            const apilink = `https://api.unsplash.com/photos/?client_id=kYeg7I5ZCIquQ1nXOnbGFhK4b6ISrI7H52N1huJ1x0A&page=${page}`;
            const response = await axios.get(apilink);
            const newImages = response.data;

            if (page === 1) {
                setImg(newImages);
            } else {
                setImg(prevImages => [...prevImages, ...newImages]);
            }
        } catch (error) {
            console.error('Error fetching image URLs:', error);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchData();
        }, 100);
        return () => clearTimeout(timer);
    }, [page]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const filteredImages = img.filter(data =>
            data.user.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredImg(filteredImages);
    }, [searchQuery, img]);

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const fabStyle = {
        position: 'fixed',
        bottom: 30,
        right: 30,
        bgcolor: 'green'
    };

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <>
       
            <div className="search-bar sticky-top">
                <h1 className='gradient'>Infinite Images Scroll</h1>
                <div>
                <Tooltip title="Search the Image">
                    <input
                        type="text"
                        placeholder="Search for images..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                       </Tooltip>
                    <Tooltip title="search">
                    <button onClick={() => setPage(5)}>Search</button>
                    </Tooltip>
                </div>
            </div>
         
            <div className="container-fluid bg_color_div">
                <div className="row justify-content-around">
                    {filteredImg.length > 0 ? (
                        filteredImg.map((data, index) => (
                            <Card key={index} className="card col-lg-3 m-2 s-2" component={Paper} >
                                <div>
                                    <Typography variant="subtitle1" className="image-name-text">
                                        {data.user.name}
                                    </Typography>
                                </div>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={data.urls.regular}
                                    alt="Image"
                                    loading='lazy'
                                    className='hover'
                                />
                                <Avatar src={data.user.profile_image.small}></Avatar>
                            </Card>
                        ))
                    ) : (
                        <p>No images found.</p>
                    )}
                </div>
                <Fab
                    size="large"
                    aria-label='Expand'
                    color='inherit'
                    style={{ ...fabStyle, display: visible ? 'inline' : 'none', backgroundColor: 'blue' }}
                    onClick={scrollToTop}
                    className='fabStyle'
                >
                    <UpIcon sx={{ fontSize: 30, fontWeight: 'bolder', color: 'red' }} />
                </Fab>
            </div>
            <div style={{ display: 'grid', placeItems: 'center' }}>
                <MoonLoader color="#1e5bbd" />
            </div>
        </>
    );
};

export default ImgScroll;

