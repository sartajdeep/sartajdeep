# Photos Folder

Add your photos here. 

## Instructions:
1. Place your image files in this folder (JPG, PNG, WebP, etc.)
2. Update the `photoData` array in `src/Photos.jsx` with:
   - Photo filename (e.g., `photo1.jpg`)
   - Alt text describing the photo (e.g., "In the picture - Sartajdeep Singh with Neeraj Aggarwal")

## Example:
```javascript
const photoData = [
  {
    id: 1,
    src: '/Photos/photo1.jpg',
    alt: 'In the picture - Sartajdeep Singh with Neeraj Aggarwal'
  },
  {
    id: 2,
    src: '/Photos/photo2.jpg',
    alt: 'Group photo at Plaksha University - UG 24 batch'
  },
  // Add more photos...
];
```

## Features:
- ✨ Hover over any photo to see its alt text
- 📱 Responsive design for all devices
- 🌙 Dark mode support
- 🎨 Smooth animations and transitions
