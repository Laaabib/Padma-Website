const fs = require('fs');

const files = [
  './components/Hero.tsx',
  './components/About.tsx',
  './components/Rooms.tsx',
  './components/Gallery.tsx',
  './components/Activities.tsx',
  './components/Dining.tsx',
  './components/Testimonials.tsx',
  './components/Footer.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // specifically known files that changed:
    content = content.replace(/\/Superior Delux Washroom\.jpg/g, '/Superior Delux.png');
    content = content.replace(/\/Superior Delux\.jpg/g, '/Superior Delux.png');
    content = content.replace(/\/Swimming pool\.jpg/g, '/Swimming pool.png');
    content = content.replace(/\/all day dining\.png/g, '/Restaurant Rivera.png');
    content = content.replace(/\/Lobby Area\.JPG/g, '/Lobby Area.png');
    content = content.replace(/\/Lobby Area 2\.jpeg/g, '/Lobby Area 2.png');
    content = content.replace(/\/Water Body\.JPG/g, '/Water Body.png');
    content = content.replace(/\/Banquet Hall\.JPG/g, '/Banquet Hall.png');
    content = content.replace(/\/Homepage\.jpg/g, '/Homepage (2).png');
    content = content.replace(/\/Family Connecting\.JPG/g, '/Family Connecting.png');
    content = content.replace(/\/Presidential Suite-1\.png/g, '/Presidential Suite-1.png');

    // Also replace unsplash paths
    content = content.replace(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?[a-zA-Z0-9=&]+/g, '/Water Body.png');

    // Remove unsplash ones and fill them with some local
    fs.writeFileSync(file, content);
  }
});
