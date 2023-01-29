const compress_images = require('compress-images');
const path = require("path");

const convertToUnix = p => p.split(path.sep).join(path.posix.sep)

// NOTE:can't compress webp, only jpg,png,svg,gif
const SOURCE = path.join(process.cwd(), "/**/*.{jpg,webp,JPG,jpeg,png,JPEG}") || 'src/**/*.{jpg,JPG,jpeg,png,JPEG}';
const OUTPUT = path.join(process.cwd(), "/build/") || 'build/';

// console.log(convertToUnix(SOURCE), convertToUnix(OUTPUT))
// console.log(__dirname)
// console.log(process.cwd().split(path.sep).join(path.posix.sep))

compress_images(
  convertToUnix(SOURCE),
  convertToUnix(OUTPUT),
  { compress_force: false, statistic: true, autoupdate: true },
  false,
  { jpg: { engine: "webp", command: false } },
  { png: { engine: "webp", command: false } },
  { svg: { engine: false, command: false } },
  { gif: { engine: false, command: false } },
  function (err) {
    if (err === null) {
      console.log("🎉 Conversion successful")
    } else {
      console.error(err);
    }
  }
);