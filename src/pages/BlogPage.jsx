/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card, CardContent, Stack, Typography } from "@mui/material";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArduinoImage } from "../assets/img/workshops";
import { EventCard } from "../components";
import { Badge } from "../fusion-ui/Badge/Badge";

const BlogPage = () => {
  const blogx = {
    title: 'ESPN5: The world of F****ing Terror',
    content: 'Lauda lega mera',
    author: {
      name: 'Niraml Singh',
      desc: 'Mein chutiya hu',
    },
    tags: ['Microcontroller', 'Cotton', 'Sugar Daddy', 'Xhamster'],
    featuredImage: ArduinoImage,
  }
  const {id} = useParams();

  const [blog, setBlog] = useState(blogx);
  
  const getBlogData = async () => {
    try {
      const blogData = (await axios.get(`/api/blog/${id}`)).data;
      setBlog(blogData);
    } catch(e) {
      console.log(`Coundn't load blog`, e);
      setBlog(blogx);
    }
  }

  useEffect(() => {
    getBlogData()
  }, []); 

  return (
    <>
      <section id="blog" className="blog" style={{ marginTop: "60px" }}>
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-8">
              <h1><strong>{blogx.title}</strong></h1>
              <img src={blogx?.featuredImage} alt="" />
              <div>{blogx.author.name}</div>
              <div contentEditable='false' dangerouslySetInnerHTML={{ __html: blogx.content }}></div>
              {blogx.tags.length > 0 ? <span> {blogx.tags.join(", ")} </span> : null}
            </div>
            <div className="col-lg-4">
              <BlogSideBar tags={blog.tags} blogId={id}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const events = [
  {
    name: 'Myntra Fashion Week',
    summary: 'Myntra hosting a fashion event at NYC',
    startDate: new Date(),
    endDate: new Date(),
    material: 'Cotton',
    address: 'Park Street, NYC',
  },
  {
    name: 'Myntra Fashion Week',
    summary: 'Myntra hosting a fashion event at NYC',
    startDate: new Date(),
    endDate: new Date(),
    material: 'Cotton',
    address: 'Park Street, NYC',
  },
  {
    name: 'Myntra Fashion Week',
    summary: 'Myntra hosting a fashion event at NYC',
    startDate: new Date(),
    endDate: new Date(),
    material: 'Cotton',
    address: 'Park Street, NYC',
  },
];

const BlogSideBar = ({categories, tags, blogId}) => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-item recent-posts">
          <h3 className="sidebar-title">Events</h3>
          <div className="mt-3">
          <Stack direction="column" spacing={1}>

            {events.length > 0 ? events.slice(0,5).map((post, index) => (
              <EventCard key={"recent_blog_post_" + index} event={post} />
            )) : null}
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

const RecentPost = ({event}) => {
  console.log('event', event);
  return(
    <>
    <Stack direction="column" spacing={1}>
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Badge label={event.startDate.toDateString()} />
      <Typography variant="h5" component="div">
        {event.name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {event.summary}
      </Typography>
      <Typography variant="body2">
        {event.material}
        <br />
      </Typography>
    </CardContent>
    </Card>
    </Stack>
    </>
  )
};

export default BlogPage;
