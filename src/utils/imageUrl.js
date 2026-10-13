export const imageUrl = (file, small = false) =>
  `${import.meta.env.BASE_URL}projects/${file}${small ? "-sm" : ""}.webp`;
