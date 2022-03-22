import cloudinary from 'cloudinary/cloudinary'

cloudinary.config({
  cloud_name: 'thalles',
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
})
