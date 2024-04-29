export const clients = [...new Array(10)].map((client, index) => ({
  href: `/clients/${index + 1}.png`,
}));
