import { videos } from '../db';

export const home = (req, res) => {
  res.render('home', { pageTitle: 'Home', videos });
};
export const search = (req, res) => {
  // console.log(req.query.term);
  const {
    query: { term: searchingBy },
  } = req;
  res.render('search', { pageTitle: 'Search', searchingBy });
};
export const upload = (req, res) =>
  res.render('upload', { pageTitle: 'Upload' });
export const videoDetail = (req, res) =>
  res.render('videoDetail', {
    pageTitle: 'Video Detail',
  });
export const editVideo = (req, res) =>
  res.render('editVideo', {
    editVideo: 'Edit Video',
  });
export const deleteVideo = (req, res) =>
  res.render('deleteVideox', {
    deleteVideo: 'Delete Video',
  });
