import { v4 as uuidv4 } from 'uuid';

const DB = {
    Blog: 'Blog',
    Event: 'Event',
}

export const saveBlog = (blog) => {
    let blogs = JSON.parse(localStorage.getItem(DB.Blog)) ?? [];
    if(blog.id) {
        blogs = blogs.filter(b => b.id !== blog.id);
    }
    localStorage.setItem(DB.Blog, JSON.stringify([{id: blog.id ?? uuidv4(), ...blog}, ...blogs]));
}

export const getBlogById = (id) => {
    let blogs = JSON.parse(localStorage.getItem(DB.Blog)) ?? [];
    return blogs.find(b => b.id === id);
}

export const deleteBlogById = (id) => {
    let blogs = JSON.parse(localStorage.getItem(DB.Blog)) ?? [];
    blogs = blogs.filter(b => b.id !== id);
    localStorage.setItem(DB.Blog, JSON.stringify(blogs));
}

export const saveEvent = (event) => {
    let events = JSON.parse(localStorage.getItem(DB.Event)) ?? [];
    if(event.id) {
        events = events.filter(e => e.id !== event.id);
    }
    localStorage.setItem(DB.Event, JSON.stringify([{id: event.id ?? uuidv4(), ...event}, ...events]));
}

export const getEventById = (id) => {
    let events = JSON.parse(localStorage.getItem(DB.Event)) ?? [];
    return events.find(b => b.id === id);
}

export const deleteEventById = (id) => {
    let events = JSON.parse(localStorage.getItem(DB.Event)) ?? [];
    events = events.filter(b => b.id !== id);
    localStorage.setItem(DB.Event, JSON.stringify(events));
}




